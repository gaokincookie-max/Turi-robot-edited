const STORAGE_KEY = 'void-angler-layout-editor-v4_5-battle-editor';

const PRESET_ASSETS = [
  ['ship_mk1','Ship Mk1','ship','bundled_assets/assets/ships/ship_mk1.png'],
  ['ship_mk2','Ship Mk2','ship','bundled_assets/assets/ships/ship_mk2.png'],
  ['ship_mk3','Ship Mk3','ship','bundled_assets/assets/ships/ship_mk3.png'],
  ['ship_mk4','Ship Mk4','ship','bundled_assets/assets/ships/ship_mk4.png'],
  ['w_pulse','Pulse Cannon','weapon','bundled_assets/assets/weapons/w_pulse.png'],
  ['w_rotary','Rotary Gun','weapon','bundled_assets/assets/weapons/w_rotary.png'],
  ['w_scatter','Scatter Gun','weapon','bundled_assets/assets/weapons/w_scatter.png'],
  ['w_missile','Missile Pod','weapon','bundled_assets/assets/weapons/w_missile.png'],
  ['w_laser','Laser Gun','weapon','bundled_assets/assets/weapons/w_laser.png'],
  ['w_barrier','Barrier Projector','weapon','bundled_assets/assets/weapons/w_barrier.png'],
  ['w_piercer','Piercer','weapon','bundled_assets/assets/weapons/w_piercer.png'],
  ['w_emp','EMP Launcher','weapon','bundled_assets/assets/weapons/w_emp.png'],
  ['w_twin','Twin Cannon','weapon','bundled_assets/assets/weapons/w_twin.png'],
  ['w_coil','Coil Gun','weapon','bundled_assets/assets/weapons/w_coil.png'],
  ['e_armor','Armor Plate','equipment','bundled_assets/assets/equipment/e_armor.png'],
  ['e_shield','Shield Unit','equipment','bundled_assets/assets/equipment/e_shield.png'],
  ['e_repair','Repair Unit','equipment','bundled_assets/assets/equipment/e_repair.png'],
  ['e_aim','Aim Assist','equipment','bundled_assets/assets/equipment/e_aim.png'],
  ['e_cooler','Cooler','equipment','bundled_assets/assets/equipment/e_cooler.png'],
  ['e_cargo','Cargo','equipment','bundled_assets/assets/equipment/e_cargo.png'],
  ['e_sensor','Sensor','equipment','bundled_assets/assets/equipment/e_sensor.png'],
  ['e_salvage','Salvage','equipment','bundled_assets/assets/equipment/e_salvage.png'],
  ['rod_standard','Rod Standard','rod','bundled_assets/assets/fishing/rod/standard.png'],
  ['rod_stable','Rod Stable','rod','bundled_assets/assets/fishing/rod/stable.png'],
  ['rod_fast','Rod Fast','rod','bundled_assets/assets/fishing/rod/fast.png'],
  ['rod_heavy','Rod Heavy','rod','bundled_assets/assets/fishing/rod/heavy.png'],
  ['reel_standard','Reel Standard','reel','bundled_assets/assets/fishing/reel/standard.png'],
  ['reel_stable','Reel Stable','reel','bundled_assets/assets/fishing/reel/stable.png'],
  ['reel_fast','Reel Fast','reel','bundled_assets/assets/fishing/reel/fast.png'],
  ['reel_heavy','Reel Heavy','reel','bundled_assets/assets/fishing/reel/heavy.png'],
  ['line_standard','Line Standard','line','bundled_assets/assets/fishing/line/standard.png'],
  ['line_stable','Line Stable','line','bundled_assets/assets/fishing/line/stable.png'],
  ['line_fast','Line Fast','line','bundled_assets/assets/fishing/line/fast.png'],
  ['line_heavy','Line Heavy','line','bundled_assets/assets/fishing/line/heavy.png'],
  ['hook_standard','Hook Standard','hook','bundled_assets/assets/fishing/hook/standard.png'],
  ['hook_magnet','Hook Magnet','hook','bundled_assets/assets/fishing/hook/magnet.png'],
  ['hook_recovery','Hook Recovery','hook','bundled_assets/assets/fishing/hook/recovery.png'],
  ['hook_military','Hook Military','hook','bundled_assets/assets/fishing/hook/military.png'],
  ['hook_probe','Hook Probe','hook','bundled_assets/assets/fishing/hook/probe.png'],
  ['enemy_ship_mk1','Enemy Ship Mk1','enemy-ship','bundled_assets/assets/enemy/ships/ship_mk1.png'],
  ['enemy_ship_mk2','Enemy Ship Mk2','enemy-ship','bundled_assets/assets/enemy/ships/ship_mk2.png'],
  ['enemy_ship_mk3','Enemy Ship Mk3','enemy-ship','bundled_assets/assets/enemy/ships/ship_mk3.png'],
  ['enemy_ship_mk4','Enemy Ship Mk4','enemy-ship','bundled_assets/assets/enemy/ships/ship_mk4.png'],
  ['enemy_w_pulse','Enemy Pulse Cannon','enemy-weapon','bundled_assets/assets/enemy/weapons/w_pulse.png'],
  ['enemy_w_rotary','Enemy Rotary Gun','enemy-weapon','bundled_assets/assets/enemy/weapons/w_rotary.png'],
  ['enemy_w_scatter','Enemy Scatter Gun','enemy-weapon','bundled_assets/assets/enemy/weapons/w_scatter.png'],
  ['enemy_w_missile','Enemy Missile Pod','enemy-weapon','bundled_assets/assets/enemy/weapons/w_missile.png'],
  ['enemy_w_laser','Enemy Laser Gun','enemy-weapon','bundled_assets/assets/enemy/weapons/w_laser.png'],
  ['enemy_w_barrier','Enemy Barrier Projector','enemy-weapon','bundled_assets/assets/enemy/weapons/w_barrier.png'],
  ['enemy_w_piercer','Enemy Piercer','enemy-weapon','bundled_assets/assets/enemy/weapons/w_piercer.png'],
  ['enemy_w_emp','Enemy EMP Launcher','enemy-weapon','bundled_assets/assets/enemy/weapons/w_emp.png'],
  ['enemy_w_twin','Enemy Twin Cannon','enemy-weapon','bundled_assets/assets/enemy/weapons/w_twin.png'],
  ['enemy_w_coil','Enemy Coil Gun','enemy-weapon','bundled_assets/assets/enemy/weapons/w_coil.png'],
  ['enemy_e_armor','Enemy Armor Plate','enemy-equipment','bundled_assets/assets/enemy/equipment/e_armor.png'],
  ['enemy_e_shield','Enemy Shield Unit','enemy-equipment','bundled_assets/assets/enemy/equipment/e_shield.png'],
  ['enemy_e_repair','Enemy Repair Unit','enemy-equipment','bundled_assets/assets/enemy/equipment/e_repair.png'],
  ['enemy_e_aim','Enemy Aim Assist','enemy-equipment','bundled_assets/assets/enemy/equipment/e_aim.png'],
  ['enemy_e_cooler','Enemy Cooler','enemy-equipment','bundled_assets/assets/enemy/equipment/e_cooler.png'],
  ['enemy_e_cargo','Enemy Cargo','enemy-equipment','bundled_assets/assets/enemy/equipment/e_cargo.png'],
  ['enemy_e_sensor','Enemy Sensor','enemy-equipment','bundled_assets/assets/enemy/equipment/e_sensor.png'],
  ['enemy_e_salvage','Enemy Salvage','enemy-equipment','bundled_assets/assets/enemy/equipment/e_salvage.png'],
];

const PRESET_SOURCES = [
  ['src_ship_sheet','味方艦シート','source-sheet','bundled_sources/player_ships_sheet.png'],
  ['src_weapon_sheet','武器シート','source-sheet','bundled_sources/player_weapons_sheet.png'],
  ['src_equip_sheet','装備シート','source-sheet','bundled_sources/player_equipment_sheet.png'],
  ['src_fishing_sheet','釣具シート','source-sheet','bundled_sources/fishing_gear_sheet.png'],
  ['src_material_sheet','素材シート','source-sheet','bundled_sources/material_icons_sheet.png'],
  ['src_enemy_ship_sheet','敵艦シート','source-sheet','bundled_sources/enemy_ships_sheet.png'],
  ['src_enemy_weapon_sheet','敵武器シート','source-sheet','bundled_sources/enemy_weapons_sheet.png'],
  ['src_enemy_equip_sheet','敵装備シート','source-sheet','bundled_sources/enemy_equipment_sheet.png'],
];

const SCENES = {
  battle_player: { label:'戦闘: 味方艦', usesMk:true },
  battle_enemy: { label:'戦闘: 敵艦', usesMk:true },
  maint_ship: { label:'整備: 機体', usesMk:true },
  maint_fishing: { label:'整備: 釣具', usesMk:false }
};
const SLOT_CONFIG = {1:{weapons:2,equips:2},2:{weapons:3,equips:3},3:{weapons:4,equips:4},4:{weapons:4,equips:5}};
const DEFAULT_WEAPONS = ['w_pulse','w_twin','w_scatter','w_missile'];
const DEFAULT_EQUIPS = ['e_armor','e_shield','e_repair','e_sensor','e_cooler'];

const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
const clone = obj => JSON.parse(JSON.stringify(obj));
const uid = p => `${p}_${Math.random().toString(36).slice(2,10)}`;
const clamp = (v,min,max) => Math.max(min, Math.min(max, v));
const round = (v,n=2) => Number(v.toFixed(n));
const imageCache = new Map();

async function loadImage(src){
  if(imageCache.has(src)) return imageCache.get(src);
  const img = new Image(); img.decoding = 'async';
  const p = new Promise((resolve,reject)=>{ img.onload = ()=>resolve(img); img.onerror = reject; });
  img.src = src; imageCache.set(src,p); return p;
}
function readFileAsDataURL(file){ return new Promise((resolve,reject)=>{ const fr = new FileReader(); fr.onload=()=>resolve(fr.result); fr.onerror=reject; fr.readAsDataURL(file); }); }
function escapeHtml(str=''){ return String(str).replace(/[&<>\"]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[s])); }
function downloadBlob(blob, name){ const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=name; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href), 400); }
function downloadText(text, name){ downloadBlob(new Blob([text], {type:'application/json'}), name); }
function dataUrlToBlob(dataUrl){ const [head, body] = dataUrl.split(','); const mime = (/data:(.*?);/.exec(head)||[])[1] || 'image/png'; const bin = atob(body); const arr = new Uint8Array(bin.length); for(let i=0;i<bin.length;i++) arr[i]=bin.charCodeAt(i); return new Blob([arr], {type:mime}); }

function makePresetState(){
  const assets = {};
  PRESET_ASSETS.forEach(([id,name,category,src])=>{
    assets[id] = { id, name, category, src, sourceType:'bundled', notes:'', rotation:0, scale:1, flipX:false, flipY:false, crop:null, anchor:null, mount:null, muzzle:null, naturalW:null, naturalH:null };
  });
  const sources = {};
  PRESET_SOURCES.forEach(([id,name,category,src])=>{ sources[id] = { id, name, category, src, sourceType:'bundled', notes:'' }; });
  const layouts = {};
  Object.entries(SCENES).forEach(([sceneId, def])=>{
    layouts[sceneId] = {};
    const keys = def.usesMk ? ['1','2','3','4'] : ['default'];
    keys.forEach(k=> layouts[sceneId][k] = { elements: defaultSceneElements(sceneId, k==='default'?1:Number(k)) });
  });
  return {
    version:4.4,
    assets, sources, layouts,
    cameras: makeDefaultCameras(),
    ui: { currentTab:'assetTab', selectedAssetId:'ship_mk1', selectedSourceId:'src_ship_sheet', scene:'battle_player', mk:'1', selectedElementId:null, viewport:'phone', showGrid:true, showSafe:true, snap:true, snapStep:1, showGameView:true, showPointGuides:true },
  };
}
function makeDefaultCameras(){
  return {
    battle_player:{'1':{x:18,y:55,w:64,h:35},'2':{x:18,y:53,w:64,h:37},'3':{x:16,y:51,w:68,h:39},'4':{x:15,y:50,w:70,h:40}},
    battle_enemy:{'1':{x:18,y:10,w:64,h:35},'2':{x:18,y:10,w:64,h:37},'3':{x:16,y:9,w:68,h:39},'4':{x:15,y:8,w:70,h:40}},
    maint_ship:{'1':{x:18,y:24,w:64,h:52},'2':{x:16,y:22,w:68,h:56},'3':{x:14,y:20,w:72,h:60},'4':{x:12,y:18,w:76,h:64}},
    maint_fishing:{default:{x:15,y:20,w:70,h:60}}
  };
}
function currentCameraKey(){ return SCENES[state.ui.scene].usesMk ? state.ui.mk : 'default'; }
function currentCamera(){
  state.cameras ||= makeDefaultCameras();
  state.cameras[state.ui.scene] ||= {};
  const k=currentCameraKey();
  if(!state.cameras[state.ui.scene][k]) state.cameras[state.ui.scene][k]=clone(makeDefaultCameras()[state.ui.scene]?.[k] || {x:10,y:10,w:80,h:80});
  return state.cameras[state.ui.scene][k];
}
function repairState(saved){
  const base = makePresetState();
  if(!saved || typeof saved !== 'object') return base;
  saved.assets = saved.assets && Object.keys(saved.assets).length ? saved.assets : clone(base.assets);
  for(const [id,a] of Object.entries(base.assets)){ if(!saved.assets[id]) saved.assets[id]=clone(a); }
  saved.sources = saved.sources || {};
  for(const [id,src] of Object.entries(base.sources)){
    if(!saved.sources[id] || !saved.sources[id].src) saved.sources[id] = clone(src);
  }
  saved.layouts = saved.layouts || base.layouts;
  saved.ui = Object.assign({}, base.ui, saved.ui || {});
  saved.cameras = saved.cameras || clone(base.cameras);
  for(const [sceneId, variants] of Object.entries(saved.layouts||{})){
    for(const variant of Object.values(variants||{})){
      for(const el of (variant?.elements||[])) if(!el.placementMode) el.placementMode='anchor';
    }
  }
  if(!saved.sources[saved.ui.selectedSourceId]) saved.ui.selectedSourceId = Object.keys(saved.sources)[0] || null;
  if(!saved.assets[saved.ui.selectedAssetId]) saved.ui.selectedAssetId = Object.keys(saved.assets)[0] || null;
  saved.version = 4.5;
  saved.migratedFrom = saved.migratedFrom || 'v3-compatible';
  return saved;
}
function loadState(){ try{ const raw = localStorage.getItem(STORAGE_KEY); if(!raw) return null; const parsed = JSON.parse(raw); return repairState(parsed); }catch(e){ return null; } }
let state = repairState(loadState() || window.VOID_ANGLER_IMPORTED_V3 || makePresetState());

function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); refreshJsonViews(); }
function currentAsset(){ return state.assets[state.ui.selectedAssetId] || null; }
function currentSource(){ return state.sources[state.ui.selectedSourceId] || null; }
function currentSceneKey(){ return SCENES[state.ui.scene].usesMk ? state.ui.mk : 'default'; }
function currentElements(){ return state.layouts[state.ui.scene][currentSceneKey()].elements; }
function currentElement(){ return currentElements().find(el=>el.id===state.ui.selectedElementId) || null; }

function defaultSceneElements(sceneId, mk){
  if(sceneId === 'maint_fishing'){
    return [
      baseEl('rod','Rod','rod_standard',34,42,42,20,0),
      baseEl('reel','Reel','reel_standard',28,60,18,14,1),
      baseEl('line','Line','line_standard',73,30,16,10,1),
      baseEl('hook','Hook','hook_standard',74,64,13,11,1),
    ];
  }
  const isEnemy = sceneId === 'battle_enemy';
  const shipY = sceneId === 'maint_ship' ? 42 : (isEnemy ? 28 : 72);
  const shipW = sceneId === 'maint_ship' ? 56 : 48;
  const shipH = sceneId === 'maint_ship' ? 28 : 24;
  const elements = [baseEl('ship', `Ship Mk${mk}`, `ship_mk${mk}`, 50, shipY, shipW, shipH, 0, 1)];
  const weaponPosMap = {1:[{x:42,y:shipY-1},{x:58,y:shipY-1}],2:[{x:40,y:shipY},{x:50,y:shipY-5},{x:60,y:shipY}],3:[{x:38,y:shipY+1},{x:46,y:shipY-4},{x:54,y:shipY-4},{x:62,y:shipY+1}],4:[{x:37,y:shipY+1},{x:46,y:shipY-4},{x:54,y:shipY-4},{x:63,y:shipY+1}]};
  const equipPosMap = {1:[{x:44,y:shipY+5},{x:56,y:shipY+5}],2:[{x:41,y:shipY+5},{x:50,y:shipY+7},{x:59,y:shipY+5}],3:[{x:39,y:shipY+6},{x:46,y:shipY+9},{x:54,y:shipY+9},{x:61,y:shipY+6}],4:[{x:36,y:shipY+6},{x:43,y:shipY+10},{x:50,y:shipY+11},{x:57,y:shipY+10},{x:64,y:shipY+6}]};
  weaponPosMap[mk].slice(0, SLOT_CONFIG[mk].weapons).forEach((p,i)=>elements.push(baseEl(`weapon${i+1}`,`Weapon ${i+1}`,DEFAULT_WEAPONS[i],p.x,p.y,13,8,0,5)));
  equipPosMap[mk].slice(0, SLOT_CONFIG[mk].equips).forEach((p,i)=>elements.push(baseEl(`equip${i+1}`,`Equip ${i+1}`,DEFAULT_EQUIPS[i],p.x,p.y,11,8,0,4)));
  if(sceneId === 'battle_enemy') elements.push(baseEl('laser','Laser','w_laser',50,shipY+2,15,10,180,7));
  return elements;
}
function baseEl(key,name,assetId,x,y,w,h,rotation=0,z=1){ return { id:uid(key), key, name, assetId, x, y, w, h, rotation, scale:1, z, opacity:1, flipX:false, flipY:false, visible:true, placementMode:'anchor', notes:'' }; }

async function ensureAssetPrepared(asset){
  if(!asset) return null;
  const img = await loadImage(asset.src);
  asset.naturalW = img.naturalWidth; asset.naturalH = img.naturalHeight;
  if(!asset.crop) asset.crop = {x:0,y:0,w:img.naturalWidth,h:img.naturalHeight};
  if(!asset.anchor) asset.anchor = {x:asset.crop.w/2,y:asset.crop.h/2};
  if(!asset.mount) asset.mount = {x:asset.crop.w/2,y:asset.crop.h/2};
  if(!asset.muzzle) asset.muzzle = {x:asset.crop.w*0.85,y:asset.crop.h/2};
  return img;
}
function invalidateAssetCache(asset){ if(asset) delete asset._processed; }
async function getProcessedAsset(asset){
  await ensureAssetPrepared(asset);
  const key = JSON.stringify({src:asset.src,crop:asset.crop,rotation:asset.rotation,flipX:asset.flipX,flipY:asset.flipY,anchor:asset.anchor,mount:asset.mount,muzzle:asset.muzzle});
  if(asset._processed?.key === key) return asset._processed.value;
  const img = await loadImage(asset.src); const crop = asset.crop;
  const angle = (asset.rotation||0) * Math.PI / 180; const cw = crop.w, ch = crop.h;
  const corners = [[-cw/2,-ch/2],[cw/2,-ch/2],[cw/2,ch/2],[-cw/2,ch/2]].map(([x,y])=>{ if(asset.flipX)x=-x; if(asset.flipY)y=-y; return [x*Math.cos(angle)-y*Math.sin(angle), x*Math.sin(angle)+y*Math.cos(angle)]; });
  const xs = corners.map(c=>c[0]), ys = corners.map(c=>c[1]);
  const minX=Math.min(...xs), maxX=Math.max(...xs), minY=Math.min(...ys), maxY=Math.max(...ys);
  const outW = Math.max(1, Math.ceil(maxX-minX)), outH = Math.max(1, Math.ceil(maxY-minY));
  const canvas = document.createElement('canvas'); canvas.width = outW; canvas.height = outH;
  const ctx = canvas.getContext('2d'); ctx.translate(outW/2, outH/2); ctx.rotate(angle); ctx.scale(asset.flipX?-1:1, asset.flipY?-1:1); ctx.drawImage(img, crop.x, crop.y, crop.w, crop.h, -cw/2, -ch/2, cw, ch);
  function mapPt(p){ let x=p.x-cw/2,y=p.y-ch/2; if(asset.flipX)x=-x; if(asset.flipY)y=-y; const xr=x*Math.cos(angle)-y*Math.sin(angle), yr=x*Math.sin(angle)+y*Math.cos(angle); return {x:xr+outW/2, y:yr+outH/2}; }
  const value = { url:canvas.toDataURL('image/png'), width:outW, height:outH, anchor:mapPt(asset.anchor), mount:mapPt(asset.mount), muzzle:mapPt(asset.muzzle) };
  asset._processed = {key,value}; return value;
}

// ---------- UI rendering ----------
function renderTabs(){
  $$('.tab').forEach(btn=>btn.classList.toggle('active', btn.dataset.tab === state.ui.currentTab));
  $$('.tabPanel').forEach(panel=>panel.classList.toggle('active', panel.id === state.ui.currentTab));
}

async function renderAssetList(){
  const q = ($('#assetSearch').value||'').trim().toLowerCase();
  const items = Object.values(state.assets).filter(a=>!q || `${a.name} ${a.category}`.toLowerCase().includes(q)).sort((a,b)=>a.category.localeCompare(b.category)||a.name.localeCompare(b.name));
  const list = $('#assetList'); list.innerHTML='';
  for(const asset of items){
    const p = await getProcessedAsset(asset).catch(()=>null);
    const row = document.createElement('div');
    row.className = 'assetItem' + (asset.id===state.ui.selectedAssetId?' active':'');
    row.onclick = ()=>{ state.ui.selectedAssetId = asset.id; renderAll(); };
    row.innerHTML = `<div class="assetThumb">${p?`<img src="${p.url}">`:''}</div><div class="assetMeta"><strong>${escapeHtml(asset.name)}</strong><small>${escapeHtml(asset.category)} / ${escapeHtml(asset.id)}</small></div>`;
    list.appendChild(row);
  }
}
async function renderAssetSummary(){
  const asset = currentAsset();
  const info = $('#assetQuickInfo'); const hero = $('#assetHeroThumb');
  if(!asset){ info.textContent='アセットを選択してください。'; hero.innerHTML=''; return; }
  await ensureAssetPrepared(asset); const p = await getProcessedAsset(asset);
  info.innerHTML = `<strong>${escapeHtml(asset.name)}</strong><br>${escapeHtml(asset.category)} / ${escapeHtml(asset.id)}<br>元サイズ: ${asset.naturalW} × ${asset.naturalH}<br>現在切り抜き: ${Math.round(asset.crop.w)} × ${Math.round(asset.crop.h)}`;
  hero.innerHTML = `<img src="${p.url}" alt="">`;
  $('#adjustAssetName').textContent = `${asset.name} [${asset.id}]`;
  renderSourceQuickList();
}
function renderSourceQuickList(){
  const wrap = $('#sourceQuickList'); wrap.innerHTML='';
  Object.values(state.sources).slice(0,8).forEach(src=>{
    const card = document.createElement('div'); card.className='sourceQuickCard';
    card.innerHTML = `<strong>${escapeHtml(src.name)}</strong><br><small>${escapeHtml(src.category)}</small>`;
    card.onclick = ()=>{ state.ui.selectedSourceId = src.id; state.ui.currentTab = 'imageEditTab'; renderAll(); };
    wrap.appendChild(card);
  });
}

async function renderSourceList(){
  const q = ($('#sourceSearch').value||'').trim().toLowerCase();
  const items = Object.values(state.sources).filter(s=>!q || `${s.name} ${s.category}`.toLowerCase().includes(q)).sort((a,b)=>a.name.localeCompare(b.name));
  const list = $('#sourceList'); list.innerHTML='';
  for(const src of items){
    const img = await loadImage(src.src).catch(()=>null);
    const row = document.createElement('div'); row.className = 'sourceItem' + (src.id===state.ui.selectedSourceId?' active':'');
    row.onclick = ()=>{ state.ui.selectedSourceId = src.id; openSourceInEditor(src.id); renderAll(); };
    row.innerHTML = `<div class="assetThumb">${img?`<img src="${src.src}">`:''}</div><div class="assetMeta"><strong>${escapeHtml(src.name)}</strong><small>${escapeHtml(src.category)} / ${escapeHtml(src.id)}</small></div>`;
    list.appendChild(row);
  }
}

async function renderAdjustTab(){
  const asset = currentAsset();
  $('#noAssetText').hidden = !!asset; $('#assetInspector').hidden = !asset;
  if(!asset) return;
  await ensureAssetPrepared(asset);
  $('#assetNameInput').value = asset.name || ''; $('#assetCategoryInput').value = asset.category || '';
  $('#assetRotationInput').value = asset.rotation || 0; $('#assetScaleInput').value = asset.scale || 1;
  $('#assetFlipXInput').checked = !!asset.flipX; $('#assetFlipYInput').checked = !!asset.flipY;
  $('#cropXInput').value = Math.round(asset.crop.x); $('#cropYInput').value = Math.round(asset.crop.y); $('#cropWInput').value = Math.round(asset.crop.w); $('#cropHInput').value = Math.round(asset.crop.h);
  $('#anchorXInput').value = Math.round(asset.anchor.x); $('#anchorYInput').value = Math.round(asset.anchor.y); $('#mountXInput').value = Math.round(asset.mount.x); $('#mountYInput').value = Math.round(asset.mount.y); $('#muzzleXInput').value = Math.round(asset.muzzle.x); $('#muzzleYInput').value = Math.round(asset.muzzle.y);
  $('#assetNotesInput').value = asset.notes || '';
  $('#assetStageImg').src = asset.src;
  $('#assetModeText').textContent = `モード: ${adjustMode}`;
  requestAnimationFrame(()=>{ updateCropOverlay(); drawAdjustPreviews(); });
}

function getStageImageMetrics(){
  const img = $('#assetStageImg'); const stage = $('#assetStage'); if(!img.naturalWidth) return null;
  const sw = stage.clientWidth, sh = stage.clientHeight, ir = img.naturalWidth/img.naturalHeight, sr = sw/sh;
  let dw, dh, dx, dy;
  if(ir>sr){ dw=sw; dh=sw/ir; dx=0; dy=(sh-dh)/2; } else { dh=sh; dw=sh*ir; dy=0; dx=(sw-dw)/2; }
  return {dx,dy,dw,dh,scaleX:dw/img.naturalWidth,scaleY:dh/img.naturalHeight};
}
function updateCropOverlay(){
  const asset = currentAsset(); const img = $('#assetStageImg'); const cropBox = $('#cropBox');
  if(!asset || !img.naturalWidth){ cropBox.classList.add('hidden'); return; }
  const m = getStageImageMetrics(); cropBox.classList.remove('hidden');
  cropBox.style.left = `${m.dx + asset.crop.x * m.scaleX}px`; cropBox.style.top = `${m.dy + asset.crop.y * m.scaleY}px`; cropBox.style.width = `${asset.crop.w * m.scaleX}px`; cropBox.style.height = `${asset.crop.h * m.scaleY}px`;
  setMarker('#anchorMarker', asset.anchor, m); setMarker('#mountMarker', asset.mount, m); setMarker('#muzzleMarker', asset.muzzle, m);
}
function setMarker(sel, point, m){ const el = $(sel); if(!point){ el.classList.add('hidden'); return; } const asset = currentAsset(); el.classList.remove('hidden'); el.style.left = `${m.dx + (asset.crop.x + point.x)*m.scaleX}px`; el.style.top = `${m.dy + (asset.crop.y + point.y)*m.scaleY}px`; }
async function drawAdjustPreviews(){
  const asset = currentAsset(); if(!asset) return; const p = await getProcessedAsset(asset);
  drawPreviewCanvas($('#trimmedCanvas'), p.url, p.width, p.height, []);
  drawPreviewCanvas($('#anchorCanvas'), p.url, p.width, p.height, [{pt:p.anchor,color:'#5cf2ff',label:'A'},{pt:p.mount,color:'#ffcc73',label:'M'},{pt:p.muzzle,color:'#ff6f91',label:'T'}]);
}
function drawPreviewCanvas(canvas, src, iw, ih, marks=[]){
  const ctx = canvas.getContext('2d'); ctx.clearRect(0,0,canvas.width,canvas.height);
  loadImage(src).then(img=>{
    const scale = Math.min(canvas.width/iw, canvas.height/ih) * 0.9; const dw=iw*scale, dh=ih*scale, dx=(canvas.width-dw)/2, dy=(canvas.height-dh)/2;
    ctx.clearRect(0,0,canvas.width,canvas.height); ctx.drawImage(img, dx, dy, dw, dh);
    marks.forEach(m=>{ const x=dx+m.pt.x*scale, y=dy+m.pt.y*scale; ctx.strokeStyle=m.color; ctx.lineWidth=2; ctx.beginPath(); ctx.moveTo(x-8,y); ctx.lineTo(x+8,y); ctx.moveTo(x,y-8); ctx.lineTo(x,y+8); ctx.stroke(); ctx.fillStyle=m.color; ctx.beginPath(); ctx.arc(x,y,4,0,Math.PI*2); ctx.fill(); ctx.fillStyle='#fff'; ctx.font='bold 12px system-ui'; ctx.fillText(m.label,x+8,y-8); });
  });
}

async function renderLayoutEditor(){
  $('#sceneSelect').value = state.ui.scene; $('#mkSelect').value = state.ui.mk; $('#mkSelect').disabled = !SCENES[state.ui.scene].usesMk; $('#viewportSelect').value = state.ui.viewport; $('#showGridInput').checked = !!state.ui.showGrid; $('#showSafeAreaInput').checked = !!state.ui.showSafe; $('#snapInput').checked = !!state.ui.snap; $('#snapPercentSelect').value = String(state.ui.snapStep || 1); $('#showGameViewInput').checked=state.ui.showGameView!==false; $('#showPointGuidesInput').checked=state.ui.showPointGuides!==false; const cam=currentCamera(); $('#cameraXInput').value=round(cam.x,1); $('#cameraYInput').value=round(cam.y,1); $('#cameraWInput').value=round(cam.w,1); $('#cameraHInput').value=round(cam.h,1);
  await renderElementList(); await renderLayoutPreview(); renderElementInspector();
}
async function renderElementList(){
  const list = $('#elementList'); list.innerHTML='';
  for(const el of currentElements().slice().sort((a,b)=>a.z-b.z)){
    const asset = state.assets[el.assetId]; let thumb=''; if(asset){ const p = await getProcessedAsset(asset).catch(()=>null); if(p) thumb=`<img src="${p.url}">`; }
    const row = document.createElement('div'); row.className = 'elementItem' + (el.id===state.ui.selectedElementId?' active':''); row.onclick = ()=>{ state.ui.selectedElementId = el.id; renderLayoutEditor(); };
    row.innerHTML = `<div class="assetThumb">${thumb}</div><div class="assetMeta"><strong>${escapeHtml(el.name)}</strong><small>${escapeHtml(el.key)} / ${escapeHtml(el.assetId||'')}</small></div>`; list.appendChild(row);
  }
}
function layoutGeometry(el, proc, rect){
  if(window.VoidAnglerCanvasRenderer?.elementGeometry) return window.VoidAnglerCanvasRenderer.elementGeometry(el,proc,rect);
  // Emergency fallback only. v4.4 normally uses the shared Canvas geometry.
  const wPx=rect.width*(Number(el.w||10)/100)*(Number(el.scale||1));
  const hPx=rect.height*(Number(el.h||10)/100)*(Number(el.scale||1));
  const ax=.5,ay=.5,mx=.5,my=.5,tx=.5,ty=.5;
  return {wPx,hPx,ax,ay,mx,my,tx,ty,leftPx:rect.width*(Number(el.x||0)/100)-wPx/2,topPx:rect.height*(Number(el.y||0)/100)-hPx/2};
}

function pointMarkerHtml(cls,label,xPct,yPct){return `<i class="layoutPoint ${cls}" style="left:${xPct}%;top:${yPct}%">${label}</i>`;}
async function buildLayoutElement(el, rect, interactive=true, showImage=true){
  const asset=state.assets[el.assetId]; if(!asset) return null;
  const proc=await getProcessedAsset(asset).catch(()=>null); if(!proc) return null;
  const g=layoutGeometry(el,proc,rect);
  const wrap=document.createElement('div');
  wrap.className='layoutElement'+(interactive?' editOverlay':'')+(interactive&&el.id===state.ui.selectedElementId?' selected':'')+(!el.visible?' hiddenEl':'');
  wrap.dataset.id=el.id;
  wrap.style.left=`${g.leftPx}px`;wrap.style.top=`${g.topPx}px`;wrap.style.width=`${g.wPx}px`;wrap.style.height=`${g.hPx}px`;wrap.style.zIndex=el.z;wrap.style.opacity=el.opacity;
  wrap.style.transformOrigin=`${g.ax*100}% ${g.ay*100}%`;wrap.style.transform=`rotate(${el.rotation||0}deg) scale(${el.flipX?-1:1}, ${el.flipY?-1:1})`;
  let guides='';
  if(state.ui.showPointGuides && interactive){
    guides+=pointMarkerHtml('a','A',g.ax*100,g.ay*100)+pointMarkerHtml('m','M',g.mx*100,g.my*100)+pointMarkerHtml('t','T',g.tx*100,g.ty*100);
  }
  wrap.innerHTML=`${showImage?`<div class="elBody"><img src="${proc.url}"></div>`:''}${guides}<div class="placementBadge">${el.placementMode==='mount'?'M':'A'}</div>${interactive?`<div class="elName">${escapeHtml(el.name)}</div><div class="resizeHandle"></div>`:''}`;
  if(interactive) wrap.addEventListener('pointerdown',onLayoutPointerDown);
  return wrap;
}
function cameraStyle(cam,rect){return {left:rect.width*cam.x/100,top:rect.height*cam.y/100,width:rect.width*cam.w/100,height:rect.height*cam.h/100};}
function viewportVirtualSize(viewport=state.ui.viewport){
  if(viewport==='landscape') return {width:1600,height:900};
  if(viewport==='square') return {width:1000,height:1000};
  if(viewport==='wide') return {width:2100,height:900};
  return {width:900,height:1600}; // phone
}
async function collectProcessedAssets(elements=currentElements()){
  const processedAssets={};
  for(const el of elements){
    if(processedAssets[el.assetId]) continue;
    const asset=state.assets[el.assetId]; if(!asset) continue;
    const proc=await getProcessedAsset(asset).catch(()=>null); if(proc) processedAssets[el.assetId]=proc;
  }
  return processedAssets;
}
async function renderMainCanvasPreview(preview, rect){
  if(!window.VoidAnglerCanvasRenderer) return null;
  const canvas=document.createElement('canvas');
  canvas.id='layoutMainCanvas'; canvas.className='layoutMainCanvas';
  preview.appendChild(canvas);
  const processedAssets=await collectProcessedAssets();
  const result=await window.VoidAnglerCanvasRenderer.renderSceneToCanvas(canvas,{
    viewport:state.ui.viewport,camera:{x:0,y:0,w:100,h:100},elements:currentElements(),processedAssets,
    cssWidth:rect.width,cssHeight:rect.height,background:false
  });
  return result;
}
async function renderCanvasGameViewPreview(){
  const canvas=$('#canvasGameViewPreview'); if(!canvas||!window.VoidAnglerCanvasRenderer)return;
  const cam=currentCamera(), base=viewportVirtualSize();
  const cameraAspect=(base.width*(cam.w/100))/(base.height*(cam.h/100));
  const wrap=canvas.parentElement; const maxW=Math.max(220,Math.min(620,wrap?.clientWidth||620));
  const cssW=maxW, cssH=Math.max(120,cssW/cameraAspect);
  const processedAssets=await collectProcessedAssets();
  const result=await window.VoidAnglerCanvasRenderer.renderSceneToCanvas(canvas,{viewport:state.ui.viewport,camera:cam,elements:currentElements(),processedAssets,cssWidth:cssW,cssHeight:cssH});
  const status=$('#canvasRendererStatus'); if(status)status.textContent=`共通Renderer: ${Math.round(result.width)}×${Math.round(result.height)} / scale ${result.scale.toFixed(3)}`;
}
async function renderGameViewPreview(){
  const host=$('#gameViewPreview'); if(!host) return; host.innerHTML='';
  const cam=currentCamera(), base=viewportVirtualSize();
  const camPx={
    x:base.width*(cam.x/100), y:base.height*(cam.y/100),
    width:base.width*(cam.w/100), height:base.height*(cam.h/100)
  };
  // The preview itself must have the exact same aspect ratio as the camera rectangle.
  // This avoids stretching a portrait Game View into the old fixed landscape preview box.
  host.style.aspectRatio=`${camPx.width} / ${camPx.height}`;
  const hr=host.getBoundingClientRect(); if(hr.width<1||hr.height<1||camPx.width<1||camPx.height<1)return;
  const scale=Math.min(hr.width/camPx.width,hr.height/camPx.height);
  const shownW=camPx.width*scale, shownH=camPx.height*scale;
  const centerX=(hr.width-shownW)/2, centerY=(hr.height-shownH)/2;
  const worldW=base.width*scale, worldH=base.height*scale;
  const world=document.createElement('div'); world.className='gameWorld';
  world.style.width=`${worldW}px`; world.style.height=`${worldH}px`;
  world.style.left=`${centerX-camPx.x*scale}px`; world.style.top=`${centerY-camPx.y*scale}px`;
  const fakeRect={width:worldW,height:worldH};
  for(const el of currentElements().slice().sort((a,b)=>a.z-b.z)){
    const node=await buildLayoutElement(el,fakeRect,false); if(node) world.appendChild(node);
  }
  host.appendChild(world);
  await renderCanvasGameViewPreview();
}
async function renderLayoutPreview(){
  const preview=$('#layoutPreview');
  preview.classList.toggle('gridOn',!!state.ui.showGrid); preview.classList.toggle('safeOn',!!state.ui.showSafe);
  $('#viewportFrame').className=`viewportFrame ${state.ui.viewport}`;
  preview.innerHTML='';
  const rect=preview.getBoundingClientRect();
  await renderMainCanvasPreview(preview,rect);
  const cross=document.createElement('div'); cross.className='centerCross'; preview.appendChild(cross);

  // Transparent DOM handles only. The visible artwork is always the shared Canvas Renderer.
  for(const el of currentElements().slice().sort((a,b)=>a.z-b.z)){
    const node=await buildLayoutElement(el,rect,true,false); if(node) preview.appendChild(node);
  }
  if(state.ui.showGameView){
    const cam=currentCamera(), cs=cameraStyle(cam,rect), box=document.createElement('div');
    box.className='gameViewBox'; box.style.left=`${cs.left}px`; box.style.top=`${cs.top}px`; box.style.width=`${cs.width}px`; box.style.height=`${cs.height}px`;
    box.innerHTML='<div class="gameViewHandle"></div>'; box.addEventListener('pointerdown',onCameraPointerDown); preview.appendChild(box);
  }
  await renderGameViewPreview();
}

function renderElementInspector(){
  const el = currentElement(); $('#noElementText').hidden = !!el; $('#elementInspector').hidden = !el; if(!el) return;
  $('#elementNameInput').value = el.name || ''; $('#elementAssetInput').value = el.assetId || ''; $('#elementPlacementInput').value=el.placementMode==='mount'?'mount':'anchor'; $('#elementXInput').value = round(el.x,1); $('#elementYInput').value = round(el.y,1); $('#elementWInput').value = round(el.w,1); $('#elementHInput').value = round(el.h,1); $('#elementRotInput').value = el.rotation || 0; $('#elementScaleInput').value = el.scale || 1; $('#elementZInput').value = el.z || 1; $('#elementOpacityInput').value = el.opacity ?? 1; $('#elementFlipXInput').checked = !!el.flipX; $('#elementFlipYInput').checked = !!el.flipY; $('#elementVisibleInput').checked = !!el.visible; $('#elementNotesInput').value = el.notes || '';
}

function refreshJsonViews(){ const json = JSON.stringify(state, null, 2); $('#jsonPreview').value = json; $('#dataDump').value = json; }

// ---------- Image editor ----------
const imageEditor = {
  sourceId: null,
  img: null,
  zoom: 2,
  tool: 'brushKeep',
  brushSize: 18,
  maskCanvas: null,
  maskCtx: null,
  drawing: null,
};

async function openSourceInEditor(sourceId){
  if(!state.sources || !Object.keys(state.sources).length) state = repairState(state);
  imageEditor.sourceId = sourceId || Object.keys(state.sources)[0] || null;
  const src = state.sources[imageEditor.sourceId]; if(!src){ renderImageEditor(); return; }
  state.ui.selectedSourceId = src.id;
  const img = await loadImage(src.src); imageEditor.img = img; imageEditor.zoom = Number($('#sourceZoomInput')?.value || imageEditor.zoom || 2);
  imageEditor.maskCanvas = document.createElement('canvas'); imageEditor.maskCanvas.width = img.naturalWidth; imageEditor.maskCanvas.height = img.naturalHeight; imageEditor.maskCtx = imageEditor.maskCanvas.getContext('2d'); imageEditor.maskCtx.clearRect(0,0,img.naturalWidth,img.naturalHeight);
  renderImageEditor();
}
async function openAssetAsSource(asset){
  const id = uid('src'); state.sources[id] = { id, name:`${asset.name} (asset source)`, category:'asset-source', src:asset.src, sourceType:'embedded', notes:`derived from asset ${asset.id}` };
  state.ui.selectedSourceId = id; await openSourceInEditor(id);
}
function renderImageEditor(){
  const src = currentSource(); const info = $('#sourceInfo'); const boundsInfo = $('#maskBoundsInfo');
  if(!src || !imageEditor.img){ info.textContent='ソースを選択してください。'; boundsInfo.textContent=''; return; }
  info.innerHTML = `<strong>${escapeHtml(src.name)}</strong><br>${escapeHtml(src.category)} / ${escapeHtml(src.id)}<br>サイズ: ${imageEditor.img.naturalWidth} × ${imageEditor.img.naturalHeight}`;
  const canvas = $('#imageEditorCanvas'); const zoom = imageEditor.zoom; canvas.width = imageEditor.img.naturalWidth * zoom; canvas.height = imageEditor.img.naturalHeight * zoom; canvas.style.width = `${canvas.width}px`; canvas.style.height = `${canvas.height}px`;
  const ctx = canvas.getContext('2d'); ctx.imageSmoothingEnabled = false; ctx.clearRect(0,0,canvas.width,canvas.height); ctx.save(); ctx.scale(zoom,zoom); ctx.drawImage(imageEditor.img,0,0);
  // darken unselected, tint selected
  if(imageEditor.maskCanvas){
    ctx.fillStyle = 'rgba(0,0,0,0.35)'; ctx.fillRect(0,0,imageEditor.img.naturalWidth,imageEditor.img.naturalHeight);
    ctx.globalCompositeOperation = 'destination-out'; ctx.drawImage(imageEditor.maskCanvas,0,0);
    ctx.globalCompositeOperation = 'source-over'; ctx.drawImage(imageEditor.img,0,0);
    ctx.globalAlpha = 0.33; ctx.fillStyle = '#5cf2ff';
    const tmp = document.createElement('canvas'); tmp.width = imageEditor.maskCanvas.width; tmp.height = imageEditor.maskCanvas.height; const tctx = tmp.getContext('2d'); tctx.drawImage(imageEditor.maskCanvas,0,0); tctx.globalCompositeOperation = 'source-in'; tctx.fillStyle = '#5cf2ff'; tctx.fillRect(0,0,tmp.width,tmp.height); ctx.drawImage(tmp,0,0); ctx.globalAlpha = 1;
  }
  if(imageEditor.drawing?.type?.startsWith('rect') && imageEditor.drawing.current){
    const r = imageEditorRect(); ctx.strokeStyle = imageEditor.tool.includes('Erase') ? '#ff8d89' : '#5cf2ff'; ctx.lineWidth = 1/zoom; ctx.setLineDash([4/zoom,4/zoom]); ctx.strokeRect(r.x, r.y, r.w, r.h); ctx.setLineDash([]);
  }
  ctx.restore();
  drawCutoutPreview();
  const b = getMaskBounds(); boundsInfo.innerHTML = b ? `選択範囲: x=${b.x}, y=${b.y}, w=${b.w}, h=${b.h}` : 'まだ何も選択されていません。';
  $$('.toolBtn').forEach(btn=>btn.classList.toggle('active', btn.dataset.tool === imageEditor.tool));
}
function getCanvasPointFromEvent(e){
  const rect = $('#imageEditorCanvas').getBoundingClientRect();
  return { x: clamp(Math.floor((e.clientX - rect.left) / imageEditor.zoom),0,imageEditor.img.naturalWidth-1), y: clamp(Math.floor((e.clientY - rect.top) / imageEditor.zoom),0,imageEditor.img.naturalHeight-1) };
}
function paintMaskLine(from,to,erase=false){
  const ctx = imageEditor.maskCtx; ctx.save(); ctx.lineCap='round'; ctx.lineJoin='round'; ctx.lineWidth = imageEditor.brushSize; if(erase){ ctx.globalCompositeOperation='destination-out'; ctx.strokeStyle='rgba(0,0,0,1)'; } else { ctx.globalCompositeOperation='source-over'; ctx.strokeStyle='rgba(255,255,255,1)'; }
  ctx.beginPath(); ctx.moveTo(from.x, from.y); ctx.lineTo(to.x, to.y); ctx.stroke(); ctx.restore();
}
function imageEditorRect(){
  const s = imageEditor.drawing.start, c = imageEditor.drawing.current || s; return { x: Math.min(s.x,c.x), y: Math.min(s.y,c.y), w: Math.abs(c.x-s.x)+1, h: Math.abs(c.y-s.y)+1 };
}
function applyRectToMask(erase=false){
  const r = imageEditorRect(); const ctx = imageEditor.maskCtx; ctx.save(); if(erase){ ctx.globalCompositeOperation='destination-out'; ctx.clearRect(r.x,r.y,r.w,r.h); } else { ctx.fillStyle='rgba(255,255,255,1)'; ctx.fillRect(r.x,r.y,r.w,r.h); } ctx.restore();
}
function getMaskBounds(){
  if(!imageEditor.maskCanvas) return null; const ctx = imageEditor.maskCtx; const {width,height} = imageEditor.maskCanvas; const data = ctx.getImageData(0,0,width,height).data; let minX=width, minY=height, maxX=-1, maxY=-1;
  for(let y=0;y<height;y++) for(let x=0;x<width;x++){ const a = data[(y*width + x)*4 + 3]; if(a>8){ if(x<minX)minX=x; if(y<minY)minY=y; if(x>maxX)maxX=x; if(y>maxY)maxY=y; } }
  if(maxX<0) return null; return {x:minX,y:minY,w:maxX-minX+1,h:maxY-minY+1};
}
function drawCutoutPreview(){
  const canvas = $('#cutoutPreviewCanvas'); const ctx = canvas.getContext('2d'); ctx.clearRect(0,0,canvas.width,canvas.height); if(!imageEditor.img || !imageEditor.maskCanvas) return;
  const bounds = getMaskBounds(); if(!bounds) return; const out = document.createElement('canvas'); out.width = bounds.w; out.height = bounds.h; const octx = out.getContext('2d'); octx.drawImage(imageEditor.img, -bounds.x, -bounds.y); octx.globalCompositeOperation = 'destination-in'; octx.drawImage(imageEditor.maskCanvas, -bounds.x, -bounds.y);
  const scale = Math.min(canvas.width/bounds.w, canvas.height/bounds.h) * 0.9; const dw=bounds.w*scale, dh=bounds.h*scale, dx=(canvas.width-dw)/2, dy=(canvas.height-dh)/2; ctx.drawImage(out, dx, dy, dw, dh);
}
function selectOpaquePixels(){
  if(!imageEditor.img) return; imageEditor.maskCtx.clearRect(0,0,imageEditor.maskCanvas.width,imageEditor.maskCanvas.height); const tmp = document.createElement('canvas'); tmp.width = imageEditor.img.naturalWidth; tmp.height = imageEditor.img.naturalHeight; const tctx = tmp.getContext('2d'); tctx.drawImage(imageEditor.img,0,0); const imgData = tctx.getImageData(0,0,tmp.width,tmp.height); const out = imageEditor.maskCtx.createImageData(tmp.width,tmp.height); for(let i=0;i<imgData.data.length;i+=4){ const a = imgData.data[i+3]; if(a>8){ out.data[i]=255; out.data[i+1]=255; out.data[i+2]=255; out.data[i+3]=255; } } imageEditor.maskCtx.putImageData(out,0,0); renderImageEditor();
}
function fillAllMask(){ if(!imageEditor.maskCtx) return; imageEditor.maskCtx.fillStyle='rgba(255,255,255,1)'; imageEditor.maskCtx.fillRect(0,0,imageEditor.maskCanvas.width,imageEditor.maskCanvas.height); renderImageEditor(); }
function clearAllMask(){ if(!imageEditor.maskCtx) return; imageEditor.maskCtx.clearRect(0,0,imageEditor.maskCanvas.width,imageEditor.maskCanvas.height); renderImageEditor(); }
function invertMask(){ if(!imageEditor.maskCtx) return; const {width,height} = imageEditor.maskCanvas; const data = imageEditor.maskCtx.getImageData(0,0,width,height); for(let i=0;i<data.data.length;i+=4){ const a = data.data[i+3]; const next = a>8 ? 0 : 255; data.data[i]=255; data.data[i+1]=255; data.data[i+2]=255; data.data[i+3]=next; } imageEditor.maskCtx.putImageData(data,0,0); renderImageEditor(); }
function resetImageEditor(){ if(!currentSource()) return; openSourceInEditor(state.ui.selectedSourceId); }
function getCutoutData(){
  if(!imageEditor.img || !imageEditor.maskCanvas) return null; const bounds = getMaskBounds(); if(!bounds) return null; const out = document.createElement('canvas'); out.width = bounds.w; out.height = bounds.h; const octx = out.getContext('2d'); octx.drawImage(imageEditor.img, -bounds.x, -bounds.y); octx.globalCompositeOperation='destination-in'; octx.drawImage(imageEditor.maskCanvas, -bounds.x, -bounds.y); return { dataUrl: out.toDataURL('image/png'), width: bounds.w, height: bounds.h, bounds };
}
function saveMaskAsAsset(replaceCurrent=false){
  const cut = getCutoutData(); if(!cut){ alert('まず画像編集で残したい部分を選択してください。'); return; }
  const name = ($('#newAssetNameInput').value || (replaceCurrent && currentAsset() ? currentAsset().name : 'new_asset')).trim(); const category = ($('#newAssetCategoryInput').value || (replaceCurrent && currentAsset() ? currentAsset().category : 'edited')).trim();
  if(replaceCurrent){
    const asset = currentAsset(); if(!asset){ alert('上書きするアセットがありません。'); return; }
    asset.src = cut.dataUrl; asset.name = name || asset.name; asset.category = category || asset.category; asset.sourceType = 'embedded'; asset.rotation = 0; asset.scale = 1; asset.flipX = false; asset.flipY = false; asset.crop = {x:0,y:0,w:cut.width,h:cut.height}; asset.anchor = {x:cut.width/2,y:cut.height/2}; asset.mount = {x:cut.width/2,y:cut.height/2}; asset.muzzle = {x:cut.width*0.85,y:cut.height/2}; asset.naturalW = cut.width; asset.naturalH = cut.height; invalidateAssetCache(asset); state.ui.currentTab = 'adjustTab'; renderAll(); return;
  }
  const id = uid('asset'); state.assets[id] = { id, name:name || id, category:category || 'edited', src:cut.dataUrl, sourceType:'embedded', notes:`created from source ${state.ui.selectedSourceId}`, rotation:0, scale:1, flipX:false, flipY:false, crop:{x:0,y:0,w:cut.width,h:cut.height}, anchor:{x:cut.width/2,y:cut.height/2}, mount:{x:cut.width/2,y:cut.height/2}, muzzle:{x:cut.width*0.85,y:cut.height/2}, naturalW:cut.width,naturalH:cut.height };
  state.ui.selectedAssetId = id; state.ui.currentTab = 'adjustTab'; renderAll();
}

// ---------- input handlers ----------
let adjustMode = '通常';
let cropDrag = null;
let layoutDrag = null;

function syncAssetFromInspector(){
  const asset = currentAsset(); if(!asset) return;
  asset.name = $('#assetNameInput').value; asset.category = $('#assetCategoryInput').value; asset.rotation = Number($('#assetRotationInput').value) || 0; asset.scale = Number($('#assetScaleInput').value) || 1; asset.flipX = $('#assetFlipXInput').checked; asset.flipY = $('#assetFlipYInput').checked;
  asset.crop.x = clamp(Number($('#cropXInput').value)||0,0,asset.naturalW-1); asset.crop.y = clamp(Number($('#cropYInput').value)||0,0,asset.naturalH-1); asset.crop.w = clamp(Number($('#cropWInput').value)||1,1,asset.naturalW-asset.crop.x); asset.crop.h = clamp(Number($('#cropHInput').value)||1,1,asset.naturalH-asset.crop.y);
  asset.anchor = {x:clamp(Number($('#anchorXInput').value)||0,0,asset.crop.w), y:clamp(Number($('#anchorYInput').value)||0,0,asset.crop.h)}; asset.mount = {x:clamp(Number($('#mountXInput').value)||0,0,asset.crop.w), y:clamp(Number($('#mountYInput').value)||0,0,asset.crop.h)}; asset.muzzle = {x:clamp(Number($('#muzzleXInput').value)||0,0,asset.crop.w), y:clamp(Number($('#muzzleYInput').value)||0,0,asset.crop.h)}; asset.notes = $('#assetNotesInput').value;
  invalidateAssetCache(asset); renderAll();
}
async function autoTrimAsset(asset){
  const img = await loadImage(asset.src); const canvas = document.createElement('canvas'); canvas.width=img.naturalWidth; canvas.height=img.naturalHeight; const ctx = canvas.getContext('2d'); ctx.drawImage(img,0,0); const data = ctx.getImageData(0,0,canvas.width,canvas.height).data; let minX=canvas.width,minY=canvas.height,maxX=-1,maxY=-1;
  for(let y=0;y<canvas.height;y++) for(let x=0;x<canvas.width;x++){ const a = data[(y*canvas.width+x)*4+3]; if(a>8){ if(x<minX)minX=x; if(y<minY)minY=y; if(x>maxX)maxX=x; if(y>maxY)maxY=y; } }
  if(maxX<0){ asset.crop={x:0,y:0,w:img.naturalWidth,h:img.naturalHeight}; } else { asset.crop={x:minX,y:minY,w:maxX-minX+1,h:maxY-minY+1}; }
  asset.anchor={x:asset.crop.w/2,y:asset.crop.h/2}; asset.mount={x:asset.crop.w/2,y:asset.crop.h/2}; asset.muzzle={x:asset.crop.w*0.85,y:asset.crop.h/2}; invalidateAssetCache(asset); renderAll();
}
function syncAssetInspectorValues(){ const a=currentAsset(); if(!a) return; $('#cropXInput').value=Math.round(a.crop.x); $('#cropYInput').value=Math.round(a.crop.y); $('#cropWInput').value=Math.round(a.crop.w); $('#cropHInput').value=Math.round(a.crop.h); $('#anchorXInput').value=Math.round(a.anchor.x); $('#anchorYInput').value=Math.round(a.anchor.y); $('#mountXInput').value=Math.round(a.mount.x); $('#mountYInput').value=Math.round(a.mount.y); $('#muzzleXInput').value=Math.round(a.muzzle.x); $('#muzzleYInput').value=Math.round(a.muzzle.y); }

function updateElementFromInspector(){
  const el = currentElement(); if(!el) return;
  el.name = $('#elementNameInput').value; el.assetId = $('#elementAssetInput').value; el.placementMode=$('#elementPlacementInput').value==='mount'?'mount':'anchor'; el.x = Number($('#elementXInput').value)||0; el.y = Number($('#elementYInput').value)||0; el.w = Math.max(1, Number($('#elementWInput').value)||1); el.h = Math.max(1, Number($('#elementHInput').value)||1); el.rotation = Number($('#elementRotInput').value)||0; el.scale = Math.max(0.1, Number($('#elementScaleInput').value)||1); el.z = Number($('#elementZInput').value)||1; el.opacity = clamp(Number($('#elementOpacityInput').value)||1,0,1); el.flipX = $('#elementFlipXInput').checked; el.flipY = $('#elementFlipYInput').checked; el.visible = $('#elementVisibleInput').checked; el.notes = $('#elementNotesInput').value; renderAll();
}
function syncElementInspectorValues(){ const el=currentElement(); if(!el) return; $('#elementXInput').value=round(el.x,1); $('#elementYInput').value=round(el.y,1); $('#elementWInput').value=round(el.w,1); $('#elementHInput').value=round(el.h,1); }

let cameraDrag=null;
function onCameraPointerDown(e){
  const rect=$('#layoutPreview').getBoundingClientRect(), cam=clone(currentCamera()), resize=e.target.classList.contains('gameViewHandle');
  cameraDrag={type:resize?'resize':'move',startX:e.clientX,startY:e.clientY,startCam:cam,w:rect.width,h:rect.height};
  e.stopPropagation();e.preventDefault();
}
function syncCameraInputs(){const cam=currentCamera();$('#cameraXInput').value=round(cam.x,1);$('#cameraYInput').value=round(cam.y,1);$('#cameraWInput').value=round(cam.w,1);$('#cameraHInput').value=round(cam.h,1);}
function fitCameraToElements(){
  const els=currentElements().filter(e=>e.visible!==false); if(!els.length)return;
  let minX=100,minY=100,maxX=0,maxY=0;
  for(const e of els){const sw=(e.w||10)*(e.scale||1),sh=(e.h||10)*(e.scale||1);minX=Math.min(minX,e.x-sw*.6);maxX=Math.max(maxX,e.x+sw*.6);minY=Math.min(minY,e.y-sh*.6);maxY=Math.max(maxY,e.y+sh*.6);}
  const pad=5,cam=currentCamera();cam.x=round(clamp(minX-pad,0,95),1);cam.y=round(clamp(minY-pad,0,95),1);cam.w=round(clamp(maxX-minX+pad*2,5,100-cam.x),1);cam.h=round(clamp(maxY-minY+pad*2,5,100-cam.y),1);renderLayoutEditor();saveState();
}
function onCropPointerDown(e){ const asset=currentAsset(); if(!asset) return; const handle=e.target.dataset.handle; cropDrag = { type: handle ? 'resize':'move', handle, startX:e.clientX, startY:e.clientY, startCrop: clone(asset.crop) }; e.preventDefault(); }
function onAssetStagePointerDown(e){ const asset=currentAsset(); if(!asset || adjustMode==='通常') return; const m=getStageImageMetrics(); if(!m) return; const stageRect=$('#assetStage').getBoundingClientRect(); const px=(e.clientX-stageRect.left-m.dx)/m.scaleX - asset.crop.x; const py=(e.clientY-stageRect.top-m.dy)/m.scaleY - asset.crop.y; const pt={x:clamp(Math.round(px),0,asset.crop.w), y:clamp(Math.round(py),0,asset.crop.h)}; if(adjustMode==='A') asset.anchor=pt; else if(adjustMode==='M') asset.mount=pt; else if(adjustMode==='T') asset.muzzle=pt; invalidateAssetCache(asset); renderAll(); }
function onLayoutPointerDown(e){ state.ui.selectedElementId=e.currentTarget.dataset.id; const previewRect=$('#layoutPreview').getBoundingClientRect(); const el=currentElement(); const isResize=e.target.classList.contains('resizeHandle'); layoutDrag={type:isResize?'resize':'move', startX:e.clientX, startY:e.clientY, startEl:clone(el), previewW:previewRect.width, previewH:previewRect.height}; renderLayoutEditor(); e.stopPropagation(); e.preventDefault(); }
function onGlobalPointerMove(e){
  const asset = currentAsset();
  if(cropDrag && asset){ const m=getStageImageMetrics(); const dx=(e.clientX-cropDrag.startX)/m.scaleX, dy=(e.clientY-cropDrag.startY)/m.scaleY, c=clone(cropDrag.startCrop); if(cropDrag.type==='move'){ asset.crop.x=clamp(Math.round(c.x+dx),0,asset.naturalW-c.w); asset.crop.y=clamp(Math.round(c.y+dy),0,asset.naturalH-c.h); } else { if(cropDrag.handle.includes('n')){ asset.crop.y=clamp(Math.round(c.y+dy),0,c.y+c.h-1); asset.crop.h=clamp(Math.round(c.h-dy),1,asset.naturalH-asset.crop.y); } if(cropDrag.handle.includes('s')){ asset.crop.h=clamp(Math.round(c.h+dy),1,asset.naturalH-c.y); asset.crop.y=c.y; } if(cropDrag.handle.includes('w')){ asset.crop.x=clamp(Math.round(c.x+dx),0,c.x+c.w-1); asset.crop.w=clamp(Math.round(c.w-dx),1,asset.naturalW-asset.crop.x); } if(cropDrag.handle.includes('e')){ asset.crop.w=clamp(Math.round(c.w+dx),1,asset.naturalW-c.x); asset.crop.x=c.x; } asset.anchor.x=clamp(asset.anchor.x,0,asset.crop.w); asset.anchor.y=clamp(asset.anchor.y,0,asset.crop.h); asset.mount.x=clamp(asset.mount.x,0,asset.crop.w); asset.mount.y=clamp(asset.mount.y,0,asset.crop.h); asset.muzzle.x=clamp(asset.muzzle.x,0,asset.crop.w); asset.muzzle.y=clamp(asset.muzzle.y,0,asset.crop.h); }
    invalidateAssetCache(asset); syncAssetInspectorValues(); updateCropOverlay(); drawAdjustPreviews(); saveState(); }
  if(cameraDrag){const cam=currentCamera(),dx=(e.clientX-cameraDrag.startX)/cameraDrag.w*100,dy=(e.clientY-cameraDrag.startY)/cameraDrag.h*100;if(cameraDrag.type==='move'){cam.x=round(clamp(cameraDrag.startCam.x+dx,0,100-cameraDrag.startCam.w),1);cam.y=round(clamp(cameraDrag.startCam.y+dy,0,100-cameraDrag.startCam.h),1);}else{cam.w=round(clamp(cameraDrag.startCam.w+dx,5,100-cameraDrag.startCam.x),1);cam.h=round(clamp(cameraDrag.startCam.h+dy,5,100-cameraDrag.startCam.y),1);}syncCameraInputs();renderLayoutPreview();saveState();}
  if(layoutDrag){ const el=currentElement(); if(!el) return; if(layoutDrag.type==='move'){ const step = state.ui.snapStep || 1; let x=layoutDrag.startEl.x + ((e.clientX-layoutDrag.startX)/layoutDrag.previewW)*100; let y=layoutDrag.startEl.y + ((e.clientY-layoutDrag.startY)/layoutDrag.previewH)*100; if(state.ui.snap){ x=Math.round(x/step)*step; y=Math.round(y/step)*step; } el.x=round(clamp(x,0,100),1); el.y=round(clamp(y,0,100),1); } else { const step = state.ui.snapStep || 1; let w=layoutDrag.startEl.w + ((e.clientX-layoutDrag.startX)/layoutDrag.previewW)*100; let h=layoutDrag.startEl.h + ((e.clientY-layoutDrag.startY)/layoutDrag.previewH)*100; if(state.ui.snap){ w=Math.round(w/step)*step; h=Math.round(h/step)*step; } el.w=round(Math.max(1,w),1); el.h=round(Math.max(1,h),1); } syncElementInspectorValues(); renderLayoutPreview(); saveState(); }
}
function onGlobalPointerUp(){ cropDrag=null; layoutDrag=null; cameraDrag=null; if(imageEditor.drawing && imageEditor.tool.startsWith('rect')){ applyRectToMask(imageEditor.tool==='rectErase'); imageEditor.drawing=null; renderImageEditor(); } else imageEditor.drawing=null; }

function gameExportPayload(){
  const assets={};
  for(const [id,a] of Object.entries(state.assets)) assets[id]={id:a.id,name:a.name,category:a.category,src:a._processed?.value?.url||a.src,anchor:a._processed?.value?.anchor||a.anchor,mount:a._processed?.value?.mount||a.mount,tip:a._processed?.value?.muzzle||a.muzzle,width:a._processed?.value?.width||a.crop?.w||a.naturalW,height:a._processed?.value?.height||a.crop?.h||a.naturalH};
  return {version:4.5,renderer:{id:'void-angler-canvas',version:window.VoidAnglerCanvasRenderer?.version||'canvas-v1.1',canonical:true},coordinateSystem:{unit:'percent',viewportBasis:'scene-canvas',scaleMode:'contain-box-before-rotation',anchorMeaning:'bitmap-transform-origin',mountMeaning:'bitmap-attachment-point',tipMeaning:'bitmap-emitter-point'},assets,layouts:state.layouts,cameras:state.cameras};
}
function bindEvents(){
  $$('.tab').forEach(btn=>btn.onclick=()=>{ state.ui.currentTab=btn.dataset.tab; renderAll(); });
  $('#assetSearch').oninput = renderAssetList; $('#sourceSearch').oninput = renderSourceList;

  $('#assetFileInput').addEventListener('change', async e=>{ const files=Array.from(e.target.files||[]); if(!files.length) return; let firstId=null; for(const file of files){ const src=await readFileAsDataURL(file); const id=uid('asset'); if(!firstId) firstId=id; state.assets[id]={ id, name:file.name.replace(/\.[^.]+$/,''), category:'uploaded', src, sourceType:'embedded', notes:'', rotation:0, scale:1, flipX:false, flipY:false, crop:null, anchor:null, mount:null, muzzle:null, naturalW:null, naturalH:null }; await ensureAssetPrepared(state.assets[id]); } state.ui.selectedAssetId = firstId || state.ui.selectedAssetId; e.target.value=''; renderAll(); });
  $('#duplicateAssetBtn').onclick = ()=>{ const a=currentAsset(); if(!a) return; const id=uid('asset'); const copy=clone(a); copy.id=id; copy.name += ' copy'; delete copy._processed; state.assets[id]=copy; state.ui.selectedAssetId=id; renderAll(); };
  $('#deleteAssetBtn').onclick = ()=>{ const a=currentAsset(); if(!a) return; if(!confirm(`${a.name} を削除しますか？`)) return; delete state.assets[a.id]; state.ui.selectedAssetId = Object.keys(state.assets)[0] || null; renderAll(); };
  $('#openAssetInAdjustBtn').onclick = ()=>{ state.ui.currentTab='adjustTab'; renderAll(); };
  $('#openAssetAsSourceBtn').onclick = async ()=>{ const a=currentAsset(); if(!a) return; await openAssetAsSource(a); state.ui.currentTab='imageEditTab'; renderAll(); };
  $('#openAssetInLayoutBtn').onclick = ()=>{ state.ui.currentTab='layoutTab'; renderAll(); };

  $('#sourceFileInput').addEventListener('change', async e=>{ const files=Array.from(e.target.files||[]); if(!files.length) return; let firstId=null; for(const file of files){ const src=await readFileAsDataURL(file); const id=uid('src'); if(!firstId) firstId=id; state.sources[id]={ id, name:file.name.replace(/\.[^.]+$/,''), category:'uploaded-source', src, sourceType:'embedded', notes:'' }; } state.ui.selectedSourceId = firstId || state.ui.selectedSourceId; await openSourceInEditor(state.ui.selectedSourceId); e.target.value=''; renderAll(); });
  $('#useCurrentAssetAsSourceBtn').onclick = async ()=>{ const a=currentAsset(); if(!a) return; await openAssetAsSource(a); renderAll(); };
  $('#replaceCurrentAssetBtn').onclick = ()=> saveMaskAsAsset(true);
  $('#saveSelectionAsAssetBtn').onclick = ()=> saveMaskAsAsset(false);
  $('#selectOpaqueBtn').onclick = selectOpaquePixels; $('#fillMaskBtn').onclick = fillAllMask; $('#clearMaskBtn').onclick = clearAllMask; $('#invertMaskBtn').onclick = invertMask; $('#fitSourceBtn').onclick = ()=>{ if(!imageEditor.img) return; const wrap=$('#imageEditorWrap'); const zx=(wrap.clientWidth-40)/imageEditor.img.naturalWidth; const zy=(wrap.clientHeight-40)/imageEditor.img.naturalHeight; imageEditor.zoom = Math.max(0.5, Math.min(8, round(Math.min(zx,zy),1))); $('#sourceZoomInput').value=imageEditor.zoom; renderImageEditor(); }; $('#resetImageEditBtn').onclick = resetImageEditor;
  $('#brushSizeInput').oninput = ()=>{ imageEditor.brushSize = Number($('#brushSizeInput').value)||18; };
  $('#sourceZoomInput').oninput = ()=>{ imageEditor.zoom = Number($('#sourceZoomInput').value)||2; renderImageEditor(); };
  $$('.toolBtn').forEach(btn=>btn.onclick = ()=>{ imageEditor.tool=btn.dataset.tool; renderImageEditor(); });
  $('#imageEditorCanvas').addEventListener('pointerdown', e=>{ if(!imageEditor.img || !imageEditor.maskCtx) return; const pt=getCanvasPointFromEvent(e); const tool=imageEditor.tool; if(tool.startsWith('brush')){ imageEditor.drawing={type:tool,last:pt}; paintMaskLine(pt,pt,tool==='brushErase'); renderImageEditor(); } else { imageEditor.drawing={type:tool,start:pt,current:pt}; renderImageEditor(); } e.preventDefault(); });
  $('#imageEditorCanvas').addEventListener('pointermove', e=>{ if(!imageEditor.drawing || !imageEditor.img) return; const pt=getCanvasPointFromEvent(e); if(imageEditor.drawing.type.startsWith('brush')){ paintMaskLine(imageEditor.drawing.last, pt, imageEditor.drawing.type==='brushErase'); imageEditor.drawing.last = pt; renderImageEditor(); } else { imageEditor.drawing.current = pt; renderImageEditor(); } });
  $('#imageEditorCanvas').addEventListener('pointerup', ()=>{});
  $('#imageEditorCanvas').addEventListener('pointerleave', ()=>{});

  ['#assetNameInput','#assetCategoryInput','#assetRotationInput','#assetScaleInput','#cropXInput','#cropYInput','#cropWInput','#cropHInput','#anchorXInput','#anchorYInput','#mountXInput','#mountYInput','#muzzleXInput','#muzzleYInput','#assetNotesInput'].forEach(sel=>$(sel).addEventListener('input', syncAssetFromInspector)); ['#assetFlipXInput','#assetFlipYInput'].forEach(sel=>$(sel).addEventListener('change', syncAssetFromInspector));
  $('#autoTrimBtn').onclick = ()=> currentAsset() && autoTrimAsset(currentAsset());
  $('#resetCropBtn').onclick = async ()=>{ const a=currentAsset(); if(!a) return; await ensureAssetPrepared(a); a.crop={x:0,y:0,w:a.naturalW,h:a.naturalH}; a.anchor={x:a.crop.w/2,y:a.crop.h/2}; a.mount={x:a.crop.w/2,y:a.crop.h/2}; a.muzzle={x:a.crop.w*0.85,y:a.crop.h/2}; invalidateAssetCache(a); renderAll(); };
  $('#downloadPngBtn').onclick = async ()=>{ const a=currentAsset(); if(!a) return; const p=await getProcessedAsset(a); downloadBlob(dataUrlToBlob(p.url), `${a.name}.png`); };
  $('#bakeAssetBtn').onclick = async ()=>{ const a=currentAsset(); if(!a) return; const p=await getProcessedAsset(a); const id=uid('baked'); state.assets[id]={ id, name:a.name+' baked', category:a.category, src:p.url, sourceType:'embedded', notes:`baked from ${a.id}`, rotation:0, scale:1, flipX:false, flipY:false, crop:{x:0,y:0,w:p.width,h:p.height}, anchor:{x:p.anchor.x,y:p.anchor.y}, mount:{x:p.mount.x,y:p.mount.y}, muzzle:{x:p.muzzle.x,y:p.muzzle.y}, naturalW:p.width, naturalH:p.height }; state.ui.selectedAssetId=id; renderAll(); };
  $('#setAnchorModeBtn').onclick = ()=>{ adjustMode='A'; renderAdjustTab(); }; $('#setMountModeBtn').onclick = ()=>{ adjustMode='M'; renderAdjustTab(); }; $('#setMuzzleModeBtn').onclick = ()=>{ adjustMode='T'; renderAdjustTab(); }; $('#clearPointModeBtn').onclick = ()=>{ adjustMode='通常'; renderAdjustTab(); };
  $('#cropBox').addEventListener('pointerdown', onCropPointerDown); $('#assetStage').addEventListener('pointerdown', onAssetStagePointerDown);

  $('#sceneSelect').innerHTML = Object.entries(SCENES).map(([id,def])=>`<option value="${id}">${def.label}</option>`).join('');
  populateElementAssetOptions();
  $('#sceneSelect').onchange = ()=>{ state.ui.scene = $('#sceneSelect').value; state.ui.selectedElementId = currentElements()[0]?.id || null; renderAll(); };
  $('#mkSelect').onchange = ()=>{ state.ui.mk = $('#mkSelect').value; state.ui.selectedElementId = currentElements()[0]?.id || null; renderAll(); };
  $('#viewportSelect').onchange = ()=>{ state.ui.viewport = $('#viewportSelect').value; renderLayoutEditor(); saveState(); };
  $('#showGridInput').onchange = ()=>{ state.ui.showGrid = $('#showGridInput').checked; renderLayoutEditor(); saveState(); }; $('#showSafeAreaInput').onchange = ()=>{ state.ui.showSafe = $('#showSafeAreaInput').checked; renderLayoutEditor(); saveState(); }; $('#snapInput').onchange = ()=>{ state.ui.snap = $('#snapInput').checked; saveState(); }; $('#snapPercentSelect').onchange = ()=>{ state.ui.snapStep = Number($('#snapPercentSelect').value)||1; saveState(); };
  $('#showGameViewInput').onchange=()=>{state.ui.showGameView=$('#showGameViewInput').checked;renderLayoutEditor();saveState();}; $('#showPointGuidesInput').onchange=()=>{state.ui.showPointGuides=$('#showPointGuidesInput').checked;renderLayoutEditor();saveState();}; ['#cameraXInput','#cameraYInput','#cameraWInput','#cameraHInput'].forEach(sel=>$(sel).addEventListener('input',()=>{const c=currentCamera();c.x=clamp(Number($('#cameraXInput').value)||0,0,95);c.y=clamp(Number($('#cameraYInput').value)||0,0,95);c.w=clamp(Number($('#cameraWInput').value)||5,5,100-c.x);c.h=clamp(Number($('#cameraHInput').value)||5,5,100-c.y);renderLayoutPreview();saveState();})); $('#fitCameraBtn').onclick=fitCameraToElements;
  $('#addElementBtn').onclick = ()=>{ const assetId=Object.keys(state.assets)[0]; const el=baseEl('element','New Element',assetId,50,50,14,10,0,10); currentElements().push(el); state.ui.selectedElementId=el.id; renderAll(); };
  $('#duplicateElementBtn').onclick = ()=>{ const el=currentElement(); if(!el) return; const cp=clone(el); cp.id=uid('el'); cp.name += ' copy'; cp.x += 2; cp.y += 2; currentElements().push(cp); state.ui.selectedElementId=cp.id; renderAll(); };
  $('#deleteElementBtn').onclick = ()=>{ const arr=currentElements(); const idx=arr.findIndex(e=>e.id===state.ui.selectedElementId); if(idx<0) return; arr.splice(idx,1); state.ui.selectedElementId=arr[0]?.id || null; renderAll(); };
  $('#resetElementBtn').onclick = ()=>{ const cur=currentElement(); if(!cur) return; const d=defaultSceneElements(state.ui.scene, Number(state.ui.mk||1)).find(e=>e.key===cur.key); if(d){ Object.assign(cur, clone(d), {id:cur.id}); renderAll(); } };
  $('#resetSceneBtn').onclick = ()=>{ state.layouts[state.ui.scene][currentSceneKey()].elements = defaultSceneElements(state.ui.scene, Number(state.ui.mk||1)); state.ui.selectedElementId = currentElements()[0]?.id || null; renderAll(); };
  $('#mirrorSceneBtn').onclick = ()=>{ if(state.ui.scene!=='battle_player'){ alert('まず「戦闘: 味方艦」で調整してください。'); return; } copyPlayerToEnemy(state.ui.mk); alert('敵専用色違い素材を使って、完成艦を180°反転コピーしました。'); renderAll(); };
  const syncP=$('#syncMaintToBattleBtn'); if(syncP)syncP.onclick=()=>{copyMaintToBattlePlayer(state.ui.mk);state.ui.scene='battle_player';renderAll();};
  const syncE=$('#syncPlayerToEnemyBtn'); if(syncE)syncE.onclick=()=>{copyPlayerToEnemy(state.ui.mk);state.ui.scene='battle_enemy';renderAll();};
  const syncAll=$('#syncAllBattleBtn'); if(syncAll)syncAll.onclick=()=>{syncAllBattlePairs();alert('Mk.1〜4を現在の整備艦→戦闘自艦→敵色艦へ同期しました。');renderAll();};
  ['#elementNameInput','#elementAssetInput','#elementPlacementInput','#elementXInput','#elementYInput','#elementWInput','#elementHInput','#elementRotInput','#elementScaleInput','#elementZInput','#elementOpacityInput','#elementNotesInput'].forEach(sel=>$(sel).addEventListener('input', updateElementFromInspector)); ['#elementFlipXInput','#elementFlipYInput','#elementVisibleInput'].forEach(sel=>$(sel).addEventListener('change', updateElementFromInspector));

  $('#copyJsonBtn').onclick = async ()=>{ await navigator.clipboard.writeText(JSON.stringify(state,null,2)); alert('JSONをコピーしました。'); };
  $('#downloadJsonBtn').onclick = ()=> downloadText(JSON.stringify(state,null,2), 'void-angler-layout-v4_5-project.json'); $('#exportJsonBtn').onclick = ()=> downloadText(JSON.stringify(state,null,2), 'void-angler-layout-v4_5-project.json'); $('#exportGameBtn').onclick=()=>downloadText(JSON.stringify(gameExportPayload(),null,2),'void-angler-game-layout-v4_5.json');
  const canvasDownload=$('#downloadCanvasPreviewBtn'); if(canvasDownload) canvasDownload.onclick=()=>{ const c=$('#canvasGameViewPreview'); if(!c)return; const a=document.createElement('a'); a.href=c.toDataURL('image/png'); a.download=`void-angler-${state.ui.scene}-${currentSceneKey()}-canvas.png`; a.click(); };
  $('#importJsonInput').addEventListener('change', async e=>{ const file=e.target.files?.[0]; if(!file) return; try{ state = repairState(JSON.parse(await file.text())); await openSourceInEditor(state.ui.selectedSourceId || Object.keys(state.sources)[0]); renderAll(); } catch(err){ alert('JSON読込に失敗しました'); console.error(err);} e.target.value=''; });
  $('#applyDataDumpBtn').onclick = async ()=>{ try{ state = repairState(JSON.parse($('#dataDump').value)); await openSourceInEditor(state.ui.selectedSourceId || Object.keys(state.sources)[0]); renderAll(); }catch(err){ alert('JSONの形式が不正です'); } };
  $('#refreshDataDumpBtn').onclick = refreshJsonViews;
  $('#saveLocalBtn').onclick = ()=>{ saveState(); alert('端末に保存しました。'); };
  $('#loadLocalBtn').onclick = async ()=>{ const loaded=loadState(); if(loaded){ state=loaded; await openSourceInEditor(state.ui.selectedSourceId || Object.keys(state.sources)[0]); renderAll(); alert('端末保存データを読み込みました。'); } else alert('保存データがありません。'); };

  window.addEventListener('pointermove', onGlobalPointerMove); window.addEventListener('pointerup', onGlobalPointerUp); window.addEventListener('resize', ()=>{ updateCropOverlay(); renderLayoutPreview(); renderImageEditor(); });
}
function populateElementAssetOptions(){ $('#elementAssetInput').innerHTML = Object.values(state.assets).sort((a,b)=>a.category.localeCompare(b.category)||a.name.localeCompare(b.name)).map(a=>`<option value="${a.id}">${escapeHtml(a.name)} [${escapeHtml(a.category)}]</option>`).join(''); }

async function renderAll(){
  renderTabs(); populateElementAssetOptions(); await renderAssetList(); await renderAssetSummary(); await renderSourceList(); await renderAdjustTab(); await renderLayoutEditor(); renderImageEditor(); refreshJsonViews(); saveState();
}

const ENEMY_ASSET_PREFIX='enemy_';
function enemyAssetIdFor(assetId){ const id=ENEMY_ASSET_PREFIX+assetId; return state.assets[id]?id:assetId; }
function copyMaintToBattlePlayer(mk=state.ui.mk){
  const k=String(mk), src=clone(state.layouts.maint_ship[k]?.elements||[]);
  state.layouts.battle_player[k].elements=src.map(el=>({...el,id:uid('battleP'),notes:`${el.notes||''} [v4.5 synced from maint_ship]`.trim()}));
  state.cameras.battle_player[k]=clone(state.cameras.maint_ship[k]);
}
function copyPlayerToEnemy(mk=state.ui.mk){
  const k=String(mk), src=clone(state.layouts.battle_player[k]?.elements||[]);
  state.layouts.battle_enemy[k].elements=src.map(el=>({...el,id:uid('battleE'),assetId:enemyAssetIdFor(el.assetId),x:round(100-Number(el.x||50),1),y:round(100-Number(el.y||50),1),rotation:(Number(el.rotation)||0)+180,notes:`${el.notes||''} [v4.5 enemy recolor + 180°]`.trim()}));
  const c=state.cameras.battle_player[k]||{x:0,y:0,w:100,h:100};
  state.cameras.battle_enemy[k]={x:round(100-(Number(c.x)+Number(c.w)),1),y:round(100-(Number(c.y)+Number(c.h)),1),w:Number(c.w),h:Number(c.h)};
}
function syncBattlePair(mk=state.ui.mk){ copyMaintToBattlePlayer(mk); copyPlayerToEnemy(mk); }
function syncAllBattlePairs(){ ['1','2','3','4'].forEach(syncBattlePair); }

(async function init(){
  bindEvents();
  if(!state.ui.selectedElementId) state.ui.selectedElementId = currentElements()[0]?.id || null;
  if(state.ui.selectedSourceId) await openSourceInEditor(state.ui.selectedSourceId); else if(Object.keys(state.sources)[0]) { state.ui.selectedSourceId = Object.keys(state.sources)[0]; await openSourceInEditor(state.ui.selectedSourceId); }
  $('#brushSizeInput').value = imageEditor.brushSize; $('#sourceZoomInput').value = imageEditor.zoom;
  renderAll();
})();

