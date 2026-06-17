
/* ═══════════════════════════════════════════════════════
   QUÊTES × PERMA-COMPTABILITÉ
   ═══════════════════════════════════════════════════════ */

/* Quêtes du Pilote : générées à partir des solutions de la fiche lieu créée */
const PILOTE_QUETES_DEMO = [];

/* État des quêtes validées (session) */
const quetesValidees = new Set();

/* ─── Modal de présentation d'une quête (depuis la solution source) ─── */
function openQueteModal(qid) {
  const q = (typeof PILOTE_QUETES_DEMO !== 'undefined') ? PILOTE_QUETES_DEMO.find(x => x.id === qid) : null;
  if (!q) return;
  const sol = (typeof SOLS !== 'undefined') ? SOLS.find(s => s.nom === q.source) : null;
  const CPLX = { facile:'🟢 Facile', moyen:'🟠 Intermédiaire', difficile:'🔴 Avancé', avance:'🔴 Avancé' };
  const ic = q.sourceIc || (sol && sol.img) || '⚡';

  let w = document.getElementById('quete-modal');
  if (!w) {
    w = document.createElement('div');
    w.id = 'quete-modal';
    w.style.cssText = "display:none;position:fixed;inset:0;z-index:100000;font-family:'Satoshi',sans-serif";
    document.body.appendChild(w);
  }

  const stat = (val, lbl, col) => `<div style="background:white;border:1px solid rgba(46,102,66,.1);border-radius:12px;padding:.6rem .7rem;text-align:center">
      <div style="font-family:'Satoshi',sans-serif;font-size:1rem;font-weight:800;color:${col||'var(--ink)'}">${val}</div>
      <div style="font-size:.56rem;color:var(--moss);opacity:.65;text-transform:uppercase;letter-spacing:.06em;margin-top:.15rem">${lbl}</div>
    </div>`;

  const avantages = (sol && sol.avantages || []).map(a =>
    `<li style="display:flex;gap:.5rem;align-items:flex-start;font-size:.74rem;color:var(--ink);line-height:1.5;margin-bottom:.35rem"><span style="color:var(--fern);flex-shrink:0">✓</span><span>${a}</span></li>`).join('');
  const indics = (sol && sol.ind || []).map(i =>
    `<span style="padding:.2rem .55rem;border-radius:100px;background:rgba(46,102,66,.07);border:1px solid rgba(46,102,66,.15);font-size:.62rem;color:var(--moss)">📊 ${i}</span>`).join('');
  const esrs = (sol && sol.esrs || []).map(e =>
    `<span style="padding:.2rem .5rem;border-radius:4px;background:rgba(122,110,168,.1);border:1px solid rgba(122,110,168,.3);font-size:.6rem;color:#7a6ea8;font-weight:600;font-family:monospace">${e}</span>`).join('');

  w.innerHTML =
    '<div style="position:absolute;inset:0;background:rgba(13,43,34,.6);backdrop-filter:blur(4px)" onclick="closeQueteModal()"></div>'
  + '<div role="dialog" style="position:relative;max-width:540px;width:calc(100% - 2rem);margin:5vh auto 0;max-height:88vh;overflow-y:auto;background:#fff;border-radius:20px;box-shadow:0 24px 60px rgba(0,0,0,.32)">'
  +   (sol && sol.photo ? `<div style="height:150px;background:url('${sol.photo}') center/cover;border-radius:20px 20px 0 0;position:relative"><button onclick="closeQueteModal()" style="position:absolute;top:.7rem;right:.7rem;background:rgba(0,0,0,.45);border:none;color:#fff;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:.85rem">✕</button></div>`
        : '<div style="display:flex;justify-content:flex-end;padding:.6rem .6rem 0"><button onclick="closeQueteModal()" style="background:none;border:none;font-size:1.2rem;color:var(--moss);opacity:.5;cursor:pointer">✕</button></div>')
  +   '<div style="padding:1.1rem 1.4rem 1.5rem">'
  +     `<div style="display:flex;align-items:center;gap:.7rem;margin-bottom:.2rem">
            <div style="width:46px;height:46px;border-radius:14px;background:rgba(240,176,50,.15);display:flex;align-items:center;justify-content:center;font-size:1.5rem;flex-shrink:0">${ic}</div>
            <div style="flex:1;min-width:0">
              <div style="font-size:.6rem;font-weight:700;color:#a06c00;text-transform:uppercase;letter-spacing:.08em">⚡ Quête${sol?' · '+sol.nom:''}</div>
              <div style="font-size:1.1rem;font-weight:800;color:var(--ink);line-height:1.2">${q.titre}</div>
            </div>
          </div>`
  +     `<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:.5rem;margin:1rem 0">
            ${stat('⏱ '+q.duree,'Durée')}
            ${stat('👥 '+q.nb,'Équipe')}
            ${stat(q.graines+' 🌱','Graines','var(--amber)')}
            ${stat((sol?CPLX[sol.cplx]||'—':'—'),'Niveau')}
          </div>`
  +     (q.impact ? `<div style="background:rgba(74,140,92,.08);border:1px solid rgba(74,140,92,.2);border-radius:10px;padding:.55rem .75rem;font-size:.74rem;color:var(--forest);font-weight:600;margin-bottom:.9rem">📈 Impact : ${q.impact}</div>` : '')
  +     (sol && sol.desc ? `<div style="font-size:.55rem;font-weight:700;color:var(--moss);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.3rem">La solution</div><p style="font-size:.78rem;color:var(--ink);line-height:1.6;margin-bottom:1rem">${sol.desc}</p>` : '')
  +     (avantages ? `<div style="font-size:.55rem;font-weight:700;color:var(--moss);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.4rem">Bénéfices</div><ul style="list-style:none;margin:0 0 1rem;padding:0">${avantages}</ul>` : '')
  +     (sol && sol.budget ? `<div style="display:flex;align-items:center;gap:.5rem;font-size:.74rem;color:var(--ink);margin-bottom:1rem"><span style="font-weight:700;color:var(--moss)">💶 Budget indicatif :</span> ${sol.budget}</div>` : '')
  +     (indics ? `<div style="font-size:.55rem;font-weight:700;color:var(--moss);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.4rem">Indicateurs à suivre</div><div style="display:flex;flex-wrap:wrap;gap:.3rem;margin-bottom:1rem">${indics}</div>` : '')
  +     (esrs ? `<div style="font-size:.55rem;font-weight:700;color:var(--moss);text-transform:uppercase;letter-spacing:.08em;margin-bottom:.4rem">Référentiels ESRS</div><div style="display:flex;flex-wrap:wrap;gap:.3rem;margin-bottom:.4rem">${esrs}</div>${sol && sol.esrs_detail ? `<div style="font-size:.66rem;color:var(--moss);opacity:.8;line-height:1.5;margin-bottom:1rem">${sol.esrs_detail}</div>` : ''}` : '')
  +     `<div style="display:flex;gap:.5rem;margin-top:.6rem;flex-wrap:wrap">
            <button onclick="closeQueteModal()" style="background:none;border:1px solid rgba(46,102,66,.25);color:var(--moss);border-radius:100px;padding:.55rem 1rem;font-size:.78rem;font-weight:700;cursor:pointer">Fermer</button>
            <button onclick="publishQueteToReseau('${q.id}')" style="flex:1;min-width:130px;background:rgba(240,176,50,.14);color:#a06c00;border:1px solid rgba(240,176,50,.35);border-radius:100px;padding:.55rem 1rem;font-size:.78rem;font-weight:700;cursor:pointer">📣 Publier au réseau</button>
            <button onclick="validerQuete('${q.id}');closeQueteModal()" style="flex:1;min-width:130px;background:var(--forest);color:#fff;border:none;border-radius:100px;padding:.55rem 1rem;font-size:.78rem;font-weight:700;cursor:pointer">✅ Valider la preuve</button>
          </div>`
  +   '</div>'
  + '</div>';
  w.style.display = 'block';
}

function closeQueteModal() {
  const w = document.getElementById('quete-modal');
  if (w) w.style.display = 'none';
}

// Ouvre la quête Pilote dans la fiche quête standard (même présentation que les autres rôles).
function openPiloteQueteFiche(qid) {
  const pq = (typeof PILOTE_QUETES_DEMO !== 'undefined') ? PILOTE_QUETES_DEMO.find(x => x.id === qid) : null;
  if (!pq || typeof showQueteFiche !== 'function') return;
  const sol = (typeof SOLS !== 'undefined') ? SOLS.find(s => s.nom === pq.source) : null;
  const lieuNom = (typeof myLieuData !== 'undefined' && myLieuData && myLieuData.nom) ? myLieuData.nom : 'Mon lieu';
  const ville = (typeof myLieuData !== 'undefined' && myLieuData && myLieuData.localisation) ? myLieuData.localisation : 'Bordeaux';
  const _semPlan = ((sol && typeof SOLS_INDICATORS !== 'undefined' && SOLS_INDICATORS[sol.nom]) ? SOLS_INDICATORS[sol.nom].plan : null) || [];
  showQueteFiche({
    titre: pq.titre,
    type: (pq.sourceIc || (sol && sol.img) || '⚡') + ' ' + ((sol && sol.cat) || 'Quête'),
    lieu: lieuNom, pilote: lieuNom, ville: ville,
    desc: (sol && sol.desc) || pq.titre,
    impact: pq.impact || (sol && sol.impact) || '',
    plan: _semPlan,
    materiel: ((sol && typeof SOLS_INDICATORS !== 'undefined' && SOLS_INDICATORS[sol.nom]) ? SOLS_INDICATORS[sol.nom].materiel : null) || [],
    preuve: 'Photos de l\'action réalisée + indicateurs mesurés.',
    apprendre: 'Mise en œuvre de « ' + ((sol && sol.nom) || pq.titre) + ' ».',
    duree: pq.duree || '1 journée',
    places: '0/' + (parseInt(pq.nb, 10) || 6),
    etape_actuelle: 1, etapes: _semPlan.length || 4,
    etapeLabels: _semPlan.length ? _semPlan.map(p => p.titre) : ['Lancement', 'Préparation', 'Réalisation', 'Certification'],
    tokens: pq.graines || 50, co2: (sol && sol.co2) || 0,
    esrs: ((sol && sol.esrs) || []).map(e => String(e).replace('ESRS ', '').trim()),
    financement: { objectif: 0, montant: 0, semeur: null },
    equipe: [{ i: 'M', c: '#4a8c5c' }], dates: ['Samedi · 9h–17h', 'Dimanche · 9h–13h']
  }, 'pilote');
}

/* Publie la quête dans le fil d'action du Réseau, au nom du lieu créé. */
function publishQueteToReseau(qid) {
  const q = (typeof PILOTE_QUETES_DEMO !== 'undefined') ? PILOTE_QUETES_DEMO.find(x => x.id === qid) : null;
  if (!q || typeof RESEAU_POSTS === 'undefined') return;
  const lieu = (typeof myLieuData !== 'undefined' && myLieuData && myLieuData.nom)
    ? { nom: myLieuData.nom, ville: myLieuData.localisation || (typeof EVAD !== 'undefined' ? EVAD.activeLieu.ville : 'Bordeaux') }
    : (typeof EVAD !== 'undefined' ? EVAD.activeLieu : { nom: 'Mon lieu', ville: 'Bordeaux' });
  const ville = (String(lieu.ville).match(/[A-Za-zÀ-ÿ' -]+$/) || [lieu.ville])[0].replace(/^\s*\d{5}\s*/, '').trim() || 'Bordeaux';
  // éviter les doublons exacts en tête de fil
  if (!(RESEAU_POSTS[0] && RESEAU_POSTS[0].quest && RESEAU_POSTS[0].quest.titre === q.titre && RESEAU_POSTS[0].author === lieu.nom)) {
    RESEAU_POSTS.unshift({
      profile: 'pilote', author: lieu.nom, lieu: ville, time: "à l'instant",
      type: 'quete', regen: 'entreprendre',
      text: "On lance une nouvelle quête sur notre lieu ⚡ « " + q.titre + " ». On mobilise des Bâtisseurs, rejoignez-nous !",
      quest: { titre: q.titre, meta: [q.duree, q.nb, (q.graines + ' graines')].filter(Boolean).join(' · ') },
      cta: 'Rejoindre la quête'
    });
  }
  closeQueteModal();
  showScreen('reseau');
  setTimeout(() => {
    if (typeof reseauTab === 'function') { try { reseauTab('fil', document.getElementById('rtab-fil')); } catch (e) {} }
    if (typeof reseauSetFilter === 'function') reseauSetFilter('tout', document.querySelector('.reseau-filter[data-f="tout"]'));
  }, 120);
  if (typeof mmBubble === 'function') mmBubble('📣 Quête publiée au Réseau !');
}

/* Reconstruit les quêtes du Pilote depuis les solutions choisies à la
   création de fiche (chaque solution SOLS porte une quête .quete). */
function syncPiloteQuetesFromLieu() {
  if (typeof PILOTE_QUETES_DEMO === 'undefined') return;
  const d = (typeof myLieuData !== 'undefined' && myLieuData) ? myLieuData
          : (typeof cData !== 'undefined' ? cData : null);
  let sols = [];
  if (d) {
    if (d.solutions && d.solutions.length) sols = d.solutions.slice();
    else if (d.solsByEspace) sols = [...new Set(Object.values(d.solsByEspace).flat())];
  }
  PILOTE_QUETES_DEMO.length = 0;
  if (typeof SOLS === 'undefined') return;
  sols.forEach(nom => {
    const sol = SOLS.find(s => s.nom === nom);
    if (!sol || !sol.quete) return;
    const q = sol.quete;
    PILOTE_QUETES_DEMO.push({
      id: 'q-' + String(nom).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      titre: q.titre || ('Quête · ' + nom),
      statut: 'ouverte',
      duree: q.duree || '—',
      nb: q.nb || '—',
      graines: sol.tok || 50,
      impact: q.impact_quete || sol.impact || '',
      source: nom,
      sourceIc: sol.img || '✦'
    });
  });
}

/* ─── Détection automatique du type de convergence ─── */
function detectConvType(titre, impact) {
  const t = (titre + ' ' + impact).toLowerCase();
  if (/repair|répar|fablab|fab.?lab|réemploi|reemploi|objet/.test(t))          return 'repair';
  if (/jardin|maraîchage|permaculture|potager|serre|cultiv|végétal|kg.*an/.test(t)) return 'jardin';
  if (/solaire|photovoltaïque|pv|thermique|chauffe.eau|kwh|énergie|audit.én/.test(t)) return 'energie_solaire';
  if (/isolation|paille|construction|biosourcé|rénov|chauffage/.test(t))        return 'isolation';
  if (/compost|déchet|biodéchet|tri|gaspillage/.test(t))                         return 'compostage';
  if (/biodiversité|haie|mare|plantation|espèce|faune|flore/.test(t))            return 'biodiversite';
  if (/gouvernance|assemblée|token|graines.local|décision|collectif/.test(t))    return 'gouvernance';
  if (/atelier|formation|stage|transmi|enseign|savoir.faire/.test(t))            return 'atelier';
  if (/coworking|bureau|télétravail/.test(t))                                    return 'coworking';
  if (/mobilité|vélo|déplacement/.test(t))                                       return 'mobilite';
  return null;
}

/* ─── Extraction des valeurs depuis nb + impact ─── */
function parseQueteValues(quete) {
  // val1 = nombre de personnes (moyenne de la fourchette)
  const nbMatch = (quete.nb || '').match(/(\d+)[\s–-]*(\d+)?/);
  const nbMin = nbMatch ? parseInt(nbMatch[1]) : 3;
  const nbMax = nbMatch && nbMatch[2] ? parseInt(nbMatch[2]) : nbMin;
  const val1  = Math.round((nbMin + nbMax) / 2);

  // val2 = valeur chiffrée extraite de l'impact
  const valMatch = (quete.impact || '').match(/[~−\-]?(\d[\d\s]*[\d,.]?\d*)/);
  const val2 = valMatch ? parseFloat(valMatch[1].replace(/\s/g, '').replace(',', '.')) : val1;

  return { val1, val2 };
}

/* ─── Rendu des badges de convergence pour une quête ─── */
function renderQueteConvBadges(quete) {
  const type = detectConvType(quete.titre, quete.impact);
  if (!type) return '';
  const m = CONVERGENCE_MATRIX[type];
  if (!m) return '';
  const { val1, val2 } = parseQueteValues(quete);
  const conv = convergeEntry(type, val1, val2);
  if (!conv) return '';

  const BADGE_CLS = { ESRS:'esrs', ODD:'odd', PCAET:'pcaet', FSE_PLUS:'fse', ADEME:'ademe', BPI:'bpi', ESS:'bpi', NOTRe:'pcaet' };
  const badges = Object.keys(conv).map(k =>
    `<span class="conv-badge ${BADGE_CLS[k]||'esrs'}" title="${k}">${k==='FSE_PLUS'?'FSE+':k==='NOTRe'?'NOTRe':k}</span>`
  ).join('');

  // Indicateur clé mis en avant
  const esrs = conv.ESRS ? Object.entries(conv.ESRS)[0] : null;
  const kpi  = esrs ? `<span style="font-size:.6rem;color:var(--fern);font-weight:600;margin-left:.4rem">→ ${Math.round(esrs[1].val)} ${esrs[1].unite}</span>` : '';

  return `<div class="conv-badge-row" style="margin-top:.4rem">${badges}${kpi}</div>`;
}

/* ─── Rendu de la liste des quêtes dans le panel Pilote ─── */
function renderPiloteQuetes() {
  const container = document.getElementById('pilote-quetes-list');
  if (!container) return;

  // État vierge si aucune quête
  if (PILOTE_QUETES_DEMO.length === 0) {
    container.innerHTML = `
      <div style="text-align:center;padding:2.5rem 1rem;color:var(--moss);opacity:.5">
        <div style="font-size:2rem;margin-bottom:.75rem">⚡</div>
        <div style="font-size:.82rem;font-weight:600;margin-bottom:.35rem">Aucune quête pour l'instant</div>
        <div style="font-size:.7rem">Les quêtes créées pour ce lieu apparaîtront ici.</div>
      </div>`;
    const stats = document.querySelectorAll('#pilote-panel-quetes .lq-stat-val');
    if (stats[0]) stats[0].textContent = '0';
    if (stats[2]) stats[2].textContent = '0';
    if (stats[3]) stats[3].textContent = '—';
    return;
  }

  const nbValidees = quetesValidees.size;
  const nbDossiers = 8;

  container.innerHTML = PILOTE_QUETES_DEMO.map(q => {
    const estValidee = quetesValidees.has(q.id);
    const statut     = estValidee ? 'validee' : q.statut;
    const statutLabel = { 'ouverte':'Ouverte', 'en-cours':'En cours', 'validee':'✓ Propagée' }[statut];
    const type       = detectConvType(q.titre, q.impact);
    const badges     = renderQueteConvBadges(q);
    const propagBadge = estValidee
      ? `<span class="pq-propag-badge visible">✦ ${nbDossiers} dossiers mis à jour</span>`
      : '';

    return `
      <div class="pq-card" id="pq-${q.id}" style="${estValidee ? 'opacity:.7' : ''}">
        <div class="pq-card-top">
          <div class="pq-card-title">${q.titre}</div>
          <span class="pq-status ${statut}">${statutLabel}</span>
        </div>
        <div class="pq-card-meta">
          <span>⏱ ${q.duree}</span>
          <span>👥 ${q.nb}</span>
          <span>🌱 ${q.graines} graines</span>
          <span style="color:var(--fern);font-weight:600">${q.impact.split('·')[0].trim()}</span>
        </div>
        ${badges}
        <div class="pq-actions">
          <button class="btn btn-primary" style="font-size:.8rem;font-weight:700;padding:.55rem 1.3rem"
            onclick="openPiloteQueteFiche('${q.id}')">Voir détail →</button>
          ${estValidee ? `<span style="font-size:.65rem;color:var(--fern);font-weight:600;margin-left:.2rem">✓ Validée</span>` : ''}
          ${propagBadge}
          ${type ? `<span style="font-size:.58rem;color:var(--moss);opacity:.45;margin-left:auto">Type : ${CONVERGENCE_MATRIX[type]?.label || type}</span>` : ''}
        </div>
      </div>`;
  }).join('');

  // Mise à jour stats KPI
  const nbActives   = PILOTE_QUETES_DEMO.filter(q => !quetesValidees.has(q.id) && q.statut !== 'terminee').length;
  const nbTerminees = quetesValidees.size;
  const totalGraines = [...quetesValidees].reduce((s, id) => {
    const q = PILOTE_QUETES_DEMO.find(x => x.id === id);
    return s + (q ? q.graines : 0);
  }, 0);

  const stats = document.querySelectorAll('#pilote-panel-quetes .lq-stat-val');
  if (stats[0]) stats[0].textContent = nbActives;
  if (stats[2]) stats[2].textContent = nbTerminees;
  if (stats[3]) stats[3].textContent = totalGraines || '—';

  // Message Deva
  const msg = document.getElementById('deva-quetes-msg');
  if (msg) {
    if (nbValidees === 0) {
      msg.textContent = 'Valide une quête pour la propager automatiquement dans tes dossiers FSE+, CSRD et PCAET.';
    } else if (nbValidees < 3) {
      msg.textContent = `${nbValidees} quête${nbValidees>1?'s':''} validée${nbValidees>1?'s':''} → données propagées dans ${nbDossiers} dossiers. Continue : chaque validation enrichit tes rapports.`;
    } else {
      msg.textContent = `${nbValidees} quêtes validées → tes dossiers CSRD et FSE+ sont maintenant renseignés. Génère un rapport depuis l'onglet Dossiers.`;
    }
  }

  // Répercute sur l'aperçu (Vadance + wallet graines)
  if (typeof updateApercuFromQuetes === 'function') updateApercuFromQuetes();
}

/* ─── Validation d'une quête → propagation dans actionsTerrains ─── */
function validerQuete(id) {
  const quete = PILOTE_QUETES_DEMO.find(q => q.id === id);
  if (!quete || quetesValidees.has(id)) return;

  // Gain visible : points REGEN + graines de la quête
  const _pts = (String(quete.impact || '').match(/(\d+)\s*pts?/i) || [])[1] || 5;
  if (typeof mmBubble === 'function') mmBubble(`✓ Preuve validée · +${_pts} pts Vadance · +${quete.graines || 0} graines 🌱`);

  const type = detectConvType(quete.titre, quete.impact);
  if (!type) {
    mmBubble('✅ Quête validée, sans équivalent direct dans la matrice de convergence');
    quetesValidees.add(id);
    renderPiloteQuetes();
    return;
  }

  const { val1, val2 } = parseQueteValues(quete);
  const conv = convergeEntry(type, val1, val2);
  const m    = CONVERGENCE_MATRIX[type];

  // Ajoute à actionsTerrains pour les dossiers
  actionsTerrains.push({
    type,
    label: quete.titre,
    val1, val2,
    date: new Date().toISOString().split('T')[0],
    convergence: conv,
    source: 'quete',
    quete_id: id
  });

  quetesValidees.add(id);
  renderPiloteQuetes();

  // Résumé de ce qui a été propagé
  const cadresList = Object.keys(conv).map(k => k === 'FSE_PLUS' ? 'FSE+' : k).join(' · ');
  const esrsKeys   = conv.ESRS ? Object.keys(conv.ESRS).join('+') : '';

  mmBubble(`✦ "${quete.titre.substring(0,35)}…" → propagée dans ${Object.keys(conv).length} cadres (${esrsKeys ? esrsKeys+' · ' : ''}${cadresList.split(' · ').slice(0,3).join(' · ')}…)`);

  // Rafraîchit les panels si visibles
  setTimeout(() => {
    if (document.getElementById('pilote-panel-dossiers')?.classList.contains('active')) {
      initDossiers();
    }
    // Notif sur l'onglet Dossiers
    const dossBtn = document.getElementById('ptab-dossiers');
    if (dossBtn && !dossBtn.querySelector('.notif-dot')) {
      const dot = document.createElement('span');
      dot.className = 'notif-dot';
      dot.style.cssText = 'display:inline-block;width:7px;height:7px;background:var(--amber);border-radius:50%;margin-left:.35rem;vertical-align:middle';
      dossBtn.appendChild(dot);
    }
  }, 300);
}

/* ─── Init quêtes quand on ouvre le panel ─── */

/* ═══════════════════════════════════════════════════════
   FIN QUÊTES × PERMA-COMPTABILITÉ
   ═══════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────────
   1. MATRICE DE CONVERGENCE
   Pour chaque type d'action terrain :
   - units     : unités de mesure (label1, label2)
   - par unité : vecteur de contributions par cadre
   ───────────────────────────────────────────────────────── */
const CONVERGENCE_MATRIX = {

  atelier: {
    label: 'Atelier / Formation',
    units: { u1: 'personnes', u2: 'heures' },
    calc: (nb_pers, nb_h) => ({
      ESRS: {
        'S1': { val: nb_pers, unite: 'personnes formées', label: 'Main-d\'œuvre & conditions', auditable: true },
        'S2': { val: nb_pers, unite: 'bénéficiaires communauté', label: 'Travailleurs dans la chaîne de valeur', auditable: false }
      },
      ODD: {
        '4 Éducation': { val: nb_pers, unite: 'bénéficiaires' },
        '11 Villes durables': { val: nb_pers, unite: 'citoyens engagés' },
        '17 Partenariats': { val: 1, unite: 'action collective' }
      },
      PCAET: { axe: 'Sensibilisation & sobriété', val: nb_pers, unite: 'personnes sensibilisées', action: 'Changement de comportement' },
      FSE_PLUS: { axe: 'Inclusion & compétences', val: nb_pers, unite: 'participants', heures: nb_pers * nb_h },
      ADEME: { programme: 'Éducation à l\'environnement', val: nb_pers, unite: 'bénéficiaires EE' },
      BPI: { critere: 'Innovation sociale', val: nb_pers, unite: 'bénéficiaires' },
      ESS: { critere: 'Utilité sociale démontrée', val: nb_pers, unite: 'bénéficiaires directs' },
      NOTRe: { competence: 'Formation professionnelle & apprentissage', val: nb_pers * nb_h, unite: 'heures stagiaires' }
    })
  },

  coworking: {
    label: 'Espace de coworking',
    units: { u1: 'postes', u2: 'jours/mois' },
    calc: (nb_postes, nb_jours) => ({
      ESRS: {
        'S1': { val: nb_postes, unite: 'travailleurs indépendants accueillis', label: 'Conditions de travail', auditable: true },
        'E1': { val: Math.round(nb_postes * nb_jours * 0.8), unite: 'kgCO₂ évités (trajets domicile-travail)', label: 'Réduction émissions GES', auditable: false }
      },
      ODD: {
        '8 Travail décent': { val: nb_postes, unite: 'emplois soutenus' },
        '11 Villes durables': { val: Math.round(nb_postes * nb_jours * 0.8), unite: 'kgCO₂ évités mobilité' },
        '9 Industrie & innovation': { val: nb_postes, unite: 'entrepreneurs accueillis' }
      },
      PCAET: { axe: 'Mobilité décarbonée', val: Math.round(nb_postes * nb_jours * 0.8), unite: 'kgCO₂ évités', action: 'Réduction déplacements domicile-travail' },
      FSE_PLUS: { axe: 'Emploi & entrepreneuriat', val: nb_postes, unite: 'travailleurs indépendants soutenus' },
      ADEME: { programme: 'Mobilité durable', val: Math.round(nb_postes * nb_jours * 0.8), unite: 'kgCO₂ évités/mois' },
      BPI: { critere: 'Développement économique territorial', val: nb_postes, unite: 'emplois locaux soutenus' },
      ESS: { critere: 'Développement local', val: nb_postes, unite: 'acteurs ESS accueillis' },
      NOTRe: { competence: 'Développement économique & emploi', val: nb_postes, unite: 'emplois locaux maintenus' }
    })
  },

  energie_solaire: {
    label: 'Énergie solaire (PV ou thermique)',
    units: { u1: 'kWh/an produits', u2: 'm² panneaux' },
    calc: (kwh, m2) => ({
      ESRS: {
        'E1': { val: Math.round(kwh * 0.057), unite: 'kgCO₂ évités/an (Scope 2)', label: 'Changement climatique', auditable: true },
        'E5': { val: kwh, unite: 'kWh ENR autoproduits', label: 'Utilisation des ressources & économie circulaire', auditable: true }
      },
      ODD: {
        '7 Énergie propre': { val: kwh, unite: 'kWh ENR' },
        '13 Action climatique': { val: Math.round(kwh * 0.057), unite: 'kgCO₂ évités' },
        '11 Villes durables': { val: 1, unite: 'installation ENR locale' }
      },
      PCAET: { axe: 'Production d\'énergie renouvelable', val: kwh, unite: 'kWh ENR/an', action: 'Décarbonation Scope 2' },
      FSE_PLUS: { axe: 'Transition verte', val: Math.round(kwh * 0.057), unite: 'kgCO₂ évités' },
      ADEME: { programme: 'Décarbonation & ENR', val: kwh, unite: 'kWh ENR', co2: Math.round(kwh * 0.057) },
      BPI: { critere: 'Innovation verte', val: kwh, unite: 'kWh ENR autoproduits' },
      ESS: { critere: 'Impact environnemental', val: Math.round(kwh * 0.057), unite: 'kgCO₂ évités' },
      NOTRe: { competence: 'Transition énergétique (SRADDET/PCAET)', val: kwh, unite: 'kWh ENR locaux' }
    })
  },

  isolation: {
    label: 'Isolation / Construction biosourcée',
    units: { u1: 'm² isolés', u2: '% réduction chauffage' },
    calc: (m2, pct) => {
      const kwh_eco = Math.round(m2 * 40 * (pct / 100));
      return {
        ESRS: {
          'E1': { val: Math.round(kwh_eco * 0.057), unite: 'kgCO₂ évités/an', label: 'Réduction émissions GES', auditable: true },
          'E5': { val: m2, unite: 'm² matériaux biosourcés', label: 'Économie circulaire & ressources', auditable: true }
        },
        ODD: {
          '11 Villes durables': { val: m2, unite: 'm² rénovés' },
          '13 Action climatique': { val: Math.round(kwh_eco * 0.057), unite: 'kgCO₂ évités' },
          '12 Consommation responsable': { val: m2, unite: 'm² éco-construction' }
        },
        PCAET: { axe: 'Rénovation énergétique', val: kwh_eco, unite: 'kWh économisés/an', action: 'Efficacité énergétique bâtiment' },
        FSE_PLUS: { axe: 'Transition verte & emploi', val: m2, unite: 'm² rénovés biosourcés' },
        ADEME: { programme: 'Rénovation énergétique', val: kwh_eco, unite: 'kWh économisés', co2: Math.round(kwh_eco * 0.057) },
        BPI: { critere: 'Innovation verte / Bâtiment durable', val: m2, unite: 'm² isolés biosourcés' },
        ESS: { critere: 'Impact environnemental & social', val: m2, unite: 'm² de bâti rénové' },
        NOTRe: { competence: 'Transition énergétique & rénovation', val: kwh_eco, unite: 'kWh économisés/an' }
      };
    }
  },

  jardin: {
    label: 'Jardin / Maraîchage / Permaculture',
    units: { u1: 'm² cultivés', u2: 'kg produits/an' },
    calc: (m2, kg) => ({
      ESRS: {
        'E4': { val: m2, unite: 'm² biodiversité cultivée', label: 'Biodiversité & écosystèmes', auditable: true },
        'E1': { val: Math.round(kg * 0.5), unite: 'kgCO₂ évités (transport & intrants)', label: 'Climat', auditable: false },
        'S2': { val: kg, unite: 'kg alimentation locale produite', label: 'Chaîne de valeur', auditable: true }
      },
      ODD: {
        '2 Faim zéro': { val: kg, unite: 'kg produits locaux' },
        '15 Vie terrestre': { val: m2, unite: 'm² biodiversité' },
        '3 Bonne santé': { val: Math.round(m2 / 10), unite: 'bénéficiaires alimentation saine' }
      },
      PCAET: { axe: 'Agriculture & alimentation durables', val: Math.round(kg * 0.5), unite: 'kgCO₂ évités', action: 'Circuit court alimentaire' },
      FSE_PLUS: { axe: 'Inclusion sociale & alimentation', val: Math.round(m2 / 50), unite: 'familles bénéficiaires' },
      ADEME: { programme: 'Alimentation durable & circuits courts', val: kg, unite: 'kg alimentation locale', co2: Math.round(kg * 0.5) },
      BPI: { critere: 'Souveraineté alimentaire', val: kg, unite: 'kg production locale' },
      ESS: { critere: 'Utilité sociale - alimentation', val: Math.round(m2 / 50), unite: 'ménages bénéficiaires' },
      NOTRe: { competence: 'Agriculture & gestion foncière', val: m2, unite: 'm² en agriculture durable' }
    })
  },

  compostage: {
    label: 'Compostage collectif',
    units: { u1: 'kg biodéchets/an', u2: 'foyers concernés' },
    calc: (kg, foyers) => ({
      ESRS: {
        'E5': { val: kg, unite: 'kg déchets valorisés (économie circulaire)', label: 'Ressources & déchets', auditable: true },
        'E1': { val: Math.round(kg * 0.5), unite: 'kgCO₂ évités (évitement décharge)', label: 'Climat', auditable: false }
      },
      ODD: {
        '12 Consommation responsable': { val: kg, unite: 'kg déchets détournés' },
        '13 Action climatique': { val: Math.round(kg * 0.5), unite: 'kgCO₂ évités' },
        '15 Vie terrestre': { val: Math.round(kg * 0.3), unite: 'kg compost produit' }
      },
      PCAET: { axe: 'Déchets & économie circulaire', val: kg, unite: 'kg biodéchets valorisés', action: 'Réduction déchets ménagers' },
      FSE_PLUS: { axe: 'Environnement & gestion ressources', val: foyers, unite: 'foyers sensibilisés' },
      ADEME: { programme: 'Prévention & valorisation déchets', val: kg, unite: 'kg biodéchets valorisés', co2: Math.round(kg * 0.5) },
      BPI: { critere: 'Économie circulaire', val: kg, unite: 'kg matière valorisée' },
      ESS: { critere: 'Utilité sociale - environnement', val: foyers, unite: 'foyers concernés' },
      NOTRe: { competence: 'Gestion des déchets', val: kg, unite: 'kg biodéchets compostés localement' }
    })
  },

  repair: {
    label: 'Repair Café / FabLab',
    units: { u1: 'objets réparés', u2: 'participants' },
    calc: (objets, pers) => ({
      ESRS: {
        'E5': { val: Math.round(objets * 0.5), unite: 'kg matière détournée de décharge', label: 'Économie circulaire', auditable: true },
        'S1': { val: pers, unite: 'personnes formées compétences manuelles', label: 'Formation', auditable: true },
        'E1': { val: Math.round(objets * 2.5), unite: 'kgCO₂ évités (cycle de vie prolongé)', label: 'Climat', auditable: false }
      },
      ODD: {
        '12 Consommation responsable': { val: objets, unite: 'objets réparés (cycle vie prolongé)' },
        '4 Éducation': { val: pers, unite: 'personnes compétences manuelles' },
        '8 Travail décent': { val: Math.round(pers * 0.2), unite: 'emplois locaux réparation soutenus' }
      },
      PCAET: { axe: 'Économie circulaire & sobriété', val: Math.round(objets * 2.5), unite: 'kgCO₂ évités', action: 'Extension durée de vie produits' },
      FSE_PLUS: { axe: 'Compétences & employabilité', val: pers, unite: 'participants formés' },
      ADEME: { programme: 'Réparation & réemploi', val: objets, unite: 'objets réparés', co2: Math.round(objets * 2.5) },
      BPI: { critere: 'Économie circulaire & innovation sociale', val: objets, unite: 'objets remis en service' },
      ESS: { critere: 'Utilité sociale & lien social', val: pers, unite: 'bénéficiaires ateliers' },
      NOTRe: { competence: 'Économie circulaire', val: Math.round(objets * 0.5), unite: 'kg matériaux réemployés localement' }
    })
  },

  biodiversite: {
    label: 'Biodiversité / Végétalisation',
    units: { u1: 'm² végétalisés', u2: 'espèces plantées' },
    calc: (m2, especes) => ({
      ESRS: {
        'E4': { val: m2, unite: 'm² habitats créés/restaurés', label: 'Biodiversité & écosystèmes', auditable: true },
        'E1': { val: Math.round(m2 * 2), unite: 'kgCO₂ séquestrés/an (végétation)', label: 'Climat', auditable: false },
        'E3': { val: m2, unite: 'm² perméabilité hydraulique restaurée', label: 'Eau', auditable: false }
      },
      ODD: {
        '15 Vie terrestre': { val: m2, unite: 'm² biodiversité' },
        '13 Action climatique': { val: Math.round(m2 * 2), unite: 'kgCO₂ séquestrés' },
        '11 Villes durables': { val: m2, unite: 'm² végétalisés en milieu urbain' }
      },
      PCAET: { axe: 'Biodiversité & nature en ville', val: m2, unite: 'm² végétalisés', action: 'Trame verte & bleue' },
      FSE_PLUS: { axe: 'Environnement & biodiversité', val: especes, unite: 'espèces locales replantées' },
      ADEME: { programme: 'Biodiversité & solutions fondées sur la nature', val: m2, unite: 'm² NBS', co2: Math.round(m2 * 2) },
      BPI: { critere: 'Impact environnemental positif', val: m2, unite: 'm² renaturation' },
      ESS: { critere: 'Utilité sociale - environnement', val: m2, unite: 'm² espaces partagés renaturés' },
      NOTRe: { competence: 'Biodiversité (SRCE/TVB)', val: m2, unite: 'm² trame verte créée' }
    })
  },

  gouvernance: {
    label: 'Gouvernance participative',
    units: { u1: 'membres actifs', u2: 'décisions co-construites' },
    calc: (membres, decisions) => ({
      ESRS: {
        'G1': { val: decisions, unite: 'décisions tracées & transparentes', label: 'Conduite des affaires', auditable: true },
        'S1': { val: membres, unite: 'parties prenantes impliquées', label: 'Main-d\'œuvre', auditable: true }
      },
      ODD: {
        '16 Paix & justice': { val: decisions, unite: 'décisions participatives' },
        '17 Partenariats': { val: membres, unite: 'membres actifs réseau' },
        '10 Inégalités réduites': { val: membres, unite: 'voix représentées' }
      },
      PCAET: { axe: 'Gouvernance & mobilisation citoyenne', val: membres, unite: 'citoyens engagés', action: 'Démocratie participative locale' },
      FSE_PLUS: { axe: 'Inclusion & participation citoyenne', val: membres, unite: 'participants gouvernance' },
      ADEME: { programme: 'Engagement citoyen & concertation', val: decisions, unite: 'processus participatifs documentés' },
      BPI: { critere: 'Gouvernance responsable & transparence', val: decisions, unite: 'décisions documentées' },
      ESS: { critere: 'Gouvernance démocratique (loi Hamon)', val: membres, unite: 'membres actifs organe délibérant' },
      NOTRe: { competence: 'Démocratie locale & concertation', val: membres, unite: 'citoyens dans instances participatives' }
    })
  },

  mobilite: {
    label: 'Mobilité douce',
    units: { u1: 'trajets évités/mois', u2: 'km moyen/trajet' },
    calc: (trajets, km) => {
      const co2 = Math.round(trajets * km * 0.21);
      return {
        ESRS: {
          'E1': { val: co2, unite: 'kgCO₂ évités/mois (Scope 3)', label: 'Mobilité & déplacements', auditable: true }
        },
        ODD: {
          '11 Villes durables': { val: co2, unite: 'kgCO₂ mobilité évités' },
          '13 Action climatique': { val: co2, unite: 'kgCO₂ évités/mois' },
          '3 Bonne santé': { val: trajets, unite: 'trajets actifs (vélo/marche)' }
        },
        PCAET: { axe: 'Mobilité décarbonée', val: co2, unite: 'kgCO₂ évités/mois', action: 'Report modal voiture → mobilité douce' },
        FSE_PLUS: { axe: 'Mobilité & emploi', val: trajets, unite: 'trajets facilités mobilité douce' },
        ADEME: { programme: 'Mobilité durable', val: co2, unite: 'kgCO₂ évités', km: trajets * km },
        BPI: { critere: 'Impact environnemental mobilité', val: co2, unite: 'kgCO₂ évités/mois' },
        ESS: { critere: 'Mobilité inclusive', val: trajets, unite: 'trajets accessibles' },
        NOTRe: { competence: 'Mobilité & transports (PDU)', val: co2, unite: 'kgCO₂ évités mobilité locale' }
      };
    }
  }
};

/* ─────────────────────────────────────────────────────────
   2. CATALOGUE DES DOSSIERS INSTITUTIONNELS
   Chaque dossier agrège les indicateurs pertinents
   depuis les actions terrain
   ───────────────────────────────────────────────────────── */
const DOSSIERS_CATALOGUE = [
  {
    id: 'csrd_esrs',
    icon: '📋',
    nom: 'Rapport CSRD / ESRS',
    sub: 'Directive européenne · 50 000 entreprises concernées',
    cadres: ['ESRS'],
    couleur: 'var(--sky)',
    description: 'Rapport d\'impact conforme à la directive CSRD 2026. Chaque action terrain est automatiquement traduite en indicateurs ESRS E1–E5, S1–S4, G1–G2 avec niveau d\'auditabilité.',
    indicateurs_cles: ['E1 kgCO₂ évités', 'S1 personnes formées', 'E4 m² biodiversité', 'G1 décisions documentées'],
    valeur_economisee: 4500
  },
  {
    id: 'pcaet',
    icon: '🌡',
    nom: 'Contribution PCAET',
    sub: 'Plan Climat Air Énergie Territorial · obligation loi NOTRe',
    cadres: ['PCAET', 'NOTRe'],
    couleur: 'var(--fern)',
    description: 'Indicateurs de contribution au Plan Climat de ta collectivité. Justifie ton rôle dans la stratégie territoriale de décarbonation et de transition.',
    indicateurs_cles: ['kgCO₂ évités cumul', 'kWh ENR produits', 'm² végétalisés', 'personnes sensibilisées'],
    valeur_economisee: 2800
  },
  {
    id: 'fse_plus',
    icon: '🇪🇺',
    nom: 'Dossier FSE+',
    sub: 'Fonds Social Européen · axe inclusion & compétences',
    cadres: ['FSE_PLUS'],
    couleur: 'var(--lavender)',
    description: 'Indicateurs de résultat pour les appels à projets FSE+ 2021–2027. Participants formés, heures stagiaires, inclusion sociale, tous extraits automatiquement de tes quêtes.',
    indicateurs_cles: ['participants formés', 'heures stagiaires', 'emplois soutenus', 'bénéficiaires inclusion'],
    valeur_economisee: 3500
  },
  {
    id: 'ademe',
    icon: '♻️',
    nom: 'Dossier ADEME',
    sub: 'Appels à projets transition écologique',
    cadres: ['ADEME'],
    couleur: 'var(--terracotta)',
    description: 'Indicateurs d\'impact environnemental pour les programmes ADEME : décarbonation, ENR, déchets, biodiversité, mobilité durable.',
    indicateurs_cles: ['kgCO₂ évités total', 'kWh ENR', 'kg déchets valorisés', 'm² biodiversité'],
    valeur_economisee: 3000
  },
  {
    id: 'bpi',
    icon: '💼',
    nom: 'Dossier BPI France',
    sub: 'Innovation sociale · Prêts à impact',
    cadres: ['BPI'],
    couleur: 'var(--amber)',
    description: 'Justification d\'impact pour les dispositifs BPI France (prêt d\'honneur, aide innovation, garantie). Démontre la valeur sociale et environnementale créée.',
    indicateurs_cles: ['bénéficiaires directs', 'emplois créés/maintenus', 'kgCO₂ évités', 'kg réemploi'],
    valeur_economisee: 2000
  },
  {
    id: 'odd',
    icon: '🌍',
    nom: 'Rapport ODD / Agenda 2030',
    sub: 'Objectifs de Développement Durable ONU',
    cadres: ['ODD'],
    couleur: 'var(--moss)',
    description: 'Contribution aux 17 ODD mesurée et documentée. Utilisable pour les rapports de mécénat, les fondations, et la communication d\'impact publique.',
    indicateurs_cles: ['ODD 4 éducation', 'ODD 11 villes', 'ODD 13 climat', 'ODD 15 biodiversité'],
    valeur_economisee: 1500
  },
  {
    id: 'ess',
    icon: '🤝',
    nom: 'Agrément ESUS / Utilité sociale',
    sub: 'Loi Hamon ESS · Agrément ESUS · Mécénat',
    cadres: ['ESS'],
    couleur: 'var(--fern)',
    description: 'Démonstration de l\'utilité sociale pour l\'agrément ESUS, l\'accès au mécénat défiscalisé et aux financements ESS (France Active, Crédit Coopératif).',
    indicateurs_cles: ['bénéficiaires utilité sociale', 'gouvernance démocratique', 'missions non-lucratives', 'ancrage territorial'],
    valeur_economisee: 2500
  },
  {
    id: 'region',
    icon: '🗺',
    nom: 'Rapport territorial Région',
    sub: 'SRADDET · Contrats de territoire · FEDER',
    cadres: ['NOTRe', 'PCAET', 'FSE_PLUS'],
    couleur: 'var(--sky)',
    description: 'Synthèse multi-cadres pour les collectivités : SRADDET, FEDER, contrats de territoire. Un seul document qui répond à toutes les exigences régionales.',
    indicateurs_cles: ['emplois locaux', 'transition énergétique', 'cohésion sociale', 'biodiversité territoriale'],
    valeur_economisee: 6000
  }
];

/* ─────────────────────────────────────────────────────────
   3. STOCKAGE DES ACTIONS TERRAIN (session)
   ───────────────────────────────────────────────────────── */
let actionsTerrains = [];

/* ─────────────────────────────────────────────────────────
   4. MOTEUR DE CONVERGENCE
   convergeEntry(type, val1, val2) → vecteur tous cadres
   ───────────────────────────────────────────────────────── */
function convergeEntry(type, val1, val2) {
  const m = CONVERGENCE_MATRIX[type];
  if (!m) return null;
  return m.calc(parseFloat(val1) || 0, parseFloat(val2) || 0);
}

/* Agrège toutes les actions enregistrées par cadre */
function agregerParCadre(cadreKey) {
  const result = {};
  actionsTerrains.forEach(action => {
    const conv = action.convergence;
    if (!conv || !conv[cadreKey]) return;
    Object.entries(conv[cadreKey]).forEach(([indic, data]) => {
      if (!result[indic]) result[indic] = { ...data, sources: [] };
      else result[indic].val = (result[indic].val || 0) + (data.val || 0);
      result[indic].sources.push(action.label || action.type);
    });
  });
  return result;
}

/* Calcule le % de complétude d'un dossier (indicateurs renseignés) */
function calculCompletude(dossier) {
  if (actionsTerrains.length === 0) return 0;
  const cadresCoverts = new Set();
  actionsTerrains.forEach(a => {
    if (!a.convergence) return;
    dossier.cadres.forEach(c => {
      if (a.convergence[c] && Object.keys(a.convergence[c]).length > 0) cadresCoverts.add(c);
    });
  });
  return Math.min(100, Math.round((cadresCoverts.size / dossier.cadres.length) * 60 + actionsTerrains.length * 8));
}

/* ─────────────────────────────────────────────────────────
   5. UI, Initialisation du panel Dossiers
   ───────────────────────────────────────────────────────── */
/* ─────────────────────────────────────────────────────────
   PONT IMPACT ← PERMA-COMPTABILITÉ
   ───────────────────────────────────────────────────────── */
function renderImpact() {
  const nb = actionsTerrains.length;

  // Bandeau source
  const srcBar = document.getElementById('impact-source-bar');
  const srcTxt = document.getElementById('impact-source-txt');
  if (srcBar) srcBar.style.display = nb > 0 ? 'flex' : 'none';
  if (srcTxt) srcTxt.textContent = `Données issues de ${nb} action${nb>1?'s':''} terrain`;

  if (nb === 0) {
    // Tout reste à "—"
    ['impact-kpi-regen','impact-kpi-co2','impact-kpi-personnes','impact-kpi-preuves'].forEach(id => {
      const el = document.getElementById(id); if (el) el.textContent = '—';
    });
    const pl = document.getElementById('impact-proof-list');
    if (pl) pl.innerHTML = `<div style="padding:1.5rem;text-align:center;font-size:.78rem;color:var(--moss);opacity:.5">Aucune action saisie, documente via <span style="color:var(--fern);cursor:pointer;font-weight:600" onclick="piloteTab('dossiers',document.getElementById('ptab-dossiers'))">la perma-comptabilité →</span></div>`;
    return;
  }

  // ── Agrégation des données depuis actionsTerrains ──
  const covered = new Set();
  let co2Total = 0, personnesTotal = 0, alimentKg = 0, nrjKwh = 0, dechetsKg = 0;

  actionsTerrains.forEach(a => {
    const c = a.convergence;
    if (!c) return;
    if (c.ESRS) Object.keys(c.ESRS).forEach(k => covered.add(k));

    // CO₂
    if (c.ESRS?.E1?.val) co2Total += parseFloat(c.ESRS.E1.val) || 0;

    // Personnes formées (ateliers, coworking)
    if (['atelier','coworking'].includes(a.type)) personnesTotal += parseInt(a.val1) || 0;

    // Alimentation (jardin)
    if (a.type === 'jardin' && a.val2) alimentKg += parseFloat(a.val2) || 0;

    // Énergie (solaire)
    if (a.type === 'energie_solaire' && a.val1) nrjKwh += parseFloat(a.val1) || 0;

    // Déchets (repair + compostage)
    if (['repair','compostage'].includes(a.type) && a.val2) dechetsKg += parseFloat(a.val2) || 0;
  });

  // ── Vadance (0–100 basé sur couverture ESRS + nb actions) ──
  const esrsScore = Math.round((covered.size / 11) * 60);
  const actionsScore = Math.min(40, nb * 5);
  const regenScore = esrsScore + actionsScore;

  // ── KPIs ──
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('impact-kpi-regen',    regenScore + ' / 100');
  set('impact-kpi-co2',      co2Total > 0 ? (co2Total / 1000).toFixed(2) + ' t' : '—');
  set('impact-kpi-personnes', personnesTotal > 0 ? personnesTotal : '—');
  set('impact-kpi-preuves',  nb);
  set('impact-kpi-regen-trend',    regenScore >= 50 ? '✦ Éligible financement Semeur' : 'en progression');
  set('impact-kpi-co2-trend',      co2Total > 0 ? 'mesurées via perma-compta' : 'à mesurer');
  set('impact-kpi-personnes-trend', personnesTotal > 0 ? 'via ateliers & coworking' : 'à renseigner');
  set('impact-kpi-preuves-trend',  nb + ' action' + (nb>1?'s':'') + ' certifiable' + (nb>1?'s':''));

  // ── Barres impact ──
  const setBar = (fillId, valId, val, max, unit) => {
    const pct = max > 0 ? Math.min(100, Math.round(val / max * 100)) : 0;
    const f = document.getElementById(fillId); if (f) f.style.width = pct + '%';
    const v = document.getElementById(valId);
    if (v) v.textContent = val > 0 ? (val >= 1000 ? Math.round(val/1000*10)/10 + ' t' : Math.round(val) + ' ' + unit) : '—';
  };
  setBar('imp-bar-alim',  'imp-bar-val-alim',  alimentKg,    500,  'kg');
  setBar('imp-bar-pers',  'imp-bar-val-pers',  personnesTotal, 50, 'pers.');
  setBar('imp-bar-nrj',   'imp-bar-val-nrj',   nrjKwh,       2000, 'kWh');
  setBar('imp-bar-dech',  'imp-bar-val-dech',  dechetsKg,    300,  'kg');

  // ── Barres ESRS ──
  const eKeys = ['E1','E2','E3','E4','E5'], sKeys = ['S1','S2','S3','S4'], gKeys = ['G1','G2'];
  const cE = eKeys.filter(k => covered.has(k)).length;
  const cS = sKeys.filter(k => covered.has(k)).length;
  const cG = gKeys.filter(k => covered.has(k)).length;

  const setESRS = (fillId, valId, val, max) => {
    const f = document.getElementById(fillId); if (f) f.style.width = Math.round(val/max*100) + '%';
    const v = document.getElementById(valId);  if (v) v.textContent = val + ' / ' + max;
  };
  setESRS('imp-esrs-e', 'imp-esrs-e-val', cE, 5);
  setESRS('imp-esrs-s', 'imp-esrs-s-val', cS, 4);
  setESRS('imp-esrs-g', 'imp-esrs-g-val', cG, 2);
  setESRS('imp-esrs-total', 'imp-esrs-total-val', covered.size, 11);

  // ── Liste des preuves ──
  const pl = document.getElementById('impact-proof-list');
  if (pl) {
    pl.innerHTML = [...actionsTerrains].reverse().map(a => {
      const icon = PC_ICONS[a.type] || '⚡';
      const m    = CONVERGENCE_MATRIX[a.type];
      const esrsKeys = a.convergence?.ESRS ? Object.keys(a.convergence.ESRS).join(' · ') : '';
      const date = a.date ? new Date(a.date).toLocaleDateString('fr-FR',{day:'numeric',month:'short'}) : '';
      return `
        <div style="display:flex;align-items:center;gap:.65rem;padding:.55rem .8rem;border-bottom:1px solid rgba(46,102,66,.07)">
          <span style="font-size:1rem">${icon}</span>
          <div style="flex:1">
            <div style="font-size:.75rem;font-weight:600;color:var(--ink)">${a.label}</div>
            <div style="font-size:.6rem;color:var(--moss);opacity:.55">${date}${esrsKeys ? ' · ' + esrsKeys : ''}</div>
          </div>
          <span style="font-size:.6rem;background:rgba(74,140,92,.1);color:var(--fern);padding:.15rem .5rem;border-radius:100px;font-weight:600">certifiable</span>
        </div>`;
    }).join('');
  }

  // ── Message Deva ──
  const msg = document.getElementById('deva-impact-msg');
  if (msg) {
    if (regenScore >= 60) {
      msg.textContent = `Vadance ${regenScore}/100, ton lieu est éligible aux financements Semeur. Génère le rapport pour le partager.`;
    } else {
      msg.textContent = `${nb} action${nb>1?'s':''} saisie${nb>1?'s':''} · Vadance ${regenScore}/100. Saisis ${Math.ceil((50 - regenScore) / 5)} action${Math.ceil((50-regenScore)/5)>1?'s':''} de plus pour atteindre le seuil Semeur.`;
    }
  }

  // ── Arc REGEN + valeur (hero Aperçu) ──
  const arc = document.getElementById('regen-arc');
  if (arc) arc.style.strokeDashoffset = String(226.2 * (1 - regenScore / 100));
  const arcVal = document.getElementById('apercu-regen-val');
  if (arcVal) arcVal.textContent = nb > 0 ? regenScore : '—';

  // ── Message Deva Aperçu ──
}

/* ─── Icônes par type d'action ─── */
const PC_ICONS = {
  atelier:'🎓', coworking:'💻', energie_solaire:'☀️', isolation:'🏠',
  jardin:'🌿', compostage:'♻️', repair:'🔧', biodiversite:'🌳',
  gouvernance:'🤝', mobilite:'🚲'
};

/* ─── Rendu du journal des actions terrain ─── */
function renderJournal() {
  const list  = document.getElementById('pc-journal-list');
  const count = document.getElementById('pc-journal-count');
  if (!list) return;

  const nb = actionsTerrains.length;
  if (count) count.textContent = nb + ' entrée' + (nb > 1 ? 's' : '');

  if (nb === 0) {
    list.innerHTML = `
      <div class="pc-empty">
        <div style="font-size:1.6rem;margin-bottom:.5rem">📓</div>
        <div style="font-size:.78rem;font-weight:600;margin-bottom:.25rem">Journal vide</div>
        <div style="font-size:.67rem">Saisis ta première action pour la voir apparaître ici et se propager automatiquement dans tous les cadres.</div>
      </div>`;
    return;
  }

  const BADGE_CLS = { ESRS:'esrs', ODD:'odd', PCAET:'pcaet', FSE_PLUS:'fse', ADEME:'ademe', BPI:'bpi', ESS:'bpi', NOTRe:'pcaet' };

  list.innerHTML = [...actionsTerrains].reverse().map((a, idx) => {
    const realIdx = nb - 1 - idx;
    const icon  = PC_ICONS[a.type] || '⚡';
    const date  = a.date ? new Date(a.date).toLocaleDateString('fr-FR', { day:'numeric', month:'short' }) : '—';
    const src   = a.source === 'quete' ? ' · via quête' : '';
    const m     = CONVERGENCE_MATRIX[a.type];
    const u1    = m ? m.units.u1 : '';
    const badges = a.convergence
      ? Object.keys(a.convergence).map(k =>
          `<span class="conv-badge ${BADGE_CLS[k]||'esrs'}" style="font-size:.55rem;padding:.1rem .38rem">${k==='FSE_PLUS'?'FSE+':k==='NOTRe'?'NOTRe':k}</span>`
        ).join('')
      : '';

    return `
      <div class="pc-entry">
        <div class="pc-entry-icon">${icon}</div>
        <div class="pc-entry-body">
          <div class="pc-entry-label">${a.label}</div>
          <div class="pc-entry-meta">${date}${src} · ${a.val1} ${u1}</div>
          <div class="conv-badge-row" style="margin:0">${badges}</div>
        </div>
        <button class="pc-entry-del" onclick="supprimerAction(${realIdx})" title="Supprimer">✕</button>
      </div>`;
  }).join('');
}

/* ─── Supprimer une action du journal ─── */
function supprimerAction(idx) {
  actionsTerrains.splice(idx, 1);
  initDossiers();
}

/* ─── Bilan ESRS agrégé ─── */
function renderBilanESRS() {
  const grid = document.getElementById('pc-bilan-grid');
  const cpt  = document.getElementById('pc-esrs-count');
  if (!grid) return;

  // Collecter tous les indicateurs ESRS couverts
  const covered = new Set();
  actionsTerrains.forEach(a => {
    if (a.convergence?.ESRS) Object.keys(a.convergence.ESRS).forEach(k => covered.add(k));
  });

  const ESRS_DEF = {
    E: [['E1','Climat'],['E2','Pollution'],['E3','Eau'],['E4','Biodiversité'],['E5','Matières']],
    S: [['S1','Salariés'],['S2','Chaîne valeur'],['S3','Communautés'],['S4','Consommateurs']],
    G: [['G1','Gouvernance'],['G2','Éthique']]
  };

  const cols = Object.entries(ESRS_DEF).map(([cat, items]) => {
    const labels = { E:'Environnement', S:'Social', G:'Gouvernance' };
    const pills  = items.map(([code, lbl]) => {
      const active = covered.has(code);
      return `<div class="pc-bilan-pill ${active ? 'active' : 'empty'}">
        <span class="pc-dot"></span>${code} · ${lbl}
      </div>`;
    }).join('');
    return `<div>
      <div class="pc-bilan-col-label ${cat.toLowerCase()}">${labels[cat]}</div>
      ${pills}
    </div>`;
  });

  // Remplace les 2 premières colonnes + garde la 3e (G + compteur)
  const gCol = `<div>
    <div class="pc-bilan-col-label g">Gouvernance</div>
    ${ESRS_DEF.G.map(([code, lbl]) => {
      const active = covered.has(code);
      return `<div class="pc-bilan-pill ${active ? 'active' : 'empty'}"><span class="pc-dot"></span>${code} · ${lbl}</div>`;
    }).join('')}
    <div style="margin-top:.6rem;padding:.55rem .7rem;background:rgba(46,102,66,.05);border-radius:var(--r);text-align:center">
      <div style="font-size:.58rem;color:var(--moss);opacity:.5;margin-bottom:.2rem">Indicateurs couverts</div>
      <div style="font-family:'Satoshi', sans-serif;font-size:1.3rem;font-weight:700;color:var(--fern)">${covered.size} / 11</div>
    </div>
  </div>`;

  grid.innerHTML = cols[0] + cols[1] + gCol;
  if (cpt) cpt.textContent = covered.size + ' / 11';
}

function initDossiers() {
  renderImpact();
  renderJournal();
  renderBilanESRS();

  const grid = document.getElementById('dossier-grid');
  if (!grid) return;
  grid.innerHTML = '';
  DOSSIERS_CATALOGUE.forEach(d => {
    const pct = calculCompletude(d);
    const eco = d.valeur_economisee;
    grid.innerHTML += `
      <div class="dossier-card" onclick="ouvrirDossier('${d.id}')">
        <div class="dossier-card-icon">${d.icon}</div>
        <div class="dossier-card-name">${d.nom}</div>
        <div class="dossier-card-sub">${d.sub}</div>
        <div class="dossier-card-bar"><div class="dossier-card-fill" style="width:${pct}%"></div></div>
        <div class="dossier-card-stats">
          <span>${pct}% complété</span>
          <span style="color:var(--amber);font-weight:600">≈ ${eco.toLocaleString('fr-FR')}€ économisés</span>
        </div>
      </div>`;
  });

  // KPIs globaux
  const nbActions = actionsTerrains.length;
  const ecoTotal  = nbActions > 0 ? Math.round(nbActions * 1200) : null;
  const compMoy   = Math.round(DOSSIERS_CATALOGUE.reduce((s, d) => s + calculCompletude(d), 0) / DOSSIERS_CATALOGUE.length);

  document.getElementById('doss-nb-actions').textContent  = nbActions;
  document.getElementById('doss-economie').textContent    = ecoTotal ? ecoTotal.toLocaleString('fr-FR') + '€' : '—';
  document.getElementById('doss-completude').textContent  = compMoy + '%';

}

/* ─────────────────────────────────────────────────────────
   6. UI, Ouverture saisie terrain
   ───────────────────────────────────────────────────────── */
function ouvrirSaisie() {
  const block = document.getElementById('terrain-saisie-block');
  block.style.display = block.style.display === 'none' ? 'block' : 'none';
  block.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* Preview live lors de la saisie */
function previewConv() {
  const type  = document.getElementById('ts-type').value;
  const val1  = document.getElementById('ts-val1').value;
  const val2  = document.getElementById('ts-val2').value;
  const prev  = document.getElementById('conv-preview');
  const cont  = document.getElementById('conv-preview-content');
  const det   = document.getElementById('conv-preview-detail');

  // Update unit labels
  const m = CONVERGENCE_MATRIX[type];
  if (m) {
    document.getElementById('ts-unit1').value = m.units.u1;
    document.getElementById('ts-unit2').value = m.units.u2;
    document.getElementById('ts-unit1-label').textContent = 'Unité 1';
    document.getElementById('ts-unit2-label').textContent = 'Unité 2';
  }

  if (!type || (!val1 && !val2)) { prev.style.display = 'none'; return; }
  const conv = convergeEntry(type, val1, val2);
  if (!conv) { prev.style.display = 'none'; return; }

  prev.style.display = 'block';

  // Badges
  const BADGE_CLASSES = { ESRS:'esrs', ODD:'odd', PCAET:'pcaet', FSE_PLUS:'fse', ADEME:'ademe', BPI:'bpi', ESS:'bpi', NOTRe:'pcaet' };
  cont.innerHTML = Object.keys(conv).map(k =>
    `<span class="conv-badge ${BADGE_CLASSES[k] || 'esrs'}">${k === 'FSE_PLUS' ? 'FSE+' : k === 'NOTRe' ? 'NOTRe' : k}</span>`
  ).join('');

  // Détails
  det.innerHTML = Object.entries(conv).map(([cadre, data]) => {
    const label = cadre === 'FSE_PLUS' ? 'FSE+' : cadre;
    const isObj = typeof data === 'object' && !Array.isArray(data);
    const val   = isObj && 'val' in data ? data.val : '';
    const unite = isObj && 'unite' in data ? data.unite : '';
    const axe   = isObj && ('axe' in data || 'critere' in data)
      ? (data.axe || data.critere || '') : '';
    return `
      <div style="padding:.38rem .55rem;background:rgba(46,102,66,.03);border:1px solid rgba(46,102,66,.07);border-radius:var(--r);font-size:.65rem">
        <div style="font-weight:700;color:var(--ink);margin-bottom:.1rem">${label}</div>
        ${axe ? `<div style="color:var(--moss);opacity:.65;margin-bottom:.1rem">${axe}</div>` : ''}
        ${val !== '' ? `<div style="color:var(--fern);font-weight:600">${typeof val === 'number' ? val.toLocaleString('fr-FR') : val} ${unite}</div>` : ''}
      </div>`;
  }).join('');
}

/* Enregistrement d'une action */
function enregistrerAction() {
  const type = document.getElementById('ts-type').value;
  const val1 = document.getElementById('ts-val1').value;
  const val2 = document.getElementById('ts-val2').value;
  const date = document.getElementById('ts-date').value;
  if (!type || !val1) { mmBubble('⚠️ Renseigne au moins le type et la quantité principale'); return; }

  const m    = CONVERGENCE_MATRIX[type];
  const conv = convergeEntry(type, val1, val2);

  actionsTerrains.push({ type, label: m ? m.label : type, val1, val2, date, convergence: conv });

  document.getElementById('terrain-saisie-block').style.display = 'none';
  document.getElementById('ts-type').value = '';
  document.getElementById('ts-val1').value = '';
  document.getElementById('ts-val2').value = '';
  document.getElementById('conv-preview').style.display = 'none';

  initDossiers();
  renderImpact();
  mmBubble(`✅ Action enregistrée → propagée dans ${Object.keys(conv).length} cadres institutionnels automatiquement`);
}

/* ─────────────────────────────────────────────────────────
   7. UI, Ouverture modale dossier détail
   ───────────────────────────────────────────────────────── */
function ouvrirDossier(id) {
  const d = DOSSIERS_CATALOGUE.find(x => x.id === id);
  if (!d) return;

  document.getElementById('doss-modal-title').textContent = d.icon + ' ' + d.nom;
  document.getElementById('doss-modal-sub').textContent   = d.sub;

  const pct = calculCompletude(d);
  const body = document.getElementById('doss-modal-body');

  // Agréger les indicateurs pour ce dossier
  let indicateursHtml = '';
  d.cadres.forEach(cadreKey => {
    const agg = agregerParCadre(cadreKey);
    const label = { ESRS:'Indicateurs ESRS', ODD:'ODD, Agenda 2030', PCAET:'PCAET / Plan Climat',
      FSE_PLUS:'FSE+, Fonds Social Européen', ADEME:'ADEME', BPI:'BPI France',
      ESS:'ESS / Utilité sociale', NOTRe:'Loi NOTRe / Compétences territoriales' }[cadreKey] || cadreKey;

    if (Object.keys(agg).length === 0 && actionsTerrains.length === 0) {
      indicateursHtml += `
        <div class="ind-section">
          <div class="ind-section-title">${label}</div>
          <div style="padding:.8rem;background:rgba(46,102,66,.03);border:1px dashed rgba(46,102,66,.2);border-radius:var(--r);font-size:.7rem;color:var(--moss);opacity:.6;text-align:center">
            Saisis tes premières actions terrain pour remplir ces indicateurs automatiquement
          </div>
        </div>`;
    } else {
      const rows = Object.keys(agg).length > 0
        ? Object.entries(agg).map(([code, data]) => `
            <div class="ind-row">
              <span class="ind-row-code conv-badge esrs">${code}</span>
              <div style="flex:1">
                <div class="ind-row-label">${data.label || data.unite || code}</div>
                ${data.sources ? `<div class="ind-row-source">Sources : ${data.sources.join(' · ')}</div>` : ''}
              </div>
              <div class="ind-row-val">${typeof data.val === 'number' ? data.val.toLocaleString('fr-FR') : '—'} <span style="font-size:.58rem;font-weight:400;color:var(--moss)">${data.unite || ''}</span></div>
            </div>`).join('')
        : d.indicateurs_cles.map(ic => `
            <div class="ind-row" style="opacity:.45">
              <span class="ind-row-code conv-badge esrs">—</span>
              <div class="ind-row-label">${ic}</div>
              <div class="ind-row-val" style="color:var(--moss)">En attente</div>
            </div>`).join('');

      indicateursHtml += `<div class="ind-section"><div class="ind-section-title">${label}</div>${rows}</div>`;
    }
  });

  body.innerHTML = `
    <div style="background:linear-gradient(135deg,rgba(1,130,98,.06),rgba(74,171,143,.03));border:1px solid rgba(1,130,98,.12);border-radius:var(--r-lg);padding:.9rem 1.1rem;margin-bottom:1.1rem">
      <div style="font-size:.7rem;color:var(--moss);margin-bottom:.5rem">${d.description}</div>
      <div style="display:flex;align-items:center;gap:.75rem">
        <div style="flex:1;height:6px;background:rgba(46,102,66,.1);border-radius:100px">
          <div style="height:100%;width:${pct}%;background:linear-gradient(90deg,var(--fern),var(--sage));border-radius:100px;transition:width .4s"></div>
        </div>
        <span style="font-size:.68rem;font-weight:700;color:var(--fern)">${pct}% complété</span>
        <span style="font-size:.62rem;color:var(--amber);font-weight:600">≈ ${d.valeur_economisee.toLocaleString('fr-FR')}€ économisés</span>
      </div>
    </div>
    ${indicateursHtml}
    `;

  document.getElementById('dossier-modal-overlay').classList.add('open');
}

function exporterDossier() {
  mmBubble('📄 Export PDF en cours de génération, données certifiées EVAD incluses ✓');
  setTimeout(() => document.getElementById('dossier-modal-overlay').classList.remove('open'), 800);
}

/* ─────────────────────────────────────────────────────────
   8. INJECTION des badges de convergence sur les quêtes
   Appelé au chargement du panel Impact
   ───────────────────────────────────────────────────────── */
function injecterBadgesConvergence() {
  // Quêtes du panel lieu (exemple avec mapping statique depuis BDD_SOLUTIONS)
  // En production : récupérer depuis actionsTerrains
  document.querySelectorAll('[data-conv-type]').forEach(el => {
    const type = el.dataset.convType;
    const m = CONVERGENCE_MATRIX[type];
    if (!m) return;
    const conv = convergeEntry(type, el.dataset.v1 || 1, el.dataset.v2 || 1);
    if (!conv) return;
    const BADGE_CLASSES = { ESRS:'esrs', ODD:'odd', PCAET:'pcaet', FSE_PLUS:'fse', ADEME:'ademe', BPI:'bpi', ESS:'bpi', NOTRe:'pcaet' };
    const badges = Object.keys(conv).map(k =>
      `<span class="conv-badge ${BADGE_CLASSES[k] || 'esrs'}">${k === 'FSE_PLUS' ? 'FSE+' : k}</span>`).join('');
    el.insertAdjacentHTML('afterend', `<div class="conv-badge-row">${badges}</div>`);
  });
}

/* Init au chargement du tab */
document.addEventListener('DOMContentLoaded', () => {
  initDossiers();
});

