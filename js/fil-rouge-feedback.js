/* ═══════════════ FIL ROUGE : contexte « lieu actif » partagé entre apps ═══════════════
   Fait circuler le lieu d'un écran à l'autre : Tableau de bord → Réseau → Carte.        */
const EVAD = {
  activeLieu: { nom:'La Ferme des Possibles', ville:'Nantes', lat:47.2184, lng:-1.5536, icon:'🌾', type:'ferme' }
};

/* Localisation des lieux & acteurs de démo (résolus par nom, puis par ville) */
const EVAD_LIEU_LOC = {
  'La Ferme des Possibles' : {ville:'Nantes',            lat:47.2184, lng:-1.5536, icon:'🌾', type:'ferme'},
  'Tiers-lieu La Centrale' : {ville:'Angers',            lat:47.4712, lng:-0.5518, icon:'🏛', type:'tiers'},
  'Léa M.'                 : {ville:'Rezé',              lat:47.1963, lng:-1.5490, icon:'🌿', type:'tiers'},
  'Fondation Terre Vivante': {ville:'Nouvelle-Aquitaine',lat:45.7000, lng:0.3000,  icon:'🌱', type:'tiers'},
  'Hugo & le collectif'    : {ville:'Saint-Herblain',   lat:47.2146, lng:-1.6490, icon:'🌿', type:'tiers'},
};
const EVAD_VILLE_LOC = {
  'Nantes':{lat:47.2184,lng:-1.5536}, 'Rezé':{lat:47.1963,lng:-1.5490},
  'Angers':{lat:47.4712,lng:-0.5518}, 'Saint-Herblain':{lat:47.2146,lng:-1.6490},
  'Nouvelle-Aquitaine':{lat:45.7000,lng:0.3000},
};

/* Lieu actif courant : le lieu créé (cData) s'il existe, sinon le lieu de démo */
function evadCurrentLieu(){
  if (typeof cData !== 'undefined' && cData && cData.nom){
    const t = (typeof TYPES_LIEU !== 'undefined') ? TYPES_LIEU.find(x=>x.id===cData.type) : null;
    return {
      nom:   cData.nom,
      ville: cData.ville || EVAD.activeLieu.ville,
      lat:   (cData.lat != null) ? cData.lat : EVAD.activeLieu.lat,
      lng:   (cData.lng != null) ? cData.lng : EVAD.activeLieu.lng,
      icon:  cData.icon || (t && t.ic) || '📍',
      type:  cData.type || 'tiers',
    };
  }
  return EVAD.activeLieu;
}

/* ── Tableau de bord → Réseau : publier une quête depuis son lieu ── */
function evadPublishLieuToReseau(){
  const l = evadCurrentLieu();
  EVAD.activeLieu = l;
  EVAD_LIEU_LOC[l.nom] = {ville:l.ville, lat:l.lat, lng:l.lng, icon:l.icon, type:l.type};
  const post = {
    profile:'pilote', author:l.nom, lieu:l.ville, time:'à l\'instant',
    type:'quete', regen:'entreprendre',
    text:"On ouvre une nouvelle quête sur notre lieu 🌿 On mobilise des Bâtisseurs pour passer à l'action, rejoignez-nous !",
    quest:{titre:'Installer une cuve de récupération d\'eau', meta:'1 journée · 4 pers. · +8 pts eau'},
    cta:'Rejoindre la quête'
  };
  if (typeof RESEAU_POSTS !== 'undefined') RESEAU_POSTS.unshift(post);
  showScreen('reseau');
  setTimeout(()=>{
    if (typeof reseauTab === 'function'){ try { reseauTab('fil', document.getElementById('rtab-fil')); } catch(e){} }
    if (typeof reseauSetFilter === 'function') reseauSetFilter('tout', document.querySelector('.reseau-filter[data-f="tout"]'));
  }, 120);
  if (typeof mmBubble === 'function') mmBubble('📣 Quête publiée au Réseau depuis ton tableau de bord !');
}

/* ── Réseau → Carte : localiser le lieu d'un post ── */
let evadFocusMarker = null;
function evadGoLieu(nom, ville){
  const loc = EVAD_LIEU_LOC[nom] || (ville && EVAD_LIEU_LOC[ville]) || (ville && EVAD_VILLE_LOC[ville]) || EVAD_VILLE_LOC[nom] || null;
  EVAD.activeLieu = Object.assign({}, EVAD.activeLieu, {nom: nom || EVAD.activeLieu.nom}, loc || {});
  showScreen('carte');
  setTimeout(()=>{
    if (!evadMap) return;
    try { evadMap.invalidateSize(); } catch(e){}
    if (loc && loc.lat != null){
      if (evadFocusMarker){ try { evadMap.removeLayer(evadFocusMarker); } catch(e){} }
      const ic = (typeof createEmojiIcon === 'function')
        ? createEmojiIcon(loc.icon||'📍', (typeof markerBgByType==='function' ? markerBgByType(loc.type||'tiers') : '#018262'))
        : null;
      evadFocusMarker = L.marker([loc.lat, loc.lng], ic ? {icon:ic} : {}).addTo(evadMap);
      evadFocusMarker.bindPopup('<div class="popup-place-title">'+(nom||'Lieu')+'</div><div class="popup-place-meta">📍 '+(loc.ville||ville||'')+'</div>', {className:'custom-popup'}).openPopup();
      evadMap.flyTo([loc.lat, loc.lng], 13, {duration:.8});
    }
  }, 220);
  if (typeof mmBubble === 'function') mmBubble('🗺 '+(nom||'Lieu')+' localisé sur la carte');
}

/* ─────────────────────────────────────────────────────────────
   PROPOSER UNE AMÉLIORATION
   Boîte simple, sans jargon, pour recueillir une idée / un blocage.
   Prototype : pas de backend, on garde l'envoi en local + un merci.   */
function evadFeedbackEnsureDom(){
  if (document.getElementById('evad-feedback')) return;
  const wrap = document.createElement('div');
  wrap.id = 'evad-feedback';
  wrap.style.cssText = 'display:none;position:fixed;inset:0;z-index:100000;font-family:\'Satoshi\',sans-serif';
  wrap.innerHTML =
    '<div style="position:absolute;inset:0;background:rgba(13,43,34,.6);backdrop-filter:blur(4px)" onclick="closeAmelioration()"></div>'
  + '<div role="dialog" aria-label="Proposer une amélioration" style="position:relative;max-width:460px;width:calc(100% - 2rem);margin:6vh auto 0;background:#fff;border-radius:20px;box-shadow:0 24px 60px rgba(0,0,0,.32);overflow:hidden">'
  +   '<div style="padding:1.3rem 1.4rem 0">'
  +     '<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:1rem">'
  +       '<div>'
  +         '<div style="font-size:1.1rem;font-weight:800;color:var(--ink)">💡 Proposer une amélioration</div>'
  +         '<div style="font-size:.82rem;line-height:1.5;color:var(--moss);margin-top:.4rem">Une idée, un truc qui te bloque, un mot pas clair ? Dis-le avec tes mots, ça nous aide à améliorer EVAD.</div>'
  +       '</div>'
  +       '<button onclick="closeAmelioration()" aria-label="Fermer" style="flex-shrink:0;background:none;border:none;font-size:1.2rem;line-height:1;color:var(--moss);opacity:.5;cursor:pointer">✕</button>'
  +     '</div>'
  +   '</div>'
  +   '<div id="evad-feedback-form" style="padding:1.1rem 1.4rem 1.4rem">'
  +     '<label style="display:block;font-size:.72rem;font-weight:700;color:var(--moss);margin-bottom:.35rem">Ça concerne…</label>'
  +     '<select id="evad-feedback-cat" style="width:100%;padding:.6rem .7rem;border-radius:10px;border:1px solid rgba(46,102,66,.2);font-family:\'Satoshi\',sans-serif;font-size:.82rem;color:var(--ink);background:#fff;margin-bottom:.9rem">'
  +       '<option>L\'ensemble d\'EVAD</option>'
  +       '<option>📊 Tableau de bord</option>'
  +       '<option>🗂 Gestion de projet</option>'
  +       '<option>🗺 Carte</option>'
  +       '<option>🌍 Réseau</option>'
  +       '<option>📚 Bibliothèque</option>'
  +       '<option>🧊 Modélisation</option>'
  +       '<option>🛖 Marketplace</option>'
  +       '<option>⚡ Les quêtes</option>'
  +       '<option>👤 Mon espace / mon profil</option>'
  +       '<option>💬 Deva (l\'assistant)</option>'
  +       '<option>Autre chose</option>'
  +     '</select>'
  +     '<label style="display:block;font-size:.72rem;font-weight:700;color:var(--moss);margin-bottom:.35rem">Ton idée</label>'
  +     '<textarea id="evad-feedback-text" rows="4" placeholder="Écris ton idée ici, simplement…" style="width:100%;padding:.7rem .8rem;border-radius:12px;border:1px solid rgba(46,102,66,.2);font-family:\'Satoshi\',sans-serif;font-size:.85rem;line-height:1.5;color:var(--ink);resize:vertical"></textarea>'
  +     '<div id="evad-feedback-hint" style="font-size:.7rem;color:var(--terracotta);margin-top:.4rem;height:1rem"></div>'
  +     '<div style="display:flex;align-items:center;justify-content:flex-end;gap:.6rem;margin-top:.5rem">'
  +       '<button onclick="closeAmelioration()" style="background:none;border:none;color:var(--moss);font-size:.8rem;font-weight:600;cursor:pointer;padding:.5rem .6rem">Annuler</button>'
  +       '<button onclick="submitAmelioration()" style="background:var(--forest);color:#fff;border:none;border-radius:100px;padding:.55rem 1.3rem;font-size:.8rem;font-weight:700;cursor:pointer">Envoyer</button>'
  +     '</div>'
  +   '</div>'
  +   '<div id="evad-feedback-thanks" style="display:none;padding:2rem 1.4rem 2.2rem;text-align:center">'
  +     '<div style="font-size:2.2rem">🌱</div>'
  +     '<div style="font-size:1rem;font-weight:800;color:var(--ink);margin-top:.5rem">Merci pour ton idée !</div>'
  +     '<div style="font-size:.82rem;line-height:1.5;color:var(--moss);margin-top:.4rem;max-width:320px;margin-left:auto;margin-right:auto">On la lit avec attention. Chaque retour aide à rendre EVAD plus simple pour tout le monde.</div>'
  +     '<button onclick="closeAmelioration()" style="margin-top:1.1rem;background:var(--forest);color:#fff;border:none;border-radius:100px;padding:.55rem 1.4rem;font-size:.8rem;font-weight:700;cursor:pointer">Fermer</button>'
  +   '</div>'
  + '</div>';
  document.body.appendChild(wrap);
}

function openAmelioration(){
  evadFeedbackEnsureDom();
  document.getElementById('evad-feedback-form').style.display = 'block';
  document.getElementById('evad-feedback-thanks').style.display = 'none';
  document.getElementById('evad-feedback-text').value = '';
  document.getElementById('evad-feedback-hint').textContent = '';
  document.getElementById('evad-feedback').style.display = 'block';
  setTimeout(() => { const t = document.getElementById('evad-feedback-text'); if (t) t.focus(); }, 60);
}

function closeAmelioration(){
  const w = document.getElementById('evad-feedback');
  if (w) w.style.display = 'none';
}

function submitAmelioration(){
  const txt = (document.getElementById('evad-feedback-text').value || '').trim();
  if (!txt){
    document.getElementById('evad-feedback-hint').textContent = 'Écris quelques mots avant d\'envoyer 🙂';
    document.getElementById('evad-feedback-text').focus();
    return;
  }
  // Prototype : on conserve localement (pas de backend)
  try {
    const cat = document.getElementById('evad-feedback-cat').value;
    const all = JSON.parse(localStorage.getItem('evad_feedback') || '[]');
    all.push({ cat, txt, role: (typeof currentRole !== 'undefined' ? currentRole : null) });
    localStorage.setItem('evad_feedback', JSON.stringify(all));
  } catch(e){}
  document.getElementById('evad-feedback-form').style.display = 'none';
  document.getElementById('evad-feedback-thanks').style.display = 'block';
}
