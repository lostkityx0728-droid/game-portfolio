/* V — One coordinated motion timeline. Native scrolling; optional GPU rendering.
 * All essential navigation and video controls work without this layer.
 */
(() => {
  'use strict';
  const root=document.documentElement, $=(s,p=document)=>p.querySelector(s), $$=(s,p=document)=>[...p.querySelectorAll(s)];
  const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
  const smooth=(a,b,v)=>{v=clamp((v-a)/(b-a));return v*v*(3-2*v);};
  const lerp=(a,b,t)=>a+(b-a)*t;
  const reduce=matchMedia('(prefers-reduced-motion: reduce)'), fine=matchMedia('(hover:hover) and (pointer:fine)');
  let preference='on';try{preference=localStorage.getItem('portfolio-motion')||'on';}catch{}
  let motion=true, raf=0,lastFrame=0,lastY=scrollY,speed=0,p=0,phase=0,hidden=document.hidden,disposed=false,sceneAnimating=false;
  const exp=$('.experience'),traces=$('.traces'),header=$('.site-header'),opening=$('.opening-copy'),baseline=$('.opening-baseline');
  const reveal=$('.world-reveal-copy'),enter=$('.world-enter'),caption=$('.world-caption'),rail=$('.world-rail b');
  const chapters=$$('.trace-chapter'),seeks=$$('[data-seek]'),traceImg=$('.trace-images');
  const visuals=window.PortfolioVisuals;
  let pointer=[.5,.5],mouse=[.5,.5],tracePointer=[.5,.5],traceMouse=[.5,.5];
  let transitioning=false,menuAnimating=false;
  const lang=()=>root.lang==='zh-CN'?'zh':'en';
  const text=k=>window.PORTFOLIO?.languages[lang()]?.[k]||window.PORTFOLIO?.languages.en?.[k]||k;
  function applyMotion(){
    motion=preference!=='off'&&!reduce.matches;root.dataset.motion=motion?'on':'off';
    $$('.motion-toggle').forEach(b=>{b.setAttribute('aria-pressed',String(motion));b.disabled=reduce.matches;const label=$('[data-motion-label]',b);if(label)label.textContent=text(reduce.matches?'motion.reduced':motion?'motion.on':'motion.off');});
    if(!motion){visuals?.pause();p=0;phase=0;chapters.forEach(c=>{c.style.cssText='';c.removeAttribute('aria-hidden');});}
    layoutChapters();draw(performance.now(),true);schedule();
  }
  $$('.motion-toggle').forEach(b=>b.addEventListener('click',()=>{preference=motion?'off':'on';try{localStorage.setItem('portfolio-motion',preference);}catch{}applyMotion();}));
  reduce.addEventListener('change',applyMotion);
  root.classList.add('experience-enhanced','motion-ready');
  function splitText(){
    const nodes=$$('.statement h2 [data-i18n], .index-head h2[data-split]');
    nodes.forEach(el=>{
      const original=el.textContent;el.textContent='';
      const pieces=lang()==='zh'?Array.from(original):original.split(/(\s+)/);
      pieces.forEach(piece=>{if(/^\s+$/.test(piece)){el.append(document.createTextNode(piece));return;}const span=document.createElement('span');span.className='split-word';span.dataset.word='';span.textContent=piece;el.append(span);});
    });
  }
  document.addEventListener('portfolio:language',()=>{splitText();applyMotion();});
  splitText();
  function layoutChapters(){
    const holder=$('.trace-copy'),link=$('.trace-link');
    if(!holder||!link)return;
    if(!motion){holder.style.removeProperty('min-height');link.style.removeProperty('top');return;}
    const height=Math.max(...chapters.map(c=>c.getBoundingClientRect().height),120);
    const gap=innerWidth<561?29:42;
    holder.style.minHeight=(height+gap+40)+'px';link.style.setProperty('top',(height+gap)+'px','important');
  }
  function updateWords(){
    $$('.statement h2,.index-head h2').forEach(block=>{
      const words=$$('[data-word]',block),r=block.getBoundingClientRect();
      const amount=motion?clamp((innerHeight*.88-r.top)/(Math.max(250,r.height+innerHeight*.18))):1;
      words.forEach((w,i)=>{const lit=amount>(i/Math.max(1,words.length))*.83;w.classList.toggle('lit',lit);if(!block.closest('.statement'))w.style.opacity=lit||!motion?'1':'.25';});
    });
    const mark=$('.statement-mark');if(mark){const r=mark.getBoundingClientRect();mark.style.rotate=motion?`${clamp((innerHeight-r.top)/innerHeight)*95-30}deg`:'0deg';}
  }
  function draw(now,forced=false){
    if(hidden||disposed)return;
    if(!forced&&now-lastFrame<32)return;
    const dt=Math.min(80,now-lastFrame||32);lastFrame=now;
    const home=root.dataset.page==='home',y=scrollY;sceneAnimating=false;
    speed=lerp(speed,clamp((y-lastY)/Math.max(dt,1),-6,6),.12);lastY=y;
    header?.classList.toggle('is-scrolled',y>28);
    mouse=mouse.map((v,i)=>lerp(v,pointer[i],.08));traceMouse=traceMouse.map((v,i)=>lerp(v,tracePointer[i],.12));
    if(home&&exp){
      const r=exp.getBoundingClientRect(),range=Math.max(1,exp.offsetHeight-innerHeight),target=motion?clamp(-r.top/range):0;
      p=forced?target:lerp(p,target,.17);
      if(r.bottom>0&&r.top<innerHeight){
        sceneAnimating=motion;
        const entry=1-smooth(.015,.255,p),scene=smooth(.34,.63,p);
        opening.style.opacity=entry;opening.style.transform=`translateY(${-p*105}px)`;opening.style.filter=`blur(${smooth(.12,.3,p)*4}px)`;
        opening.inert=entry<.03;
        baseline.style.opacity=1-smooth(.06,.25,p);baseline.inert=p>.25;
        reveal.style.opacity=scene;reveal.style.transform=`translateY(${(1-scene)*70}px)`;reveal.setAttribute('aria-hidden',String(scene<.9));
        enter.style.opacity=scene;enter.style.visibility=scene>.85?'visible':'hidden';enter.tabIndex=scene>.85?0:-1;
        caption.style.opacity=smooth(.5,.76,p);rail.style.transform=`scaleY(${p})`;$('.experience-sticky').style.setProperty('--scene',scene);
        visuals?.hero(motion?now/1000:9,p,mouse,motion&&!$('dialog[open]'));
        if(!visuals?.heroOK()){
          const fallback=$('.world-fallback');fallback.style.backgroundImage=p>.2?`linear-gradient(#17231255,#17231255),url("${window.portfolioAsset?.('assets/wonderwebby-cover.webp')||'assets/wonderwebby-cover.webp'}")`:'';fallback.style.backgroundSize='cover';fallback.style.backgroundPosition='center';
        }
      }else visuals?.pause();
    }else visuals?.pause();
    if(home&&traces){
      const r=traces.getBoundingClientRect(),target=motion?clamp((-r.top/Math.max(1,traces.offsetHeight-innerHeight))*2.6-.25,0,2):phase;
      phase=forced?target:lerp(phase,target,.16);
      if(r.bottom>0&&r.top<innerHeight){
        sceneAnimating=motion;
        const active=Math.round(phase);
        visuals?.traces(motion?now/1000:9,phase,traceMouse,motion?speed:0);
        if(motion)chapters.forEach((c,i)=>{
          const dist=phase-i,opacity=i===active?1-smooth(.12,.5,Math.abs(dist))*.42:0;
          c.style.opacity=opacity;c.style.transform=`translateY(${-dist*24}px)`;c.setAttribute('aria-hidden',String(i!==active));
        });
        if(!visuals?.traceOK())$$('.trace-stills img').forEach((img,i)=>img.style.display=i===active?'block':'none');
        const n=$('#trace-image-number');if(n)n.textContent='0'+(active+1);
        seeks.forEach((b,i)=>{b.setAttribute('aria-pressed',String(i===active));b.style.setProperty('--fill',String(clamp(phase-i+1)));});
        traceImg.style.transform=motion&&fine.matches?`perspective(1300px) rotateY(${(traceMouse[0]-.5)*3}deg) rotateX(${(traceMouse[1]-.5)*-2}deg) rotateZ(${speed*.13}deg)`:'none';
      }
    }
    updateWords();
  }
  function loop(now){raf=0;if(hidden||disposed)return;draw(now,!sceneAnimating);if(sceneAnimating)schedule();}
  function schedule(){if(!raf&&!hidden&&!disposed)raf=requestAnimationFrame(loop);}
  window.addEventListener('scroll',schedule,{passive:true});
  window.addEventListener('resize',()=>{$$('.row-preview').forEach(e=>{e.style.removeProperty('left');e.style.removeProperty('top');e.style.removeProperty('transform');});layoutChapters();draw(performance.now(),true);schedule();},{passive:true});
  document.addEventListener('visibilitychange',()=>{hidden=document.hidden;if(hidden){cancelAnimationFrame(raf);raf=0;visuals?.pause();}else schedule();});
  document.addEventListener('pointermove',e=>{
    const tx=e.clientX,ty=e.clientY;pointer=[tx/innerWidth,1-ty/innerHeight];
    if(traceImg){const r=traceImg.getBoundingClientRect();tracePointer=[clamp((tx-r.left)/r.width),clamp(1-(ty-r.top)/r.height)];}
    const row=e.target.closest('.project-row');
    if(row&&motion&&fine.matches){const r=row.getBoundingClientRect(),image=$('.row-preview',row);if(image){image.style.left=clamp(tx-r.left,r.width*.46,r.width*.78)+'px';image.style.top=clamp(ty-r.top,20,r.height-15)+'px';image.style.transform=`translate(-50%,-50%) rotate(${(tx-r.left-r.width*.5)*.015-6}deg)`;}}
  },{passive:true});
  document.addEventListener('pointerleave',()=>{pointer=[.5,.5];tracePointer=[.5,.5];});
  // Accessible scene controls mirror the scroll timeline, without capturing wheel or touch events.
  seeks.forEach(b=>b.addEventListener('click',()=>{
    const index=Number(b.dataset.seek);
    if(motion){const start=traces.getBoundingClientRect().top+scrollY;const progress=(index+.25)/2.6;scrollTo({top:start+Math.max(0,traces.offsetHeight-innerHeight)*progress,behavior:'smooth'});}
    else{phase=index;chapters[index].scrollIntoView({block:'center',behavior:'instant'});draw(performance.now(),true);}
  }));
  $('[data-journey-start]')?.addEventListener('click',e=>{if(!motion)return;e.preventDefault();const start=exp.getBoundingClientRect().top+scrollY;scrollTo({top:start+(exp.offsetHeight-innerHeight)*.72,behavior:'smooth'});});
  // A curved, two-phase curtain shared by menu and page navigation.
  const curtain=$('.page-curtain'),path=$('path',curtain||document),signature=curtain?.querySelector(':scope > span');
  const hasPopover=!!curtain?.showPopover;
  if(hasPopover)curtain.setAttribute('popover','manual');
  const sleep=ms=>new Promise(resolve=>setTimeout(resolve,ms));
  const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
  function animatePath(duration,cover){return new Promise(resolve=>{
    const start=performance.now();function step(now){const t=clamp((now-start)/duration),e=ease(t),bend=Math.sin(Math.PI*t)*27;
      if(cover){const y=100-e*122;path.setAttribute('d',`M0 ${y} Q50 ${y+bend} 100 ${y} L100 100 L0 100Z`);}
      else{const y=100-e*125;path.setAttribute('d',`M0 0 L100 0 L100 ${y} Q50 ${y-bend} 0 ${y}Z`);}
      if(signature)signature.style.opacity=cover?String(smooth(.5,1,t)):String(1-smooth(0,.4,t));
      if(t<1)requestAnimationFrame(step);else resolve();
    }requestAnimationFrame(step);
  });}
  async function sweep(change){
    if(!motion||!curtain){change();return;}
    if(transitioning)return;
    transitioning=true;curtain.classList.add('active');if(hasPopover)try{curtain.showPopover();}catch{}
    try{
      await animatePath(510,true);change();
      if(hasPopover){try{curtain.hidePopover();curtain.showPopover();}catch{}}
      await sleep(65);await animatePath(590,false);
    }finally{curtain.classList.remove('active');if(hasPopover)try{curtain.hidePopover();}catch{}transitioning=false;}
  }
  const menu=$('#menu-dialog'),menuButton=$('.menu-button'),menuClose=$('.menu-close');
  function closeImmediate(){if(menu?.open){menu.close();menuButton?.setAttribute('aria-expanded','false');if(!$('#lightbox')?.open)document.body.classList.remove('no-scroll');}}
  window.closePortfolioMenu=closeImmediate;
  menuButton?.addEventListener('click',()=>{
    if(transitioning||menuAnimating)return;
    if(!menu?.showModal){location.href='index.html#games';return;}
    menuAnimating=true;visuals?.pause();$$('video').forEach(v=>v.pause());
    sweep(()=>{menu.classList.add('preparing');menu.showModal();document.body.classList.add('no-scroll');menuButton.setAttribute('aria-expanded','true');menuClose?.focus({preventScroll:true});requestAnimationFrame(()=>requestAnimationFrame(()=>menu.classList.remove('preparing')));}).finally(()=>{menuAnimating=false;});
  });
  async function closeAnimated(){if(transitioning||menuAnimating)return;menuAnimating=true;await sweep(closeImmediate);menuAnimating=false;menuButton?.focus({preventScroll:true});}
  menuClose?.addEventListener('click',closeAnimated);
  menu?.addEventListener('cancel',e=>{e.preventDefault();closeAnimated();});
  menu?.addEventListener('close',()=>{menuButton?.setAttribute('aria-expanded','false');if(!$('#lightbox')?.open)document.body.classList.remove('no-scroll');});
  // Intercept only this site's explicit links; downloads, modifiers and external links are untouched.
  document.addEventListener('click',e=>{
    const a=e.target.closest('a[href]');if(!a||e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||a.target==='_blank'||a.hasAttribute('download')||a.hasAttribute('data-lightbox')||a.hasAttribute('data-journey-start'))return;
    const href=a.getAttribute('href');const portable=root.dataset.preview==='true';
    const inMenu=!!a.closest('.menu-links');
    const knownPages=['index.html',...(window.PORTFOLIO?.projects||[]).map(project=>project.file)];
    const isPage=portable?((href.startsWith('#project')&&root.dataset.page!=='project')||(href.startsWith('#home')&&root.dataset.page==='project')):knownPages.includes(href.split(/[?#]/)[0]);
    if(!inMenu&&!isPage)return;
    if(!motion){if(inMenu)closeImmediate();return;}
    e.preventDefault();if(transitioning)return;
    sweep(()=>{
      closeImmediate();
      if(portable){if(location.hash===href){document.querySelector(href.startsWith('#home-')?'#'+href.slice(6):'#main')?.scrollIntoView({behavior:'instant'});}else location.hash=href;}
      else{const dest=new URL(href,location.href);if(dest.pathname===location.pathname){if(dest.hash)$(dest.hash)?.scrollIntoView({behavior:'instant'});else scrollTo({top:0,behavior:'instant'});history.pushState(null,'',dest);}else location.href=href;}
    });
  });
  document.addEventListener('portfolio:route',()=>{p=0;phase=0;lastY=scrollY;visuals?.pause();draw(performance.now(),true);schedule();});
  window.addEventListener('pagehide',()=>{disposed=true;cancelAnimationFrame(raf);visuals?.pause();});
  window.addEventListener('pageshow',()=>{disposed=false;hidden=false;schedule();});
  window.PORTFOLIO_DIAGNOSTICS={get motion(){return motion;},get tickerActive(){return !!raf;},get opening(){return p;},get chapter(){return phase;},get renderers(){return visuals?.renderers()||['static','static'];}};
  applyMotion();schedule();
})();

/* Exact-position pointer and a short, demand-driven afterimage.
 * No cursor styles apply until a real mouse is inside eligible page content.
 * Layer order: site header 40, grain 55, pointer 60; native top-layer UI wins.
 */
(() => {
  'use strict';
  const root = document.documentElement;
  const precise = matchMedia('(hover: hover) and (pointer: fine)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const forced = matchMedia('(forced-colors: active)');
  // Only the aria-hidden home image renderer is decorative; other canvases remain native.
  const nativeArea = 'input, textarea, select, [contenteditable]:not([contenteditable="false"]), iframe, video, audio, canvas:not(.trace-images > #trace-canvas[aria-hidden="true"]), dialog, [data-game-session], [data-cursor-native], button:disabled, [aria-disabled="true"]';
  const editable = 'input, textarea, select, [contenteditable]:not([contenteditable="false"])';
  const action = 'a[href], button:not(:disabled), summary, [role="button"]:not([aria-disabled="true"]), [data-lightbox]';
  const overlay = document.createElement('div');
  overlay.className = 'folio-pointer';
  overlay.setAttribute('aria-hidden', 'true');
  const dot = document.createElement('i');
  dot.className = 'folio-pointer-dot';
  const face = document.createElement('b');
  face.className = 'folio-pointer-face';
  dot.append(face);
  const tails = Array.from({length: 3}, () => {
    const node = document.createElement('i');
    node.className = 'folio-pointer-tail';
    overlay.append(node);
    return node;
  });
  overlay.append(dot);
  document.body.append(overlay);
  let x = 0, y = 0, movedAt = 0, raf = 0, drawn = 0, inside = false;
  let current = null, keyboard = false, pressed = false, visible = false;
  let history = [], disposed = false;

  function eligible(target) {
    return !disposed && inside && precise.matches && !reduced.matches && !forced.matches &&
      root.dataset.motion !== 'off' && !document.hidden && !document.pointerLockElement && document.hasFocus() && !keyboard &&
      target instanceof Element && target !== root && !target.closest(nativeArea) &&
      !document.activeElement?.matches(editable) &&
      !document.querySelector('dialog[open], .page-curtain.active, [popover]:popover-open');
  }

  function clear() {
    cancelAnimationFrame(raf); raf = 0; history = []; pressed = false; visible = false;
    root.dataset.folioPointer = 'native';
    overlay.classList.remove('is-action', 'is-pressed');
    tails.forEach(tail => tail.style.opacity = '0');
  }

  function render(now) {
    raf = 0;
    if (!visible || !eligible(current)) { clear(); return; }
    drawn++;
    dot.style.transform = `translate3d(${x}px,${y}px,0)`;
    const age = Math.max(0, now - movedAt);
    const fade = Math.max(0, 1 - age / 100);
    const opacities = [.33, .21, .12];
    tails.forEach((tail, index) => {
      const lag = [18, 36, 54][index];
      const sample = [...history].reverse().find(point => point.time <= movedAt - lag);
      if (!sample || fade === 0) { tail.style.opacity = '0'; return; }
      let dx = sample.x - x, dy = sample.y - y;
      const distance = Math.hypot(dx, dy);
      if (distance < 2) { tail.style.opacity = '0'; return; }
      const cap = Math.min(distance, 8 + index * 5);
      dx *= cap / distance; dy *= cap / distance;
      tail.style.transform = `translate3d(${x + dx}px,${y + dy}px,0)`;
      tail.style.opacity = String(opacities[index] * fade);
    });
    if (age < 104 && history.length > 1) raf = requestAnimationFrame(render);
    else { history = history.slice(-1); tails.forEach(tail => tail.style.opacity = '0'); }
  }

  function show(target, animate) {
    current = target;
    if (!eligible(target)) { clear(); return; }
    visible = true;
    root.dataset.folioPointer = 'active';
    overlay.classList.toggle('is-action', !!target.closest(action));
    overlay.classList.toggle('is-pressed', pressed);
    // The dot never eases behind the click position. Only its afterimage lingers.
    dot.style.transform = `translate3d(${x}px,${y}px,0)`;
    if (animate && !raf) raf = requestAnimationFrame(render);
  }

  function move(event) {
    if (event.pointerType !== 'mouse') { inside = false; clear(); return; }
    inside = true; keyboard = false;
    x = event.clientX; y = event.clientY; movedAt = performance.now();
    history.push({x, y, time: movedAt});
    history = history.filter(point => movedAt - point.time <= 90).slice(-12);
    show(event.target, true);
  }

  function reconcile() {
    if (!inside || !current?.isConnected || !eligible(current)) { clear(); return; }
    const target = document.elementFromPoint(x, y);
    if (target) show(target, false);
  }

  document.addEventListener('pointermove', move, {passive: true});
  document.addEventListener('pointerover', event => {
    if (event.pointerType !== 'mouse') return;
    inside = true; x = event.clientX; y = event.clientY;
    if (!keyboard) show(event.target, false);
  }, {passive: true});
  document.addEventListener('pointerdown', event => {
    if (event.pointerType !== 'mouse') { inside = false; clear(); return; }
    pressed = event.button === 0;
    show(event.target, false);
  }, {passive: true});
  document.addEventListener('pointerup', event => {
    pressed = false;
    if (event.pointerType === 'mouse' && visible) show(event.target, false);
  }, {passive: true});
  document.addEventListener('pointercancel', () => { inside = false; clear(); });
  document.addEventListener('pointerout', event => {
    if (!event.relatedTarget) { inside = false; clear(); }
  });
  document.addEventListener('keydown', event => {
    if (!event.metaKey && !event.ctrlKey && !event.altKey) { keyboard = true; clear(); }
  }, true);
  document.addEventListener('focusin', () => {
    if (document.activeElement?.matches(editable)) clear();
  });
  document.addEventListener('focusout', () => queueMicrotask(reconcile));
  window.addEventListener('blur', () => { inside = false; clear(); });
  window.addEventListener('resize', () => { inside = false; clear(); }, {passive: true});
  document.addEventListener('visibilitychange', () => { inside = false; clear(); });
  document.addEventListener('portfolio:route', () => { inside = false; clear(); });
  document.addEventListener('fullscreenchange', () => { inside = false; clear(); });
  document.addEventListener('pointerlockchange', () => { inside = false; clear(); });
  window.addEventListener('pagehide', () => { disposed = true; inside = false; clear(); });
  window.addEventListener('pageshow', () => { disposed = false; inside = false; clear(); });
  for (const query of [precise, reduced, forced]) query.addEventListener('change', () => { inside = false; clear(); });

  const modeObserver = new MutationObserver(reconcile);
  modeObserver.observe(root, {attributes: true, attributeFilter: ['data-motion']});
  const uiObserver = new MutationObserver(reconcile);
  document.querySelectorAll('dialog, .page-curtain, [data-game-session]').forEach(node => {
    uiObserver.observe(node, {attributes: true, attributeFilter: ['open', 'class', 'data-state'], childList: true, subtree: true});
  });
  clear();
  window.PORTFOLIO_POINTER_DIAGNOSTICS = Object.freeze({
    get visible() { return visible; },
    get enabled() { return precise.matches && !reduced.matches && !forced.matches && root.dataset.motion !== 'off'; },
    get tickerActive() { return !!raf; },
    get frames() { return drawn; },
    get state() { return root.dataset.folioPointer; },
    get tailCount() { return tails.filter(node => Number(node.style.opacity) > 0).length; }
  });
})();
