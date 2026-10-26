/* Text motion is progressive enhancement: semantic text is never split or hidden. */
(() => {
 'use strict';
 const root=document.documentElement,g=window.gsap,ST=window.ScrollTrigger;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)'),forced=matchMedia('(forced-colors: active)');
 let context=null,frame=0,disposed=false;
 const enabled=()=>root.dataset.motion==='on'&&!reduced.matches&&!forced.matches;
 function build(){
  frame=0;context?.revert();context=null;
  if(disposed||!g||!ST||!enabled())return;
  g.registerPlugin(ST);
  context=g.context(()=>{
   const names=[...document.querySelectorAll('.home-intro h1>[data-name-first],.home-intro h1>em')];
   if(names.length){
    const entry=g.timeline({defaults:{duration:.72,ease:'power2.out'}});
    entry.from(names,{y:18,opacity:.76,stagger:.12},0);
    entry.from('.home-intro h1>em',{'--ink-scale':0,duration:.65},.28);
   }
   document.querySelectorAll('.traces-heading h2,.index-head h2,.project-section h2,.contribution-section h2,.gallery-heading h2').forEach(heading=>{
    g.from(heading,{y:16,opacity:.78,duration:.65,ease:'power2.out',scrollTrigger:{trigger:heading,start:'top 92%',once:true}});
   });
   const statement=document.querySelector('.statement h2');
   const phrases=statement?[...statement.querySelectorAll(':scope > [data-i18n]')]:[];
   if(phrases.length){
    const emphasis=g.timeline({scrollTrigger:{trigger:statement,start:'top 88%',end:'bottom 48%',scrub:true}});
    phrases.forEach((phrase,i)=>emphasis.fromTo(phrase,{opacity:.72},{opacity:1,ease:'none',duration:1},i*.7));
   }
  });
  ST.refresh();
 }
 function schedule(){if(!frame&&!disposed)frame=requestAnimationFrame(build)}
 const observer=new MutationObserver(schedule);observer.observe(root,{attributes:true,attributeFilter:['data-motion','lang']});
 document.addEventListener('portfolio:language',schedule);
 reduced.addEventListener('change',schedule);forced.addEventListener('change',schedule);
 window.addEventListener('pagehide',()=>{disposed=true;cancelAnimationFrame(frame);frame=0;context?.revert();context=null});
 window.addEventListener('pageshow',()=>{disposed=false;schedule()});
 document.fonts?.ready.then(()=>{if(!disposed)ST?.refresh()});
 schedule();
})();
