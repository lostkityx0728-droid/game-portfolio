/* Progressive GSAP presentation. Native scroll, multipage navigation and dialogs.
 * No pinning, custom cursor, wheel capture, GPU scene or perpetual render loop.
 */
(() => {
  'use strict';
  const root=document.documentElement, $=(s,p=document)=>p.querySelector(s), $$=(s,p=document)=>[...p.querySelectorAll(s)];
  const reduce=matchMedia('(prefers-reduced-motion: reduce)'), systemTheme=matchMedia('(prefers-color-scheme: light)');
  const gsap=window.gsap, ST=window.ScrollTrigger;
  const storage={get(k){try{return localStorage.getItem(k)}catch{return null}},set(k,v){try{localStorage.setItem(k,v)}catch{}}};
  let preference=storage.get('portfolio-motion')||'on', themePreference=storage.get('portfolio-theme')||'dark';
  let motion=false, media=null, leaving=false, exitTimer=0, menuTween=null, revealCount=0, revealTargets=[];
  const lang=()=>root.lang==='zh-CN'?'zh':'en';
  const text=k=>window.PORTFOLIO?.languages[lang()]?.[k]||window.PORTFOLIO?.languages.en?.[k]||k;
  function applyTheme(){
    const theme=themePreference||(systemTheme.matches?'light':'dark'); root.dataset.theme=theme;
    $('[name="theme-color"]')?.setAttribute('content',theme==='dark'?'#242621':'#e8e9e1');
    $$('[data-theme-toggle]').forEach(b=>{b.setAttribute('aria-label',text('design.theme.label'));b.setAttribute('aria-pressed',String(theme==='light'));$('[data-theme-label]',b).textContent=text(theme==='dark'?'design.theme.light':'design.theme.dark')});
  }
  $$('[data-theme-toggle]').forEach(b=>b.addEventListener('click',()=>{themePreference=root.dataset.theme==='light'?'dark':'light';storage.set('portfolio-theme',themePreference);applyTheme()}));
  systemTheme.addEventListener('change',applyTheme);
  // Menu controls remain available even if both vendored libraries fail to load.
  const menu=$('#menu-dialog'), menuButton=$('.menu-button'), menuClose=$('.menu-close');
  function clearMenuTween(){menuTween?.revert();menuTween=null}
  function closeMenu(focus=false){clearMenuTween();if(menu?.open)menu.close();menuButton?.setAttribute('aria-expanded','false');if(!$('#lightbox')?.open)document.body.classList.remove('no-scroll');if(focus)menuButton?.focus({preventScroll:true})}
  window.closePortfolioMenu=closeMenu;
  menuButton?.addEventListener('click',()=>{
    if(!menu?.showModal){location.href='index.html#games';return}if(menu.open){closeMenu(true);return}
    clearMenuTween();$$('video').forEach(v=>v.pause());menu.showModal();document.body.classList.add('no-scroll');menuButton.setAttribute('aria-expanded','true');menuClose?.focus({preventScroll:true});
    if(motion&&gsap){menuTween=gsap.timeline({defaults:{duration:.38,ease:'power3.out'}}).from('.menu-links>a',{y:20,opacity:.45,stagger:.045,clearProps:'transform,opacity'},0);const picture=$('.menu-picture',menu);if(picture&&innerWidth>=768)menuTween.from(picture,{y:12,opacity:.65,clearProps:'transform,opacity'},'<')}
  });
  menuClose?.addEventListener('click',()=>closeMenu(true));
  menu?.addEventListener('cancel',e=>{e.preventDefault();closeMenu(true)});
  menu?.addEventListener('close',()=>{clearMenuTween();menuButton?.setAttribute('aria-expanded','false');if(!$('#lightbox')?.open)document.body.classList.remove('no-scroll')});
  $('.menu-links')?.addEventListener('click',e=>{if(e.target.closest('a[href]'))closeMenu()});
  if(gsap&&ST)gsap.registerPlugin(ST);
  function teardown(){media?.revert();media=null;clearMenuTween();revealTargets=[];revealCount=0}
  function collectionLayout(){const rows=$('.index-rows');rows?.classList.toggle('is-filtered',$('[data-filter][aria-pressed="true"]')?.dataset.filter!=='all')}
  function refresh(){if(motion&&ST)ST.refresh()}
  function installMotion(){
    if(!motion||!gsap||!ST)return;
    media=gsap.matchMedia();
    media.add({desktop:'(min-width: 768px)',mobile:'(max-width: 767px)',reduced:'(prefers-reduced-motion: reduce)'},ctx=>{
      if(ctx.conditions.reduced||!motion)return;
      // Identity precedes artwork. Anchor entry and browser Back skip the intro.
      const nav=performance.getEntriesByType('navigation')[0];
      if(!location.hash&&nav?.type!=='back_forward'&&scrollY<50){
        const entrance=gsap.timeline({defaults:{duration:.6,ease:'power3.out',clearProps:'transform,opacity'}});
        const identity=$$('.art-discipline,.art-intro h1,.art-intro-text,.folio-cta,.project-title-row h1,.project-title-row>div');
        entrance.addLabel('identity',0);if(identity.length)entrance.from(identity,{y:22,opacity:.6,stagger:.06},'identity');
        const artwork=$('.art-stage,.project-media,.case-hero-media');if(artwork)entrance.from(artwork,{y:18,opacity:.65},'identity+=.12');
      }
      // Content stays readable throughout every one-shot reveal.
      const targets=$$('.gallery-section'), cleanups=[];revealTargets=targets;revealCount=0;
      targets.forEach(target=>{
        if(target.getBoundingClientRect().top<innerHeight*.95)return;
        const tween=gsap.from(target,{y:ctx.conditions.desktop?24:14,opacity:.65,duration:.55,ease:'power3.out',clearProps:'transform,opacity',scrollTrigger:{trigger:target,start:'top 94%',once:true,toggleActions:'play none none none'}});
        revealCount++;const focused=()=>{tween.progress(1);tween.scrollTrigger?.kill()};target.addEventListener('focusin',focused);cleanups.push(()=>target.removeEventListener('focusin',focused));
      });
      // Reuse one pair of arrow tweens per link; no global pointer follower.
      if(ctx.conditions.desktop&&matchMedia('(hover:hover) and (pointer:fine)').matches){
        $$('.project-row,.folio-cta').forEach(link=>{
          const arrow=$('.icon',link)||$('span:last-child',link);if(!arrow)return;
          const x=gsap.quickTo(arrow,'x',{duration:.25,ease:'power2.out'}),y=gsap.quickTo(arrow,'y',{duration:.25,ease:'power2.out'});
          const enter=()=>{x(4);y(-4)},leave=()=>{x(0);y(0)};
          for(const [event,handler] of [['pointerenter',enter],['pointerleave',leave],['focus',enter],['blur',leave]]){link.addEventListener(event,handler);cleanups.push(()=>link.removeEventListener(event,handler))}
        });
      }
      ST.create({start:28,end:'max',onToggle:t=>$('.site-header')?.classList.toggle('is-scrolled',t.isActive)});
      return()=>cleanups.forEach(cleanup=>cleanup());
    },document.body);
  }
  function updateMotionLabels(){$$('.motion-toggle').forEach(b=>{b.setAttribute('aria-pressed',String(motion));b.disabled=reduce.matches;const label=$('[data-motion-label]',b);if(label)label.textContent=text(reduce.matches?'motion.reduced':motion?'motion.on':'motion.off')})}
  function applyMotion(){teardown();motion=preference!=='off'&&!reduce.matches;root.dataset.motion=motion?'on':'off';root.classList.toggle('gsap-ready',Boolean(gsap&&ST));updateMotionLabels();collectionLayout();installMotion()}
  $$('.motion-toggle').forEach(b=>b.addEventListener('click',()=>{preference=motion?'off':'on';storage.set('portfolio-motion',preference);applyMotion()}));
  reduce.addEventListener('change',applyMotion);
  document.addEventListener('portfolio:language',()=>{applyTheme();updateMotionLabels();refresh()});
  document.addEventListener('portfolio:collection',()=>{collectionLayout();revealTargets.forEach(target=>{if(target.matches('.project-row')){gsap?.killTweensOf(target);target.style.removeProperty('transform');target.style.removeProperty('opacity')}});refresh()});
  // Media aspect ratios reserve their layout before decoding. Refreshing on each
  // lazy image load would interrupt an in-flight native smooth anchor scroll.
  document.fonts?.ready.then(refresh);
  // Short exit feedback, only for a normal same-site different-page click.
  // All modifiers, anchors, downloads, browser history and focus remain native.
  document.addEventListener('click',e=>{
    const link=e.target.closest('a[href]');if(!link||e.defaultPrevented||e.button!==0||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||link.target||link.hasAttribute('download')||link.hasAttribute('data-lightbox'))return;
    const dest=new URL(link.href,location.href);if(dest.origin!==location.origin||dest.pathname===location.pathname||!dest.pathname.endsWith('.html')||!motion||!gsap||reduce.matches)return;
    e.preventDefault();if(leaving)return;leaving=true;
    const navigate=()=>{if(exitTimer)clearTimeout(exitTimer);location.assign(dest.href)};exitTimer=setTimeout(navigate,180);
    gsap.to('main',{opacity:.75,y:-5,duration:.14,ease:'power2.in',overwrite:'auto',onComplete:navigate});
  });
  window.addEventListener('pagehide',()=>{if(exitTimer)clearTimeout(exitTimer);exitTimer=0;teardown()});
  window.addEventListener('pageshow',e=>{leaving=false;$('main')?.style.removeProperty('opacity');$('main')?.style.removeProperty('transform');if(e.persisted)applyMotion()});
  window.PORTFOLIO_DIAGNOSTICS={get motion(){return motion},get opening(){return 0},get chapter(){return 0},get renderers(){return ['static','static']},get gsapVersion(){return gsap?.version||null},get triggers(){return ST?.getAll().length||0},get revealCount(){return revealCount}};
  // Native disclosure keeps five categories usable without taking over the mobile viewport.
  const filterDetails=$('.art-filter-details');
  if(filterDetails){const mobile=matchMedia('(max-width:767px)');const layoutFilters=()=>{filterDetails.open=!mobile.matches};layoutFilters();mobile.addEventListener('change',layoutFilters);filterDetails.addEventListener('toggle',refresh)}
  applyTheme();applyMotion();
})();
