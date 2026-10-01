(function(global){
  'use strict';

  const imageCache = new Map();
  function loadImage(src){
    if(!src) return Promise.reject(new Error('missing image src'));
    if(imageCache.has(src)) return imageCache.get(src);
    const p = new Promise((resolve,reject)=>{
      const img = new Image();
      img.onload=()=>resolve(img);
      img.onerror=()=>reject(new Error('image load failed'));
      img.src=src;
    });
    imageCache.set(src,p);
    return p;
  }

  function viewportVirtualSize(viewport='phone'){
    if(viewport==='landscape') return {width:1600,height:900};
    if(viewport==='square') return {width:1000,height:1000};
    if(viewport==='wide') return {width:2100,height:900};
    return {width:900,height:1600};
  }

  function elementGeometry(el, proc, rect){
    const wPx=rect.width*(Number(el.w||10)/100)*(Number(el.scale||1));
    const hPx=rect.height*(Number(el.h||10)/100)*(Number(el.scale||1));
    const ax=(proc.anchor?.x ?? proc.width/2)/proc.width;
    const ay=(proc.anchor?.y ?? proc.height/2)/proc.height;
    const mx=(proc.mount?.x ?? proc.width/2)/proc.width;
    const my=(proc.mount?.y ?? proc.height/2)/proc.height;
    const tx=(proc.muzzle?.x ?? proc.width/2)/proc.width;
    const ty=(proc.muzzle?.y ?? proc.height/2)/proc.height;
    const targetX=rect.width*(Number(el.x||0)/100);
    const targetY=rect.height*(Number(el.y||0)/100);
    const rot=(Number(el.rotation)||0)*Math.PI/180;
    const fx=el.flipX?-1:1, fy=el.flipY?-1:1;
    const mode=el.placementMode==='mount'?'mount':'anchor';
    const qx=(mode==='mount'?mx:ax)*wPx, qy=(mode==='mount'?my:ay)*hPx;
    const apx=ax*wPx, apy=ay*hPx;
    const dx=(qx-apx)*fx, dy=(qy-apy)*fy;
    const rdx=dx*Math.cos(rot)-dy*Math.sin(rot);
    const rdy=dx*Math.sin(rot)+dy*Math.cos(rot);
    const leftPx=targetX-apx-rdx, topPx=targetY-apy-rdy;
    return {wPx,hPx,ax,ay,mx,my,tx,ty,leftPx,topPx,rot,fx,fy};
  }

  function drawBackground(ctx,w,h){
    const g=ctx.createLinearGradient(0,0,0,h);
    g.addColorStop(0,'#0b1630');
    g.addColorStop(.70,'#081019');
    g.addColorStop(1,'#081019');
    ctx.fillStyle=g; ctx.fillRect(0,0,w,h);
    const r=ctx.createRadialGradient(w*.5,h*.22,0,w*.5,h*.22,Math.max(w,h)*.45);
    r.addColorStop(0,'rgba(80,147,255,.20)');
    r.addColorStop(1,'rgba(80,147,255,0)');
    ctx.fillStyle=r; ctx.fillRect(0,0,w,h);
  }

  async function renderSceneToCanvas(canvas, options){
    const {
      viewport='phone', camera={x:0,y:0,w:100,h:100}, elements=[], processedAssets={},
      cssWidth, cssHeight, pixelRatio=(global.devicePixelRatio||1), background=true
    } = options||{};
    const base=viewportVirtualSize(viewport);
    const camPx={
      x:base.width*(Number(camera.x||0)/100), y:base.height*(Number(camera.y||0)/100),
      width:base.width*(Number(camera.w||100)/100), height:base.height*(Number(camera.h||100)/100)
    };
    const targetW=Math.max(1,Number(cssWidth)||canvas.clientWidth||620);
    const targetH=Math.max(1,Number(cssHeight)||canvas.clientHeight||Math.round(targetW*camPx.height/camPx.width));
    const dpr=Math.max(1,Math.min(3,Number(pixelRatio)||1));
    canvas.width=Math.round(targetW*dpr); canvas.height=Math.round(targetH*dpr);
    canvas.style.width=`${targetW}px`; canvas.style.height=`${targetH}px`;
    const ctx=canvas.getContext('2d');
    ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.clearRect(0,0,targetW,targetH);
    if(background) drawBackground(ctx,targetW,targetH);

    const scale=Math.min(targetW/camPx.width,targetH/camPx.height);
    const shownW=camPx.width*scale, shownH=camPx.height*scale;
    const centerX=(targetW-shownW)/2, centerY=(targetH-shownH)/2;
    const worldW=base.width*scale, worldH=base.height*scale;
    const offsetX=centerX-camPx.x*scale, offsetY=centerY-camPx.y*scale;
    const rect={width:worldW,height:worldH};

    const points={};
    for(const el of [...elements].filter(e=>e?.visible!==false).sort((a,b)=>(a.z||0)-(b.z||0))){
      const proc=processedAssets[el.assetId]; if(!proc?.url) continue;
      let img; try{ img=await loadImage(proc.url); }catch(_){ continue; }
      const g=elementGeometry(el,proc,rect);
      const anchorX=offsetX+g.leftPx+g.ax*g.wPx;
      const anchorY=offsetY+g.topPx+g.ay*g.hPx;
      ctx.save();
      ctx.globalAlpha=Number(el.opacity??1);
      ctx.translate(anchorX,anchorY);
      ctx.rotate(g.rot);
      ctx.scale(g.fx,g.fy);

      // Match the DOM renderer exactly: the <img> fills the element box,
      // but object-fit: contain preserves the processed image aspect ratio.
      // Do NOT stretch the bitmap to g.wPx × g.hPx.
      const naturalW=Math.max(1,Number(img.naturalWidth||img.width||proc.width||1));
      const naturalH=Math.max(1,Number(img.naturalHeight||img.height||proc.height||1));
      const containScale=Math.min(g.wPx/naturalW,g.hPx/naturalH);
      const drawW=naturalW*containScale, drawH=naturalH*containScale;
      const boxLeft=-g.ax*g.wPx, boxTop=-g.ay*g.hPx;
      const drawX=boxLeft+(g.wPx-drawW)/2;
      const drawY=boxTop +(g.hPx-drawH)/2;
      ctx.imageSmoothingEnabled=false;
      ctx.drawImage(img,drawX,drawY,drawW,drawH);
      ctx.restore();

      function transformedPoint(nx,ny){
        const px=(nx-g.ax)*g.wPx*g.fx, py=(ny-g.ay)*g.hPx*g.fy;
        const rx=px*Math.cos(g.rot)-py*Math.sin(g.rot), ry=px*Math.sin(g.rot)+py*Math.cos(g.rot);
        return {x:anchorX+rx,y:anchorY+ry};
      }
      points[el.id]={
        anchor:{x:anchorX,y:anchorY},
        mount:transformedPoint(g.mx,g.my),
        tip:transformedPoint(g.tx,g.ty),
        key:el.key, assetId:el.assetId
      };
    }
    return {width:targetW,height:targetH,base,camera:camPx,scale,offsetX,offsetY,points};
  }

  global.VoidAnglerCanvasRenderer={viewportVirtualSize,elementGeometry,renderSceneToCanvas};
})(window);
