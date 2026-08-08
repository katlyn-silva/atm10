const chapters=[{"id": 1, "pt": "O Começo", "en": "The Beginning"}, {"id": 2, "pt": "Loot Essencial", "en": "Essential Loot"}, {"id": 3, "pt": "Mineração e Minérios", "en": "Mining and Ores"}, {"id": 4, "pt": "Mekanism Inicial", "en": "Early Mekanism"}, {"id": 5, "pt": "Storage Inicial", "en": "Early Storage"}, {"id": 6, "pt": "Exploração e Estruturas", "en": "Exploration and Structures"}, {"id": 7, "pt": "Mining Dimension", "en": "Mining Dimension"}, {"id": 8, "pt": "The Other", "en": "The Other"}, {"id": 9, "pt": "The End", "en": "The End"}, {"id": 10, "pt": "Automação Inicial", "en": "Early Automation"}, {"id": 11, "pt": "AE2 Fundamentos", "en": "AE2 Fundamentals"}, {"id": 12, "pt": "AE2 Avançado", "en": "Advanced AE2"}, {"id": 13, "pt": "Mekanism Avançado", "en": "Advanced Mekanism"}, {"id": 14, "pt": "Digital Miner", "en": "Digital Miner"}, {"id": 15, "pt": "QuarryPlus e Chunk Destroyer", "en": "QuarryPlus and Chunk Destroyer"}, {"id": 16, "pt": "Powah Inicial", "en": "Early Powah"}, {"id": 17, "pt": "Flux Networks Inicial", "en": "Early Flux Networks"}, {"id": 18, "pt": "Productive Bees Fundamentos", "en": "Productive Bees Fundamentals"}, {"id": 19, "pt": "Productive Bees Genética", "en": "Productive Bees Genetics"}, {"id": 20, "pt": "ATM Bees", "en": "ATM Bees"}, {"id": 21, "pt": "Mystical Agriculture", "en": "Mystical Agriculture"}, {"id": 22, "pt": "Mystical Agriculture Avançado", "en": "Advanced Mystical Agriculture"}, {"id": 23, "pt": "Hostile Neural Networks", "en": "Hostile Neural Networks"}, {"id": 24, "pt": "Industrial Foregoing", "en": "Industrial Foregoing"}, {"id": 25, "pt": "Create Básico", "en": "Create Basics"}, {"id": 26, "pt": "Create Avançado", "en": "Advanced Create"}, {"id": 27, "pt": "Botania Básico", "en": "Botania Basics"}, {"id": 28, "pt": "Botania Endgame", "en": "Botania Endgame"}, {"id": 29, "pt": "Blood Magic", "en": "Blood Magic"}, {"id": 30, "pt": "Ars Nouveau", "en": "Ars Nouveau"}, {"id": 31, "pt": "Occultism", "en": "Occultism"}, {"id": 32, "pt": "Iron's Spells", "en": "Iron's Spells"}, {"id": 33, "pt": "Apotheosis Encantamentos", "en": "Apotheosis Enchanting"}, {"id": 34, "pt": "Apotheosis Affixes", "en": "Apotheosis Affixes"}, {"id": 35, "pt": "Mob Grinding Utils", "en": "Mob Grinding Utils"}, {"id": 36, "pt": "Extreme Reactors", "en": "Extreme Reactors"}, {"id": 37, "pt": "Mekanism Nuclear", "en": "Nuclear Mekanism"}, {"id": 38, "pt": "Fusion e SPS", "en": "Fusion and SPS"}, {"id": 39, "pt": "Dimensões Extras", "en": "Extra Dimensions"}, {"id": 40, "pt": "Bosses Avançados", "en": "Advanced Bosses"}, {"id": 41, "pt": "Mystical Agriculture Guia Mestre", "en": "Mystical Agriculture Master Guide"}, {"id": 42, "pt": "Powah Guia Mestre", "en": "Powah Master Guide"}, {"id": 43, "pt": "Botania Guia Mestre", "en": "Botania Master Guide"}, {"id": 44, "pt": "Blood Magic Guia Mestre", "en": "Blood Magic Master Guide"}, {"id": 45, "pt": "Ars Nouveau Guia Mestre", "en": "Ars Nouveau Master Guide"}, {"id": 46, "pt": "Occultism Guia Mestre", "en": "Occultism Master Guide"}, {"id": 47, "pt": "Industrial Foregoing Guia Mestre", "en": "Industrial Foregoing Master Guide"}, {"id": 48, "pt": "HNN Guia Mestre", "en": "HNN Master Guide"}, {"id": 49, "pt": "Create Guia Mestre", "en": "Create Master Guide"}, {"id": 50, "pt": "Apotheosis Guia Mestre", "en": "Apotheosis Master Guide"}, {"id": 51, "pt": "Flux Networks Guia Mestre", "en": "Flux Networks Master Guide"}, {"id": 52, "pt": "Extreme Reactors Guia Mestre", "en": "Extreme Reactors Master Guide"}, {"id": 53, "pt": "Mob Grinding Utils Avançado", "en": "Advanced Mob Grinding Utils"}, {"id": 54, "pt": "Dimensões e Bosses Avançados", "en": "Advanced Dimensions and Bosses"}, {"id": 55, "pt": "ATM Star 2.0", "en": "ATM Star 2.0"}, {"id": 56, "pt": "Creative Items e Pós-Endgame", "en": "Creative Items and Post-Endgame"}, {"id": 57, "pt": "Progressão Industrial Extrema", "en": "Extreme Industrial Progression"}, {"id": 58, "pt": "Mega-Base Definitiva", "en": "Ultimate Mega-Base"}, {"id": 59, "pt": "Troubleshooting e Manutenção", "en": "Troubleshooting and Maintenance"}, {"id": 60, "pt": "Apêndice Completo", "en": "Complete Appendix"}];
const KEY='atm10-v26-chapter-progress';
const CURRENT_CHAPTER_KEY='atm10-v27-current-chapter';
const savedChapter=Number(localStorage.getItem(CURRENT_CHAPTER_KEY));
let state=JSON.parse(localStorage.getItem(KEY)||'{}'),current=savedChapter>=1&&savedChapter<=60?savedChapter:1,tab='chapter',query='';
const themeSelect=document.getElementById('themeSelect');
const fontSelect=document.getElementById('fontSelect');
const accentColor=document.getElementById('accentColor');
const accentColor2=document.getElementById('accentColor2');
const fontSize=document.getElementById('fontSize');
const resetAppearance=document.getElementById('resetAppearance');
const languageSelect=document.getElementById('languageSelect');
const accountLoginTab=document.getElementById('accountLoginTab');
const accountSignupTab=document.getElementById('accountSignupTab');
const accountSubmitBtn=document.getElementById('accountSubmitBtn');
const accountPassword=document.getElementById('accountPassword');
const accountEmail=document.getElementById('accountEmail');
const accountProfileEmail=document.getElementById('accountProfileEmail');
const accountProfileSync=document.getElementById('accountProfileSync');
const accountAutoSync=document.getElementById('accountAutoSync');
const accountSupabaseUrl=document.getElementById('accountSupabaseUrl');
const accountSupabaseKey=document.getElementById('accountSupabaseKey');
function tr(pt,en){return currentLang==='en'?en:pt;}
function chapterTitle(c){return currentLang==='en'?c.en:c.pt;}
function chapterGuideStore(){return window.ATM10_CHAPTER_GUIDES||{summaries:{},map:{},drafts:{}};}
function chapterDrafts(c){
 const guide=chapterGuideStore();
 return (guide.map[c.id]||[]).map(id=>guide.drafts[id]).filter(Boolean);
}
function chapterSummary(c){
 const summary=chapterGuideStore().summaries[c.id];
 if(currentLang==='en')return `Detailed progression, requirements, automation, and troubleshooting for ${c.en}.`;
 return summary?.pt||`Progressão detalhada, requisitos, automação e solução de problemas para ${c.pt}.`;
}
function tasks(c){
 const found=[];
 chapterDrafts(c).forEach(d=>{
   const lines=d.body.split(/\r?\n/);
   let marker=-1;
   lines.forEach((line,index)=>{if(/(?:end of chapter|checklist final|checklist do capítulo|antes de avançar|before moving)/i.test(line))marker=index;});
   const candidates=marker>=0?lines.slice(marker):lines;
   candidates.forEach(line=>{
     const trimmed=line.trim();
     const clean=trimmed.replace(/^[☐□☑✅✓✔]\s*/,"");
     if(/^[☐□☑✅✓✔]\s+/.test(trimmed)&&clean.length>3&&clean.length<180&&!/checklist|objectives?|objetivos?/i.test(clean)&&!found.includes(clean))found.push(clean);
   });
 });
 if(found.length>=4)return found.slice(0,10);
 return currentLang==='en'
  ? ['Read the detailed guide','Prepare the listed resources','Build the main system','Automate inputs and outputs','Integrate storage and power','Test failure and recovery states']
  : ['Ler o guia detalhado','Preparar os recursos listados','Construir o sistema principal','Automatizar entradas e saídas','Integrar armazenamento e energia','Testar falhas e recuperação'];
}
function renderGuideBody(text){
 const safe=escapeHtml(text).replace(/\r/g,'').trim();
 return `<p>${safe.replace(/\n{2,}/g,'</p><p>').replace(/\n/g,'<br>')}</p>`;
}
function renderRecoveredGuides(c){
 const drafts=chapterDrafts(c);
 if(!drafts.length)return '';
 return `<section class="chapter-guides"><h3>${tr('Guias detalhados recuperados','Recovered detailed guides')}</h3>
  <p class="muted">${tr('Conteúdo restaurado da conversa original e reorganizado por assunto. Receitas e quantidades devem ser confirmadas no JEI da versão instalada.','Content restored from the original conversation and reorganized by subject. Confirm recipes and quantities in JEI for your installed version.')}</p>
  ${drafts.map((d,i)=>`<details class="chapter-guide" ${i===0?'open':''}><summary>${escapeHtml(d.title)}</summary><div class="chapter-guide-body">${renderGuideBody(d.body)}</div></details>`).join('')}</section>`;
}
function renderChapterConnections(c){
 const cards=[];
 ITEM_PAGES.filter(x=>x.chapter===c.id||(x.related||[]).includes(c.id)).slice(0,5).forEach(x=>cards.push(`<article class="chapter-connection"><h4>${escapeHtml(L(x))}</h4><p><b>${escapeHtml(x.mod)}</b> — ${escapeHtml(L(x.machine))}</p><button class="action" onclick="openItem('${x.id}')">${tr('Abrir página do item','Open item page')}</button></article>`));
 MULTIBLOCKS.filter(x=>x.chapter===c.id).forEach(x=>cards.push(`<article class="chapter-connection"><h4>${escapeHtml(L(x))}</h4><p>${escapeHtml(L(x.size))}</p><p>${escapeHtml(L(x.rules).slice(0,2).join(' • '))}</p></article>`));
 BOSS_DATA.filter(x=>x.chapter===c.id).slice(0,4).forEach(x=>cards.push(`<article class="chapter-connection"><h4>${escapeHtml(L(x))}</h4><p>${escapeHtml(x.location)}</p><p>${escapeHtml(x.prep)}</p></article>`));
 DIMENSION_DATA.filter(x=>x.chapter===c.id).forEach(x=>cards.push(`<article class="chapter-connection"><h4>${x.icon} ${escapeHtml(L(x))}</h4><p>${escapeHtml(dimensionText(x,'portal'))}</p><p>${escapeHtml(dimensionText(x,'why'))}</p></article>`));
 RESOURCE_DATA.filter(x=>x.chapter===c.id).slice(0,4).forEach(x=>cards.push(`<article class="chapter-connection"><h4>${escapeHtml(L(x))}</h4><p>${tr('Estoque alvo','Stock target')}: ${escapeHtml(x.stock)}</p><p>${escapeHtml(x.method)}</p></article>`));
 return cards.length?`<section><h3>${tr('Itens e sistemas relacionados','Related items and systems')}</h3><div class="chapter-connections">${cards.join('')}</div></section>`:'';
}
function chapterIsComplete(c){return tasks(c).every((_,i)=>state[k(c.id,i)]);}
function toggleChapterComplete(chapterId){
 const c=chapters.find(x=>x.id===chapterId);if(!c)return;
 const shouldComplete=!chapterIsComplete(c);
 tasks(c).forEach((_,i)=>{state[k(c.id,i)]=shouldComplete;});
 update();nav();render();
 if(typeof queueAutoCloudSync==='function')queueAutoCloudSync();
}
function renderChapterToolbar(c,bottom=false){
 const complete=chapterIsComplete(c),done=tasks(c).filter((_,i)=>state[k(c.id,i)]).length,total=tasks(c).length;
 return `<nav class="chapter-toolbar${bottom?' bottom':''}" aria-label="${tr('Navegação entre capítulos','Chapter navigation')}">
  <button class="action" type="button" ${c.id===1?'disabled':''} onclick="openChapter(${c.id-1})">← ${tr('Anterior','Previous')}</button>
  <label class="chapter-picker">${tr('Escolher capítulo','Choose chapter')}
   <select aria-label="${tr('Escolher capítulo','Choose chapter')}" onchange="openChapter(Number(this.value))">${chapters.map(x=>`<option value="${x.id}" ${x.id===c.id?'selected':''}>${x.id}. ${escapeHtml(chapterTitle(x))}</option>`).join('')}</select>
  </label>
  <button class="action ${complete?'complete':''}" type="button" onclick="toggleChapterComplete(${c.id})">${complete?'✓ '+tr('Desmarcar capítulo','Unmark chapter'):tr('Marcar capítulo inteiro','Complete entire chapter')} (${done}/${total})</button>
  <button class="action" type="button" ${c.id===60?'disabled':''} onclick="openChapter(${c.id+1})">${tr('Próximo','Next')} →</button>
 </nav>`;
}
function k(c,i){return `c${c}t${i}`;}
function update(){
 let total=chapters.reduce((sum,c)=>sum+tasks(c).length,0),done=0;
 chapters.forEach(c=>tasks(c).forEach((_,i)=>{if(state[k(c.id,i)])done++;}));
 let p=Math.round(done/total*100);
 document.getElementById('fill').style.width=p+'%';
 document.getElementById('stats').textContent=`${p}% • ${done}/${total} tarefas`;
 localStorage.setItem(KEY,JSON.stringify(state));
}
function searchableText(value){
 if(value===null||value===undefined)return '';
 if(Array.isArray(value))return value.map(searchableText).join(' ');
 if(typeof value==='object')return Object.values(value).map(searchableText).join(' ');
 return String(value);
}
function normalizeSearch(value){return searchableText(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();}
let chapterSearchIndex=null;
function buildChapterSearchIndex(){
 chapterSearchIndex=new Map(chapters.map(c=>{
  const relatedItems=ITEM_PAGES.filter(x=>x.chapter===c.id||(x.related||[]).includes(c.id));
  const relatedData=[...MULTIBLOCKS,...BOSS_DATA,...DIMENSION_DATA,...RESOURCE_DATA].filter(x=>x.chapter===c.id);
  const guide=chapterGuideStore(),summary=guide.summaries[c.id],drafts=chapterDrafts(c);
  const title=normalizeSearch([c.id,c.pt,c.en]);
  const primary=normalizeSearch([relatedItems,relatedData]);
  return [c.id,{title,primary,all:normalizeSearch([title,primary,summary,drafts])}];
 }));
}
function nav(){
 const el=document.getElementById('nav');el.innerHTML='';
 if(!chapterSearchIndex)buildChapterSearchIndex();
 const terms=normalizeSearch(query).split(/\s+/).filter(Boolean);
 const score=c=>{const entry=chapterSearchIndex.get(c.id);return terms.reduce((sum,term)=>sum+(entry.title.includes(term)?100:entry.primary.includes(term)?30:entry.all.includes(term)?1:0),0);};
 const filtered=chapters.filter(c=>terms.every(term=>chapterSearchIndex.get(c.id).all.includes(term))).sort((a,b)=>score(b)-score(a)||a.id-b.id);
 const count=document.getElementById('sidebarCount');if(count)count.textContent=`${filtered.length}/60`;
 if(!filtered.length){el.innerHTML=`<div class="nav-empty">${tr('Nenhum capítulo encontrado. Tente o nome de um item, máquina, mod ou número.','No chapter found. Try an item, machine, mod, or chapter number.')}</div>`;return;}
 filtered.forEach(c=>{
  const complete=tasks(c).every((_,i)=>state[k(c.id,i)]);
  const b=document.createElement('button');b.type='button';b.textContent=`${complete?'✓ ':''}${c.id}. ${chapterTitle(c)}`;b.className=`${c.id===current?'active ':''}${complete?'done':''}`.trim();
  b.onclick=()=>openChapter(c.id);el.appendChild(b);
 });
}
function sync(){document.querySelectorAll('[data-tab]').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));}
const ITEM_PAGES=[{"id": "digital-miner", "pt": "Digital Miner", "en": "Digital Miner", "mod": "Mekanism", "chapter": 14, "dimension": {"pt": "Qualquer dimensão carregada; recomendado na Mining Dimension.", "en": "Any loaded dimension; recommended in the Mining Dimension."}, "machine": {"pt": "Máquina autônoma; requer FE e configuração de filtros.", "en": "Standalone machine; requires FE and filter configuration."}, "recipe": ["Steel Casing", "Logistical Sorter", "Atomic Alloy", "Teleportation Core", "Robit"], "uses": {"pt": ["Mineração por tag, mod ID, item ou material", "Substituição de blocos minerados", "Auto-eject para storage"], "en": ["Mine by tag, mod ID, item, or material", "Replace mined blocks", "Auto-eject into storage"]}, "related": [7, 13, 14, 15]}, {"id": "nitro-crystal", "pt": "Nitro Crystal", "en": "Nitro Crystal", "mod": "Powah", "chapter": 42, "dimension": {"pt": "Fabricado na base.", "en": "Crafted at your base."}, "machine": {"pt": "Energizing Orb com Energizing Rods.", "en": "Energizing Orb with Energizing Rods."}, "recipe": ["Spirited Crystal Block", "Nether Star", "Redstone Block", "Blazing Crystal Block"], "uses": {"pt": ["Nitro Reactor", "Nitro Energy Cell", "Nitro Ender Gates", "Componentes Powah de tier máximo"], "en": ["Nitro Reactor", "Nitro Energy Cell", "Nitro Ender Gates", "Maximum-tier Powah components"]}, "related": [16, 42, 51]}, {"id": "antimatter-pellet", "pt": "Antimatter Pellet", "en": "Antimatter Pellet", "mod": "Mekanism", "chapter": 38, "dimension": {"pt": "Produção recomendada em área nuclear isolada.", "en": "Recommended in an isolated nuclear area."}, "machine": {"pt": "SPS produz Antimatter Chemical; Chemical Crystallizer forma o pellet.", "en": "SPS produces Antimatter Chemical; a Chemical Crystallizer forms the pellet."}, "recipe": ["Polonium → SPS", "Antimatter Chemical", "Chemical Crystallizer"], "uses": {"pt": ["ATM Star", "Creative items", "QIO e componentes Mekanism de endgame"], "en": ["ATM Star", "Creative items", "Endgame QIO and Mekanism components"]}, "related": [37, 38, 55]}, {"id": "terrasteel", "pt": "Terrasteel", "en": "Terrasteel", "mod": "Botania", "chapter": 28, "dimension": {"pt": "Overworld/base mágica.", "en": "Overworld/magic base."}, "machine": {"pt": "Terrasteel Agglomeration Plate com Mana suficiente.", "en": "Terrasteel Agglomeration Plate with enough Mana."}, "recipe": ["Manasteel Ingot", "Mana Pearl", "Mana Diamond", "Mana burst"], "uses": {"pt": ["Portal de Alfheim", "Gaia Guardian", "Armaduras e itens Botania", "ATM Star"], "en": ["Alfheim Portal", "Gaia Guardian", "Botania armor and items", "ATM Star"]}, "related": [27, 28, 43, 55]}, {"id": "drygmy", "pt": "Drygmy Charm", "en": "Drygmy Charm", "mod": "Ars Nouveau", "chapter": 30, "dimension": {"pt": "Overworld; funciona perto de mobs vivos.", "en": "Overworld; works near living mobs."}, "machine": {"pt": "Drygmy Henge e Source Jars.", "en": "Drygmy Henge and Source Jars."}, "recipe": ["Wilden Horn", "Source Gem", "Gold Ingot", "Manipulation Essence"], "uses": {"pt": ["Drops passivos sem matar mobs", "Farms de bosses compatíveis", "Gaia Spirits quando permitido"], "en": ["Passive drops without killing mobs", "Compatible boss farms", "Gaia Spirits when supported"]}, "related": [30, 45, 54]}, {"id": "pink-slime", "pt": "Pink Slime", "en": "Pink Slime", "mod": "Industrial Foregoing", "chapter": 24, "dimension": {"pt": "Qualquer dimensão com mob farm.", "en": "Any dimension with a mob farm."}, "machine": {"pt": "Mob Slaughter Factory.", "en": "Mob Slaughter Factory."}, "recipe": ["Mobs vivos", "Mob Slaughter Factory", "Tank/Fluid Storage"], "uses": {"pt": ["Advanced Machine Frames", "Infinity tools", "Receitas Industrial Foregoing"], "en": ["Advanced Machine Frames", "Infinity tools", "Industrial Foregoing recipes"]}, "related": [24, 47, 53]}, {"id": "prediction-matrix", "pt": "Prediction Matrix", "en": "Prediction Matrix", "mod": "Hostile Neural Networks", "chapter": 48, "dimension": {"pt": "Fabricado na base.", "en": "Crafted at your base."}, "machine": {"pt": "Crafting/AE2; consumido pela Simulation Chamber.", "en": "Crafting/AE2; consumed by a Simulation Chamber."}, "recipe": ["Clay", "Glass Pane", "Gold Ingot", "Lapis Lazuli"], "uses": {"pt": ["Executar simulações de Data Models", "Produzir Predictions"], "en": ["Run Data Model simulations", "Produce Predictions"]}, "related": [23, 48]}, {"id": "atm-star", "pt": "ATM Star", "en": "ATM Star", "mod": "All The Mods", "chapter": 55, "dimension": {"pt": "Runic Star Altar em área dedicada.", "en": "Runic Star Altar in a dedicated area."}, "machine": {"pt": "Runic Star Altar; receita varia por versão do pack.", "en": "Runic Star Altar; recipe varies by pack version."}, "recipe": ["ATM metals/alloys", "Antimatter", "Magic components", "Create/Powah components", "Boss drops", "Compressed blocks"], "uses": {"pt": ["Creative items", "Starry Bee", "Pós-endgame"], "en": ["Creative items", "Starry Bee", "Post-endgame"]}, "related": [38, 43, 44, 45, 46, 49, 55, 56]}, {"id": "flux-point", "pt": "Flux Point", "en": "Flux Point", "mod": "Flux Networks", "chapter": 51, "dimension": {"pt": "Qualquer dimensão.", "en": "Any dimension."}, "machine": {"pt": "Recebe energia da Flux Network.", "en": "Receives energy from a Flux Network."}, "recipe": ["Flux Core", "Redstone", "Obsidian", "Flux Block"], "uses": {"pt": ["Energia cross-dimensional", "Alimentar máquinas remotas", "Buffers locais"], "en": ["Cross-dimensional power", "Power remote machines", "Local buffers"]}, "related": [17, 51]}, {"id": "gaia-spirit", "pt": "Gaia Spirit", "en": "Gaia Spirit", "mod": "Botania", "chapter": 43, "dimension": {"pt": "Gaia arena no Overworld.", "en": "Gaia arena in the Overworld."}, "machine": {"pt": "Drop do Gaia Guardian.", "en": "Gaia Guardian drop."}, "recipe": ["Terrasteel Beacon", "Gaia Pylons", "Gaia Guardian fight"], "uses": {"pt": ["Itens Botania avançados", "ATM Star"], "en": ["Advanced Botania items", "ATM Star"]}, "related": [28, 43, 55]}, {"id": "unobtainium", "pt": "Unobtainium Ingot", "en": "Unobtainium Ingot", "mod": "All The Modium", "chapter": 9, "dimension": {"pt": "End Highlands; automação posterior por Bees ou Mystical Agriculture.", "en": "End Highlands; later automated with Bees or Mystical Agriculture."}, "machine": {"pt": "Mineração inicial + smelting/ore processing.", "en": "Initial mining plus smelting/ore processing."}, "recipe": ["Unobtainium Ore", "Smelting or ore processing"], "uses": {"pt": ["Armadura e ferramentas", "ATM alloys", "ATM Star"], "en": ["Armor and tools", "ATM alloys", "ATM Star"]}, "related": [9, 20, 22, 55]}, {"id": "ether-gas", "pt": "Ether Gas", "en": "Ether Gas", "mod": "Industrial Foregoing", "chapter": 47, "dimension": {"pt": "Nether, usando um Wither em Stasis.", "en": "Nether, using a Wither in Stasis."}, "machine": {"pt": "Fluid Laser Base com Laser Drills acima do Wither.", "en": "Fluid Laser Base with Laser Drills above a Wither."}, "recipe": ["Wither", "Stasis Chamber", "Fluid Laser Base", "Laser Drills"], "uses": {"pt": ["Infinity tools", "Componentes Industrial Foregoing avançados"], "en": ["Infinity tools", "Advanced Industrial Foregoing components"]}, "related": [24, 47]}];
const MULTIBLOCKS=[{"id": "fission", "pt": "Fission Reactor", "en": "Fission Reactor", "chapter": 37, "status": "exact", "size": {"pt": "Exterior mínimo 3×4×3; máximo 18×18×18.", "en": "Minimum outside size 3×4×3; maximum 18×18×18."}, "rules": {"pt": ["Arestas: Fission Reactor Casing", "Faces: casing, Reactor Glass, ports ou logic adapters", "Colunas internas: 1–15 Fuel Assemblies + Control Rod Assembly no topo", "Control rods não devem se tocar; use padrão xadrez", "Mínimo 4 ports: coolant in/out, fuel in, waste out"], "en": ["Edges: Fission Reactor Casing", "Faces: casing, Reactor Glass, ports, or logic adapters", "Internal columns: 1–15 Fuel Assemblies plus a Control Rod Assembly on top", "Control rods should not touch; use a checkerboard pattern", "At least 4 ports: coolant in/out, fuel in, waste out"]}, "layout": {"w": 5, "h": 5, "cells": ["frame", "frame", "frame", "frame", "frame", "frame", "air", "core", "air", "frame", "frame", "core", "air", "core", "frame", "frame", "air", "core", "air", "frame", "frame", "frame", "frame", "frame", "frame"]}, "source": "Official Mekanism Wiki"}, {"id": "turbine", "pt": "Industrial Turbine", "en": "Industrial Turbine", "chapter": 37, "status": "exact", "size": {"pt": "Mínimo 5×5×5; máximo 17×17×18. Base sempre quadrada.", "en": "Minimum 5×5×5; maximum 17×17×18. Base must be square."}, "rules": {"pt": ["Rotor central vertical", "2 blades por rotor shaft", "Rotational Complex sobre o rotor", "Pressure Dispersers em uma camada completa ao redor", "Coils acima, tocando o Rotational Complex", "Condensers acima do Rotational Complex", "Vents nas paredes/teto; cada vent suporta 32.000 mB/t"], "en": ["Vertical central rotor", "2 blades per rotor shaft", "Rotational Complex above the rotor", "Full Pressure Disperser layer around it", "Coils above, touching the Rotational Complex", "Condensers above the Rotational Complex", "Vents on walls/roof; each vent supports 32,000 mB/t"]}, "layout": {"w": 5, "h": 5, "cells": ["frame", "frame", "frame", "frame", "frame", "frame", "air", "air", "air", "frame", "frame", "air", "core", "air", "frame", "frame", "air", "air", "air", "frame", "frame", "frame", "frame", "frame", "frame"]}, "source": "Official Mekanism Wiki"}, {"id": "sps", "pt": "SPS", "en": "SPS", "chapter": 38, "status": "exact", "size": {"pt": "Estrutura fixa em formato 7×7×7 com cantos chanfrados.", "en": "Fixed 7×7×7 chamfered structure."}, "rules": {"pt": ["Frame: SPS Casings", "Faces: SPS Casing, Reactor/Structural Glass ou SPS Ports", "Mínimo recomendado: 72 casings, 123 glass, 3 ports, 1 coil", "Para velocidade máxima: 2 energy ports com coils", "Máximo 2 mB/t de Antimatter; 800 MFE/t no padrão"], "en": ["Frame: SPS Casings", "Faces: SPS Casing, Reactor/Structural Glass, or SPS Ports", "Recommended minimum: 72 casings, 123 glass, 3 ports, 1 coil", "For maximum speed: 2 energy ports with coils", "Maximum 2 mB/t Antimatter; 800 MFE/t by default"]}, "layout": {"w": 7, "h": 7, "cells": ["air", "air", "frame", "frame", "frame", "air", "air", "air", "frame", "glass", "glass", "glass", "frame", "air", "frame", "glass", "glass", "glass", "glass", "glass", "frame", "frame", "glass", "glass", "core", "glass", "glass", "frame", "frame", "glass", "glass", "glass", "glass", "glass", "frame", "air", "frame", "glass", "glass", "glass", "frame", "air", "air", "air", "frame", "frame", "frame", "air", "air"]}, "source": "Official Mekanism Wiki"}, {"id": "matrix", "pt": "Induction Matrix", "en": "Induction Matrix", "chapter": 38, "status": "exact", "size": {"pt": "Interior até 16×16×16; exterior até 18×18×18.", "en": "Interior up to 16×16×16; exterior up to 18×18×18."}, "rules": {"pt": ["Arestas: Induction Casing", "Faces: casing, port, Reactor Glass ou Structural Glass", "Interior: air, Cells e Providers", "Precisa de ao menos 1 Cell e 1 Provider", "Configure um port como input e outro como output"], "en": ["Edges: Induction Casing", "Faces: casing, port, Reactor Glass, or Structural Glass", "Interior: air, Cells, and Providers", "Requires at least 1 Cell and 1 Provider", "Configure one port as input and another as output"]}, "layout": {"w": 5, "h": 5, "cells": ["frame", "frame", "frame", "frame", "frame", "frame", "glass", "glass", "glass", "frame", "port", "glass", "core", "glass", "port", "frame", "glass", "glass", "glass", "frame", "frame", "frame", "frame", "frame", "frame"]}, "source": "Official Mekanism Wiki"}, {"id": "boiler", "pt": "Create Steam Boiler", "en": "Create Steam Boiler", "chapter": 49, "status": "recommended", "size": {"pt": "Layout recomendado: tanque 3×3×4 sobre 9 Blaze Burners; escalável.", "en": "Recommended layout: 3×3×4 tank over 9 Blaze Burners; scalable."}, "rules": {"pt": ["Fluid Tanks formam o boiler", "Steam Engines conectados ao tanque", "Água automática obrigatória", "Blaze Burners aquecidos; Superheated melhora o tier", "Stress capacity depende de size, heat e water"], "en": ["Fluid Tanks form the boiler", "Steam Engines attach to the tank", "Automatic water is mandatory", "Heated Blaze Burners; Superheated improves the tier", "Stress capacity depends on size, heat, and water"]}, "layout": {"w": 3, "h": 3, "cells": ["core", "core", "core", "core", "core", "core", "core", "core", "core"]}, "source": "Create Ponder / verify in pack"}, {"id": "blood-altar", "pt": "Blood Altar Tier 5", "en": "Blood Altar Tier 5", "chapter": 44, "status": "exact", "size": {"pt": "Altar central com quatro anéis de runas; pylons externos no tier 5.", "en": "Central altar with four rune rings; outer pylons at tier 5."}, "rules": {"pt": ["Tier 2: 8 runas ao redor do altar", "Tier 3: segundo anel 2 blocos abaixo/fora", "Tier 4: terceiro anel e large bloodstone blocks", "Tier 5: quarto anel e beacons/pylons", "Use Divination Sigil para confirmar tier"], "en": ["Tier 2: 8 runes around the altar", "Tier 3: second ring 2 blocks lower/outward", "Tier 4: third ring and large bloodstone blocks", "Tier 5: fourth ring and beacons/pylons", "Use a Divination Sigil to confirm the tier"]}, "layout": {"w": 9, "h": 9, "cells": []}, "source": "Blood Magic guide; verify block variants in JEI"}, {"id": "runic-star", "pt": "Runic Star Altar", "en": "Runic Star Altar", "chapter": 55, "status": "version", "size": {"pt": "Estrutura específica do ATM10 Star 2.0; abra o preview multiblock do JEI da sua versão.", "en": "ATM10 Star 2.0 pack-specific structure; open the JEI multiblock preview for your version."}, "rules": {"pt": ["Construa camada por camada a partir do preview", "Reserve espaço 31×31", "Confirme Input Bus, Output Bus, Energy e Fluid inputs", "Receitas e drops mudam entre versões", "Não use blueprint antigo do Modular Machinery"], "en": ["Build layer by layer from the preview", "Reserve a 31×31 area", "Confirm Input Bus, Output Bus, Energy, and Fluid inputs", "Recipes and drops change between versions", "Do not use the old Modular Machinery blueprint"]}, "layout": {"w": 7, "h": 7, "cells": ["air", "air", "frame", "frame", "frame", "air", "air", "air", "frame", "glass", "glass", "glass", "frame", "air", "frame", "glass", "port", "glass", "port", "glass", "frame", "frame", "glass", "glass", "core", "glass", "glass", "frame", "frame", "glass", "port", "glass", "port", "glass", "frame", "air", "frame", "glass", "glass", "glass", "frame", "air", "air", "air", "frame", "frame", "frame", "air", "air"]}, "source": "ATM10 JEI/Quest Book — version dependent"}];
const BOSS_DATA=[{"id": "naga", "pt": "Naga", "en": "Naga", "location": "Twilight Forest — Naga Courtyard", "prep": "Shield, early armor, food", "mechanics": "Avoid charges; attack after passes.", "drops": "Naga Scales, Trophy", "repeat": "Find another courtyard", "chapter": 54}, {"id": "lich", "pt": "Twilight Lich", "en": "Twilight Lich", "location": "Twilight Forest — Lich Tower", "prep": "Ranged weapon, shield", "mechanics": "Reflect projectiles to remove shields, then kill summons.", "drops": "Trophy, Scepters", "repeat": "Find another tower", "chapter": 54}, {"id": "gaia2", "pt": "Gaia Guardian II", "en": "Gaia Guardian II", "location": "Overworld — Gaia arena", "prep": "Terrasteel, buffs, large clear arena", "mechanics": "Phases, summons, arena boundary.", "drops": "Gaia Spirits, Relics chance", "repeat": "Repeat ritual", "chapter": 43}, {"id": "chimera", "pt": "Wilden Chimera", "en": "Wilden Chimera", "location": "Summoned with Ars Nouveau ritual", "prep": "Archmage gear, mobility", "mechanics": "Multiple forms and movement patterns.", "drops": "Wilden Tribute and unique drops", "repeat": "Repeat summon", "chapter": 45}, {"id": "monstrosity", "pt": "Netherite Monstrosity", "en": "Netherite Monstrosity", "location": "Nether — Soul Blacksmith", "prep": "Fire Resistance, strong armor", "mechanics": "Avoid lava and large area attacks.", "drops": "Cataclysm materials", "repeat": "Find another structure", "chapter": 54}, {"id": "ender-guardian", "pt": "Ender Guardian", "en": "Ender Guardian", "location": "End — Ruined Citadel", "prep": "Flight, ranged weapon, Slow Falling", "mechanics": "Lasers, knockback, area attacks.", "drops": "Void-related Cataclysm materials", "repeat": "Find another citadel", "chapter": 54}, {"id": "leviathan", "pt": "The Leviathan", "en": "The Leviathan", "location": "Ocean structure", "prep": "Water Breathing, Night Vision, underwater weapon", "mechanics": "Underwater phases and large attacks.", "drops": "Unique Cataclysm materials", "repeat": "Find another structure", "chapter": 54}, {"id": "ignis", "pt": "Ignis", "en": "Ignis", "location": "Nether fortress structure", "prep": "Best gear, Fire Resistance, Life Steal, Totems", "mechanics": "Long combos, fire zones, multiple phases.", "drops": "Ignitium and unique weapon materials", "repeat": "Find another structure", "chapter": 54}];
BOSS_DATA.push(...(window.ATM10_COMPANION_DATA?.bosses||[]));
const DIMENSION_DATA=[
 {"id":"overworld","icon":"🌍","pt":"Overworld","en":"Overworld","portalPt":"Spawn","portalEn":"Spawn","whyPt":"Base principal; Allthemodium no Deep Dark","whyEn":"Main base; Allthemodium in the Deep Dark","structuresPt":"Ancient Cities, estruturas melhoradas e dungeons","structuresEn":"Ancient Cities, improved structures, and dungeons","chapter":6,"difficulty":1},
 {"id":"nether","icon":"🔥","pt":"Nether","en":"Nether","portalPt":"Portal de Obsidiana","portalEn":"Obsidian Portal","whyPt":"Minério de Vibranium e bosses do Nether","whyEn":"Vibranium ore and Nether bosses","structuresPt":"Estruturas de bosses do Cataclysm e fortalezas","structuresEn":"Cataclysm boss structures and fortresses","chapter":8,"difficulty":2},
 {"id":"end","icon":"🟣","pt":"The End","en":"The End","portalPt":"Portal do End","portalEn":"End Portal","whyPt":"Minério de Unobtainium e bosses do End","whyEn":"Unobtainium ore and End bosses","structuresPt":"End Cities, ilhas externas e cidadelas do Cataclysm","structuresEn":"End Cities, outer islands, and Cataclysm citadels","chapter":9,"difficulty":3},
 {"id":"mining","icon":"⛏️","pt":"Mining Dimension","en":"Mining Dimension","portalPt":"Teleport Pad no Overworld","portalEn":"Teleport Pad in the Overworld","whyPt":"Melhor lugar para minerar quase todos os minérios","whyEn":"Best place to mine almost every ore","structuresPt":"Mundo de recursos ideal para quarries e Digital Miner","structuresEn":"Resource world ideal for quarries and the Digital Miner","chapter":7,"difficulty":4},
 {"id":"bumble","icon":"🐝","pt":"The Bumblezone","en":"The Bumblezone","portalPt":"Jogue uma Ender Pearl em uma colmeia","portalEn":"Throw an Ender Pearl at a Beehive","whyPt":"Recursos de abelhas e encantamentos exclusivos","whyEn":"Bee resources and unique enchantments","structuresPt":"Royal Bee Chambers, dungeons de abelhas e flores especiais","structuresEn":"Royal Bee Chambers, bee dungeons, and special flowers","chapter":39,"difficulty":5},
 {"id":"twilight","icon":"🌲","pt":"Twilight Forest","en":"Twilight Forest","portalPt":"Jogue um Diamante em uma piscina 2×2 cercada por flores","portalEn":"Throw a Diamond into a 2×2 flower-bordered pool","whyPt":"Longa progressão de bosses e loot exclusivo","whyEn":"Long boss progression and unique loot","structuresPt":"Arenas de bosses, labirintos, torres e castelos","structuresEn":"Boss arenas, labyrinths, towers, and castles","chapter":39,"difficulty":6},
 {"id":"other","icon":"☠️","pt":"The Other","en":"The Other","portalPt":"Teleport Pad no Nether","portalEn":"Teleport Pad in the Nether","whyPt":"Dungeons, Pigliches e Templates de Unobtainium","whyEn":"Dungeons, Pigliches, and Unobtainium Templates","structuresPt":"Piglich Pyramid e grandes dungeons","structuresEn":"Piglich Pyramid and large dungeons","chapter":8,"difficulty":7},
 {"id":"starlight","icon":"🌠","pt":"Eternal Starlight","en":"Eternal Starlight","portalPt":"Portal de Eternal Starlight","portalEn":"Eternal Starlight Portal","whyPt":"Novos minérios, bosses e progressão mágica","whyEn":"New ores, bosses, and magic progression","structuresPt":"Templos, Golem Forge, Cursed Garden e arenas de bosses","structuresEn":"Temples, Golem Forge, Cursed Garden, and boss arenas","chapter":39,"difficulty":8},
 {"id":"under","icon":"🌿","pt":"The Undergarden","en":"The Undergarden","portalPt":"Portal do Undergarden","portalEn":"Undergarden Portal","whyPt":"Cloggrum, Froststeel, criaturas e cavernas exclusivas","whyEn":"Cloggrum, Froststeel, unique mobs, and caves","structuresPt":"Ruínas subterrâneas e sistemas de cavernas","structuresEn":"Underground ruins and cave systems","chapter":39,"difficulty":9},
 {"id":"beyond","icon":"🌌","pt":"The Beyond","en":"The Beyond","portalPt":"Teleport Pad no The End","portalEn":"Teleport Pad in The End","whyPt":"Dimensão vazia para progressão e construção de late game","whyEn":"Void dimension for late-game progression and building","structuresPt":"Espaço seguro para estruturas construídas pelo jogador","structuresEn":"Safe space for player-built late-game structures","chapter":54,"difficulty":10}
];
const HIDDEN_LOCATION_DATA=[
 {"icon":"🏛️","pt":"Ancient Cities (Deep Dark)","en":"Ancient Cities (Deep Dark)","detailPt":"Explore por Allthemodium, loot e progressão do Warden.","detailEn":"Explore for Allthemodium, loot, and Warden progression."},
 {"icon":"🏰","pt":"Estruturas de bosses do Cataclysm","en":"Cataclysm boss structures","detailPt":"Arenas perigosas com bosses e drops exclusivos.","detailEn":"Dangerous arenas with bosses and unique drops."},
 {"icon":"🗼","pt":"Estruturas melhoradas do YUNG's","en":"YUNG's improved structures","detailPt":"Strongholds, Mineshafts, Desert Temples e Ocean Monuments melhorados.","detailEn":"Improved Strongholds, Mineshafts, Desert Temples, and Ocean Monuments."},
 {"icon":"🐉","pt":"Ninhos de dragões e estruturas especiais","en":"Dragon nests and special structures","detailPt":"Áreas de exploração de alto risco com loot incomum.","detailEn":"High-risk exploration areas with unusual loot."},
 {"icon":"🏚️","pt":"Roguelike Dungeons","en":"Roguelike Dungeons","detailPt":"Dungeons de vários andares com muitos inimigos e baús.","detailEn":"Multi-floor dungeons with many enemies and chests."},
 {"icon":"🧙","pt":"Arenas Wilden do Ars Nouveau","en":"Ars Nouveau Wilden arenas","detailPt":"Locais da progressão do Wilden Chimera e seus drops.","detailEn":"Wilden Chimera progression locations and drops."},
 {"icon":"⚔️","pt":"Piglich Pyramid (The Other)","en":"Piglich Pyramid (The Other)","detailPt":"Estrutura essencial para Pigliches e materiais de late game.","detailEn":"Essential structure for Pigliches and late-game materials."},
 {"icon":"🏯","pt":"Arenas de bosses do Twilight Forest","en":"Twilight Forest boss arenas","detailPt":"Siga a ordem de progressão da dimensão para desbloquear cada arena.","detailEn":"Follow the dimension progression order to unlock each arena."},
 {"icon":"🌌","pt":"Templos de Eternal Starlight","en":"Eternal Starlight temples","detailPt":"Templos com loot, materiais mágicos e encontros de bosses.","detailEn":"Temples with loot, magic materials, and boss encounters."},
 {"icon":"🐝","pt":"Royal Bee Chambers (Bumblezone)","en":"Royal Bee Chambers (Bumblezone)","detailPt":"Câmaras especiais para recursos e progressão de abelhas.","detailEn":"Special chambers for bee resources and progression."}
];
function dimensionText(d,field){return currentLang==='en'?(d[field+'En']||d[field+'Pt']):(d[field+'Pt']||d[field+'En']);}
DIMENSION_DATA.forEach(d=>Object.assign(d,window.ATM10_COMPANION_DATA?.dimensionDetails?.[d.id]||{}));
function renderDifficultyRoute(){
 return `<div class="difficulty-route">${DIMENSION_DATA.map((d,i)=>`${i?'<span class="difficulty-arrow">→</span>':''}<span class="difficulty-step ${d.difficulty>=7?'danger':''}">${d.icon} ${escapeHtml(L(d))}${d.difficulty>=7?' ⚠️':''}</span>`).join('')}</div>`;
}
function renderDimensionOverview(showTracker=false,chapterId=null){
 if(chapterId!==null&&chapterId!==39&&chapterId!==54)return '';
 const rows=DIMENSION_DATA.map(d=>`<tr>
  <td>${showTracker?`<input type="checkbox" aria-label="${escapeHtml(L(d))}" ${trackers.dimensions[d.id]?'checked':''} onchange="trackers.dimensions['${d.id}']=this.checked;saveTrackers()"> `:''}${d.icon} <b>${escapeHtml(L(d))}</b></td>
  <td>${escapeHtml(dimensionText(d,'portal'))}</td>
  <td>${escapeHtml(dimensionText(d,'why'))}</td>
  <td class="${d.difficulty>=7?'danger':''}">${d.difficulty}/10${d.difficulty>=7?' ⚠️':''}</td>
 </tr>`).join('');
 const details=showTracker?`<div class="dimension-detail-list">${DIMENSION_DATA.map(d=>`<article class="dimension-detail" data-search-id="${d.id}"><h4>${d.icon} ${escapeHtml(L(d))}</h4><b>${tr('Objetivos','Objectives')}</b><ul>${(currentLang==='en'?d.objectivesEn:d.objectivesPt||[]).map(x=>`<li>${escapeHtml(x)}</li>`).join('')}</ul><b>Bosses</b><p>${(d.bosses||[]).length?d.bosses.map(escapeHtml).join(' • '):tr('Nenhum boss obrigatório','No required boss')}</p><button class="action" onclick="openChapter(${d.chapter})">${tr('Abrir capítulo','Open chapter')} ${d.chapter}</button></article>`).join('')}</div>`:'';
 return `<section class="dimension-guide${showTracker?' card':''}">
  <h3>${tr('Guia de dimensões','Dimension guide')}</h3>
  <p class="muted">${tr('Rotas de acesso, motivos para visitar e dificuldade relativa. Confirme o formato exato dos portais no livro de quests e no JEI da sua versão.','Access routes, reasons to visit, and relative difficulty. Confirm exact portal construction in your version\'s quest book and JEI.')}</p>
  <div class="dimension-table-wrap"><table class="dimension-table"><thead><tr><th>${tr('Dimensão','Dimension')}</th><th>${tr('Como chegar','How to get there')}</th><th>${tr('Por que visitar','Why go there')}</th><th>${tr('Dificuldade','Difficulty')}</th></tr></thead><tbody>${rows}</tbody></table></div>
  ${details}
  <h3>${tr('Mais fácil → mais difícil','Easiest → hardest')}</h3>${renderDifficultyRoute()}
  <h3>${tr('Locais escondidos ou menos óbvios','Hidden or less obvious places')}</h3>
  <p class="muted">${tr('Não são dimensões de portal separadas, mas valem a exploração.','These are not separate portal dimensions, but they are worth exploring.')}</p>
  <div class="hidden-locations">${HIDDEN_LOCATION_DATA.map(x=>`<article class="hidden-location"><h4>${x.icon} ${escapeHtml(L(x))}</h4><p>${escapeHtml(dimensionText(x,'detail'))}</p></article>`).join('')}</div>
 </section>`;
}
const TROUBLE_DATA=[{"keys": ["digital miner", "not working", "minerador", "não funciona"], "title": "Digital Miner not working", "steps": ["Confirm FE input and sufficient internal power", "Check Start button and radius/min-max Y", "Verify filters with Tag/ItemStack preview", "Check Silk/Inverse/Replace settings", "Make sure output inventory or auto-eject path is not full", "Force-load the chunk"]}, {"keys": ["ae2", "offline", "terminal", "network"], "title": "AE2 network offline", "steps": ["Check Energy Acceptor/Controller power", "Check channels and dense cable connections", "Inspect subnet isolation", "Check Security Terminal permissions", "Verify Quantum Bridge power and singularity", "Check energy cells for reserve power"]}, {"keys": ["fission", "reactor", "overheating", "coolant"], "title": "Fission Reactor overheating", "steps": ["SCRAM immediately", "Confirm coolant input rate exceeds heating rate", "Check turbine steam tank and energy buffer", "Add/verify Saturating Condensers and water return", "Ensure waste output is not full", "Restart at 0.1 mB/t and increase slowly"]}, {"keys": ["bee", "bees", "not producing", "abelha"], "title": "Productive Bee not producing", "steps": ["Check flower/block requirement", "Check hive and expansion box", "Check Simulation Upgrade and Feeding Slab placement", "Check day/night, weather, and genes", "Check comb output inventory", "Force-load the hive chunk"]}, {"keys": ["create", "overstressed", "stress"], "title": "Create network overstressed", "steps": ["Read Stressometer", "Reduce RPM or disconnect machines", "Add water wheels, windmill sails, or Steam Engines", "Split factories with Clutches", "Check rotation direction and gear ratios", "Restart sections one at a time"]}, {"keys": ["sps", "antimatter", "not producing"], "title": "SPS not producing Antimatter", "steps": ["Confirm Polonium input", "Confirm SPS Ports and Supercharged Coils", "Verify energy input; default maximum needs up to 800 MFE/t", "Check Antimatter output storage", "Ensure Chemical Crystallizer has power and output room", "Force-load all linked chunks"]}, {"keys": ["powah", "energizing", "orb", "stuck"], "title": "Energizing Orb craft stuck", "steps": ["Check recipe in JEI for current pack version", "Confirm all input items are present", "Check Energizing Rod line of sight and power", "Verify output extraction is not pulling ingredients early", "Use a buffer and blocking mode with AE2", "Check tier and FE requirement"]}, {"keys": ["atm star", "runic", "altar", "invalid"], "title": "Runic Star Altar invalid", "steps": ["Open the current JEI multiblock preview", "Check every layer and orientation", "Verify bus/hatch blocks match current recipe", "Remove temporary cables touching forbidden positions", "Check pack version and known recipe issues", "Test the structure in a copy/backup"]}];
const RESOURCE_DATA=[{"pt": "Iron", "en": "Iron", "priority": "critical", "stock": "50,000+", "method": "Mystical Agriculture / Bees / Quarry", "chapter": 21}, {"pt": "Redstone", "en": "Redstone", "priority": "critical", "stock": "25,000+", "method": "Mystical Agriculture / Bees", "chapter": 21}, {"pt": "Osmium", "en": "Osmium", "priority": "critical", "stock": "10,000+", "method": "Mining Dimension / Bees / Seeds", "chapter": 13}, {"pt": "Uranium", "en": "Uranium", "priority": "critical", "stock": "25,000+", "method": "Mystical Agriculture / Bees", "chapter": 37}, {"pt": "Fluorite", "en": "Fluorite", "priority": "critical", "stock": "25,000+", "method": "Mystical Agriculture / Bees", "chapter": 37}, {"pt": "Nether Stars", "en": "Nether Stars", "priority": "high", "stock": "10,000+", "method": "HNN Wither Model", "chapter": 48}, {"pt": "Plastic", "en": "Plastic", "priority": "high", "stock": "10,000+", "method": "Industrial Foregoing latex line", "chapter": 47}, {"pt": "Prediction Matrices", "en": "Prediction Matrices", "priority": "high", "stock": "10,000+", "method": "AE2 autocrafting", "chapter": 48}, {"pt": "Gaia Spirits", "en": "Gaia Spirits", "priority": "high", "stock": "1,000+", "method": "Gaia II / compatible passive farm", "chapter": 43}, {"pt": "Allthemodium", "en": "Allthemodium", "priority": "high", "stock": "5,000+ ingots", "method": "Bees / Mystical Agriculture", "chapter": 20}, {"pt": "Vibranium", "en": "Vibranium", "priority": "high", "stock": "5,000+ ingots", "method": "Bees / Mystical Agriculture", "chapter": 20}, {"pt": "Unobtainium", "en": "Unobtainium", "priority": "high", "stock": "5,000+ ingots", "method": "Bees / Mystical Agriculture", "chapter": 20}, {"pt": "Precision Mechanisms", "en": "Precision Mechanisms", "priority": "medium", "stock": "512–1,000", "method": "Create Sequenced Assembly", "chapter": 49}, {"pt": "Nitro Crystals", "en": "Nitro Crystals", "priority": "medium", "stock": "512–2,000", "method": "Powah Energizing Orb", "chapter": 42}];

let currentItemId=null;
const TRACK_KEY='atm10-v14-trackers';
let trackers=JSON.parse(localStorage.getItem(TRACK_KEY)||'{"bosses":{},"dimensions":{}}');
function saveTrackers(){localStorage.setItem(TRACK_KEY,JSON.stringify(trackers));}
function L(o){return currentLang==='en'?(o.en||o.pt):(o.pt||o.en);}
function renderLayout(layout){
 if(!layout||!layout.cells||!layout.cells.length)return '<p class="muted">Use the in-game preview for this tier.</p>';
 return `<div class="layout-grid" style="grid-template-columns:repeat(${layout.w},30px)">${layout.cells.map((x,i)=>`<div class="layout-cell ${x}">${x==='frame'?'F':x==='glass'?'G':x==='core'?'C':x==='port'?'P':''}</div>`).join('')}</div>`;
}
function openItem(id){currentItemId=id;tab='items';sync();render();setTimeout(()=>translateStatic(document),0);}
function saveItemNote(id){saveNote('item',id,document.getElementById('itemNote').value);document.getElementById('itemNoteStatus').textContent=tr('Nota salva localmente.','Note saved locally.');}
function calcAntimatter(){
 const pellets=+document.getElementById('antiPellets').value||0;
 const mbPellet=+document.getElementById('antiMbPellet').value||1000;
 const polPerAnti=+document.getElementById('antiPolRatio').value||1000;
 const rate=+document.getElementById('antiRate').value||2;
 const energyPerMb=+document.getElementById('antiEnergy').value||400000000;
 const anti=pellets*mbPellet,pol=anti*polPerAnti,ticks=anti/rate,seconds=ticks/20,energy=anti*energyPerMb;
 document.getElementById('antiResult').textContent=`Antimatter: ${anti.toLocaleString()} mB\nPolonium: ${pol.toLocaleString()} mB\nTime at ${rate} mB/t: ${(seconds/3600).toFixed(2)} h\nEnergy estimate: ${energy.toExponential(3)} FE`;
}
function calcCompressed(){
 const qty=+document.getElementById('compQty').value||0,level=+document.getElementById('compLevel').value||0;
 const blocks=qty*Math.pow(9,level);
 document.getElementById('compResult').textContent=`Base blocks/items required: ${blocks.toLocaleString()}\nFormula: ${qty} × 9^${level}`;
}
function calcPowah(){
 const devices=+document.getElementById('powDevices').value||0,per=+document.getElementById('powPer').value||0;
 const tier=document.getElementById('powTier').value;
 document.getElementById('powResult').textContent=`${tier}: ${devices*per} tier crystals/components for ${devices} device(s).\nUse JEI to fill the exact per-device amount for your version.`;
}
function calcMana(){
 const crafts=+document.getElementById('manaCrafts').value||0,cost=+document.getElementById('manaCost').value||0;
 document.getElementById('manaResult').textContent=`Total Mana: ${(crafts*cost).toLocaleString()} units\nRecommended reserve (+20%): ${(crafts*cost*1.2).toLocaleString()}`;
}
function calcLP(){
 const count=+document.getElementById('lpCount').value||0;
 const type=document.getElementById('lpType').value;
 const costs={blank:1000,reinforced:3000,imbued:8000,demonic:23000,ethereal:53000};
 const total=count*costs[type];
 document.getElementById('lpResult').textContent=`Estimated cumulative LP: ${total.toLocaleString()}\nValues are editable by changing pack configs; verify in JEI/altar tooltip.`;
}
function calcStar(){
 const stars=+document.getElementById('starCount').value||0;
 const lines=document.getElementById('starMaterials').value.split('\n').filter(Boolean);
 const out=lines.map(line=>{const m=line.match(/^(.+?):\s*([\d.]+)/);return m?`${m[1]}: ${(Number(m[2])*stars).toLocaleString()}`:line;});
 document.getElementById('starResult').textContent=`For ${stars} ATM Star(s):\n`+out.join('\n');
}
function calcEnergy(){
 const generators=+document.getElementById('energyGenerators').value||0,per=+document.getElementById('energyPerGenerator').value||0,consumption=+document.getElementById('energyConsumption').value||0,margin=(+document.getElementById('energyMargin').value||0)/100;
 const production=generators*per,reserve=production-consumption,required=consumption*(1+margin);
 document.getElementById('energyResult').textContent=`Production: ${production.toLocaleString()} FE/t\nConsumption: ${consumption.toLocaleString()} FE/t\nNet reserve: ${reserve.toLocaleString()} FE/t\nTarget with safety margin: ${required.toLocaleString()} FE/t\nStatus: ${production>=required?'SAFE':'INCREASE GENERATION'}`;
}
function calcMatrix(){
 const cells=+document.getElementById('matrixCells').value||0,cellCapacity=+document.getElementById('matrixCellCapacity').value||0,providers=+document.getElementById('matrixProviders').value||0,providerRate=+document.getElementById('matrixProviderRate').value||0;
 document.getElementById('matrixResult').textContent=`Capacity: ${(cells*cellCapacity).toLocaleString()} FE\nTransfer limit: ${(providers*providerRate).toLocaleString()} FE/t\nValues are configurable so they can match your installed Mekanism tier.`;
}
function calcReactor(){
 const burn=+document.getElementById('reactorBurn').value||0,energy=+document.getElementById('reactorEnergy').value||0,coolant=+document.getElementById('reactorCoolant').value||0,fuel=+document.getElementById('reactorFuel').value||0;
 const runtime=burn?fuel/burn/20:0;
 document.getElementById('reactorResult').textContent=`Estimated output: ${(burn*energy).toLocaleString()} FE/t\nMinimum configured coolant: ${(burn*coolant).toLocaleString()} mB/t\nFuel runtime: ${(runtime/60).toFixed(1)} min\nStart below the calculated limit and validate temperature, coolant, steam and waste buffers in game.`;
}
function calcStock(){
 const target=+document.getElementById('stockTarget').value||0,currentStock=+document.getElementById('stockCurrent').value||0,margin=(+document.getElementById('stockMargin').value||0)/100,batch=Math.max(1,+document.getElementById('stockBatch').value||1);
 const safe=Math.ceil(target*(1+margin)),missing=Math.max(0,safe-currentStock),crafts=Math.ceil(missing/batch);
 document.getElementById('stockResult').textContent=`Safe target: ${safe.toLocaleString()}\nMissing: ${missing.toLocaleString()}\nCrafts/batches required: ${crafts.toLocaleString()}`;
}
function nextRecommendation(){
 const milestones=[
  {chapter:1,why:'Secure food, bed, shield, backpack, and a temporary base.'},
  {chapter:4,why:'Build basic power and Mekanism machines.'},
  {chapter:11,why:'Create digital storage and autocrafting.'},
  {chapter:7,why:'Unlock the Mining Dimension.'},
  {chapter:20,why:'Make ATM metals renewable with bees.'},
  {chapter:21,why:'Automate essential resources with Mystical Agriculture.'},
  {chapter:37,why:'Start safe nuclear production and Polonium.'},
  {chapter:38,why:'Build Fusion, SPS, and Antimatter.'},
  {chapter:55,why:'Prepare and craft the ATM Star.'},
  {chapter:56,why:'Choose Creative Items and automate Starry Bee.'}
 ];
 return milestones.find(m=>!tasks(chapters.find(c=>c.id===m.chapter)).every((_,i)=>state[k(m.chapter,i)]))||{chapter:58,why:'Build the final mega-base and optimize your world.'};
}
function equipmentScore(){
 const base=+document.getElementById('eqBase').value;
 const aff=[...document.querySelectorAll('.eq-aff:checked')].reduce((s,x)=>s+Number(x.value),0);
 const gems=+document.getElementById('eqGems').value*8;
 const ench=+document.getElementById('eqEnchants').value*4;
 const score=base+aff+gems+ench;
 document.getElementById('eqScore').textContent=score;
 document.getElementById('eqAdvice').textContent=score<60?'Midgame: prioritize survivability and Life Steal.':score<110?'Late game: add Current HP Damage, Armor Piercing, and Perfect Gems.':'Endgame-ready build. Keep a backup set and test against bosses.';
}
function planBase(){
 const w=+document.getElementById('baseW').value||0,l=+document.getElementById('baseL').value||0,m=+document.getElementById('moduleSize').value||16,t=+document.getElementById('tunnelSize').value||5;
 const cols=Math.floor(w/(m+t)),rows=Math.floor(l/(m+t));
 let cells='';for(let r=0;r<Math.min(rows,8);r++)for(let c=0;c<Math.min(cols,8);c++)cells+=`<div class="chunk">${r+1},${c+1}<br>${m}×${m}</div>`;
 document.getElementById('baseResult').innerHTML=`Modules: ${cols} × ${rows} = ${cols*rows}<br>Suggested technical tunnel: ${t} blocks<br>Approx. chunks: ${Math.ceil(w/16)} × ${Math.ceil(l/16)}<div class="chunk-map" style="grid-template-columns:repeat(${Math.min(cols,8)},64px)">${cells}</div>`;
}
function runTrouble(){
 const q=document.getElementById('troubleQuery').value.toLowerCase();
 const matches=TROUBLE_DATA.filter(x=>x.keys.some(k=>q.includes(k)||k.includes(q)));
 document.getElementById('troubleResults').innerHTML=(matches.length?matches:TROUBLE_DATA.slice(0,3)).map(x=>`<div class="trouble-result"><h3>${x.title}</h3><ol>${x.steps.map(s=>`<li>${s}</li>`).join('')}</ol></div>`).join('');
}


let activeMultiblockId='fission',viewerLayer=-1,viewerRotation=0,viewerZoom=1,viewerMode='solid',viewerExplode=0,viewerTimer=null;
function cubeFaces(){return '<span class="face front"></span><span class="face back"></span><span class="face right"></span><span class="face left"></span><span class="face top"></span><span class="face bottom"></span>';}
function makeGrid(x,y,z,fn){const a=[];for(let yy=0;yy<y;yy++){const layer=[];for(let zz=0;zz<z;zz++){const row=[];for(let xx=0;xx<x;xx++)row.push(fn(xx,yy,zz));layer.push(row)}a.push(layer)}return {x,y,z,layers:a};}
function generateModel(id){
 if(id==='fission')return makeGrid(5,6,5,(x,y,z)=>{const edge=[x===0,x===4,y===0,y===5,z===0,z===4].filter(Boolean).length;if(edge>=2)return 'frame';if(y===5&&((x===1&&z===1)||(x===3&&z===1)||(x===2&&z===3)))return 'port';if(x>0&&x<4&&z>0&&z<4&&y>0&&y<5&&((x+z)%2===0))return 'core';if(edge===1)return 'glass';return 'air'});
 if(id==='turbine')return makeGrid(5,7,5,(x,y,z)=>{const edge=[x===0,x===4,y===0,y===6,z===0,z===4].filter(Boolean).length;if(edge>=2)return 'frame';if(x===2&&z===2&&y>0&&y<5)return y===4?'coil':'rotor';if(y===4&&x>0&&x<4&&z>0&&z<4)return 'core';if(edge===1)return 'glass';return 'air'});
 if(id==='sps')return makeGrid(7,7,7,(x,y,z)=>{const cut=(x<2||x>4)&&(y<2||y>4)&&(z<2||z>4);if(cut)return 'air';const surfaces=[x===0,x===6,y===0,y===6,z===0,z===6].filter(Boolean).length;if(surfaces>=2)return 'frame';if((x===0&&y===3&&z===3)||(x===6&&y===3&&z===3)||(z===0&&y===3&&x===3))return 'port';if((x===1&&y===3&&z===3)||(x===5&&y===3&&z===3))return 'coil';if(surfaces===1)return 'glass';return 'air'});
 if(id==='matrix')return makeGrid(5,5,5,(x,y,z)=>{const edge=[x===0,x===4,y===0,y===4,z===0,z===4].filter(Boolean).length;if(edge>=2)return 'frame';if((x===0&&y===2&&z===2)||(x===4&&y===2&&z===2))return 'port';if(x>0&&x<4&&y>0&&y<4&&z>0&&z<4)return (x+y+z)%3===0?'core':'air';if(edge===1)return 'glass';return 'air'});
 if(id==='boiler')return makeGrid(3,5,3,(x,y,z)=>y===0?'burner':'tank');
 if(id==='blood-altar')return makeGrid(9,5,9,(x,y,z)=>{const cx=4,cz=4,dx=Math.abs(x-cx),dz=Math.abs(z-cz);if(y===4&&dx===0&&dz===0)return 'altar';if(y===3&&Math.max(dx,dz)===1)return 'rune';if(y===2&&Math.max(dx,dz)===2)return 'rune';if(y===1&&Math.max(dx,dz)===3)return (dx===3&&dz===3)?'core':'rune';if(y===0&&Math.max(dx,dz)===4)return (dx===4&&dz===4)?'core':'rune';return 'air'});
 if(id==='runic-star')return makeGrid(7,7,7,(x,y,z)=>{const dx=Math.abs(x-3),dy=Math.abs(y-3),dz=Math.abs(z-3);if(dx===3&&dy===3&&dz===3)return 'air';if(dx===3||dy===3||dz===3){if((x===0||x===6)&&y===3&&z===3)return 'port';return (dx+dy+dz>6)?'frame':'glass'}if(dx===0&&dy===0&&dz===0)return 'altar';if((dx+dy+dz)%4===0)return 'rune';return 'air'});
 return makeGrid(3,3,3,(x,y,z)=>x===0||x===2||y===0||y===2||z===0||z===2?'frame':'air');
}
function blockName(t){return ({frame:'Casing/Frame',glass:'Glass',core:'Internal core',port:'Port/Hatch',coil:'Coil',rotor:'Rotor',rune:'Rune',altar:'Altar/Controller',tank:'Fluid Tank',burner:'Blaze Burner'})[t]||t;}
function blockColor(t){return ({frame:'#516273',glass:'#50bedc',core:'#a34252',port:'#a88a37',coil:'#6ce7cf',rotor:'#b7c0c8',rune:'#8c4fd1',altar:'#7a1f2c',tank:'#7b5d38',burner:'#e86f2d'})[t]||'#777';}
function render3DViewer(){
 const host=document.getElementById('multiblockViewer');if(!host)return;const m=MULTIBLOCKS.find(x=>x.id===activeMultiblockId);const model=generateModel(m.id);const cell=32,counts={};let cubes='';
 model.layers.forEach((layer,y)=>layer.forEach((row,z)=>row.forEach((type,x)=>{if(type==='air')return;counts[type]=(counts[type]||0)+1;const visible=viewerLayer<0||viewerLayer===y;const opacity=viewerMode==='transparent'?.35:1;const extraY=(viewerMode==='exploded'?y*viewerExplode:0);cubes+=`<div class="voxel ${type}" title="${blockName(type)} — x${x+1}, y${y+1}, z${z+1}" style="opacity:${visible?opacity:0.06};pointer-events:${visible?'auto':'none'};transform:translate3d(${(x-(model.x-1)/2)*cell}px,${(-(y-(model.y-1)/2)*cell)-extraY}px,${(z-(model.z-1)/2)*cell}px)">${cubeFaces()}</div>`})));
 const worldTransform=`translate(-50%,-50%) rotateX(-24deg) rotateY(${viewerRotation}deg) scale(${viewerZoom})`;
 const statusText=m.status==='exact'?tr('Layout de referência confirmado; valide portas e receita na versão instalada.','Confirmed reference layout; validate ports and recipe in the installed version.'):m.status==='recommended'?tr('Layout recomendado e escalável, não uma única estrutura obrigatória.','Recommended scalable layout, not a single mandatory structure.'):tr('Estrutura dependente da versão: o preview do JEI é a fonte final.','Version-dependent structure: the JEI preview is authoritative.');
 host.innerHTML=`<div class="viewer-shell"><div class="viewer-stage"><div class="layer-badge">${L(m)} • ${viewerLayer<0?tr('Todas as camadas','All layers'):`${tr('Camada','Layer')} ${viewerLayer+1}/${model.y}`}</div><div class="voxel-world" style="transform:${worldTransform}">${cubes}</div><div class="viewer-help">${tr('Use rotação, zoom e camada para inspecionar cada bloco.','Use rotation, zoom, and layer controls to inspect every block.')}</div></div><aside class="viewer-controls"><div class="control-group"><label>${tr('Multibloco','Multiblock')}</label><select id="viewerSelect">${MULTIBLOCKS.map(x=>`<option value="${x.id}" ${x.id===m.id?'selected':''}>${L(x)}</option>`).join('')}</select></div><div class="control-group"><label>${tr('Camada','Layer')}: <span id="layerLabel">${viewerLayer<0?tr('Todas','All'):viewerLayer+1}</span></label><input id="layerRange" type="range" min="-1" max="${model.y-1}" value="${viewerLayer}"><div class="viewer-buttons"><button id="prevLayer">−</button><button id="playLayers">▶</button><button id="nextLayer">+</button></div></div><div class="control-group"><label>${tr('Visualização','View')}</label><select id="viewerMode"><option value="solid" ${viewerMode==='solid'?'selected':''}>${tr('Sólida','Solid')}</option><option value="transparent" ${viewerMode==='transparent'?'selected':''}>${tr('Transparente','Transparent')}</option><option value="exploded" ${viewerMode==='exploded'?'selected':''}>${tr('Explodida','Exploded')}</option></select>${viewerMode==='exploded'?`<label>${tr('Separação','Separation')}</label><input id="explodeRange" type="range" min="0" max="24" value="${viewerExplode}">`:''}</div><div class="control-group"><label>${tr('Rotação e zoom','Rotation and zoom')}</label><div class="viewer-buttons"><button id="rotLeft">↺</button><button id="rotRight">↻</button><button id="zoomOut">−</button><button id="zoomIn">+</button><button id="resetView">Reset</button></div></div><div class="control-group"><label>${tr('Legenda e contagem','Legend and count')}</label><div class="legend-grid">${Object.entries(counts).map(([t,n])=>`<div class="legend-item"><span class="legend-swatch" style="background:${blockColor(t)}"></span><span>${blockName(t)}: ${n}</span></div>`).join('')}</div><button class="action" id="exportMbMaterials">${tr('Exportar materiais','Export materials')}</button></div><div class="control-group"><span class="pill">${m.status}</span><p>${statusText}</p><p><b>${L(m.size)}</b></p><button class="action" id="openMbChapter">${tr('Abrir capítulo','Open chapter')} ${m.chapter}</button><div class="source-note">${m.source}</div></div></aside></div>`;
 document.getElementById('viewerSelect').addEventListener('change',e=>{activeMultiblockId=e.target.value;viewerLayer=-1;viewerRotation=0;viewerZoom=1;viewerMode='solid';render3DViewer()});
 document.getElementById('layerRange').addEventListener('input',e=>{viewerLayer=+e.target.value;render3DViewer()});
 document.getElementById('prevLayer').addEventListener('click',()=>{viewerLayer=Math.max(-1,viewerLayer-1);render3DViewer()});
 document.getElementById('nextLayer').addEventListener('click',()=>{viewerLayer=Math.min(model.y-1,viewerLayer+1);render3DViewer()});
 document.getElementById('playLayers').addEventListener('click',()=>{if(viewerTimer){clearInterval(viewerTimer);viewerTimer=null;return}viewerLayer=-1;viewerTimer=setInterval(()=>{viewerLayer++;if(viewerLayer>=model.y){clearInterval(viewerTimer);viewerTimer=null;viewerLayer=-1}render3DViewer()},700)});
 document.getElementById('viewerMode').addEventListener('change',e=>{viewerMode=e.target.value;if(viewerMode==='exploded'&&!viewerExplode)viewerExplode=8;render3DViewer()});
 document.getElementById('explodeRange')?.addEventListener('input',e=>{viewerExplode=+e.target.value;render3DViewer()});
 document.getElementById('rotLeft').addEventListener('click',()=>{viewerRotation-=45;render3DViewer()});document.getElementById('rotRight').addEventListener('click',()=>{viewerRotation+=45;render3DViewer()});
 document.getElementById('zoomOut').addEventListener('click',()=>{viewerZoom=Math.max(.45,viewerZoom-.1);render3DViewer()});document.getElementById('zoomIn').addEventListener('click',()=>{viewerZoom=Math.min(1.8,viewerZoom+.1);render3DViewer()});
 document.getElementById('resetView').addEventListener('click',()=>{viewerRotation=0;viewerZoom=1;viewerLayer=-1;viewerMode='solid';viewerExplode=0;render3DViewer()});
 document.getElementById('openMbChapter').addEventListener('click',()=>openChapter(m.chapter));
 document.getElementById('exportMbMaterials').addEventListener('click',()=>downloadJSON(`atm10-${m.id}-materials.json`,{multiblock:L(m),status:m.status,size:L(m.size),model:{x:model.x,y:model.y,z:model.z},materials:Object.fromEntries(Object.entries(counts).map(([type,count])=>[blockName(type),count])),source:m.source}));
}


const WORLD3D_DATA={"overworld": {"pt": "Overworld", "en": "Overworld", "tiles": [["plains", "Planícies", 0, 0, ["Village", "Waystone"], ["Iron", "Copper"]], ["forest", "Floresta", 1, 0, ["Mansion", "Bee Nest"], ["Wood", "Bees"]], ["mountain", "Montanhas", 2, 0, ["Ancient City nearby"], ["Coal", "Iron"]], ["desert", "Deserto", 3, 0, ["Temple", "Ancient Remnant"], ["Gold"]], ["swamp", "Pântano", 4, 0, ["Hut"], ["Slime"]], ["deep", "Deep Dark", 0, 1, ["Ancient City", "Warden"], ["Allthemodium"]], ["plains", "Planícies", 1, 1, ["Village"], ["Food"]], ["forest", "Dark Forest", 2, 1, ["Mansion"], ["Loot"]], ["mountain", "Stony Peaks", 3, 1, ["Caves"], ["Ores"]], ["desert", "Badlands", 4, 1, ["Mineshaft"], ["Gold"]], ["swamp", "Mangrove", 0, 2, ["Ruins"], ["Clay"]], ["forest", "Taiga", 1, 2, ["Village"], ["Spruce"]], ["plains", "Meadow", 2, 2, ["Waystone"], ["Flowers"]], ["mountain", "Frozen Peaks", 3, 2, ["Caves"], ["Ores"]], ["snow", "Snowy Plains", 4, 2, ["Igloo"], ["Ice"]], ["forest", "Jungle", 0, 3, ["Temple"], ["Cocoa"]], ["plains", "Savanna", 1, 3, ["Village"], ["Acacia"]], ["mountain", "Windswept Hills", 2, 3, ["Caves"], ["Emerald"]], ["swamp", "Riverlands", 3, 3, ["Ruins"], ["Clay"]], ["desert", "Beach", 4, 3, ["Shipwreck"], ["Loot"]]], "markers": [{"type": "ore", "icon": "⛏", "name": "Allthemodium", "x": 35, "y": 48, "detail": "Deep Dark / Ancient City region; exact location depends on seed."}, {"type": "structure", "icon": "🏛", "name": "Village", "x": 22, "y": 24, "detail": "Common Overworld structure; use Explorer's Compass when supported."}, {"type": "boss", "icon": "☠", "name": "Ancient Remnant", "x": 70, "y": 30, "detail": "Cataclysm desert boss structure."}, {"type": "biome", "icon": "🌲", "name": "Dark Forest", "x": 52, "y": 46, "detail": "Useful for mansions and specific mobs."}]}, "nether": {"pt": "Nether", "en": "Nether", "tiles": [["nether", "Nether Wastes", 0, 0, ["Fortress"], ["Quartz", "Gold"]], ["nether", "Crimson Forest", 1, 0, ["Bastion"], ["Piglins"]], ["nether", "Warped Forest", 2, 0, ["Endermen"], ["Warped Wood"]], ["nether", "Basalt Deltas", 3, 0, ["Ruins"], ["Basalt"]], ["nether", "Soul Sand Valley", 4, 0, ["Soul Blacksmith"], ["Soul Sand"]], ["nether", "Nether Wastes", 0, 1, ["Fortress"], ["Quartz"]], ["nether", "Crimson Forest", 1, 1, ["Bastion"], ["Ancient Debris"]], ["nether", "Warped Forest", 2, 1, ["Teleport Pad → The Other"], ["Vibranium access"]], ["nether", "Basalt Deltas", 3, 1, ["Monstrosity area"], ["Blackstone"]], ["nether", "Soul Sand Valley", 4, 1, ["Fossils"], ["Soul Soil"]], ["nether", "Crimson Forest", 0, 2, ["Bastion"], ["Loot"]], ["nether", "Nether Wastes", 1, 2, ["Fortress"], ["Blaze"]], ["nether", "Warped Forest", 2, 2, ["Endermen"], ["Pearls"]], ["nether", "Basalt Deltas", 3, 2, ["Lava Seas"], ["Magma"]], ["nether", "Soul Sand Valley", 4, 2, ["Ignis structure"], ["Boss loot"]], ["nether", "Nether Wastes", 0, 3, ["Fortress"], ["Wither Skeleton"]], ["nether", "Crimson Forest", 1, 3, ["Bastion"], ["Piglin loot"]], ["nether", "Warped Forest", 2, 3, ["Portal route"], ["Ender pearls"]], ["nether", "Basalt Deltas", 3, 3, ["Lava"], ["Basalt"]], ["nether", "Soul Sand Valley", 4, 3, ["Soul Blacksmith"], ["Cataclysm drops"]]], "markers": [{"type": "ore", "icon": "⛏", "name": "Vibranium", "x": 47, "y": 40, "detail": "Found in Nether/The Other progression depending pack rules."}, {"type": "structure", "icon": "🏰", "name": "Soul Blacksmith", "x": 70, "y": 30, "detail": "Contains Netherite Monstrosity encounter."}, {"type": "boss", "icon": "🔥", "name": "Ignis", "x": 82, "y": 65, "detail": "Extreme Cataclysm boss in a Nether structure."}, {"type": "portal", "icon": "🌀", "name": "Teleport Pad to The Other", "x": 48, "y": 60, "detail": "Place Teleport Pad in the Nether."}]}, "end": {"pt": "The End", "en": "The End", "tiles": [["end", "Main Island", 0, 0, ["Dragon Arena"], ["Dragon Breath"]], ["end", "Small Islands", 1, 0, ["Gateways"], ["End Stone"]], ["end", "End Highlands", 2, 0, ["End City"], ["Unobtainium"]], ["end", "End Midlands", 3, 0, ["Ruins"], ["Chorus"]], ["void", "Void", 4, 0, [], []], ["end", "Main Island", 0, 1, ["Obsidian Pillars"], ["Dragon Egg"]], ["void", "Void", 1, 1, [], []], ["end", "End Highlands", 2, 1, ["Ruined Citadel"], ["Unobtainium"]], ["end", "End Barrens", 3, 1, ["Gateway"], ["End Stone"]], ["void", "Void", 4, 1, [], []], ["end", "Outer Islands", 0, 2, ["End City"], ["Shulker"]], ["end", "End Midlands", 1, 2, ["Chorus Forest"], ["Chorus Fruit"]], ["end", "End Highlands", 2, 2, ["End City"], ["Unobtainium"]], ["end", "End Barrens", 3, 2, ["Ruins"], ["End loot"]], ["void", "Void", 4, 2, [], []], ["end", "Outer Islands", 0, 3, ["End Ship"], ["Elytra"]], ["end", "End Midlands", 1, 3, ["Chorus"], ["Purpur"]], ["end", "End Highlands", 2, 3, ["Citadel"], ["Boss materials"]], ["end", "End Barrens", 3, 3, ["Gateway"], ["End Stone"]], ["void", "Void", 4, 3, [], []]], "markers": [{"type": "ore", "icon": "⛏", "name": "Unobtainium", "x": 50, "y": 42, "detail": "End Highlands; exact vein locations depend on seed."}, {"type": "boss", "icon": "🐉", "name": "Ender Dragon", "x": 18, "y": 30, "detail": "Main island boss; unlocks outer End progression."}, {"type": "structure", "icon": "🏯", "name": "Ruined Citadel", "x": 62, "y": 45, "detail": "Ender Guardian structure."}, {"type": "portal", "icon": "🌀", "name": "Teleport Pad to The Beyond", "x": 52, "y": 70, "detail": "Place Teleport Pad in The End."}]}, "twilight": {"pt": "Twilight Forest", "en": "Twilight Forest", "tiles": [["forest", "Twilight Forest", 0, 0, ["Naga Courtyard"], ["Ironwood"]], ["forest", "Dense Forest", 1, 0, ["Lich Tower"], ["Steeleaf"]], ["swamp", "Swamp", 2, 0, ["Labyrinth"], ["Maze loot"]], ["nether", "Fire Swamp", 3, 0, ["Hydra Lair"], ["Fiery Blood"]], ["mountain", "Dark Forest", 4, 0, ["Knight Stronghold"], ["Knightmetal"]], ["forest", "Twilight Forest", 0, 1, ["Hedge Maze"], ["Loot"]], ["forest", "Dense Forest", 1, 1, ["Lich Tower"], ["Books"]], ["swamp", "Swamp", 2, 1, ["Minoshroom"], ["Meef"]], ["nether", "Fire Swamp", 3, 1, ["Hydra"], ["Hydra drops"]], ["mountain", "Dark Forest", 4, 1, ["Dark Tower"], ["Carminite"]], ["snow", "Snowy Forest", 0, 2, ["Yeti Lair"], ["Alpha Yeti Fur"]], ["snow", "Glacier", 1, 2, ["Aurora Palace"], ["Snow Queen drops"]], ["forest", "Enchanted Forest", 2, 2, ["Quest Grove"], ["Magic loot"]], ["mountain", "Highlands", 3, 2, ["Final Castle"], ["Late progression"]], ["forest", "Mushroom Forest", 4, 2, ["Mushrooms"], ["Food"]], ["snow", "Snowy Forest", 0, 3, ["Yeti Lair"], ["Fur"]], ["snow", "Glacier", 1, 3, ["Snow Queen"], ["Ice loot"]], ["forest", "Enchanted Forest", 2, 3, ["Structures"], ["Magic"]], ["mountain", "Highlands", 3, 3, ["Castle"], ["Trophies"]], ["forest", "Mushroom Forest", 4, 3, ["Hollow Hills"], ["Ore loot"]]], "markers": [{"type": "boss", "icon": "🐍", "name": "Naga", "x": 16, "y": 26, "detail": "First main progression boss."}, {"type": "boss", "icon": "👑", "name": "Twilight Lich", "x": 34, "y": 28, "detail": "Second progression boss."}, {"type": "boss", "icon": "🐲", "name": "Hydra", "x": 68, "y": 45, "detail": "Fire Swamp boss."}, {"type": "boss", "icon": "❄", "name": "Snow Queen", "x": 30, "y": 70, "detail": "Aurora Palace boss."}]}, "bumblezone": {"pt": "The Bumblezone", "en": "The Bumblezone", "tiles": [["honey", "Honey Caverns", 0, 0, ["Honeycomb caves"], ["Honey"]], ["honey", "Pollinated Fields", 1, 0, ["Bee structures"], ["Pollen"]], ["honey", "Crystal Zone", 2, 0, ["Crystalline Flower"], ["Crystals"]], ["honey", "Royal Sector", 3, 0, ["Bee dungeon"], ["Royal Jelly"]], ["honey", "Wax Caves", 4, 0, ["Wax ruins"], ["Wax"]], ["honey", "Honey Caverns", 0, 1, ["Bee nest"], ["Honey"]], ["honey", "Pollinated Fields", 1, 1, ["Special bees"], ["Genes"]], ["honey", "Crystal Zone", 2, 1, ["Flower"], ["Enchanting items"]], ["honey", "Royal Sector", 3, 1, ["Dungeon"], ["Loot"]], ["honey", "Wax Caves", 4, 1, ["Ruins"], ["Wax"]], ["honey", "Honey Caverns", 0, 2, ["Nest"], ["Bottles"]], ["honey", "Pollinated Fields", 1, 2, ["Bee mobs"], ["Pollen"]], ["honey", "Crystal Zone", 2, 2, ["Crystal"], ["Rare loot"]], ["honey", "Royal Sector", 3, 2, ["Boss-like events"], ["Royal items"]], ["honey", "Wax Caves", 4, 2, ["Structures"], ["Wax"]], ["honey", "Honey Caverns", 0, 3, ["Nest"], ["Honey"]], ["honey", "Pollinated Fields", 1, 3, ["Flowers"], ["Bee products"]], ["honey", "Crystal Zone", 2, 3, ["Crystal"], ["Special items"]], ["honey", "Royal Sector", 3, 3, ["Dungeon"], ["Loot"]], ["honey", "Wax Caves", 4, 3, ["Ruins"], ["Wax"]]], "markers": [{"type": "structure", "icon": "🐝", "name": "Bee Dungeon", "x": 68, "y": 35, "detail": "Special Bumblezone structure."}, {"type": "biome", "icon": "🌼", "name": "Crystalline Flower", "x": 50, "y": 52, "detail": "Rare progression/enchanting-related feature."}, {"type": "resource", "icon": "🍯", "name": "Honey resources", "x": 20, "y": 55, "detail": "Honey, pollen, wax and bee materials."}]}};

Object.assign(WORLD3D_DATA,window.ATM10_COMPANION_DATA?.worlds||{});
const WORLD_MARKER_KEY='atm10-v16-world-markers';
let worldCustomMarkers=JSON.parse(localStorage.getItem(WORLD_MARKER_KEY)||'[]');
let worldState={dimension:'overworld',rotation:0,zoom:1,show:{ore:true,structure:true,boss:true,biome:true,portal:true,resource:true},layer:'surface'};
function saveWorldMarkers(){localStorage.setItem(WORLD_MARKER_KEY,JSON.stringify(worldCustomMarkers));}
function renderWorld3D(){
 const data=WORLD3D_DATA[worldState.dimension];
 const scene=document.getElementById('worldScene');
 if(!scene)return;
 scene.style.transform=`translate(-50%,-50%) rotateX(58deg) rotateZ(${worldState.rotation}deg) scale(${worldState.zoom})`;
 let tiles='';
 data.tiles.forEach(t=>{
   const [kind,name,x,y,structures,resources]=t;
   const px=x*72,py=y*72;
   tiles+=`<div class="world-tile tile-${kind}" style="left:${px}px;top:${py}px" data-name="${name}" data-detail="${[...(structures||[]),...(resources||[])].join(' • ')}">${name}</div>`;
 });
 let markers='';
 [...data.markers,...worldCustomMarkers.filter(m=>m.dimension===worldState.dimension)].forEach((m,i)=>{
   if(!worldState.show[m.type])return;
   markers+=`<button class="world-marker" style="left:${m.x}%;top:${m.y}%" data-name="${m.name}" data-detail="${m.detail||''}" aria-label="${m.name}">${m.icon||'📍'}</button>`;
 });
 scene.innerHTML=`<div class="world-layer" style="--z:0px">${tiles}${markers}</div>`;
 scene.querySelectorAll('[data-name]').forEach(el=>el.addEventListener('click',()=>{
   const tip=document.getElementById('worldTooltip');
   tip.innerHTML=`<strong>${el.dataset.name}</strong><div class="muted">${el.dataset.detail||''}</div>`;
   tip.classList.add('show');
 }));
 document.getElementById('worldDimensionName').textContent=currentLang==='en'?data.en:data.pt;
 renderWorldMarkerList();
}
function renderWorldMarkerList(){
 const list=document.getElementById('worldMarkerList'); if(!list)return;
 const rows=worldCustomMarkers.filter(m=>m.dimension===worldState.dimension);
 list.innerHTML=rows.length?rows.map((m,i)=>`<div class="marker-entry"><b>${m.icon||'📍'} ${m.name}</b><br>X ${m.coordX} • Y ${m.coordY} • Z ${m.coordZ}<br><button type="button" data-remove="${m.id}">Remove</button></div>`).join(''):'<div class="muted">No custom coordinates saved for this dimension.</div>';
 list.querySelectorAll('[data-remove]').forEach(b=>b.addEventListener('click',()=>{
   worldCustomMarkers=worldCustomMarkers.filter(m=>m.id!==b.dataset.remove);saveWorldMarkers();renderWorld3D();
 }));
}
function setupWorld3D(){
 document.getElementById('worldDimension').addEventListener('change',e=>{worldState.dimension=e.target.value;renderWorld3D();});
 document.getElementById('worldRotation').addEventListener('input',e=>{worldState.rotation=Number(e.target.value);renderWorld3D();});
 document.getElementById('worldZoom').addEventListener('input',e=>{worldState.zoom=Number(e.target.value);renderWorld3D();});
 document.querySelectorAll('[data-world-filter]').forEach(cb=>cb.addEventListener('change',()=>{worldState.show[cb.dataset.worldFilter]=cb.checked;renderWorld3D();}));
 document.getElementById('addWorldMarker').addEventListener('click',()=>{
   const name=document.getElementById('markerName').value.trim(); if(!name)return;
   const type=document.getElementById('markerType').value;
   const coordX=Number(document.getElementById('markerX').value)||0;
   const coordY=Number(document.getElementById('markerY').value)||64;
   const coordZ=Number(document.getElementById('markerZ').value)||0;
   const icon={ore:'⛏',structure:'🏛',boss:'☠',biome:'🌿',portal:'🌀',resource:'◆'}[type]||'📍';
   worldCustomMarkers.push({id:Date.now().toString(),dimension:worldState.dimension,type,name,coordX,coordY,coordZ,x:50+Math.max(-40,Math.min(40,coordX%80)),y:50+Math.max(-35,Math.min(35,coordZ%70)),icon,detail:`Saved coordinates: X ${coordX}, Y ${coordY}, Z ${coordZ}`});
   saveWorldMarkers();document.getElementById('markerName').value='';renderWorld3D();
 });
 renderWorld3D();
}


const REAL_WORLD_KEY='atm10-v27-real-world';
function readStoredWorld(){try{return JSON.parse(localStorage.getItem(REAL_WORLD_KEY)||'null')}catch{return null}}
let importedWorld=readStoredWorld();
let realMapState={dimension:null,mode:'biome',rotation:0,zoom:1};
const BIOME_COLORS={
 'minecraft:plains':'#6f9b50','minecraft:forest':'#2f6b42','minecraft:dark_forest':'#244633','minecraft:desert':'#c7a65e',
 'minecraft:badlands':'#b56d45','minecraft:swamp':'#506b4f','minecraft:mangrove_swamp':'#35584e','minecraft:deep_dark':'#19354a',
 'minecraft:nether_wastes':'#853b2f','minecraft:crimson_forest':'#7d2835','minecraft:warped_forest':'#28746e','minecraft:basalt_deltas':'#4e4b4c',
 'minecraft:soul_sand_valley':'#6e5c52','minecraft:end_highlands':'#756398','minecraft:end_midlands':'#67577f','minecraft:the_end':'#6a5c81'
};
function biomeColor(name){
 if(BIOME_COLORS[name])return BIOME_COLORS[name];
 let h=0;for(const ch of String(name))h=(h*31+ch.charCodeAt(0))>>>0;
 return `hsl(${h%360} 38% 44%)`;
}
function oreTotal(c){return Object.values(c.ores||{}).reduce((a,b)=>a+Number(b||0),0)}
function structureTotal(c){return (c.structures||[]).length}
function colorForChunk(c,mode,minH,maxH){
 if(mode==='biome')return biomeColor(c.biome);
 if(mode==='height'){
   const h=c.height?.avg??minH;const t=maxH>minH?(h-minH)/(maxH-minH):.5;
   return `hsl(${210-170*t} 55% ${28+35*t}%)`;
 }
 if(mode==='ores'){
   const n=Math.min(1,oreTotal(c)/24);return `hsl(${48-35*n} 85% ${25+35*n}%)`;
 }
 const n=Math.min(1,structureTotal(c)/3);return `hsl(${285-45*n} 65% ${25+35*n}%)`;
}
function renderImportedWorld(){
 const stage=document.getElementById('realMapScene');if(!stage||!importedWorld)return;
 const dim=realMapState.dimension||Object.keys(importedWorld.dimensions||{})[0];realMapState.dimension=dim;
 const chunks=importedWorld.dimensions?.[dim]?.chunks||[];
 if(!chunks.length){stage.innerHTML='<div class="muted">No chunks in this dimension.</div>';return;}
 const xs=chunks.map(c=>c.x),zs=chunks.map(c=>c.z),hs=chunks.map(c=>c.height?.avg).filter(x=>x!=null);
 const minX=Math.min(...xs),maxX=Math.max(...xs),minZ=Math.min(...zs),maxZ=Math.max(...zs),minH=hs.length?Math.min(...hs):0,maxH=hs.length?Math.max(...hs):1;
 const size=26;stage.style.width=((maxX-minX+1)*size)+'px';stage.style.height=((maxZ-minZ+1)*size)+'px';
 stage.style.transform=`translate(-50%,-50%) rotateX(58deg) rotateZ(${realMapState.rotation}deg) scale(${realMapState.zoom})`;
 stage.innerHTML=chunks.map(c=>{
   const x=(c.x-minX)*size,z=(c.z-minZ)*size,h=c.height?.avg??minH,depth=Math.max(2,Math.round((h-minH+2)*.7));
   const color=colorForChunk(c,realMapState.mode,minH,maxH);
   const title=`Chunk ${c.x}, ${c.z}`;
   const details=JSON.stringify({biome:c.biome,height:c.height,ores:c.ores,structures:c.structures}).replace(/'/g,'&#39;');
   return `<button class="real-chunk" style="left:${x}px;top:${z}px;background:${color};color:${color};--depth:${depth}px;transform:translateZ(${depth}px)" data-title="${title}" data-details='${details}' aria-label="${title}"></button>`;
 }).join('');
 stage.querySelectorAll('.real-chunk').forEach(el=>el.addEventListener('click',()=>{
   const d=JSON.parse(el.dataset.details);const tip=document.getElementById('realMapTooltip');
   tip.innerHTML=`<strong>${el.dataset.title}</strong><div>Biome: ${d.biome}</div><div>Height: ${d.height?.avg??'?'}</div><div>Ores: ${Object.entries(d.ores||{}).map(([k,v])=>k.split(':').pop()+': '+v).join(', ')||'none detected'}</div><div>Structures: ${(d.structures||[]).join(', ')||'none detected'}</div>`;
   tip.classList.add('show');
 }));
 document.getElementById('realChunkCount').textContent=chunks.length.toLocaleString();
 document.getElementById('realBiomeCount').textContent=new Set(chunks.map(c=>c.biome)).size.toLocaleString();
 document.getElementById('realOreCount').textContent=chunks.reduce((a,c)=>a+oreTotal(c),0).toLocaleString();
 document.getElementById('realStructureCount').textContent=chunks.reduce((a,c)=>a+structureTotal(c),0).toLocaleString();
}
function validateWorldMap(data){
 if(!data||data.format!=='atm10-world-map-v1')throw new Error('Unsupported map format');
 if(!data.dimensions||typeof data.dimensions!=='object'||!Object.keys(data.dimensions).length)throw new Error('Map has no dimensions');
 for(const [name,dimension] of Object.entries(data.dimensions))if(!dimension||!Array.isArray(dimension.chunks))throw new Error(`Invalid chunk list for ${name}`);
 return data;
}
function persistImportedWorld(){
 if(!importedWorld){localStorage.removeItem(REAL_WORLD_KEY);return true;}
 try{
  const raw=JSON.stringify(importedWorld);
  if(raw.length>4200000){localStorage.removeItem(REAL_WORLD_KEY);return false;}
  localStorage.setItem(REAL_WORLD_KEY,raw);return true;
 }catch{return false;}
}
function applyImportedWorld(data,persist=true){
 importedWorld=validateWorldMap(data);
 const sel=document.getElementById('realDimension');if(!sel)return;
 sel.innerHTML=Object.keys(data.dimensions).map(k=>`<option value="${escapeHtml(k)}">${escapeHtml(k)}</option>`).join('');
 realMapState.dimension=sel.value;
 document.getElementById('realWorldName').textContent=data.world?.name||'Imported world';
 document.getElementById('realSeed').textContent=data.world?.seed??'unknown';
 const saved=persist?persistImportedWorld():true,status=document.getElementById('realWorldStatus');
 if(status)status.textContent=saved?tr('Mapa salvo neste dispositivo.','Map saved on this device.'):tr('Mapa carregado, mas é grande demais para o armazenamento do navegador. Exporte o JSON para mantê-lo.','Map loaded, but it is too large for browser storage. Keep the JSON file as a backup.');
 renderImportedWorld();
 if(typeof queueAutoCloudSync==='function')queueAutoCloudSync();
}
function clearImportedWorld(){importedWorld=null;realMapState.dimension=null;localStorage.removeItem(REAL_WORLD_KEY);render();}
function exportImportedWorld(){if(importedWorld)downloadJSON('atm10-world-map-backup.json',importedWorld)}
function loadWorldMapFile(file){
 const reader=new FileReader();reader.onload=()=>{
   try{
     const data=JSON.parse(reader.result);
     applyImportedWorld(data,true);
   }catch(e){alert('Could not import map: '+e.message)}
 };reader.readAsText(file);
}
function setupRealWorldImport(){
 const input=document.getElementById('realWorldFile'),drop=document.getElementById('realDrop');
 input.addEventListener('change',()=>input.files[0]&&loadWorldMapFile(input.files[0]));
 drop.addEventListener('click',()=>input.click());
 ['dragenter','dragover'].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.add('drag')}));
 ['dragleave','drop'].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.remove('drag')}));
 drop.addEventListener('drop',e=>{const f=e.dataTransfer.files[0];if(f)loadWorldMapFile(f)});
 document.getElementById('realDimension').addEventListener('change',e=>{realMapState.dimension=e.target.value;renderImportedWorld()});
 document.getElementById('realMode').addEventListener('change',e=>{realMapState.mode=e.target.value;renderImportedWorld()});
 document.getElementById('realRotation').addEventListener('input',e=>{realMapState.rotation=Number(e.target.value);renderImportedWorld()});
 document.getElementById('realZoom').addEventListener('input',e=>{realMapState.zoom=Number(e.target.value);renderImportedWorld()});
 document.getElementById('realWorldExport').addEventListener('click',exportImportedWorld);
 document.getElementById('realWorldClear').addEventListener('click',clearImportedWorld);
 if(importedWorld){try{applyImportedWorld(importedWorld,false)}catch{importedWorld=null;localStorage.removeItem(REAL_WORLD_KEY)}}
}


const APP_VERSION='28.0';
const CLOUD_CONFIG_KEY='atm10-v18-cloud-config';
const CLOUD_SESSION_KEY='atm10-v18-cloud-session';
const CLOUD_PENDING_KEY='atm10-v27-cloud-pending';
const UPDATE_CONFIG_KEY='atm10-v18-update-config';
const UPDATE_STATE_KEY='atm10-v18-update-state';

let cloudConfig=JSON.parse(localStorage.getItem(CLOUD_CONFIG_KEY)||'{}');
let cloudSession=JSON.parse(localStorage.getItem(CLOUD_SESSION_KEY)||'null');
let updateConfig=JSON.parse(localStorage.getItem(UPDATE_CONFIG_KEY)||'{"auto":true,"guideFeed":"./updates.json","curseforgeApiKey":""}');
let updateState=JSON.parse(localStorage.getItem(UPDATE_STATE_KEY)||'{}');

function cloudLog(message,type='info'){
 const el=document.getElementById('cloudLog'); if(!el)return;
 const stamp=new Date().toLocaleTimeString();
 el.textContent=`[${stamp}] ${message}\n`+el.textContent;
}
function normalizeSupabaseUrl(url){return String(url||'').replace(/\/+$/,'');}
function saveCloudConfig(){
 cloudConfig={
  url:normalizeSupabaseUrl(document.getElementById('cloudUrl').value),
  key:document.getElementById('cloudKey').value.trim(),
  email:document.getElementById('cloudEmail').value.trim()
 };
 localStorage.setItem(CLOUD_CONFIG_KEY,JSON.stringify(cloudConfig));
 cloudLog(tr('Configuração salva.','Configuration saved.'));
}
function authHeaders(token){
 return {'apikey':cloudConfig.key,'Authorization':`Bearer ${token||cloudConfig.key}`,'Content-Type':'application/json'};
}
async function cloudAuth(action){
 saveCloudConfig();
 const password=document.getElementById('cloudPassword').value;
 if(!cloudConfig.url||!cloudConfig.key||!cloudConfig.email||!password){cloudLog('Missing URL, key, email, or password.','error');return;}
 const endpoint=action==='signup'?'/auth/v1/signup':'/auth/v1/token?grant_type=password';
 try{
  const res=await fetch(cloudConfig.url+endpoint,{method:'POST',headers:{'apikey':cloudConfig.key,'Content-Type':'application/json'},body:JSON.stringify({email:cloudConfig.email,password})});
  const data=await res.json();
  if(!res.ok)throw new Error(data.msg||data.error_description||data.message||res.statusText);
  if(data.access_token){
    cloudSession={access_token:data.access_token,refresh_token:data.refresh_token,user:data.user,expires_at:Date.now()+(data.expires_in||3600)*1000};
    localStorage.setItem(CLOUD_SESSION_KEY,JSON.stringify(cloudSession));
    cloudLog(action==='signup'?'Account created and signed in.':'Signed in.');
  }else{
    cloudLog('Account created. Confirm your email, then sign in.');
  }
  renderCloudStatus();
 }catch(e){cloudLog('Auth error: '+e.message,'error');}
}
let cloudRefreshPromise=null;
async function refreshCloudSession(){
 if(!cloudSession?.refresh_token)return false;
 if(cloudRefreshPromise)return cloudRefreshPromise;
 cloudRefreshPromise=(async()=>{try{
  const res=await fetch(normalizeSupabaseUrl(cloudConfig.url)+'/auth/v1/token?grant_type=refresh_token',{method:'POST',headers:{'apikey':cloudConfig.key,'Content-Type':'application/json'},body:JSON.stringify({refresh_token:cloudSession.refresh_token})});
  const data=await res.json(); if(!res.ok)throw new Error(data.message||res.statusText);
  cloudSession={access_token:data.access_token,refresh_token:data.refresh_token||cloudSession.refresh_token,user:data.user||cloudSession.user,expires_at:Date.now()+(data.expires_in||3600)*1000};
  localStorage.setItem(CLOUD_SESSION_KEY,JSON.stringify(cloudSession)); return true;
 }catch(e){cloudLog('Session refresh failed: '+e.message,'error');return false;}finally{cloudRefreshPromise=null}})();
 return cloudRefreshPromise;
}
async function ensureCloudSession(){
 if(!cloudSession?.access_token)return false;
 if((cloudSession.expires_at||0)-Date.now()<60000)return refreshCloudSession();
 return true;
}
function cloudLogout(){
 cloudSession=null;localStorage.removeItem(CLOUD_SESSION_KEY);localStorage.removeItem(CLOUD_PENDING_KEY);cloudDirty=false;renderCloudStatus();cloudLog('Signed out.');
}
function setCloudPending(pending=true){cloudDirty=pending;if(pending)localStorage.setItem(CLOUD_PENDING_KEY,'1');else localStorage.removeItem(CLOUD_PENDING_KEY);}
async function cloudSessionFetch(url,options={},retry=true){
 const res=await fetch(url,options);
 if(res.status===401&&retry&&await refreshCloudSession()){
  const headers={...(options.headers||{}),...authHeaders(cloudSession.access_token)};
  return fetch(url,{...options,headers});
 }
 return res;
}
function collectAllAppData(){
 return {
  schema_version:2,
  exported_at:new Date().toISOString(),
  app_version:APP_VERSION,
  progress:state,
  personal:personalData,
  appearance,
  language:currentLang,
  trackers,
  current_chapter:current,
  completion:{state:typeof completionState!=='undefined'?completionState:{},extra:typeof completionExtra!=='undefined'?completionExtra:{}},
  encyclopedia:typeof encyclopediaExtra!=='undefined'?encyclopediaExtra:[],
  world_markers:typeof worldCustomMarkers!=='undefined'?worldCustomMarkers:[],
  real_world:typeof importedWorld!=='undefined'?importedWorld:null
 };
}
function mergeObjects(local,remote){
 if(Array.isArray(local)||Array.isArray(remote))return remote??local;
 if(local&&remote&&typeof local==='object'&&typeof remote==='object'){
  const out={...local};
  for(const [k,v] of Object.entries(remote))out[k]=k in out?mergeObjects(out[k],v):v;
  return out;
 }
 return remote??local;
}
function applyCloudPayload(payload,merge=true){
 if(!payload)return;
 state=merge?mergeObjects(state,payload.progress||{}):(payload.progress||{});
 personalData=merge?mergeObjects(personalData,payload.personal||{}):(payload.personal||{favorites:{},notes:{}});
 appearance=merge?mergeObjects(appearance,payload.appearance||{}):(payload.appearance||{});
 trackers=merge?mergeObjects(trackers,payload.trackers||{}):(payload.trackers||{bosses:{},dimensions:{}});
 if(payload.current_chapter&&chapters.some(c=>c.id===Number(payload.current_chapter))){current=Number(payload.current_chapter);localStorage.setItem(CURRENT_CHAPTER_KEY,String(current));}
 if(typeof completionState!=='undefined'&&payload.completion){completionState=merge?mergeObjects(completionState,payload.completion.state||{}):(payload.completion.state||{});completionExtra=merge?mergeObjects(completionExtra,payload.completion.extra||{}):(payload.completion.extra||{});saveCompletion();}
 if(typeof encyclopediaExtra!=='undefined'&&Array.isArray(payload.encyclopedia)){encyclopediaExtra=payload.encyclopedia;localStorage.setItem(ENCYCLOPEDIA_KEY,JSON.stringify(encyclopediaExtra));}
 if(payload.language){currentLang=payload.language;localStorage.setItem(LANGUAGE_KEY,currentLang);}
 if(typeof worldCustomMarkers!=='undefined'&&payload.world_markers)worldCustomMarkers=merge?mergeObjects(worldCustomMarkers,payload.world_markers):payload.world_markers;
 if(payload.real_world){try{importedWorld=validateWorldMap(payload.real_world);persistImportedWorld()}catch(e){console.warn('Ignored invalid cloud world map',e)}}
 localStorage.setItem(KEY,JSON.stringify(state));
 savePersonal();saveAppearance();saveTrackers();
 if(typeof saveWorldMarkers==='function')saveWorldMarkers();
 update();nav();render();translateStatic(document);
}
function downloadJSON(filename,data){const b=new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(b);a.download=filename;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);}
function exportFullBackup(){downloadJSON(`atm10-full-backup-${new Date().toISOString().slice(0,10)}.json`,collectAllAppData());}
function exportPersonalOnly(){downloadJSON('atm10-favorites-and-notes.json',{schema_version:1,personal:personalData});}
function importFullBackup(file){const r=new FileReader();r.onload=()=>{try{const d=JSON.parse(r.result);if(!d||typeof d!=='object'||!d.schema_version)throw new Error('Invalid ATM10 backup');applyCloudPayload(d,document.getElementById('backupMerge')?.checked!==false);alert(tr('Backup restaurado.','Backup restored.'));}catch(e){alert(e.message)}};r.readAsText(file);}
async function cloudUpload(){
 if(!(await ensureCloudSession())){cloudLog('Sign in first.','error');return;}
 const userId=cloudSession.user?.id;if(!userId){cloudLog('No user ID in session.','error');return;}
 try{
  const body={user_id:userId,payload:collectAllAppData(),updated_at:new Date().toISOString()};
  const res=await cloudSessionFetch(`${cloudConfig.url}/rest/v1/guide_sync?on_conflict=user_id`,{method:'POST',headers:{...authHeaders(cloudSession.access_token),'Prefer':'resolution=merge-duplicates,return=representation'},body:JSON.stringify(body)});
  const data=await res.json();if(!res.ok)throw new Error(data.message||data.hint||res.statusText);
  cloudConfig.lastSync=new Date().toISOString();localStorage.setItem(CLOUD_CONFIG_KEY,JSON.stringify(cloudConfig));
  setCloudPending(false);cloudLog('Upload complete.');renderCloudStatus();
 }catch(e){setCloudPending(true);cloudLog('Upload failed; changes remain queued: '+e.message,'error');}
}
async function cloudDownload(){
 if(!(await ensureCloudSession())){cloudLog('Sign in first.','error');return;}
 const userId=cloudSession.user?.id;
 try{
  const res=await cloudSessionFetch(`${cloudConfig.url}/rest/v1/guide_sync?user_id=eq.${encodeURIComponent(userId)}&select=payload,updated_at&limit=1`,{headers:authHeaders(cloudSession.access_token)});
  const data=await res.json();if(!res.ok)throw new Error(data.message||res.statusText);
  if(!data.length){cloudLog('No cloud save found.');return;}
  const merge=document.getElementById('cloudMerge')?.checked!==false;
  applyCloudPayload(data[0].payload,merge);
  cloudConfig.lastSync=data[0].updated_at;localStorage.setItem(CLOUD_CONFIG_KEY,JSON.stringify(cloudConfig));
  cloudLog('Download complete.');renderCloudStatus();
 }catch(e){cloudLog('Download failed: '+e.message,'error');}
}
function renderCloudStatus(){
 const el=document.getElementById('cloudStatus');if(!el)return;
 const signed=!!cloudSession?.access_token;
 el.innerHTML=`<span class="status-dot ${signed?'ok':'warn'}"></span><strong>${signed?tr('Conectado','Connected'):tr('Não conectado','Not connected')}</strong>${signed&&cloudSession.user?.email?' — '+cloudSession.user.email:''}`;
 const last=document.getElementById('cloudLastSync');if(last)last.textContent=cloudConfig.lastSync?new Date(cloudConfig.lastSync).toLocaleString():'—';
}


const ACCOUNT_PREF_KEY='atm10-Ultimate Edition v1.0-account-prefs';
let accountPrefs=JSON.parse(localStorage.getItem(ACCOUNT_PREF_KEY)||'{"autoSync":true}');
let accountMode='signin';
let autoSyncTimer=null;
let cloudDirty=localStorage.getItem(CLOUD_PENDING_KEY)==='1';
function accountMessage(text,error=false){const el=document.getElementById('accountMessage');if(el){el.textContent=text;el.style.color=error?'#ff7b72':'var(--muted)';}}
function accountProfileMessage(text,error=false){const el=document.getElementById('accountProfileMessage');if(el){el.textContent=text;el.style.color=error?'#ff7b72':'var(--muted)';}}
function openAccountModal(){document.getElementById('accountModal').classList.add('show');document.getElementById('accountModal').setAttribute('aria-hidden','false');refreshAccountUI();}
function closeAccountModal(){document.getElementById('accountModal').classList.remove('show');document.getElementById('accountModal').setAttribute('aria-hidden','true');}
function setAccountMode(mode){accountMode=mode;accountLoginTab.classList.toggle('active',mode==='signin');accountSignupTab.classList.toggle('active',mode==='signup');accountSubmitBtn.textContent=mode==='signup'?tr('Criar conta','Create account'):tr('Entrar','Sign in');accountPassword.autocomplete=mode==='signup'?'new-password':'current-password';accountMessage('');}
function saveAccountConfiguration(){
  const url=document.getElementById('accountSupabaseUrl')?.value||cloudConfig.url||'';
  const key=document.getElementById('accountSupabaseKey')?.value||cloudConfig.key||'';
  const email=document.getElementById('accountEmail')?.value||cloudConfig.email||'';
  cloudConfig.url=normalizeSupabaseUrl(url);
  cloudConfig.key=String(key).trim();
  cloudConfig.email=String(email).trim();
  localStorage.setItem(CLOUD_CONFIG_KEY,JSON.stringify(cloudConfig));
  const msg=document.getElementById('accountConfigMessage');
  if(msg){msg.textContent='Configuração salva.';msg.style.color='#7ee787';}
}
async function accountSubmit(){
  saveAccountConfiguration();
  const password=accountPassword.value;
  const email=accountEmail.value.trim();

  if(!cloudConfig.url||!cloudConfig.key){
    accountMessage('Abra “Configuração do Supabase” e informe a Project URL e a publishable key.',true);
    document.getElementById('accountAdvanced')?.setAttribute('open','');
    return;
  }
  if(!email||!password){
    accountMessage('Digite o email e a senha.',true);
    return;
  }
  if(password.length<6){
    accountMessage('A senha precisa ter pelo menos 6 caracteres.',true);
    return;
  }

  accountSubmitBtn.disabled=true;
  accountMessage(accountMode==='signup'?'Criando conta...':'Entrando...');

  try{
    const base=normalizeSupabaseUrl(cloudConfig.url);
    const endpoint=accountMode==='signup'
      ? '/auth/v1/signup'
      : '/auth/v1/token?grant_type=password';

    const payload={email,password};
    if(accountMode==='signup'){
      payload.data={app:'atm10-guide'};
    }

    const headers={
      'apikey':cloudConfig.key,
      'Authorization':`Bearer ${cloudConfig.key}`,
      'Content-Type':'application/json'
    };

    const response=await fetch(base+endpoint,{
      method:'POST',
      headers,
      body:JSON.stringify(payload)
    });

    let data={};
    try{ data=await response.json(); }catch{}

    if(!response.ok){
      throw new Error(
        data.error_description||
        data.msg||
        data.message||
        data.error||
        `Supabase returned HTTP ${response.status}`
      );
    }

    if(data.access_token){
      cloudSession={
        access_token:data.access_token,
        refresh_token:data.refresh_token,
        user:data.user,
        expires_at:Date.now()+(data.expires_in||3600)*1000
      };
      localStorage.setItem(CLOUD_SESSION_KEY,JSON.stringify(cloudSession));
      accountMessage(accountMode==='signup'?'Conta criada e conectada.':'Login realizado.');
      await cloudDownloadSilent();
      refreshAccountUI();
    }else if(accountMode==='signup' && data.user){
      accountMessage('Conta criada. Confirme o email que o Supabase enviou e depois clique em Entrar.');
    }else{
      throw new Error('O Supabase não retornou uma sessão. Verifique a confirmação do email.');
    }
  }catch(error){
    let message=String(error.message||error);
    if(/invalid login credentials/i.test(message)){
      message='Email ou senha incorretos, ou o email ainda não foi confirmado.';
    }else if(/email not confirmed/i.test(message)){
      message='Confirme seu email antes de entrar.';
    }else if(/user already registered/i.test(message)){
      message='Já existe uma conta com esse email. Use Entrar.';
    }else if(/failed to fetch|networkerror/i.test(message)){
      message='Não foi possível alcançar o Supabase. Confira a Project URL, a publishable key e sua internet.';
    }
    accountMessage(message,true);
  }finally{
    accountSubmitBtn.disabled=false;
  }
}
async function testAccountSupabaseConnection(){
  saveAccountConfiguration();
  const el=document.getElementById('accountConfigMessage');
  const set=(text,error=false)=>{if(el){el.textContent=text;el.style.color=error?'#ff7b72':'#7ee787';}};
  if(!cloudConfig.url||!cloudConfig.key){
    set('Preencha a Project URL e a publishable key.',true);
    return;
  }
  set('Testando...');
  try{
    const response=await fetch(normalizeSupabaseUrl(cloudConfig.url)+'/auth/v1/settings',{
      headers:{'apikey':cloudConfig.key,'Authorization':`Bearer ${cloudConfig.key}`}
    });
    let data={};try{data=await response.json();}catch{}
    if(!response.ok)throw new Error(data.message||data.msg||`HTTP ${response.status}`);
    set('Conexão funcionando. Agora crie a conta ou entre.');
  }catch(error){
    set('Falha na conexão: '+(error.message||error),true);
  }
}
async function cloudDownloadSilent(){if(!(await ensureCloudSession()))return false;try{const userId=cloudSession.user?.id;const res=await cloudSessionFetch(`${cloudConfig.url}/rest/v1/guide_sync?user_id=eq.${encodeURIComponent(userId)}&select=payload,updated_at&limit=1`,{headers:authHeaders(cloudSession.access_token)});const data=await res.json();if(!res.ok)throw new Error(data.message||res.statusText);if(data.length){applyCloudPayload(data[0].payload,true);cloudConfig.lastSync=data[0].updated_at;localStorage.setItem(CLOUD_CONFIG_KEY,JSON.stringify(cloudConfig));}return true;}catch(e){accountProfileMessage('Falha ao baixar: '+e.message,true);return false;}}
async function accountSyncNow(){accountProfileMessage('Sincronizando...');const ok=await cloudUploadSilent();accountProfileMessage(ok?'Sincronização concluída.':'Falha na sincronização.',!ok);refreshAccountUI();}
async function cloudUploadSilent(){if(!(await ensureCloudSession()))return false;try{const userId=cloudSession.user?.id;const body={user_id:userId,payload:collectAllAppData(),updated_at:new Date().toISOString()};const res=await cloudSessionFetch(`${cloudConfig.url}/rest/v1/guide_sync?on_conflict=user_id`,{method:'POST',headers:{...authHeaders(cloudSession.access_token),'Prefer':'resolution=merge-duplicates,return=minimal'},body:JSON.stringify(body)});if(!res.ok){let d={};try{d=await res.json()}catch{}throw new Error(d.message||d.hint||res.statusText);}cloudConfig.lastSync=new Date().toISOString();localStorage.setItem(CLOUD_CONFIG_KEY,JSON.stringify(cloudConfig));setCloudPending(false);return true;}catch(e){setCloudPending(true);console.warn(e);return false;}}
function queueAutoCloudSync(){setCloudPending(true);const ind=document.getElementById('accountSyncIndicator');if(ind)ind.textContent=cloudSession?.access_token?'Alterações aguardando sincronização':'Salvo neste dispositivo';if(!accountPrefs.autoSync||!cloudSession?.access_token||!navigator.onLine)return;clearTimeout(autoSyncTimer);autoSyncTimer=setTimeout(async()=>{const ok=await cloudUploadSilent();const i=document.getElementById('accountSyncIndicator');if(i)i.textContent=ok?'Sincronizado':'Falha ao sincronizar';refreshAccountUI();},1800);}
function refreshAccountUI(){const signed=!!cloudSession?.access_token;const out=document.getElementById('accountLoggedOut'),inside=document.getElementById('accountLoggedIn');if(out)out.hidden=signed;if(inside)inside.hidden=!signed;const email=cloudSession?.user?.email||cloudConfig.email||'';const avatar=document.getElementById('accountAvatar');if(avatar)avatar.textContent=signed?(email[0]||'U').toUpperCase():'?';const text=document.getElementById('accountButtonText');if(text)text.textContent=signed?email:tr('Minha conta','My account');if(accountProfileEmail)accountProfileEmail.textContent=email;if(accountProfileSync)accountProfileSync.textContent=cloudConfig.lastSync?new Date(cloudConfig.lastSync).toLocaleString():'—';if(accountAutoSync)accountAutoSync.checked=accountPrefs.autoSync!==false;if(accountEmail&&!accountEmail.value)accountEmail.value=cloudConfig.email||'';if(accountSupabaseUrl)accountSupabaseUrl.value=cloudConfig.url||'';if(accountSupabaseKey)accountSupabaseKey.value=cloudConfig.key||'';const ind=document.getElementById('accountSyncIndicator');if(ind)ind.textContent=signed?(cloudDirty?'Alterações aguardando sincronização':(cloudConfig.lastSync?'Sincronizado':'Conectado')):'Salvo neste dispositivo';}
function accountLogout(){cloudLogout();closeAccountModal();refreshAccountUI();}
function initAccountUI(){
  const byId=id=>document.getElementById(id);
  byId('openAccountBtn')?.addEventListener('click',openAccountModal);
  byId('closeAccountBtn')?.addEventListener('click',closeAccountModal);
  byId('accountModal')?.addEventListener('click',e=>{if(e.target===byId('accountModal'))closeAccountModal();});
  byId('accountLoginTab')?.addEventListener('click',()=>setAccountMode('signin'));
  byId('accountSignupTab')?.addEventListener('click',()=>setAccountMode('signup'));
  byId('accountSubmitBtn')?.addEventListener('click',accountSubmit);
  byId('accountPassword')?.addEventListener('keydown',e=>{if(e.key==='Enter')accountSubmit();});
  byId('saveAccountConfig')?.addEventListener('click',saveAccountConfiguration);
  byId('testAccountConnection')?.addEventListener('click',testAccountSupabaseConnection);
  byId('accountSyncNow')?.addEventListener('click',accountSyncNow);
  byId('accountDownloadNow')?.addEventListener('click',async()=>{
    accountProfileMessage('Baixando...');
    const ok=await cloudDownloadSilent();
    accountProfileMessage(ok?'Dados baixados.':'Falha ao baixar.',!ok);
    refreshAccountUI();
  });
  byId('accountLogoutBtn')?.addEventListener('click',accountLogout);
  byId('accountAutoSync')?.addEventListener('change',()=>{
    accountPrefs.autoSync=byId('accountAutoSync').checked;
    localStorage.setItem(ACCOUNT_PREF_KEY,JSON.stringify(accountPrefs));
    if(accountPrefs.autoSync)queueAutoCloudSync();
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeAccountModal();});
  document.addEventListener('change',e=>{if(!e.target.closest('#accountModal')&&!e.target.closest('#cloudLog'))queueAutoCloudSync();});
  document.addEventListener('click',e=>{if(e.target.closest('button')&&!e.target.closest('#accountModal')&&!e.target.closest('[data-tab="cloud"]'))setTimeout(queueAutoCloudSync,50);});
  window.addEventListener('online',()=>{if(cloudDirty)queueAutoCloudSync();});
  refreshAccountUI();
}

function parseVersion(v){return String(v||'').match(/\d+(?:\.\d+)+/)?.[0]||String(v||'').trim();}
function compareVersions(a,b){
 const aa=parseVersion(a).split('.').map(Number),bb=parseVersion(b).split('.').map(Number),n=Math.max(aa.length,bb.length);
 for(let i=0;i<n;i++){const d=(aa[i]||0)-(bb[i]||0);if(d)return d>0?1:-1;}return 0;
}
async function fetchGuideUpdate(){
 const url=updateConfig.guideFeed||'./updates.json';
 const res=await fetch(url+(url.includes('?')?'&':'?')+'_='+Date.now(),{cache:'no-store'});
 if(!res.ok)throw new Error('Guide feed HTTP '+res.status);
 return res.json();
}
async function fetchAtmGithubVersion(){
 const url='https://raw.githubusercontent.com/AllTheMods/ATM-10/main/CHANGELOG.md';
 const res=await fetch(url,{cache:'no-store'});if(!res.ok)throw new Error('GitHub HTTP '+res.status);
 const text=await res.text();
 const m=text.match(/(?:##|#)\s*(?:📦\s*)?(\d+(?:\.\d+)+)/);
 if(!m)throw new Error('Version not found in changelog');
 return {version:m[1],source:'GitHub changelog'};
}
async function fetchAtmCurseForgeVersion(){
 if(!updateConfig.curseforgeApiKey)throw new Error('No CurseForge API key');
 const res=await fetch('https://api.curseforge.com/v1/mods/925200/files?pageSize=1&index=0',{headers:{'x-api-key':updateConfig.curseforgeApiKey}});
 const data=await res.json();if(!res.ok)throw new Error(data.error||res.statusText);
 const f=data.data?.[0];if(!f)throw new Error('No file returned');
 return {version:parseVersion(f.displayName||f.fileName),name:f.displayName||f.fileName,source:'CurseForge API'};
}
async function checkUpdates(manual=false){
 const status=document.getElementById('updateStatus');
 if(status)status.textContent=tr('Verificando...','Checking...');
 let guide=null,atm=null,errors=[];
 try{guide=await fetchGuideUpdate();}catch(e){errors.push('Guide: '+e.message);}
 try{atm=updateConfig.curseforgeApiKey?await fetchAtmCurseForgeVersion():await fetchAtmGithubVersion();}catch(e){errors.push('ATM10: '+e.message);}
 updateState={...updateState,lastChecked:new Date().toISOString(),guide,atm,errors};
 localStorage.setItem(UPDATE_STATE_KEY,JSON.stringify(updateState));
 renderUpdateStatus();
}
function saveUpdateConfig(){
 updateConfig={
  auto:document.getElementById('autoUpdates').checked,
  guideFeed:document.getElementById('guideFeed').value.trim()||'./updates.json',
  curseforgeApiKey:document.getElementById('curseforgeKey').value.trim()
 };
 localStorage.setItem(UPDATE_CONFIG_KEY,JSON.stringify(updateConfig));
 renderUpdateStatus();
}
function renderUpdateStatus(){
 const guideEl=document.getElementById('guideUpdateResult'),atmEl=document.getElementById('atmUpdateResult'),checked=document.getElementById('updateLastChecked');
 if(checked)checked.textContent=updateState.lastChecked?new Date(updateState.lastChecked).toLocaleString():'—';
 if(guideEl){
  const latest=updateState.guide?.version;
  const isNew=latest&&compareVersions(latest,APP_VERSION)>0;
  guideEl.innerHTML=latest?`<span class="update-badge ${isNew?'new':'current'}">${isNew?tr('Há uma atualização disponível.','An update is available.'):tr('Você já está na versão mais recente.','You are already on the latest version.')}</span><p>${tr('Versão atual','Current version')}: ${APP_VERSION}<br>${tr('Versão disponível','Available version')}: ${latest}</p>${updateState.guide.download_url?`<a class="action" href="${updateState.guide.download_url}" target="_blank" rel="noopener">${tr('Abrir download','Open download')}</a>`:''}`:`<p class="muted">${tr('Sem conexão ou fonte indisponível.','Offline or update source unavailable.')}</p>`;
 }
 if(atmEl){
  const v=updateState.atm?.version;
  atmEl.innerHTML=v?`<span class="update-badge new">ATM10 ${v}</span><p>${updateState.atm.name||''}<br>${updateState.atm.source||''}</p><a class="action" href="https://www.curseforge.com/minecraft/modpacks/all-the-mods-10/files/all" target="_blank" rel="noopener">CurseForge</a>`:`<p class="muted">${tr('Sem conexão ou fonte indisponível.','Offline or update source unavailable.')}</p>`;
 }
 const status=document.getElementById('updateStatus');if(status)status.textContent=(updateState.errors||[]).join(' • ');
}
async function maybeAutoCheckUpdates(){
 if(!updateConfig.auto||!navigator.onLine)return;
 const age=Date.now()-new Date(updateState.lastChecked||0).getTime();
 if(age>24*60*60*1000)checkUpdates(false);
}


const ONLINE_IMAGE_CACHE_KEY='atm10-v19-online-image-cache';
const ONLINE_IMAGE_SOURCES=[
 {id:'mekanism',name:'Mekanism',slug:'mekanism',fallback:'https://www.curseforge.com/minecraft/mc-mods/mekanism'},
 {id:'ae2',name:'Applied Energistics 2',slug:'ae2',fallback:'https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2'},
 {id:'powah',name:'Powah',slug:'powah',fallback:'https://www.curseforge.com/minecraft/mc-mods/powah'},
 {id:'create',name:'Create',slug:'create',fallback:'https://www.curseforge.com/minecraft/mc-mods/create'},
 {id:'botania',name:'Botania',slug:'botania',fallback:'https://www.curseforge.com/minecraft/mc-mods/botania'},
 {id:'ars',name:'Ars Nouveau',slug:'ars-nouveau',fallback:'https://www.curseforge.com/minecraft/mc-mods/ars-nouveau'},
 {id:'bloodmagic',name:'Blood Magic',slug:'blood-magic',fallback:'https://www.curseforge.com/minecraft/mc-mods/blood-magic'},
 {id:'occultism',name:'Occultism',slug:'occultism',fallback:'https://www.curseforge.com/minecraft/mc-mods/occultism'},
 {id:'industrial',name:'Industrial Foregoing',slug:'industrial-foregoing',fallback:'https://www.curseforge.com/minecraft/mc-mods/industrial-foregoing'},
 {id:'hhn',name:'Hostile Neural Networks',slug:'hostile-neural-networks',fallback:'https://www.curseforge.com/minecraft/mc-mods/hostile-neural-networks'},
 {id:'bees',name:'Productive Bees',slug:'productivebees',fallback:'https://www.curseforge.com/minecraft/mc-mods/productive-bees'},
 {id:'cataclysm',name:"L_Ender's Cataclysm",slug:'l_enders-cataclysm',fallback:'https://www.curseforge.com/minecraft/mc-mods/lendercataclysm'},
 {id:'twilight',name:'Twilight Forest',slug:'the-twilight-forest',fallback:'https://www.curseforge.com/minecraft/mc-mods/the-twilight-forest'},
 {id:'atm10',name:'All the Mods 10',slug:'all-the-mods-10',fallback:'https://www.curseforge.com/minecraft/modpacks/all-the-mods-10'}
];
let onlineImageCache=JSON.parse(localStorage.getItem(ONLINE_IMAGE_CACHE_KEY)||'{}');

function saveOnlineImageCache(){
 localStorage.setItem(ONLINE_IMAGE_CACHE_KEY,JSON.stringify(onlineImageCache));
}
function onlineSourceById(id){return ONLINE_IMAGE_SOURCES.find(x=>x.id===id)||ONLINE_IMAGE_SOURCES[0];}
async function fetchModrinthProject(source,force=false){
 const cached=onlineImageCache[source.id];
 if(!force&&cached&&Date.now()-cached.savedAt<7*24*60*60*1000)return cached.data;
 const res=await fetch(`https://api.modrinth.com/v2/project/${encodeURIComponent(source.slug)}`,{headers:{'Accept':'application/json'}});
 if(!res.ok)throw new Error(`Modrinth HTTP ${res.status}`);
 const data=await res.json();
 onlineImageCache[source.id]={savedAt:Date.now(),data};
 saveOnlineImageCache();
 return data;
}
function renderOnlineGalleryCards(source,data){
 const gallery=Array.isArray(data.gallery)?data.gallery:[];
 const icon=data.icon_url?[{url:data.icon_url,title:`${data.title||source.name} icon`,description:data.description||''}]:[];
 const images=[...icon,...gallery];
 const box=document.getElementById('onlineGalleryResults');
 if(!images.length){
   box.innerHTML=`<div class="online-status">${tr('Nenhuma imagem encontrada nesta fonte.','No images were found from this source.')} <a class="action" href="${source.fallback}" target="_blank" rel="noopener">${tr('Abrir fonte','Open source')}</a></div>`;
   return;
 }
 box.innerHTML=`<div class="online-gallery-grid">${images.map((img,i)=>`
   <article class="online-image-card">
     <img src="${img.url}" alt="${escapeHtml(img.title||source.name)}" loading="lazy" data-full="${img.url}">
     <div class="online-image-body">
       <h3>${escapeHtml(img.title||source.name)}</h3>
       <p>${escapeHtml(img.description||data.description||'')}</p>
       <div class="online-source-row">
         <a class="action" href="${data.project_url||`https://modrinth.com/project/${source.slug}`}" target="_blank" rel="noopener">Modrinth</a>
         <a class="action" href="${source.fallback}" target="_blank" rel="noopener">CurseForge</a>
       </div>
     </div>
   </article>`).join('')}</div>`;
 box.querySelectorAll('img[data-full]').forEach(img=>img.addEventListener('click',()=>openOnlineImage(img.dataset.full,img.alt)));
}
async function loadOnlineImages(force=false){
 const source=onlineSourceById(document.getElementById('onlineImageSource').value);
 const box=document.getElementById('onlineGalleryResults');
 box.innerHTML=`<div class="online-status">${tr('Carregando...','Loading...')}</div>`;
 try{
   const data=await fetchModrinthProject(source,force);
   renderOnlineGalleryCards(source,data);
 }catch(e){
   const cached=onlineImageCache[source.id]?.data;
   if(cached){
     renderOnlineGalleryCards(source,cached);
     box.insertAdjacentHTML('afterbegin',`<div class="online-status">${tr('Sem conexão; mostrando cache salvo.','Offline; showing saved cache.')}</div>`);
   }else{
     box.innerHTML=`<div class="online-status">${tr('É necessário estar conectado à internet para carregar novas imagens.','An internet connection is required to load new images.')}<br>${escapeHtml(e.message)}<br><a class="action" href="${source.fallback}" target="_blank" rel="noopener">${tr('Abrir fonte','Open source')}</a></div>`;
   }
 }
}
function openOnlineImage(url,alt){
 const modal=document.getElementById('onlineImageModal');
 const img=document.getElementById('onlineImageLarge');
 img.src=url;img.alt=alt||'';modal.classList.add('show');modal.setAttribute('aria-hidden','false');
}
function closeOnlineImageModal(){
 const modal=document.getElementById('onlineImageModal');
 modal.classList.remove('show');modal.setAttribute('aria-hidden','true');
 document.getElementById('onlineImageLarge').src='';
}


const ENCYCLOPEDIA_SEED=[{"id": "digital-miner", "name": "Digital Miner", "mod": "Mekanism", "category": "Machine", "chapter": 14, "verified": true, "description": "Automated miner with tag, item and mod filters.", "recipe": ["Steel Casing", "Logistical Sorter", "Atomic Alloy", "Teleportation Core", "Robit"], "uses": ["Selective mining", "Mining Dimension automation"], "automation": "Power with Flux Networks and export into drawers or AE2.", "location": "Any loaded dimension; Mining Dimension recommended.", "issues": ["No power", "Wrong filter", "Output full", "Chunk unloaded"]}, {"id": "fission-reactor", "name": "Fission Reactor", "mod": "Mekanism", "category": "Multiblock", "chapter": 37, "verified": true, "description": "Produces steam and Nuclear Waste from Fissile Fuel.", "recipe": ["Fission Reactor Casing", "Fuel Assemblies", "Control Rod Assemblies", "Ports"], "uses": ["Polonium", "Plutonium", "Steam generation"], "automation": "Automatic coolant, fuel, waste output and SCRAM logic.", "location": "Remote nuclear district.", "issues": ["Coolant shortage", "Waste full", "Burn rate too high"]}, {"id": "sps", "name": "SPS", "mod": "Mekanism", "category": "Multiblock", "chapter": 38, "verified": true, "description": "Converts Polonium into Antimatter with extreme power usage.", "recipe": ["SPS Casings", "SPS Ports", "Supercharged Coils"], "uses": ["Antimatter", "ATM Star", "Creative items"], "automation": "Dedicated power network and Chemical Crystallizer output.", "location": "Remote endgame district.", "issues": ["No Polonium", "Insufficient FE", "Output blocked"]}, {"id": "energizing-orb", "name": "Energizing Orb", "mod": "Powah", "category": "Machine", "chapter": 42, "verified": true, "description": "Creates tier materials using Energizing Rods.", "recipe": ["Dielectric Casing", "Quartz", "Iron", "Redstone"], "uses": ["Blazing", "Niotic", "Spirited", "Nitro"], "automation": "AE2 processing pattern with blocking mode.", "location": "Powah Hall.", "issues": ["No power", "Wrong recipe", "Items removed early"]}, {"id": "me-controller", "name": "ME Controller", "mod": "Applied Energistics 2", "category": "Machine", "chapter": 11, "verified": true, "description": "Central controller for large AE2 networks.", "recipe": ["Engineering Processor", "Fluix Crystals", "Skystone"], "uses": ["Channels", "P2P backbone", "Autocrafting"], "automation": "Keep on AE2 Critical power with energy-cell backup.", "location": "AE2 Core.", "issues": ["Channel overload", "No power", "Invalid controller shape"]}, {"id": "simulation-chamber", "name": "Simulation Chamber", "mod": "Hostile Neural Networks", "category": "Machine", "chapter": 48, "verified": true, "description": "Runs mob simulations using Data Models and Prediction Matrices.", "recipe": ["Machine Frame", "Prediction components"], "uses": ["Predictions", "Lag-friendly drops"], "automation": "Autocraft matrices and send predictions to Loot Fabricators.", "location": "HNN Hall.", "issues": ["Model tier low", "No matrix", "Output full"]}, {"id": "advanced-beehive", "name": "Advanced Beehive", "mod": "Productive Bees", "category": "Machine", "chapter": 18, "verified": true, "description": "Production hive supporting upgrades and expansion boxes.", "recipe": ["Beehive", "Honeycomb", "Wood"], "uses": ["Resource bees", "Simulation Upgrade", "Comb production"], "automation": "Feeding Slab + Simulation + Productivity Upgrades.", "location": "Bee Factory.", "issues": ["Wrong flower", "No expansion box", "Output full"]}, {"id": "master-infusion-crystal", "name": "Master Infusion Crystal", "mod": "Mystical Agriculture", "category": "Tool", "chapter": 22, "verified": true, "description": "Reusable crystal for upgrading essence tiers.", "recipe": ["Prosperity Shards", "Supremium Essence"], "uses": ["Mass essence crafting"], "automation": "Keep available to AE2 with substitution enabled.", "location": "Farm District.", "issues": ["Pattern consumes wrong crystal", "Crystal unavailable"]}, {"id": "mob-slaughter-factory", "name": "Mob Slaughter Factory", "mod": "Industrial Foregoing", "category": "Machine", "chapter": 24, "verified": true, "description": "Produces Pink Slime and Liquid Meat from mobs.", "recipe": ["Machine Frame", "Plastic", "Industrial components"], "uses": ["Pink Slime", "Advanced Machine Frames"], "automation": "Controlled mob input and separate fluid tanks.", "location": "Mob-processing sector.", "issues": ["No mobs in range", "Tanks full", "No power"]}, {"id": "precision-mechanism", "name": "Precision Mechanism", "mod": "Create", "category": "Component", "chapter": 49, "verified": true, "description": "Advanced component made through Sequenced Assembly.", "recipe": ["Golden Sheet", "Small Cogwheel", "Large Cogwheel", "Iron Nugget"], "uses": ["Advanced Create machines", "ATM Star"], "automation": "Loop belt with deployers and filtered final extraction.", "location": "Create Factory.", "issues": ["Wrong order", "Incomplete item extracted", "Too few loops"]}, {"id": "terrasteel", "name": "Terrasteel", "mod": "Botania", "category": "Material", "chapter": 28, "verified": true, "description": "High-tier Botania material created with Mana.", "recipe": ["Manasteel Ingot", "Mana Pearl", "Mana Diamond"], "uses": ["Gaia Guardian", "Alfheim", "ATM Star"], "automation": "Timed ingredient drop and sufficient Mana reserve.", "location": "Botania Garden.", "issues": ["Insufficient Mana", "Plate invalid", "Ingredients arrive separately"]}, {"id": "blood-altar", "name": "Blood Altar", "mod": "Blood Magic", "category": "Multiblock", "chapter": 44, "verified": true, "description": "Central Blood Magic crafting altar upgraded with rune tiers.", "recipe": ["Stone", "Gold", "Furnace"], "uses": ["Slates", "Blood Orbs", "Ritual progression"], "automation": "Well of Suffering and tiered item routing.", "location": "Blood Magic Temple.", "issues": ["Low LP", "Wrong tier", "Orb tier low"]}, {"id": "drygmy", "name": "Drygmy", "mod": "Ars Nouveau", "category": "Familiar", "chapter": 45, "verified": true, "description": "Produces drops from nearby living mobs using Source.", "recipe": ["Drygmy Charm", "Mossy Cobblestone henge"], "uses": ["Passive drops", "Boss farms"], "automation": "Mob containment, Source automation and item collection.", "location": "Ars district.", "issues": ["No Source", "Mob out of range", "Charm not activated"]}, {"id": "marid-crusher", "name": "Marid Crusher", "mod": "Occultism", "category": "Spirit Machine", "chapter": 46, "verified": false, "description": "High-tier spirit crusher for ore processing.", "recipe": ["Marid ritual", "Iesnium components"], "uses": ["High-yield ore processing"], "automation": "AE2 processing patterns with input/output buffers.", "location": "Occultism Hall.", "issues": ["Wrong spirit tier", "Invalid ritual", "Chunk unloaded"]}, {"id": "allthemodium", "name": "Allthemodium Ingot", "mod": "All The Modium", "category": "Material", "chapter": 3, "verified": false, "description": "First ATM metal.", "recipe": ["Allthemodium Ore", "Smelting or ore processing"], "uses": ["Teleport Pad", "Armor", "ATM alloys", "ATM Star"], "automation": "Productive Bees or Mystical Agriculture after first acquisition.", "location": "Deep Dark; verify pack version.", "issues": ["Wrong biome", "Generation changed", "No ore sight"]}, {"id": "vibranium", "name": "Vibranium Ingot", "mod": "All The Modium", "category": "Material", "chapter": 8, "verified": false, "description": "Second ATM metal.", "recipe": ["Vibranium Ore", "Smelting or ore processing"], "uses": ["Vibranium gear", "ATM alloys", "ATM Star"], "automation": "Productive Bees or Mystical Agriculture.", "location": "The Other/Nether progression; verify JEI.", "issues": ["Wrong dimension", "Generation changed"]}, {"id": "unobtainium", "name": "Unobtainium Ingot", "mod": "All The Modium", "category": "Material", "chapter": 9, "verified": false, "description": "Highest ATM metal tier.", "recipe": ["Unobtainium Ore", "Smelting or ore processing"], "uses": ["Top-tier gear", "ATM alloys", "ATM Star"], "automation": "Productive Bees or Mystical Agriculture.", "location": "End Highlands.", "issues": ["Wrong End biome", "Not far enough from main island"]}, {"id": "atm-star", "name": "ATM Star", "mod": "All The Mods", "category": "Endgame Item", "chapter": 55, "verified": false, "description": "Main ATM10 endgame item.", "recipe": ["Runic Star Altar", "ATM metals", "Antimatter", "Magic components", "Boss drops", "Compressed blocks"], "uses": ["Creative items", "Starry Bee", "Post-endgame"], "automation": "Dedicated AE2 CPU and stock targets.", "location": "Endgame altar area.", "issues": ["Recipe version mismatch", "Missing boss drop", "Invalid altar"]}];
const ENCYCLOPEDIA_KEY='atm10-v20-ency-extra';
let encyclopediaExtra=JSON.parse(localStorage.getItem(ENCYCLOPEDIA_KEY)||'[]');
let encyclopediaCurrent=null;
function encyclopediaAll(){
 const m=new Map();[...ENCYCLOPEDIA_SEED,...encyclopediaExtra].forEach(x=>m.set(x.id,x));return [...m.values()];
}
function normalizeEncyclopediaItem(x,index){
 if(!x||typeof x!=='object')throw new Error(`Item ${index+1} is invalid`);
 const id=String(x.id||'').trim().toLowerCase();if(!/^[a-z0-9][a-z0-9_-]{1,79}$/.test(id))throw new Error(`Item ${index+1} has an invalid id`);
 const text=(v,fallback='')=>String(v??fallback).slice(0,2000),list=v=>Array.isArray(v)?v.map(i=>text(i)).filter(Boolean).slice(0,100):[];
 return {id,name:text(x.name,id),mod:text(x.mod,'Unknown'),category:text(x.category,'Other'),chapter:Math.min(60,Math.max(1,Number(x.chapter)||1)),verified:Boolean(x.verified),description:text(x.description),recipe:list(x.recipe),uses:list(x.uses),automation:text(x.automation),location:text(x.location),issues:list(x.issues),tips:list(x.tips),image:text(x.image)};
}
function openEncyclopedia(id){encyclopediaCurrent=id;tab='encyclopedia';sync();render();}
function renderEncyclopediaList(){
 const q=(document.getElementById('encySearch')?.value||'').toLowerCase();
 const mod=document.getElementById('encyMod')?.value||'';
 const cat=document.getElementById('encyCat')?.value||'';
 const list=encyclopediaAll().filter(x=>(!q||(x.name+' '+x.mod+' '+x.category+' '+x.description).toLowerCase().includes(q))&&(!mod||x.mod===mod)&&(!cat||x.category===cat));
 document.getElementById('encyResults').innerHTML=list.length?`<div class="encyclopedia-grid">${list.map(x=>`<article class="encyclopedia-card"><h3>${escapeHtml(x.name)}</h3><span class="pill">${escapeHtml(x.mod)}</span><span class="pill">${escapeHtml(x.category)}</span><p>${escapeHtml(x.description)}</p><div class="${x.verified?'verified':'needs-jei'}">${x.verified?'Verified':'Check JEI'}</div><button class="action" onclick="openEncyclopedia('${x.id}')">Open page</button></article>`).join('')}</div>`:'<p class="muted">No results.</p>';
}
function exportEncyclopedia(){
 const b=new Blob([JSON.stringify(encyclopediaAll(),null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='atm10-encyclopedia.json';a.click();
}
function importEncyclopediaFile(file){
 const r=new FileReader();r.onload=()=>{try{const d=JSON.parse(r.result);if(!Array.isArray(d))throw new Error('Expected array');encyclopediaExtra=d.map(normalizeEncyclopediaItem);localStorage.setItem(ENCYCLOPEDIA_KEY,JSON.stringify(encyclopediaExtra));encyclopediaCurrent=null;render();}catch(e){alert(e.message)}};r.readAsText(file);
}


const COMPLETION_SEED={"bees": ["Allthemodium Bee", "Vibranium Bee", "Unobtainium Bee", "Iron Bee", "Gold Bee", "Diamond Bee", "Emerald Bee", "Redstone Bee", "Lapis Bee", "Coal Bee", "Copper Bee", "Osmium Bee", "Uranium Bee", "Fluorite Bee", "Netherite Bee", "Quartz Bee", "Glowstone Bee", "Ender Bee", "Blaze Bee", "Wither Bee", "Draconic Bee", "Starry Bee"], "seeds": ["Inferium Seeds", "Iron Seeds", "Gold Seeds", "Copper Seeds", "Redstone Seeds", "Lapis Seeds", "Diamond Seeds", "Emerald Seeds", "Coal Seeds", "Quartz Seeds", "Osmium Seeds", "Uranium Seeds", "Fluorite Seeds", "Netherite Seeds", "Nether Star Seeds", "Allthemodium Seeds", "Vibranium Seeds", "Unobtainium Seeds", "Experience Seeds", "End Seeds", "Blaze Seeds", "Wither Skeleton Seeds"], "bosses": ["Ender Dragon", "Wither", "Warden", "Naga", "Twilight Lich", "Minoshroom", "Hydra", "Knight Phantoms", "Ur-Ghast", "Alpha Yeti", "Snow Queen", "Gaia Guardian I", "Gaia Guardian II", "Wilden Chimera", "The Dead King", "Netherite Monstrosity", "Ender Guardian", "The Harbinger", "Ancient Remnant", "The Leviathan", "Scylla", "Maledictus", "Ignis"], "dimensions": ["Overworld", "Nether", "The End", "Mining Dimension", "The Other", "The Beyond", "Twilight Forest", "The Bumblezone", "The Undergarden", "Eternal Starlight"], "charms": ["AllthemodiumSight Charm", "VibraniumSight Charm", "UnobtainiumSight Charm", "DiamondSight Charm", "EmeraldSight Charm", "NetheriteSight Charm", "IronSight Charm", "GoldSight Charm", "CopperSight Charm", "CoalSight Charm", "RedstoneSight Charm", "LapisSight Charm", "QuartzSight Charm", "OsmiumSight Charm", "UraniumSight Charm", "FluoriteSight Charm"], "achievements": ["Stone Age", "Getting an Upgrade", "Acquire Hardware", "Suit Up", "Hot Stuff", "Isn’t It Iron Pick", "Diamonds!", "We Need to Go Deeper", "The End?", "Free the End", "Withering Heights", "Beaconator", "How Did We Get Here?", "Monsters Hunted", "Adventuring Time", "A Complete Catalogue", "Two by Two", "Serious Dedication", "Cover Me in Debris"], "quests": []};
const COMPLETION_KEY='atm10-v21-completion',COMPLETION_EXTRA_KEY='atm10-v21-completion-extra';
let completionState=JSON.parse(localStorage.getItem(COMPLETION_KEY)||'{}'),completionExtra=JSON.parse(localStorage.getItem(COMPLETION_EXTRA_KEY)||'{}');
const COMPLETION_LABELS={bees:'Bees',seeds:'Seeds',bosses:'Bosses',dimensions:'Dimensions',charms:'Charms',quests:'Quests',achievements:'Achievements',machines:'Machines',automations:'Automations',resources:'Resources',endgame:'Endgame',structures:'Structures'};
function completionAll(){const o={};for(const[k,v]of Object.entries(COMPLETION_SEED))o[k]=[...v];for(const[k,v]of Object.entries(window.ATM10_COMPANION_DATA?.completion||{}))o[k]=[...(o[k]||[]),...v];for(const[k,v]of Object.entries(completionExtra))o[k]=[...(o[k]||[]),...(v||[])];for(const k in o)o[k]=[...new Set(o[k])].sort();return o}
function ck(c,i){return c+':'+i}function saveCompletion(){localStorage.setItem(COMPLETION_KEY,JSON.stringify(completionState));localStorage.setItem(COMPLETION_EXTRA_KEY,JSON.stringify(completionExtra))}
function completionStats(){let t=0,d=0;for(const[c,a]of Object.entries(completionAll())){t+=a.length;d+=a.filter(x=>completionState[ck(c,x)]).length}return{total:t,done:d,pct:t?Math.round(d/t*100):0}}
function renderCompletionList(){const box=document.getElementById('completionResults');if(!box)return;const q=(completionSearch.value||'').toLowerCase(),cf=completionCategory.value,sf=completionStatus.value;let out='';for(const[c,a]of Object.entries(completionAll())){if(cf&&cf!==c)continue;const f=a.filter(x=>{const v=!!completionState[ck(c,x)];return(!q||x.toLowerCase().includes(q))&&(!sf||(sf==='done'?v:!v))});if(!f.length)continue;const d=a.filter(x=>completionState[ck(c,x)]).length;out+=`<details class="completion-group" open><summary>${COMPLETION_LABELS[c]||c} — ${d}/${a.length}<div class="completion-progress"><span style="width:${a.length?d/a.length*100:0}%"></span></div></summary><div class="completion-items">${f.map(x=>{const has=!!getNote('completion',ck(c,x));return `<div class="completion-row"><input type="checkbox" data-cat="${c}" data-item="${escapeHtml(x)}" ${completionState[ck(c,x)]?'checked':''}><span><b>${escapeHtml(x)}</b></span><button type="button" class="action completion-note ${has?'has-note':''}" data-note-cat="${c}" data-note-item="${escapeHtml(x)}" title="${has?escapeHtml(getNote('completion',ck(c,x))):tr('Adicionar nota','Add note')}">${has?'📝':'＋'} ${tr('Nota','Note')}</button></div>`}).join('')}</div></details>`}box.innerHTML=out||'<p class="muted">No results.</p>';box.querySelectorAll('input[type=checkbox]').forEach(x=>x.onchange=()=>{completionState[ck(x.dataset.cat,x.dataset.item)]=x.checked;saveCompletion();renderCompletionDashboard()});box.querySelectorAll('[data-note-cat]').forEach(b=>b.onclick=()=>editCompletionNote(b.dataset.noteCat,b.dataset.noteItem))}
function editCompletionNote(category,item){const id=ck(category,item),before=getNote('completion',id);const value=prompt(`${tr('Nota para','Note for')} ${item}`,before);if(value===null)return;if(value.trim())saveNote('completion',id,value.trim());else deleteNote('completion',id);renderCompletionList();queueAutoCloudSync?.()}
function renderCompletionDashboard(){const z=completionStats();if(document.getElementById('completionPct'))completionPct.textContent=z.pct+'%';if(document.getElementById('completionCounts'))completionCounts.textContent=z.done+'/'+z.total;renderCompletionList()}
function exportCompletion(){const b=new Blob([JSON.stringify({version:1,state:completionState,extra:completionExtra},null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(b);a.download='atm10-completion.json';a.click()}
function importCompletionJSON(file){const r=new FileReader();r.onload=()=>{try{const d=JSON.parse(r.result);if(d.state)completionState={...completionState,...d.state};const e=d.extra||d;for(const[k,v]of Object.entries(e))if(Array.isArray(v))completionExtra[k]=[...new Set([...(completionExtra[k]||[]),...v])];saveCompletion();renderCompletionDashboard()}catch(e){alert(e.message)}};r.readAsText(file)}

function render(){
 let box=document.getElementById('content');
 if(tab==='gallery') box.innerHTML=`
<section class="card">
  <h2>Screenshots reais do ATM10</h2>
  <p class="muted">Primeira coleção real incorporada diretamente no site. Estas imagens funcionam offline.</p>
  <div class="visual-grid">

    <article class="visual-card real-shot">
      <img src="./images/gallery/screenshot-1.png" alt="Screenshot ATM10 — Allthemodium Ore" loading="lazy">
      <div class="visual-body">
        <h3>Allthemodium Ore</h3>
        <p>Ore encontrado no Deep Dark, misturado aos blocos de sculk.</p>
        <div class="buttons">
          <button onclick="openChapter(3)">Abrir capítulo 3</button>
        </div>
        <small class="credit">Screenshot de gameplay ATM10 — fonte indicada na documentação do arquivo.</small>
      </div>
    </article>

    <article class="visual-card real-shot">
      <img src="./images/gallery/screenshot-2.png" alt="Screenshot ATM10 — Vibranium Ore" loading="lazy">
      <div class="visual-body">
        <h3>Vibranium Ore</h3>
        <p>Ore de Vibranium exposto no Nether.</p>
        <div class="buttons">
          <button onclick="openChapter(8)">Abrir capítulo 8</button>
        </div>
        <small class="credit">Screenshot de gameplay ATM10 — fonte indicada na documentação do arquivo.</small>
      </div>
    </article>

    <article class="visual-card real-shot">
      <img src="./images/gallery/screenshot-3.png" alt="Screenshot ATM10 — Unobtainium Ore" loading="lazy">
      <div class="visual-body">
        <h3>Unobtainium Ore</h3>
        <p>Ore de Unobtainium no End Highlands.</p>
        <div class="buttons">
          <button onclick="openChapter(9)">Abrir capítulo 9</button>
        </div>
        <small class="credit">Screenshot de gameplay ATM10 — fonte indicada na documentação do arquivo.</small>
      </div>
    </article>

    <article class="visual-card real-shot">
      <img src="./images/gallery/screenshot-4.png" alt="Screenshot ATM10 — Teleport Pad" loading="lazy">
      <div class="visual-body">
        <h3>Teleport Pad</h3>
        <p>Receita e tooltip mostrando os destinos dimensionais do Teleport Pad.</p>
        <div class="buttons">
          <button onclick="openChapter(7)">Abrir capítulo 7</button>
        </div>
        <small class="credit">Screenshot de gameplay ATM10 — fonte indicada na documentação do arquivo.</small>
      </div>
    </article>

    <article class="visual-card real-shot">
      <img src="./images/gallery/screenshot-5.png" alt="Screenshot ATM10 — Dungeon Interior" loading="lazy">
      <div class="visual-body">
        <h3>The Other — Interior</h3>
        <p>Área interna da dungeon, com spawners e acesso subterrâneo.</p>
        <div class="buttons">
          <button onclick="openChapter(54)">Abrir capítulo 54</button>
        </div>
        <small class="credit">Screenshot de gameplay ATM10 — fonte indicada na documentação do arquivo.</small>
      </div>
    </article>

    <article class="visual-card real-shot">
      <img src="./images/gallery/screenshot-6.png" alt="Screenshot ATM10 — Piglich Pyramid" loading="lazy">
      <div class="visual-body">
        <h3>Piglich Pyramid</h3>
        <p>Pirâmide onde os Pigliches podem ser encontrados.</p>
        <div class="buttons">
          <button onclick="openChapter(54)">Abrir capítulo 54</button>
        </div>
        <small class="credit">Screenshot de gameplay ATM10 — fonte indicada na documentação do arquivo.</small>
      </div>
    </article>

  </div>
</section>
<section class="card"><h2>Ilustrações de apoio</h2><p class="muted">Imagens offline ilustrativas. Próximo passo: substituir cada cartão por screenshots reais do jogo.</p><div class="visual-grid">
    <article class="visual-card">

<svg viewBox="0 0 600 330"><rect width="600" height="330" fill="#0b141d"/>
<text x="300" y="38" fill="#fff" font-size="26" text-anchor="middle" font-weight="700">ATM Ores</text>
<g><rect x="55" y="80" width="140" height="140" rx="14" fill="#59636d"/><circle cx="95" cy="120" r="18" fill="#f4c74b"/><circle cx="145" cy="165" r="24" fill="#ffde74"/></g>
<g><rect x="230" y="80" width="140" height="140" rx="14" fill="#59636d"/><circle cx="270" cy="120" r="18" fill="#3be2bd"/><circle cx="325" cy="165" r="24" fill="#1fb79b"/></g>
<g><rect x="405" y="80" width="140" height="140" rx="14" fill="#59636d"/><circle cx="445" cy="120" r="18" fill="#c28cff"/><circle cx="500" cy="165" r="24" fill="#7d45d1"/></g>
<text x="125" y="260" fill="#f4c74b" font-size="18" text-anchor="middle">Allthemodium</text>
<text x="300" y="260" fill="#3be2bd" font-size="18" text-anchor="middle">Vibranium</text>
<text x="475" y="260" fill="#c28cff" font-size="18" text-anchor="middle">Unobtainium</text></svg>
      <div class="visual-body">
        <h3>Ores e materiais</h3>
        <p>Allthemodium, Vibranium e Unobtainium</p>
        <div class="buttons"><button onclick="openChapter(3)">Cap. 3</button><button onclick="openChapter(8)">Cap. 8</button><button onclick="openChapter(9)">Cap. 9</button></div>
      </div>
    </article>

    <article class="visual-card">

<svg viewBox="0 0 600 330"><rect width="600" height="330" fill="#0b141d"/>
<text x="300" y="38" fill="#fff" font-size="26" text-anchor="middle" font-weight="700">Machines</text>
<rect x="55" y="75" width="145" height="170" rx="18" fill="#243445" stroke="#58a6ff" stroke-width="5"/><rect x="82" y="100" width="90" height="45" fill="#071018" stroke="#7ee787" stroke-width="3"/>
<circle cx="105" cy="185" r="15" fill="#7ee787"/><circle cx="150" cy="185" r="15" fill="#58a6ff"/>
<rect x="235" y="95" width="125" height="135" rx="16" fill="#4b302f" stroke="#ff9a66" stroke-width="5"/><circle cx="297" cy="160" r="36" fill="#1b222a" stroke="#ffbb66" stroke-width="8"/>
<rect x="400" y="75" width="145" height="170" rx="18" fill="#30244b" stroke="#b983ff" stroke-width="5"/><path d="M430 135h85M430 170h85" stroke="#b983ff" stroke-width="10"/>
<text x="127" y="285" fill="#58a6ff" font-size="17" text-anchor="middle">Digital Miner</text><text x="297" y="285" fill="#ff9a66" font-size="17" text-anchor="middle">Energizing Orb</text><text x="472" y="285" fill="#b983ff" font-size="17" text-anchor="middle">Simulation Chamber</text></svg>
      <div class="visual-body">
        <h3>Máquinas</h3>
        <p>Digital Miner, Energizing Orb e Simulation Chamber</p>
        <div class="buttons"><button onclick="openChapter(14)">Cap. 14</button><button onclick="openChapter(42)">Cap. 42</button><button onclick="openChapter(48)">Cap. 48</button></div>
      </div>
    </article>

    <article class="visual-card">

<svg viewBox="0 0 600 330"><defs><radialGradient id="b"><stop stop-color="#4a1d1b"/><stop offset="1" stop-color="#080a0d"/></radialGradient></defs><rect width="600" height="330" fill="url(#b)"/>
<text x="300" y="38" fill="#fff" font-size="26" text-anchor="middle" font-weight="700">Bosses</text>
<path d="M115 70l55 65-20 120H80L60 135z" fill="#873b18" stroke="#ffb347" stroke-width="7"/><circle cx="100" cy="135" r="9" fill="#fff"/><circle cx="132" cy="135" r="9" fill="#fff"/>
<ellipse cx="430" cy="160" rx="75" ry="105" fill="#173c50" stroke="#56d6ff" stroke-width="7"/><circle cx="405" cy="145" r="9" fill="#c8f8ff"/><circle cx="455" cy="145" r="9" fill="#c8f8ff"/>
<text x="115" y="295" fill="#ffb347" font-size="20" text-anchor="middle">Ignis</text><text x="430" y="295" fill="#56d6ff" font-size="20" text-anchor="middle">Leviathan</text></svg>
      <div class="visual-body">
        <h3>Bosses</h3>
        <p>Ignis, Leviathan e outros bosses avançados</p>
        <div class="buttons"><button onclick="openChapter(40)">Cap. 40</button><button onclick="openChapter(54)">Cap. 54</button><button onclick="openChapter(50)">Cap. 50</button></div>
      </div>
    </article>

    <article class="visual-card">

<svg viewBox="0 0 600 330"><rect width="600" height="330" fill="#071018"/><text x="300" y="38" fill="#fff" font-size="26" text-anchor="middle" font-weight="700">Portals</text>
<rect x="45" y="65" width="145" height="205" rx="12" fill="#181323" stroke="#875cff" stroke-width="18"/><rect x="75" y="95" width="85" height="145" fill="#6b36c9"/>
<rect x="228" y="65" width="145" height="205" rx="12" fill="#5d533b" stroke="#bcae6d" stroke-width="18"/><rect x="258" y="95" width="85" height="145" fill="#87e4ff"/>
<rect x="410" y="65" width="145" height="205" rx="12" fill="#151515" stroke="#3a3a3a" stroke-width="18"/><rect x="440" y="95" width="85" height="145" fill="#050508"/>
<text x="118" y="305" fill="#b983ff" font-size="18" text-anchor="middle">Twilight</text><text x="300" y="305" fill="#87e4ff" font-size="18" text-anchor="middle">Mining</text><text x="482" y="305" fill="#fff" font-size="18" text-anchor="middle">Beyond</text></svg>
      <div class="visual-body">
        <h3>Portais</h3>
        <p>Twilight, Mining Dimension e The Beyond</p>
        <div class="buttons"><button onclick="openChapter(7)">Cap. 7</button><button onclick="openChapter(39)">Cap. 39</button><button onclick="openChapter(54)">Cap. 54</button></div>
      </div>
    </article>

    <article class="visual-card">

<svg viewBox="0 0 600 330"><rect width="600" height="330" fill="#0c1118"/><text x="300" y="38" fill="#fff" font-size="26" text-anchor="middle" font-weight="700">Multiblocks</text>
<rect x="55" y="70" width="200" height="190" fill="#24323d" stroke="#6c8799" stroke-width="7"/><rect x="92" y="105" width="126" height="120" fill="#6bd0ff" opacity=".3" stroke="#6bd0ff" stroke-width="5"/><path d="M120 70v190M160 70v190M200 70v190" stroke="#ff7b72" stroke-width="8"/>
<rect x="365" y="105" width="150" height="150" rx="10" fill="#2c3944" stroke="#7ee787" stroke-width="6"/><circle cx="440" cy="92" r="45" fill="#6cf5df" opacity=".65" stroke="#7ee787" stroke-width="7"/><path d="M440 50v84M398 92h84" stroke="#d8fff9" stroke-width="7"/>
<text x="155" y="300" fill="#ff7b72" font-size="18" text-anchor="middle">Fission Reactor</text><text x="440" y="300" fill="#7ee787" font-size="18" text-anchor="middle">SPS</text></svg>
      <div class="visual-body">
        <h3>Multiblocos</h3>
        <p>Fission Reactor, SPS, Turbines e altares</p>
        <div class="buttons"><button onclick="openChapter(37)">Cap. 37</button><button onclick="openChapter(38)">Cap. 38</button><button onclick="openChapter(52)">Cap. 52</button></div>
      </div>
    </article>

    <article class="visual-card">

<svg viewBox="0 0 600 330"><rect width="600" height="330" fill="#10151b"/><text x="300" y="38" fill="#fff" font-size="26" text-anchor="middle" font-weight="700">Structures</text>
<path d="M45 260V120l95-65 95 65v140z" fill="#5f4a38" stroke="#b99a72" stroke-width="7"/><rect x="110" y="185" width="60" height="75" fill="#17120e"/><path d="M75 135h130M75 165h130" stroke="#d7c19d" stroke-width="8"/>
<path d="M340 260V110l100-80 100 80v150z" fill="#2d243c" stroke="#8c67c7" stroke-width="7"/><rect x="380" y="130" width="120" height="130" fill="#17121f"/><circle cx="440" cy="190" r="30" fill="#623a90" stroke="#cfafff" stroke-width="5"/>
<text x="140" y="300" fill="#d7c19d" font-size="18" text-anchor="middle">Dungeon</text><text x="440" y="300" fill="#b983ff" font-size="18" text-anchor="middle">Boss Citadel</text></svg>
      <div class="visual-body">
        <h3>Estruturas</h3>
        <p>Dungeons, citadels, towers e arenas</p>
        <div class="buttons"><button onclick="openChapter(6)">Cap. 6</button><button onclick="openChapter(8)">Cap. 8</button><button onclick="openChapter(54)">Cap. 54</button></div>
      </div>
    </article>
    </div></section>`;
 else if(tab==='chapter'){
  let c=chapters.find(x=>x.id===current);
  box.innerHTML=`<section class="card">
<div class="install-row">
  <h2>${tr('Capítulo','Chapter')} ${c.id} — ${chapterTitle(c)}</h2>
  <button class="favorite-btn ${isFavorite('chapter',c.id)?'active':''}" onclick="toggleFavorite('chapter',${c.id})">${isFavorite('chapter',c.id)?'★ '+tr('Remover dos favoritos','Remove from favorites'):'☆ '+tr('Adicionar aos favoritos','Add to favorites')}</button>
</div>
${renderChapterToolbar(c)}
<p class="chapter-summary">${escapeHtml(chapterSummary(c))}</p>
${renderChapterConnections(c)}
${renderDimensionOverview(false,c.id)}
${renderRecoveredGuides(c)}
<h3 class="chapter-checklist-title">${tr('Checklist deste capítulo','Chapter checklist')}</h3>
<div class="check">${tasks(c).map((t,i)=>`<label><input type="checkbox" data-i="${i}" ${state[k(c.id,i)]?'checked':''}> ${t}</label>`).join('')}</div>
<div class="note-box">
  <h3>${tr('Notas pessoais','Personal notes')}</h3>
  <textarea id="chapterNote" placeholder="${tr('Escreva suas anotações sobre este capítulo...','Write your notes about this chapter...')}">${escapeHtml(getNote('chapter',c.id))}</textarea>
  <div class="note-actions">
    <button class="action" onclick="saveCurrentChapterNote()">${tr('Salvar nota','Save note')}</button>
    <button class="action" onclick="deleteCurrentChapterNote()">${tr('Apagar nota','Delete note')}</button>
    <span class="saved-note" id="noteStatus"></span>
  </div>
</div>
${renderChapterToolbar(c,true)}
</section>`;
  box.querySelectorAll('input[type="checkbox"][data-i]').forEach(x=>x.onchange=()=>{state[k(c.id,+x.dataset.i)]=x.checked;update();nav();});
 }


 else if(tab==='onlineimages'){
   box.innerHTML=`<section class="card">
    <h2>${tr('Galerias oficiais dos mods','Official mod galleries')}</h2>
    <p class="muted">${tr('As imagens não são copiadas para o ZIP; são exibidas diretamente da fonte oficial.','Images are not copied into the ZIP; they are displayed directly from the official source.')}</p>
    <div class="dashboard-grid">
      <div class="tool-card">
        <h3>${tr('Fonte principal','Primary source')}: Modrinth</h3>
        <label>${tr('Selecione um mod','Select a mod')}
          <select id="onlineImageSource">${ONLINE_IMAGE_SOURCES.map(s=>`<option value="${s.id}">${s.name}</option>`).join('')}</select>
        </label>
        <div class="sync-actions">
          <button class="action" type="button" id="loadOnlineImages">${tr('Carregar imagens','Load images')}</button>
          <button class="action" type="button" id="refreshOnlineImages">${tr('Atualizar galeria','Refresh gallery')}</button>
        </div>
        <div class="source-priority">
          <div><b>1.</b> Modrinth official project gallery</div>
          <div><b>2.</b> CurseForge official project page</div>
          <div><b>3.</b> Official wiki/documentation linked from the project</div>
        </div>
      </div>
      <div class="tool-card">
        <h3>${tr('Como funciona','How it works')}</h3>
        <p>${tr('O app consulta a API pública do Modrinth, carrega a galeria do projeto e mantém um cache de metadados por sete dias.','The app queries the public Modrinth API, loads the project gallery, and keeps a seven-day metadata cache.')}</p>
        <p class="muted">${tr('Alguns projetos não publicam screenshots no Modrinth. Nesses casos, use o botão da página oficial/CurseForge.','Some projects do not publish screenshots on Modrinth. In those cases, use the official/CurseForge page button.')}</p>
      </div>
    </div>
    <div id="onlineGalleryResults" style="margin-top:14px"></div>
   </section>`;
   setTimeout(()=>{
     document.getElementById('loadOnlineImages').addEventListener('click',()=>loadOnlineImages(false));
     document.getElementById('refreshOnlineImages').addEventListener('click',()=>loadOnlineImages(true));
     loadOnlineImages(false);
   },0);
 }

 else if(tab==='items'){
   if(currentItemId){
     const it=ITEM_PAGES.find(x=>x.id===currentItemId);
     box.innerHTML=`<section class="card">
       <button class="action" onclick="currentItemId=null;render()">← ${tr('Todos os itens','All items')}</button>
       <div class="item-page-head"><div><h2>${L(it)}</h2><span class="pill">${it.mod}</span></div>
       <button class="favorite-btn ${isFavorite('item',it.id)?'active':''}" onclick="toggleFavorite('item','${it.id}')">${isFavorite('item',it.id)?'★':'☆'} ${tr('Favorito','Favorite')}</button></div>
       <div class="dashboard-grid">
        <div class="data-card"><h3>${tr('Receita/cadeia','Recipe/chain')}</h3>${it.recipe.map((r,i)=>`<div class="recipe-step">${i+1}. ${r}</div>`).join('')}</div>
        <div class="data-card"><h3>${tr('Máquina necessária','Required machine')}</h3><p>${L(it.machine)}</p><h3>${tr('Dimensão/local','Dimension/location')}</h3><p>${L(it.dimension)}</p></div>
        <div class="data-card"><h3>${tr('Usos','Uses')}</h3><ul>${L(it.uses).map(x=>`<li>${x}</li>`).join('')}</ul></div>
        <div class="data-card"><h3>${tr('Capítulos relacionados','Related chapters')}</h3>${it.related.map(n=>`<button class="action" onclick="openChapter(${n})">${tr('Capítulo','Chapter')} ${n}</button>`).join(' ')}</div>
       </div>
       <div class="note-box"><h3>${tr('Notas pessoais','Personal notes')}</h3><textarea id="itemNote">${escapeHtml(getNote('item',it.id))}</textarea><div class="note-actions"><button class="action" onclick="saveItemNote('${it.id}')">${tr('Salvar nota','Save note')}</button><span id="itemNoteStatus" class="saved-note"></span></div></div>
     </section>`;
   } else {
     box.innerHTML=`<section class="card"><h2>${tr('Páginas de itens','Item pages')}</h2><div class="item-list">${ITEM_PAGES.map(it=>`<div class="data-card"><h3>${L(it)}</h3><span class="pill">${it.mod}</span><p>${L(it.machine)}</p><button class="action" onclick="openItem('${it.id}')">${tr('Abrir página','Open page')}</button></div>`).join('')}</div></section>`;
   }
 }

 else if(tab==='encyclopedia'){
  if(encyclopediaCurrent){
   const x=encyclopediaAll().find(i=>i.id===encyclopediaCurrent);
   box.innerHTML=`<section class="card"><div class="install-row"><button class="action" onclick="encyclopediaCurrent=null;render()">← Back</button><button class="favorite-btn ${isFavorite('encyclopedia',x.id)?'active':''}" onclick="toggleFavorite('encyclopedia','${x.id}')">${isFavorite('encyclopedia',x.id)?'★':'☆'} ${tr('Favorito','Favorite')}</button></div><h2>${escapeHtml(x.name)}</h2><span class="pill">${escapeHtml(x.mod)}</span><span class="pill">${escapeHtml(x.category)}</span><div class="${x.verified?'verified':'needs-jei'}">${x.verified?tr('Receita confirmada','Recipe confirmed'):tr('Confirme a receita no JEI da sua versão','Verify the recipe in your version\'s JEI')}</div>${x.image?`<img class="encyclopedia-image" src="${escapeHtml(x.image)}" alt="${escapeHtml(x.name)}" loading="lazy">`:''}<div class="dashboard-grid"><div class="encyclopedia-section"><h3>Description</h3><p>${escapeHtml(x.description)}</p></div><div class="encyclopedia-section"><h3>Recipe / chain</h3>${(x.recipe||[]).map((r,i)=>`<div class="recipe-step">${i+1}. ${escapeHtml(r)}</div>`).join('')}</div><div class="encyclopedia-section"><h3>Uses</h3><ul>${(x.uses||[]).map(v=>`<li>${escapeHtml(v)}</li>`).join('')}</ul></div><div class="encyclopedia-section"><h3>Automation</h3><p>${escapeHtml(x.automation)}</p></div><div class="encyclopedia-section"><h3>Location</h3><p>${escapeHtml(x.location)}</p></div><div class="encyclopedia-section"><h3>Common issues</h3><ul>${(x.issues||[]).map(v=>`<li>${escapeHtml(v)}</li>`).join('')}</ul></div>${(x.tips||[]).length?`<div class="encyclopedia-section"><h3>${tr('Dicas','Tips')}</h3><ul>${x.tips.map(v=>`<li>${escapeHtml(v)}</li>`).join('')}</ul></div>`:''}</div><button class="action" onclick="openChapter(${x.chapter})">Chapter ${x.chapter}</button><div class="note-box"><h3>${tr('Notas pessoais','Personal notes')}</h3><textarea id="encyclopediaNote">${escapeHtml(getNote('encyclopedia',x.id))}</textarea><div class="note-actions"><button class="action" onclick="saveNote('encyclopedia','${x.id}',document.getElementById('encyclopediaNote').value);document.getElementById('encyclopediaNoteStatus').textContent='${tr('Nota salva.','Note saved.')}'">${tr('Salvar nota','Save note')}</button><span id="encyclopediaNoteStatus" class="saved-note"></span></div></div></section>`;
  } else {
   const mods=[...new Set(encyclopediaAll().map(x=>x.mod))].sort(),cats=[...new Set(encyclopediaAll().map(x=>x.category))].sort();
   box.innerHTML=`<section class="card"><h2>Enciclopédia</h2><div class="encyclopedia-toolbar"><input id="encySearch" placeholder="Pesquisar item, máquina, boss ou recurso..."><select id="encyMod"><option value="">Todos os mods</option>${mods.map(m=>`<option>${m}</option>`).join('')}</select><select id="encyCat"><option value="">Todas as categorias</option>${cats.map(c=>`<option>${c}</option>`).join('')}</select></div><div class="sync-actions"><button id="exportEncy" class="action">Exportar base</button><label class="action">Importar base JSON<input id="importEncy" type="file" accept="application/json" hidden></label></div><div id="encyResults" style="margin-top:14px"></div></section>`;
   setTimeout(()=>{['encySearch','encyMod','encyCat'].forEach(id=>document.getElementById(id).addEventListener(id==='encySearch'?'input':'change',renderEncyclopediaList));document.getElementById('exportEncy').onclick=exportEncyclopedia;document.getElementById('importEncy').onchange=e=>e.target.files[0]&&importEncyclopediaFile(e.target.files[0]);renderEncyclopediaList();},0);
  }
 }

 else if(tab==='multiblocks'){
   box.innerHTML=`<section class="card"><h2>${tr('Visualizador 3D de multiblocos','3D multiblock viewer')}</h2><p class="muted">${tr('Veja todos os multiblocos cadastrados por camada, com rotação, zoom, transparência e vista explodida.','Inspect every catalogued multiblock layer by layer with rotation, zoom, transparency, and exploded view.')}</p><div id="multiblockViewer"></div><h3>${tr('Regras de construção','Building rules')}</h3><div class="tool-grid multiblock-list">${MULTIBLOCKS.map(m=>`<div class="tool-card" data-search-id="${m.id}"><h3>${L(m)}</h3><span class="pill">${m.status}</span><p><b>${L(m.size)}</b></p><ul>${L(m.rules).map(r=>`<li>${r}</li>`).join('')}</ul><button class="action" data-mb="${m.id}">${tr('Ver em 3D','View in 3D')}</button><div class="source-note">${m.source}</div></div>`).join('')}</div></section>`;
   setTimeout(()=>{render3DViewer();document.querySelectorAll('[data-mb]').forEach(b=>b.addEventListener('click',()=>{activeMultiblockId=b.dataset.mb;viewerLayer=-1;render3DViewer();document.getElementById('multiblockViewer').scrollIntoView({behavior:'smooth'})}))},0);
 }
 else if(tab==='calculators'){
   box.innerHTML=`<section class="card"><h2>${tr('Calculadoras interativas','Interactive calculators')}</h2><div class="tool-grid">
    <div class="tool-card"><h3>Antimatter</h3><div class="form-row"><label>Pellets<input id="antiPellets" type="number" value="1"></label><label>mB/pellet<input id="antiMbPellet" type="number" value="1000"></label><label>Polonium/Antimatter<input id="antiPolRatio" type="number" value="1000"></label><label>Rate mB/t<input id="antiRate" type="number" value="2"></label><label>FE per mB<input id="antiEnergy" type="number" value="400000000"></label></div><button class="action" onclick="calcAntimatter()">Calculate</button><div id="antiResult" class="result"></div></div>
    <div class="tool-card"><h3>${tr('Blocos comprimidos','Compressed blocks')}</h3><div class="form-row"><label>${tr('Quantidade final','Final quantity')}<input id="compQty" type="number" value="1"></label><label>${tr('Nível','Level')}<input id="compLevel" type="number" value="5"></label></div><button class="action" onclick="calcCompressed()">Calculate</button><div id="compResult" class="result"></div></div>
    <div class="tool-card"><h3>Powah tiers</h3><div class="form-row"><label>Tier<select id="powTier"><option>Starter</option><option>Basic</option><option>Hardened</option><option>Blazing</option><option>Niotic</option><option>Spirited</option><option>Nitro</option></select></label><label>Devices<input id="powDevices" type="number" value="4"></label><label>Crystals/device<input id="powPer" type="number" value="4"></label></div><button class="action" onclick="calcPowah()">Calculate</button><div id="powResult" class="result"></div></div>
    <div class="tool-card"><h3>Mana</h3><div class="form-row"><label>Crafts<input id="manaCrafts" type="number" value="10"></label><label>Mana/craft<input id="manaCost" type="number" value="500000"></label></div><button class="action" onclick="calcMana()">Calculate</button><div id="manaResult" class="result"></div></div>
    <div class="tool-card"><h3>Blood Magic LP</h3><div class="form-row"><label>Slate<select id="lpType"><option value="blank">Blank</option><option value="reinforced">Reinforced</option><option value="imbued">Imbued</option><option value="demonic">Demonic</option><option value="ethereal">Ethereal</option></select></label><label>Count<input id="lpCount" type="number" value="64"></label></div><button class="action" onclick="calcLP()">Calculate</button><div id="lpResult" class="result"></div></div>
     <div class="tool-card"><h3>ATM Star materials</h3><label>Stars<input id="starCount" type="number" value="1"></label><label>${tr('Materiais por Star','Materials per Star')}<textarea id="starMaterials" rows="7">Antimatter Pellets: 1000\nGaia Spirits: 128\nNether Stars: 10000\nATM Alloy Blocks: 64</textarea></label><button class="action" onclick="calcStar()">Calculate</button><div id="starResult" class="result"></div></div>
     <div class="tool-card"><h3>${tr('Produção e consumo de energia','Power production and consumption')}</h3><div class="form-row"><label>Generators<input id="energyGenerators" type="number" value="4"></label><label>FE/t each<input id="energyPerGenerator" type="number" value="250000"></label><label>Consumption FE/t<input id="energyConsumption" type="number" value="700000"></label><label>Safety %<input id="energyMargin" type="number" value="20"></label></div><button class="action" onclick="calcEnergy()">Calculate</button><div id="energyResult" class="result"></div></div>
     <div class="tool-card"><h3>Induction Matrix</h3><div class="form-row"><label>Cells<input id="matrixCells" type="number" value="8"></label><label>FE/cell<input id="matrixCellCapacity" type="number" value="1000000000"></label><label>Providers<input id="matrixProviders" type="number" value="4"></label><label>FE/t provider<input id="matrixProviderRate" type="number" value="1000000"></label></div><button class="action" onclick="calcMatrix()">Calculate</button><div id="matrixResult" class="result"></div></div>
     <div class="tool-card"><h3>${tr('Reator configurável','Configurable reactor')}</h3><div class="form-row"><label>Burn mB/t<input id="reactorBurn" type="number" step="0.1" value="5"></label><label>FE per mB<input id="reactorEnergy" type="number" value="1000000"></label><label>Coolant/mB<input id="reactorCoolant" type="number" value="20000"></label><label>Fuel buffer mB<input id="reactorFuel" type="number" value="100000"></label></div><button class="action" onclick="calcReactor()">Calculate</button><div id="reactorResult" class="result"></div></div>
     <div class="tool-card"><h3>${tr('Estoque com margem de segurança','Stock with safety margin')}</h3><div class="form-row"><label>Target<input id="stockTarget" type="number" value="10000"></label><label>Current<input id="stockCurrent" type="number" value="2500"></label><label>Safety %<input id="stockMargin" type="number" value="20"></label><label>Batch size<input id="stockBatch" type="number" value="64"></label></div><button class="action" onclick="calcStock()">Calculate</button><div id="stockResult" class="result"></div></div>
   </div></section>`;
 }
 else if(tab==='next'){
   const n=nextRecommendation(),c=chapters.find(x=>x.id===n.chapter);
   box.innerHTML=`<section class="card"><h2>${tr('O que devo fazer agora?','What should I do next?')}</h2><div class="next-card"><h3>${tr('Capítulo','Chapter')} ${c.id} — ${chapterTitle(c)}</h3><p>${n.why}</p><button class="action" onclick="openChapter(${c.id})">${tr('Começar agora','Start now')}</button></div><p class="muted">${tr('A recomendação usa seus checkboxes salvos e prioriza storage, energia, recursos renováveis e endgame.','The recommendation uses your saved checkboxes and prioritizes storage, power, renewable resources, and endgame.')}</p></section>`;
 }
 else if(tab==='equipment'){
   box.innerHTML=`<section class="card"><h2>${tr('Planejador de equipamento','Equipment planner')}</h2><div class="dashboard-grid"><div class="tool-card">
    <div class="form-row"><label>${tr('Base','Base')}<select id="eqBase"><option value="20">Allthemodium</option><option value="35">Vibranium</option><option value="50">Unobtainium</option><option value="55">MekaSuit/Meka-Tool</option></select></label><label>${tr('Perfect Gems','Perfect Gems')}<input id="eqGems" type="number" min="0" max="8" value="3"></label><label>${tr('Encantamentos fortes','Strong enchantments')}<input id="eqEnchants" type="number" min="0" max="12" value="6"></label></div>
    <h3>Affixes</h3>${[['Current HP Damage',18],['Armor Piercing',15],['Life Steal',15],['Critical Chance',10],['Critical Damage',12],['Max Health',12],['Movement Speed',6],['Damage Reduction',14]].map(x=>`<label><input class="eq-aff" type="checkbox" value="${x[1]}"> ${x[0]}</label><br>`).join('')}
    <button class="action" onclick="equipmentScore()">Score build</button></div><div class="tool-card"><div class="score" id="eqScore">0</div><p id="eqAdvice">${tr('Selecione sua build e calcule.','Select your build and calculate.')}</p><h3>${tr('Build recomendada para bosses','Recommended boss build')}</h3><p>Current HP Damage + Armor Piercing + Life Steal + Critical Damage, Perfect Gems, strong Protection and Unbreaking/Mending where applicable.</p></div></div></section>`;
 }
 else if(tab==='resources'){
   box.innerHTML=`<section class="card"><h2>${tr('Prioridade de recursos','Resource priorities')}</h2><div class="tool-grid">${RESOURCE_DATA.map(r=>`<div class="tool-card priority-${r.priority}"><h3>${L(r)}</h3><div class="kv"><b>${tr('Prioridade','Priority')}</b><span>${r.priority}</span></div><div class="kv"><b>${tr('Estoque alvo','Stock target')}</b><span>${r.stock}</span></div><div class="kv"><b>${tr('Melhor método','Best method')}</b><span>${r.method}</span></div><button class="action" onclick="openChapter(${r.chapter})">${tr('Capítulo','Chapter')} ${r.chapter}</button></div>`).join('')}</div></section>`;
 }
 else if(tab==='bosses'){
   box.innerHTML=`<section class="card"><h2>Boss tracker</h2><div class="tool-grid">${BOSS_DATA.map(b=>`<div class="tool-card boss-row" data-search-id="${b.id}"><input type="checkbox" ${trackers.bosses[b.id]?'checked':''} onchange="trackers.bosses['${b.id}']=this.checked;saveTrackers()"><div><h3>${L(b)}</h3><div class="kv"><b>Location</b><span>${b.location}</span></div><div class="kv"><b>Preparation</b><span>${b.prep}</span></div><div class="kv"><b>Mechanics</b><span>${b.mechanics}</span></div><div class="kv"><b>Drops</b><span>${b.drops}</span></div><div class="kv"><b>Repeatability</b><span>${b.repeat}</span></div><button class="action" onclick="openChapter(${b.chapter})">${tr('Abrir guia','Open guide')}</button></div></div>`).join('')}</div></section>`;
 }
 else if(tab==='dimensions'){
   box.innerHTML=`<section class="card"><h2>${tr('Painel de dimensões','Dimension dashboard')}</h2><p class="muted">${tr('Marque cada dimensão depois de visitá-la.','Check each dimension after you visit it.')}</p></section>${renderDimensionOverview(true)}`;
 }

 else if(tab==='world3d'){
   box.innerHTML=`<section class="card">
    <h2>${tr('Mundo 3D interativo','Interactive 3D world')}</h2>
    <p class="muted">${tr('Mapa esquemático por dimensão. Biomas, estruturas e bosses são zonas típicas; coordenadas exatas dependem da seed do seu mundo.','Schematic map by dimension. Biomes, structures, and bosses show typical zones; exact coordinates depend on your world seed.')}</p>
    <div class="world3d-wrap">
      <div class="world3d-stage">
        <div id="worldScene" class="world3d-scene"></div>
        <div id="worldTooltip" class="world-tooltip"></div>
      </div>
      <aside class="world-panel">
        <div class="world-controls">
          <label>${tr('Dimensão','Dimension')}
            <select id="worldDimension">${Object.entries(WORLD3D_DATA).map(([id,d])=>`<option value="${id}" ${worldState.dimension===id?'selected':''}>${escapeHtml(currentLang==='en'?d.en:d.pt)}</option>`).join('')}</select>
          </label>
          <div><b id="worldDimensionName">Overworld</b></div>
          <label>${tr('Rotação','Rotation')}<input id="worldRotation" type="range" min="-180" max="180" value="0"></label>
          <label>Zoom<input id="worldZoom" type="range" min="0.65" max="1.45" step="0.05" value="1"></label>
          <div class="layer-toggle">
            <label class="form-check"><input class="form-check-input" type="checkbox" checked data-world-filter="ore"><span class="form-check-label">Ores</span></label>
            <label class="form-check"><input class="form-check-input" type="checkbox" checked data-world-filter="structure"><span class="form-check-label">${tr('Estruturas','Structures')}</span></label>
            <label class="form-check"><input class="form-check-input" type="checkbox" checked data-world-filter="boss"><span class="form-check-label">Bosses</span></label>
            <label class="form-check"><input class="form-check-input" type="checkbox" checked data-world-filter="biome"><span class="form-check-label">${tr('Biomas','Biomes')}</span></label>
            <label class="form-check"><input class="form-check-input" type="checkbox" checked data-world-filter="portal"><span class="form-check-label">${tr('Portais','Portals')}</span></label>
            <label class="form-check"><input class="form-check-input" type="checkbox" checked data-world-filter="resource"><span class="form-check-label">${tr('Recursos','Resources')}</span></label>
          </div>
          <h3>${tr('Salvar coordenada do seu mundo','Save coordinates from your world')}</h3>
          <label>${tr('Nome','Name')}<input id="markerName" placeholder="Digital Miner base"></label>
          <label>${tr('Tipo','Type')}<select id="markerType"><option value="ore">Ore</option><option value="structure">Structure</option><option value="boss">Boss</option><option value="biome">Biome</option><option value="portal">Portal</option><option value="resource">Resource</option></select></label>
          <div class="form-row"><label>X<input id="markerX" type="number" value="0"></label><label>Y<input id="markerY" type="number" value="64"></label><label>Z<input id="markerZ" type="number" value="0"></label></div>
          <button class="action" id="addWorldMarker" type="button">${tr('Adicionar marcador','Add marker')}</button>
          <div id="worldMarkerList" class="marker-list"></div>
          <div class="world-legend">
            <div class="legend-item"><span class="legend-dot tile-forest"></span>${tr('Floresta','Forest')}</div>
            <div class="legend-item"><span class="legend-dot tile-mountain"></span>${tr('Montanha','Mountain')}</div>
            <div class="legend-item"><span class="legend-dot tile-desert"></span>${tr('Deserto','Desert')}</div>
            <div class="legend-item"><span class="legend-dot tile-deep"></span>Deep Dark</div>
          </div>
        </div>
      </aside>
    </div>
   </section>`;
   setTimeout(setupWorld3D,0);
 }


 else if(tab==='realworld'){
   box.innerHTML=`<section class="card">
    <h2>${tr('Mapa 3D real por mundo/seed','Real 3D map from world/seed')}</h2>
    <p class="muted">${tr('Para obter dados reais, execute o importador incluído no ZIP na pasta do seu mundo e carregue o JSON gerado aqui. O processamento acontece localmente.','To get real data, run the importer included in the ZIP against your world folder and load the generated JSON here. Processing stays local.')}</p>
    <div class="real-import-grid">
      <div class="real-map-stage">
        <div id="realMapScene" class="real-map-scene"></div>
        <div id="realMapTooltip" class="real-tooltip"></div>
      </div>
      <aside class="world-panel">
        <div id="realDrop" class="import-drop"><b>📂 ${tr('Importar atm10-world-map.json','Import atm10-world-map.json')}</b><div class="muted">${tr('Clique ou arraste o arquivo aqui','Click or drop the file here')}</div></div>
        <input id="realWorldFile" type="file" accept="application/json" hidden>
        <div class="sync-actions"><button id="realWorldExport" class="action" type="button" ${importedWorld?'':'disabled'}>${tr('Exportar mapa','Export map')}</button><button id="realWorldClear" class="action" type="button" ${importedWorld?'':'disabled'}>${tr('Limpar mapa','Clear map')}</button></div>
        <p id="realWorldStatus" class="muted">${importedWorld?tr('Mapa restaurado deste dispositivo.','Map restored from this device.'):tr('Nenhum mundo importado ainda.','No imported world yet.')}</p>
        <div class="map-metrics">
          <div class="map-metric"><span>${tr('Mundo','World')}</span><b id="realWorldName">—</b></div>
          <div class="map-metric"><span>Seed</span><b id="realSeed">—</b></div>
          <div class="map-metric"><span>Chunks</span><b id="realChunkCount">0</b></div>
          <div class="map-metric"><span>${tr('Biomas','Biomes')}</span><b id="realBiomeCount">0</b></div>
          <div class="map-metric"><span>Ores</span><b id="realOreCount">0</b></div>
          <div class="map-metric"><span>${tr('Estruturas','Structures')}</span><b id="realStructureCount">0</b></div>
        </div>
        <div class="world-controls">
          <label>${tr('Dimensão','Dimension')}<select id="realDimension"></select></label>
          <label>${tr('Camada visual','Visual layer')}<select id="realMode"><option value="biome">Biomes</option><option value="height">Terrain height</option><option value="ores">Detected ores</option><option value="structures">Structures</option></select></label>
          <label>${tr('Rotação','Rotation')}<input id="realRotation" type="range" min="-180" max="180" value="0"></label>
          <label>Zoom<input id="realZoom" type="range" min="0.5" max="1.7" step="0.05" value="1"></label>
        </div>
        <div class="import-help">
          <h3>${tr('Como gerar o mapa','How to generate the map')}</h3>
          <ol><li>${tr('Extraia o ZIP do app.','Extract the app ZIP.')}</li><li>${tr('Abra o terminal na pasta extraída.','Open a terminal in the extracted folder.')}</li><li><code>python world_importer.py /caminho/do/mundo --output atm10-world-map.json --radius 16</code></li><li>${tr('Importe o JSON nesta tela.','Import the JSON on this screen.')}</li></ol>
          <p>${tr('Use --radius 0 apenas em mundos pequenos; mapas completos podem gerar arquivos muito grandes.','Use --radius 0 only for small worlds; complete maps can create very large files.')}</p>
        </div>
      </aside>
    </div>
   </section>`;
   setTimeout(setupRealWorldImport,0);
 }

 else if(tab==='base'){
   box.innerHTML=`<section class="card"><h2>${tr('Planejador de base','Base planner')}</h2><div class="dashboard-grid"><div class="tool-card"><div class="form-row"><label>Width<input id="baseW" type="number" value="256"></label><label>Length<input id="baseL" type="number" value="256"></label><label>Module size<input id="moduleSize" type="number" value="32"></label><label>Tunnel width<input id="tunnelSize" type="number" value="5"></label></div><button class="action" onclick="planBase()">Generate plan</button><div class="warning">Keep AE2, boss arenas, mob farms, and nuclear systems in separate chunks or dimensions. Avoid placing critical multiblocks across unnecessary chunk borders.</div></div><div class="tool-card"><h3>${tr('Plano','Plan')}</h3><div id="baseResult" class="result"></div></div></div><h3>${tr('Distritos recomendados','Recommended districts')}</h3><div class="tool-grid">${['Central Hub + terminals','AE2 Core + CPU Hall','Tech District','Magic District','Farm District','Create District','Nuclear Zone (The Beyond)','Creative + Starry Bee Vault'].map((x,i)=>`<div class="data-card"><b>${i+1}. ${x}</b><p class="muted">${i===0?'Use 32×32 or 48×48 modules.':'Leave 5–7 block technical tunnels and future expansion space.'}</p></div>`).join('')}</div></section>`;
 }
 else if(tab==='troubleshoot'){
   box.innerHTML=`<section class="card"><h2>${tr('Pesquisa de problemas','Troubleshooting search')}</h2><div class="form-row"><label>${tr('Descreva o problema','Describe the problem')}<input id="troubleQuery" placeholder="Digital Miner not working"></label></div><button class="action" onclick="runTrouble()">Diagnose</button><div id="troubleResults"></div><p class="muted">${tr('Ordem universal: energia → chunk → input → output → receita → pipes → redstone → atualização.','Universal order: power → chunk → input → output → recipe → pipes → redstone → update.')}</p></section>`;
 }


 else if(tab==='cloud'){
   box.innerHTML=`<section class="card">
    <h2>${tr('Sincronização na nuvem','Cloud sync')}</h2>
    <p class="muted">${tr('Sincronize progresso, favoritos, notas, aparência, trackers e marcadores entre dispositivos usando seu próprio projeto Supabase.','Sync progress, favorites, notes, appearance, trackers, and markers across devices using your own Supabase project.')}</p>
    <div class="cloud-grid">
      <div class="tool-card">
        <h3>${tr('Configuração da nuvem','Cloud configuration')}</h3>
        <div id="cloudStatus" class="status-line"></div>
        <label>${tr('URL do projeto','Project URL')}<input id="cloudUrl" value="${escapeHtml(cloudConfig.url||'')}" placeholder="https://xxxxx.supabase.co"></label>
        <label>${tr('Chave pública','Publishable key')}<input id="cloudKey" type="password" value="${escapeHtml(cloudConfig.key||'')}" placeholder="sb_publishable_... or anon key"></label>
        <label>${tr('Email','Email')}<input id="cloudEmail" type="email" value="${escapeHtml(cloudConfig.email||'')}"></label>
        <label>${tr('Senha','Password')}<input id="cloudPassword" type="password"></label>
        <div class="secret-warning">${tr('Nunca use service_role ou secret key neste aplicativo.','Never use a service_role or secret key in this app.')}</div>
        <div class="sync-actions">
          <button class="action" type="button" id="cloudSaveConfig">${tr('Salvar configuração','Save configuration')}</button>
          <button class="action" type="button" id="cloudSignup">${tr('Criar conta','Create account')}</button>
          <button class="action" type="button" id="cloudSignin">${tr('Entrar','Sign in')}</button>
          <button class="action" type="button" id="cloudSignout">${tr('Sair','Sign out')}</button>
        </div>
      </div>
      <div class="tool-card">
        <h3>${tr('Dados sincronizados','Synced data')}</h3>
        <label class="form-check"><input id="cloudMerge" class="form-check-input" type="checkbox" checked><span class="form-check-label">${tr('Mesclar automaticamente','Automatically merge')}</span></label>
        <div class="sync-actions">
          <button class="action" type="button" id="cloudUpload">${tr('Enviar para nuvem','Upload to cloud')}</button>
          <button class="action" type="button" id="cloudDownload">${tr('Baixar da nuvem','Download from cloud')}</button>
        </div>
        <div class="kv"><b>${tr('Última sincronização','Last sync')}</b><span id="cloudLastSync">—</span></div>
        <p class="muted">${tr('Os dados são criptografados em trânsito por HTTPS e protegidos por RLS no Supabase.','Data is encrypted in transit by HTTPS and protected by Supabase RLS.')}</p>
        <div id="cloudLog" class="cloud-log"></div>
      </div>
    </div>
    <div class="source-note">Execute o arquivo <code>supabase_setup.sql</code> no SQL Editor do seu projeto antes de sincronizar.</div>
   </section>`;
   setTimeout(()=>{
    renderCloudStatus();
    document.getElementById('cloudSaveConfig')?.addEventListener('click',saveCloudConfig);
    document.getElementById('cloudSignup')?.addEventListener('click',()=>cloudAuth('signup'));
    document.getElementById('cloudSignin')?.addEventListener('click',()=>cloudAuth('signin'));
    document.getElementById('cloudSignout')?.addEventListener('click',cloudLogout);
    document.getElementById('cloudUpload')?.addEventListener('click',cloudUpload);
    document.getElementById('cloudDownload')?.addEventListener('click',cloudDownload);
   },0);
 }
 else if(tab==='updates'){
   box.innerHTML=`<section class="card">
    <h2>${tr('Sistema de atualizações automáticas','Automatic update system')}</h2>
    <div class="update-grid">
      <div class="tool-card">
        <h3>${tr('Configuração','Configuration')}</h3>
        <label class="form-check"><input id="autoUpdates" class="form-check-input" type="checkbox" ${updateConfig.auto?'checked':''}><span class="form-check-label">${tr('Verificar uma vez por dia','Check once per day')}</span></label>
        <label>${tr('Feed do guia','Guide feed')}<input id="guideFeed" value="${escapeHtml(updateConfig.guideFeed||'./updates.json')}"></label>
        <label>${tr('Chave API CurseForge opcional','Optional CurseForge API key')}<input id="curseforgeKey" type="password" value="${escapeHtml(updateConfig.curseforgeApiKey||'')}"></label>
        <div class="secret-warning">${tr('Sem chave CurseForge, o app usa o changelog oficial do GitHub como alternativa.','Without a CurseForge key, the app uses the official GitHub changelog as a fallback.')}</div>
        <div class="sync-actions"><button class="action" id="saveUpdateConfig" type="button">${tr('Salvar configuração','Save configuration')}</button><button class="action" id="checkUpdatesNow" type="button">${tr('Verificar agora','Check now')}</button></div>
        <div class="kv"><b>${tr('Última verificação','Last checked')}</b><span id="updateLastChecked">—</span></div>
        <div id="updateStatus" class="muted"></div>
      </div>
      <div class="tool-card"><h3>${tr('Versão do guia','Guide version')}</h3><div id="guideUpdateResult"></div></div>
      <div class="tool-card"><h3>${tr('Versão ATM10 detectada','Detected ATM10 version')}</h3><div id="atmUpdateResult"></div></div>
    </div>
   </section>`;
   setTimeout(()=>{
    renderUpdateStatus();
    document.getElementById('saveUpdateConfig')?.addEventListener('click',saveUpdateConfig);
    document.getElementById('checkUpdatesNow')?.addEventListener('click',()=>{saveUpdateConfig();checkUpdates(true);});
   },0);
 }

 else if(tab==='favorites'){
   const favorites=Object.keys(personalData.favorites||{}).filter(key=>personalData.favorites[key]).map(personalTargetMeta).filter(Boolean);
   const notes=Object.entries(personalData.notes||{}).filter(([key,val])=>val && val.trim());
   box.innerHTML=`<section class="card">
     <h2>${tr('Favoritos e notas','Favorites and notes')}</h2>
     <h3>${tr('Todos os favoritos','All favorites')}</h3>
     <div class="favorites-list">
       ${favorites.length?favorites.map(x=>`<div class="favorite-card"><span class="pill">${escapeHtml(x.kind)}</span><h3>${escapeHtml(x.label)}</h3><button class="action" onclick="openPersonalTarget(decodeURIComponent('${encodeURIComponent(x.key)}'))">${tr('Abrir','Open')}</button></div>`).join(''):`<p class="muted">${tr('Nenhum favorito ainda.','No favorites yet.')}</p>`}
     </div>
     <h3>${tr('Minhas notas','My notes')}</h3>
     <div class="favorites-list">
       ${notes.length?notes.map(([key,val])=>{const x=personalTargetMeta(key);return x?`<div class="favorite-card"><span class="pill">${escapeHtml(x.kind)}</span><h3>${escapeHtml(x.label)}</h3><p>${escapeHtml(val).replace(/\n/g,'<br>')}</p><button class="action" onclick="openPersonalTarget(decodeURIComponent('${encodeURIComponent(key)}'))">${tr('Abrir','Open')}</button></div>`:''}).join(''):`<p class="muted">${tr('Nenhuma nota ainda.','No notes yet.')}</p>`}
     </div>
   </section>`;
 }
 else if(tab==='flows'){
  const data=window.ATM10_COMPANION_DATA.flowcharts;
  box.innerHTML=`<section class="card"><h2>${tr('Fluxogramas da progressão','Progression flowcharts')}</h2><p class="muted">${tr('Cada etapa abre o capítulo correspondente.','Each step opens its related chapter.')}</p>${data.map(f=>`<article class="tool-card"><h3>${escapeHtml(L(f))}</h3><div class="flow-line">${f.steps.map((s,i)=>`${i?'<span class="flow-arrow">→</span>':''}<button class="action flow-step" onclick="openChapter(${s[1]})">${escapeHtml(s[0])}<br><small>${tr('Capítulo','Chapter')} ${s[1]}</small></button>`).join('')}</div></article>`).join('')}</section>`;
 }
 else if(tab==='techtree'){
  const data=window.ATM10_COMPANION_DATA.techTree;
  box.innerHTML=`<section class="card"><h2>${tr('Árvore tecnológica','Technology tree')}</h2><div class="tech-columns">${data.map(group=>`<article class="tool-card"><h3>${escapeHtml(L(group))}</h3>${group.nodes.map(n=>`<div class="tech-node"><button class="action" onclick="openChapter(${n[1]})">${escapeHtml(n[0])}</button>${n[2].length?`<small>${tr('Requer','Requires')}: ${n[2].map(escapeHtml).join(', ')}</small>`:''}</div>`).join('')}</article>`).join('')}</div></section>`;
 }
 else if(tab==='compare'){
  const data=window.ATM10_COMPANION_DATA.comparisons;
  box.innerHTML=`<section class="card"><h2>${tr('Comparadores','Comparisons')}</h2>${data.map(c=>`<article class="tool-card"><h3>${escapeHtml(L(c))}</h3><div class="comparison-wrap"><table class="comparison-table"><thead><tr><th>${tr('Critério','Criterion')}</th>${c.columns.map(x=>`<th>${escapeHtml(x)}</th>`).join('')}</tr></thead><tbody>${c.rows.map(r=>`<tr>${r.map((x,i)=>`<${i?'td':'th'}>${escapeHtml(x)}</${i?'td':'th'}>`).join('')}</tr>`).join('')}</tbody></table></div></article>`).join('')}</section>`;
 }
 else if(tab==='backup'){
  box.innerHTML=`<section class="card"><h2>${tr('Backup completo','Full backup')}</h2><p class="muted">${tr('Salva progresso, capítulos, favoritos, notas, aparência, idioma, trackers, checklist, enciclopédia e marcadores do mundo.','Saves progress, chapters, favorites, notes, appearance, language, trackers, checklist, encyclopedia, and world markers.')}</p><div class="backup-grid"><article class="tool-card"><h3>${tr('Exportar tudo','Export everything')}</h3><button id="backupExport" class="action">${tr('Baixar backup JSON','Download JSON backup')}</button></article><article class="tool-card"><h3>${tr('Restaurar','Restore')}</h3><label><input id="backupMerge" type="checkbox" checked> ${tr('Mesclar com dados atuais','Merge with current data')}</label><label class="action">${tr('Escolher backup','Choose backup')}<input id="backupImport" type="file" accept="application/json" hidden></label></article><article class="tool-card"><h3>${tr('Favoritos e notas','Favorites and notes')}</h3><button id="personalExport" class="action">${tr('Exportar dados pessoais','Export personal data')}</button></article><article class="tool-card"><h3>${tr('Sincronização','Sync')}</h3><p>${tr('O mesmo conjunto completo agora é usado pela sincronização na nuvem.','The same complete dataset is now used for cloud sync.')}</p><button class="action" onclick="tab='cloud';sync();render()">${tr('Abrir sincronização','Open sync')}</button></article></div></section>`;
  setTimeout(()=>{backupExport.onclick=exportFullBackup;personalExport.onclick=exportPersonalOnly;backupImport.onchange=e=>e.target.files[0]&&importFullBackup(e.target.files[0]);},0);
 }
 else if(tab==='completion'){const z=completionStats();box.innerHTML=`<section class="card"><h2>Checklist 100% do modpack</h2><p class="muted">Starter list plus content imported from your ATM10 installation. Importing the exact files is the reliable way to match your pack version.</p><div class="completion-summary"><div class="completion-card"><span>Overall progress</span><strong id="completionPct">${z.pct}%</strong></div><div class="completion-card"><span>Completed</span><strong id="completionCounts">${z.done}/${z.total}</strong></div><div class="completion-card"><span>Categories</span><strong>${Object.keys(completionAll()).length}</strong></div></div><div class="completion-toolbar"><input id="completionSearch" placeholder="Search objective..."><select id="completionCategory"><option value="">All categories</option>${Object.keys(completionAll()).map(k=>`<option value="${k}">${COMPLETION_LABELS[k]||k}</option>`).join('')}</select><select id="completionStatus"><option value="">All</option><option value="done">Completed</option><option value="todo">Pending</option></select></div><div class="sync-actions"><label class="action">Import JSON<input id="completionImport" type="file" accept="application/json" hidden></label><button id="completionExport" class="action">Export checklist</button></div><div id="completionResults" style="margin-top:14px"></div></section>`;setTimeout(()=>{['completionSearch','completionCategory','completionStatus'].forEach(id=>document.getElementById(id).addEventListener(id==='completionSearch'?'input':'change',renderCompletionList));completionExport.onclick=exportCompletion;completionImport.onchange=e=>e.target.files[0]&&importCompletionJSON(e.target.files[0]);renderCompletionDashboard()},0)}
 else {
  let done=chapters.filter(c=>tasks(c).every((_,i)=>state[k(c.id,i)])).length;
  box.innerHTML=`<section class="card"><h2>Progresso geral</h2><p><strong>${done}/60 ${tr('capítulos concluídos','chapters completed')}</strong></p><p class="muted">${tr('Seu progresso fica salvo automaticamente no navegador.','Your progress is saved automatically in this browser.')}</p></section>`;
 }
}
function openChapter(n){
 n=Number(n);if(!Number.isInteger(n)||n<1||n>60)return;
 current=n;localStorage.setItem(CURRENT_CHAPTER_KEY,String(current));tab='chapter';sync();nav();render();
 setTimeout(()=>translateStatic(document),0);document.getElementById('side').classList.remove('open');
 window.scrollTo({top:0,behavior:'smooth'});
}
document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>{tab=b.dataset.tab;sync();render();setTimeout(()=>translateStatic(document),0);});
function globalSearchEntries(){
 const entries=[];
 chapters.forEach(c=>entries.push({kind:'chapter',id:String(c.id),chapter:c.id,label:`${c.id}. ${chapterTitle(c)}`,text:searchableText([c.pt,c.en,tasks(c),chapterGuideStore().summaries[c.id]])}));
 ITEM_PAGES.forEach(x=>entries.push({kind:'item',id:x.id,chapter:x.chapter,label:L(x),text:searchableText([x.mod,x.machine,x.recipe,x.uses,x.dimension,x.related])}));
 encyclopediaAll().forEach(x=>entries.push({kind:'encyclopedia',id:x.id,chapter:x.chapter,label:x.name,text:searchableText([x.mod,x.category,x.description,x.recipe,x.uses,x.automation,x.location,x.issues])}));
 BOSS_DATA.forEach(x=>entries.push({kind:'boss',id:x.id,chapter:x.chapter,label:L(x),text:searchableText([x.location,x.prep,x.mechanics,x.drops])}));
 DIMENSION_DATA.forEach(x=>entries.push({kind:'dimension',id:x.id,chapter:x.chapter,label:L(x),text:searchableText(x)}));
 MULTIBLOCKS.forEach(x=>entries.push({kind:'multiblock',id:x.id,chapter:x.chapter,label:L(x),text:searchableText([x.size,x.rules,x.source])}));
 TROUBLE_DATA.forEach((x,i)=>entries.push({kind:'troubleshoot',id:String(i),label:x.title,text:searchableText([x.keys,x.steps])}));
 [
  ['calculators','calculators',tr('Calculadoras interativas','Interactive calculators'),'antimatter polonium energy powah mana blood magic LP ATM Star induction matrix reactor stock'],
  ['equipment','equipment',tr('Planejador de equipamento','Equipment planner'),'armor armour allthemodium vibranium unobtainium mekasuit apotheosis affix gems enchantments build'],
  ['base','base',tr('Planejador de base','Base planner'),'chunks modules districts tunnels AE2 nuclear farm magic create'],
  ['flows','flows',tr('Fluxogramas da progressão','Progression flowcharts'),'mekanism nuclear ATM Star dimension progression'],
  ['techtree','techtree',tr('Árvore tecnológica','Technology tree'),'storage power mining magic automation endgame dependencies'],
  ['compare','compare',tr('Comparadores','Comparisons'),'digital miner builder chunk destroyer powah mekanism bees mystical agriculture armor power']
 ].forEach(x=>entries.push({kind:'tab',id:x[1],label:x[2],text:x[3]}));
 return entries;
}
function openSearchTarget(kind,id,chapter){
 const host=document.getElementById('globalSearchResults');if(host)host.hidden=true;
 if(kind==='chapter')return openChapter(Number(chapter||id));
 if(kind==='item')return openItem(id);
 if(kind==='encyclopedia')return openEncyclopedia(id);
 if(kind==='multiblock')activeMultiblockId=id;
 const targetTab=kind==='boss'?'bosses':kind==='dimension'?'dimensions':kind==='multiblock'?'multiblocks':kind==='troubleshoot'?'troubleshoot':id;
 tab=targetTab;sync();render();document.getElementById('side').classList.remove('open');
 setTimeout(()=>{
  if(kind==='troubleshoot'){
   const x=TROUBLE_DATA[Number(id)],input=document.getElementById('troubleQuery');if(input&&x){input.value=x.title;runTrouble();}
  }
  const el=document.querySelector(`[data-search-id="${CSS.escape(String(id))}"]`);if(el){el.classList.add('search-focused');el.scrollIntoView({behavior:'smooth',block:'center'});}
  translateStatic(document);
 },0);
}
function renderGlobalSearchResults(raw){
 const host=document.getElementById('globalSearchResults');if(!host)return;
 const terms=normalizeSearch(raw).split(/\s+/).filter(Boolean);
 if(!terms.length){host.hidden=true;host.innerHTML='';return;}
 const kindNames={chapter:tr('Capítulo','Chapter'),item:tr('Item','Item'),encyclopedia:tr('Enciclopédia','Encyclopedia'),boss:'Boss',dimension:tr('Dimensão','Dimension'),multiblock:tr('Multibloco','Multiblock'),troubleshoot:tr('Diagnóstico','Troubleshooting'),tab:tr('Ferramenta','Tool')};
 const matches=globalSearchEntries().map(x=>{const title=normalizeSearch(x.label),all=normalizeSearch([x.label,x.text]);const ok=terms.every(t=>all.includes(t));const score=terms.reduce((n,t)=>n+(title.startsWith(t)?100:title.includes(t)?40:all.includes(t)?5:0),0);return {...x,ok,score};}).filter(x=>x.ok).sort((a,b)=>b.score-a.score||a.label.localeCompare(b.label)).slice(0,12);
 host.hidden=false;
 host.innerHTML=matches.length?matches.map(x=>`<div class="search-result"><button type="button" data-kind="${x.kind}" data-id="${escapeHtml(x.id)}" data-chapter="${x.chapter||''}"><span class="search-kind">${kindNames[x.kind]}</span><br><b>${escapeHtml(x.label)}</b>${x.chapter&&x.kind!=='chapter'?`<br><small>${tr('Capítulo','Chapter')} ${x.chapter}</small>`:''}</button></div>`).join(''):`<div class="nav-empty">${tr('Nenhum resultado direto encontrado.','No direct result found.')}</div>`;
 host.querySelectorAll('[data-kind]').forEach(b=>b.addEventListener('click',()=>openSearchTarget(b.dataset.kind,b.dataset.id,b.dataset.chapter)));
}
const guideSearch=document.getElementById('search');
guideSearch.oninput=e=>{
 const raw=e.target.value.trim();
 if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw)){e.target.value='';query='';renderGlobalSearchResults('');nav();return;}
 query=normalizeSearch(raw);renderGlobalSearchResults(raw);nav();
};
document.getElementById('menu').onclick=()=>document.getElementById('side').classList.toggle('open');
document.getElementById('sidebarClose').onclick=()=>document.getElementById('side').classList.remove('open');
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.getElementById('side').classList.remove('open');});


const LANGUAGE_KEY='atm10-v12-language';
let currentLang=localStorage.getItem(LANGUAGE_KEY)||'pt';

const TEXT_TRANSLATIONS={
'Pesquisar item, máquina, mod ou capítulo...':'Search item, machine, mod, or chapter...',
'Capítulos':'Chapters',
'Fechar':'Close',
'Aparência':'Appearance',
'Tema':'Theme',
'Preto':'Dark',
'Branco':'Light',
'Preto profundo':'Midnight',
'Sépia':'Sepia',
'Automático':'Automatic',
'Cor principal':'Primary color',
'Cor secundária':'Secondary color',
'Fonte':'Font',
'Padrão':'Default',
'Arredondada':'Rounded',
'Clássica':'Classic',
'Monoespaçada':'Monospace',
'Tamanho da letra':'Font size',
'Prévia da aparência do guia.':'Guide appearance preview.',
'Restaurar padrão':'Restore defaults',
'Capítulo':'Chapter',
'Galeria visual':'Visual gallery',
'Progresso':'Progress',
'Versão visual offline com seis categorias de imagens incorporadas.':'Offline visual version with six embedded image categories.',
'Screenshots reais do ATM10':'Real ATM10 screenshots',
'Primeira coleção real incorporada diretamente no site. Estas imagens funcionam offline.':'First real screenshot collection embedded directly in the site. These images work offline.',
'Ilustrações de apoio':'Supporting illustrations',
'Imagens offline ilustrativas. Próximo passo: substituir cada cartão por screenshots reais do jogo.':'Offline illustrations. Next step: replace every card with real in-game screenshots.',
'Ores e materiais':'Ores and materials',
'Identificação visual dos três metais ATM e acesso rápido às rotas de obtenção.':'Visual identification of the three ATM metals with quick access to their acquisition routes.',
'Máquinas':'Machines',
'Máquinas centrais de Mekanism, Powah, HNN, Industrial Foregoing e outros mods.':'Core machines from Mekanism, Powah, HNN, Industrial Foregoing, and other mods.',
'Bosses':'Bosses',
'Preparação e identificação dos encontros mais perigosos de Cataclysm, Twilight e magia.':'Preparation and identification for the most dangerous Cataclysm, Twilight, and magic encounters.',
'Portais':'Portals',
'Portais e Teleport Pads usados para acessar as dimensões centrais da progressão.':'Portals and Teleport Pads used to access the main progression dimensions.',
'Multiblocos':'Multiblocks',
'Layouts visuais para reatores, turbinas, SPS, Induction Matrix, boilers e altares.':'Visual layouts for reactors, turbines, SPS, Induction Matrix, boilers, and altars.',
'Estruturas':'Structures',
'Dungeons, citadels, towers, boss arenas e estruturas que guardam templates ou loot raro.':'Dungeons, citadels, towers, boss arenas, and structures containing templates or rare loot.',
'Abrir capítulo':'Open chapter',
'Allthemodium Ore':'Allthemodium Ore',
'Ore encontrado no Deep Dark, misturado aos blocos de sculk.':'Ore found in the Deep Dark among sculk blocks.',
'Vibranium Ore':'Vibranium Ore',
'Ore de Vibranium exposto no Nether.':'Vibranium Ore exposed in the Nether.',
'Unobtainium Ore':'Unobtainium Ore',
'Ore de Unobtainium no End Highlands.':'Unobtainium Ore in the End Highlands.',
'Teleport Pad':'Teleport Pad',
'Receita e tooltip mostrando os destinos dimensionais do Teleport Pad.':'Recipe and tooltip showing the Teleport Pad dimensional destinations.',
'The Other — Dungeon':'The Other — Dungeon',
'Estrutura externa de uma dungeon em The Other.':'Exterior structure of a dungeon in The Other.',
'The Other — Interior':'The Other — Interior',
'Área interna da dungeon, com spawners e acesso subterrâneo.':'Dungeon interior with spawners and underground access.',
'Piglich Pyramid':'Piglich Pyramid',
'Pirâmide onde os Pigliches podem ser encontrados.':'Pyramid where Pigliches can be found.',
'Screenshot de gameplay ATM10 — fonte indicada na documentação do arquivo.':'ATM10 gameplay screenshot — source listed in the file documentation.',
'Créditos das screenshots':'Screenshot credits',
'Screenshots reais incorporadas a partir de páginas públicas de gameplay de ATM10 usadas como referência visual. Elas mostram ATM ores, Teleport Pad e estruturas de The Other. A interface está em japonês, mas os blocos e estruturas são facilmente reconhecíveis.':'Real screenshots embedded from public ATM10 gameplay pages used as visual references. They show ATM ores, the Teleport Pad, and structures in The Other. The interface is in Japanese, but the blocks and structures are easy to recognize.',
'Progresso geral':'Overall progress',
'Seu progresso fica salvo automaticamente no navegador.':'Your progress is saved automatically in this browser.',
'Português':'Portuguese',
"Imagens online":"Online images",
"Galerias oficiais dos mods":"Official mod galleries",
"Fonte principal":"Primary source",
"Selecione um mod":"Select a mod",
"Carregar imagens":"Load images",
"Atualizar galeria":"Refresh gallery",
"Abrir fonte":"Open source",
"Nenhuma imagem encontrada nesta fonte.":"No images were found from this source.",
"É necessário estar conectado à internet para carregar novas imagens.":"An internet connection is required to load new images.",
"As imagens não são copiadas para o ZIP; são exibidas diretamente da fonte oficial.":"Images are not copied into the ZIP; they are displayed directly from the official source.",
"Sincronização":"Cloud sync",
"Atualizações":"Updates",
"Configuração da nuvem":"Cloud configuration",
"URL do projeto":"Project URL",
"Chave pública":"Publishable key",
"Email":"Email",
"Senha":"Password",
"Criar conta":"Create account",
"Entrar":"Sign in",
"Sair":"Sign out",
"Enviar para nuvem":"Upload to cloud",
"Baixar da nuvem":"Download from cloud",
"Mesclar automaticamente":"Automatically merge",
"Última sincronização":"Last sync",
"Não conectado":"Not connected",
"Conectado":"Connected",
"Verificar agora":"Check now",
"Atualização automática":"Automatic updates",
"Versão do guia":"Guide version",
"Versão ATM10 detectada":"Detected ATM10 version",
"Última verificação":"Last checked",
"Fonte de atualização":"Update source",
"Usar CurseForge API":"Use CurseForge API",
"Chave API CurseForge opcional":"Optional CurseForge API key",
"Feed do guia":"Guide feed",
"Salvar configuração":"Save configuration",
"Nunca use service_role ou secret key neste aplicativo.":"Never use a service_role or secret key in this app.",
"Os dados são criptografados em trânsito por HTTPS e protegidos por RLS no Supabase.":"Data is encrypted in transit by HTTPS and protected by Supabase RLS.",
"Há uma atualização disponível.":"An update is available.",
"Você já está na versão mais recente.":"You are already on the latest version.",
"Sem conexão ou fonte indisponível.":"Offline or update source unavailable.",
"Favoritos e notas":"Favorites and notes",
"Instalar app":"Install app",
"Adicione este guia ao celular ou computador e use offline.":"Add this guide to your phone or computer and use it offline.",
"Adicionar aos favoritos":"Add to favorites",
"Remover dos favoritos":"Remove from favorites",
"Notas pessoais":"Personal notes",
"Escreva suas anotações sobre este capítulo...":"Write your notes about this chapter...",
"Salvar nota":"Save note",
"Apagar nota":"Delete note",
"Nota salva localmente.":"Note saved locally.",
"Nenhum favorito ainda.":"No favorites yet.",
"Capítulos favoritos":"Favorite chapters",
"Itens favoritos":"Favorite items",
"Abrir":"Open",
"Minhas notas":"My notes"
};

function translateStatic(root=document){
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
 const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
 nodes.forEach(node=>{
   const raw=node.nodeValue;
   const trimmed=raw.trim();
   if(!trimmed)return;
   let translated=TEXT_TRANSLATIONS[trimmed];
   if(!translated && /^Abrir capítulo \d+$/.test(trimmed)){
      translated='Open chapter '+trimmed.match(/\d+/)[0];
   }
   if(currentLang==='en' && translated){
      node.nodeValue=raw.replace(trimmed,translated);
   } else if(currentLang==='pt'){
      const pt=Object.keys(TEXT_TRANSLATIONS).find(k=>TEXT_TRANSLATIONS[k]===trimmed);
      if(pt) node.nodeValue=raw.replace(trimmed,pt);
   }
 });
 document.documentElement.lang=currentLang==='en'?'en':'pt-BR';
 document.getElementById('search').placeholder=currentLang==='en'?'Search item, machine, mod, or chapter...':'Pesquisar item, máquina, mod ou capítulo...';
 document.getElementById('languageSelect').value=currentLang;
}

function setLanguage(lang){
 currentLang=lang;
 localStorage.setItem(LANGUAGE_KEY,lang);
 nav();render();sync();translateStatic(document);
}


const PERSONAL_KEY='atm10-v13-personal';
let personalData=JSON.parse(localStorage.getItem(PERSONAL_KEY)||'{"favorites":{},"notes":{}}');

function personalKey(type,id){return `${type}:${id}`;}
function savePersonal(){localStorage.setItem(PERSONAL_KEY,JSON.stringify(personalData));if(typeof queueAutoCloudSync==='function')queueAutoCloudSync();}
function isFavorite(type,id){return !!(personalData.favorites||{})[personalKey(type,id)];}
function toggleFavorite(type,id){
  personalData.favorites=personalData.favorites||{};
  const key=personalKey(type,id);
  if(personalData.favorites[key]) delete personalData.favorites[key];
  else personalData.favorites[key]=true;
  savePersonal();render();setTimeout(()=>translateStatic(document),0);
}
function getNote(type,id){return ((personalData.notes||{})[personalKey(type,id)]||'');}
function saveNote(type,id,value){
  personalData.notes=personalData.notes||{};
  personalData.notes[personalKey(type,id)]=value;
  savePersonal();
}
function deleteNote(type,id){
  personalData.notes=personalData.notes||{};
  delete personalData.notes[personalKey(type,id)];
  savePersonal();
}
function personalTargetMeta(key){
 const split=String(key).indexOf(':');if(split<1)return null;
 const type=key.slice(0,split),id=key.slice(split+1);
 if(type==='chapter'){const c=chapters.find(x=>x.id===Number(id));return c?{key,type,id,kind:tr('Capítulo','Chapter'),label:`${c.id}. ${chapterTitle(c)}`}:null;}
 if(type==='item'){const x=ITEM_PAGES.find(v=>v.id===id);return x?{key,type,id,kind:tr('Item','Item'),label:L(x)}:null;}
 if(type==='encyclopedia'){const x=encyclopediaAll().find(v=>v.id===id);return x?{key,type,id,kind:tr('Enciclopédia','Encyclopedia'),label:x.name}:null;}
 if(type==='completion'){const parts=id.split(':'),item=parts.slice(1).join(':');return {key,type,id,kind:tr('Objetivo','Objective'),label:item||id};}
 return {key,type,id,kind:type,label:id};
}
function openPersonalTarget(key){
 const x=personalTargetMeta(key);if(!x)return;
 if(x.type==='chapter')return openChapter(Number(x.id));
 if(x.type==='item')return openItem(x.id);
 if(x.type==='encyclopedia')return openEncyclopedia(x.id);
 if(x.type==='completion'){
  const item=x.id.split(':').slice(1).join(':');tab='completion';sync();render();setTimeout(()=>{const input=document.getElementById('completionSearch');if(input){input.value=item;renderCompletionList();input.scrollIntoView({behavior:'smooth',block:'center'});}},0);
 }
}
function escapeHtml(value){
  return String(value||'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
}
function saveCurrentChapterNote(){
  const el=document.getElementById('chapterNote');
  if(!el)return;
  saveNote('chapter',current,el.value);
  const status=document.getElementById('noteStatus');
  if(status)status.textContent=tr('Nota salva localmente.','Note saved locally.');
}
function deleteCurrentChapterNote(){
  deleteNote('chapter',current);
  const el=document.getElementById('chapterNote');
  if(el)el.value='';
  const status=document.getElementById('noteStatus');
  if(status)status.textContent='';
}

const APPEARANCE_KEY='atm10-v11-appearance';
let appearance=JSON.parse(localStorage.getItem(APPEARANCE_KEY)||'{}');
function applyAppearance(){
 const root=document.documentElement;
 let theme=appearance.theme||'dark';
 if(theme==='system') theme=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';
 root.setAttribute('data-theme',theme);
 root.setAttribute('data-font',appearance.font||'system');
 root.style.setProperty('--accent',appearance.accent||'#7ee787');
 root.style.setProperty('--accent2',appearance.accent2||'#58a6ff');
 document.body.style.fontSize=(appearance.fontSize||16)+'px';
 themeSelect.value=appearance.theme||'dark';
 fontSelect.value=appearance.font||'system';
 accentColor.value=appearance.accent||'#7ee787';
 accentColor2.value=appearance.accent2||'#58a6ff';
 fontSize.value=appearance.fontSize||16;
}
function saveAppearance(){localStorage.setItem(APPEARANCE_KEY,JSON.stringify(appearance));applyAppearance();}
themeSelect.onchange=e=>{appearance.theme=e.target.value;saveAppearance();}
fontSelect.onchange=e=>{appearance.font=e.target.value;saveAppearance();}
accentColor.oninput=e=>{appearance.accent=e.target.value;saveAppearance();}
accentColor2.oninput=e=>{appearance.accent2=e.target.value;saveAppearance();}
fontSize.oninput=e=>{appearance.fontSize=Number(e.target.value);saveAppearance();}
resetAppearance.onclick=()=>{appearance={theme:'dark',font:'system',accent:'#7ee787',accent2:'#58a6ff',fontSize:16};saveAppearance();}
languageSelect.onchange=e=>setLanguage(e.target.value);


let deferredInstallPrompt=null;
window.addEventListener('beforeinstallprompt',e=>{
  e.preventDefault();
  deferredInstallPrompt=e;
  document.getElementById('installBanner')?.classList.add('show');
});
document.getElementById('installAppBtn')?.addEventListener('click',async()=>{
  if(deferredInstallPrompt){
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt=null;
    document.getElementById('installBanner')?.classList.remove('show');
  }
});
window.addEventListener('appinstalled',()=>{
  document.getElementById('installBanner')?.classList.remove('show');
});
if('serviceWorker' in navigator){
  window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
}

applyAppearance();update();nav();sync();render();translateStatic(document);
setTimeout(maybeAutoCheckUpdates,1500);
setTimeout(initAccountUI,0);

document.getElementById('closeOnlineImage')?.addEventListener('click',closeOnlineImageModal);
document.getElementById('onlineImageModal')?.addEventListener('click',e=>{if(e.target.id==='onlineImageModal')closeOnlineImageModal();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeOnlineImageModal();});
