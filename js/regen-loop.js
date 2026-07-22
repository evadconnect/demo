/* ─── BOUCLE VADE réutilisable (Bâtisseur & Semeur) ───
   Valoriser → Activer → Développer → Élever (charte des ICI). */
const REGEN_LOOP_NODES = [
  {letter:'V', name:'Valoriser',  color:'#018262', x:150, y:35},
  {letter:'A', name:'Activer',    color:'#2d6a9f', x:265, y:150},
  {letter:'D', name:'Développer', color:'#c8732a', x:150, y:265},
  {letter:'E', name:'Élever',     color:'#6b5b95', x:35,  y:150},
];
const REGEN_PROFILE_CONTENT = {
  batisseur: { label:'Bâtisseur', steps:[
    {title:'Valoriser : repérer où ton impact compte', desc:'Découvrir les lieux et leur base T0, repérer les boucles où tes compétences font la différence.', tags:['📍 Diagnostic T0','🔍 Découverte'], outils:['Carte','Modélisation 3D','Deva'],
     taches:['Explorer les lieux et leur diagnostic T0','Repérer les boucles où tes compétences comptent','Te projeter dans une contribution idéale']},
    {title:'Activer : rejoindre les quêtes', desc:'Répondre aux quêtes ouvertes et passer à l\'action sur le terrain.', tags:['⚡ Action','🤝 Communauté'], outils:['Quêtes','Réseau','Marketplace (Vade)'],
     taches:['Parcourir les quêtes ouvertes sur la carte','Rejoindre une quête alignée avec tes valeurs','Mobiliser ta communauté autour de l\'action']},
    {title:'Développer : prouver l\'impact', desc:'Réaliser les quêtes-preuve, documenter les preuves, gagner du Vade.', tags:['📊 Preuve','🪙 Vade'], outils:['Quêtes-preuve','Preuves','Monnaie Vade'],
     taches:['Contribuer sur le terrain','Documenter les preuves (photos, registres)','Recevoir ton Vade en contrepartie']},
    {title:'Élever : nourrir le commun', desc:'Faire vérifier, partager tes retours, enrichir le référentiel commun.', tags:['🔍 Pairs','🌍 Commun'], outils:['Vérification pairs','Bibliothèque','Amendement du commun'],
     taches:['Faire vérifier tes preuves par les pairs','Partager ton retour d\'expérience','Enrichir les fiches des communs']},
  ]},
  semeur: { label:'Semeur', steps:[
    {title:'Valoriser : découvrir les lieux à fort impact', desc:'Explorer les passeports de lieux et leur base T0, repérer l\'impact déjà présent.', tags:['📍 Diagnostic T0','🔍 Sourcing'], outils:['Carte','Passeport du lieu','Réseau'],
     taches:['Parcourir les lieux et leur diagnostic T0','Filtrer selon tes critères ESRS / ODD','Présélectionner des lieux à financer']},
    {title:'Activer : engager le capital', desc:'Financer en euros contre des paliers signés, ouvrir le projet.', tags:['💶 Financement','🤝 Engagement'], outils:['Contrats à impact','Paliers signés','Portefeuille'],
     taches:['Engager des euros sur un ou plusieurs projets','Définir les paliers et jalons signés','Préciser ta thèse d\'investissement']},
    {title:'Développer : suivre la preuve', desc:'Suivre le fil en direct, vérifier la Vadité (impact réellement prouvé).', tags:['📊 Vadité','📈 Indice de confiance'], outils:['Mesure d\'impact','Attestation Vadité','Suivi en direct'],
     taches:['Suivre l\'avancée des quêtes en direct','Vérifier les preuves et l'indice de confiance','Sécuriser la Vadité de ton financement']},
    {title:'Élever : recevoir la Vadité', desc:'Recevoir l\'attestation Vadité et le dividende d\'impact, capitaliser.', tags:['📑 Attestation','📄 CSRD'], outils:['Attestation Vadité','Export CSRD','Dividende d\'impact'],
     taches:['Recevoir la Vadité (ΔVadance / CSRD)','Produire ton reporting CSRD','Toucher ton dividende d\'impact']},
  ]},
};
const regenLoopState = {};
function regenLoopBuild(prefix, profileKey){
  const cont = document.getElementById(prefix);
  if(!cont) return;
  const prof = REGEN_PROFILE_CONTENT[profileKey];
  if(!regenLoopState[prefix]) regenLoopState[prefix] = { selected:0, profile:profileKey, done: prof.steps.map(s=>s.taches.map(()=>false)) };
  const nodes = REGEN_LOOP_NODES.map((n,k)=>`
    <div onclick="regenLoopSelect('${prefix}',${k})" style="position:absolute;left:${n.x}px;top:${n.y}px;transform:translate(-50%,-22px);text-align:center;cursor:pointer">
      <div id="${prefix}-circ-${k}" style="width:44px;height:44px;border-radius:50%;background:white;border:2.5px solid ${n.color};color:${n.color};display:flex;align-items:center;justify-content:center;font-family:'Satoshi', sans-serif;font-weight:900;font-size:1.05rem;margin:0 auto;transition:all .2s">${n.letter}</div>
      <div id="${prefix}-lbl-${k}" style="font-size:.62rem;color:var(--moss);font-weight:600;margin-top:.3rem">${n.name}</div>
    </div>`).join('');
  cont.innerHTML = `
    <div style="background:white;border:1px solid rgba(46,102,66,.12);border-radius:var(--r-lg);padding:1.3rem 1.4rem 1.5rem">
      <div style="margin-bottom:.4rem">
        <div style="font-family:'Satoshi', sans-serif;font-size:.95rem;font-weight:800;color:var(--ink)">🔄 Boucle VADE</div>
        <div style="font-size:.63rem;color:var(--moss);opacity:.65;margin-top:.15rem;line-height:1.4">Valoriser → Activer → Développer → Élever : le même parcours pour les trois profils, clique une étape, puis coche les tâches à faire</div>
      </div>
      <div style="display:flex;justify-content:center">
        <div style="position:relative;width:300px;height:300px;margin:.4rem 0 .2rem">
          <svg width="300" height="300" viewBox="0 0 300 300" style="position:absolute;inset:0;pointer-events:none">
            <circle cx="150" cy="150" r="115" fill="none" stroke="rgba(46,102,66,.18)" stroke-width="1.5"/>
            <g fill="var(--sage)">
              <path d="M -5 -4 L 5 0 L -5 4 Z" transform="translate(231.3 68.7) rotate(45)"/>
              <path d="M -5 -4 L 5 0 L -5 4 Z" transform="translate(231.3 231.3) rotate(135)"/>
              <path d="M -5 -4 L 5 0 L -5 4 Z" transform="translate(68.7 231.3) rotate(225)"/>
              <path d="M -5 -4 L 5 0 L -5 4 Z" transform="translate(68.7 68.7) rotate(315)"/>
            </g>
          </svg>
          <div style="position:absolute;left:150px;top:150px;transform:translate(-50%,-50%);width:152px;height:152px;border-radius:50%;background:white;border:1px solid rgba(46,102,66,.1);box-shadow:0 2px 14px rgba(46,102,66,.07);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center">
            <div style="font-size:.5rem;color:var(--sage);text-transform:uppercase;letter-spacing:.16em;font-weight:700">Vadance</div>
            <div id="${prefix}-center-score" style="font-family:'Satoshi', sans-serif;font-size:1.5rem;font-weight:900;color:#018262;line-height:1;margin:.2rem 0 .05rem">10<span style="font-size:.62rem;font-weight:700;opacity:.45">/100</span></div>
            <div id="${prefix}-center-sub" style="font-size:.6rem;color:var(--moss);opacity:.65">🌱 à venir</div>
          </div>
          ${nodes}
        </div>
      </div>
      <div id="${prefix}-detail" style="border-top:1px solid rgba(46,102,66,.1);margin-top:.4rem;padding-top:1.2rem"></div>
    </div>`;
  regenLoopSelect(prefix, regenLoopState[prefix].selected);
  regenLoopUpdateCenter(prefix);
}
function regenLoopSelect(prefix, i){
  const st = regenLoopState[prefix]; if(!st) return; st.selected = i;
  REGEN_LOOP_NODES.forEach((n,k)=>{
    const circ = document.getElementById(`${prefix}-circ-${k}`), lbl = document.getElementById(`${prefix}-lbl-${k}`);
    if(!circ) return;
    if(k===i){ circ.style.background=n.color; circ.style.color='white'; circ.style.transform='scale(1.12)'; circ.style.boxShadow='0 4px 14px '+n.color+'55'; if(lbl){lbl.style.color=n.color; lbl.style.fontWeight='800';} }
    else { circ.style.background='white'; circ.style.color=n.color; circ.style.transform=''; circ.style.boxShadow=''; if(lbl){lbl.style.color='var(--moss)'; lbl.style.fontWeight='600';} }
  });
  regenLoopRenderDetail(prefix);
}
function regenLoopToggleTask(prefix, s, t){
  const st = regenLoopState[prefix]; if(!st) return;
  st.done[s][t] = !st.done[s][t];
  regenLoopRenderDetail(prefix); regenLoopUpdateCenter(prefix);
}
function regenLoopRenderDetail(prefix){
  const box = document.getElementById(`${prefix}-detail`); if(!box) return;
  const st = regenLoopState[prefix]; const prof = REGEN_PROFILE_CONTENT[st.profile];
  const i = st.selected, node = REGEN_LOOP_NODES[i], s = prof.steps[i], done = st.done[i];
  const nDone = done.filter(Boolean).length;
  const tags = s.tags.map(t=>`<span style="font-size:.6rem;font-weight:600;color:var(--moss);background:rgba(46,102,66,.08);border-radius:100px;padding:.25rem .6rem">${t}</span>`).join('');
  const outils = s.outils.map(o=>`<span style="font-size:.62rem;font-weight:600;color:${node.color};border:1px solid ${node.color}40;border-radius:100px;padding:.28rem .7rem">${o}</span>`).join('');
  const taches = s.taches.map((t,k)=>{ const on=done[k]; return `<div onclick="regenLoopToggleTask('${prefix}',${i},${k})" style="display:flex;align-items:center;gap:.7rem;padding:.6rem .2rem;border-bottom:1px solid rgba(46,102,66,.08);cursor:pointer">
      <div style="width:24px;height:24px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:800;color:white;background:${on?node.color:'rgba(46,102,66,.18)'};transition:background .15s">${on?'✓':(k+1)}</div>
      <div style="font-size:.76rem;color:var(--ink);line-height:1.35;${on?'text-decoration:line-through;opacity:.5':''}">${t}</div>
    </div>`; }).join('');
  box.innerHTML = `
    <div style="display:flex;align-items:flex-start;gap:.85rem;margin-bottom:.7rem">
      <div style="width:46px;height:46px;border-radius:12px;background:${node.color};color:white;display:flex;align-items:center;justify-content:center;font-family:'Satoshi', sans-serif;font-weight:900;font-size:1.3rem;flex-shrink:0">${node.letter}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:.58rem;font-weight:700;color:${node.color};text-transform:uppercase;letter-spacing:.1em">Étape ${i+1} / ${prof.steps.length} · ${node.name} · ${prof.label}</div>
        <div style="font-family:'Satoshi', sans-serif;font-size:1.2rem;font-weight:900;color:var(--ink);line-height:1.15;margin-top:.15rem">${s.title}</div>
      </div>
    </div>
    <div style="font-size:.78rem;color:var(--moss);line-height:1.5;margin-bottom:.8rem">${s.desc}</div>
    <div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1rem">${tags}</div>
    <div style="font-size:.58rem;font-weight:700;color:var(--moss);opacity:.6;text-transform:uppercase;letter-spacing:.12em;margin-bottom:.45rem">Outils mobilisés</div>
    <div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1.1rem">${outils}</div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.3rem">
      <span style="font-size:.58rem;font-weight:700;color:var(--moss);opacity:.6;text-transform:uppercase;letter-spacing:.12em">À faire</span>
      <span style="font-size:.62rem;font-weight:700;color:${node.color}">${nDone}/${s.taches.length} fait${nDone>1?'s':''}</span>
    </div>
    <div>${taches}</div>`;
}
function regenLoopUpdateCenter(prefix){
  const st = regenLoopState[prefix]; if(!st) return;
  const total = st.done.reduce((a,arr)=>a+arr.length,0);
  const done = st.done.reduce((a,arr)=>a+arr.filter(Boolean).length,0);
  const score = total ? 10 + Math.round((done/total)*90) : 10;
  const scoreEl = document.getElementById(`${prefix}-center-score`);
  const sub = document.getElementById(`${prefix}-center-sub`);
  if(scoreEl) scoreEl.innerHTML = score + '<span style="font-size:.62rem;font-weight:700;opacity:.45">/100</span>';
  if(!sub) return;
  if(done===0){ sub.textContent='🌱 à venir'; }
  else if(done>=total){ sub.textContent='🌳 boucle complète'; }
  else { sub.textContent='🌿 '+done+'/'+total+' tâches'; }
}
