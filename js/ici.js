/* ─── ICI · Indicateurs de Changement d'Impact ─────────────────────────────
   Comptabilité à triple capital pour la démo EVAD.

   Principe : une saisie → des preuves → plusieurs vues.
   - L'ICI est la donnée canonique (variation d'une grandeur entre T0 et un état).
   - Vadance = lecture des valeurs PROJETÉES (la promesse).
   - Vadité  = lecture des valeurs PROUVÉES, chaque sous-score DÉCOTÉ par le
               niveau de preuve (la preuve réalisée).
   - ODD / ESRS / VSME = vues dérivées (correspondances, pas conversion).

   Règles non négociables encodées ici :
   - On n'agrège QUE des sous-scores 0–100 (jamais d'unités brutes, jamais de €).
   - Frontière étanche projeté/prouvé : deux champs, deux calculs, deux libellés.
   - Pas de compensation : un plancher par capital ; sous le plancher → alerte.
   - Le triptyque (3 capitaux) est toujours disponible ensemble.
   ─────────────────────────────────────────────────────────────────────────── */

const ICI_LIVRES = ['ecologie', 'social', 'economie_locale'];

const ICI_LIVRE_META = {
  ecologie:        { label: 'Écologie',        ic: '🌿', col: '#2e9960' },
  social:          { label: 'Social',          ic: '🤝', col: '#3a6e8c' },
  economie_locale: { label: 'Économie locale', ic: '♻️', col: '#c8732a' },
};

// Décote appliquée au sous-score Vadité selon le niveau de preuve (configurable).
const ICI_COEF_PREUVE = { declaratif: 0.25, documentaire: 0.6, pairs: 0.85, audit: 1.0 };
const ICI_PREUVE_META = {
  declaratif:   { label: 'Déclaratif',           ic: '✍️' },
  documentaire: { label: 'Documentaire',         ic: '📄' },
  pairs:        { label: 'Validé par les pairs', ic: '👥' },
  audit:        { label: 'Audité',               ic: '🔍' },
};
const ICI_PREUVE_ORDRE = ['declaratif', 'documentaire', 'pairs', 'audit'];

// Plancher par capital (pas de compensation entre capitaux), configurable.
const ICI_PLANCHER = 40;
// Poids des 3 livres dans le score global (Σ = 1), configurable.
const ICI_POIDS_LIVRE = { ecologie: 1 / 3, social: 1 / 3, economie_locale: 1 / 3 };

/* ── Catalogue des ICI (seed ≥ 6, 2 par livre).
   point0 = base T0 (PAS toujours 0). point100 = référence « excellent »
   (peut être < point0 si « moins c'est mieux »). solutionIds = noms de SOLS. ── */
const ICI_CATALOG = [
  // Écologie
  { id: 'eco_co2',   nom: 'Émissions de CO₂ évitées', livre: 'ecologie', unite: 'kg CO₂e/an', point0: 0,  point100: 8000, poids: 1,
    solutionIds: ['Panneaux solaires PV', 'Récupération eau de pluie', 'Compostage partagé', 'Réemploi matériaux'] },
  { id: 'eco_renat', nom: 'Surface renaturée',        livre: 'ecologie', unite: 'm²',         point0: 0,  point100: 500,  poids: 1,
    solutionIds: ['Jardin permaculture', 'Potager en buttes', 'Haie champêtre', 'Mare écologique'] },
  // Social
  { id: 'soc_insertion', nom: 'Personnes en insertion accueillies', livre: 'social', unite: 'personnes/an', point0: 0, point100: 12,  poids: 1,
    solutionIds: ['Repair café', 'AMAP circuit court'] },
  { id: 'soc_formation', nom: 'Heures de formation dispensées',     livre: 'social', unite: 'heures/an',    point0: 0, point100: 400, poids: 1,
    solutionIds: ['Jardin permaculture', 'Repair café', 'Compostage partagé'] },
  // Économie locale
  { id: 'eco_emplois', nom: 'Emplois locaux créés',     livre: 'economie_locale', unite: 'ETP',        point0: 0,  point100: 5,  poids: 1,
    solutionIds: ['AMAP circuit court', 'Réemploi matériaux'] },
  { id: 'eco_approv',  nom: 'Approvisionnement local',  livre: 'economie_locale', unite: '% du budget', point0: 20, point100: 80, poids: 1,
    solutionIds: ['AMAP circuit court'] },
];

const iciGetICI = (id) => ICI_CATALOG.find((i) => i.id === id) || null;
const iciParLivre = (livre) => ICI_CATALOG.filter((i) => i.livre === livre);
// ICI portés par une solution (par son nom SOLS).
const iciPourSolution = (solNom) => ICI_CATALOG.filter((i) => (i.solutionIds || []).includes(solNom));

/* ── Section « Indicateurs de Changement d'Impact » pour une FICHE SOLUTION.
   Cf. charte des ICI : « chaque solution porte déjà ses ICI ». On affiche, pour
   la solution, les ICI qu'elle embarque, chacun présenté comme une variation
   T0 → cible (l'impact = la flèche, le changement attribuable, p.5 de la charte),
   avec son capital (livre) et l'échelle de preuve commune. Renvoie une chaîne HTML.
   fallbackInd = la liste d'indicateurs « libres » de la solution (s.ind), montrée
   si aucun ICI normalisé n'est encore catalogué pour elle. ── */
function iciFicheSolutionHTML(solNom, fallbackInd) {
  if (typeof ICI_CATALOG === 'undefined') return '';
  const icis = iciPourSolution(solNom);

  const fmtNb = (v) => (typeof v === 'number'
    ? (Number.isInteger(v) ? v : Math.round(v * 10) / 10).toLocaleString('fr-FR')
    : v);
  const fmt = (v, u) => (u ? fmtNb(v) + ' ' + u : fmtNb(v));

  // Échelle de preuve (légende commune : du déclaratif à l'audit tiers).
  const echelle = ICI_PREUVE_ORDRE.map((k, i) => {
    const p = ICI_PREUVE_META[k];
    const fleche = i < ICI_PREUVE_ORDRE.length - 1
      ? '<span style="opacity:.4;font-size:.55rem;margin:0 .12rem">→</span>' : '';
    return `<span style="display:inline-flex;align-items:center;gap:.2rem;font-size:.57rem;color:var(--moss);white-space:nowrap">${p.ic} ${p.label}</span>${fleche}`;
  }).join('');

  let corps;
  if (icis.length) {
    corps = icis.map((ici) => {
      const meta = ICI_LIVRE_META[ici.livre] || { col: '#4a8c5c', ic: '◆', label: ici.livre };
      const sens = ici.point100 >= ici.point0 ? '↗' : '↘'; // hausse / baisse favorable
      return `<div style="background:white;border:1px solid rgba(46,102,66,.12);border-left:3px solid ${meta.col};border-radius:var(--r);padding:.6rem .7rem;margin-bottom:.4rem">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:.4rem;margin-bottom:.5rem">
          <div style="font-size:.7rem;font-weight:700;color:var(--ink);line-height:1.25">${ici.nom}</div>
          <span style="flex-shrink:0;font-size:.54rem;font-weight:700;padding:.12rem .42rem;border-radius:100px;background:${meta.col}1a;color:${meta.col};white-space:nowrap">${meta.ic} ${meta.label}</span>
        </div>
        <div style="display:flex;align-items:center;gap:.5rem">
          <div style="text-align:center;flex-shrink:0">
            <div style="font-size:.5rem;text-transform:uppercase;letter-spacing:.08em;color:var(--moss);opacity:.65;margin-bottom:.1rem">T0</div>
            <div style="font-size:.72rem;font-weight:800;color:var(--ink)">${fmt(ici.point0, ici.unite)}</div>
          </div>
          <div style="flex:1;position:relative;height:2px;background:linear-gradient(90deg,${meta.col}33,${meta.col});border-radius:2px;min-width:42px">
            <span style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:white;padding:0 .28rem;font-size:.55rem;font-weight:700;color:${meta.col};white-space:nowrap">${sens} impact</span>
          </div>
          <div style="text-align:center;flex-shrink:0">
            <div style="font-size:.5rem;text-transform:uppercase;letter-spacing:.08em;color:${meta.col};opacity:.85;margin-bottom:.1rem">Cible</div>
            <div style="font-size:.72rem;font-weight:800;color:${meta.col}">${fmt(ici.point100, ici.unite)}</div>
          </div>
        </div>
      </div>`;
    }).join('');
  } else {
    const list = (fallbackInd || []).map((i) => `<div style="display:flex;align-items:center;gap:.5rem;padding:.4rem .6rem;border-radius:var(--r);background:white;border:1px solid rgba(46,102,66,.1);margin-bottom:.3rem;font-size:.68rem;color:var(--ink)"><span style="color:var(--fern);font-size:.6rem">◆</span>${i}</div>`).join('');
    corps = `<div style="font-size:.62rem;color:var(--moss);font-style:italic;margin-bottom:.45rem">ICI normalisés en cours de cadrage pour cette solution. Indicateurs suivis aujourd'hui :</div>${list}`;
  }

  return `
    <div style="font-family:'Satoshi', sans-serif;font-size:.82rem;font-weight:600;color:var(--ink);margin-bottom:.4rem;padding-bottom:.35rem;border-bottom:1px solid rgba(46,102,66,.1)">🎯 Indicateurs de Changement d'Impact${typeof evadGlossaryChip==='function'?evadGlossaryChip('ici'):''}</div>
    <div style="font-size:.63rem;color:var(--moss);line-height:1.5;margin-bottom:.55rem">Cette solution embarque ses ICI : la donnée que ton lieu mesurera, du point de départ (T0) à la cible. L'impact, c'est la flèche, le changement attribuable.</div>
    ${corps}
    <div style="display:flex;align-items:center;gap:.25rem;flex-wrap:wrap;margin:.5rem 0 1rem;padding:.45rem .6rem;background:rgba(58,110,140,.05);border:1px solid rgba(58,110,140,.14);border-radius:var(--r)">
      <span style="font-size:.55rem;font-weight:700;color:#2a6090;text-transform:uppercase;letter-spacing:.06em;margin-right:.25rem">Niveau de preuve</span>${echelle}
    </div>`;
}

/* ── Correspondances compactes (CSRD/ESRS · ODD · GRI · permaculture).
   Cf. charte : ce sont des VUES DÉRIVÉES de l'ICI, pas des comptabilités
   concurrentes. On les rétrograde à une seule ligne de puces, présentée
   comme export de l'ICI. Renvoie '' si la solution n'a aucune correspondance.
   s = objet SOLS ; odd/gri/perma proviennent de SOLS_INDICATORS[s.nom]. ── */
function iciCorrespondancesHTML(s) {
  if (!s) return '';
  const ind = (typeof SOLS_INDICATORS !== 'undefined' && SOLS_INDICATORS[s.nom]) ? SOLS_INDICATORS[s.nom] : {};
  const chip = (txt, col, mono) => `<span style="font-size:.58rem;font-weight:700;padding:.14rem .45rem;border-radius:100px;background:${col}14;color:${col};border:1px solid ${col}33;white-space:nowrap${mono ? ";font-family:monospace" : ""}">${txt}</span>`;
  const chips = [];
  (s.esrs || []).forEach((e) => chips.push(chip(e, '#2a6090', true)));
  (ind.odd || []).forEach((n) => chips.push(chip('ODD ' + n, '#b86000', false)));
  (ind.gri || []).forEach((g) => chips.push(chip(String(g).replace(/\s*\(.*\)$/, ''), '#5a3080', true)));
  if (ind.perma && (ind.perma.ethiques || []).length) {
    ind.perma.ethiques.forEach((et) => chips.push(chip(et, '#2e7d4f', false)));
  }
  if (!chips.length) return '';
  return `<div style="margin-bottom:1rem;padding:.55rem .7rem;background:rgba(46,102,66,.035);border:1px solid rgba(46,102,66,.12);border-radius:var(--r)">
    <div style="font-size:.55rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--moss);margin-bottom:.4rem">↳ Correspondances <span style="font-weight:500;text-transform:none;letter-spacing:0;opacity:.7">· vues dérivées de l'ICI (CSRD · ODD · GRI)</span></div>
    <div style="display:flex;flex-wrap:wrap;gap:.3rem">${chips.join('')}</div>
  </div>`;
}

/* ── Seed de mesures pour le lieu de démo.
   Écologie & social corrects, ÉCONOMIE LOCALE volontairement faible
   (sous le plancher) → déclenche l'alerte. ── */
const ICI_MESURES_DEMO = [
  { iciId: 'eco_co2',       valeurProjetee: 6500, valeurProuvee: 4200, niveauPreuve: 'documentaire' },
  { iciId: 'eco_renat',     valeurProjetee: 380,  valeurProuvee: 300,  niveauPreuve: 'documentaire' },
  { iciId: 'soc_insertion', valeurProjetee: 9,    valeurProuvee: 6,    niveauPreuve: 'pairs' },
  { iciId: 'soc_formation', valeurProjetee: 320,  valeurProuvee: 180,  niveauPreuve: 'documentaire' },
  { iciId: 'eco_emplois',   valeurProjetee: 1,    valeurProuvee: null, niveauPreuve: null },          // 20/100 → capital faible
  { iciId: 'eco_approv',    valeurProjetee: 38,   valeurProuvee: 30,   niveauPreuve: 'declaratif' },  // 30/100
];

/* ════════════════════ MOTEUR DE CALCUL ════════════════════ */

const iciClamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x));

// 1) Normalisation 0–100. Formule UNIQUE, valable dans les deux sens
//    (« moins c'est mieux » est encodé par point100 < point0).
function iciSousScore(valeur, point0, point100) {
  if (valeur == null) return null;
  if (point100 === point0) return 0;
  return iciClamp(((valeur - point0) / (point100 - point0)) * 100, 0, 100);
}

// Sous-scores d'un livre. mode = 'vadance' (projeté) ou 'vadite' (prouvé + décote).
function iciSousScoresLivre(mesures, livre, mode) {
  const out = [];
  (mesures || []).forEach((m) => {
    const ici = iciGetICI(m.iciId);
    if (!ici || ici.livre !== livre) return;
    const valeur = mode === 'vadite' ? m.valeurProuvee : m.valeurProjetee;
    let ss = iciSousScore(valeur, ici.point0, ici.point100);
    if (ss == null) return;
    if (mode === 'vadite') {
      const coef = ICI_COEF_PREUVE[m.niveauPreuve] != null ? ICI_COEF_PREUVE[m.niveauPreuve] : 0;
      ss = ss * coef;
    }
    out.push({ ici, mesure: m, sousScore: ss, poids: ici.poids != null ? ici.poids : 1 });
  });
  return out;
}

// 2) Score d'un capital = moyenne pondérée des sous-scores de ses ICI (null si aucun).
function iciScoreCapital(mesures, livre, mode) {
  const ss = iciSousScoresLivre(mesures, livre, mode);
  if (!ss.length) return null;
  const sw = ss.reduce((a, x) => a + x.sousScore * x.poids, 0);
  const w = ss.reduce((a, x) => a + x.poids, 0);
  return w ? sw / w : null;
}

// 3) Score global = somme pondérée des capitaux présents (renormalisée si un livre manque).
function iciScoreGlobal(mesures, mode) {
  let total = 0, wsum = 0;
  ICI_LIVRES.forEach((livre) => {
    const sc = iciScoreCapital(mesures, livre, mode);
    if (sc == null) return;
    const w = ICI_POIDS_LIVRE[livre] != null ? ICI_POIDS_LIVRE[livre] : 1 / ICI_LIVRES.length;
    total += sc * w; wsum += w;
  });
  return wsum ? total / wsum : null;
}

// Bilan complet : triptyque (Vadance + Vadité), globaux, taux de tenue, alerte plancher.
function iciBilan(mesures) {
  const capFor = (mode) => {
    const o = {};
    ICI_LIVRES.forEach((l) => { o[l] = iciScoreCapital(mesures, l, mode); });
    return o;
  };
  const vadanceCap = capFor('vadance');
  const vaditeCap = capFor('vadite');
  const vadanceGlobal = iciScoreGlobal(mesures, 'vadance');
  const vaditeGlobal = iciScoreGlobal(mesures, 'vadite');

  // Pas de compensation : on regarde le plus faible capital (côté promesse).
  const presents = ICI_LIVRES.map((l) => vadanceCap[l]).filter((v) => v != null);
  const minCapital = presents.length ? Math.min(...presents) : null;
  const alertePlancher = minCapital != null && minCapital < ICI_PLANCHER;

  // 6) Taux de tenue = Vadité / Vadance.
  const tauxDeTenue = (vadanceGlobal && vadanceGlobal > 0 && vaditeGlobal != null)
    ? (vaditeGlobal / vadanceGlobal) * 100 : null;

  return {
    vadanceCap, vaditeCap, vadanceGlobal, vaditeGlobal,
    tauxDeTenue, alertePlancher, minCapital, plancher: ICI_PLANCHER,
  };
}

/* ── Auto-tests rapides (console). Lancés au chargement ; aussi appelables. ── */
function iciSelfTest() {
  const asserts = [];
  const approx = (x, y, tol) => x != null && Math.abs(x - y) <= (tol || 0.5);
  asserts.push(['sousScore 50%',         approx(iciSousScore(4000, 0, 8000), 50)]);
  asserts.push(['sousScore point0=20',   approx(iciSousScore(50, 20, 80), 50)]);
  asserts.push(['sousScore inverse',     approx(iciSousScore(20, 40, 0), 50)]);   // moins c'est mieux
  asserts.push(['clamp haut = 100',      iciSousScore(99999, 0, 8000) === 100]);
  asserts.push(['clamp bas = 0',         iciSousScore(-10, 0, 8000) === 0]);
  asserts.push(['valeur null → null',    iciSousScore(null, 0, 8000) === null]);
  const m = [{ iciId: 'eco_co2', valeurProjetee: 8000, valeurProuvee: 8000, niveauPreuve: 'documentaire' }];
  const b = iciBilan(m);
  asserts.push(['vadance capital = 100', approx(b.vadanceCap.ecologie, 100)]);
  asserts.push(['vadité décotée ×0.6',   approx(b.vaditeCap.ecologie, 60)]);
  const demo = iciBilan(ICI_MESURES_DEMO);
  asserts.push(['demo : alerte plancher', demo.alertePlancher === true]);
  asserts.push(['demo : triptyque complet', ICI_LIVRES.every((l) => demo.vadanceCap[l] != null)]);
  const fails = asserts.filter((a) => !a[1]).map((a) => a[0]);
  if (fails.length) console.error('[ICI selfTest] ÉCHEC :', fails);
  else console.log('[ICI selfTest] OK · ' + asserts.length + ' assertions');
  return fails.length === 0;
}

try { if (typeof window !== 'undefined') iciSelfTest(); } catch (e) { /* silencieux */ }

/* ════════════════════ UI · MODULE « MESURE D'IMPACT » ════════════════════ */

// Mesures actives = celles saisies par le Pilote (copie éditable du seed démo).
let iciMesuresStore = ICI_MESURES_DEMO.map((m) => ({ ...m }));
function iciMesuresActives() { return iciMesuresStore; }
function iciSetMode(mode) { window._iciMode = mode; iciRenderMesureImpact(); }

const iciFmtScore = (v) => (v == null ? '-' : Math.round(v));

// Triptyque + global + Vadance/Vadité distinctes + taux de tenue + alerte plancher.
function iciRenderMesureImpact() {
  const box = document.getElementById('ici-mesure-impact');
  if (!box) return;
  const mesures = iciMesuresActives();
  const b = iciBilan(mesures);
  const mode = window._iciMode === 'vadite' ? 'vadite' : 'vadance';
  const cap = mode === 'vadite' ? b.vaditeCap : b.vadanceCap;

  const tab = (m, lbl) => `<button onclick="iciSetMode('${m}')" style="padding:.32rem .85rem;border-radius:100px;border:1px solid ${mode === m ? 'var(--forest)' : 'rgba(46,102,66,.2)'};background:${mode === m ? 'rgba(1,130,98,.1)' : 'white'};color:${mode === m ? 'var(--forest)' : 'var(--moss)'};font-size:.68rem;font-weight:700;cursor:pointer;font-family:inherit;transition:all .15s">${lbl}</button>`;

  const triptyque = ICI_LIVRES.map((l) => {
    const meta = ICI_LIVRE_META[l];
    const sc = cap[l];
    const low = sc != null && sc < ICI_PLANCHER;
    return `<div style="background:white;border:1px solid ${low ? 'rgba(184,78,53,.35)' : 'rgba(46,102,66,.12)'};border-top:3px solid ${meta.col};border-radius:var(--r-lg);padding:.85rem 1rem">
      <div style="display:flex;align-items:center;gap:.4rem;font-size:.66rem;font-weight:700;color:${meta.col};margin-bottom:.35rem">${meta.ic} ${meta.label}</div>
      <div style="font-family:'Satoshi', sans-serif;font-size:1.5rem;font-weight:900;color:var(--ink);line-height:1">${iciFmtScore(sc)}<span style="font-size:.7rem;font-weight:700;opacity:.4">/100</span></div>
      <div style="height:5px;background:rgba(46,102,66,.08);border-radius:100px;overflow:hidden;margin-top:.45rem"><div style="height:100%;width:${sc == null ? 0 : Math.round(sc)}%;background:${meta.col};border-radius:100px;transition:width .5s ease"></div></div>
      ${low ? '<div style="font-size:.58rem;color:var(--terracotta);font-weight:600;margin-top:.35rem">⚠ sous le plancher</div>' : ''}
    </div>`;
  }).join('');

  const globalBox = (col, eyebrow, val, sub) => `<div style="background:${col}0d;border:1px solid ${col}26;border-radius:var(--r-lg);padding:.7rem .85rem">
    <div style="font-size:.6rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:${col}">${eyebrow}</div>
    <div style="font-family:'Satoshi', sans-serif;font-size:1.35rem;font-weight:900;color:${col};line-height:1.1">${val}</div>
    <div style="font-size:.56rem;color:var(--moss);opacity:.6">${sub}</div>
  </div>`;

  box.innerHTML = `
    <div class="dash-card" style="margin-bottom:1rem">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;flex-wrap:wrap;margin-bottom:.7rem">
        <div>
          <div style="font-size:.84rem;font-weight:700;color:var(--ink)">🌍 Mesure d'impact · triple capital</div>
          <div style="font-size:.66rem;color:var(--moss);opacity:.7;margin-top:.15rem">Promesse (Vadance) vs preuve (Vadité). On n'agrège que des sous-scores 0–100, jamais d'unités brutes, jamais de monétisation.</div>
        </div>
        <div style="display:flex;gap:.35rem;flex-shrink:0">${tab('vadance', 'Vadance')}${tab('vadite', 'Vadité')}</div>
      </div>
      ${b.alertePlancher ? `<div style="display:flex;align-items:center;gap:.5rem;background:rgba(184,78,53,.08);border:1px solid rgba(184,78,53,.25);border-radius:var(--r);padding:.6rem .85rem;margin-bottom:.8rem;font-size:.7rem;color:var(--terracotta);font-weight:600">⚠ Un capital est sous le plancher (${iciFmtScore(b.minCapital)}/${b.plancher}), score global à interpréter avec prudence. Pas de compensation entre capitaux.</div>` : ''}
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.7rem;margin-bottom:.9rem">${triptyque}</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.7rem">
        ${globalBox('#018262', 'Vadance · promesse', iciFmtScore(b.vadanceGlobal) + '<span style="font-size:.65rem;opacity:.4">/100</span>', 'score global projeté')}
        ${globalBox('#3a6e8c', 'Vadité · preuve', iciFmtScore(b.vaditeGlobal) + '<span style="font-size:.65rem;opacity:.4">/100</span>', 'global prouvé · décoté preuve')}
        ${globalBox('#c8732a', 'Taux de tenue', (b.tauxDeTenue == null ? '-' : Math.round(b.tauxDeTenue) + '%'), 'Vadité / Vadance')}
      </div>
    </div>`;
}

/* ════════════════════ SAISIE PILOTE (une saisie → des preuves) ════════════════════ */

// Solutions déclarées par le Pilote pour son lieu (ou null si aucune).
function iciSolutionsDuLieu() {
  if (typeof myLieuData !== 'undefined' && myLieuData && Array.isArray(myLieuData.solutions) && myLieuData.solutions.length) return myLieuData.solutions;
  if (typeof cData !== 'undefined' && cData && Array.isArray(cData.solutions) && cData.solutions.length) return cData.solutions;
  return null;
}

// ICI portés par les solutions déclarées (sinon tout le référentiel, pour la démo).
function iciIcisDuLieu() {
  const sols = iciSolutionsDuLieu();
  if (!sols) return ICI_CATALOG.slice();
  const set = new Set(sols);
  const matched = ICI_CATALOG.filter((i) => (i.solutionIds || []).some((s) => set.has(s)));
  return matched.length ? matched : ICI_CATALOG.slice();
}

function iciGetMesure(iciId, create) {
  let m = iciMesuresStore.find((x) => x.iciId === iciId);
  if (!m && create) { m = { iciId, valeurProjetee: null, valeurProuvee: null, niveauPreuve: null }; iciMesuresStore.push(m); }
  return m;
}

// Frontière étanche : projeté et prouvé sont deux champs distincts, jamais confondus.
function iciSetValeur(iciId, champ, valeur) {
  const m = iciGetMesure(iciId, true);
  if (champ === 'niveauPreuve') {
    m.niveauPreuve = valeur || null;
  } else {
    const v = String(valeur).trim().replace(',', '.');
    m[champ] = (v === '' || isNaN(parseFloat(v))) ? null : parseFloat(v);
  }
  iciRenderMesureImpact();
  iciRenderSaisie();
}

function iciRenderSaisie() {
  const box = document.getElementById('ici-saisie');
  if (!box) return;
  const icis = iciIcisDuLieu();
  const sols = iciSolutionsDuLieu();

  const rows = icis.map((ici) => {
    const meta = ICI_LIVRE_META[ici.livre];
    const m = iciGetMesure(ici.id, false) || {};
    const ssVad = iciSousScore(m.valeurProjetee, ici.point0, ici.point100);
    const ssPrv = iciSousScore(m.valeurProuvee, ici.point0, ici.point100);
    const coef = ICI_COEF_PREUVE[m.niveauPreuve] != null ? ICI_COEF_PREUVE[m.niveauPreuve] : 0;
    const ssVit = ssPrv == null ? null : ssPrv * coef;
    const inp = (champ, val, ph) => `<input type="number" inputmode="decimal" value="${val == null ? '' : val}" placeholder="${ph}" oninput="iciSetValeur('${ici.id}','${champ}',this.value)" style="width:74px;box-sizing:border-box;padding:.35rem .5rem;border:1.5px solid rgba(46,102,66,.2);border-radius:8px;font-size:.72rem;outline:none;font-family:inherit;background:#f6faf7">`;
    const sel = `<select onchange="iciSetValeur('${ici.id}','niveauPreuve',this.value)" style="padding:.35rem .4rem;border:1.5px solid rgba(46,102,66,.2);border-radius:8px;font-size:.68rem;background:#f6faf7;font-family:inherit;max-width:120px">
        <option value="">- preuve -</option>
        ${ICI_PREUVE_ORDRE.map((p) => `<option value="${p}" ${m.niveauPreuve === p ? 'selected' : ''}>${ICI_PREUVE_META[p].ic} ${ICI_PREUVE_META[p].label}</option>`).join('')}
      </select>`;
    return `<div style="display:grid;grid-template-columns:minmax(0,1.5fr) auto auto auto;gap:.55rem;align-items:center;padding:.6rem .3rem;border-bottom:1px solid rgba(46,102,66,.07)">
      <div style="min-width:0">
        <div style="font-size:.74rem;font-weight:600;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${meta.ic} ${ici.nom}</div>
        <div style="font-size:.6rem;color:var(--moss);opacity:.65">${meta.label} · ${ici.unite} · sous-score ${ssVad == null ? '-' : Math.round(ssVad)} → preuve ${ssVit == null ? '-' : Math.round(ssVit)}</div>
      </div>
      <div style="text-align:center"><div style="font-size:.52rem;color:var(--forest);font-weight:700;text-transform:uppercase;letter-spacing:.05em;margin-bottom:.18rem">Projetée</div>${inp('valeurProjetee', m.valeurProjetee, '-')}</div>
      <div style="text-align:center"><div style="font-size:.52rem;color:var(--sky);font-weight:700;text-transform:uppercase;letter-spacing:.05em;margin-bottom:.18rem">Prouvée</div>${inp('valeurProuvee', m.valeurProuvee, '-')}</div>
      <div style="text-align:center"><div style="font-size:.52rem;color:var(--moss);font-weight:700;text-transform:uppercase;letter-spacing:.05em;margin-bottom:.18rem">Niveau</div>${sel}</div>
    </div>`;
  }).join('');

  const manq = iciPreuvesManquantes();
  const devaNote = manq.length ? `<div style="display:flex;align-items:center;gap:.6rem;background:rgba(74,200,110,.08);border:1px solid rgba(74,200,110,.28);border-radius:var(--r);padding:.55rem .8rem;margin-bottom:.7rem">
      <span aria-hidden="true" style="font-size:1rem">✦</span>
      <div style="flex:1;min-width:0;font-size:.68rem;color:var(--forest);font-weight:600">Deva : ${manq.length} indicateur${manq.length > 1 ? 's ont' : ' a'} une valeur projetée mais pas encore de preuve. Documente-les pour faire monter ta Vadité.</div>
      <button onclick="iciDevaPreuves()" style="flex-shrink:0;font-size:.64rem;font-weight:700;padding:.32rem .75rem;border-radius:100px;background:var(--forest);color:white;border:none;cursor:pointer">Voir avec Deva →</button>
    </div>` : '';

  box.innerHTML = `<div class="dash-card" style="margin-bottom:1rem">
    <div style="margin-bottom:.5rem">
      <div style="font-size:.82rem;font-weight:700;color:var(--ink)">📝 Mes ICI · saisie</div>
      <div style="font-size:.64rem;color:var(--moss);opacity:.7;margin-top:.1rem">${sols ? icis.length + ' ICI portés par tes solutions déclarées' : 'Aucune solution déclarée, voici les ICI du référentiel (démo)'}. Saisis une fois : valeur <strong style="color:var(--forest)">projetée</strong> (→ Vadance), puis <strong style="color:var(--sky)">prouvée</strong> + niveau de preuve (→ Vadité).</div>
    </div>
    ${devaNote}
    ${rows}
  </div>`;
}

/* ── Deva · preuves manquantes (ICI projeté mais sans preuve) ── */
function iciPreuvesManquantes() {
  return iciMesuresActives()
    .filter((m) => m.valeurProjetee != null && (m.valeurProuvee == null || m.niveauPreuve == null))
    .map((m) => iciGetICI(m.iciId))
    .filter(Boolean);
}

function iciDevaPreuves() {
  const manq = iciPreuvesManquantes();
  if (typeof devaToggleChat === 'function' && typeof devaChatOpen !== 'undefined' && !devaChatOpen) devaToggleChat();
  if (typeof devaAddMessage !== 'function') return;
  if (!manq.length) {
    devaAddMessage('deva', 'Bonne nouvelle 🌿 chaque valeur projetée a une preuve associée : ta Vadité reflète bien ce qui est documenté.');
    return;
  }
  const liste = manq.map((i) => '• ' + i.nom).join('\n');
  devaAddMessage('deva', '🔎 ' + manq.length + (manq.length > 1 ? ' indicateurs ont' : ' indicateur a') + ' une valeur projetée mais pas encore de preuve :\n' + liste + '\n\nRenseigne leur valeur prouvée + le niveau de preuve pour faire monter ta Vadité 🌱');
}

/* ════════════════════ EXPORTS · vues dérivées (ODD / ESRS / VSME) ════════════════════ */

// Correspondances illustratives (PAS des conversions ; lacunes assumées).
// L'ICI reste la donnée canonique ; ODD/ESRS/VSME en sont des lectures.
const ICI_EXPORTS = {
  eco_co2:       { odd: [7, 13],  esrs: ['E1'],       vsme: ['B3 · Énergie & GES'] },
  eco_renat:     { odd: [15],     esrs: ['E4'],       vsme: ['B5 · Biodiversité'] },
  soc_insertion: { odd: [8, 10],  esrs: ['S1', 'S3'], vsme: ['B8 · Main-d\'œuvre'] },
  soc_formation: { odd: [4],      esrs: ['S1'],       vsme: ['B9 · Formation & développement'] },
  eco_emplois:   { odd: [8],      esrs: ['S1', 'S3'], vsme: ['B8 · Main-d\'œuvre'] },
  eco_approv:    { odd: [12],     esrs: ['S2'],       vsme: ['C2 · Chaîne de valeur'] },
};

function iciRenderExports() {
  const box = document.getElementById('ici-exports');
  if (!box) return;
  const oddMeta = (typeof ODD_META !== 'undefined') ? ODD_META : {};
  const esrsLbl = (typeof ESRS_LABELS !== 'undefined') ? ESRS_LABELS : {};
  const chip = (txt, col) => `<span style="display:inline-block;font-size:.58rem;font-weight:700;padding:.12rem .42rem;border-radius:100px;background:${col}1a;color:${col};border:1px solid ${col}33;margin:.08rem">${txt}</span>`;
  const th = (t) => `<th style="padding:.4rem;font-size:.58rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--moss);text-align:left">${t}</th>`;

  const rows = ICI_CATALOG.map((ici) => {
    const meta = ICI_LIVRE_META[ici.livre];
    const ex = ICI_EXPORTS[ici.id] || { odd: [], esrs: [], vsme: [] };
    const odd = ex.odd.map((n) => { const m = oddMeta[n] || { c: '#3f7e44' }; return chip('ODD ' + n, m.c); }).join('') || '-';
    const esrs = ex.esrs.map((e) => chip('ESRS ' + e + (esrsLbl[e] ? ' · ' + esrsLbl[e] : ''), '#3a6e8c')).join('') || '-';
    const vsme = ex.vsme.map((v) => chip(v, '#c8732a')).join('') || '-';
    return `<tr style="border-bottom:1px solid rgba(46,102,66,.07)">
      <td style="padding:.5rem .4rem;font-size:.72rem;font-weight:600;color:var(--ink);white-space:nowrap">${meta.ic} ${ici.nom}</td>
      <td style="padding:.45rem .4rem">${odd}</td>
      <td style="padding:.45rem .4rem">${esrs}</td>
      <td style="padding:.45rem .4rem">${vsme}</td>
    </tr>`;
  }).join('');

  box.innerHTML = `<div class="dash-card" style="margin-bottom:1rem">
    <div style="font-size:.82rem;font-weight:700;color:var(--ink)">🔗 Exports · correspondances ODD / ESRS / VSME</div>
    <div style="font-size:.64rem;color:var(--moss);opacity:.7;margin:.1rem 0 .7rem">Lecture seule, dérivée des ICI. Ce sont des <strong>correspondances</strong>, pas des conversions : les lacunes sont assumées. Une saisie → des preuves → plusieurs exports.</div>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse;min-width:540px">
      <thead><tr style="border-bottom:1.5px solid rgba(46,102,66,.15)">${th('Indicateur (ICI)')}${th('ODD')}${th('ESRS · CSRD')}${th('VSME')}</tr></thead>
      <tbody>${rows}</tbody>
    </table></div>
  </div>`;
}
