const RESEAU_PROFILS = {
  pilote:    {label:'Pilote',    color:'#2e6b47', bg:'rgba(46,107,71,.12)',  ic:'🏡'},
  batisseur: {label:'Bâtisseur', color:'#a06c00', bg:'rgba(240,176,50,.18)', ic:'🌿'},
  semeur:    {label:'Semeur',    color:'#2563a8', bg:'rgba(59,130,180,.14)', ic:'🌱'},
};
const REGEN_PHASES = {
  rever:        {label:'Rêver',        letter:'R', color:'#018262'},
  explorer:     {label:'Explorer',     letter:'E', color:'#2d6a9f'},
  generer:      {label:'Générer',      letter:'G', color:'#c8732a'},
  entreprendre: {label:'Entreprendre', letter:'E', color:'#0a7d3f'},
  nourrir:      {label:'Nourrir',      letter:'N', color:'#6b5b95'},
};
const RESEAU_POSTS = [
  {profile:'pilote', author:'La Ferme des Possibles', lieu:'Nantes', time:'il y a 2 h', type:'quete', regen:'entreprendre',
   text:"On lance une quête : installer une cuve de récupération d'eau de pluie 💧 Besoin de 4 Bâtisseurs motivés ce samedi !",
   quest:{titre:'Installer une cuve de récupération', meta:'1 journée · 4 pers. · +8 pts eau'},
   cta:'Rejoindre la quête'},
  {profile:'batisseur', author:'Léa M.', lieu:'Rezé', time:'il y a 5 h', type:'rencontre', regen:'explorer',
   text:"Dispo ce week-end pour filer un coup de main sur un chantier solaire 🌞 Qui a un projet près de Nantes ?",
   cta:'Proposer un créneau'},
  {profile:'semeur', author:'Fondation Terre Vivante', lieu:'Nouvelle-Aquitaine', time:'hier', type:'quete', regen:'entreprendre',
   text:"On finance 3 nouvelles quêtes énergie ce trimestre 🌱 Lieux à fort impact, à vos candidatures !",
   cta:'Voir les critères'},
  {profile:'pilote', author:'Tiers-lieu La Centrale', lieu:'Angers', time:'hier', type:'rencontre', regen:'nourrir',
   text:"Belle rencontre hier, 8 personnes mobilisées pour démarrer la phytoépuration 🌿 Merci à tou·tes les Bâtisseurs présent·es !",
   img:'🌿', cta:'Voir le lieu'},
  {profile:'batisseur', author:'Hugo & le collectif', lieu:'Saint-Herblain', time:'il y a 2 j', type:'quete', regen:'nourrir',
   text:"Quête bois terminée ✅ Mobilier fabriqué pour l'épicerie solidaire. Prochaine étape : l'isolation, on recrute !",
   cta:'Rejoindre la quête'},
];
const RESEAU_CERCLES = [
  {ic:'💧', theme:'Eau & cycles', color:'#2563a8', bg:'rgba(59,130,180,.14)',
   desc:'Récupération, phytoépuration, gestion et sobriété de l\'eau sur les lieux.',
   membres:34, seances:8,  format:'Visio · 1h',    anim:'Marie · Pilote',
   sujet:'Mutualiser une cuve de récupération entre 3 lieux voisins',
   next:'jeu. 18h', mix:{p:12,b:18,s:4}},
  {ic:'☀️', theme:'Énergie citoyenne', color:'#c8732a', bg:'rgba(200,115,42,.14)',
   desc:'Solaire, autonomie énergétique et low-tech pour produire et sobriété.',
   membres:41, seances:11, format:'Visio · 1h',    anim:'Karim · Bâtisseur',
   sujet:'Monter un projet solaire citoyen : étapes & financement',
   next:'mar. 20h', mix:{p:14,b:23,s:4}},
  {ic:'🌾', theme:'Alimentation locale', color:'#2e6b47', bg:'rgba(46,107,71,.12)',
   desc:'Maraîchage, circuits courts, semences paysannes et résilience alimentaire.',
   membres:52, seances:14, format:'Visio · 1h30', anim:'Sophie · Pilote',
   sujet:'Semences paysannes : créer une grainothèque partagée',
   next:'lun. 19h', mix:{p:20,b:27,s:5}},
  {ic:'🤝', theme:'Gouvernance partagée', color:'#6b5b95', bg:'rgba(107,91,149,.14)',
   desc:'Décision collective, communs, et résolution des désaccords.',
   membres:28, seances:6,  format:'Visio · 1h',    anim:'Le collectif',
   sujet:'Gérer les désaccords en collégiale sans épuisement',
   next:'mer. 18h30', mix:{p:11,b:13,s:4}},
  {ic:'🔧', theme:'Low-tech & réparation', color:'#a06c00', bg:'rgba(240,176,50,.18)',
   desc:'Fabriquer, réparer et mutualiser les outils et savoir-faire.',
   membres:37, seances:9,  format:'Visio · 1h',    anim:'Hugo · Bâtisseur',
   sujet:'Lancer un atelier réparation : par où commencer ?',
   next:'ven. 17h', mix:{p:9,b:25,s:3}},
  {ic:'🏘', theme:'Habitat & écolieux', color:'#018262', bg:'rgba(1,130,98,.12)',
   desc:'Construire et habiter autrement : matériaux, statuts, vie collective.',
   membres:23, seances:5,  format:'Visio · 1h30', anim:'Léa · Semeur',
   sujet:'Financer et sécuriser un habitat groupé',
   next:'sam. 11h', mix:{p:8,b:10,s:5}},
];
function renderCercles(){
  const box = document.getElementById('reseau-cercles');
  if(!box) return;
  box.innerHTML = RESEAU_CERCLES.map(c=>`
    <div style="background:white;border:1px solid rgba(46,102,66,.1);border-radius:14px;padding:1rem 1.1rem">
      <div style="display:flex;align-items:center;gap:.7rem;margin-bottom:.55rem">
        <div style="width:42px;height:42px;border-radius:50%;background:${c.bg};display:flex;align-items:center;justify-content:center;font-size:1.25rem;flex-shrink:0">${c.ic}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:.84rem;font-weight:800;color:var(--ink)">${c.theme}</div>
          <div style="font-size:.62rem;color:var(--moss);opacity:.65;margin-top:.05rem">👥 ${c.membres} membres&nbsp;·&nbsp;🗣 ${c.seances} séances passées</div>
        </div>
        <span style="font-size:.6rem;font-weight:700;color:${c.color};background:${c.bg};border-radius:100px;padding:.22rem .55rem;flex-shrink:0">📹 ${c.format}</span>
      </div>

      <div style="font-size:.71rem;color:var(--moss);opacity:.85;line-height:1.45;margin-bottom:.6rem">${c.desc}</div>

      <div style="display:flex;flex-wrap:wrap;gap:.45rem;font-size:.61rem;color:var(--moss);opacity:.75;margin-bottom:.6rem">
        <span>🏡 ${c.mix.p} Pilotes</span><span>·</span><span>🌿 ${c.mix.b} Bâtisseurs</span><span>·</span><span>🌱 ${c.mix.s} Semeurs</span>
      </div>

      <div style="background:${c.color}0f;border:1px solid ${c.color}26;border-radius:10px;padding:.6rem .75rem;margin-bottom:.7rem">
        <div style="font-size:.58rem;font-weight:700;color:${c.color};text-transform:uppercase;letter-spacing:.08em;margin-bottom:.2rem">🎯 Prochain sujet</div>
        <div style="font-size:.74rem;color:var(--ink);font-weight:600;line-height:1.35">${c.sujet}</div>
        <div style="font-size:.62rem;color:var(--moss);opacity:.7;margin-top:.35rem">🎤 Animé par ${c.anim}&nbsp;·&nbsp;🗓 ${c.next}</div>
      </div>

      <div style="display:flex;align-items:center;gap:.5rem">
        <button onclick="mmBubble('📅 Détails du cercle « ${c.theme} », bientôt disponible')" style="background:white;border:1px solid rgba(46,102,66,.22);color:var(--moss);border-radius:100px;padding:.45rem .9rem;font-size:.7rem;font-weight:700;cursor:pointer">Détails</button>
        <button onclick="mmBubble('🗣 Tu rejoins le cercle « ${c.theme} », rendez-vous ${c.next}')" style="margin-left:auto;background:${c.color};color:white;border:none;border-radius:100px;padding:.45rem 1.1rem;font-size:.7rem;font-weight:700;cursor:pointer">Rejoindre →</button>
      </div>
    </div>`).join('');
}
function reseauTab(t, btn){
  document.getElementById('reseau-view-fil').style.display = t==='fil' ? 'block' : 'none';
  document.getElementById('reseau-view-cercles').style.display = t==='cercles' ? 'block' : 'none';
  document.querySelectorAll('.reseau-tab').forEach(b=>{ b.style.color='var(--moss)'; b.style.opacity='.65'; b.style.borderBottomColor='transparent'; });
  if(btn){ btn.style.color='var(--forest)'; btn.style.opacity='1'; btn.style.borderBottomColor='var(--forest)'; }
}
let reseauFilter = 'tout';
let reseauRegenFilter = 'tout';
let reseauProx = false;
const RESEAU_NEAR = ['Nantes', 'Rezé', 'Saint-Herblain']; // "près de moi" (zone de Nantes)
function reseauSetFilter(f, btn){
  reseauFilter = f;
  document.querySelectorAll('.reseau-filter').forEach(b=>{ b.style.background='white'; b.style.color='var(--moss)'; });
  if(btn){ btn.style.background='var(--forest)'; btn.style.color='white'; }
  renderReseau();
}
function reseauRenderRegenFilters(){
  const box = document.getElementById('reseau-rfilters');
  if(!box) return;
  const mk = (key, label, color) => {
    const on = reseauRegenFilter === key;
    const c = color || 'var(--forest)';
    return `<button onclick="reseauSetRegenFilter('${key}')" style="border:1px solid ${on?c:'rgba(46,102,66,.2)'};background:${on?c:'white'};color:${on?'white':(color||'var(--moss)')};border-radius:100px;padding:.3rem .7rem;font-size:.66rem;font-weight:700;cursor:pointer">${label}</button>`;
  };
  box.innerHTML = `<span style="font-size:.6rem;font-weight:700;color:var(--moss);opacity:.5;text-transform:uppercase;letter-spacing:.08em;margin-right:.1rem">Phase REGEN</span>`
    + mk('tout', 'Toutes', null)
    + Object.entries(REGEN_PHASES).map(([k,v]) => mk(k, v.label, v.color)).join('');
}
function reseauSetRegenFilter(r){
  reseauRegenFilter = r;
  reseauRenderRegenFilters();
  renderReseau();
}
function reseauToggleProx(btn){
  reseauProx = !reseauProx;
  if(btn){ btn.style.background = reseauProx?'var(--forest)':'white'; btn.style.color = reseauProx?'white':'var(--moss)'; }
  renderReseau();
}

/* ─── Composer : formulaires quête / rencontre ─── */
const RF_INP = "width:100%;border:1px solid rgba(46,102,66,.18);background:rgba(46,102,66,.04);border-radius:8px;padding:.55rem .7rem;font-size:.76rem;color:var(--ink);outline:none;font-family:inherit;margin-bottom:.5rem;box-sizing:border-box;";
let reseauFormType = 'quete';
let reseauFormRegen = 'entreprendre';
let reseauFormImg = '';
function reseauFormPhoto(input){
  const file = input.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    reseauFormImg = e.target.result;
    const prev = document.getElementById('rf-photo-preview');
    if(prev) prev.innerHTML = `<div style="position:relative;display:inline-block;margin-top:.5rem">
      <img src="${reseauFormImg}" style="height:80px;border-radius:10px;display:block;object-fit:cover">
      <button type="button" onclick="reseauRemovePhoto()" style="position:absolute;top:-7px;right:-7px;width:22px;height:22px;border-radius:50%;background:var(--ink);color:white;border:none;cursor:pointer;font-size:.7rem;line-height:1">✕</button>
    </div>`;
  };
  reader.readAsDataURL(file);
}
function reseauRemovePhoto(){
  reseauFormImg = '';
  const prev = document.getElementById('rf-photo-preview');
  if(prev) prev.innerHTML = '';
}
function reseauRegenChips(){
  return Object.entries(REGEN_PHASES).map(([k,v])=>{
    const on = k===reseauFormRegen;
    return `<button type="button" onclick="reseauFormRegen='${k}';reseauRefreshChips()" style="border:1px solid ${on?v.color:'rgba(46,102,66,.2)'};background:${on?v.color:'white'};color:${on?'white':v.color};border-radius:100px;padding:.25rem .6rem;font-size:.66rem;font-weight:700;cursor:pointer">${v.label}</button>`;
  }).join('');
}
function reseauRefreshChips(){
  const c = document.getElementById('rf-regen');
  if(c) c.innerHTML = reseauRegenChips();
}
function reseauOpenForm(type){
  reseauFormType = type;
  reseauFormRegen = type==='quete' ? 'entreprendre' : 'nourrir';
  reseauFormImg = '';
  const isQuete = type==='quete';
  const box = document.getElementById('reseau-form');
  box.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.7rem">
      <div style="font-size:.82rem;font-weight:800;color:var(--ink)">${isQuete?'⚡ Mettre à jour une quête':'🤝 Proposer une rencontre'}</div>
      <button type="button" onclick="reseauCloseForm()" style="background:none;border:none;cursor:pointer;color:var(--moss);font-size:.95rem">✕</button>
    </div>
    <input id="rf-titre" placeholder="${isQuete?'Titre de la quête':'Sujet de la rencontre'}" style="${RF_INP}">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:.5rem">
      <input id="rf-lieu" placeholder="📍 Lieu" style="${RF_INP}">
      <input id="rf-detail" placeholder="${isQuete?'⏱ Durée · places (ex : 1 j · 4 pers.)':'🗓 Quand ? (ex : sam. 14h)'}" style="${RF_INP}">
    </div>
    <textarea id="rf-message" placeholder="Ton message…" style="${RF_INP}min-height:70px;resize:none"></textarea>
    <div style="margin-bottom:.7rem">
      <label style="display:inline-flex;align-items:center;gap:.4rem;cursor:pointer;font-size:.72rem;font-weight:600;color:var(--forest);padding:.4rem .8rem;border:1px solid rgba(46,102,66,.3);border-radius:100px;background:rgba(46,102,66,.06)">
        📷 Ajouter une photo
        <input type="file" accept="image/*" style="display:none" onchange="reseauFormPhoto(this)">
      </label>
      <div id="rf-photo-preview"></div>
    </div>
    <div style="font-size:.6rem;font-weight:700;color:var(--moss);opacity:.6;text-transform:uppercase;letter-spacing:.1em;margin:.1rem 0 .4rem">Phase REGEN</div>
    <div id="rf-regen" style="display:flex;flex-wrap:wrap;gap:.35rem;margin-bottom:.8rem">${reseauRegenChips()}</div>
    <div style="display:flex;gap:.6rem;justify-content:flex-end">
      <button type="button" onclick="reseauCloseForm()" style="background:none;border:1px solid rgba(46,102,66,.2);color:var(--moss);border-radius:100px;padding:.5rem 1rem;font-size:.74rem;font-weight:700;cursor:pointer">Annuler</button>
      <button type="button" onclick="reseauPublish()" style="background:var(--forest);color:white;border:none;border-radius:100px;padding:.5rem 1.3rem;font-size:.74rem;font-weight:700;cursor:pointer">Publier</button>
    </div>`;
  box.style.display = 'block';
}
function reseauCloseForm(){
  const box = document.getElementById('reseau-form');
  if(box){ box.style.display='none'; box.innerHTML=''; }
}
function reseauPublish(){
  const v = id => (document.getElementById(id)?.value || '').trim();
  const titre = v('rf-titre'), lieu = v('rf-lieu'), detail = v('rf-detail'), message = v('rf-message');
  if(!titre && !message){ mmBubble('✍️ Ajoute au moins un titre ou un message'); return; }
  const role = (typeof currentRole !== 'undefined' && currentRole) ? currentRole : 'pilote';
  const isQuete = reseauFormType === 'quete';
  const post = {
    profile: role, author: 'Toi', lieu: lieu || '—', time: 'à l\'instant',
    type: isQuete ? 'quete' : 'rencontre', regen: reseauFormRegen,
    text: message || titre,
    cta: isQuete ? 'Rejoindre la quête' : 'Proposer un créneau',
  };
  if(isQuete && (titre || detail)) post.quest = { titre: titre || 'Quête', meta: detail || 'à préciser' };
  if(!isQuete){
    let t = (titre && message && titre !== message) ? (titre + ', ' + message) : (message || titre);
    if(detail) t += ' 🗓 ' + detail;
    post.text = t;
  }
  if(reseauFormImg) post.img = reseauFormImg;
  RESEAU_POSTS.unshift(post);
  reseauCloseForm();
  reseauSetFilter('tout', document.querySelector('.reseau-filter[data-f="tout"]'));
  mmBubble(isQuete ? '⚡ Quête publiée sur le Réseau !' : '🤝 Rencontre proposée sur le Réseau !');
}
function renderReseau(){
  const feed = document.getElementById('reseau-feed');
  if(!feed) return;
  const posts = RESEAU_POSTS.filter(p =>
    (reseauFilter==='tout' || p.type===reseauFilter) &&
    (reseauRegenFilter==='tout' || p.regen===reseauRegenFilter) &&
    (!reseauProx || RESEAU_NEAR.includes(p.lieu))
  );
  const typeChip = t => t==='quete'
    ? '<span style="font-size:.62rem;font-weight:700;color:#a06c00;background:rgba(240,176,50,.16);border-radius:100px;padding:.18rem .55rem">⚡ Quête</span>'
    : '<span style="font-size:.62rem;font-weight:700;color:#2563a8;background:rgba(59,130,180,.14);border-radius:100px;padding:.18rem .55rem">🤝 Rencontre</span>';
  feed.innerHTML = posts.map(p=>{
    const pr = RESEAU_PROFILS[p.profile];
    const questCard = p.quest ? `
      <div style="border:1px solid rgba(240,176,50,.3);background:rgba(240,176,50,.06);border-radius:12px;padding:.7rem .85rem;margin:.7rem 0;display:flex;align-items:center;gap:.7rem">
        <div style="font-size:1.3rem">⚡</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:.76rem;font-weight:700;color:var(--ink)">${p.quest.titre}</div>
          <div style="font-size:.64rem;color:var(--moss);opacity:.7;margin-top:.1rem">${p.quest.meta}</div>
        </div>
      </div>` : '';
    const isPhoto = p.img && (p.img.startsWith('data:') || p.img.startsWith('http'));
    const imgCard = p.img ? (isPhoto
      ? `<img src="${p.img}" alt="" style="width:100%;max-height:240px;object-fit:cover;border-radius:12px;margin:.7rem 0;display:block">`
      : `<div style="height:120px;border-radius:12px;background:linear-gradient(135deg,rgba(46,107,71,.12),rgba(126,201,176,.18));display:flex;align-items:center;justify-content:center;font-size:2.4rem;margin:.7rem 0">${p.img}</div>`) : '';
    const matchBox = p.type==='quete' ? `
      <div style="background:rgba(46,102,66,.04);border:1px dashed rgba(46,102,66,.22);border-radius:10px;padding:.6rem .7rem;margin-top:.6rem">
        <div style="font-size:.62rem;font-weight:700;color:var(--moss);margin-bottom:.45rem">🔗 Mise en relation suggérée</div>
        <div style="display:flex;flex-direction:column;gap:.4rem">
          <div style="display:flex;align-items:center;gap:.55rem">
            <div style="width:28px;height:28px;border-radius:50%;background:rgba(240,176,50,.18);display:flex;align-items:center;justify-content:center;font-size:.85rem;flex-shrink:0">🌿</div>
            <div style="flex:1;min-width:0"><div style="font-size:.7rem;font-weight:700;color:var(--ink)">Léa M. · Bâtisseuse</div><div style="font-size:.6rem;color:var(--moss);opacity:.65">🔧 compétences alignées · 📍 3 km</div></div>
            <button onclick="mmBubble('🤝 Invitation envoyée à Léa M.')" style="background:rgba(46,102,66,.08);color:var(--forest);border:none;border-radius:100px;padding:.3rem .7rem;font-size:.64rem;font-weight:700;cursor:pointer;flex-shrink:0">Inviter</button>
          </div>
          <div style="display:flex;align-items:center;gap:.55rem">
            <div style="width:28px;height:28px;border-radius:50%;background:rgba(59,130,180,.14);display:flex;align-items:center;justify-content:center;font-size:.85rem;flex-shrink:0">🌱</div>
            <div style="flex:1;min-width:0"><div style="font-size:.7rem;font-weight:700;color:var(--ink)">Fondation Terre Vivante · Semeur</div><div style="font-size:.6rem;color:var(--moss);opacity:.65">💶 critères de financement compatibles</div></div>
            <button onclick="mmBubble('🤝 Demande envoyée à Fondation Terre Vivante')" style="background:rgba(46,102,66,.08);color:var(--forest);border:none;border-radius:100px;padding:.3rem .7rem;font-size:.64rem;font-weight:700;cursor:pointer;flex-shrink:0">Solliciter</button>
          </div>
        </div>
      </div>` : '';
    const rg = REGEN_PHASES[p.regen];
    const regenPastille = rg ? `
      <span style="display:inline-flex;align-items:center;gap:.35rem;font-size:.6rem;font-weight:700;color:${rg.color};background:${rg.color}14;border:1px solid ${rg.color}33;border-radius:100px;padding:.2rem .55rem .2rem .25rem">
        <span style="width:15px;height:15px;border-radius:50%;background:${rg.color};color:white;display:inline-flex;align-items:center;justify-content:center;font-size:.52rem;font-weight:900">${rg.letter}</span>${rg.label}
      </span>` : '';
    return `
    <div style="background:white;border:1px solid rgba(46,102,66,.1);border-radius:16px;padding:1.05rem 1.15rem;margin-bottom:.9rem">
      <div style="display:flex;align-items:center;gap:.7rem;margin-bottom:.6rem">
        <div style="width:42px;height:42px;border-radius:50%;background:${pr.bg};display:flex;align-items:center;justify-content:center;font-size:1.15rem;flex-shrink:0">${pr.ic}</div>
        <div style="flex:1;min-width:0">
          <div style="display:flex;align-items:center;gap:.45rem;flex-wrap:wrap">
            <span style="font-size:.82rem;font-weight:800;color:var(--ink)">${p.author}</span>
            <span style="font-size:.58rem;font-weight:700;color:${pr.color};background:${pr.bg};border-radius:100px;padding:.12rem .5rem">${pr.label}</span>
          </div>
          <div style="font-size:.64rem;color:var(--moss);opacity:.6;margin-top:.1rem">📍 ${p.lieu} · ${p.time}</div>
        </div>
        ${typeChip(p.type)}
      </div>
      <div style="margin-bottom:.5rem">${regenPastille}</div>
      <div style="font-size:.8rem;color:var(--ink);line-height:1.5">${p.text}</div>
      ${questCard}${imgCard}${matchBox}
      <div style="display:flex;align-items:center;gap:.6rem;margin-top:.8rem;padding-top:.7rem;border-top:1px solid rgba(46,102,66,.08)">
        <button onclick="mmBubble('💬 Tu ouvres un échange avec ${p.author}')" style="background:white;border:1px solid rgba(46,102,66,.25);color:var(--forest);border-radius:100px;padding:.4rem .9rem;font-size:.72rem;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;gap:.35rem">💬 Échanger</button>
        <button onclick="evadGoLieu('${(p.author||'').replace(/'/g,"\\'")}','${(p.lieu||'').replace(/'/g,"\\'")}')" style="background:white;border:1px solid rgba(46,102,66,.25);color:var(--forest);border-radius:100px;padding:.4rem .9rem;font-size:.72rem;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;gap:.35rem">🗺 Voir le lieu</button>
        <button onclick="mmBubble('${p.cta}, ${p.author}')" style="margin-left:auto;background:${pr.bg};color:${pr.color};border:none;border-radius:100px;padding:.4rem .9rem;font-size:.72rem;font-weight:700;cursor:pointer">${p.cta} →</button>
      </div>
    </div>`;
  }).join('');

  if(posts.length === 0){
    feed.innerHTML = `<div style="text-align:center;padding:2.5rem 1rem;color:var(--moss);opacity:.6">
      <div style="font-size:1.8rem;margin-bottom:.4rem">🍃</div>
      <div style="font-size:.78rem;font-weight:600">Aucun post pour ces filtres</div>
      <div style="font-size:.66rem;opacity:.8;margin-top:.2rem">Élargis les filtres pour découvrir d'autres quêtes et rencontres.</div>
    </div>`;
    return;
  }
  // Fil fini, pas de scroll infini
  feed.innerHTML += `<div style="text-align:center;padding:1.6rem 1rem .5rem;color:var(--moss)">
    <div style="font-size:1.5rem;margin-bottom:.3rem">🌿</div>
    <div style="font-size:.76rem;font-weight:700;color:var(--forest)">Tu es à jour</div>
    <div style="font-size:.65rem;opacity:.65;margin-top:.2rem">Pas de défilement sans fin ici, reviens quand tu veux passer à l'action.</div>
  </div>`;
}
renderCercles();
reseauRenderRegenFilters();
renderReseau();
