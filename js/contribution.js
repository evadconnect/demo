function ctbAddMat(){
  const inp = document.getElementById('ctb-mat-input');
  const val = inp.value.trim();
  if(!val) return;
  const list = document.getElementById('ctb-mat-list');
  const row = document.createElement('div');
  row.style.cssText = 'display:flex;align-items:center;gap:.5rem;padding:.38rem .6rem;border-radius:.6rem;background:rgba(46,102,66,.05);border:1px solid rgba(46,102,66,.1)';
  row.innerHTML = `<div style="width:5px;height:5px;border-radius:50%;background:var(--fern);flex-shrink:0"></div><span style="flex:1;font-size:.75rem;color:var(--ink)">${val}</span><button onclick="this.parentElement.remove()" style="border:none;background:none;cursor:pointer;color:var(--moss);opacity:.45;font-size:.75rem;padding:0;line-height:1">✕</button>`;
  list.appendChild(row);
  inp.value = '';
  inp.focus();
}

function ctbAddPlan(){
  const ic    = document.getElementById('ctb-plan-ic').value.trim() || '▶';
  const titre = document.getElementById('ctb-plan-titre').value.trim();
  const desc  = document.getElementById('ctb-plan-desc').value.trim();
  if(!titre) return;
  const list  = document.getElementById('ctb-plan-list');
  const num   = list.children.length + 1;
  const row   = document.createElement('div');
  row.style.cssText = 'display:flex;gap:.65rem;padding:.6rem .7rem;border-radius:.75rem;border:1px solid rgba(46,102,66,.1);background:rgba(46,102,66,.03);align-items:flex-start';
  row.innerHTML = `
    <div style="width:28px;height:28px;border-radius:.5rem;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:1rem;background:rgba(46,102,66,.08)">${ic}</div>
    <div style="flex:1;min-width:0">
      <div style="font-size:.73rem;font-weight:700;color:var(--ink);margin-bottom:.12rem">${num}. ${titre}</div>
      ${desc?`<div style="font-size:.66rem;color:var(--moss);line-height:1.45;opacity:.85">${desc}</div>`:''}
    </div>
    <button onclick="ctbRemovePlan(this)" style="border:none;background:none;cursor:pointer;color:var(--moss);opacity:.4;font-size:.75rem;padding:0;flex-shrink:0;margin-top:.1rem">✕</button>`;
  list.appendChild(row);
  document.getElementById('ctb-plan-ic').value    = '';
  document.getElementById('ctb-plan-titre').value = '';
  document.getElementById('ctb-plan-desc').value  = '';
  document.getElementById('ctb-plan-titre').focus();
}

function ctbRemovePlan(btn){
  const list = document.getElementById('ctb-plan-list');
  btn.parentElement.remove();
  // Re-numéroter
  Array.from(list.children).forEach((row,i)=>{
    const t = row.querySelector('div > div:first-child');
    if(t) t.textContent = t.textContent.replace(/^\d+\./,(i+1)+'.');
  });
}

function openContribModal(){
  const m = document.getElementById('contrib-modal');
  m.style.display = 'flex';
  // Populate lieu chips
  const cc = document.getElementById('ctb-lieux-chips');
  if(cc && !cc.children.length && typeof TYPES_LIEU !== 'undefined'){
    TYPES_LIEU.forEach(t=>{
      const btn = document.createElement('button');
      btn.dataset.val = t.id;
      btn.textContent = t.ic + ' ' + t.l;
      btn.style.cssText = 'padding:.3rem .7rem;border-radius:100px;border:1.5px solid rgba(46,102,66,.2);background:transparent;font-size:.7rem;color:var(--moss);cursor:pointer;font-family:inherit;transition:all .15s';
      btn.onclick = function(){
        const active = this.dataset.active==='1';
        this.dataset.active = active?'0':'1';
        this.style.background = active?'transparent':'var(--forest)';
        this.style.color = active?'var(--moss)':'white';
        this.style.borderColor = active?'rgba(46,102,66,.2)':'var(--forest)';
      };
      cc.appendChild(btn);
    });
  }
  // Reset listes dynamiques
  document.getElementById('ctb-mat-list').innerHTML  = '';
  document.getElementById('ctb-plan-list').innerHTML = '';
  document.getElementById('ctb-mat-input').value     = '';
  document.getElementById('ctb-plan-ic').value       = '';
  document.getElementById('ctb-plan-titre').value    = '';
  document.getElementById('ctb-plan-desc').value     = '';
  // Reset error
  document.getElementById('ctb-error').style.display='none';
  // Animate in
  requestAnimationFrame(()=>{
    document.getElementById('contrib-modal-box').style.transform='translateY(0)';
  });
}

function closeContribModal(){
  document.getElementById('contrib-modal-box').style.transform='translateY(100%)';
  setTimeout(()=>{ document.getElementById('contrib-modal').style.display='none'; }, 320);
}

function submitContrib(){
  const nom   = document.getElementById('ctb-nom').value.trim();
  const cat   = document.getElementById('ctb-cat').value;
  const cplx  = document.getElementById('ctb-cplx').value;
  const desc  = document.getElementById('ctb-desc').value.trim();
  const err   = document.getElementById('ctb-error');
  if(!nom||!cat||!cplx||!desc){
    err.textContent = 'Merci de remplir les champs obligatoires (Nom, Catégorie, Complexité et Description).';
    err.style.display='block';
    return;
  }
  err.style.display='none';
  // Confirmation visuelle
  const box = document.getElementById('contrib-modal-box');
  box.innerHTML=`<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:3rem 2rem;gap:1.1rem;text-align:center">
    <div style="width:64px;height:64px;border-radius:50%;background:rgba(74,140,92,.12);display:flex;align-items:center;justify-content:center;font-size:2rem">✦</div>
    <div style="font-family:'Satoshi', sans-serif;font-size:1.3rem;font-weight:900;color:var(--ink)">Merci pour ta contribution !</div>
    <div style="font-size:.8rem;color:var(--moss);line-height:1.6;max-width:280px">Ta solution <strong>${nom}</strong> a bien été envoyée. L'équipe EVAD la vérifiera et te contactera si besoin.</div>
    <button onclick="closeContribModal()" style="margin-top:.5rem;padding:.7rem 1.8rem;border-radius:.8rem;border:none;background:var(--forest);color:white;font-size:.85rem;font-weight:700;cursor:pointer;font-family:inherit">Fermer</button>
  </div>`;
}

document.getElementById('contrib-modal').addEventListener('click',function(e){
  if(e.target===this) closeContribModal();
});

/* ── Modal détail solution (depuis créer lieu étape 4) ── */
function creerOpenSolDetail(nomSol) {
  const s = SOLS.find(x => x.nom === nomSol);
  if (!s) return;
  const ind = SOLS_INDICATORS[s.nom] || {};
  const cv = CATS[s.cat] || {c:'#666', bg:'#eee', l:'Autre'};
  const cplxMeta = {
    facile:{c:'#2e6020', bg:'rgba(74,140,92,.12)', label:'Facile'},
    moyen: {c:'#a06010', bg:'rgba(200,115,42,.12)', label:'Moyen'},
    expert:{c:'#8a3020', bg:'rgba(184,78,53,.12)',  label:'Expert'}
  }[s.cplx] || {c:'#666', bg:'#eee', label:s.cplx};

  const mat  = ind.materiel || [];
  const plan = ind.plan     || [];
  const perma = ind.perma   || null;
  const gri   = ind.gri     || [];

  // ── Avantages clés ──
  const avantagesHtml = (s.avantages||[]).length ? `
    <div style="margin-bottom:1.1rem">
      <div style="font-size:.62rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--forest);margin-bottom:.45rem">✦ Points clés</div>
      <div style="display:flex;flex-direction:column;gap:.25rem">
        ${s.avantages.map(a=>`<div style="display:flex;align-items:flex-start;gap:.55rem;padding:.35rem .5rem;border-radius:.55rem;background:rgba(1,130,98,.06);border:1px solid rgba(1,130,98,.14)">
          <span style="color:#22c55e;font-size:.65rem;flex-shrink:0;margin-top:.05rem">●</span>
          <span style="font-size:.7rem;color:var(--ink);line-height:1.45">${a}</span>
        </div>`).join('')}
      </div>
    </div>` : '';

  // ── Budget indicatif ──
  const budgetHtml = s.budget ? `
    <div style="display:inline-flex;align-items:center;gap:.4rem;padding:.28rem .7rem;border-radius:100px;background:rgba(200,115,42,.1);border:1px solid rgba(200,115,42,.25);margin-bottom:1.1rem">
      <span style="font-size:.7rem">💶</span>
      <span style="font-size:.65rem;font-weight:700;color:#a06010">Budget indicatif · ${s.budget}</span>
    </div>` : '';

  // ── ESRS détail ──
  const esrsHtml = s.esrs_detail ? `
    <div style="background:rgba(58,110,140,.06);border:1px solid rgba(58,110,140,.2);border-radius:.65rem;padding:.55rem .75rem;margin-bottom:1.1rem;display:flex;gap:.5rem;align-items:flex-start">
      <span style="font-size:.85rem;flex-shrink:0">📋</span>
      <div>
        <div style="font-size:.58rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--sky);margin-bottom:.2rem">Impact ESRS · ${s.esrs.join(' · ')}</div>
        <div style="font-size:.68rem;color:#1a3a5a;line-height:1.5">${s.esrs_detail}</div>
      </div>
    </div>` : '';

  // ── Principes de permaculture ──
  const permaHtml = perma ? `
    <div style="background:rgba(46,102,66,.05);border:1px solid rgba(46,102,66,.15);border-radius:.65rem;padding:.55rem .75rem;margin-bottom:1.1rem">
      <div style="font-size:.58rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--forest);margin-bottom:.35rem">🌿 Éthiques permaculture</div>
      <div style="display:flex;flex-wrap:wrap;gap:.25rem;margin-bottom:.35rem">
        ${perma.ethiques.map(e=>`<span style="font-size:.62rem;background:rgba(46,102,66,.1);color:var(--forest);padding:.15rem .45rem;border-radius:100px;font-weight:600">${e}</span>`).join('')}
      </div>
      <div style="font-size:.65rem;color:var(--moss);font-style:italic;line-height:1.45">${perma.principe}</div>
    </div>` : '';

  // ── ODD ──
  const oddHtml = (ind.odd||[]).length ? `
    <div style="margin-bottom:1.1rem">
      <div style="font-size:.58rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#666;margin-bottom:.35rem">🌍 Objectifs de développement durable</div>
      <div style="display:flex;flex-wrap:wrap;gap:.3rem">
        ${ind.odd.map(n=>{const m=ODD_META[n]||{c:'#666',l:'ODD '+n};return`<span style="display:flex;align-items:center;gap:.3rem;padding:.2rem .5rem;border-radius:.5rem;background:${m.c}18;border:1px solid ${m.c}44"><span style="width:16px;height:16px;border-radius:3px;background:${m.c};color:white;font-size:.55rem;font-weight:900;display:flex;align-items:center;justify-content:center">${n}</span><span style="font-size:.6rem;font-weight:600;color:${m.c}">${m.l}</span></span>`;}).join('')}
      </div>
    </div>` : '';

  // ── Quête associée ──
  const queteHtml = s.quete ? `
    <div style="background:rgba(46,102,66,.06);border:1.5px solid rgba(46,102,66,.2);border-radius:.75rem;padding:.65rem .8rem;margin-bottom:1.2rem">
      <div style="font-size:.62rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--fern);margin-bottom:.45rem">⚔ Quête associée</div>
      <div style="font-size:.76rem;font-weight:700;color:var(--ink);margin-bottom:.3rem">${s.quete.titre}</div>
      <div style="display:flex;gap:.8rem;flex-wrap:wrap">
        <span style="font-size:.63rem;color:var(--moss)">⏱ ${s.quete.duree}</span>
        <span style="font-size:.63rem;color:var(--moss)">👥 ${s.quete.nb}</span>
        <span style="font-size:.63rem;color:var(--fern);font-weight:600">${s.quete.impact_quete}</span>
      </div>
    </div>` : '';

  // ── Matériel ──
  const matHtml = mat.length ? `
    <div style="margin-bottom:1.2rem">
      <div style="font-size:.62rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--fern);margin-bottom:.5rem">🛠 Matériel nécessaire</div>
      <div style="display:flex;flex-direction:column;gap:.25rem">
        ${mat.map(m=>`<div style="display:flex;align-items:center;gap:.5rem;padding:.3rem .5rem;border-radius:.5rem;background:rgba(46,102,66,.04)">
          <div style="width:5px;height:5px;border-radius:50%;background:var(--fern);flex-shrink:0"></div>
          <span style="font-size:.68rem;color:var(--ink)">${m}</span>
        </div>`).join('')}
      </div>
    </div>` : '';

  // ── Plan d'action ──
  const planHtml = plan.length ? `
    <div style="margin-bottom:1.2rem">
      <div style="font-size:.62rem;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--sky);margin-bottom:.5rem">📋 Plan d'action · ${plan.length} étapes</div>
      <div style="display:flex;flex-direction:column;gap:.4rem">
        ${plan.map((p,i)=>`<div style="display:flex;gap:.6rem;padding:.4rem .55rem;border-radius:.6rem;background:rgba(58,110,140,.04);border:1px solid rgba(58,110,140,.1)">
          <div style="width:20px;height:20px;border-radius:50%;background:var(--sky);color:white;font-size:.6rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:.05rem">${i+1}</div>
          <div>
            <div style="font-size:.68rem;font-weight:700;color:#1a3a5a">${p.ic} ${p.titre}</div>
            <div style="font-size:.62rem;color:#555;margin-top:.1rem;line-height:1.45">${p.desc}</div>
          </div>
        </div>`).join('')}
      </div>
    </div>` : '';

  // ── Références GRI ──
  const griHtml = gri.length ? `
    <div style="display:flex;flex-wrap:wrap;gap:.3rem;padding-top:.3rem;border-top:1px solid rgba(46,102,66,.1)">
      <span style="font-size:.58rem;color:var(--moss);opacity:.6;width:100%;margin-bottom:.15rem">Références GRI</span>
      ${gri.map(g=>`<span style="font-size:.6rem;color:var(--moss);opacity:.7;background:rgba(46,102,66,.06);padding:.15rem .45rem;border-radius:100px">${g}</span>`).join('')}
    </div>` : '';

  const modal = document.getElementById('creer-sol-detail-modal');
  modal.querySelector('#creer-sol-detail-body').innerHTML = `
    ${s.photo ? `<div style="height:200px;background:url('${s.photo}') center/cover;flex-shrink:0;position:relative">
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(0,0,0,0) 35%,rgba(0,0,0,.6))"></div>
      <div style="position:absolute;bottom:.75rem;left:.9rem;right:.9rem;display:flex;align-items:flex-end;gap:.5rem">
        <span style="font-size:1.6rem">${s.img}</span>
        <span style="font-size:1rem;font-weight:800;color:white;font-family:'Satoshi',sans-serif;line-height:1.2">${s.nom}</span>
      </div>
    </div>` : `<div style="padding:1rem .9rem 0;display:flex;align-items:center;gap:.5rem"><span style="font-size:1.6rem">${s.img}</span><span style="font-size:1rem;font-weight:800;color:var(--ink);font-family:'Satoshi',sans-serif">${s.nom}</span></div>`}
    <div style="padding:.9rem">
      <div style="display:flex;gap:.4rem;flex-wrap:wrap;margin-bottom:.85rem">
        <span style="padding:.2rem .55rem;border-radius:100px;background:${cv.bg};color:${cv.c};font-size:.62rem;font-weight:700">${cv.l}</span>
        <span style="padding:.2rem .55rem;border-radius:100px;background:${cplxMeta.bg};color:${cplxMeta.c};font-size:.62rem;font-weight:700">${cplxMeta.label}</span>
        <span style="padding:.2rem .55rem;border-radius:100px;background:rgba(46,102,66,.1);color:var(--fern);font-size:.62rem;font-weight:700">${s.impact||''}</span>
      </div>
      <p style="font-size:.73rem;color:var(--ink);line-height:1.6;margin-bottom:1rem">${s.desc}</p>
      ${avantagesHtml}
      ${budgetHtml}
      ${typeof iciFicheSolutionHTML==='function'?iciFicheSolutionHTML(s.nom,s.ind):''}
      ${typeof iciCorrespondancesHTML==='function'?iciCorrespondancesHTML(s):''}
      ${queteHtml}
      ${matHtml}
      ${planHtml}
    </div>`;
  modal.style.display = 'flex';
}

function creerCloseSolDetail() {
  document.getElementById('creer-sol-detail-modal').style.display = 'none';
}
