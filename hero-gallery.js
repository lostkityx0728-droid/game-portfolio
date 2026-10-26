/* Two decoded image layers, one four-point aperture; no persistent frame loop. */
(() => {
 'use strict';
 const root=document.documentElement,art=document.querySelector('.folio-hero-art');
 const images=art?[...art.querySelectorAll('img')]:[],g=window.gsap;
 if(!art||images.length!==2)return;
 const projects=window.PORTFOLIO?.projects||[];
 const caption=art.querySelector('figcaption'),outline=art.querySelector('polygon');
 const controls=document.querySelector('.hero-slideshow-controls'),pause=controls?.querySelector('[data-hero-pause]');
 const status=controls?.querySelector('[data-hero-status]');
 const reduced=matchMedia('(prefers-reduced-motion: reduce)'),forced=matchMedia('(forced-colors: active)');
 const shapes=[[[10,0],[100,0],[100,88],[0,100]],[[0,8],[95,0],[100,100],[7,91]],[[8,0],[100,8],[92,100],[0,92]],[[0,0],[91,7],[100,91],[6,100]],[[5,9],[100,0],[94,92],[0,100]],[[0,5],[97,0],[100,100],[9,94]]];
 let index=0,front=0,timer=0,transitionDeadline=0,timeline=null,token=0,inView=false,manualPause=false,hovered=false,focused=false,disposed=false,loading=false;
 const zh=()=>root.lang==='zh-CN';
 const motion=()=>!!g&&root.dataset.motion==='on'&&!reduced.matches&&!forced.matches;
 const blocked=()=>document.hidden||!inView||hovered||focused||!!document.querySelector('dialog[open],.page-curtain.active');
 const polygon=i=>'polygon('+shapes[i%shapes.length].map(p=>p.join('% ')+'%').join(',')+')';
 const points=i=>shapes[i%shapes.length].map(p=>p.join(',')).join(' ');
 function labels(){
  controls?.querySelector('[data-hero-step="-1"]')?.setAttribute('aria-label',zh()?'上一张项目图片':'Previous project image');
  controls?.querySelector('[data-hero-step="1"]')?.setAttribute('aria-label',zh()?'下一张项目图片':'Next project image');
  if(pause){pause.textContent=manualPause?(zh()?'继续轮播':'Play images'):(zh()?'暂停轮播':'Pause images');pause.setAttribute('aria-pressed',String(manualPause));pause.setAttribute('aria-label',pause.textContent);pause.hidden=!motion()}
  if(status)status.textContent=String(index+1).padStart(2,'0')+' / '+String(projects.length).padStart(2,'0');
  controls?.querySelectorAll('[data-hero-step]').forEach(b=>{b.disabled=loading});
 }
 function schedule(){clearTimeout(timer);timer=0;if(!disposed&&motion()&&!manualPause&&!blocked()&&!loading&&projects.length>1)timer=setTimeout(()=>change(index+1),6200)}
 function settle(){
  ++token;loading=false;clearTimeout(transitionDeadline);transitionDeadline=0;timeline?.kill();timeline=null;
  images.forEach((img,i)=>{img.style.opacity=i===front?'1':'0'});
  art.style.clipPath=polygon(index);outline?.setAttribute('points',points(index));labels();schedule();
  if(caption){caption.textContent=projects[index]?.title||'';caption.style.opacity='1'}
 }
 async function change(next){
  if(loading||disposed||projects.length<2)return;
  next=(next+projects.length)%projects.length;if(next===index)return;
  clearTimeout(timer);timer=0;loading=true;labels();const task=++token;
  const project=projects[next],src=next===0?'assets/wonderwebby-public-hero.webp':project.cover;
  const preload=new Image();preload.src=src;let deadline=0;
  try{await Promise.race([preload.decode(),new Promise((_,reject)=>{deadline=setTimeout(()=>reject(new Error('Image load timeout')),6000)})])}catch{if(task===token){loading=false;labels();schedule()}return}finally{clearTimeout(deadline)}
  if(disposed||task!==token)return;
  const back=1-front;images[back].src=src;images[back].style.objectPosition=project.id==='wonderwebby'?'62% 50%':'50% 50%';
  images[back].style.objectFit=project.id==='moon-vagrant'?'contain':'cover';images[back].style.padding=project.id==='moon-vagrant'?'6%':'0';
  const old=front;front=back;index=next;
  labels();
  if(motion()){
   timeline=g.timeline({defaults:{duration:1.3,ease:'power2.inOut'},onComplete:()=>{clearTimeout(transitionDeadline);transitionDeadline=0;front=back;timeline=null;loading=false;labels();schedule()}});
   timeline.to(art,{clipPath:polygon(index)},0).to(images[old],{opacity:0},0).to(images[back],{opacity:1},0);
   if(outline)timeline.to(outline,{attr:{points:points(index)}},0);
   if(caption){timeline.to(caption,{opacity:0,duration:.3,onComplete:()=>{caption.textContent=project.title}},0).to(caption,{opacity:1,duration:.45},.8)}
   // Occluded windows may throttle animation frames. Always release controls.
   transitionDeadline=setTimeout(settle,1800);
  }else{front=back;settle()}
 }
 controls?.querySelectorAll('[data-hero-step]').forEach(b=>b.addEventListener('click',()=>{manualPause=true;labels();change(index+Number(b.dataset.heroStep))}));
 pause?.addEventListener('click',()=>{manualPause=!manualPause;labels();schedule()});
 const hero=document.querySelector('.home-intro');
 hero?.addEventListener('pointerenter',()=>{hovered=true;schedule()});hero?.addEventListener('pointerleave',()=>{hovered=false;schedule()});
 controls?.addEventListener('focusin',()=>{focused=true;schedule()});controls?.addEventListener('focusout',e=>{if(!controls.contains(e.relatedTarget)){focused=false;schedule()}});
 const intersection=new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;if(!inView)settle();else schedule()},{threshold:.15});intersection.observe(art);
 const observer=new MutationObserver(records=>{if(records.some(r=>r.target===root)||document.querySelector('dialog[open],.page-curtain.active')){settle()}else schedule()});
 observer.observe(root,{attributes:true,attributeFilter:['data-motion','lang']});
 document.querySelectorAll('dialog,.page-curtain').forEach(el=>observer.observe(el,{attributes:true,attributeFilter:['open','class']}));
 reduced.addEventListener('change',settle);forced.addEventListener('change',settle);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)settle();else schedule()});
 window.addEventListener('pagehide',()=>{disposed=true;clearTimeout(timer);settle();intersection.disconnect();observer.disconnect()});
 window.addEventListener('pageshow',e=>{if(e.persisted){disposed=false;intersection.observe(art);observer.observe(root,{attributes:true,attributeFilter:['data-motion','lang']});document.querySelectorAll('dialog,.page-curtain').forEach(el=>observer.observe(el,{attributes:true,attributeFilter:['open','class']}));schedule()}});
 if(controls)controls.hidden=false;
 labels();
})();
