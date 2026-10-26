/* P3R-inspired scroll cadence, using portfolio assets and native scroll only. */
(() => {
 'use strict';
 const root=document.documentElement,gsap=window.gsap,ST=window.ScrollTrigger;
 const stage=document.querySelector('#games'),track=stage?.querySelector('.index-rows');
 const rows=track?[...track.querySelectorAll('.project-row')]:[];
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let media=null,ctx=null,reel=null,active=0,refreshFrame=0,disposed=false,builds=0,collectionSignature='';
 const themes=[['#b8c2a3','#26372d'],['#25362f','#e0d8bf'],['#c6b0a3','#342f2b'],['#99ad9a','#21372f'],['#a2b6b2','#22332f'],['#c5b58f','#343528']];
 const visible=()=>rows.filter(r=>!r.hidden);
 const enabled=()=>root.dataset.motion==='on'&&!reduced.matches;
 const zh=()=>root.lang==='zh-CN';
 function labels(){
  stage?.querySelector('[data-reel-step="-1"]')?.setAttribute('aria-label',zh()?'上一个项目':'Previous project');
  stage?.querySelector('[data-reel-step="1"]')?.setAttribute('aria-label',zh()?'下一个项目':'Next project');
 }
 function select(index){
  const cards=visible();active=Math.max(0,Math.min(cards.length-1,index));
  const card=cards[active],theme=themes[rows.indexOf(card)]||themes[0];
  rows.forEach(r=>r.classList.toggle('is-current',r===card));
  if(stage){stage.style.setProperty('--reel-bg',theme[0]);stage.style.setProperty('--reel-ink',theme[1]);stage.style.setProperty('--reel-progress',String(cards.length>1?active/(cards.length-1):1));}
  const status=stage?.querySelector('[data-reel-status]');
  if(status)status.textContent=String(active+1).padStart(2,'0')+' / '+String(cards.length).padStart(2,'0');
  const prev=stage?.querySelector('[data-reel-step="-1"]'),next=stage?.querySelector('[data-reel-step="1"]');
  if(prev)prev.disabled=active===0;if(next)next.disabled=active>=cards.length-1;
 }
 function distance(){return Math.max(0,(track?.scrollWidth||0)-(stage?.clientWidth||0)+2*parseFloat(getComputedStyle(stage).paddingLeft));}
 function positions(){const cards=visible(),first=cards[0]?.offsetLeft||0,d=distance();return cards.map(r=>Math.min(d,Math.max(0,r.offsetLeft-first)));}
 function go(index,focus=false){
  const cards=visible();index=Math.max(0,Math.min(cards.length-1,index));if(!cards[index])return;
  if(reel){const list=positions();window.scrollTo({top:reel.scrollTrigger.start+list[index],behavior:'instant'});reel.scrollTrigger.update();select(index);}
  else cards[index].scrollIntoView({block:'center',behavior:enabled()?'smooth':'instant'});
  if(focus)cards[index].focus({preventScroll:true});
 }
 function cleanup(){
  media?.revert();media=null;ctx?.revert();ctx=null;reel=null;
  stage?.classList.remove('is-reel-pinned');
  if(track)gsap?.set(track,{clearProps:'transform'});
 }
 function build(){
  refreshFrame=0;if(disposed)return;
  const wasPinned=!!reel,oldStart=reel?.scrollTrigger.start,wasActive=!!reel?.scrollTrigger.isActive;
  cleanup();labels();select(0);builds++;collectionSignature=visible().map(r=>r.dataset.projectId).join('|');
  if(!gsap||!ST||!enabled())return;
  gsap.registerPlugin(ST);
  ctx=gsap.context(()=>{
   const art=document.querySelector('.folio-hero-art'),hero=document.querySelector('.home-intro');
   if(art&&hero){
    gsap.fromTo(art,{y:0},{y:75,ease:'none',scrollTrigger:{trigger:hero,start:'top top',end:'bottom top',scrub:true}});
    gsap.fromTo(art.querySelector('img'),{scale:1.08},{scale:1,ease:'none',scrollTrigger:{trigger:hero,start:'top top',end:'bottom top',scrub:true}});
   }
   // Never hide essential content: subtle image movement and opacity keep links readable.
   document.querySelectorAll('.trace-stills,.project-section h2,.gallery-grid>figure,.role-grid>div').forEach(el=>{
    gsap.from(el,{y:30,opacity:.65,duration:.75,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 92%',once:true}});
   });
  });
  if(!stage||!track)return;
  media=gsap.matchMedia();
  media.add('(min-width: 1101px) and (min-height: 680px) and (hover: hover) and (pointer: fine)',()=>{
   if(visible().length<2)return;
   stage.classList.add('is-reel-pinned');
   reel=gsap.to(track,{x:()=>-distance(),ease:'none',scrollTrigger:{
    id:'portfolio-project-reel',trigger:stage,start:'top top',end:()=>'+='+Math.max(1,distance()),pin:true,pinSpacing:true,scrub:true,invalidateOnRefresh:true,
    onUpdate(self){const list=positions(),x=self.progress*distance();let index=0;list.forEach((v,i)=>{if(x>=v-80)index=i});if(index!==active)select(index);}
   }});
   return()=>{reel=null;stage.classList.remove('is-reel-pinned')};
  });
  ST.refresh();
  if(wasPinned&&wasActive&&reel&&oldStart!==undefined)window.scrollTo({top:reel.scrollTrigger.start,behavior:'instant'});
 }
 function requestBuild(){if(!refreshFrame&&!disposed)refreshFrame=requestAnimationFrame(build)}
 stage?.querySelectorAll('[data-reel-step]').forEach(b=>b.addEventListener('click',()=>go(active+Number(b.dataset.reelStep))));
 track?.addEventListener('focusin',e=>{
  const card=e.target.closest('.project-row');if(!card||!reel||!card.matches(':focus-visible')||document.querySelector('dialog[open],.page-curtain.active'))return;
  go(visible().indexOf(card));
 });
 track?.addEventListener('keydown',e=>{
  if(!reel||e.altKey||e.metaKey||e.ctrlKey)return;
  if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();const current=visible().indexOf(e.target.closest('.project-row'));go(current+(e.key==='ArrowRight'?1:-1),true);}
 });
 document.addEventListener('portfolio:collection',()=>{if(visible().map(r=>r.dataset.projectId).join('|')!==collectionSignature)requestBuild()});
 document.addEventListener('portfolio:language',()=>{labels();requestBuild()});
 const observer=new MutationObserver(records=>{if(records.some(r=>r.attributeName==='data-motion'))requestBuild()});
 observer.observe(root,{attributes:true,attributeFilter:['data-motion']});
 window.addEventListener('pageshow',()=>{disposed=false;requestBuild()});
 window.addEventListener('pagehide',()=>{disposed=true;cancelAnimationFrame(refreshFrame);refreshFrame=0;cleanup()});
 window.addEventListener('load',()=>ST?.refresh(),{once:true});
 document.fonts?.ready.then(()=>ST?.refresh());
 window.PORTFOLIO_CINEMA_DIAGNOSTICS=Object.freeze({
  get pinned(){return !!reel},get progress(){return reel?.scrollTrigger.progress||0},get active(){return active},get builds(){return builds},
  get visibleProjects(){return visible().length},get distance(){return stage?distance():0},get triggers(){return ST?.getAll().length||0}
 });
 requestBuild();
})();
