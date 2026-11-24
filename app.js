const PAPERS = [
 {id:'mp22',board:'MP Board',cls:'Class 10',subject:'Science',year:'2022',kind:'paper',title:'High School Examination (Main) 2022 - Science',details:'Paper code S-110 · 3 hours · 80 marks · Hindi & English · board name not printed on the supplied cover',file:'mpboard-class10-science-2022-main-paper.pdf'},
 {id:'mp23p',board:'MP Board',cls:'Class 10',subject:'Science',year:'2023',kind:'paper',title:'High School Examination (Main) 2023 - Science · Set A',details:'Paper code J-510 · Set A · 3 hours · 75 marks',file:'mpboard-class10-science-2023-set-a-paper.pdf'},
 {id:'mp23s',board:'MP Board',cls:'Class 10',subject:'Science',year:'2023',kind:'solution',title:'Complete Solution - Science · Set A',details:'Detailed answer book for the 2023 Class 10 Science paper',file:'mpboard-class10-science-2023-set-a-solution.pdf',related:'mp23p'},
 {id:'mp24p',board:'MP Board',cls:'Class 10',subject:'Science',year:'2024',kind:'paper',title:'High School Examination (Main) 2024 - Science · Set A',details:'Paper code T-0660 · Set A · 3 hours · 75 marks',file:'mpboard-class10-science-2024-set-a-paper.pdf'},
 {id:'mp24s',board:'MP Board',cls:'Class 10',subject:'Science',year:'2024',kind:'solution',title:'Complete Solution - Science · Set A',details:'Detailed answer book for the 2024 Class 10 Science paper',file:'mpboard-class10-science-2024-set-a-solution.pdf',related:'mp24p'},
 {id:'mp25p',board:'MP Board',cls:'Class 10',subject:'Science',year:'2025',kind:'paper',title:'High School Examination (Main) 2025 - Science · Set A',details:'Set A · 3 hours · 75 marks',file:'mpboard-class10-science-2025-main-set-a-paper.pdf'},
 {id:'mp25s',board:'MP Board',cls:'Class 10',subject:'Science',year:'2025',kind:'solution',title:'Complete Solution - Science · Set A',details:'Detailed answer book for the 2025 main examination',file:'mpboard-class10-science-2025-main-set-a-solution.pdf',related:'mp25p'},
 {id:'mp25iip',board:'MP Board',cls:'Class 10',subject:'Science',year:'2025 · Second Exam',kind:'paper',title:'High School Second Examination 2025 - Science · Set D',details:'Second examination paper · 3 hours · 75 marks',file:'mpboard-class10-science-2025-second-exam-set-d-paper.pdf'},
 {id:'mp25iis',board:'MP Board',cls:'Class 10',subject:'Science',year:'2025 · Second Exam',kind:'solution',title:'Complete Solution - Science · Second Examination 2025',details:'Solution document supplied for the 2025 second examination',file:'mpboard-class10-science-2025-second-exam-solution.pdf',related:'mp25iip'},
 {id:'cb1',board:'CBSE',cls:'Class 12',subject:'Physics',year:'Year not printed',kind:'paper',title:'Physics Theory - Question Paper Code 55/7/1',details:'Set 1 · 3 hours · 70 marks · 33 questions',file:'cbse-class12-physics-qp-code-55-7-1.pdf'},
 {id:'cb2',board:'CBSE',cls:'Class 12',subject:'Physics',year:'Year not printed',kind:'paper',title:'Physics Theory - Question Paper Code 55/7/2',details:'Set 2 · 3 hours · 70 marks · 33 questions',file:'cbse-class12-physics-qp-code-55-7-2.pdf'},
 {id:'cb3',board:'CBSE',cls:'Class 12',subject:'Physics',year:'Year not printed',kind:'paper',title:'Physics Theory - Question Paper Code 55/7/3',details:'Set 3 · 3 hours · 70 marks · 33 questions',file:'cbse-class12-physics-qp-code-55-7-3.pdf'},
 {id:'cbvi',board:'CBSE',cls:'Class 12',subject:'Physics',year:'Year not printed',kind:'paper',title:'Physics Theory - Question Paper Code 55(B)/7',details:'Special paper explicitly marked “for visually impaired candidates only” · 3 hours · 70 marks',file:'cbse-class12-physics-qp-code-55b-7-visually-impaired.pdf',special:true}
];
const BOOKS = [
 {id:'ixsci',cls:'Class 9',subject:'Science',board:'NCERT',title:'Science - Textbook for Class IX (uploaded edition)',details:'219 pages · 15 chapters · edition / current syllabus status not verified from the supplied file',file:'class9-science-ncert-uploaded-edition.pdf',type:'Textbook'}
];
const CLASS9_CHAPTERS = ['Matter in Our Surroundings','Is Matter Around Us Pure?','Atoms and Molecules','Structure of the Atom','The Fundamental Unit of Life','Tissues','Diversity in Living Organisms','Motion','Force and Laws of Motion','Gravitation','Work and Energy','Sound','Why Do We Fall Ill?','Natural Resources','Improvement in Food Resources'];

const QUIZZES = [
 {id:'mp10science2023',board:'MP Board',cls:'Class 10',subject:'Science',title:'Class 10 Science · MP Board Main Exam 2023 · Set A',source:'Questions based on the uploaded 2023 Set A paper and its detailed solution.',questions:[
  {q:'When calcium oxide reacts with water and releases heat, the reaction is:',o:['Endothermic','Exothermic','Neutralisation','Decomposition'],a:1,e:'The supplied 2023 solution identifies CaO reacting with water as an exothermic reaction because heat is released.'},
  {q:'Which property is NOT generally shown by metals, according to the 2023 solution?',o:['Electrical conductivity','Ductility','Brittleness','Malleability'],a:2,e:'The supplied solution marks brittleness as the property not generally exhibited by metals.'},
  {q:'The 2023 solution describes respiration as a process of:',o:['Oxidation','Reduction','Excretion','Absorption'],a:0,e:'The uploaded solution gives oxidation as the answer for the respiration process.'},
  {q:'Amoeba reproduces asexually by:',o:['Budding','Spore formation','Binary fission','Regeneration'],a:2,e:'The 2023 answer key identifies binary fission as the method of reproduction in Amoeba.'},
  {q:'The focal length of a plane mirror is:',o:['Zero','One centimetre','Two centimetres','Infinite'],a:3,e:'A plane mirror has an infinite radius of curvature; its focal length is therefore treated as infinite.'},
  {q:'What is the SI unit of electrical resistance?',o:['Volt','Watt','Ohm','Ampere'],a:2,e:'The uploaded 2023 solution states that resistance is measured in ohms (Ω).'},
  {q:'Which device converts electrical energy into mechanical energy?',o:['Ammeter','Generator','Electric motor','Galvanometer'],a:2,e:'The electric motor converts electrical energy into mechanical energy; this is the answer in the supplied solution.'},
  {q:'In an ecosystem, humans are classified as:',o:['Producers','Herbivores','Carnivores','Omnivores'],a:3,e:'The 2023 solution identifies humans as omnivores.'},
  {q:'The gradual damage of a metal due to its surroundings, such as air and moisture, is called:',o:['Crystallisation','Corrosion','Distillation','Neutralisation'],a:1,e:'The supplied descriptive solution defines corrosion as the gradual deterioration of a metal due to its surroundings; rusting of iron is an example.'},
  {q:'The ability of a metal to be drawn into thin wires is called:',o:['Malleability','Ductility','Sonority','Hardness'],a:1,e:'The 2023 solution distinguishes ductility (drawing into wires) from malleability (hammering into sheets).'}
 ]},
 {id:'mp10science2024',board:'MP Board',cls:'Class 10',subject:'Science',title:'Class 10 Science · MP Board Main Exam 2024 · Set A',source:'Questions based on the uploaded 2024 Set A paper and its detailed solution.',questions:[
  {q:'The reaction Fe₂O₃ + 2Al → Al₂O₃ + 2Fe is an example of:',o:['Combination','Decomposition','Displacement','Neutralisation'],a:2,e:'The supplied 2024 solution identifies this as a displacement reaction because aluminium displaces iron from iron oxide.'},
  {q:'Which medicine is used to treat indigestion, as stated in the 2024 solution?',o:['Antibiotic','Antacid','Analgesic','Antiseptic'],a:1,e:'The supplied solution gives antacid as the medicine used for indigestion.'},
  {q:'Which method is suitable for protecting an iron frying pan from rusting?',o:['Coating it with zinc','Coating it with sodium','Keeping it in water','Heating it regularly'],a:0,e:'The 2024 solution identifies zinc coating (galvanisation) as the suitable method.'},
  {q:'The functional group present in butanone is:',o:['Alcohol','Aldehyde','Ketone','Carboxylic acid'],a:2,e:'The uploaded answer key identifies the functional group in butanone as ketone.'},
  {q:'The complete breakdown of pyruvate to carbon dioxide, water and energy takes place in the:',o:['Nucleus','Mitochondria','Ribosome','Cell membrane'],a:1,e:'The supplied 2024 solution gives mitochondria as the location for this breakdown.'},
  {q:'The small gap between two adjacent nerve cells is called the:',o:['Axon','Synapse','Dendrite','Receptor'],a:1,e:'The solution names the gap between two nerve cells as a synapse.'},
  {q:'The least distance of distinct vision for a normal adult is approximately:',o:['2.5 cm','10 cm','25 cm','50 cm'],a:2,e:'The 2024 solution gives approximately 25 centimetres as the least distance of distinct vision.'},
  {q:'The sky appears blue mainly due to:',o:['Reflection','Refraction','Scattering of light','Dispersion by a prism'],a:2,e:'The supplied solution attributes the blue appearance of the sky to scattering of light.'},
  {q:'The SI unit of electrical power is:',o:['Joule','Watt','Ohm','Ampere'],a:1,e:'The uploaded solution states that the SI unit of electrical power is the watt.'},
  {q:'During a short circuit, the current in the circuit:',o:['Falls to zero','Remains unchanged','Increases sharply','Changes into voltage'],a:2,e:'The 2024 solution states that current increases very greatly during a short circuit.'}
 ]},
 {id:'mp10science2025main',board:'MP Board',cls:'Class 10',subject:'Science',title:'Class 10 Science · MP Board Main Exam 2025 · Set A',source:'Questions based on the uploaded 2025 Main Set A paper and its detailed solution.',questions:[
  {q:'The reaction KOH + H₂SO₄ → K₂SO₄ + H₂O is classified as:',o:['Combination','Double displacement','Decomposition','Displacement'],a:1,e:'The uploaded 2025 solution identifies the acid-base exchange as a double-displacement reaction.'},
  {q:'A solution turns blue litmus red. Which pH value is selected in the supplied 2025 solution?',o:['10','7','1','8'],a:2,e:'The solution identifies pH 1. An acidic solution has a pH below 7.'},
  {q:'Which of the following is an amphoteric oxide in the supplied paper?',o:['MgO','CaO','Al₂O₃','Na₂O'],a:2,e:'The supplied answer key marks aluminium oxide (Al₂O₃) as amphoteric.'},
  {q:'According to the supplied paper, the brain is responsible for:',o:['Thinking only','Regulating heartbeat only','Maintaining body balance only','All of these functions'],a:3,e:'The answer key selects “all of the above” for thinking, heartbeat regulation and body balance.'},
  {q:'Which structure is NOT part of the human female reproductive system?',o:['Ovary','Uterus','Vas deferens','Fallopian tube'],a:2,e:'The supplied solution identifies vas deferens as part of the male reproductive system, not the female system.'},
  {q:'The focal length of the eye lens is changed by the action of:',o:['Pupil','Retina','Ciliary muscles','Iris'],a:2,e:'The 2025 solution identifies ciliary muscles as the structures that change the focal length of the eye lens.'},
  {q:'The potential difference between two points is measured using a:',o:['Ammeter','Voltmeter','Galvanometer','Rheostat'],a:1,e:'The supplied solution states that potential difference is measured with a voltmeter.'},
  {q:'The splitting of white light into its component colours is called:',o:['Reflection','Dispersion','Scattering','Diffraction'],a:1,e:'The answer key gives dispersion for the splitting of light into its component colours.'},
  {q:'A section of DNA containing information for the synthesis of a protein is called a:',o:['Tissue','Gene','Chromosome pair','Hormone'],a:1,e:'The 2025 solution identifies this DNA segment as a gene.'},
  {q:'Asexual reproduction by budding is given for which organisms in the supplied solution?',o:['Hydra or yeast','Planaria only','Amoeba only','Spirogyra only'],a:0,e:'The solution states that budding occurs in Hydra or yeast.'}
 ]},
 {id:'mp10science2025second',board:'MP Board',cls:'Class 10',subject:'Science',title:'Class 10 Science · MP Board Second Exam 2025',source:'Questions based on the uploaded High School Second Examination 2025 paper and its complete solution.',questions:[
  {q:'Which scale is used to express the hydrogen-ion concentration of a solution?',o:['Richter scale','pH scale','Decibel scale','Celsius scale'],a:1,e:'The uploaded second-exam solution states that the pH scale is used to express hydrogen-ion concentration.'},
  {q:'A homogeneous mixture of two or more metals, or a metal and a non-metal, is called an:',o:['Ore','Alloy','Element','Acid'],a:1,e:'The supplied solution defines such a homogeneous mixture as an alloy.'},
  {q:'In the human digestive system, most water absorption described in the supplied solution occurs in the:',o:['Stomach','Small intestine','Large intestine','Oesophagus'],a:2,e:'The uploaded solution gives the large intestine as the organ where water is absorbed.'},
  {q:'The male reproductive cells (sperm) are produced in the:',o:['Ovary','Testes','Uterus','Prostate gland'],a:1,e:'The solution identifies the testes as the site of sperm formation.'},
  {q:'The unit given in the supplied solution for magnetic field strength is:',o:['Tesla','Watt','Ohm','Coulomb'],a:0,e:'The uploaded solution gives tesla (also expressed as weber per square metre) as the unit.'},
  {q:'The splitting of white light into its component colours is called:',o:['Reflection','Dispersion','Absorption','Interference'],a:1,e:'The supplied answer defines this splitting of white light as dispersion.'},
  {q:'The reaction between an acid and a base generally produces:',o:['Salt and water','Metal and oxygen','Only hydrogen','Only carbon dioxide'],a:0,e:'The second-exam solution states that an acid and a base react to form salt and water.'},
  {q:'Which metal is identified in the supplied solution as more reactive than gold?',o:['Silver','Copper','Potassium','Platinum'],a:2,e:'The uploaded solution corrects the statement about gold: potassium is more reactive.'},
  {q:'The asexual reproduction method identified for Planaria in the supplied solution is:',o:['Budding','Regeneration','Spore formation','Pollination'],a:1,e:'The answer key says Planaria reproduces by regeneration, not budding.'},
  {q:'Electric current is defined as the rate of flow of:',o:['Energy','Electric charge','Resistance','Potential difference'],a:1,e:'The solution defines electric current as the rate of flow of electric charge.'}
 ]},
 {id:'cbse12physics',board:'CBSE',cls:'Class 12',subject:'Physics',title:'Class 12 Physics · CBSE Paper Codes 55/7/1, 55/7/2 & 55/7/3',source:'Questions drawn from the uploaded CBSE Class 12 Physics papers. The year is not printed on the supplied paper title pages.',questions:[
  {q:'Which electromagnetic radiation is also referred to as “heat waves” in the supplied papers?',o:['Gamma rays','X-rays','Ultraviolet rays','Infrared rays'],a:3,e:'The uploaded CBSE Physics MCQ identifies infrared radiation as heat waves.'},
  {q:'At resonance, the power loss in a series LCR circuit connected to an AC source of voltage V is:',o:['I²ωL','V²/(ωC)','V²/R','V²/(ωL − 1/ωC)'],a:2,e:'The supplied paper gives V²/R as the power loss at resonance.'},
  {q:'Which frequency order is correct for gamma rays (νG), X-rays (νX) and ultraviolet rays (νU)?',o:['νX > νG > νU','νG > νX > νU','νU > νX > νG','νX > νU > νG'],a:1,e:'The paper’s correct order is νG > νX > νU.'},
  {q:'In the Bohr model, an electron has energy −3.4 eV in a hydrogen orbit. Its angular momentum is:',o:['h/π','h/2π','h/4π','2h/π'],a:0,e:'The supplied question uses the −3.4 eV orbit (n = 2); Bohr angular momentum is nh/2π, giving h/π.'},
  {q:'In a silicon p–n junction, the dominant carrier mechanisms are:',o:['Diffusion in forward bias; drift in reverse bias','Drift in forward bias; diffusion in reverse bias','Drift in both biases','Diffusion in both biases'],a:0,e:'The CBSE paper identifies diffusion in forward bias and drift in reverse bias.'},
  {q:'The Balmer series of the hydrogen atom lies in which region?',o:['Ultraviolet','Infrared','Visible','Microwave'],a:2,e:'The supplied Set 2 paper gives the visible region as the correct answer.'},
  {q:'A prism has angle A = 30°, angle of incidence i = 60°, and deviation δ = 30°. The angle of emergence is:',o:['0°','30°','60°','90°'],a:0,e:'Using δ = i + e − A, e = δ + A − i = 30° + 30° − 60° = 0°.'},
  {q:'A point source is in air before a convex spherical glass surface (n = 1.5, R = 10 cm). Its real image forms at the same distance from the surface as the source. The source distance is:',o:['25 cm','50 cm','75 cm','100 cm'],a:1,e:'The supplied paper’s spherical-refraction question gives 50 cm as the correct source distance.'},
  {q:'In the supplied single-slit diffraction question, if the slit-to-screen distance is doubled, the angular separation between fringes:',o:['Doubles','Is halved','Remains constant','Becomes one-fourth'],a:2,e:'The supplied Set 3 paper marks “remains constant” for the angular separation.'},
  {q:'Which statement about a free neutron appears in the assertion–reason section of the supplied papers?',o:['It is a stable particle','It is not a stable particle','It has positive charge','It has no mass'],a:1,e:'The uploaded Physics paper states that a free neutron is not a stable particle.'}
 ]}
];

const DEFAULT_UPDATES = [
 {date:'2026',title:'MP Board Class 10 Science papers (2022–2025) added',detail:'Question papers and supplied solution PDFs are available in the PYQ archive.'},
 {date:'2026',title:'CBSE Class 12 Physics paper sets added',detail:'Question paper codes 55/7/1, 55/7/2 and 55/7/3 are listed separately.'},
 {date:'2026',title:'Class 9 Science textbook added',detail:'Uploaded 219-page textbook with 15 listed chapters.'}
];

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
let currentQuiz = null, quizIndex = 0, quizAnswers = [], quizSubmitted = false;
let currentBoardFilter = 'all';
let toastTimer, quizTimerId=null, quizTimeLeft=10*60;
function toast(message){const el=$('#toast');if(!el)return;el.textContent=message;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2800)}
function localJSON(key, fallback){try{return JSON.parse(localStorage.getItem(key)) ?? fallback}catch{return fallback}}
function saveJSON(key,val){try{localStorage.setItem(key,JSON.stringify(val));return true}catch{return false}}
function renderGuestQuota(){/* All published quizzes and PDFs are open; no guest quota or membership gate. */}
function assetHref(file){const value=String(file||'').trim();if(!value||value.startsWith('#local:'))return value;try{return new URL(value.replace(/^\.\//,''),document.baseURI).href}catch{return value}}
function fileName(file){const clean=String(file||'').split(/[?#]/)[0];return clean.split('/').pop()||'download.pdf'}
function startQuizTimer(){clearInterval(quizTimerId);quizTimeLeft=10*60;const paint=()=>{const el=$('#quizTimer');if(el){const m=String(Math.floor(quizTimeLeft/60)).padStart(2,'0'),sec=String(quizTimeLeft%60).padStart(2,'0');el.textContent=`${m}:${sec}`}};paint();quizTimerId=setInterval(()=>{quizTimeLeft--;paint();if(quizTimeLeft<=0){clearInterval(quizTimerId);quizTimerId=null;submitQuiz(true)}},1000)}
function renderPage(page,{scroll=true}={}){const valid=['home','about','study','quizzes','spoken','papers','contact','updates','owner'];if(!valid.includes(page))page='home';if(page!=='quizzes'&&quizTimerId){clearInterval(quizTimerId);quizTimerId=null}$$('.page').forEach(p=>p.classList.toggle('active',p.dataset.page===page));$$('.nav-link').forEach(a=>a.classList.toggle('active',a.dataset.page===page));const nav=$('#mainNav');const menu=$('#menuToggle');if(nav)nav.classList.remove('open');if(menu){menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation menu');menu.innerHTML='<span aria-hidden="true">☰</span><span class="menu-toggle-label">Menu</span>'}if(page==='study')renderStudy();if(page==='papers')renderPapers();if(page==='quizzes')renderQuizCards();if(page==='updates')renderUpdates();if(page==='owner')renderOwner();if(scroll)window.scrollTo({top:0,behavior:'auto'});return page}
function navigate(page,{historyMode='push',scroll=true}={}){const valid=['home','about','study','quizzes','spoken','papers','contact','updates','owner'];if(!valid.includes(page))page='home';const nextHash=`#${page}`;if(historyMode==='push'&&location.hash!==nextHash)history.pushState({page},'',nextHash);else if(historyMode==='replace'&&location.hash!==nextHash)history.replaceState({page},'',nextHash);return renderPage(page,{scroll})}
function renderUpdates(){const updates=[...localJSON('bt_local_updates',[]),...DEFAULT_UPDATES];const html=updates.map(u=>`<div class="update-item"><span class="update-date">${escapeHtml(u.date||'NEW')}</span><span><strong>${escapeHtml(u.title)}</strong><small>${escapeHtml(u.detail||'')}</small></span></div>`).join('');$('#homeUpdates').innerHTML=updates.slice(0,3).map(u=>`<div class="update-item"><span class="update-date">${escapeHtml(u.date||'NEW')}</span><span><strong>${escapeHtml(u.title)}</strong><small>${escapeHtml(u.detail||'')}</small></span></div>`).join('');if($('#allUpdates'))$('#allUpdates').innerHTML=html}
function escapeHtml(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function renderStudy(){const cls=$('#studyClass').value,sub=$('#studySubject').value,q=$('#studySearch').value.toLowerCase();const all=[...BOOKS,...PAPERS.filter(p=>p.kind==='solution').map(p=>({...p,type:'Solved Paper'}))];const custom=localJSON('bt_custom_resources',[]).filter(x=>x.type==='resource'||x.type==='solution');const items=[...all,...custom];const rows=items.filter(x=>(cls==='all'||x.cls===cls)&&(sub==='all'||x.subject===sub)&&(`${x.title} ${x.details||''} ${x.year||''}`).toLowerCase().includes(q));$('#studyCount').textContent=`${rows.length} resources`;$('#studyResourceGrid').innerHTML=rows.map(x=>`<article class="content-card"><div class="content-card-head"><span class="content-type">${escapeHtml(x.type|| (x.kind==='solution'?'Solved Paper':'Resource'))}</span><span class="content-type">${escapeHtml(x.board||'')}</span></div><h3>${escapeHtml(x.title)}</h3><p>${escapeHtml(x.details||'Uploaded resource')}</p><div class="content-meta"><span>${escapeHtml(x.cls||'')}</span><span>${escapeHtml(x.subject||'')}</span>${x.year?`<span>${escapeHtml(x.year)}</span>`:''}</div><div class="card-actions">${fileActions(x.file,(x.kind==='solution'||x.type==='solution')?'Open Solution':'Open PDF',(x.kind==='solution'||x.type==='solution')?'Download Solution':'Download',x.id,'open')}</div></article>`).join('');$('#studyEmpty').hidden=rows.length>0;$('#class9Chapters').style.display=(cls==='all'||cls==='Class 9')&&(sub==='all'||sub==='Science')?'block':'none';}
function escapeAttr(s){return String(s??'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;')}
function fileActions(file,openLabel='Open',downloadLabel='Download',id='',access='open'){
 if(String(file||'').startsWith('#local:')){const uid=String(file).slice(7);return `<button type="button" class="paper-action-btn paper-action-primary" data-open-local="${escapeAttr(uid)}">${escapeHtml(openLabel)}</button><button type="button" class="paper-action-btn paper-action-secondary" data-download-local="${escapeAttr(uid)}">${escapeHtml(downloadLabel)}</button>`}
 const href=assetHref(file),name=fileName(file);
 return `<a class="paper-action-btn paper-action-primary" href="${escapeAttr(href)}">${escapeHtml(openLabel)}</a><a class="paper-action-btn paper-action-secondary" href="${escapeAttr(href)}" download="${escapeAttr(name)}">${escapeHtml(downloadLabel)}</a>`;
}
function renderPapers(){
 const cls=$('#paperClass').value,sub=$('#paperSubject').value,type=$('#paperType').value;
 const custom=localJSON('bt_custom_resources',[]).filter(x=>x.type==='paper'||x.type==='solution');
 const rows=[...PAPERS,...custom].filter(p=>(currentBoardFilter==='all'||p.board===currentBoardFilter)&&(cls==='all'||p.cls===cls)&&(sub==='all'||p.subject===sub)&&(type==='all'||p.kind===type));
 const yearScore=value=>{const m=String(value||'').match(/20\d{2}/);return (m?Number(m[0]):0)+(String(value||'').toLowerCase().includes('second')?0.5:0)};
 rows.sort((a,b)=>yearScore(b.year)-yearScore(a.year));
 const paperCount=rows.filter(p=>p.kind==='paper').length,solutionCount=rows.filter(p=>p.kind==='solution').length;
 const summary=$('#paperArchiveSummary');
 if(summary)summary.innerHTML=`<strong>${rows.length} uploaded document${rows.length===1?'':'s'} shown</strong><span>${paperCount} question paper${paperCount===1?'':'s'} · ${solutionCount} solution document${solutionCount===1?'':'s'}</span>`;
 const groups={};rows.forEach(p=>{const k=`${p.board} · ${p.cls} · ${p.subject}`;(groups[k]??=[]).push(p)});
 $('#paperList').innerHTML=Object.entries(groups).map(([k,arr])=>`<div class="paper-group"><div class="paper-group-head"><strong>${escapeHtml(k)}</strong><span>${arr.length} document${arr.length===1?'':'s'}</span></div>${arr.map(p=>`<div class="paper-doc"><span class="pdf-icon">PDF</span><div class="paper-doc-body"><strong>${escapeHtml(p.title)}</strong><small>${escapeHtml(p.year)} · ${escapeHtml(p.details||'')}</small><span class="paper-kind-tag ${p.kind==='solution'?'solution-kind':'question-kind'}">${p.kind==='solution'?'DETAILED SOLUTION':'QUESTION PAPER'}</span></div>${p.special?'<span class="paper-flag">SPECIAL PAPER</span>':''}<div class="paper-actions">${fileActions(p.file,p.kind==='paper'?'Open Question Paper':'Open Solution',p.kind==='paper'?'Download Paper':'Download Solution',p.id,'open')}</div></div>`).join('')}</div>`).join('')||'<div class="empty-note">No uploaded paper matches these filters.</div>';
}
function renderHomePapers(){
 const ids=['mp25iip','mp25p','cb1','mp24p','mp23p'];
 const rows=ids.map(id=>PAPERS.find(p=>p.id===id)).filter(Boolean);
 $('#homePypList').innerHTML=rows.map(p=>`<div class="home-pyp-row"><span class="pdf-icon">PDF</span><div class="home-pyp-row-body"><strong>${escapeHtml(p.title)}</strong><small>${escapeHtml(p.board)} · ${escapeHtml(p.cls)} · ${escapeHtml(p.subject)} · ${escapeHtml(p.year)}</small></div><div class="paper-actions">${fileActions(p.file,'Open PDF','Download PDF',p.id,'open')}</div></div>`).join('');
}
function allQuizzes(){return [...QUIZZES,...localJSON('bt_custom_quizzes',[])];}
function renderQuizCards(){const board=$('#quizBoard').value,cls=$('#quizClass').value,sub=$('#quizSubject').value;const rows=allQuizzes().filter(q=>(board==='all'||q.board===board)&&(cls==='all'||q.cls===cls)&&(sub==='all'||q.subject===sub));$('#quizCards').innerHTML=rows.map(q=>`<article class="quiz-card"><span class="quiz-tag">${escapeHtml(q.board)} · ${escapeHtml(q.cls)}</span><h3>${escapeHtml(q.title)}</h3><p>${escapeHtml(q.source||'Practice quiz')}</p><div class="quiz-info"><span>${escapeHtml(q.subject)}</span><span>${q.questions.length} Questions</span><span>10 min</span></div><button type="button" data-start-quiz="${escapeAttr(q.id)}" ${q.questions.length?'':'disabled'}>${q.questions.length?'Start Quiz →':'Questions coming soon'}</button></article>`).join('')||'<div class="empty-note">No quiz for these filters yet.</div>';$('#quizWorkspace').hidden=true}
function startQuiz(id){const candidate=allQuizzes().find(q=>q.id===id);if(!candidate||!candidate.questions||!candidate.questions.length){toast('This quiz does not have any questions yet.');return}currentQuiz=candidate;quizIndex=0;quizAnswers=Array(currentQuiz.questions.length).fill(null);quizSubmitted=false;$('#quizWorkspace').hidden=false;renderQuestion();startQuizTimer();$('#quizWorkspace').scrollIntoView({behavior:'smooth',block:'start'})}
function renderQuestion(){const q=currentQuiz.questions[quizIndex],n=currentQuiz.questions.length,selected=quizAnswers[quizIndex];$('#quizWorkspace').innerHTML=`<div class="quiz-topline"><div><h3>${escapeHtml(currentQuiz.title)}</h3><small class="muted">${escapeHtml(currentQuiz.board)} · ${escapeHtml(currentQuiz.cls)} · ${escapeHtml(currentQuiz.subject)}</small></div><span class="question-number">QUESTION ${quizIndex+1} / ${n} · <b id="quizTimer">10:00</b></span></div><div class="quiz-progress"><span style="width:${((quizIndex+1)/n)*100}%"></span></div><p class="question-text">${escapeHtml(q.q)}</p><div class="answer-options">${q.o.map((o,i)=>`<button type="button" class="answer-option ${selected===i?'selected':''}" data-answer="${i}"><span class="option-letter">${'ABCD'[i]}</span>${escapeHtml(o)}</button>`).join('')}</div><div class="quiz-controls"><button data-quiz-prev ${quizIndex===0?'disabled':''}>← Previous</button><span class="question-number">${quizAnswers.filter(x=>x!==null).length} answered</span>${quizIndex===n-1?'<button class="primary" data-quiz-submit>Submit Quiz</button>':'<button class="primary" data-quiz-next>Next →</button>'}</div>`}
function submitQuiz(autoSubmitted=false){if(quizSubmitted||!currentQuiz)return;quizSubmitted=true;clearInterval(quizTimerId);quizTimerId=null;let score=0;currentQuiz.questions.forEach((q,i)=>{if(quizAnswers[i]===q.a)score++});const pct=Math.round(score/currentQuiz.questions.length*100);const details=currentQuiz.questions.map((q,i)=>{const good=quizAnswers[i]===q.a;return `<div class="quiz-explanation"><strong>Q${i+1} · ${good?'Correct':'Review this answer'}</strong><br>Correct answer: ${escapeHtml(q.o[q.a])}<br>${escapeHtml(q.e)}</div>`}).join('');$('#quizWorkspace').innerHTML=`<div class="quiz-result"><span class="eyebrow">${autoSubmitted?'TIME UP · QUIZ SUBMITTED':'QUIZ COMPLETED'}</span><strong>${score}/${currentQuiz.questions.length}</strong><h3>${pct}% Score</h3><p>${pct>=80?'Excellent work. Keep practising!':pct>=50?'Good effort. Review the explanations and try again.':'Keep learning. Review every explanation and retake the quiz.'}</p><button class="btn btn-primary" id="retakeQuiz">Retake Quiz</button> <button class="btn btn-outline" id="backToQuizzes">Back to Quizzes</button></div><h3>Answer review</h3>${details}`;$('#retakeQuiz').addEventListener('click',()=>startQuiz(currentQuiz.id));$('#backToQuizzes').addEventListener('click',()=>{$('#quizWorkspace').hidden=true;$('#quizCards').scrollIntoView({behavior:'smooth'})})}

// IndexedDB keeps local admin uploads available in this browser without placing PDF blobs in localStorage.
function openDB(){return new Promise((resolve,reject)=>{const req=indexedDB.open('BhandariTutorialLocal',1);req.onupgradeneeded=()=>req.result.createObjectStore('uploads',{keyPath:'id'});req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)})}
async function storeUpload(file,meta){const db=await openDB();return new Promise((resolve,reject)=>{const tx=db.transaction('uploads','readwrite');const id='local-'+Date.now()+'-'+Math.random().toString(36).slice(2,7);tx.objectStore('uploads').put({id,file,meta});tx.oncomplete=()=>resolve(id);tx.onerror=()=>reject(tx.error)})}
async function getUploads(){try{const db=await openDB();return await new Promise((resolve,reject)=>{const tx=db.transaction('uploads','readonly');const req=tx.objectStore('uploads').getAll();req.onsuccess=()=>resolve(req.result||[]);req.onerror=()=>reject(req.error)})}catch{return []}}
function applySiteContent(){const d=localJSON('bt_site_content',{});if(d.heroTitle)$('#heroHeading').textContent=d.heroTitle;if(d.heroSubtitle)$('#heroSubtitle').innerHTML=escapeHtml(d.heroSubtitle).replace(/(Learning Platform|Academic Success)/g,'<span>$1</span>');if(d.heroDescription)$('#heroDescription').textContent=d.heroDescription}
function renderOwnerCustomQuizzes(){const rows=localJSON('bt_custom_quizzes',[]);$('#ownerCustomQuizzes').innerHTML=rows.length?rows.map(q=>`<div class="owner-file-row"><span><strong>${escapeHtml(q.title)}</strong><br>${escapeHtml(q.board)} · ${escapeHtml(q.cls)} · ${escapeHtml(q.subject)} · ${q.questions.length}/10 questions ${q.questions.length>=10?'· Published':'· Draft'}</span><button type="button" data-remove-custom-quiz="${escapeAttr(q.id)}">Delete</button></div>`).join(''):'<div class="muted">No owner-created quizzes yet.</div>'}
function renderOwner(){const totalPapers=PAPERS.length+localJSON('bt_custom_resources',[]).filter(x=>x.type==='paper').length;const localResources=localJSON('bt_custom_resources',[]).length;$('#ownerStats').innerHTML=`<div class="owner-stat"><strong>${totalPapers}</strong><small>Bundled paper documents</small></div><div class="owner-stat"><strong>${BOOKS.length+localResources}</strong><small>Book / custom resources</small></div><div class="owner-stat"><strong>${allQuizzes().length}</strong><small>Source / owner quizzes</small></div><div class="owner-stat"><strong>${localJSON('bt_enquiries',[]).length}</strong><small>Local enquiries</small></div>`;renderOwnerUploads();renderOwnerEnquiries();renderOwnerCustomQuizzes();const home=localJSON('bt_site_content',{});const hf=$('#ownerHomeForm');if(hf){hf.elements.heroTitle.value=home.heroTitle||$('#heroHeading').textContent;hf.elements.heroSubtitle.value=home.heroSubtitle||$('#heroSubtitle').textContent;hf.elements.heroDescription.value=home.heroDescription||$('#heroDescription').textContent}}
async function renderOwnerUploads(){const rows=await getUploads();$('#ownerUploads').innerHTML=rows.length?rows.map(r=>`<div class="owner-file-row"><span><strong>${escapeHtml(r.meta.title)}</strong><br>${escapeHtml(r.meta.board)} · ${escapeHtml(r.meta.cls)} · ${escapeHtml(r.meta.subject)} · ${escapeHtml(r.meta.year||'')}</span><button data-remove-upload="${r.id}">Remove</button></div>`).join(''):'<div class="muted">No new local uploads yet.</div>'}
function renderOwnerEnquiries(){const rows=localJSON('bt_enquiries',[]);$('#ownerEnquiries').innerHTML=rows.length?rows.map(r=>`<div class="owner-file-row"><span><strong>${escapeHtml(r.name)}</strong> · ${escapeHtml(r.class)}<br>${escapeHtml(r.phone)} · ${escapeHtml(r.message||'No message')}</span><span class="muted">${escapeHtml(r.date)}</span></div>`).join(''):'<div class="muted">No local enquiries submitted yet.</div>'}
function deleteCustomQuiz(id){const rows=localJSON('bt_custom_quizzes',[]).filter(q=>q.id!==id);saveJSON('bt_custom_quizzes',rows);renderOwnerCustomQuizzes();renderQuizCards();renderOwner();toast('Owner-created quiz deleted.')}
async function deleteUpload(id){const db=await openDB();await new Promise((resolve,reject)=>{const tx=db.transaction('uploads','readwrite');tx.objectStore('uploads').delete(id);tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)});const custom=localJSON('bt_custom_resources',[]).filter(x=>x.id!==id);saveJSON('bt_custom_resources',custom);renderOwnerUploads();renderStudy();renderPapers();toast('Local upload removed.')}
async function openLocalFile(id,download=false){const db=await openDB();const row=await new Promise((resolve,reject)=>{const tx=db.transaction('uploads','readonly');const req=tx.objectStore('uploads').get(id);req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)});if(!row){toast('Local PDF not found in this browser.');return}const url=URL.createObjectURL(row.file);if(download){const a=document.createElement('a');a.href=url;a.download=row.file.name||`${row.meta.title}.pdf`;a.click();setTimeout(()=>URL.revokeObjectURL(url),3000)}else{window.open(url,'_blank','noopener');setTimeout(()=>URL.revokeObjectURL(url),60000)}}


// Spoken English knowledge check and 200-word daily vocabulary practice.
const SPOKEN_QUESTIONS = [
 {q:'She ___ to school every day.',o:['go','goes','going','gone'],a:1,e:'With he, she or it in the simple present tense, we usually add -s or -es to the verb.'},
 {q:'I have been waiting ___ two hours.',o:['since','for','at','from'],a:1,e:'Use “for” with a period of time, such as two hours. Use “since” with a starting point.'},
 {q:'Which sentence is a polite request?',o:['Give me your pen.','You must help me.','Could you please help me?','I want help now.'],a:2,e:'“Could you please…?” is a polite way to make a request.'},
 {q:'He is good ___ English.',o:['in','on','at','for'],a:2,e:'The common expression is “good at” a subject or activity.'},
 {q:'Choose the closest meaning of “rapid”.',o:['Slow','Quick','Weak','Quiet'],a:1,e:'“Rapid” means fast or quick.'},
 {q:'I am looking forward to ___ you.',o:['meet','met','meeting','meets'],a:2,e:'“Look forward to” is followed by a noun or an -ing form of the verb.'},
 {q:'What is the past tense of “teach”?',o:['Teached','Taught','Teaching','Teaches'],a:1,e:'“Teach” is an irregular verb. Its past tense is “taught”.'},
 {q:'There isn’t ___ milk left.',o:['many','few','much','several'],a:2,e:'“Milk” is uncountable, so “much” is used in this sentence.'},
 {q:'What does the phrase “once in a blue moon” mean?',o:['Every day','Very rarely','At night','Very quickly'],a:1,e:'“Once in a blue moon” is an idiom meaning very rarely.'},
 {q:'Choose the correct sentence.',o:['They doesn’t like coffee.','They not like coffee.','They don’t likes coffee.','They don’t like coffee.'],a:3,e:'With “they”, use “do not / don’t” followed by the base form “like”.'}
];
const DAILY_VOCAB = [
 {w:'ability',m:'क्षमता',e:'She has the ability to learn quickly.'},
 {w:'accept',m:'स्वीकार करना',e:'Please accept my invitation.'},
 {w:'achieve',m:'हासिल करना',e:'You can achieve your goals with practice.'},
 {w:'advice',m:'सलाह',e:'My teacher gave me useful advice.'},
 {w:'afraid',m:'डरा हुआ',e:'Do not be afraid to speak English.'},
 {w:'affordable',m:'किफायती',e:'This course is affordable for students.'},
 {w:'agree',m:'सहमत होना',e:'I agree with your idea.'},
 {w:'allow',m:'अनुमति देना',e:'My parents allow me to play outside.'},
 {w:'almost',m:'लगभग',e:'I have almost finished my homework.'},
 {w:'alone',m:'अकेला',e:'He lives alone in the city.'},
 {w:'already',m:'पहले से',e:'I have already eaten breakfast.'},
 {w:'although',m:'हालाँकि',e:'Although it was raining, we went out.'},
 {w:'always',m:'हमेशा',e:'She always speaks politely.'},
 {w:'answer',m:'जवाब देना',e:'Please answer my question.'},
 {w:'appear',m:'दिखाई देना',e:'A rainbow may appear after rain.'},
 {w:'arrive',m:'पहुँचना',e:'We arrived at school on time.'},
 {w:'ask',m:'पूछना',e:'You can ask me anything.'},
 {w:'avoid',m:'बचना',e:'Avoid using your phone while studying.'},
 {w:'awake',m:'जागा हुआ',e:'I was awake early this morning.'},
 {w:'aware',m:'जानकार',e:'Are you aware of the new rule?'},
 {w:'beautiful',m:'सुंदर',e:'The garden looks beautiful.'},
 {w:'believe',m:'विश्वास करना',e:'I believe in hard work.'},
 {w:'belong',m:'का होना',e:'This book belongs to my brother.'},
 {w:'borrow',m:'उधार लेना',e:'May I borrow your pen?'},
 {w:'brave',m:'बहादुर',e:'The brave girl helped the child.'},
 {w:'busy',m:'व्यस्त',e:'I am busy with my homework.'},
 {w:'careful',m:'सावधान',e:'Be careful while crossing the road.'},
 {w:'carry',m:'ले जाना',e:'Please carry your water bottle.'},
 {w:'celebrate',m:'जश्न मनाना',e:'We celebrate festivals together.'},
 {w:'change',m:'बदलना',e:'A little practice can change your confidence.'},
 {w:'choose',m:'चुनना',e:'Choose the correct answer.'},
 {w:'clever',m:'चतुर',e:'He is a clever student.'},
 {w:'comfortable',m:'आरामदायक',e:'These shoes are comfortable.'},
 {w:'common',m:'आम',e:'This is a common English expression.'},
 {w:'compare',m:'तुलना करना',e:'Do not compare yourself with others.'},
 {w:'complete',m:'पूरा करना',e:'I will complete this work today.'},
 {w:'confident',m:'आत्मविश्वासी',e:'She feels confident while speaking.'},
 {w:'confuse',m:'उलझन में डालना',e:'Similar words sometimes confuse learners.'},
 {w:'connect',m:'जोड़ना',e:'This road connects two villages.'},
 {w:'consider',m:'विचार करना',e:'Please consider my suggestion.'},
 {w:'continue',m:'जारी रखना',e:'Continue your practice every day.'},
 {w:'correct',m:'सही',e:'Your answer is correct.'},
 {w:'courage',m:'हौसला बढ़ाना',e:'Good teachers encourage their students.'},
 {w:'curious',m:'जिज्ञासु',e:'The curious child asked many questions.'},
 {w:'decide',m:'निर्णय लेना',e:'I will decide after talking to my parents.'},
 {w:'delicious',m:'स्वादिष्ट',e:'The food smells delicious.'},
 {w:'depend',m:'निर्भर होना',e:'Success does not depend only on luck.'},
 {w:'describe',m:'वर्णन करना',e:'Can you describe your classroom?'},
 {w:'different',m:'अलग',e:'We have different opinions.'},
 {w:'difficult',m:'कठिन',e:'This question is not difficult.'},
 {w:'discover',m:'खोज करना',e:'Scientists discover new things.'},
 {w:'discuss',m:'चर्चा करना',e:'Let us discuss the problem.'},
 {w:'during',m:'के दौरान',e:'Do not talk during the lesson.'},
 {w:'early',m:'जल्दी',e:'I wake up early every day.'},
 {w:'earn',m:'कमाना',e:'She wants to earn her own money.'},
 {w:'easy',m:'आसान',e:'This lesson is easy to understand.'},
 {w:'educate',m:'शिक्षित करना',e:'Books educate and inspire us.'},
 {w:'effort',m:'प्रयास',e:'Your effort will bring improvement.'},
 {w:'either',m:'दोनों में से कोई एक',e:'You can take either of these books.'},
 {w:'else',m:'अन्य',e:'Would you like anything else?'},
 {w:'emergency',m:'आपातकाल',e:'Call for help in an emergency.'},
 {w:'emotion',m:'भावना',e:'Music can express emotion.'},
 {w:'enough',m:'पर्याप्त',e:'We have enough time to revise.'},
 {w:'entire',m:'पूरा',e:'I read the entire chapter.'},
 {w:'especially',m:'विशेष रूप से',e:'I especially enjoy reading stories.'},
 {w:'everywhere',m:'हर जगह',e:'People use mobile phones everywhere.'},
 {w:'exactly',m:'बिल्कुल सही',e:'That is exactly what I meant.'},
 {w:'example',m:'उदाहरण',e:'Give one example with your answer.'},
 {w:'excellent',m:'उत्कृष्ट',e:'You did an excellent job.'},
 {w:'excited',m:'उत्साहित',e:'I am excited about the school trip.'},
 {w:'expect',m:'उम्मीद करना',e:'I expect you to do your best.'},
 {w:'explain',m:'समझाना',e:'Please explain this word again.'},
 {w:'familiar',m:'परिचित',e:'This place looks familiar to me.'},
 {w:'famous',m:'प्रसिद्ध',e:'The city is famous for its food.'},
 {w:'fast',m:'तेज़',e:'He can run very fast.'},
 {w:'favourite',m:'पसंदीदा',e:'English is my favourite subject.'},
 {w:'finally',m:'आखिरकार',e:'Finally, we reached the station.'},
 {w:'finish',m:'समाप्त करना',e:'Finish your work before dinner.'},
 {w:'follow',m:'पालन करना',e:'Follow the instructions carefully.'},
 {w:'forget',m:'भूल जाना',e:'Do not forget your homework.'},
 {w:'forgive',m:'माफ करना',e:'Please forgive my mistake.'},
 {w:'frequent',m:'बार-बार होने वाला',e:'Frequent practice improves your fluency.'},
 {w:'friendly',m:'मिलनसार',e:'Our new neighbour is friendly.'},
 {w:'future',m:'भविष्य',e:'Think about your future goals.'},
 {w:'gather',m:'इकट्ठा करना',e:'We gather in the classroom every morning.'},
 {w:'general',m:'सामान्य',e:'This is a general rule.'},
 {w:'generous',m:'उदार',e:'It was generous of him to help us.'},
 {w:'gentle',m:'कोमल',e:'Use a gentle voice with small children.'},
 {w:'glad',m:'खुश',e:'I am glad to meet you.'},
 {w:'grateful',m:'आभारी',e:'I am grateful for your support.'},
 {w:'guess',m:'अनुमान लगाना',e:'Can you guess the answer?'},
 {w:'habit',m:'आदत',e:'Reading is a good habit.'},
 {w:'happen',m:'होना',e:'What happened yesterday?'},
 {w:'hardly',m:'मुश्किल से',e:'I could hardly hear the announcement.'},
 {w:'healthy',m:'स्वस्थ',e:'A healthy breakfast gives you energy.'},
 {w:'helpful',m:'मददगार',e:'Your notes are very helpful.'},
 {w:'honest',m:'ईमानदार',e:'Always be honest with your teacher.'},
 {w:'hope',m:'आशा करना',e:'I hope you feel better soon.'},
 {w:'however',m:'हालाँकि',e:'The task was difficult; however, we finished it.'},
 {w:'huge',m:'बहुत बड़ा',e:'They live in a huge house.'},
 {w:'hurry',m:'जल्दी करना',e:'There is no need to hurry.'},
 {w:'imagine',m:'कल्पना करना',e:'Imagine a world without pollution.'},
 {w:'immediately',m:'तुरंत',e:'Please call me immediately.'},
 {w:'important',m:'महत्वपूर्ण',e:'Practice is important for speaking well.'},
 {w:'improve',m:'सुधारना',e:'I want to improve my vocabulary.'},
 {w:'include',m:'शामिल करना',e:'Please include your name on the form.'},
 {w:'increase',m:'बढ़ाना',e:'Reading can increase your knowledge.'},
 {w:'indeed',m:'वास्तव में',e:'It is indeed a good idea.'},
 {w:'instead',m:'इसके बजाय',e:'Drink water instead of soft drinks.'},
 {w:'interest',m:'रुचि',e:'I have an interest in science.'},
 {w:'interesting',m:'दिलचस्प',e:'That is an interesting story.'},
 {w:'invite',m:'निमंत्रण देना',e:'I will invite my friends to the party.'},
 {w:'issue',m:'मुद्दा / समस्या',e:'We should discuss this issue calmly.'},
 {w:'join',m:'शामिल होना',e:'Would you like to join our team?'},
 {w:'journey',m:'यात्रा',e:'Our journey begins early tomorrow.'},
 {w:'judge',m:'आकलन करना',e:'Do not judge people too quickly.'},
 {w:'kind',m:'दयालु',e:'Be kind to everyone.'},
 {w:'knowledge',m:'ज्ञान',e:'Books are a source of knowledge.'},
 {w:'latest',m:'नवीनतम',e:'Have you seen the latest news?'},
 {w:'lazy',m:'आलसी',e:'Do not be lazy about your practice.'},
 {w:'likely',m:'संभावित',e:'It is likely to rain today.'},
 {w:'manage',m:'संभालना',e:'She can manage her time well.'},
 {w:'meaning',m:'अर्थ',e:'What is the meaning of this word?'},
 {w:'mention',m:'उल्लेख करना',e:'He forgot to mention the date.'},
 {w:'message',m:'संदेश',e:'I received your message.'},
 {w:'mistake',m:'गलती',e:'Everyone makes a mistake sometimes.'},
 {w:'necessary',m:'ज़रूरी',e:'It is necessary to carry your ID.'},
 {w:'nearly',m:'करीब-करीब',e:'The class is nearly over.'},
 {w:'notice',m:'ध्यान देना',e:'Did you notice the spelling mistake?'},
 {w:'obvious',m:'स्पष्ट',e:'The answer seems obvious now.'},
 {w:'offer',m:'प्रस्ताव देना',e:'They offer free drinking water.'},
 {w:'often',m:'अक्सर',e:'I often visit my grandparents.'},
 {w:'opinion',m:'राय',e:'What is your opinion about this book?'},
 {w:'opportunity',m:'अवसर',e:'This is a good opportunity to learn.'},
 {w:'ordinary',m:'साधारण',e:'It was an ordinary day.'},
 {w:'organise',m:'व्यवस्थित करना',e:"Let's organise our study table."},
 {w:'otherwise',m:'अन्यथा',e:'Leave now, otherwise you may be late.'},
 {w:'patient',m:'धैर्यवान',e:'Be patient while learning a new skill.'},
 {w:'perhaps',m:'शायद',e:'Perhaps we can meet tomorrow.'},
 {w:'permanent',m:'स्थायी',e:'This is not a permanent solution.'},
 {w:'polite',m:'विनम्र',e:'It is polite to say thank you.'},
 {w:'possible',m:'संभव',e:'Anything is possible with effort.'},
 {w:'prefer',m:'अधिक पसंद करना',e:'I prefer tea to coffee.'},
 {w:'prepare',m:'तैयारी करना',e:'We should prepare for the test.'},
 {w:'present',m:'उपस्थित',e:'All students are present today.'},
 {w:'prevent',m:'रोकना',e:'Exercise can help prevent illness.'},
 {w:'probably',m:'संभवतः',e:'He will probably arrive soon.'},
 {w:'promise',m:'वादा करना',e:'I promise to help you.'},
 {w:'proper',m:'उचित',e:'Use proper language in the interview.'},
 {w:'protect',m:'रक्षा करना',e:'Wear a helmet to protect your head.'},
 {w:'proud',m:'गर्व महसूस करना',e:'Your parents are proud of you.'},
 {w:'provide',m:'उपलब्ध कराना',e:'The school will provide books.'},
 {w:'quickly',m:'जल्दी से',e:'Please come here quickly.'},
 {w:'quiet',m:'शांत',e:'Please keep quiet in the library.'},
 {w:'realise',m:'अहसास होना',e:'I realise my mistake now.'},
 {w:'reason',m:'कारण',e:'What is the reason for the delay?'},
 {w:'receive',m:'प्राप्त करना',e:'Did you receive my email?'},
 {w:'recently',m:'हाल ही में',e:'I recently started learning English.'},
 {w:'recommend',m:'सुझाव देना',e:'Can you recommend a good book?'},
 {w:'remember',m:'याद रखना',e:'Remember to lock the door.'},
 {w:'remind',m:'याद दिलाना',e:'Please remind me about the meeting.'},
 {w:'repair',m:'मरम्मत करना',e:'We need to repair this chair.'},
 {w:'repeat',m:'दोहराना',e:'Could you repeat that sentence?'},
 {w:'reply',m:'जवाब देना',e:'Please reply to my message.'},
 {w:'request',m:'अनुरोध करना',e:'May I make a request?'},
 {w:'respect',m:'सम्मान करना',e:'We should respect everyone.'},
 {w:'responsible',m:'ज़िम्मेदार',e:'She is responsible for the project.'},
 {w:'result',m:'परिणाम',e:'The test result will come tomorrow.'},
 {w:'return',m:'लौटाना / वापस आना',e:'Please return my notebook tomorrow.'},
 {w:'review',m:'दोहराना',e:'Review your lessons before the exam.'},
 {w:'rude',m:'असभ्य',e:'It is rude to interrupt someone.'},
 {w:'safe',m:'सुरक्षित',e:'Keep your documents in a safe place.'},
 {w:'save',m:'बचाना',e:'Save your work before closing the file.'},
 {w:'seem',m:'लगना',e:'You seem happy today.'},
 {w:'select',m:'चुनना',e:'Select one answer from the options.'},
 {w:'serious',m:'गंभीर',e:'This is a serious matter.'},
 {w:'share',m:'साझा करना',e:'Please share your notes with me.'},
 {w:'shortly',m:'जल्द ही',e:'The bus will arrive shortly.'},
 {w:'simple',m:'सरल',e:'Use simple words while speaking.'},
 {w:'sincere',m:'ईमानदार / सच्चा',e:'She gave a sincere apology.'},
 {w:'situation',m:'स्थिति',e:'Stay calm in a difficult situation.'},
 {w:'solution',m:'समाधान',e:'We found a solution to the problem.'},
 {w:'special',m:'खास',e:'Today is a special day.'},
 {w:'suggest',m:'सुझाव देना',e:'Can you suggest a good movie?'},
 {w:'support',m:'समर्थन करना',e:'My family supports my education.'},
 {w:'suppose',m:'मान लेना',e:'Suppose you miss the bus; what will you do?'},
 {w:'sure',m:'निश्चित',e:'Are you sure about your answer?'},
 {w:'surprise',m:'आश्चर्य',e:'The gift was a nice surprise.'},
 {w:'surroundings',m:'आस-पास का वातावरण',e:'Keep your surroundings clean.'},
 {w:'take care',m:'ध्यान रखना',e:'Take care of your health.'},
 {w:'talented',m:'प्रतिभाशाली',e:'He is a talented musician.'},
 {w:'task',m:'काम',e:'I have one more task to finish.'},
 {w:'thankful',m:'आभारी',e:'I am thankful for your kindness.'},
 {w:'therefore',m:'इसलिए',e:'It was late; therefore, we went home.'},
 {w:'through',m:'के माध्यम से',e:'We learned through practice.'},
 {w:'tidy',m:'साफ-सुथरा',e:'Keep your desk tidy.'},
 {w:'together',m:'साथ में',e:"Let's study together this evening."},
 {w:'towards',m:'की ओर',e:'She walked towards the gate.'},
 {w:'tradition',m:'परंपरा',e:'It is our family tradition.'},
 {w:'traffic',m:'यातायात',e:'There is heavy traffic today.'}
];
let spokenQuestionIndex=0;
let spokenAnswers=Array(SPOKEN_QUESTIONS.length).fill(null);
let vocabBag=[];
function refillVocabBag(){vocabBag=DAILY_VOCAB.map((_,i)=>i);for(let i=vocabBag.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[vocabBag[i],vocabBag[j]]=[vocabBag[j],vocabBag[i]]}}
function startSpokenQuiz(){spokenQuestionIndex=0;spokenAnswers=Array(SPOKEN_QUESTIONS.length).fill(null);renderSpokenQuestion();$('#spokenQuizWorkspace').hidden=false;$('#spokenQuizWorkspace').scrollIntoView({behavior:'smooth',block:'start'})}
function renderSpokenQuestion(){
 const q=SPOKEN_QUESTIONS[spokenQuestionIndex];
 const chosen=spokenAnswers[spokenQuestionIndex];
 const options=q.o.map((o,i)=>`<button type="button" class="spoken-option ${chosen===i?'selected':''}" data-spoken-answer="${i}"><span>${String.fromCharCode(65+i)}</span>${escapeHtml(o)}</button>`).join('');
 $('#spokenQuizWorkspace').innerHTML=`<div class="spoken-quiz-head"><div><span class="eyebrow">CHECK YOUR KNOWLEDGE</span><h2>English Skills Check</h2></div><strong>Question ${spokenQuestionIndex+1} <small>/ ${SPOKEN_QUESTIONS.length}</small></strong></div><div class="spoken-progress"><span style="width:${(spokenQuestionIndex+1)/SPOKEN_QUESTIONS.length*100}%"></span></div><p class="spoken-question-count">Question ${spokenQuestionIndex+1} of ${SPOKEN_QUESTIONS.length}</p><h3 class="spoken-question">${escapeHtml(q.q)}</h3><div class="spoken-options">${options}</div><div class="spoken-quiz-actions">${spokenQuestionIndex?'<button type="button" class="btn btn-outline" data-spoken-action="prev">← Previous</button>':'<span></span>'}${spokenQuestionIndex===SPOKEN_QUESTIONS.length-1?'<button type="button" class="btn btn-primary" data-spoken-action="finish">Check My Score →</button>':'<button type="button" class="btn btn-primary" data-spoken-action="next">Next Question →</button>'}</div><p class="spoken-hint">You can move back and change your answers before checking your score.</p>`;
}
function finishSpokenQuiz(){
 const score=spokenAnswers.reduce((n,a,i)=>n+(a===SPOKEN_QUESTIONS[i].a?1:0),0);
 const pct=score*10;
 let heading,message,tone;
 if(score<=3){heading='Every expert was once a beginner!';message='Your score shows that you need more practice with basic English. Don’t feel discouraged. With regular speaking practice and proper guidance, you can improve step by step.';tone='needs-practice'}
 else if(score<=6){heading='Good start — keep practising!';message='You understand some English basics, and now it is time to make them stronger. Regular conversation practice can help you speak more naturally and confidently.';tone='getting-there'}
 else if(score<=9){heading='Very good! You are doing well.';message='You have a good foundation. Work on fluency, pronunciation and everyday conversations to take your English to the next level.';tone='good-score'}
 else{heading='Perfect score! Excellent work!';message='You answered every question correctly. Keep polishing your speaking, pronunciation and confidence so that your knowledge becomes natural conversation.';tone='perfect-score'}
 const review=SPOKEN_QUESTIONS.map((q,i)=>`<div class="spoken-review-row"><strong>Q${i+1}. ${escapeHtml(q.q)}</strong><span class="${spokenAnswers[i]===q.a?'review-correct':'review-wrong'}">${spokenAnswers[i]===q.a?'✓ Correct':'✕ Correct answer: '+escapeHtml(q.o[q.a])}</span><small>${escapeHtml(q.e)}</small></div>`).join('');
 const waText=encodeURIComponent(`Namaste Bhandari Tutorial, maine website par Spoken English Knowledge Check diya. Mera score ${score}/10 (${pct}%) hai. Mujhe Spoken English classes ki details chahiye.`);
 $('#spokenQuizWorkspace').innerHTML=`<div class="spoken-result ${tone}"><span class="eyebrow">YOUR RESULT</span><div class="spoken-score">${score}<small>/10</small></div><h2>${heading}</h2><p>${message}</p><div class="spoken-result-track"><span style="width:${pct}%"></span></div><strong class="spoken-score-label">Your score: ${pct}%</strong><div class="spoken-result-actions"><a class="btn btn-primary" href="https://api.whatsapp.com/send?phone=919407427002&text=${waText}" >Ask About Spoken English Classes ↗</a><button class="btn btn-outline" type="button" data-spoken-action="restart">Try Again</button></div></div><div class="spoken-review"><h3>Answer Review</h3>${review}</div>`;
 $('#spokenQuizWorkspace').scrollIntoView({behavior:'smooth',block:'start'});
}
function showNextVocabulary(){
 if(vocabBag.length<5)refillVocabBag();
 const batch=vocabBag.splice(0,5).map(index=>DAILY_VOCAB[index]);
 const cards=batch.map(v=>`<article class="vocab-word"><div class="vocab-word-top"><span class="vocab-index">✦</span><span class="vocab-tag">DAILY WORD</span></div><h3>${escapeHtml(v.w)}</h3><p class="vocab-meaning">${escapeHtml(v.m)}</p><div class="vocab-example"><small>EXAMPLE</small><p>${escapeHtml(v.e)}</p></div></article>`).join('');
 $('#vocabWorkspace').innerHTML=`<div class="vocab-header"><div><span class="eyebrow">DAILY VOCABULARY PRACTICE</span><h2>Five fresh words</h2><p>New random words with Hindi meanings and example sentences appear every time.</p></div><button class="btn btn-primary" type="button" data-spoken-action="new-vocab">Show Next 5 Words →</button></div><div class="vocab-word-grid">${cards}</div>`;
}



/* Whole-site scroll reveal animation. Also observes content re-rendered by filters and quizzes. */
function btSetupRevealAnimations(){
 if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 if(!('IntersectionObserver' in window))return;
 const selector=[
  '.page-banner','.premium-hero','.proof-strip','.home-section-heading',
  '.home-feature-card','.home-programme-card','.panel','.panel-heading',
  '.class-list button','.resource-shortcut','.admission-mini',
  '.home-pyp-panel','.home-pyp-row','.bottom-callout','.spoken-bottom-callout',
  '.filter-panel','.section-title-row','.content-card','.chapter-box',
  '.quiz-card','.quiz-workspace','.quiz-result','.quiz-explanation',
  '.paper-archive-summary','.paper-group','.paper-doc',
  '.spoken-intro','.spoken-test-card','.spoken-vocab-card',
  '.spoken-workspace','.vocab-workspace','.vocab-word',
  '.spoken-result','.spoken-review-row',
  '.about-layout','.about-facts span','.update-item',
  '.contact-info','.contact-row','.enquiry-form',
  '.owner-warning','.owner-stats>*','.owner-card',
  '.owner-upload-list>*','.guest-quota-strip',
  '.site-footer .footer-main>div','.site-footer .footer-bottom',
  '.hero-caption','.hero-actions .btn','.card-actions>*',
  '.paper-actions>*','.quiz-card button','.answer-option',
  '.quiz-controls button','.spoken-option','.spoken-quiz-actions>*',
  '.vocab-header .btn','.owner-upload-list .btn',
  '.access-modal-backdrop .access-modal'
 ].join(',');
 let order=0;
 const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
   if(!entry.isIntersecting)return;
   const el=entry.target;
   el.classList.add('bt-in-view');
   el.classList.remove('bt-reveal-pending');
   observer.unobserve(el);
  });
 },{root:null,rootMargin:'0px 0px -6% 0px',threshold:0.06});
 const register=el=>{
  if(!(el instanceof Element)||el.classList.contains('bt-reveal-ready'))return;
  el.classList.add('bt-reveal-ready','bt-reveal-pending');
  el.style.setProperty('--bt-reveal-delay',(Math.min(order%5,4)*55)+'ms');
  order++;
  observer.observe(el);
 };
 const scan=root=>{
  if(!root)return;
  if(root instanceof Element&&root.matches(selector))register(root);
  if(root.querySelectorAll)root.querySelectorAll(selector).forEach(register);
 };
 scan(document.body);
 const mutations=new MutationObserver(records=>{
  records.forEach(record=>record.addedNodes.forEach(node=>{
   if(node instanceof Element)scan(node);
  }));
 });
 mutations.observe(document.body,{childList:true,subtree:true});
}

function init(){
 btSetupRevealAnimations();
 $('#yearNow').textContent=new Date().getFullYear();applySiteContent();
 CLASS9_CHAPTERS.forEach((ch,i)=>$('#chapterChips').insertAdjacentHTML('beforeend',`<span>${i+1}. ${escapeHtml(ch)}</span>`));
 renderUpdates();renderStudy();renderPapers();renderHomePapers();renderQuizCards();renderGuestQuota();
 $('#menuToggle').addEventListener('click',()=>{const open=$('#mainNav').classList.toggle('open');$('#menuToggle').setAttribute('aria-expanded',String(open));$('#menuToggle').setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');$('#menuToggle').innerHTML=open?'<span aria-hidden="true">×</span><span class="menu-toggle-label">Close</span>':'<span aria-hidden="true">☰</span><span class="menu-toggle-label">Menu</span>';});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('#mainNav').classList.contains('open')){$('#mainNav').classList.remove('open');$('#menuToggle').setAttribute('aria-expanded','false');$('#menuToggle').setAttribute('aria-label','Open navigation menu');$('#menuToggle').innerHTML='<span aria-hidden="true">☰</span><span class="menu-toggle-label">Menu</span>';$('#menuToggle').focus();}});
 window.addEventListener('resize',()=>{if(window.innerWidth>1080&&$('#mainNav').classList.contains('open')){$('#mainNav').classList.remove('open');$('#menuToggle').setAttribute('aria-expanded','false');$('#menuToggle').setAttribute('aria-label','Open navigation menu');$('#menuToggle').innerHTML='<span aria-hidden="true">☰</span><span class="menu-toggle-label">Menu</span>';}});
 document.addEventListener('click',e=>{
  const spokenAction=e.target.closest('[data-spoken-action]');if(spokenAction){const action=spokenAction.dataset.spokenAction;if(action==='start')startSpokenQuiz();else if(action==='next'){spokenQuestionIndex=Math.min(SPOKEN_QUESTIONS.length-1,spokenQuestionIndex+1);renderSpokenQuestion()}else if(action==='prev'){spokenQuestionIndex=Math.max(0,spokenQuestionIndex-1);renderSpokenQuestion()}else if(action==='finish')finishSpokenQuiz();else if(action==='restart')startSpokenQuiz();else if(action==='new-vocab')showNextVocabulary();return}
  const spokenAnswer=e.target.closest('[data-spoken-answer]');if(spokenAnswer){spokenAnswers[spokenQuestionIndex]=Number(spokenAnswer.dataset.spokenAnswer);renderSpokenQuestion();return}
  const classBtn=e.target.closest('[data-class]');if(classBtn){e.preventDefault();const target=classBtn.dataset.targetPage||'study';navigate(target);if(target==='papers'){const board=classBtn.dataset.board||'all';currentBoardFilter=board;$('#paperClass').value=classBtn.dataset.class;$('#paperSubject').value=classBtn.dataset.subject||'all';$$('[data-board-filter]').forEach(x=>x.classList.toggle('active',x.dataset.boardFilter===board));renderPapers()}else{$('#studyClass').value=classBtn.dataset.class;renderStudy()}return}
  const pageLink=e.target.closest('a[data-page],button[data-page]');if(pageLink){e.preventDefault();navigate(pageLink.dataset.page);return}
  const localOpen=e.target.closest('[data-open-local]');if(localOpen){openLocalFile(localOpen.dataset.openLocal,false);return}
  const localDownload=e.target.closest('[data-download-local]');if(localDownload){openLocalFile(localDownload.dataset.downloadLocal,true);return}
  const classGoto=e.target.closest('[data-class-goto]');if(classGoto){navigate('study');$('#studyClass').value=classGoto.dataset.classGoto;renderStudy();return}
  const start=e.target.closest('[data-start-quiz]');if(start){startQuiz(start.dataset.startQuiz);return}
  const answer=e.target.closest('[data-answer]');if(answer&&!quizSubmitted){quizAnswers[quizIndex]=Number(answer.dataset.answer);renderQuestion();return}
  if(e.target.closest('[data-quiz-prev]')){quizIndex=Math.max(0,quizIndex-1);renderQuestion();return}
  if(e.target.closest('[data-quiz-next]')){quizIndex=Math.min(currentQuiz.questions.length-1,quizIndex+1);renderQuestion();return}
  if(e.target.closest('[data-quiz-submit]')){submitQuiz();return}
  const remove=e.target.closest('[data-remove-upload]');if(remove){deleteUpload(remove.dataset.removeUpload);return}const removeQuiz=e.target.closest('[data-remove-custom-quiz]');if(removeQuiz){deleteCustomQuiz(removeQuiz.dataset.removeCustomQuiz);return}
 });
 $('#studyClass').addEventListener('change',renderStudy);$('#studySubject').addEventListener('change',renderStudy);$('#studySearch').addEventListener('input',renderStudy);
 $('#quizBoard').addEventListener('change',renderQuizCards);$('#quizClass').addEventListener('change',renderQuizCards);$('#quizSubject').addEventListener('change',renderQuizCards);
 ['paperClass','paperSubject','paperType'].forEach(id=>$('#'+id).addEventListener('change',renderPapers));
 $$('[data-board-filter]').forEach(b=>b.addEventListener('click',()=>{currentBoardFilter=b.dataset.boardFilter;$$('[data-board-filter]').forEach(x=>x.classList.toggle('active',x===b));renderPapers()}));
 $('#ownerHomeForm').addEventListener('submit',e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.currentTarget));saveJSON('bt_site_content',d);applySiteContent();toast('Homepage text updated in this browser.')});
 $('#ownerQuizForm').addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget));const id='owner-'+[data.board,data.class,data.subject,data.title].join('-').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');const rows=localJSON('bt_custom_quizzes',[]);let quiz=rows.find(q=>q.id===id);if(!quiz){quiz={id,board:data.board,cls:data.class,subject:data.subject,title:data.title,source:'Created by Bhandari Tutorial owner',questions:[]};rows.push(quiz)}if(quiz.questions.length>=10){$('#ownerQuizMessage').textContent='This quiz already has 10 questions. Create a new title for another quiz.';return}quiz.questions.push({q:data.question,o:[data.optionA,data.optionB,data.optionC,data.optionD],a:Number(data.correct),e:data.explanation});saveJSON('bt_custom_quizzes',rows);const count=quiz.questions.length;$('#ownerQuizMessage').textContent=`Question saved. ${count}/10 questions added${count===10?' — quiz is now published.':'.'}`;e.currentTarget.elements.question.value='';e.currentTarget.elements.optionA.value='';e.currentTarget.elements.optionB.value='';e.currentTarget.elements.optionC.value='';e.currentTarget.elements.optionD.value='';e.currentTarget.elements.explanation.value='';renderOwnerCustomQuizzes();renderQuizCards();renderOwner()});
 $('#ownerEntry').addEventListener('click',()=>navigate('owner'));
 $('#enquiryForm').addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget));data.date=new Date().toLocaleDateString();const rows=localJSON('bt_enquiries',[]);rows.unshift(data);saveJSON('bt_enquiries',rows);const message=['Namaste Bhandari Tutorial, mujhe admission/course details chahiye.','',`Student Name: ${data.name}`,`Mobile Number: ${data.phone}`,`Class: ${data.class}`,`Enquiry: ${data.message||'Please contact me with details.'}`].join('\n');const waUrl=`https://api.whatsapp.com/send?phone=919407427002&text=${encodeURIComponent(message)}`;$('#enquiryMessage').textContent='Opening WhatsApp with your enquiry. Please press Send in WhatsApp to submit it to Bhandari Tutorial.';e.currentTarget.reset();window.location.assign(waUrl)});
 $('#ownerUploadForm').addEventListener('submit',async e=>{e.preventDefault();const form=e.currentTarget,data=new FormData(form),file=data.get('file');if(!file||file.type!=='application/pdf'){toast('Please select a PDF file.');return}if(file.size>50*1024*1024){toast('Demo upload limit is 50 MB per file.');return}const contentType=data.get('type');const meta={title:data.get('title'),board:data.get('board'),cls:data.get('class'),subject:data.get('subject'),year:data.get('year'),type:contentType,kind:contentType==='resource'?'resource':contentType};try{const id=await storeUpload(file,meta);const saved=localJSON('bt_custom_resources',[]);saved.unshift({...meta,id,file:`#local:${id}`,details:`${(file.size/1024/1024).toFixed(1)} MB · Local browser upload`});saveJSON('bt_custom_resources',saved);form.reset();renderOwner();toast('PDF saved to this browser. Not published online.')}catch(err){toast('Could not store the file in this browser.')}});
 $('#ownerNoticeForm').addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.currentTarget));data.date=new Date().toLocaleDateString();const rows=localJSON('bt_local_updates',[]);rows.unshift(data);saveJSON('bt_local_updates',rows);e.currentTarget.reset();renderUpdates();toast('Local notice added.')});
 $('#refreshUploads').addEventListener('click',renderOwnerUploads);
 window.addEventListener('popstate',()=>{const page=location.hash.replace(/^#/, '')||'home';renderPage(page,{scroll:true})});
 const initial=location.hash.replace(/^#/, '')||'home';navigate(initial,{historyMode:'replace',scroll:false});
}
document.addEventListener('DOMContentLoaded',init);
