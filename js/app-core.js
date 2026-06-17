/* ─── NAVIGATION ─── */
/* ─── ONBOARDING ENGINE ─── */

// Étape 2 d'onboarding commune aux 3 profils : la mesure d'impact (Vadance / Vadité).
const OB_STEP2 = {
  eyebrow: 'Étape 2 · La mesure d\'impact',
  headline: 'Vadance\n& Vadité.',
  desc: 'EVAD mesure l\'impact en deux temps : ce qu\'un lieu promet, et ce qu\'il prouve vraiment. L\'écart entre les deux, c\'est sa crédibilité.',
  type: 'cycle',
  steps: [
    { num: '🎯', title: 'La Vadance, la promesse', text: 'Le score d\'impact projeté d\'un lieu, sur 100. Calculé sur les valeurs prévues (le plan). Il sert à mobiliser la communauté et à convaincre les financeurs.' },
    { num: '✅', title: 'La Vadité, la preuve', text: 'L\'impact réellement prouvé et vérifié. Chaque donnée est décotée selon son niveau de preuve : déclaré, documenté, validé par les pairs, audité. C\'est ce que reçoit le financeur.' },
    { num: '⚖️', title: 'Le taux de tenue', text: 'Vadité ÷ Vadance : la capacité d\'un lieu à transformer ses promesses en preuves. L\'indicateur anti-greenwashing d\'EVAD.' }
  ]
};

const OB_DATA = {
  pilote: {
    color: '#2e6b47',
    colorLight: 'rgba(46,107,71,0.25)',
    colorBg: 'rgba(46,107,71,0.12)',
    accent: '#5aaa78',
    badge: '🏡 Pilote',
    badgeBg: 'rgba(46,107,71,0.25)',
    badgeColor: '#5aaa78',
    btnColor: '#1a4a2e',
    btnText: 'white',
    steps: [
      {
        eyebrow: 'Étape 1 · Comment ça marche',
        headline: 'Le cycle vertueux\ndu lieu.',
        desc: 'Chaque action sur EVAD s\'inscrit dans une boucle qui renforce à la fois ton lieu et l\'écosystème territorial.',
        type: 'cycle',
        profileIntro: {
          icon: '🏡',
          title: 'Tu es Pilote',
          text: 'Tu portes un lieu à impact, tiers-lieu, ferme, fablab ou écolieu. Tu coordonnes les Bâtisseurs qui agissent sur le terrain, et tu présentes les résultats à tes Semeurs qui financent la progression.'
        },
        steps: [
          { num: '1', title: 'Publie ton lieu & tes quêtes', text: 'Décris ton projet, ses espaces, sa phase. Propose des missions à fort impact.' },
          { num: '2', title: 'Les Bâtisseurs s\'engagent', text: 'Ils rejoignent tes quêtes, contribuent en compétences et génèrent des preuves vérifiables.' },
          { num: '3', title: 'Les Semeurs financent', text: 'Entreprises et fondations financent des projets contre des preuves d\'impact certifiés ESRS.' },
          { num: '4', title: 'La Vadance progresse', text: 'Chaque preuve certifiée fait progresser ton lieu et débloque de nouveaux financements.' }
        ]
      },
      OB_STEP2
    ]
  },
  batisseur: {
    color: '#c8732a',
    colorLight: 'rgba(200,115,42,0.25)',
    colorBg: 'rgba(200,115,42,0.12)',
    accent: '#e8a55a',
    badge: '🌿 Bâtisseur',
    badgeBg: 'rgba(200,115,42,0.25)',
    badgeColor: '#e8a55a',
    btnColor: '#7a3a10',
    btnText: 'white',
    steps: [
      {
        eyebrow: 'Étape 1 · Comment ça marche',
        headline: 'De la quête\naux graines.',
        desc: 'Un cycle clair et transparent : chaque contribution est mesurée, certifiée et récompensée.',
        type: 'cycle',
        profileIntro: {
          icon: '🌿',
          title: 'Tu es Bâtisseur',
          text: 'Tu agis concrètement sur le terrain avec tes compétences et ton temps. Tu rejoins les quêtes publiées par les Pilotes, certifies tes actions par des preuves vérifiables et gagnes des graines échangeables dans l\'écosystème EVAD.'
        },
        steps: [
          { num: '1', title: 'Crée ta fiche et profil de compétences', text: 'Décris tes savoir-faire, ta dispo et ta zone d\'action. Deva te recommande les lieux compatibles.' },
          { num: '2', title: 'Rejoins une quête sur la carte', text: 'Filtre par compétence, date ou lieu. Engage-toi en un clic et coordonne avec le Pilote.' },
          { num: '3', title: 'Certifie ta contribution', text: 'Photo, mesure, témoignage pair. La preuve est vérifiée et publiée sur la blockchain légère EVAD.' },
          { num: '4', title: 'Reçois et dépense tes graines', text: 'Échange tes graines contre des avantages locaux : paniers, stages, hébergements, formations.' }
        ]
      },
      OB_STEP2
    ]
  },
  semeur: {
    color: '#3a6e8c',
    colorLight: 'rgba(58,110,140,0.25)',
    colorBg: 'rgba(58,110,140,0.12)',
    accent: '#6ab0d0',
    badge: '🌾 Semeur',
    badgeBg: 'rgba(58,110,140,0.25)',
    badgeColor: '#6ab0d0',
    btnColor: '#1a3a50',
    btnText: 'white',
    steps: [
      {
        eyebrow: 'Étape 1 · Comment ça marche',
        headline: 'Du financement\nau rapport certifié.',
        desc: 'Un pipeline transparent : engagement → jalons → preuves → rapport ESRS auditable.',
        type: 'cycle',
        profileIntro: {
          icon: '🌾',
          title: 'Tu es Semeur',
          text: 'Tu investis dans des lieux régénératifs à impact certifié. Tu finances les projets des Pilotes, suis les jalons validés par les Bâtisseurs et reçois des preuves d\'impact ESRS auditables pour ton reporting RSE / CSRD.'
        },
        steps: [
          { num: '1', title: 'Crée ta fiche financeur', text: 'Décris tes critères ESG, secteurs prioritaires et enveloppe disponible. Deva te suggère les lieux compatibles.' },
          { num: '2', title: 'Sélectionne et engage un lieu', text: 'Définis les jalons avec le Pilote. Les ƒ sont bloqués jusqu\'à validation de chaque étape.' },
          { num: '3', title: 'Suivi des jalons & preuves', text: 'Chaque jalon est validé par les Bâtisseurs + oracle EVAD. Preuve NFT générée automatiquement.' },
          { num: '4', title: 'Rapport d\'impact ESRS exportable', text: 'Un rapport complet et auditable est généré à la clôture, intégrable directement dans ton CSRD.' }
        ]
      },
      OB_STEP2
    ]
  }
};

let obRole = 'pilote';
let obStep = 0;
let obSelectedScreen = null;

function showOnboarding(role) {
  obRole = role || currentRole || 'pilote';
  obStep = 0;
  obSelectedScreen = null;
  showScreen('onboarding');
  obRender();
}

function obRender() {
  const d = OB_DATA[obRole];
  const step = d.steps[obStep];

  // Badge
  const badge = document.getElementById('ob-role-badge');
  badge.textContent = d.badge;
  badge.style.background = d.badgeBg;
  badge.style.color = d.badgeColor;

  // Stepper (masqué s'il n'y a qu'une seule étape)
  const stepperEl = document.getElementById('ob-stepper');
  if (stepperEl) stepperEl.style.display = d.steps.length > 1 ? '' : 'none';
  const dots = document.querySelectorAll('.ob-step-dot');
  dots.forEach((dot, i) => {
    dot.classList.remove('active', 'done');
    if (i < obStep) { dot.classList.add('done'); dot.style.background = d.accent; }
    else if (i === obStep) { dot.classList.add('active'); dot.style.background = d.color; }
    else { dot.style.background = 'rgba(255,255,255,.15)'; }
  });

  // Content
  const content = document.getElementById('ob-content');
  let html = '';
  if (step.profileIntro) {
    const pi = step.profileIntro;
    html += `<div style="display:flex;align-items:flex-start;gap:.85rem;background:rgba(255,255,255,0.07);border:1px solid ${d.colorLight};border-radius:14px;padding:.9rem 1rem;margin-bottom:1.1rem">
      <div style="font-size:1.7rem;line-height:1;flex-shrink:0;margin-top:.05rem">${pi.icon}</div>
      <div>
        <div style="font-size:.88rem;font-weight:700;color:${d.accent};margin-bottom:.28rem">${pi.title}</div>
        <div style="font-size:.76rem;color:rgba(255,255,255,0.68);line-height:1.6">${pi.text}</div>
      </div>
    </div>`;
  }
  html += `
    <div class="ob-eyebrow" style="color:${d.accent}">${step.eyebrow}</div>
    <div class="ob-headline">${step.headline.replace('\n','<br>')}</div>
    <div class="ob-desc">${step.desc}</div>
  `;

  if (step.type === 'tools') {
    html += '<div class="ob-tools">';
    step.tools.forEach(t => {
      html += `<div class="ob-tool">
        <div class="ob-tool-icon" style="background:${t.bg}">${t.icon}</div>
        <div>
          <div class="ob-tool-name">${t.name}</div>
          <div class="ob-tool-desc">${t.desc}</div>
        </div>
      </div>`;
    });
    html += '</div>';
  } else if (step.type === 'cycle') {
    html += '<div class="ob-cycle">';
    step.steps.forEach(s => {
      html += `<div class="ob-cycle-step">
        <div class="ob-cycle-num" style="background:${d.colorBg};color:${d.accent}">${s.num}</div>
        <div>
          <div class="ob-cycle-title">${s.title}</div>
          <div class="ob-cycle-text">${s.text}</div>
        </div>
      </div>`;
    });
    html += '</div>';
  } else if (step.type === 'actions') {
    html += '<div class="ob-actions">';
    step.actions.forEach(a => {
      const isSelected = obSelectedScreen === a.screen;
      const border = isSelected ? `2px solid ${d.accent}` : '2px solid transparent';
      const checkmark = isSelected ? `<span style="color:${d.accent};font-size:1rem;flex-shrink:0">✓</span>` : '';
      html += `<button class="ob-action-btn" style="background:rgba(255,255,255,0.07);border:${border}" onclick="obSelect('${a.screen}')">
        <div class="ob-action-icon" style="background:${a.bg}">${a.icon}</div>
        <div style="flex:1">
          <div class="ob-action-title">${a.title}</div>
          <div class="ob-action-sub">${a.sub}</div>
        </div>
        ${checkmark}
      </button>`;
    });
    html += '</div>';
  }

  content.innerHTML = html;
  content.style.animation = 'none';
  requestAnimationFrame(() => { content.style.animation = 'obFadeIn .3s ease'; });

  // Nav buttons
  const prev = document.getElementById('ob-prev');
  const next = document.getElementById('ob-next');
  prev.style.display = obStep > 0 ? 'block' : 'none';
  next.textContent = obStep < (d.steps.length - 1) ? 'Suivant →' : 'Commencer ✦';
  next.style.background = d.color;
  next.style.color = 'white';

  // SVG
  obRenderSVG();
}

function obNext() {
  const last = OB_DATA[obRole].steps.length - 1;
  if (obStep < last) { obStep++; obRender(); }
  else if (obSelectedScreen) { obAction(obSelectedScreen); }
  else { obSkip(); }
}

function obSelect(screen) {
  obSelectedScreen = screen;
  obRender();
}

function obPrev() {
  if (obStep > 0) { obStep--; obRender(); }
}

function obGoStep(i) {
  obStep = i; obRender();
}

function obSkip() {
  const d = OB_DATA[obRole];
  // Après l'onboarding, on enchaîne sur la création de fiche du rôle
  const dest = { pilote: 'creer', batisseur: 'fiche-bat', semeur: 'fiche-sem' };
  showScreen(dest[obRole] || 'creer');
}

function obAction(screen) {
  showScreen(screen);
}

/* ─── SVG ANIMATIONS ─── */
function obRenderSVG() {
  const svg = document.getElementById('ob-svg');
  const stage = document.getElementById('ob-svg-stage');
  const d = OB_DATA[obRole];

  // Set background
  stage.className = 'ob-svg-stage ob-bg-' + obRole;

  // Clear previous animation intervals
  if (window._obAnimInterval) clearInterval(window._obAnimInterval);

  const c = d.color;
  const cl = d.colorLight;
  const ca = d.accent;

  if (obStep === 0) {
    if (obRole === 'pilote') svgPiloteCycle(svg, c, ca);
    else if (obRole === 'batisseur') svgBatCycle(svg, c, ca);
    else svgSemeurCycle(svg, c, ca);
  } else {
    // Étape 2 (tous profils) : illustration Vadance (promesse) vs Vadité (preuve)
    svgVadanceVadite(svg, c, ca);
  }
}

/* Étape 2 d'onboarding : Vadance (promesse, barre translucide) vs Vadité
   (preuve, barre pleine décotée), avec le taux de tenue. Commun aux 3 profils. */
function svgVadanceVadite(svg, c, ca) {
  const base = 298, top = 98, sc = (base - top) / 100;
  const vadance = 85, vadite = 55, taux = Math.round(vadite / vadance * 100), reste = vadance - vadite;
  const yV = base - vadance * sc, yT = base - vadite * sc;
  const x1 = 140, x2 = 284, bw = 66;
  const cream = '#f2ecdb', sub = 'rgba(196,219,201,.6)';
  const ax = x2 + bw / 2 + 24;
  const grow = (y, h) =>
    `<animate attributeName="y" values="${base};${y}" dur="1s" begin="0.15s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines="0.16 1 0.3 1"/>` +
    `<animate attributeName="height" values="0;${h}" dur="1s" begin="0.15s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines="0.16 1 0.3 1"/>`;
  svg.setAttribute('viewBox', '0 0 420 360');
  svg.innerHTML = `
    <defs>
      <linearGradient id="vd-grad" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="${ca}" stop-opacity=".65"/><stop offset="1" stop-color="${ca}" stop-opacity="1"/></linearGradient>
      <filter id="vd-glow" x="-70%" y="-70%" width="240%" height="240%"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <marker id="vd-up" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto"><path d="M5,0 L10,9 L0,9 Z" fill="${ca}"/></marker>
    </defs>
    <g transform="translate(210,48)">
      <rect x="-94" y="-17" width="188" height="32" rx="16" fill="${ca}" fill-opacity=".14" stroke="${ca}" stroke-opacity=".5"/>
      <text x="0" y="5" text-anchor="middle" font-size="12" font-weight="800" fill="${cream}" font-family="Satoshi,sans-serif">📈 Taux de tenue · ${taux}%</text>
    </g>
    <line x1="76" y1="${base}" x2="344" y2="${base}" stroke="rgba(255,255,255,.18)"/>
    ${[0,50,100].map(v=>{const y=base-v*sc;return `<text x="66" y="${y+3}" text-anchor="end" font-size="9" fill="rgba(196,219,201,.4)" font-family="Satoshi,sans-serif">${v}</text>`;}).join('')}
    <line x1="${x1-bw/2}" y1="${yV}" x2="${ax}" y2="${yV}" stroke="${ca}" stroke-opacity=".4" stroke-dasharray="4 4"/>
    <rect x="${x1-bw/2}" y="${yV}" width="${bw}" height="${vadance*sc}" rx="10" fill="${ca}" fill-opacity=".1" stroke="${ca}" stroke-opacity=".5" stroke-dasharray="5 4">${grow(yV,vadance*sc)}</rect>
    <text x="${x1}" y="${yV-11}" text-anchor="middle" font-size="24" font-weight="900" fill="${ca}" font-family="Satoshi,sans-serif">${vadance}</text>
    <text x="${x1}" y="${base+20}" text-anchor="middle" font-size="11" font-weight="700" fill="${cream}" font-family="Satoshi,sans-serif">Vadance</text>
    <text x="${x1}" y="${base+33}" text-anchor="middle" font-size="9" fill="${sub}" font-family="Satoshi,sans-serif">ton objectif</text>
    <rect x="${x2-bw/2}" y="${yT}" width="${bw}" height="${vadite*sc}" rx="10" fill="url(#vd-grad)" filter="url(#vd-glow)">${grow(yT,vadite*sc)}</rect>
    <text x="${x2}" y="${yT-11}" text-anchor="middle" font-size="24" font-weight="900" fill="${cream}" font-family="Satoshi,sans-serif">${vadite}</text>
    <text x="${x2}" y="${base+20}" text-anchor="middle" font-size="11" font-weight="700" fill="${cream}" font-family="Satoshi,sans-serif">Vadité</text>
    <text x="${x2}" y="${base+33}" text-anchor="middle" font-size="9" fill="${sub}" font-family="Satoshi,sans-serif">déjà prouvé ✓</text>
    <line x1="${ax}" y1="${yT-2}" x2="${ax}" y2="${yV+11}" stroke="${ca}" stroke-width="2.2" marker-end="url(#vd-up)"/>
    <text x="${ax}" y="${yV-7}" text-anchor="middle" font-size="14">🎯</text>
    <text x="${ax+11}" y="${(yV+yT)/2-2}" font-size="12" font-weight="800" fill="${ca}" font-family="Satoshi,sans-serif">+${reste}</text>
    <text x="${ax+11}" y="${(yV+yT)/2+10}" font-size="8.5" fill="${sub}" font-family="Satoshi,sans-serif">à prouver</text>
    <text x="210" y="348" text-anchor="middle" font-size="11" font-weight="700" fill="${cream}" font-family="Satoshi,sans-serif">Transforme tes promesses en preuves 🌱</text>
  `;
}

/* ── SVG helpers ── */
function svgEl(tag, attrs) {
  const ns = 'http://www.w3.org/2000/svg';
  const el = document.createElementNS(ns, tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  return el;
}

/* PILOTE Étape 1 : réseau de lieux interconnectés */
function svgPiloteReseau(svg, c, ca) {
  const W=420,H=360;
  svg.innerHTML = '';
  svg.setAttribute('viewBox',`0 0 ${W} ${H}`);
  const nodes = [
    {x:210,y:160,r:28,ic:'🏡',lbl:'Ton lieu',main:true},
    {x:100,y:80,r:18,ic:'🌾',lbl:'Espace Permaculture'},
    {x:320,y:75,r:18,ic:'⚙️',lbl:'Espace Fablab'},
    {x:340,y:240,r:18,ic:'🏡',lbl:'Espace Dortoir'},
    {x:95,y:255,r:18,ic:'🤝',lbl:'Espace Café associatif'},
  ];
  // Lines
  nodes.slice(1).forEach(n => {
    const line = svgEl('line', { x1:210,y1:160,x2:n.x,y2:n.y, stroke:c, 'stroke-width':'1.5', 'stroke-opacity':'.35', 'stroke-dasharray':'4 4' });
    svg.appendChild(line);
    // animate dash offset
    const anim = svgEl('animate', { attributeName:'stroke-dashoffset', values:'0;-16', dur:'1.2s', repeatCount:'indefinite' });
    line.appendChild(anim);
  });
  // Nodes
  nodes.forEach(n => {
    const g = svgEl('g', {});
    const circle = svgEl('circle', { cx:n.x, cy:n.y, r:n.r, fill: n.main?c:'rgba(255,255,255,0.06)', stroke:ca, 'stroke-width': n.main?'2':'1', 'stroke-opacity':'.6' });
    g.appendChild(circle);
    if (n.main) {
      const pulse = svgEl('circle', { cx:n.x, cy:n.y, r:n.r, fill:'none', stroke:ca, 'stroke-width':'2', 'stroke-opacity':'.3' });
      const animP = svgEl('animate', { attributeName:'r', values:`${n.r};${n.r+10};${n.r}`, dur:'2s', repeatCount:'indefinite' });
      const animO = svgEl('animate', { attributeName:'stroke-opacity', values:'.3;0;.3', dur:'2s', repeatCount:'indefinite' });
      pulse.appendChild(animP); pulse.appendChild(animO);
      g.appendChild(pulse);
    }
    const text = svgEl('text', { x:n.x, y:n.y+n.r+14, 'text-anchor':'middle', 'font-size':'11', fill:'rgba(196,219,201,0.7)', 'font-family':'Satoshi,sans-serif' });
    text.textContent = n.lbl;
    // emoji
    const em = svgEl('text', { x:n.x, y:n.y+6, 'text-anchor':'middle', 'font-size': n.main?'18':'13' });
    em.textContent = n.ic;
    g.appendChild(em); g.appendChild(text);
    svg.appendChild(g);
  });
  // Score badge
  const badge = svgEl('g', {});
  const br = svgEl('rect', { x:168,y:202, width:84, height:26, rx:13, fill:c, 'fill-opacity':'.85' });
  const bt = svgEl('text', { x:210, y:219, 'text-anchor':'middle','font-size':'10','fill':'white','font-weight':'700','font-family':'Satoshi,sans-serif' });
  bt.textContent = 'Vadance 76';
  badge.appendChild(br); badge.appendChild(bt);
  svg.appendChild(badge);
  // Floating seed tokens
  [[140,300,'+45'],[280,310,'+60'],[200,330,'+30']].forEach(([x,y,v]) => {
    const g2 = svgEl('g',{});
    const bg2 = svgEl('rect',{x:x-22,y:y-10,width:44,height:20,rx:10,fill:'rgba(240,200,74,0.15)',stroke:'rgba(240,200,74,0.4)','stroke-width':'1'});
    const t2 = svgEl('text',{x,y:y+4,'text-anchor':'middle','font-size':'9','fill':'#f0c84a','font-family':'Satoshi,sans-serif','font-weight':'700'});
    t2.textContent = v + ' 🌱';
    g2.appendChild(bg2); g2.appendChild(t2);
    const animY = svgEl('animateTransform',{attributeName:'transform',type:'translate',values:'0 0;0 -6;0 0',dur:String(1.8+Math.random()),repeatCount:'indefinite'});
    g2.appendChild(animY);
    svg.appendChild(g2);
  });
}

/* PILOTE Étape 1 : hub & spoke, version améliorée */
function svgPiloteCycle(svg, c, ca) {
  const W=420, H=360, cx=210, cy=172, R=114, CR=50;
  svg.innerHTML='';
  svg.setAttribute('viewBox',`0 0 ${W} ${H}`);

  // ── Background rings ──
  svg.appendChild(svgEl('circle',{cx,cy,r:R+32,fill:'none',stroke:c,'stroke-width':'1','stroke-opacity':'.05','stroke-dasharray':'2 12'}));
  svg.appendChild(svgEl('circle',{cx,cy,r:R+10,fill:'none',stroke:c,'stroke-width':'1','stroke-opacity':'.1','stroke-dasharray':'4 10'}));

  const nodes = [
    {angle:-90, ic:'⚡', lbl:'Quêtes',      def:null,                  r:30, fill:'rgba(255,255,255,0.07)', sk:ca,        sc:'rgba(196,219,201,0.85)', fw:'500', role:false},
    {angle:  0, ic:'🌿', lbl:'Bâtisseur',   def:'Compétences & terrain', r:40, fill:'rgba(200,115,42,0.35)',  sk:'#e8a55a',  sc:'#e8a55a',               fw:'800', role:true},
    {angle: 90, ic:'🌱', lbl:'graines',     def:null,                  r:30, fill:'rgba(255,255,255,0.07)', sk:ca,        sc:'rgba(196,219,201,0.85)', fw:'500', role:false},
    {angle:180, ic:'🌾', lbl:'Semeur',      def:"Finance l'impact",    r:40, fill:'rgba(58,110,140,0.35)',   sk:'#6ab0d0',  sc:'#6ab0d0',               fw:'800', role:true},
  ];

  // ── Connection lines (drawn first, under nodes) ──
  nodes.forEach(n => {
    const rad = n.angle*Math.PI/180;
    const sx = cx+(CR+6)*Math.cos(rad), sy = cy+(CR+6)*Math.sin(rad);
    const ex = cx+(R-n.r-6)*Math.cos(rad), ey = cy+(R-n.r-6)*Math.sin(rad);
    const lineLen = Math.hypot(ex-sx, ey-sy);
    const line = svgEl('line',{x1:sx,y1:sy,x2:ex,y2:ey,
      stroke:n.role?n.sk:ca,
      'stroke-width':n.role?'1.5':'1',
      'stroke-opacity':n.role?'.5':'.2',
      'stroke-dasharray':n.role?'5 5':'4 6'});
    if (n.role) {
      line.appendChild(svgEl('animate',{attributeName:'stroke-dashoffset',
        from:String(lineLen), to:'0', dur:'1.8s', repeatCount:'indefinite'}));
    }
    svg.appendChild(line);
  });

  // ── Outer glow for role nodes ──
  nodes.filter(n=>n.role).forEach(n => {
    const rad=n.angle*Math.PI/180;
    const nx=cx+R*Math.cos(rad), ny=cy+R*Math.sin(rad);
    svg.appendChild(svgEl('circle',{cx:nx,cy:ny,r:n.r+18,fill:n.sk,'fill-opacity':'.07'}));
    svg.appendChild(svgEl('circle',{cx:nx,cy:ny,r:n.r+9,fill:n.sk,'fill-opacity':'.1'}));
  });

  // ── Nodes ──
  nodes.forEach(n => {
    const rad=n.angle*Math.PI/180;
    const nx=cx+R*Math.cos(rad), ny=cy+R*Math.sin(rad);
    const g=svgEl('g',{});
    g.appendChild(svgEl('circle',{cx:nx,cy:ny,r:n.r,fill:n.fill,stroke:n.sk,
      'stroke-width':n.role?'2':'1.5','stroke-opacity':n.role?'1':'.55'}));
    const em=svgEl('text',{x:nx,y:ny+(n.role?5:6),'text-anchor':'middle','font-size':n.role?'22':'17'});
    em.textContent=n.ic; g.appendChild(em);
    const lbl=svgEl('text',{x:nx,y:ny+n.r+15,'text-anchor':'middle','font-size':n.role?'12':'11',
      'font-weight':n.fw,fill:n.sc,'font-family':'Satoshi,sans-serif'});
    lbl.textContent=n.lbl; g.appendChild(lbl);
    if (n.def) {
      const def=svgEl('text',{x:nx,y:ny+n.r+28,'text-anchor':'middle','font-size':'10',
        fill:n.sc,'font-family':'Satoshi,sans-serif','fill-opacity':'.75'});
      def.textContent=n.def; g.appendChild(def);
    }
    svg.appendChild(g);
  });

  // ── Center: Pilote ──
  const pulse=svgEl('circle',{cx,cy,r:CR,fill:'none',stroke:c,'stroke-width':'3','stroke-opacity':'.18'});
  pulse.appendChild(svgEl('animate',{attributeName:'r',values:`${CR};${CR+16};${CR}`,dur:'3s',repeatCount:'indefinite'}));
  pulse.appendChild(svgEl('animate',{attributeName:'stroke-opacity',values:'.18;0;.18',dur:'3s',repeatCount:'indefinite'}));
  svg.appendChild(pulse);
  svg.appendChild(svgEl('circle',{cx,cy,r:CR,fill:c,'fill-opacity':'.28',stroke:c,'stroke-width':'2.5'}));
  const ce=svgEl('text',{x:cx,y:cy-2,'text-anchor':'middle','font-size':'28'}); ce.textContent='🏡'; svg.appendChild(ce);
  const cl=svgEl('text',{x:cx,y:cy+22,'text-anchor':'middle','font-size':'13','font-weight':'900',fill:ca,'font-family':'Satoshi,sans-serif'});
  cl.textContent='Pilote'; svg.appendChild(cl);
}

/* PILOTE Étape 3 : carte types de lieux */
function svgPiloteCarte(svg, c, ca) {
  const W=420,H=360;
  svg.innerHTML='';
  svg.setAttribute('viewBox',`0 0 ${W} ${H}`);
  // Fond carte stylisé
  const bg = svgEl('rect',{x:30,y:40,width:360,height:270,rx:16,fill:'rgba(46,102,66,0.08)',stroke:'rgba(46,102,66,0.2)','stroke-width':'1'});
  svg.appendChild(bg);
  // Routes stylisées
  [[[80,180],[200,150],[340,190]],[[150,100],[200,150],[250,280]]].forEach(pts => {
    const d = 'M'+pts.map(p=>p.join(' ')).join(' L');
    const path = svgEl('path',{d,fill:'none',stroke:'rgba(130,184,148,0.2)','stroke-width':'2','stroke-dasharray':'4 4'});
    svg.appendChild(path);
  });
  // Pins
  const pins = [
    {x:160,y:150,ic:'🌿',c:'#1c3d28',lbl:'Tiers-lieu'},
    {x:255,y:185,ic:'🌾',c:'#c8732a',lbl:'Ferme'},
    {x:300,y:120,ic:'⚙️',c:'#3a6e8c',lbl:'Fablab'},
    {x:120,y:220,ic:'🏡',c:'#4a8020',lbl:'Écolieu'},
    {x:340,y:230,ic:'🌿',c:'#1c3d28',lbl:'Coop'},
  ];
  pins.forEach((p,i) => {
    const g = svgEl('g',{});
    // Pin circle
    const pc = svgEl('circle',{cx:p.x,cy:p.y,r:18,fill:p.c,stroke:'rgba(255,255,255,0.7)','stroke-width':'1.5'});
    g.appendChild(pc);
    const em = svgEl('text',{x:p.x,y:p.y+5,'text-anchor':'middle','font-size':'13'});
    em.textContent = p.ic;
    const lbl = svgEl('text',{x:p.x,y:p.y+30,'text-anchor':'middle','font-size':'9','fill':'rgba(196,219,201,0.7)','font-family':'Satoshi,sans-serif'});
    lbl.textContent = p.lbl;
    g.appendChild(em); g.appendChild(lbl);
    // Bounce animation offset
    const bounce = svgEl('animateTransform',{attributeName:'transform',type:'translate',values:`0 0;0 -4;0 0`,dur:String(1.5+i*0.3)+'s',repeatCount:'indefinite'});
    g.appendChild(bounce);
    svg.appendChild(g);
  });
  // Legend
  const legY = 330;
  [{c:'#1c3d28',l:'Tiers-lieu'},{c:'#c8732a',l:'Ferme'},{c:'#3a6e8c',l:'Fablab'},{c:'#4a8020',l:'Écolieu'}].forEach((item,i) => {
    const lx = 55 + i*88;
    const dot = svgEl('circle',{cx:lx,cy:legY,r:5,fill:item.c});
    const lt = svgEl('text',{x:lx+8,y:legY+4,'font-size':'9','fill':'rgba(196,219,201,0.6)','font-family':'Satoshi,sans-serif'});
    lt.textContent = item.l;
    svg.appendChild(dot); svg.appendChild(lt);
  });
}

/* BÂTISSEUR Étape 1 : compétences en étoile */
function svgBatArbre(svg, c, ca) {
  const W=420, H=360, cx=210, cy=175;
  svg.innerHTML='';
  svg.setAttribute('viewBox',`0 0 ${W} ${H}`);

  // Cercles d'orbite
  [55, 105].forEach(r => {
    svg.appendChild(svgEl('circle',{cx,cy,r,fill:'none',stroke:ca,
      'stroke-width':'1','stroke-opacity':'.2','stroke-dasharray':'4 4'}));
  });

  // Nœud central
  svg.appendChild(svgEl('circle',{cx,cy,r:38,
    fill:'rgba(200,115,42,0.25)',stroke:ca,'stroke-width':'2','stroke-opacity':'.8'}));
  const pulse = svgEl('circle',{cx,cy,r:38,fill:'none',stroke:ca,'stroke-width':'2','stroke-opacity':'.25'});
  pulse.appendChild(svgEl('animate',{attributeName:'r',values:'38;52;38',dur:'2.4s',repeatCount:'indefinite'}));
  pulse.appendChild(svgEl('animate',{attributeName:'stroke-opacity',values:'.25;0;.25',dur:'2.4s',repeatCount:'indefinite'}));
  svg.appendChild(pulse);
  const em0 = svgEl('text',{x:cx,y:cy-5,'text-anchor':'middle','font-size':'22'}); em0.textContent='🌿'; svg.appendChild(em0);
  const lbl0 = svgEl('text',{x:cx,y:cy+16,'text-anchor':'middle','font-size':'11','font-weight':'700',fill:ca,'font-family':'Satoshi,sans-serif'}); lbl0.textContent='Bâtisseur'; svg.appendChild(lbl0);

  // Satellites niveau 1 (proche)
  const ring1 = [
    {angle:-90, ic:'🎨', lbl:'Design'},
    {angle: 30, ic:'🌱', lbl:'Terrain'},
    {angle:150, ic:'⚡', lbl:'Énergie'},
  ];
  ring1.forEach(item => {
    const rad = item.angle * Math.PI / 180;
    const nx = cx + 105 * Math.cos(rad);
    const ny = cy + 105 * Math.sin(rad);
    // ligne
    svg.appendChild(svgEl('line',{x1:cx,y1:cy,x2:nx,y2:ny,
      stroke:ca,'stroke-width':'1.5','stroke-opacity':'.4','stroke-dasharray':'5 4'}));
    // cercle
    svg.appendChild(svgEl('circle',{cx:nx,cy:ny,r:24,
      fill:'rgba(200,115,42,0.35)',stroke:ca,'stroke-width':'1.5','stroke-opacity':'.7'}));
    const em = svgEl('text',{x:nx,y:ny-3,'text-anchor':'middle','font-size':'15'}); em.textContent=item.ic; svg.appendChild(em);
    const lb = svgEl('text',{x:nx,y:ny+14,'text-anchor':'middle','font-size':'10','font-weight':'600',fill:ca,'font-family':'Satoshi,sans-serif'}); lb.textContent=item.lbl; svg.appendChild(lb);
  });

  // Satellites niveau 2 (loin)
  const ring2 = [
    {angle:-140, ic:'📐', lbl:'UX'},
    {angle: -40, ic:'🌾', lbl:'Maraîchage'},
    {angle:  80, ic:'☀️', lbl:'Solaire'},
    {angle: 200, ic:'🔋', lbl:'Stockage'},
  ];
  ring2.forEach(item => {
    const rad = item.angle * Math.PI / 180;
    // Trouver le satellite parent le plus proche dans ring1
    const parent = ring1.reduce((best, p) => {
      const prad = p.angle * Math.PI / 180;
      const diff = Math.abs(item.angle - p.angle);
      const d = diff > 180 ? 360 - diff : diff;
      return d < Math.abs(item.angle - best.angle) ? p : best;
    }, ring1[0]);
    const prad = parent.angle * Math.PI / 180;
    const px = cx + 105 * Math.cos(prad);
    const py = cy + 105 * Math.sin(prad);
    const nx = cx + 175 * Math.cos(rad);
    const ny = cy + 175 * Math.sin(rad);
    // ligne du parent au satellite
    svg.appendChild(svgEl('line',{x1:px,y1:py,x2:nx,y2:ny,
      stroke:ca,'stroke-width':'1','stroke-opacity':'.3','stroke-dasharray':'3 4'}));
    svg.appendChild(svgEl('circle',{cx:nx,cy:ny,r:17,
      fill:'rgba(200,115,42,0.18)',stroke:ca,'stroke-width':'1.2','stroke-opacity':'.55'}));
    const em = svgEl('text',{x:nx,y:ny-2,'text-anchor':'middle','font-size':'12'}); em.textContent=item.ic; svg.appendChild(em);
    const lb = svgEl('text',{x:nx,y:ny+14,'text-anchor':'middle','font-size':'8.5',fill:ca,'font-family':'Satoshi,sans-serif','font-weight':'500'}); lb.textContent=item.lbl; svg.appendChild(lb);
  });

  // Badges graines flottants
  [[130,310,'+45🌱'],[280,320,'+30🌱']].forEach(([x,y,v],i) => {
    const g = svgEl('g',{});
    g.appendChild(svgEl('rect',{x:x-26,y:y-11,width:52,height:22,rx:11,
      fill:'rgba(240,200,74,0.18)',stroke:'rgba(240,200,74,0.5)','stroke-width':'1'}));
    const t = svgEl('text',{x,y:y+5,'text-anchor':'middle','font-size':'10','fill':'#f0c84a','font-weight':'700','font-family':'Satoshi,sans-serif'});
    t.textContent=v; g.appendChild(t);
    g.appendChild(svgEl('animateTransform',{attributeName:'transform',type:'translate',
      values:'0 0;0 -6;0 0',dur:String(1.8+i*0.5)+'s',repeatCount:'indefinite'}));
    svg.appendChild(g);
  });
}

/* BÂTISSEUR Étape 1 : hub & spoke, version améliorée */
function svgBatCycle(svg, c, ca) {
  const W=420, H=360, cx=210, cy=172, R=114, CR=50;
  svg.innerHTML='';
  svg.setAttribute('viewBox',`0 0 ${W} ${H}`);

  svg.appendChild(svgEl('circle',{cx,cy,r:R+32,fill:'none',stroke:c,'stroke-width':'1','stroke-opacity':'.05','stroke-dasharray':'2 12'}));
  svg.appendChild(svgEl('circle',{cx,cy,r:R+10,fill:'none',stroke:c,'stroke-width':'1','stroke-opacity':'.1','stroke-dasharray':'4 10'}));

  const nodes = [
    {angle:-90, ic:'⚡', lbl:'Quête',   def:null,                 r:30, fill:'rgba(255,255,255,0.07)', sk:ca,        sc:'rgba(232,165,90,0.85)', fw:'500', role:false},
    {angle:  0, ic:'📷', lbl:'Preuve',  def:null,                 r:30, fill:'rgba(255,255,255,0.07)', sk:ca,        sc:'rgba(232,165,90,0.85)', fw:'500', role:false},
    {angle: 90, ic:'🌱', lbl:'graines', def:null,                 r:30, fill:'rgba(255,255,255,0.07)', sk:ca,        sc:'rgba(232,165,90,0.85)', fw:'500', role:false},
    {angle:180, ic:'🌾', lbl:'Semeur',  def:'Finance les quêtes', r:40, fill:'rgba(58,110,140,0.35)',  sk:'#6ab0d0', sc:'#6ab0d0',               fw:'800', role:true},
  ];

  nodes.forEach(n => {
    const rad=n.angle*Math.PI/180;
    const sx=cx+(CR+6)*Math.cos(rad), sy=cy+(CR+6)*Math.sin(rad);
    const ex=cx+(R-n.r-6)*Math.cos(rad), ey=cy+(R-n.r-6)*Math.sin(rad);
    const lineLen=Math.hypot(ex-sx,ey-sy);
    const line=svgEl('line',{x1:sx,y1:sy,x2:ex,y2:ey,
      stroke:n.role?n.sk:ca,'stroke-width':n.role?'1.5':'1',
      'stroke-opacity':n.role?'.5':'.2','stroke-dasharray':n.role?'5 5':'4 6'});
    if (n.role) line.appendChild(svgEl('animate',{attributeName:'stroke-dashoffset',from:String(lineLen),to:'0',dur:'1.8s',repeatCount:'indefinite'}));
    svg.appendChild(line);
  });

  nodes.filter(n=>n.role).forEach(n => {
    const rad=n.angle*Math.PI/180;
    const nx=cx+R*Math.cos(rad), ny=cy+R*Math.sin(rad);
    svg.appendChild(svgEl('circle',{cx:nx,cy:ny,r:n.r+18,fill:n.sk,'fill-opacity':'.07'}));
    svg.appendChild(svgEl('circle',{cx:nx,cy:ny,r:n.r+9,fill:n.sk,'fill-opacity':'.1'}));
  });

  nodes.forEach(n => {
    const rad=n.angle*Math.PI/180;
    const nx=cx+R*Math.cos(rad), ny=cy+R*Math.sin(rad);
    const g=svgEl('g',{});
    g.appendChild(svgEl('circle',{cx:nx,cy:ny,r:n.r,fill:n.fill,stroke:n.sk,'stroke-width':n.role?'2':'1.5','stroke-opacity':n.role?'1':'.55'}));
    const em=svgEl('text',{x:nx,y:ny+(n.role?5:6),'text-anchor':'middle','font-size':n.role?'22':'17'});
    em.textContent=n.ic; g.appendChild(em);
    const lbl=svgEl('text',{x:nx,y:ny+n.r+15,'text-anchor':'middle','font-size':n.role?'12':'11','font-weight':n.fw,fill:n.sc,'font-family':'Satoshi,sans-serif'});
    lbl.textContent=n.lbl; g.appendChild(lbl);
    if (n.def) {
      const def=svgEl('text',{x:nx,y:ny+n.r+28,'text-anchor':'middle','font-size':'10',fill:n.sc,'font-family':'Satoshi,sans-serif','fill-opacity':'.75'});
      def.textContent=n.def; g.appendChild(def);
    }
    svg.appendChild(g);
  });

  const pulse=svgEl('circle',{cx,cy,r:CR,fill:'none',stroke:c,'stroke-width':'3','stroke-opacity':'.18'});
  pulse.appendChild(svgEl('animate',{attributeName:'r',values:`${CR};${CR+16};${CR}`,dur:'3s',repeatCount:'indefinite'}));
  pulse.appendChild(svgEl('animate',{attributeName:'stroke-opacity',values:'.18;0;.18',dur:'3s',repeatCount:'indefinite'}));
  svg.appendChild(pulse);
  svg.appendChild(svgEl('circle',{cx,cy,r:CR,fill:c,'fill-opacity':'.28',stroke:c,'stroke-width':'2.5'}));
  const ce=svgEl('text',{x:cx,y:cy-2,'text-anchor':'middle','font-size':'28'}); ce.textContent='🌿'; svg.appendChild(ce);
  const cl=svgEl('text',{x:cx,y:cy+22,'text-anchor':'middle','font-size':'13','font-weight':'900',fill:ca,'font-family':'Satoshi,sans-serif'});
  cl.textContent='Bâtisseur'; svg.appendChild(cl);
}

/* BÂTISSEUR Étape 3 : lieux compatibles */
function svgBatLieux(svg, c, ca) {
  const W=420,H=360;
  svg.innerHTML='';
  svg.setAttribute('viewBox',`0 0 ${W} ${H}`);
  const bg=svgEl('rect',{x:30,y:30,width:360,height:290,rx:16,fill:'rgba(200,115,42,0.06)',stroke:'rgba(200,115,42,0.15)','stroke-width':'1'});
  svg.appendChild(bg);
  const places=[
    {x:160,y:140,ic:'🌿',match:95,graines:'+45',name:'Manufacture Verte'},
    {x:280,y:110,ic:'🌾',match:88,graines:'+60',name:'Ferme Garonne'},
    {x:320,y:220,ic:'⚙️',match:72,graines:'+30',name:'OpenLab'},
    {x:110,y:230,ic:'🏡',match:81,graines:'+50',name:'Écolieu Périgord'},
  ];
  places.forEach((p,i)=>{
    const g=svgEl('g',{});
    const col=p.match>90?'#c8732a':p.match>80?'#b06020':'#7a4a15';
    const pc=svgEl('circle',{cx:p.x,cy:p.y,r:22,fill:col,stroke:'rgba(255,255,255,0.6)','stroke-width':'1.5'});
    g.appendChild(pc);
    const em=svgEl('text',{x:p.x,y:p.y+5,'text-anchor':'middle','font-size':'14'}); em.textContent=p.ic;
    g.appendChild(em);
    // Match badge
    const mb=svgEl('rect',{x:p.x-16,y:p.y-36,width:32,height:16,rx:8,fill:'rgba(200,115,42,0.85)'});
    const mt=svgEl('text',{x:p.x,y:p.y-25,'text-anchor':'middle','font-size':'9','fill':'white','font-weight':'700','font-family':'Satoshi'});
    mt.textContent=p.match+'%';
    g.appendChild(mb); g.appendChild(mt);
    const lbl=svgEl('text',{x:p.x,y:p.y+35,'text-anchor':'middle','font-size':'9','fill':'rgba(232,165,90,0.7)','font-family':'Satoshi,sans-serif'});
    lbl.textContent=p.name;
    g.appendChild(lbl);
    const bounce=svgEl('animateTransform',{attributeName:'transform',type:'translate',values:`0 0;0 -4;0 0`,dur:String(1.6+i*0.4)+'s',repeatCount:'indefinite'});
    g.appendChild(bounce);
    svg.appendChild(g);
  });
  const lbl=svgEl('text',{x:210,y:330,'text-anchor':'middle','font-size':'11','fill':'rgba(232,165,90,0.5)','font-family':'Satoshi,sans-serif'});
  lbl.textContent='Lieux compatibles avec tes compétences';
  svg.appendChild(lbl);
}

/* SEMEUR Étape 1 : axes RSE en orbite */
function svgSemeurRSE(svg, c, ca) {
  const W=420,H=360,cx=210,cy=175;
  svg.innerHTML='';
  svg.setAttribute('viewBox',`0 0 ${W} ${H}`);
  // Orbites
  [60,100,140].forEach(r=>{
    const orbit=svgEl('circle',{cx,cy,r,fill:'none',stroke:c,'stroke-width':'1','stroke-opacity':'.15'});
    svg.appendChild(orbit);
  });
  // Centre
  const cc=svgEl('circle',{cx,cy,r:35,fill:'rgba(58,110,140,0.2)',stroke:c,'stroke-width':'1.5'});
  svg.appendChild(cc);
  const ce=svgEl('text',{x:cx,y:cy+5,'text-anchor':'middle','font-size':'20'}); ce.textContent='🌍';
  svg.appendChild(ce);
  // ESRS nodes orbiting
  const esrsItems=[
    {r:100,angle:-90,label:'E1',ic:'🌡',desc:'Climat'},
    {r:100,angle:-10,label:'E3',ic:'💧',desc:'Eau'},
    {r:100,angle:70,label:'E5',ic:'♻️',desc:'Économie circulaire'},
    {r:140,angle:-50,label:'S1',ic:'👥',desc:'Salariés'},
    {r:140,angle:30,label:'S2',ic:'🤝',desc:'Communauté'},
    {r:60,angle:150,label:'G1',ic:'⚖️',desc:'Gouvernance'},
  ];
  esrsItems.forEach((item,i)=>{
    const g=svgEl('g',{});
    const rad=item.angle*Math.PI/180;
    const nx=cx+item.r*Math.cos(rad), ny=cy+item.r*Math.sin(rad);
    const nc=svgEl('circle',{cx:nx,cy:ny,r:20,fill:'rgba(58,110,140,0.2)',stroke:ca,'stroke-width':'1.2','stroke-opacity':'.7'});
    g.appendChild(nc);
    const em=svgEl('text',{x:nx,y:ny+5,'text-anchor':'middle','font-size':'12'}); em.textContent=item.ic;
    const lbl=svgEl('text',{x:nx,y:ny+21,'text-anchor':'middle','font-size':'8','fill':ca,'font-family':'Satoshi,sans-serif','font-weight':'700'});
    lbl.textContent=item.label;
    g.appendChild(em); g.appendChild(lbl);
    // Orbit animation (slow rotate around center)
    const orbitAnim=svgEl('animateTransform',{attributeName:'transform',type:'rotate',values:`0 ${cx} ${cy};360 ${cx} ${cy}`,dur:String(12+i*2)+'s',repeatCount:'indefinite'});
    g.appendChild(orbitAnim);
    svg.appendChild(g);
  });
}

/* SEMEUR Étape 1 : hub & spoke, version améliorée */
function svgSemeurCycle(svg, c, ca) {
  const W=420, H=360, cx=210, cy=172, R=114, CR=50;
  svg.innerHTML='';
  svg.setAttribute('viewBox',`0 0 ${W} ${H}`);

  svg.appendChild(svgEl('circle',{cx,cy,r:R+32,fill:'none',stroke:c,'stroke-width':'1','stroke-opacity':'.05','stroke-dasharray':'2 12'}));
  svg.appendChild(svgEl('circle',{cx,cy,r:R+10,fill:'none',stroke:c,'stroke-width':'1','stroke-opacity':'.1','stroke-dasharray':'4 10'}));

  const nodes = [
    {angle:-90, ic:'💰', lbl:'Financement', def:null,                   r:30, fill:'rgba(255,255,255,0.07)', sk:ca,        sc:'rgba(106,176,208,0.85)', fw:'500', role:false},
    {angle:  0, ic:'⏳', lbl:'Jalons',      def:null,                   r:30, fill:'rgba(255,255,255,0.07)', sk:ca,        sc:'rgba(106,176,208,0.85)', fw:'500', role:false},
    {angle: 90, ic:'📊', lbl:'Rapport ESRS',def:null,                   r:30, fill:'rgba(255,255,255,0.07)', sk:ca,        sc:'rgba(106,176,208,0.85)', fw:'500', role:false},
    {angle:180, ic:'🌿', lbl:'Bâtisseur',   def:'Certifie les jalons', r:40, fill:'rgba(200,115,42,0.35)',  sk:'#e8a55a', sc:'#e8a55a',               fw:'800', role:true},
  ];

  nodes.forEach(n => {
    const rad=n.angle*Math.PI/180;
    const sx=cx+(CR+6)*Math.cos(rad), sy=cy+(CR+6)*Math.sin(rad);
    const ex=cx+(R-n.r-6)*Math.cos(rad), ey=cy+(R-n.r-6)*Math.sin(rad);
    const lineLen=Math.hypot(ex-sx,ey-sy);
    const line=svgEl('line',{x1:sx,y1:sy,x2:ex,y2:ey,
      stroke:n.role?n.sk:ca,'stroke-width':n.role?'1.5':'1',
      'stroke-opacity':n.role?'.5':'.2','stroke-dasharray':n.role?'5 5':'4 6'});
    if (n.role) line.appendChild(svgEl('animate',{attributeName:'stroke-dashoffset',from:String(lineLen),to:'0',dur:'1.8s',repeatCount:'indefinite'}));
    svg.appendChild(line);
  });

  nodes.filter(n=>n.role).forEach(n => {
    const rad=n.angle*Math.PI/180;
    const nx=cx+R*Math.cos(rad), ny=cy+R*Math.sin(rad);
    svg.appendChild(svgEl('circle',{cx:nx,cy:ny,r:n.r+18,fill:n.sk,'fill-opacity':'.07'}));
    svg.appendChild(svgEl('circle',{cx:nx,cy:ny,r:n.r+9,fill:n.sk,'fill-opacity':'.1'}));
  });

  nodes.forEach(n => {
    const rad=n.angle*Math.PI/180;
    const nx=cx+R*Math.cos(rad), ny=cy+R*Math.sin(rad);
    const g=svgEl('g',{});
    g.appendChild(svgEl('circle',{cx:nx,cy:ny,r:n.r,fill:n.fill,stroke:n.sk,'stroke-width':n.role?'2':'1.5','stroke-opacity':n.role?'1':'.55'}));
    const em=svgEl('text',{x:nx,y:ny+(n.role?5:6),'text-anchor':'middle','font-size':n.role?'22':'17'});
    em.textContent=n.ic; g.appendChild(em);
    const lbl=svgEl('text',{x:nx,y:ny+n.r+15,'text-anchor':'middle','font-size':n.role?'12':'11','font-weight':n.fw,fill:n.sc,'font-family':'Satoshi,sans-serif'});
    lbl.textContent=n.lbl; g.appendChild(lbl);
    if (n.def) {
      const def=svgEl('text',{x:nx,y:ny+n.r+28,'text-anchor':'middle','font-size':'10',fill:n.sc,'font-family':'Satoshi,sans-serif','fill-opacity':'.75'});
      def.textContent=n.def; g.appendChild(def);
    }
    svg.appendChild(g);
  });

  const pulse=svgEl('circle',{cx,cy,r:CR,fill:'none',stroke:c,'stroke-width':'3','stroke-opacity':'.18'});
  pulse.appendChild(svgEl('animate',{attributeName:'r',values:`${CR};${CR+16};${CR}`,dur:'3s',repeatCount:'indefinite'}));
  pulse.appendChild(svgEl('animate',{attributeName:'stroke-opacity',values:'.18;0;.18',dur:'3s',repeatCount:'indefinite'}));
  svg.appendChild(pulse);
  svg.appendChild(svgEl('circle',{cx,cy,r:CR,fill:c,'fill-opacity':'.28',stroke:c,'stroke-width':'2.5'}));
  const ce=svgEl('text',{x:cx,y:cy-2,'text-anchor':'middle','font-size':'28'}); ce.textContent='🌾'; svg.appendChild(ce);
  const cl=svgEl('text',{x:cx,y:cy+22,'text-anchor':'middle','font-size':'13','font-weight':'900',fill:ca,'font-family':'Satoshi,sans-serif'});
  cl.textContent='Semeur'; svg.appendChild(cl);
}

/* SEMEUR Étape 3 : lieux éligibles avec ESRS */
function svgSemeurLieux(svg, c, ca) {
  const W=420,H=360;
  svg.innerHTML='';
  svg.setAttribute('viewBox',`0 0 ${W} ${H}`);
  const bg=svgEl('rect',{x:30,y:30,width:360,height:290,rx:16,fill:'rgba(58,110,140,0.06)',stroke:'rgba(58,110,140,0.15)','stroke-width':'1'});
  svg.appendChild(bg);
  const places=[
    {x:155,y:140,ic:'🌿',esrs:'E1+S1',score:82,name:'Manufacture Verte'},
    {x:285,y:120,ic:'🌾',esrs:'E3+E5',score:88,name:'Ferme Garonne'},
    {x:310,y:230,ic:'🏡',esrs:'E2+S2',score:75,name:'Écolieu Périgord'},
    {x:120,y:230,ic:'⚙️',esrs:'E5+G1',score:63,name:'OpenLab'},
  ];
  places.forEach((p,i)=>{
    const g=svgEl('g',{});
    const col=p.score>85?'#3a6e8c':p.score>75?'#2a5070':'#1a3a50';
    const pc=svgEl('circle',{cx:p.x,cy:p.y,r:22,fill:col,stroke:'rgba(255,255,255,0.6)','stroke-width':'1.5'});
    g.appendChild(pc);
    const em=svgEl('text',{x:p.x,y:p.y+5,'text-anchor':'middle','font-size':'14'}); em.textContent=p.ic;
    g.appendChild(em);
    // ESRS badge
    const esrsW=p.esrs.length*6+8;
    const mb=svgEl('rect',{x:p.x-esrsW/2,y:p.y-38,width:esrsW,height:16,rx:8,fill:'rgba(58,110,140,0.9)'});
    const mt=svgEl('text',{x:p.x,y:p.y-27,'text-anchor':'middle','font-size':'8','fill':ca,'font-weight':'700','font-family':'Satoshi'});
    mt.textContent=p.esrs;
    g.appendChild(mb); g.appendChild(mt);
    const lbl=svgEl('text',{x:p.x,y:p.y+36,'text-anchor':'middle','font-size':'9','fill':'rgba(106,176,208,0.7)','font-family':'Satoshi,sans-serif'});
    lbl.textContent=p.name;
    g.appendChild(lbl);
    const bounce=svgEl('animateTransform',{attributeName:'transform',type:'translate',values:`0 0;0 -4;0 0`,dur:String(1.6+i*0.4)+'s',repeatCount:'indefinite'});
    g.appendChild(bounce);
    svg.appendChild(g);
  });
  const lbl=svgEl('text',{x:210,y:330,'text-anchor':'middle','font-size':'11','fill':'rgba(106,176,208,0.5)','font-family':'Satoshi,sans-serif'});
  lbl.textContent='Lieux éligibles à tes critères ESRS';
  svg.appendChild(lbl);
}

/* ─── ONGLETS FICHE LIEU ─── */
function openLieuModal() {
  const m = document.getElementById('lieu-modal');
  m.style.display = 'block';
  document.body.style.overflow = 'hidden';
  lieuRenderHero();
  lieuTab('presentation', document.getElementById('ltab-presentation'));
  lieuRenderPresentation();
  lieuRenderEspaces();
  lieuRenderQuetes();
  lieuRenderImpact();
}

function lieuRenderHero() {
  const TYPES_MAP = {};
  if (typeof TYPES_LIEU !== 'undefined') TYPES_LIEU.forEach(t => TYPES_MAP[t.id] = t);
  const typeObj = TYPES_MAP[cData.type] || null;
  const icon = cData.icon || '🌿';
  const nom = cData.nom || 'Fiche lieu';
  const typeLbl = typeObj ? typeObj.l : (cData.autreType || 'Lieu EVAD');
  const loc = cData.localisation || '';

  const heroIcon = document.getElementById('lieu-hero-icon');
  if (heroIcon) heroIcon.textContent = icon;

  const heroNom = document.getElementById('lieu-hero-nom');
  if (heroNom) heroNom.textContent = nom;

  const heroSub = document.getElementById('lieu-hero-sub');
  if (heroSub) heroSub.textContent = loc || 'Lieu EVAD · Prototype';

  const heroBadges = document.getElementById('lieu-hero-badges');
  if (heroBadges) {
    const phaseLbls = {idee:'💭 Idée',conception:'📐 Conception',chantier:'🏗 Chantier',operationnel:'🌿 Opérationnel'};
    heroBadges.innerHTML = `
      <span class="acteur-badge" style="background:rgba(74,140,92,0.28);color:var(--sage);border:1px solid rgba(74,140,92,0.35)">${icon} ${typeLbl}</span>
      ${loc ? `<span class="acteur-badge" style="background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.65);border:1px solid rgba(255,255,255,0.12)">📍 ${loc}</span>` : ''}
      ${cData.phase ? `<span class="acteur-badge" style="background:rgba(255,255,255,0.08);color:rgba(255,255,255,0.6);border:1px solid rgba(255,255,255,0.1)">${phaseLbls[cData.phase]||cData.phase}</span>` : ''}
    `;
  }

  // Bandeau Vadance + dimensions (rempli pour un lieu existant, sinon « à certifier »)
  const heroStats = document.getElementById('lieu-hero-stats');
  if (heroStats) {
    const score = (typeof cData.score === 'number') ? cData.score : null;
    const trim  = cData.scoreTrim || '';
    const dims  = (cData.dims && cData.dims.length) ? cData.dims : [
      {l:'Environnement',v:0,c:'#82b894'},{l:'Social',v:0,c:'#6aa0bc'},
      {l:'Éco. locale',v:0,c:'#e8a55a'}
    ];
    const dimCols = ['#82b894','#6aa0bc','#e8a55a','#a99cd0'];
    const dimGrad = ['linear-gradient(90deg,#4a8c5c,#82b894)','linear-gradient(90deg,#3a6e8c,#6aa0bc)','linear-gradient(90deg,#c8732a,#e8a55a)','linear-gradient(90deg,#7a6ea8,#a99cd0)'];
    heroStats.innerHTML = `
      <div style="background:rgba(255,255,255,0.08);border:1px solid rgba(74,140,92,0.3);border-radius:var(--r-lg);padding:.7rem .9rem;text-align:center">
        <div style="font-family:'Satoshi', sans-serif;font-size:1.8rem;font-weight:900;color:var(--sun);line-height:1">${score!=null?score:'0'}</div>
        <div style="font-size:.55rem;color:var(--sage);text-transform:uppercase;letter-spacing:.1em;margin-top:.15rem">Vadance</div>
        <div style="font-size:.6rem;color:rgba(255,255,255,.45);margin-top:.1rem">${score!=null?(trim?'tendance '+trim:'sur 100'):'à certifier'}</div>
      </div>
      ${dims.slice(0,4).map((d,i)=>`
      <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:var(--r-lg);padding:.6rem .8rem">
        <div style="font-size:.55rem;color:var(--sage);opacity:.65;text-transform:uppercase;letter-spacing:.09em;margin-bottom:.4rem">${d.l}</div>
        <div style="height:3px;background:rgba(255,255,255,0.1);border-radius:100px;overflow:hidden;margin-bottom:.25rem"><div style="width:${d.v}%;height:100%;background:${dimGrad[i]};border-radius:100px"></div></div>
        <div style="font-family:'Satoshi', sans-serif;font-size:1rem;font-weight:700;color:${dimCols[i]}">${d.v}</div>
      </div>`).join('')}
    `;
  }
}

function lieuRenderPresentation() {
  const box = document.getElementById('lieu-presentation-content');
  if (!box) return;

  const STATUTS_MAP = {asso:'Association loi 1901',scic:'SCIC',sas:'SAS',coop:'Coopérative',autre:'Autre'};
  const ACCES_MAP = {libre:'🚪 Libre accès',adhesion:'🎟 Sur adhésion',invitation:'📩 Sur invitation',rdv:'📅 Sur rendez-vous'};

  const labels = (cData.labels||[]);
  const langues = (cData.langues||[]);
  const reseaux = (cData.reseaux||[]);

  const labelChips = labels.map(id => {
    const lb = (typeof LABELS_LIEUX !== 'undefined') ? LABELS_LIEUX.find(x=>x.id===id) : null;
    return lb ? `<span style="padding:.2rem .5rem;border-radius:100px;background:rgba(74,140,92,.1);border:1px solid rgba(74,140,92,.3);font-size:.65rem;color:var(--fern);font-weight:600">${lb.ic} ${lb.l}</span>` : '';
  }).join('');

  const langueChips = langues.map(id => {
    const lg = (typeof LANGUES_LIEUX !== 'undefined') ? LANGUES_LIEUX.find(x=>x.id===id) : null;
    return lg ? `<span style="padding:.2rem .5rem;border-radius:100px;background:rgba(46,102,66,.07);border:1px solid rgba(46,102,66,.18);font-size:.65rem;color:var(--moss)">${lg.ic} ${lg.l}</span>` : '';
  }).join('');

  const reseauChips = reseaux.map(r =>
    `<span style="padding:.2rem .5rem;border-radius:100px;background:rgba(122,110,168,.1);border:1px solid rgba(122,110,168,.3);font-size:.65rem;color:#7a6ea8">${r}</span>`
  ).join('');

  const infos = [
    ['Surface', cData.surface || '—'],
    ['Fondé en', cData.annee || '—'],
    ['Statut', cData.statut ? STATUTS_MAP[cData.statut]||cData.statut : '—'],
  ];

  const contactLinks = [
    cData.email ? `<a href="mailto:${cData.email}" style="display:inline-flex;align-items:center;gap:.3rem;padding:.28rem .65rem;border-radius:100px;background:rgba(46,102,66,.08);border:1px solid rgba(46,102,66,.2);font-size:.68rem;color:var(--forest);text-decoration:none;font-weight:600">📧 ${cData.email}</a>` : '',
    cData.tel   ? `<a href="tel:${cData.tel}" style="display:inline-flex;align-items:center;gap:.3rem;padding:.28rem .65rem;border-radius:100px;background:rgba(46,102,66,.08);border:1px solid rgba(46,102,66,.2);font-size:.68rem;color:var(--forest);text-decoration:none;font-weight:600">📞 ${cData.tel}</a>` : '',
    cData.web   ? `<a href="${cData.web}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:.3rem;padding:.28rem .65rem;border-radius:100px;background:rgba(46,102,66,.08);border:1px solid rgba(46,102,66,.2);font-size:.68rem;color:var(--forest);text-decoration:none;font-weight:600">🌐 Site web ↗</a>` : '',
  ].filter(Boolean).join('');

  box.innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 300px;gap:1.5rem;align-items:start">

      <!-- Colonne gauche -->
      <div style="display:flex;flex-direction:column;gap:1.2rem">

        <!-- À propos -->
        <div>
          <div class="acteur-section-title">📋 À propos</div>
          ${cData.desc ? `<p style="font-size:.8rem;color:var(--moss);line-height:1.65;margin-bottom:.9rem">${cData.desc}</p>` : ''}
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:.5rem;margin-bottom:.8rem">
            ${infos.map(([k,v])=>`<div style="background:white;border:1px solid rgba(46,102,66,.1);border-radius:var(--r);padding:.65rem .85rem"><div style="font-size:.58rem;color:var(--moss);opacity:.6;text-transform:uppercase;letter-spacing:.1em;margin-bottom:.2rem">${k}</div><div style="font-size:.78rem;font-weight:700;color:var(--ink)">${v}</div></div>`).join('')}
          </div>

          ${contactLinks ? `<div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:.6rem">${contactLinks}</div>` : ''}

          ${labelChips ? `<div>
            <div style="font-size:.6rem;font-weight:700;color:var(--moss);opacity:.55;text-transform:uppercase;letter-spacing:.1em;margin-bottom:.4rem">Labels</div>
            <div style="display:flex;flex-wrap:wrap;gap:.3rem">${labelChips}</div>
          </div>` : ''}
        </div>

        ${reseauChips ? `<div>
          <div class="acteur-section-title" style="margin-bottom:.4rem">🌐 Réseaux d'appartenance</div>
          <div style="display:flex;flex-wrap:wrap;gap:.3rem">${reseauChips}</div>
        </div>` : ''}

        <!-- Bâtisseurs actifs -->
        <div>
          <div class="acteur-section-title">🌿 Bâtisseurs actifs ce mois</div>
          <div style="padding:1rem;text-align:center;font-size:.72rem;color:var(--moss);opacity:.5">Aucun bâtisseur actif</div>
        </div>

        <!-- Semeurs -->
        <div>
          <div class="acteur-section-title">🌱 Semeurs financeurs</div>
          <div style="padding:1rem;text-align:center;font-size:.72rem;color:var(--moss);opacity:.5">Aucun semeur partenaire</div>
        </div>

      </div>

      <!-- Sidebar droite -->
      <div style="display:flex;flex-direction:column;gap:.85rem">

        <!-- Besoins -->
        <div style="background:white;border:1px solid rgba(46,102,66,.1);border-radius:var(--r-xl);overflow:hidden">
          <div style="padding:.75rem 1rem;border-bottom:1px solid rgba(46,102,66,.08);font-size:.78rem;font-weight:700;color:var(--ink)">🔍 Besoins du lieu</div>
          ${(cData.besoins||[]).length
            ? `<div style="padding:.65rem .85rem;display:flex;flex-wrap:wrap;gap:.3rem">${(cData.besoins||[]).map(b=>`<span style="padding:.2rem .5rem;border-radius:100px;background:rgba(200,115,42,.1);border:1px solid rgba(200,115,42,.3);font-size:.65rem;color:var(--amber);font-weight:600">${b}</span>`).join('')}</div>`
            : `<div style="padding:.75rem .85rem;text-align:center;font-size:.7rem;color:var(--moss);opacity:.5">Aucun besoin renseigné</div>`
          }
        </div>

        <button class="acteur-cta" style="background:var(--forest);color:white" onclick="lieuTab('quetes',document.getElementById('ltab-quetes'))">
          Voir les quêtes →
        </button>
        <button class="acteur-cta" style="background:transparent;color:var(--moss);border:1px solid rgba(46,102,66,.25)" onclick="mmBubble('📋 Demande de financement envoyée au pilote')">
          Proposer un financement
        </button>

      </div>
    </div>
  `;
}

function lieuRenderQuetes() {
  const box = document.getElementById('lieu-quetes-list');
  if (!box) return;

  const solutions  = cData.solutions  || [];
  const espaces    = cData.espacesData || [];

  // ── 1. Quêtes depuis les solutions sélectionnées ──
  const solQuetes = solutions.map(nom => {
    const sol = SOLS.find(s => s.nom === nom);
    if (!sol || !sol.quete) return null;
    return { ...sol.quete, source: nom, sourceIc: sol.img || '✦', sourceCat: sol.cat };
  }).filter(Boolean);

  // ── 2. Quêtes depuis les espaces (ESPS) – dédupliquées par titre ──
  const espQuetes = [];
  const seenTitles = new Set(solQuetes.map(q => q.titre));
  espaces.forEach(esp => {
    const meta = ESPS.find(e => e.id === esp.eid);
    if (!meta || !meta.quetes) return;
    meta.quetes.forEach(q => {
      if (seenTitles.has(q.titre)) return;
      seenTitles.add(q.titre);
      espQuetes.push({ ...q, impact_quete: q.impact, source: esp.nom || meta.l, sourceIc: meta.ic || '📦', sourceCat: null, fromEspace: true, espCol: meta.c });
    });
  });

  const total = solQuetes.length + espQuetes.length;

  if (!total) {
    box.innerHTML = `<div class="acteur-section-title">⚡ Quêtes proposées</div>
      <div style="padding:2rem 1rem;text-align:center;border:1.5px dashed rgba(46,102,66,.18);border-radius:var(--r-lg)">
        <div style="font-size:1.4rem;margin-bottom:.5rem">⚡</div>
        <div style="font-size:.75rem;font-weight:600;color:var(--ink);margin-bottom:.25rem">Aucune quête générée</div>
        <div style="font-size:.65rem;color:var(--moss);opacity:.6">Sélectionnez des solutions et des espaces lors de la création du lieu pour générer des quêtes.</div>
      </div>`;
    return;
  }

  // ── Couleurs par catégorie solution ──
  const CAT_COLORS = {
    eau:'#2a7cb8', electricite:'#b08800', construction:'#8b6914',
    alimentaire:'#4a8c5c', dechets:'#2e9970', biodiversite:'#3a7a3a', social:'#7a5a9a'
  };

  // ── Rendu d'une carte quête ──
  function queteCard(q, idx) {
    const col   = q.fromEspace ? (q.espCol || '#4a8c5c') : (CAT_COLORS[q.sourceCat] || '#4a8c5c');
    const tokensEst = q.fromEspace ? 80 : 120;
    return `
    <div style="background:white;border:1.5px solid ${col}28;border-left:3px solid ${col};border-radius:var(--r-lg);padding:.85rem 1rem;transition:box-shadow .15s" onmouseover="this.style.boxShadow='0 4px 14px ${col}18'" onmouseout="this.style.boxShadow=''">
      <div style="display:flex;align-items:flex-start;gap:.6rem">
        <div style="width:34px;height:34px;border-radius:8px;background:${col}18;border:1px solid ${col}33;display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0">${q.sourceIc}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:.78rem;font-weight:700;color:var(--ink);line-height:1.3;margin-bottom:.3rem">${q.titre}</div>
          <div style="display:flex;flex-wrap:wrap;gap:.3rem;margin-bottom:.35rem">
            <span style="font-size:.6rem;color:${col};font-weight:600;background:${col}12;padding:.15rem .4rem;border-radius:100px;border:1px solid ${col}33">${q.fromEspace ? '🏗 ' : '⚡ '}${q.source}</span>
            ${q.duree ? `<span style="font-size:.6rem;color:var(--moss);opacity:.75">⏱ ${q.duree}</span>` : ''}
            ${q.nb    ? `<span style="font-size:.6rem;color:var(--moss);opacity:.75">👥 ${q.nb}</span>` : ''}
          </div>
          ${q.impact_quete ? `<div style="font-size:.65rem;color:${col};font-weight:600;background:${col}0d;padding:.3rem .55rem;border-radius:var(--r);border-left:2px solid ${col}44">📈 ${q.impact_quete}</div>` : ''}
        </div>
        <div style="flex-shrink:0;text-align:right">
          <div style="font-size:.72rem;font-weight:800;color:var(--amber)">+${tokensEst}</div>
          <div style="font-size:.52rem;color:var(--moss);opacity:.55">🌱 graines</div>
        </div>
      </div>
    </div>`;
  }

  let html = `<div class="acteur-section-title">⚡ Quêtes proposées · <span style="font-weight:400;opacity:.65">${total} quête${total > 1 ? 's' : ''} générée${total > 1 ? 's' : ''}</span></div>`;

  if (solQuetes.length) {
    html += `<div style="font-size:.6rem;font-weight:700;color:var(--moss);opacity:.55;text-transform:uppercase;letter-spacing:.1em;margin:.25rem 0 .5rem">Issues des solutions</div>`;
    html += `<div style="display:flex;flex-direction:column;gap:.5rem;margin-bottom:1.1rem">${solQuetes.map((q,i) => queteCard(q,i)).join('')}</div>`;
  }

  if (espQuetes.length) {
    html += `<div style="font-size:.6rem;font-weight:700;color:var(--moss);opacity:.55;text-transform:uppercase;letter-spacing:.1em;margin:.25rem 0 .5rem">Issues des espaces</div>`;
    html += `<div style="display:flex;flex-direction:column;gap:.5rem">${espQuetes.map((q,i) => queteCard(q,i)).join('')}</div>`;
  }

  box.innerHTML = html;
}

function lieuRenderEspaces() {
  const box = document.getElementById('lieu-espaces-content');
  if (!box) return;
  const espaces = cData.espacesData || [];

  if (!espaces.length) {
    box.innerHTML = `<div style="padding:3rem;text-align:center;font-size:.75rem;color:var(--moss);opacity:.45;border:1.5px dashed rgba(46,102,66,.15);border-radius:var(--r-lg)">Aucun espace renseigné pour ce lieu.</div>`;
    return;
  }

  const PHASE_LABELS = { idee:'💭 Idée', conception:'📐 Conception', chantier:'🏗 Chantier', operationnel:'🌿 Opérationnel' };

  const header = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.1rem">
      <div>
        <div style="font-size:.72rem;font-weight:800;color:var(--ink);text-transform:uppercase;letter-spacing:.07em">🏗 Espaces · ${espaces.length} espace${espaces.length > 1 ? 's' : ''}</div>
        <div style="font-size:.65rem;color:var(--moss);opacity:.6;margin-top:.15rem">Capacités, fonctions et flux de chaque espace</div>
      </div>
    </div>`;

  const cards = espaces.map(esp => {
    const meta = ESPS.find(e => e.id === esp.eid) || {};
    const col  = meta.c  || '#4a8c5c';
    const bg   = meta.bg || 'rgba(74,140,92,0.08)';
    const ic   = meta.ic || '📦';
    const typeLabel = meta.l || esp.eid || '—';

    // Fonctions
    const fnChips = (esp.fonctions || []).map((fid, i) => {
      const fn = FONCTIONS_ESPACE ? FONCTIONS_ESPACE.find(f => f.id === fid) : null;
      if (!fn) return '';
      return `<span style="display:inline-flex;align-items:center;gap:.2rem;padding:.2rem .5rem;border-radius:100px;background:${i===0?col+'22':'rgba(46,102,66,.07)'};border:1px solid ${i===0?col+'55':'rgba(46,102,66,.15)'};font-size:.6rem;font-weight:${i===0?700:500};color:${i===0?col:'var(--moss)'}">${fn.ic} ${fn.label}</span>`;
    }).join('');

    // Meta badges
    const metaBadges = [];
    if (esp.phase)    metaBadges.push(`<span style="font-size:.62rem;color:var(--fern);font-weight:600">${PHASE_LABELS[esp.phase] || esp.phase}</span>`);
    if (esp.capacite) metaBadges.push(`<span style="font-size:.62rem;color:var(--moss)">👥 <b>${esp.capacite}</b> pers.</span>`);
    if (esp.surface)  metaBadges.push(`<span style="font-size:.62rem;color:var(--moss)">📐 <b>${esp.surface}</b> m²</span>`);
    if (esp.acces)    metaBadges.push(`<span style="font-size:.62rem;color:var(--moss)">${ACCES_LABELS[esp.acces] || esp.acces}</span>`);

    // Flux
    const inputChips = (esp.inputs || []).map(fid => {
      const f = FLUX_CATALOG ? FLUX_CATALOG.find(x => x.id === fid) : null;
      return f ? `<span style="padding:.18rem .42rem;border-radius:100px;background:rgba(58,110,140,.1);border:1px solid rgba(58,110,140,.25);font-size:.58rem;color:#3a6e8c">${f.ic} ${f.label}</span>` : '';
    }).join('');
    const outputChips = (esp.outputs || []).map(fid => {
      const f = FLUX_CATALOG ? FLUX_CATALOG.find(x => x.id === fid) : null;
      return f ? `<span style="padding:.18rem .42rem;border-radius:100px;background:rgba(200,115,42,.1);border:1px solid rgba(200,115,42,.25);font-size:.58rem;color:#c8732a">${f.ic} ${f.label}</span>` : '';
    }).join('');

    // ESRS depuis ESPS
    const esrsBadges = (meta.esrs || []).map(e =>
      `<span style="padding:.18rem .42rem;border-radius:4px;background:rgba(122,110,168,.1);border:1px solid rgba(122,110,168,.25);font-size:.58rem;color:#7a6ea8;font-weight:600">${e}</span>`
    ).join('');

    // Solutions recommandées depuis ESPS
    const solsChips = (meta.sols || []).map(nom => {
      const s = SOLS.find(x => x.nom === nom);
      const active = (cData.solutions || []).includes(nom);
      return `<span style="padding:.2rem .48rem;border-radius:100px;background:${active?'rgba(74,140,92,.18)':'rgba(46,102,66,.06)'};border:1px solid ${active?'rgba(74,140,92,.45)':'rgba(46,102,66,.15)'};font-size:.6rem;color:${active?'var(--fern)':'var(--moss)'};font-weight:${active?700:400}">${s?s.img||'✦':'✦'} ${nom}${active?' ✓':''}</span>`;
    }).join('');

    // Indicateurs
    const indicRows = (meta.indicateurs || []).map(ind =>
      `<div style="display:flex;align-items:center;gap:.4rem;padding:.3rem 0;border-bottom:1px solid rgba(46,102,66,.06)">
        <span style="width:6px;height:6px;border-radius:50%;background:${col};flex-shrink:0"></span>
        <span style="font-size:.65rem;color:var(--ink);opacity:.8">${ind}</span>
      </div>`
    ).join('');

    // Activités
    const activitesHtml = (esp.activites || []).length
      ? (esp.activites.map(a => `<span style="padding:.2rem .48rem;border-radius:100px;background:rgba(46,102,66,.06);border:1px solid rgba(46,102,66,.12);font-size:.6rem;color:var(--moss)">${a}</span>`).join(''))
      : '';

    return `
    <div style="background:white;border:1.5px solid ${col}33;border-radius:var(--r-xl);overflow:hidden;margin-bottom:.85rem;box-shadow:0 2px 10px rgba(46,102,66,.05)">

      <!-- Card header -->
      <div style="background:${bg};padding:.85rem 1.1rem;border-bottom:1px solid ${col}22;display:flex;align-items:center;gap:.75rem">
        <div style="width:42px;height:42px;border-radius:var(--r);background:white;border:1.5px solid ${col}44;display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0;box-shadow:0 2px 6px ${col}22">${ic}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:.82rem;font-weight:800;color:var(--ink)">${esp.nom || typeLabel}</div>
          <div style="font-size:.62rem;color:${col};font-weight:600;opacity:.85;margin-top:.08rem">${typeLabel}${esp.nom && esp.nom !== typeLabel ? '' : ''}</div>
        </div>
        ${metaBadges.length ? `<div style="display:flex;flex-direction:column;align-items:flex-end;gap:.2rem">${metaBadges.join('')}</div>` : ''}
      </div>

      <!-- Card body -->
      <div style="padding:.85rem 1.1rem;display:flex;flex-direction:column;gap:.75rem">

        ${fnChips ? `<div>
          <div style="font-size:.58rem;font-weight:700;color:var(--moss);opacity:.6;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.3rem">Fonctions</div>
          <div style="display:flex;flex-wrap:wrap;gap:.25rem">${fnChips}</div>
        </div>` : ''}

        ${activitesHtml ? `<div>
          <div style="font-size:.58rem;font-weight:700;color:var(--moss);opacity:.6;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.3rem">Activités</div>
          <div style="display:flex;flex-wrap:wrap;gap:.25rem">${activitesHtml}</div>
        </div>` : ''}

        ${(inputChips || outputChips) ? `<div style="display:flex;flex-direction:column;gap:.35rem">
          ${inputChips  ? `<div style="display:flex;align-items:center;gap:.4rem;flex-wrap:wrap"><span style="font-size:.58rem;font-weight:700;color:#3a6e8c;opacity:.75;text-transform:uppercase;letter-spacing:.07em;flex-shrink:0;width:28px">IN</span>${inputChips}</div>` : ''}
          ${outputChips ? `<div style="display:flex;align-items:center;gap:.4rem;flex-wrap:wrap"><span style="font-size:.58rem;font-weight:700;color:#c8732a;opacity:.75;text-transform:uppercase;letter-spacing:.07em;flex-shrink:0;width:28px">OUT</span>${outputChips}</div>` : ''}
        </div>` : ''}

        ${solsChips ? `<div>
          <div style="font-size:.58rem;font-weight:700;color:var(--moss);opacity:.6;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.3rem">Solutions recommandées</div>
          <div style="display:flex;flex-wrap:wrap;gap:.25rem">${solsChips}</div>
        </div>` : ''}

        ${indicRows ? `<div>
          <div style="font-size:.58rem;font-weight:700;color:var(--moss);opacity:.6;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.25rem">Indicateurs de suivi</div>
          <div style="border:1px solid rgba(46,102,66,.1);border-radius:var(--r);overflow:hidden;background:rgba(46,102,66,.02)">${indicRows}</div>
        </div>` : ''}

        ${esrsBadges ? `<div>
          <div style="font-size:.58rem;font-weight:700;color:var(--moss);opacity:.6;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.3rem">Cadres ESRS couverts</div>
          <div style="display:flex;flex-wrap:wrap;gap:.25rem">${esrsBadges}</div>
        </div>` : ''}

        ${esp.notes ? `<div style="font-size:.65rem;color:var(--moss);opacity:.7;font-style:italic;padding:.5rem .7rem;background:rgba(46,102,66,.04);border-radius:var(--r);border-left:2px solid ${col}55">${esp.notes}</div>` : ''}

      </div>
    </div>`;
  }).join('');

  box.innerHTML = header + cards;
}

function closeLieuModal() {
  document.getElementById('lieu-modal').style.display = 'none';
  document.body.style.overflow = '';
  cStep = 0;
  cData = _CDATA_EMPTY();
}

function lieuTab(id, btn) {
  document.querySelectorAll('.lieu-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.lieu-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('lieu-panel-' + id).classList.add('active');
  if (id === 'ecosysteme') lieuRenderMindmap();
  if (id === 'impact') lieuRenderImpact();
}

function lieuMmW() { return document.getElementById('lieu-mm-nodes').parentElement.offsetWidth; }
function lieuMmH() { return document.getElementById('lieu-mm-nodes').parentElement.offsetHeight; }

function lieuMmAdd(id, label, x, y, cls, col, bg) {
  const el = document.createElement('div');
  el.className = 'mm-node mm-' + cls; el.id = 'lmn-' + id;
  el.style.left = x + 'px'; el.style.top = y + 'px';
  if (col) { el.style.color = col; el.style.borderColor = col + '55'; el.style.background = bg || col + '18'; }
  el.textContent = label; el.style.opacity = '0'; el.style.transform = 'translate(-50%,-50%) scale(.7)';
  document.getElementById('lieu-mm-nodes').appendChild(el);
  requestAnimationFrame(() => { el.style.transition = 'opacity .35s,transform .35s'; el.style.opacity = '1'; el.style.transform = 'translate(-50%,-50%) scale(1)'; });
  return el;
}

function lieuMmLine(x1, y1, x2, y2, col, dash) {
  const l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  l.setAttribute('x1', x1); l.setAttribute('y1', y1); l.setAttribute('x2', x2); l.setAttribute('y2', y2);
  l.setAttribute('stroke', col || 'rgba(46,102,66,.32)');
  l.setAttribute('stroke-width', dash ? '1.4' : '1.8');
  if (dash) l.setAttribute('stroke-dasharray', '6,6');
  l.setAttribute('stroke-linecap', 'round');
  l.setAttribute('opacity', dash ? '0.7' : '0.95');
  document.getElementById('lieu-mm-svg').appendChild(l);
}

function lieuRenderMindmap() {
  const nodesEl = document.getElementById('lieu-mm-nodes');
  const svgEl   = document.getElementById('lieu-mm-svg');
  if (!nodesEl || !svgEl) return;

  const canvas = document.getElementById('lieu-mm-canvas');
  if (canvas) canvas.style.transform = '';
  nodesEl.innerHTML = '';
  svgEl.innerHTML   = '';

  const FN_TO_ESPS = {cuisine:'cuisine',cafe:'cafe',cantine:'cafe',coworking:'bureau',reunion:'bureau',atelier:'atelier',fablab:'fablab',scene:'salle',expo:'salle',boutique:'boutique',biblio:'salle',formation:'salle',jardin:'jardin',serre:'serre',compost:'jardin',hebergement:'dortoir',sport:'salle',meditation:'salle',stockage:'bureau',autre:'cafe',elec_gestion:'dortoir',renouv_prod:'dortoir',therm_gestion:'dortoir',eau_gestion:'serre',ecoconstruct:'atelier',dechets_gestion:'jardin',mobilite:'bureau',gouvernance:'bureau',numerique:'bureau'};

  const rawEspaces = cData.espacesData || [];
  if (!rawEspaces.length) {
    nodesEl.innerHTML = `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:.75rem;color:var(--moss);opacity:.45">Aucun espace défini pour ce lieu</div>`;
    return;
  }

  const espItems = rawEspaces.map(esp => {
    const fnId  = esp.fonctions && esp.fonctions[0];
    const fn    = fnId ? FONCTIONS_ESPACE.find(f => f.id === fnId) : null;
    const style = MM_DOMAINE_STYLE[fn?.domaine] || MM_DOMAINE_STYLE.Autre;
    return { esp, eid: FN_TO_ESPS[fnId] || 'cafe', ic: fn?.ic || '📦', c: style.c, bg: style.bg };
  });

  const byEsp = {};
  espItems.forEach((_, i) => {
    const noms = (cData.solsByEspace && cData.solsByEspace[i]) || [];
    byEsp[i] = noms.map(n => SOLS.find(s => s.nom === n)).filter(Boolean);
  });

  const W = lieuMmW(), H = lieuMmH(), cx = W / 2, cy = H / 2;
  lieuMmAdd('c', cData.nom || 'Mon lieu', cx, cy, 'center');

  espItems.forEach((item, i) => {
    const { esp, ic, c: col, bg } = item;
    const label = ic + ' ' + (esp.nom || item.eid);
    const a  = (2 * Math.PI / espItems.length) * i - Math.PI / 2;
    const re = Math.min(W, H) * .25;
    const ex = cx + re * Math.cos(a), ey = cy + re * Math.sin(a);
    const sols = byEsp[i] || [];
    setTimeout(() => {
      lieuMmLine(cx, cy, ex, ey, col + '99');
      lieuMmAdd('e-' + i, label, ex, ey, 'espace', col, bg);
      sols.forEach((sol, j) => {
        const sa = a + (j - (sols.length - 1) / 2) * .48;
        const rs = re + 100;
        const sx = cx + rs * Math.cos(sa), sy = cy + rs * Math.sin(sa);
        setTimeout(() => {
          lieuMmLine(ex, ey, sx, sy, col + '44', true);
          const nd = lieuMmAdd('sol-' + i + '-' + j, sol.img + ' ' + sol.nom, sx, sy, 'sol', col, bg);
          nd.style.fontWeight = '600';
          nd.classList.add('sol-sel');
          nd.title = sol.impact || '';
          nd.style.cursor = 'default';
        }, j * 140);
      });
    }, i * 220);
  });

  renderLieuFluxTable();
}

function renderLieuFluxTable() {
  const table  = document.getElementById('lieu-flux-table');
  const inDiv  = document.getElementById('lieu-flux-inputs');
  const outDiv = document.getElementById('lieu-flux-outputs');
  if (!table || !inDiv || !outDiv) return;

  const espaces = cData.espacesData || [];
  const inputMap  = new Map();
  const outputMap = new Map();

  espaces.forEach(esp => {
    (esp.inputs  || []).forEach(fid => {
      if (!inputMap.has(fid))  inputMap.set(fid, new Set());
      inputMap.get(fid).add(esp.nom || '—');
    });
    (esp.outputs || []).forEach(fid => {
      if (!outputMap.has(fid)) outputMap.set(fid, new Set());
      outputMap.get(fid).add(esp.nom || '—');
    });
  });

  if (inputMap.size === 0 && outputMap.size === 0) { table.style.display = 'none'; return; }

  const renderRows = (map, type) => {
    if (map.size === 0) return `<div style="font-size:.65rem;color:var(--moss);opacity:.4;padding:.25rem 0">Aucun flux renseigné</div>`;
    return [...map.entries()].map(([fid, names]) => {
      const f = FLUX_CATALOG.find(x => x.id === fid);
      if (!f) return '';
      const color = type === 'input' ? '#3a7fa0' : '#a06020';
      const bg    = type === 'input' ? 'rgba(100,180,220,.1)' : 'rgba(220,140,40,.08)';
      return `<div style="margin-bottom:.45rem">
        <div style="display:inline-flex;align-items:center;gap:.3rem;background:${bg};color:${color};border-radius:100px;padding:.18rem .55rem;font-weight:600;font-size:.67rem">${f.ic} ${f.label}</div>
        <div style="font-size:.58rem;color:var(--moss);opacity:.55;margin-top:.15rem;padding-left:.3rem">${[...names].join(', ')}</div>
      </div>`;
    }).join('');
  };

  inDiv.innerHTML  = renderRows(inputMap,  'input');
  outDiv.innerHTML = renderRows(outputMap, 'output');
  table.style.display = 'block';
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById('screen-'+id).classList.add('active');
  updateActiveNav(id);
  document.querySelector('.main').scrollTo(0,0);

  if (!WIZARD_SCREENS.includes(id)) navWizardClear();

  if(id==='bdd'){ initBDD(); setTimeout(bddUpdateContext, 50); }
  if(id==='creer') initCreer();
  const _dfh = document.getElementById('deva-fiche-hint'); if (_dfh) _dfh.style.display = (id==='creer') ? 'block' : 'none';
  if(id==='semeur') { semeurTab('apercu', document.getElementById('stab-apercu')); }
  if(id==='carte') setTimeout(initRealMap, 80);

  if(id==='quete') { batTab('apercu', document.getElementById('btab-apercu')); setTimeout(batInitDashboard, 60); }
  if(id==='marketplace') setTimeout(mktRender, 50);
  if(id==='pilote') { piloteTab('apercu', document.getElementById('ptab-apercu')); }
  if(id==='fiche-bat') setTimeout(initFicheBat, 80);
  if(id==='fiche-sem') setTimeout(initFicheSem, 80);
  if(id==='quete-detail') setTimeout(renderQueteDetail, 50);

  renderProfileContext();
}

/* ─── DATA ─── */
const SOLS=[
  {nom:'Récupération eau de pluie',cat:'eau',cplx:'facile',impact:'−18 000 L/an',co2:0,tok:50,img:'💧',
   desc:'Système de collecte des eaux pluviales via les gouttières, stockées dans une cuve enterrée ou aérienne (500 à 5 000 L). L\'eau récupérée couvre l\'arrosage, les sanitaires et le nettoyage, réduisant la consommation d\'eau potable de 40 à 60%. Solution simple, sans permis, amortie en 2 à 4 ans selon l\'usage.',
   avantages:['Économie jusqu\'à 18 000 L d\'eau potable par an','ROI en 2–4 ans, entretien quasi nul','Compatible avec toute toiture et tout type de lieu'],
   budget:'800–3 500 €',
   ind:['Eau économisée L/an','Autonomie eau %'],
   esrs:['ESRS E3'],esrs_detail:'Réduit la consommation d\'eau et les rejets, indicateur eau GRI 303.',
   photo:'https://images.unsplash.com/photo-1525498128493-380d1990a112?w=800&q=80&auto=format&fit=crop',
   lieux:['ferme','jardin','ecolieu','habitat','tiers','cafe','epicerie','fablab','repair','ressourcerie','coworking','incubateur','ecole','autre'],
   quete:{titre:'Installer une cuve de récupération',duree:'1 journée',nb:'3–5 pers.',impact_quete:'+8 pts eau · −18 000 L/an'}},

  {nom:'Phytoépuration',cat:'eau',cplx:'moyen',impact:'100% eaux grises traitées',co2:.2,tok:70,img:'🌾',
   desc:'Traitement naturel des eaux grises (vaisselle, douches) par filtration à travers des zones végétales plantées de roseaux, iris et joncs. Élimine 80 à 95 % des polluants organiques sans produit chimique ni énergie. Crée un espace paysager vivant qui valorise les eaux usées en ressource pour le sol.',
   avantages:['Zéro énergie et zéro consommable chimique','Épure 100 % des eaux grises du site','Double fonction : traitement + espace de biodiversité'],
   budget:'2 500–8 000 €',
   ind:['Eaux grises valorisées L/an','Surface végétalisée m²'],
   esrs:['ESRS E2','ESRS E3'],esrs_detail:'Supprime les rejets polluants (E2) et valorise la ressource eau (E3).',
   photo:'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80&auto=format&fit=crop',
   lieux:['ferme','ecolieu','habitat','jardin','tiers'],
   quete:{titre:'Créer une zone de phytoépuration',duree:'2 week-ends',nb:'4–8 pers.',impact_quete:'+12 pts env. · 100% eaux grises traitées'}},

  {nom:'Toilettes sèches',cat:'eau',cplx:'facile',impact:'−30 000 L/an',co2:.1,tok:30,img:'🌱',
   desc:'Système de WC sans eau : les matières fécales sont couvertes de sciure ou de copeaux et compostées en cuve pendant 12 mois. Économise 6 à 9 litres par chasse, soit 30 000 L par an pour un usage collectif régulier. Le compost produit est utilisable sur les zones non alimentaires du site.',
   avantages:['−30 000 L d\'eau potable économisés par an','Produit 100–200 kg de compost exploitable','Installation en 1 journée, sans réseau d\'assainissement'],
   budget:'400–2 000 €',
   ind:['Eau économisée L/an','Compost produit kg/an'],
   esrs:['ESRS E3','ESRS E5'],esrs_detail:'Économie d\'eau (E3) et valorisation matière organique en circuit fermé (E5).',
   photo:'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&auto=format&fit=crop',
   lieux:['ferme','ecolieu','habitat','jardin','tiers','repair','ressourcerie'],
   quete:{titre:'Installer et documenter les toilettes sèches',duree:'1 journée',nb:'2–4 pers.',impact_quete:'+6 pts eau · compost certifiable'}},

  {nom:'Panneaux solaires PV',cat:'electricite',cplx:'moyen',impact:'3 500 kWh/an',co2:.9,tok:90,img:'☀️',
   desc:'Installation de modules photovoltaïques en toiture pour produire de l\'électricité directement consommée sur site (autoconsommation) ou réinjectée sur le réseau. Une installation de 6 kWc produit environ 6 000 kWh/an en région tempérée, couvrant 30 à 80 % des besoins selon le profil de consommation. ROI entre 7 et 10 ans, durée de vie 25 à 30 ans.',
   avantages:['Jusqu\'à 80 % d\'autonomie électrique en journée','−900 kgCO₂/an évités dès la première année','Valorisable en ESRS E1 pour tout rapport CSRD'],
   budget:'6 000–18 000 € (installation 6 kWc)',
   ind:['Énergie produite kWh/an','CO₂ évité kgCO2/an'],
   esrs:['ESRS E1'],esrs_detail:'Réduction directe des émissions Scope 2, contribue à la trajectoire Net-Zero SBTi.',
   photo:'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80&auto=format&fit=crop',
   lieux:['ferme','ecolieu','habitat','tiers','fablab','coworking','incubateur','cafe','epicerie','repair','ecole'],
   quete:{titre:'Chantier participatif d\'installation solaire',duree:'2 jours',nb:'6–10 pers.',impact_quete:'+15 pts énergie · −900 kgCO₂/an'}},

  {nom:'Chauffe-eau solaire',cat:'electricite',cplx:'moyen',impact:'−0.6t CO₂/an',co2:.6,tok:60,img:'🌡',
   desc:'Capteurs solaires thermiques installés en toiture qui chauffent l\'eau sanitaire via un fluide caloporteur. Couvrent 60 à 80 % des besoins annuels en eau chaude, avec une résistance électrique de complément pour les périodes nuageuses. Solution mature, fiable, avec des aides ANAH et CEE disponibles.',
   avantages:['60–80 % des besoins eau chaude couverts par le soleil','−600 kgCO₂/an évités sur le poste eau chaude','Aides CEE et MaPrimeRénov\' disponibles'],
   budget:'3 000–7 000 € (après aides)',
   ind:['CO₂ évité kgCO2/an','Autonomie énergie %'],
   esrs:['ESRS E1'],esrs_detail:'Décarbonation du poste eau chaude sanitaire, auditable pour le rapport CSRD E1.',
   photo:'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&q=80&auto=format&fit=crop',
   lieux:['ferme','ecolieu','habitat','tiers','cafe','epicerie'],
   quete:{titre:'Audit & installation chauffe-eau solaire',duree:'1 journée',nb:'2–4 pers.',impact_quete:'+8 pts énergie · −600 kgCO₂/an'}},

  {nom:'Isolation paille',cat:'construction',cplx:'moyen',impact:'−40% chauffage',co2:1.2,tok:80,img:'🏗',
   desc:'Technique de construction biosourcée utilisant des bottes de paille de blé ou de seigle comme isolant dans une ossature bois, recouvertes d\'enduit terre-chaux. Réduit les besoins de chauffage de 35 à 50 %. Matériau local à très faible énergie grise, séquestrant du carbone sur toute la durée de vie du bâtiment.',
   avantages:['−40 % de consommation de chauffage en moyenne','Matériau biosourcé local à énergie grise quasi nulle','Chantier participatif fédérateur (8–15 pers.)'],
   budget:'80–150 €/m² (hors main-d\'œuvre bénévole)',
   ind:['CO₂ évité kgCO2/an','Énergie produite kWh/an'],
   esrs:['ESRS E1','ESRS E5'],esrs_detail:'Matériau biosourcé à faible énergie grise (E5) · forte réduction Scope 1 chauffage (E1).',
   photo:'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80&auto=format&fit=crop',
   lieux:['ferme','ecolieu','habitat'],
   quete:{titre:'Chantier d\'isolation paille participatif',duree:'3 week-ends',nb:'8–15 pers.',impact_quete:'+20 pts construction · −1,2 tCO₂/an'}},

  {nom:'Toiture végétalisée',cat:'construction',cplx:'moyen',impact:'+biodiversité +isolation',co2:.3,tok:65,img:'🌿',
   desc:'Couverture végétale extensive (sedums, graminées) sur toiture plate ou faiblement pentue, sur substrat drainant de 8 à 15 cm. Réduit les besoins de climatisation en été, retient 70 à 80 % des eaux pluviales et crée un habitat pour les pollinisateurs en milieu urbain. Durée de vie de la membrane allongée de 15 à 20 ans.',
   avantages:['Rétention de 70–80 % des eaux pluviales','−2 à 3 °C en été sous le toit végétalisé','Refuge pour pollinisateurs et oiseaux urbains'],
   budget:'80–200 €/m² (substrat + végétaux + étanchéité)',
   ind:['Surface végétalisée m²','Score biodiversité'],
   esrs:['ESRS E4','ESRS E3'],esrs_detail:'Favorise la biodiversité urbaine (E4) et la gestion des eaux pluviales (E3).',
   photo:'https://images.unsplash.com/photo-1542621334-a254cf47733d?w=800&q=80&auto=format&fit=crop',
   lieux:['tiers','coworking','incubateur','fablab','cafe','epicerie','ecolieu','habitat','ecole'],
   quete:{titre:'Végétaliser la toiture collective',duree:'2 journées',nb:'4–6 pers.',impact_quete:'+10 pts biodiversité · rétention 80% eaux pluviales'}},

  {nom:'Réemploi matériaux',cat:'construction',cplx:'facile',impact:'−60% déchets chantier',co2:.8,tok:40,img:'♻️',
   desc:'Pratique consistant à récupérer des matériaux issus de déconstructions (bois, briques, menuiseries, tuiles) pour les réintégrer dans un nouveau chantier. Réduit de 50 à 70 % les coûts de matières premières et divise par deux l\'empreinte carbone du chantier. Filière en plein développement avec de nombreuses ressourceries et plateformes locales.',
   avantages:['−50 à 70 % sur le coût des matériaux','−800 kgCO₂ évités par chantier','Démarche traçable et certifiable ESRS E5'],
   budget:'Économies de 30–60 % vs matériaux neufs',
   ind:['Déchets détournés kg/an','CO₂ évité kgCO2/an'],
   esrs:['ESRS E5'],esrs_detail:'Contribue directement aux indicateurs économie circulaire ESRS E5 (déchets, réemploi).',
   photo:'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&q=80&auto=format&fit=crop',
   lieux:['fablab','repair','ressourcerie','tiers','ecolieu','ferme','habitat'],
   quete:{titre:'Organiser un chantier de réemploi',duree:'1 journée',nb:'3–6 pers.',impact_quete:'+10 pts déchets · −800 kgCO₂/chantier'}},

  {nom:'Jardin permaculture',cat:'alimentaire',cplx:'moyen',impact:'~200 kg/an',co2:.4,tok:55,img:'🥦',
   desc:'Conception d\'un jardin en imitant les écosystèmes naturels : association de plantes compagnes, buttes, guildes d\'arbres fruitiers, couverture permanente du sol. Produit en moyenne 200 kg de légumes par an sur 100 m² sans intrants chimiques. Le système devient plus productif et résilient chaque année grâce à l\'enrichissement naturel du sol.',
   avantages:['~200 kg de légumes/an sur 100 m² sans engrais','Sol vivant et de plus en plus fertile chaque saison','Lieu pédagogique et fédérateur pour la communauté'],
   budget:'500–2 000 € (plants, paillage, outils)',
   ind:['Production alimentaire kg/an','Autonomie alimentaire %'],
   esrs:['ESRS E4','ESRS S3'],esrs_detail:'Soutient la biodiversité locale (E4) et l\'alimentation des communautés (S3, impact territorial).',
   photo:'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80&auto=format&fit=crop',
   lieux:['ferme','jardin','ecolieu','tiers','habitat','ecole'],
   quete:{titre:'Créer un jardin en permaculture',duree:'3 séances',nb:'4–10 pers.',impact_quete:'+12 pts alimentation · +8 pts biodiversité'}},

  {nom:'Potager en buttes',cat:'alimentaire',cplx:'facile',impact:'~80 kg/an',co2:.2,tok:35,img:'🌻',
   desc:'Technique de culture sur buttes de bois en décomposition (bois raméal fragmenté, bûches, compost) inspirée de la méthode Hügelkultur. Le bois stocke l\'humidité et libère des nutriments sur plusieurs années, réduisant l\'arrosage de 60 à 70 %. Idéal pour démarrer rapidement avec peu de moyens sur un sol pauvre.',
   avantages:['Arrosage réduit de 60–70 % grâce au bois','Valorise les déchets de bois du site','Mise en place en une journée, productif dès la 1ère saison'],
   budget:'100–400 € (bois récupéré + semences)',
   ind:['Production alimentaire kg/an','Eau économisée L/an'],
   esrs:['ESRS E3','ESRS S3'],esrs_detail:'Réduction de l\'irrigation (E3) · production alimentaire locale pour la communauté (S3).',
   photo:'https://images.unsplash.com/photo-1592419044706-39796d40f98c?w=800&q=80&auto=format&fit=crop',
   lieux:['ferme','jardin','ecolieu','tiers','habitat','ecole'],
   quete:{titre:'Construire les premières buttes maraîchères',duree:'1 journée',nb:'3–6 pers.',impact_quete:'+6 pts alimentation · −5 000 L eau/an'}},

  {nom:'Compostage partagé',cat:'dechets',cplx:'facile',impact:'−500 kg déchets/an',co2:.3,tok:30,img:'🌍',
   desc:'Point de collecte collectif des biodéchets (épluchures, marc de café, restes alimentaires) transformés en compost par décomposition aérobie sur 3 à 6 mois. Détourne 500 à 800 kg de déchets organiques par an de la poubelle grise, produisant 100 à 150 kg de compost mûr utilisable au jardin. Fort levier de sensibilisation et de lien social.',
   avantages:['500–800 kg de déchets organiques valorisés par an','100–150 kg de compost gratuit pour le jardin','Action fédératrice : implique toute la communauté du lieu'],
   budget:'200–800 € (composteur collectif + formation)',
   ind:['Déchets détournés kg/an','Compost produit kg/an'],
   esrs:['ESRS E5','ESRS S3'],esrs_detail:'Détournement déchets organiques (E5) · mobilisation de la communauté locale (S3).',
   photo:'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800&q=80&auto=format&fit=crop',
   lieux:['ferme','jardin','ecolieu','tiers','cafe','epicerie','ecole','habitat','coworking','fablab','ressourcerie'],
   quete:{titre:'Lancer le compostage collectif',duree:'2h + suivi mensuel',nb:'2–5 pers.',impact_quete:'+8 pts déchets · 500 kg/an valorisés'}},

  {nom:'Haie champêtre',cat:'biodiversite',cplx:'facile',impact:'+12 espèces',co2:.5,tok:45,img:'🌳',
   desc:'Plantation d\'une haie multi-espèces avec des essences locales (cornouiller, prunellier, aubépine, sureau…) qui accueille nidification, abri et alimentation pour la faune sauvage. Séquestre du carbone, protège des vents dominants et réduit l\'érosion des sols. Entretien minimal une fois les arbustes établis après 2 à 3 ans.',
   avantages:['+12 espèces animales accueillies dès la 2ème année','Séquestre 200–500 kg de CO₂/an sur 50 m linéaires','Brise-vent réduisant les besoins de chauffage de 5–10 %'],
   budget:'15–40 €/m linéaire (plants + pose)',
   ind:['Score biodiversité','Espèces favorisées nb'],
   esrs:['ESRS E4'],esrs_detail:'Indicateur direct ESRS E4, restauration d\'écosystèmes, séquestration carbone.',
   photo:'https://images.unsplash.com/photo-1490750967868-88df5691cc68?w=800&q=80&auto=format&fit=crop',
   lieux:['ferme','jardin','ecolieu','habitat'],
   quete:{titre:'Planter la haie champêtre',duree:'1 journée',nb:'4–8 pers.',impact_quete:'+15 pts biodiversité · +12 espèces'}},

  {nom:'Mare écologique',cat:'biodiversite',cplx:'moyen',impact:'+amphibiens & insectes',co2:.1,tok:60,img:'🐸',
   desc:'Création d\'un plan d\'eau permanent ou temporaire avec berges en pente douce et végétation aquatique locale. Habitat essentiel pour les amphibiens, libellules, oiseaux et insectes pollinisateurs. La mare joue aussi un rôle de régulation hydraulique et de filtration naturelle des eaux de ruissellement du site.',
   avantages:['Habitat pour 8+ espèces d\'amphibiens et d\'insectes','Régule les eaux de ruissellement du site','Aucun entretien après la 1ère saison si bien conçue'],
   budget:'800–3 000 € (terrassement + végétalisation)',
   ind:['Score biodiversité','Espèces favorisées nb'],
   esrs:['ESRS E4','ESRS E3'],esrs_detail:'Restauration d\'habitats aquatiques (E4) · gestion naturelle des eaux (E3).',
   photo:'https://images.unsplash.com/photo-1473621038190-1f1e0fe63ee9?w=800&q=80&auto=format&fit=crop',
   lieux:['ferme','jardin','ecolieu','habitat'],
   quete:{titre:'Creuser et aménager la mare',duree:'2 journées',nb:'4–6 pers.',impact_quete:'+18 pts biodiversité · habitat pour 8+ espèces'}},

  {nom:'Repair café',cat:'social',cplx:'facile',impact:'~200 objets réparés/an',co2:.8,tok:35,img:'🔧',
   desc:'Événement mensuel ouvert à tous où des bénévoles compétents aident les habitants à réparer leurs appareils électroménagers, vêtements, vélos et objets du quotidien. Chaque objet réparé évite en moyenne 4 kg de CO₂. Crée un fort lien social intergénérationnel et valorise les savoir-faire locaux tout en réduisant les déchets.',
   avantages:['200 objets réparés/an · −800 kgCO₂ évités','Aucun investissement initial, juste de l\'espace et des bénévoles','Mobilise 20–50 personnes/mois dans la communauté'],
   budget:'0–500 € (outillage de base)',
   ind:['Nb personnes impliquées','Événements collectifs nb/mois'],
   esrs:['ESRS E5','ESRS S1','ESRS S3'],esrs_detail:'Économie circulaire (E5) · formation & montée en compétences (S1) · cohésion communautaire (S3).',
   photo:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop',
   lieux:['fablab','repair','ressourcerie','tiers','cafe','ecole'],
   quete:{titre:'Organiser le premier Repair Café',duree:'1 après-midi/mois',nb:'3–8 pers.',impact_quete:'+10 pts social · 200 objets/an · −800 kgCO₂'}},

  {nom:'AMAP circuit court',cat:'social',cplx:'facile',impact:'90% local',co2:.6,tok:30,img:'🥕',
   desc:'Association pour le Maintien de l\'Agriculture Paysanne : contrat direct entre le lieu et un ou plusieurs agriculteurs locaux qui livrent chaque semaine un panier de saison. Supprime les intermédiaires, garantit un revenu fixe à l\'agriculteur et réduit de 60 à 80 % les émissions liées au transport alimentaire. Renforce l\'ancrage territorial et la résilience alimentaire du lieu.',
   avantages:['90 % de l\'alimentation d\'origine locale et traçable','−60 % d\'émissions CO₂ liées au transport des aliments','Garantit un revenu équitable à l\'agriculteur partenaire'],
   budget:'0 € (rémunéré par les adhérents)',
   ind:['Part circuits courts %','Autonomie alimentaire %'],
   esrs:['ESRS S2','ESRS S3'],esrs_detail:'Chaîne de valeur locale et équitable (S2) · accès à l\'alimentation saine pour la communauté (S3).',
   photo:'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80&auto=format&fit=crop',
   lieux:['cafe','epicerie','tiers','ecole','coworking','ecolieu','ferme'],
   quete:{titre:'Monter le partenariat AMAP',duree:'2 réunions',nb:'2–4 pers.',impact_quete:'+12 pts social · 90% approvisionnement local'}},
];

/* ── Méta ODD (couleurs officielles ONU) ── */
const ODD_META={
  1:{c:'#E5243B',l:'Pas de pauvreté'},
  2:{c:'#DDA63A',l:'Faim zéro'},
  3:{c:'#4C9F38',l:'Bonne santé'},
  4:{c:'#C5192D',l:'Éducation de qualité'},
  5:{c:'#FF3A21',l:'Égalité des sexes'},
  6:{c:'#26BDE2',l:'Eau propre'},
  7:{c:'#FCC30B',l:'Énergie propre'},
  8:{c:'#A21942',l:'Emploi & croissance'},
  9:{c:'#FD6925',l:'Innovation'},
  10:{c:'#DD1367',l:'Inégalités réduites'},
  11:{c:'#FD9D24',l:'Villes durables'},
  12:{c:'#BF8B2E',l:'Conso. responsable'},
  13:{c:'#3F7E44',l:'Action climatique'},
  14:{c:'#0A97D9',l:'Vie aquatique'},
  15:{c:'#56C02B',l:'Vie terrestre'},
  16:{c:'#00689D',l:'Paix & justice'},
  17:{c:'#19486A',l:'Partenariats'}
};

/* ── Indicateurs étendus par solution ── */
const SOLS_INDICATORS={
  'Récupération eau de pluie':{
    odd:[6,13,11],
    perma:{ethiques:['🌍 Soin de la Terre','👥 Soin des Humains'],principe:'Capter & stocker l\'énergie · Ne pas produire de déchets'},
    gri:['GRI 303-3 (Eau collectée)','GRI 305-5 (Émissions évitées)'],
    plan:[
      {ic:'📐',titre:'Évaluation des surfaces',desc:'Mesurer la surface de toiture collectrice et calculer le volume d\'eau récupérable selon la pluviométrie locale.'},
      {ic:'🛒',titre:'Choix & commande de la cuve',desc:'Sélectionner une cuve enterrée ou aérienne (500–5 000 L) selon l\'usage prévu (arrosage, sanitaires, etc.).'},
      {ic:'⚙️',titre:'Installation & raccordement',desc:'Poser la cuve, connecter les gouttières via un filtre anti-feuilles et prévoir un trop-plein vers le sol.'},
      {ic:'🧪',titre:'Test & mise en service',desc:'Vérifier l\'étanchéité, tester la pompe si besoin et documenter le volume collecté le 1er mois.'},
      {ic:'📊',titre:'Suivi & certification CUMUL',desc:'Relever la consommation d\'eau évitée chaque trimestre et saisir les indicateurs dans le tableau de bord lieu.'},
    ],
    materiel:['Cuve 1 000–3 000 L (PE ou béton)','Kit filtre gouttière','Raccord descente pluviale','Pompe immergée (si distribution)','Tuyaux PE ⌀25','Regard de visite','Débitmètre ou jauge de niveau']},

  'Phytoépuration':{
    odd:[6,15,3],
    perma:{ethiques:['🌍 Soin de la Terre'],principe:'Utiliser les ressources renouvelables · Observer et interagir'},
    gri:['GRI 303-2 (Gestion impacts eau)','GRI 304-2 (Biodiversité)'],
    plan:[
      {ic:'🔬',titre:'Analyse des eaux grises',desc:'Caractériser le flux : volume/jour, charge organique, détergents. Déterminer le dimensionnement de la zone de traitement.'},
      {ic:'📐',titre:'Conception du système',desc:'Choisir entre filtre planté vertical (eaux légères) et bassin à macrophytes (eaux chargées). Dessiner le plan avec pentes et zones.'},
      {ic:'⛏️',titre:'Terrassement & étanchéité',desc:'Creuser les bassins, poser la géomembrane EPDM, installer le substrat drainant (gravier 10/20, sable, zéolite).'},
      {ic:'🌱',titre:'Plantation des espèces filtrantes',desc:'Planter roseaux, iris des marais, joncs selon la zone. Espacement 4–6 plants/m².'},
      {ic:'📊',titre:'Suivi & analyses eau traitée',desc:'Prélever mensuellement et analyser DBO5, NH4, coliformes. Documenter les résultats dans CUMUL.'},
    ],
    materiel:['Géomembrane EPDM 1,5 mm','Gravier 10/20 (3–5 t/m²)','Sable filtrant 0/4','Plants roseaux & iris (×50)','Tuyaux PVC perforés','Regard de collecte','Kit analyse eau (DBO5, NH4)']},

  'Toilettes sèches':{
    odd:[6,12,13],
    perma:{ethiques:['🌍 Soin de la Terre'],principe:'Ne pas produire de déchets · Solutions lentes et locales'},
    gri:['GRI 303-3 (Eau évitée)','GRI 306-2 (Déchets valorisés)'],
    plan:[
      {ic:'📐',titre:'Choix du modèle',desc:'Sélectionner entre toilettes à séparation (urine/fèces) ou composteur simple selon usage (intérieur/extérieur, fréquentation).'},
      {ic:'🔨',titre:'Construction ou installation',desc:'Poser la cabine, installer la cuve de compostage sous plancher, prévoir ventilation passive (tube PVC ⌀100).'},
      {ic:'🌿',titre:'Protocole de couverture',desc:'Définir le matériau de couverture (sciure, copeaux, paille) et afficher les consignes d\'utilisation pour les usagers.'},
      {ic:'♻️',titre:'Gestion du compost',desc:'Organiser la rotation des cuves tous les 6 mois, laisser mûrir 12 mois avant épandage sur zones non alimentaires.'},
      {ic:'📊',titre:'Mesure & reporting',desc:'Comptabiliser les litres d\'eau économisés (6–9 L/chasse × fréquentation) et les kg de compost produits.'},
    ],
    materiel:['Cabine bois ou kit préfabriqué','Cuve de compostage (×2 pour rotation)','Tube ventilation PVC ⌀100 + moustiquaire','Seau avec couvercle','Sciure ou copeaux de bois (50 L/mois)','Grille de séparation urine','Affichage pédagogique']},

  'Panneaux solaires PV':{
    odd:[7,13,9],
    perma:{ethiques:['🌍 Soin de la Terre','⚖️ Partage équitable'],principe:'Capter & stocker l\'énergie · Obtenir un rendement'},
    gri:['GRI 302-1 (Énergie produite)','GRI 305-1 (CO₂ évité)'],
    plan:[
      {ic:'☀️',titre:'Audit solaire & dimensionnement',desc:'Analyser l\'ensoleillement (données Météo-France), mesurer la surface disponible, calculer la puissance crête nécessaire (kWc).'},
      {ic:'📋',titre:'Démarches administratives',desc:'Déposer la déclaration préalable de travaux et la convention de raccordement Enedis (ou autoconsommation totale).'},
      {ic:'🏗️',titre:'Installation des panneaux',desc:'Poser les rails d\'ancrage, fixer les modules en respectant l\'inclinaison optimale (30–35°), câbler en série/parallèle.'},
      {ic:'⚡',titre:'Raccordement onduleur & réseau',desc:'Installer l\'onduleur, le compteur de production et le coffret de protection DC/AC. Mise en service par électricien certifié.'},
      {ic:'📊',titre:'Monitoring & optimisation',desc:'Configurer le monitoring en ligne, suivre la production mensuelle vs estimations et documenter dans CUMUL.'},
    ],
    materiel:['Panneaux monocristallins 400 Wc (×N)','Onduleur string ou micro-onduleurs','Rails d\'ancrage inox','Câbles solaires 4–6 mm²','Connecteurs MC4','Coffret DC + parafoudre','Compteur de production','Écran de monitoring']},

  'Chauffe-eau solaire':{
    odd:[7,13],
    perma:{ethiques:['🌍 Soin de la Terre'],principe:'Capter & stocker l\'énergie · Utiliser les ressources renouvelables'},
    gri:['GRI 302-1 (Énergie thermique)','GRI 305-5 (Émissions évitées)'],
    plan:[
      {ic:'🔍',titre:'Audit des besoins en eau chaude',desc:'Mesurer la consommation journalière (L/jour), la température de puisage et le profil horaire d\'utilisation.'},
      {ic:'📐',titre:'Dimensionnement du système',desc:'Choisir entre CESI (1 capteur + ballon) ou système collectif (SSC). Calculer la surface de capteurs (1,5–2 m²/pers).'},
      {ic:'🏗️',titre:'Pose des capteurs solaires',desc:'Fixer les capteurs plans sur toiture inclinée, orienter au sud, relier aux canalisations cuivre/inox avec fluide caloporteur.'},
      {ic:'⚙️',titre:'Installation du ballon & régulation',desc:'Poser le ballon tampon (150–500 L), installer la station hydraulique, le vase d\'expansion et le régulateur solaire.'},
      {ic:'📊',titre:'Mise en service & suivi',desc:'Purger le circuit, régler la pression, vérifier les températures. Relever l\'énergie produite mensuellement.'},
    ],
    materiel:['Capteurs plans (2–6 m²)','Ballon de stockage inox (150–500 L)','Fluide caloporteur glycol','Station hydraulique solaire','Vase d\'expansion 12 L','Régulateur solaire électronique','Tuyaux cuivre ⌀18 + isolation']},

  'Isolation paille':{
    odd:[11,13,9],
    perma:{ethiques:['🌍 Soin de la Terre'],principe:'Solutions lentes et à petite échelle · Ressources renouvelables'},
    gri:['GRI 302-4 (Réduction énergie)','GRI 305-5 (CO₂ bâtiment)'],
    plan:[
      {ic:'🔬',titre:'Diagnostic thermique',desc:'Réaliser un bilan thermique du bâtiment (thermographie ou calcul U) pour dimensionner l\'épaisseur d\'isolant nécessaire.'},
      {ic:'🌾',titre:'Approvisionnement en paille',desc:'Sourcer localement des bottes de paille de blé ou seigle (densité 90–120 kg/m³), sèches et sans moisissures.'},
      {ic:'🏗️',titre:'Chantier participatif',desc:'Monter l\'ossature bois (si nécessaire), caler et tasser les bottes en quinconce, vérifier l\'alignement et l\'aplomb.'},
      {ic:'🖌️',titre:'Enduisage terre-chaux',desc:'Appliquer 3 couches d\'enduit (gobetis terre, corps d\'enduit, finition chaux) en laissant sécher entre chaque passe.'},
      {ic:'📊',titre:'Mesure thermique post-travaux',desc:'Comparer les consommations de chauffage avant/après et documenter la réduction dans CUMUL.'},
    ],
    materiel:['Bottes de paille (⌀35–50 cm)','Ossature bois épicéa 120×60 mm','Terre à enduire (1 t pour 20 m²)','Chaux NHL 3.5 (2 sacs/m²)','Filet de stabilisation','Niveau laser','Masse pour tassage','Taloche & lisseuse']},

  'Toiture végétalisée':{
    odd:[11,15,13],
    perma:{ethiques:['🌍 Soin de la Terre','👥 Soin des Humains'],principe:'Intégration plutôt que ségrégation · Bordures et marges'},
    gri:['GRI 304-1 (Zones protégées)','GRI 303-3 (Eau retenue)'],
    plan:[
      {ic:'🔬',titre:'Étude de faisabilité structurelle',desc:'Vérifier la charge admissible de la toiture (substrat saturé : 80–200 kg/m²) avec un bureau d\'études si nécessaire.'},
      {ic:'🛡️',titre:'Étanchéité & protection',desc:'Poser la membrane d\'étanchéité anti-racines (EPDM ou bitume modifié), puis le géotextile de séparation.'},
      {ic:'🪨',titre:'Substrat drainant',desc:'Installer 8–10 cm de substrat spécial toiture (pouzzolane + compost léger + argile expansée), pente > 2%.'},
      {ic:'🌱',titre:'Plantation & ensemencement',desc:'Planter sedums, graminées et plantes couvre-sol (5–7 plants/m²). Ensemencer avec mélange prairie sèche locale.'},
      {ic:'💧',titre:'Mise en place du suivi',desc:'Installer un pluviomètre et mesurer la rétention d\'eau. Inventorier les espèces au printemps et en automne.'},
    ],
    materiel:['Membrane EPDM anti-racines','Géotextile filtrant 150 g/m²','Substrat toiture (150 L/m²)','Plants sedums variés (×7/m²)','Semences prairie locale','Lisière de retenue périmétrique','Pluviomètre de toiture']},

  'Réemploi matériaux':{
    odd:[12,9,13],
    perma:{ethiques:['🌍 Soin de la Terre','⚖️ Partage équitable'],principe:'Ne pas produire de déchets · Utiliser la diversité'},
    gri:['GRI 306-2 (Déchets détournés)','GRI 305-5 (CO₂ évité chantier)'],
    plan:[
      {ic:'🗺️',titre:'Cartographie des gisements',desc:'Identifier les ressourceries, chantiers de déconstruction et plateformes de dons locaux dans un rayon de 50 km.'},
      {ic:'📋',titre:'Inventaire & tri des matériaux',desc:'Lister les matériaux disponibles (bois, briques, fenêtres, tuiles), évaluer leur état et leur compatibilité avec le projet.'},
      {ic:'🧹',titre:'Collecte & nettoyage',desc:'Organiser le transport, démonter soigneusement, nettoyer et stocker les matériaux sous abri, classés par type.'},
      {ic:'🔨',titre:'Intégration au chantier',desc:'Adapter les détails constructifs aux matériaux récupérés. Documenter chaque matériau : origine, quantité, usage.'},
      {ic:'📊',titre:'Bilan matière & carbone',desc:'Peser les matériaux réemployés et calculer le CO₂ évité (base INIES). Saisir dans CUMUL.'},
    ],
    materiel:['Remorque ou camionnette (location)','Pieds-de-biche & massettes','Bacs de tri étiquetés','Balance plateforme','Appareil photo pour traçabilité','Film plastique de protection','Étagères de stockage']},

  'Jardin permaculture':{
    odd:[2,15,11],
    perma:{ethiques:['🌍 Soin de la Terre','👥 Soin des Humains'],principe:'Observer et interagir · Valoriser la diversité biologique'},
    gri:['GRI 304-2 (Espèces soutenues)','GRI 413-1 (Impact communauté)'],
    plan:[
      {ic:'🔭',titre:'Observation & analyse du site',desc:'Observer le terrain 4 semaines : ensoleillement, vents, zones humides, végétation existante. Réaliser l\'analyse des besoins.'},
      {ic:'✏️',titre:'Conception des zones',desc:'Dessiner la carte de zonage (Z0 à Z5), placer les guildes végétales, les buttes, les haies et les cheminements.'},
      {ic:'⛏️',titre:'Préparation du sol',desc:'Délimiter les zones, mulcher abondamment (10–15 cm), créer les buttes-lasagne ou les dépressions selon le terrain.'},
      {ic:'🌱',titre:'Plantation par guildes',desc:'Associer les espèces compagnes : arbres, arbustes, vivaces, couvre-sols, plantes grimpantes. Espacement selon maturité.'},
      {ic:'📊',titre:'Suivi production & biodiversité',desc:'Peser les récoltes chaque saison, inventorier les espèces présentes (flore, insectes). Saisir dans CUMUL.'},
    ],
    materiel:['Semences paysannes variées','Plants arbres fruitiers (×5–10)','Paillage (bois raméal, paille, feuilles)','Compost mûr (2 m³)','Outils légers (grelinette, serfouette)','Filet anti-insectes','Pluviomètre','Carnet de terrain']},

  'Potager en buttes':{
    odd:[2,6,15],
    perma:{ethiques:['🌍 Soin de la Terre','👥 Soin des Humains'],principe:'Solutions lentes et locales · Capter et stocker'},
    gri:['GRI 303-3 (Eau économisée)','GRI 413-1 (Alimentation locale)'],
    plan:[
      {ic:'📐',titre:'Implantation & orientation',desc:'Tracer les buttes en courbes de niveau (si pente) ou en lignes N-S pour maximiser l\'ensoleillement. Largeur 1,2 m max.'},
      {ic:'🪵',titre:'Construction des buttes-lasagne',desc:'Superposer : bois en décomposition (20 cm) → paille (10 cm) → compost (10 cm) → terre fine (10 cm). Hauteur totale 40–50 cm.'},
      {ic:'🌱',titre:'Semis & plantation',desc:'Semer directement ou repiquer en respectant les associations favorables (tomates/basilic, carottes/oignons, etc.).'},
      {ic:'🍂',titre:'Paillage & entretien',desc:'Couvrir le sol en permanence (paille, BRF, carton). Arroser uniquement au pied, le matin. Recharger en matière organique.'},
      {ic:'📊',titre:'Pesée des récoltes & bilan eau',desc:'Peser et noter chaque récolte. Mesurer l\'arrosage pour calculer les économies d\'eau vs sol nu.'},
    ],
    materiel:['Bois de décomposition (branches, rondins)','Paille (10 bottes)','Compost mûr (1 m³)','Semences potagères','Carton non imprimé (paillage)','Grelinette ou fourche-bêche','Balance de cuisine','Arrosoir ou goutte-à-goutte']},

  'Compostage partagé':{
    odd:[12,11,15],
    perma:{ethiques:['🌍 Soin de la Terre','👥 Soin des Humains'],principe:'Ne pas produire de déchets · Retour des sorties en entrées'},
    gri:['GRI 306-2 (Biodéchets valorisés)','GRI 413-1 (Mobilisation locale)'],
    plan:[
      {ic:'📍',titre:'Choix & aménagement du site',desc:'Sélectionner un emplacement accessible (30 m max des apporteurs), ombragé, sur terre végétale. Prévoir 2–3 bacs.'},
      {ic:'🛒',titre:'Installation des composteurs',desc:'Poser les bacs (bois ou plastique recyclé, min. 400 L chacun), installer les panneaux pédagogiques et les outils de brassage.'},
      {ic:'👥',titre:'Formation des référents',desc:'Former 2–3 habitants-composteurs : tri des matières, gestion du ratio C/N, arrosage et aération, gestion des indésirables.'},
      {ic:'📢',titre:'Communication & mobilisation',desc:'Distribuer les biosseaux aux foyers participants, afficher les consignes de tri, organiser une réunion de lancement.'},
      {ic:'📊',titre:'Pesée mensuelle & certification',desc:'Peser les apports mensuels, mesurer la température interne, prélever un échantillon de compost mûr pour analyse.'},
    ],
    materiel:['Composteurs bois 400 L (×3)','Biosseaux 10 L avec couvercle (×N foyers)','Thermomètre à compost','Aérateur spirale','Broyeur de branches (location)','Structurant sec (copeaux, paille)','Balance plateforme 50 kg','Affiches pédagogiques']},

  'Haie champêtre':{
    odd:[15,13,6],
    perma:{ethiques:['🌍 Soin de la Terre'],principe:'Valoriser la diversité · Bordures et marges · Séquestration'},
    gri:['GRI 304-2 (Biodiversité restaurée)','GRI 305-5 (Carbone séquestré)'],
    plan:[
      {ic:'🌍',titre:'Étude du contexte écologique',desc:'Analyser les haies existantes dans un rayon de 500 m, identifier les espèces locales dominantes et les corridors à reconnecter.'},
      {ic:'🌱',titre:'Sélection des espèces locales',desc:'Composer un mélange de 7–10 espèces indigènes : prunellier, cornouiller, aubépine, noisetier, sureau, viorne, aulne…'},
      {ic:'⛏️',titre:'Préparation du sol & plantation',desc:'Décompacter sur 40 cm, planter en double rangée décalée (espacement 1 m sur le rang, 0,5 m entre rangs) de novembre à mars.'},
      {ic:'🛡️',titre:'Protection & tuteurage',desc:'Poser des protège-plants individuels (ou grillage) contre le gibier. Tuteurer les sujets de plus de 60 cm. Pailler 5 cm au pied.'},
      {ic:'📊',titre:'Suivi taux de reprise & biodiversité',desc:'Contrôler le taux de reprise après 1 an, remplacer les plants morts. Inventorier les espèces animales observées.'},
    ],
    materiel:['Plants feuillus locaux (×N selon linéaire)','Protège-plants biodégradables','Tuteurs bois ⌀3 cm × 1,2 m','Fil de ligature','Paillage biodégradable (BRF ou paille)','Agrafes de fixation','Grillage soudé anti-lapins']},

  'Mare écologique':{
    odd:[15,6,14],
    perma:{ethiques:['🌍 Soin de la Terre'],principe:'Observer et interagir · Valoriser la diversité · Eau & milieux humides'},
    gri:['GRI 304-2 (Habitats aquatiques)','GRI 303-2 (Gestion eau)'],
    plan:[
      {ic:'📐',titre:'Conception & implantation',desc:'Choisir un point bas naturel, éloigné des arbres (feuilles mortes). Dessiner le profil : zone peu profonde (30 cm) + zone profonde (80 cm).'},
      {ic:'⛏️',titre:'Terrassement',desc:'Creuser en respectant les paliers (pentes douces 1:3), conserver la terre végétale pour les berges. Faire appel à un mini-engin si > 15 m².'},
      {ic:'🛡️',titre:'Étanchéité naturelle ou membrane',desc:'Tester d\'abord l\'étanchéité naturelle (argile ≥ 30%). Sinon poser géomembrane EPDM 1 mm sur sable régalé.'},
      {ic:'🌿',titre:'Végétalisation des berges',desc:'Planter en zone immergée : iris des marais, jonc, massette. En berge : salicaire, menthe aquatique, cresson. Laisser une zone nue pour amphibiens.'},
      {ic:'📊',titre:'Inventaire faune & flore',desc:'Réaliser un inventaire tous les 6 mois (amphibiens, libellules, oiseaux). Mesurer pH et niveau d\'eau. Documenter dans CUMUL.'},
    ],
    materiel:['Géomembrane EPDM 1 mm (si nécessaire)','Sable de pose (5 cm)','Plants aquatiques (×20–40)','Plants de berge (×20)','Filet de protection (phase travaux)','pH-mètre aquatique','Waders ou bottes hautes','Carnet de terrain + loupe']},

  'Repair café':{
    odd:[12,4,11],
    perma:{ethiques:['👥 Soin des Humains','⚖️ Partage équitable'],principe:'Ne pas produire de déchets · Partage des savoirs'},
    gri:['GRI 306-2 (Objets détournés)','GRI 404-1 (Formation & compétences)'],
    plan:[
      {ic:'🤝',titre:'Constituer l\'équipe de réparateurs',desc:'Recruter 4–8 bénévoles compétents (électronique, couture, vélo, mobilier, électroménager). Définir les créneaux mensuels.'},
      {ic:'🛠️',titre:'Aménager l\'espace de réparation',desc:'Organiser les tables par famille (électronique, textile, mécanique), installer l\'éclairage adapté et l\'outillage de base.'},
      {ic:'📢',titre:'Communication & 1re séance',desc:'Créer une affiche, annoncer sur réseaux locaux, ouvrir les inscriptions en ligne. Organiser une séance test de 3h.'},
      {ic:'📝',titre:'Système de suivi des réparations',desc:'Mettre en place une fiche par objet (description, réparateur, résultat : réparé / irréparable / pièce manquante).'},
      {ic:'📊',titre:'Bilan mensuel & certification',desc:'Compter les objets réparés, calculer le CO₂ évité (base ADEME), partager le bilan avec les participants.'},
    ],
    materiel:['Tables de travail robustes','Éclairage LED articulé (×4)','Fer à souder + station reflow','Kit tournevis precision','Machine à coudre (×1–2)','Multimètre','Pièces détachées courantes','Bacs de tri composants','Fiches de suivi (papier ou tablette)']},

  'AMAP circuit court':{
    odd:[2,12,11,17],
    perma:{ethiques:['👥 Soin des Humains','⚖️ Partage équitable'],principe:'Obtenir un rendement · Intégration locale · Partenariats'},
    gri:['GRI 204-1 (Achats locaux)','GRI 413-1 (Impact territorial)'],
    plan:[
      {ic:'🔍',titre:'Identifier les producteurs locaux',desc:'Cartographier les fermes dans un rayon de 80 km. Visiter 3–5 candidats, vérifier les pratiques (bio ou raisonnée), négocier le partenariat.'},
      {ic:'📋',titre:'Rédiger le contrat AMAP',desc:'Établir le contrat annuel : engagement des adhérents, fréquence des paniers, prix fixe, partage des risques agricoles.'},
      {ic:'👥',titre:'Recruter les adhérents',desc:'Organiser une réunion d\'information, présenter le producteur, collecter les inscriptions et les pré-paiements.'},
      {ic:'📦',titre:'Organiser la distribution',desc:'Définir le point de dépôt, les créneaux horaires, les équipes de distribution tournantes. Tester avec 1er panier.'},
      {ic:'📊',titre:'Bilan annuel & renouvellement',desc:'Calculer le % d\'approvisionnement local, le nombre de familles touchées, organiser la fête AMAP annuelle.'},
    ],
    materiel:['Espace de distribution (min. 20 m²)','Caisses navettes ou paniers','Étiquettes & balance','Tableau de distribution','Logiciel de gestion AMAP (ex. Cagette)','Réfrigérateur (pour produits frais)','Affichage & signalétique']},
};

const CATS={
  eau:         {l:'Eau',          c:'#2a6090',bg:'rgba(58,110,140,0.12)'},
  electricite: {l:'Énergie',      c:'#a06010',bg:'rgba(200,115,42,0.12)'},
  construction:{l:'Construction', c:'#8a3020',bg:'rgba(184,78,53,0.12)'},
  alimentaire: {l:'Alimentaire',  c:'#2e6020',bg:'rgba(74,140,92,0.12)'},
  dechets:     {l:'Déchets',      c:'#5a4090',bg:'rgba(122,100,168,0.12)'},
  biodiversite:{l:'Biodiversité', c:'#1a7050',bg:'rgba(26,112,80,0.12)'},
  social:      {l:'Social',       c:'#903060',bg:'rgba(180,78,100,0.12)'},
};

const ESPS=[
  {id:'cafe',    l:'Café',         ic:'☕',c:'#8a4a1a',bg:'rgba(200,115,42,0.1)',
   desc:'Espace convivial de rencontre et de consommation locale.',
   sols:['AMAP circuit court','Compostage partagé','Repair café'],
   esrs:['ESRS S3','ESRS E5'],
   indicateurs:['Kg déchets organiques compostés/mois','% approvisionnement local','Nb événements communautaires/mois','CO₂ évité logistique kg/an'],
   quetes:[
     {titre:'Sourcer 3 fournisseurs locaux',duree:'2 semaines',nb:'1–2 pers.',impact:'90% local · S2 couvert'},
     {titre:'Lancer le tri & compostage des biodéchets',duree:'1 journée',nb:'2–3 pers.',impact:'−200 kg déchets/an · E5'},
   ]},
  {id:'fablab',  l:'FabLab',       ic:'⚙️',c:'#1a3a5a',bg:'rgba(58,110,140,0.1)',
   desc:'Atelier de fabrication numérique et réparation ouverte.',
   sols:['Réemploi matériaux','Repair café'],
   esrs:['ESRS E5','ESRS S1','ESRS S3'],
   indicateurs:['Nb objets réparés/mois','Kg matériaux réemployés/an','Nb personnes formées','CO₂ évité par réparation kg/an'],
   quetes:[
     {titre:'Organiser le premier Repair Café mensuel',duree:'1 après-midi',nb:'3–6 pers.',impact:'200 obj/an · E5+S1'},
     {titre:'Documenter les savoir-faire du FabLab',duree:'Flexible',nb:'Solo ok',impact:'+governance · G1'},
   ]},
  {id:'serre',   l:'Serre',        ic:'🌱',c:'#2e6020',bg:'rgba(74,140,92,0.1)',
   desc:'Espace de culture sous abri, production maraîchère et semences.',
   sols:['Jardin permaculture','Potager en buttes','Récupération eau de pluie','Compostage partagé'],
   esrs:['ESRS E3','ESRS E4','ESRS S3'],
   indicateurs:['Production alimentaire kg/an','Eau économisée L/an','Autonomie alimentaire %','Score biodiversité semences'],
   quetes:[
     {titre:'Créer les premiers bacs de culture',duree:'1 week-end',nb:'3–6 pers.',impact:'~80 kg/an · E3+S3'},
     {titre:'Installer la récupération d\'eau de pluie',duree:'1 journée',nb:'2–4 pers.',impact:'−18 000 L/an · E3'},
   ]},
  {id:'dortoir', l:'Dortoir',      ic:'🛏',c:'#5a3a80',bg:'rgba(122,100,168,0.1)',
   desc:'Hébergement collectif pour bâtisseurs et visiteurs itinérants.',
   sols:['Isolation paille','Chauffe-eau solaire','Toilettes sèches'],
   esrs:['ESRS E1','ESRS E3','ESRS S3'],
   indicateurs:['CO₂ évité chauffage kg/an','Eau économisée L/an','Nuitées solidaires nb/an','% énergie renouvelable'],
   quetes:[
     {titre:'Audit énergétique du dortoir',duree:'1 journée',nb:'2–3 pers.',impact:'+12 pts énergie · E1'},
     {titre:'Installer les toilettes sèches',duree:'1 journée',nb:'2–4 pers.',impact:'−30 000 L/an · E3'},
   ]},
  {id:'boutique',l:'Boutique',     ic:'🛍',c:'#903060',bg:'rgba(180,78,100,0.1)',
   desc:'Point de vente de productions locales et de seconde main.',
   sols:['AMAP circuit court','Réemploi matériaux'],
   esrs:['ESRS S2','ESRS S3','ESRS G1'],
   indicateurs:['% produits locaux vendus','Nb producteurs partenaires','CA en graines','Kg objets seconde main écoulés/mois'],
   quetes:[
     {titre:'Référencer 5 producteurs locaux',duree:'2 semaines',nb:'1–2 pers.',impact:'S2 chaîne valeur · +social'},
     {titre:'Lancer le corner seconde main',duree:'1 journée',nb:'2–4 pers.',impact:'−50 kg déchets/mois · E5'},
   ]},
  {id:'cuisine', l:'Cuisine',      ic:'🍳',c:'#7a5010',bg:'rgba(200,140,42,0.1)',
   desc:'Cuisine collective pour transformer et valoriser les productions.',
   sols:['AMAP circuit court','Compostage partagé','Récupération eau de pluie'],
   esrs:['ESRS E3','ESRS E5','ESRS S3'],
   indicateurs:['Kg biodéchets compostés/mois','Repas produits localement nb/mois','Eau économisée L/an','% gaspillage alimentaire évité'],
   quetes:[
     {titre:'Mettre en place le tri des biodéchets cuisine',duree:'1 semaine',nb:'2 pers.',impact:'−300 kg/an · E5'},
     {titre:'Créer un menu 100% local mensuel',duree:'Récurrent',nb:'2–5 pers.',impact:'S3 communauté · S2 local'},
   ]},
  {id:'jardin',  l:'Jardin',       ic:'🌿',c:'#1a6040',bg:'rgba(26,112,80,0.1)',
   desc:'Espace extérieur de maraîchage, permaculture et biodiversité.',
   sols:['Jardin permaculture','Potager en buttes','Haie champêtre','Mare écologique','Compostage partagé'],
   esrs:['ESRS E4','ESRS E3','ESRS S3'],
   indicateurs:['Score biodiversité','Production alimentaire kg/an','Espèces favorisées nb','Surface végétalisée m²','Eau économisée L/an'],
   quetes:[
     {titre:'Planter la haie champêtre',duree:'1 journée',nb:'4–8 pers.',impact:'+15 pts biodiversité · E4'},
     {titre:'Créer le jardin en permaculture',duree:'3 séances',nb:'4–10 pers.',impact:'~200 kg/an · E4+S3'},
     {titre:'Installer la mare écologique',duree:'2 journées',nb:'4–6 pers.',impact:'+18 pts biodiversité · E4'},
   ]},
  {id:'atelier', l:'Atelier',      ic:'🔨',c:'#6a3020',bg:'rgba(160,80,50,0.1)',
   desc:'Espace de fabrication, réparation et transmission de savoir-faire.',
   sols:['Réemploi matériaux','Repair café','Isolation paille'],
   esrs:['ESRS E5','ESRS S1','ESRS G1'],
   indicateurs:['Nb personnes formées/mois','Kg matériaux réemployés/an','Nb ateliers transmission/mois','CO₂ évité réparation kg/an'],
   quetes:[
     {titre:'Lancer les ateliers de transmission',duree:'Mensuel',nb:'2–8 pers.',impact:'S1 formation · +gouvernance G1'},
     {titre:'Chantier de réemploi matériaux',duree:'1 journée',nb:'3–6 pers.',impact:'−60% déchets chantier · E5'},
   ]},
  {id:'bureau',  l:'Bureau',       ic:'💻',c:'#2a5070',bg:'rgba(58,110,140,0.1)',
   desc:'Espace de coworking et de gestion administrative du lieu.',
   sols:['Panneaux solaires PV','Chauffe-eau solaire'],
   esrs:['ESRS E1','ESRS G1','ESRS S1'],
   indicateurs:['kWh consommés/mois','% énergie renouvelable','Nb emplois locaux créés','Score gouvernance transparence'],
   quetes:[
     {titre:'Audit consommation énergétique bureaux',duree:'1 journée',nb:'1–2 pers.',impact:'+10 pts énergie · E1'},
     {titre:'Documenter la gouvernance du lieu',duree:'2 ateliers',nb:'3–5 pers.',impact:'G1 conduite · traçabilité CSRD'},
   ]},
  {id:'salle',   l:'Salle commune',ic:'🏛',c:'#4a3060',bg:'rgba(100,80,140,0.1)',
   desc:'Espace polyvalent d\'événements, d\'ateliers et de gouvernance collective.',
   sols:['Repair café','Panneaux solaires PV'],
   esrs:['ESRS S1','ESRS S3','ESRS G1'],
   indicateurs:['Nb événements collectifs/mois','Nb personnes impliquées','Nb décisions co-construites/an','kWh consommés événements'],
   quetes:[
     {titre:'Organiser l\'assemblée de gouvernance',duree:'1 soirée',nb:'5–20 pers.',impact:'G1 · +gouvernance participative'},
   ]},
];

const TYPES_LIEU=[
  // Agriculture & Nature
  {id:'ferme',      ic:'🌾', l:'Ferme régénérative', cat:'🌿 Agriculture & Nature'},
  {id:'jardin',     ic:'🪴', l:'Jardin partagé',      cat:'🌿 Agriculture & Nature'},
  // Fabrication & Réparation
  {id:'fablab',     ic:'⚙️', l:'Fablab',              cat:'🔧 Fabrication & Réparation'},
  {id:'repair',     ic:'🔨', l:'Repair café',          cat:'🔧 Fabrication & Réparation'},
  {id:'ressourcerie',ic:'♻️',l:'Ressourcerie',         cat:'🔧 Fabrication & Réparation'},
  // Convivialité & Social
  {id:'tiers',      ic:'🌿', l:'Tiers-lieu',           cat:'☕ Convivialité & Social'},
  {id:'cafe',       ic:'☕', l:'Café associatif',       cat:'☕ Convivialité & Social'},
  {id:'epicerie',   ic:'🛒', l:'Épicerie solidaire',    cat:'☕ Convivialité & Social'},
  // Travail & Innovation
  {id:'coworking',  ic:'💻', l:'Coworking',             cat:'🏢 Travail & Innovation'},
  {id:'incubateur', ic:'🚀', l:'Incubateur',            cat:'🏢 Travail & Innovation'},
  // Habitat & Mode de vie
  {id:'ecolieu',    ic:'🏡', l:'Écolieu',               cat:'🏘 Habitat & Mode de vie'},
  {id:'habitat',    ic:'🏘', l:'Habitat groupé',        cat:'🏘 Habitat & Mode de vie'},
  {id:'ecole',      ic:'📚', l:'École alternative',     cat:'🏘 Habitat & Mode de vie'},
  // Autre
  {id:'autre',      ic:'✦',  l:'Autre',                 cat:'✦ Autre'},
];

let currentRole='pilote';
const ROLE_CONFIG={
  pilote:{
    label:"Pilote d'impact",
    summary:"Crée, structure et pilote ton lieu avec les bons outils.",
    defaultScreen:'creer',
    screens:{
      carte:{title:'Repérer les opportunités du territoire',text:'Compare les lieux, identifie les besoins proches et lance les prochaines actions de ton projet.',actions:['Créer un lieu','Analyser des besoins','Repérer des partenaires']},
      lieu:{title:'Piloter ce lieu',text:"Tu vois ici les besoins prioritaires, les preuves d'impact et les ressources à mobiliser.",actions:['Prioriser','Publier un besoin','Partager aux bâtisseurs']},
      quete:{title:'Transformer les besoins en missions',text:'Découpe le projet en quêtes claires, assignables et mesurables.',actions:['Créer une quête','Définir la preuve','Suivre la complétion']},
      pilote:{title:'Décider quoi débloquer maintenant',text:'Concentre-toi sur les quêtes bloquées, les indicateurs en retard et les gains rapides.',actions:['Arbitrer','Planifier','Certifier']},
      bdd:{title:'Choisir les bonnes solutions',text:'Filtre les solutions selon ton type de lieu, ton niveau de maturité et tes contraintes.',actions:['Comparer','Ajouter au plan','Estimer le coût']},
      creer:{title:"Passer de l'idée au plan d'action",text:'Définis ton lieu, ses espaces et la première feuille de route 30 / 90 / 180 jours.',actions:['Décrire le lieu','Choisir les espaces','Générer la roadmap']}
    },
    cartePrimary:'+ Créer mon lieu', carteSecondary:'Voir besoins critiques'
  },
  batisseur:{
    label:"Bâtisseur d'impact",
    summary:'Rejoins des lieux, accomplis des quêtes utiles et rends visible ta contribution.',
    defaultScreen:'quete',
    screens:{
      carte:{title:'Trouver un lieu où contribuer',text:'Repère les lieux actifs, proches de toi et avec des quêtes ouvertes adaptées à tes compétences.',actions:['Explorer','Comparer les quêtes','Rejoindre un lieu']},
      lieu:{title:'Comprendre où tu peux aider',text:'Vois les besoins concrets du lieu, les personnes déjà impliquées et les quêtes qui te correspondent.',actions:['Voir les besoins','Rejoindre','Contacter le lieu']},
      quete:{title:'Ton espace bâtisseur',text:'Suis ta progression, tes graines, tes compétences validées et les quêtes recommandées selon ton profil.',actions:['Voir mes quêtes','Encaisser mes graines','Valider une preuve']},
      marketplace:{title:'Échange tes graines',text:'Convertis tes graines gagnés lors de quêtes en avantages locaux : alimentation, formation, artisanat et services chez les Pilotes partenaires.',actions:['Voir les offres','Filtrer par catégorie','Voir mes échanges']}
    },
    cartePrimary:'⚡ Voir les quêtes ouvertes', carteSecondary:'Filtrer par compétences'
  },
  semeur:{
    label:"Semeur d'impact ",
    summary:'Financez des lieux à impact et générez vos preuves auditables.',
    defaultScreen:'semeur',
    screens:{
      carte:{title:'Identifier les lieux à fort potentiel ESG',text:'Repérez les lieux dont les quêtes couvrent vos obligations ESRS et les zones où votre financement maximise la couverture réglementaire.',actions:['Filtrer par ESRS','Voir le potentiel E/S/G','Cartographier les gaps']},
      lieu:{title:"Évaluer l'alignement RSE d'un lieu",text:'Analysez les preuves disponibles, la Vadance et la correspondance avec vos indicateurs CSRD prioritaires.',actions:['Lire les preuves','Vérifier conformité ESRS','Préparer le financement']},
      semeur:{title:'Piloter votre portefeuille RSE',text:'Suivez la couverture ESRS, arbitrez les financements par pilier ESG et générez les preuves auditables pour votre rapport CSRD.',actions:['Couvrir les ESRS manquants','Exporter rapport','Comparer lieux par ESG']}
    },
    cartePrimary:'Financer un lieu ESG', carteSecondary:'Voir les preuves CSRD'
  }
};

function roleAllows(role, targetRoleList){
  return (targetRoleList||'').split(',').map(x=>x.trim()).includes(role);
}

function updateRoleNavigation(role){
  document.querySelectorAll('.nav-item, .nav-section').forEach(el=>{
    const roles=el.getAttribute('data-roles');
    if(!roles){el.classList.remove('nav-hidden');return;}
    el.classList.toggle('nav-hidden', !roleAllows(role, roles));
  });
  // garder le sélecteur de profil synchronisé avec le rôle actif
  document.querySelectorAll('.role-switch3 .rsw-btn').forEach(b=>b.classList.toggle('active', b.dataset.role===role));
}

// Bascule de profil depuis la sidebar : relance l'onboarding du rôle,
// qui enchaîne ensuite sur l'écran de création de fiche (comme à l'inscription).
function switchRole(role){
  if(!ROLE_CONFIG[role]) return;
  currentRole = role;
  updateRoleNavigation(role);            // met à jour la nav + le bouton actif
  showOnboarding(role);                  // assistant du rôle → puis création de fiche
}

function firstAllowedScreen(role){
  return ROLE_CONFIG[role]?.defaultScreen||'carte';
}

function renderProfileContext(){
  const cfg=ROLE_CONFIG[currentRole]||ROLE_CONFIG.pilote;
  const activeScreen=document.querySelector('.screen.active')?.id?.replace('screen-','')||cfg.defaultScreen;
  document.getElementById('profile-summary-title').textContent=cfg.label;
  document.getElementById('profile-summary-text').textContent=cfg.summary;
  const ctx=cfg.screens[activeScreen];
  const box=document.getElementById('context-'+activeScreen);
  if(box&&ctx){
    box.innerHTML=`<div class="context-label">Contexte du profil</div><div class="context-title">${ctx.title}</div><div class="context-text">${ctx.text}</div><div class="context-actions">${ctx.actions.map(a=>`<span class="context-badge">${a}</span>`).join('')}</div>`;
  }
  const primary=document.getElementById('carte-primary-btn');
  const secondary=document.getElementById('carte-secondary-btn');
  if(primary) primary.textContent=cfg.cartePrimary||'+ Ajouter mon lieu';
  if(secondary) secondary.textContent=cfg.carteSecondary||'Filtrer';
  const mapPanelTitle=document.querySelector('.map-panel-title');
  const mapPanelCount=document.querySelector('.map-panel-count');
  if(mapPanelTitle){
    mapPanelTitle.textContent='La communauté EVAD';
  }
}

function setRole(role, btn){
  currentRole=role;
  document.querySelectorAll('.role-chip').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  updateRoleNavigation(role);
  // Show onboarding for this role
  showOnboarding(role);
}

function updateActiveNav(id){
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  const activeItem=document.querySelector(`.nav-item[data-screen="${id}"]`);
  if(activeItem&&!activeItem.classList.contains('nav-hidden')) activeItem.classList.add('active');
}

/* ─── SIDEBAR WIZARD MODE ─── */
const WIZARD_SCREENS = ['creer', 'fiche-bat', 'fiche-sem'];

function navWizardSet(steps, currentIdx, onJump) {
  const nav = document.querySelector('.nav');
  const container = document.getElementById('nav-stepper');
  if (!nav || !container) return;
  nav.classList.add('wizard-mode');
  container.setAttribute('aria-hidden', 'false');
  container.innerHTML = `
    <div class="nav-stepper-title">Progression</div>
    ${steps.map((label, i) => {
      const state = i < currentIdx ? 'done' : i === currentIdx ? 'active' : 'upcoming';
      const icon = state === 'done' ? '✓' : (i + 1);
      const showLine = i < steps.length - 1;
      return `
        <div class="nav-step ${state}" data-step-idx="${i}">
          <div class="nav-step-rail">
            <div class="nav-step-circle">${icon}</div>
            ${showLine ? `<div class="nav-step-line"></div>` : ''}
          </div>
          <div class="nav-step-text">
            <div class="nav-step-num">Étape ${i + 1}</div>
            <div class="nav-step-label">${label}</div>
          </div>
        </div>
      `;
    }).join('')}
    <button class="nav-stepper-skip" onclick="showScreen('carte')" title="Aller directement à la carte">Passer, voir la carte →</button>
  `;
  if (typeof onJump === 'function') {
    container.querySelectorAll('.nav-step').forEach(el => {
      const idx = parseInt(el.dataset.stepIdx, 10);
      if (idx < currentIdx) {
        el.addEventListener('click', () => onJump(idx));
      }
    });
  }
}

function navWizardClear() {
  const nav = document.querySelector('.nav');
  if (nav) nav.classList.remove('wizard-mode');
  const container = document.getElementById('nav-stepper');
  if (container) {
    container.innerHTML = '';
    container.setAttribute('aria-hidden', 'true');
  }
}

function costFor(s){ return s.cplx==='facile'?'€':(s.cplx==='moyen'?'€€':'€€€'); }
function prereqFor(s){ return s.cplx==='facile'?'Faible':(s.cplx==='moyen'?'Moyen':'Élevé'); }
function compatFor(s){ return ({eau:'Ferme · Écolieu',electricite:'Écolieu · Tiers-lieu',construction:'Tous lieux',alimentaire:'Ferme · Écolieu',dechets:'Tous lieux',biodiversite:'Écolieu · Ferme',social:'Tiers-lieu · Quartier'})[s.cat]||'Tous lieux'; }

/* ─── MAP DATA / LEAFLET ─── */
let evadMap = null;
let evadMarkers = [];
let createdLeafletMarkers = [];

const MAP_PLACES = [
  {
    nom:'Darwin Écosystème', type:'Tiers-lieu', ville:'Bordeaux', icon:'🌿',
    lat:44.84953, lng:-0.56147, score:82, quetes:4, batisseurs:23, semeurs:5, score_trim:'+7',
    desc:"Ancienne caserne militaire de la rive droite réhabilitée en écosystème d'économie créative, sociale et solidaire : coworking, ferme urbaine, skatepark, restaurant bio et dizaines d'associations.",
    dims:[{l:'Environnement',v:88,c:'var(--fern)'},{l:'Social',v:84,c:'var(--sky)'},{l:'Éco. locale',v:80,c:'var(--amber)'}],
    quetes_list:[
      {icon:'🌱',title:'Agrandir la ferme urbaine',meta:'Permaculture · 8 pers.',status:'Ouverte',sBg:'rgba(74,140,92,.15)',sC:'var(--fern)'},
      {icon:'♻️',title:'Tri & compost des événements',meta:'Zéro déchet · 5 pers.',status:'En cours',sBg:'rgba(240,200,74,.18)',sC:'var(--amber)'}
    ],
    besoins:['Maraîcher·ère bénévole','Mécène événementiel'],
    deva:"Darwin est un pilier de la rive droite. Une quête « compost » bien documentée ferait grimper le score Environnement au-dessus de 90."
  },
  {
    nom:'La Halle des Douves', type:'Tiers-lieu', ville:'Bordeaux', icon:'🌿',
    lat:44.83073, lng:-0.56668, score:64, quetes:3, batisseurs:11, semeurs:2, score_trim:'+5',
    desc:"Ancienne halle de marché de Saint-Michel devenue tiers-lieu associatif et citoyen : événements, ateliers, permanences d'associations et vie de quartier.",
    dims:[{l:'Environnement',v:60,c:'var(--fern)'},{l:'Social',v:78,c:'var(--sky)'},{l:'Éco. locale',v:58,c:'var(--amber)'}],
    quetes_list:[
      {icon:'🎟',title:'Programmer des ateliers de quartier',meta:'Animation · 4 pers.',status:'Ouverte',sBg:'rgba(74,140,92,.15)',sC:'var(--fern)'},
      {icon:'🔧',title:'Rénover la cuisine partagée',meta:'Bricolage · 6 pers.',status:'Ouverte',sBg:'rgba(74,140,92,.15)',sC:'var(--fern)'}
    ],
    besoins:["Animateur·rice d'ateliers",'Dons de matériel'],
    deva:"Forte dimension sociale. Ajoute une quête « énergie » pour équilibrer la Vadance."
  },
  {
    nom:"Les Vivres de l'Art", type:'Tiers-lieu', ville:'Bordeaux', icon:'🌿',
    lat:44.86453, lng:-0.54952, score:58, quetes:2, batisseurs:9, semeurs:1, score_trim:'+4',
    desc:"Lieu d'art et de création dans une ancienne usine de Bacalan : ateliers d'artistes, sculptures monumentales en métal recyclé, guinguette et événements culturels.",
    dims:[{l:'Environnement',v:55,c:'var(--fern)'},{l:'Social',v:66,c:'var(--sky)'},{l:'Éco. locale',v:60,c:'var(--amber)'}],
    quetes_list:[
      {icon:'♻️',title:'Sculpture en métal recyclé',meta:'Up-cycling · 5 pers.',status:'Ouverte',sBg:'rgba(74,140,92,.15)',sC:'var(--fern)'},
      {icon:'🎨',title:"Résidence d'artiste éco-responsable",meta:'Culture · 2 pers.',status:'En cours',sBg:'rgba(240,200,74,.18)',sC:'var(--amber)'}
    ],
    besoins:['Soudeur·se bénévole','Métal de récupération'],
    deva:"L'up-cycling artistique valorise bien l'économie circulaire. Documente les tonnes de métal réemployées."
  },
  {
    nom:'Le Garage Moderne', type:'Repair café', ville:'Bordeaux', icon:'🔨',
    lat:44.86500, lng:-0.55029, score:71, quetes:3, batisseurs:14, semeurs:2, score_trim:'+6',
    desc:"Atelier associatif et participatif de Bacalan : on répare soi-même sa voiture ou son vélo, on bricole, on cuisine et on expose, dans un esprit d'entraide et de récup'.",
    dims:[{l:'Environnement',v:74,c:'var(--fern)'},{l:'Social',v:72,c:'var(--sky)'},{l:'Éco. locale',v:70,c:'var(--amber)'}],
    quetes_list:[
      {icon:'🚲',title:'Atelier vélo participatif',meta:'Réparation · 6 pers.',status:'Ouverte',sBg:'rgba(74,140,92,.15)',sC:'var(--fern)'},
      {icon:'🔧',title:'Donnerie de pièces détachées',meta:'Réemploi · 4 pers.',status:'Ouverte',sBg:'rgba(74,140,92,.15)',sC:'var(--fern)'}
    ],
    besoins:['Mécanicien·ne bénévole','Outillage'],
    deva:"Le réemploi auto/vélo évite beaucoup de CO₂. Une quête « bilan déchets évités » renforcerait l'impact mesuré."
  },
  {
    nom:'La Maison Écocitoyenne', type:'École alternative', ville:'Bordeaux', icon:'📚',
    lat:44.83841, lng:-0.56776, score:60, quetes:2, batisseurs:7, semeurs:1, score_trim:'+3',
    desc:"Équipement municipal sur les quais dédié à la sensibilisation au développement durable : expositions, ateliers, conseils en écomobilité, énergie et alimentation.",
    dims:[{l:'Environnement',v:70,c:'var(--fern)'},{l:'Social',v:64,c:'var(--sky)'},{l:'Éco. locale',v:50,c:'var(--amber)'}],
    quetes_list:[
      {icon:'🌍',title:"Cycle d'ateliers climat",meta:'Pédagogie · 3 pers.',status:'Ouverte',sBg:'rgba(74,140,92,.15)',sC:'var(--fern)'},
      {icon:'🚲',title:'Permanence écomobilité',meta:'Conseil · 2 pers.',status:'En cours',sBg:'rgba(240,200,74,.18)',sC:'var(--amber)'}
    ],
    besoins:['Intervenant·e ateliers','Partenaires écoles'],
    deva:"Lieu pédagogique idéal pour embarquer de nouveaux bâtisseurs. Mets en avant le nombre de personnes sensibilisées."
  },
  {
    nom:'Supercoop', type:'Épicerie solidaire', ville:'Bordeaux', icon:'🛒',
    lat:44.81506, lng:-0.55503, score:54, quetes:2, batisseurs:18, semeurs:1, score_trim:'+5',
    desc:"Supermarché coopératif et participatif de la métropole : chaque membre donne un peu de temps pour proposer une alimentation de qualité, locale et à prix juste.",
    dims:[{l:'Environnement',v:52,c:'var(--fern)'},{l:'Social',v:70,c:'var(--sky)'},{l:'Éco. locale',v:64,c:'var(--amber)'}],
    quetes_list:[
      {icon:'🥕',title:'Filière maraîchers locaux',meta:'Circuit court · 5 pers.',status:'Ouverte',sBg:'rgba(74,140,92,.15)',sC:'var(--fern)'},
      {icon:'🤝',title:'Recruter des coopérateurs',meta:'Communauté · 10 pers.',status:'Ouverte',sBg:'rgba(74,140,92,.15)',sC:'var(--fern)'}
    ],
    besoins:['Coopérateurs bénévoles','Producteurs locaux'],
    deva:"Gouvernance coopérative exemplaire. Travaille la dimension Environnement avec une quête « zéro emballage »."
  },
  {
    nom:'Le Jardin de ta Sœur', type:'Jardin partagé', ville:'Bordeaux', icon:'🪴',
    lat:44.85912, lng:-0.56259, score:49, quetes:2, batisseurs:6, semeurs:0, score_trim:'+4',
    desc:"Jardin partagé emblématique des Chartrons né sur une ancienne friche : potager collectif, verger de 22 arbres fruitiers, animations de quartier et biodiversité.",
    dims:[{l:'Environnement',v:66,c:'var(--fern)'},{l:'Social',v:60,c:'var(--sky)'},{l:'Éco. locale',v:30,c:'var(--amber)'}],
    quetes_list:[
      {icon:'🌳',title:'Entretien du verger',meta:'Jardinage · 5 pers.',status:'Ouverte',sBg:'rgba(74,140,92,.15)',sC:'var(--fern)'},
      {icon:'🐝',title:'Hôtels à insectes',meta:'Biodiversité · 3 pers.',status:'En cours',sBg:'rgba(240,200,74,.18)',sC:'var(--amber)'}
    ],
    besoins:['Jardiniers bénévoles','Plants & graines'],
    deva:"Belle base écologique. Quelques quêtes « économie locale » feraient progresser le score global."
  }
];

const MAP_BATISSEURS = [
  {
    nom:'Léa M.', role:'Maraîchère & permacultrice', ville:'Bordeaux', icon:'🌾', niveau:4,
    lat:44.83372, lng:-0.57503,
    bio:"Maraîchère installée près de Bordeaux, je partage mes techniques de permaculture et de compostage sur les chantiers participatifs.",
    graines:1240, quetes_realisees:17, quetes_actives:2, graines_passifs:70,
    competences:['Permaculture','Maraîchage','Compostage',"Gestion de l'eau"],
    disponibilite:'En semaine, hors saison de récolte',
    lieux_frequentes:['Le Jardin de ta Sœur','Darwin Écosystème','Supercoop'],
    certifications:['Permaculture (CCP)','Maître composteur']
  },
  {
    nom:'Hugo D.', role:'Charpentier & éco-constructeur', ville:'Bègles', icon:'🪚', niveau:5,
    lat:44.81506, lng:-0.55503,
    bio:"Charpentier de métier, passionné de construction bois et paille. J'anime des chantiers d'éco-rénovation le week-end.",
    graines:1820, quetes_realisees:23, quetes_actives:3, graines_passifs:110,
    competences:['Charpente bois','Isolation paille','Maçonnerie','Chantier participatif'],
    disponibilite:'Week-ends et soirées',
    lieux_frequentes:['Le Garage Moderne','La Halle des Douves'],
    certifications:['RGE','Isolation paille']
  },
  {
    nom:'Sarah B.', role:'Étudiante en environnement', ville:'Talence', icon:'🎓', niveau:2,
    lat:44.80403, lng:-0.59435,
    bio:"Étudiante en master environnement à Bordeaux, je m'engage sur des missions de réemploi et de sensibilisation près du campus.",
    graines:430, quetes_realisees:8, quetes_actives:2, graines_passifs:30,
    competences:['Sensibilisation','Réemploi','Collecte','Communication'],
    disponibilite:'Période universitaire',
    lieux_frequentes:['Supercoop','Le Jardin de ta Sœur'],
    certifications:['Réemploi matériaux']
  },
  {
    nom:'Karim T.', role:'Électricien & énergies renouvelables', ville:'Bordeaux', icon:'☀️', niveau:4,
    lat:44.83266, lng:-0.56369,
    bio:"Électricien indépendant, je conçois des installations solaires et des systèmes low-tech pour les lieux en transition.",
    graines:1360, quetes_realisees:19, quetes_actives:2, graines_passifs:85,
    competences:['Panneaux solaires','Électricité','Low-tech','Chauffe-eau solaire'],
    disponibilite:'Sur rendez-vous',
    lieux_frequentes:['Darwin Écosystème','La Maison Écocitoyenne'],
    certifications:['QualiPV','Électricien']
  },
  {
    nom:'Manon L.', role:'Animatrice zéro déchet', ville:'Bordeaux', icon:'♻️', niveau:3,
    lat:44.83618, lng:-0.57147,
    bio:"J'anime des ateliers zéro déchet et compostage de quartier, pour rendre la réduction des déchets accessible et conviviale.",
    graines:910, quetes_realisees:14, quetes_actives:3, graines_passifs:60,
    competences:['Compostage','Zéro déchet','Ateliers DIY','Animation'],
    disponibilite:'Ateliers le week-end',
    lieux_frequentes:['La Halle des Douves','Supercoop','Le Jardin de ta Sœur'],
    certifications:['Maître composteur']
  },
  {
    nom:'Théo R.', role:'Réparateur vélo & mécanicien', ville:'Bordeaux', icon:'🚲', niveau:3,
    lat:44.83365, lng:-0.57108,
    bio:"Bricoleur et cycliste, je remets sur roues les vélos abandonnés et j'initie les habitants à l'autoréparation.",
    graines:780, quetes_realisees:12, quetes_actives:2, graines_passifs:50,
    competences:['Réparation vélo','Soudure','Réemploi','Mobilité douce'],
    disponibilite:'Permanences hebdo',
    lieux_frequentes:['Le Garage Moderne',"Les Vivres de l'Art"],
    certifications:['Repair café']
  }
];

const MAP_SEMEURS = [
  {
    nom:'Région Nouvelle-Aquitaine', type:'Collectivité territoriale', ville:'Bordeaux', icon:'🏛',
    lat:44.83654, lng:-0.58921,
    description:"Collectivité qui finance la transition écologique et l'ESS sur tout le territoire néo-aquitain (feuille de route Néo Terra, fonds régionaux).",
    graines_engages:48000, graines_retournes:31000, contrats_actifs:3, score_impact:86,
    focus:['Transition énergétique','ESS','Alimentation durable'], esrs:['E1','E5','S3'],
    lieux_finances:['Darwin Écosystème','La Halle des Douves','Le Garage Moderne'],
    prochain_jalon:"Comité d'engagement Néo Terra — mars 2026",
    contact:'Direction Transition écologique'
  },
  {
    nom:'Bordeaux Métropole', type:'Collectivité', ville:'Bordeaux', icon:'🏙',
    lat:44.83735, lng:-0.58477,
    description:"Métropole qui soutient les tiers-lieux, l'alimentation durable et la résilience territoriale via ses appels à projets et son budget participatif.",
    graines_engages:32000, graines_retournes:18500, contrats_actifs:3, score_impact:79,
    focus:['Tiers-lieux','Biodiversité','Résilience territoriale'], esrs:['E4','S3'],
    lieux_finances:['Le Jardin de ta Sœur','La Maison Écocitoyenne',"Les Vivres de l'Art"],
    prochain_jalon:'Validation du budget participatif — avril 2026',
    contact:'Service Nature & Transitions'
  },
  {
    nom:'ADEME Nouvelle-Aquitaine', type:'Agence publique', ville:'Cenon', icon:'♻️',
    lat:44.85599, lng:-0.53462,
    description:"Direction régionale de l'Agence de la transition écologique : aides aux projets énergie, déchets, économie circulaire et adaptation climatique.",
    graines_engages:27000, graines_retournes:15000, contrats_actifs:2, score_impact:83,
    focus:['Énergie','Économie circulaire','Climat'], esrs:['E1','E5'],
    lieux_finances:['Darwin Écosystème','Supercoop'],
    prochain_jalon:'Audit énergétique des lieux financés — Q2 2026',
    contact:'Pôle Économie circulaire'
  },
  {
    nom:'France Active Nouvelle-Aquitaine', type:'Financeur solidaire', ville:'Bordeaux', icon:'🤝',
    lat:44.82768, lng:-0.55176,
    description:"Financeur solidaire de l'ESS : garanties, prêts et accompagnement des entreprises et associations à impact social et écologique.",
    graines_engages:21000, graines_retournes:13200, contrats_actifs:2, score_impact:80,
    focus:['ESS','Emploi','Inclusion'], esrs:['S1','S3'],
    lieux_finances:['Supercoop','Le Garage Moderne'],
    prochain_jalon:'Renouvellement des garanties — juin 2026',
    contact:'Chargé·e de financement ESS'
  },
  {
    nom:'MAIF', type:'Assureur à mission', ville:'Niort', icon:'💚',
    lat:46.33216, lng:-0.48563,
    description:"Assureur militant dont le fonds d'impact soutient des projets à utilité sociale et environnementale, en cohérence avec son statut d'entreprise à mission.",
    graines_engages:18000, graines_retournes:9000, contrats_actifs:2, score_impact:77,
    focus:['Entreprise à mission','Lien social','Climat'], esrs:['E1','S3'],
    lieux_finances:['Darwin Écosystème',"Les Vivres de l'Art"],
    prochain_jalon:"Revue d'impact annuelle — Q1 2026",
    contact:'MAIF Impact'
  },
  {
    nom:'Fondation Léa Nature', type:'Fondation environnementale', ville:'Périgny', icon:'🌿',
    lat:46.16104, lng:-1.09958,
    description:"Fondation d'entreprise (groupe Léa Nature) qui finance la protection de l'environnement, la biodiversité et l'agriculture biologique.",
    graines_engages:14000, graines_retournes:7600, contrats_actifs:2, score_impact:81,
    focus:['Biodiversité','Agriculture bio','Reforestation'], esrs:['E4','E3'],
    lieux_finances:['Le Jardin de ta Sœur','Supercoop'],
    prochain_jalon:'Sélection appel à projets biodiversité — mai 2026',
    contact:'Déléguée générale'
  }
];

// Fiches complètes des lieux réels (alimentent la modale « fiche complète »).
// Rattachées par index, dans le même ordre que MAP_PLACES.
[
  { // Darwin Écosystème
    type:'tiers', phase:'operationnel', annee:'2009', surface:'10 000 m²', statut:'sas',
    email:'contact@darwin.camp', tel:'05 56 77 00 00', web:'https://darwin.camp',
    labels:['bio','zero_dechet'], langues:['fr','en'],
    reseaux:['France Tiers-Lieux','Coopérative Darwin'],
    solutions:['Jardin permaculture','Compostage partagé','Panneaux solaires PV','Récupération eau de pluie','AMAP circuit court'],
    espacesData:[
      {eid:'bureau', capacite:300, surface:3000, phase:'operationnel', activites:['Coworking','Bureaux partagés']},
      {eid:'cafe',   capacite:200, surface:600,  phase:'operationnel', activites:['Restaurant bio','Cantine']},
      {eid:'jardin', capacite:40,  surface:2000, phase:'operationnel', activites:['Ferme urbaine','Permaculture']},
      {eid:'salle',  capacite:500, surface:800,  phase:'operationnel', activites:['Concerts','Conférences']}
    ]
  },
  { // La Halle des Douves
    type:'tiers', phase:'operationnel', annee:'2014', surface:'600 m²', statut:'asso',
    email:'contact@halledesdouves.org', tel:'05 56 00 00 00', web:'https://www.halledesdouves.org',
    labels:['bienvenue'], langues:['fr'],
    reseaux:['Centres sociaux','France Tiers-Lieux'],
    solutions:['Compostage partagé','Repair café','AMAP circuit court'],
    espacesData:[
      {eid:'salle',   capacite:150, surface:300, phase:'operationnel', activites:['Événements','Concerts associatifs']},
      {eid:'cafe',    capacite:50,  surface:120, phase:'operationnel', activites:['Café associatif']},
      {eid:'cuisine', capacite:12,  surface:60,  phase:'operationnel', activites:['Cuisine partagée','Ateliers cuisine']}
    ]
  },
  { // Les Vivres de l'Art
    type:'tiers', phase:'operationnel', annee:'2013', surface:'2 000 m²', statut:'asso',
    email:'contact@lesvivresdelart.org', tel:'06 00 00 00 00', web:'https://www.lesvivresdelart.org',
    labels:['ressourcerie'], langues:['fr','en'],
    reseaux:['Réseau arts visuels'],
    solutions:['Réemploi matériaux','Repair café'],
    espacesData:[
      {eid:'atelier', capacite:30, surface:800, phase:'operationnel', activites:["Ateliers d'artistes",'Sculpture métal']},
      {eid:'salle',   capacite:120,surface:500, phase:'operationnel', activites:['Expositions','Scène']},
      {eid:'cafe',    capacite:80, surface:200, phase:'operationnel', activites:['Guinguette']}
    ]
  },
  { // Le Garage Moderne
    type:'repair', phase:'operationnel', annee:'2000', surface:'1 500 m²', statut:'asso',
    email:'contact@legaragemoderne.org', tel:'05 56 50 91 33', web:'https://www.legaragemoderne.org',
    labels:['ressourcerie','zero_dechet'], langues:['fr'],
    reseaux:["L'Heureux Cyclage"],
    solutions:['Réemploi matériaux','Repair café'],
    espacesData:[
      {eid:'atelier',  capacite:40, surface:900, phase:'operationnel', activites:['Réparation auto','Atelier vélo']},
      {eid:'boutique', capacite:20, surface:200, phase:'operationnel', activites:['Donnerie de pièces']},
      {eid:'cafe',     capacite:40, surface:150, phase:'operationnel', activites:['Cantine','Concerts']}
    ]
  },
  { // La Maison Écocitoyenne
    type:'ecole', phase:'operationnel', annee:'2011', surface:'500 m²', statut:'autre',
    email:'maison.eco@mairie-bordeaux.fr', tel:'05 24 57 65 19', web:'https://www.bordeaux.fr',
    labels:['ecoLabel'], langues:['fr','en','es'],
    reseaux:['Ville de Bordeaux'],
    solutions:['Panneaux solaires PV','Récupération eau de pluie'],
    espacesData:[
      {eid:'salle',  capacite:80, surface:250, phase:'operationnel', activites:['Expositions','Ateliers climat']},
      {eid:'bureau', capacite:10, surface:80,  phase:'operationnel', activites:['Conseil écomobilité','Conseil énergie']}
    ]
  },
  { // Supercoop
    type:'epicerie', phase:'operationnel', annee:'2016', surface:'700 m²', statut:'coop',
    email:'contact@supercoop.fr', tel:'05 57 04 73 79', web:'https://supercoop.fr',
    labels:['bio','fairtrade'], langues:['fr'],
    reseaux:['Coopératives alimentaires'],
    solutions:['AMAP circuit court','Réemploi matériaux','Compostage partagé'],
    espacesData:[
      {eid:'boutique', capacite:60, surface:500, phase:'operationnel', activites:['Magasin coopératif','Vrac']},
      {eid:'cafe',     capacite:25, surface:100, phase:'operationnel', activites:['Espace convivial']}
    ]
  },
  { // Le Jardin de ta Sœur
    type:'jardin', phase:'operationnel', annee:'2003', surface:'7 000 m²', statut:'asso',
    email:'contact@jardindetasoeur.org', tel:'05 56 00 00 00', web:'https://www.bordeaux.fr/parc-jardin/jardin-de-ta-soeur',
    labels:['bio','zero_dechet'], langues:['fr'],
    reseaux:['Jardins partagés Bordeaux'],
    solutions:['Jardin permaculture','Potager en buttes','Compostage partagé','Haie champêtre','Mare écologique','Récupération eau de pluie'],
    espacesData:[
      {eid:'jardin', capacite:60, surface:6000, phase:'operationnel', activites:['Potager collectif','Verger 22 arbres']},
      {eid:'serre',  capacite:10, surface:80,   phase:'operationnel', activites:['Semis','Plants']}
    ]
  }
].forEach((f, i) => { if (MAP_PLACES[i]) MAP_PLACES[i].fiche = f; });

// Indicateurs d'impact (illustratifs) par lieu, même ordre que MAP_PLACES.
[
  {kwh:'42 000', co2:'31 t', pers:'5 200',  dechets:'18 t', emplois:'180', fin:'1,2 M€'},
  {kwh:'6 500',  co2:'4 t',  pers:'1 800',  dechets:'3 t',  emplois:'12',  fin:'120 k€'},
  {kwh:'9 000',  co2:'7 t',  pers:'2 400',  dechets:'9 t',  emplois:'25',  fin:'180 k€'},
  {kwh:'7 200',  co2:'12 t', pers:'3 100',  dechets:'22 t', emplois:'18',  fin:'150 k€'},
  {kwh:'11 000', co2:'9 t',  pers:'14 000', dechets:'2 t',  emplois:'9',   fin:'public'},
  {kwh:'5 800',  co2:'15 t', pers:'1 600',  dechets:'6 t',  emplois:'8',   fin:'900 k€'},
  {kwh:'—',      co2:'3 t',  pers:'2 000',  dechets:'5 t',  emplois:'3',   fin:'60 k€'}
].forEach((im, i) => { if (MAP_PLACES[i] && MAP_PLACES[i].fiche) MAP_PLACES[i].fiche.impact = im; });

// Remplit l'onglet « Impact » de la modale lieu depuis cData (KPIs + score détaillé).
function lieuRenderImpact() {
  const kpisEl = document.getElementById('lieu-impact-kpis');
  const im = cData.impact;
  if (kpisEl && im) {
    const cards = [
      {lbl:'kWh produits/an',     val:im.kwh,     sub:'énergie renouvelable', col:'var(--forest)',   bd:'var(--fern)'},
      {lbl:'CO₂ évité/an',        val:im.co2,     sub:'estimation',           col:'var(--amber)',    bd:'var(--amber)'},
      {lbl:'Pers. touchées/mois', val:im.pers,    sub:'communauté',           col:'var(--sky)',      bd:'var(--sky)'},
      {lbl:'Déchets évités/an',   val:im.dechets, sub:'réemploi & compost',   col:'var(--forest)',   bd:'var(--fern)'},
      {lbl:'Emplois soutenus',    val:im.emplois, sub:'ETP équivalents',      col:'var(--lavender)', bd:'var(--lavender)'},
      {lbl:'Financements levés',  val:im.fin,     sub:'partenaires actifs',   col:'var(--amber)',    bd:'var(--amber)'}
    ];
    kpisEl.innerHTML = cards.map(c => `
      <div style="background:white;border:1px solid rgba(74,140,92,.15);border-radius:var(--r-lg);padding:.85rem 1rem;border-left:3px solid ${c.bd}">
        <div style="font-size:.58rem;color:var(--moss);opacity:.65;text-transform:uppercase;letter-spacing:.1em;margin-bottom:.3rem">${c.lbl}</div>
        <div style="font-family:'Satoshi', sans-serif;font-size:1.6rem;font-weight:900;color:${c.col};line-height:1">${c.val}</div>
        <div style="font-size:.6rem;color:var(--moss);opacity:.5;margin-top:.15rem">${c.sub}</div>
      </div>`).join('');
  }
  const scoreEl = document.getElementById('lieu-impact-score');
  if (scoreEl) {
    const score = (typeof cData.score === 'number') ? cData.score : null;
    const dims = (cData.dims && cData.dims.length) ? cData.dims : [];
    const cols = ['#82b894','#6aa0bc','#e8a55a','#a09ad8'];
    const grad = ['linear-gradient(90deg,#4a8c5c,#82b894)','linear-gradient(90deg,#3a6e8c,#6aa0bc)','linear-gradient(90deg,#c8732a,#e8a55a)','linear-gradient(90deg,#7a6ea8,#a09ad8)'];
    scoreEl.innerHTML = `
      <div style="font-size:.58rem;color:var(--sage);text-transform:uppercase;letter-spacing:.12em;opacity:.7;margin-bottom:.5rem">Vadance globale</div>
      <div style="font-family:'Satoshi', sans-serif;font-size:2.4rem;font-weight:900;color:var(--sun);line-height:1;margin-bottom:.2rem">${score!=null?score:'—'}</div>
      <div style="font-size:.65rem;color:rgba(255,255,255,.4);margin-bottom:1rem">${score!=null?(cData.scoreTrim?'tendance '+cData.scoreTrim+' ce trimestre':'sur 100'):'à certifier'}</div>
      <div style="display:flex;flex-direction:column;gap:.45rem">
        ${dims.slice(0,4).map((d,i)=>`
        <div>
          <div style="display:flex;justify-content:space-between;font-size:.62rem;color:var(--mist);opacity:.75;margin-bottom:.2rem"><span>${d.l}</span><span style="color:${cols[i]};font-weight:700">${d.v}</span></div>
          <div style="height:4px;background:rgba(255,255,255,.08);border-radius:100px;overflow:hidden"><div style="width:${d.v}%;height:100%;background:${grad[i]};border-radius:100px"></div></div>
        </div>`).join('')}
      </div>`;
  }
}

// Ouvre la modale « fiche complète » à partir d'un lieu réel de la carte.
function openLieuModalFromPlace(idx) {
  const p = MAP_PLACES[idx];
  if (!p) return;
  cData = Object.assign(_CDATA_EMPTY(), (p.fiche || {}), {
    nom: p.nom,
    icon: p.icon,
    localisation: p.ville,
    lat: p.lat, lng: p.lng,
    desc: p.desc || '',
    besoins: p.besoins || [],
    score: p.score,
    scoreTrim: p.score_trim,
    dims: p.dims || []
  });
  openLieuModal();
}

let currentMapFilter = 'tous';
let batisseurMarkers = [];
let semeurMarkers = [];

function mapSearch(query) {
  const q = query.trim().toLowerCase();
  const clearBtn = document.getElementById('map-search-clear');
  clearBtn.style.display = q ? 'block' : 'none';

  const cards = document.querySelectorAll('#map-panel-main .place-card-mini');
  let totalVisible = 0;

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    const match = !q || text.includes(q);
    card.style.display = match ? '' : 'none';
    if (match) totalVisible++;
  });

  // Show/hide section headers based on visible cards inside
  ['map-section-lieux', 'map-section-batisseurs', 'map-section-semeurs'].forEach(id => {
    const section = document.getElementById(id);
    if (!section) return;
    const visibleCards = section.querySelectorAll('.place-card-mini:not([style*="display: none"])');
    const header = section.querySelector('div:first-child');
    if (header) header.style.display = visibleCards.length ? '' : 'none';
  });

  document.getElementById('map-search-empty').style.display = q && totalVisible === 0 ? 'block' : 'none';
}

function mapSearchClear() {
  const input = document.getElementById('map-search-input');
  input.value = '';
  mapSearch('');
  input.focus();
}

function mapFilter(type, btn) {
  currentMapFilter = type;
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');

  // Show/hide panel sections
  const sLieux = document.getElementById('map-section-lieux');
  const sBat = document.getElementById('map-section-batisseurs');
  const sSem = document.getElementById('map-section-semeurs');

  if (type === 'tous') {
    sLieux.style.display = ''; sBat.style.display = ''; sSem.style.display = '';
  } else if (type === 'lieu') {
    sLieux.style.display = ''; sBat.style.display = 'none'; sSem.style.display = 'none';
  } else if (type === 'batisseur') {
    sLieux.style.display = 'none'; sBat.style.display = ''; sSem.style.display = 'none';
  } else if (type === 'semeur') {
    sLieux.style.display = 'none'; sBat.style.display = 'none'; sSem.style.display = '';
  } else if (type === 'quete') {
    sLieux.style.display = ''; sBat.style.display = 'none'; sSem.style.display = 'none';
  }

  // Show/hide map markers
  evadMarkers.forEach(m => {
    const el = m.getElement();
    if (el) el.style.opacity = (type === 'tous' || type === 'lieu' || type === 'quete') ? '1' : '0.18';
  });
  batisseurMarkers.forEach(m => {
    const el = m.getElement();
    if (el) el.style.opacity = (type === 'tous' || type === 'batisseur') ? '1' : '0.18';
  });
  semeurMarkers.forEach(m => {
    const el = m.getElement();
    if (el) el.style.opacity = (type === 'tous' || type === 'semeur') ? '1' : '0.18';
  });

  // Close acteur panel
  document.getElementById('map-acteur-panel').style.display = 'none';
  document.getElementById('map-panel-main').style.display = '';
}

function mapShowBatisseur(idx) {
  const b = MAP_BATISSEURS[idx];
  const niveauStars = '★'.repeat(b.niveau) + '☆'.repeat(5 - b.niveau);
  const panel = document.getElementById('map-acteur-panel');
  const mainPanel = document.getElementById('map-panel-main');

  panel.innerHTML = `
    <div class="acteur-fiche">
      <!-- Hero -->
      <div class="acteur-hero" style="background:linear-gradient(135deg,#2a1a08,#c8732a88,#1a2a18);border:1px solid rgba(200,115,42,0.3)">
        <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 80% 20%,rgba(200,115,42,0.25),transparent 60%);pointer-events:none"></div>
        <button onclick="mapCloseActeur()" style="position:absolute;top:.7rem;right:.7rem;background:rgba(255,255,255,0.1);border:none;border-radius:50%;width:26px;height:26px;cursor:pointer;font-size:.75rem;color:rgba(255,255,255,0.7);display:flex;align-items:center;justify-content:center">✕</button>
        <div style="position:relative;display:flex;gap:.85rem;align-items:flex-start">
          <div class="acteur-avatar-ring" style="background:linear-gradient(135deg,var(--amber),#8a5010)">${b.icon}</div>
          <div style="flex:1">
            <div style="display:flex;gap:.35rem;flex-wrap:wrap;margin-bottom:.4rem">
              <span class="acteur-badge" style="background:rgba(200,115,42,0.25);color:var(--amber-soft);border:1px solid rgba(200,115,42,0.35)">🌿 Bâtisseur</span>
              <span class="acteur-badge" style="background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.7);border:1px solid rgba(255,255,255,0.12)">📍 ${b.ville}</span>
            </div>
            <div class="acteur-name">${b.nom}</div>
            <div class="acteur-sub">${b.role} · ${niveauStars}</div>
          </div>
        </div>
        <div style="position:relative;margin-top:.85rem;font-size:.7rem;color:rgba(255,255,255,0.65);line-height:1.45">${b.bio}</div>
      </div>

      <!-- Stats -->
      <div class="acteur-stat-row">
        <div class="acteur-stat">
          <div class="acteur-stat-val" style="color:var(--amber)">${b.graines} <span style="font-size:.65rem">🌱</span></div>
          <div class="acteur-stat-lbl">graines</div>
        </div>
        <div class="acteur-stat">
          <div class="acteur-stat-val" style="color:var(--fern)">${b.quetes_realisees}</div>
          <div class="acteur-stat-lbl">Quêtes ✓</div>
        </div>
        <div class="acteur-stat">
          <div class="acteur-stat-val" style="color:var(--sky)">${b.quetes_actives}</div>
          <div class="acteur-stat-lbl">En cours</div>
        </div>
        <div class="acteur-stat">
          <div class="acteur-stat-val" style="color:var(--lavender)">+${b.graines_passifs}</div>
          <div class="acteur-stat-lbl">graines/mois</div>
        </div>
      </div>

      <!-- Compétences -->
      <div class="acteur-section-title">🔧 Compétences</div>
      <div style="margin-bottom:.85rem;display:flex;flex-wrap:wrap">
        ${b.competences.map(c => `<span class="acteur-skill-tag" style="background:rgba(200,115,42,0.1);color:var(--amber);border:1px solid rgba(200,115,42,0.2)">${c}</span>`).join('')}
      </div>

      <!-- Disponibilité -->
      <div class="acteur-section-title">📅 Disponibilité</div>
      <div style="font-size:.72rem;color:var(--moss);margin-bottom:.85rem;padding:.5rem .7rem;background:white;border:1px solid rgba(46,102,66,.1);border-radius:var(--r)">
        ⏱ ${b.disponibilite}
      </div>

      <!-- Lieux fréquentés -->
      <div class="acteur-section-title">🏡 Lieux actifs</div>
      ${b.lieux_frequentes.map(l => `
        <div class="acteur-quete-item" onclick="openLieuModal()">
          <span style="font-size:1rem">🌿</span>
          <span style="font-size:.76rem;font-weight:600;color:var(--ink);flex:1">${l}</span>
          <span style="font-size:.62rem;color:var(--fern)">→</span>
        </div>`).join('')}

      <!-- Certifications -->
      ${b.certifications.length > 0 ? `
      <div class="acteur-section-title" style="margin-top:.85rem">🏅 Certifications</div>
      <div style="display:flex;flex-wrap:wrap;gap:.3rem;margin-bottom:.85rem">
        ${b.certifications.map(cert => `<span class="acteur-skill-tag" style="background:rgba(240,200,74,0.1);color:#9a7a00;border:1px solid rgba(240,200,74,0.3)">✓ ${cert}</span>`).join('')}
      </div>` : ''}

      <div class="acteur-deva-tip">
        <span style="color:var(--sage);font-weight:700">✦ Deva · </span>${b.nom} est actif à ${b.lieux_frequentes[0]}, ${b.quetes_actives} quête${b.quetes_actives > 1 ? 's' : ''} en cours. Ses compétences correspondent à 3 quêtes ouvertes sur votre territoire.
      </div>

      <button class="acteur-cta" style="background:var(--amber);color:white" onclick="mmBubble('✉️ Message envoyé à ${b.nom}, réponse sous 48h')">
        Contacter ce bâtisseur →
      </button>
    </div>
  `;

  mainPanel.style.display = 'none';
  panel.style.display = '';
}

function mapShowSemeur(idx) {
  const s = MAP_SEMEURS[idx];
  const panel = document.getElementById('map-acteur-panel');
  const mainPanel = document.getElementById('map-panel-main');
  const pctRetour = Math.round((s.graines_retournes / s.graines_engages) * 100);

  panel.innerHTML = `
    <div class="acteur-fiche">
      <!-- Hero -->
      <div class="acteur-hero" style="background:linear-gradient(135deg,#08182a,#3a6e8caa,#0e1a18);border:1px solid rgba(58,110,140,0.3)">
        <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 75% 15%,rgba(58,110,140,0.3),transparent 60%);pointer-events:none"></div>
        <button onclick="mapCloseActeur()" style="position:absolute;top:.7rem;right:.7rem;background:rgba(255,255,255,0.1);border:none;border-radius:50%;width:26px;height:26px;cursor:pointer;font-size:.75rem;color:rgba(255,255,255,0.7);display:flex;align-items:center;justify-content:center">✕</button>
        <div style="position:relative;display:flex;gap:.85rem;align-items:flex-start">
          <div class="acteur-avatar-ring" style="background:linear-gradient(135deg,var(--sky),#1a4060)">${s.icon}</div>
          <div style="flex:1">
            <div style="display:flex;gap:.35rem;flex-wrap:wrap;margin-bottom:.4rem">
              <span class="acteur-badge" style="background:rgba(58,110,140,0.25);color:#90c8e8;border:1px solid rgba(58,110,140,0.35)">🌱 Semeur</span>
              <span class="acteur-badge" style="background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.7);border:1px solid rgba(255,255,255,0.12)">📍 ${s.ville}</span>
            </div>
            <div class="acteur-name">${s.nom}</div>
            <div class="acteur-sub">${s.type}</div>
          </div>
        </div>
        <div style="position:relative;margin-top:.85rem;font-size:.7rem;color:rgba(255,255,255,0.65);line-height:1.45">${s.description}</div>
      </div>

      <!-- Stats finances -->
      <div class="acteur-stat-row">
        <div class="acteur-stat" style="grid-column:span 2">
          <div class="acteur-stat-val" style="color:var(--sky);font-size:1.3rem">${s.graines_engages.toLocaleString('fr')} <span style="font-size:.65rem">🌱</span></div>
          <div class="acteur-stat-lbl">graines engagés total</div>
        </div>
        <div class="acteur-stat">
          <div class="acteur-stat-val" style="color:var(--fern)">${s.contrats_actifs}</div>
          <div class="acteur-stat-lbl">Contrats actifs</div>
        </div>
        <div class="acteur-stat">
          <div class="acteur-stat-val" style="color:var(--amber)">${pctRetour}%</div>
          <div class="acteur-stat-lbl">Retour jalons</div>
        </div>
      </div>

      <!-- Score impact -->
      <div style="background:white;border:1px solid rgba(46,102,66,.1);border-radius:var(--r);padding:.65rem .8rem;margin-bottom:.85rem">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.35rem">
          <span style="font-size:.68rem;font-weight:600;color:var(--ink)">Score impact EVAD</span>
          <span style="font-family:'Satoshi', sans-serif;font-size:1rem;font-weight:800;color:var(--sky)">${s.score_impact}</span>
        </div>
        <div class="score-bar-bg"><div class="score-bar-fill" style="width:${s.score_impact}%;background:linear-gradient(90deg,var(--sky),#6ab0d0)"></div></div>
      </div>

      <!-- Focus ESRS -->
      <div class="acteur-section-title">📋 Focus & ESRS</div>
      <div style="display:flex;flex-wrap:wrap;gap:.3rem;margin-bottom:.85rem">
        ${s.focus.map(f => `<span class="acteur-skill-tag" style="background:rgba(58,110,140,0.1);color:var(--sky);border:1px solid rgba(58,110,140,0.2)">${f}</span>`).join('')}
        ${s.esrs.map(e => `<span class="acteur-skill-tag" style="background:rgba(58,110,140,0.08);color:var(--sky);border:1px solid rgba(58,110,140,0.15);font-family:monospace;font-size:.6rem">ESRS ${e}</span>`).join('')}
      </div>

      <!-- Lieux financés -->
      <div class="acteur-section-title">🏡 Lieux financés</div>
      ${s.lieux_finances.map(l => `
        <div class="acteur-contrat-item">
          <span style="font-size:1rem;flex-shrink:0">🌿</span>
          <div style="flex:1">
            <div style="font-size:.76rem;font-weight:600;color:var(--ink)">${l}</div>
            <div style="font-size:.62rem;color:var(--moss);opacity:.7;margin-top:.08rem">Contrat actif · Jalons en cours</div>
          </div>
          <span style="font-size:.62rem;font-weight:700;color:var(--sky)">SC ✓</span>
        </div>`).join('')}

      <!-- Prochain jalon -->
      <div class="acteur-section-title" style="margin-top:.85rem">⏳ Prochain jalon</div>
      <div style="font-size:.72rem;color:var(--moss);padding:.5rem .7rem;background:rgba(58,110,140,.05);border:1px solid rgba(58,110,140,.15);border-radius:var(--r);margin-bottom:.85rem">
        ${s.prochain_jalon}
      </div>

      <!-- Contact -->
      <div style="font-size:.65rem;color:var(--moss);opacity:.7;text-align:center;margin-bottom:.5rem">👤 ${s.contact}</div>

      <div class="acteur-deva-tip">
        <span style="color:var(--sage);font-weight:700">✦ Deva · </span>${s.nom} finance ${s.contrats_actifs} lieu${s.contrats_actifs > 1 ? 'x' : ''} EVAD. ${pctRetour}% des graines retournés via jalons certifiés. Profil compatible CSRD E1/E2.
      </div>

      <button class="acteur-cta" style="background:var(--sky);color:white" onclick="mmBubble('📋 Demande de partenariat envoyée à ${s.nom}')">
        Demander un partenariat →
      </button>
    </div>
  `;

  mainPanel.style.display = 'none';
  panel.style.display = '';
}

function mapShowLieu(idx) {
  const place = MAP_PLACES[idx];
  const panel = document.getElementById('map-acteur-panel');
  const mainPanel = document.getElementById('map-panel-main');

  panel.innerHTML = `
    <div class="acteur-fiche">
      <!-- Hero vert -->
      <div class="acteur-hero" style="background:linear-gradient(135deg,#0e2218,#1c3d2899,#162a20);border:1px solid rgba(74,140,92,0.3)">
        <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 80% 20%,rgba(74,140,92,0.3),transparent 60%);pointer-events:none"></div>
        <button onclick="mapCloseActeur()" style="position:absolute;top:.7rem;right:.7rem;background:rgba(255,255,255,0.1);border:none;border-radius:50%;width:26px;height:26px;cursor:pointer;font-size:.75rem;color:rgba(255,255,255,0.7);display:flex;align-items:center;justify-content:center">✕</button>
        <div style="position:relative;display:flex;gap:.85rem;align-items:flex-start">
          <div class="acteur-avatar-ring" style="background:linear-gradient(135deg,var(--fern),var(--moss))">${place.icon}</div>
          <div style="flex:1">
            <div style="display:flex;gap:.35rem;flex-wrap:wrap;margin-bottom:.4rem">
              <span class="acteur-badge" style="background:rgba(74,140,92,0.28);color:var(--sage);border:1px solid rgba(74,140,92,0.35)">🏛 ${place.type}</span>
              <span class="acteur-badge" style="background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.65);border:1px solid rgba(255,255,255,0.12)">📍 ${place.ville}</span>
            </div>
            <div class="acteur-name">${place.nom}</div>
            <div class="acteur-sub">Lieu régénératif · ${place.quetes} quête${place.quetes > 1 ? 's' : ''} ouverte${place.quetes > 1 ? 's' : ''}</div>
          </div>
        </div>
      </div>

      <!-- Description -->
      <p style="font-size:.72rem;color:var(--moss);line-height:1.6;margin-bottom:.75rem;opacity:.85">${place.desc}</p>

      <!-- Vadance + dimensions -->
      <div style="background:white;border:1px solid rgba(46,102,66,.1);border-radius:var(--r-lg);padding:.8rem .9rem;margin-bottom:.75rem">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.6rem">
          <span style="font-size:.68rem;font-weight:600;color:var(--ink)">Vadance</span>
          <span style="font-family:'Satoshi', sans-serif;font-size:1.4rem;font-weight:900;color:var(--sun)">${place.score}</span>
        </div>
        <div class="score-bar-bg" style="height:5px;margin-bottom:.85rem"><div class="score-bar-fill" style="width:${place.score}%"></div></div>
        <div style="display:grid;grid-template-columns:repeat(${place.dims.length || 1},1fr);gap:.55rem">
          ${place.dims.map(d => `
          <div style="text-align:center;padding:.5rem .35rem;background:${d.c}0d;border:1px solid ${d.c}26;border-radius:10px">
            <div style="font-family:'Satoshi', sans-serif;font-size:1.1rem;font-weight:900;color:${d.c};line-height:1">${d.v}</div>
            <div style="font-size:.55rem;color:var(--moss);opacity:.75;margin:.18rem 0 .35rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${d.l}</div>
            <div style="height:3px;background:rgba(46,102,66,.1);border-radius:100px;overflow:hidden"><div style="width:${d.v}%;height:100%;background:${d.c};border-radius:100px"></div></div>
          </div>`).join('')}
        </div>
      </div>

      <!-- Stats -->
      <div class="acteur-stat-row" style="margin-bottom:.75rem">
        <div class="acteur-stat">
          <div class="acteur-stat-val" style="color:var(--amber)">${place.quetes}</div>
          <div class="acteur-stat-lbl">Quêtes ouvertes</div>
        </div>
        <div class="acteur-stat">
          <div class="acteur-stat-val" style="color:var(--fern)">${place.batisseurs}</div>
          <div class="acteur-stat-lbl">Bâtisseurs</div>
        </div>
        <div class="acteur-stat">
          <div class="acteur-stat-val" style="color:var(--sky)">${place.semeurs}</div>
          <div class="acteur-stat-lbl">Semeurs</div>
        </div>
        <div class="acteur-stat">
          <div class="acteur-stat-val" style="color:var(--lavender)">${place.score_trim}</div>
          <div class="acteur-stat-lbl">Score trim.</div>
        </div>
      </div>

      <!-- Quêtes -->
      <div class="acteur-section-title">⚡ Quêtes ouvertes</div>
      ${place.quetes_list.map(q => `
      <div class="acteur-quete-item" onclick="showScreen('quete')">
        <span>${q.icon}</span>
        <div style="flex:1">
          <div style="font-size:.76rem;font-weight:600;color:var(--ink)">${q.title}</div>
          <div style="font-size:.62rem;color:var(--moss);opacity:.7;margin-top:.05rem">${q.meta}</div>
        </div>
        <span style="font-size:.6rem;font-weight:700;padding:.12rem .4rem;border-radius:100px;background:${q.sBg};color:${q.sC}">${q.status}</span>
      </div>`).join('')}

      <!-- Besoins -->
      <div class="acteur-section-title" style="margin-top:.75rem">🔍 Besoins</div>
      <div style="display:flex;flex-wrap:wrap;gap:.3rem;margin-bottom:.75rem">
        ${place.besoins.map(b =>
          `<span class="acteur-skill-tag" style="background:rgba(46,102,66,.07);color:var(--forest);border:1px solid rgba(46,102,66,.15)">${b}</span>`
        ).join('')}
      </div>

      <div class="acteur-deva-tip">
        <span style="color:var(--sage);font-weight:700">✦ Deva · </span>${place.deva}
      </div>

      <button class="acteur-cta" style="background:var(--forest);color:white;margin-top:.6rem" onclick="openLieuModalFromPlace(${idx})">
        Voir la fiche complète →
      </button>
      <button class="acteur-cta" style="background:transparent;color:var(--moss);border:1px solid rgba(46,102,66,.25);margin-top:.4rem" onclick="showScreen('quete')">
        Rejoindre une quête
      </button>
    </div>
  `;

  mainPanel.style.display = 'none';
  panel.style.display = '';
}

function mapCloseActeur() {
  document.getElementById('map-acteur-panel').style.display = 'none';
  document.getElementById('map-panel-main').style.display = '';
}

function createEmojiIcon(icon, bg = "#1c3d28", bg2 = null, isBatisseur = false, isSemeur = false) {
  let shape, extraStyle = "";
  if (isBatisseur) {
    // Hexagonal marker for bâtisseurs
    shape = `
      <div style="
        position:relative;
        width:44px; height:44px;
        display:flex; align-items:center; justify-content:center;
      ">
        <svg width="44" height="44" viewBox="0 0 44 44" style="position:absolute;inset:0">
          <polygon points="22,2 40,12 40,32 22,42 4,32 4,12" fill="${bg}" stroke="rgba(255,255,255,0.85)" stroke-width="2"/>
        </svg>
        <span style="position:relative;z-index:1;font-size:18px;line-height:1">${icon}</span>
      </div>`;
  } else if (isSemeur) {
    // Diamond marker for semeurs
    shape = `
      <div style="
        position:relative;
        width:44px; height:44px;
        display:flex; align-items:center; justify-content:center;
      ">
        <svg width="44" height="44" viewBox="0 0 44 44" style="position:absolute;inset:0">
          <rect x="6" y="6" width="32" height="32" rx="6" transform="rotate(45 22 22)" fill="${bg}" stroke="rgba(255,255,255,0.85)" stroke-width="2"/>
        </svg>
        <span style="position:relative;z-index:1;font-size:18px;line-height:1">${icon}</span>
      </div>`;
  } else {
    // Default round marker for lieux
    shape = `
      <div style="
        width:44px;
        height:44px;
        border-radius:50%;
        background:${bg};
        display:flex;
        align-items:center;
        justify-content:center;
        box-shadow:0 4px 16px rgba(0,0,0,0.22);
        border:2px solid rgba(255,255,255,0.85);
        font-size:20px;
      ">${icon}</div>`;
  }
  return L.divIcon({
    className: "evad-div-icon",
    html: shape,
    iconSize: [44, 44],
    iconAnchor: [22, 22],
    popupAnchor: [0, -18]
  });
}

function markerBgByType(type) {
  if (type.toLowerCase().includes("ferme")) return "#c8732a";
  if (type.toLowerCase().includes("fablab")) return "#3a6e8c";
  if (type.toLowerCase().includes("écolieu")) return "#4a8c5c";
  return "#1c3d28";
}

function popupHTML(place) {
  return `
    <div class="popup-place-title">${place.nom}</div>
    <div class="popup-place-meta">${place.type} · ${place.ville}</div>
    <div class="popup-place-score">Vadance : ${place.score} · ⚡ ${place.quetes} quête(s)</div>
  `;
}

// Rend les lieux de la communauté dans le panneau latéral + compteur (une fois).
let _mapCommunityRendered = false;
function mapRenderCommunity() {
  if (_mapCommunityRendered) return;
  _mapCommunityRendered = true;
  const sLieux = document.getElementById('map-section-lieux');
  if (sLieux && MAP_PLACES.length) {
    sLieux.querySelectorAll(':scope > div').forEach(el => { if (/Aucun/i.test(el.textContent)) el.remove(); });
    MAP_PLACES.forEach((p, idx) => {
      const card = document.createElement('div');
      card.className = 'place-card-mini';
      card.style.cssText = 'cursor:pointer';
      card.onclick = () => mapShowLieu(idx);
      card.innerHTML = `
        <div class="pcm-top">
          <div class="pcm-icon" style="background:rgba(74,140,92,0.15)">${p.icon}</div>
          <div>
            <div class="pcm-name">${p.nom}</div>
            <div class="pcm-type">${p.type} · ${p.ville}</div>
          </div>
        </div>
        <div class="pcm-score-row">
          <div class="score-bar-bg"><div class="score-bar-fill" style="width:${p.score}%"></div></div>
          <div class="score-label">Vadance ${p.score}/100</div>
        </div>
        <div class="pcm-quetes" style="color:var(--fern)">⚡ ${p.quetes} quête${p.quetes>1?'s':''} · ${p.batisseurs} bâtisseur${p.batisseurs>1?'s':''}</div>
      `;
      sLieux.appendChild(card);
    });
    const countEl = document.getElementById('map-lieux-count');
    if (countEl) countEl.textContent = `🏡 ${MAP_PLACES.length} Lieu${MAP_PLACES.length>1?'x':''}`;
  }

  const sBat = document.getElementById('map-section-batisseurs');
  if (sBat && MAP_BATISSEURS.length) {
    sBat.querySelectorAll(':scope > div').forEach(el => { if (/Aucun bâtisseur/i.test(el.textContent)) el.remove(); });
    MAP_BATISSEURS.forEach((b, idx) => {
      const stars = '★'.repeat(b.niveau) + '☆'.repeat(5 - b.niveau);
      const card = document.createElement('div');
      card.className = 'place-card-mini';
      card.style.cssText = 'background:rgba(200,115,42,0.06);border-left:3px solid var(--amber);cursor:pointer';
      card.onclick = () => { mapShowBatisseur(idx); document.getElementById('map-panel-main').style.display='none'; document.getElementById('map-acteur-panel').style.display=''; };
      card.innerHTML = `
        <div class="pcm-top">
          <div class="pcm-icon" style="background:rgba(200,115,42,0.15);color:var(--amber)">${b.icon}</div>
          <div>
            <div class="pcm-name">${b.nom}</div>
            <div class="pcm-type">${b.role} · ${b.ville}</div>
          </div>
        </div>
        <div class="pcm-score-row">
          <div style="font-size:.62rem;color:var(--amber);flex:1">${stars}</div>
          <div class="score-label" style="color:var(--amber)">${b.graines} 🌱</div>
        </div>
        <div class="pcm-quetes" style="color:var(--amber)">⚡ ${b.quetes_realisees} quêtes réalisées · ${b.quetes_actives} en cours</div>
      `;
      sBat.appendChild(card);
    });
    const batCount = document.getElementById('map-bat-count');
    if (batCount) batCount.textContent = `🌿 ${MAP_BATISSEURS.length} Bâtisseur${MAP_BATISSEURS.length>1?'s':''}`;
  }

  const sSem = document.getElementById('map-section-semeurs');
  if (sSem && MAP_SEMEURS.length) {
    sSem.querySelectorAll(':scope > div').forEach(el => { if (/Aucun semeur/i.test(el.textContent)) el.remove(); });
    MAP_SEMEURS.forEach((s, idx) => {
      const card = document.createElement('div');
      card.className = 'place-card-mini';
      card.style.cssText = 'background:rgba(58,110,140,0.06);border-left:3px solid var(--sky);cursor:pointer';
      card.onclick = () => { mapShowSemeur(idx); document.getElementById('map-panel-main').style.display='none'; document.getElementById('map-acteur-panel').style.display=''; };
      card.innerHTML = `
        <div class="pcm-top">
          <div class="pcm-icon" style="background:rgba(58,110,140,0.15);color:var(--sky)">${s.icon}</div>
          <div>
            <div class="pcm-name">${s.nom}</div>
            <div class="pcm-type">${s.type} · ${s.ville}</div>
          </div>
        </div>
        <div class="pcm-score-row">
          <div class="score-bar-bg"><div class="score-bar-fill" style="width:${s.score_impact}%;background:linear-gradient(90deg,var(--sky),#6ab0d0)"></div></div>
          <div class="score-label" style="color:var(--sky)">Impact ${s.score_impact}/100</div>
        </div>
        <div class="pcm-quetes" style="color:var(--sky)">🌱 ${s.graines_engages.toLocaleString('fr')} graines · ${s.contrats_actifs} contrat${s.contrats_actifs>1?'s':''}</div>
      `;
      sSem.appendChild(card);
    });
    const semCount = document.getElementById('map-sem-count');
    if (semCount) semCount.textContent = `🌾 ${MAP_SEMEURS.length} Semeur${MAP_SEMEURS.length>1?'s':''}`;
  }
}

function initRealMap() {
  mapRenderCommunity();
  if (evadMap) {
    setTimeout(() => evadMap.invalidateSize(), 100);
    return;
  }

  evadMap = L.map("real-map", {
    zoomControl: true
  }).setView([44.8, -0.6], 8);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(evadMap);

  MAP_PLACES.forEach((place, idx) => {
    const marker = L.marker([place.lat, place.lng], {
      icon: createEmojiIcon(place.icon, markerBgByType(place.type))
    }).addTo(evadMap);

    marker.bindPopup(popupHTML(place), {
      className: "custom-popup"
    });

    marker.on("click", () => {
      mapShowLieu(idx);
    });
    evadMarkers.push(marker);
  });

  // ─── Bâtisseurs markers ───
  MAP_BATISSEURS.forEach((b, idx) => {
    const marker = L.marker([b.lat, b.lng], {
      icon: createEmojiIcon(b.icon, "#b85e10", "#e07020", true)
    }).addTo(evadMap);

    marker.bindPopup(`
      <div class="popup-place-title">${b.nom}</div>
      <div class="popup-place-meta" style="color:#c8732a">🌿 ${b.role} · ${b.ville}</div>
      <div class="popup-place-score" style="color:#c8732a">${b.graines} graines · ${b.quetes_realisees} quêtes</div>
    `, { className: "custom-popup" });

    marker.on("click", () => {
      mapShowBatisseur(idx);
      document.getElementById('map-panel-main').style.display = 'none';
      document.getElementById('map-acteur-panel').style.display = '';
    });
    batisseurMarkers.push(marker);
  });

  // ─── Semeurs markers ───
  MAP_SEMEURS.forEach((s, idx) => {
    const marker = L.marker([s.lat, s.lng], {
      icon: createEmojiIcon(s.icon, "#1a4a6a", "#3a6e8c", false, true)
    }).addTo(evadMap);

    marker.bindPopup(`
      <div class="popup-place-title">${s.nom}</div>
      <div class="popup-place-meta" style="color:#3a6e8c">🌱 ${s.type} · ${s.ville}</div>
      <div class="popup-place-score" style="color:#3a6e8c">${s.graines_engages.toLocaleString('fr')} graines · ${s.contrats_actifs} contrats</div>
    `, { className: "custom-popup" });

    marker.on("click", () => {
      mapShowSemeur(idx);
      document.getElementById('map-panel-main').style.display = 'none';
      document.getElementById('map-acteur-panel').style.display = '';
    });
    semeurMarkers.push(marker);
  });
}

/* ─── BDD ─── */
let bddCat='tous', bddCplx='tous', bddSel=null, bddEsp='tous', bddLieu='tous', bddOk=false;

function setBddLieu(id, btn){
  bddLieu=id;
  document.querySelectorAll('#bdd-lieu-chips .bdd-esp-chip, #bdd-lieu-chip-tous').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  bddRenderList();
}

function bddUpdateContext(){
  const banner=document.getElementById('bdd-context-banner');
  if(!banner) return;
  // Chercher le type de lieu actif (fiche pilote en cours)
  const type = (typeof cData !== 'undefined' && cData.type) ? cData.type : null;
  if(!type){ banner.style.display='none'; return; }
  const tl = (typeof TYPES_LIEU !== 'undefined' ? TYPES_LIEU : []).find(t=>t.id===type);
  if(!tl){ banner.style.display='none'; return; }
  const count = SOLS.filter(s=>(s.lieux||[]).includes(type)).length;
  document.getElementById('bdd-ctx-icon').textContent = tl.ic;
  document.getElementById('bdd-ctx-text').textContent = `Solutions recommandées pour ton ${tl.l}`;
  document.getElementById('bdd-ctx-count').textContent = `${count} solution${count>1?'s':''} compatibles`;
  banner.style.display='flex';
  // Pré-filtrer automatiquement
  setBddLieu(type, document.getElementById('bdd-lieu-chip-'+type));
}

function initBDD(){
  if(bddOk) return; bddOk=true;

  // Chips type de lieu
  const lc=document.getElementById('bdd-lieu-chips');
  (typeof TYPES_LIEU !== 'undefined' ? TYPES_LIEU : []).forEach(t=>{
    const b=document.createElement('button'); b.className='bdd-esp-chip';
    b.id='bdd-lieu-chip-'+t.id;
    b.textContent=t.ic+' '+t.l;
    b.onclick=()=>setBddLieu(t.id,b);
    lc.appendChild(b);
  });

  // Chips catégories
  const el=document.getElementById('bdd-cats');
  const all=document.createElement('button'); all.className='bdd-cat-btn active';
  all.textContent='Toutes'; all.style.cssText='border-color:var(--moss);color:var(--moss);background:rgba(46,102,66,0.1)';
  all.onclick=()=>{bddCat='tous';el.querySelectorAll('.bdd-cat-btn').forEach(b=>b.classList.remove('active'));all.classList.add('active');bddRenderList();};
  el.appendChild(all);
  Object.entries(CATS).forEach(([k,v])=>{
    const b=document.createElement('button'); b.className='bdd-cat-btn';
    b.textContent=v.l; b.style.cssText=`border-color:${v.c};color:${v.c};background:${v.bg}`;
    b.onclick=()=>{bddCat=k;el.querySelectorAll('.bdd-cat-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');bddRenderList();};
    el.appendChild(b);
  });

  bddRenderList();

  // Deva reco
  const dr=document.getElementById('deva-reco-list');
  [...SOLS].sort(()=>Math.random()-.5).slice(0,5).forEach((s,i)=>{
    const pct=Math.round(93-i*7); const d=document.createElement('div'); d.className='deva-reco-row';
    d.innerHTML=`<div style="font-size:.7rem;font-weight:600;color:var(--ink);margin-bottom:.18rem">${s.img} ${s.nom}</div>
      <div style="display:flex;align-items:center;gap:.35rem;margin-bottom:.15rem">
        <div style="flex:1;height:3px;background:rgba(120,110,168,0.15);border-radius:100px;overflow:hidden"><div style="width:${pct}%;height:100%;background:var(--lavender);border-radius:100px"></div></div>
        <span style="font-size:.6rem;color:var(--lavender);font-weight:600">${pct}%</span></div>
      <div style="font-size:.6rem;color:var(--moss);opacity:.7">${s.impact}</div>`;
    d.onclick=()=>bddDetail(s); dr.appendChild(d);
  });
}

function setEspFilter(id, btn){
  bddEsp=id;
  document.querySelectorAll('.bdd-esp-chip, #esp-chip-tous').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  bddRenderList();
  if(id!=='tous'){
    const esp=ESPS.find(e=>e.id===id);
    if(esp) bddEspaceDetail(esp);
  } else {
    document.getElementById('bdd-detail').innerHTML=`<div style="display:flex;align-items:center;justify-content:center;height:100%;flex-direction:column;gap:1rem;opacity:0.35;"><div style="font-size:3rem;">🌿</div><div style="font-family:'Satoshi', sans-serif;font-size:1rem;color:var(--moss);">Sélectionne un espace ou une solution</div></div>`;
  }
}

function setCplx(c,btn){bddCplx=c;document.querySelectorAll('.bdd-cplx').forEach(b=>b.classList.remove('active'));btn.classList.add('active');bddRenderList();}

// Retourne les solutions liées à un espace
function solsForEsp(esp){
  return SOLS.filter(s=>esp.sols.includes(s.nom));
}

// Agrège indicateurs propres + hérités des solutions (dédupliqués)
function indicateursForEsp(esp){
  const inherited=solsForEsp(esp).flatMap(s=>s.ind||[]);
  return [...new Set([...(esp.indicateurs||[]), ...inherited])];
}

// Agrège ESRS propres + hérités des solutions (dédupliqués)
function esrsForEsp(esp){
  const inherited=solsForEsp(esp).flatMap(s=>s.esrs||[]);
  return [...new Set([...(esp.esrs||[]), ...inherited])];
}

function bddRenderList(){
  const q=(document.getElementById('bdd-search')?.value||'').toLowerCase();
  const el=document.getElementById('bdd-list'); el.innerHTML='';

  // Header espace si filtré
  if(bddEsp!=='tous'){
    const esp=ESPS.find(e=>e.id===bddEsp);
    if(esp){
      const h=document.createElement('div');
      h.style.cssText=`padding:.6rem .9rem;background:${esp.bg};border-bottom:1px solid ${esp.c}33;cursor:pointer;`;
      h.innerHTML=`<div style="font-size:.65rem;font-weight:600;color:${esp.c};display:flex;align-items:center;gap:.4rem">${esp.ic} ${esp.l} <span style="font-size:.55rem;opacity:.6;margin-left:auto">${solsForEsp(esp).length} solutions</span></div>`;
      h.onclick=()=>bddEspaceDetail(esp);
      el.appendChild(h);
    }
  }

  let sols=SOLS.filter(s=>{
    const matchCat=bddCat==='tous'||s.cat===bddCat;
    const matchCplx=bddCplx==='tous'||s.cplx===bddCplx;
    const matchQ=!q||s.nom.toLowerCase().includes(q)||s.desc.toLowerCase().includes(q);
    const matchEsp=bddEsp==='tous'||(ESPS.find(e=>e.id===bddEsp)?.sols||[]).includes(s.nom);
    const matchLieu=bddLieu==='tous'||(s.lieux||[]).includes(bddLieu);
    return matchCat&&matchCplx&&matchQ&&matchEsp&&matchLieu;
  });

  if(!sols.length){el.innerHTML+='<div style="padding:2rem;text-align:center;color:var(--moss);opacity:.4;font-size:.78rem">Aucune solution</div>';return;}

  sols.forEach(s=>{
    const cv=CATS[s.cat]||{c:'#666',bg:'#eee',l:'Autre'};
    const cc={facile:'#2e6020',moyen:'#a06010',expert:'#8a3020'}[s.cplx];
    const d=document.createElement('div'); d.className='sol-item'+(bddSel===s.nom?' sel':'');
    d.innerHTML=`
    ${s.photo?`<div style="height:72px;margin:-0px;border-radius:6px 6px 0 0;overflow:hidden;position:relative">
      <img src="${s.photo}" alt="" style="width:100%;height:100%;object-fit:cover;object-position:center">
      <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(10,26,18,.55),transparent)"></div>
      <span style="position:absolute;bottom:5px;left:8px;font-size:.85rem">${s.img}</span>
    </div>`:''}
    <div style="padding:${s.photo?'.5rem .5rem .4rem':'.2rem 0 .22rem'};display:flex;align-items:flex-start;gap:.4rem">
      ${!s.photo?`<span style="font-size:.95rem;flex-shrink:0">${s.img}</span>`:''}
      <span style="font-size:.76rem;font-weight:600;color:var(--ink);flex:1;line-height:1.3">${s.nom}</span>
      <span style="font-size:.58rem;font-weight:600;color:${cc};flex-shrink:0">${s.cplx}</span>
    </div>
    <div style="padding:0 ${s.photo?'.5rem':''};display:flex;align-items:center;gap:.3rem;flex-wrap:wrap;margin-bottom:.28rem">
      <span style="font-size:.58rem;padding:.1rem .4rem;border-radius:100px;background:${cv.bg};color:${cv.c};font-weight:500">${cv.l}</span>
      <span style="font-size:.58rem;color:var(--fern);font-weight:600;margin-left:auto">${s.impact}</span>
    </div>
    <div style="padding:0 ${s.photo?'.5rem':''};display:flex;gap:.22rem;flex-wrap:wrap">
      ${(s.esrs||[]).map(e=>`<span style="font-size:.53rem;padding:.08rem .32rem;border-radius:100px;background:rgba(58,110,140,0.1);color:var(--sky);font-weight:700;font-family:monospace">${e}</span>`).join('')}
    </div>`;
    d.onclick=()=>{bddSel=s.nom;bddRenderList();bddDetail(s);};
    el.appendChild(d);
  });
}

/* ── Vue détaillée ESPACE ── */
function bddEspaceDetail(esp){
  const sols=solsForEsp(esp);
  const allInd=indicateursForEsp(esp);
  const allEsrs=esrsForEsp(esp);
  const propresInd=esp.indicateurs||[];
  const propresQ=esp.quetes||[];

  const esrsPills=allEsrs.map(e=>`<span style="font-size:.62rem;padding:.18rem .55rem;border-radius:100px;background:rgba(58,110,140,0.15);color:var(--sky);border:1px solid rgba(58,110,140,0.3);font-weight:700;font-family:monospace">${e}</span>`).join('');

  document.getElementById('bdd-detail').innerHTML=`
  <div>
    <!-- Hero espace -->
    <div style="background:linear-gradient(135deg,${esp.c}dd,${esp.c}99);padding:1.8rem 2rem 1.5rem;position:relative;overflow:hidden;">
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 80% 20%,rgba(255,255,255,0.1) 0%,transparent 60%)"></div>
      <div style="position:relative;">
        <div style="font-size:2.8rem;margin-bottom:.6rem">${esp.ic}</div>
        <div style="display:flex;gap:.35rem;flex-wrap:wrap;margin-bottom:.55rem">${esrsPills}</div>
        <div style="font-family:'Satoshi', sans-serif;font-size:1.6rem;font-weight:900;color:#fff;margin-bottom:.35rem">${esp.l}</div>
        <div style="font-size:.82rem;color:rgba(255,255,255,0.82);line-height:1.5">${esp.desc}</div>
        <div style="display:flex;gap:1.2rem;margin-top:1rem;">
          <div style="text-align:center"><div style="font-family:'Satoshi', sans-serif;font-size:1.4rem;font-weight:900;color:#fff">${sols.length}</div><div style="font-size:.58rem;color:rgba(255,255,255,.7);text-transform:uppercase;letter-spacing:.1em">Solutions</div></div>
          <div style="text-align:center"><div style="font-family:'Satoshi', sans-serif;font-size:1.4rem;font-weight:900;color:#fff">${allInd.length}</div><div style="font-size:.58rem;color:rgba(255,255,255,.7);text-transform:uppercase;letter-spacing:.1em">Indicateurs</div></div>
          <div style="text-align:center"><div style="font-family:'Satoshi', sans-serif;font-size:1.4rem;font-weight:900;color:#fff">${propresQ.length + sols.length}</div><div style="font-size:.58rem;color:rgba(255,255,255,.7);text-transform:uppercase;letter-spacing:.1em">Quêtes</div></div>
          <div style="text-align:center"><div style="font-family:'Satoshi', sans-serif;font-size:1.4rem;font-weight:900;color:#fff">${allEsrs.length}</div><div style="font-size:.58rem;color:rgba(255,255,255,.7);text-transform:uppercase;letter-spacing:.1em">ESRS couverts</div></div>
        </div>
      </div>
    </div>

    <div style="padding:1.3rem 1.6rem;display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;">

      <!-- Solutions liées -->
      <div>
        <div style="font-family:'Satoshi', sans-serif;font-size:.9rem;font-weight:600;color:var(--ink);margin-bottom:.7rem;padding-bottom:.35rem;border-bottom:1px solid rgba(46,102,66,.1);display:flex;align-items:center;gap:.5rem;">
          🌿 Solutions liées <span style="font-size:.65rem;color:var(--moss);opacity:.6;font-family:'Satoshi', sans-serif;font-weight:400;margin-left:auto">${sols.length} solutions</span>
        </div>
        <div style="display:flex;flex-direction:column;gap:.45rem;">
          ${sols.length ? sols.map(s=>{
            const cv=CATS[s.cat]||{c:'#666',bg:'#eee',l:'Autre'};
            const cc={facile:'#2e6020',moyen:'#a06010',expert:'#8a3020'}[s.cplx];
            return `<div style="background:white;border:1px solid rgba(46,102,66,.12);border-radius:var(--r-lg);padding:.75rem .9rem;cursor:pointer;transition:all .18s;" onmouseover="this.style.borderColor='rgba(74,140,92,0.4)';this.style.transform='translateX(3px)'" onmouseout="this.style.borderColor='rgba(46,102,66,.12)';this.style.transform=''" onclick="bddSel='${s.nom}';bddRenderList();bddDetail(SOLS.find(x=>x.nom==='${s.nom}'))">
              <div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.3rem">
                <span style="font-size:1rem">${s.img}</span>
                <span style="font-size:.78rem;font-weight:600;color:var(--ink);flex:1">${s.nom}</span>
                <span style="font-size:.58rem;font-weight:600;color:${cc}">${s.cplx}</span>
              </div>
              <div style="display:flex;gap:.3rem;flex-wrap:wrap;align-items:center">
                <span style="font-size:.58rem;padding:.1rem .38rem;border-radius:100px;background:${cv.bg};color:${cv.c};font-weight:500">${cv.l}</span>
                <span style="font-size:.6rem;color:var(--fern);font-weight:500;margin-left:auto">${s.impact}</span>
              </div>
              <div style="display:flex;gap:.2rem;flex-wrap:wrap;margin-top:.25rem">
                ${(s.esrs||[]).map(e=>`<span style="font-size:.53rem;padding:.08rem .32rem;border-radius:100px;background:rgba(58,110,140,0.1);color:var(--sky);font-weight:700;font-family:monospace">${e}</span>`).join('')}
              </div>
            </div>`;
          }).join('') : '<div style="font-size:.72rem;color:var(--moss);opacity:.5;padding:.5rem">Aucune solution associée.</div>'}
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:1.2rem;">

        <!-- Indicateurs RSE/CSRD -->
        <div>
          <div style="font-family:'Satoshi', sans-serif;font-size:.9rem;font-weight:600;color:var(--ink);margin-bottom:.7rem;padding-bottom:.35rem;border-bottom:1px solid rgba(46,102,66,.1);">
            📊 Indicateurs RSE / CSRD
          </div>
          <div style="background:rgba(58,110,140,0.04);border:1px solid rgba(58,110,140,0.15);border-radius:var(--r-lg);padding:.8rem;margin-bottom:.6rem;">
            <div style="font-size:.58rem;text-transform:uppercase;letter-spacing:.1em;color:var(--sky);font-weight:600;margin-bottom:.5rem;">ESRS couverts</div>
            <div style="display:flex;gap:.3rem;flex-wrap:wrap;">${esrsPills}</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:.3rem;">
            ${allInd.map(ind=>{
              const isPropre=propresInd.includes(ind);
              return `<div style="display:flex;align-items:center;gap:.5rem;padding:.4rem .65rem;border-radius:var(--r);background:white;border:1px solid ${isPropre?'rgba(74,140,92,0.25)':'rgba(46,102,66,.08)'};font-size:.7rem;color:var(--ink);">
                <span style="color:${isPropre?'var(--fern)':'var(--moss)'};font-size:.65rem;flex-shrink:0">${isPropre?'◆':'◇'}</span>
                <span style="flex:1">${ind}</span>
                ${isPropre?`<span style="font-size:.52rem;padding:.08rem .3rem;border-radius:100px;background:rgba(74,140,92,0.1);color:var(--fern);font-weight:600">propre</span>`:`<span style="font-size:.52rem;padding:.08rem .3rem;border-radius:100px;background:rgba(46,102,66,0.06);color:var(--moss);font-weight:600;opacity:.7">hérité</span>`}
              </div>`;
            }).join('')}
          </div>
        </div>

        <!-- Quêtes -->
        <div>
          <div style="font-family:'Satoshi', sans-serif;font-size:.9rem;font-weight:600;color:var(--ink);margin-bottom:.7rem;padding-bottom:.35rem;border-bottom:1px solid rgba(46,102,66,.1);">
            ⚡ Quêtes associées
          </div>

          ${propresQ.length ? `<div style="font-size:.58rem;text-transform:uppercase;letter-spacing:.1em;color:var(--fern);font-weight:600;margin-bottom:.4rem;">Propres à l'espace</div>` : ''}
          <div style="display:flex;flex-direction:column;gap:.4rem;margin-bottom:.6rem;">
            ${propresQ.map(q=>`
              <div style="background:white;border:1.5px solid rgba(74,140,92,0.25);border-radius:var(--r-lg);padding:.7rem .9rem;cursor:pointer;transition:all .18s" onmouseover="this.style.borderColor='rgba(74,140,92,0.5)'" onmouseout="this.style.borderColor='rgba(74,140,92,0.25)'" onclick="showScreen('quete')">
                <div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.3rem">
                  <span style="font-size:.85rem">⚡</span>
                  <span style="font-size:.76rem;font-weight:600;color:var(--ink);flex:1">${q.titre}</span>
                  <span style="font-size:.58rem;font-weight:600;padding:.12rem .4rem;border-radius:100px;background:rgba(74,140,92,.1);color:var(--fern)">Ouvert</span>
                </div>
                <div style="display:flex;gap:.5rem;font-size:.62rem;color:var(--moss);opacity:.75;margin-bottom:.3rem"><span>⏱ ${q.duree}</span><span>👥 ${q.nb}</span></div>
                <div style="font-size:.65rem;color:var(--fern);font-weight:600;padding:.3rem .5rem;background:rgba(74,140,92,.06);border-radius:var(--r)">${q.impact}</div>
              </div>`).join('')}
          </div>

          ${sols.some(s=>s.quete) ? `<div style="font-size:.58rem;text-transform:uppercase;letter-spacing:.1em;color:var(--moss);font-weight:600;margin-bottom:.4rem;opacity:.7;">Héritées des solutions</div>` : ''}
          <div style="display:flex;flex-direction:column;gap:.4rem;">
            ${sols.filter(s=>s.quete).map(s=>`
              <div style="background:rgba(255,255,255,0.7);border:1px solid rgba(46,102,66,.12);border-radius:var(--r-lg);padding:.65rem .9rem;cursor:pointer;transition:all .18s" onmouseover="this.style.background='white'" onmouseout="this.style.background='rgba(255,255,255,0.7)'" onclick="bddSel='${s.nom}';bddRenderList();bddDetail(SOLS.find(x=>x.nom==='${s.nom}'))">
                <div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.25rem">
                  <span style="font-size:.82rem">${s.img}</span>
                  <span style="font-size:.73rem;font-weight:600;color:var(--ink);flex:1">${s.quete.titre}</span>
                  <span style="font-size:.55rem;color:var(--moss);opacity:.6">via ${s.nom}</span>
                </div>
                <div style="display:flex;gap:.5rem;font-size:.6rem;color:var(--moss);opacity:.7;margin-bottom:.28rem"><span>⏱ ${s.quete.duree}</span><span>👥 ${s.quete.nb}</span></div>
                <div style="font-size:.62rem;color:var(--fern);font-weight:600">${s.quete.impact_quete}</div>
              </div>`).join('')}
          </div>
        </div>

      </div>
    </div>
  </div>`;
}

let _bddDetailTab = 'solution';
function bddSwitchTab(tab, btn){
  _bddDetailTab = tab;
  document.querySelectorAll('.bdd-detail-tab').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  const sol = document.getElementById('bdd-tab-solution');
  const que = document.getElementById('bdd-tab-quete');
  if(sol) sol.style.display = tab==='solution' ? 'block' : 'none';
  if(que) que.style.display = tab==='quete'    ? 'block' : 'none';
}

function bddDetail(s){
  const cv=CATS[s.cat]||{c:'#666',bg:'#eee',l:'Autre'};
  const cplxMeta={
    facile:{c:'#2e6020',bg:'rgba(74,140,92,.12)',bar:1,label:'Facile'},
    moyen: {c:'#a06010',bg:'rgba(200,115,42,.12)',bar:2,label:'Moyen'},
    expert:{c:'#8a3020',bg:'rgba(184,78,53,.12)', bar:3,label:'Expert'}
  }[s.cplx]||{c:'#666',bg:'#eee',bar:1,label:s.cplx};

  // Lieux compatibles
  const activeLieu = (typeof cData!=='undefined' && cData.type) ? cData.type : null;
  const lieuxChips = (s.lieux||[]).map(id=>{
    const tl=(typeof TYPES_LIEU!=='undefined'?TYPES_LIEU:[]).find(t=>t.id===id);
    if(!tl) return '';
    const isActive = id===activeLieu;
    return `<span style="font-size:.62rem;padding:.2rem .55rem;border-radius:100px;
      background:${isActive?'var(--forest)':'rgba(46,102,66,.07)'};
      color:${isActive?'white':'var(--moss)'};
      border:1px solid ${isActive?'var(--forest)':'rgba(46,102,66,.18)'};
      font-weight:${isActive?'700':'500'};white-space:nowrap">${tl.ic} ${tl.l}</span>`;
  }).join('');

  // Barre de complexité
  const barDots=[1,2,3].map(n=>`<div style="width:18px;height:5px;border-radius:100px;background:${n<=cplxMeta.bar?cplxMeta.c:'rgba(0,0,0,.1)'}"></div>`).join('');

  // ESRS pills
  const esrsPills=(s.esrs||[]).map(e=>`<span style="font-size:.65rem;padding:.22rem .6rem;border-radius:100px;background:rgba(58,110,140,0.12);color:#1a5a90;border:1px solid rgba(58,110,140,0.25);font-weight:700;font-family:monospace">${e}</span>`).join('');

  // (plan & materiel now rendered inline via SOLS_INDICATORS in the Quête tab)

  document.getElementById('bdd-detail').innerHTML=`
  <div style="padding-bottom:2rem">

    <!-- ① HERO avec image -->
    <div style="position:relative;overflow:hidden;min-height:200px">
      ${s.photo ? `<img src="${s.photo}" alt="${s.nom}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center">` : ''}
      <div style="position:absolute;inset:0;background:linear-gradient(160deg,rgba(10,30,18,.82) 0%,rgba(20,60,35,.65) 60%,rgba(10,30,18,.5) 100%)"></div>
      <div style="position:relative;padding:1.5rem 1.6rem 1.3rem">
        <div style="display:flex;align-items:center;gap:.4rem;margin-bottom:.8rem;flex-wrap:wrap">
          <span style="font-size:.58rem;padding:.15rem .5rem;border-radius:100px;background:rgba(255,255,255,.15);color:white;backdrop-filter:blur(4px);font-weight:600">${cv.l}</span>
          <span style="font-size:.58rem;padding:.15rem .5rem;border-radius:100px;background:rgba(255,255,255,.12);color:rgba(255,255,255,.9);font-weight:600">${cplxMeta.label}</span>
          ${(s.esrs||[]).map(e=>`<span style="font-size:.58rem;padding:.15rem .5rem;border-radius:100px;background:rgba(58,110,140,.35);color:#aad8f0;font-weight:700;font-family:monospace">${e}</span>`).join('')}
        </div>
        <div style="font-family:'Satoshi', sans-serif;font-size:1.6rem;font-weight:900;color:white;line-height:1.15;margin-bottom:.45rem;text-shadow:0 2px 12px rgba(0,0,0,.4)">${s.img} ${s.nom}</div>
        <div style="font-size:.78rem;color:rgba(255,255,255,.8);line-height:1.55;text-shadow:0 1px 6px rgba(0,0,0,.3)">${s.desc}</div>
      </div>
    </div>

    <!-- ONGLETS -->
    <div style="display:flex;border-bottom:1px solid rgba(46,102,66,.12);background:white;position:sticky;top:0;z-index:10">
      <button class="bdd-detail-tab active" onclick="bddSwitchTab('solution',this)" style="flex:1;padding:.7rem;font-size:.78rem;font-weight:600;border:none;background:none;cursor:pointer;color:var(--forest);border-bottom:2px solid var(--forest)">📋 Solution</button>
      <button class="bdd-detail-tab" onclick="bddSwitchTab('quete',this)" style="flex:1;padding:.7rem;font-size:.78rem;font-weight:600;border:none;background:none;cursor:pointer;color:var(--moss);opacity:.55;border-bottom:2px solid transparent">⚡ Quête</button>
    </div>

    <!-- PANNEAU SOLUTION -->
    <div id="bdd-tab-solution">

    <!-- ② KPI Impact (hero metric) -->
    <div style="margin:1.1rem 1.4rem 0;background:white;border:1.5px solid rgba(74,140,92,.2);border-radius:1rem;padding:1rem 1.2rem;display:flex;align-items:center;gap:1rem;box-shadow:0 2px 12px rgba(46,102,66,.07)">
      <div style="width:44px;height:44px;border-radius:.75rem;background:rgba(74,140,92,.1);display:flex;align-items:center;justify-content:center;font-size:1.4rem;flex-shrink:0">📈</div>
      <div style="flex:1">
        <div style="font-size:.6rem;text-transform:uppercase;letter-spacing:.12em;color:var(--moss);opacity:.6;margin-bottom:.18rem">Impact principal</div>
        <div style="font-family:'Satoshi', sans-serif;font-size:1.5rem;font-weight:900;color:var(--fern);line-height:1">${s.impact}</div>
      </div>
      ${s.co2>0?`<div style="text-align:right;padding-left:1rem;border-left:1px solid rgba(46,102,66,.1)">
        <div style="font-size:.6rem;text-transform:uppercase;letter-spacing:.12em;color:#2a6090;opacity:.6;margin-bottom:.18rem">CO₂ évité</div>
        <div style="font-family:'Satoshi', sans-serif;font-size:1.3rem;font-weight:900;color:#2a6090">${s.co2}<span style="font-size:.75rem;font-weight:600">t/an</span></div>
      </div>`:''}
    </div>

    <!-- ③ Lieux compatibles -->
    <div style="margin:1rem 1.4rem 0;background:rgba(246,250,247,.8);border:1px solid rgba(46,102,66,.12);border-radius:1rem;padding:.85rem 1rem">
      <div style="font-size:.6rem;text-transform:uppercase;letter-spacing:.12em;color:var(--moss);opacity:.55;margin-bottom:.55rem">🏡 Compatible avec</div>
      <div style="display:flex;flex-wrap:wrap;gap:.35rem">
        ${lieuxChips||'<span style="font-size:.68rem;color:var(--moss);opacity:.5">Tous types de lieux</span>'}
      </div>
    </div>

    <!-- ④ Métriques secondaires -->
    <div style="margin:1rem 1.4rem 0;display:grid;grid-template-columns:repeat(2,1fr);gap:.55rem">
      <div style="background:white;border:1px solid rgba(46,102,66,.1);border-radius:.85rem;padding:.75rem .85rem">
        <div style="font-size:.58rem;color:var(--moss);opacity:.55;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.3rem">Coût</div>
        <div style="font-size:1rem;font-weight:700;color:var(--ink)">${costFor(s)}</div>
      </div>
      <div style="background:white;border:1px solid rgba(46,102,66,.1);border-radius:.85rem;padding:.75rem .85rem">
        <div style="font-size:.58rem;color:var(--moss);opacity:.55;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.3rem">Complexité</div>
        <div style="display:flex;gap:3px;margin-bottom:.2rem">${barDots}</div>
        <div style="font-size:.72rem;font-weight:600;color:${cplxMeta.c}">${cplxMeta.label}</div>
      </div>
    </div>


    <!-- ⑦ Indicateurs de Changement d'Impact (ICI) -->
    <div style="margin:1rem 1.4rem 0">
      ${typeof iciFicheSolutionHTML==='function'?iciFicheSolutionHTML(s.nom,s.ind):`<div style="font-size:.62rem;text-transform:uppercase;letter-spacing:.12em;color:var(--moss);opacity:.5;margin-bottom:.5rem">◆ Indicateurs CUMUL</div><div style="display:flex;flex-direction:column;gap:.35rem">${s.ind.map(i=>`<div style="display:flex;align-items:center;gap:.65rem;padding:.6rem .85rem;border-radius:.75rem;background:white;border:1px solid rgba(46,102,66,.1)"><div style="width:6px;height:6px;border-radius:50%;background:var(--fern);flex-shrink:0"></div><span style="font-size:.73rem;color:var(--ink)">${i}</span></div>`).join('')}</div>`}
      ${typeof iciCorrespondancesHTML==='function'?iciCorrespondancesHTML(s):''}
    </div>

    <!-- ⑧ CTA -->
    <div style="margin:1.2rem 1.4rem 0;display:flex;gap:.6rem">
      <button class="btn btn-primary" style="flex:1;padding:.7rem" onclick="showScreen('creer')">+ Ajouter à mon lieu</button>
      <button class="btn btn-ghost" style="padding:.7rem .9rem;font-size:.75rem" onclick="bddSwitchTab('quete',document.querySelectorAll('.bdd-detail-tab')[1])">⚡ Quête</button>
    </div>

    </div><!-- fin bdd-tab-solution -->

    <!-- PANNEAU QUÊTE -->
    <div id="bdd-tab-quete" style="display:none;padding-bottom:2rem">

      <!-- Hero quête -->
      <div style="margin:1.1rem 1.4rem 0;background:linear-gradient(135deg,#0e2a1a,#1a4a2e);border-radius:1rem;padding:1.3rem 1.4rem;position:relative;overflow:hidden">
        <div style="position:absolute;right:-10px;top:-10px;font-size:5rem;opacity:.08;line-height:1">⚡</div>
        <div style="position:relative">
          <div style="display:flex;gap:.35rem;flex-wrap:wrap;margin-bottom:.7rem">
            <span style="font-size:.6rem;padding:.15rem .5rem;border-radius:100px;background:rgba(255,255,255,.1);color:rgba(255,255,255,.8);font-weight:600">${cv.l}</span>
            <span style="font-size:.6rem;padding:.15rem .5rem;border-radius:100px;background:rgba(200,115,42,.25);color:#f5c842;font-weight:600">⚡ Quête active</span>
          </div>
          <div style="font-family:'Satoshi', sans-serif;font-size:1.25rem;font-weight:900;color:white;line-height:1.2;margin-bottom:.8rem">${s.quete.titre}</div>
          <div style="display:flex;gap:.5rem;flex-wrap:wrap">
            <div style="background:rgba(255,255,255,.07);border-radius:.6rem;padding:.45rem .75rem;text-align:center">
              <div style="font-family:'Satoshi', sans-serif;font-size:1.1rem;font-weight:900;color:var(--amber)">${s.tok}</div>
              <div style="font-size:.52rem;color:rgba(255,255,255,.45);text-transform:uppercase;letter-spacing:.1em">graines</div>
            </div>
            <div style="background:rgba(255,255,255,.07);border-radius:.6rem;padding:.45rem .75rem;text-align:center">
              <div style="font-family:'Satoshi', sans-serif;font-size:1.1rem;font-weight:900;color:#7ceb6a">${s.co2>0?s.co2+'t':'−'}</div>
              <div style="font-size:.52rem;color:rgba(255,255,255,.45);text-transform:uppercase;letter-spacing:.1em">CO₂ évité</div>
            </div>
            <div style="background:rgba(255,255,255,.07);border-radius:.6rem;padding:.45rem .75rem;text-align:center">
              <div style="font-family:'Satoshi', sans-serif;font-size:1.1rem;font-weight:900;color:var(--sky)">${s.quete.nb}</div>
              <div style="font-size:.52rem;color:rgba(255,255,255,.45);text-transform:uppercase;letter-spacing:.1em">participants</div>
            </div>
            <div style="background:rgba(255,255,255,.07);border-radius:.6rem;padding:.45rem .75rem;text-align:center">
              <div style="font-family:'Satoshi', sans-serif;font-size:1.1rem;font-weight:900;color:white">${s.quete.duree}</div>
              <div style="font-size:.52rem;color:rgba(255,255,255,.45);text-transform:uppercase;letter-spacing:.1em">durée</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Impact si complétée -->
      <div style="margin:1rem 1.4rem 0;background:rgba(74,140,92,.07);border:1.5px solid rgba(74,140,92,.2);border-radius:1rem;padding:.9rem 1.1rem">
        <div style="font-size:.6rem;text-transform:uppercase;letter-spacing:.12em;color:var(--moss);opacity:.55;margin-bottom:.4rem">🎯 Impact si complétée</div>
        <div style="font-size:.92rem;font-weight:700;color:var(--fern)">${s.quete.impact_quete}</div>
      </div>

      <!-- Matériel nécessaire -->
      ${(()=>{
        const ind2 = SOLS_INDICATORS[s.nom]||{};
        const mat = ind2.materiel||[];
        if(!mat.length) return '';
        const matHtml = mat.map(m=>`
          <div style="display:flex;align-items:center;gap:.5rem;padding:.4rem .5rem;border-radius:.55rem;background:rgba(46,102,66,.04)">
            <div style="width:5px;height:5px;border-radius:50%;background:var(--fern);flex-shrink:0"></div>
            <span style="font-size:.72rem;color:var(--ink)">${m}</span>
          </div>`).join('');
        return `<div style="margin:1rem 1.4rem 0;background:white;border:1px solid rgba(46,102,66,.12);border-radius:1rem;padding:.9rem 1.05rem">
          <div style="font-size:.6rem;text-transform:uppercase;letter-spacing:.12em;color:var(--moss);opacity:.55;margin-bottom:.55rem">🛠 Matériel nécessaire</div>
          <div style="display:flex;flex-direction:column;gap:.3rem">${matHtml}</div>
          <div style="margin-top:.6rem;font-size:.68rem;color:var(--moss);opacity:.6">Complexité : ${cplxMeta.label} · Durée estimée : ${s.quete.duree}</div>
        </div>`;
      })()}

      <!-- Plan d'action -->
      ${(()=>{
        const ind2 = SOLS_INDICATORS[s.nom]||{};
        const planSteps = ind2.plan||[];
        if(!planSteps.length) return '';
        const stepsHtml = planSteps.map((step,i)=>`
          <div style="display:flex;gap:.75rem;padding:.6rem .7rem;border-radius:.75rem;border:1px solid rgba(46,102,66,.1);background:${i===0?'rgba(74,140,92,.05)':'transparent'};margin-bottom:.35rem;align-items:flex-start">
            <div style="width:32px;height:32px;border-radius:.55rem;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:1.1rem;background:rgba(46,102,66,.07)">${step.ic}</div>
            <div style="flex:1;min-width:0">
              <div style="font-size:.75rem;font-weight:700;color:var(--ink);margin-bottom:.18rem">${i+1}. ${step.titre}</div>
              <div style="font-size:.68rem;color:var(--moss);line-height:1.5;opacity:.85">${step.desc}</div>
            </div>
            <div style="width:20px;height:20px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.55rem;font-weight:700;background:rgba(46,102,66,.1);color:var(--moss);margin-top:.2rem">${i+1}</div>
          </div>`).join('');
        return `<div style="margin:1rem 1.4rem 0;background:white;border:1px solid rgba(46,102,66,.12);border-radius:1rem;padding:.9rem 1.05rem">
          <div style="font-size:.6rem;text-transform:uppercase;letter-spacing:.12em;color:var(--moss);opacity:.55;margin-bottom:.6rem">📋 Plan d'action · ${planSteps.length} étapes</div>
          ${stepsHtml}
        </div>`;
      })()}

      <!-- CTA -->
      <div style="margin:1.2rem 1.4rem 0;display:flex;gap:.6rem">
        <button class="btn btn-primary" style="flex:1;padding:.75rem;font-size:.88rem" onclick="showScreen('quete')">✅ Rejoindre cette quête</button>
      </div>

    </div><!-- fin bdd-tab-quete -->

  </div>`;
}

function toggleDevaPanel(){const p=document.getElementById('deva-panel');p.style.display=p.style.display==='none'?'flex':'none';}

/* ─── CRÉER LIEU ─── */
const STEPS=[
  {t:'Identité',    h:'Étape 1 · Nom, type et localisation'},
  {t:'Description', h:'Étape 2 · Description, labels, réseaux et contact'},
  {t:'Espaces',     h:'Étape 3 · Les espaces du lieu'},
  {t:'Solutions',   h:'Étape 4 · Solutions proposées par Deva'},
];

const ESP_ACTS={
  cafe:      ['Café associatif','Événements communautaires','Cuisine collective','Marché local','Accueil & hébergement','Épicerie solidaire','AMAP / circuit court','Finance solidaire'],
  fablab:    ['FabLab / atelier','Impression 3D','Électronique','Médiation numérique','Repair café'],
  serre:     ['Maraîchage','Agroforesterie','Compostage','Semences paysannes','Apiculture','Permaculture','Récupération d\'eau','Biodiversité'],
  jardin:    ['Maraîchage','Agroforesterie','Compostage','Semences paysannes','Apiculture','Élevage','Permaculture','Biodiversité'],
  atelier:   ['Repair café','Menuiserie','Couture & textile','Forge & métal','Isolation naturelle','Éco-construction'],
  dortoir:   ['Accueil & hébergement','Énergie solaire','Isolation naturelle','Éco-construction'],
  boutique:  ['Épicerie solidaire','AMAP / circuit court','Ressourcerie / réemploi','Finance solidaire','Mutualisation achats'],
  cuisine:   ['Cuisine collective','AMAP / circuit court','Compostage','Marché local'],
  bureau:    ['Coworking','Télétravail','Incubateur','Accompagnement ESS','Finance solidaire','Mutualisation achats','Médiation numérique'],
  salle:     ['Ateliers & formations','École alternative','Arts & culture','Conférences','Bibliothèque','Événements communautaires'],
};

const ACTIVITES = [
  { cat: '🌱 Agriculture & Alimentation', items: ['Maraîchage','Agroforesterie','AMAP / circuit court','Compostage','Semences paysannes','Apiculture','Élevage'] },
  { cat: '⚙️ Fabrication & Réparation',   items: ['Repair café','FabLab / atelier','Impression 3D','Couture & textile','Menuiserie','Électronique','Forge & métal'] },
  { cat: '♻️ Environnement & Énergie',    items: ['Isolation naturelle','Énergie solaire','Récupération d\'eau','Ressourcerie / réemploi','Biodiversité','Permaculture','Éco-construction'] },
  { cat: '☕ Convivialité & Social',       items: ['Événements communautaires','Café associatif','Épicerie solidaire','Accueil & hébergement','Marché local','Cuisine collective'] },
  { cat: '📚 Formation & Culture',         items: ['Ateliers & formations','École alternative','Arts & culture','Conférences','Bibliothèque','Médiation numérique'] },
  { cat: '💼 Économie & Travail',          items: ['Coworking','Incubateur','Accompagnement ESS','Télétravail','Mutualisation achats','Finance solidaire'] },
];

const BESOINS_OPTS = ['Formateur·rice','Développeur·se web','Électricien·ne','Comptable ESS','Photographe','Juriste','Maçon terre-paille','Animateur·rice atelier','Financement toiture','Financement serre','Financement équipements','Don matériaux'];

const STATUTS = [['asso','Association loi 1901'],['scic','SCIC'],['sas','SAS'],['coop','Coopérative'],['autre','Autre']];

const ACCES_LIEUX = [
  ['libre','🚪','Libre accès'],['adhesion','🎟','Sur adhésion'],
  ['invitation','📩','Sur invitation'],['rdv','📅','Sur rendez-vous'],
];
const LABELS_LIEUX = [
  {id:'bio',ic:'🌾',l:'Agriculture bio'},{id:'bienvenue',ic:'🌱',l:'Bienvenu·e'},
  {id:'ressourcerie',ic:'♻️',l:'Ressourcerie'},{id:'zero_dechet',ic:'🔄',l:'Zéro déchet'},
  {id:'ecoLabel',ic:'🍃',l:'Écolabel EU'},{id:'fairtrade',ic:'✊',l:'Commerce équitable'},
];
const RESEAUX_LIEUX = [
  'Terre de Liens','RTES','Enercoop','La Nef','Réseau CIVAM','FNAB','Alternatiba','Les Cols Verts','Tela Botanica','SCIC Habitat','Habitat Participatif France',
];
const LANGUES_LIEUX = [
  {id:'fr',ic:'🇫🇷',l:'Français'},{id:'en',ic:'🇬🇧',l:'English'},
  {id:'es',ic:'🇪🇸',l:'Español'},{id:'de',ic:'🇩🇪',l:'Deutsch'},
  {id:'it',ic:'🇮🇹',l:'Italiano'},{id:'oc',ic:'🌞',l:'Occitan'},
];

const _CDATA_EMPTY = ()=>({nom:'',type:'',icon:'🌿',localisation:'',desc:'',phase:'',annee:'',surface:'',statut:'',autreType:'',email:'',tel:'',web:'',capacite:'',lits:'',acces:'',horaires:'',labels:[],reseaux:[],langues:[],espaces:[],espacesData:[],activites:[],besoins:[],solutions:[],lat:null,lng:null});

let cStep=0, cData=_CDATA_EMPTY(), cOk=false;

function initCreer(){
  if(!cOk){cOk=true;}
  cStep=0; cData=_CDATA_EMPTY();
  renderStep(); initMM();
  // Gamification : brancher la jauge de Vadance projetée (une seule fois)
  const cc = document.getElementById('creer-step-content');
  if (cc && !cc._vadanceHooked) {
    cc._vadanceHooked = true;
    cc.addEventListener('input', () => setTimeout(creerUpdateVadance, 0));
    cc.addEventListener('click', () => setTimeout(creerUpdateVadance, 40));
  }
  creerLastVadance = 0;
  if (typeof creerUpdateVadance === 'function') creerUpdateVadance(true);
}

let _geoTimer=null;
function geoAutoInput(q){
  const drop=document.getElementById('loc-drop');
  if(drop) drop.remove();
  cData.lat=null; cData.lng=null;
  if(q.length<3){return;}
  clearTimeout(_geoTimer);
  _geoTimer=setTimeout(async()=>{
    try{
      const r=await fetch(`https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(q)}&limit=5`);
      const d=await r.json();
      geoShowDrop(d.features||[]);
    }catch(e){}
  },320);
}

function geoShowDrop(features){
  const wrap=document.getElementById('loc-wrap');
  if(!wrap||!features.length) return;
  const old=document.getElementById('loc-drop');
  if(old) old.remove();
  const ul=document.createElement('div');
  ul.id='loc-drop';
  ul.style.cssText='position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid #d4deca;border-radius:6px;box-shadow:0 4px 12px rgba(0,0,0,.12);z-index:9999;overflow:hidden;margin-top:2px;';
  features.forEach((f,i)=>{
    const label=f.properties.label;
    const lat=f.geometry.coordinates[1];
    const lng=f.geometry.coordinates[0];
    const row=document.createElement('div');
    row.style.cssText=`padding:.55rem .75rem;font-size:.72rem;cursor:pointer;border-bottom:${i<features.length-1?'1px solid #eef2ea':'none'};display:flex;align-items:center;gap:.5rem;`;
    row.innerHTML=`<span style="font-size:.85rem">📍</span><span>${label}</span>`;
    row.onmousedown=()=>geoSelect(label,lat,lng);
    row.onmouseover=()=>row.style.background='#f0f5ee';
    row.onmouseout=()=>row.style.background='';
    ul.appendChild(row);
  });
  wrap.appendChild(ul);
}

function geoSelect(label,lat,lng){
  cData.localisation=label;
  cData.lat=lat;
  cData.lng=lng;
  const inp=document.getElementById('loc-inp');
  if(inp) inp.value=label;
  const drop=document.getElementById('loc-drop');
  if(drop) drop.remove();
  mmCenter();
  const wrap=document.getElementById('loc-wrap');
  if(wrap){
    let ok=wrap.querySelector('.geo-ok');
    if(!ok){ok=document.createElement('div');ok.className='geo-ok';ok.style.cssText='font-size:.6rem;color:var(--fern);margin-top:.2rem;padding-left:.1rem';wrap.appendChild(ok);}
    ok.textContent='📍 Position vérifiée';
  }
}

let _semGeoTimer;
function semGeoAutoInput(q){
  const drop=document.getElementById('sem-loc-drop');
  if(drop) drop.remove();
  semFicheData.localisation='';
  if(q.length<3) return;
  clearTimeout(_semGeoTimer);
  _semGeoTimer=setTimeout(async()=>{
    try{
      const r=await fetch(`https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(q)}&limit=5`);
      const d=await r.json();
      semGeoShowDrop(d.features||[]);
    }catch(e){}
  },320);
}

function semGeoShowDrop(features){
  const wrap=document.getElementById('sem-loc-wrap');
  if(!wrap||!features.length) return;
  const old=document.getElementById('sem-loc-drop');
  if(old) old.remove();
  const ul=document.createElement('div');
  ul.id='sem-loc-drop';
  ul.style.cssText='position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid #d4deca;border-radius:6px;box-shadow:0 4px 12px rgba(0,0,0,.12);z-index:9999;overflow:hidden;margin-top:2px;';
  features.forEach((f,i)=>{
    const label=f.properties.label;
    const row=document.createElement('div');
    row.style.cssText=`padding:.55rem .75rem;font-size:.72rem;cursor:pointer;border-bottom:${i<features.length-1?'1px solid #eef2ea':'none'};display:flex;align-items:center;gap:.5rem;`;
    row.innerHTML=`<span style="font-size:.85rem">📍</span><span>${label}</span>`;
    row.onmousedown=()=>semGeoSelect(label);
    row.onmouseover=()=>row.style.background='#f0f5ee';
    row.onmouseout=()=>row.style.background='';
    ul.appendChild(row);
  });
  wrap.appendChild(ul);
}

function semGeoSelect(label){
  semFicheData.localisation=label;
  const inp=document.getElementById('sem-loc-inp');
  if(inp) inp.value=label;
  const drop=document.getElementById('sem-loc-drop');
  if(drop) drop.remove();
  const wrap=document.getElementById('sem-loc-wrap');
  if(wrap){
    let ok=wrap.querySelector('.geo-ok');
    if(!ok){ok=document.createElement('div');ok.className='geo-ok';ok.style.cssText='font-size:.6rem;color:var(--fern);margin-top:.2rem;padding-left:.1rem';wrap.appendChild(ok);}
    ok.textContent='📍 Position vérifiée';
  }
  semStarUpdateCenter();
}

/* ── Géolocalisation Bâtisseur ── */
let _batGeoTimer;
function batGeoAutoInput(q) {
  const drop = document.getElementById('bat-loc-drop');
  if (drop) drop.remove();
  batFicheData.lat = null; batFicheData.lng = null;
  if (q.length < 3) return;
  clearTimeout(_batGeoTimer);
  _batGeoTimer = setTimeout(async () => {
    try {
      const r = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(q)}&limit=5`);
      const d = await r.json();
      batGeoShowDrop(d.features || []);
    } catch(e) {}
  }, 320);
}

function batGeoShowDrop(features) {
  const wrap = document.getElementById('bat-loc-wrap');
  if (!wrap || !features.length) return;
  const old = document.getElementById('bat-loc-drop');
  if (old) old.remove();
  const ul = document.createElement('div');
  ul.id = 'bat-loc-drop';
  ul.style.cssText = 'position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid #d4deca;border-radius:6px;box-shadow:0 4px 12px rgba(0,0,0,.12);z-index:9999;overflow:hidden;margin-top:2px;';
  features.forEach((f, i) => {
    const label = f.properties.label;
    const lat   = f.geometry.coordinates[1];
    const lng   = f.geometry.coordinates[0];
    const row   = document.createElement('div');
    row.style.cssText = `padding:.55rem .75rem;font-size:.72rem;cursor:pointer;border-bottom:${i < features.length - 1 ? '1px solid #eef2ea' : 'none'};display:flex;align-items:center;gap:.5rem;`;
    row.innerHTML = `<span style="font-size:.85rem">📍</span><span>${label}</span>`;
    row.onmousedown = () => batGeoSelect(label, lat, lng);
    row.onmouseover = () => row.style.background = '#f0f5ee';
    row.onmouseout  = () => row.style.background = '';
    ul.appendChild(row);
  });
  wrap.appendChild(ul);
}

function batGeoSelect(label, lat, lng) {
  batFicheData.ville = label;
  batFicheData.lat   = lat;
  batFicheData.lng   = lng;
  const inp  = document.getElementById('bat-loc-inp');
  if (inp) inp.value = label;
  const drop = document.getElementById('bat-loc-drop');
  if (drop) drop.remove();
  const wrap = document.getElementById('bat-loc-wrap');
  if (wrap) {
    let ok = wrap.querySelector('.geo-ok');
    if (!ok) { ok = document.createElement('div'); ok.className = 'geo-ok'; ok.style.cssText = 'font-size:.6rem;color:var(--fern);margin-top:.2rem;padding-left:.1rem'; wrap.appendChild(ok); }
    ok.textContent = '📍 Position vérifiée';
  }
  batTreeUpdate();
}

function togActivite(a) {
  const i = cData.activites.indexOf(a);
  if (i >= 0) cData.activites.splice(i,1); else cData.activites.push(a);
  renderStep();
}

function togBesoin(b) {
  const i = cData.besoins.indexOf(b);
  if (i >= 0) cData.besoins.splice(i,1); else cData.besoins.push(b);
  renderStep();
}

function addBesoinCustom() {
  const inp = document.getElementById('besoin-custom');
  const v = inp.value.trim();
  if (v && !cData.besoins.includes(v)) { cData.besoins.push(v); renderStep(); }
}

function creerReset(){initCreer();}

/* ─── Gamification : Vadance projetée vivante pendant la création ───
   Les points viennent du potentiel d'impact de ce que le Pilote déclare
   (solutions = ICI, espaces, ambition), pas juste du remplissage. ── */
const VADANCE_PALIERS = [
  { min: 88, label: '🚀 Lieu à fort impact' },
  { min: 65, label: '✨ Prêt à publier' },
  { min: 38, label: '🌱 Impact déclaré' },
  { min: 10, label: '🌿 Lieu esquissé' },
];
let creerLastVadance = 0;

function creerVadance(){
  let v = 0;
  // Fondations (mise en place) : peu de points, ce n'est PAS de l'impact.
  if (cData.nom) v += 3;
  if (cData.type) v += 3;
  if (cData.localisation) v += 2;
  if (cData.desc && cData.desc.trim().length > 15) v += 3;
  if (cData.phase) v += 2;
  // (année / surface / statut : 0 point, pur remplissage administratif)

  // Impact projeté : les espaces structurent, les solutions PORTENT l'impact (ICI).
  v += Math.min(3, (cData.espacesData || []).length) * 5;
  let solPts = 0;
  (cData.solutions || []).forEach(nom => {
    const nbIci = (typeof iciPourSolution === 'function') ? iciPourSolution(nom).length : 0;
    solPts += 10 + nbIci * 6;   // base impact + bonus par ICI réel porté (CO₂ évité, m² renaturés…)
  });
  v += Math.min(72, solPts);    // l'impact déclaré domine le score

  return Math.min(100, v);
}
const creerVadancePalier = (s) => VADANCE_PALIERS.find(p => s >= p.min) || null;

function creerUpdateVadance(silent){
  const v = creerVadance();
  const bar = document.getElementById('creer-vadance-bar');
  if (!bar) { creerLastVadance = v; return; }
  bar.style.width = v + '%';
  const valEl = document.getElementById('creer-vadance-val'); if (valEl) valEl.textContent = v;
  const p = creerVadancePalier(v);
  const palEl = document.getElementById('creer-vadance-palier'); if (palEl) palEl.textContent = p ? p.label : '';
  if (!silent) {
    const delta = v - creerLastVadance;
    if (delta > 0) creerVadanceFloat('+' + delta);
    const prevP = creerVadancePalier(creerLastVadance);
    if (p && (!prevP || p.min > prevP.min)) creerVadanceCelebrate(p.label);
  }
  creerLastVadance = v;
}

function creerVadanceFloat(txt){
  const g = document.getElementById('creer-vadance'); if (!g) return;
  const f = document.createElement('div');
  f.textContent = txt + ' 🌱';
  f.style.cssText = 'position:absolute;top:44px;left:50%;transform:translateX(-50%);z-index:26;font-family:Satoshi,sans-serif;font-weight:900;font-size:.92rem;color:#018262;pointer-events:none;text-shadow:0 2px 6px rgba(255,255,255,.8);animation:vadFloat 1s ease-out forwards';
  g.parentElement.appendChild(f);
  setTimeout(() => f.remove(), 1000);
  g.style.animation = 'none'; void g.offsetWidth; g.style.animation = 'vadPop .42s ease';
}

function creerVadanceCelebrate(label){
  const g = document.getElementById('creer-vadance'); if (!g) return;
  const host = g.parentElement;
  ['✨','🌱','💚','✨','🌿'].forEach((e, i) => {
    const ang = (i / 5) * Math.PI * 2;
    const s = document.createElement('div');
    s.textContent = e;
    s.style.cssText = 'position:absolute;top:26px;left:50%;z-index:27;font-size:1.15rem;pointer-events:none;transform:translate(-50%,0);transition:transform .85s cubic-bezier(.2,.8,.2,1),opacity .85s ease-out';
    host.appendChild(s);
    requestAnimationFrame(() => { s.style.transform = 'translate(calc(-50% + ' + Math.round(Math.cos(ang) * 72) + 'px), ' + Math.round(-32 - Math.abs(Math.sin(ang)) * 46) + 'px)'; s.style.opacity = '0'; });
    setTimeout(() => s.remove(), 880);
  });
  const t = document.createElement('div');
  t.textContent = 'Palier atteint · ' + label;
  t.style.cssText = 'position:absolute;top:52px;left:50%;transform:translateX(-50%);z-index:28;background:#018262;color:#fff;font-family:Satoshi,sans-serif;font-weight:800;font-size:.7rem;padding:.4rem .85rem;border-radius:100px;box-shadow:0 10px 24px -6px rgba(1,130,98,.6);white-space:nowrap;pointer-events:none;animation:vadFloat 1.7s ease-out forwards';
  host.appendChild(t);
  setTimeout(() => t.remove(), 1700);
}

// Écran d'attente « Deva cherche… » affiché avant de révéler un résultat
// généré (solutions d'un lieu, quêtes d'un bâtisseur). opts = {title, msgs}.
function renderDevaSearching(c, opts){
  opts = opts || {};
  const title = opts.title || 'Deva explore la bibliothèque';
  const msgs = opts.msgs || [
    'Analyse des espaces de ton lieu…',
    'Exploration de la bibliothèque de solutions…',
    'Sélection des solutions les plus adaptées…',
    'Détection des synergies circulaires…'
  ];
  c.innerHTML =
    '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:2.5rem 1rem;min-height:320px;animation:obFadeIn .35s ease">'
      +'<div style="position:relative;width:84px;height:84px;margin-bottom:1.3rem">'
        +'<div style="position:absolute;inset:0;border-radius:50%;background:rgba(74,200,110,.12);animation:pulse 1.8s ease-in-out infinite"></div>'
        +'<div style="position:absolute;inset:5px;border-radius:50%;border:2.5px solid rgba(74,200,110,.2);border-top-color:#4ac86e;animation:spin .9s linear infinite"></div>'
        +'<img src="Deva.png" alt="Deva" style="position:absolute;inset:15px;width:54px;height:54px;object-fit:contain;object-position:bottom;transform:scaleX(-1) rotate(12deg);filter:drop-shadow(0 0 8px rgba(74,200,110,.5))">'
      +'</div>'
      +'<div style="font-size:.95rem;font-weight:800;color:var(--ink);margin-bottom:.45rem;font-family:\'Satoshi\',sans-serif">'+title+'</div>'
      +'<div id="creer-sol-loading-msg" style="font-size:.72rem;color:var(--moss);opacity:.8;min-height:1.1em;transition:opacity .25s">'+msgs[0]+'</div>'
      +'<div style="display:flex;gap:.32rem;margin-top:1.05rem">'
        +'<span style="width:7px;height:7px;border-radius:50%;background:#4ac86e;animation:typingBounce 1.1s ease-in-out infinite"></span>'
        +'<span style="width:7px;height:7px;border-radius:50%;background:#4ac86e;animation:typingBounce 1.1s ease-in-out .18s infinite"></span>'
        +'<span style="width:7px;height:7px;border-radius:50%;background:#4ac86e;animation:typingBounce 1.1s ease-in-out .36s infinite"></span>'
      +'</div>'
    +'</div>';
  // Fait défiler les messages pendant la recherche
  let mi = 0;
  clearInterval(window._creerSolMsgTimer);
  window._creerSolMsgTimer = setInterval(()=>{
    const el = document.getElementById('creer-sol-loading-msg');
    if(!el){ clearInterval(window._creerSolMsgTimer); return; }
    mi = (mi + 1) % msgs.length;
    el.style.opacity = '0';
    setTimeout(()=>{ if(el){ el.textContent = msgs[mi]; el.style.opacity = '.8'; } }, 200);
  }, 720);
}

// Aide de Deva pendant la création de lieu : ouvre le chatbot et lui pose une
// question contextuelle selon l'étape en cours et les données déjà saisies.
function devaAideCreer(){
  const nom = cData.nom ? '« ' + cData.nom + ' »' : 'mon lieu';
  const typeLbl = (typeof TYPES_LIEU !== 'undefined' ? (TYPES_LIEU.find(x => x.id === cData.type) || {}).l : '');
  const t = typeLbl ? nom + ' (' + typeLbl + ')' : nom;
  const prompts = {
    0: 'Je crée ' + t + ' sur EVAD. Aide-moi à bien le nommer et à choisir le bon type de lieu.',
    1: 'Je remplis la fiche de ' + t + '. Aide-moi à rédiger une description claire et engageante, et dis-moi quelles infos comptent le plus.',
    2: 'Pour ' + t + ', quels espaces physiques décrire (nom, fonction, flux entrants et sortants) ? Donne-moi des exemples adaptés à ce type de lieu.',
    3: 'Deva a présélectionné des solutions pour ' + t + '. Aide-moi à choisir les plus pertinentes et explique-moi leur impact (les ICI).'
  };
  const q = prompts[cStep] || ('Aide-moi à créer ' + t + ' sur EVAD.');
  const open = (typeof devaChatOpen !== 'undefined') ? devaChatOpen : false;
  if (!open && typeof devaToggleChat === 'function') devaToggleChat();
  const input = document.getElementById('deva-chat-input');
  if (input) input.value = q;
  setTimeout(() => { if (typeof devaSubmit === 'function') devaSubmit(); }, open ? 60 : 360);
}

// Clic sur la pastille Deva : aide contextuelle en création de lieu, sinon ouvre le chat.
function devaPillClick(){
  const cr = document.getElementById('screen-creer');
  if (cr && cr.classList.contains('active') && typeof devaAideCreer === 'function') devaAideCreer();
  else if (typeof devaToggleChat === 'function') devaToggleChat();
}

// Bulle Deva contextuelle pendant la création : explique les solutions/ICI à l'étape 4.
function creerUpdateHint(){
  const txt = document.getElementById('deva-fiche-hint-txt');
  const tip = document.getElementById('deva-fiche-hint');
  if (!txt) return;
  if (cStep === 3 && cData._solsReady) {
    txt.innerHTML = "Voici les solutions repérées, et sous chacune ses <b>ICI</b> 🌱 : l'impact que ton lieu va mesurer. Garde celles qui comptent, ta Vadance monte avec.";
    if (tip) tip.style.display = 'block';
  } else {
    txt.textContent = "Besoin d'aide pour remplir la fiche, je suis là 🌱";
  }
}

function renderStep(){
  navWizardSet(STEPS.map(s=>s.t), cStep, (i)=>{ cStep=i; renderStep(); });
  if (typeof creerUpdateVadance === 'function') creerUpdateVadance();
  if (typeof creerUpdateHint === 'function') creerUpdateHint();
  document.getElementById('creer-prev').style.display=cStep>0?'block':'none';
  const nx=document.getElementById('creer-next');
  const sv=document.getElementById('creer-save-btn');
  nx.style.display=cStep<3?'block':'none';
  nx.textContent=cStep===2?'Générer les solutions ✦':'Suivant →';
  sv.style.display=cStep===3?'block':'none';

  const c=document.getElementById('creer-step-content');
  if(cStep===0){
    c.innerHTML=`
      <label class="creer-lbl">Nom du lieu</label>
      <input class="creer-inp" type="text" placeholder="Ex : La Ferme des Possibles" value="${cData.nom}" oninput="cData.nom=this.value;mmCenter()">
      <label class="creer-lbl">Localisation</label>
      <div style="position:relative" id="loc-wrap">
        <input class="creer-inp" type="text" id="loc-inp" placeholder="Tapez une adresse, ville…"
          value="${cData.localisation||''}" autocomplete="off"
          oninput="geoAutoInput(this.value)"
          onfocus="if(this.value.length>2)geoAutoInput(this.value)"
          onblur="setTimeout(()=>{const d=document.getElementById('loc-drop');if(d)d.remove();},200)">
        ${cData.localisation?`<div style="font-size:.6rem;color:var(--fern);margin-top:.2rem;padding-left:.1rem">📍 Position vérifiée</div>`:''}
      </div>
      <label class="creer-lbl">Type de lieu</label>
      <div style="display:flex;flex-direction:column;gap:.6rem;margin-bottom:.8rem">
        ${Object.entries(TYPES_LIEU.reduce((acc,t)=>{(acc[t.cat]=acc[t.cat]||[]).push(t);return acc;},{})).map(([cat,types])=>`
          <div>
            <div style="font-size:.58rem;font-weight:700;color:var(--moss);opacity:.55;text-transform:uppercase;letter-spacing:.1em;margin-bottom:.3rem">${cat}</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:.3rem">
              ${types.map(t=>`<button class="type-btn${cData.type===t.id?' sel':''}" onclick="cData.type='${t.id}';cData.icon='${t.ic}';document.querySelectorAll('#creer-step-content .type-btn').forEach(b=>b.classList.remove('sel'));this.classList.add('sel');mmCenter()" style="padding:.45rem .5rem"><div style="font-size:1rem;margin-bottom:.15rem">${t.ic}</div><div style="font-size:.68rem">${t.l}</div></button>${t.id==='autre'?`<input class="creer-inp" type="text" placeholder="Précisez…" value="${cData.autreType||''}" oninput="cData.autreType=this.value;mmCenter()" style="align-self:center;margin:0">`:''}`).join('')}
            </div>
          </div>`).join('')}
      </div>
      `;
  } else if(cStep===1){
    c.innerHTML=`
      <label class="creer-lbl">Logo du lieu</label>
      <div style="display:flex;align-items:center;gap:.8rem;margin-bottom:.8rem">
        <div id="creer-logo-preview" style="width:60px;height:60px;border-radius:var(--r);border:1.5px dashed rgba(46,102,66,.25);background:rgba(46,102,66,.04);display:flex;align-items:center;justify-content:center;font-size:1.5rem;flex-shrink:0;overflow:hidden">${cData.logo?`<img src="${cData.logo}" style="width:100%;height:100%;object-fit:cover">`:(cData.icon||'🌿')}</div>
        <div style="flex:1">
          <label style="display:inline-flex;align-items:center;gap:.4rem;cursor:pointer;font-size:.7rem;font-weight:600;color:var(--forest);padding:.35rem .8rem;border:1px solid rgba(46,102,66,.3);border-radius:100px;background:rgba(46,102,66,.06)">
            📁 Déposer une image
            <input type="file" accept="image/*" style="display:none" onchange="creerLogo(this)">
          </label>
          <div style="font-size:.6rem;color:var(--moss);opacity:.55;margin-top:.3rem">PNG, JPG ou SVG · recommandé 200×200 px</div>
        </div>
      </div>
      <label class="creer-lbl">Documents <span style="font-weight:400;opacity:.5;font-size:.65rem">(plaquette, statuts, dossier…)</span></label>
      <label style="display:flex;align-items:center;gap:.5rem;cursor:pointer;font-size:.72rem;font-weight:600;color:var(--forest);padding:.6rem .9rem;border:1.5px dashed rgba(46,102,66,.3);border-radius:var(--r);background:rgba(46,102,66,.04);margin-bottom:.5rem">
        📎 Déposer des documents
        <input type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.odt" multiple style="display:none" onchange="creerDocs(this)">
      </label>
      <div id="creer-docs-list" style="display:flex;flex-direction:column;gap:.3rem;margin-bottom:.8rem">${(cData.docs||[]).map((d,i)=>`<div style="display:flex;align-items:center;justify-content:space-between;gap:.5rem;background:rgba(46,102,66,.05);border:1px solid rgba(46,102,66,.12);border-radius:var(--r);padding:.4rem .6rem"><span style="font-size:.68rem;color:var(--ink);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">📄 ${d}</span><button onclick="cData.docs.splice(${i},1);renderStep()" style="background:none;border:none;color:var(--moss);opacity:.55;cursor:pointer;font-size:.85rem;flex-shrink:0;line-height:1">✕</button></div>`).join('')}</div>
      <label class="creer-lbl">Description</label>
      <textarea class="creer-inp" placeholder="En quelques phrases, décris ton lieu, sa vision et ses activités…" style="height:90px;resize:none" oninput="cData.desc=this.value">${cData.desc||''}</textarea>
      <label class="creer-lbl">Phase du projet</label>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.4rem;margin-bottom:.8rem">
        ${[['idee','💭','Idée'],['conception','📐','Conception'],['chantier','🏗','Chantier'],['operationnel','🌿','Opérationnel']].map(([id,ic,l])=>`<button class="type-btn${cData.phase===id?' sel':''}" onclick="cData.phase='${id}';this.closest('div').querySelectorAll('.type-btn').forEach(b=>b.classList.remove('sel'));this.classList.add('sel')"><div style="font-size:1.1rem;margin-bottom:.2rem">${ic}</div><div>${l}</div></button>`).join('')}
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.5rem">
        <div>
          <label class="creer-lbl">Année de création</label>
          <input class="creer-inp" type="text" placeholder="Ex : 2022" value="${cData.annee||''}" oninput="cData.annee=this.value">
        </div>
        <div>
          <label class="creer-lbl">Surface</label>
          <input class="creer-inp" type="text" placeholder="Ex : 1 200 m²" value="${cData.surface||''}" oninput="cData.surface=this.value">
        </div>
      </div>
      <label class="creer-lbl">Statut juridique</label>
      <select class="creer-inp" onchange="cData.statut=this.value" style="cursor:pointer">
        <option value="">— Choisir —</option>
        ${STATUTS.map(([v,l])=>`<option value="${v}" ${cData.statut===v?'selected':''}>${l}</option>`).join('')}
      </select>
      <label class="creer-lbl" style="margin-top:.6rem">Contact</label>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.4rem;margin-bottom:.4rem">
        <input class="creer-inp" type="email" placeholder="📧 Email" value="${cData.email||''}" oninput="cData.email=this.value" style="margin:0">
        <input class="creer-inp" type="tel" placeholder="📞 Téléphone" value="${cData.tel||''}" oninput="cData.tel=this.value" style="margin:0">
      </div>
      <input class="creer-inp" type="url" placeholder="🌐 Site web, https://…" value="${cData.web||''}" oninput="cData.web=this.value">
      `;
  } else if(cStep===2){
    c.innerHTML=`
      <label class="creer-lbl">Les espaces du lieu</label>
      <p style="font-size:.68rem;color:var(--moss);opacity:.7;margin:-.3rem 0 .9rem;line-height:1.5">Décris chaque espace physique de ton lieu, nom, fonctions, capacité, flux entrants et sortants.</p>
      <div style="display:flex;justify-content:flex-end;margin-bottom:.6rem">
        <button class="btn btn-ghost" style="font-size:0.65rem;padding:0.25rem 0.65rem" onclick="creerOpenEspaceModal(null)">+ Ajouter un espace</button>
      </div>
      <div id="creer-espace-list">
        <div id="creer-espace-empty" style="padding:1rem;text-align:center;font-size:.72rem;color:var(--moss);opacity:.5;border:1px dashed rgba(46,102,66,.2);border-radius:var(--r)">Aucun espace ajouté, clique sur "+ Ajouter un espace"</div>
      </div>`;
    creerRenderEspaces();
    mmBubble('Étape 3 · Décris tes espaces pour organiser les activités et solutions');
  } else if(cStep===3){
    // Temps d'attente : Deva « cherche » les solutions dans la bibliothèque
    // avant de les révéler (rejoué à chaque clic sur « Générer les solutions »).
    if(!cData._solsReady){
      renderDevaSearching(c);
      if(sv) sv.style.display='none';   // pas d'enregistrement pendant la génération
      if(!window._creerSolGenerating){
        window._creerSolGenerating = true;
        setTimeout(()=>{
          window._creerSolGenerating = false;
          clearInterval(window._creerSolMsgTimer);
          cData._solsReady = true;
          if(cStep===3) renderStep();   // révèle les solutions (si toujours à l'étape)
        }, 2300);
      }
      return;
    }
    const FN_TO_ESPS={cuisine:'cuisine',cafe:'cafe',cantine:'cafe',coworking:'bureau',reunion:'bureau',atelier:'atelier',fablab:'fablab',scene:'salle',expo:'salle',boutique:'boutique',biblio:'salle',formation:'salle',jardin:'jardin',serre:'serre',compost:'jardin',hebergement:'dortoir',sport:'salle',meditation:'salle',stockage:'bureau',autre:'cafe',elec_gestion:'dortoir',renouv_prod:'dortoir',therm_gestion:'dortoir',eau_gestion:'serre',ecoconstruct:'atelier',dechets_gestion:'jardin',mobilite:'bureau',gouvernance:'bureau',numerique:'bureau'};
    const espItems=cData.espacesData.length>0
      ? cData.espacesData.map((esp,i)=>{
          const fnId=esp.fonctions[0];
          const fn=FONCTIONS_ESPACE.find(f=>f.id===fnId);
          const eid=FN_TO_ESPS[fnId]||'cafe';
          const style=MM_DOMAINE_STYLE[fn?.domaine]||MM_DOMAINE_STYLE.Autre;
          return{esp,eid,ic:fn?.ic||'📦',c:style.c,bg:style.bg};
        })
      : [{esp:{nom:'Mon lieu'},eid:'cafe',ic:'🏡',c:'#4a8c5c',bg:'rgba(74,140,92,.1)'}];
    const uniqueEids=[...new Set(espItems.map(x=>x.eid))];
    const allPicked=devaPickSols(uniqueEids);
    const byEid={};
    uniqueEids.forEach(eid=>byEid[eid]=[]);
    allPicked.forEach(({sol,eid})=>{if(byEid[eid])byEid[eid].push(sol);});
    const circLinks=computeCircularLinks(cData.espacesData);

    // Expose espItems so creerBddPanelHTML can resolve eid per espace
    window._creerEspItems = espItems;

    // Deva pré-sélectionne les solutions à la première visite
    if(!cData.solsByEspace || Object.keys(cData.solsByEspace).length===0){
      cData.solsByEspace={};
      espItems.forEach(({eid},idx)=>{
        const meta=ESPS.find(e=>e.id===eid);
        cData.solsByEspace[idx]=[...(meta?.sols||[])];
      });
      cData.solutions=[...new Set(Object.values(cData.solsByEspace).flat())];
    }

    const totalSols=cData.solutions.length;
    const totalEsps=espItems.length;

    // Build per-espace blocks
    const espacesHTML=espItems.map(({esp,eid,ic,c:col,bg},idx)=>{
      const assigned=(cData.solsByEspace&&cData.solsByEspace[idx])||[];
      const isOpen=window._activeEspacePanel===idx;
      const nbAvail=SOLS.filter(s=>!assigned.includes(s.nom)).length;

      // Chips des solutions sélectionnées par Deva (modifiables)
      const assignedChips=assigned.length
        ? assigned.map(nom=>{
            const safeNom=nom.replace(/\\/g,'\\\\').replace(/'/g,"\\'");
            return '<span style="display:inline-flex;align-items:center;gap:0;border-radius:100px;background:'+bg+';border:1.5px solid '+col+'55;font-size:.65rem;font-weight:600;color:'+col+';margin:.15rem;overflow:hidden">'
              // Nom cliquable → fiche solution
              +'<span onclick="creerOpenSolDetail(\''+safeNom+'\')" title="Voir la fiche" style="padding:.22rem .45rem .22rem .6rem;cursor:pointer;display:flex;align-items:center;gap:.28rem">'
              +'<span>'+nom+'</span>'
              +'<span style="font-size:.58rem;opacity:.55">↗</span>'
              +'</span>'
              // Séparateur
              +'<span style="width:1px;height:16px;background:'+col+'33;flex-shrink:0"></span>'
              // Bouton retirer
              +'<button onclick="creerRemoveSol('+idx+',\''+safeNom+'\')" title="Retirer" style="border:none;background:none;color:'+col+';cursor:pointer;font-size:.72rem;line-height:1;padding:.22rem .5rem;opacity:.55;transition:opacity .15s" onmouseover="this.style.opacity=\'1\'" onmouseout="this.style.opacity=\'.55\'">✕</button>'
              +'</span>';
          }).join('')
        : '<span style="font-size:.65rem;color:var(--moss);opacity:.4;font-style:italic">Aucune solution</span>';

      // Sous-titre du header
      const subTxt = assigned.length
        ? assigned.length+' solution'+(assigned.length!==1?'s':'')+' sélectionnée'+(assigned.length!==1?'s':'')+' par Deva'
        : 'Aucune solution sélectionnée';

      // Panneau "ajouter d'autres solutions" (sans filtres)
      const bddPanelHTML=isOpen
        ? '<div style="padding:.55rem .75rem .75rem;background:rgba(46,102,66,.03);border-top:1px solid rgba(46,102,66,.1)">'
            +'<div style="font-size:.6rem;font-weight:700;color:var(--moss);opacity:.6;text-transform:uppercase;letter-spacing:.07em;margin-bottom:.4rem">Bibliothèque · ajouter une solution</div>'
            +'<div id="creer-bdd-panel-'+idx+'" style="max-height:200px;overflow-y:auto">'
            +creerBddPanelHTML(idx)
            +'</div>'
          +'</div>'
        : '';

      return '<div class="creer-esp-block">'
        +'<div class="creer-esp-header" onclick="creerToggleEspacePanel('+idx+')" style="cursor:default">'
        +'<span style="font-size:1rem">'+ic+'</span>'
        +'<div style="flex:1;min-width:0">'
        +'<div style="font-size:.75rem;font-weight:700;color:var(--ink)">'+esp.nom+'</div>'
        +'<div style="font-size:.6rem;color:var(--forest);opacity:.85">'+subTxt+'</div>'
        +'</div>'
        +'</div>'
        // Chips des solutions sélectionnées
        +'<div style="padding:.5rem .75rem .6rem;background:white;display:flex;flex-wrap:wrap;align-items:center;gap:0;border-bottom:1px solid rgba(46,102,66,.07)">'
        +assignedChips
        +'</div>'
        +bddPanelHTML
        +(isOpen?'':'<div style="padding:.32rem .75rem .45rem;background:white">'
            +'<button onclick="creerToggleEspacePanel('+idx+')" style="font-size:.63rem;color:var(--moss);background:none;border:none;padding:0;cursor:pointer;font-family:inherit;opacity:.65">+ Ajouter une solution depuis la bibliothèque</button>'
            +'</div>')
        +'</div>';
    }).join('');

    // Synergies section
    let synergiesHTML='';
    if(circLinks.length){
      const synRows=circLinks.map(function(link){
        const from=link.from, to=link.to, fluxIds=link.fluxIds;
        const fromFn=FONCTIONS_ESPACE.find(f=>f.id===from.fonctions[0]);
        const toFn=FONCTIONS_ESPACE.find(f=>f.id===to.fonctions[0]);
        const chips=fluxIds.map(function(fid){
          const f=FLUX_CATALOG.find(x=>x.id===fid);
          return f?'<span style="display:inline-flex;align-items:center;gap:.2rem;padding:.15rem .45rem;border-radius:100px;font-size:.6rem;font-weight:600;background:rgba(46,153,112,.15);color:#2e9970;border:1px solid rgba(46,153,112,.3)">'+f.ic+' '+f.label+'</span>':'';
        }).join('');
        return '<div style="display:flex;align-items:center;flex-wrap:wrap;gap:.4rem;padding:.35rem .5rem;background:rgba(255,255,255,.45);border-radius:calc(var(--r) - 2px);margin-bottom:.3rem;font-size:.68rem">'
          +'<span style="font-weight:600;color:var(--ink)">'+(fromFn?fromFn.ic:'📦')+' '+from.nom+'</span>'
          +'<span style="color:#2e9970;font-size:.75rem">→</span>'
          +chips
          +'<span style="color:#2e9970;font-size:.75rem">→</span>'
          +'<span style="font-weight:600;color:var(--ink)">'+(toFn?toFn.ic:'📦')+' '+to.nom+'</span>'
          +'</div>';
      }).join('');
      synergiesHTML='<div style="background:linear-gradient(135deg,rgba(46,153,112,.08),rgba(26,96,64,.04));border:1px solid rgba(46,153,112,.25);border-radius:var(--r);padding:.65rem .8rem;margin-top:.75rem">'
        +'<div style="font-size:.6rem;font-weight:700;color:#2e9970;letter-spacing:.08em;text-transform:uppercase;margin-bottom:.45rem">🔄 Économie circulaire · '+circLinks.length+' synergie'+(circLinks.length>1?'s':'')+' détectée'+(circLinks.length>1?'s':'')+'</div>'
        +synRows
        +'</div>';
    }

    c.innerHTML=''
      +'<div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.3rem">'
        +'<div style="font-size:.72rem;font-weight:700;color:var(--ink)">🧩 Solutions sélectionnées par Deva</div>'
        +'<div style="margin-left:auto;font-size:.65rem;font-weight:700;background:rgba(1,130,98,.1);color:var(--forest);padding:.1rem .5rem;border-radius:100px">'+totalSols+' solution'+(totalSols!==1?'s':'')+'</div>'
      +'</div>'
      +'<div style="font-size:.65rem;color:var(--moss);opacity:.75;margin-bottom:.9rem;line-height:1.55">Deva a présélectionné les solutions les plus adaptées à chaque espace de ton lieu. Retire celles qui ne te conviennent pas ou ajoute-en d\'autres depuis la bibliothèque.</div>'
      +espacesHTML
      +synergiesHTML;

    genMM(espItems);
    mmDrawCircularLinks(espItems, circLinks);
    renderFluxTable();
  }
}
window._solFilter = window._solFilter || {cat:'tous', q:''};
window._activeEspacePanel = window._activeEspacePanel !== undefined ? window._activeEspacePanel : null;

function creerSolFilter(cat, btn){
  window._solFilter.cat = cat;
  document.querySelectorAll('.sol-cat-chip').forEach(b=>b.classList.remove('active'));
  if(btn) btn.classList.add('active');
  creerSolRefresh();
}

function creerSolSearch(q){
  window._solFilter.q = q.toLowerCase();
  creerSolRefresh();
}

function creerToggleEspacePanel(idx){
  window._activeEspacePanel = window._activeEspacePanel === idx ? null : idx;
  renderStep();
}

function creerAddSol(espIdx, solNom){
  if(!cData.solsByEspace) cData.solsByEspace = {};
  if(!cData.solsByEspace[espIdx]) cData.solsByEspace[espIdx] = [];
  if(!cData.solsByEspace[espIdx].includes(solNom)){
    cData.solsByEspace[espIdx].push(solNom);
    cData.solutions = [...new Set(Object.values(cData.solsByEspace).flat())];
  }
  // Garder le panneau ouvert sur cet espace après ajout
  window._activeEspacePanel = espIdx;
  renderStep();
  mmRefreshSolsStep4();
}

function creerRemoveSol(espIdx, solNom){
  if(cData.solsByEspace && cData.solsByEspace[espIdx]){
    cData.solsByEspace[espIdx] = cData.solsByEspace[espIdx].filter(n=>n!==solNom);
    cData.solutions = Object.values(cData.solsByEspace).flat();
  }
  renderStep();
  mmRefreshSolsStep4();
}

function creerSolRefresh(){
  const espIdx = window._activeEspacePanel;
  if(espIdx === null || espIdx === undefined) return;
  const panel = document.getElementById('creer-bdd-panel-' + espIdx);
  if(!panel) return;
  panel.innerHTML = creerBddPanelHTML(espIdx);
}

// Catégories pertinentes par type d'espace ESPS
const EID_CATS = {
  jardin:   ['alimentaire','biodiversite','dechets','eau'],
  serre:    ['alimentaire','eau','dechets','biodiversite'],
  cuisine:  ['alimentaire','dechets','eau','social'],
  cafe:     ['social','dechets','alimentaire','electricite'],
  fablab:   ['construction','dechets','social','electricite'],
  atelier:  ['construction','dechets','social','biodiversite'],
  bureau:   ['electricite','social','construction'],
  salle:    ['social','electricite','biodiversite'],
  dortoir:  ['construction','electricite','eau','biodiversite'],
  boutique: ['social','construction','dechets','alimentaire'],
};

// Labels et couleurs des catégories
const CAT_META = {
  eau:          {ic:'💧', l:'Eau',          c:'#2a7cb8'},
  electricite:  {ic:'⚡', l:'Énergie',      c:'#b08800'},
  construction: {ic:'🧱', l:'Construction', c:'#8b6914'},
  alimentaire:  {ic:'🌱', l:'Alimentaire',  c:'#4a8c5c'},
  dechets:      {ic:'♻️', l:'Déchets',      c:'#2e9970'},
  biodiversite: {ic:'🌿', l:'Biodiversité', c:'#3a7a3a'},
  social:       {ic:'🤝', l:'Social',       c:'#7a5a9a'},
};

function creerBddPanelHTML(espIdx){
  const assigned = (cData.solsByEspace && cData.solsByEspace[espIdx]) || [];
  const eid = (window._creerEspItems && window._creerEspItems[espIdx]?.eid) || 'cafe';
  const relevantCats = EID_CATS[eid] || Object.keys(CAT_META);

  // Uniquement les solutions dans les catégories pertinentes pour cet espace
  const available = SOLS.filter(s =>
    !assigned.includes(s.nom) && relevantCats.includes(s.cat)
  );

  if (!available.length)
    return '<div style="padding:.65rem;text-align:center;font-size:.68rem;color:var(--moss);opacity:.45;font-style:italic">Toutes les solutions compatibles ont déjà été ajoutées</div>';

  // Grouper par catégorie (ordre EID_CATS)
  let html = '';
  relevantCats.forEach(cat => {
    const group = available.filter(s => s.cat === cat);
    if (!group.length) return;
    const cm = CAT_META[cat] || {ic:'', l:cat, c:'#666'};
    html += '<div style="font-size:.58rem;font-weight:700;color:'+cm.c+';text-transform:uppercase;letter-spacing:.07em;margin:.55rem 0 .28rem;display:flex;align-items:center;gap:.3rem">'
      + '<span>'+cm.ic+'</span><span>'+cm.l+'</span>'
      + '</div>';
    group.forEach(s => {
      const safeNom = s.nom.replace(/\\/g,'\\\\').replace(/'/g,"\\'");
      html += '<div style="display:flex;align-items:center;gap:.5rem;padding:.38rem .5rem;border-radius:.6rem;background:rgba(46,102,66,.03);border:1px solid rgba(46,102,66,.08);margin-bottom:.2rem">'
        + '<span style="font-size:.88rem;flex-shrink:0">' + s.img + '</span>'
        + '<div style="flex:1;min-width:0">'
        + '<div style="font-size:.68rem;font-weight:600;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + s.nom + '</div>'
        + '<div style="font-size:.57rem;color:var(--moss);opacity:.65">' + (s.impact || '') + '</div>'
        + '</div>'
        + '<button onclick="creerOpenSolDetail(\''+safeNom+'\')" style="flex-shrink:0;padding:.25rem .45rem;border-radius:.45rem;border:1.5px solid rgba(46,102,66,.2);background:transparent;color:var(--forest);font-size:.6rem;cursor:pointer">👁</button>'
        + '<button onclick="creerAddSol('+espIdx+',\''+safeNom+'\');creerSolRefresh()" style="flex-shrink:0;padding:.25rem .55rem;border-radius:.45rem;border:none;background:var(--forest);color:white;font-size:.6rem;font-weight:700;cursor:pointer">+ Ajouter</button>'
        + '</div>';
    });
  });
  return html;
}

function togEsp(id,btn){
  const i=cData.espaces.indexOf(id);
  if(i>=0)cData.espaces.splice(i,1);else cData.espaces.push(id);
  mmEspaces(); renderStep();
}
function togEspace(id){
  const i=cData.espaces.indexOf(id);
  if(i>=0)cData.espaces.splice(i,1);else cData.espaces.push(id);
  renderStep();
}
function computeCircularLinks(espaces) {
  const links = [];
  for (let i = 0; i < espaces.length; i++) {
    for (let j = 0; j < espaces.length; j++) {
      if (i === j) continue;
      const shared = (espaces[i].outputs || []).filter(fid => (espaces[j].inputs || []).includes(fid));
      if (shared.length) {
        links.push({ from: espaces[i], fromIdx: i, to: espaces[j], toIdx: j, fluxIds: shared });
      }
    }
  }
  return links;
}

function mmDrawCircularLinks(espItems, links) {
  if (!links.length) return;
  setTimeout(() => {
    const svg = document.getElementById('mm-svg');
    const nodes = document.getElementById('mm-nodes');

    // Inject arrow marker once
    if (!document.getElementById('arrow-circ')) {
      const defs = document.createElementNS('http://www.w3.org/2000/svg','defs');
      defs.innerHTML = `<marker id="arrow-circ" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#2e9970" opacity=".8"/></marker>`;
      svg.insertBefore(defs, svg.firstChild);
    }

    links.forEach(({ from, to, fluxIds }, li) => {
      const fromItem = espItems.find(x => x.esp === from);
      const toItem   = espItems.find(x => x.esp === to);
      if (!fromItem || !toItem) return;
      const fromEl = document.getElementById('mn-e-' + fromItem.eid);
      const toEl   = document.getElementById('mn-e-' + toItem.eid);
      if (!fromEl || !toEl) return;

      const x1 = parseFloat(fromEl.style.left), y1 = parseFloat(fromEl.style.top);
      const x2 = parseFloat(toEl.style.left),   y2 = parseFloat(toEl.style.top);
      // Control point, offset perpendicular to segment
      const cx = (x1+x2)/2 + (y2-y1)*0.35;
      const cy = (y1+y2)/2 - (x2-x1)*0.35;
      // Midpoint on the quadratic bezier at t=0.5
      const mx = 0.25*x1 + 0.5*cx + 0.25*x2;
      const my = 0.25*y1 + 0.5*cy + 0.25*y2;

      // Draw curved dashed path
      const path = document.createElementNS('http://www.w3.org/2000/svg','path');
      path.setAttribute('d', `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`);
      path.setAttribute('stroke','#2e9970');
      path.setAttribute('stroke-width','1.8');
      path.setAttribute('stroke-dasharray','5,4');
      path.setAttribute('fill','none');
      path.setAttribute('opacity','0.7');
      path.setAttribute('marker-end','url(#arrow-circ)');
      svg.appendChild(path);

      // Flux label node at curve midpoint
      const fluxObjs = fluxIds.map(fid => FLUX_CATALOG.find(x => x.id === fid)).filter(Boolean);
      const label = fluxObjs.map(f => f.ic + ' ' + f.label).join(' · ');
      const pill = document.createElement('div');
      pill.className = 'mm-circ-flux';
      pill.style.cssText = `position:absolute;left:${mx}px;top:${my}px;transform:translate(-50%,-50%);
        background:rgba(46,153,112,.12);border:1px solid rgba(46,153,112,.35);border-radius:100px;
        padding:.2rem .55rem;font-size:.58rem;font-weight:600;color:#2e9970;white-space:nowrap;
        pointer-events:none;opacity:0;transition:opacity .3s .1s;z-index:5;`;
      pill.textContent = label;
      nodes.appendChild(pill);
      requestAnimationFrame(() => { pill.style.opacity = '1'; });
    });
  }, 320);
}

function creerNext(){if(cStep<3){if(cStep===2)cData._solsReady=false;/* (re)générer → rejoue l'attente Deva */cStep++;renderStep();}}
function creerPrev(){if(cStep>0){cStep--;renderStep();}}

function showSolDetail(nom){
  const s=SOLS.find(x=>x.nom===nom);
  if(!s) return;
  const cv=CATS[s.cat]||{c:'#4a8c5c',bg:'rgba(74,140,92,.1)',l:s.cat};
  const cc={facile:'#2e6020',moyen:'#a06010',expert:'#8a3020'}[s.cplx];
  const ccb={facile:'rgba(74,140,92,.1)',moyen:'rgba(200,115,42,.1)',expert:'rgba(184,78,53,.1)'}[s.cplx];
  const sel=cData.solutions.includes(nom);
  const esrsPills=(s.esrs||[]).map(e=>`<span style="font-size:.58rem;padding:.14rem .45rem;border-radius:100px;background:rgba(58,110,140,0.15);color:#5a9fc0;border:1px solid rgba(58,110,140,0.25);font-weight:700;font-family:monospace">${e}</span>`).join('');

  const box=document.getElementById('sol-detail-box');
  box.innerHTML=`
    <!-- Hero -->
    <div style="background:linear-gradient(160deg,var(--forest),#1a4a2e);padding:1.3rem 1.1rem 1.1rem;margin:-1.2rem -1.1rem 1rem;position:relative;overflow:hidden">
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 75% 20%,rgba(74,140,92,.3) 0%,transparent 60%)"></div>
      <div style="position:relative">
        <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:.6rem">
          <span style="font-size:2rem">${s.img}</span>
          <button onclick="closeSolDetail()" style="background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.2);border-radius:8px;color:#fff;font-size:.75rem;cursor:pointer;padding:.3rem .6rem;font-weight:600;line-height:1">✕ Fermer</button>
        </div>
        <div style="display:flex;gap:.3rem;flex-wrap:wrap;margin-bottom:.5rem">
          <span style="font-size:.58rem;padding:.14rem .45rem;border-radius:100px;background:${cv.bg};color:${cv.c};border:1px solid ${cv.c};font-weight:500">${cv.l}</span>
          <span style="font-size:.58rem;padding:.14rem .45rem;border-radius:100px;background:${ccb};color:${cc};font-weight:500">${s.cplx}</span>
          <span style="font-size:.58rem;padding:.14rem .45rem;border-radius:100px;background:rgba(212,83,126,.15);color:#903060;font-weight:500">🪙 ${s.tok} graines</span>
          ${esrsPills}
        </div>
        <div style="font-family:'Satoshi', sans-serif;font-size:1.15rem;font-weight:900;color:var(--cream);line-height:1.2;margin-bottom:.4rem">${s.nom}</div>
        <div style="font-size:.72rem;color:rgba(255,255,255,.82);line-height:1.5">${s.desc}</div>
      </div>
    </div>

    <!-- Bouton principal -->
    <button id="sol-detail-toggle" onclick="togSolFromDetail('${nom.replace(/'/g,"\\'")}',this)"
      style="width:100%;padding:.6rem;border-radius:var(--r);border:none;cursor:pointer;font-size:.73rem;font-weight:600;margin-bottom:1rem;
             background:${sel?'rgba(130,130,130,.1)':'var(--forest)'};color:${sel?'var(--moss)':'#fff'}">
      ${sel?'✓ Sélectionnée, Retirer du plan':'+ Ajouter à mon plan'}
    </button>

    <!-- Impact -->
    <div style="font-family:'Satoshi', sans-serif;font-size:.82rem;font-weight:600;color:var(--ink);margin-bottom:.55rem;padding-bottom:.35rem;border-bottom:1px solid rgba(46,102,66,.1)">Impact estimé</div>
    <div style="display:grid;grid-template-columns:1fr${s.co2>0?' 1fr':''};gap:.45rem;margin-bottom:1rem">
      <div style="background:rgba(74,140,92,.07);border:1px solid rgba(74,140,92,.15);border-radius:var(--r);padding:.65rem .8rem">
        <div style="font-size:.55rem;text-transform:uppercase;letter-spacing:.1em;color:var(--moss);opacity:.7;margin-bottom:.2rem">Impact principal</div>
        <div style="font-family:'Satoshi', sans-serif;font-size:.9rem;font-weight:700;color:var(--fern)">${s.impact}</div>
      </div>
      ${s.co2>0?`<div style="background:rgba(58,110,140,.07);border:1px solid rgba(58,110,140,.15);border-radius:var(--r);padding:.65rem .8rem">
        <div style="font-size:.55rem;text-transform:uppercase;letter-spacing:.1em;color:#2a6090;opacity:.7;margin-bottom:.2rem">CO₂ évité</div>
        <div style="font-family:'Satoshi', sans-serif;font-size:.9rem;font-weight:700;color:#2a6090">${s.co2}t/an</div>
      </div>`:''}
    </div>

    <!-- Méta -->
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.4rem;margin-bottom:1rem">
      <div style="background:white;border:1px solid rgba(46,102,66,.1);border-radius:var(--r);padding:.55rem .6rem">
        <div style="font-size:.53rem;color:var(--moss);text-transform:uppercase;letter-spacing:.07em;margin-bottom:.15rem">Coût</div>
        <div style="font-size:.78rem;font-weight:700;color:var(--ink)">${costFor(s)}</div>
      </div>
      <div style="background:white;border:1px solid rgba(46,102,66,.1);border-radius:var(--r);padding:.55rem .6rem">
        <div style="font-size:.53rem;color:var(--moss);text-transform:uppercase;letter-spacing:.07em;margin-bottom:.15rem">Prérequis</div>
        <div style="font-size:.78rem;font-weight:700;color:var(--ink)">${prereqFor(s)}</div>
      </div>
      <div style="background:white;border:1px solid rgba(46,102,66,.1);border-radius:var(--r);padding:.55rem .6rem">
        <div style="font-size:.53rem;color:var(--moss);text-transform:uppercase;letter-spacing:.07em;margin-bottom:.15rem">Compatibilité</div>
        <div style="font-size:.7rem;font-weight:700;color:var(--ink)">${compatFor(s)}</div>
      </div>
    </div>

    <!-- Quête -->
    <div style="font-family:'Satoshi', sans-serif;font-size:.82rem;font-weight:600;color:var(--ink);margin-bottom:.55rem;padding-bottom:.35rem;border-bottom:1px solid rgba(46,102,66,.1)">⚡ Quête associée</div>
    <div style="background:white;border:1px solid rgba(74,140,92,0.2);border-radius:var(--r);padding:.75rem .85rem;margin-bottom:1rem">
      <div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.4rem">
        <div style="width:30px;height:30px;border-radius:8px;background:rgba(74,140,92,0.1);display:flex;align-items:center;justify-content:center;font-size:.85rem;flex-shrink:0">⚡</div>
        <div>
          <div style="font-size:.73rem;font-weight:600;color:var(--ink)">${s.quete.titre}</div>
          <div style="font-size:.58rem;color:var(--moss);opacity:.7;display:flex;gap:.5rem;margin-top:.1rem"><span>⏱ ${s.quete.duree}</span><span>👥 ${s.quete.nb}</span></div>
        </div>
      </div>
      <div style="font-size:.63rem;color:var(--fern);font-weight:600;padding:.4rem .55rem;background:rgba(74,140,92,.06);border-radius:var(--r)">Impact : ${s.quete.impact_quete}</div>
    </div>

    <!-- Indicateurs de Changement d'Impact (ICI) -->
    ${typeof iciFicheSolutionHTML==='function'?iciFicheSolutionHTML(s.nom,s.ind):`<div style="font-family:'Satoshi', sans-serif;font-size:.82rem;font-weight:600;color:var(--ink);margin-bottom:.55rem;padding-bottom:.35rem;border-bottom:1px solid rgba(46,102,66,.1)">Indicateurs CUMUL</div>${s.ind.map(i=>`<div style="display:flex;align-items:center;gap:.5rem;padding:.4rem .6rem;border-radius:var(--r);background:white;border:1px solid rgba(46,102,66,.1);margin-bottom:.3rem;font-size:.68rem;color:var(--ink)"><span style="color:var(--fern);font-size:.6rem">◆</span>${i}</div>`).join('')}`}
    ${typeof iciCorrespondancesHTML==='function'?iciCorrespondancesHTML(s):''}

    <!-- Graines -->
    <div style="background:white;border:1px solid rgba(46,102,66,.1);border-radius:var(--r);overflow:hidden;margin-top:1rem">
      <div style="padding:.5rem .8rem;border-bottom:1px solid rgba(46,102,66,.08);font-size:.68rem;font-weight:600;color:var(--ink)">🌱 Graines</div>
      <div style="padding:.65rem .8rem;display:flex;flex-direction:column;gap:.3rem">
        <div style="display:flex;justify-content:space-between;font-size:.68rem"><span style="color:var(--moss)">Installation</span><span style="font-weight:600;color:var(--amber)">${s.tok} graines</span></div>
        <div style="display:flex;justify-content:space-between;font-size:.68rem"><span style="color:var(--moss)">Contribution bâtisseur</span><span style="font-weight:600;color:var(--amber)">${Math.round(s.tok*.4)} graines</span></div>
      </div>
    </div>
  `;
  const ov=document.getElementById('sol-detail-ov');
  ov.style.display='block';
  requestAnimationFrame(()=>{box.style.transform='translateX(0)';});
}

function closeSolDetail(){
  document.getElementById('sol-detail-box').style.transform='translateX(-100%)';
  setTimeout(()=>{document.getElementById('sol-detail-ov').style.display='none';},300);
}

function togSolFromDetail(nom,btn){
  togSol(nom);
  const sel=cData.solutions.includes(nom);
  btn.style.background=sel?'rgba(130,130,130,.1)':'var(--forest)';
  btn.style.color=sel?'var(--moss)':'#fff';
  btn.textContent=sel?'✓ Sélectionnée, Retirer':'+ Ajouter à mon plan';
}

/* ─── MIND MAP ─── */
function mmW(){return document.getElementById('mm-nodes').parentElement.offsetWidth;}
function mmH(){return document.getElementById('mm-nodes').parentElement.offsetHeight;}

function initMM(){
  if (window.mmPanReset) window.mmPanReset();
  document.getElementById('mm-nodes').innerHTML='';
  document.getElementById('mm-svg').innerHTML='';
  mmAdd('c',cData.nom||'Mon lieu',mmW()/2,mmH()/2,'center');
  mmBubble('Nomme ton lieu et choisis son type…');
}

function mmAdd(id,label,x,y,cls,col,bg){
  const el=document.createElement('div');
  el.className='mm-node mm-'+cls; el.id='mn-'+id;
  el.style.left=x+'px'; el.style.top=y+'px';
  if(col){el.style.color=col;el.style.borderColor=col+'55';el.style.background=bg||col+'18';}
  el.textContent=label; el.style.opacity='0'; el.style.transform='translate(-50%,-50%) scale(.7)';
  document.getElementById('mm-nodes').appendChild(el);
  requestAnimationFrame(()=>{el.style.transition='opacity .35s,transform .35s';el.style.opacity='1';el.style.transform='translate(-50%,-50%) scale(1)';});
  return el;
}

function mmLine(x1,y1,x2,y2,col,dash,fromId,toId){
  const l=document.createElementNS('http://www.w3.org/2000/svg','line');
  l.setAttribute('x1',x1);
  l.setAttribute('y1',y1);
  l.setAttribute('x2',x2);
  l.setAttribute('y2',y2);
  l.setAttribute('stroke',col || 'rgba(46,102,66,.32)');
  l.setAttribute('stroke-width', dash ? '1.8' : '2.2');
  if(dash) l.setAttribute('stroke-dasharray','6,6');
  l.setAttribute('stroke-linecap','round');
  l.setAttribute('opacity', dash ? '0.75' : '0.95');
  if(fromId) l.setAttribute('data-from', fromId);
  if(toId) l.setAttribute('data-to', toId);
  document.getElementById('mm-svg').appendChild(l);
  return l;
}

// Met à jour les extrémités des lignes connectées à un nœud déplacé.
function mmUpdateLinesFor(domId, x, y){
  const svg = document.getElementById('mm-svg'); if(!svg) return;
  svg.querySelectorAll('line[data-from="'+domId+'"]').forEach(l=>{ l.setAttribute('x1', x); l.setAttribute('y1', y); });
  svg.querySelectorAll('line[data-to="'+domId+'"]').forEach(l=>{ l.setAttribute('x2', x); l.setAttribute('y2', y); });
}

/* ─── Déplacement des nœuds du mind map de création (drag) ─── */
(function(){
  let drag=null, sx0=0, sy0=0, nx0=0, ny0=0, moved=false;
  document.addEventListener('mousedown', e=>{
    const node = e.target.closest('#mm-nodes .mm-node');
    if(!node) return;
    drag=node; moved=false;
    sx0=e.clientX; sy0=e.clientY;
    nx0=parseFloat(node.style.left)||0; ny0=parseFloat(node.style.top)||0;
    node.style.zIndex='60'; node.style.cursor='grabbing'; node.style.transition='none';
    e.preventDefault(); e.stopPropagation();
  }, true);
  document.addEventListener('mousemove', e=>{
    if(!drag) return;
    const dx=e.clientX-sx0, dy=e.clientY-sy0;
    if(Math.abs(dx)>3||Math.abs(dy)>3) moved=true;
    const nx=nx0+dx, ny=ny0+dy;
    drag.style.left=nx+'px'; drag.style.top=ny+'px';
    mmUpdateLinesFor(drag.id, nx, ny);
  });
  document.addEventListener('mouseup', ()=>{
    if(!drag) return;
    drag.style.zIndex=''; drag.style.cursor=''; drag.style.transition='';
    if(moved){ window._mmJustDragged=true; setTimeout(()=>{ window._mmJustDragged=false; }, 60); }
    drag=null;
  });
  document.addEventListener('click', e=>{
    if(window._mmJustDragged && e.target.closest('#mm-nodes .mm-node')){ e.stopPropagation(); e.preventDefault(); }
  }, true);
})();

function mmCenter(){
  const el=document.getElementById('mn-c');
  if(!el) return;
  const type=TYPES_LIEU.find(t=>t.id===cData.type);
  const ic=type?.ic||'';
  const loc=cData.localisation?`<div style="font-size:.55rem;opacity:.7;margin-top:1px">📍 ${cData.localisation}</div>`:'';
  const typeLabel=type?(type.id==='autre'&&cData.autreType?cData.autreType:type.l):'';
  const typeLine=typeLabel?`<div style="font-size:.58rem;opacity:.8;margin-top:2px;font-weight:500">${typeLabel}</div>`:'';
  el.innerHTML=`<div style="font-weight:700">${cData.nom||'Mon lieu'}${ic?' · '+ic:''}</div>${typeLine}${loc}`;
}

function mmEspaces(){
  document.querySelectorAll('[id^="mn-e-"],[id^="mn-a-"]').forEach(e=>e.remove());
  document.getElementById('mm-svg').innerHTML='';
  const W=mmW(),H=mmH(),cx=W/2,cy=H/2;
  cData.espaces.forEach((eid,i)=>{
    const e=ESPS.find(x=>x.id===eid)||{l:eid,ic:'📦',c:'#4a8c5c',bg:'rgba(74,140,92,.1)'};
    const a=(2*Math.PI/cData.espaces.length)*i-Math.PI/2;
    const r=Math.min(W,H)*.27; const x=cx+r*Math.cos(a),y=cy+r*Math.sin(a);
    mmLine(cx,cy,x,y,e.c+'88');
    mmAdd('e-'+eid,e.ic+' '+e.l,x,y,'espace',e.c,e.bg);
  });
  if(cData.espaces.length>0)mmBubble(cData.espaces.length+' espace'+(cData.espaces.length>1?'s':'')+' sélectionné'+(cData.espaces.length>1?'s':'')+' → choisis les activités');
}

const MM_DOMAINE_STYLE = {
  Alimentation:    { c:'#7a5010', bg:'rgba(200,140,42,0.12)' },
  Travail:         { c:'#1a3a5a', bg:'rgba(58,110,140,0.12)' },
  Fabrication:     { c:'#1a3a5a', bg:'rgba(58,110,140,0.12)' },
  Culture:         { c:'#5a3a80', bg:'rgba(122,100,168,0.12)' },
  Commerce:        { c:'#903060', bg:'rgba(180,78,100,0.12)' },
  Formation:       { c:'#2e6020', bg:'rgba(74,140,92,0.12)' },
  Nature:          { c:'#1a6040', bg:'rgba(26,112,80,0.12)' },
  Habitat:         { c:'#5a3a80', bg:'rgba(122,100,168,0.12)' },
  Santé:           { c:'#2e6020', bg:'rgba(74,140,92,0.12)' },
  Logistique:      { c:'#4a4a4a', bg:'rgba(74,74,74,0.10)' },
  Fonctionnement:  { c:'#2a6a8a', bg:'rgba(42,106,138,0.12)' },
  Autre:           { c:'#4a8c5c', bg:'rgba(74,140,92,0.10)' },
};

function mmEspacesData() {
  document.querySelectorAll('[id^="mn-ed-"]').forEach(e => e.remove());
  document.getElementById('mm-svg').innerHTML = '';
  const data = cData.espacesData;
  if (!data.length) return;
  const W = mmW(), H = mmH(), cx = W/2, cy = H/2;
  data.forEach((esp, i) => {
    const fn = FONCTIONS_ESPACE.find(f => f.id === esp.fonctions[0]);
    const style = MM_DOMAINE_STYLE[fn?.domaine] || MM_DOMAINE_STYLE.Autre;
    const ic = fn ? fn.ic : '📦';
    const a = (2*Math.PI/data.length)*i - Math.PI/2;
    const r = Math.min(W,H)*.27;
    const x = cx + r*Math.cos(a), y = cy + r*Math.sin(a);
    mmLine(cx, cy, x, y, style.c+'88');
    mmAdd('ed-'+i, ic+' '+esp.nom, x, y, 'espace', style.c, style.bg);
  });
  mmBubble(data.length+' espace'+(data.length>1?'s':'')+' ajouté'+(data.length>1?'s':'')+' → continue vers les activités');
}

function mmActivites(){
  document.querySelectorAll('[id^="mn-a-"]').forEach(e=>e.remove());
  document.getElementById('mm-svg').innerHTML='';
  const W=mmW(),H=mmH(),cx=W/2,cy=H/2;
  const esps=cData.espaces;
  esps.forEach((eid,i)=>{
    const e=ESPS.find(x=>x.id===eid)||{l:eid,ic:'📦',c:'#4a8c5c',bg:'rgba(74,140,92,.1)'};
    const ae=(2*Math.PI/esps.length)*i-Math.PI/2;
    const re=Math.min(W,H)*.26; const ex=cx+re*Math.cos(ae),ey=cy+re*Math.sin(ae);
    mmLine(cx,cy,ex,ey,e.c+'88');
    const acts=(ESP_ACTS[eid]||[]).filter(a=>cData.activites.includes(a));
    acts.forEach((act,j)=>{
      const sa=ae+(j-(acts.length-1)/2)*.42;
      const rs=re+88; const sx=cx+rs*Math.cos(sa),sy=cy+rs*Math.sin(sa);
      mmLine(ex,ey,sx,sy,e.c+'44',true);
      mmAdd('a-'+eid+'-'+j,act,sx,sy,'sol',e.c,e.bg);
    });
  });
  const total=cData.activites.length;
  if(total>0)mmBubble(total+' activité'+(total>1?'s':'')+' · prêt à générer le plan →');
  else if(esps.length>0)mmBubble('Sélectionne des activités pour chaque espace');
}

function devaPickSols(esps){
  const picked=[]; const seen=new Set();
  esps.forEach(eid=>{
    const e=ESPS.find(x=>x.id===eid);
    if(!e)return;
    (e.sols||[]).forEach(sname=>{
      if(!seen.has(sname)){
        const sol=SOLS.find(s=>s.nom===sname);
        if(sol){picked.push({sol,eid});seen.add(sname);}
      }
    });
  });
  return picked;
}

function togSol(nom){
  const i=cData.solutions.indexOf(nom);
  const wasSel=i>=0;
  if(wasSel)cData.solutions.splice(i,1); else cData.solutions.push(nom);
  const nowSel=!wasSel;
  // Update MM node
  document.querySelectorAll('[id^="mn-sol-"]').forEach(el=>{
    if(el.dataset.solnom===nom){
      const e=ESPS.find(x=>x.id===el.dataset.eid)||{c:'#4a8c5c',bg:'rgba(74,140,92,.1)'};
      el.style.color=nowSel?e.c:'rgba(130,130,130,.55)';
      el.style.borderColor=nowSel?e.c+'55':'rgba(130,130,130,.2)';
      el.style.background=nowSel?e.bg:'rgba(130,130,130,.05)';
      el.style.fontWeight=nowSel?'600':'400';
      mmIciNodes(nom, parseFloat(el.style.left), parseFloat(el.style.top), el.id);
    }
  });
  // Update panel row in-place
  const rid='sol-row-'+nom.replace(/[^a-zA-Z0-9]/g,'_');
  const row=document.getElementById(rid);
  if(row){
    const e=ESPS.find(x=>x.id===row.dataset.eid)||{c:'#4a8c5c',bg:'rgba(74,140,92,.1)'};
    row.style.background=nowSel?e.bg:'rgba(130,130,130,.04)';
    row.style.borderColor=nowSel?e.c+'33':'rgba(130,130,130,.12)';
    const nameEl=row.querySelector('.sol-name');
    if(nameEl)nameEl.style.color=nowSel?'var(--ink)':'rgba(130,130,130,.65)';
    const chkEl=row.querySelector('.sol-chk');
    if(chkEl){chkEl.textContent=nowSel?'✓':'○';chkEl.style.color=nowSel?e.c:'rgba(130,130,130,.35)';}
  }
  // Update counter + Deva message
  const counter=document.getElementById('sol-counter');
  if(counter)counter.textContent=cData.solutions.length+' solution'+(cData.solutions.length!==1?'s':'')+' sélectionnée'+(cData.solutions.length!==1?'s':'');
  const devaTxt=document.querySelector('.deva-txt');
  if(devaTxt)devaTxt.textContent='"Avec '+cData.solutions.length+' solution'+(cData.solutions.length!==1?'s':'')+', '+(cData.nom||'ton lieu')+' peut atteindre une Vadance de '+(10+cData.solutions.length*5)+'/100 dès la première année."';
}

function genMM(espItems){
  if (window.mmPanReset) window.mmPanReset();
  document.getElementById('mm-nodes').innerHTML='';
  document.getElementById('mm-svg').innerHTML='';
  const W=mmW(),H=mmH(),cx=W/2,cy=H/2;
  mmAdd('c',cData.nom||'Mon lieu',cx,cy,'center');

  // Compatibilité : si on reçoit un tableau d'eids (ancienne signature), convertir
  const items = (espItems.length && typeof espItems[0] === 'string')
    ? espItems.map(eid => ({ esp:{nom:eid}, eid, ic:'📦', c:'#4a8c5c', bg:'rgba(74,140,92,.1)' }))
    : espItems;

  // Use only user-assigned solutions (cData.solsByEspace), no pre-fill
  const byEsp={};
  items.forEach((_,i)=>{
    const noms = (cData.solsByEspace && cData.solsByEspace[i]) || [];
    byEsp[i] = noms.map(n=>SOLS.find(s=>s.nom===n)).filter(Boolean);
  });
  const picked = Object.values(byEsp).flat();

  // Store esp positions for step-4 live refresh
  window._mmStep4State = { cx, cy, W, H };
  window._mmStep4Items = items;
  window._mmStep4EspPos = items.map((item,i)=>{
    const a=(2*Math.PI/items.length)*i-Math.PI/2;
    const re=Math.min(W,H)*.25;
    return { x:cx+re*Math.cos(a), y:cy+re*Math.sin(a), a, re, item, idx:i };
  });

  items.forEach((item,i)=>{
    const {esp, ic, c:col, bg} = item;
    const label = ic + ' ' + (esp.nom || esp.l || item.eid);
    const a=(2*Math.PI/items.length)*i-Math.PI/2;
    const re=Math.min(W,H)*.25; const ex=cx+re*Math.cos(a),ey=cy+re*Math.sin(a);
    const sols=byEsp[i]||[];
    setTimeout(()=>{
      mmLine(cx,cy,ex,ey,col+'99',false,'mn-c','mn-e-'+i);
      mmAdd('e-'+i,label,ex,ey,'espace',col,bg).style.cursor='grab';
      sols.forEach((sol,j)=>{
        const sa=a+(j-(sols.length-1)/2)*.64; const rs=re+142;
        const sx=cx+rs*Math.cos(sa),sy=cy+rs*Math.sin(sa);
        const isSel=cData.solutions.includes(sol.nom);
        const solDomId='mn-sol-'+i+'-'+j;
        setTimeout(()=>{
          mmLine(ex,ey,sx,sy,col+'55',true,'mn-e-'+i,solDomId);
          const sc=isSel?col:'rgba(130,130,130,.55)';
          const sb=isSel?bg:'rgba(130,130,130,.05)';
          const nd=mmAdd('sol-'+i+'-'+j,sol.img+' '+sol.nom,sx,sy,'sol',sc,sb);
          nd.dataset.solnom=sol.nom; nd.dataset.eid=item.eid;
          if(isSel){nd.style.fontWeight='600';nd.classList.add('sol-sel');}
          nd.style.cursor='grab';
          nd.title=sol.impact;
          nd.onclick=()=>togSol(sol.nom);
          mmIciNodes(sol.nom, sx, sy, solDomId);
        },j*140);
      });
    },i*220);
  });
  setTimeout(()=>mmBubble(picked.length+' solution'+(picked.length>1?'s':'')+' proposée'+(picked.length>1?'s':'')+' · Clique pour sélectionner'),items.length*220+500);
}

/* Sous-nœuds ICI sous une solution sélectionnée (mind map de création).
   Montre l'impact projeté que porte la solution (couleur = capital). */
function mmIciNodes(solNom, sx, sy, solDomId){
  const safe = String(solNom).replace(/[^a-zA-Z0-9]/g, '_');
  document.querySelectorAll('[id^="mn-ici-' + safe + '-"]').forEach(e => e.remove());
  document.querySelectorAll('line[data-ici="' + safe + '"]').forEach(e => e.remove());
  if (!(cData.solutions || []).includes(solNom)) return;
  const icis = (typeof iciPourSolution === 'function') ? iciPourSolution(solNom) : [];
  if (!icis.length) return;
  const st = window._mmStep4State || { cx: mmW() / 2, cy: mmH() / 2 };
  const cx = st.cx, cy = st.cy;
  const baseA = Math.atan2(sy - cy, sx - cx);
  const rIci = Math.hypot(sx - cx, sy - cy) + 96;
  const svg = document.getElementById('mm-svg');
  icis.forEach((ici, k) => {
    const meta = (typeof ICI_LIVRE_META !== 'undefined' ? ICI_LIVRE_META[ici.livre] : null) || { ic: '◆', col: '#4a8c5c' };
    const ia = baseA + (k - (icis.length - 1) / 2) * 0.5;
    const ix = cx + rIci * Math.cos(ia), iy = cy + rIci * Math.sin(ia);
    const iciDomId = 'mn-ici-' + safe + '-' + k;
    const l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    l.setAttribute('x1', sx); l.setAttribute('y1', sy); l.setAttribute('x2', ix); l.setAttribute('y2', iy);
    l.setAttribute('stroke', meta.col + '66'); l.setAttribute('stroke-width', '1.6');
    l.setAttribute('stroke-dasharray', '3,4'); l.setAttribute('stroke-linecap', 'round'); l.setAttribute('opacity', '0.85');
    l.setAttribute('data-ici', safe);
    if (solDomId) l.setAttribute('data-from', solDomId);
    l.setAttribute('data-to', iciDomId);
    if (svg) svg.appendChild(l);
    const nd = mmAdd('ici-' + safe + '-' + k, meta.ic + ' ' + ici.nom, ix, iy, 'ici', meta.col, meta.col + '22');
    nd.style.fontSize = '.6rem'; nd.style.padding = '.2rem .45rem'; nd.style.fontWeight = '700'; nd.style.borderColor = meta.col + '66'; nd.style.cursor = 'grab';
    nd.title = (ici.unite || '') + ' · cible ' + ici.point100;
  });
}

function mmRefreshSolsStep4() {
  if (!window._mmStep4EspPos || !window._mmStep4State) return;
  // Remove all solution + ICI nodes
  document.querySelectorAll('[id^="mn-sol-"],[id^="mn-ici-"]').forEach(e => e.remove());
  // Rebuild SVG (espace lines + solution branches)
  const svg = document.getElementById('mm-svg');
  svg.innerHTML = '';
  const { cx, cy } = window._mmStep4State;
  window._mmStep4EspPos.forEach(({ x:ex, y:ey, a, re, item, idx }) => {
    const { c:col, bg } = item;
    mmLine(cx, cy, ex, ey, col+'99', false, 'mn-c', 'mn-e-'+idx);
    const solNoms = cData.solsByEspace[idx] || [];
    solNoms.forEach((solNom, j) => {
      const sol = SOLS.find(s => s.nom === solNom);
      if (!sol) return;
      const sa = a + (j - (solNoms.length-1)/2) * .64;
      const rs = re + 142;
      const sx = cx + rs*Math.cos(sa), sy = cy + rs*Math.sin(sa);
      const solDomId = 'mn-sol-'+idx+'-'+j;
      mmLine(ex, ey, sx, sy, col+'55', true, 'mn-e-'+idx, solDomId);
      const nd = mmAdd('sol-'+idx+'-'+j, sol.img+' '+sol.nom, sx, sy, 'sol', col, bg);
      nd.dataset.solnom = sol.nom;
      nd.dataset.eid = item.eid;
      nd.style.fontWeight = '600';
      nd.style.cursor = 'grab';
      nd.title = sol.impact || '';
      nd.onclick = () => togSol(sol.nom);
      mmIciNodes(sol.nom, sx, sy, solDomId);
    });
  });
  const total = Object.values(cData.solsByEspace).flat().length;
  mmBubble(total + ' solution' + (total!==1?'s':'') + ' assignée' + (total!==1?'s':'') + ' · continue pour publier →');
}

/* ─── Pan du canvas mind map ─── */
(function () {
  let panning = false, px = 0, py = 0, tx = 0, ty = 0;

  function getCanvas() { return document.getElementById('mm-canvas'); }
  function getStage()  { return document.getElementById('mm-nodes')?.closest('.mm-stage'); }

  function applyTransform() {
    const c = getCanvas(); if (c) c.style.transform = `translate(${tx}px,${ty}px)`;
  }

  // Expose pour que genMM puisse remettre à zéro
  window.mmPanReset = function () { tx = 0; ty = 0; applyTransform(); };

  document.addEventListener('mousedown', e => {
    const stage = getStage(); if (!stage || !stage.contains(e.target)) return;
    // Ignorer si clic sur un nœud, un bouton ou le tableau flux
    if (e.target.closest('.mm-node, button, #mm-flux-table, #mm-flux-handle')) return;
    panning = true;
    px = e.clientX - tx;
    py = e.clientY - ty;
    stage.style.cursor = 'grabbing';
    e.preventDefault();
  });

  document.addEventListener('mousemove', e => {
    if (!panning) return;
    tx = e.clientX - px;
    ty = e.clientY - py;
    applyTransform();
  });

  document.addEventListener('mouseup', () => {
    if (!panning) return;
    panning = false;
    const stage = getStage(); if (stage) stage.style.cursor = 'grab';
  });
})();

/* ─── Pan mindmap Bâtisseur ─── */
(function () {
  let panning = false, px = 0, py = 0, tx = 0, ty = 0;

  function getCanvas() { return document.getElementById('bat-canvas'); }
  function getStage()  { return document.getElementById('bat-fiche-stage'); }
  function applyTransform() {
    const c = getCanvas(); if (c) c.style.transform = `translate(${tx}px,${ty}px)`;
  }

  window.batPanReset = function () { tx = 0; ty = 0; applyTransform(); };

  document.addEventListener('mousedown', e => {
    const stage = getStage(); if (!stage || !stage.contains(e.target)) return;
    if (e.target.closest('.mm-node, button, #bat-tree-bubble')) return;
    panning = true;
    px = e.clientX - tx;
    py = e.clientY - ty;
    stage.style.cursor = 'grabbing';
    e.preventDefault();
  });

  document.addEventListener('mousemove', e => {
    if (!panning) return;
    tx = e.clientX - px;
    ty = e.clientY - py;
    applyTransform();
  });

  document.addEventListener('mouseup', () => {
    if (!panning) return;
    panning = false;
    const stage = getStage(); if (stage) stage.style.cursor = 'grab';
  });

  /* Touch support */
  document.addEventListener('touchstart', e => {
    const stage = getStage(); if (!stage || !stage.contains(e.target)) return;
    if (e.target.closest('.mm-node, button, #bat-tree-bubble')) return;
    panning = true;
    px = e.touches[0].clientX - tx;
    py = e.touches[0].clientY - ty;
    e.preventDefault();
  }, { passive: false });

  document.addEventListener('touchmove', e => {
    if (!panning) return;
    tx = e.touches[0].clientX - px;
    ty = e.touches[0].clientY - py;
    applyTransform();
    e.preventDefault();
  }, { passive: false });

  document.addEventListener('touchend', () => { panning = false; });
})();

/* ─── Pan mindmap Lieu (fiche modale) ─── */
(function () {
  let panning = false, px = 0, py = 0, tx = 0, ty = 0;
  function getCanvas() { return document.getElementById('lieu-mm-canvas'); }
  function getStage()  { return document.getElementById('lieu-mm-wrap'); }
  function applyTransform() { const c = getCanvas(); if (c) c.style.transform = `translate(${tx}px,${ty}px)`; }

  document.addEventListener('mousedown', e => {
    const stage = getStage(); if (!stage || !stage.contains(e.target)) return;
    if (e.target.closest('.mm-node, button')) return;
    panning = true; px = e.clientX - tx; py = e.clientY - ty;
    stage.style.cursor = 'grabbing'; e.preventDefault();
  });
  document.addEventListener('mousemove', e => {
    if (!panning) return; tx = e.clientX - px; ty = e.clientY - py; applyTransform();
  });
  document.addEventListener('mouseup', () => {
    if (!panning) return; panning = false;
    const stage = getStage(); if (stage) stage.style.cursor = 'grab';
  });
  document.addEventListener('touchstart', e => {
    const stage = getStage(); if (!stage || !stage.contains(e.target)) return;
    if (e.target.closest('.mm-node, button')) return;
    panning = true; px = e.touches[0].clientX - tx; py = e.touches[0].clientY - ty;
    e.preventDefault();
  }, { passive: false });
  document.addEventListener('touchmove', e => {
    if (!panning) return; tx = e.touches[0].clientX - px; ty = e.touches[0].clientY - py;
    applyTransform(); e.preventDefault();
  }, { passive: false });
  document.addEventListener('touchend', () => { panning = false; });
})();

/* ─── Drag du tableau flux sur le mindmap ─── */
let _fluxDragInit = false;
function initFluxDrag() {
  if (_fluxDragInit) return;
  const handle = document.getElementById('mm-flux-handle');
  const panel  = document.getElementById('mm-flux-table');
  if (!handle || !panel) return;
  _fluxDragInit = true;

  let active = false, startX, startY, startL, startT;

  function onStart(e) {
    if (e.target.tagName === 'BUTTON') return;
    active = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    startX = clientX;
    startY = clientY;
    startL = panel.offsetLeft;
    startT = panel.offsetTop;
    handle.style.cursor = 'grabbing';
    e.preventDefault();
  }

  function onMove(e) {
    if (!active) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const stage = panel.parentElement;
    const maxL = stage.offsetWidth  - panel.offsetWidth;
    const maxT = stage.offsetHeight - panel.offsetHeight;
    const nx = Math.max(0, Math.min(startL + clientX - startX, maxL));
    const ny = Math.max(0, Math.min(startT + clientY - startY, maxT));
    panel.style.left  = nx + 'px';
    panel.style.top   = ny + 'px';
    panel.style.right = 'auto';
    e.preventDefault();
  }

  function onEnd() {
    active = false;
    handle.style.cursor = 'grab';
  }

  handle.addEventListener('mousedown',  onStart, { passive: false });
  handle.addEventListener('touchstart', onStart, { passive: false });
  document.addEventListener('mousemove',  onMove, { passive: false });
  document.addEventListener('touchmove',  onMove, { passive: false });
  document.addEventListener('mouseup',  onEnd);
  document.addEventListener('touchend', onEnd);
}

function renderFluxTable() {
  const table  = document.getElementById('mm-flux-table');
  const inDiv  = document.getElementById('mm-flux-inputs');
  const outDiv = document.getElementById('mm-flux-outputs');
  if (!table || !inDiv || !outDiv) return;

  const espaces = cData.espacesData || [];

  // Agréger : Map<fluxId → Set<espaceName>>
  const inputMap  = new Map();
  const outputMap = new Map();

  espaces.forEach(esp => {
    (esp.inputs  || []).forEach(fid => {
      if (!inputMap.has(fid))  inputMap.set(fid, new Set());
      inputMap.get(fid).add(esp.nom || '—');
    });
    (esp.outputs || []).forEach(fid => {
      if (!outputMap.has(fid)) outputMap.set(fid, new Set());
      outputMap.get(fid).add(esp.nom || '—');
    });
  });

  if (inputMap.size === 0 && outputMap.size === 0) { table.style.display = 'none'; return; }

  const renderRows = (map, type) => {
    if (map.size === 0) return `<div style="font-size:.65rem;color:var(--moss);opacity:.4;padding:.25rem 0">Aucun flux renseigné</div>`;
    return [...map.entries()].map(([fid, names]) => {
      const f = FLUX_CATALOG.find(x => x.id === fid);
      if (!f) return '';
      const color = type === 'input' ? '#3a7fa0' : '#a06020';
      const bg    = type === 'input' ? 'rgba(100,180,220,.1)' : 'rgba(220,140,40,.08)';
      const espList = [...names].join(', ');
      return `<div style="margin-bottom:.45rem">
        <div style="display:inline-flex;align-items:center;gap:.3rem;background:${bg};color:${color};border-radius:100px;padding:.18rem .55rem;font-weight:600;font-size:.67rem">${f.ic} ${f.label}</div>
        <div style="font-size:.58rem;color:var(--moss);opacity:.55;margin-top:.15rem;padding-left:.3rem">${espList}</div>
      </div>`;
    }).join('');
  };

  inDiv.innerHTML  = renderRows(inputMap,  'input');
  outDiv.innerHTML = renderRows(outputMap, 'output');
  table.style.display = 'block';
  initFluxDrag();
}

function mmBubble(t){ /* bulles désactivées */ }

/* ─── ESRS DATA ─── */
const ESRS_DATA=[
  {code:'ESRS E1',name:'Changement climatique',sub:'Émissions GES, énergie, trajectoire Net-Zero',pct:82,status:'ok',evad:'E1 Énergie',evad_lieux:3},
  {code:'ESRS E2',name:'Pollution',sub:'Pollution eau, air, sols',pct:65,status:'ok',evad:'E2 Pollution',evad_lieux:2},
  {code:'ESRS E3',name:'Ressources aquatiques',sub:'Consommation eau, gestion des rejets',pct:71,status:'ok',evad:'E3 Eau',evad_lieux:2},
  {code:'ESRS E4',name:'Biodiversité & écosystèmes',sub:'Impact sur la biodiversité, espèces',pct:58,status:'warn',evad:'E4 Biodiversité',evad_lieux:1},
  {code:'ESRS E5',name:'Économie circulaire',sub:'Ressources, déchets, réemploi, fin de vie',pct:74,status:'ok',evad:'E5 Déchets',evad_lieux:2},
  {code:'ESRS S1',name:'Effectifs, propres salariés',sub:'Conditions travail, formation, diversité',pct:34,status:'nok',evad:'S1 Formation',evad_lieux:0},
  {code:'ESRS S2',name:'Travailleurs chaîne de valeur',sub:'Conditions travail fournisseurs',pct:61,status:'ok',evad:'S2 Chaîne valeur',evad_lieux:2},
  {code:'ESRS S3',name:'Communautés affectées',sub:'Impact local, droits humains, engagement',pct:78,status:'ok',evad:'S3 Communauté',evad_lieux:3},
  {code:'ESRS S4',name:'Consommateurs & clients',sub:'Sécurité produits, vie privée',pct:55,status:'warn',evad:'—',evad_lieux:0},
  {code:'ESRS G1',name:'Conduite des affaires',sub:'Éthique, anti-corruption',pct:88,status:'ok',evad:'G1 Gouvernance',evad_lieux:2},
];

function renderESRS(){
  const el=document.getElementById('esrs-rows');
  if(!el) return;
  el.innerHTML=ESRS_DATA.map(e=>{
    const col=e.status==='ok'?'#2e9960':e.status==='warn'?'var(--amber)':'var(--terracotta)';
    const statusLabel=e.status==='ok'?'Conforme':e.status==='warn'?'En cours':'À compléter';
    const evadBit=e.evad_lieux>0?`<span class="evad-link" onclick="showScreen('carte')">${e.evad_lieux} lieu${e.evad_lieux>1?'x':''} EVAD →</span>`:`<span style="font-size:0.62rem;color:var(--terracotta);font-weight:600">Chercher →</span>`;
    return `<div class="esrs-row">
      <div class="esrs-code">${e.code}</div>
      <div class="esrs-info"><div class="esrs-name">${e.name}</div><div class="esrs-sub">${e.sub}</div></div>
      <div class="esrs-progress"><div class="esrs-pct">${e.pct}%</div><div class="esrs-bar"><div class="esrs-bar-fill" style="width:${e.pct}%;background:${col}"></div></div></div>
      <div style="min-width:90px;text-align:center"><span class="csrd-status csrd-${e.status}" style="font-size:0.58rem">${statusLabel}</span></div>
      <div class="esrs-evad">${evadBit}</div>
    </div>`;
  }).join('');
}

function exportCSRDReport(){
  const lines=[
    'RAPPORT CSRD, GROUPE MERIDIA, Q1 2026',
    '=========================================','',
    'SCORE RSE GLOBAL : 74/100 (+7 pts vs 2025)',
    'LIEUX PARTENAIRES : 14 | ENGAGEMENTS : 87 000€','',
    'COUVERTURE ESRS :',
    ...ESRS_DATA.map(e=>`  ${e.code}, ${e.name} : ${e.pct}% [${e.status.toUpperCase()}]`),'',
    'INDICATEURS ESG (cumul 2026) :',
    '  E, Émissions CO₂ : -38% vs 2019',
    '  S, Personnes formées via EVAD : 87',
    '  G, Preuves auditables certifiées : 16','',
    'Généré par EVAD · '+new Date().toLocaleDateString('fr-FR')
  ];
  const blob=new Blob([lines.join('\n')],{type:'text/plain'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download='rapport-csrd-meridia-q1-2026.txt';
  a.click();
}

/* ─── CRÉER LIEU SUR CARTE ─── */
const TYPE_PIN={tiers:'pin-tiers',ferme:'pin-ferme',ecolieu:'pin-ecolieu',fablab:'pin-fablab',habitat:'pin-tiers',autre:'pin-tiers'};
const TYPE_IC={tiers:'🌿',ferme:'🌾',ecolieu:'🏡',fablab:'⚙️',habitat:'🏘',autre:'✦'};

// Instantané du dernier lieu créé par l'utilisateur (pour l'onglet « Fiche lieu »)
let myLieuData = null;

async function createLieuOnMap(){
  const nom = cData.nom || 'Nouveau lieu';
  const ic = TYPE_IC[cData.type] || '✦';
  const typeLabel = (TYPES_LIEU.find(t => t.id === cData.type)?.l) || 'Lieu';
  const adresse = cData.localisation || 'Nouvelle-Aquitaine';

  // On mémorise la fiche saisie pour la refléter dans le tableau de bord
  try { myLieuData = Object.assign({}, cData); } catch(e) {}

  showScreen('carte');
  setTimeout(initRealMap, 80);

  let lat = cData.lat ?? 48.2;
  let lng = cData.lng ?? -2.8;

  if(!cData.lat || !cData.lng){
    try {
      const url = `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(adresse)}&limit=1`;
      const response = await fetch(url);
      const d = await response.json();
      if(d.features && d.features.length>0){
        lng = d.features[0].geometry.coordinates[0];
        lat = d.features[0].geometry.coordinates[1];
      }
    } catch (e) {
      console.warn('Géocodage impossible, position par défaut utilisée.', e);
    }
  }

  const newPlace = {
    nom,
    type: typeLabel,
    ville: adresse,
    score: 10,
    quetes: 0,
    icon: cData.icon || ic,
    lat, lng,
    desc: cData.desc || `${typeLabel} en phase ${cData.phase || 'de démarrage'}, situé à ${adresse}.`,
    batisseurs: 0, semeurs: 0, score_trim: '+0',
    dims: [
      {l:'Environnement',v:10,c:'var(--fern)'},
      {l:'Social',v:10,c:'var(--sky)'},
      {l:'Éco. locale',v:10,c:'var(--amber)'}
    ],
    quetes_list: [],
    besoins: cData.besoins?.length ? cData.besoins : ['Premiers bâtisseurs','Financement de départ'],
    deva: `"${nom}" vient de rejoindre la carte EVAD. Score de départ : 10/100. Publie 2 quêtes pour atteindre 25 en 30 jours et attirer tes premiers bâtisseurs.`
  };

  setTimeout(() => {
    if (!evadMap) return;

    const marker = L.marker([lat, lng], {
      icon: createEmojiIcon(ic, markerBgByType(typeLabel))
    }).addTo(evadMap);

    marker.bindPopup(
      `
      <div class="popup-place-title">${nom}</div>
      <div class="popup-place-meta">${typeLabel} · ${adresse}</div>
      <div class="popup-place-score">Lieu créé à l'instant</div>
      `,
      { className: 'custom-popup' }
    );

    marker.on('click', () => {
      mapShowNewLieu();
      document.getElementById('map-panel-main').style.display = 'none';
      document.getElementById('map-acteur-panel').style.display = '';
    });
    marker.openPopup();

    createdLeafletMarkers.push(marker);
    evadMyLieuMarker = marker;
    evadMap.flyTo([lat, lng], 11, { duration: 1.2 });
  }, 150);

  const sectionLieux = document.getElementById('map-section-lieux');
  if(sectionLieux){
    // Remove "Aucun lieu" placeholder if present
    sectionLieux.querySelectorAll(':scope > div:not(:first-child)').forEach(el => {
      if(el.textContent.includes('Aucun lieu')) el.remove();
    });
    const _sd0 = (typeof evadLieuScoreData === 'function') ? evadLieuScoreData() : {score:10, nbValidees:0};
    const card = document.createElement('div');
    card.className = 'place-card-mini';
    card.id = 'evad-mylieu-card';
    card.style.cssText = 'background:rgba(74,140,92,0.06);border-left:3px solid var(--fern);cursor:pointer';
    card.onclick = () => mapShowNewLieu();
    card.innerHTML = `
      <div class="pcm-top">
        <div class="pcm-icon" style="background:rgba(74,140,92,0.15)">${ic}</div>
        <div>
          <div class="pcm-name">${nom}</div>
          <div class="pcm-type">${typeLabel} · ${adresse}</div>
        </div>
      </div>
      <div class="pcm-score-row">
        <div class="score-bar-bg"><div id="evad-mylieu-scorebar" class="score-bar-fill" style="width:${_sd0.score}%"></div></div>
        <div id="evad-mylieu-scorelabel" class="score-label" style="color:${_sd0.nbValidees>0?'var(--fern)':'var(--amber)'}">${_sd0.nbValidees>0?'↑ ':'Nouveau · '}Vadance ${_sd0.score}/100</div>
      </div>
      <div class="pcm-quetes" style="color:var(--fern)">✦ ${cData.solutions?.length || 0} solution${(cData.solutions?.length||0)!==1?'s':''} · Lieu régénératif</div>
    `;
    // Insère en haut de la liste (juste après l'en-tête « 🏡 Lieux »)
    const header = sectionLieux.firstElementChild;
    sectionLieux.insertBefore(card, header ? header.nextElementSibling : sectionLieux.firstChild);
    // Update counter
    const countEl = document.getElementById('map-lieux-count');
    if(countEl){
      const n = sectionLieux.querySelectorAll('.place-card-mini').length;
      countEl.textContent = `🏡 ${n} Lieu${n>1?'x':''}`;
    }
  }

  setTimeout(() => mmBubble(`🏡 ${nom} ajouté dans la communauté EVAD !`), 250);
}

/* ─── AFFICHER FICHE BÂTISSEUR CRÉÉE PAR L'UTILISATEUR ─── */
function mapShowNewBatisseur() {
  const panel     = document.getElementById('map-acteur-panel');
  const mainPanel = document.getElementById('map-panel-main');
  const prenom    = batFicheData.prenom || 'Bâtisseur';
  const nom       = batFicheData.nom    || '';
  const ville     = batFicheData.ville  || 'France';
  const bio       = batFicheData.bio    || '';
  const skills    = (batFicheData.skills || []).map(id => BAT_SKILLS.find(s=>s.id===id)).filter(Boolean);
  const dispos    = (batFicheData.dispo  || []).join(' · ') || 'Non précisée';
  const valeurs   = (batFicheData.valeurs|| []);
  const apporte   = (batFicheData.apporte|| []);
  const cherche   = (batFicheData.cherche|| []);

  panel.innerHTML = `
    <div class="acteur-fiche">
      <div class="acteur-hero" style="background:linear-gradient(135deg,#2a1a08,#c8732a88,#1a2a18);border:1px solid rgba(200,115,42,0.3)">
        <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 80% 20%,rgba(200,115,42,0.25),transparent 60%);pointer-events:none"></div>
        <button onclick="mapCloseActeur()" style="position:absolute;top:.7rem;right:.7rem;background:rgba(255,255,255,0.1);border:none;border-radius:50%;width:26px;height:26px;cursor:pointer;font-size:.75rem;color:rgba(255,255,255,0.7);display:flex;align-items:center;justify-content:center">✕</button>
        <div style="position:relative;display:flex;gap:.85rem;align-items:flex-start">
          <div class="acteur-avatar-ring" style="background:linear-gradient(135deg,var(--amber),#8a5010)">🌿</div>
          <div style="flex:1">
            <div style="display:flex;gap:.35rem;flex-wrap:wrap;margin-bottom:.4rem">
              <span class="acteur-badge" style="background:rgba(200,115,42,0.25);color:var(--amber-soft);border:1px solid rgba(200,115,42,0.35)">🌿 Bâtisseur</span>
              <span class="acteur-badge" style="background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.7);border:1px solid rgba(255,255,255,0.12)">📍 ${ville}</span>
            </div>
            <div class="acteur-name">${prenom} ${nom}</div>
            <div class="acteur-sub">Bâtisseur d'impact · Nouveau membre</div>
          </div>
        </div>
        ${bio ? `<div style="position:relative;margin-top:.85rem;font-size:.7rem;color:rgba(255,255,255,0.65);line-height:1.45">${bio}</div>` : ''}
      </div>

      ${skills.length ? `
      <div class="acteur-section-title">🔧 Compétences</div>
      <div style="margin-bottom:.85rem;display:flex;flex-wrap:wrap;gap:.3rem">
        ${skills.map(s=>`<span class="acteur-skill-tag" style="background:${s.bg};color:${s.col};border:1px solid ${s.col}33">${s.ic} ${s.label}</span>`).join('')}
      </div>` : ''}

      <div class="acteur-section-title">📅 Disponibilité</div>
      <div style="font-size:.72rem;color:var(--moss);margin-bottom:.85rem;padding:.5rem .7rem;background:white;border:1px solid rgba(46,102,66,.1);border-radius:var(--r)">⏱ ${dispos}</div>

      ${valeurs.length ? `
      <div class="acteur-section-title">💚 Valeurs</div>
      <div style="display:flex;flex-wrap:wrap;gap:.3rem;margin-bottom:.85rem">
        ${valeurs.map(v=>`<span class="acteur-skill-tag" style="background:rgba(74,140,92,.1);color:var(--fern);border:1px solid rgba(74,140,92,.2)">${v}</span>`).join('')}
      </div>` : ''}

      ${apporte.length ? `
      <div class="acteur-section-title">✦ Ce que j'apporte</div>
      <div style="display:flex;flex-wrap:wrap;gap:.3rem;margin-bottom:.85rem">
        ${apporte.map(a=>`<span class="acteur-skill-tag" style="background:rgba(200,115,42,.08);color:var(--amber);border:1px solid rgba(200,115,42,.2)">${a}</span>`).join('')}
      </div>` : ''}

      ${cherche.length ? `
      <div class="acteur-section-title">🔍 Ce que je cherche</div>
      <div style="display:flex;flex-wrap:wrap;gap:.3rem;margin-bottom:.85rem">
        ${cherche.map(c=>`<span class="acteur-skill-tag" style="background:rgba(58,110,140,.08);color:var(--sky);border:1px solid rgba(58,110,140,.2)">${c}</span>`).join('')}
      </div>` : ''}

      <button class="acteur-cta" style="background:var(--amber);color:white" onclick="mmBubble('✉️ Message envoyé à ${prenom}, réponse sous 48h')">
        Contacter ce bâtisseur →
      </button>
    </div>`;

  mainPanel.style.display = 'none';
  panel.style.display = '';
}

/* ─── AFFICHER FICHE FINANCEUR CRÉÉE PAR L'UTILISATEUR ─── */
function mapShowNewSemeur() {
  const panel     = document.getElementById('map-acteur-panel');
  const mainPanel = document.getElementById('map-panel-main');
  const nom       = semFicheData.nom   || 'Financeur';
  const ville     = semFicheData.localisation || 'France';
  const type      = semFicheData.type  || 'Fondation';
  const zone      = semFicheData.zone  || '';
  const typeIc    = { Entreprise:'🏭', Fondation:'🌍', Association:'🤝', Collectivité:'🏛', Particulier:'🙋' }[type] || '🌱';
  const axes      = (semFicheData.axes || []).map(id => SEM_AXES.find(a=>a.id===id)).filter(Boolean);
  const cadres    = (semFicheData.selectedCadres || []);
  const odd       = (semFicheData.selectedODD    || []);
  const typeData  = SEM_IMPACT_BY_TYPE[type] || SEM_IMPACT_BY_TYPE['Fondation'];
  const cadreObjs = cadres.map(id => typeData.cadres.find(c=>c.id===id)).filter(Boolean);
  const kpis      = (semFicheData.selectedKpis   || []);
  const reporting = semFicheData.reporting || '';
  const freq      = semFicheData.freq      || '';
  const financement = semFicheData.typeFinancement || '';

  panel.innerHTML = `
    <div class="acteur-fiche">
      <div class="acteur-hero" style="background:linear-gradient(135deg,#08182a,#3a6e8caa,#0e1a18);border:1px solid rgba(58,110,140,0.3)">
        <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 75% 15%,rgba(58,110,140,0.3),transparent 60%);pointer-events:none"></div>
        <button onclick="mapCloseActeur()" style="position:absolute;top:.7rem;right:.7rem;background:rgba(255,255,255,0.1);border:none;border-radius:50%;width:26px;height:26px;cursor:pointer;font-size:.75rem;color:rgba(255,255,255,0.7);display:flex;align-items:center;justify-content:center">✕</button>
        <div style="position:relative;display:flex;gap:.85rem;align-items:flex-start">
          <div class="acteur-avatar-ring" style="background:linear-gradient(135deg,var(--sky),#1a4060)">${typeIc}</div>
          <div style="flex:1">
            <div style="display:flex;gap:.35rem;flex-wrap:wrap;margin-bottom:.4rem">
              <span class="acteur-badge" style="background:rgba(58,110,140,0.25);color:#90c8e8;border:1px solid rgba(58,110,140,0.35)">🌾 Semeur · ${type}</span>
              <span class="acteur-badge" style="background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.7);border:1px solid rgba(255,255,255,0.12)">📍 ${ville}</span>
            </div>
            <div class="acteur-name">${nom}</div>
            <div class="acteur-sub">${type}${zone ? ' · ' + zone : ''}${financement ? ' · ' + financement : ''}</div>
          </div>
        </div>
      </div>

      ${axes.length ? `
      <div class="acteur-section-title">🌍 Axes d'impact</div>
      <div style="display:flex;flex-wrap:wrap;gap:.3rem;margin-bottom:.85rem">
        ${axes.map(a=>`<span class="acteur-skill-tag" style="background:${a.bg};color:${a.col};border:1px solid ${a.col}44">${a.ic} ${a.label}</span>`).join('')}
      </div>` : ''}

      ${cadreObjs.length ? `
      <div class="acteur-section-title">📋 Cadres de référence</div>
      <div style="display:flex;flex-wrap:wrap;gap:.3rem;margin-bottom:.85rem">
        ${cadreObjs.map(c=>`<span class="acteur-skill-tag" style="background:${c.bc}15;color:${c.bc};border:1px solid ${c.bc}44">${c.ic} ${c.label}</span>`).join('')}
      </div>` : ''}

      ${odd.length ? `
      <div class="acteur-section-title">🌍 ODD ciblés</div>
      <div style="display:flex;flex-wrap:wrap;gap:.3rem;margin-bottom:.85rem">
        ${odd.map(n=>{const m=ODD_META[n]||{c:'#888',l:'ODD '+n};return`<span style="display:inline-flex;align-items:center;gap:.3rem;padding:.2rem .5rem;border-radius:.4rem;background:${m.c}18;border:1px solid ${m.c}44"><span style="width:16px;height:16px;border-radius:3px;background:${m.c};color:white;font-size:.55rem;font-weight:900;display:inline-flex;align-items:center;justify-content:center">${n}</span><span style="font-size:.6rem;font-weight:600;color:${m.c}">${m.l}</span></span>`;}).join('')}
      </div>` : ''}

      ${reporting ? `
      <div class="acteur-section-title">📊 Reporting</div>
      <div style="font-size:.72rem;color:var(--moss);padding:.5rem .7rem;background:white;border:1px solid rgba(46,102,66,.1);border-radius:var(--r);margin-bottom:.85rem">
        ${reporting}${freq ? ' · ' + freq : ''}
      </div>` : ''}

      ${kpis.length ? `
      <div class="acteur-section-title">📈 Indicateurs attendus</div>
      <div style="display:flex;flex-wrap:wrap;gap:.3rem;margin-bottom:.85rem">
        ${kpis.map(k=>`<span class="acteur-skill-tag" style="background:rgba(58,110,140,.08);color:var(--sky);border:1px solid rgba(58,110,140,.2)">${k}</span>`).join('')}
      </div>` : ''}

      <button class="acteur-cta" style="background:var(--sky);color:white" onclick="mmBubble('📋 Demande de partenariat envoyée à ${nom}')">
        Demander un partenariat →
      </button>
    </div>`;

  mainPanel.style.display = 'none';
  panel.style.display = '';
}

/* ─── MINI FICHE LIEU SUR LA CARTE ─── */
function mapShowNewLieu() {
  const panel    = document.getElementById('map-acteur-panel');
  const mainPanel= document.getElementById('map-panel-main');

  const L = (typeof myLieuData !== 'undefined' && myLieuData && myLieuData.nom) ? myLieuData : cData;
  const nom       = L.nom        || 'Lieu';
  const type      = L.type       || 'Lieu';
  const adresse   = L.localisation || 'France';
  const desc      = L.desc       || '';
  const phase     = L.phase      || '';
  const surface   = L.surface    || '';
  const statut    = L.statut     || '';
  const ic        = L.icon       || '🌿';
  const espaces   = (L.espacesData || []);
  const solutions = (L.solutions  || []);
  const activites = (L.activites  || []);

  const TYPE_LABELS = {
    'tiers-lieu':'Tiers-lieu','ferme':'Ferme pédagogique','ecolieu':'Écolieu',
    'fablab':'Fablab','association':'Association','cooperative':'Coopérative',
    'friche':'Friche','autre':'Autre'
  };
  const typeLabel = TYPE_LABELS[type] || type;

  const PHASE_LABELS = { ideation:'Idéation', conception:'Conception', construction:'Construction', actif:'Actif', expansion:'Expansion' };
  const phaseLabel = PHASE_LABELS[phase] || phase;

  const _sd = (typeof evadLieuScoreData === 'function') ? evadLieuScoreData() : { score: 10, nbValidees: 0 };
  const scoreVal = _sd.score;
  const scoreBarW = _sd.score + '%';

  // Build quêtes from solutions
  const quetes = solutions.map(nom => {
    const sol = typeof SOLS !== 'undefined' ? SOLS.find(s => s.nom === nom) : null;
    if (!sol || !sol.quete) return null;
    return { ...sol.quete, source: nom, sourceIc: sol.img || '✦', cat: sol.cat };
  }).filter(Boolean).slice(0, 3);

  // FN_TO_ESPS for domain color mapping
  const _FN_TO_ESPS = {cuisine:'cuisine',cafe:'cafe',cantine:'cafe',coworking:'bureau',reunion:'bureau',atelier:'atelier',fablab:'fablab',scene:'salle',expo:'salle',boutique:'boutique',biblio:'salle',formation:'salle',jardin:'jardin',serre:'serre',compost:'jardin',hebergement:'dortoir',sport:'salle',meditation:'salle',stockage:'bureau',autre:'cafe'};

  panel.innerHTML = `
    <div class="acteur-fiche">
      <!-- Hero -->
      <div class="acteur-hero" style="background:linear-gradient(135deg,#0d1f12,#2e6b3e99,#111a0e);border:1px solid rgba(46,102,66,0.35)">
        <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 70% 20%,rgba(74,140,92,0.28),transparent 60%);pointer-events:none"></div>
        <button onclick="mapCloseActeur()" style="position:absolute;top:.7rem;right:.7rem;background:rgba(255,255,255,0.1);border:none;border-radius:50%;width:26px;height:26px;cursor:pointer;font-size:.75rem;color:rgba(255,255,255,0.7);display:flex;align-items:center;justify-content:center">✕</button>
        <div style="position:relative;display:flex;gap:.85rem;align-items:flex-start">
          <div class="acteur-avatar-ring" style="background:linear-gradient(135deg,var(--fern),#1a4020);font-size:1.4rem">${ic}</div>
          <div style="flex:1">
            <div style="display:flex;gap:.35rem;flex-wrap:wrap;margin-bottom:.4rem">
              <span class="acteur-badge" style="background:rgba(74,140,92,0.25);color:#a8e0b8;border:1px solid rgba(74,140,92,0.4)">🏡 ${typeLabel}</span>
              <span class="acteur-badge" style="background:rgba(255,255,255,0.1);color:rgba(255,255,255,0.7);border:1px solid rgba(255,255,255,0.12)">📍 ${adresse}</span>
            </div>
            <div class="acteur-name">${nom}</div>
            <div class="acteur-sub">Lieu régénératif${phaseLabel ? ' · ' + phaseLabel : ''}${surface ? ' · ' + surface + ' m²' : ''}</div>
          </div>
        </div>
        ${desc ? `<div style="position:relative;margin-top:.85rem;font-size:.7rem;color:rgba(255,255,255,0.65);line-height:1.5">${desc.length > 120 ? desc.slice(0,120) + '…' : desc}</div>` : ''}
      </div>

      <!-- Vadance -->
      <div style="margin:.85rem .85rem .2rem;background:white;border:1px solid rgba(46,102,66,.12);border-radius:var(--r-lg);padding:.75rem 1rem">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.5rem">
          <span style="font-size:.65rem;font-weight:700;color:var(--ink)">Vadance</span>
          <span style="font-size:1.3rem;font-weight:900;color:var(--amber)">${scoreVal}</span>
        </div>
        <div class="score-bar-bg" style="height:6px;border-radius:3px;background:rgba(46,102,66,.1)">
          <div style="height:6px;border-radius:3px;width:${scoreBarW};background:linear-gradient(90deg,var(--fern),var(--amber));transition:width .6s ease"></div>
        </div>
        <div style="display:flex;justify-content:space-between;margin-top:.45rem">
          <span style="font-size:.58rem;color:var(--moss);opacity:.7">${solutions.length} solution${solutions.length !== 1 ? 's' : ''}</span>
          <span style="font-size:.58rem;color:var(--moss);opacity:.7">${espaces.length} espace${espaces.length !== 1 ? 's' : ''}</span>
          ${statut ? `<span style="font-size:.58rem;color:var(--fern);font-weight:600">${statut}</span>` : ''}
        </div>
      </div>

      ${espaces.length ? `
      <div style="font-size:.62rem;font-weight:700;color:var(--moss);opacity:.55;text-transform:uppercase;letter-spacing:.1em;margin:.7rem .85rem .4rem">🏗 Espaces · ${espaces.length}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.4rem;margin:0 .85rem .75rem">
        ${espaces.slice(0,4).map(e => {
          const fnId = e.fonctions && e.fonctions[0];
          const fn   = typeof FONCTIONS_ESPACE !== 'undefined' ? FONCTIONS_ESPACE.find(f => f.id === fnId) : null;
          const st   = typeof MM_DOMAINE_STYLE !== 'undefined' ? (MM_DOMAINE_STYLE[fn?.domaine] || MM_DOMAINE_STYLE.Autre) : {c:'#4a8c5c',bg:'rgba(74,140,92,.1)'};
          const ic   = fn ? fn.ic : '📦';
          const lbl  = fn ? fn.label : (e.nom || e.eid || 'Espace');
          return `<div style="background:white;border:1px solid ${st.c}22;border-left:3px solid ${st.c};border-radius:var(--r);padding:.5rem .6rem">
            <div style="display:flex;align-items:center;gap:.3rem;margin-bottom:.2rem">
              <span style="font-size:.95rem;line-height:1">${ic}</span>
              <span style="font-size:.68rem;font-weight:700;color:var(--ink);line-height:1.2;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${e.nom || lbl}</span>
            </div>
            ${fn ? `<span style="font-size:.57rem;padding:.1rem .32rem;border-radius:100px;background:${st.bg};color:${st.c};font-weight:600;white-space:nowrap">${fn.label}</span>` : ''}
          </div>`;
        }).join('')}
        ${espaces.length > 4 ? `<div style="display:flex;align-items:center;justify-content:center;background:rgba(46,102,66,.05);border:1px dashed rgba(46,102,66,.2);border-radius:var(--r);font-size:.65rem;color:var(--moss);opacity:.6">+${espaces.length - 4}</div>` : ''}
      </div>` : ''}

      ${quetes.length ? `
      <div style="font-size:.62rem;font-weight:700;color:var(--moss);opacity:.55;text-transform:uppercase;letter-spacing:.1em;margin:0 .85rem .4rem">⚡ Quêtes ouvertes · ${quetes.length}</div>
      <div style="display:flex;flex-direction:column;gap:.35rem;margin:0 .85rem .8rem">
        ${quetes.map(q => {
          const CAT_COL = {eau:'#2a7cb8',electricite:'#b08800',construction:'#8b6914',alimentaire:'#4a8c5c',dechets:'#2e9970',biodiversite:'#3a7a3a',social:'#7a5a9a'};
          const col = CAT_COL[q.cat] || '#c8732a';
          return `<div style="background:white;border:1px solid ${col}28;border-left:3px solid ${col};border-radius:var(--r);padding:.45rem .65rem;display:flex;align-items:flex-start;gap:.5rem">
            <div style="flex:1;min-width:0">
              <div style="font-size:.67rem;font-weight:700;color:var(--ink);line-height:1.3;margin-bottom:.18rem">${q.titre}</div>
              <div style="display:flex;gap:.45rem;flex-wrap:wrap">
                ${q.duree ? `<span style="font-size:.57rem;color:var(--moss);opacity:.7">⏱ ${q.duree}</span>` : ''}
                ${q.nb    ? `<span style="font-size:.57rem;color:var(--moss);opacity:.7">👥 ${q.nb}</span>` : ''}
              </div>
              ${q.impact_quete ? `<div style="font-size:.57rem;color:${col};font-weight:600;margin-top:.2rem">📈 ${q.impact_quete}</div>` : ''}
            </div>
            <div style="flex-shrink:0;text-align:right;padding-top:.1rem">
              <div style="font-size:.68rem;font-weight:800;color:var(--amber)">+120</div>
              <div style="font-size:.5rem;color:var(--moss);opacity:.5">🌱 graines</div>
            </div>
          </div>`;
        }).join('')}
      </div>` : solutions.length ? `
      <div style="font-size:.62rem;font-weight:700;color:var(--moss);opacity:.55;text-transform:uppercase;letter-spacing:.1em;margin:0 .85rem .4rem">✦ Solutions actives · ${solutions.length}</div>
      <div style="display:flex;flex-wrap:wrap;gap:.3rem;margin:0 .85rem .75rem">
        ${solutions.slice(0,5).map(s => {
          const sol = typeof SOLS !== 'undefined' ? SOLS.find(x => x.nom === s) : null;
          return `<span style="padding:.18rem .45rem;border-radius:100px;background:rgba(74,140,92,.1);border:1px solid rgba(74,140,92,.2);font-size:.6rem;color:var(--fern)">${sol ? sol.img || '✦' : '✦'} ${s}</span>`;
        }).join('')}
        ${solutions.length > 5 ? `<span style="font-size:.6rem;color:var(--moss);opacity:.6;align-self:center">+${solutions.length - 5}</span>` : ''}
      </div>` : ''}

      <!-- Bouton voir fiche complète -->
      <button class="acteur-cta" style="background:var(--forest);color:white;margin-top:.2rem" onclick="mapCloseActeur();openLieuModal()">
        Voir la fiche complète →
      </button>
    </div>`;

  mainPanel.style.display = 'none';
  panel.style.display = '';
}

/* ─── PUBLIER FICHE BÂTISSEUR → Carte communauté ─── */
async function publishBatProfil() {
  const prenom = batFicheData.prenom || 'Bâtisseur';
  const nom    = batFicheData.nom    || '';
  const ville  = batFicheData.ville  || 'France';
  const bio    = batFicheData.bio    || 'Bâtisseur d\'impact engagé dans la transition.';
  const skills = batFicheData.skills || [];
  const skillStr = skills.length
    ? skills.slice(0,3).map(id => BAT_SKILLS.find(s=>s.id===id)?.label || id).join(' · ')
    : 'Profil en cours';

  // Panneau communauté
  const sectionBat = document.getElementById('map-section-batisseurs');
  if (sectionBat) {
    sectionBat.querySelectorAll(':scope > div:not(:first-child)').forEach(el => {
      if (el.textContent.includes('Aucun bâtisseur')) el.remove();
    });
    const card = document.createElement('div');
    card.className = 'place-card-mini';
    card.style.cssText = 'background:rgba(200,115,42,0.06);border-left:3px solid var(--amber);cursor:pointer';
    card.onclick = () => mapShowNewBatisseur();
    card.innerHTML = `
      <div class="pcm-top">
        <div class="pcm-icon" style="background:rgba(200,115,42,0.15);color:var(--amber)">🌿</div>
        <div>
          <div class="pcm-name">${prenom} ${nom}</div>
          <div class="pcm-type">Bâtisseur · ${ville}</div>
        </div>
      </div>
      <div class="pcm-score-row">
        <div style="font-size:.6rem;color:var(--moss);opacity:.7;flex:1">${skillStr}</div>
        <div class="score-label" style="color:var(--amber)">Nouveau</div>
      </div>
      <div class="pcm-quetes" style="color:var(--amber)">✦ ${bio.substring(0,60)}${bio.length>60?'…':''}</div>
    `;
    // Insère en haut de la liste (juste après l'en-tête de section)
    const header = sectionBat.firstElementChild;
    sectionBat.insertBefore(card, header ? header.nextElementSibling : sectionBat.firstChild);
    const countEl = document.getElementById('map-bat-count');
    if (countEl) {
      const n = sectionBat.querySelectorAll('.place-card-mini').length;
      countEl.textContent = `🌿 ${n} Bâtisseur${n>1?'s':''}`;
    }
  }

  // Géocodage + marqueur carte
  showScreen('carte');
  setTimeout(initRealMap, 80);
  let lat = batFicheData.lat ?? 46.6, lng = batFicheData.lng ?? 2.3;
  if (!batFicheData.lat && ville && ville !== 'France') {
    try {
      const r = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(ville)}&limit=1`);
      const d = await r.json();
      if (d.features?.length) { lng = d.features[0].geometry.coordinates[0]; lat = d.features[0].geometry.coordinates[1]; }
    } catch(e) {}
  }
  setTimeout(() => {
    if (!evadMap) return;
    const marker = L.marker([lat, lng], {
      icon: createEmojiIcon('🌿', '#b85e10', '#e07020', true)
    }).addTo(evadMap);
    marker.bindPopup(`
      <div class="popup-place-title">${prenom} ${nom}</div>
      <div class="popup-place-meta" style="color:#c8732a">🌿 Bâtisseur · ${ville}</div>
      <div class="popup-place-score" style="color:#c8732a">${skillStr}</div>
    `, { className: 'custom-popup' });
    marker.on('click', () => {
      mapShowNewBatisseur();
      document.getElementById('map-panel-main').style.display = 'none';
      document.getElementById('map-acteur-panel').style.display = '';
    });
    batisseurMarkers.push(marker);
    marker.openPopup();
    evadMap.flyTo([lat, lng], 11, { duration: 1.2 });
    mmBubble(`🌿 ${prenom} ${nom} a rejoint la communauté EVAD !`);
  }, 200);
}

/* ─── PUBLIER FICHE FINANCEUR → Carte communauté ─── */
async function publishSemProfil() {
  const nom      = semFicheData.nom  || 'Financeur';
  const ville    = semFicheData.localisation || 'France';
  const type     = semFicheData.type || 'Fondation';
  const zone     = semFicheData.zone || '';
  const cadres   = semFicheData.selectedCadres || [];
  const odd      = semFicheData.selectedODD    || [];
  const typeIc   = { Entreprise:'🏭', Fondation:'🌍', Association:'🤝', Collectivité:'🏛', Particulier:'🙋' }[type] || '🌱';
  const cadreStr = cadres.length
    ? cadres.slice(0,2).map(id => {
        const td = SEM_IMPACT_BY_TYPE[type] || SEM_IMPACT_BY_TYPE['Fondation'];
        return td.cadres.find(c=>c.id===id)?.label || id;
      }).join(' · ')
    : (semFicheData.reporting || 'Reporting');

  // Panneau communauté
  const sectionSem = document.getElementById('map-section-semeurs');
  if (sectionSem) {
    sectionSem.querySelectorAll(':scope > div:not(:first-child)').forEach(el => {
      if (el.textContent.includes('Aucun semeur')) el.remove();
    });
    const card = document.createElement('div');
    card.className = 'place-card-mini';
    card.style.cssText = 'background:rgba(58,110,140,0.06);border-left:3px solid var(--sky);cursor:pointer';
    card.onclick = () => mapShowNewSemeur();
    card.innerHTML = `
      <div class="pcm-top">
        <div class="pcm-icon" style="background:rgba(58,110,140,0.15);color:var(--sky)">${typeIc}</div>
        <div>
          <div class="pcm-name">${nom}</div>
          <div class="pcm-type">${type} · ${ville}</div>
        </div>
      </div>
      <div class="pcm-score-row">
        <div style="font-size:.6rem;color:var(--moss);opacity:.7;flex:1">${cadreStr}</div>
        <div class="score-label" style="color:var(--sky)">${zone}</div>
      </div>
      <div class="pcm-quetes" style="color:var(--sky)">✦ ${odd.length} ODD · ${semFicheData.axes.length} axe${semFicheData.axes.length!==1?'s':''} d'impact</div>
    `;
    // Insère en haut de la liste (juste après l'en-tête de section)
    const header = sectionSem.firstElementChild;
    sectionSem.insertBefore(card, header ? header.nextElementSibling : sectionSem.firstChild);
    const countEl = document.getElementById('map-sem-count');
    if (countEl) {
      const n = sectionSem.querySelectorAll('.place-card-mini').length;
      countEl.textContent = `🌾 ${n} Semeur${n>1?'s':''}`;
    }
  }

  // Géocodage + marqueur carte
  showScreen('carte');
  setTimeout(initRealMap, 80);
  let lat = 46.6, lng = 2.3;
  if (ville && ville !== 'France') {
    try {
      const r = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(ville)}&limit=1`);
      const d = await r.json();
      if (d.features?.length) { lng = d.features[0].geometry.coordinates[0]; lat = d.features[0].geometry.coordinates[1]; }
    } catch(e) {}
  }
  setTimeout(() => {
    if (!evadMap) return;
    const marker = L.marker([lat, lng], {
      icon: createEmojiIcon(typeIc, '#1a4a6a', '#3a6e8c', false, true)
    }).addTo(evadMap);
    marker.bindPopup(`
      <div class="popup-place-title">${nom}</div>
      <div class="popup-place-meta" style="color:#3a6e8c">🌾 ${type} · ${ville}</div>
      <div class="popup-place-score" style="color:#3a6e8c">${cadreStr}</div>
    `, { className: 'custom-popup' });
    marker.on('click', () => {
      mapShowNewSemeur();
      document.getElementById('map-panel-main').style.display = 'none';
      document.getElementById('map-acteur-panel').style.display = '';
    });
    semeurMarkers.push(marker);
    marker.openPopup();
    evadMap.flyTo([lat, lng], 11, { duration: 1.2 });
    mmBubble(`🌾 ${nom} a rejoint la communauté EVAD !`);
  }, 200);
}

/* ─── TABLEAU DE BORD BÂTISSEUR ─── */
const BAT_QUETES = [];

let batCurrentFilter = 'toutes';

function batInitDashboard() {
  batRenderQuetes();
  batReflectProfile();
}

// Reflète le profil créé (batFicheData) dans le topbar + l'aperçu du dashboard.
function batReflectProfile() {
  const fd = (typeof batFicheData !== 'undefined') ? batFicheData : null;
  if (!fd) return;
  const fullName = ((fd.prenom || '') + ' ' + (fd.nom || '')).trim();
  const has = fullName !== '';
  const sub = document.getElementById('bat-topbar-sub');
  if (sub) sub.textContent = has
    ? (fullName + " · Bâtisseur d'impact" + (fd.ville ? ' · ' + fd.ville : '') + ' · profil complété ✓')
    : "Bâtisseur d'impact · Complète ton profil pour commencer";
  const title = document.getElementById('bat-topbar-title');
  if (title) title.textContent = has ? ('🌿 ' + fullName) : '🌿 Mon profil';
  const label = document.getElementById('bat-hero-label');
  if (label) label.textContent = has ? (fullName + " · Bâtisseur d'impact") : 'Mon profil Bâtisseur';
  const intro = document.getElementById('bat-hero-intro');
  if (intro) intro.textContent = (has && (fd.bio || '').trim())
    ? fd.bio
    : 'Rejoins des quêtes pour commencer à contribuer et gagner des graines';

  // Graines liées au profil (bonus de bienvenue + compétences déclarées)
  const graines = batProfileGraines();
  const nbComp = (fd.skills || []).length;
  const tg = document.getElementById('bat-topbar-graines');
  if (tg) tg.textContent = graines + ' 🌱 graines';
  const ag = document.getElementById('bat-apercu-graines');
  if (ag) ag.textContent = graines;
  const ags = document.getElementById('bat-apercu-graines-sub');
  if (ags) ags.textContent = has ? 'bonus profil' : '—';
  const kg = document.getElementById('bat-kpi-graines');
  if (kg) kg.textContent = graines;
  const kc = document.getElementById('bat-kpi-comp');
  if (kc) kc.textContent = nbComp || '—';
}

// Solde de graines du bâtisseur, dérivé du profil :
// 50 de bienvenue à la création + 15 par compétence déclarée.
function batProfileGraines() {
  const fd = (typeof batFicheData !== 'undefined') ? batFicheData : null;
  if (!fd) return 0;
  const has = ((fd.prenom || '') + (fd.nom || '')).trim() !== '';
  if (!has) return 0;
  return 50 + (fd.skills || []).length * 15;
}

// Rend l'onglet « Compétences » à partir des compétences déclarées au profil.
function batRenderCompetences() {
  const fd = (typeof batFicheData !== 'undefined') ? batFicheData : null;
  const list = document.getElementById('bat-comp-list');
  const skills = (fd && fd.skills) ? fd.skills.map(id => BAT_SKILLS.find(s => s.id === id)).filter(Boolean) : [];
  const active = document.getElementById('bat-comp-active');
  if (active) active.textContent = skills.length || '—';
  const mult = document.getElementById('bat-comp-mult');
  if (mult) mult.textContent = '×' + (1 + skills.length * 0.2).toFixed(1);
  if (!list) return;
  if (!skills.length) {
    list.innerHTML = '<div style="padding:2rem;text-align:center;font-size:.78rem;color:var(--moss);opacity:.5;background:white;border:1px dashed rgba(46,102,66,.18);border-radius:var(--r-xl)">Renseigne tes compétences dans « Mon profil » pour les afficher ici.</div>';
    return;
  }
  list.innerHTML = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:.7rem">' + skills.map(s => {
    const lvl = (fd.skillLevels && fd.skillLevels[s.id] != null) ? fd.skillLevels[s.id] : (s.stars || 1);
    const stars = '★'.repeat(Math.max(1, lvl)) + '☆'.repeat(Math.max(0, 5 - Math.max(1, lvl)));
    return '<div style="background:white;border:1px solid rgba(46,102,66,.1);border-left:3px solid ' + s.col + ';border-radius:var(--r-lg);padding:.8rem .9rem">' +
      '<div style="display:flex;align-items:center;gap:.55rem;margin-bottom:.35rem">' +
        '<div style="width:34px;height:34px;border-radius:9px;background:' + s.bg + ';display:flex;align-items:center;justify-content:center;font-size:1.05rem">' + s.ic + '</div>' +
        '<div style="flex:1;min-width:0"><div style="font-size:.8rem;font-weight:700;color:var(--ink)">' + s.label + '</div>' +
        '<div style="font-size:.7rem;color:' + s.col + '">' + stars + '</div></div>' +
      '</div>' +
      '<div style="font-size:.66rem;color:var(--moss);opacity:.75;line-height:1.4">' + (s.desc || '') + '</div>' +
    '</div>';
  }).join('') + '</div>';
}

function batFilterQuetes(filter, btn) {
  batCurrentFilter = filter;
  document.querySelectorAll('#bat-quetes-list').length; // just reference
  document.querySelectorAll('[onclick^="batFilterQuetes"]').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  batRenderQuetes();
}

// Génère des quêtes proposées EN FONCTION du profil bâtisseur
// (compétences déclarées + ville), à partir des solutions hébergées par les lieux réels.
const BAT_SKILL_KW = {
  maraichage:  ['jardin','permacult','potager','compost','maraîch','aliment','amap','graine'],
  energie:     ['solaire','énergie','chauffe','pv','électr','low-tech'],
  reparation:  ['repair','réemploi','réparation','recycl','vélo','matériau'],
  facilitation:['atelier','animation','formation','sensibilis','médiation','amap'],
  construction:['isolation','paille','toiture','construction','chantier','bois','maçonn'],
  biodiversite:['haie','mare','biodiv','pollinis','arbre','verger','permacult','jardin'],
};
function batBuildQuetesFromProfile() {
  if (typeof BAT_QUETES === 'undefined' || typeof SOLS === 'undefined') return;
  const fd = (typeof batFicheData !== 'undefined') ? batFicheData : {};
  const skills = fd.skills || [];
  const ville = (fd.ville || '').trim().toLowerCase();
  const lieux = (typeof MAP_PLACES !== 'undefined') ? MAP_PLACES : [];
  BAT_QUETES.length = 0;
  SOLS.filter(s => s.quete).forEach((sol, idx) => {
    const text = (sol.nom + ' ' + (sol.cat || '') + ' ' + sol.quete.titre).toLowerCase();
    const matchedSkills = skills.filter(sk => (BAT_SKILL_KW[sk] || []).some(k => text.includes(k)));
    const matched = matchedSkills.length > 0;
    // lieu hôte : un lieu dont le type accueille cette solution, sinon rotation
    let host = lieux.find(l => {
      const tid = (typeof TYPES_LIEU !== 'undefined') ? (TYPES_LIEU.find(t => t.l === l.type) || {}).id : null;
      return tid && (sol.lieux || []).includes(tid);
    }) || lieux[idx % Math.max(1, lieux.length)] || { nom: 'Lieu EVAD', ville: 'Bordeaux' };
    const villeMatch = ville && host.ville && host.ville.toLowerCase().includes(ville);
    let match = 62 + (matched ? 28 : 0) + (villeMatch ? 8 : 0) - (idx % 3);
    match = Math.max(55, Math.min(99, match));
    const _ind = (typeof SOLS_INDICATORS !== 'undefined') ? SOLS_INDICATORS[sol.nom] : null;
    const _plan = (_ind && _ind.plan) || [];
    BAT_QUETES.push({
      id: 0, type: (sol.img || '⚡') + ' ' + (sol.cat || 'Quête'),
      titre: sol.quete.titre, match: match,
      lieu: host.nom, pilote: host.nom, ville: host.ville || 'Bordeaux',
      desc: sol.desc || sol.quete.titre,
      impact: sol.quete.impact_quete || sol.impact || '',
      plan: _plan,
      materiel: (_ind && _ind.materiel) || [],
      preuve: 'Photos de l\'action réalisée + indicateurs mesurés (CO₂, énergie, déchets…).',
      apprendre: 'Mise en œuvre de « ' + sol.nom + ' » et documentation de l\'impact.',
      duree: sol.quete.duree || '1 journée',
      places: '2/' + (parseInt(sol.quete.nb, 10) || 6),
      etape_actuelle: 1, etapes: _plan.length || 4,
      etapeLabels: _plan.length ? _plan.map(p => p.titre) : ['Lancement', 'Préparation', 'Réalisation', 'Certification'],
      tokens: sol.tok || 50, co2: sol.co2 || 0,
      esrs: (sol.esrs || []).map(e => String(e).replace('ESRS ', '').trim()),
      financement: { objectif: 0, montant: 0, semeur: null },
      equipe: [{ i: 'L', c: '#4a8c5c' }, { i: 'H', c: '#c8732a' }],
      dates: ['Samedi · 9h–17h', 'Dimanche · 9h–13h'], _matched: matched, matchedSkills: matchedSkills
    });
  });
  BAT_QUETES.sort((a, b) => b.match - a.match);
  BAT_QUETES.forEach((q, i) => { q.id = i; });
}

function batRenderQuetes() {
  const list = document.getElementById('bat-quetes-list');
  if (!list) return;
  batBuildQuetesFromProfile();
  let quetes = [...BAT_QUETES];
  if (batCurrentFilter === 'proches') quetes = quetes.filter(q => q.ville === 'Bordeaux' || q.ville === 'Libourne');
  if (batCurrentFilter === 'competences') quetes = quetes.filter(q => q.match >= 85);
  quetes.sort((a,b) => b.match - a.match);

  list.innerHTML = quetes.map(q => {
    const matchColor = q.match >= 90 ? 'var(--fern)' : q.match >= 80 ? 'var(--amber)' : 'var(--sky)';
    const etapePct = Math.round((q.etape_actuelle / q.etapes) * 100);
    return `<div class="quete-card" onclick="batSelectQuete(${q.id})" style="display:flex;align-items:center;gap:1rem;padding:1rem 1.1rem">
      <div style="width:42px;height:42px;border-radius:10px;background:rgba(74,140,92,0.1);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0">${q.type.split(' ')[0]}</div>
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.25rem">
          <div style="font-size:.84rem;font-weight:600;color:var(--ink)">${q.titre}</div>
          <span style="font-size:.58rem;padding:.1rem .4rem;border-radius:100px;background:rgba(74,140,92,.1);color:${matchColor};font-weight:700;flex-shrink:0">${q.match}% match</span>
        </div>
        <div style="font-size:.67rem;color:var(--moss);opacity:.7;display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:.35rem">
          <span>📍 ${q.lieu}</span><span>⏱ ${q.duree}</span><span>👥 ${q.places}</span>
        </div>
        <div style="display:flex;align-items:center;gap:.5rem">
          <div style="flex:1;height:3px;background:rgba(46,102,66,.1);border-radius:100px;overflow:hidden"><div style="height:100%;width:${etapePct}%;background:var(--fern);border-radius:100px"></div></div>
          <span style="font-size:.6rem;color:var(--moss);white-space:nowrap">Étape ${q.etape_actuelle}/${q.etapes}</span>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:.3rem;flex-shrink:0">
        <span style="font-size:.72rem;font-weight:700;color:var(--amber)">🪙 +${q.tokens}</span>
        <span style="font-size:.62rem;color:#4a9a40;font-weight:600">−${q.co2}t CO₂</span>
        <span class="quete-status qs-open" style="font-size:.58rem">Ouvert</span>
      </div>
    </div>`;
  }).join('');
}

function batSelectQuete(id) {
  showQueteDetail(id, 'quete');
}

/* ─── FICHE QUÊTE DÉDIÉE ─── */
let _qdCurrentId = 0;
let _qdFrom = 'quete';
let _qdQuestOverride = null;  // quête arbitraire (ex. quête Pilote) affichée dans la fiche
let _qdEdit = false;          // mode édition de la fiche quête
function qdSet(field, val, num){ const q = qdQuest(); if(!q) return; const t = String(val).trim(); q[field] = num ? (parseFloat(t.replace(',','.'))||0) : t; }
function qdSetArr(field, i, val){ const q = qdQuest(); if(!q || !Array.isArray(q[field])) return; q[field][i] = String(val).trim(); }
function qdSetObj(field, i, key, val){ const q = qdQuest(); if(!q || !Array.isArray(q[field]) || !q[field][i]) return; q[field][i][key] = String(val).trim(); }

function showQueteDetail(id, from) {
  _qdQuestOverride = null;
  _qdEdit = false;
  _qdCurrentId = id;
  _qdFrom = from || 'quete';
  showScreen('quete-detail');
}

// Ouvre la fiche quête dans une modale (depuis la liste « Trouver des quêtes »),
// pour pouvoir revenir à la liste sans quitter l'étape de création de fiche.
function openQueteModalFromFiche(id) {
  _qdQuestOverride = null;
  _qdEdit = false;
  _qdCurrentId = id;
  _qdFrom = 'fiche-bat';
  renderQueteDetail(); // remplit l'écran (caché) qd-main / qd-panel / qd-topbar-*
  const modal = document.getElementById('bat-quete-modal');
  const content = document.getElementById('bat-modal-content');
  if (!modal || !content) { showScreen('quete-detail'); return; }
  content.innerHTML = `
    <div style="display:flex;align-items:center;gap:.7rem;margin-bottom:1rem;padding-right:2rem">
      <button onclick="closeFicheQueteModal()" class="btn btn-ghost" style="font-size:.72rem;padding:.32rem .8rem;flex-shrink:0">← Retour</button>
      <div style="min-width:0">
        <div id="qm-title" style="font-size:.9rem;font-weight:700;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis"></div>
        <div id="qm-sub" style="font-size:.64rem;color:var(--moss);opacity:.7;white-space:nowrap;overflow:hidden;text-overflow:ellipsis"></div>
      </div>
    </div>
    <div id="qm-main" style="display:flex;flex-direction:column;gap:1.1rem;margin-bottom:1rem"></div>
    <div id="qm-panel" style="display:flex;flex-direction:column;gap:.9rem"></div>
  `;
  // La modale est définie dans l'écran dashboard (caché pendant la création de
  // fiche) : on la rattache au body pour qu'elle s'affiche au-dessus de l'étape.
  if (modal.parentElement !== document.body) document.body.appendChild(modal);
  modal.style.display = 'flex';
  refreshFicheQueteModal();
}

// Recopie le contenu rendu de la fiche quête dans la modale (sync après une action).
function refreshFicheQueteModal() {
  const modal = document.getElementById('bat-quete-modal');
  if (!modal || modal.style.display === 'none') return;
  const map = { 'qm-main': 'qd-main', 'qm-panel': 'qd-panel' };
  for (const [dst, src] of Object.entries(map)) {
    const d = document.getElementById(dst), s = document.getElementById(src);
    if (d && s) d.innerHTML = s.innerHTML;
  }
  const t = document.getElementById('qm-title'), st = document.getElementById('qd-topbar-title');
  if (t && st) t.textContent = st.textContent;
  const sb = document.getElementById('qm-sub'), ss = document.getElementById('qd-topbar-sub');
  if (sb && ss) sb.textContent = ss.textContent;
}

function closeFicheQueteModal() {
  const modal = document.getElementById('bat-quete-modal');
  if (modal) modal.style.display = 'none';
}

// Ouvre la fiche quête (même présentation) pour n'importe quelle quête.
function showQueteFiche(quest, from) {
  _qdQuestOverride = quest;
  _qdEdit = false;
  _qdFrom = from || (typeof currentRole !== 'undefined' ? currentRole : 'quete');
  showScreen('quete-detail');
}

// Boutons d'action de la fiche quête, selon le rôle actif.
function qdActionButtons() {
  const B = (l, fn, kind) => {
    const base = 'width:100%;border:none;border-radius:100px;padding:.6rem 1rem;font-size:.78rem;font-weight:700;cursor:pointer;font-family:\'Satoshi\',sans-serif;text-align:center';
    const styles = {
      primary: 'background:var(--forest);color:#fff',
      ghost:   'background:rgba(46,102,66,.07);color:var(--forest);border:1px solid rgba(46,102,66,.2)',
      danger:  'background:rgba(184,78,53,.08);color:var(--terracotta);border:1px solid rgba(184,78,53,.25)'
    };
    return `<button onclick="${fn}" style="${base};${styles[kind] || styles.ghost}">${l}</button>`;
  };
  const byRole = {
    pilote: [B('✏️ Modifier', 'qdModifier()', 'ghost'), B('⏸ Mettre en pause', 'qdPause()', 'ghost'), B('🗑 Supprimer', 'qdSupprimer()', 'danger'), B('✅ Valider la preuve', 'qdValider()', 'primary')],
    batisseur: [B('✅ Rejoindre', 'qdJoindre()', 'primary'), B('✉️ Contacter le Pilote', 'qdContactPilote()', 'ghost'), B('📎 Déposer la preuve', 'qdDeposerPreuve()', 'ghost')],
    semeur: [B('💰 Financer', 'qdFinancer()', 'primary'), B('✉️ Contacter le Pilote', 'qdContactPilote()', 'ghost')]
  };
  const btns = byRole[currentRole] || byRole.batisseur;
  return `<div style="background:white;border:1px solid rgba(46,102,66,.1);border-radius:var(--r-lg);padding:.9rem 1rem;display:flex;flex-direction:column;gap:.5rem">
    <div style="font-size:.72rem;font-weight:600;color:var(--ink);margin-bottom:.1rem">⚡ Actions</div>
    ${btns.join('')}
  </div>`;
}

// ─── Actions fonctionnelles de la fiche quête (mutent la quête + re-render) ───
function qdQuest() { return _qdQuestOverride || (typeof BAT_QUETES !== 'undefined' ? BAT_QUETES[_qdCurrentId] : null) || null; }
function qdRerender() { try { renderQueteDetail(); refreshFicheQueteModal(); } catch (e) {} }

function qdContactPilote() {
  const q = qdQuest() || {};
  if (typeof devaToggleChat === 'function') { try { devaToggleChat(); } catch (e) {} }
  mmBubble('✉️ Conversation ouverte avec le Pilote' + (q.pilote ? ' (' + String(q.pilote).split('·')[0].trim() + ')' : ''));
}

function qdDeposerPreuve() {
  const q = qdQuest(); if (!q) return;
  q.proofSubmitted = true;
  if (q.etape_actuelle < q.etapes) q.etape_actuelle = Math.max(q.etape_actuelle, 3); // passe en "Réalisation"
  mmBubble('📎 Preuve déposée · en attente de validation du Pilote');
  qdRerender();
}

function qdModifier() {
  if (!qdQuest()) return;
  _qdEdit = !_qdEdit;
  if (!_qdEdit) mmBubble('✏️ Modifications enregistrées');
  qdRerender();
}

function qdToggleMat(i, el) {
  const q = qdQuest(); if (!q || !q.materiel) return;
  q.materielChecked = q.materielChecked || [];
  const on = el ? el.checked : !q.materielChecked[i];
  q.materielChecked[i] = on;
  if (el) {
    const span = el.parentElement.querySelector('span');
    if (span) { span.style.textDecoration = on ? 'line-through' : 'none'; span.style.opacity = on ? '.6' : '1'; span.style.color = on ? 'var(--moss)' : 'var(--ink)'; }
  }
  const nb = q.materiel.filter((_, k) => q.materielChecked[k]).length;
  const c = document.getElementById('qd-mat-count');
  if (c) { c.textContent = nb + '/' + q.materiel.length; c.style.color = (nb === q.materiel.length) ? 'var(--fern)' : 'var(--moss)'; }
}

function qdPause() {
  const q = qdQuest(); if (!q) return;
  q.paused = !q.paused;
  mmBubble(q.paused ? '⏸ Quête mise en pause · masquée aux Bâtisseurs' : '▶️ Quête réactivée');
  qdRerender();
}

function qdSupprimer() {
  const q = qdQuest(); if (!q) return;
  if (!_qdQuestOverride && typeof BAT_QUETES !== 'undefined') { const i = BAT_QUETES.indexOf(q); if (i >= 0) BAT_QUETES.splice(i, 1); }
  else if (typeof PILOTE_QUETES_DEMO !== 'undefined') { const i = PILOTE_QUETES_DEMO.findIndex(x => x.titre === q.titre); if (i >= 0) PILOTE_QUETES_DEMO.splice(i, 1); }
  mmBubble('🗑 Quête supprimée');
  setTimeout(queteDetailBack, 250);
}

function queteDetailBack() {
  showScreen(_qdFrom);
}

function renderQueteDetail() {
  const q = _qdQuestOverride || BAT_QUETES[_qdCurrentId];
  if (!q) return;

  // Helpers d'édition (mode "Modifier les paramètres")
  const ED = _qdEdit;
  const _eb = (f,v,num,dark)=> ED
    ? `<span contenteditable="true" onblur="qdSet('${f}',this.textContent${num?',1':''})" style="outline:1px dashed ${dark?'rgba(255,255,255,.5)':'rgba(46,102,66,.4)'};border-radius:4px;padding:0 .25rem;cursor:text;min-width:1ch;display:inline-block">${v}</span>`
    : `${v}`;
  const edDark = (f,v,num)=>_eb(f,v,num,true);
  const edLight= (f,v,num)=>_eb(f,v,num,false);
  const edArr = (f,i,v)=> ED
    ? `<span contenteditable="true" onblur="qdSetArr('${f}',${i},this.textContent)" style="outline:1px dashed rgba(46,102,66,.4);border-radius:4px;padding:0 .25rem;cursor:text;min-width:1ch;display:inline-block">${v}</span>`
    : `${v}`;
  const edObj = (f,i,k,v)=> ED
    ? `<span contenteditable="true" onblur="qdSetObj('${f}',${i},'${k}',this.textContent)" style="outline:1px dashed rgba(46,102,66,.4);border-radius:4px;padding:0 .25rem;cursor:text;min-width:1ch;display:inline-block">${v}</span>`
    : `${v}`;

  // Topbar
  document.getElementById('qd-topbar-title').textContent = q.titre;
  document.getElementById('qd-topbar-sub').textContent = q.lieu + ' · ' + q.ville + ' · ' + q.duree;
  // Actions (bandeau + colonne de droite selon le rôle, conscientes de l'état)
  const funded = q.financement && q.financement.objectif > 0 && q.financement.montant >= q.financement.objectif;
  const done = (k) => `<button class="btn" disabled style="opacity:.65;cursor:default;background:rgba(74,140,92,.12);color:var(--fern);border:1px solid rgba(74,140,92,.3)">${k}</button>`;
  const ctas = {
    batisseur: q.joined ? done('✓ Tu participes') : `<button class="btn btn-primary" onclick="qdJoindre()">✅ Rejoindre cette quête</button>`,
    semeur: funded ? done('✓ Quête financée') : `<button class="btn btn-primary" onclick="qdFinancer()">💰 Financer cette quête</button>`,
    pilote: q.validated ? done('✓ Quête validée') : `<button class="btn btn-ghost" onclick="qdModifier()">✏️ Modifier</button><button class="btn btn-primary" onclick="qdValider()">✅ Valider la preuve</button>`
  };
  const _qdta = document.getElementById('qd-topbar-actions'); if (_qdta) _qdta.innerHTML = ctas[currentRole] || ctas.batisseur;

  // Étapes = le plan d'action de la Bibliothèque (sinon labels génériques)
  const _planSteps = (q.plan && q.plan.length) ? q.plan : null;
  const _stepCount = _planSteps ? _planSteps.length : q.etapes;
  const labels = q.etapeLabels || ['Lancement','Préparation','Réalisation','Certification'];
  const steps = Array.from({length:_stepCount},(_,i)=>{
    const done=i<q.etape_actuelle-1, active=i===q.etape_actuelle-1;
    const ps = _planSteps ? _planSteps[i] : null;
    const titre = ps ? ((ps.ic?ps.ic+' ':'')+(ED ? edObj('plan', i, 'titre', ps.titre||('Étape '+(i+1))) : (ps.titre||('Étape '+(i+1))))) : (labels[i]||('Étape '+(i+1)));
    const desc = (ps && (ps.desc || ED)) ? `<div style="font-size:.66rem;font-weight:400;color:var(--moss);opacity:.8;line-height:1.45;margin-top:.15rem">${ED ? edObj('plan', i, 'desc', ps.desc||'(description)') : ps.desc}</div>` : '';
    return `<div style="display:flex;align-items:flex-start;gap:.7rem;padding:.55rem .8rem;border-radius:var(--r);border:1px solid ${active?'rgba(200,115,42,.35)':done?'rgba(74,140,92,.2)':'rgba(46,102,66,.1)'};background:${active?'rgba(200,115,42,.04)':done?'rgba(74,140,92,.04)':'transparent'};margin-bottom:.35rem">
      <div style="width:22px;height:22px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.65rem;font-weight:700;margin-top:.05rem;background:${done?'var(--fern)':active?'var(--amber)':'rgba(46,102,66,.12)'};color:${done||active?'white':'var(--moss)'}">
        ${done?'✓':i+1}
      </div>
      <div style="flex:1;min-width:0"><div style="font-size:.75rem;font-weight:${active?'700':done?'600':'500'};color:${active?'var(--ink)':done?'var(--moss)':'var(--ink)'}">${titre}</div>${desc}</div>
      ${active?'<span style="font-size:.58rem;padding:.12rem .4rem;border-radius:100px;background:rgba(200,115,42,.15);color:var(--amber);font-weight:600;flex-shrink:0;margin-top:.1rem">En cours</span>':''}
    </div>`;
  }).join('');

  // Financement bar
  const fin = q.financement;
  const finHtml = fin && fin.objectif>0 ? (() => {
    const pct = Math.round((fin.montant/fin.objectif)*100);
    return `<div style="background:white;border:1px solid rgba(46,102,66,.1);border-radius:var(--r-lg);padding:.9rem 1rem">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.5rem">
        <div style="font-size:.72rem;font-weight:600;color:var(--ink)">💰 Financement</div>
        <span style="font-size:.68rem;font-weight:700;color:${pct>=100?'var(--fern)':'var(--amber)'}">
          ${fin.montant}€ / ${fin.objectif}€ (${pct}%)
        </span>
      </div>
      <div style="height:6px;background:rgba(46,102,66,.1);border-radius:100px;overflow:hidden;margin-bottom:.45rem">
        <div style="height:100%;width:${Math.min(pct,100)}%;background:${pct>=100?'var(--fern)':'var(--amber)'};border-radius:100px;transition:width .6s ease"></div>
      </div>
      ${fin.semeur?`<div style="font-size:.65rem;color:var(--moss);opacity:.75">🏢 ${fin.semeur}</div>`:'<div style="font-size:.65rem;color:var(--terracotta)">Aucun financement, <span style="cursor:pointer;text-decoration:underline" onclick="qdFinancer()">être le premier à financer</span></div>'}
    </div>`;
  })() : '';

  // Équipe
  const equipeHtml = `<div style="background:white;border:1px solid rgba(46,102,66,.1);border-radius:var(--r-lg);padding:.9rem 1rem">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.6rem">
      <div style="font-size:.72rem;font-weight:600;color:var(--ink)">👥 Équipe (${q.equipe.length}/${q.places.split('/')[1]})</div>
      <span style="font-size:.6rem;color:var(--moss);opacity:.6">${q.places} inscrits</span>
    </div>
    <div style="display:flex;gap:.4rem;align-items:center;flex-wrap:wrap">
      ${q.equipe.map(m=>`<div style="width:32px;height:32px;border-radius:50%;background:${m.c};color:white;display:flex;align-items:center;justify-content:center;font-size:.6rem;font-weight:700;border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,.15)">${m.i}</div>`).join('')}
      <div style="width:32px;height:32px;border-radius:50%;background:rgba(74,140,92,.12);border:2px dashed rgba(74,140,92,.3);display:flex;align-items:center;justify-content:center;font-size:.8rem;cursor:pointer" onclick="qdJoindre()" title="Rejoindre">+</div>
    </div>
  </div>`;

  // ESRS badges
  const esrsColors = {E1:'#2e7d32',E2:'#388e3c',E3:'#43a047',E4:'#4caf50',S1:'#1565c0',S2:'#1976d2',S3:'#1e88e5',S4:'#2196f3',G1:'#6a1b9a'};
  const esrsBadges = (q.esrs||[]).map(e=>`<span style="font-size:.62rem;padding:.18rem .5rem;border-radius:var(--r);background:${esrsColors[e]||'#546e7a'}22;color:${esrsColors[e]||'#546e7a'};border:1px solid ${esrsColors[e]||'#546e7a'}44;font-weight:600">📋 ESRS ${e}</span>`).join('');

  // Dates
  const datesHtml = (q.dates && q.dates.length) ? `<div style="display:flex;gap:.4rem;flex-wrap:wrap">
    ${q.dates.map((d,i)=>`<span style="font-size:.68rem;padding:.3rem .7rem;border-radius:var(--r);background:rgba(46,102,66,.07);border:1px solid rgba(46,102,66,.15);color:var(--ink)">📅 ${edArr('dates', i, d)}</span>`).join('')}
  </div>` : '';

  // Colonne principale (mode édition: champs contenteditable)
  document.getElementById('qd-main').innerHTML = `
    ${ED ? '<button onclick="qdModifier()" style="width:100%;background:var(--forest);color:#fff;border:none;border-radius:100px;padding:.65rem;font-size:.82rem;font-weight:700;cursor:pointer;margin-bottom:.2rem">✓ Enregistrer les modifications</button>' : ''}

    <!-- Hero -->
    <div style="background:linear-gradient(135deg,#0e2a1a,#1a3a22);border-radius:var(--r-xl);padding:1.4rem 1.8rem;position:relative;overflow:hidden">
      <div style="position:absolute;right:-30px;top:-30px;width:150px;height:150px;background:radial-gradient(circle,rgba(122,184,64,.12),transparent);pointer-events:none;border-radius:50%"></div>
      <div style="display:flex;gap:.4rem;flex-wrap:wrap;margin-bottom:.7rem">
        <span style="font-size:.65rem;padding:.18rem .55rem;border-radius:100px;background:rgba(255,255,255,.1);color:rgba(255,255,255,.8)">${q.type}</span>
        <span style="font-size:.65rem;padding:.18rem .55rem;border-radius:100px;background:rgba(255,255,255,.08);color:rgba(255,255,255,.6)">📍 ${edDark('ville', q.ville)}</span>
        ${(q.esrs||[]).map(e=>`<span style="font-size:.62rem;padding:.18rem .5rem;border-radius:100px;background:rgba(33,150,243,.15);color:#90caf9;border:1px solid rgba(33,150,243,.25)">ESRS ${e}</span>`).join('')}
        ${q.validated ? '<span style="font-size:.62rem;padding:.18rem .5rem;border-radius:100px;background:rgba(74,140,92,.25);color:#9be3a6;border:1px solid rgba(74,140,92,.4);font-weight:700">✓ Validée</span>' : ''}
        ${q.closed ? '<span style="font-size:.62rem;padding:.18rem .5rem;border-radius:100px;background:rgba(200,115,42,.2);color:#f0b96a;border:1px solid rgba(200,115,42,.35);font-weight:700">🔒 Clôturée</span>' : ''}
        ${q.paused ? '<span style="font-size:.62rem;padding:.18rem .5rem;border-radius:100px;background:rgba(240,200,74,.2);color:#f0d878;border:1px solid rgba(240,200,74,.35);font-weight:700">⏸ En pause</span>' : ''}
        ${q.joined ? '<span style="font-size:.62rem;padding:.18rem .5rem;border-radius:100px;background:rgba(74,140,92,.2);color:#9be3a6;border:1px solid rgba(74,140,92,.35);font-weight:700">✓ Tu participes</span>' : ''}
      </div>
      <div style="font-family:'Satoshi', sans-serif;font-size:1.5rem;font-weight:900;color:white;line-height:1.15;margin-bottom:.5rem">${edDark('titre', q.titre)}</div>
      <div style="display:flex;align-items:center;gap:.8rem;margin-bottom:1rem;flex-wrap:wrap">
        <div style="font-size:.72rem;color:rgba(255,255,255,.5)">🏡 Pilote : ${edDark('pilote', q.pilote)}</div>
        <div style="font-size:.72rem;color:rgba(255,255,255,.5)">⏱ ${edDark('duree', q.duree)}</div>
      </div>
      <div style="display:flex;gap:.8rem;flex-wrap:wrap">
        <div style="text-align:center;background:rgba(255,255,255,.07);border-radius:var(--r);padding:.55rem .9rem">
          <div style="font-family:'Satoshi', sans-serif;font-size:1.3rem;font-weight:900;color:var(--amber)">${edDark('tokens', q.tokens, true)}</div>
          <div style="font-size:.55rem;color:rgba(255,255,255,.45);text-transform:uppercase;letter-spacing:.1em">graines</div>
        </div>
        <div style="text-align:center;background:rgba(255,255,255,.07);border-radius:var(--r);padding:.55rem .9rem">
          <div style="font-family:'Satoshi', sans-serif;font-size:1.3rem;font-weight:900;color:#7ceb6a">${edDark('co2', q.co2, true)}t</div>
          <div style="font-size:.55rem;color:rgba(255,255,255,.45);text-transform:uppercase;letter-spacing:.1em">CO₂ évité</div>
        </div>
        <div style="text-align:center;background:rgba(255,255,255,.07);border-radius:var(--r);padding:.55rem .9rem">
          <div style="font-family:'Satoshi', sans-serif;font-size:1.3rem;font-weight:900;color:var(--sky)">${edDark('places', q.places)}</div>
          <div style="font-size:.55rem;color:rgba(255,255,255,.45);text-transform:uppercase;letter-spacing:.1em">participants</div>
        </div>
      </div>
    </div>

    <!-- Description -->
    <div style="background:white;border:1px solid rgba(46,102,66,.1);border-radius:var(--r-lg);padding:1rem 1.1rem">
      <div style="font-size:.72rem;font-weight:600;color:var(--ink);margin-bottom:.5rem">📝 Description</div>
      <p style="font-size:.8rem;color:var(--moss);line-height:1.6;margin:0">${edLight('desc', q.desc || '—')}</p>
    </div>

    <!-- Dates -->
    ${datesHtml ? `<div style="background:white;border:1px solid rgba(46,102,66,.1);border-radius:var(--r-lg);padding:.9rem 1rem">
      <div style="font-size:.72rem;font-weight:600;color:var(--ink);margin-bottom:.55rem">📅 Dates</div>
      ${datesHtml}
    </div>` : ''}

    <!-- Matériel nécessaire (checklist · Bibliothèque) -->
    ${(q.materiel && q.materiel.length) ? (() => {
      const checked = q.materielChecked || (q.materielChecked = []);
      const nb = q.materiel.filter((_, i) => checked[i]).length;
      return `<div style="background:white;border:1px solid rgba(46,102,66,.1);border-radius:var(--r-lg);padding:1rem 1.1rem">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.6rem">
        <div style="font-size:.72rem;font-weight:600;color:var(--ink)">🧰 Matériel nécessaire <span style="font-weight:400;opacity:.5">· depuis la Bibliothèque</span></div>
        <span id="qd-mat-count" style="font-size:.62rem;font-weight:700;color:${nb===q.materiel.length?'var(--fern)':'var(--moss)'}">${nb}/${q.materiel.length}</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:.1rem">${q.materiel.map((m, i) => ED
        ? `<div style="display:flex;align-items:center;gap:.6rem;padding:.42rem .2rem;border-bottom:1px solid rgba(46,102,66,.05)"><span style="opacity:.5">🔩</span><span style="font-size:.74rem;color:var(--ink);flex:1">${edArr('materiel', i, m)}</span></div>`
        : `<label style="display:flex;align-items:center;gap:.6rem;padding:.42rem .2rem;cursor:pointer;border-bottom:1px solid rgba(46,102,66,.05)">
          <input type="checkbox" ${checked[i] ? 'checked' : ''} onchange="qdToggleMat(${i}, this)" style="width:16px;height:16px;accent-color:var(--forest);cursor:pointer;flex-shrink:0">
          <span style="font-size:.74rem;color:${checked[i] ? 'var(--moss)' : 'var(--ink)'};${checked[i] ? 'text-decoration:line-through;opacity:.6' : ''}">${m}</span>
        </label>`).join('')}</div>
    </div>`; })() : ''}

    <!-- Étapes -->
    <div style="background:white;border:1px solid rgba(46,102,66,.1);border-radius:var(--r-lg);padding:.9rem 1rem">
      <div style="font-size:.72rem;font-weight:600;color:var(--ink);margin-bottom:.6rem">📋 Progression (étape ${q.etape_actuelle}/${q.etapes})</div>
      ${steps}
    </div>

    <!-- Équipe -->
    ${equipeHtml}

    <!-- Financement -->
    ${finHtml}

    <!-- Impact -->
    <div style="background:rgba(74,140,92,.05);border:1px solid rgba(74,140,92,.2);border-radius:var(--r-lg);padding:.9rem 1rem">
      <div style="font-size:.72rem;font-weight:600;color:var(--fern);margin-bottom:.4rem">🌿 Impact si complétée</div>
      <div style="font-size:.78rem;color:var(--ink);line-height:1.6">${edLight('impact', q.impact)}</div>
      <div style="display:flex;gap:.4rem;flex-wrap:wrap;margin-top:.6rem">${esrsBadges}</div>
    </div>
  `;

  // Panneau profil
  const panel = document.getElementById('qd-panel');
  if (currentRole === 'batisseur' || !currentRole) {
    const md = q.matchDetails || [];
    panel.innerHTML = `
      <!-- Match score -->
      <div style="background:linear-gradient(135deg,#1a3a2e,#0e2820);border-radius:var(--r-xl);padding:1.2rem;text-align:center;border:1px solid rgba(74,140,92,.2)">
        <div style="font-size:.58rem;color:var(--sage);text-transform:uppercase;letter-spacing:.12em;margin-bottom:.6rem">✦ Score de compatibilité</div>
        <div style="position:relative;width:80px;height:80px;margin:0 auto .7rem">
          <svg viewBox="0 0 80 80" style="width:100%;height:100%;transform:rotate(-90deg)">
            <circle cx="40" cy="40" r="33" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="7"/>
            <circle cx="40" cy="40" r="33" fill="none" stroke="#7ab840" stroke-width="7" stroke-linecap="round"
              stroke-dasharray="${2*Math.PI*33}" stroke-dashoffset="${2*Math.PI*33*(1-q.match/100)}"/>
          </svg>
          <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center">
            <span style="font-family:'Satoshi', sans-serif;font-size:1.4rem;font-weight:900;color:white;line-height:1">${q.match}</span>
            <span style="font-size:.48rem;color:rgba(255,255,255,.4);text-transform:uppercase">match</span>
          </div>
        </div>
        ${md.map(m=>`<div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.3rem">
          <span style="font-size:.62rem;color:rgba(255,255,255,.55);flex:1;text-align:left">${m.skill}</span>
          <div style="width:60px;height:3px;background:rgba(255,255,255,.1);border-radius:100px;overflow:hidden">
            <div style="height:100%;width:${m.pct}%;background:#7ab840;border-radius:100px"></div>
          </div>
          <span style="font-size:.6rem;color:#7ab840;font-weight:600;min-width:28px">${m.pct}%</span>
        </div>`).join('')}
      </div>

      <!-- Ce que tu vas apprendre -->
      <div style="background:white;border:1px solid rgba(46,102,66,.12);border-radius:var(--r-lg);padding:.9rem 1rem">
        <div style="font-size:.68rem;font-weight:600;color:var(--ink);margin-bottom:.45rem">🎓 Ce que tu vas apprendre</div>
        <div style="font-size:.73rem;color:var(--moss);line-height:1.5">${q.apprendre||'Compétences terrain et documentation d\'impact'}</div>
      </div>

      <!-- Preuve attendue -->
      <div style="background:rgba(58,110,140,.06);border:1px solid rgba(58,110,140,.2);border-radius:var(--r-lg);padding:.9rem 1rem">
        <div style="font-size:.68rem;font-weight:600;color:var(--sky);margin-bottom:.45rem">📸 Preuve d'impact attendue</div>
        <div style="font-size:.72rem;color:var(--ink);line-height:1.5;margin-bottom:.7rem">${q.preuve}</div>
        <button class="btn" style="width:100%;font-size:.68rem;padding:.45rem;background:rgba(58,110,140,.12);color:var(--sky);border:1px solid rgba(58,110,140,.25)" onclick="qdDeposerPreuve()">Soumettre une preuve →</button>
      </div>

      <!-- CTA -->
      ${q.joined
        ? `<button class="btn" disabled style="width:100%;padding:.8rem;font-size:.82rem;background:rgba(74,140,92,.12);color:var(--fern);border:1px solid rgba(74,140,92,.3);cursor:default">✓ Tu participes à cette quête</button>
           <button class="btn btn-ghost" style="width:100%;font-size:.72rem" onclick="qdDeposerPreuve()">📎 Déposer une preuve</button>`
        : `<button class="btn btn-primary" style="width:100%;padding:.8rem;font-size:.82rem" onclick="qdJoindre()">✅ Rejoindre cette quête</button>`}
      <button class="btn btn-ghost" style="width:100%;font-size:.72rem" onclick="qdContactPilote()">💬 Poser une question au Pilote</button>
    `;
  } else if (currentRole === 'semeur') {
    const fin = q.financement;
    const restant = fin ? Math.max(0, fin.objectif - fin.montant) : 200;
    const funded = fin ? fin.montant >= fin.objectif && fin.objectif > 0 : false;
    panel.innerHTML = `
      <!-- ESRS alignment -->
      <div style="background:linear-gradient(135deg,#0e1e35,#162a4a);border-radius:var(--r-xl);padding:1.2rem;border:1px solid rgba(33,150,243,.2)">
        <div style="font-size:.6rem;color:rgba(144,202,249,.7);text-transform:uppercase;letter-spacing:.12em;margin-bottom:.6rem">📋 Alignement CSRD</div>
        <div style="display:flex;gap:.4rem;flex-wrap:wrap;margin-bottom:.8rem">
          ${(q.esrs||[]).map(e=>`<span style="font-size:.7rem;padding:.25rem .6rem;border-radius:var(--r);background:rgba(33,150,243,.2);color:#90caf9;border:1px solid rgba(33,150,243,.3);font-weight:600">ESRS ${e}</span>`).join('')}
        </div>
        <div style="font-size:.7rem;color:rgba(255,255,255,.55);line-height:1.5">Cette quête couvre ${(q.esrs||[]).length} indicateur${(q.esrs||[]).length>1?'s':''} de ton référentiel. Financer = preuve auditable certifiée EVAD.</div>
      </div>

      <!-- Financer -->
      <div style="background:white;border:1px solid rgba(46,102,66,.12);border-radius:var(--r-lg);padding:.9rem 1rem">
        <div style="font-size:.68rem;font-weight:600;color:var(--ink);margin-bottom:.6rem">💰 Engager un financement</div>
        ${funded
          ? `<div style="text-align:center;padding:.6rem;background:rgba(74,140,92,.07);border-radius:var(--r);font-size:.72rem;color:var(--fern);font-weight:600;margin-bottom:.6rem">✅ Cette quête est entièrement financée</div>`
          : `<div style="background:rgba(46,102,66,.04);border:1px solid rgba(46,102,66,.15);border-radius:var(--r);padding:.7rem .85rem;margin-bottom:.7rem">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.2rem">
                <span style="font-size:.65rem;color:var(--moss)">Montant total à financer</span>
                <span style="font-family:'Satoshi', sans-serif;font-size:1.3rem;font-weight:900;color:var(--ink)">${restant}€</span>
              </div>
              <div style="font-size:.6rem;color:var(--moss);opacity:.65">Engagement unique · La quête est financée en totalité ou pas du tout</div>
            </div>
            <button class="btn btn-primary" style="width:100%;padding:.65rem;font-size:.78rem" onclick="qdFinancer()">💰 Je finance cette quête (${restant}€) →</button>`
        }
        <!-- Graines + gain CSRD -->
        <div style="margin-top:.75rem;border:1px solid rgba(200,115,42,.2);border-radius:var(--r);overflow:hidden">
          <div style="background:rgba(200,115,42,.07);padding:.6rem .8rem;display:flex;align-items:center;justify-content:space-between">
            <div>
              <div style="font-size:.6rem;color:var(--moss);opacity:.75;margin-bottom:.1rem">Si complétée avec preuves certifiées</div>
              <div style="font-size:.68rem;font-weight:600;color:var(--ink)">Tu recevras en graines CSRD</div>
            </div>
            <div style="font-family:'Satoshi', sans-serif;font-size:1.25rem;font-weight:900;color:var(--amber)">+${SEM_QUETES.find(sq=>sq.id===_qdCurrentId)?.graines||Math.round((q.financement?.objectif||200)*0.15)} 🌱</div>
          </div>
          <div style="background:rgba(46,102,66,.04);border-top:1px solid rgba(200,115,42,.15);padding:.55rem .8rem">
            <div style="font-size:.62rem;font-weight:600;color:var(--moss);margin-bottom:.35rem">📋 Ce que tu gagnes en CSRD</div>
            <div style="display:flex;flex-direction:column;gap:.25rem">
              ${(q.esrs||[]).map(e => {
                const isGap = ESRS_GAP.includes(e);
                return `<div style="display:flex;align-items:center;justify-content:space-between">
                  <span style="font-size:.68rem;color:var(--ink)"><strong>${e}</strong>, ${ESRS_LABELS[e]||e}</span>
                  <span style="font-size:.6rem;padding:.1rem .45rem;border-radius:100px;font-weight:600;background:${isGap?'rgba(184,78,53,.1)':'rgba(74,140,92,.1)'};color:${isGap?'var(--terracotta)':'var(--fern)'}">
                    ${isGap?'⚠️ Gap comblé':'✓ Renforcé'}
                  </span>
                </div>`;
              }).join('')}
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Pilote -->
      <div style="background:rgba(46,102,66,.05);border:1px solid rgba(46,102,66,.15);border-radius:var(--r-lg);padding:.85rem 1rem">
        <div style="font-size:.68rem;font-weight:600;color:var(--ink);margin-bottom:.3rem">🏡 Pilote responsable</div>
        <div style="font-size:.73rem;color:var(--moss);margin-bottom:.6rem">${q.pilote}</div>
        <button class="btn btn-ghost" style="width:100%;font-size:.7rem" onclick="qdContactPilote()">Contacter le Pilote →</button>
      </div>
    `;
  } else if (currentRole === 'pilote') {
    panel.innerHTML = `
      <!-- Statut -->
      <div style="background:white;border:1px solid rgba(46,102,66,.12);border-radius:var(--r-lg);padding:.9rem 1rem">
        <div style="font-size:.68rem;font-weight:600;color:var(--ink);margin-bottom:.6rem">⚙️ Gestion de la quête</div>
        <div style="display:flex;gap:.4rem;flex-wrap:wrap;margin-bottom:.7rem">
          <button class="btn" style="font-size:.65rem;padding:.3rem .7rem;background:rgba(74,140,92,.1);color:var(--fern);border:1px solid rgba(74,140,92,.25)" onclick="qdPause()">${q.paused ? '▶️ Réactiver' : '⏸ Mettre en pause'}</button>
          <button class="btn" style="font-size:.65rem;padding:.3rem .7rem;background:rgba(200,115,42,.1);color:var(--amber);border:1px solid rgba(200,115,42,.25)" onclick="qdCloturer()">🔒 Clôturer</button>
        </div>
        <button class="btn btn-ghost" style="width:100%;font-size:.7rem;margin-bottom:.45rem" onclick="qdModifier()">✏️ Modifier les paramètres →</button>
        <button class="btn btn-primary" style="width:100%;font-size:.72rem;background:rgba(240,176,50,.16);color:#a06c00;border:1px solid rgba(240,176,50,.35)" onclick="qdPublierReseau()">📣 Publier dans le réseau →</button>
      </div>

      <!-- Preuves à valider -->
      <div style="background:rgba(200,115,42,.06);border:1px solid rgba(200,115,42,.25);border-radius:var(--r-lg);padding:.9rem 1rem">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.6rem">
          <div style="font-size:.68rem;font-weight:600;color:var(--amber)">📸 Preuves à valider</div>
          <span style="font-size:.62rem;background:rgba(200,115,42,.15);color:var(--amber);padding:.1rem .4rem;border-radius:100px;font-weight:700">0 en attente</span>
        </div>
        <div style="font-size:.7rem;color:var(--moss);opacity:.5;margin-bottom:.7rem">Aucune preuve en attente</div>
        <button class="btn btn-primary" style="width:100%;font-size:.72rem;padding:.5rem" onclick="qdValider()">Valider les preuves →</button>
      </div>

      <!-- Bâtisseurs inscrits -->
      <div style="background:white;border:1px solid rgba(46,102,66,.12);border-radius:var(--r-lg);padding:.9rem 1rem">
        <div style="font-size:.68rem;font-weight:600;color:var(--ink);margin-bottom:.5rem">👥 Bâtisseurs inscrits (${q.equipe.length})</div>
        ${q.equipe.map(m=>`<div style="display:flex;align-items:center;gap:.6rem;padding:.3rem 0;border-bottom:1px solid rgba(46,102,66,.06)">
          <div style="width:26px;height:26px;border-radius:50%;background:${m.c};color:white;display:flex;align-items:center;justify-content:center;font-size:.58rem;font-weight:700">${m.i}</div>
          <div style="font-size:.7rem;color:var(--ink)">Bâtisseur ${m.i}</div>
          <button class="btn" style="margin-left:auto;font-size:.6rem;padding:.15rem .45rem;background:transparent;color:var(--moss);border:1px solid rgba(46,102,66,.2)" onclick="mmBubble('Profil bâtisseur ouvert')">Voir →</button>
        </div>`).join('')}
      </div>

      <!-- Financement reçu -->
      ${q.financement?.semeur ? `<div style="background:rgba(58,110,140,.06);border:1px solid rgba(58,110,140,.2);border-radius:var(--r-lg);padding:.85rem 1rem">
        <div style="font-size:.68rem;font-weight:600;color:var(--sky);margin-bottom:.3rem">💰 Financement reçu</div>
        <div style="font-family:'Satoshi', sans-serif;font-size:1.2rem;font-weight:900;color:var(--sky)">${q.financement.montant}€</div>
        <div style="font-size:.65rem;color:var(--moss);opacity:.8">🏢 ${q.financement.semeur}</div>
      </div>` : ''}
    `;
  }
}

function qdJoindre() {
  const q = qdQuest(); if (!q) return;
  if (q.joined) { mmBubble('Tu participes déjà à cette quête'); return; }
  q.joined = true;
  q.equipe = q.equipe || [];
  q.equipe.push({ i: 'M', c: '#018262' });
  const m = String(q.places || '0/6').split('/');
  const cur = Math.min((parseInt(m[0], 10) || 0) + 1, parseInt(m[1], 10) || 6);
  q.places = cur + '/' + (m[1] || 6);
  mmBubble('✅ Inscription confirmée · tu as rejoint « ' + (q.titre || 'la quête') + ' »');
  qdRerender();
}
function qdFinancer() {
  const q = qdQuest(); if (!q) return;
  const semNom = (typeof semFicheData !== 'undefined' && semFicheData && semFicheData.nom) ? semFicheData.nom : 'Mon organisation';
  q.financement = q.financement || {};
  if (!q.financement.objectif || q.financement.objectif <= 0) q.financement.objectif = Math.max(2000, (q.tokens || 50) * 40);
  q.financement.montant = q.financement.objectif;
  q.financement.semeur = semNom;
  mmBubble('💰 Quête financée par ' + semNom + ' · preuve auditable certifiée EVAD');
  qdRerender();
}
function qdValider() {
  const q = qdQuest(); if (!q) return;
  if (q.etape_actuelle < q.etapes) {
    q.etape_actuelle++;
    if (q.etape_actuelle >= q.etapes) { q.validated = true; mmBubble('✅ Preuve certifiée · quête complétée, graines distribuées 🌱'); }
    else mmBubble('✅ Étape validée · progression ' + q.etape_actuelle + '/' + q.etapes);
  } else { q.validated = true; mmBubble('✅ Toutes les preuves sont validées'); }
  qdRerender();
}
function qdCloturer() {
  const q = qdQuest(); if (!q) return;
  q.closed = true; mmBubble('🔒 Quête clôturée'); qdRerender();
}
function qdPublierReseau() {
  const q = qdQuest(); if (!q || typeof RESEAU_POSTS === 'undefined') return;
  const lieuNom = q.pilote || q.lieu || ((typeof myLieuData !== 'undefined' && myLieuData && myLieuData.nom) || 'Mon lieu');
  const ville = q.ville || 'Bordeaux';
  if (!(RESEAU_POSTS[0] && RESEAU_POSTS[0].quest && RESEAU_POSTS[0].quest.titre === q.titre && RESEAU_POSTS[0].author === lieuNom)) {
    RESEAU_POSTS.unshift({
      profile: 'pilote', author: lieuNom, lieu: ville, time: "à l'instant",
      type: 'quete', regen: 'entreprendre',
      text: "On lance une nouvelle quête sur notre lieu ⚡ « " + q.titre + " ». On mobilise des Bâtisseurs, rejoignez-nous !",
      quest: { titre: q.titre, meta: [q.duree, (q.places ? q.places.split('/')[1] + ' pers.' : ''), (q.tokens + ' graines')].filter(Boolean).join(' · ') },
      cta: 'Rejoindre la quête'
    });
  }
  showScreen('reseau');
  setTimeout(() => {
    if (typeof reseauTab === 'function') { try { reseauTab('fil', document.getElementById('rtab-fil')); } catch (e) {} }
    if (typeof reseauSetFilter === 'function') reseauSetFilter('tout', document.querySelector('.reseau-filter[data-f="tout"]'));
  }, 120);
  if (typeof mmBubble === 'function') mmBubble('📣 Quête publiée au Réseau !');
}

/* ─── GESTION MARKETPLACE PILOTE ─── */
const PMKT_OFFERS_INIT = [];

let pmktOffers = PMKT_OFFERS_INIT.map(o => ({...o}));
let pmktFilter = 'toutes';
let pmktEditingId = null;

function pmktFilterOffers(f, btn) {
  pmktFilter = f;
  document.querySelectorAll('.pmkt-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  pmktRenderOffers();
}

function pmktRenderOffers() {
  const list = document.getElementById('pmkt-offers-list');
  if (!list) return;
  let offers = [...pmktOffers];
  if (pmktFilter === 'actives') offers = offers.filter(o => o.status === 'active');
  if (pmktFilter === 'pausees') offers = offers.filter(o => o.status === 'paused' || o.status === 'full');

  const statusLabel = { active:'Active', paused:'En pause', full:'Stock épuisé' };
  const statusCls   = { active:'pmkt-status-active', paused:'pmkt-status-paused', full:'pmkt-status-full' };

  list.innerHTML = offers.length === 0
    ? `<div style="padding:2rem;text-align:center;font-size:.78rem;color:var(--moss);opacity:.6">Aucune offre dans cette catégorie.</div>`
    : offers.map(o => `
    <div class="pmkt-offer-row">
      <div class="pmkt-offer-icon" style="background:${o.bg}">${o.emoji}</div>
      <div class="pmkt-offer-info">
        <div class="pmkt-offer-title">${o.titre}</div>
        <div class="pmkt-offer-meta">
          <span>🪙 ${o.prix} tokens</span>
          <span>📦 Stock : ${o.stock}/${o.stockMax}</span>
          <span>👁 ${o.vues} vues</span>
          <span>✅ ${o.echanges} échanges</span>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:.6rem;flex-shrink:0;flex-wrap:wrap;justify-content:flex-end">
        <span class="pmkt-status-pill ${statusCls[o.status]}">${statusLabel[o.status]}</span>
        <div class="pmkt-actions">
          <button class="pmkt-btn pmkt-btn-edit" onclick="piloteMktOpenEdit(${o.id})">✏️ Modifier</button>
          <button class="pmkt-btn pmkt-btn-toggle" onclick="piloteMktToggle(${o.id})">${o.status === 'paused' ? '▶ Activer' : '⏸ Pause'}</button>
          <button class="pmkt-btn pmkt-btn-delete" onclick="piloteMktDelete(${o.id})">🗑</button>
        </div>
      </div>
    </div>`).join('');

  // update active count badge
  const activeCount = pmktOffers.filter(o => o.status === 'active').length;
  const el = document.getElementById('pmkt-count-active');
  if (el) el.textContent = activeCount;
}

function piloteMktToggle(id) {
  const o = pmktOffers.find(o => o.id === id);
  if (!o) return;
  if (o.status === 'full') return;
  o.status = o.status === 'active' ? 'paused' : 'active';
  pmktRenderOffers();
  mmBubble(`Offre "${o.titre.substring(0,28)}…" ${o.status === 'active' ? 'réactivée ✅' : 'mise en pause ⏸'}`);
}

function piloteMktDelete(id) {
  const o = pmktOffers.find(o => o.id === id);
  if (!o) return;
  pmktOffers = pmktOffers.filter(o => o.id !== id);
  pmktRenderOffers();
  mmBubble(`Offre "${o.titre.substring(0,28)}…" supprimée.`);
}

function piloteMktOpenAdd() {
  pmktEditingId = null;
  const modal = document.getElementById('pmkt-modal');
  document.getElementById('pmkt-modal-content').innerHTML = pmktFormHtml(null);
  modal.style.display = 'flex';
}

function piloteMktOpenEdit(id) {
  pmktEditingId = id;
  const o = pmktOffers.find(o => o.id === id);
  const modal = document.getElementById('pmkt-modal');
  document.getElementById('pmkt-modal-content').innerHTML = pmktFormHtml(o);
  modal.style.display = 'flex';
}

function pmktFormHtml(o) {
  const cats = ['alimentation','formation','artisanat','service','hébergement','événement'];
  return `
    <h2 style="font-family:'Satoshi', sans-serif;font-size:1.2rem;font-weight:900;color:var(--ink);margin-bottom:1.2rem">${o ? '✏️ Modifier l\'offre' : '➕ Nouvelle offre Marketplace'}</h2>
    <div class="pmkt-form-row">
      <label class="pmkt-label">Titre de l'offre</label>
      <input class="pmkt-input" id="pf-titre" placeholder="Ex : Panier légumes hebdomadaire" value="${o ? o.titre : ''}">
    </div>
    <div class="pmkt-two-col">
      <div class="pmkt-form-row" style="margin-bottom:0">
        <label class="pmkt-label">Catégorie</label>
        <select class="pmkt-select" id="pf-cat">
          ${cats.map(c => `<option value="${c}" ${o && o.cat===c?'selected':''}>${c.charAt(0).toUpperCase()+c.slice(1)}</option>`).join('')}
        </select>
      </div>
      <div class="pmkt-form-row" style="margin-bottom:0">
        <label class="pmkt-label">Emoji / icône</label>
        <input class="pmkt-input" id="pf-emoji" placeholder="🥦" maxlength="4" value="${o ? o.emoji : ''}">
      </div>
    </div>
    <div style="height:.75rem"></div>
    <div class="pmkt-form-row">
      <label class="pmkt-label">Description courte</label>
      <textarea class="pmkt-textarea" id="pf-desc" placeholder="Décrivez l'offre en 1-2 phrases…">${o && o.desc ? o.desc : ''}</textarea>
    </div>
    <div class="pmkt-two-col">
      <div class="pmkt-form-row" style="margin-bottom:0">
        <label class="pmkt-label">Prix (graines)</label>
        <input class="pmkt-input" id="pf-prix" type="number" min="0" placeholder="30" value="${o ? o.prix : ''}">
      </div>
      <div class="pmkt-form-row" style="margin-bottom:0">
        <label class="pmkt-label">Stock disponible</label>
        <input class="pmkt-input" id="pf-stock" type="number" min="0" placeholder="10" value="${o ? o.stock : ''}">
      </div>
    </div>
    <div style="height:.9rem"></div>
    <div style="display:flex;gap:.6rem;margin-top:.4rem">
      <button class="btn btn-primary" style="flex:1;padding:.7rem" onclick="pmktSaveOffer()">${o ? '💾 Enregistrer les modifications' : '✅ Publier l\'offre'}</button>
      <button class="btn btn-ghost" onclick="document.getElementById('pmkt-modal').style.display='none'">Annuler</button>
    </div>`;
}

function pmktSaveOffer() {
  const titre = document.getElementById('pf-titre').value.trim();
  const cat   = document.getElementById('pf-cat').value;
  const emoji = document.getElementById('pf-emoji').value.trim() || '🌿';
  const prix  = parseInt(document.getElementById('pf-prix').value) || 0;
  const stock = parseInt(document.getElementById('pf-stock').value) || 0;
  const descEl = document.getElementById('pf-desc');
  const desc  = descEl ? descEl.value.trim() : '';
  if (!titre) { document.getElementById('pf-titre').style.borderColor='var(--terracotta)'; return; }

  if (pmktEditingId !== null) {
    const o = pmktOffers.find(o => o.id === pmktEditingId);
    if (o) { o.titre=titre; o.cat=cat; o.emoji=emoji; o.prix=prix; o.stock=stock; o.stockMax=stock; o.desc=desc; if(stock>0 && o.status==='full') o.status='active'; }
    mmBubble(`Offre "${titre.substring(0,28)}…" mise à jour ✅`);
  } else {
    const newId = Date.now();
    pmktOffers.push({ id:newId, emoji, bg:'rgba(74,140,92,.1)', titre, cat, prix, stock, stockMax:stock, desc, status:'active', vues:0, echanges:0 });
    mmBubble(`Nouvelle offre "${titre.substring(0,28)}…" publiée dans le Marketplace 🎉`);
  }
  document.getElementById('pmkt-modal').style.display = 'none';
  pmktRenderOffers();
}

/* ─── MARKETPLACE BÂTISSEUR ─── */
const MKT_OFFRES = [
  // ── Alimentation ──
  { id:101, cat:'alimentation', titre:'Panier de légumes bio', desc:'Panier hebdomadaire de légumes de saison cultivés en permaculture, récoltés le matin même.', lieu:'Le Jardin de ta Sœur', ville:'Bordeaux', prix:30, unite:'le panier hebdo', emoji:'🥦', bg:'rgba(74,140,92,.12)', badge:'new', stock:12, impact:'Soutient le maraîchage local et raccourcit les circuits alimentaires.' },
  { id:102, cat:'alimentation', titre:'Pain au levain bio', desc:'Miche de pain au levain naturel, farine de blés anciens moulue sur place.', lieu:'Supercoop', ville:'Bordeaux', prix:12, unite:'la miche', emoji:'🍞', bg:'rgba(74,140,92,.12)', badge:null, stock:20, impact:'Valorise une filière céréalière paysanne et locale.' },
  { id:103, cat:'alimentation', titre:'Caisse de fruits de saison', desc:'Caisse de 5 kg de fruits du verger conservatoire, variétés anciennes.', lieu:'Darwin Écosystème', ville:'Bordeaux', prix:25, unite:'la caisse 5 kg', emoji:'🍎', bg:'rgba(74,140,92,.12)', badge:'promo', stock:8, impact:'Préserve la biodiversité fruitière et les vergers urbains.' },
  // ── Formation ──
  { id:104, cat:'formation', titre:'Atelier permaculture', desc:'Séance pratique de 3h : design d\'un potager nourricier, buttes et associations de plantes.', lieu:'Le Jardin de ta Sœur', ville:'Bordeaux', prix:60, unite:'la séance · 3h', emoji:'🌱', bg:'rgba(58,110,140,.12)', badge:'premium', stock:6, impact:'Transmet les savoir-faire pour cultiver sans intrants chimiques.' },
  { id:105, cat:'formation', titre:'Formation low-tech & réparation', desc:'Journée d\'initiation à la réparation et à l\'autonomie technique (vélo, petit électroménager).', lieu:'Le Garage Moderne', ville:'Bordeaux', prix:45, unite:'la journée', emoji:'🔧', bg:'rgba(58,110,140,.12)', badge:null, stock:10, impact:'Allonge la durée de vie des objets et réduit les déchets.' },
  { id:106, cat:'formation', titre:'Initiation au compostage', desc:'Atelier gratuit pour apprendre à composter en ville, en pied d\'immeuble ou en lombricomposteur.', lieu:'La Halle des Douves', ville:'Bordeaux', prix:0, unite:'accès libre', emoji:'♻️', bg:'rgba(58,110,140,.12)', badge:null, stock:30, impact:'Détourne les biodéchets de l\'incinération et nourrit les sols.' },
  // ── Artisanat ──
  { id:107, cat:'artisanat', titre:'Mobilier en bois de réemploi', desc:'Pièce de mobilier unique fabriquée à partir de bois récupéré et restauré à l\'atelier.', lieu:'Les Vivres de l\'Art', ville:'Bordeaux', prix:120, unite:'la pièce', emoji:'🪑', bg:'rgba(184,78,53,.12)', badge:'premium', stock:3, impact:'Économie circulaire : 0 arbre coupé, matière sauvée de la benne.' },
  { id:108, cat:'artisanat', titre:'Vélo reconditionné', desc:'Vélo de ville entièrement révisé et garanti, remis en état par l\'atelier participatif.', lieu:'Le Garage Moderne', ville:'Bordeaux', prix:90, unite:'le vélo', emoji:'🚲', bg:'rgba(184,78,53,.12)', badge:'new', stock:4, impact:'Mobilité douce et réemploi : −1 vélo neuf produit.' },
  { id:109, cat:'artisanat', titre:'Savons artisanaux surgras', desc:'Savon saponifié à froid, huiles bio et locales, sans emballage plastique.', lieu:'La Maison Écocitoyenne', ville:'Bordeaux', prix:8, unite:'le savon', emoji:'🧼', bg:'rgba(184,78,53,.12)', badge:null, stock:40, impact:'Zéro déchet et ingrédients respectueux de l\'eau.' },
  // ── Services ──
  { id:110, cat:'service', titre:'Atelier de réparation textile', desc:'Apporte un vêtement abîmé, repars avec réparé. Couturières bénévoles sur place.', lieu:'La Halle des Douves', ville:'Bordeaux', prix:15, unite:'la pièce', emoji:'🧵', bg:'rgba(122,110,168,.12)', badge:null, stock:15, impact:'Lutte contre la fast-fashion, prolonge la vie des vêtements.' },
  { id:111, cat:'service', titre:'Coup de main jardinage', desc:'Échange de temps : une demi-journée d\'entraide au jardin partagé contre tes graines.', lieu:'Le Jardin de ta Sœur', ville:'Bordeaux', prix:0, unite:'accès libre', emoji:'🤝', bg:'rgba(122,110,168,.12)', badge:null, stock:20, impact:'Renforce le lien social et l\'entraide locale.' },
  { id:112, cat:'service', titre:'Conseil en rénovation écologique', desc:'Consultation d\'1h avec un conseiller : isolation biosourcée, chauffage, aides financières.', lieu:'La Maison Écocitoyenne', ville:'Bordeaux', prix:50, unite:'la consultation · 1h', emoji:'🏠', bg:'rgba(122,110,168,.12)', badge:'premium', stock:8, impact:'Accompagne la baisse des consommations d\'énergie des logements.' },
  // ── Événements ──
  { id:113, cat:'evenement', titre:'Concert au coucher du soleil', desc:'Soirée musique live sur la rive droite, scène alimentée en énergie solaire.', lieu:'Darwin Écosystème', ville:'Bordeaux', prix:20, unite:'la place', emoji:'🎶', bg:'rgba(200,115,42,.12)', badge:'promo', stock:50, impact:'Culture accessible et événement à faible empreinte.' },
  { id:114, cat:'evenement', titre:'Marché des producteurs', desc:'Marché hebdomadaire en circuit court : maraîchers, fromagers et artisans du territoire.', lieu:'Supercoop', ville:'Bordeaux', prix:0, unite:'accès libre', emoji:'🧺', bg:'rgba(200,115,42,.12)', badge:null, stock:100, impact:'Soutient les revenus des producteurs locaux.' },
  { id:115, cat:'evenement', titre:'Repair Café mensuel', desc:'Viens réparer ensemble tes objets du quotidien autour d\'un café. Outils et bénévoles fournis.', lieu:'La Halle des Douves', ville:'Bordeaux', prix:0, unite:'accès libre', emoji:'🛠', bg:'rgba(200,115,42,.12)', badge:null, stock:40, impact:'200 objets réparés/an, −800 kg CO₂ évités.' },
  // ── Hébergement ──
  { id:116, cat:'hebergement', titre:'Nuit en éco-gîte', desc:'Nuitée dans un gîte rénové en matériaux biosourcés, autonomie en eau et énergie.', lieu:'La Maison Écocitoyenne', ville:'Bordeaux', prix:80, unite:'la nuit', emoji:'🛏', bg:'rgba(46,153,112,.12)', badge:'premium', stock:5, impact:'Tourisme bas-carbone et sensibilisation à l\'habitat durable.' },
  { id:117, cat:'hebergement', titre:'Emplacement camping nature', desc:'Emplacement de bivouac au cœur du jardin, sanitaires secs et douche solaire.', lieu:'Le Jardin de ta Sœur', ville:'Bordeaux', prix:25, unite:'la nuit', emoji:'⛺', bg:'rgba(46,153,112,.12)', badge:'new', stock:12, impact:'Reconnexion à la nature, très faible empreinte.' },
  { id:118, cat:'hebergement', titre:'Chambre solidaire', desc:'Chambre d\'hôtes au sein du tiers-lieu, petit-déjeuner local inclus.', lieu:'Darwin Écosystème', ville:'Bordeaux', prix:40, unite:'la nuit', emoji:'🏡', bg:'rgba(46,153,112,.12)', badge:null, stock:6, impact:'Accueil à prix juste et ancrage dans la vie du lieu.' }
];

let mktCurrentCat = 'tous';
let mktCurrentSort = 'pertinence';
let mktBalance = 0;

function mktFilter(cat, btn) {
  mktCurrentCat = cat;
  document.querySelectorAll('.mkt-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  mktRender();
}

function mktSort(sort, btn) {
  mktCurrentSort = sort;
  document.querySelectorAll('.mkt-sort').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  mktRender();
}

// Convertit une offre du tableau de bord Pilote vers le format Marketplace.
function pmktToMkt(o) {
  const lieu = (typeof myLieuData !== 'undefined' && myLieuData && myLieuData.nom) ? myLieuData.nom : (typeof EVAD !== 'undefined' ? EVAD.activeLieu.nom : 'Mon lieu');
  const ville = (typeof myLieuData !== 'undefined' && myLieuData && myLieuData.localisation) ? myLieuData.localisation : 'Bordeaux';
  return {
    id: o.id, cat: o.cat, titre: o.titre,
    desc: o.desc || ('Offre proposée par ' + lieu + '.'),
    lieu: lieu, ville: ville, prix: o.prix,
    unite: o.unite || (o.prix > 0 ? 'à échanger en graines' : 'accès libre'),
    emoji: o.emoji, bg: o.bg || 'rgba(74,140,92,.1)', badge: o.badge || 'new',
    stock: o.stock, impact: o.impact || "Soutient l'économie locale et circulaire du lieu."
  };
}
// Offres affichées dans le Marketplace = catalogue + offres publiées au tableau de bord.
function mktAllOffres() {
  const extra = (typeof pmktOffers !== 'undefined') ? pmktOffers.filter(o => o.status !== 'full' && o.stock > 0).map(pmktToMkt) : [];
  return [...MKT_OFFRES, ...extra];
}

function mktRender() {
  const grid = document.getElementById('mkt-grid');
  if (!grid) return;
  // Solde de démo : graines du bâtisseur, sinon un solde par défaut
  if (!mktBalance) mktBalance = (typeof batProfileGraines === 'function' ? batProfileGraines() : 0) || 200;
  const _bal = document.getElementById('mkt-balance'); if (_bal) _bal.textContent = mktBalance;
  let offres = mktAllOffres();
  if (mktCurrentCat !== 'tous') offres = offres.filter(o => o.cat === mktCurrentCat);
  if (mktCurrentSort === 'prix_asc') offres.sort((a,b) => a.prix - b.prix);
  else if (mktCurrentSort === 'prix_desc') offres.sort((a,b) => b.prix - a.prix);
  else if (mktCurrentSort === 'proche') offres.sort((a,b) => a.ville.localeCompare(b.ville));

  grid.innerHTML = offres.map(o => {
    const canAfford = mktBalance >= o.prix;
    const badgeHtml = o.badge ? `<div class="mkt-card-badge mkt-badge-${o.badge}">${o.badge==='new'?'Nouveau':o.badge==='promo'?'Promo':'Premium'}</div>` : '';
    const stockHtml = o.stock <= 3 ? `<div style="font-size:.6rem;color:var(--terracotta);font-weight:600;margin-top:.2rem">⚠ Plus que ${o.stock} disponibles</div>` : '';
    return `<div class="mkt-card" onclick="mktOpenModal(${o.id})">
      <div class="mkt-card-img" style="background:${o.bg}">
        <span>${o.emoji}</span>
        ${badgeHtml}
      </div>
      <div class="mkt-card-body">
        <div class="mkt-card-cat">${o.cat.charAt(0).toUpperCase()+o.cat.slice(1)}</div>
        <div class="mkt-card-title">${o.titre}</div>
        <div class="mkt-card-lieu">📍 ${o.lieu} · ${o.ville}</div>
        <div class="mkt-card-desc">${o.desc}</div>
        ${stockHtml}
      </div>
      <div class="mkt-card-footer">
        <div>
          <div class="mkt-price">${o.prix > 0 ? '🪙 '+o.prix : '🎁 Gratuit'}</div>
          <div class="mkt-price-sub">${o.prix > 0 ? o.unite : 'accès libre'}</div>
        </div>
        <button class="mkt-btn-buy ${canAfford?'can-afford':'cant-afford'}" onclick="event.stopPropagation();mktOpenModal(${o.id})">
          ${canAfford ? (o.prix===0 ? 'Réserver →' : 'Échanger →') : 'Insuffisant'}
        </button>
      </div>
    </div>`;
  }).join('');
}

function mktOpenModal(id) {
  const o = mktAllOffres().find(x => x.id === id) || MKT_OFFRES[id];
  if (!o) return;
  const canAfford = mktBalance >= o.prix;
  const modal = document.getElementById('mkt-modal');
  const content = document.getElementById('mkt-modal-content');
  content.innerHTML = `
    <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.2rem">
      <div style="width:64px;height:64px;border-radius:var(--r-lg);background:${o.bg};display:flex;align-items:center;justify-content:center;font-size:1.9rem;flex-shrink:0">${o.emoji}</div>
      <div>
        <div style="font-size:.62rem;color:var(--moss);opacity:.6;text-transform:uppercase;letter-spacing:.1em;margin-bottom:.2rem">${o.cat}</div>
        <h2 style="font-family:'Satoshi', sans-serif;font-size:1.25rem;font-weight:900;color:var(--ink);line-height:1.15;margin-bottom:.2rem">${o.titre}</h2>
        <div style="font-size:.7rem;color:var(--moss)">📍 ${o.lieu} · ${o.ville}</div>
      </div>
    </div>
    <p style="font-size:.8rem;color:var(--moss);line-height:1.55;margin-bottom:1rem">${o.desc}</p>
    <div style="background:rgba(74,140,92,.06);border:1px solid rgba(74,140,92,.15);border-radius:var(--r-lg);padding:.8rem 1rem;margin-bottom:1rem;font-size:.74rem;color:var(--forest)">
      🌱 Impact estimé : ${o.impact}
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;padding:.8rem 1rem;background:${canAfford?'rgba(74,140,92,.06)':'rgba(184,78,53,.05)'};border:1px solid ${canAfford?'rgba(74,140,92,.2)':'rgba(184,78,53,.2)'};border-radius:var(--r-lg);margin-bottom:1rem">
      <div>
        <div style="font-size:.62rem;color:var(--moss);opacity:.6;text-transform:uppercase;letter-spacing:.1em">Coût</div>
        <div style="font-family:'Satoshi', sans-serif;font-size:1.4rem;font-weight:900;color:var(--amber)">${o.prix>0?'🪙 '+o.prix+' tokens':'🎁 Gratuit'}</div>
      </div>
      <div style="text-align:right">
        <div style="font-size:.62rem;color:var(--moss);opacity:.6;text-transform:uppercase;letter-spacing:.1em">Ton solde</div>
        <div style="font-family:'Satoshi', sans-serif;font-size:1.1rem;font-weight:700;color:${canAfford?'var(--fern)':'var(--terracotta)'}">🪙 ${mktBalance} ${canAfford?'✓':'– insuffisant'}</div>
      </div>
    </div>
    <div style="display:flex;gap:.6rem">
      ${canAfford
        ? `<button class="btn btn-primary" style="flex:1;padding:.75rem" onclick="mktConfirmBuy(${o.id})">${o.prix===0?'🎟 Réserver gratuitement':'🪙 Confirmer l\'échange (−'+o.prix+' tokens)'}</button>`
        : `<button class="btn" style="flex:1;padding:.75rem;background:rgba(46,102,66,.08);color:var(--moss);cursor:default" disabled>🔒 graines insuffisants (manque ${o.prix - mktBalance})</button>`
      }
      <button class="btn btn-ghost" onclick="document.getElementById('mkt-modal').style.display='none'">Fermer</button>
    </div>`;
  modal.style.display = 'flex';
}

function mktConfirmBuy(id) {
  const o = mktAllOffres().find(x => x.id === id) || MKT_OFFRES[id];
  if (!o || mktBalance < o.prix) return;
  mktBalance -= o.prix;
  const _b = document.getElementById('mkt-balance'); if (_b) _b.textContent = mktBalance;
  // Décrémente le stock à la source (offre du tableau de bord ou catalogue)
  const src = (typeof pmktOffers !== 'undefined') ? pmktOffers.find(x => x.id === id) : null;
  if (src) { src.stock = Math.max(0, (src.stock || 0) - 1); src.echanges = (src.echanges || 0) + 1; if (src.stock === 0) src.status = 'full'; }
  else { const m = MKT_OFFRES.find(x => x.id === id); if (m && m.stock != null) m.stock = Math.max(0, m.stock - 1); }
  document.getElementById('mkt-modal').style.display = 'none';
  mktRender();
  mmBubble(`✅ Échangé ! "${o.titre}" chez ${o.lieu}, ${o.prix>0?'−'+o.prix+' graines':'gratuit'}`);
}

/* ─── PILOTE TABS JS ─── */
// Remplit l'onglet « Fiche lieu » du tableau de bord avec le lieu créé.
function ficheFillFromMyLieu() {
  const d = (typeof myLieuData !== 'undefined' && myLieuData) ? myLieuData : (typeof cData !== 'undefined' ? cData : null);
  if (!d) return;
  const root = document.getElementById('pilote-panel-fiche');
  if (!root) return;
  const set = (id, val) => { const el = document.getElementById(id); if (el && val != null && val !== '') el.value = val; };

  set('fiche-f-nom', d.nom);
  // Type : id interne -> libellé du select
  const typeLbl = (typeof TYPES_LIEU !== 'undefined') ? (TYPES_LIEU.find(t => t.id === d.type) || {}).l : null;
  if (typeLbl) { const s = document.getElementById('fiche-f-type'); if (s) s.value = typeLbl; }
  // Adresse + code postal (extrait de la localisation si présent)
  if (d.localisation) {
    set('fiche-f-adresse', d.localisation);
    const cp = (String(d.localisation).match(/\b\d{5}\b/) || [])[0];
    if (cp) set('fiche-f-cp', cp);
  }
  set('fiche-f-annee', d.annee);
  set('fiche-f-surface', d.surface);
  // Statut : id -> libellé
  const STAT = { asso:'Association loi 1901', scic:'SCIC', sas:'SAS', coop:'Coopérative', autre:'Autre' };
  if (d.statut) { const s = document.getElementById('fiche-f-statut'); if (s) s.value = STAT[d.statut] || d.statut; }
  set('fiche-f-desc', d.desc);
  // Phase : bouton actif par libellé
  const PH = { idee:'Idée', conception:'Conception', chantier:'Chantier', operationnel:'Opérationnel' };
  if (d.phase) {
    const lbl = PH[d.phase];
    root.querySelectorAll('.fiche-tag').forEach(b => b.classList.toggle('active', !!lbl && b.textContent.indexOf(lbl) !== -1));
  }
  // Logo / couverture
  const logo = document.getElementById('fiche-logo-preview');
  if (logo) {
    if (d.logo) logo.innerHTML = '<img src="' + d.logo + '" style="width:100%;height:100%;object-fit:cover" alt="">';
    else if (d.icon) logo.textContent = d.icon;
  }
  const cover = document.getElementById('fiche-cover-preview');
  if (cover && d.cover) cover.innerHTML = '<img src="' + d.cover + '" style="width:100%;height:100%;object-fit:cover" alt="">';
}

// Reflète le lieu créé (myLieuData) dans l'en-tête du tableau de bord.
function evadReflectLieuInDashboard() {
  const d = (typeof myLieuData !== 'undefined' && myLieuData) ? myLieuData : null;
  const sub = document.getElementById('pilote-lieu-sub');
  if (!sub) return;
  if (d && d.nom) {
    const lieuType = (typeof TYPES_LIEU !== 'undefined' ? (TYPES_LIEU.find(t => t.id === d.type) || {}).l : null);
    const detail = d.localisation || lieuType || '';
    sub.textContent = d.nom + (detail ? ' · ' + detail : '');
  } else {
    sub.textContent = 'Mon lieu · —';
  }
}

function piloteTab(tab, btn) {
  evadReflectLieuInDashboard();
  document.querySelectorAll('.pilote-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.querySelectorAll('.pilote-panel').forEach(p => p.classList.remove('active'));
  const panel = document.getElementById('pilote-panel-' + tab);
  if (panel) panel.classList.add('active');
  if (tab === 'marketplace') setTimeout(pmktRenderOffers, 50);
  if (tab === 'dossiers')   { setTimeout(initDossiers, 50); if (typeof iciRenderMesureImpact === 'function') setTimeout(() => { iciRenderMesureImpact(); iciRenderSaisie(); iciRenderExports(); }, 50); }
  if (tab === 'quetes')     { if (typeof syncPiloteQuetesFromLieu === 'function') syncPiloteQuetesFromLieu(); setTimeout(renderPiloteQuetes, 50); }
  if (tab === 'fiche')      {
    // Reflète le lieu créé : identité + espaces + carte mentale
    if (typeof myLieuData !== 'undefined' && myLieuData) {
      ficheEspaces = (myLieuData.espacesData || []).map(e => Object.assign({}, e));
      ficheSolsByEspace = {};
    }
    ficheFillFromMyLieu();
    ficheRenderEspaces();
    setTimeout(ficheMmRender, 80);
  }
  if (tab === 'apercu') setTimeout(() => {
    regenInit();
    updateApercuFromQuetes();
  }, 80);
}

/* ─── FIL ROUGE : score vivant du lieu de l'utilisateur ───
   Score = base 40 + somme des « +X pts » des quêtes validées (plafonné à 100).
   Source unique partagée par l'aperçu, la carte, le marqueur et la fiche. */
function evadLieuScoreData() {
  let bonus = 0, graines = 0, nbVal = 0;
  if (typeof PILOTE_QUETES_DEMO !== 'undefined' && typeof quetesValidees !== 'undefined') {
    PILOTE_QUETES_DEMO.forEach(q => {
      if (quetesValidees.has(q.id)) {
        const m = String(q.impact || '').match(/(\d+)\s*pts?/i);
        bonus += m ? parseInt(m[1], 10) : 5;
        graines += q.graines || 0; nbVal++;
      }
    });
  }
  return { score: Math.min(100, 10 + bonus), bonus: bonus, graines: graines, nbValidees: nbVal };
}

// Marqueur Leaflet du lieu créé par l'utilisateur (pour MAJ live du popup)
let evadMyLieuMarker = null;

// Répercute le score vivant sur la carte : carte du panneau + marqueur.
function evadSyncMyLieuOnMap() {
  const d = evadLieuScoreData();
  if (typeof myLieuData !== 'undefined' && myLieuData) myLieuData.score = d.score;
  const bar = document.getElementById('evad-mylieu-scorebar');
  if (bar) bar.style.width = d.score + '%';
  const lbl = document.getElementById('evad-mylieu-scorelabel');
  if (lbl) {
    lbl.textContent = (d.nbValidees > 0 ? '↑ ' : 'Nouveau · ') + 'Vadance ' + d.score + '/100';
    lbl.style.color = d.nbValidees > 0 ? 'var(--fern)' : 'var(--amber)';
  }
  if (evadMyLieuMarker && typeof myLieuData !== 'undefined' && myLieuData) {
    try {
      evadMyLieuMarker.setPopupContent(
        '<div class="popup-place-title">' + (myLieuData.nom || 'Mon lieu') + '</div>' +
        '<div class="popup-place-meta">' + (myLieuData.localisation || 'Bordeaux') + '</div>' +
        '<div class="popup-place-score">Vadance : ' + d.score + ' · ' + d.nbValidees + ' quête(s) validée(s)</div>'
      );
    } catch (e) {}
  }
}

/* Reflète les quêtes validées sur l'aperçu (Vadance + wallet graines)
   et propage le score sur la carte (fil rouge). */
function updateApercuFromQuetes() {
  const d = evadLieuScoreData();
  if (typeof myLieuData !== 'undefined' && myLieuData) myLieuData.score = d.score;
  const valEl = document.getElementById('apercu-regen-val');
  if (valEl) valEl.textContent = d.score;
  const arc = document.getElementById('regen-arc');
  if (arc) arc.style.strokeDashoffset = String(226.2 * (1 - d.score / 100));
  const wallet = document.getElementById('apercu-graines-wallet');
  if (wallet) wallet.textContent = d.graines.toLocaleString('fr');
  evadSyncMyLieuOnMap();
}

/* ─── PARCOURS VADE (boucle + détail par étape) ─── */
/* Boucle VADE (charte des ICI) : Valoriser → Activer → Développer → Élever.
   Un même parcours, un cran plus haut à chaque tour ; chaque étape outillée. */
const VADE_STEPS = [
  {
    letter: 'V', name: 'Valoriser', color: '#018262',
    title: 'Valoriser l’existant',
    desc: 'Établir la base de référence T0 et repérer l’impact déjà présent sur le lieu.',
    tags: ['📍 Diagnostic T0', '📚 Bibliothèque d’ICI'],
    outils: ['Diagnostic T0', 'Bibliothèque d’ICI', 'Deva'],
    taches: [
      'Établir la base de référence T0 de ton lieu',
      'Repérer l’impact déjà présent (écologie, social, économie locale)',
      'Identifier les ICI pertinents avec l’aide de Deva',
    ],
  },
  {
    letter: 'A', name: 'Activer', color: '#2d6a9f',
    title: 'Activer les solutions',
    desc: 'Déclarer les solutions mises en œuvre et mobiliser la communauté.',
    tags: ['🌱 Solutions', '🤝 Communauté'],
    outils: ['Catalogue de solutions', 'Déclaration des ICI', 'Quêtes'],
    taches: [
      'Déclarer les solutions que tu mets en œuvre',
      'Chaque solution embarque ses ICI à suivre',
      'Ouvrir des quêtes et mobiliser les Bâtisseurs',
    ],
  },
  {
    letter: 'D', name: 'Développer', color: '#c8732a',
    title: 'Développer la preuve',
    desc: 'Mesurer et prouver l’impact, puis sécuriser le financement.',
    tags: ['📊 Vadité', '💶 Financement'],
    outils: ['Mesure d’impact', 'Attestation Vadité', 'Monnaie Vade'],
    taches: [
      'Saisir les valeurs observées et leur niveau de preuve',
      'Produire l’attestation Vadité (impact réellement prouvé)',
      'Sécuriser le financement des Semeurs en euros',
    ],
  },
  {
    letter: 'E', name: 'Élever', color: '#6b5b95',
    title: 'Élever le commun',
    desc: 'Faire vérifier par les pairs et l’audit, puis faire remonter les retours dans le référentiel.',
    tags: ['🔍 Audit tiers', '🌍 Commun ouvert'],
    outils: ['Audit tiers', 'Passeport du lieu', 'Amendement du commun'],
    taches: [
      'Faire vérifier tes preuves par les pairs puis l’audit tiers',
      'Publier le passeport du lieu',
      'Remonter tes retours pour amender le référentiel commun',
    ],
  },
];
// état des tâches cochées par étape
const regenTasksDone = VADE_STEPS.map(s => s.taches.map(() => false));
let regenSelected = 0;

function regenSelect(i) {
  regenSelected = i;
  // nœuds : mise en avant du sélectionné
  VADE_STEPS.forEach((s, k) => {
    const circ = document.getElementById('rn-circ-' + k);
    const lbl = document.getElementById('rn-lbl-' + k);
    if (!circ) return;
    if (k === i) {
      circ.style.background = s.color;
      circ.style.color = 'white';
      circ.style.transform = 'scale(1.12)';
      circ.style.boxShadow = '0 4px 14px ' + s.color + '55';
      if (lbl) { lbl.style.color = s.color; lbl.style.fontWeight = '800'; }
    } else {
      circ.style.background = 'white';
      circ.style.color = s.color;
      circ.style.transform = '';
      circ.style.boxShadow = '';
      if (lbl) { lbl.style.color = 'var(--moss)'; lbl.style.fontWeight = '600'; }
    }
  });
  regenRenderDetail();
}

function regenToggleTask(stepIdx, taskIdx) {
  regenTasksDone[stepIdx][taskIdx] = !regenTasksDone[stepIdx][taskIdx];
  regenRenderDetail();
  regenUpdateCenter();
}

function regenRenderDetail() {
  const box = document.getElementById('regen-detail');
  if (!box) return;
  const s = VADE_STEPS[regenSelected];
  const done = regenTasksDone[regenSelected];
  const nDone = done.filter(Boolean).length;

  const tags = s.tags.map(t =>
    `<span style="font-size:.6rem;font-weight:600;color:var(--moss);background:rgba(46,102,66,.08);border-radius:100px;padding:.25rem .6rem">${t}</span>`
  ).join('');

  const outils = s.outils.map(o =>
    `<span style="font-size:.62rem;font-weight:600;color:${s.color};border:1px solid ${s.color}40;border-radius:100px;padding:.28rem .7rem">${o}</span>`
  ).join('');

  const taches = s.taches.map((t, k) => {
    const on = done[k];
    return `<div onclick="regenToggleTask(${regenSelected},${k})" style="display:flex;align-items:center;gap:.7rem;padding:.6rem .2rem;border-bottom:1px solid rgba(46,102,66,.08);cursor:pointer">
      <div style="width:24px;height:24px;border-radius:50%;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:800;color:white;background:${on ? s.color : 'rgba(46,102,66,.18)'};transition:background .15s">${on ? '✓' : (k + 1)}</div>
      <div style="font-size:.76rem;color:var(--ink);line-height:1.35;${on ? 'text-decoration:line-through;opacity:.5' : ''}">${t}</div>
    </div>`;
  }).join('');

  box.innerHTML = `
    <div style="display:flex;align-items:flex-start;gap:.85rem;margin-bottom:.7rem">
      <div style="width:46px;height:46px;border-radius:12px;background:${s.color};color:white;display:flex;align-items:center;justify-content:center;font-family:'Satoshi', sans-serif;font-weight:900;font-size:1.3rem;flex-shrink:0">${s.letter}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:.58rem;font-weight:700;color:${s.color};text-transform:uppercase;letter-spacing:.1em">Étape ${regenSelected + 1} / ${VADE_STEPS.length} · ${s.name} · Pilote</div>
        <div style="font-family:'Satoshi', sans-serif;font-size:1.2rem;font-weight:900;color:var(--ink);line-height:1.15;margin-top:.15rem">${s.title}</div>
      </div>
    </div>

    <div style="font-size:.78rem;color:var(--moss);line-height:1.5;margin-bottom:.8rem">${s.desc}</div>

    <div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1rem">${tags}</div>

    <div style="font-size:.58rem;font-weight:700;color:var(--moss);opacity:.6;text-transform:uppercase;letter-spacing:.12em;margin-bottom:.45rem">Outils mobilisés</div>
    <div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1.1rem">${outils}</div>

    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.3rem">
      <span style="font-size:.58rem;font-weight:700;color:var(--moss);opacity:.6;text-transform:uppercase;letter-spacing:.12em">À faire</span>
      <span style="font-size:.62rem;font-weight:700;color:${s.color}">${nDone}/${s.taches.length} fait${nDone > 1 ? 's' : ''}</span>
    </div>
    <div>${taches}</div>
  `;
}

function regenUpdateCenter() {
  // Vadance : 10 au départ, +90 répartis sur les tâches cochées du parcours.
  const total = regenTasksDone.reduce((a, arr) => a + arr.length, 0);
  const done = regenTasksDone.reduce((a, arr) => a + arr.filter(Boolean).length, 0);
  const score = total ? 10 + Math.round((done / total) * 90) : 10;
  const scoreEl = document.getElementById('regen-center-score');
  const sub = document.getElementById('regen-center-sub');
  if (scoreEl) scoreEl.innerHTML = score + '<span style="font-size:.62rem;font-weight:700;opacity:.45">/100</span>';
  if (!sub) return;
  if (done === 0) sub.textContent = '🌱 à venir';
  else if (done >= total) sub.textContent = '🌳 boucle complète';
  else sub.textContent = '🌿 ' + done + '/' + total + ' tâches';
}

function regenInit() {
  regenSelect(regenSelected);
  regenUpdateCenter();
}

function lqPiloteFilter(filter, btn) {
  document.querySelectorAll('#pilote-panel-quetes .pmkt-filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  mmBubble(`Filtre quêtes : ${filter.replace('_', ' ')}`);
}

/* ─── SEMEUR TABS ─── */
function semeurTab(tab, btn) {
  document.querySelectorAll('.semeur-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.querySelectorAll('.semeur-panel').forEach(p => p.classList.remove('active'));
  const panel = document.getElementById('semeur-panel-' + tab);
  if (panel) panel.classList.add('active');
  if (tab === 'apercu') {
    setTimeout(() => {
      const arc = document.getElementById('sem-rse-arc');
      if (arc) arc.style.strokeDashoffset = String(226.2 * (1 - 74/100));
      regenLoopBuild('regenS', 'semeur');
    }, 80);
  }
  if (tab === 'graines') setTimeout(smktRender, 60);
  if (tab === 'rse') setTimeout(renderESRS, 50);
  if (tab === 'quetes') setTimeout(semRenderQuetes, 60);
  if (tab === 'fiche')  setTimeout(semFillProfile, 60);
  semReflectProfile();
}

// Remplit l'onglet « Mon profil » du dashboard Semeur depuis semFicheData.
function semFillProfile() {
  const sd = (typeof semFicheData !== 'undefined') ? semFicheData : null;
  if (!sd) return;
  const set = (id, v) => { const e = document.getElementById(id); if (e && v != null && v !== '') e.value = v; };
  set('sem-f-nom', sd.nom);
  if (sd.type) { const t = document.getElementById('sem-f-type'); if (t) t.value = sd.type; }
  set('sem-f-secteur', sd.secteur);
  set('sem-f-zone', sd.zone);
  const logo = document.getElementById('sem-logo-preview');
  if (logo && sd.logo) logo.innerHTML = '<img src="' + sd.logo + '" style="width:100%;height:100%;object-fit:cover" alt="">';
}

// Reflète le profil financeur créé dans le topbar, l'aperçu, le KPI ESRS et le portefeuille.
function semReflectProfile() {
  const sd = (typeof semFicheData !== 'undefined') ? semFicheData : null;
  if (!sd) return;
  const has = (sd.nom || '').trim() !== '';
  const name = sd.nom || 'Mon organisation';
  const esrs = (sd.selectedCadres || []).length || (sd.axes || []).length || (sd.selectedODD || []).length;
  const tt = document.getElementById('sem-topbar-title'); if (tt) tt.textContent = '🏢 ' + (has ? name : 'Mon organisation');
  const ts = document.getElementById('sem-topbar-sub'); if (ts) ts.textContent = has ? ((sd.type || 'Financeur') + (sd.zone ? ' · ' + sd.zone : '') + ' · profil complété ✓') : 'Semeur · Configure ton profil';
  const hl = document.getElementById('sem-hero-label'); if (hl) hl.textContent = has ? (name + ' · ' + (sd.type || 'Financeur')) : 'Mon organisation · Score RSE Global';
  const hi = document.getElementById('sem-hero-intro'); if (hi) hi.textContent = has ? ('Finance des lieux à impact' + (sd.zone ? ' alignés ' + sd.zone : '') + '.' + (esrs ? ' ' + esrs + ' cadre(s) ESRS ciblé(s).' : '')) : 'Configure ton profil RSE pour commencer';
  const ke = document.getElementById('sem-kpi-esrs'); if (ke) ke.textContent = esrs || '—';
  const pf = document.getElementById('sem-portefeuille-list');
  if (pf && has) pf.innerHTML = '<div style="padding:1rem;text-align:center;font-size:.72rem;color:var(--moss);opacity:.6">Aucun lieu financé pour l\'instant. Finance un lieu aligné ' + (sd.zone || 'ton territoire') + ' depuis la carte 🌱</div>';
}

/* ─── QUÊTES À FINANCER (SEMEUR) ─── */
const SEM_QUETES = [];

const ESRS_CAT = { E1:'e',E2:'e',E3:'e',E4:'e',S1:'s',S2:'s',S3:'s',S4:'s',G1:'g',G2:'g' };
const ESRS_LABELS = { E1:'Climat',E2:'Pollution',E3:'Eau',E4:'Biodiversité',S1:'Salariés',S2:'Chaîne valeur',S3:'Communautés',S4:'Consommateurs',G1:'Gouvernance',G2:'Éthique' };
const ESRS_GAP = ['E4','S1']; // gaps identifiés dans le rapport Semeur
let semQCurrentFilter = 'toutes';

function semQFilter(f, btn) {
  semQCurrentFilter = f;
  document.querySelectorAll('#semeur-panel-quetes .mkt-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  semRenderQuetes();
}

// Construit les quêtes à financer du tableau de bord semeur à partir des
// quêtes des lieux de la démo (les mêmes que celles des projets à financer),
// classées par alignement avec les axes d'impact du profil.
function semBuildQuetesAFinancer() {
  if (typeof SEM_QUETES === 'undefined' || typeof MAP_PLACES === 'undefined' || typeof SOLS === 'undefined') return;
  SEM_QUETES.length = 0;
  const axes = (typeof semFicheData !== 'undefined' && semFicheData.axes) || [];
  const AXE_KW = {
    climat:['solaire','énergie','chauffe','isolation','carbone'],
    biodiversite:['haie','mare','biodiv','jardin','permacult','arbre','verger'],
    social:['repair','atelier','amap','partagé','collectif','social'],
    alimentation:['jardin','potager','maraîch','amap','compost','aliment'],
    economie:['réemploi','repair','recycl','matériaux','circul'],
    habitat:['isolation','paille','toiture','construction','bois']
  };
  MAP_PLACES.forEach((l, li) => {
    const sols = (l.fiche && l.fiche.solutions) || [];
    sols.forEach((nom, j) => {
      const sol = SOLS.find(s => s.nom === nom);
      if (!sol || !sol.quete) return;
      const text = (nom + ' ' + (sol.cat || '') + ' ' + sol.quete.titre).toLowerCase();
      const aligned = axes.some(a => (AXE_KW[a] || []).some(k => text.includes(k)));
      const tok = sol.tok || 50;
      const objectif = 1500 + tok * 18;
      const montant  = Math.round(objectif * (0.08 + ((li * 5 + j * 11) % 42) / 100));
      const esrs = (sol.esrs || []).map(e => String(e).replace('ESRS ', '').trim());
      const _ind = (typeof SOLS_INDICATORS !== 'undefined') ? SOLS_INDICATORS[nom] : null;
      const plan = (_ind && _ind.plan) || [];
      SEM_QUETES.push({
        type: sol.img || '⚡', titre: sol.quete.titre,
        lieu: l.nom, pilote: l.nom, ville: l.ville || 'Bordeaux',
        desc: sol.desc || sol.quete.titre,
        impact: sol.quete.impact_quete || sol.impact || '',
        esrs, graines: tok, objectif, montant,
        urgence: (montant / objectif < 0.22) ? 'urgent' : 'normal',
        aligned,
        plan, materiel: (_ind && _ind.materiel) || [],
        preuve: 'Photos de l\'action réalisée + indicateurs mesurés (CO₂, énergie, déchets…).',
        apprendre: 'Mise en œuvre de « ' + nom + ' » et documentation de l\'impact.',
        duree: sol.quete.duree || '1 journée',
        places: '2/' + (parseInt(sol.quete.nb, 10) || 6),
        etape_actuelle: 1, etapes: plan.length || 4,
        etapeLabels: plan.length ? plan.map(p => p.titre) : ['Lancement', 'Préparation', 'Réalisation', 'Certification'],
        tokens: tok, co2: sol.co2 || 0,
        financement: { objectif, montant, semeur: null },
        equipe: [{ i:'L', c:'#4a8c5c' }, { i:'H', c:'#c8732a' }],
        dates: ['Samedi · 9h–17h', 'Dimanche · 9h–13h']
      });
    });
  });
  SEM_QUETES.sort((a, b) =>
    (b.aligned - a.aligned)
    || ((b.urgence === 'urgent') - (a.urgence === 'urgent'))
    || ((b.objectif - b.montant) - (a.objectif - a.montant)));
  SEM_QUETES.forEach((q, i) => { q.id = i; });
}

// Ouvre la fiche d'une quête à financer (depuis le dashboard semeur).
function semOpenQuete(id) {
  const q = (typeof SEM_QUETES !== 'undefined') ? SEM_QUETES.find(x => x.id === id) : null;
  if (!q) return;
  currentRole = 'semeur';
  showQueteFiche(q, 'semeur');
}

function semRenderQuetes() {
  const list = document.getElementById('sem-quetes-list');
  if (!list) return;
  semBuildQuetesAFinancer();
  let quetes = [...SEM_QUETES];
  if (semQCurrentFilter === 'urgent') quetes = quetes.filter(q => q.urgence === 'urgent');
  if (['e','s','g'].includes(semQCurrentFilter)) {
    quetes = quetes.filter(q => q.esrs.some(e => ESRS_CAT[e] === semQCurrentFilter));
  }

  const esrsColors = {E1:'#2e7d32',E2:'#388e3c',E3:'#43a047',E4:'#4caf50',S1:'#1565c0',S2:'#1976d2',S3:'#1e88e5',S4:'#2196f3',G1:'#6a1b9a'};

  list.innerHTML = quetes.map(q => {
    const pct = q.objectif > 0 ? Math.round((q.montant / q.objectif) * 100) : 100;
    const restant = q.objectif > 0 ? Math.max(0, q.objectif - q.montant) : 0;
    const funded = pct >= 100;
    const esrsBadges = q.esrs.map(e => `<span style="font-size:.6rem;padding:.14rem .45rem;border-radius:var(--r);background:${esrsColors[e]||'#546e7a'}22;color:${esrsColors[e]||'#546e7a'};border:1px solid ${esrsColors[e]||'#546e7a'}44;font-weight:600">ESRS ${e}</span>`).join('');

    return `<div onclick="semOpenQuete(${q.id})"
      style="background:white;border:1px solid ${q.urgence==='urgent'?'rgba(184,78,53,.25)':'rgba(46,102,66,.1)'};border-left:3px solid ${q.urgence==='urgent'?'var(--terracotta)':'var(--fern)'};border-radius:var(--r-lg);padding:1rem 1.2rem;cursor:pointer;transition:all .18s"
      onmouseover="this.style.boxShadow='0 4px 14px rgba(46,102,66,.1)';this.style.borderColor='rgba(74,140,92,.3)'"
      onmouseout="this.style.boxShadow='none';this.style.borderColor='${q.urgence==='urgent'?'rgba(184,78,53,.25)':'rgba(46,102,66,.1)'}'">

      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;margin-bottom:.7rem">
        <div style="flex:1;min-width:0">
          <div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.3rem;flex-wrap:wrap">
            ${q.urgence==='urgent'?'<span style="font-size:.58rem;padding:.1rem .4rem;border-radius:100px;background:rgba(184,78,53,.1);color:var(--terracotta);font-weight:700;border:1px solid rgba(184,78,53,.2)">🔴 Urgent</span>':''}
            ${esrsBadges}
          </div>
          <div style="font-size:.88rem;font-weight:700;color:var(--ink);margin-bottom:.2rem">${q.type} ${q.titre}</div>
          <div style="font-size:.68rem;color:var(--moss);opacity:.75">📍 ${q.lieu} · ${q.ville} · Pilote : ${q.pilote}</div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          ${funded
            ? `<div style="font-size:.65rem;font-weight:700;color:var(--fern);background:rgba(74,140,92,.1);padding:.25rem .6rem;border-radius:100px;border:1px solid rgba(74,140,92,.2)">✅ Financé</div>`
            : `<div style="font-family:'Satoshi', sans-serif;font-size:1.1rem;font-weight:900;color:var(--amber)">${restant}€</div>
               <div style="font-size:.58rem;color:var(--moss);opacity:.6">restant à financer</div>`
          }
        </div>
      </div>

      ${q.objectif > 0 ? `
      <div style="margin-bottom:.6rem">
        <div style="height:5px;background:rgba(46,102,66,.08);border-radius:100px;overflow:hidden">
          <div style="height:100%;width:${Math.min(pct,100)}%;background:${funded?'var(--fern)':'var(--amber)'};border-radius:100px;transition:width .6s ease"></div>
        </div>
        <div style="display:flex;justify-content:space-between;margin-top:.3rem">
          <span style="font-size:.6rem;color:var(--moss);opacity:.6">${q.montant}€ engagés</span>
          <span style="font-size:.6rem;color:var(--moss);opacity:.6">${pct}% financé</span>
        </div>
      </div>` : ''}

      <div style="display:flex;align-items:center;justify-content:space-between;gap:.8rem">
        <div style="flex:1;min-width:0">
          <div style="font-size:.68rem;color:var(--moss);opacity:.7;margin-bottom:.3rem">🌿 ${q.impact}</div>
          <div style="display:flex;align-items:center;gap:.5rem;flex-wrap:wrap;margin-bottom:.3rem">
            <div style="display:inline-flex;align-items:center;gap:.3rem;background:rgba(200,115,42,.08);border:1px solid rgba(200,115,42,.2);border-radius:100px;padding:.18rem .55rem">
              <span style="font-size:.62rem;color:var(--moss);opacity:.75">Si complétée :</span>
              <span style="font-family:'Satoshi', sans-serif;font-size:.8rem;font-weight:900;color:var(--amber)">+${q.graines} 🌱</span>
              <span style="font-size:.58rem;color:var(--moss);opacity:.6">graines CSRD</span>
            </div>
          </div>
          <div style="font-size:.65rem;color:var(--moss);line-height:1.5">
            📋 <strong>Indicateurs couverts :</strong>
            ${q.esrs.map(e=>`<span style="font-weight:600;color:${ESRS_GAP.includes(e)?'var(--terracotta)':'var(--fern)'}">${e} ${ESRS_LABELS[e]||''}${ESRS_GAP.includes(e)?' ⚠️ gap':''}</span>`).join(' · ')}
          </div>
        </div>
        <button class="btn btn-primary" style="font-size:.65rem;padding:.32rem .8rem;flex-shrink:0"
          onclick="event.stopPropagation();semOpenQuete(${q.id})">
          ${funded ? 'Voir la quête →' : `Financer (${restant}€) →`}
        </button>
      </div>
    </div>`;
  }).join('') || '<div style="text-align:center;padding:2rem;color:var(--moss);opacity:.5;font-size:.8rem">Aucune quête pour ce filtre</div>';
}

let semESRSExpanded = false;
function semToggleESRS() {
  semESRSExpanded = !semESRSExpanded;
  const rows = document.getElementById('esrs-rows');
  const btn = document.getElementById('esrs-toggle-btn');
  if (semESRSExpanded) {
    renderESRS();
    rows.style.display = 'block';
    if (btn) btn.textContent = 'Masquer ↑';
  } else {
    rows.style.display = 'none';
    if (btn) btn.textContent = 'Voir les 10 ESRS ↓';
  }
}

/* ─── MARKETPLACE SEMEUR ─── */
let smktCurrentCat = 'tous';
let smktBalance = 0;

function smktFilter(cat, btn) {
  smktCurrentCat = cat;
  document.querySelectorAll('#semeur-panel-graines .mkt-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  smktRender();
}

// Mêmes offres que le Marketplace, vues côté Semeur (« Utiliser mes graines ») :
// id = index (la modale lit SMKT_OFFRES[id]), badge « financer » sur les lieux soutenus.
const SMKT_OFFRES = ((typeof MKT_OFFRES !== 'undefined') ? MKT_OFFRES : []).map((o, i) => ({
  ...o,
  id: i,
  badge: (o.lieu === 'Darwin Écosystème' || o.lieu === 'Le Jardin de ta Sœur') ? 'financer' : o.badge
}));

function smktRender() {
  const grid = document.getElementById('smkt-grid');
  if (!grid) return;
  if (!smktBalance) smktBalance = 500;   // solde de graines CSRD de démo
  const balMain = document.getElementById('semeur-graines-balance');
  if (balMain) balMain.textContent = smktBalance.toLocaleString('fr-FR');
  const balMkt = document.getElementById('smkt-balance-display');
  if (balMkt) balMkt.textContent = smktBalance.toLocaleString('fr-FR');
  let offres = [...SMKT_OFFRES];
  if (smktCurrentCat !== 'tous') offres = offres.filter(o => o.cat === smktCurrentCat);
  grid.innerHTML = offres.map(o => {
    const canAfford = smktBalance >= o.prix;
    let badgeHtml = '';
    if (o.badge === 'financer') badgeHtml = `<div style="position:absolute;top:.4rem;right:.4rem;font-size:.52rem;font-weight:700;padding:.15rem .45rem;border-radius:100px;background:rgba(74,140,92,.88);color:white;letter-spacing:.04em">✓ Vous financez</div>`;
    else if (o.badge === 'new') badgeHtml = `<div style="position:absolute;top:.4rem;right:.4rem;font-size:.52rem;font-weight:700;padding:.15rem .45rem;border-radius:100px;background:var(--fern);color:white">Nouveau</div>`;
    else if (o.badge === 'premium') badgeHtml = `<div style="position:absolute;top:.4rem;right:.4rem;font-size:.52rem;font-weight:700;padding:.15rem .45rem;border-radius:100px;background:linear-gradient(135deg,var(--lavender),var(--sky));color:white">Premium</div>`;
    const stockHtml = o.stock <= 3 ? `<div style="font-size:.6rem;color:var(--terracotta);font-weight:600;margin-top:.2rem">⚠ Plus que ${o.stock} disponibles</div>` : '';
    return `<div class="smkt-card" onclick="smktOpenModal(${o.id})">
      <div class="smkt-img" style="background:${o.bg}">${o.emoji}${badgeHtml}</div>
      <div class="smkt-body">
        <div class="smkt-cat">${o.cat.charAt(0).toUpperCase()+o.cat.slice(1)}</div>
        <div class="smkt-title">${o.titre}</div>
        <div class="smkt-lieu">📍 ${o.lieu} · ${o.ville}</div>
        <div class="smkt-impact">🌱 ${o.impact}</div>
        ${stockHtml}
      </div>
      <div class="smkt-footer">
        <div><div class="smkt-price">${o.prix > 0 ? '🌱 '+o.prix : '🎁 Gratuit'}</div><div style="font-size:.58rem;color:var(--moss);opacity:.6">${o.prix > 0 ? o.unite : 'accès libre'}</div></div>
        <button class="smkt-btn ${canAfford ? 'smkt-btn-ok' : 'smkt-btn-no'}" onclick="event.stopPropagation();smktOpenModal(${o.id})">${canAfford ? (o.prix === 0 ? 'Réserver →' : 'Échanger →') : 'Insuffisant'}</button>
      </div>
    </div>`;
  }).join('');
}

function smktOpenModal(id) {
  const o = SMKT_OFFRES[id];
  if (!o) return;
  const canAfford = smktBalance >= o.prix;
  const modal = document.getElementById('smkt-modal');
  const content = document.getElementById('smkt-modal-content');
  const circularityMsg = o.badge === 'financer'
    ? `<div style="background:rgba(74,140,92,.08);border:1px solid rgba(74,140,92,.2);border-radius:var(--r-lg);padding:.6rem .9rem;margin-bottom:.9rem;font-size:.7rem;color:var(--fern);font-weight:500">✓ Vous financez ce lieu via un smart contract actif, dépenser vos graines ici renforce la circularité de l'écosystème EVAD.</div>`
    : '';
  content.innerHTML = `
    <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.2rem">
      <div style="width:60px;height:60px;border-radius:var(--r-lg);background:${o.bg};display:flex;align-items:center;justify-content:center;font-size:1.8rem;flex-shrink:0">${o.emoji}</div>
      <div>
        <div style="font-size:.6rem;color:var(--moss);opacity:.6;text-transform:uppercase;letter-spacing:.1em;margin-bottom:.15rem">${o.cat}</div>
        <h2 style="font-family:'Satoshi', sans-serif;font-size:1.1rem;font-weight:900;color:var(--ink);line-height:1.15;margin-bottom:.2rem">${o.titre}</h2>
        <div style="font-size:.7rem;color:var(--moss)">📍 ${o.lieu} · ${o.ville}</div>
      </div>
    </div>
    <p style="font-size:.78rem;color:var(--moss);line-height:1.55;margin-bottom:.9rem">${o.desc}</p>
    <div style="background:rgba(74,140,92,.06);border:1px solid rgba(74,140,92,.15);border-radius:var(--r-lg);padding:.7rem .9rem;margin-bottom:.9rem;font-size:.72rem;color:var(--forest)">🌱 Impact estimé : ${o.impact}</div>
    ${circularityMsg}
    <div style="display:flex;align-items:center;justify-content:space-between;padding:.8rem 1rem;background:${canAfford ? 'rgba(74,140,92,.06)' : 'rgba(184,78,53,.05)'};border:1px solid ${canAfford ? 'rgba(74,140,92,.2)' : 'rgba(184,78,53,.2)'};border-radius:var(--r-lg);margin-bottom:.9rem">
      <div>
        <div style="font-size:.6rem;color:var(--moss);opacity:.6;text-transform:uppercase;letter-spacing:.1em">Coût</div>
        <div style="font-family:'Satoshi', sans-serif;font-size:1.3rem;font-weight:900;color:var(--amber)">${o.prix > 0 ? '🌱 '+o.prix+' graines' : '🎁 Gratuit'}</div>
      </div>
      <div style="text-align:right">
        <div style="font-size:.6rem;color:var(--moss);opacity:.6;text-transform:uppercase;letter-spacing:.1em">Votre solde</div>
        <div style="font-family:'Satoshi', sans-serif;font-size:1rem;font-weight:700;color:${canAfford ? 'var(--fern)' : 'var(--terracotta)'}">🌱 ${smktBalance.toLocaleString('fr-FR')} ${canAfford ? '✓' : '– insuffisant'}</div>
      </div>
    </div>
    <div style="display:flex;gap:.6rem">
      ${canAfford
        ? `<button class="btn btn-primary" style="flex:1;padding:.7rem" onclick="smktConfirmBuy(${o.id})">${o.prix === 0 ? '🎟 Réserver gratuitement' : '🌱 Confirmer l\'échange (−'+o.prix+' graines)'}</button>`
        : `<button class="btn" style="flex:1;padding:.7rem;background:rgba(46,102,66,.08);color:var(--moss);cursor:default" disabled>🔒 graines insuffisants (manque ${o.prix - smktBalance})</button>`}
      <button class="btn btn-ghost" onclick="document.getElementById('smkt-modal').style.display='none'">Fermer</button>
    </div>`;
  modal.style.display = 'flex';
}

function smktConfirmBuy(id) {
  const o = SMKT_OFFRES[id];
  if (!o || smktBalance < o.prix) return;
  smktBalance -= o.prix;
  // Sync both balance displays
  const balMain = document.getElementById('semeur-graines-balance');
  if (balMain) balMain.textContent = smktBalance.toLocaleString('fr-FR');
  const balMkt = document.getElementById('smkt-balance-display');
  if (balMkt) balMkt.textContent = smktBalance.toLocaleString('fr-FR');
  document.getElementById('smkt-modal').style.display = 'none';
  smktRender();
  mmBubble(`✅ Échangé ! "${o.titre}" chez ${o.lieu}, ${o.prix > 0 ? '−'+o.prix+' graines' : 'gratuit'} · Confirmation envoyée`);
}

/* ─── MARKETPLACE BÂTISSEUR ─── */
let bmktCurrentCat = 'tous';

function bmktFilter(cat, btn) {
  bmktCurrentCat = cat;
  document.querySelectorAll('#bat-panel-graines .mkt-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  bmktRender();
}

function bmktRender() {
  const grid = document.getElementById('bmkt-grid');
  if (!grid) return;
  let offres = [...MKT_OFFRES];
  if (bmktCurrentCat !== 'tous') offres = offres.filter(o => o.cat === bmktCurrentCat);
  grid.innerHTML = offres.map(o => {
    const canAfford = mktBalance >= o.prix;
    let badgeHtml = '';
    if (o.badge === 'new')     badgeHtml = `<div style="position:absolute;top:.4rem;right:.4rem;font-size:.52rem;font-weight:700;padding:.15rem .45rem;border-radius:100px;background:var(--fern);color:white">Nouveau</div>`;
    else if (o.badge === 'promo')   badgeHtml = `<div style="position:absolute;top:.4rem;right:.4rem;font-size:.52rem;font-weight:700;padding:.15rem .45rem;border-radius:100px;background:var(--amber);color:white">Promo</div>`;
    else if (o.badge === 'premium') badgeHtml = `<div style="position:absolute;top:.4rem;right:.4rem;font-size:.52rem;font-weight:700;padding:.15rem .45rem;border-radius:100px;background:linear-gradient(135deg,var(--lavender),var(--sky));color:white">Premium</div>`;
    const stockHtml = o.stock <= 3 ? `<div style="font-size:.6rem;color:var(--terracotta);font-weight:600;margin-top:.2rem">⚠ Plus que ${o.stock} disponibles</div>` : '';
    return `<div class="smkt-card" onclick="bmktOpenModal(${o.id})">
      <div class="smkt-img" style="background:${o.bg}">${o.emoji}${badgeHtml}</div>
      <div class="smkt-body">
        <div class="smkt-cat">${o.cat.charAt(0).toUpperCase()+o.cat.slice(1)}</div>
        <div class="smkt-title">${o.titre}</div>
        <div class="smkt-lieu">📍 ${o.lieu} · ${o.ville}</div>
        <div class="smkt-impact">🌱 ${o.impact}</div>
        ${stockHtml}
      </div>
      <div class="smkt-footer">
        <div><div class="smkt-price">${o.prix > 0 ? '🌱 '+o.prix : '🎁 Gratuit'}</div><div style="font-size:.58rem;color:var(--moss);opacity:.6">${o.prix > 0 ? o.unite : 'accès libre'}</div></div>
        <button class="smkt-btn ${canAfford ? 'smkt-btn-ok' : 'smkt-btn-no'}" onclick="event.stopPropagation();bmktOpenModal(${o.id})">${canAfford ? (o.prix === 0 ? 'Réserver →' : 'Échanger →') : 'Insuffisant'}</button>
      </div>
    </div>`;
  }).join('');
}

function bmktOpenModal(id) {
  const o = MKT_OFFRES[id];
  if (!o) return;
  const canAfford = mktBalance >= o.prix;
  const modal = document.getElementById('bmkt-modal');
  const content = document.getElementById('bmkt-modal-content');
  content.innerHTML = `
    <button onclick="document.getElementById('bmkt-modal').style.display='none'" style="position:absolute;top:1rem;right:1rem;background:rgba(46,102,66,.1);border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:.85rem;color:var(--moss)">✕</button>
    <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.2rem">
      <div style="width:60px;height:60px;border-radius:var(--r-lg);background:${o.bg};display:flex;align-items:center;justify-content:center;font-size:1.8rem;flex-shrink:0">${o.emoji}</div>
      <div>
        <div style="font-size:.6rem;color:var(--moss);opacity:.6;text-transform:uppercase;letter-spacing:.1em;margin-bottom:.15rem">${o.cat}</div>
        <h2 style="font-family:'Satoshi', sans-serif;font-size:1.1rem;font-weight:900;color:var(--ink);line-height:1.15;margin-bottom:.2rem">${o.titre}</h2>
        <div style="font-size:.7rem;color:var(--moss)">📍 ${o.lieu} · ${o.ville}</div>
      </div>
    </div>
    <p style="font-size:.78rem;color:var(--moss);line-height:1.55;margin-bottom:.9rem">${o.desc}</p>
    <div style="background:rgba(74,140,92,.06);border:1px solid rgba(74,140,92,.15);border-radius:var(--r-lg);padding:.7rem .9rem;margin-bottom:.9rem;font-size:.72rem;color:var(--forest)">🌱 Impact estimé : ${o.impact}</div>
    <div style="display:flex;align-items:center;justify-content:space-between;padding:.8rem 1rem;background:${canAfford ? 'rgba(74,140,92,.06)' : 'rgba(184,78,53,.05)'};border:1px solid ${canAfford ? 'rgba(74,140,92,.2)' : 'rgba(184,78,53,.2)'};border-radius:var(--r-lg);margin-bottom:.9rem">
      <div>
        <div style="font-size:.6rem;color:var(--moss);opacity:.6;text-transform:uppercase;letter-spacing:.1em">Coût</div>
        <div style="font-family:'Satoshi', sans-serif;font-size:1.3rem;font-weight:900;color:var(--amber)">${o.prix > 0 ? '🌱 '+o.prix+' graines' : '🎁 Gratuit'}</div>
      </div>
      <div style="text-align:right">
        <div style="font-size:.6rem;color:var(--moss);opacity:.6;text-transform:uppercase;letter-spacing:.1em">Ton solde</div>
        <div style="font-family:'Satoshi', sans-serif;font-size:1rem;font-weight:700;color:${canAfford ? 'var(--fern)' : 'var(--terracotta)'}">🌱 ${mktBalance} ${canAfford ? '✓' : '– insuffisant'}</div>
      </div>
    </div>
    <div style="display:flex;gap:.6rem">
      ${canAfford
        ? `<button class="btn btn-primary" style="flex:1;padding:.7rem" onclick="bmktConfirmBuy(${o.id})">${o.prix === 0 ? '🎟 Réserver gratuitement' : '🌱 Confirmer l\'échange (−'+o.prix+' graines)'}</button>`
        : `<button class="btn" style="flex:1;padding:.7rem;background:rgba(46,102,66,.08);color:var(--moss);cursor:default" disabled>🔒 Graines insuffisants (manque ${o.prix - mktBalance})</button>`}
      <button class="btn btn-ghost" onclick="document.getElementById('bmkt-modal').style.display='none'">Fermer</button>
    </div>`;
  modal.style.display = 'flex';
}

function bmktConfirmBuy(id) {
  const o = MKT_OFFRES[id];
  if (!o || mktBalance < o.prix) return;
  mktBalance -= o.prix;
  const balEl = document.getElementById('bmkt-balance');
  if (balEl) balEl.textContent = mktBalance;
  document.getElementById('bmkt-modal').style.display = 'none';
  bmktRender();
  mmBubble(`✅ Échangé ! "${o.titre}" chez ${o.lieu}, ${o.prix > 0 ? '−'+o.prix+' graines' : 'gratuit'} · Confirmation envoyée`);
}

/* ─── BÂTISSEUR TABS JS ─── */
function batTab(tab, btn) {
  document.querySelectorAll('.bat-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.querySelectorAll('.bat-panel').forEach(p => p.classList.remove('active'));
  const panel = document.getElementById('bat-panel-' + tab);
  if (panel) panel.classList.add('active');
  if (tab === 'graines') setTimeout(bmktRender, 60);
  if (tab === 'competences') setTimeout(batRenderCompetences, 60);
  if (tab === 'fiche')   setTimeout(() => { batDashFicheRender(); }, 80);
  if (tab === 'apercu') setTimeout(() => {
    if (document.getElementById('bat-quetes-list') && !document.getElementById('bat-quetes-list').children.length) batInitDashboard();
    batReflectProfile();
    regenLoopBuild('regenB', 'batisseur');
  }, 50);
}

function batQFilter(filter, btn) {
  document.querySelectorAll('#bat-panel-quetes .pmkt-filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  mmBubble('Filtre : ' + filter.replace('_', ' '));
}

/* ══════════════════════════════════════════════════
   FICHE CITOYEN, ARBRE DE COMPÉTENCES (BÂTISSEUR)
   ══════════════════════════════════════════════════ */

const BAT_FICHE_STEPS = [
  { h: 'Qui es-tu ?' },
  { h: 'Compétences' },
  { h: 'Engagements' },
  { h: 'Matching' },
];

const BAT_SKILLS = [
  { id:'maraichage',  ic:'🥦', label:'Maraîchage',    col:'#4a8c5c', bg:'rgba(74,140,92,.18)',  stars:3, desc:'Jardin, potager, permaculture' },
  { id:'energie',     ic:'⚡', label:'Énergie',        col:'#c8732a', bg:'rgba(200,115,42,.18)', stars:2, desc:'Solaire, sobriété, audit' },
  { id:'reparation',  ic:'🔧', label:'Réparation',     col:'#7a6ea8', bg:'rgba(122,110,168,.18)',stars:3, desc:'Repair café, bricolage, fab' },
  { id:'facilitation',ic:'📚', label:'Facilitation',   col:'#3a6e8c', bg:'rgba(58,110,140,.18)', stars:1, desc:'Ateliers, animation, formation' },
  { id:'construction',ic:'🏗', label:'Construction',   col:'#b84e35', bg:'rgba(184,78,53,.18)',  stars:0, desc:'Chantiers participatifs, bois' },
  { id:'biodiversite',ic:'🌿', label:'Biodiversité',   col:'#2e6642', bg:'rgba(46,102,66,.18)',  stars:0, desc:'Haies, mares, pollinisateurs' },
];

const BAT_VALEURS = [
  { id:'autonomie',    ic:'🏡', label:'Autonomie',         col:'#4a8c5c' },
  { id:'solidarite',   ic:'🤝', label:'Solidarité',        col:'#3a6e8c' },
  { id:'transmission', ic:'📢', label:'Transmission',      col:'#c8732a' },
  { id:'vivant',       ic:'🌿', label:'Lien au vivant',    col:'#2e9960' },
  { id:'justice',      ic:'⚖️', label:'Justice sociale',   col:'#7a6ea8' },
  { id:'sobriete',     ic:'♾️', label:'Sobriété',          col:'#5a8060' },
  { id:'ancrage',      ic:'📍', label:'Ancrage local',     col:'#b84e35' },
  { id:'resilience',   ic:'💪', label:'Résilience',        col:'#4a6e3c' },
  { id:'beaute',       ic:'✨', label:'Beauté du geste',   col:'#9a6ea8' },
  { id:'innovation',   ic:'💡', label:'Innovation frugale',col:'#8a7030' },
  { id:'eveil',        ic:'🌅', label:'Éveil',             col:'#c07830' },
];

const BAT_MOTEURS = [
  { id:'apprendre',    ic:'🌱', label:'Apprendre' },
  { id:'transmettre',  ic:'📢', label:'Transmettre' },
  { id:'lien',         ic:'🤝', label:'Créer du lien' },
  { id:'batir',        ic:'🔨', label:'Bâtir de mes mains' },
  { id:'documenter',   ic:'📝', label:'Documenter' },
  { id:'experimenter', ic:'🌀', label:'Expérimenter' },
];

const BAT_LIEU_TYPES = [
  { id:'ecolieu',     ic:'🌿', label:'Écolieu',           col:'#2e9960' },
  { id:'tiers_lieu',  ic:'🏗',  label:'Tiers-lieu',        col:'#3a6e8c' },
  { id:'ferme',       ic:'🌾', label:'Ferme pédagogique', col:'#c8732a' },
  { id:'fablab',      ic:'⚙️', label:'Fablab / Repair',   col:'#7a6ea8' },
  { id:'association', ic:'🤝', label:'Association',        col:'#4a8c5c' },
  { id:'habitat',     ic:'🏡', label:'Habitat partagé',   col:'#b84e35' },
];

const BAT_APPORTE = [
  { id:'manuel',     ic:'🔨', label:'Travail manuel' },
  { id:'expertise',  ic:'🧠', label:'Expertise' },
  { id:'orga',       ic:'📋', label:'Organisation' },
  { id:'creativite', ic:'🎨', label:'Créativité' },
  { id:'temps',      ic:'🌱', label:'Temps disponible' },
  { id:'formation',  ic:'📚', label:'Capacité à former' },
  { id:'reseau',     ic:'🤝', label:'Réseau / contacts' },
];

const BAT_CHERCHE = [
  { id:'collectif',   ic:'🌿', label:'Un collectif soudé' },
  { id:'chantiers',   ic:'🛠', label:'Des chantiers concrets' },
  { id:'apprendre',   ic:'📖', label:'Apprendre' },
  { id:'lien',        ic:'🤝', label:'Du lien social' },
  { id:'ancrage',     ic:'🏡', label:'Un lieu d\'ancrage' },
  { id:'impact',      ic:'🌍', label:'Un impact visible' },
  { id:'inspiration', ic:'💡', label:'De l\'inspiration' },
  { id:'revenus',     ic:'💰', label:'Un complément de revenus' },
];

let batFicheStep = 0;
// Filtre des quêtes proposées à l'étape matching : 'matched' (toutes les
// compétences déclarées), 'all' (toutes les quêtes) ou un id de compétence.
let batQueteFilter = 'matched';
let batFicheData = { prenom:'', nom:'', ville:'', lat:null, lng:null, dispo:[], rayon:20, bio:'', avatar:'', cover:'', email:'', tel:'', web:'', skills:[], skillLevels:{}, axe:'', contrib:'', motivation:'', mode:'', engagement:'', wantLearn:[], valeurs:[], valeurAutre:'', moteur:'', apporte:[], cherche:[], lieuType:[] };

function initFicheBat() {
  batFicheStep = 0;
  batQueteFilter = 'matched';
  batFicheData._quetesReady = false;
  batFicheRenderStep();
  batTreeInit();
}

function batFicheRenderStep() {
  navWizardSet(BAT_FICHE_STEPS.map(s=>s.h), batFicheStep, (i)=>{ batFicheStep=i; if(window.batPanReset) window.batPanReset(); batFicheRenderStep(); });

  const prev = document.getElementById('bat-fiche-prev');
  const next = document.getElementById('bat-fiche-next');
  const pub  = document.getElementById('bat-fiche-publish-btn');
  if (prev) prev.style.display = batFicheStep > 0 ? 'block' : 'none';
  if (next) {
    next.style.display = batFicheStep < 3 ? 'block' : 'none';
    next.textContent = batFicheStep === 2 ? 'Trouver des quêtes ✦' : 'Suivant →';
    next.onclick = batFicheNext;
  }
  if (pub) pub.style.display = batFicheStep === 3 ? 'inline-flex' : 'none';

  const c = document.getElementById('bat-fiche-content');
  if (!c) return;

  if (batFicheStep === 0) {
    c.innerHTML = `
      <label class="creer-lbl">Prénom</label>
      <input class="creer-inp" value="${batFicheData.prenom}" oninput="batFicheData.prenom=this.value;batTreeUpdate()">
      <label class="creer-lbl">Nom</label>
      <input class="creer-inp" value="${batFicheData.nom}" oninput="batFicheData.nom=this.value;batTreeUpdate()">
      <label class="creer-lbl">Ville / Localisation</label>
      <div style="position:relative" id="bat-loc-wrap">
        <input class="creer-inp" type="text" id="bat-loc-inp" placeholder="Tapez une ville ou une adresse…"
          value="${batFicheData.ville||''}" autocomplete="off"
          oninput="batGeoAutoInput(this.value)"
          onfocus="if(this.value.length>2) batGeoAutoInput(this.value)"
          onblur="setTimeout(()=>{const d=document.getElementById('bat-loc-drop');if(d)d.remove();},200)">
        ${batFicheData.ville?`<div style="font-size:.6rem;color:var(--fern);margin-top:.2rem;padding-left:.1rem">📍 Position vérifiée</div>`:''}
      </div>
      <label class="creer-lbl">Disponibilité</label>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.4rem;margin-bottom:.8rem">
        ${['Weekends','Semaine','Flexible','Sur mission'].map(d=>`<button class="type-btn${batFicheData.dispo.includes(d)?' sel':''}" onclick="batDispoToggle('${d}')"><div style="font-size:.9rem;margin-bottom:.15rem">${d==='Weekends'?'📅':d==='Semaine'?'💼':d==='Flexible'?'🌀':'🎯'}</div><div>${d}</div></button>`).join('')}
      </div>
      <label class="creer-lbl">Bio publique</label>
      <textarea class="creer-inp" style="height:52px;resize:none" oninput="batFicheData.bio=this.value;batTreeUpdate()">${batFicheData.bio}</textarea>
      ${(()=>{
        const autreVal = batFicheData.valeurAutre || '';
        const autreOn  = autreVal.trim() !== '';
        const totalSel = batFicheData.valeurs.length + (autreOn ? 1 : 0);
        const fullLabel = totalSel > 1 ? 's' : totalSel === 1 ? '' : 's';
        const autreDisabled = !autreOn && totalSel >= 3;
        const autreOpen = window._batAutreOpen || autreOn;
        return `
      <label class="creer-lbl" style="margin-top:.5rem">Mes valeurs <span style="opacity:.5;font-weight:400">${totalSel}/3 sélectionnée${fullLabel}</span></label>
      <div style="display:flex;flex-wrap:wrap;gap:.3rem;margin-bottom:${autreOpen?'.4rem':'.85rem'}">
        ${BAT_VALEURS.map(v => {
          const on = batFicheData.valeurs.includes(v.id);
          const disabled = !on && totalSel >= 3;
          return `<button type="button" onclick="${disabled?'':'batValeurToggle(\''+v.id+'\')'}" style="display:inline-flex;align-items:center;gap:.28rem;padding:.3rem .6rem;border-radius:100px;border:1.5px solid ${on?v.col:v.col+'44'};background:${on?v.col+'22':disabled?'rgba(0,0,0,.03)':'transparent'};color:${on?v.col:disabled?'#bbb':'#444'};font-size:.65rem;font-weight:${on?700:400};cursor:${disabled?'default':'pointer'};transition:all .18s;opacity:${disabled?'.45':'1'}"><span style="font-size:.85rem">${v.ic}</span><span>${v.label}</span>${on?'<span style="font-size:.58rem;opacity:.7">✓</span>':''}</button>`;
        }).join('')}
        <button type="button" onclick="${autreDisabled?'':'batValeurAutreOpen()'}" style="display:inline-flex;align-items:center;gap:.28rem;padding:.3rem .6rem;border-radius:100px;border:1.5px solid ${autreOn?'#7a7a8c':'#7a7a8c44'};background:${autreOn?'#7a7a8c22':autreDisabled?'rgba(0,0,0,.03)':'transparent'};color:${autreOn?'#4a4a60':autreDisabled?'#bbb':'#555'};font-size:.65rem;font-weight:${autreOn?700:400};cursor:${autreDisabled?'default':'pointer'};transition:all .18s;opacity:${autreDisabled?'.45':'1'}"><span style="font-size:.85rem">✏️</span><span>${autreOn?autreVal:'Autre'}</span>${autreOn?'<span style="font-size:.58rem;opacity:.7;margin-left:.1rem" onclick="event.stopPropagation();batValeurAutreClear()" title="Effacer">✕</span>':''}</button>
      </div>
      ${autreOpen && !autreOn ? `<div style="display:flex;gap:.4rem;align-items:center;margin-bottom:.85rem">
        <input id="bat-val-autre-inp" class="creer-inp" placeholder="Ta valeur personnelle…" value="${autreVal}" style="margin-bottom:0;flex:1;font-size:.68rem"
          oninput="batFicheData.valeurAutre=this.value"
          onkeydown="if(event.key==='Enter'){event.preventDefault();batValeurAutreConfirm();}"
          onblur="setTimeout(batValeurAutreConfirm,120)">
        <button type="button" onclick="batValeurAutreConfirm()" style="padding:.38rem .7rem;border-radius:var(--r);background:var(--forest);color:white;font-size:.65rem;font-weight:600;border:none;cursor:pointer;white-space:nowrap">OK</button>
      </div>` : autreOpen ? '' : ''}
        `;
      })()}
      <label class="creer-lbl">Type de lieu qui m'attire</label>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:.35rem;margin-bottom:.85rem">
        ${BAT_LIEU_TYPES.map(lt=>`<button class="type-btn${batFicheData.lieuType.includes(lt.id)?' sel':''}" onclick="batLieuTypeToggle('${lt.id}')"><div style="font-size:.85rem;margin-bottom:.1rem">${lt.ic}</div><div style="font-size:.6rem">${lt.label}</div></button>`).join('')}
      </div>
      `;
    batTreeUpdateStep1();
  } else if (batFicheStep === 1) {
    c.innerHTML = `
      <label class="creer-lbl">Tes domaines de compétence</label>
      <div style="display:flex;flex-direction:column;gap:.4rem;margin-bottom:.9rem">
        ${BAT_SKILLS.map(s => {
          const active = batFicheData.skills.includes(s.id);
          const lvl    = batFicheData.skillLevels[s.id] || 0;
          const LEVELS = [['🌱','Débutant',1],['🌿','Confirmé',2],['⭐','Expert',3]];
          return `<div style="display:flex;flex-direction:column;gap:.3rem">
            <button class="esp-tag${active?' sel':''}" style="border-radius:var(--r);padding:.5rem .7rem;text-align:left;display:flex;align-items:center;gap:.5rem;width:100%;border-bottom-left-radius:${active?'0':'var(--r)'};border-bottom-right-radius:${active?'0':'var(--r)'}" onclick="batSkillToggle('${s.id}',this)">
              <span style="font-size:1.1rem;flex-shrink:0">${s.ic}</span>
              <div style="flex:1"><div style="font-weight:600;font-size:.75rem">${s.label}</div><div style="font-size:.6rem;opacity:.7">${s.desc}</div></div>
              ${active
                ? `<span style="font-size:.7rem;font-weight:700;color:${s.col};white-space:nowrap">${lvl ? LEVELS[lvl-1][0]+' '+LEVELS[lvl-1][1] : '<span style="opacity:.45">niveau ?</span>'}</span>`
                : '<span style="opacity:.3;font-size:.75rem">+ Ajouter</span>'}
            </button>
            ${active ? `<div style="display:flex;gap:.3rem;padding:.35rem .5rem;background:${s.bg};border:1px solid ${s.col}33;border-top:none;border-radius:0 0 var(--r) var(--r)">
              ${LEVELS.map(([ic,lbl,n])=>`<button type="button" onclick="batSkillSetLevel('${s.id}',${n})" style="flex:1;padding:.28rem .2rem;border-radius:100px;border:1.5px solid ${lvl===n?s.col:'rgba(255,255,255,.12)'};background:${lvl===n?s.col+'28':'transparent'};cursor:pointer;font-size:.62rem;font-weight:${lvl===n?'700':'500'};color:${lvl===n?s.col:'var(--moss)'};display:flex;align-items:center;justify-content:center;gap:.2rem;transition:all .15s"><span>${ic}</span><span>${lbl}</span></button>`).join('')}
            </div>` : ''}
          </div>`;
        }).join('')}
      </div>
      <label class="creer-lbl" style="margin-top:.85rem">Ce que j'apporte</label>
      <div style="display:flex;flex-wrap:wrap;gap:.3rem;margin-bottom:.85rem">
        ${BAT_APPORTE.map(a=>`<button class="esp-tag${batFicheData.apporte.includes(a.id)?' sel':''}" style="padding:.28rem .55rem;font-size:.64rem;display:flex;align-items:center;gap:.28rem;border-radius:100px" onclick="batExchangeToggle('apporte','${a.id}')"><span>${a.ic}</span><span style="font-weight:600">${a.label}</span></button>`).join('')}
      </div>
      <label class="creer-lbl">Ce que je cherche</label>
      <div style="display:flex;flex-wrap:wrap;gap:.3rem;margin-bottom:.5rem">
        ${BAT_CHERCHE.map(c=>`<button class="esp-tag${batFicheData.cherche.includes(c.id)?' sel':''}" style="padding:.28rem .55rem;font-size:.64rem;display:flex;align-items:center;gap:.28rem;border-radius:100px" onclick="batExchangeToggle('cherche','${c.id}')"><span>${c.ic}</span><span style="font-weight:600">${c.label}</span></button>`).join('')}
      </div>`;
    batTreeBubble('Sélectionne tes compétences, les branches de ton arbre vont pousser !');
  } else if (batFicheStep === 2) {
    c.innerHTML = `
      <label class="creer-lbl">Type de contribution préféré</label>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.4rem;margin-bottom:.8rem">
        ${[['terrain','🏗','Terrain'],['formation','📚','Formation'],['doc','📝','Documentation'],['animation','🎪','Animation']].map(([id,ic,l])=>`<button class="type-btn${batFicheData.contrib===id?' sel':''}" onclick="batFicheData.contrib='${id}';this.closest('div').querySelectorAll('.type-btn').forEach(b=>b.classList.remove('sel'));this.classList.add('sel');batTreeFinal()"><div style="font-size:1.1rem;margin-bottom:.15rem">${ic}</div><div>${l}</div></button>`).join('')}
      </div>
      <label class="creer-lbl">Rayon d'action</label>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.4rem;margin-bottom:.8rem">
        ${[10,20,50,100].map(r=>`<button class="type-btn${batFicheData.rayon===r?' sel':''}" onclick="batFicheData.rayon=${r};this.closest('div').querySelectorAll('.type-btn').forEach(b=>b.classList.remove('sel'));this.classList.add('sel');batTreeFinal()"><div style="font-size:.9rem;margin-bottom:.1rem">📍</div><div>${r} km</div></button>`).join('')}
      </div>
      <label class="creer-lbl">Mode de participation</label>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:.4rem;margin-bottom:.8rem">
        ${[['presentiel','🏡','Présentiel'],['distanciel','💻','Distanciel'],['les-deux','🌀','Les deux']].map(([id,ic,l])=>`<button class="type-btn${batFicheData.mode===id?' sel':''}" onclick="batFicheData.mode='${id}';this.closest('div').querySelectorAll('.type-btn').forEach(b=>b.classList.remove('sel'));this.classList.add('sel');batTreeFinal()"><div style="font-size:1.1rem;margin-bottom:.15rem">${ic}</div><div>${l}</div></button>`).join('')}
      </div>
      <label class="creer-lbl">Engagement souhaité</label>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:.4rem;margin-bottom:.8rem">
        ${[['ponctuel','⚡','Ponctuel'],['recurrent','🔄','Récurrent'],['immersif','🏕','Immersif']].map(([id,ic,l])=>`<button class="type-btn${batFicheData.engagement===id?' sel':''}" onclick="batFicheData.engagement='${id}';this.closest('div').querySelectorAll('.type-btn').forEach(b=>b.classList.remove('sel'));this.classList.add('sel');batTreeFinal()"><div style="font-size:1.1rem;margin-bottom:.15rem">${ic}</div><div>${l}</div></button>`).join('')}
      </div>
      <label class="creer-lbl">Pourquoi tu contribues</label>
      <textarea class="creer-inp" style="height:65px;resize:none" oninput="batFicheData.motivation=this.value">${batFicheData.motivation}</textarea>`;
    batTreeFinal();
  } else {
    /* ── Étape 4 · Matching ── */
    // Temps d'attente : Deva « cherche » les quêtes adaptées au profil
    // avant de les révéler (rejoué à chaque clic sur « Trouver des quêtes »).
    if (!batFicheData._quetesReady) {
      renderDevaSearching(c, {
        title: 'Deva cherche tes quêtes',
        msgs: [
          'Analyse de ton profil et de tes compétences…',
          'Exploration des quêtes des lieux de la communauté…',
          'Sélection des quêtes adaptées à tes compétences…',
          'Calcul de tes scores de compatibilité…'
        ]
      });
      if (pub) pub.style.display = 'none';   // pas de publication pendant la recherche
      if (!window._batQuetesGenerating) {
        window._batQuetesGenerating = true;
        setTimeout(() => {
          window._batQuetesGenerating = false;
          clearInterval(window._creerSolMsgTimer);
          batFicheData._quetesReady = true;
          if (batFicheStep === 3) batFicheRenderStep();   // révèle les quêtes
        }, 2300);
      }
      return;
    }
    // Construit les quêtes à partir des lieux de la démo selon le profil saisi
    if (typeof batBuildQuetesFromProfile === 'function') batBuildQuetesFromProfile();
    const scored = BAT_QUETES
      .map(q => ({ ...q, score: calcMatch(batFicheData, q) }))
      .sort((a, b) => b.score - a.score);

    // ── Sélection par compétence du bâtisseur ──
    const mySkills = (batFicheData.skills || []).map(id => BAT_SKILLS.find(s => s.id === id)).filter(Boolean);
    if (!mySkills.length) batQueteFilter = 'all';
    let list;
    if (batQueteFilter === 'all') list = scored;
    else if (batQueteFilter === 'matched') list = scored.filter(q => q._matched);
    else list = scored.filter(q => (q.matchedSkills || []).includes(batQueteFilter));
    if (!list.length) list = scored; // garde-fou : ne jamais afficher une liste vide

    const chip = (id, ic, label, active) =>
      `<button onclick="batSetQueteFilter('${id}')" style="display:inline-flex;align-items:center;gap:.28rem;padding:.32rem .6rem;border-radius:100px;border:1.5px solid ${active ? 'var(--fern)' : 'rgba(46,102,66,.2)'};background:${active ? 'rgba(74,140,92,.12)' : 'white'};color:${active ? 'var(--fern)' : 'var(--moss)'};font-size:.64rem;font-weight:${active ? 700 : 500};cursor:pointer;transition:all .18s;white-space:nowrap"><span style="font-size:.78rem">${ic}</span><span>${label}</span></button>`;
    const chipsHtml = mySkills.length ? `
      <div style="display:flex;gap:.35rem;flex-wrap:wrap;margin-bottom:.7rem">
        ${chip('matched', '✨', 'Mes compétences', batQueteFilter === 'matched')}
        ${mySkills.map(s => chip(s.id, s.ic, s.label, batQueteFilter === s.id)).join('')}
        ${chip('all', '🗂', 'Toutes', batQueteFilter === 'all')}
      </div>` : '';

    const colFor = s => s >= 65 ? 'var(--fern)' : s >= 45 ? 'var(--amber)' : 'var(--sky)';

    c.innerHTML = `
      <div style="font-size:.62rem;color:var(--moss);opacity:.7;margin-bottom:.6rem;line-height:1.5">
        ${list.length} quête${list.length > 1 ? 's' : ''} ${batQueteFilter === 'all' ? 'au total' : 'selon tes compétences'}, classée${list.length > 1 ? 's' : ''} par pertinence. Clique sur une quête pour postuler.
      </div>
      ${chipsHtml}
      <div style="display:flex;flex-direction:column;gap:.5rem">
        ${list.map(q => {
          const col = colFor(q.score);
          const typeIc = q.type.split(' ')[0];
          return `<div onclick="openQueteModalFromFiche(${q.id})" style="background:white;border:1px solid rgba(46,102,66,.12);border-radius:var(--r-lg);padding:.7rem .85rem;cursor:pointer;transition:all .18s;display:flex;align-items:center;gap:.7rem" onmouseover="this.style.borderColor='rgba(74,140,92,.35)';this.style.boxShadow='0 3px 12px rgba(74,140,92,.09)'" onmouseout="this.style.borderColor='rgba(46,102,66,.12)';this.style.boxShadow='none'">
            <div style="width:36px;height:36px;border-radius:9px;background:rgba(74,140,92,.1);display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0">${typeIc}</div>
            <div style="flex:1;min-width:0">
              <div style="display:flex;align-items:center;gap:.4rem;margin-bottom:.2rem">
                <div style="font-size:.75rem;font-weight:600;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1">${q.titre}</div>
                <span style="font-size:.6rem;font-weight:800;color:${col};background:${col === 'var(--fern)' ? 'rgba(74,140,92,.1)' : col === 'var(--amber)' ? 'rgba(200,115,42,.1)' : 'rgba(58,110,140,.1)'};padding:.1rem .4rem;border-radius:100px;flex-shrink:0">${q.score}%</span>
              </div>
              <div style="font-size:.62rem;color:var(--moss);opacity:.75;display:flex;gap:.5rem;flex-wrap:wrap">
                <span>📍 ${q.lieu}</span><span>⏱ ${q.duree}</span><span style="color:var(--amber);font-weight:600">🪙 +${q.tokens}</span>
              </div>
            </div>
          </div>`;
        }).join('')}
      </div>
    `;
    batMatchViz();
  }
}

function batSkillToggle(id, btn) {
  const i = batFicheData.skills.indexOf(id);
  if (i >= 0) {
    batFicheData.skills.splice(i, 1);
    delete batFicheData.skillLevels[id];
  } else {
    batFicheData.skills.push(id);
  }
  batFicheRenderStep();
  batTreeGrowSkills();
}

function batSkillSetLevel(id, lvl) {
  if (!batFicheData.skills.includes(id)) return;
  batFicheData.skillLevels[id] = batFicheData.skillLevels[id] === lvl ? 0 : lvl;
  batFicheRenderStep();
  batTreeGrowSkills();
}

function batSetQueteFilter(id) { batQueteFilter = id; batFicheRenderStep(); }
function batFicheNext() { if (batFicheStep < 3) { if (batFicheStep === 2) batFicheData._quetesReady = false; /* (re)chercher → rejoue l'attente Deva */ batFicheStep++; if (window.batPanReset) window.batPanReset(); batFicheRenderStep(); } }
function batFichePrev() { if (batFicheStep > 0) { batFicheStep--; if (window.batPanReset) window.batPanReset(); batFicheRenderStep(); } }

/* ── Algorithme de matching bâtisseur ↔ quête ── */
const BAT_SKILL_MAP = {
  maraichage:   ['Maraîchage','Alimentation','🥦'],
  energie:      ['Énergie','Eau','💧','⚡'],
  reparation:   ['Réparation','FabLab','🔧'],
  facilitation: ['Documentation','Collectif','📚'],
  construction: ['Construction','Biosourcé','🏗'],
  biodiversite: ['Biodiversité','Eau','💧'],
};

function calcMatch(bat, quete) {
  let score = 0;
  const allText = (quete.tags || []).concat([quete.type || '']);

  /* 1. Compétences (0–35 pts), pondérées par niveau (1=×0.6 / 2=×0.85 / 3=×1.2) */
  const LVL_W = [0, 0.6, 0.85, 1.2];
  const hits = (bat.skills || []).filter(sid =>
    (BAT_SKILL_MAP[sid] || []).some(kw => allText.some(t => t.includes(kw)))
  );
  const skillPts = hits.reduce((sum, sid) => {
    const lvl = (bat.skillLevels || {})[sid] || 1;
    return sum + 20 * (LVL_W[lvl] || 1);
  }, 0);
  score += Math.min(35, Math.round(skillPts));

  /* 2. Disponibilité ↔ durée (0–25 pts) */
  const dur = (quete.duree || '').toLowerCase();
  const DISPO_MATCH = { Weekends: dur.includes('week-end'), Semaine: dur.includes('journée'), Flexible: true, 'Sur mission': dur.includes('séance') || dur === 'flexible' };
  const dispos = Array.isArray(bat.dispo) ? bat.dispo : (bat.dispo ? [bat.dispo] : []);
  const dispoHit = dispos.some(d => DISPO_MATCH[d]);
  score += dispoHit ? 25 : (dur.includes('flexible') ? 18 : 10);

  /* 3. Géographie (0–25 pts) */
  if (quete.ville === bat.ville) {
    score += 25;
  } else if ((quete.tags || []).includes('Distanciel ok') && bat.mode !== 'presentiel') {
    score += 20;
  } else {
    const approxDist = { Libourne: 30, Périgueux: 90, Vannes: 350 };
    const dist = approxDist[quete.ville] || 150;
    const rayon = Number(bat.rayon) || 20;
    if (dist <= rayon) score += 25;
    else if (dist <= rayon * 2.5) score += 12;
  }

  /* 4. Axe d'impact (0–8 pts) */
  const AXE_TYPE = { alimentation: 'Alimentation', energie: 'Énergie', social: 'Documentation', circulaire: 'Réparation' };
  if ((quete.type || '').includes(AXE_TYPE[bat.axe] || '__')) score += 8;

  /* 5. Type de contribution (0–7 pts) */
  const CONTRIB_KW = { terrain: ['Construction','🏗'], formation: ['Documentation','📚','Formation'], doc: ['Documentation','📚'], animation: ['Collectif'] };
  if ((CONTRIB_KW[bat.contrib] || []).some(kw => allText.some(t => t.includes(kw)))) score += 7;

  /* 6. Contrainte distanciel */
  if (bat.mode === 'distanciel' && !(quete.tags || []).includes('Distanciel ok')) score -= 20;

  /* 7. Engagement souhaité (±8 pts) */
  const engHit = {
    ponctuel:  dur.includes('journée') || dur.includes('après-midi') || dur.includes('flexible'),
    recurrent: dur.includes('mois') || (quete.tags || []).includes('Récurrent'),
    immersif:  dur.includes('week-end') || dur.includes('séance'),
  }[bat.engagement];
  score += engHit ? 8 : -3;

  /* 8. Bonus "je veux apprendre" + formation incluse (+10 pts) */
  if ((bat.wantLearn || []).length > 0 && (quete.tags || []).includes('Formation incluse')) {
    const learnHit = bat.wantLearn.some(sid =>
      (BAT_SKILL_MAP[sid] || []).some(kw => allText.some(t => t.includes(kw)))
    );
    if (learnHit) score += 10;
  }

  return Math.max(0, Math.min(100, score));
}

function batExchangeToggle(field, id) {
  const arr = batFicheData[field];
  const i = arr.indexOf(id);
  if (i >= 0) arr.splice(i, 1); else arr.push(id);
  batFicheRenderStep();
}

function batValeurToggle(id) {
  const autreOn = (batFicheData.valeurAutre || '').trim() !== '';
  const total = batFicheData.valeurs.length + (autreOn ? 1 : 0);
  const i = batFicheData.valeurs.indexOf(id);
  if (i >= 0) batFicheData.valeurs.splice(i, 1);
  else if (total < 3) batFicheData.valeurs.push(id);
  batFicheRenderStep();
}

function batValeurAutreOpen() {
  window._batAutreOpen = true;
  batFicheRenderStep();
  setTimeout(() => { const inp = document.getElementById('bat-val-autre-inp'); if (inp) inp.focus(); }, 50);
}

function batValeurAutreConfirm() {
  window._batAutreOpen = false;
  const val = (batFicheData.valeurAutre || '').trim();
  batFicheData.valeurAutre = val; // normalise
  batFicheRenderStep();
}

function batValeurAutreClear() {
  batFicheData.valeurAutre = '';
  window._batAutreOpen = false;
  batFicheRenderStep();
}

function batDispoToggle(d) {
  const i = batFicheData.dispo.indexOf(d);
  if (i >= 0) batFicheData.dispo.splice(i, 1);
  else batFicheData.dispo.push(d);
  batFicheRenderStep();
}

function batLieuTypeToggle(id) {
  const i = batFicheData.lieuType.indexOf(id);
  if (i >= 0) batFicheData.lieuType.splice(i, 1);
  else batFicheData.lieuType.push(id);
  batFicheRenderStep();
}

/* ── Mes valeurs – sélection directe (rendu inline dans batFicheRenderStep) ── */

function batTreeUpdateStep1() {
  const svg   = document.getElementById('bat-tree-svg');
  const nodes = document.getElementById('bat-tree-nodes');
  if (!svg || !nodes) return;
  svg.innerHTML = '';
  document.querySelectorAll('[id^="btn-val-"],[id^="btn-lieu-"],[id^="btn-dispo-"],[id^="btn-sk-"],[id^="btn-bat-rayon-"]').forEach(e => e.remove());

  const W = batTW(), H = batTH(), cx = W / 2, cy = H / 2;
  const _autreVal = (batFicheData.valeurAutre || '').trim();
  const vals = _autreVal ? [...batFicheData.valeurs, _autreVal] : batFicheData.valeurs;

  /* Helpers locaux ── arc de groupe + étiquette de section */
  function _arc(r, angles, col) {
    if (angles.length < 2) return;
    const a0=angles[0], a1=angles[angles.length-1];
    const x1=cx+r*Math.cos(a0), y1=cy+r*Math.sin(a0);
    const x2=cx+r*Math.cos(a1), y2=cy+r*Math.sin(a1);
    const p=document.createElementNS('http://www.w3.org/2000/svg','path');
    p.setAttribute('d',`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`);
    p.setAttribute('fill','none'); p.setAttribute('stroke',col+'28');
    p.setAttribute('stroke-width','1.5'); svg.appendChild(p);
  }
  function _lbl(angle, r, text, col) {
    if (!text) return;
    const t=document.createElementNS('http://www.w3.org/2000/svg','text');
    t.setAttribute('x', cx+r*Math.cos(angle)); t.setAttribute('y', cy+r*Math.sin(angle));
    t.setAttribute('text-anchor','middle'); t.setAttribute('dominant-baseline','middle');
    t.setAttribute('fill', col+'55'); t.setAttribute('font-size','8');
    t.setAttribute('font-weight','700'); t.setAttribute('font-family','Satoshi,sans-serif');
    t.setAttribute('letter-spacing','2'); t.textContent=text; svg.appendChild(t);
  }

  /* ── Zone GAUCHE : Valeurs ── */
  const valAngles = [];
  vals.forEach((vid, i) => {
    const found = BAT_VALEURS.find(x => x.id === vid || x.label === vid);
    const isCustom = !found && vid === _autreVal;
    const col = found ? found.col : isCustom ? '#7a6ea8' : '#4a8c5c';
    const ic  = found ? found.ic  : isCustom ? '✏️' : '✦';
    const lbl = found ? found.label : vid;
    const angle = Math.PI + (i - (vals.length - 1) / 2) * 0.60;
    const r = Math.min(W, H) * 0.44;
    valAngles.push(angle);
    batLineAdd(cx, cy, cx+r*Math.cos(angle), cy+r*Math.sin(angle), col+'55', false);
    const node = batNodeAdd('val-' + i,
      `<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
        <span style="font-size:.85rem">${ic}</span>
        <span style="font-size:.62rem;font-weight:800;color:${col};white-space:nowrap">${lbl}</span>
      </div>`,
      cx+r*Math.cos(angle), cy+r*Math.sin(angle), 'sol', col, col+'15');
    node.style.cssText += `;border-radius:50%;width:74px;height:74px;border-color:${col}66;border-width:2px;animation:starPop .4s cubic-bezier(.17,.67,.42,1.3) both`;
  });
  _arc(Math.min(W,H)*0.46, valAngles, '#4a8c5c');
  if (vals.length) _lbl(Math.PI, Math.min(W,H)*0.60, 'VALEURS', '#4a8c5c');

  /* ── Zone HAUT-GAUCHE : Disponibilités ── */
  const DISPO_META = { Weekends:'📅', Semaine:'💼', Flexible:'🌀', 'Sur mission':'🎯' };
  const dispos = batFicheData.dispo;
  const dispoAngles = [];
  dispos.forEach((d, i) => {
    const angle = -Math.PI * 0.78 + (i - (dispos.length - 1) / 2) * 0.55;
    const r = Math.min(W, H) * 0.52;
    dispoAngles.push(angle);
    batLineAdd(cx, cy, cx+r*Math.cos(angle), cy+r*Math.sin(angle), 'rgba(74,140,92,.45)', false);
    const dn = batNodeAdd('dispo-' + i,
      `<div style="display:flex;align-items:center;gap:.3rem;padding:.28rem .65rem">
        <span style="font-size:.85rem">${DISPO_META[d]||'📅'}</span>
        <span style="font-size:.64rem;font-weight:700;color:var(--fern);white-space:nowrap">${d}</span>
      </div>`,
      cx+r*Math.cos(angle), cy+r*Math.sin(angle), 'sol', '#4a8c5c', 'rgba(74,140,92,.1)');
    dn.style.cssText += `;border-radius:100px;width:auto;height:auto;border-color:rgba(74,140,92,.55);animation:starPop .4s cubic-bezier(.17,.67,.42,1.3) both`;
  });
  _arc(Math.min(W,H)*0.54, dispoAngles, '#4a8c5c');
  if (dispos.length) _lbl(-Math.PI*0.78, Math.min(W,H)*0.68, 'DISPONIBILITÉS', '#4a8c5c');

  /* ── Zone DROITE : Types de lieu ── */
  const lts = BAT_LIEU_TYPES.filter(x => batFicheData.lieuType.includes(x.id));
  const lieuAngles = [];
  lts.forEach((lt, i) => {
    const angle = Math.PI * 0.10 + (i - (lts.length - 1) / 2) * 0.55;
    const r = Math.min(W, H) * 0.48;
    lieuAngles.push(angle);
    batLineAdd(cx, cy, cx+r*Math.cos(angle), cy+r*Math.sin(angle), lt.col+'66', false);
    const ln = batNodeAdd('lieu-' + lt.id,
      `<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
        <span style="font-size:1rem">${lt.ic}</span>
        <span style="font-size:.62rem;font-weight:800;color:${lt.col};white-space:nowrap">${lt.label}</span>
      </div>`,
      cx+r*Math.cos(angle), cy+r*Math.sin(angle), 'sol', lt.col, lt.col+'15');
    ln.style.cssText += `;border-radius:50%;width:74px;height:74px;border-color:${lt.col}88;border-width:2px;box-shadow:0 0 12px ${lt.col}28;animation:starPop .5s cubic-bezier(.17,.67,.42,1.3) both`;
  });
  _arc(Math.min(W,H)*0.50, lieuAngles, '#3a6e8c');
  if (lts.length) _lbl(Math.PI*0.10, Math.min(W,H)*0.64, 'LIEUX', '#3a6e8c');
}

function batTreeUpdateValues() { batTreeUpdateStep1(); }

function batWantLearnToggle(id) {
  const i = batFicheData.wantLearn.indexOf(id);
  if (i >= 0) batFicheData.wantLearn.splice(i, 1);
  else batFicheData.wantLearn.push(id);
  batFicheRenderStep();
}

function batMatchUpdate() {
  if (batFicheStep === 3) batMatchViz();
}

function batMatchViz() {
  const svg   = document.getElementById('bat-tree-svg');
  const nodes = document.getElementById('bat-tree-nodes');
  if (!svg || !nodes) return;
  svg.innerHTML = ''; nodes.innerHTML = '';

  const W = batTW(), H = batTH(), cx = W / 2, cy = H / 2;

  /* Nœud central */
  const hub = batNodeAdd('center',
    `<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
      <span style="font-size:1.4rem;animation:treePulse 2.4s ease-in-out infinite">🎯</span>
      <span style="font-size:.62rem;font-weight:800;color:#c8f5d6;letter-spacing:.02em">Quêtes</span>
      <span style="font-size:.52rem;color:rgba(255,255,255,.55)">${BAT_QUETES.length} analysées</span>
    </div>`,
    cx, cy, 'center');
  hub.style.cssText += ';width:80px;height:80px;border-radius:50%;background:radial-gradient(circle at 35% 35%,rgba(100,220,130,.25),rgba(46,102,66,.4));border-color:rgba(74,200,110,.6);box-shadow:0 0 24px rgba(74,200,110,.4)';
  hub.classList.add('btn-center-node');

  /* Calcul des scores + tri */
  const scored = BAT_QUETES
    .map(q => ({ ...q, score: calcMatch(batFicheData, q) }))
    .sort((a, b) => b.score - a.score);

  const colFor = s => s >= 65 ? '#4a8c5c' : s >= 45 ? '#c8732a' : '#3a6e8c';

  scored.forEach((q, i) => {
    const angle  = (2 * Math.PI / scored.length) * i - Math.PI / 2;
    /* Rayon inversement proportionnel au score : meilleur match = plus proche */
    const rFrac  = 0.15 + (1 - q.score / 100) * 0.34;
    const r      = Math.min(W, H) * rFrac;
    const qx     = cx + r * Math.cos(angle);
    const qy     = cy + r * Math.sin(angle);
    const col    = colFor(q.score);
    const delay  = i * 110;
    const dashed = q.score < 45;

    batLineAdd(cx, cy, qx, qy, col + '99', dashed, delay);

    setTimeout(() => {
      const shortTitle = q.titre.split('—')[0].trim();
      const label = shortTitle.length > 20 ? shortTitle.substring(0, 18) + '…' : shortTitle;
      const node = batNodeAdd('qm-' + q.id,
        `<div style="text-align:center;line-height:1.3">
          <div style="font-size:.78rem;font-weight:800;color:${col}">${q.score}%</div>
          <div style="font-size:.56rem;color:var(--ink);margin-top:1px">${label}</div>
          <div style="font-size:.52rem;color:${col};opacity:.8;margin-top:1px">${q.type.split(' ')[0]} · ${q.duree}</div>
          <div style="font-size:.5rem;color:${col};font-weight:600;margin-top:2px">🪙 +${q.tokens}</div>
        </div>`,
        qx, qy, 'sol', col, col + '12');
      node.style.cssText += `;border-radius:14px;min-width:80px;width:auto;height:auto;padding:.35rem .55rem;border-color:${col}66;box-shadow:0 0 16px ${col}30;animation:starPop .5s cubic-bezier(.17,.67,.42,1.3) both;cursor:pointer`;
      node.onclick = () => batSelectQuete(q.id);
    }, delay + 70);
  });

  /* Légende score */
  setTimeout(() => {
    const top = scored[0];
    const nb80 = scored.filter(q => q.score >= 65).length;
    batTreeBubble(`Meilleur match : "${top.titre.split('—')[0].trim()}" · ${top.score}%, ${nb80} quête${nb80 > 1 ? 's' : ''} très compatibles · Clique pour postuler`);
  }, scored.length * 110 + 200);
}

/* ── Arbre de compétences (mind-map bâtisseur) ── */
function batTW() { const n=document.getElementById('bat-tree-nodes'); return n?n.parentElement.offsetWidth:600; }
function batTH() { const n=document.getElementById('bat-tree-nodes'); return n?n.parentElement.offsetHeight:400; }

/* Centre pulsant animé */
function batCenterHtml() {
  const p = batFicheData.prenom||'Moi';
  return `<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
    <span style="font-size:1.5rem;animation:treePulse 2.4s ease-in-out infinite">🌿</span>
    <span style="font-size:.72rem;font-weight:800;color:#c8f5d6;letter-spacing:.02em;white-space:nowrap">${p}</span>
  </div>`;
}

function batNodeAdd(id, label, x, y, cls, col, bg, delay) {
  const existing = document.getElementById('btn-'+id);
  if (existing) {
    existing.style.left=x+'px'; existing.style.top=y+'px';
    existing.innerHTML = label;
    return existing;
  }
  const el = document.createElement('div');
  el.className = 'mm-node mm-' + cls; el.id = 'btn-'+id;
  el.style.cssText = `left:${x}px;top:${y}px;opacity:0;transform:translate(-50%,-50%) scale(.4)`;
  if (col) { el.style.color=col; el.style.borderColor=col+'66'; el.style.background=bg||col+'20'; }
  el.innerHTML = label;
  document.getElementById('bat-tree-nodes').appendChild(el);
  setTimeout(() => requestAnimationFrame(() => {
    el.style.transition = 'opacity .5s cubic-bezier(.17,.67,.42,1.3), transform .5s cubic-bezier(.17,.67,.42,1.3)';
    el.style.opacity = '1';
    el.style.transform = 'translate(-50%,-50%) scale(1)';
  }), delay||0);
  return el;
}

function batLineAdd(x1,y1,x2,y2,col,dash,delay) {
  const svg = document.getElementById('bat-tree-svg'); if(!svg) return;
  if (delay) { setTimeout(()=>batLineAdd(x1,y1,x2,y2,col,dash), delay); return; }
  const len = Math.hypot(x2-x1,y2-y1);
  const l = document.createElementNS('http://www.w3.org/2000/svg','line');
  l.setAttribute('x1',x1); l.setAttribute('y1',y1); l.setAttribute('x2',x2); l.setAttribute('y2',y2);
  l.setAttribute('stroke', col||'rgba(46,102,66,.45)');
  l.setAttribute('stroke-width', dash?'1.5':'2.5');
  if(dash) l.setAttribute('stroke-dasharray','6,5');
  l.setAttribute('stroke-linecap','round');
  /* Draw-on animation */
  l.style.strokeDasharray = len;
  l.style.strokeDashoffset = len;
  l.style.transition = 'stroke-dashoffset .6s ease';
  svg.appendChild(l);
  requestAnimationFrame(()=>{ l.style.strokeDashoffset='0'; });
}

function batTreeBubble(t) { /* supprimé */ }

function batTreeInit() {
  if (window.batPanReset) window.batPanReset();
  const nodes = document.getElementById('bat-tree-nodes');
  const svg = document.getElementById('bat-tree-svg');
  if (!nodes || !svg) return;
  nodes.innerHTML = ''; svg.innerHTML = '';
  /* Inject keyframes if needed */
  if (!document.getElementById('bat-anim-style')) {
    const s = document.createElement('style');
    s.id='bat-anim-style';
    s.textContent=`
      @keyframes treePulse{0%,100%{transform:scale(1);filter:drop-shadow(0 0 6px rgba(74,200,100,.5))}50%{transform:scale(1.18);filter:drop-shadow(0 0 14px rgba(74,200,100,.9))}}
      @keyframes orbitFloat{0%,100%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-50%,-54%) scale(1.04)}}
      @keyframes bubbleIn{from{opacity:0;transform:translateX(-50%) translateY(12px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}
      @keyframes starPop{0%{opacity:0;transform:translate(-50%,-50%) scale(0) rotate(-20deg)}80%{transform:translate(-50%,-50%) scale(1.15) rotate(3deg)}100%{opacity:1;transform:translate(-50%,-50%) scale(1) rotate(0)}}
      .btn-center-node{animation:orbitFloat 3.5s ease-in-out infinite!important}
    `;
    document.head.appendChild(s);
  }
  const W=batTW(), H=batTH(), cx=W/2, cy=H/2;
  const c = batNodeAdd('center', batCenterHtml(), cx, cy, 'center');
  c.classList.add('btn-center-node');
  c.style.width='76px'; c.style.height='76px';
  c.style.borderRadius='50%';
  c.style.background='radial-gradient(circle at 35% 35%,rgba(100,220,130,.25),rgba(46,102,66,.4))';
  c.style.borderColor='rgba(74,200,110,.6)';
  c.style.boxShadow='0 0 22px rgba(74,200,110,.35),inset 0 0 12px rgba(74,200,110,.1)';
  batTreeBubble('Dis-nous qui tu es, le nœud central s\'anime avec ton prénom…');
}

function batTreeUpdate() {
  const el = document.getElementById('btn-center');
  if (el) el.innerHTML = batCenterHtml();
  if (batFicheStep === 0) batTreeUpdateStep1();
}

function batTreeGrowSkills() {
  // Redessine la base (valeurs, lieux, dispos) + nettoie tous les nœuds
  batTreeUpdateStep1();
  // Retire les anciens nœuds compétences restants
  document.querySelectorAll('[id^="btn-sk-"]').forEach(e => e.remove());

  const svg = document.getElementById('bat-tree-svg');
  const nodes = document.getElementById('bat-tree-nodes');
  if (!svg || !nodes) return;
  // Pas de svg.innerHTML='' ici, on dessine les skills par-dessus la base
  const W=batTW(), H=batTH(), cx=W/2, cy=H/2;
  const skills = batFicheData.skills;
  const branchColors = ['#4a8c5c','#c8732a','#3a6e8c','#7a6ea8','#b84e35','#2e9960','#c0a020'];

  /* ── Helpers inline ── */
  function _arc(anglesArr, radius, col) {
    if (anglesArr.length < 2) return;
    const r2 = Math.min(W,H) * radius;
    const pts = anglesArr.map(a => [cx + r2*Math.cos(a), cy + r2*Math.sin(a)]);
    const mx = (pts[0][0]+pts[pts.length-1][0])/2, my = (pts[0][1]+pts[pts.length-1][1])/2;
    const dx = mx-cx, dy = my-cy, dist = Math.hypot(dx,dy)||1;
    const pull = r2*0.22;
    const qx = mx+dx/dist*pull, qy = my+dy/dist*pull;
    const p = document.createElementNS('http://www.w3.org/2000/svg','path');
    p.setAttribute('d',`M${pts[0][0]},${pts[0][1]} Q${qx},${qy} ${pts[pts.length-1][0]},${pts[pts.length-1][1]}`);
    p.setAttribute('fill','none'); p.setAttribute('stroke',col);
    p.setAttribute('stroke-width','1.5'); p.setAttribute('stroke-dasharray','4 3'); p.setAttribute('opacity','.45');
    svg.appendChild(p);
  }
  function _lbl(angle, radius, text, col) {
    const r2 = Math.min(W,H)*radius;
    const tx2 = cx+r2*Math.cos(angle), ty2 = cy+r2*Math.sin(angle);
    const t = document.createElementNS('http://www.w3.org/2000/svg','text');
    t.setAttribute('x',tx2); t.setAttribute('y',ty2);
    t.setAttribute('text-anchor','middle'); t.setAttribute('dominant-baseline','middle');
    t.setAttribute('font-size','9'); t.setAttribute('font-weight','700');
    t.setAttribute('letter-spacing','1.5'); t.setAttribute('fill',col); t.setAttribute('opacity','.55');
    t.setAttribute('font-family','Satoshi,sans-serif');
    t.textContent = text;
    svg.appendChild(t);
  }

  /* ── Zone BAS : arc + label COMPÉTENCES ── */
  if (skills.length >= 2) {
    const skillAngles = skills.map((_,i) => Math.PI/2 + (i-(skills.length-1)/2)*0.55);
    _arc(skillAngles, 0.53, '#4a8c5c');
    _lbl(Math.PI/2, 0.66, 'COMPÉTENCES', '#4a8c5c');
  }

  skills.forEach((sid, i) => {
    const s = BAT_SKILLS.find(x=>x.id===sid); if (!s) return;
    /* ── Zone BAS : Compétences (60° → 120°, r=0.48) ── */
    const a = Math.PI / 2 + (i - (skills.length - 1) / 2) * 0.55;
    const r = Math.min(W,H) * 0.48;
    const sx = cx + r*Math.cos(a), sy = cy + r*Math.sin(a);
    const col = s.col || branchColors[i % branchColors.length];
    const delay = i * 120;

    /* Branche principale, épaisseur proportionnelle au niveau */
    const lvl = batFicheData.skillLevels[sid] || 0;
    batLineAdd(cx,cy,sx,sy, col+(lvl===3?'ee':lvl===2?'cc':'99'), false, delay);

    /* Nœud compétence, taille + label niveau selon choix utilisateur */
    const LVLLABEL = ['','🌱 Débutant','🌿 Confirmé','⭐ Expert'];
    const nodeSize = 62 + lvl * 10; // 62 / 72 / 82 / 92 px
    setTimeout(() => {
      const node = batNodeAdd('sk-'+sid,
        `<div style="display:flex;flex-direction:column;align-items:center;gap:1px">
          <span style="font-size:${.9 + lvl*.08}rem">${s.ic}</span>
          <span style="font-size:.6rem;font-weight:700;color:${col};white-space:nowrap">${s.label}</span>
          ${lvl ? `<span style="font-size:.52rem;color:${col};opacity:.85;letter-spacing:.02em">${LVLLABEL[lvl]}</span>` : '<span style="font-size:.5rem;color:'+col+';opacity:.4">niveau ?</span>'}
        </div>`,
        sx, sy, 'espace', col, col+'18');
      node.style.width=`${nodeSize}px`; node.style.height=`${nodeSize}px`; node.style.borderRadius='50%';
      node.style.boxShadow=`0 0 ${8+lvl*5}px ${col}${lvl===3?'66':lvl===2?'44':'22'}`;
      node.style.animation='starPop .5s cubic-bezier(.17,.67,.42,1.3) both';

    }, delay + 80);
  });
}

function batTreeFinal() {
  // Redessine la base (valeurs, lieux, dispos) + nettoie
  batTreeUpdateStep1();
  document.querySelectorAll('[id^="btn-sk-"],[id^="btn-sat-"],[id^="btn-deva-"]').forEach(e=>e.remove());

  const svg = document.getElementById('bat-tree-svg');
  const nodes = document.getElementById('bat-tree-nodes');
  if (!svg || !nodes) return;
  const W=batTW(), H=batTH(), cx=W/2, cy=H/2;
  const skills = batFicheData.skills.length > 0 ? batFicheData.skills : ['maraichage','energie','reparation'];

  /* Tables de correspondance */
  const CONTRIB_MAP = {
    terrain:   {ic:'🏗', l:'Terrain',       col:'#b84e35'},
    formation: {ic:'📚', l:'Formation',     col:'#3a6e8c'},
    doc:       {ic:'📝', l:'Documentation', col:'#7a6ea8'},
    animation: {ic:'🎪', l:'Animation',     col:'#2e9960'},
  };
  const MODE_MAP = {
    presentiel: {ic:'🏡', l:'Présentiel',  col:'#4a8c5c'},
    distanciel: {ic:'💻', l:'Distanciel',  col:'#3a6e8c'},
    'les-deux': {ic:'🌀', l:'Les deux',    col:'#7a6ea8'},
  };
  const ENG_MAP = {
    ponctuel:  {ic:'⚡', l:'Ponctuel',   col:'#c8732a'},
    recurrent: {ic:'🔄', l:'Récurrent',  col:'#2e9960'},
    immersif:  {ic:'🏕', l:'Immersif',   col:'#4a6e3c'},
  };
  const RAYON_COL = {10:'#2e9960', 20:'#4a8c5c', 50:'#c8732a', 100:'#3a6e8c'};
  const contrib = CONTRIB_MAP[batFicheData.contrib] || CONTRIB_MAP.terrain;
  const mode    = MODE_MAP[batFicheData.mode]        || MODE_MAP.presentiel;
  const eng     = ENG_MAP[batFicheData.engagement]   || ENG_MAP.ponctuel;
  const rCol    = RAYON_COL[batFicheData.rayon]      || '#4a8c5c';

  /* ── Helpers inline ── */
  function _arc(anglesArr, radius, col) {
    if (anglesArr.length < 2) return;
    const r2 = Math.min(W,H)*radius;
    const pts = anglesArr.map(a => [cx+r2*Math.cos(a), cy+r2*Math.sin(a)]);
    const mx = (pts[0][0]+pts[pts.length-1][0])/2, my = (pts[0][1]+pts[pts.length-1][1])/2;
    const dx = mx-cx, dy = my-cy, dist = Math.hypot(dx,dy)||1;
    const pull = r2*0.22;
    const qx = mx+dx/dist*pull, qy = my+dy/dist*pull;
    const p = document.createElementNS('http://www.w3.org/2000/svg','path');
    p.setAttribute('d',`M${pts[0][0]},${pts[0][1]} Q${qx},${qy} ${pts[pts.length-1][0]},${pts[pts.length-1][1]}`);
    p.setAttribute('fill','none'); p.setAttribute('stroke',col);
    p.setAttribute('stroke-width','1.5'); p.setAttribute('stroke-dasharray','4 3'); p.setAttribute('opacity','.45');
    svg.appendChild(p);
  }
  function _lbl(angle, radius, text, col) {
    const r2 = Math.min(W,H)*radius;
    const tx2 = cx+r2*Math.cos(angle), ty2 = cy+r2*Math.sin(angle);
    const t = document.createElementNS('http://www.w3.org/2000/svg','text');
    t.setAttribute('x',tx2); t.setAttribute('y',ty2);
    t.setAttribute('text-anchor','middle'); t.setAttribute('dominant-baseline','middle');
    t.setAttribute('font-size','9'); t.setAttribute('font-weight','700');
    t.setAttribute('letter-spacing','1.5'); t.setAttribute('fill',col); t.setAttribute('opacity','.55');
    t.setAttribute('font-family','Satoshi,sans-serif');
    t.textContent = text;
    svg.appendChild(t);
  }

  /* ── Zone BAS : arc + label COMPÉTENCES ── */
  if (skills.length >= 2) {
    const skillAngles = skills.map((_,i) => Math.PI/2 + (i-(skills.length-1)/2)*0.52);
    _arc(skillAngles, 0.47, '#4a8c5c');
    _lbl(Math.PI/2, 0.58, 'COMPÉTENCES', '#4a8c5c');
  }

  /* ── Zone BAS : Compétences (70° → 110°, r=0.40) ── */
  skills.forEach((sid, i) => {
    const s = BAT_SKILLS.find(x=>x.id===sid); if(!s) return;
    const a = Math.PI / 2 + (i - (skills.length - 1) / 2) * 0.52;
    const r = Math.min(W,H) * 0.40;
    const sx = cx + r*Math.cos(a), sy = cy + r*Math.sin(a);
    const delay = i * 80;
    batLineAdd(cx,cy,sx,sy,s.col+'88',false,delay);
    setTimeout(()=>{
      const lvl = batFicheData.skillLevels[sid] || 0;
      const LVLLABEL = ['','🌱','🌿','⭐'];
      const n = batNodeAdd('sk-'+sid,
        `<div style="display:flex;flex-direction:column;align-items:center;gap:1px">
          <span style="font-size:.9rem">${s.ic}</span>
          <span style="font-size:.58rem;font-weight:700;color:${s.col}">${s.label}</span>
          ${lvl ? `<span style="font-size:.52rem;color:${s.col};opacity:.8">${LVLLABEL[lvl]}</span>` : ''}
        </div>`, sx, sy, 'espace', s.col, s.col+'18');
      n.style.width='68px'; n.style.height='68px'; n.style.borderRadius='50%';
      n.style.boxShadow=`0 0 12px ${s.col}44`;
    }, delay+60);
  });

  const baseDelay = skills.length * 80 + 80;

  /* ── Zone BAS-GAUCHE : Contribution (130°, r=0.56) ── */
  /* ── Zone HAUT-DROITE : Rayon (−30°, r=0.56)       ── */
  /* ── Zone BAS-DROITE : Engagement (45°, r=0.56)    ── */
  /* ── Zone HAUT : Mode (−100°, r=0.56)              ── */
  const sats = [
    { id:'contrib', angle: Math.PI*0.72, col:contrib.col, ic:contrib.ic, label:contrib.l, sub:'Contribution' },
    { id:'eng',     angle: Math.PI*0.25, col:eng.col,      ic:eng.ic,     label:eng.l,     sub:'Engagement' },
    { id:'mode',    angle:-Math.PI*0.55, col:mode.col,     ic:mode.ic,    label:mode.l,    sub:'Mode' },
  ];
  const R = Math.min(W,H) * 0.56;

  /* ── Labels de section pour les satellites ── */
  const SAT_LBL_R = 0.73;
  sats.forEach(sat => {
    _lbl(sat.angle, SAT_LBL_R, sat.sub.toUpperCase(), sat.col);
  });

  sats.forEach((sat, i) => {
    const sx = cx + R*Math.cos(sat.angle);
    const sy = cy + R*Math.sin(sat.angle);
    const delay = baseDelay + i*120;
    batLineAdd(cx,cy,sx,sy,sat.col+'88',false,delay);
    setTimeout(()=>{
      const n = batNodeAdd('sat-'+sat.id,
        `<div style="display:flex;align-items:center;gap:.4rem;padding:.35rem .7rem">
          <span style="font-size:1.1rem">${sat.ic}</span>
          <span style="font-size:.68rem;font-weight:800;color:${sat.col};white-space:nowrap">${sat.label}</span>
        </div>`, sx, sy, 'sol', sat.col, sat.col+'15');
      n.style.width='auto'; n.style.height='auto'; n.style.borderRadius='100px';
      n.style.borderColor=sat.col+'99'; n.style.borderWidth='2px';
      n.style.boxShadow=`0 0 16px ${sat.col}44`;
      n.style.animation='starPop .5s cubic-bezier(.17,.67,.42,1.3) both';
      n.style.padding='0';
    }, delay+60);
  });

  /* ── Cercle zone d'action ── */
  const totalDelay = baseDelay + sats.length * 120 + 100;
  setTimeout(() => batDrawRayonRing(), totalDelay);
}

function batDrawRayonRing() {
  const svg = document.getElementById('bat-tree-svg');
  if (!svg) return;
  /* Nettoie l'ancien anneau */
  document.getElementById('bat-rayon-ring')?.remove();
  document.getElementById('btn-bat-rayon-lbl')?.remove();
  if (!batFicheData.rayon) return;

  const W = batTW(), H = batTH(), cx = W / 2, cy = H / 2;
  /* Rayon visuel proportionnel au km choisi */
  const RAYON_R = { 10: 0.20, 20: 0.30, 50: 0.46, 100: 0.62 };
  const RAYON_COL = { 10:'#2e9960', 20:'#4a8c5c', 50:'#c8732a', 100:'#3a6e8c' };
  const frac = RAYON_R[batFicheData.rayon] || 0.30;
  const col  = RAYON_COL[batFicheData.rayon] || '#4a8c5c';
  const r    = Math.min(W, H) * frac;
  const circ = 2 * Math.PI * r;

  /* Cercle SVG pointillé avec animation draw-on */
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.id = 'bat-rayon-ring';
  circle.setAttribute('cx', cx); circle.setAttribute('cy', cy); circle.setAttribute('r', r);
  circle.setAttribute('fill', 'none');
  circle.setAttribute('stroke', col + '55');
  circle.setAttribute('stroke-width', '2');
  circle.setAttribute('stroke-dasharray', '7 6');
  circle.style.cssText = `stroke-dashoffset:${circ};transition:stroke-dashoffset 1.1s ease;`;
  svg.appendChild(circle);
  requestAnimationFrame(() => { circle.style.strokeDashoffset = '0'; });

  /* Label au sommet de l'anneau */
  const nodes = document.getElementById('bat-tree-nodes');
  if (nodes) {
    const lbl = batNodeAdd('bat-rayon-lbl',
      `<span style="font-size:.58rem;font-weight:700;color:${col};white-space:nowrap">📍 ${batFicheData.rayon} km</span>`,
      cx, cy - r, 'sol', col, col + '12');
    lbl.style.cssText += `;border-radius:100px;width:auto;height:auto;padding:.2rem .55rem;border-color:${col}55;animation:starPop .4s .8s cubic-bezier(.17,.67,.42,1.3) both;opacity:0`;
    requestAnimationFrame(() => { lbl.style.opacity = '1'; });
  }
}

/* ══════════════════════════════════════════════════
   FICHE FINANCEUR, CONSTELLATION D'IMPACT (SEMEUR)
   ══════════════════════════════════════════════════ */

const SEM_FICHE_STEPS = [
  { h: 'Organisation' },
  { h: 'Impacts' },
  { h: 'Projets' }
];

const SEM_AXES = [
  { id:'climat',       ic:'🌍', label:'Climat & Énergie',       col:'#c8732a', bg:'rgba(200,115,42,.25)', lieux:[] },
  { id:'biodiversite', ic:'🌿', label:'Biodiversité',            col:'#4a8c5c', bg:'rgba(74,140,92,.25)',  lieux:[] },
  { id:'social',       ic:'🤝', label:'Cohésion sociale',        col:'#3a6e8c', bg:'rgba(58,110,140,.25)', lieux:[] },
  { id:'alimentation', ic:'🌾', label:'Alimentation durable',    col:'#2e9960', bg:'rgba(46,153,96,.25)',  lieux:[] },
  { id:'economie',     ic:'♻️', label:'Économie circulaire',     col:'#7a6ea8', bg:'rgba(122,110,168,.25)',lieux:[] },
  { id:'habitat',      ic:'🏡', label:'Habitat régénératif',     col:'#b84e35', bg:'rgba(184,78,53,.25)',  lieux:[] },
];

const SEM_IMPACT_BY_TYPE = {
  'Entreprise': {
    cadres: [
      { id:'csrd',   ic:'📋', label:'CSRD · ESRS',      badge:'Obligatoire', bc:'#c0392b', desc:'Rapport de durabilité obligatoire dès 2025',
        items:['ESRS E1 · Climat','ESRS E2 · Pollution','ESRS E3 · Eau','ESRS E4 · Biodiversité','ESRS E5 · Ressources','ESRS S1 · Salariés','ESRS S3 · Communautés','ESRS G1 · Gouvernance'] },
      { id:'gri',    ic:'📊', label:'GRI Standards',     badge:'Recommandé',  bc:'#2980b9', desc:'Référentiel mondial de reporting extra-financier',
        items:['GRI 302 · Énergie','GRI 303 · Eau','GRI 305 · Émissions','GRI 401 · Emploi','GRI 413 · Communautés locales'] },
      { id:'bcorp',  ic:'🏅', label:'B-Corp',            badge:'Optionnel',   bc:'#27ae60', desc:'Certification entreprise à impact, 5 axes évalués',
        items:['Gouvernance','Salariés','Communauté','Environnement','Clients'] },
    ],
    odd:[7,8,9,11,12,13,17], axes:['climat','economie','social']
  },
  'Fondation': {
    cadres: [
      { id:'odd',      ic:'🌍', label:'ODD · Agenda 2030', badge:'Recommandé', bc:'#2980b9', desc:'17 Objectifs de Développement Durable des Nations Unies', items:[] },
      { id:'gri',      ic:'📊', label:'GRI Standards',     badge:'Optionnel',  bc:'#7f8c8d', desc:'Reporting extra-financier adapté aux fondations',
        items:['GRI 201 · Performance économique','GRI 413 · Communautés','GRI 203 · Impacts indirects'] },
      { id:'iso26000', ic:'🎯', label:'ISO 26000 · RSE',   badge:'Optionnel',  bc:'#7f8c8d', desc:'Lignes directrices en responsabilité sociétale',
        items:['Droits humains','Conditions de travail','Environnement','Loyauté des pratiques','Communautés locales'] },
    ],
    odd:[1,2,3,4,10,11,17], axes:['social','alimentation','biodiversite']
  },
  'Association': {
    cadres: [
      { id:'sroi',     ic:'📈', label:'SROI · Retour social', badge:'Recommandé', bc:'#2980b9', desc:'Social Return on Investment, valorisation de l\'impact social',
        items:['Intrants valorisés','Résultats mesurés','Impact net calculé','Ratio SROI'] },
      { id:'odd',      ic:'🌍', label:'ODD · Agenda 2030',    badge:'Optionnel',  bc:'#7f8c8d', desc:'Alignement sur les objectifs mondiaux', items:[] },
      { id:'benevolat',ic:'🤝', label:'Valorisation bénévolat',badge:'Recommandé', bc:'#2980b9', desc:'Comptabilisation des heures bénévoles en équivalent financier',
        items:['Heures bénévoles','Compétences apportées','Réseau mobilisé'] },
    ],
    odd:[1,3,4,10,11,16,17], axes:['social','alimentation','habitat']
  },
  'Collectivité': {
    cadres: [
      { id:'pcaet',      ic:'🏛', label:'PCAET',                badge:'Obligatoire', bc:'#c0392b', desc:'Plan Climat-Air-Énergie Territorial, obligatoire > 20 000 hab.',
        items:['Atténuation GES','Adaptation climatique','Qualité de l\'air','Énergies renouvelables','Séquestration carbone'] },
      { id:'agenda2030', ic:'🌍', label:'Agenda 2030 territorial',badge:'Recommandé',  bc:'#2980b9', desc:'Déclinaison locale des ODD avec indicateurs territoriaux', items:[] },
      { id:'acv',        ic:'♻️', label:'ACV · Cycle de vie',   badge:'Optionnel',   bc:'#7f8c8d', desc:'Évaluation environnementale des politiques publiques',
        items:['Empreinte carbone','Consommation eau','Déchets générés','Biodiversité nette'] },
    ],
    odd:[6,7,11,13,15,16,17], axes:['climat','biodiversite','habitat']
  },
  'Particulier': {
    cadres: [
      { id:'bilan',      ic:'🌱', label:'Bilan carbone personnel', badge:'Simple', bc:'#27ae60', desc:'Mesure de ton empreinte carbone individuelle',
        items:['Transport','Alimentation','Logement','Consommation','Numérique'] },
      { id:'engagement', ic:'🙋', label:'Engagement citoyen',      badge:'Simple', bc:'#27ae60', desc:'Contribution bénévole mesurable à des projets locaux',
        items:['Heures données','Compétences partagées','Projets soutenus'] },
      { id:'odd_perso',  ic:'🌍', label:'ODD personnels',          badge:'Optionnel', bc:'#7f8c8d', desc:'Les ODD qui guident tes choix de financement', items:[] },
    ],
    odd:[3,10,11,12,13,15], axes:['social','alimentation','biodiversite']
  },
};

let semFicheStep = 0;
let semFicheData = { nom:'', localisation:'', type:'Fondation', secteur:'ESS', zone:'Nouvelle-Aquitaine', typeFinancement:'', axes:[], reporting:'CSRD', freq:'Trimestriel', kpis:'CO₂ évité, personnes formées, Vadance', selectedKpis:[], selectedCadres:[], selectedCadreItems:{}, selectedODD:[] };

function initFicheSem() {
  semFicheStep = 0;
  semFicheData._projetsReady = false;
  semFicheData._finances = [];
  semFicheData._financedQuetes = [];
  semFicheData._openProjet = null;
  window._semProjetsGenerating = false;
  semFicheRenderStep();
  semStarInit();
}

function semFicheRenderStep() {
  navWizardSet(SEM_FICHE_STEPS.map(s=>s.h), semFicheStep, (i)=>{ semFicheStep=i; semFicheRenderStep(); });

  const prev = document.getElementById('sem-fiche-prev');
  const next = document.getElementById('sem-fiche-next');
  const pub  = document.getElementById('sem-fiche-publish-btn');
  if (prev) prev.style.display = semFicheStep > 0 ? 'block' : 'none';
  if (next) {
    next.style.display = semFicheStep < 2 ? 'block' : 'none';
    next.textContent = semFicheStep === 1 ? 'Trouver des projets ✦' : 'Suivant →';
    next.onclick = semFicheNext;
  }
  if (pub) pub.style.display = semFicheStep === 2 ? 'inline-flex' : 'none';

  const c = document.getElementById('sem-fiche-content');
  if (!c) return;

  if (semFicheStep === 0) {
    c.innerHTML = `
      <label class="creer-lbl">Nom de l'organisation</label>
      <input class="creer-inp" placeholder="Ex : Fondation Territoires Vivants" value="${semFicheData.nom}" oninput="semFicheData.nom=this.value;semStarUpdateCenter()">
      <label class="creer-lbl">Localisation</label>
      <div style="position:relative" id="sem-loc-wrap">
        <input class="creer-inp" type="text" id="sem-loc-inp" placeholder="Tapez une adresse, ville…"
          value="${semFicheData.localisation||''}" autocomplete="off"
          oninput="semGeoAutoInput(this.value)"
          onfocus="if(this.value.length>2)semGeoAutoInput(this.value)"
          onblur="setTimeout(()=>{const d=document.getElementById('sem-loc-drop');if(d)d.remove();},200)">
        ${semFicheData.localisation?`<div style="font-size:.6rem;color:var(--fern);margin-top:.2rem;padding-left:.1rem">📍 Position vérifiée</div>`:''}
      </div>
      <label class="creer-lbl">Type de structure</label>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.4rem;margin-bottom:.8rem">
        ${[['Entreprise','🏭'],['Fondation','🌍'],['Association','🤝'],['Collectivité','🏛'],['Particulier','🙋']].map(([t,ic],i,a)=>`<button class="type-btn${semFicheData.type===t?' sel':''}" onclick="semFicheData.type='${t}';semFicheData.axes=[];semFicheData.selectedCadres=[];semFicheData.selectedCadreItems={};semFicheData.selectedODD=[];this.closest('div').querySelectorAll('.type-btn').forEach(b=>b.classList.remove('sel'));this.classList.add('sel');semStarUpdateCenter()" style="${i===a.length-1?'grid-column:span 2':''}"><div style="font-size:1rem;margin-bottom:.15rem">${ic}</div><div>${t}</div></button>`).join('')}
      </div>
      <label class="creer-lbl">Zone géographique cible</label>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.4rem;margin-bottom:.8rem">
        ${[['Ville','🏙'],['Département','📍'],['Région','🗺'],['National','🇫🇷']].map(([z,ic])=>`<button class="type-btn${semFicheData.zone===z?' sel':''}" onclick="semFicheData.zone='${z}';this.closest('div').querySelectorAll('.type-btn').forEach(b=>b.classList.remove('sel'));this.classList.add('sel');semStarLights()"><div style="font-size:1rem;margin-bottom:.15rem">${ic}</div><div style="font-size:.68rem">${z}</div></button>`).join('')}
      </div>
      <label class="creer-lbl">Mode de financement</label>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.4rem">
        ${[['Numéraire','💰'],['Mécénat','🎁'],['Nature','🌿'],['Subvention','📋']].map(([t,ic])=>`<button class="type-btn${semFicheData.typeFinancement===t?' sel':''}" onclick="semFicheData.typeFinancement='${t}';this.closest('div').querySelectorAll('.type-btn').forEach(b=>b.classList.remove('sel'));this.classList.add('sel');semStarLights()"><div style="font-size:1rem;margin-bottom:.15rem">${ic}</div><div style="font-size:.68rem">${t}</div></button>`).join('')}
      </div>`;
    semStarBubble('Définissez votre organisation, les étoiles s\'allumeront selon votre zone d\'action…');
  } else if (semFicheStep === 1) {
    const typeData = SEM_IMPACT_BY_TYPE[semFicheData.type] || SEM_IMPACT_BY_TYPE['Fondation'];
    // axes left empty by default, user chooses freely
    const badgeColors = { 'Obligatoire':'#c0392b', 'Recommandé':'#2980b9', 'Optionnel':'#7f8c8d', 'Simple':'#27ae60' };
    c.innerHTML = `
      <div style="font-size:.6rem;color:var(--ink);font-weight:700;text-transform:uppercase;letter-spacing:.07em;margin-bottom:.55rem">Impacts prioritaires</div>
      <div style="display:flex;flex-direction:column;gap:.35rem;margin-bottom:1.1rem">
        ${SEM_AXES.map(a => {
          const active = semFicheData.axes.includes(a.id);
          return `<button style="border-radius:var(--r);padding:.45rem .65rem;text-align:left;display:flex;align-items:center;gap:.5rem;width:100%;border:1.5px solid ${active?a.col:a.col+'44'};background:${active?a.bg:'transparent'};cursor:pointer;transition:all .2s" onclick="semAxeToggle('${a.id}',this)">
            <span style="font-size:1rem;flex-shrink:0">${a.ic}</span>
            <div style="flex:1"><div style="font-weight:600;font-size:.72rem;color:${active?a.col:'#1a3a5a'}">${a.label}</div></div>
            <span style="font-size:.65rem;color:${active?a.col:'rgba(0,0,0,.25)'};font-weight:${active?700:400}">${active?'✓ Actif':'+ Ajouter'}</span>
          </button>`;
        }).join('')}
      </div>
      <div style="font-size:.6rem;color:var(--sky);font-weight:700;text-transform:uppercase;letter-spacing:.07em;margin-bottom:.55rem">Cadres de référence · ${semFicheData.type}</div>
      <div style="display:flex;flex-direction:column;gap:.45rem;margin-bottom:1.1rem">
        ${typeData.cadres.map((cdr,ci) => {
          const sel = semFicheData.selectedCadres.includes(cdr.id);
          const selItems = semFicheData.selectedCadreItems[cdr.id] || [];
          const bc = badgeColors[cdr.badge] || cdr.bc || '#3a6e8c';
          return `<div style="border:1.5px solid ${sel?bc:'rgba(58,110,140,.15)'};border-radius:.75rem;overflow:hidden;transition:border-color .2s;background:${sel?bc+'08':'transparent'}">
            <button onclick="semCadreToggle('${cdr.id}')" style="width:100%;display:flex;align-items:center;gap:.55rem;padding:.6rem .75rem;background:transparent;border:none;cursor:pointer;text-align:left">
              <span style="font-size:1.15rem;flex-shrink:0">${cdr.ic}</span>
              <div style="flex:1;min-width:0">
                <div style="font-size:.74rem;font-weight:700;color:${sel?bc:'#1a3a5a'}">${cdr.label}</div>
                <div style="font-size:.59rem;color:#888;margin-top:.1rem;line-height:1.3">${cdr.desc}</div>
              </div>
              <span style="flex-shrink:0;padding:.15rem .42rem;border-radius:100px;background:${bc}22;color:${bc};font-size:.57rem;font-weight:700;border:1px solid ${bc}44;white-space:nowrap">${cdr.badge}</span>
              <span style="font-size:.85rem;color:${sel?bc:'rgba(58,110,140,.35)'};margin-left:.15rem;font-weight:700">${sel?'✓':'+'}</span>
            </button>
            ${sel && cdr.items.length ? `<div style="padding:.35rem .75rem .6rem;border-top:1px solid ${bc}25;background:${bc}05">
              <div style="font-size:.57rem;color:#999;margin-bottom:.35rem;font-weight:600">Sous-thèmes :</div>
              <div style="display:flex;flex-wrap:wrap;gap:.3rem">
                ${cdr.items.map((item,idx) => {
                  const on = selItems.includes(item);
                  return `<button onclick="semCadreItemToggle('${cdr.id}',${idx})" style="padding:.22rem .48rem;border-radius:100px;border:1.5px solid ${on?bc:bc+'44'};background:${on?bc+'25':'transparent'};color:${on?bc:'#555'};font-size:.59rem;font-weight:${on?700:400};cursor:pointer;transition:all .15s">${item}${on?' ✓':''}</button>`;
                }).join('')}
              </div>
            </div>` : ''}
          </div>`;
        }).join('')}
      </div>
      <div style="font-size:.6rem;color:#3f7e44;font-weight:700;text-transform:uppercase;letter-spacing:.07em;margin-bottom:.55rem">🌍 ODD · Agenda 2030 <span style="font-weight:400;opacity:.55;text-transform:none;font-size:.58rem">${semFicheData.selectedODD.length?semFicheData.selectedODD.length+' sélectionné'+(semFicheData.selectedODD.length>1?'s':''):'Sélectionnez ceux qui guident vos investissements'}</span></div>
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:.3rem;margin-bottom:1rem">
        ${[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17].map(n => {
          const m = ODD_META[n] || {c:'#888', l:'ODD '+n};
          const on = semFicheData.selectedODD.includes(n);
          return `<button onclick="semODDToggle(${n})" style="display:flex;align-items:center;gap:.4rem;padding:.3rem .5rem;border-radius:.5rem;border:2px solid ${on?m.c:m.c+'44'};background:${on?m.c+'18':'rgba(0,0,0,.015)'};cursor:pointer;transition:all .15s;text-align:left">
            <span style="width:22px;height:22px;border-radius:4px;background:${on?m.c:m.c+'55'};color:white;font-size:.64rem;font-weight:900;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background .15s">${n}</span>
            <span style="font-size:.6rem;font-weight:${on?700:400};color:${on?m.c:'#444'};line-height:1.2;transition:all .15s">${m.l}${on?' <span style="font-size:.55rem;opacity:.7">✓</span>':''}</span>
          </button>`;
        }).join('')}
      </div>
      `;
    semStarBubble('Choisissez vos cadres d\'impact et les ODD qui guident vos investissements…');
    semStarLights();
  } else {
    /* ── Étape « Trouver des projets à financer » (remplace le reporting) ── */
    // Temps d'attente : Deva « cherche » les projets à financer alignés
    // avant de les révéler (déclenché par le bouton « Trouver des projets »).
    if (!semFicheData._projetsReady) {
      renderDevaSearching(c, { title: 'Deva cherche tes projets', msgs: [
        'Analyse de tes axes d\'impact prioritaires…',
        'Exploration des lieux de la communauté…',
        'Sélection des projets à financer alignés…',
        'Estimation des besoins de financement…'
      ] });
      if (pub) pub.style.display = 'none';
      if (!window._semProjetsGenerating) {
        window._semProjetsGenerating = true;
        setTimeout(() => {
          window._semProjetsGenerating = false;
          clearInterval(window._creerSolMsgTimer);
          semFicheData._projetsReady = true;
          if (semFicheStep === 2) semFicheRenderStep();   // révèle les projets
        }, 2300);
      }
      return;
    }
    // Projets révélés
    const projets = semProjetsAFinancer();
    const fin = semFicheData._finances || [];
    const colFor = m => m >= 70 ? 'var(--fern)' : m >= 50 ? 'var(--amber)' : 'var(--sky)';
    c.innerHTML =
      '<div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.3rem">'
        +'<div style="font-size:.72rem;font-weight:700;color:var(--ink)">💰 Projets à financer</div>'
        +'<div style="margin-left:auto;font-size:.65rem;font-weight:700;background:rgba(58,110,140,.12);color:var(--sky);padding:.1rem .5rem;border-radius:100px">'+projets.length+' projet'+(projets.length>1?'s':'')+'</div>'
      +'</div>'
      +'<div style="font-size:.64rem;color:var(--moss);opacity:.75;margin-bottom:.9rem;line-height:1.55">Sélectionnés par Deva selon tes axes d\'impact. Clique sur « Détail » pour voir les quêtes à financer. <a onclick="semTrouverProjets()" style="color:var(--sky);cursor:pointer;text-decoration:underline">↻ Relancer</a></div>'
      + projets.map(p => {
          const col = colFor(p.match);
          const pct = p.objectif > 0 ? Math.round((p.montant / p.objectif) * 100) : 100;
          const isOpen = semFicheData._openProjet === p.idx;
          const hasFin = fin.includes(p.idx);
          const fq = semFicheData._financedQuetes || [];
          let panel = '';
          if (isOpen) {
            const quetes = semProjetQuetes(p.idx);
            panel = '<div style="margin-top:.6rem;border-top:1px solid rgba(46,102,66,.1);padding-top:.55rem">'
              +'<div style="font-size:.58rem;font-weight:700;color:var(--sky);text-transform:uppercase;letter-spacing:.06em;margin-bottom:.45rem">⚡ Quêtes à financer · '+quetes.length+'</div>'
              + (quetes.length ? quetes.map(q => {
                  return '<div style="display:flex;align-items:center;gap:.5rem;padding:.42rem .5rem;border-radius:8px;background:rgba(58,110,140,.04);margin-bottom:.32rem">'
                    +'<span style="font-size:.9rem;flex-shrink:0">'+q.ic+'</span>'
                    +'<div style="flex:1;min-width:0">'
                      +'<div style="font-size:.68rem;font-weight:600;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+q.titre+'</div>'
                      +'<div style="font-size:.57rem;color:var(--moss);opacity:.75">'+(q.duree?q.duree+' · ':'')+'<strong style="color:var(--amber);font-weight:800">'+q.restant+'€</strong> restant'+(q.esrs.length?' · '+q.esrs.map(e=>'ESRS '+e).join(' · '):'')+'</div>'
                    +'</div>'
                  +'</div>';
                }).join('') : '<div style="font-size:.62rem;color:var(--moss);opacity:.6;padding:.3rem 0">Aucune quête publiée pour ce lieu.</div>')
            +'</div>';
          }
          return '<div style="background:white;border:1px solid '+(isOpen?'rgba(58,110,140,.3)':'rgba(46,102,66,.12)')+';border-radius:var(--r-lg);padding:.75rem .85rem;margin-bottom:.5rem;transition:border-color .18s">'
            +'<div style="display:flex;align-items:center;gap:.7rem;margin-bottom:.5rem">'
              +'<div style="width:36px;height:36px;border-radius:9px;background:rgba(58,110,140,.1);display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0">'+(p.icon || '🏡')+'</div>'
              +'<div style="flex:1;min-width:0">'
                +'<div style="display:flex;align-items:center;gap:.4rem">'
                  +'<div style="font-size:.78rem;font-weight:700;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1">'+p.nom+(hasFin?' <span style="color:var(--fern);font-size:.62rem">✓</span>':'')+'</div>'
                  +'<span style="font-size:.6rem;font-weight:800;color:'+col+';background:'+col+'1a;padding:.1rem .4rem;border-radius:100px;flex-shrink:0">'+p.match+'% aligné</span>'
                +'</div>'
                +'<div style="font-size:.62rem;color:var(--moss);opacity:.7">'+p.type+' · '+p.ville+'</div>'
              +'</div>'
            +'</div>'
            +'<div style="height:5px;background:rgba(46,102,66,.08);border-radius:100px;overflow:hidden;margin-bottom:.3rem"><div style="height:100%;width:'+Math.min(pct,100)+'%;background:var(--amber);border-radius:100px"></div></div>'
            +'<div style="display:flex;align-items:center;justify-content:space-between;gap:.6rem">'
              +'<div style="font-size:.62rem;color:var(--moss);opacity:.75"><strong style="color:var(--amber);font-weight:800">'+p.restant+'€</strong> restant à financer</div>'
              +'<button onclick="semToggleProjet('+p.idx+')" style="font-size:.66rem;font-weight:700;padding:.35rem .8rem;border-radius:100px;background:'+(isOpen?'rgba(58,110,140,.12)':'var(--sky)')+';color:'+(isOpen?'var(--sky)':'white')+';border:'+(isOpen?'1px solid rgba(58,110,140,.3)':'none')+';cursor:pointer">'+(isOpen?'Masquer ▲':'Détail →')+'</button>'
            +'</div>'
            + panel
          +'</div>';
        }).join('');
    semStarFinal();
    semStarProjets(projets);   // affiche aussi les projets dans la constellation
  }
}

// Construit la liste des projets (lieux de la démo) à financer, classés par
// alignement avec les axes d'impact choisis par le semeur.
function semProjetsAFinancer() {
  const lieux = (typeof MAP_PLACES !== 'undefined') ? MAP_PLACES : [];
  const axes = semFicheData.axes || [];
  const AXE_TO_DIM = { climat:'Environnement', biodiversite:'Environnement', social:'Social', alimentation:'Éco. locale', economie:'Éco. locale', habitat:'Environnement' };
  const targetDims = new Set(axes.map(a => AXE_TO_DIM[a]).filter(Boolean));
  return lieux.map((l, idx) => {
    const dims = l.dims || [];
    let match;
    if (targetDims.size) {
      const hits = dims.filter(d => targetDims.has(d.l));
      match = hits.length ? Math.round(hits.reduce((s, d) => s + d.v, 0) / hits.length) : Math.max(40, (l.score || 60) - 25);
    } else { match = l.score || 60; }
    const objectif = 3000 + (idx % 5) * 1500;                       // déterministe : 3000–9000€
    const montant  = Math.round(objectif * (0.15 + ((l.score || 60) % 40) / 100));
    const restant  = Math.max(0, objectif - montant);
    return { idx, nom:l.nom, type:l.type, ville:l.ville, icon:l.icon, score:l.score, match, objectif, montant, restant };
  }).sort((a, b) => b.match - a.match);
}

// Relance la recherche depuis la liste révélée (lien « ↻ Relancer ») :
// réinitialise l'état → le rendu de l'étape rejoue l'attente Deva.
function semTrouverProjets() {
  semFicheData._projetsReady = false;
  semFicheData._openProjet = null;
  window._semProjetsGenerating = false;
  semFicheRenderStep();
}

// Quêtes à financer d'un projet (lieu) : dérivées de ses solutions, avec
// un besoin de financement déterministe par quête.
function semProjetQuetes(lieuIdx) {
  const l = (typeof MAP_PLACES !== 'undefined') ? MAP_PLACES[lieuIdx] : null;
  const sols = (l && l.fiche && l.fiche.solutions) || [];
  return sols.map((nom, j) => {
    const sol = (typeof SOLS !== 'undefined') ? SOLS.find(s => s.nom === nom) : null;
    if (!sol || !sol.quete) return null;
    const tok = sol.tok || 50;
    const objectif = 500 + tok * 8;                          // déterministe
    const montant  = Math.round(objectif * (0.1 + ((j * 17) % 35) / 100));
    const restant  = Math.max(0, objectif - montant);
    return {
      id: lieuIdx + '-' + j,
      titre: sol.quete.titre,
      ic: sol.img || '⚡',
      duree: sol.quete.duree || '',
      esrs: (sol.esrs || []).map(e => String(e).replace('ESRS ', '').trim()),
      objectif, montant, restant
    };
  }).filter(Boolean);
}

// Déplie / replie les quêtes à financer d'un projet.
function semToggleProjet(idx) {
  semFicheData._openProjet = (semFicheData._openProjet === idx) ? null : idx;
  semFicheRenderStep();
}

// Engage un financement sur une quête d'un projet depuis la fiche semeur.
function semFinancerQuete(qid, lieuIdx) {
  semFicheData._financedQuetes = semFicheData._financedQuetes || [];
  if (!semFicheData._financedQuetes.includes(qid)) semFicheData._financedQuetes.push(qid);
  semFicheData._finances = semFicheData._finances || [];
  if (!semFicheData._finances.includes(lieuIdx)) semFicheData._finances.push(lieuIdx);
  const l = (typeof MAP_PLACES !== 'undefined') ? MAP_PLACES[lieuIdx] : null;
  if (typeof mmBubble === 'function') {
    mmBubble('💰 ' + (semFicheData.nom || 'Ton organisation') + ' s\'engage à financer une quête de « ' + (l ? l.nom : 'ce projet') + ' » · preuve d\'impact ESRS générée 🌱');
  }
  semFicheRenderStep();
}

function semAxeToggle(id, btn) {
  const i = semFicheData.axes.indexOf(id);
  if (i >= 0) semFicheData.axes.splice(i, 1);
  else semFicheData.axes.push(id);
  semFicheRenderStep();
  semStarLights();
}

function semCadreToggle(id) {
  const i = semFicheData.selectedCadres.indexOf(id);
  if (i >= 0) semFicheData.selectedCadres.splice(i, 1);
  else semFicheData.selectedCadres.push(id);
  semFicheRenderStep();
}

function semCadreItemToggle(cadreId, itemIdx) {
  const typeData = SEM_IMPACT_BY_TYPE[semFicheData.type] || SEM_IMPACT_BY_TYPE['Fondation'];
  const cdr = typeData.cadres.find(c => c.id === cadreId);
  if (!cdr) return;
  const item = cdr.items[itemIdx];
  if (!semFicheData.selectedCadreItems[cadreId]) semFicheData.selectedCadreItems[cadreId] = [];
  const arr = semFicheData.selectedCadreItems[cadreId];
  const i = arr.indexOf(item);
  if (i >= 0) arr.splice(i, 1);
  else arr.push(item);
  semFicheRenderStep();
}

function semODDToggle(num) {
  const i = semFicheData.selectedODD.indexOf(num);
  if (i >= 0) semFicheData.selectedODD.splice(i, 1);
  else semFicheData.selectedODD.push(num);
  semFicheRenderStep();
}

function semKpiToggle(label) {
  const i = semFicheData.selectedKpis.indexOf(label);
  if (i >= 0) semFicheData.selectedKpis.splice(i, 1);
  else semFicheData.selectedKpis.push(label);
  semFicheRenderStep();
  semStarFinal();
}

function semFicheNext() { if (semFicheStep < 2) { if (semFicheStep === 1) semFicheData._projetsReady = false; /* « Trouver des projets » → rejoue l'attente Deva */ semFicheStep++; semFicheRenderStep(); } }
function semFichePrev() { if (semFicheStep > 0) { semFicheStep--; semFicheRenderStep(); } }

/* ── Constellation d'impact (mind-map financeur) ── */
function semSW() { const n=document.getElementById('sem-star-nodes'); return n?n.parentElement.offsetWidth:600; }
function semSH() { const n=document.getElementById('sem-star-nodes'); return n?n.parentElement.offsetHeight:400; }

function semStarBubble(t) { /* bulle Deva supprimée */ }

/* Inject CSS animations for constellation */
function semInjectStyles() {
  if (document.getElementById('sem-anim-style')) return;
  const s = document.createElement('style');
  s.id = 'sem-anim-style';
  s.textContent = `
    @keyframes starTwinkle{0%,100%{opacity:.25;transform:translate(-50%,-50%) scale(.7)}50%{opacity:1;transform:translate(-50%,-50%) scale(1)}}
    @keyframes orbitPulse{0%,100%{box-shadow:0 0 8px var(--orb-col,rgba(255,255,255,.4))}50%{box-shadow:0 0 22px var(--orb-col,rgba(255,255,255,.7)),0 0 40px var(--orb-col,rgba(255,255,255,.2))}}
    @keyframes centerBreathe{0%,100%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-50%,-50%) scale(1.07)}}
    @keyframes fadeSlideIn{from{opacity:0;transform:translate(-50%,-50%) scale(.3) rotate(-30deg)}to{opacity:1;transform:translate(-50%,-50%) scale(1) rotate(0)}}
    @keyframes lieuPop{from{opacity:0;transform:translate(-50%,-50%) scale(0)}to{opacity:1;transform:translate(-50%,-50%) scale(1)}}
    .sem-center-node{animation:centerBreathe 3.5s ease-in-out infinite!important}
    .sem-bg-star{position:absolute;width:4px;height:4px;border-radius:50%;transform:translate(-50%,-50%);pointer-events:none}
  `;
  document.head.appendChild(s);
}

const ZONE_STAR_COUNTS = { 'Ville':8, 'Département':16, 'Région':26, 'National':40 };
const ZONE_RADII     = { 'Ville':48, 'Département':72, 'Région':98, 'National':128 };
const FINANCEMENT_ICONS = { 'Numéraire':'💰', 'Mécénat':'🎁', 'Nature':'🌿', 'Subvention':'📋' };
const TYPE_ICONS = { 'Entreprise':'🏭','Fondation':'🌍','Association':'🤝','Collectivité':'🏛','Particulier':'🙋','default':'🌿' };

function semNodeAdd(id, html, x, y, col, sz, delay) {
  const existing = document.getElementById('sn-'+id);
  if (existing) { existing.style.left=x+'px'; existing.style.top=y+'px'; return existing; }
  const el = document.createElement('div');
  el.id = 'sn-'+id;
  const size = sz||44;
  el.style.cssText = `position:absolute;left:${x}px;top:${y}px;transform:translate(-50%,-50%) scale(.3) rotate(-20deg);width:${size}px;height:${size}px;border-radius:50%;background:${col||'rgba(255,255,255,.1)'};border:1.5px solid ${col||'rgba(255,255,255,.3)'};display:flex;align-items:center;justify-content:center;font-size:${size*0.36}px;cursor:pointer;opacity:0;box-shadow:0 0 ${size*.5}px ${col||'rgba(255,255,255,.2)'};`;
  el.innerHTML = html;
  document.getElementById('sem-star-nodes').appendChild(el);
  setTimeout(()=>requestAnimationFrame(() => {
    el.style.transition = 'opacity .5s, transform .5s cubic-bezier(.17,.67,.42,1.3)';
    el.style.opacity='1';
    el.style.transform='translate(-50%,-50%) scale(1) rotate(0)';
  }), delay||0);
  return el;
}

function semLineAdd(x1,y1,x2,y2,col,dash,delay) {
  if (delay) { setTimeout(()=>semLineAdd(x1,y1,x2,y2,col,dash), delay); return; }
  const svg=document.getElementById('sem-star-svg'); if(!svg) return;
  const len=Math.hypot(x2-x1,y2-y1);
  const l=document.createElementNS('http://www.w3.org/2000/svg','line');
  l.setAttribute('x1',x1);l.setAttribute('y1',y1);l.setAttribute('x2',x2);l.setAttribute('y2',y2);
  l.setAttribute('stroke',col||'rgba(255,255,255,.12)');
  l.setAttribute('stroke-width', dash?'1':'1.5');
  if(dash) l.setAttribute('stroke-dasharray','4,6');
  l.setAttribute('stroke-linecap','round');
  l.style.strokeDasharray=len+(dash?',6':'');
  l.style.strokeDashoffset=len;
  l.style.transition='stroke-dashoffset .7s ease';
  svg.appendChild(l);
  requestAnimationFrame(()=>{ l.style.strokeDashoffset='0'; });
}

function semDrawBgStars(count) {
  const nodes=document.getElementById('sem-star-nodes');
  document.querySelectorAll('.sem-bg-star').forEach(e=>e.remove());
  const W=semSW(), H=semSH();
  const cx=W/2, cy=H/2;
  for(let i=0;i<count;i++){
    const el=document.createElement('div');
    el.className='sem-bg-star';
    const angle=Math.random()*2*Math.PI;
    const dist=70+Math.random()*(Math.min(W,H)*.42);
    const x=cx+dist*Math.cos(angle);
    const y=cy+dist*Math.sin(angle);
    const sz=.8+Math.random()*2.5;
    const delay=Math.random()*2000;
    const dur=1.5+Math.random()*2.5;
    el.style.cssText+=`left:${x}px;top:${y}px;width:${sz}px;height:${sz}px;background:rgba(58,110,140,${.12+Math.random()*.3});animation:starTwinkle ${dur}s ${delay}ms ease-in-out infinite;`;
    nodes.appendChild(el);
  }
}

function semZoneRing() {
  const svg = document.getElementById('sem-star-svg');
  if (!svg) return;
  document.getElementById('sem-zone-ring')?.remove();
  document.getElementById('sem-zone-label')?.remove();
  if (!semFicheData.zone) return;
  const W=semSW(), H=semSH(), cx=W/2, cy=H/2;
  const r = ZONE_RADII[semFicheData.zone] || 72;
  const circ = 2*Math.PI*r;
  const circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
  circle.id='sem-zone-ring';
  circle.setAttribute('cx',cx); circle.setAttribute('cy',cy); circle.setAttribute('r',r);
  circle.setAttribute('fill','none');
  circle.setAttribute('stroke','rgba(58,110,140,.4)');
  circle.setAttribute('stroke-width','1.5');
  circle.setAttribute('stroke-dasharray','5 8');
  circle.style.cssText=`stroke-dashoffset:${circ};transition:stroke-dashoffset 1s ease;`;
  svg.appendChild(circle);
  requestAnimationFrame(()=>{ circle.style.strokeDashoffset='0'; });
  /* Label zone au sommet de l'anneau */
  const nodes = document.getElementById('sem-star-nodes');
  if (nodes) {
    const lbl = document.createElement('div');
    lbl.id='sem-zone-label';
    lbl.style.cssText=`position:absolute;left:${cx}px;top:${cy-r-14}px;transform:translate(-50%,-50%) scale(.5);opacity:0;padding:.18rem .55rem;border-radius:100px;border:1px solid rgba(58,110,140,.4);background:rgba(58,110,140,.1);color:#3a6e8c;font-size:.55rem;font-weight:700;white-space:nowrap;transition:opacity .4s .6s,transform .4s .6s cubic-bezier(.17,.67,.42,1.3);`;
    lbl.textContent = semFicheData.zone;
    nodes.appendChild(lbl);
    requestAnimationFrame(()=>{ lbl.style.opacity='1'; lbl.style.transform='translate(-50%,-50%) scale(1)'; });
  }
}

function semFinancementBadge() {
  document.getElementById('sn-financement')?.remove();
  if (!semFicheData.typeFinancement) return;
  const W=semSW(), H=semSH(), cx=W/2, cy=H/2;
  const ic = FINANCEMENT_ICONS[semFicheData.typeFinancement] || '💼';
  const angle = Math.PI * 0.5; /* bas */
  const dist = 95;
  const bx = cx + dist*Math.cos(angle);
  const by = cy + dist*Math.sin(angle);
  semLineAdd(cx, cy, bx, by, 'rgba(58,110,140,.3)', true);
  const n = semNodeAdd('financement',
    `<div style="display:flex;flex-direction:column;align-items:center;gap:1px">
      <span style="font-size:1rem">${ic}</span>
      <span style="font-size:.52rem;font-weight:700;color:#1a3a5a">${semFicheData.typeFinancement}</span>
    </div>`,
    bx, by, 'rgba(58,110,140,.2)', 52, 0);
  if (n) { n.style.borderColor='rgba(58,110,140,.5)'; n.style.boxShadow='0 0 14px rgba(58,110,140,.25)'; }
}

function semCenterHtml() {
  const ic = TYPE_ICONS[semFicheData.type]||TYPE_ICONS.default;
  const loc = semFicheData.localisation ? `<span style="font-size:.52rem;opacity:.7;margin-top:1px">📍 ${semFicheData.localisation}</span>` : '';
  return `<div style="display:flex;flex-direction:column;align-items:center;gap:2px">
    <span style="font-size:1.4rem">${ic}</span>
    <span style="font-size:.6rem;font-weight:800;color:#1a3a5a;text-align:center;max-width:80px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${semFicheData.nom||'Organisation'}</span>
    ${loc}
  </div>`;
}

function semStarInit() {
  semInjectStyles();
  const nodes=document.getElementById('sem-star-nodes');
  const svg=document.getElementById('sem-star-svg');
  if(!nodes||!svg) return;
  nodes.innerHTML=''; svg.innerHTML='';
  const W=semSW(),H=semSH(),cx=W/2,cy=H/2;
  semDrawBgStars(8);
  const c = semNodeAdd('center', semCenterHtml(), cx, cy, 'rgba(58,110,140,.18)', 72);
  if(c){ c.classList.add('sem-center-node'); c.style.background='radial-gradient(circle at 35% 35%,rgba(80,150,200,.22),rgba(58,110,140,.18))'; c.style.borderColor='rgba(58,110,140,.6)'; c.style.color='#1a3a5a'; c.style.boxShadow='0 0 28px rgba(58,110,140,.2),inset 0 0 14px rgba(58,110,140,.08)'; }
  semStarBubble('Définissez votre organisation, les étoiles s\'allumeront selon votre zone d\'action…');
}

function semStarUpdateCenter() {
  const el = document.getElementById('sn-center');
  if (el) el.innerHTML = semCenterHtml();
}

function semStarLights() {
  const svg=document.getElementById('sem-star-svg');
  const nodes=document.getElementById('sem-star-nodes');
  if(!svg||!nodes) return;
  svg.innerHTML='';
  document.querySelectorAll('[id^="sn-ax-"],[id^="sn-lieu-"],[id^="sn-odd-"],[id="sn-financement"],[id="sem-zone-label"]').forEach(e=>e.remove());
  /* Update center + re-draw bg stars for zone */
  semStarUpdateCenter();
  const starCount = ZONE_STAR_COUNTS[semFicheData.zone] || 15;
  semDrawBgStars(starCount);
  semZoneRing();
  semFinancementBadge();

  const W=semSW(),H=semSH(),cx=W/2,cy=H/2;
  /* ── Secteur HAUT : Axes d'impact ── */
  const axes = semFicheData.axes;
  const axAngles = [];
  const axSpan = axes.length>1 ? 0.62 : 0;
  axes.forEach((aid,i) => {
    const a = SEM_AXES.find(x=>x.id===aid); if(!a) return;
    const angle = -Math.PI/2 + (i-(axes.length-1)/2)*axSpan;
    axAngles.push(angle);
    const r = Math.min(W,H)*.28;
    const ax=cx+r*Math.cos(angle), ay=cy+r*Math.sin(angle);
    const delay = i*120;
    semLineAdd(cx,cy,ax,ay,a.col+'cc',false,delay);
    setTimeout(()=>{
      const n=semNodeAdd('ax-'+aid,
        `<div style="display:flex;flex-direction:column;align-items:center;gap:1px">
          <span style="font-size:1.1rem">${a.ic}</span>
          <span style="font-size:.58rem;font-weight:700;color:#1a2a3a">${a.label}</span>
        </div>`,
        ax,ay,a.col+'88',56,0);
      if(n){ n.style.boxShadow=`0 0 18px ${a.col}66,0 0 36px ${a.col}22`; n.style.setProperty('--orb-col',a.col); n.style.animation='orbitPulse 2.5s ease-in-out infinite'; }
    }, delay+60);
  });
  semSectorArc(axAngles, Math.min(W,H)*.28+18, 'AXES D\'IMPACT', Math.min(W,H)*.28+34, '#3a6e8c');

  /* ── Secteur GAUCHE : ODD sélectionnés ── */
  semStarODD();
}

function semStarFinal() {
  semStarLights();   // axes (haut) + ODD (gauche) + financement (bas) ; projets ajoutés par semStarProjets
}

// Affiche les projets à financer comme nœuds de la constellation (anneau
// externe), reliés au centre, colorés selon l'alignement.
function semStarProjets(projets) {
  const nodes = document.getElementById('sem-star-nodes');
  const svg   = document.getElementById('sem-star-svg');
  if (!nodes || !svg) return;
  document.querySelectorAll('[id^="sn-proj-"]').forEach(e => e.remove());
  const list = (projets || []).slice(0, 6);
  if (!list.length) return;
  const W = semSW(), H = semSH(), cx = W / 2, cy = H / 2;
  const R = Math.min(W, H) * 0.4;
  const fin = semFicheData._finances || [];
  const colFor = m => m >= 70 ? '#4a8c5c' : m >= 50 ? '#c8732a' : '#3a6e8c';
  /* Secteur DROITE : projets fanés autour de l'horizontale */
  const projAngles = [];
  const pSpan = list.length > 1 ? Math.min(0.4, 2.0 / list.length) : 0;
  list.forEach((p, i) => {
    const angle = (i - (list.length - 1) / 2) * pSpan;
    projAngles.push(angle);
    const x = cx + R * Math.cos(angle), y = cy + R * Math.sin(angle);
    const financed = fin.includes(p.idx);
    const col = financed ? '#4a8c5c' : colFor(p.match);
    const delay = 500 + i * 120;
    semLineAdd(cx, cy, x, y, col + '55', true, delay);
    setTimeout(() => {
      const el = document.createElement('div');
      el.id = 'sn-proj-' + p.idx;
      el.title = p.nom + ' · ' + p.match + '% aligné' + (financed ? ' · engagé' : '');
      el.style.cssText = `position:absolute;left:${x}px;top:${y}px;transform:translate(-50%,-50%) scale(0);display:flex;align-items:center;gap:.28rem;padding:.24rem .5rem;border-radius:100px;border:1.5px solid ${col};background:rgba(255,255,255,.92);color:#1a3a5a;font-size:.56rem;font-weight:700;white-space:nowrap;opacity:0;box-shadow:0 0 14px ${col}44;transition:opacity .4s,transform .4s cubic-bezier(.17,.67,.42,1.3);z-index:5`;
      el.innerHTML = `<span style="font-size:.8rem">${p.icon || '🏡'}</span><span>${p.nom}</span><span style="color:${col};font-weight:800">${financed ? '✓' : p.match + '%'}</span>`;
      nodes.appendChild(el);
      requestAnimationFrame(() => { el.style.opacity = '1'; el.style.transform = 'translate(-50%,-50%) scale(1)'; });
    }, delay + 200);
  });
  semSectorArc(projAngles, R + 22, 'PROJETS À FINANCER', R + 40, '#3a6e8c');
}

// Arc + libellé d'un groupe de la constellation (classement type bâtisseur).
function semSectorArc(angles, r, text, labelR, col) {
  const svg = document.getElementById('sem-star-svg');
  if (!svg || !angles.length) return;
  const W = semSW(), H = semSH(), cx = W / 2, cy = H / 2;
  if (angles.length > 1) {
    const a0 = Math.min(...angles), a1 = Math.max(...angles);
    const x1 = cx + r * Math.cos(a0), y1 = cy + r * Math.sin(a0);
    const x2 = cx + r * Math.cos(a1), y2 = cy + r * Math.sin(a1);
    const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    p.setAttribute('d', `M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`);
    p.setAttribute('fill', 'none'); p.setAttribute('stroke', col + '33'); p.setAttribute('stroke-width', '1.5');
    svg.appendChild(p);
  }
  const mid = angles.reduce((s, a) => s + a, 0) / angles.length;
  const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  t.setAttribute('x', cx + labelR * Math.cos(mid)); t.setAttribute('y', cy + labelR * Math.sin(mid));
  t.setAttribute('text-anchor', 'middle'); t.setAttribute('dominant-baseline', 'middle');
  t.setAttribute('fill', col + '99'); t.setAttribute('font-size', '8'); t.setAttribute('font-weight', '700');
  t.setAttribute('font-family', 'Satoshi,sans-serif'); t.setAttribute('letter-spacing', '1.5');
  t.textContent = text; svg.appendChild(t);
}

// Affiche les ODD sélectionnés comme nœuds numérotés (secteur GAUCHE).
function semStarODD() {
  const nodes = document.getElementById('sem-star-nodes');
  const svg = document.getElementById('sem-star-svg');
  if (!nodes || !svg) return;
  document.querySelectorAll('[id^="sn-odd-"]').forEach(e => e.remove());
  const odd = semFicheData.selectedODD || [];
  if (!odd.length) return;
  const W = semSW(), H = semSH(), cx = W / 2, cy = H / 2;
  const R = Math.min(W, H) * 0.42;
  const base = Math.PI;                                  // secteur GAUCHE
  const span = odd.length > 1 ? Math.min(0.34, 2.0 / odd.length) : 0;
  const angles = [];
  odd.forEach((n, i) => {
    const angle = base + (i - (odd.length - 1) / 2) * span;
    angles.push(angle);
    const x = cx + R * Math.cos(angle), y = cy + R * Math.sin(angle);
    const m = (typeof ODD_META !== 'undefined' && ODD_META[n]) ? ODD_META[n] : { c: '#888', l: 'ODD ' + n };
    const delay = 550 + i * 90;
    semLineAdd(cx, cy, x, y, m.c + '55', true, delay);
    setTimeout(() => {
      const el = document.createElement('div');
      el.id = 'sn-odd-' + n;
      el.title = 'ODD ' + n + ' · ' + m.l;
      el.style.cssText = `position:absolute;left:${x}px;top:${y}px;transform:translate(-50%,-50%) scale(0);width:30px;height:30px;border-radius:7px;background:${m.c};color:#fff;display:flex;align-items:center;justify-content:center;font-size:.72rem;font-weight:900;opacity:0;box-shadow:0 0 12px ${m.c}66;transition:opacity .4s,transform .4s cubic-bezier(.17,.67,.42,1.3);z-index:5`;
      el.textContent = n;
      nodes.appendChild(el);
      requestAnimationFrame(() => { el.style.opacity = '1'; el.style.transform = 'translate(-50%,-50%) scale(1)'; });
    }, delay + 130);
  });
  semSectorArc(angles, R + 22, 'ODD', R + 40, '#3f7e44');
}

/* ─── ESPACES & CAPACITÉS ─── */

const FONCTIONS_ESPACE = [
  // ── Activités & usages ──
  { id:'cuisine',        ic:'🍳', label:'Cuisine',              domaine:'Alimentation',   dim:'social',        groupe:'activite' },
  { id:'cafe',           ic:'☕', label:'Café / Bar',           domaine:'Alimentation',   dim:'eco_locale',    groupe:'activite' },
  { id:'cantine',        ic:'🥗', label:'Cantine / Resto',      domaine:'Alimentation',   dim:'social',        groupe:'activite' },
  { id:'coworking',      ic:'💻', label:'Coworking',            domaine:'Travail',         dim:'eco_locale',    groupe:'activite' },
  { id:'reunion',        ic:'🗣️', label:'Salle de réunion',    domaine:'Travail',         dim:'gouvernance',   groupe:'activite' },
  { id:'atelier',        ic:'🔧', label:'Atelier',              domaine:'Fabrication',     dim:'eco_locale',    groupe:'activite' },
  { id:'fablab',         ic:'⚙️', label:'FabLab',              domaine:'Fabrication',     dim:'eco_locale',    groupe:'activite' },
  { id:'scene',          ic:'🎭', label:'Scène / Événements',   domaine:'Culture',         dim:'social',        groupe:'activite' },
  { id:'expo',           ic:'🖼️', label:'Espace expo',         domaine:'Culture',         dim:'social',        groupe:'activite' },
  { id:'boutique',       ic:'🛍️', label:'Boutique',            domaine:'Commerce',        dim:'eco_locale',    groupe:'activite' },
  { id:'biblio',         ic:'📚', label:'Bibliothèque',         domaine:'Formation',       dim:'social',        groupe:'activite' },
  { id:'formation',      ic:'🎓', label:'Salle de formation',   domaine:'Formation',       dim:'social',        groupe:'activite' },
  { id:'jardin',         ic:'🌿', label:'Jardin',               domaine:'Nature',          dim:'environnement', groupe:'activite' },
  { id:'serre',          ic:'🌱', label:'Serre',                domaine:'Nature',          dim:'environnement', groupe:'activite' },
  { id:'compost',        ic:'♻️', label:'Compost / Déchets',   domaine:'Nature',          dim:'environnement', groupe:'activite' },
  { id:'hebergement',    ic:'🛏️', label:'Hébergement',         domaine:'Habitat',         dim:'social',        groupe:'activite' },
  { id:'sport',          ic:'🏃', label:'Sport / Bien-être',   domaine:'Santé',           dim:'social',        groupe:'activite' },
  { id:'meditation',     ic:'🧘', label:'Méditation / Yoga',   domaine:'Santé',           dim:'social',        groupe:'activite' },
  { id:'stockage',       ic:'📦', label:'Stockage',             domaine:'Logistique',      dim:'eco_locale',    groupe:'activite' },
  { id:'autre',          ic:'✨', label:'Autre',                domaine:'Autre',           dim:'social',        groupe:'activite' },
  // ── Fonctionnement du lieu ──
  { id:'elec_gestion',   ic:'⚡', label:'Électricité',          domaine:'Fonctionnement',  dim:'environnement', groupe:'gestion' },
  { id:'renouv_prod',    ic:'☀️', label:'Énergie renouvelable', domaine:'Fonctionnement',  dim:'environnement', groupe:'gestion' },
  { id:'therm_gestion',  ic:'🌡️', label:'Chauffage / Thermique',domaine:'Fonctionnement', dim:'environnement', groupe:'gestion' },
  { id:'eau_gestion',    ic:'💧', label:'Eau',                  domaine:'Fonctionnement',  dim:'environnement', groupe:'gestion' },
  { id:'ecoconstruct',   ic:'🏗️', label:'Éco-construction',    domaine:'Fonctionnement',  dim:'environnement', groupe:'gestion' },
  { id:'dechets_gestion',ic:'🗑️', label:'Gestion des déchets', domaine:'Fonctionnement',  dim:'environnement', groupe:'gestion' },
  { id:'mobilite',       ic:'🚲', label:'Mobilité / Transports',domaine:'Fonctionnement',  dim:'environnement', groupe:'gestion' },
  { id:'gouvernance',    ic:'⚖️', label:'Gouvernance / Admin',  domaine:'Fonctionnement',  dim:'gouvernance',   groupe:'gestion' },
  { id:'numerique',      ic:'📡', label:'Numérique / Réseau',   domaine:'Fonctionnement',  dim:'eco_locale',    groupe:'gestion' },
];

const ACCES_LABELS = { libre:'<span style="color:#22c55e;font-size:.75em">●</span> Libre', reservation:'📅 Réservation', membres:'🔑 Membres' };

const FLUX_CATALOG = [
  { id:'elec',       ic:'⚡', label:'Électricité' },
  { id:'therm',      ic:'🔥', label:'Énergie thermique' },
  { id:'renouv',     ic:'☀️', label:'Énergie renouvelable' },
  { id:'eau',        ic:'💧', label:'Eau potable' },
  { id:'eau_pluie',  ic:'🌊', label:'Eau de pluie' },
  { id:'alim_brut',  ic:'🥦', label:'Matières alimentaires' },
  { id:'repas',      ic:'🍱', label:'Repas / Plats cuisinés' },
  { id:'biomasse',   ic:'🌿', label:'Biomasse / Végétaux' },
  { id:'compost',    ic:'🌱', label:'Compost / Fertilisants' },
  { id:'materiaux',  ic:'♻️', label:'Matériaux recyclés' },
  { id:'dechets',    ic:'🗑️', label:'Déchets' },
  { id:'matieres',   ic:'📦', label:'Matières premières' },
  { id:'services',   ic:'💼', label:'Services / Prestations' },
  { id:'savoir',     ic:'🎓', label:'Savoir / Formation' },
  { id:'revenus',    ic:'💰', label:'Revenus / Ventes' },
  { id:'biodiv',     ic:'🐝', label:'Biodiversité' },
  { id:'benevolat',  ic:'🤝', label:'Main d\'œuvre / Bénévolat' },
  { id:'num',        ic:'💻', label:'Données / Numérique' },
];

let ficheEspaces = [];
let _espaceContext = 'fiche'; // 'fiche' | 'wizard'
let _fnPickSelected = []; // ids in selection order
let _fluxInputSelected = [];
let _fluxOutputSelected = [];
let _espaceActivites = [];

function ficheOpenEspaceModal(idx) {
  _espaceContext = 'fiche';
  const modal = document.getElementById('espace-modal');
  const titleEl = document.getElementById('espace-modal-title');
  document.getElementById('espace-edit-idx').value = idx !== null ? idx : '';
  titleEl.textContent = idx !== null ? 'Modifier l\'espace' : 'Nouvel espace';

  const esp = idx !== null ? ficheEspaces[idx] : null;
  document.getElementById('espace-nom').value = esp ? esp.nom : '';
  document.getElementById('espace-capacite').value = esp ? (esp.capacite || '') : '';
  document.getElementById('espace-surface').value = esp ? (esp.surface || '') : '';
  document.getElementById('espace-acces').value = esp ? (esp.acces || 'libre') : 'libre';
  document.getElementById('espace-notes').value = esp ? (esp.notes || '') : '';
  document.getElementById('espace-responsable').value = esp ? (esp.responsable || '') : '';

  // Phase
  const phase = esp ? (esp.phase || '') : '';
  document.getElementById('espace-phase').value = phase;
  document.querySelectorAll('#espace-phase-picker .fiche-tag').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.phase === phase);
  });

  _fnPickSelected = esp ? [...esp.fonctions] : [];
  _fluxInputSelected  = esp ? [...(esp.inputs  || [])] : [];
  _fluxOutputSelected = esp ? [...(esp.outputs || [])] : [];
  _espaceActivites    = esp ? [...(esp.activites || [])] : [];
  ficheRenderFnPicker();
  ficheRenderFluxPicker('input');
  ficheRenderFluxPicker('output');
  ficheRenderActivitesPicker();
  const actInput = document.getElementById('espace-activites-input');
  if (actInput) actInput.value = '';
  const actDrop = document.getElementById('espace-activites-suggestions');
  if (actDrop) actDrop.style.display = 'none';
  modal.style.display = 'flex';
  document.getElementById('espace-nom').focus();
}

function ficheCloseEspaceModal() {
  document.getElementById('espace-modal').style.display = 'none';
}

function ficheSelectPhase(btn) {
  document.querySelectorAll('#espace-phase-picker .fiche-tag').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('espace-phase').value = btn.dataset.phase;
}

/* Toutes les activités à plat pour l'autocomplétion */
const ACTIVITES_FLAT = (typeof ACTIVITES !== 'undefined')
  ? ACTIVITES.flatMap(cat => cat.items)
  : [];

let _actSuggIdx = -1;

function ficheRenderActivitesPicker() {
  // Rendu des tags sélectionnés
  const tags = document.getElementById('espace-activites-tags');
  if (!tags) return;
  tags.innerHTML = _espaceActivites.map(a =>
    `<span class="esp-tag sel" style="display:inline-flex;align-items:center;gap:.3rem">
       ${a}
       <button onclick="espActiviteRemove('${a.replace(/'/g,"\\'")}');event.stopPropagation()"
         style="background:none;border:none;cursor:pointer;font-size:.75rem;color:inherit;opacity:.6;padding:0;line-height:1">✕</button>
     </span>`
  ).join('');
}

function espActiviteAutocomplete(val) {
  _actSuggIdx = -1;
  const drop = document.getElementById('espace-activites-suggestions');
  if (!drop) return;
  const q = val.trim().toLowerCase();
  if (!q) { drop.style.display = 'none'; return; }

  // Cherche dans le catalogue + accepte toute saisie libre
  const matches = ACTIVITES_FLAT.filter(a =>
    a.toLowerCase().includes(q) && !_espaceActivites.includes(a)
  ).slice(0, 8);

  // Ajoute la saisie libre si elle ne correspond à rien d'exact
  const custom = val.trim();
  const showCustom = custom.length > 1 && !ACTIVITES_FLAT.some(a => a.toLowerCase() === q) && !_espaceActivites.includes(custom);

  if (!matches.length && !showCustom) { drop.style.display = 'none'; return; }

  drop.innerHTML = [
    ...matches.map((a, i) =>
      `<div class="act-sugg-item" data-idx="${i}" onmousedown="espActiviteAdd('${a.replace(/'/g,"\\'")}');event.preventDefault()"
        style="padding:.45rem .75rem;cursor:pointer;font-size:.72rem;color:var(--ink)">${highlightMatch(a, q)}</div>`
    ),
    ...(showCustom ? [`<div class="act-sugg-item act-sugg-free" data-idx="${matches.length}" onmousedown="espActiviteAdd('${custom.replace(/'/g,"\\'")}');event.preventDefault()"
      style="padding:.45rem .75rem;cursor:pointer;font-size:.72rem;color:var(--fern);border-top:1px solid rgba(46,102,66,.08)">+ Ajouter « ${custom} »</div>`] : [])
  ].join('');

  drop.style.display = 'block';
}

function highlightMatch(text, q) {
  const idx = text.toLowerCase().indexOf(q);
  if (idx === -1) return text;
  return text.slice(0, idx) + `<strong>${text.slice(idx, idx + q.length)}</strong>` + text.slice(idx + q.length);
}

function espActiviteKeydown(e) {
  const drop = document.getElementById('espace-activites-suggestions');
  const items = drop ? drop.querySelectorAll('.act-sugg-item') : [];
  if (!drop || drop.style.display === 'none') {
    if (e.key === 'Enter' || e.key === ',') {
      const val = e.target.value.trim().replace(/,$/, '');
      if (val) { espActiviteAdd(val); e.preventDefault(); }
    }
    return;
  }
  if (e.key === 'ArrowDown') {
    _actSuggIdx = Math.min(_actSuggIdx + 1, items.length - 1);
    items.forEach((el, i) => el.style.background = i === _actSuggIdx ? 'rgba(46,102,66,.08)' : '');
    e.preventDefault();
  } else if (e.key === 'ArrowUp') {
    _actSuggIdx = Math.max(_actSuggIdx - 1, -1);
    items.forEach((el, i) => el.style.background = i === _actSuggIdx ? 'rgba(46,102,66,.08)' : '');
    e.preventDefault();
  } else if ((e.key === 'Enter' || e.key === ',') && _actSuggIdx >= 0) {
    items[_actSuggIdx]?.dispatchEvent(new MouseEvent('mousedown'));
    e.preventDefault();
  } else if (e.key === 'Enter' && _actSuggIdx === -1) {
    const val = e.target.value.trim();
    if (val) { espActiviteAdd(val); e.preventDefault(); }
  } else if (e.key === 'Escape') {
    drop.style.display = 'none';
  }
}

function espActiviteAdd(act) {
  const a = act.trim();
  if (!a || _espaceActivites.includes(a)) return;
  _espaceActivites.push(a);
  const input = document.getElementById('espace-activites-input');
  if (input) input.value = '';
  const drop = document.getElementById('espace-activites-suggestions');
  if (drop) drop.style.display = 'none';
  ficheRenderActivitesPicker();
}

function espActiviteRemove(act) {
  const i = _espaceActivites.indexOf(act);
  if (i !== -1) _espaceActivites.splice(i, 1);
  ficheRenderActivitesPicker();
}

// Fermer les suggestions si clic ailleurs
document.addEventListener('click', e => {
  const drop = document.getElementById('espace-activites-suggestions');
  if (drop && !e.target.closest('#espace-activites-input') && !e.target.closest('#espace-activites-suggestions')) {
    drop.style.display = 'none';
  }
});

function ficheRenderFnPicker() {
  const picker = document.getElementById('fn-picker');
  const groupLabel = { activite: 'Activités & usages', gestion: 'Fonctionnement du lieu' };
  const groups = ['activite', 'gestion'];
  picker.innerHTML = groups.map(g => {
    const fns = FONCTIONS_ESPACE.filter(fn => fn.groupe === g);
    return `<div style="font-size:.6rem;font-weight:700;color:var(--moss);opacity:.55;text-transform:uppercase;letter-spacing:.08em;margin:${g==='activite'?'0':'.6rem'} 0 .3rem">${groupLabel[g]}</div>
      <div style="display:flex;flex-wrap:wrap;gap:.3rem;margin-bottom:.15rem">${fns.map(fn => {
        const pos = _fnPickSelected.indexOf(fn.id);
        let cls = 'fn-pick-btn';
        if (pos === 0) cls += ' selected';
        else if (pos > 0) cls += ' selected-secondary';
        return `<button class="${cls}" onclick="fntoggle('${fn.id}')">${fn.ic} ${fn.label}</button>`;
      }).join('')}</div>`;
  }).join('');
}

function fntoggle(id) {
  const pos = _fnPickSelected.indexOf(id);
  if (pos === -1) {
    if (_fnPickSelected.length >= 3) return; // max 3
    _fnPickSelected.push(id);
  } else {
    _fnPickSelected.splice(pos, 1);
  }
  ficheRenderFnPicker();
}

function ficheRenderFluxPicker(type) {
  const arr = type === 'input' ? _fluxInputSelected : _fluxOutputSelected;
  const selCls = type === 'input' ? 'sel-input' : 'sel-output';
  const picker = document.getElementById(`flux-${type}-picker`);
  if (!picker) return;
  picker.innerHTML = FLUX_CATALOG.map(f => {
    const active = arr.includes(f.id);
    const cls = `fn-pick-btn${active ? ' ' + selCls : ''}`;
    return `<button class="${cls}" onclick="fluxToggle('${type}','${f.id}')">${f.ic} ${f.label}</button>`;
  }).join('');
}

function fluxToggle(type, id) {
  const arr = type === 'input' ? _fluxInputSelected : _fluxOutputSelected;
  const pos = arr.indexOf(id);
  if (pos === -1) arr.push(id);
  else arr.splice(pos, 1);
  ficheRenderFluxPicker(type);
}

function ficheSaveEspace() {
  const nom = document.getElementById('espace-nom').value.trim();
  if (!nom) { document.getElementById('espace-nom').focus(); return; }
  const esp = {
    nom,
    fonctions: [..._fnPickSelected],
    capacite: document.getElementById('espace-capacite').value || '',
    surface:  document.getElementById('espace-surface').value || '',
    acces:    document.getElementById('espace-acces').value,
    notes:    document.getElementById('espace-notes').value.trim(),
    inputs:       [..._fluxInputSelected],
    outputs:      [..._fluxOutputSelected],
    activites:    [..._espaceActivites],
    responsable:  document.getElementById('espace-responsable').value.trim(),
    phase:        document.getElementById('espace-phase').value || '',
  };
  const idxRaw = document.getElementById('espace-edit-idx').value;
  const list = _espaceContext === 'wizard' ? cData.espacesData : ficheEspaces;
  if (idxRaw !== '') {
    list[parseInt(idxRaw)] = esp;
  } else {
    list.push(esp);
  }
  ficheCloseEspaceModal();
  if (_espaceContext === 'wizard') {
    creerRenderEspaces();
  } else {
    ficheRenderEspaces();
    ficheSolsByEspace = {};
    setTimeout(ficheMmRender, 80);
  }
}

function ficheRemoveEspace(idx) {
  ficheEspaces.splice(idx, 1);
  ficheSolsByEspace = {};
  ficheRenderEspaces();
  setTimeout(ficheMmRender, 80);
}

function creerOpenEspaceModal(idx) {
  _espaceContext = 'wizard';
  document.getElementById('espace-edit-idx').value = idx !== null ? idx : '';
  document.getElementById('espace-modal-title').textContent = idx !== null ? "Modifier l'espace" : 'Nouvel espace';
  const esp = idx !== null ? cData.espacesData[idx] : null;
  document.getElementById('espace-nom').value = esp ? esp.nom : '';
  document.getElementById('espace-capacite').value = esp ? (esp.capacite || '') : '';
  document.getElementById('espace-surface').value = esp ? (esp.surface || '') : '';
  document.getElementById('espace-acces').value = esp ? (esp.acces || 'libre') : 'libre';
  document.getElementById('espace-notes').value = esp ? (esp.notes || '') : '';
  _fnPickSelected = esp ? [...esp.fonctions] : [];
  _fluxInputSelected  = esp ? [...(esp.inputs  || [])] : [];
  _fluxOutputSelected = esp ? [...(esp.outputs || [])] : [];
  _espaceActivites    = esp ? [...(esp.activites || [])] : [];
  ficheRenderFnPicker();
  ficheRenderFluxPicker('input');
  ficheRenderFluxPicker('output');
  ficheRenderActivitesPicker();
  const actInput2 = document.getElementById('espace-activites-input');
  if (actInput2) actInput2.value = '';
  const actDrop2 = document.getElementById('espace-activites-suggestions');
  if (actDrop2) actDrop2.style.display = 'none';
  document.getElementById('espace-modal').style.display = 'flex';
  document.getElementById('espace-nom').focus();
}

function creerRemoveEspace(idx) {
  cData.espacesData.splice(idx, 1);
  creerRenderEspaces();
}

function creerRenderEspaces() {
  mmEspacesData();
  const list = document.getElementById('creer-espace-list');
  if (!list) return;
  const empty = document.getElementById('creer-espace-empty');
  Array.from(list.querySelectorAll('.espace-card')).forEach(el => el.remove());
  if (cData.espacesData.length === 0) {
    if (empty) empty.style.display = '';
    return;
  }
  if (empty) empty.style.display = 'none';
  cData.espacesData.forEach((esp, idx) => {
    const card = document.createElement('div');
    card.className = 'espace-card';
    const chipsHtml = esp.fonctions.length
      ? esp.fonctions.map((fid, i) => {
          const fn = FONCTIONS_ESPACE.find(f => f.id === fid);
          if (!fn) return '';
          return `<span class="espace-fn-chip${i === 0 ? ' primary' : ''}">${fn.ic} ${fn.label}</span>`;
        }).join('')
      : '<span class="espace-fn-chip" style="opacity:.45">Sans fonction</span>';
    const metaItems = [];
    const PHASE_LABELS = { idee:'💭 Idée', conception:'📐 Conception', chantier:'🏗 Chantier', operationnel:'🌿 Opérationnel' };
    if (esp.phase)    metaItems.push(`<span class="espace-meta-item" style="font-weight:600;color:var(--fern)">${PHASE_LABELS[esp.phase] || esp.phase}</span>`);
    if (esp.capacite) metaItems.push(`<span class="espace-meta-item">👥 <strong>${esp.capacite}</strong> pers.</span>`);
    if (esp.surface)  metaItems.push(`<span class="espace-meta-item">📐 <strong>${esp.surface}</strong> m²</span>`);
    if (esp.acces)    metaItems.push(`<span class="espace-meta-item">${ACCES_LABELS[esp.acces] || esp.acces}</span>`);
    const inputChips = (esp.inputs || []).map(fid => {
      const f = FLUX_CATALOG.find(x => x.id === fid);
      return f ? `<span class="flux-chip input">${f.ic} ${f.label}</span>` : '';
    }).join('');
    const outputChips = (esp.outputs || []).map(fid => {
      const f = FLUX_CATALOG.find(x => x.id === fid);
      return f ? `<span class="flux-chip output">${f.ic} ${f.label}</span>` : '';
    }).join('');
    card.innerHTML = `
      <div class="espace-card-header">
        <span class="espace-card-name">${esp.nom}</span>
        <div class="espace-card-actions">
          <button onclick="creerOpenEspaceModal(${idx})" title="Modifier">✏️</button>
          <button onclick="creerRemoveEspace(${idx})" title="Supprimer">🗑️</button>
        </div>
      </div>
      <div class="espace-card-fonctions">${chipsHtml}</div>
      ${metaItems.length ? `<div class="espace-card-meta">${metaItems.join('')}</div>` : ''}
      ${inputChips  ? `<div class="flux-row"><span class="flux-row-label">📥 IN</span>${inputChips}</div>`  : ''}
      ${outputChips ? `<div class="flux-row"><span class="flux-row-label">📤 OUT</span>${outputChips}</div>` : ''}
      ${esp.activites && esp.activites.length ? `<div class="flux-row"><span class="flux-row-label">⚡</span>${esp.activites.map(a=>`<span class="esp-tag" style="pointer-events:none;margin:.1rem">${a}</span>`).join('')}</div>` : ''}
      ${esp.responsable ? `<div class="espace-meta-item" style="font-size:.63rem;opacity:.7">👤 ${esp.responsable}</div>` : ''}
      ${esp.notes ? `<div class="espace-meta-item" style="font-size:.63rem;opacity:.6;font-style:italic">${esp.notes}</div>` : ''}
    `;
    list.appendChild(card);
  });
}

function ficheLogo(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    const preview = document.getElementById('fiche-logo-preview');
    if (preview) { preview.innerHTML = `<img src="${e.target.result}" style="width:100%;height:100%;object-fit:cover">`; }
  };
  reader.readAsDataURL(file);
}

function ficheCover(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    const preview = document.getElementById('fiche-cover-preview');
    if (preview) { preview.innerHTML = `<img src="${e.target.result}" style="width:100%;height:100%;object-fit:cover">`; }
  };
  reader.readAsDataURL(file);
}

/* Aperçu d'image générique (vers un conteneur statique) */
function fichePreviewImg(input, previewId) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    const preview = document.getElementById(previewId);
    if (preview) { preview.innerHTML = `<img src="${e.target.result}" style="width:100%;height:100%;object-fit:cover">`; }
  };
  reader.readAsDataURL(file);
}

/* Upload d'image persistée dans batFicheData (le profil Bâtisseur se re-rend) */
function batDashImg(input, key) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => { batFicheData[key] = e.target.result; batDashFicheRender(); };
  reader.readAsDataURL(file);
}

function creerLogo(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    cData.logo = e.target.result;
    const preview = document.getElementById('creer-logo-preview');
    if (preview) { preview.innerHTML = `<img src="${e.target.result}" style="width:100%;height:100%;object-fit:cover">`; }
  };
  reader.readAsDataURL(file);
}

function creerDocs(input) {
  const files = Array.from(input.files || []);
  if (!files.length) return;
  cData.docs = cData.docs || [];
  files.forEach(f => cData.docs.push(f.name));
  renderStep();
}

function ficheAddBesoin() {
  const inp = document.getElementById('fiche-besoin-custom');
  const val = inp.value.trim();
  if (!val) return;
  const container = document.getElementById('fiche-besoins-tags');
  if (container) {
    const btn = document.createElement('button');
    btn.className = 'esp-tag sel';
    btn.textContent = val;
    btn.onclick = () => btn.classList.toggle('sel');
    container.appendChild(btn);
  }
  inp.value = '';
}

function ficheRenderEspaces() {
  const list = document.getElementById('espace-list');
  const empty = document.getElementById('espace-empty');
  if (!list) return;

  // Remove existing cards (keep #espace-empty)
  Array.from(list.querySelectorAll('.espace-card')).forEach(el => el.remove());

  if (ficheEspaces.length === 0) {
    if (empty) empty.style.display = '';
    return;
  }
  if (empty) empty.style.display = 'none';

  ficheEspaces.forEach((esp, idx) => {
    const card = document.createElement('div');
    card.className = 'espace-card';

    // Function chips
    const chipsHtml = esp.fonctions.length
      ? esp.fonctions.map((fid, i) => {
          const fn = FONCTIONS_ESPACE.find(f => f.id === fid);
          if (!fn) return '';
          return `<span class="espace-fn-chip${i === 0 ? ' primary' : ''}">${fn.ic} ${fn.label}</span>`;
        }).join('')
      : '<span class="espace-fn-chip" style="opacity:.45">Sans fonction</span>';

    // Meta
    const metaItems = [];
    const PHASE_LABELS = { idee:'💭 Idée', conception:'📐 Conception', chantier:'🏗 Chantier', operationnel:'🌿 Opérationnel' };
    if (esp.phase)    metaItems.push(`<span class="espace-meta-item" style="font-weight:600;color:var(--fern)">${PHASE_LABELS[esp.phase] || esp.phase}</span>`);
    if (esp.capacite) metaItems.push(`<span class="espace-meta-item">👥 <strong>${esp.capacite}</strong> pers.</span>`);
    if (esp.surface)  metaItems.push(`<span class="espace-meta-item">📐 <strong>${esp.surface}</strong> m²</span>`);
    if (esp.acces)    metaItems.push(`<span class="espace-meta-item">${ACCES_LABELS[esp.acces] || esp.acces}</span>`);

    // Flux chips
    const inputChips = (esp.inputs || []).map(fid => {
      const f = FLUX_CATALOG.find(x => x.id === fid);
      return f ? `<span class="flux-chip input">${f.ic} ${f.label}</span>` : '';
    }).join('');
    const outputChips = (esp.outputs || []).map(fid => {
      const f = FLUX_CATALOG.find(x => x.id === fid);
      return f ? `<span class="flux-chip output">${f.ic} ${f.label}</span>` : '';
    }).join('');

    card.innerHTML = `
      <div class="espace-card-header">
        <span class="espace-card-name">${esp.nom}</span>
        <div class="espace-card-actions">
          <button onclick="ficheOpenEspaceModal(${idx})" title="Modifier">✏️</button>
          <button onclick="ficheRemoveEspace(${idx})" title="Supprimer">🗑️</button>
        </div>
      </div>
      <div class="espace-card-fonctions">${chipsHtml}</div>
      ${metaItems.length ? `<div class="espace-card-meta">${metaItems.join('')}</div>` : ''}
      ${inputChips  ? `<div class="flux-row"><span class="flux-row-label">📥 IN</span>${inputChips}</div>`  : ''}
      ${outputChips ? `<div class="flux-row"><span class="flux-row-label">📤 OUT</span>${outputChips}</div>` : ''}
      ${esp.activites && esp.activites.length ? `<div class="flux-row"><span class="flux-row-label">⚡</span>${esp.activites.map(a=>`<span class="esp-tag" style="pointer-events:none;margin:.1rem">${a}</span>`).join('')}</div>` : ''}
      ${esp.responsable ? `<div class="espace-meta-item" style="font-size:.63rem;opacity:.7">👤 ${esp.responsable}</div>` : ''}
      ${esp.notes ? `<div class="espace-meta-item" style="font-size:.63rem;opacity:.6;font-style:italic">${esp.notes}</div>` : ''}
    `;
    list.appendChild(card);
  });
}

/* ─── TABLEAU DE BORD BÂTISSEUR, FICHE PROFIL ─── */
function batDashFicheRender() {
  const el = document.getElementById('bat-dash-fiche-form');
  if (!el) return;
  const fd = batFicheData;
  const autreOn  = (fd.valeurAutre || '').trim() !== '';
  const totalVal = fd.valeurs.length + (autreOn ? 1 : 0);

  el.innerHTML = `
    <!-- Identité -->
    <div class="fiche-section">
      <div class="fiche-section-head">
        <span class="fiche-section-title">👤 Identité</span>
        <button class="btn btn-ghost" style="font-size:0.65rem;padding:0.25rem 0.65rem">✏️ Modifier</button>
      </div>
      <div class="fiche-section-body">
        <div class="fiche-field">
          <div class="fiche-label">Photo de profil</div>
          <div style="display:flex;align-items:center;gap:1rem">
            <div id="bat-avatar-preview" style="width:64px;height:64px;border-radius:50%;border:1.5px dashed rgba(46,102,66,.25);background:rgba(46,102,66,.04);display:flex;align-items:center;justify-content:center;font-size:1.6rem;flex-shrink:0;overflow:hidden">${fd.avatar?`<img src="${fd.avatar}" style="width:100%;height:100%;object-fit:cover">`:'🧑‍🌾'}</div>
            <div style="flex:1">
              <label style="display:inline-flex;align-items:center;gap:.4rem;cursor:pointer;font-size:.68rem;font-weight:600;color:var(--forest);padding:.3rem .7rem;border:1px solid rgba(46,102,66,.3);border-radius:100px;background:rgba(46,102,66,.06)">
                📁 Choisir une photo
                <input type="file" accept="image/*" style="display:none" onchange="batDashImg(this,'avatar')">
              </label>
              <div style="font-size:.6rem;color:var(--moss);opacity:.55;margin-top:.3rem">PNG ou JPG · recommandé 200×200 px</div>
            </div>
          </div>
        </div>
        <div class="fiche-field">
          <div class="fiche-label">Image de couverture</div>
          <div id="bat-cover-preview" style="width:100%;height:110px;border-radius:var(--r);border:1.5px dashed rgba(46,102,66,.25);background:rgba(46,102,66,.04);display:flex;align-items:center;justify-content:center;font-size:1.8rem;color:var(--moss);overflow:hidden;margin-bottom:.5rem">${fd.cover?`<img src="${fd.cover}" style="width:100%;height:100%;object-fit:cover">`:'🌄'}</div>
          <label style="display:inline-flex;align-items:center;gap:.4rem;cursor:pointer;font-size:.68rem;font-weight:600;color:var(--forest);padding:.3rem .7rem;border:1px solid rgba(46,102,66,.3);border-radius:100px;background:rgba(46,102,66,.06)">
            📁 Choisir un fichier
            <input type="file" accept="image/*" style="display:none" onchange="batDashImg(this,'cover')">
          </label>
          <div style="font-size:.6rem;color:var(--moss);opacity:.55;margin-top:.3rem">JPG ou PNG · recommandé 1200×400 px</div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-bottom:.75rem">
          <div class="fiche-field"><div class="fiche-label">Prénom</div><input class="fiche-input" value="${fd.prenom}" oninput="batFicheData.prenom=this.value" placeholder="Ton prénom"></div>
          <div class="fiche-field"><div class="fiche-label">Nom</div><input class="fiche-input" value="${fd.nom}" oninput="batFicheData.nom=this.value" placeholder="Ton nom"></div>
        </div>
        <div class="fiche-field"><div class="fiche-label">Ville / Localisation</div><input class="fiche-input" value="${fd.ville||''}" oninput="batFicheData.ville=this.value" placeholder="Ville ou adresse…"></div>
        <div class="fiche-field"><div class="fiche-label">Bio publique</div><textarea class="fiche-input fiche-textarea" oninput="batFicheData.bio=this.value" placeholder="Décris-toi en quelques phrases…">${fd.bio}</textarea></div>
        <div class="fiche-field">
          <div class="fiche-label">Disponibilité</div>
          <div style="display:flex;flex-wrap:wrap;gap:.35rem;margin-top:.3rem">
            ${['Weekends','Semaine','Flexible','Sur mission'].map(d => `<button class="esp-tag${fd.dispo.includes(d)?' sel':''}" onclick="batDashDispoToggle('${d}')">${d==='Weekends'?'📅':d==='Semaine'?'💼':d==='Flexible'?'🌀':'🎯'} ${d}</button>`).join('')}
          </div>
        </div>
        <div class="fiche-field">
          <div class="fiche-label">Rayon d'action</div>
          <div style="display:flex;gap:.35rem;flex-wrap:wrap;margin-top:.3rem">
            ${[10,20,50,100].map(r => `<button class="esp-tag${fd.rayon===r?' sel':''}" onclick="batFicheData.rayon=${r};batDashFicheRender()">📍 ${r} km</button>`).join('')}
          </div>
        </div>
      </div>
    </div>

    <!-- Valeurs & lieux -->
    <div class="fiche-section">
      <div class="fiche-section-head">
        <span class="fiche-section-title">✨ Valeurs <span style="font-weight:400;opacity:.5;font-size:.68rem">${totalVal}/3 sélectionnée${totalVal>1?'s':''}</span></span>
      </div>
      <div class="fiche-section-body">
        <div style="display:flex;flex-wrap:wrap;gap:.35rem;margin-bottom:.85rem">
          ${BAT_VALEURS.map(v => {
            const on = fd.valeurs.includes(v.id);
            const dis = !on && totalVal >= 3;
            return `<button class="esp-tag${on?' sel':''}" onclick="${dis?'':'batDashValeurToggle(\''+v.id+'\')'}" style="opacity:${dis?.4:1};cursor:${dis?'default':'pointer'}">${v.ic} ${v.label}</button>`;
          }).join('')}
          ${autreOn ? `<button class="esp-tag sel" onclick="batDashValeurAutreClear()" style="border-color:#7a7a8c55;background:#7a7a8c14;color:#4a4a60">✏️ ${fd.valeurAutre} <span style="opacity:.6;margin-left:.2rem">✕</span></button>` : (!autreOn && totalVal < 3 ? `<button class="esp-tag" onclick="batDashValeurAutreOpen()">✏️ Autre</button>` : '')}
        </div>
        ${window._batDashAutreOpen && !autreOn ? `<div style="display:flex;gap:.4rem;margin-bottom:.85rem">
          <input id="bat-dash-val-inp" class="fiche-input" placeholder="Ta valeur personnelle…" value="${fd.valeurAutre||''}" style="margin-bottom:0;flex:1;font-size:.68rem"
            oninput="batFicheData.valeurAutre=this.value"
            onkeydown="if(event.key==='Enter'){event.preventDefault();batDashValeurAutreConfirm();}"
            onblur="setTimeout(batDashValeurAutreConfirm,120)">
          <button onclick="batDashValeurAutreConfirm()" class="btn btn-primary" style="font-size:.65rem;padding:.3rem .65rem;white-space:nowrap">OK</button>
        </div>` : ''}
        <div class="fiche-field">
          <div class="fiche-label">Type de lieu qui m'attire</div>
          <div style="display:flex;flex-wrap:wrap;gap:.35rem;margin-top:.3rem">
            ${BAT_LIEU_TYPES.map(lt => `<button class="esp-tag${fd.lieuType.includes(lt.id)?' sel':''}" onclick="batDashLieuTypeToggle('${lt.id}')">${lt.ic} ${lt.label}</button>`).join('')}
          </div>
        </div>
      </div>
    </div>

    <!-- Compétences -->
    <div class="fiche-section">
      <div class="fiche-section-head">
        <span class="fiche-section-title">🏅 Compétences</span>
      </div>
      <div class="fiche-section-body">
        <div style="display:flex;flex-direction:column;gap:.4rem;margin-bottom:.9rem">
          ${BAT_SKILLS.map(s => {
            const active = fd.skills.includes(s.id);
            const lvl = fd.skillLevels[s.id] || 0;
            const LEVELS = [['🌱','Débutant',1],['🌿','Confirmé',2],['⭐','Expert',3]];
            return `<div>
              <button class="esp-tag${active?' sel':''}" style="border-radius:var(--r);padding:.45rem .7rem;text-align:left;display:flex;align-items:center;gap:.5rem;width:100%;${active?'border-bottom-left-radius:0;border-bottom-right-radius:0':''}" onclick="batDashSkillToggle('${s.id}')">
                <span style="font-size:1.05rem">${s.ic}</span>
                <div style="flex:1"><div style="font-weight:600;font-size:.73rem">${s.label}</div><div style="font-size:.6rem;opacity:.7">${s.desc}</div></div>
                ${active ? `<span style="font-size:.67rem;font-weight:700;color:${s.col}">${lvl ? LEVELS[lvl-1][0]+' '+LEVELS[lvl-1][1] : '<span style="opacity:.4">niveau ?</span>'}</span>` : '<span style="opacity:.3;font-size:.7rem">+ Ajouter</span>'}
              </button>
              ${active ? `<div style="display:flex;gap:.3rem;padding:.3rem .5rem;background:${s.bg};border:1px solid ${s.col}33;border-top:none;border-radius:0 0 var(--r) var(--r)">
                ${LEVELS.map(([ic,lbl,n]) => `<button onclick="batDashSkillLevel('${s.id}',${n})" style="flex:1;padding:.25rem;border-radius:100px;border:1.5px solid ${lvl===n?s.col:'rgba(0,0,0,.08)'};background:${lvl===n?s.col+'18':'transparent'};cursor:pointer;font-size:.6rem;font-weight:${lvl===n?700:500};color:${lvl===n?s.col:'var(--moss)'}">${ic} ${lbl}</button>`).join('')}
              </div>` : ''}
            </div>`;
          }).join('')}
        </div>
        <div class="fiche-field">
          <div class="fiche-label">Ce que j'apporte</div>
          <div style="display:flex;flex-wrap:wrap;gap:.35rem;margin-top:.3rem">
            ${BAT_APPORTE.map(a => `<button class="esp-tag${fd.apporte.includes(a.id)?' sel':''}" onclick="batDashExchangeToggle('apporte','${a.id}')">${a.ic} ${a.label}</button>`).join('')}
          </div>
        </div>
        <div class="fiche-field" style="margin-top:.6rem">
          <div class="fiche-label">Ce que je cherche</div>
          <div style="display:flex;flex-wrap:wrap;gap:.35rem;margin-top:.3rem">
            ${BAT_CHERCHE.map(c => `<button class="esp-tag${fd.cherche.includes(c.id)?' sel':''}" onclick="batDashExchangeToggle('cherche','${c.id}')">${c.ic} ${c.label}</button>`).join('')}
          </div>
        </div>
      </div>
    </div>

    <!-- Engagement -->
    <div class="fiche-section">
      <div class="fiche-section-head">
        <span class="fiche-section-title">💬 Engagement</span>
      </div>
      <div class="fiche-section-body">
        <div class="fiche-field">
          <div class="fiche-label">Type de contribution préféré</div>
          <div style="display:flex;flex-wrap:wrap;gap:.35rem;margin-top:.3rem">
            ${[['terrain','🏗','Terrain'],['formation','📚','Formation'],['doc','📝','Documentation'],['animation','🎪','Animation']].map(([id,ic,l]) => `<button class="esp-tag${fd.contrib===id?' sel':''}" onclick="batFicheData.contrib='${id}';batDashFicheRender()">${ic} ${l}</button>`).join('')}
          </div>
        </div>
        <div class="fiche-field" style="margin-top:.6rem">
          <div class="fiche-label">Mode de participation</div>
          <div style="display:flex;flex-wrap:wrap;gap:.35rem;margin-top:.3rem">
            ${[['presentiel','🏡','Présentiel'],['distanciel','💻','Distanciel'],['les-deux','🌀','Les deux']].map(([id,ic,l]) => `<button class="esp-tag${fd.mode===id?' sel':''}" onclick="batFicheData.mode='${id}';batDashFicheRender()">${ic} ${l}</button>`).join('')}
          </div>
        </div>
        <div class="fiche-field" style="margin-top:.6rem">
          <div class="fiche-label">Engagement souhaité</div>
          <div style="display:flex;flex-wrap:wrap;gap:.35rem;margin-top:.3rem">
            ${[['ponctuel','⚡','Ponctuel'],['recurrent','🔄','Récurrent'],['immersif','🏕','Immersif']].map(([id,ic,l]) => `<button class="esp-tag${fd.engagement===id?' sel':''}" onclick="batFicheData.engagement='${id}';batDashFicheRender()">${ic} ${l}</button>`).join('')}
          </div>
        </div>
        <div class="fiche-field" style="margin-top:.6rem">
          <div class="fiche-label">Pourquoi tu contribues</div>
          <textarea class="fiche-input fiche-textarea" oninput="batFicheData.motivation=this.value" placeholder="Ta motivation en quelques mots…">${fd.motivation}</textarea>
        </div>
      </div>
    </div>

    <!-- Contact & liens -->
    <div class="fiche-section">
      <div class="fiche-section-head">
        <span class="fiche-section-title">📬 Contact & liens</span>
      </div>
      <div class="fiche-section-body">
        <div class="fiche-field"><div class="fiche-label">Email public</div><input class="fiche-input" value="${fd.email||''}" oninput="batFicheData.email=this.value" placeholder="prenom@exemple.fr"></div>
        <div class="fiche-field"><div class="fiche-label">Téléphone</div><input class="fiche-input" value="${fd.tel||''}" oninput="batFicheData.tel=this.value" placeholder="Ex : 06 12 34 56 78"></div>
        <div class="fiche-field"><div class="fiche-label">Site web / réseau</div><input class="fiche-input" value="${fd.web||''}" oninput="batFicheData.web=this.value" placeholder="www.exemple.fr ou @pseudo"></div>
      </div>
    </div>

    <div style="display:flex;gap:.75rem">
      <button class="btn btn-primary" style="flex:1;padding:.65rem" onclick="mmBubble('💾 Profil bâtisseur sauvegardé ✅')">💾 Enregistrer les modifications</button>
      <button class="btn btn-ghost" style="padding:.65rem 1rem" onclick="batDashFicheRender()">Annuler</button>
    </div>
  `;
  if (window._batDashAutreOpen) setTimeout(() => { const inp = document.getElementById('bat-dash-val-inp'); if (inp) inp.focus(); }, 40);
}

function batDashDispoToggle(d) {
  const i = batFicheData.dispo.indexOf(d);
  if (i >= 0) batFicheData.dispo.splice(i, 1); else batFicheData.dispo.push(d);
  batDashFicheRender();
}
function batDashValeurToggle(id) {
  const autreOn = (batFicheData.valeurAutre || '').trim() !== '';
  const total   = batFicheData.valeurs.length + (autreOn ? 1 : 0);
  const i       = batFicheData.valeurs.indexOf(id);
  if (i >= 0) batFicheData.valeurs.splice(i, 1);
  else if (total < 3) batFicheData.valeurs.push(id);
  batDashFicheRender();
}
function batDashValeurAutreOpen()    { window._batDashAutreOpen = true;  batDashFicheRender(); }
function batDashValeurAutreConfirm() { window._batDashAutreOpen = false; batFicheData.valeurAutre = (batFicheData.valeurAutre||'').trim(); batDashFicheRender(); }
function batDashValeurAutreClear()   { window._batDashAutreOpen = false; batFicheData.valeurAutre = ''; batDashFicheRender(); }
function batDashLieuTypeToggle(id) {
  const i = batFicheData.lieuType.indexOf(id);
  if (i >= 0) batFicheData.lieuType.splice(i, 1); else batFicheData.lieuType.push(id);
  batDashFicheRender();
}
function batDashSkillToggle(id) {
  const i = batFicheData.skills.indexOf(id);
  if (i >= 0) batFicheData.skills.splice(i, 1); else batFicheData.skills.push(id);
  batDashFicheRender();
}
function batDashSkillLevel(id, n) { batFicheData.skillLevels[id] = n; batDashFicheRender(); }
function batDashExchangeToggle(type, id) {
  const arr = batFicheData[type];
  const i = arr.indexOf(id);
  if (i >= 0) arr.splice(i, 1); else arr.push(id);
  batDashFicheRender();
}

/* ─── Pan mindmap Fiche lieu ─── */
(function () {
  let panning = false, px = 0, py = 0, tx = 0, ty = 0;
  function getCanvas() { return document.getElementById('fiche-mm-canvas'); }
  function getStage()  { return document.getElementById('fiche-mm-wrap'); }
  function applyTransform() { const c = getCanvas(); if (c) c.style.transform = `translate(${tx}px,${ty}px)`; }
  document.addEventListener('mousedown', e => {
    const stage = getStage(); if (!stage || !stage.contains(e.target)) return;
    if (e.target.closest('.mm-node, button')) return;
    panning = true; px = e.clientX - tx; py = e.clientY - ty;
    stage.style.cursor = 'grabbing'; e.preventDefault();
  });
  document.addEventListener('mousemove', e => {
    if (!panning) return; tx = e.clientX - px; ty = e.clientY - py; applyTransform();
  });
  document.addEventListener('mouseup', () => {
    if (!panning) return; panning = false;
    const stage = getStage(); if (stage) stage.style.cursor = 'grab';
  });
  document.addEventListener('touchstart', e => {
    const stage = getStage(); if (!stage || !stage.contains(e.target)) return;
    if (e.target.closest('.mm-node, button')) return;
    panning = true; px = e.touches[0].clientX - tx; py = e.touches[0].clientY - ty;
    e.preventDefault();
  }, { passive: false });
  document.addEventListener('touchmove', e => {
    if (!panning) return; tx = e.touches[0].clientX - px; ty = e.touches[0].clientY - py;
    applyTransform(); e.preventDefault();
  }, { passive: false });
  document.addEventListener('touchend', () => { panning = false; });
})();

/* ─── FICHE MIND MAP ─── */
let ficheSolsByEspace = {};

function ficheMmW() { return document.getElementById('fiche-mm-nodes').parentElement.offsetWidth; }
function ficheMmH() { return document.getElementById('fiche-mm-nodes').parentElement.offsetHeight; }

function ficheMmAdd(id, label, x, y, cls, col, bg) {
  const el = document.createElement('div');
  el.className = 'mm-node mm-' + cls; el.id = 'fmn-' + id;
  el.style.left = x + 'px'; el.style.top = y + 'px';
  if (col) { el.style.color = col; el.style.borderColor = col + '55'; el.style.background = bg || col + '18'; }
  el.textContent = label; el.style.opacity = '0'; el.style.transform = 'translate(-50%,-50%) scale(.7)';
  document.getElementById('fiche-mm-nodes').appendChild(el);
  requestAnimationFrame(() => { el.style.transition = 'opacity .35s,transform .35s'; el.style.opacity = '1'; el.style.transform = 'translate(-50%,-50%) scale(1)'; });
  return el;
}

function ficheMmLine(x1, y1, x2, y2, col, dash) {
  const l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  l.setAttribute('x1', x1); l.setAttribute('y1', y1); l.setAttribute('x2', x2); l.setAttribute('y2', y2);
  l.setAttribute('stroke', col || 'rgba(46,102,66,.32)');
  l.setAttribute('stroke-width', dash ? '1.4' : '1.8');
  if (dash) l.setAttribute('stroke-dasharray', '6,6');
  l.setAttribute('stroke-linecap', 'round');
  l.setAttribute('opacity', dash ? '0.7' : '0.95');
  document.getElementById('fiche-mm-svg').appendChild(l);
}

function togFicheSol(espIdx, solNom, col, bg) {
  const arr = ficheSolsByEspace[espIdx] || [];
  const i = arr.indexOf(solNom);
  const nowSel = i < 0;
  if (nowSel) arr.push(solNom); else arr.splice(i, 1);
  ficheSolsByEspace[espIdx] = arr;
  document.querySelectorAll('[id^="fmn-sol-' + espIdx + '-"]').forEach(el => {
    if (el.dataset.solnom === solNom) {
      el.style.color         = nowSel ? col : 'rgba(130,130,130,.55)';
      el.style.borderColor   = nowSel ? col + '55' : 'rgba(130,130,130,.2)';
      el.style.background    = nowSel ? bg : 'rgba(130,130,130,.05)';
      el.style.fontWeight    = nowSel ? '600' : '400';
    }
  });
}

function ficheMmRender() {
  const nodesEl = document.getElementById('fiche-mm-nodes');
  const svgEl   = document.getElementById('fiche-mm-svg');
  if (!nodesEl || !svgEl) return;

  const canvas = document.getElementById('fiche-mm-canvas');
  if (canvas) canvas.style.transform = '';
  nodesEl.innerHTML = '';
  svgEl.innerHTML   = '';

  const FN_TO_ESPS = {cuisine:'cuisine',cafe:'cafe',cantine:'cafe',coworking:'bureau',reunion:'bureau',atelier:'atelier',fablab:'fablab',scene:'salle',expo:'salle',boutique:'boutique',biblio:'salle',formation:'salle',jardin:'jardin',serre:'serre',compost:'jardin',hebergement:'dortoir',sport:'salle',meditation:'salle',stockage:'bureau',autre:'cafe',elec_gestion:'dortoir',renouv_prod:'dortoir',therm_gestion:'dortoir',eau_gestion:'serre',ecoconstruct:'atelier',dechets_gestion:'jardin',mobilite:'bureau',gouvernance:'bureau',numerique:'bureau'};

  if (!ficheEspaces.length) {
    nodesEl.innerHTML = `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:.5rem">
      <div style="font-size:1.5rem">🏗</div>
      <div style="font-size:.75rem;color:var(--moss);opacity:.45">Ajoute des espaces pour voir l'écosystème</div>
    </div>`;
    return;
  }

  const espItems = ficheEspaces.map(esp => {
    const fnId  = esp.fonctions && esp.fonctions[0];
    const fn    = fnId ? FONCTIONS_ESPACE.find(f => f.id === fnId) : null;
    const style = MM_DOMAINE_STYLE[fn?.domaine] || MM_DOMAINE_STYLE.Autre;
    const eid   = FN_TO_ESPS[fnId] || 'cafe';
    return { esp, eid, ic: fn?.ic || '📦', c: style.c, bg: style.bg };
  });

  // Pre-fill solutions from ESPS suggestions on first render
  espItems.forEach((item, i) => {
    if (!ficheSolsByEspace[i]) {
      const meta = ESPS.find(e => e.id === item.eid);
      ficheSolsByEspace[i] = meta ? [...(meta.sols || [])].slice(0, 3) : [];
    }
  });

  const W = ficheMmW(), H = ficheMmH(), cx = W / 2, cy = H / 2;
  const nomLieu = (document.getElementById('fiche-f-nom') && document.getElementById('fiche-f-nom').value)
    || (document.getElementById('fiche-nom-input') && document.getElementById('fiche-nom-input').value)
    || (typeof myLieuData !== 'undefined' && myLieuData && myLieuData.nom)
    || 'Mon lieu';
  ficheMmAdd('c', nomLieu, cx, cy, 'center');

  espItems.forEach((item, i) => {
    const { esp, eid, ic, c: col, bg } = item;
    const a   = (2 * Math.PI / espItems.length) * i - Math.PI / 2;
    const re  = Math.min(W, H) * .25;
    const ex  = cx + re * Math.cos(a), ey = cy + re * Math.sin(a);
    const meta = ESPS.find(e => e.id === eid);
    const allSols = meta ? (meta.sols || []).map(n => SOLS.find(s => s.nom === n)).filter(Boolean) : [];
    const selArr  = ficheSolsByEspace[i] || [];
    setTimeout(() => {
      ficheMmLine(cx, cy, ex, ey, col + '99');
      ficheMmAdd('e-' + i, ic + ' ' + esp.nom, ex, ey, 'espace', col, bg);
      allSols.forEach((sol, j) => {
        const sa = a + (j - (allSols.length - 1) / 2) * .45;
        const rs = re + 110;
        const sx = cx + rs * Math.cos(sa), sy = cy + rs * Math.sin(sa);
        const isSel = selArr.includes(sol.nom);
        setTimeout(() => {
          ficheMmLine(ex, ey, sx, sy, col + '44', true);
          const sc = isSel ? col : 'rgba(130,130,130,.55)';
          const sb = isSel ? bg  : 'rgba(130,130,130,.05)';
          const nd = ficheMmAdd('sol-' + i + '-' + j, sol.img + ' ' + sol.nom, sx, sy, 'sol', sc, sb);
          nd.dataset.solnom = sol.nom;
          nd.dataset.espidx = i;
          if (isSel) nd.style.fontWeight = '600';
          nd.style.cursor = 'pointer';
          nd.title = sol.impact || '';
          nd.onclick = () => togFicheSol(i, sol.nom, col, bg);
        }, j * 130);
      });
    }, i * 200);
  });

  renderFicheFluxTable();
}

function renderFicheFluxTable() {
  const table  = document.getElementById('fiche-flux-table');
  const inDiv  = document.getElementById('fiche-flux-inputs');
  const outDiv = document.getElementById('fiche-flux-outputs');
  if (!table || !inDiv || !outDiv) return;

  const inputMap  = new Map();
  const outputMap = new Map();
  ficheEspaces.forEach(esp => {
    (esp.inputs  || []).forEach(fid => { if (!inputMap.has(fid))  inputMap.set(fid, new Set()); inputMap.get(fid).add(esp.nom || '—'); });
    (esp.outputs || []).forEach(fid => { if (!outputMap.has(fid)) outputMap.set(fid, new Set()); outputMap.get(fid).add(esp.nom || '—'); });
  });

  if (inputMap.size === 0 && outputMap.size === 0) { table.style.display = 'none'; return; }

  const renderRows = (map, type) => {
    if (map.size === 0) return `<div style="font-size:.65rem;color:var(--moss);opacity:.4;padding:.25rem 0">Aucun flux renseigné</div>`;
    return [...map.entries()].map(([fid, names]) => {
      const f = FLUX_CATALOG.find(x => x.id === fid);
      if (!f) return '';
      const color = type === 'input' ? '#3a7fa0' : '#a06020';
      const bg    = type === 'input' ? 'rgba(100,180,220,.1)' : 'rgba(220,140,40,.08)';
      return `<div style="margin-bottom:.45rem">
        <div style="display:inline-flex;align-items:center;gap:.3rem;background:${bg};color:${color};border-radius:100px;padding:.18rem .55rem;font-weight:600;font-size:.67rem">${f.ic} ${f.label}</div>
        <div style="font-size:.58rem;color:var(--moss);opacity:.55;margin-top:.15rem;padding-left:.3rem">${[...names].join(', ')}</div>
      </div>`;
    }).join('');
  };

  inDiv.innerHTML  = renderRows(inputMap,  'input');
  outDiv.innerHTML = renderRows(outputMap, 'output');
  table.style.display = 'block';
}

/* ─── INIT ─── */
setRole('pilote', null);
renderProfileContext();
setTimeout(initRealMap, 120);

