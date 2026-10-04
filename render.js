/* Original WebGL1 artwork. No library, remote asset, shader from the reference site, or tracking.
 * The DOM is the accessible source of truth. If WebGL fails, real images remain visible.
 */
(() => {
  'use strict';
  const url = p => window.portfolioAsset?.(p) || p;
  const vert = `attribute vec2 aPos; varying vec2 vUv; void main(){vUv=aPos*.5+.5;gl_Position=vec4(aPos,0.,1.);}`;
  const common = `precision mediump float; varying vec2 vUv;
  uniform vec2 uRes; uniform vec2 uMouse; uniform float uTime,uProgress,uSpeed,uMix;
  uniform sampler2D uA,uB; uniform vec2 uSizeA,uSizeB;
  vec2 cover(vec2 uv,vec2 size){float a=uRes.x/uRes.y;float b=size.x/size.y;vec2 scale=vec2(min(a/b,1.),min(b/a,1.));return (uv-.5)*scale+.5;}
  float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.54);}
  float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}
  float fbm(vec2 p){float n=0.;n+=.55*noise(p);p=p*2.03+11.;n+=.27*noise(p);p=p*2.01+7.;n+=.13*noise(p);return n;}
  `;
  const worldFrag=common+`
  void main(){
    float aspect=uRes.x/uRes.y; bool mobile=aspect<.8;
    float unfold=smoothstep(.10,.82,uProgress);
    vec2 center=mix(mobile?vec2(.50,.655):vec2(.445,.605),vec2(.5),unfold);
    vec2 p=(vUv-center)*vec2(aspect,1.);
    vec2 pointer=(uMouse-center)*vec2(aspect,1.);
    float t=uTime*.23;
    float r0=mobile?aspect*.34:.245;
    float baseRadius=mix(r0,1.22*length(vec2(aspect,1.)),unfold*unfold);
    float distPointer=length(p-pointer);
    float proximity=exp(-distPointer*5.);
    float wave=sin(distPointer*29.-uTime*2.1)*proximity*.007*(1.-unfold);
    vec2 drift=vec2(sin(p.y*7.+t),cos(p.x*8.-t))*.006*(1.-unfold);
    vec2 q=p+drift;
    float angle=atan(q.y,q.x);float radius=length(q)+wave;
    float edge=baseRadius+.007*sin(angle*7.+t)*sin(angle*3.-t*.6)*(1.-unfold);
    float shape=1.-smoothstep(edge-.002,edge+.004,radius);
    vec3 bg=vec3(.1412,.1451,.1294);
    float bgNoise=hash(gl_FragCoord.xy)*.012;
    float glow=exp(-length(p)*2.5)*.014;
    bg+=vec3(.9,.82,.61)*(bgNoise+glow);
    // Silk-like contour lines wrap a lit sphere; pointer movement changes the field itself.
    float rho=length(q)/max(r0,.01);
    float warp=fbm(q*8.+vec2(t*.15,-t*.11));
    float warped=rho+(warp-.45)*.095+sin(angle*5.+rho*10.-t)*.007;
    float contour=pow(.5+.5*sin(warped*390.+sin(angle*11.)*1.6+t),8.);
    float crossThread=pow(.5+.5*sin(angle*135.+rho*26.+warp*9.-t*.3),12.);
    float nz=sqrt(max(0.,1.-min(rho*rho,.999)));
    vec3 normal=normalize(vec3(q/max(r0,.01),nz));
    vec3 light=normalize(vec3(-.5+pointer.x*.8,.78+pointer.y*.5,1.));
    float diffuse=pow(max(dot(normal,light),0.),1.6);
    float fibre=(.12+contour*.65+crossThread*.20);
    float grain=fbm(q*120.)*.10;
    vec3 silk=vec3(.30,.29,.23)+vec3(.43,.395,.30)*diffuse;
    silk*=.52+fibre*.38+warp*.23;
    silk+=vec3(.37,.35,.27)*contour*diffuse*.42+grain;
    silk*=1.-smoothstep(.76,1.03,rho)*.48;
    float rim=pow(clamp(1.-abs(rho-1.)*36.,0.,1.),2.)*.08;
    silk+=vec3(.6,.55,.40)*rim;
    // As the mask opens, its material becomes an actual game image / silent video.
    vec2 uv=vUv+vec2(sin(vUv.y*6.+t),cos(vUv.x*8.-t))*.007*(1.-unfold);
    vec3 scene=texture2D(uA,cover(uv,uSizeA)).rgb;
    float grey=dot(scene,vec3(.299,.587,.114));
    scene=mix(vec3(grey)*vec3(1.05,1.0,.84),scene,.82)*.76;
    scene*=.82+.18*smoothstep(0.,.8,vUv.x);
    vec3 material=mix(silk,scene,smoothstep(.035,.36,unfold));
    vec3 result=mix(bg,material,shape);
    result+=vec3(hash(gl_FragCoord.xy+mod(uTime,3.))-.5)*.007;
    gl_FragColor=vec4(result,1.);
  }`;
  const traceFrag=common+`
  void main(){
    vec2 uv=vUv;
    float dst=distance(uv,uMouse);
    float amp=min(abs(uSpeed)*.027,.027)+.0035;
    float wave=sin(dst*18.-uTime*1.5)*exp(-dst*3.)*amp;
    vec2 dir=normalize(uv-uMouse+vec2(.0001));
    uv+=dir*wave;
    // A moving, softly bent wipe replaces a generic opacity crossfade.
    float cut=smoothstep(0.,1.,uMix);
    float front=(1.-cut)*1.35-.175;
    float bend=sin(uv.y*3.14159)*.13*sin(cut*3.14159);
    float mask=smoothstep(front-.16,front+.16,uv.x+bend);
    mask=mix(0.,mask,smoothstep(0.,.045,cut));
    mask=mix(mask,1.,smoothstep(.955,1.,cut));
    vec2 slide=vec2(sin(cut*3.14159)*.065,0.);
    vec3 a=texture2D(uA,cover(clamp(uv+slide,0.,1.),uSizeA)).rgb;
    vec3 b=texture2D(uB,cover(clamp(uv-slide,0.,1.),uSizeB)).rgb;
    vec3 col=mix(a,b,mask);
    float lum=dot(col,vec3(.299,.587,.114));
    col=mix(vec3(lum)*vec3(1.06,1.0,.86),col,.64);
    col*=.90;
    col+=vec3(hash(gl_FragCoord.xy)-.5)*.01;
    gl_FragColor=vec4(col,1.);
  }`;
  class Surface {
    constructor(canvas,fragment,readyClass){
      this.canvas=canvas;this.readyClass=readyClass;this.ok=false;this.textures=[];
      if(!canvas)return;
      try{
        const gl=canvas.getContext('webgl',{alpha:false,antialias:false,depth:false,stencil:false,preserveDrawingBuffer:false,powerPreference:'low-power'});
        if(!gl)return;this.gl=gl;
        const shader=(type,source)=>{const s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));return s;};
        const vs=shader(gl.VERTEX_SHADER,vert),fs=shader(gl.FRAGMENT_SHADER,fragment);
        const program=gl.createProgram();gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program);
        if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(program));
        gl.deleteShader(vs);gl.deleteShader(fs);this.program=program;this.uniforms={};
        ['uRes','uMouse','uTime','uProgress','uSpeed','uMix','uA','uB','uSizeA','uSizeB'].forEach(n=>this.uniforms[n]=gl.getUniformLocation(program,n));
        const buf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buf);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
        gl.useProgram(program);const attr=gl.getAttribLocation(program,'aPos');gl.enableVertexAttribArray(attr);gl.vertexAttribPointer(attr,2,gl.FLOAT,false,0,0);
        this.ok=true;
        canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();this.ok=false;document.documentElement.classList.remove(readyClass);});
      }catch(error){console.warn('Visual fallback:',error.message);this.ok=false;}
    }
    texture(path){
      if(!this.ok)return null;
      const gl=this.gl, info={texture:gl.createTexture(),width:1280,height:720,ready:false};
      gl.bindTexture(gl.TEXTURE_2D,info.texture);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,1,1,0,gl.RGBA,gl.UNSIGNED_BYTE,new Uint8Array([36,37,33,255]));
      gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
      const image=new Image();image.onload=()=>{try{gl.bindTexture(gl.TEXTURE_2D,info.texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,image);info.width=image.naturalWidth;info.height=image.naturalHeight;info.ready=true;}catch(e){console.warn('Texture unavailable; using image fallback.');this.ok=false;document.documentElement.classList.remove(this.readyClass);}};image.src=url(path);this.textures.push(info);return info;
    }
    draw({time=0,progress=0,mix=0,speed=0,mouse=[.5,.5],a,b}){
      if(!this.ok)return;
      const gl=this.gl,c=this.canvas,r=c.getBoundingClientRect();if(!r.width||!r.height)return;
      const dpr=Math.min(devicePixelRatio||1,innerWidth<650?1:1.35);
      const w=Math.round(r.width*dpr),h=Math.round(r.height*dpr);
      if(c.width!==w||c.height!==h){c.width=w;c.height=h;gl.viewport(0,0,w,h);}
      gl.useProgram(this.program);const u=this.uniforms;
      gl.uniform2f(u.uRes,w,h);gl.uniform2f(u.uMouse,mouse[0],mouse[1]);
      gl.uniform1f(u.uTime,time);gl.uniform1f(u.uProgress,progress);gl.uniform1f(u.uSpeed,speed);gl.uniform1f(u.uMix,mix);
      if(a){gl.activeTexture(gl.TEXTURE0);gl.bindTexture(gl.TEXTURE_2D,a.texture);gl.uniform1i(u.uA,0);gl.uniform2f(u.uSizeA,a.width,a.height);}
      if(b||a){const img=b||a;gl.activeTexture(gl.TEXTURE1);gl.bindTexture(gl.TEXTURE_2D,img.texture);gl.uniform1i(u.uB,1);gl.uniform2f(u.uSizeB,img.width,img.height);}
      gl.drawArrays(gl.TRIANGLES,0,6);document.documentElement.classList.add(this.readyClass);
    }
  }
  const hero=new Surface(document.getElementById('world-canvas'),worldFrag,'gpu-ready');
  const traces=new Surface(document.getElementById('trace-canvas'),traceFrag,'trace-gpu-ready');
  const heroImage=hero.texture('assets/wonderwebby-cover.webp');
  const stills=['assets/wonderwebby-cover.webp','assets/wonderwebby-web.webp','assets/slide7_final_reveal.webp'].map(p=>traces.texture(p));
  let video=null,videoTex=null,attempted=false,videoBlocked=false;
  function ambient(active){
    if(videoBlocked)return;
    if(!active){video?.pause();return;}
    if(!attempted){attempted=true;video=document.createElement('video');video.muted=true;video.loop=true;video.playsInline=true;video.preload='none';video.tabIndex=-1;video.setAttribute('aria-hidden','true');video.hidden=true;video.src=url('assets/slide5_web_forming.mp4');document.body.appendChild(video);videoTex=hero.texture('assets/wonderwebby-cover.webp');}
    if(video?.paused&&!document.querySelector('dialog[open]'))video.play().catch(()=>{videoBlocked=true;});
  }
  // Canvas2D runs the same choreography on devices where 3D APIs are unavailable.
  // This is a real animated fallback, not a replacement screenshot.
  const fallback={hero:null,traces:null};
  const images2d=['assets/wonderwebby-cover.webp','assets/wonderwebby-web.webp','assets/slide7_final_reveal.webp'].map(path=>{const i=new Image();i.src=url(path);return i;});
  const sat=v=>Math.max(0,Math.min(1,v));
  const ss=(a,b,v)=>{v=sat((v-a)/(b-a));return v*v*(3-2*v);};
  function ctx2d(which,id){
    if(fallback[which])return fallback[which];let c=document.getElementById(id);if(!c)return null;
    let ctx=c.getContext('2d');if(!ctx){const replacement=c.cloneNode(false);c.replaceWith(replacement);c=replacement;ctx=c.getContext('2d');}
    if(!ctx)return null;return fallback[which]={canvas:c,ctx};
  }
  function size2d(f){const r=f.canvas.getBoundingClientRect();const dpr=Math.min(devicePixelRatio||1,1.15);if(r.width<=0||r.height<=0)return null;const w=Math.round(r.width*dpr),h=Math.round(r.height*dpr);if(f.canvas.width!==w||f.canvas.height!==h){f.canvas.width=w;f.canvas.height=h;}f.ctx.setTransform(dpr,0,0,dpr,0,0);return [r.width,r.height];}
  function drawCover(ctx,image,w,h,shift=0){const iw=image.videoWidth||image.naturalWidth,ih=image.videoHeight||image.naturalHeight;if(!iw||!ih)return;const scale=Math.max(w/iw,h/ih);ctx.drawImage(image,(w-iw*scale)/2+shift,(h-ih*scale)/2,iw*scale,ih*scale);}
  function hero2d(time,progress,mouse){
    const f=ctx2d('hero','world-canvas');if(!f)return;const size=size2d(f);if(!size)return;const [w,h]=size,ctx=f.ctx,aspect=w/h,mobile=aspect<.8;
    const unfold=ss(.10,.82,progress),base=mobile?w*.34:h*.245;
    const cx=(mobile?.50:.445)*w+(w*.5-(mobile?.50:.445)*w)*unfold,cy=(mobile?.345:.395)*h+(h*.5-(mobile?.345:.395)*h)*unfold;
    const radius=base+(Math.hypot(w,h)*1.22-base)*unfold*unfold;
    ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';ctx.fillStyle='#242521';ctx.fillRect(0,0,w,h);
    const haze=ctx.createRadialGradient(cx,cy,20,cx,cy,w*.72);haze.addColorStop(0,'#9e947608');haze.addColorStop(1,'#24252100');ctx.fillStyle=haze;ctx.fillRect(0,0,w,h);
    ctx.save();ctx.beginPath();
    for(let j=0;j<=140;j++){const a=j/140*Math.PI*2;const wobble=(Math.sin(a*7+time*.1)*Math.sin(a*3-time*.15))*base*.018*(1-unfold);const x=cx+Math.cos(a)*(radius+wobble),y=cy+Math.sin(a)*(radius+wobble);j?ctx.lineTo(x,y):ctx.moveTo(x,y);}ctx.closePath();ctx.clip();
    const image=video?.readyState>=2?video:images2d[0];
    if(unfold>.015){drawCover(ctx,image,w,h);ctx.fillStyle='#15200c47';ctx.fillRect(0,0,w,h);}
    const material=1-ss(.015,.34,unfold);
    if(material>.001){
      ctx.globalAlpha=material;const light=ctx.createRadialGradient(cx-base*.42,cy-base*.6,base*.05,cx+base*.1,cy+base*.25,base*1.3);light.addColorStop(0,'#aca187');light.addColorStop(.38,'#817b62');light.addColorStop(.78,'#434939');light.addColorStop(1,'#262e23');ctx.fillStyle=light;ctx.fillRect(cx-radius,cy-radius,radius*2,radius*2);
      const mx=(mouse[0]-.5)*1.8,my=(mouse[1]-.5)*1.3;
      for(let ring=2;ring<115;ring++){
        const rr=base*ring/115;ctx.beginPath();
        for(let j=0;j<=112;j++){
          const a=j/112*Math.PI*2,twist=.10*Math.sin(a*4+rr/base*7+time*.09)+.022*Math.cos(a*9-time*.13);
          const radial=rr+(Math.sin(a*7+rr/base*9+time*.19)+Math.sin(a*3-rr/base*12-time*.08))*base*.009*(rr/base);
          const wave=Math.sin(a*3+time*.27+ring*.06)*(mx*Math.cos(a)+my*Math.sin(a))*base*.017;
          const x=cx+Math.cos(a+twist)*(radial+wave),y=cy+Math.sin(a+twist)*radial;
          j?ctx.lineTo(x,y):ctx.moveTo(x,y);
        }
        ctx.strokeStyle=ring%3===0?'#e8d8b353':'#cbbb9850';ctx.lineWidth=ring%4===0?.85:.48;ctx.stroke();
      }
      // Sparse cross threads prevent the surface from reading as a flat spinning disc.
      for(let i=0;i<63;i++){const a=i/63*Math.PI*2;ctx.beginPath();for(let j=4;j<105;j++){const rr=base*j/105,theta=a+.09*Math.sin(rr/base*9+a*3+time*.07);const x=cx+Math.cos(theta)*rr,y=cy+Math.sin(theta)*rr;j===4?ctx.moveTo(x,y):ctx.lineTo(x,y);}ctx.strokeStyle='#d7cbb71c';ctx.lineWidth=.4;ctx.stroke();}
      const shade=ctx.createLinearGradient(cx-base,cy-base,cx+base,cy+base);shade.addColorStop(0,'#ece0b005');shade.addColorStop(.5,'#202a1315');shade.addColorStop(1,'#121e139e');ctx.fillStyle=shade;ctx.fillRect(cx-base-5,cy-base-5,base*2+10,base*2+10);
    }
    ctx.restore();ctx.globalAlpha=1;document.documentElement.classList.add('gpu-ready');
  }
  function traces2d(time,phase,mouse,speed){
    const f=ctx2d('traces','trace-canvas');if(!f)return;const size=size2d(f);if(!size)return;const [w,h]=size,ctx=f.ctx;
    const lower=Math.min(1,Math.floor(Math.max(0,phase))),fraction=ss(0,1,phase-lower),front=w*(1-fraction),bend=Math.sin(fraction*Math.PI)*w*.18;
    ctx.fillStyle='#242521';ctx.fillRect(0,0,w,h);
    ctx.save();ctx.translate((mouse[0]-.5)*Math.min(6,Math.abs(speed)*2),0);drawCover(ctx,images2d[lower],w,h);ctx.restore();
    if(fraction>.001){ctx.save();ctx.beginPath();ctx.moveTo(front,0);ctx.bezierCurveTo(front-bend,h*.3,front+bend,h*.7,front,h);ctx.lineTo(w+1,h);ctx.lineTo(w+1,0);ctx.closePath();ctx.clip();drawCover(ctx,images2d[lower+1],w,h);ctx.restore();}
    ctx.fillStyle='#26230e15';ctx.fillRect(0,0,w,h);document.documentElement.classList.add('trace-gpu-ready');
  }

  window.PortfolioVisuals={
    heroOK:()=>hero.ok||!!fallback.hero, traceOK:()=>traces.ok||!!fallback.traces, renderers:()=>[hero.ok?'webgl':fallback.hero?'canvas2d':'static',traces.ok?'webgl':fallback.traces?'canvas2d':'static'], pause(){video?.pause();},
    hero(time,progress,mouse,moving){
      ambient(moving&&progress>.42);
      if(!hero.ok){hero2d(time,progress,mouse);return;}
      let tex=heroImage;
      if(video&&video.readyState>=2&&progress>.38&&videoTex&&hero.ok){try{const gl=hero.gl;gl.activeTexture(gl.TEXTURE0);gl.bindTexture(gl.TEXTURE_2D,videoTex.texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,video);videoTex.width=video.videoWidth;videoTex.height=video.videoHeight;tex=videoTex;}catch{videoBlocked=true;video.pause();}}
      hero.draw({time,progress,mouse,a:tex});
    },
    traces(time,phase,mouse,speed){if(!traces.ok){traces2d(time,phase,mouse,speed);return;}const index=Math.min(1,Math.max(0,Math.floor(phase)));traces.draw({time,mix:phase-index,mouse,speed,a:stills[index],b:stills[index+1]});}
  };
  document.addEventListener('visibilitychange',()=>{if(document.hidden)video?.pause();});
})();
