const STORAGE_KEY = 'void-angler-layout-editor-v3';
const PRESET_ASSETS = [
  // source sheets
  ['sheet_ship_bundle','Ship Source Sheet','sheet','bundled_assets/source_sheets/sf宇宙船mk1_mk4スプライトシート.png'],
  ['sheet_weapon_bundle','Weapon Source Sheet','sheet','bundled_assets/source_sheets/sf兵器スプライトシート.png'],
  ['sheet_module_bundle','Module Source Sheet','sheet','bundled_assets/source_sheets/sf宇宙船モジュール_ピクセルアートシート.png'],
  ['sheet_fishing_bundle','Fishing Source Sheet','sheet','bundled_assets/source_sheets/sf工業釣具スプライトシート.png'],
  ['sheet_material_bundle','Material Source Sheet','sheet','bundled_assets/source_sheets/sfピクセルアート素材アイコンシート.png'],
  // processed / bundled assets used in prototype
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
];

const SCENES = {
  battle_player: { label:'戦闘: 味方艦', usesMk:true },
  battle_enemy: { label:'戦闘: 敵艦', usesMk:true },
  maint_ship: { label:'整備: 機体', usesMk:true },
  maint_fishing: { label:'整備: 釣具', usesMk:false }
};
const SLOT_CONFIG = { 1:{weapons:2,equips:2}, 2:{weapons:3,equips:3}, 3:{weapons:4,equips:4}, 4:{weapons:4,equips:5} };
const DEFAULT_WEAPONS = ['w_pulse','w_twin','w_scatter','w_missile'];
const DEFAULT_EQUIPS = ['e_armor','e_shield','e_repair','e_sensor','e_cooler'];

const $ = s => document.querySelector(s);
const $$ = s => Array.from(document.querySelectorAll(s));
const clone = obj => JSON.parse(JSON.stringify(obj));
const uid = prefix => `${prefix}_${Math.random().toString(36).slice(2,10)}`;
const clamp = (v,min,max) => Math.max(min, Math.min(max, v));
const round = (v,n=2) => Number(v.toFixed(n));
const snap = (v, step, enabled=true) => enabled ? Math.round(v/step)*step : v;

const imageCache = new Map();
async function loadImage(src){
  if(imageCache.has(src)) return imageCache.get(src);
  const img = new Image();
  img.decoding = 'async';
  const p = new Promise((resolve,reject)=>{ img.onload = ()=>resolve(img); img.onerror = reject; });
  img.src = src;
  imageCache.set(src,p);
  return p;
}

function createAsset(id,name,category,src,sourceType='bundled'){
  return {
    id,name,category,src,sourceType,notes:'',rotation:0,scale:1,flipX:false,flipY:false,
    crop:null,anchor:null,mount:null,muzzle:null,naturalW:null,naturalH:null,maskStrokes:[]
  };
}

function makePresetState(){
  const assets = {};
  PRESET_ASSETS.forEach(([id,name,category,src]) => assets[id] = createAsset(id,name,category,src,'bundled'));
  const layouts = {};
  Object.entries(SCENES).forEach(([sceneId, def])=>{
    layouts[sceneId] = {};
    const keys = def.usesMk ? ['1','2','3','4'] : ['default'];
    keys.forEach(key => layouts[sceneId][key] = { elements: defaultSceneElements(sceneId, key === 'default' ? 1 : Number(key)) });
  });
  return {
    version:3,
    assets,
    layouts,
    ui:{ currentTab:'assetTab', selectedAssetId:'sheet_ship_bundle', scene:'battle_player', mk:'1', selectedElementId:null, viewport:'phone', snap:true, snapStep:1, showGrid:true, showSafe:true, maskMode:'none', maskBrush:18 }
  };
}

function defaultSceneElements(sceneId, mk){
  if(sceneId === 'maint_fishing'){
    return [
      baseEl('rod', 'Rod', 'rod_standard', 34, 42, 42, 20, 0),
      baseEl('reel', 'Reel', 'reel_standard', 28, 60, 18, 14, 1),
      baseEl('line', 'Line', 'line_standard', 73, 30, 16, 10, 1),
      baseEl('hook', 'Hook', 'hook_standard', 74, 64, 13, 11, 1),
    ];
  }
  const isEnemy = sceneId === 'battle_enemy';
  const shipY = sceneId === 'maint_ship' ? 42 : (isEnemy ? 28 : 72);
  const shipW = sceneId === 'maint_ship' ? 56 : 48;
  const shipH = sceneId === 'maint_ship' ? 28 : 24;
  const elements = [baseEl('ship', `Ship Mk${mk}`, `ship_mk${mk}`, 50, shipY, shipW, shipH, 0, 1, false, false)];
  const weaponPosMap = { 1:[{x:42,y:shipY-1},{x:58,y:shipY-1}], 2:[{x:40,y:shipY},{x:50,y:shipY-5},{x:60,y:shipY}], 3:[{x:38,y:shipY+1},{x:46,y:shipY-4},{x:54,y:shipY-4},{x:62,y:shipY+1}], 4:[{x:37,y:shipY+1},{x:46,y:shipY-4},{x:54,y:shipY-4},{x:63,y:shipY+1}] };
  const equipPosMap = { 1:[{x:44,y:shipY+5},{x:56,y:shipY+5}], 2:[{x:41,y:shipY+5},{x:50,y:shipY+7},{x:59,y:shipY+5}], 3:[{x:39,y:shipY+6},{x:46,y:shipY+9},{x:54,y:shipY+9},{x:61,y:shipY+6}], 4:[{x:36,y:shipY+6},{x:43,y:shipY+10},{x:50,y:shipY+11},{x:57,y:shipY+10},{x:64,y:shipY+6}] };
  weaponPosMap[mk].slice(0,SLOT_CONFIG[mk].weapons).forEach((p,i)=> elements.push(baseEl(`weapon${i+1}`, `Weapon ${i+1}`, DEFAULT_WEAPONS[i], p.x, p.y, 13, 8, 0, 5, false, false)));
  equipPosMap[mk].slice(0,SLOT_CONFIG[mk].equips).forEach((p,i)=> elements.push(baseEl(`equip${i+1}`, `Equip ${i+1}`, DEFAULT_EQUIPS[i], p.x, p.y, 11, 8, 0, 4, false, false)));
  if(sceneId === 'battle_enemy'){ elements.push(baseEl('laser', 'Laser', 'w_laser', 50, shipY+2, 15, 10, 180, 7)); }
  return elements;
}
function baseEl(key,name,assetId,x,y,w,h,rot=0,z=1,flipX=false,flipY=false){
  return { id:uid(key), key,name,assetId,x,y,w,h,rotation:rot,scale:1,z,opacity:1,flipX,flipY,visible:true,notes:'' };
}

let state = hydrateState(loadState() || makePresetState());
let pointMode = 'none';
let cropDrag = null;
let layoutDrag = null;
let maskPaint = null;

function serializeState(){
  const out = clone(state);
  Object.values(out.assets).forEach(a => { delete a._processed; delete a.naturalW; delete a.naturalH; });
  return out;
}
function hydrateState(input){
  const s = clone(input);
  s.version = 3;
  s.ui = Object.assign({ currentTab:'assetTab', selectedAssetId:Object.keys(s.assets||{})[0]||null, scene:'battle_player', mk:'1', selectedElementId:null, viewport:'phone', snap:true, snapStep:1, showGrid:true, showSafe:true, maskMode:'none', maskBrush:18 }, s.ui || {});
  Object.values(s.assets||{}).forEach(a=>{
    a.maskStrokes = Array.isArray(a.maskStrokes) ? a.maskStrokes : [];
    a.sourceType = a.sourceType || 'embedded';
    delete a._processed;
  });
  return s;
}
function loadState(){
  try{ const raw = localStorage.getItem(STORAGE_KEY); if(!raw) return null; return JSON.parse(raw); }
  catch(err){ console.warn(err); return null; }
}
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(serializeState())); refreshJsonViews(); }

function currentAsset(){ return state.assets[state.ui.selectedAssetId] || null; }
function currentSceneKey(){ return SCENES[state.ui.scene].usesMk ? state.ui.mk : 'default'; }
function currentElements(){ return state.layouts[state.ui.scene][currentSceneKey()].elements; }
function currentElement(){ return currentElements().find(el => el.id === state.ui.selectedElementId) || null; }

async function ensureAssetPrepared(asset){
  if(!asset) return null;
  const img = await loadImage(asset.src);
  asset.naturalW = img.naturalWidth;
  asset.naturalH = img.naturalHeight;
  if(!asset.crop){ asset.crop = {x:0,y:0,w:img.naturalWidth,h:img.naturalHeight}; }
  if(!asset.anchor){ asset.anchor = {x:asset.crop.w/2,y:asset.crop.h/2}; }
  if(!asset.mount){ asset.mount = {x:asset.crop.w/2,y:asset.crop.h/2}; }
  if(!asset.muzzle){ asset.muzzle = {x:asset.crop.w*0.85,y:asset.crop.h/2}; }
  if(!Array.isArray(asset.maskStrokes)) asset.maskStrokes = [];
  return img;
}
function invalidateAssetCache(asset){ if(asset) delete asset._processed; }

function applyStrokeToMask(maskCtx, stroke){
  if(!stroke.points?.length) return;
  maskCtx.save();
  maskCtx.lineCap = 'round';
  maskCtx.lineJoin = 'round';
  maskCtx.lineWidth = stroke.size || 12;
  if(stroke.mode === 'erase'){
    maskCtx.globalCompositeOperation = 'source-over';
    maskCtx.strokeStyle = 'black';
    maskCtx.fillStyle = 'black';
  } else {
    maskCtx.globalCompositeOperation = 'source-over';
    maskCtx.strokeStyle = 'white';
    maskCtx.fillStyle = 'white';
  }
  const pts = stroke.points;
  if(pts.length === 1){ const p = pts[0]; maskCtx.beginPath(); maskCtx.arc(p.x,p.y, (stroke.size||12)/2, 0, Math.PI*2); maskCtx.fill(); }
  else{
    maskCtx.beginPath(); maskCtx.moveTo(pts[0].x, pts[0].y);
    for(let i=1;i<pts.length;i++) maskCtx.lineTo(pts[i].x, pts[i].y);
    maskCtx.stroke();
  }
  maskCtx.restore();
}
async function buildMaskedCrop(asset){
  await ensureAssetPrepared(asset);
  const img = await loadImage(asset.src);
  const crop = asset.crop;
  const base = document.createElement('canvas'); base.width = crop.w; base.height = crop.h;
  const bctx = base.getContext('2d');
  bctx.drawImage(img, crop.x, crop.y, crop.w, crop.h, 0, 0, crop.w, crop.h);

  const mask = document.createElement('canvas'); mask.width = crop.w; mask.height = crop.h;
  const mctx = mask.getContext('2d');
  mctx.fillStyle = 'white'; mctx.fillRect(0,0,crop.w,crop.h);
  (asset.maskStrokes || []).forEach(st => applyStrokeToMask(mctx, st));

  const out = document.createElement('canvas'); out.width = crop.w; out.height = crop.h;
  const octx = out.getContext('2d');
  octx.drawImage(base,0,0);
  octx.globalCompositeOperation = 'destination-in';
  octx.drawImage(mask,0,0);
  octx.globalCompositeOperation = 'source-over';
  return { canvas:out, width:crop.w, height:crop.h, anchor:asset.anchor, mount:asset.mount, muzzle:asset.muzzle };
}
function assetCacheKey(asset){
  return JSON.stringify({src:asset.src,crop:asset.crop,rotation:asset.rotation,flipX:asset.flipX,flipY:asset.flipY,anchor:asset.anchor,mount:asset.mount,muzzle:asset.muzzle,maskStrokes:asset.maskStrokes});
}
async function getProcessedAsset(asset){
  await ensureAssetPrepared(asset);
  const key = assetCacheKey(asset);
  if(asset._processed && asset._processed.key === key) return asset._processed.value;
  const masked = await buildMaskedCrop(asset);
  const angle = (asset.rotation||0) * Math.PI / 180;
  const cw = masked.width, ch = masked.height;
  const corners = [[-cw/2,-ch/2],[cw/2,-ch/2],[cw/2,ch/2],[-cw/2,ch/2]].map(([x,y])=>{
    if(asset.flipX) x = -x; if(asset.flipY) y = -y;
    return [x*Math.cos(angle) - y*Math.sin(angle), x*Math.sin(angle) + y*Math.cos(angle)];
  });
  const xs = corners.map(c=>c[0]), ys = corners.map(c=>c[1]);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  const outW = Math.max(1, Math.ceil(maxX - minX));
  const outH = Math.max(1, Math.ceil(maxY - minY));
  const canvas = document.createElement('canvas'); canvas.width = outW; canvas.height = outH;
  const ctx = canvas.getContext('2d');
  ctx.translate(outW/2, outH/2); ctx.rotate(angle); ctx.scale(asset.flipX ? -1 : 1, asset.flipY ? -1 : 1);
  ctx.drawImage(masked.canvas, -cw/2, -ch/2, cw, ch);
  function transformPoint(p){
    let x = p.x - cw/2, y = p.y - ch/2;
    if(asset.flipX) x = -x; if(asset.flipY) y = -y;
    return { x: x*Math.cos(angle)-y*Math.sin(angle)+outW/2, y: x*Math.sin(angle)+y*Math.cos(angle)+outH/2 };
  }
  const value = {
    url: canvas.toDataURL('image/png'), width: outW, height: outH,
    anchor: transformPoint(masked.anchor), mount: transformPoint(masked.mount), muzzle: transformPoint(masked.muzzle),
    rawMaskedUrl: masked.canvas.toDataURL('image/png'), rawWidth:cw, rawHeight:ch
  };
  asset._processed = { key, value };
  return value;
}

function escapeHtml(str=''){ return str.replace(/[&<>\"]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[s])); }

function renderTabs(){
  $$('.tab').forEach(btn => btn.classList.toggle('active', btn.dataset.tab === state.ui.currentTab));
  $$('.tabPanel').forEach(panel => panel.classList.toggle('active', panel.id === state.ui.currentTab));
}

async function renderAssetList(){
  const query = ($('#assetSearch').value || '').trim().toLowerCase();
  const items = Object.values(state.assets).filter(a => !query || `${a.name} ${a.category}`.toLowerCase().includes(query)).sort((a,b)=>a.category.localeCompare(b.category)||a.name.localeCompare(b.name));
  const list = $('#assetList'); list.innerHTML = '';
  for(const asset of items){
    const row = document.createElement('div');
    row.className = 'assetItem' + (asset.id === state.ui.selectedAssetId ? ' active' : '');
    row.onclick = ()=>{ state.ui.selectedAssetId = asset.id; renderAll(); };
    const processed = await getProcessedAsset(asset).catch(()=>null);
    row.innerHTML = `<div class="assetThumb">${processed ? `<img src="${processed.url}" alt="">` : ''}</div><div class="assetMeta"><strong>${escapeHtml(asset.name)}</strong><small>${escapeHtml(asset.category)} / ${escapeHtml(asset.id)}</small></div>`;
    list.appendChild(row);
  }
}

function populateSceneSelects(){ $('#sceneSelect').innerHTML = Object.entries(SCENES).map(([id,def])=>`<option value="${id}">${def.label}</option>`).join(''); }
function populateAssetOptions(){ $('#elementAssetInput').innerHTML = Object.values(state.assets).sort((a,b)=>a.category.localeCompare(b.category)||a.name.localeCompare(b.name)).map(a=>`<option value="${a.id}">${escapeHtml(a.name)} [${escapeHtml(a.category)}]</option>`).join(''); }

async function renderAssetEditor(){
  const asset = currentAsset();
  $('#noAssetText').hidden = !!asset; $('#assetInspector').hidden = !asset;
  if(!asset) return;
  await ensureAssetPrepared(asset);
  $('#assetNameInput').value = asset.name || '';
  $('#assetCategoryInput').value = asset.category || '';
  $('#assetRotationInput').value = asset.rotation || 0;
  $('#assetScaleInput').value = asset.scale || 1;
  $('#assetFlipXInput').checked = !!asset.flipX;
  $('#assetFlipYInput').checked = !!asset.flipY;
  $('#cropXInput').value = Math.round(asset.crop.x); $('#cropYInput').value = Math.round(asset.crop.y); $('#cropWInput').value = Math.round(asset.crop.w); $('#cropHInput').value = Math.round(asset.crop.h);
  $('#anchorXInput').value = Math.round(asset.anchor.x); $('#anchorYInput').value = Math.round(asset.anchor.y); $('#mountXInput').value = Math.round(asset.mount.x); $('#mountYInput').value = Math.round(asset.mount.y); $('#muzzleXInput').value = Math.round(asset.muzzle.x); $('#muzzleYInput').value = Math.round(asset.muzzle.y);
  $('#assetNotesInput').value = asset.notes || '';
  $('#assetStageImg').src = asset.src;
  $('#maskBrushSizeInput').value = String(state.ui.maskBrush || 18);
  $('#assetModeText').textContent = `基準点モード: ${pointMode === 'none' ? '通常' : pointMode} / 自由切り抜き: ${state.ui.maskMode === 'none' ? '停止' : state.ui.maskMode}`;
  $('#maskEraseBtn').classList.toggle('activeTool', state.ui.maskMode === 'erase');
  $('#maskRestoreBtn').classList.toggle('activeTool', state.ui.maskMode === 'restore');
  $('#maskPanBtn').classList.toggle('activeTool', state.ui.maskMode === 'none');
  requestAnimationFrame(async ()=>{
    updateCropOverlay();
    await drawProcessedPreviews();
    await renderMaskEditor();
  });
}

function getStageImageMetrics(){
  const img = $('#assetStageImg'); const stage = $('#assetStage');
  if(!img.naturalWidth) return null;
  const sw = stage.clientWidth, sh = stage.clientHeight, ir = img.naturalWidth/img.naturalHeight, sr = sw/sh;
  let dw,dh,dx,dy;
  if(ir > sr){ dw = sw; dh = sw/ir; dx = 0; dy = (sh-dh)/2; }
  else{ dh = sh; dw = sh*ir; dy = 0; dx = (sw-dw)/2; }
  return { dx, dy, dw, dh, scaleX:dw/img.naturalWidth, scaleY:dh/img.naturalHeight };
}
function updateCropOverlay(){
  const asset = currentAsset(); const img = $('#assetStageImg'); const cropBox = $('#cropBox');
  if(!asset || !img.naturalWidth){ cropBox.classList.add('hidden'); return; }
  const m = getStageImageMetrics();
  cropBox.classList.remove('hidden');
  cropBox.style.left = `${m.dx + asset.crop.x*m.scaleX}px`;
  cropBox.style.top = `${m.dy + asset.crop.y*m.scaleY}px`;
  cropBox.style.width = `${asset.crop.w*m.scaleX}px`;
  cropBox.style.height = `${asset.crop.h*m.scaleY}px`;
  setMarker('#anchorMarker', asset.anchor, m); setMarker('#mountMarker', asset.mount, m); setMarker('#muzzleMarker', asset.muzzle, m);
}
function setMarker(sel, point, m){
  const el = $(sel), asset = currentAsset();
  if(!point){ el.classList.add('hidden'); return; }
  el.classList.remove('hidden');
  el.style.left = `${m.dx + (asset.crop.x + point.x) * m.scaleX}px`;
  el.style.top = `${m.dy + (asset.crop.y + point.y) * m.scaleY}px`;
}

async function drawProcessedPreviews(){
  const asset = currentAsset(); if(!asset) return;
  const processed = await getProcessedAsset(asset);
  drawPreviewCanvas($('#trimmedCanvas'), processed.url, processed.width, processed.height, []);
  drawPreviewCanvas($('#anchorCanvas'), processed.url, processed.width, processed.height, [
    {pt:processed.anchor, color:'#5cf2ff', label:'A'}, {pt:processed.mount, color:'#ffcc73', label:'M'}, {pt:processed.muzzle, color:'#ff6f91', label:'T'}
  ]);
}
function drawPreviewCanvas(canvas, src, iw, ih, marks=[]){
  const ctx = canvas.getContext('2d'); ctx.clearRect(0,0,canvas.width,canvas.height);
  loadImage(src).then(img=>{
    const scale = Math.min(canvas.width/iw, canvas.height/ih) * 0.9;
    const dw = iw*scale, dh = ih*scale, dx = (canvas.width-dw)/2, dy = (canvas.height-dh)/2;
    ctx.clearRect(0,0,canvas.width,canvas.height); ctx.drawImage(img, dx, dy, dw, dh);
    marks.forEach(m=>{ const x = dx + m.pt.x*scale, y = dy + m.pt.y*scale; ctx.strokeStyle = m.color; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x-8,y); ctx.lineTo(x+8,y); ctx.moveTo(x,y-8); ctx.lineTo(x,y+8); ctx.stroke(); ctx.fillStyle = m.color; ctx.beginPath(); ctx.arc(x,y,4,0,Math.PI*2); ctx.fill(); ctx.fillStyle = '#fff'; ctx.font = 'bold 12px system-ui'; ctx.fillText(m.label, x+8, y-8); });
  });
}

async function renderMaskEditor(){
  const canvas = $('#maskEditCanvas'); const ctx = canvas.getContext('2d');
  const asset = currentAsset(); if(!asset){ ctx.clearRect(0,0,canvas.width,canvas.height); return; }
  const processed = await getProcessedAsset(asset);
  const img = await loadImage(processed.rawMaskedUrl);
  const iw = processed.rawWidth, ih = processed.rawHeight;
  const scale = Math.min(canvas.width/iw, canvas.height/ih) * 0.88;
  const dw = iw*scale, dh = ih*scale, dx = (canvas.width-dw)/2, dy = (canvas.height-dh)/2;
  canvas.dataset.drawX = dx; canvas.dataset.drawY = dy; canvas.dataset.drawW = dw; canvas.dataset.drawH = dh;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.drawImage(img, dx, dy, dw, dh);
  // show points
  [['A',asset.anchor,'#5cf2ff'],['M',asset.mount,'#ffcc73'],['T',asset.muzzle,'#ff6f91']].forEach(([label,p,color])=>{
    const x = dx + p.x*scale, y = dy + p.y*scale;
    ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x-6,y); ctx.lineTo(x+6,y); ctx.moveTo(x,y-6); ctx.lineTo(x,y+6); ctx.stroke();
    ctx.fillStyle = color; ctx.beginPath(); ctx.arc(x,y,3.5,0,Math.PI*2); ctx.fill(); ctx.fillStyle='#fff'; ctx.font='bold 11px system-ui'; ctx.fillText(label, x+6, y-6);
  });
  // brush cursor hint
  if(state.ui.maskMode !== 'none'){
    ctx.strokeStyle = 'rgba(255,255,255,.35)'; ctx.setLineDash([4,4]); ctx.strokeRect(dx,dy,dw,dh); ctx.setLineDash([]);
  }
}

function updateAssetFromInspector(){
  const asset = currentAsset(); if(!asset) return;
  asset.name = $('#assetNameInput').value;
  asset.category = $('#assetCategoryInput').value;
  asset.rotation = Number($('#assetRotationInput').value) || 0;
  asset.scale = Number($('#assetScaleInput').value) || 1;
  asset.flipX = $('#assetFlipXInput').checked;
  asset.flipY = $('#assetFlipYInput').checked;
  asset.crop.x = clamp(Number($('#cropXInput').value)||0,0,asset.naturalW-1);
  asset.crop.y = clamp(Number($('#cropYInput').value)||0,0,asset.naturalH-1);
  asset.crop.w = clamp(Number($('#cropWInput').value)||1,1,asset.naturalW-asset.crop.x);
  asset.crop.h = clamp(Number($('#cropHInput').value)||1,1,asset.naturalH-asset.crop.y);
  asset.anchor = {x:clamp(Number($('#anchorXInput').value)||0,0,asset.crop.w), y:clamp(Number($('#anchorYInput').value)||0,0,asset.crop.h)};
  asset.mount = {x:clamp(Number($('#mountXInput').value)||0,0,asset.crop.w), y:clamp(Number($('#mountYInput').value)||0,0,asset.crop.h)};
  asset.muzzle = {x:clamp(Number($('#muzzleXInput').value)||0,0,asset.crop.w), y:clamp(Number($('#muzzleYInput').value)||0,0,asset.crop.h)};
  asset.notes = $('#assetNotesInput').value;
  invalidateAssetCache(asset); renderAll();
}
async function autoTrimAsset(asset){
  const bounds = await getImagePixelBounds(asset);
  asset.crop = bounds;
  asset.anchor = {x:bounds.w/2,y:bounds.h/2}; asset.mount = {x:Math.max(0,bounds.w*0.25),y:bounds.h/2}; asset.muzzle = {x:Math.max(0,bounds.w*0.82),y:bounds.h/2};
  invalidateAssetCache(asset); renderAll();
}
async function getImagePixelBounds(asset){
  const img = await loadImage(asset.src); const canvas = document.createElement('canvas'); canvas.width = img.naturalWidth; canvas.height = img.naturalHeight; const ctx = canvas.getContext('2d'); ctx.drawImage(img,0,0); const data = ctx.getImageData(0,0,canvas.width,canvas.height).data;
  let minX=canvas.width,minY=canvas.height,maxX=-1,maxY=-1;
  for(let y=0;y<canvas.height;y++) for(let x=0;x<canvas.width;x++){ const a = data[(y*canvas.width+x)*4+3]; if(a > 8){ if(x<minX)minX=x; if(y<minY)minY=y; if(x>maxX)maxX=x; if(y>maxY)maxY=y; } }
  if(maxX < 0) return {x:0,y:0,w:img.naturalWidth,h:img.naturalHeight};
  return {x:minX,y:minY,w:maxX-minX+1,h:maxY-minY+1};
}

async function renderElementList(){
  const list = $('#elementList'); list.innerHTML = '';
  for(const el of currentElements().slice().sort((a,b)=>a.z-b.z)){
    const asset = state.assets[el.assetId]; const row = document.createElement('div');
    row.className = 'elementItem' + (el.id === state.ui.selectedElementId ? ' active' : '');
    row.onclick = ()=>{ state.ui.selectedElementId = el.id; renderLayoutEditor(); };
    let thumb = ''; if(asset){ const p = await getProcessedAsset(asset).catch(()=>null); if(p) thumb = `<img src="${p.url}" alt="">`; }
    row.innerHTML = `<div class="assetThumb">${thumb}</div><div class="assetMeta"><strong>${escapeHtml(el.name)}</strong><small>${escapeHtml(el.key)} / ${escapeHtml(el.assetId||'')}</small></div>`;
    list.appendChild(row);
  }
}
async function renderLayoutEditor(){
  $('#sceneSelect').value = state.ui.scene; $('#mkSelect').value = state.ui.mk; $('#mkSelect').disabled = !SCENES[state.ui.scene].usesMk; $('#viewportSelect').value = state.ui.viewport;
  $('#showGridInput').checked = !!state.ui.showGrid; $('#showSafeAreaInput').checked = !!state.ui.showSafe; $('#snapInput').checked = !!state.ui.snap; $('#snapPercentSelect').value = String(state.ui.snapStep || 1);
  await renderElementList(); await renderLayoutPreview(); renderElementInspector();
}
async function renderLayoutPreview(){
  const preview = $('#layoutPreview'); preview.classList.toggle('gridOn', !!state.ui.showGrid); preview.classList.toggle('safeOn', !!state.ui.showSafe); $('#viewportFrame').className = `viewportFrame ${state.ui.viewport}`; preview.innerHTML = '<div class="centerCross"></div>';
  const rect = preview.getBoundingClientRect();
  for(const el of currentElements().slice().sort((a,b)=>a.z-b.z)){
    const asset = state.assets[el.assetId]; if(!asset) continue;
    const proc = await getProcessedAsset(asset).catch(()=>null); if(!proc) continue;
    const wrap = document.createElement('div');
    wrap.className = 'layoutElement' + (el.id === state.ui.selectedElementId ? ' selected' : '') + (!el.visible ? ' hiddenEl' : '');
    wrap.dataset.id = el.id;
    const wPx = rect.width * (el.w/100) * (el.scale||1), hPx = rect.height * (el.h/100) * (el.scale||1);
    const anchorRatioX = proc.anchor.x / proc.width, anchorRatioY = proc.anchor.y / proc.height;
    const leftPx = rect.width * (el.x/100) - wPx * anchorRatioX, topPx = rect.height * (el.y/100) - hPx * anchorRatioY;
    wrap.style.left = `${leftPx}px`; wrap.style.top = `${topPx}px`; wrap.style.width = `${wPx}px`; wrap.style.height = `${hPx}px`;
    wrap.style.zIndex = el.z; wrap.style.opacity = el.opacity; wrap.style.transformOrigin = `${anchorRatioX*100}% ${anchorRatioY*100}%`; wrap.style.transform = `rotate(${el.rotation||0}deg) scale(${el.flipX?-1:1}, ${el.flipY?-1:1})`;
    wrap.innerHTML = `<div class="elBody"><img src="${proc.url}" alt=""></div><div class="elName">${escapeHtml(el.name)}</div><div class="resizeHandle"></div>`;
    wrap.addEventListener('pointerdown', onLayoutPointerDown);
    preview.appendChild(wrap);
  }
}
function renderElementInspector(){
  const el = currentElement(); $('#noElementText').hidden = !!el; $('#elementInspector').hidden = !el; if(!el) return;
  $('#elementNameInput').value = el.name || ''; $('#elementAssetInput').value = el.assetId || ''; $('#elementXInput').value = round(el.x,1); $('#elementYInput').value = round(el.y,1); $('#elementWInput').value = round(el.w,1); $('#elementHInput').value = round(el.h,1); $('#elementRotInput').value = el.rotation || 0; $('#elementScaleInput').value = el.scale || 1; $('#elementZInput').value = el.z || 1; $('#elementOpacityInput').value = el.opacity ?? 1; $('#elementFlipXInput').checked = !!el.flipX; $('#elementFlipYInput').checked = !!el.flipY; $('#elementVisibleInput').checked = !!el.visible; $('#elementNotesInput').value = el.notes || '';
}
function updateElementFromInspector(){
  const el = currentElement(); if(!el) return; el.name = $('#elementNameInput').value; el.assetId = $('#elementAssetInput').value; el.x = Number($('#elementXInput').value)||0; el.y = Number($('#elementYInput').value)||0; el.w = Math.max(1, Number($('#elementWInput').value)||1); el.h = Math.max(1, Number($('#elementHInput').value)||1); el.rotation = Number($('#elementRotInput').value)||0; el.scale = Math.max(0.1, Number($('#elementScaleInput').value)||1); el.z = Number($('#elementZInput').value)||1; el.opacity = clamp(Number($('#elementOpacityInput').value)||1,0,1); el.flipX = $('#elementFlipXInput').checked; el.flipY = $('#elementFlipYInput').checked; el.visible = $('#elementVisibleInput').checked; el.notes = $('#elementNotesInput').value; renderAll();
}

function refreshJsonViews(){ const json = JSON.stringify(serializeState(), null, 2); $('#jsonPreview').value = json; $('#dataDump').value = json; }
async function renderAll(){ renderTabs(); populateAssetOptions(); await renderAssetList(); await renderAssetEditor(); await renderLayoutEditor(); refreshJsonViews(); saveState(); }

function bindEvents(){
  $$('.tab').forEach(btn => btn.onclick = ()=>{ state.ui.currentTab = btn.dataset.tab; renderAll(); });
  $('#assetSearch').oninput = ()=> renderAssetList();
  $('#assetFileInput').addEventListener('change', async e=>{
    const files = Array.from(e.target.files || []); if(!files.length) return; let firstId = null;
    for(const file of files){ const src = await readFileAsDataURL(file); const id = uid('asset'); if(!firstId) firstId=id; state.assets[id] = createAsset(id, file.name.replace(/\.[^.]+$/,''), 'uploaded', src, 'embedded'); await ensureAssetPrepared(state.assets[id]); }
    state.ui.selectedAssetId = firstId || state.ui.selectedAssetId; e.target.value = ''; renderAll();
  });
  ['#assetNameInput','#assetCategoryInput','#assetRotationInput','#assetScaleInput','#cropXInput','#cropYInput','#cropWInput','#cropHInput','#anchorXInput','#anchorYInput','#mountXInput','#mountYInput','#muzzleXInput','#muzzleYInput','#assetNotesInput'].forEach(sel => $(sel).addEventListener('input', updateAssetFromInspector));
  ['#assetFlipXInput','#assetFlipYInput'].forEach(sel => $(sel).addEventListener('change', updateAssetFromInspector));
  $('#autoTrimBtn').onclick = ()=> currentAsset() && autoTrimAsset(currentAsset());
  $('#resetCropBtn').onclick = async ()=>{ const a=currentAsset(); if(!a) return; await ensureAssetPrepared(a); a.crop={x:0,y:0,w:a.naturalW,h:a.naturalH}; a.anchor={x:a.crop.w/2,y:a.crop.h/2}; a.mount={x:a.crop.w/2,y:a.crop.h/2}; a.muzzle={x:a.crop.w*0.85,y:a.crop.h/2}; invalidateAssetCache(a); renderAll(); };
  $('#clearMaskBtn').onclick = ()=>{ const a=currentAsset(); if(!a) return; a.maskStrokes=[]; invalidateAssetCache(a); renderAll(); };
  $('#deleteAssetBtn').onclick = ()=>{ const a=currentAsset(); if(!a) return; if(a.sourceType==='bundled' && !confirm('プリセットアセットです。本当に削除しますか？')) return; delete state.assets[a.id]; state.ui.selectedAssetId = Object.keys(state.assets)[0] || null; renderAll(); };
  $('#duplicateAssetBtn').onclick = ()=>{ const a=currentAsset(); if(!a) return; const id = uid('asset'); const copy = clone(a); copy.id=id; copy.name += ' copy'; delete copy._processed; state.assets[id]=copy; state.ui.selectedAssetId=id; renderAll(); };
  $('#bakeAssetBtn').onclick = async ()=>{ const a=currentAsset(); if(!a) return; const proc=await getProcessedAsset(a); const id=uid('baked'); const baked = createAsset(id, a.name + ' baked', a.category, proc.url, 'embedded'); baked.crop={x:0,y:0,w:proc.width,h:proc.height}; baked.anchor={x:proc.anchor.x,y:proc.anchor.y}; baked.mount={x:proc.mount.x,y:proc.mount.y}; baked.muzzle={x:proc.muzzle.x,y:proc.muzzle.y}; baked.naturalW=proc.width; baked.naturalH=proc.height; baked.maskStrokes=[]; state.assets[id]=baked; state.ui.selectedAssetId=id; renderAll(); };
  $('#downloadPngBtn').onclick = async ()=>{ const a=currentAsset(); if(!a) return; const proc=await getProcessedAsset(a); downloadBlob(dataUrlToBlob(proc.url), `${sanitize(a.name||a.id)}.png`); };
  $('#setAnchorModeBtn').onclick = ()=>{ pointMode='anchor'; renderAssetEditor(); };
  $('#setMountModeBtn').onclick = ()=>{ pointMode='mount'; renderAssetEditor(); };
  $('#setMuzzleModeBtn').onclick = ()=>{ pointMode='muzzle'; renderAssetEditor(); };
  $('#clearPointModeBtn').onclick = ()=>{ pointMode='none'; renderAssetEditor(); };
  $('#maskEraseBtn').onclick = ()=>{ state.ui.maskMode='erase'; renderAssetEditor(); saveState(); };
  $('#maskRestoreBtn').onclick = ()=>{ state.ui.maskMode='restore'; renderAssetEditor(); saveState(); };
  $('#maskPanBtn').onclick = ()=>{ state.ui.maskMode='none'; renderAssetEditor(); saveState(); };
  $('#maskBrushSizeInput').oninput = ()=>{ state.ui.maskBrush = Number($('#maskBrushSizeInput').value)||18; saveState(); };

  $('#cropBox').addEventListener('pointerdown', onCropPointerDown);
  $('#assetStage').addEventListener('pointerdown', onAssetStagePointerDown);
  $('#maskEditCanvas').addEventListener('pointerdown', onMaskPointerDown);
  window.addEventListener('pointermove', onGlobalPointerMove);
  window.addEventListener('pointerup', onGlobalPointerUp);
  window.addEventListener('resize', ()=>{ updateCropOverlay(); renderLayoutPreview(); renderMaskEditor(); });

  $('#sceneSelect').onchange = ()=>{ state.ui.scene = $('#sceneSelect').value; state.ui.selectedElementId = currentElements()[0]?.id || null; renderAll(); };
  $('#mkSelect').onchange = ()=>{ state.ui.mk = $('#mkSelect').value; state.ui.selectedElementId = currentElements()[0]?.id || null; renderAll(); };
  $('#viewportSelect').onchange = ()=>{ state.ui.viewport = $('#viewportSelect').value; renderLayoutEditor(); saveState(); };
  $('#showGridInput').onchange = ()=>{ state.ui.showGrid = $('#showGridInput').checked; renderLayoutEditor(); saveState(); };
  $('#showSafeAreaInput').onchange = ()=>{ state.ui.showSafe = $('#showSafeAreaInput').checked; renderLayoutEditor(); saveState(); };
  $('#snapInput').onchange = ()=>{ state.ui.snap = $('#snapInput').checked; saveState(); };
  $('#snapPercentSelect').onchange = ()=>{ state.ui.snapStep = Number($('#snapPercentSelect').value)||1; saveState(); };
  $('#addElementBtn').onclick = ()=>{ const firstAsset=Object.keys(state.assets)[0]; const el=baseEl('element','New Element',firstAsset,50,50,14,10,0,10); currentElements().push(el); state.ui.selectedElementId=el.id; renderAll(); };
  $('#duplicateElementBtn').onclick = ()=>{ const el=currentElement(); if(!el) return; const copy=clone(el); copy.id=uid('el'); copy.name += ' copy'; copy.x += 2; copy.y += 2; currentElements().push(copy); state.ui.selectedElementId=copy.id; renderAll(); };
  $('#deleteElementBtn').onclick = ()=>{ const arr=currentElements(); const idx=arr.findIndex(e=>e.id===state.ui.selectedElementId); if(idx<0) return; arr.splice(idx,1); state.ui.selectedElementId=arr[0]?.id || null; renderAll(); };
  $('#resetElementBtn').onclick = ()=>{ const arr=defaultSceneElements(state.ui.scene, Number(state.ui.mk||1)); const cur=currentElement(); if(!cur) return; const same=arr.find(e=>e.key===cur.key); if(same){ Object.assign(cur, clone(same), {id:cur.id}); renderAll(); } };
  $('#resetSceneBtn').onclick = ()=>{ state.layouts[state.ui.scene][currentSceneKey()].elements = defaultSceneElements(state.ui.scene, Number(state.ui.mk||1)); state.ui.selectedElementId = currentElements()[0]?.id || null; renderAll(); };
  $('#mirrorSceneBtn').onclick = ()=>{ if(state.ui.scene !== 'battle_player'){ alert('戦闘: 味方艦 で調整した内容を、戦闘: 敵艦 へ反映します。まず場面を「戦闘: 味方艦」にしてください。'); return; } const src = clone(state.layouts.battle_player[state.ui.mk].elements); const mirrored = src.map(el=>({ ...el, id:uid('mirror'), y:round(100-el.y,1), rotation:(Number(el.rotation)||0)+180 })); state.layouts.battle_enemy[state.ui.mk].elements = mirrored; alert('戦闘: 敵艦 に上下反転コピーしました。'); renderAll(); };
  ['#elementNameInput','#elementAssetInput','#elementXInput','#elementYInput','#elementWInput','#elementHInput','#elementRotInput','#elementScaleInput','#elementZInput','#elementOpacityInput','#elementNotesInput'].forEach(sel => $(sel).addEventListener('input', updateElementFromInspector));
  ['#elementFlipXInput','#elementFlipYInput','#elementVisibleInput'].forEach(sel => $(sel).addEventListener('change', updateElementFromInspector));
  $('#copyJsonBtn').onclick = async ()=>{ await navigator.clipboard.writeText(JSON.stringify(serializeState(),null,2)); alert('JSONをコピーしました。'); };
  $('#downloadJsonBtn').onclick = ()=> downloadText(JSON.stringify(serializeState(),null,2), 'void-angler-layout-v3.json');
  $('#exportJsonBtn').onclick = ()=> downloadText(JSON.stringify(serializeState(),null,2), 'void-angler-layout-v3.json');
  $('#importJsonInput').addEventListener('change', async e=>{ const file=e.target.files?.[0]; if(!file) return; try{ state = hydrateState(JSON.parse(await file.text())); renderAll(); } catch(err){ alert('JSON読込に失敗しました'); console.error(err); } e.target.value=''; });
  $('#applyDataDumpBtn').onclick = ()=>{ try{ state = hydrateState(JSON.parse($('#dataDump').value)); renderAll(); } catch(err){ alert('JSONの形式が不正です'); } };
  $('#refreshDataDumpBtn').onclick = refreshJsonViews;
  $('#saveLocalBtn').onclick = ()=>{ saveState(); alert('端末に保存しました。'); };
  $('#loadLocalBtn').onclick = ()=>{ const loaded = loadState(); if(loaded){ state = hydrateState(loaded); renderAll(); alert('端末保存データを読み込みました。'); } else alert('保存データがありません。'); };
}

function onCropPointerDown(e){
  const asset = currentAsset(); if(!asset) return;
  const handle = e.target.dataset.handle;
  cropDrag = { type: handle ? 'resize' : 'move', handle, startX:e.clientX, startY:e.clientY, startCrop:clone(asset.crop) };
  e.preventDefault();
}
function onAssetStagePointerDown(e){
  const asset = currentAsset(); if(!asset || pointMode === 'none') return;
  const m = getStageImageMetrics(); if(!m) return;
  const rect = $('#assetStage').getBoundingClientRect();
  const px = (e.clientX - rect.left - m.dx)/m.scaleX - asset.crop.x;
  const py = (e.clientY - rect.top - m.dy)/m.scaleY - asset.crop.y;
  const point = { x:clamp(Math.round(px),0,asset.crop.w), y:clamp(Math.round(py),0,asset.crop.h) };
  asset[pointMode] = point; invalidateAssetCache(asset); renderAll();
}
function canvasToMaskPoint(e){
  const canvas = $('#maskEditCanvas'); const asset = currentAsset(); if(!asset) return null;
  const dx = Number(canvas.dataset.drawX||0), dy = Number(canvas.dataset.drawY||0), dw = Number(canvas.dataset.drawW||0), dh = Number(canvas.dataset.drawH||0);
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left, y = e.clientY - rect.top;
  if(x < dx || y < dy || x > dx + dw || y > dy + dh) return null;
  return { x: clamp(round((x - dx) / dw * asset.crop.w, 1), 0, asset.crop.w), y: clamp(round((y - dy) / dh * asset.crop.h, 1), 0, asset.crop.h) };
}
function onMaskPointerDown(e){
  const asset = currentAsset(); if(!asset || state.ui.maskMode === 'none') return;
  const p = canvasToMaskPoint(e); if(!p) return;
  maskPaint = { assetId:asset.id, mode:state.ui.maskMode, size:Number(state.ui.maskBrush)||18, points:[p] };
  asset.maskStrokes.push(maskPaint);
  invalidateAssetCache(asset);
  renderMaskEditor(); drawProcessedPreviews(); saveState();
  e.preventDefault();
}
function onLayoutPointerDown(e){
  const elId = e.currentTarget.dataset.id; state.ui.selectedElementId = elId;
  const previewRect = $('#layoutPreview').getBoundingClientRect(); const el = currentElement();
  const isResize = e.target.classList.contains('resizeHandle');
  layoutDrag = { type:isResize?'resize':'move', startX:e.clientX, startY:e.clientY, startEl:clone(el), previewW:previewRect.width, previewH:previewRect.height };
  renderLayoutEditor(); e.stopPropagation(); e.preventDefault();
}
function onGlobalPointerMove(e){
  const asset = currentAsset();
  if(cropDrag && asset){
    const m = getStageImageMetrics(); if(!m) return;
    const dx = (e.clientX - cropDrag.startX)/m.scaleX, dy = (e.clientY - cropDrag.startY)/m.scaleY, c = clone(cropDrag.startCrop);
    if(cropDrag.type === 'move'){
      asset.crop.x = clamp(Math.round(c.x + dx), 0, asset.naturalW - c.w); asset.crop.y = clamp(Math.round(c.y + dy), 0, asset.naturalH - c.h);
    }else{
      if(cropDrag.handle.includes('n')){ asset.crop.y = clamp(Math.round(c.y + dy), 0, c.y + c.h - 1); asset.crop.h = clamp(Math.round(c.h - dy), 1, asset.naturalH - asset.crop.y); }
      if(cropDrag.handle.includes('s')){ asset.crop.h = clamp(Math.round(c.h + dy), 1, asset.naturalH - c.y); asset.crop.y = c.y; }
      if(cropDrag.handle.includes('w')){ asset.crop.x = clamp(Math.round(c.x + dx), 0, c.x + c.w - 1); asset.crop.w = clamp(Math.round(c.w - dx), 1, asset.naturalW - asset.crop.x); }
      if(cropDrag.handle.includes('e')){ asset.crop.w = clamp(Math.round(c.w + dx), 1, asset.naturalW - c.x); asset.crop.x = c.x; }
      asset.anchor.x = clamp(asset.anchor.x,0,asset.crop.w); asset.anchor.y = clamp(asset.anchor.y,0,asset.crop.h); asset.mount.x = clamp(asset.mount.x,0,asset.crop.w); asset.mount.y = clamp(asset.mount.y,0,asset.crop.h); asset.muzzle.x = clamp(asset.muzzle.x,0,asset.crop.w); asset.muzzle.y = clamp(asset.muzzle.y,0,asset.crop.h);
    }
    invalidateAssetCache(asset); syncAssetInspectorValues(); updateCropOverlay(); renderMaskEditor(); drawProcessedPreviews(); saveState();
  }
  if(maskPaint){
    const a = currentAsset(); if(!a || a.id !== maskPaint.assetId) return;
    const p = canvasToMaskPoint(e); if(!p) return;
    const last = maskPaint.points[maskPaint.points.length-1];
    if(!last || Math.abs(last.x-p.x) + Math.abs(last.y-p.y) > 0.6){ maskPaint.points.push(p); invalidateAssetCache(a); renderMaskEditor(); drawProcessedPreviews(); saveState(); }
  }
  if(layoutDrag){
    const el = currentElement(); if(!el) return;
    if(layoutDrag.type === 'move'){
      let x = layoutDrag.startEl.x + ((e.clientX - layoutDrag.startX) / layoutDrag.previewW) * 100; let y = layoutDrag.startEl.y + ((e.clientY - layoutDrag.startY) / layoutDrag.previewH) * 100;
      el.x = round(snap(clamp(x,0,100), state.ui.snapStep, state.ui.snap),1); el.y = round(snap(clamp(y,0,100), state.ui.snapStep, state.ui.snap),1);
    }else{
      let w = layoutDrag.startEl.w + ((e.clientX - layoutDrag.startX) / layoutDrag.previewW) * 100; let h = layoutDrag.startEl.h + ((e.clientY - layoutDrag.startY) / layoutDrag.previewH) * 100;
      el.w = round(snap(Math.max(1,w), state.ui.snapStep, state.ui.snap),1); el.h = round(snap(Math.max(1,h), state.ui.snapStep, state.ui.snap),1);
    }
    syncElementInspectorValues(); renderLayoutPreview(); saveState();
  }
}
function onGlobalPointerUp(){ cropDrag = null; layoutDrag = null; maskPaint = null; }
function syncAssetInspectorValues(){ const a=currentAsset(); if(!a) return; $('#cropXInput').value=Math.round(a.crop.x); $('#cropYInput').value=Math.round(a.crop.y); $('#cropWInput').value=Math.round(a.crop.w); $('#cropHInput').value=Math.round(a.crop.h); $('#anchorXInput').value=Math.round(a.anchor.x); $('#anchorYInput').value=Math.round(a.anchor.y); $('#mountXInput').value=Math.round(a.mount.x); $('#mountYInput').value=Math.round(a.mount.y); $('#muzzleXInput').value=Math.round(a.muzzle.x); $('#muzzleYInput').value=Math.round(a.muzzle.y); }
function syncElementInspectorValues(){ const el=currentElement(); if(!el) return; $('#elementXInput').value=round(el.x,1); $('#elementYInput').value=round(el.y,1); $('#elementWInput').value=round(el.w,1); $('#elementHInput').value=round(el.h,1); }

function sanitize(name){ return name.replace(/[^\w\-]+/g,'_'); }
function readFileAsDataURL(file){ return new Promise((resolve,reject)=>{ const fr=new FileReader(); fr.onload=()=>resolve(fr.result); fr.onerror=reject; fr.readAsDataURL(file); }); }
function dataUrlToBlob(dataUrl){ const [head,body]=dataUrl.split(','); const mime=(/data:(.*?);/.exec(head)?.[1]) || 'image/png'; const bin=atob(body); const arr=new Uint8Array(bin.length); for(let i=0;i<bin.length;i++) arr[i]=bin.charCodeAt(i); return new Blob([arr], {type:mime}); }
function downloadBlob(blob,name){ const a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=name; a.click(); setTimeout(()=>URL.revokeObjectURL(a.href), 500); }
function downloadText(text,name){ downloadBlob(new Blob([text], {type:'application/json'}), name); }

populateSceneSelects();
bindEvents();
renderAll();
