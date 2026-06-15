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

// Plancher par capital (pas de compensation entre capitaux) — configurable.
const ICI_PLANCHER = 40;
// Poids des 3 livres dans le score global (Σ = 1) — configurable.
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
