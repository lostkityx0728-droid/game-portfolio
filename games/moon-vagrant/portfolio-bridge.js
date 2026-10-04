/* Lifecycle bridge for the existing exported GDevelop game. */
(() => {
 'use strict';
 let game=null, sound=false, started=false;
 const send=(type,detail={})=>{if(parent!==window)parent.postMessage({channel:'portfolio-game',type,...detail},location.origin)};
 window.addEventListener('error',e=>send('error',{message:e.message||'A game resource could not be loaded.'}),true);
 window.addEventListener('unhandledrejection',()=>send('error',{message:'The game could not finish loading.'}));
 const mute=()=>{if(window.Howler)Howler.mute(!sound)};
 const pause=()=>{if(game&&!game.isPaused()){game.pause(true);send('paused')}};
 const resume=()=>{if(!game)return;game.pause(false);mute();if(sound&&window.Howler?.ctx?.state==='suspended')Howler.ctx.resume().catch(()=>{});send('playing')};
 window.addEventListener('message',e=>{
  if(e.source!==parent||e.origin!==location.origin||e.data?.channel!=='portfolio-game')return;
  if(e.data.type==='sound'){sound=!!e.data.enabled;mute();send('sound',{enabled:sound})}
  if(e.data.type==='stop'){try{game?.dispose()}catch{}game=null}
 });
 document.addEventListener('pointerdown',e=>{if(e.target.closest?.('canvas')){e.target.tabIndex=0;e.target.focus({preventScroll:true});resume()}},true);
 document.addEventListener('contextmenu',e=>{if(e.target.closest?.('canvas'))e.preventDefault()});
 document.addEventListener('keydown',e=>{if(e.code==='Space'&&document.activeElement?.tagName==='CANVAS')e.preventDefault();if(e.key==='Escape'){e.preventDefault();e.stopPropagation();pause();send('exit-request')}},true);
 window.addEventListener('blur',pause);
 window.addEventListener('focus',()=>{if(started&&document.activeElement?.tagName==='CANVAS')resume()});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)pause()});
 window.preparePortfolioGameBridge=function(runtime){
  const renderer=runtime.getRenderer(),start=renderer.startGameLoop.bind(renderer);
  renderer.stopGame=function(){send('exit-request')};
  renderer.startGameLoop=function(callback){return start(function(delta){const running=callback(delta);if(running===false)send('exit-request');return running})};
 };
 window.startPortfolioGameBridge=function(runtime){
  game=runtime;mute();
  const ready=()=>{if(!game)return;if(!game.wasFirstSceneLoaded()){requestAnimationFrame(ready);return}started=true;game.pause(true);document.querySelector('canvas')?.setAttribute('aria-label','Moon Vagrant game canvas');send('ready')};
  requestAnimationFrame(ready);
 };
})();
