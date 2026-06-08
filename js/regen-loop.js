/* ─── PARCOURS REGEN réutilisable (Bâtisseur & Semeur) ─── */
const REGEN_LOOP_NODES = [
  {letter:'R', name:'Rêver',        color:'#018262', x:150,   y:35},
  {letter:'E', name:'Explorer',     color:'#2d6a9f', x:259.4, y:114.5},
  {letter:'G', name:'Générer',      color:'#c8732a', x:217.6, y:243},
  {letter:'E', name:'Entreprendre', color:'#0a7d3f', x:82.4,  y:243},
  {letter:'N', name:'Nourrir',      color:'#6b5b95', x:40.6,  y:114.5},
];
const REGEN_PROFILE_CONTENT = {
  batisseur: { label:'Bâtisseur', steps:[
    {title:'Rêver le monde de demain', desc:'Imaginer le futur régénératif qu\'on veut contribuer à bâtir.', tags:['☀️ Solarpunk','🎮 Gamification'], outils:['Serious game','Deva'],
     taches:['Explorer les lieux solarpunk dans le jeu','Repérer les boucles où tes compétences comptent','Te projeter dans une contribution idéale']},
    {title:'Explorer les solutions', desc:'Parcourir les quêtes et les lieux pour trouver où agir.', tags:['📚 Communs','🔍 Découverte'], outils:['Carte','Réseau','Bibliothèque'],
     taches:['Parcourir les quêtes ouvertes sur la carte','Filtrer par compétences et proximité','Identifier 2-3 lieux alignés avec tes valeurs']},
    {title:'Générer ta fiche et ton tableau de bord', desc:'Créer ta fiche de Bâtisseur et ton tableau de bord de contribution.', tags:['📊 Mesure','🏅 Compétences'], outils:['Fiche particulier','Tableau de bord','Compétences'],
     taches:['Compléter ta fiche particulier','Déclarer tes compétences et disponibilités','Générer ton tableau de bord de contribution']},
    {title:'Entreprendre les quêtes', desc:'Rejoindre des quêtes, contribuer sur le terrain, documenter les preuves.', tags:['⚡ Action','🤝 Communauté'], outils:['Quêtes','Preuves','Graines'],
     taches:['Rejoindre une quête','Contribuer sur le terrain','Documenter les preuves et recevoir tes graines']},
    {title:'Nourrir l\'écosystème', desc:'Partager tes retours, monter en compétences, enrichir les communs.', tags:['🌱 Communs','🔄 Itération'], outils:['Retours d\'expérience','Bibliothèque','Compétences'],
     taches:['Partager ton retour d\'expérience','Enrichir les fiches des communs','Débloquer de nouvelles compétences']},
  ]},
  semeur: { label:'Semeur', steps:[
    {title:'Rêver le monde de demain', desc:'Définir la vision d\'impact que tu veux financer.', tags:['☀️ Solarpunk','🎯 Vision'], outils:['Serious game','Deva'],
     taches:['Explorer les futurs régénératifs','Clarifier tes axes d\'impact prioritaires','Te projeter dans ta thèse d\'investissement']},
    {title:'Explorer les solutions', desc:'Explorer les lieux et quêtes alignés avec tes critères.', tags:['🔍 Sourcing','📚 Communs'], outils:['Carte','Portefeuille','Réseau'],
     taches:['Parcourir les lieux à fort impact','Filtrer selon tes critères ESRS / ODD','Présélectionner des lieux à financer']},
    {title:'Générer ta fiche et ton tableau de bord', desc:'Créer ta fiche financeur et ton tableau de bord ESRS.', tags:['📊 Mesure','📄 CSRD'], outils:['Fiche financeur','Tableau de bord','Export CSRD'],
     taches:['Compléter ta fiche financeur','Configurer tes cadres (CSRD, ODD…)','Générer ton tableau de bord d\'impact']},
    {title:'Entreprendre les quêtes', desc:'Financer des quêtes, définir les jalons, sécuriser les preuves.', tags:['💶 Financement','🤝 Engagement'], outils:['Contrats','Jalons','Graines'],
     taches:['Financer une ou plusieurs quêtes','Définir les jalons et contrats','Suivre et certifier les preuves d\'impact']},
    {title:'Nourrir l\'écosystème', desc:'Capitaliser les retours et affiner ta stratégie de financement.', tags:['🌱 Communs','🔄 Itération'], outils:['Reporting','Bibliothèque','Stratégie'],
     taches:['Récolter les preuves et apprentissages','Produire ton reporting CSRD','Ajuster ta stratégie de financement']},
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
        <div style="font-family:'Satoshi', sans-serif;font-size:.95rem;font-weight:800;color:var(--ink)">🔄 Boucle REGEN</div>
        <div style="font-size:.63rem;color:var(--moss);opacity:.65;margin-top:.15rem;line-height:1.4">La même boucle de valeur pour les trois profils, clique une étape, puis coche les tâches à faire</div>
      </div>
      <div style="display:flex;justify-content:center">
        <div style="position:relative;width:300px;height:300px;margin:.4rem 0 .2rem">
          <svg width="300" height="300" viewBox="0 0 300 300" style="position:absolute;inset:0;pointer-events:none">
            <circle cx="150" cy="150" r="115" fill="none" stroke="rgba(46,102,66,.18)" stroke-width="1.5"/>
            <g fill="var(--sage)">
              <path d="M -5 -4 L 5 0 L -5 4 Z" transform="translate(217.6 57) rotate(36)"/>
              <path d="M -5 -4 L 5 0 L -5 4 Z" transform="translate(259.4 185.5) rotate(108)"/>
              <path d="M -5 -4 L 5 0 L -5 4 Z" transform="translate(150 265) rotate(180)"/>
              <path d="M -5 -4 L 5 0 L -5 4 Z" transform="translate(40.6 185.5) rotate(252)"/>
              <path d="M -5 -4 L 5 0 L -5 4 Z" transform="translate(82.4 57) rotate(324)"/>
            </g>
          </svg>
          <div style="position:absolute;left:150px;top:150px;transform:translate(-50%,-50%);width:152px;height:152px;border-radius:50%;background:white;border:1px solid rgba(46,102,66,.1);box-shadow:0 2px 14px rgba(46,102,66,.07);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center">
            <div style="font-size:.5rem;color:var(--sage);text-transform:uppercase;letter-spacing:.16em;font-weight:700">Score REGEN</div>
            <div id="${prefix}-center-icon" style="font-size:1.5rem;margin:.25rem 0 .15rem">🌱</div>
            <div id="${prefix}-center-sub" style="font-size:.62rem;color:var(--moss);opacity:.6">à venir</div>
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
        <div style="font-size:.58rem;font-weight:700;color:${node.color};text-transform:uppercase;letter-spacing:.1em">Étape ${i+1} / 5 · ${node.name} · ${prof.label}</div>
        <div style="font-family:'Satoshi', sans-serif;font-size:1.2rem;font-weight:900;color:var(--ink);line-height:1.15;margin-top:.15rem">${s.title}</div>
      </div>
    </div>
    <div style="font-size:.78rem;color:var(--moss);line-height:1.5;margin-bottom:.8rem">${s.desc}</div>
    <div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1rem">${tags}</div>
    <div style="font-size:.58rem;font-weight:700;color:var(--moss);opacity:.6;text-transform:uppercase;letter-spacing:.12em;margin-bottom:.45rem">Outils mobilisés</div>
    <div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1.1rem">${outils}</div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.3rem">
      <span style="font-size:.58rem;font-weight:700;color:var(--moss);opacity:.6;text-transform:uppercase;letter-spacing:.12em">Ce que tu fais</span>
      <span style="font-size:.62rem;font-weight:700;color:${node.color}">${nDone}/${s.taches.length} fait${nDone>1?'s':''}</span>
    </div>
    <div>${taches}</div>`;
}
function regenLoopUpdateCenter(prefix){
  const st = regenLoopState[prefix]; if(!st) return;
  const total = st.done.reduce((a,arr)=>a+arr.length,0);
  const done = st.done.reduce((a,arr)=>a+arr.filter(Boolean).length,0);
  const icon = document.getElementById(`${prefix}-center-icon`), sub = document.getElementById(`${prefix}-center-sub`);
  if(!sub) return;
  if(done===0){ if(icon)icon.textContent='🌱'; sub.textContent='à venir'; }
  else if(done>=total){ if(icon)icon.textContent='🌳'; sub.textContent='boucle complète'; }
  else { if(icon)icon.textContent='🌿'; sub.textContent=done+'/'+total+' tâches'; }
}
