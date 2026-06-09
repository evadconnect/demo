// ── SPLASH LOGIC ──
let splashRole = null;
let spObStep = 0;
let spObSelectedScreen = null;

function splashSelect(role, card) {
  splashRole = role;
  document.querySelectorAll('.sp-card').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');
  splashEnter();
}

function splashEnter() {
  if (!splashRole) return;
  // Show onboarding overlay inside the splash
  spObStep = 0;
  spObSelectedScreen = null;
  const overlay = document.getElementById('sp-ob-overlay');
  overlay.style.display = 'block';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      overlay.classList.add('visible');
      spObRender();
    });
  });
}

function spObFinish() {
  // Close splash and enter the app
  const splash = document.getElementById('evad-splash');
  splash.style.opacity = '';      // reset inline override si venu du mode visiteur
  splash.style.pointerEvents = '';
  splash.classList.add('hidden');
  setTimeout(() => {
    splash.style.display = 'none';
    document.body.style.overflow = 'hidden';
    const r = splashRole;
    setRole(r, null);
    const screens = { pilote: 'creer', batisseur: 'fiche-bat', semeur: 'fiche-sem' };
    showScreen(screens[r] || 'carte');
  }, 500);
}

function spObSkip() { spObFinish(); }

function spObNext() {
  const last = OB_DATA[splashRole].steps.length - 1;
  if (spObStep < last) { spObStep++; spObRender(); }
  else if (spObSelectedScreen) { spObAction(spObSelectedScreen); }
  else { spObFinish(); }
}

function spObSelect(screen) {
  spObSelectedScreen = screen;
  spObRender();
}

function spObPrev() {
  if (spObStep > 0) { spObStep--; spObRender(); }
}

function spObGoStep(i) { spObStep = i; spObRender(); }

function spObRender() {
  // Wait for OB_DATA to be available (defined later in the file)
  if (typeof OB_DATA === 'undefined') { setTimeout(spObRender, 50); return; }

  const d = OB_DATA[splashRole];
  const step = d.steps[spObStep];

  // Masque le fil d'étapes quand il n'y a qu'une seule étape
  const stepperEl = document.getElementById('sp-ob-stepper');
  if (stepperEl) stepperEl.style.display = d.steps.length > 1 ? '' : 'none';

  // Badge
  const badge = document.getElementById('sp-ob-badge');
  badge.textContent = d.badge;
  badge.style.background = d.badgeBg;
  badge.style.color = d.badgeColor;

  // Right panel background
  const right = document.getElementById('sp-ob-right');
  const bgs = { pilote:'radial-gradient(ellipse at 60% 40%,rgba(46,107,71,0.35) 0%,rgba(8,22,14,0.97) 70%),#08160e', batisseur:'radial-gradient(ellipse at 60% 40%,rgba(200,115,42,0.2) 0%,rgba(20,14,8,0.97) 70%),#100c06', semeur:'radial-gradient(ellipse at 60% 40%,rgba(58,110,140,0.22) 0%,rgba(8,14,22,0.96) 70%),#060e16' };
  right.style.background = bgs[splashRole];

  // Stepper dots
  const dots = document.querySelectorAll('.sp-ob-dot');
  dots.forEach((dot, i) => {
    dot.classList.remove('sp-ob-active');
    dot.style.width = '10px';
    dot.style.borderRadius = '50%';
    if (i < spObStep) { dot.style.background = d.accent; }
    else if (i === spObStep) {
      dot.classList.add('sp-ob-active');
      dot.style.width = '26px';
      dot.style.borderRadius = '100px';
      dot.style.background = d.color;
    } else { dot.style.background = 'rgba(255,255,255,.15)'; }
  });

  // Content
  const content = document.getElementById('sp-ob-content');
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
    <div style="font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;font-weight:700;margin-bottom:.7rem;opacity:.7;color:${d.accent}">${step.eyebrow}</div>
    <div style="font-family:'Satoshi', sans-serif;font-size:2rem;font-weight:900;color:var(--cream);line-height:1.1;margin-bottom:.75rem">${step.headline.replace('\n','<br>')}</div>
    <div style="font-size:.82rem;color:var(--mist);opacity:.8;line-height:1.65;margin-bottom:1.6rem">${step.desc}</div>
  `;

  if (step.type === 'tools') {
    html += '<div style="display:flex;flex-direction:column;gap:.5rem;margin-bottom:1.4rem">';
    step.tools.forEach(t => {
      html += `<div style="display:flex;align-items:center;gap:.85rem;padding:.72rem .9rem;border-radius:16px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.04);">
        <div style="width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;background:${t.bg}">${t.icon}</div>
        <div>
          <div style="font-size:.8rem;font-weight:600;color:var(--cream);margin-bottom:.12rem">${t.name}</div>
          <div style="font-size:.67rem;color:var(--mist);opacity:.65;line-height:1.35">${t.desc}</div>
        </div>
      </div>`;
    });
    html += '</div>';
  } else if (step.type === 'cycle') {
    html += '<div style="display:flex;flex-direction:column;gap:.5rem;margin-bottom:1.4rem">';
    step.steps.forEach(s => {
      html += `<div style="display:flex;align-items:flex-start;gap:.85rem">
        <div style="width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:800;flex-shrink:0;margin-top:.08rem;background:${d.colorBg};color:${d.accent}">${s.num}</div>
        <div>
          <div style="font-size:.8rem;font-weight:700;color:var(--cream);margin-bottom:.1rem">${s.title}</div>
          <div style="font-size:.68rem;color:var(--mist);opacity:.7;line-height:1.45">${s.text}</div>
        </div>
      </div>`;
    });
    html += '</div>';
  } else if (step.type === 'signup') {
    const inp = `width:100%;box-sizing:border-box;padding:.75rem 1rem;border:1.5px solid rgba(255,255,255,.15);border-radius:.65rem;font-size:.88rem;outline:none;background:rgba(255,255,255,.08);color:white;font-family:'Satoshi', sans-serif;transition:border-color .2s`;
    html += `<div style="display:flex;flex-direction:column;gap:.65rem;margin-bottom:1.2rem">
      <input type="text" placeholder="Prénom" style="${inp}" onfocus="this.style.borderColor='${d.accent}'" onblur="this.style.borderColor='rgba(255,255,255,.15)'">
      <input type="email" placeholder="Adresse email" style="${inp}" onfocus="this.style.borderColor='${d.accent}'" onblur="this.style.borderColor='rgba(255,255,255,.15)'">
      <input type="password" placeholder="Mot de passe" style="${inp}" onfocus="this.style.borderColor='${d.accent}'" onblur="this.style.borderColor='rgba(255,255,255,.15)'">
      <input type="password" placeholder="Confirmer le mot de passe" style="${inp}" onfocus="this.style.borderColor='${d.accent}'" onblur="this.style.borderColor='rgba(255,255,255,.15)'">
    </div>`;
  } else if (step.type === 'actions') {
    html += '<div style="display:flex;flex-direction:column;gap:.55rem;margin-bottom:1.2rem">';
    step.actions.forEach(a => {
      const isSelected = spObSelectedScreen === a.screen;
      const border = isSelected ? `2px solid ${d.accent}` : '2px solid transparent';
      const checkmark = isSelected ? `<span style="color:${d.accent};font-size:1rem;flex-shrink:0">✓</span>` : '';
      html += `<button onclick="spObSelect('${a.screen}')" data-screen="${a.screen}" style="display:flex;align-items:center;gap:.85rem;padding:.85rem 1rem;border-radius:16px;cursor:pointer;font-family:'Satoshi', sans-serif;transition:all .2s;text-align:left;width:100%;background:rgba(255,255,255,0.07);border:${border}">
        <div style="width:38px;height:38px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.1rem;flex-shrink:0;background:${a.bg}">${a.icon}</div>
        <div style="flex:1">
          <div style="font-size:.8rem;font-weight:700;margin-bottom:.1rem;color:var(--cream)">${a.title}</div>
          <div style="font-size:.65rem;opacity:.7;line-height:1.3;color:var(--mist)">${a.sub}</div>
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
  const prev = document.getElementById('sp-ob-prev');
  const next = document.getElementById('sp-ob-next');
  prev.style.display = spObStep > 0 ? 'block' : 'none';
  next.textContent = spObStep < (d.steps.length - 1) ? 'Suivant →' : 'Commencer ✦';
  next.style.background = d.color;
  next.style.color = 'white';

  // SVG, reuse the same obRenderSVG function with our svg element
  spObRenderSVG();
}

function spObAction(screen) {
  // Navigate to specific screen from actions step
  const splash = document.getElementById('evad-splash');
  splash.classList.add('hidden');
  setTimeout(() => {
    splash.style.display = 'none';
    document.body.style.overflow = 'hidden';
    const r = splashRole;
    setRole(r, null);
    showScreen(screen);
  }, 500);
}

function spObRenderSVG() {
  // Mirror obRenderSVG but target #sp-ob-svg
  if (typeof obRenderSVG === 'undefined') return;
  // Temporarily swap the svg element reference used by obRenderSVG
  const realSvg = document.getElementById('ob-svg');
  const spSvg = document.getElementById('sp-ob-svg');
  // Reuse by temporarily setting obRole/obStep and calling obRenderSVG
  const savedRole = (typeof obRole !== 'undefined') ? obRole : 'pilote';
  const savedStep = (typeof obStep !== 'undefined') ? obStep : 0;
  obRole = splashRole;
  obStep = spObStep;
  // Point obRenderSVG to our svg
  const origId = realSvg.id;
  realSvg.id = '__hidden_ob_svg';
  spSvg.id = 'ob-svg';
  try { obRenderSVG(); } catch(e) {}
  spSvg.id = 'sp-ob-svg';
  realSvg.id = origId;
  obRole = savedRole;
  obStep = savedStep;
}

function splashGoApp(e) {
  e.preventDefault();
  const splash = document.getElementById('evad-splash');
  splash.classList.add('hidden');
  setTimeout(() => {
    splash.style.display = 'none';
    document.body.style.overflow = 'hidden';
    showScreen('carte');
  }, 500);
}

function splashGoBdd(e) {
  e.preventDefault();
  const splash = document.getElementById('evad-splash');
  splash.classList.add('hidden');
  setTimeout(() => {
    splash.style.display = 'none';
    document.body.style.overflow = 'hidden';
    showScreen('bdd');
  }, 500);
}
function goBackToLinktree() {
  const splash = document.getElementById('evad-splash');
  // Réinitialiser tous les styles inline posés par les différents chemins d'entrée
  splash.style.opacity = '';
  splash.style.pointerEvents = '';
  splash.style.display = 'flex';
  document.body.style.overflow = 'auto';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => { splash.classList.remove('hidden'); });
  });
  const overlay = document.getElementById('sp-ob-overlay');
  if (overlay) { overlay.style.display = 'none'; overlay.classList.remove('visible'); }
}

