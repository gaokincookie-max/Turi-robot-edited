(()=>{
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const shipLayouts={
  1:{weapons:[{x:23,y:35,w:34,h:22,side:'left'},{x:82,y:35,w:34,h:22,side:'right'}],equips:[{x:50,y:31,w:25,h:19},{x:50,y:58,w:24,h:18}]},
  2:{weapons:[{x:17,y:35,w:32,h:21,side:'left'},{x:83,y:35,w:32,h:21,side:'right'},{x:50,y:56,w:30,h:19,side:'center'}],equips:[{x:50,y:26,w:26,h:19},{x:36,y:68,w:23,h:18},{x:64,y:68,w:23,h:18}]},
  3:{weapons:[{x:16,y:31,w:30,h:20,side:'left'},{x:84,y:31,w:30,h:20,side:'right'},{x:16,y:60,w:30,h:20,side:'left'},{x:84,y:60,w:30,h:20,side:'right'}],equips:[{x:50,y:22,w:24,h:18},{x:39,y:50,w:22,h:17},{x:61,y:50,w:22,h:17},{x:50,y:73,w:22,h:17}]},
  4:{weapons:[{x:15,y:30,w:29,h:19,side:'left'},{x:85,y:30,w:29,h:19,side:'right'},{x:15,y:62,w:29,h:19,side:'left'},{x:85,y:62,w:29,h:19,side:'right'}],equips:[{x:37,y:27,w:21,h:17},{x:63,y:27,w:21,h:17},{x:50,y:55,w:21,h:17},{x:37,y:70,w:20,h:16},{x:63,y:70,w:20,h:16}]}
};
const assetCatalog={
 playerWeapons:{pulse:'assets/weapons/w_pulse.png',bolt:'assets/weapons/w_twin.png',laser:'assets/weapons/w_laser.png',missile:'assets/weapons/w_missile.png',emp:'assets/weapons/w_emp.png',barrier:'assets/weapons/w_barrier.png',scatter:'assets/weapons/w_scatter.png',piercer:'assets/weapons/w_piercer.png'},
 enemyWeapons:{pulse:'assets/enemy/weapons/w_pulse.png',bolt:'assets/enemy/weapons/w_twin.png',laser:'assets/enemy/weapons/w_laser.png',missile:'assets/enemy/weapons/w_missile.png',emp:'assets/enemy/weapons/w_emp.png',barrier:'assets/enemy/weapons/w_barrier.png',scatter:'assets/enemy/weapons/w_scatter.png',piercer:'assets/enemy/weapons/w_piercer.png'},
 playerEquips:{armor:'assets/equipment/e_armor.png',repair:'assets/equipment/e_repair.png',shield:'assets/equipment/e_shield.png',sensor:'assets/equipment/e_sensor.png',cooler:'assets/equipment/e_cooler.png',salvage:'assets/equipment/e_salvage.png',cargo:'assets/equipment/e_cargo.png',aim:'assets/equipment/e_aim.png'},
 enemyEquips:{armor:'assets/enemy/equipment/e_armor.png',repair:'assets/enemy/equipment/e_repair.png',shield:'assets/enemy/equipment/e_shield.png',sensor:'assets/enemy/equipment/e_sensor.png',cooler:'assets/enemy/equipment/e_cooler.png',salvage:'assets/enemy/equipment/e_salvage.png',cargo:'assets/enemy/equipment/e_cargo.png',aim:'assets/enemy/equipment/e_aim.png'},
 fishing:{rodStandard:'assets/fishing/rod/standard.png',rodStable:'assets/fishing/rod/stable.png',rodFast:'assets/fishing/rod/fast.png',rodHeavy:'assets/fishing/rod/heavy.png',reelStandard:'assets/fishing/reel/standard.png',reelStable:'assets/fishing/reel/stable.png',reelFast:'assets/fishing/reel/fast.png',reelHeavy:'assets/fishing/reel/heavy.png',lineStandard:'assets/fishing/line/standard.png',lineStable:'assets/fishing/line/stable.png',lineFast:'assets/fishing/line/fast.png',lineHeavy:'assets/fishing/line/heavy.png',hookStandard:'assets/fishing/hook/standard.png',hookMagnet:'assets/fishing/hook/magnet.png',hookRecovery:'assets/fishing/hook/recovery.png',hookMilitary:'assets/fishing/hook/military.png',hookProbe:'assets/fishing/hook/probe.png'}
};
const shipAsset=(enemy,mk)=>`assets/${enemy?'enemy/':''}ships/ship_mk${mk}.png`;
const scenes=[
  {id:'battlePlayer',name:'戦闘：味方艦',kind:'ship',enemy:false},
  {id:'battleEnemy',name:'戦闘：敵艦',kind:'ship',enemy:true},
  {id:'maintenanceShip',name:'整備：機体',kind:'ship',enemy:false,maintenance:true},
  {id:'maintenanceFishing',name:'整備：釣具',kind:'fishing'}
];
function item(id,name,asset,x,y,w,h,extra={}){return {id,name,asset,x,y,w,h,rot:extra.rot??0,scale:extra.scale??1,z:extra.z??3,opacity:extra.opacity??1,flipX:!!extra.flipX,flipY:!!extra.flipY,visible:extra.visible??true,note:extra.note||'',type:extra.type||'part'}}
function makeShipScene(enemy,mk,maintenance=false){
  const l=shipLayouts[mk], weaponAssets=enemy?assetCatalog.enemyWeapons:assetCatalog.playerWeapons, equipAssets=enemy?assetCatalog.enemyEquips:assetCatalog.playerEquips;
  const out=[];
  l.weapons.forEach((p,i)=>out.push(item(`weapon${i+1}`,`武器 ${i+1}`,weaponAssets[['pulse','bolt','laser','missile'][i%4]],enemy?100-p.x:p.x,enemy?100-p.y:p.y,p.w,p.h,{rot:enemy?270:90,z:5,type:'weapon'})));
  l.equips.forEach((p,i)=>out.push(item(`equip${i+1}`,`装備 ${i+1}`,equipAssets[['armor','shield','repair','sensor','cooler'][i%5]],enemy?100-p.x:p.x,enemy?100-p.y:p.y,p.w,p.h,{rot:enemy?180:0,z:4,type:'equip'})));
  if(enemy)out.push(item('laser','レーザー砲','',50,90,10,18,{rot:180,z:8,type:'laser'}));
  return out;
}
function defaultState(){
  const data={version:1,meta:{tool:'VOID ANGLER Layout Editor',created:new Date().toISOString()},scenes:{}};
  for(const s of scenes){
    if(s.kind==='ship'){
      data.scenes[s.id]={};
      for(let mk=1;mk<=4;mk++)data.scenes[s.id][`mk${mk}`]={items:makeShipScene(s.enemy,mk,s.maintenance)};
    }else{
      data.scenes[s.id]={default:{items:[
        item('rod','ロッド',assetCatalog.fishing.rodStandard,40,41,53,34,{rot:0,z:3,type:'rod'}),
        item('reel','リール',assetCatalog.fishing.reelStandard,24,67,22,18,{z:5,type:'reel'}),
        item('line','ライン',assetCatalog.fishing.lineStandard,76,27,26,22,{z:4,type:'line'}),
        item('hook','フック',assetCatalog.fishing.hookStandard,79,77,18,18,{z:6,type:'hook'})
      ]}};
    }
  }
  return data;
}
let defaults=defaultState();
let state=structuredClone(defaults), currentScene='battlePlayer', currentMk='mk1', selectedId=null;
const sceneSelect=$('#sceneSelect'),mkSelect=$('#mkSelect'),preview=$('#preview'),layerList=$('#layerList');
scenes.forEach(s=>{const o=document.createElement('option');o.value=s.id;o.textContent=s.name;sceneSelect.appendChild(o)});
function sceneDef(){return scenes.find(x=>x.id===currentScene)}
function bucket(){const s=sceneDef();return state.scenes[currentScene][s.kind==='ship'?currentMk:'default']}
function defaultBucket(){const s=sceneDef();return defaults.scenes[currentScene][s.kind==='ship'?currentMk:'default']}
function currentItems(){return bucket().items}
function selected(){return currentItems().find(x=>x.id===selectedId)||null}
function snap(v){if(!$('#snapToggle').checked)return v;const n=Number($('#snapSize').value)||1;return Math.round(v/n)*n}
function render(){renderScene();renderLayers();renderInspector();updateJSON()}
function renderScene(){
  const def=sceneDef();preview.className='preview '+($('#gridToggle').checked?'gridOn ':'')+(def.maintenance?'maintenance ':'')+(def.kind==='fishing'?'fishing ':'');
  preview.innerHTML=`<div class="sceneTitle">${def.name}${def.kind==='ship'?` / ${currentMk.toUpperCase()}`:''}</div>`;
  if(def.kind==='ship'){
    const mk=Number(currentMk.slice(2));
    const ship=document.createElement('div');ship.className='previewShip '+(def.enemy?'enemy ':def.maintenance?'maintenanceShip ':'player');
    ship.innerHTML=`<img src="${shipAsset(def.enemy,mk)}" alt="">`;preview.appendChild(ship);
  }else{
    const g=document.createElement('div');g.className='rigGuide';preview.appendChild(g);
    const h=document.createElement('div');h.className='bottomHint';h.textContent='釣具整備プレビュー';preview.appendChild(h);
  }
  currentItems().sort((a,b)=>a.z-b.z).forEach(makeEditable);
}
function makeEditable(it){
  const el=document.createElement('div');el.className='editorItem'+(it.id===selectedId?' selected':'');el.dataset.id=it.id;
  el.style.left=(it.x-it.w/2)+'%';el.style.top=(it.y-it.h/2)+'%';el.style.width=it.w+'%';el.style.height=it.h+'%';el.style.zIndex=it.z;el.style.opacity=it.visible?it.opacity:0;
  const sx=it.flipX?-1:1,sy=it.flipY?-1:1;el.style.transform=`rotate(${it.rot}deg) scale(${it.scale*sx},${it.scale*sy})`;
  if(it.asset)el.innerHTML=`<img src="${it.asset}" alt=""><span class="partTag">${it.name}</span>`;
  else el.innerHTML=`<div style="width:100%;height:100%;border:2px solid #ff667d;border-radius:25% 25% 10% 10%;background:linear-gradient(90deg,#321725,#b13d53,#321725);box-shadow:0 0 16px #ff536c88"></div><span class="partTag">${it.name}</span>`;
  preview.appendChild(el);attachPointer(el,it);
}
function attachPointer(el,it){
  let mode='move',sx,sy,ox,oy,ow,oh;
  el.addEventListener('pointerdown',e=>{e.preventDefault();e.stopPropagation();selectItem(it.id);const r=el.getBoundingClientRect();mode=(e.clientX>r.right-20&&e.clientY>r.bottom-20)?'resize':'move';sx=e.clientX;sy=e.clientY;ox=it.x;oy=it.y;ow=it.w;oh=it.h;el.setPointerCapture(e.pointerId)});
  el.addEventListener('pointermove',e=>{if(!el.hasPointerCapture(e.pointerId))return;const pr=preview.getBoundingClientRect(),dx=(e.clientX-sx)/pr.width*100,dy=(e.clientY-sy)/pr.height*100;if(mode==='move'){it.x=snap(Math.max(0,Math.min(100,ox+dx)));it.y=snap(Math.max(0,Math.min(100,oy+dy)))}else{it.w=Math.max(2,snap(ow+dx*2));it.h=Math.max(2,snap(oh+dy*2))}render()});
}
function renderLayers(){layerList.innerHTML='';currentItems().slice().sort((a,b)=>b.z-a.z).forEach(it=>{const b=document.createElement('button');b.className='layerBtn'+(it.id===selectedId?' active':'');b.innerHTML=`<span class="dot ${it.type}"></span><span>${it.name}</span>`;b.onclick=()=>selectItem(it.id);layerList.appendChild(b)})}
function selectItem(id){selectedId=id;render()}
const fields=['x','y','w','h','rot','scale','z','opacity'];
function renderInspector(){const it=selected();$('#emptyInspector').hidden=!!it;$('#inspector').hidden=!it;if(!it)return;$('#selectedName').textContent=it.name;for(const f of fields)$('#'+f+'Input').value=it[f];$('#flipXInput').checked=it.flipX;$('#flipYInput').checked=it.flipY;$('#visibleInput').checked=it.visible;$('#noteInput').value=it.note||'';renderAssetOptions(it)}
function renderAssetOptions(it){const sel=$('#assetInput');sel.innerHTML='';const all=[];for(const [group,obj] of Object.entries(assetCatalog))for(const [name,path] of Object.entries(obj))all.push([`${group} / ${name}`,path]);all.forEach(([name,path])=>{const o=document.createElement('option');o.value=path;o.textContent=name;o.selected=path===it.asset;sel.appendChild(o)});if(!it.asset){const o=document.createElement('option');o.value='';o.textContent='専用レーザー（CSS仮表示）';o.selected=true;sel.prepend(o)}}
for(const f of fields)$('#'+f+'Input').addEventListener('input',e=>{const it=selected();if(!it)return;it[f]=Number(e.target.value);render()});
for(const [id,key] of [['flipXInput','flipX'],['flipYInput','flipY'],['visibleInput','visible']])$('#'+id).addEventListener('change',e=>{const it=selected();if(!it)return;it[key]=e.target.checked;render()});
$('#assetInput').addEventListener('change',e=>{const it=selected();if(!it)return;it.asset=e.target.value;render()});
$('#noteInput').addEventListener('input',e=>{const it=selected();if(!it)return;it.note=e.target.value;updateJSON()});
sceneSelect.onchange=e=>{currentScene=e.target.value;selectedId=null;const ship=sceneDef().kind==='ship';$('#mkRow').style.display=ship?'grid':'none';render()};
mkSelect.onchange=e=>{currentMk='mk'+e.target.value;selectedId=null;render()};
$('#viewportSelect').onchange=e=>{$('#viewportFrame').className='viewportFrame '+e.target.value};
$('#gridToggle').onchange=render;$('#snapToggle').onchange=render;$('#snapSize').onchange=render;
$('#resetItemBtn').onclick=()=>{const i=currentItems().findIndex(x=>x.id===selectedId),d=defaultBucket().items.find(x=>x.id===selectedId);if(i>=0&&d)currentItems()[i]=structuredClone(d);render()};
$('#resetSceneBtn').onclick=()=>{bucket().items=structuredClone(defaultBucket().items);selectedId=null;render()};
$('#deleteBtn').onclick=()=>{if(!selectedId)return;bucket().items=currentItems().filter(x=>x.id!==selectedId);selectedId=null;render()};
$('#duplicateBtn').onclick=()=>{const it=selected();if(!it)return;const c=structuredClone(it);c.id=it.id+'_copy_'+Date.now();c.name=it.name+' コピー';c.x=Math.min(100,it.x+4);c.y=Math.min(100,it.y+4);bucket().items.push(c);selectedId=c.id;render()};
$('#mirrorBtn').onclick=()=>{if(!state.scenes.battlePlayer||!state.scenes.battleEnemy)return;for(let mk=1;mk<=4;mk++){const src=state.scenes.battlePlayer['mk'+mk].items;state.scenes.battleEnemy['mk'+mk].items=src.map(it=>{const c=structuredClone(it);c.y=100-it.y;c.rot=(it.type==='weapon'?270:(it.rot+180)%360);c.asset=c.asset.replace('assets/weapons/','assets/enemy/weapons/').replace('assets/equipment/','assets/enemy/equipment/');return c});state.scenes.battleEnemy['mk'+mk].items.push(item('laser','レーザー砲','',50,90,10,18,{rot:180,z:8,type:'laser'}))}render()};
function exportPayload(){return JSON.stringify(state,null,2)}
function updateJSON(){$('#jsonPreview').value=exportPayload()}
$('#copyJsonBtn').onclick=async()=>{try{await navigator.clipboard.writeText(exportPayload());$('#copyJsonBtn').textContent='コピーしました';setTimeout(()=>$('#copyJsonBtn').textContent='JSONをコピー',1200)}catch{alert('コピーできませんでした。右のJSON欄から手動でコピーしてください。')}};
$('#exportBtn').onclick=()=>{const blob=new Blob([exportPayload()],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='void-angler-layout.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500)};
$('#saveLocal').onclick=()=>{localStorage.setItem('voidAnglerLayoutEditor_v1',exportPayload());$('#saveLocal').textContent='保存しました';setTimeout(()=>$('#saveLocal').textContent='端末保存',1000)};
$('#importInput').onchange=async e=>{const f=e.target.files?.[0];if(!f)return;try{const d=JSON.parse(await f.text());if(!d.scenes)throw new Error();state=d;selectedId=null;render()}catch{alert('JSONを読み込めませんでした')}};
preview.addEventListener('pointerdown',e=>{if(e.target===preview){selectedId=null;render()}});
const saved=localStorage.getItem('voidAnglerLayoutEditor_v1');if(saved){try{state=JSON.parse(saved)}catch{}}
sceneSelect.value=currentScene;mkSelect.value='1';render();
})();
