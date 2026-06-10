/* ─── DEVA CHATBOT ─── */

let devaChatOpen = false;
let devaHistory = []; // {role, content}
let devaTyping = false;

// URL de ton proxy Deva (fonction Vercel/Netlify qui détient la clé Mistral).
// Le navigateur n'appelle jamais Mistral directement (la clé doit rester secrète).
// Exemples :
//   Vercel  : 'https://evad-deva.vercel.app/api/deva'
//   Netlify : 'https://evad-deva.netlify.app/.netlify/functions/deva'
// Laisser vide tant que le proxy n'est pas déployé (Deva affichera un message d'attente).
const DEVA_API_URL = 'https://demo-chi-seven-49.vercel.app/api/deva';

// ─── Compteur d'empreinte de la conversation ───
// Coût estimé d'UNE question à l'IA (ordre de grandeur, modèle frugal + réponses
// courtes). Affiché pour sensibiliser, repart de zéro à chaque chargement de page.
const ECO_PER_MSG = { wh: 1.5, water: 18, co2: 0.9 }; // Wh, mL d'eau, g CO₂e
let devaQueryCount = 0;

const devaFmtWater = (ml) => ml >= 1000 ? (ml / 1000).toFixed(ml >= 10000 ? 1 : 2).replace('.', ',') + ' L' : Math.round(ml) + ' mL';
const devaFmtCo2 = (g) => g >= 1000 ? (g / 1000).toFixed(2).replace('.', ',') + ' kg' : (g < 10 ? g.toFixed(1).replace('.', ',') : Math.round(g)) + ' g';
const devaFmtWh = (wh) => wh >= 1000 ? (wh / 1000).toFixed(2).replace('.', ',') + ' kWh' : (wh < 10 ? wh.toFixed(1).replace('.', ',') : Math.round(wh)) + ' Wh';

function devaUpdateEco() {
  const n = devaQueryCount;
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('deva-eco-count', n + ' question' + (n > 1 ? 's' : ''));
  set('deva-eco-summary', '≈ ' + devaFmtWh(n * ECO_PER_MSG.wh) + ' · ' + devaFmtWater(n * ECO_PER_MSG.water) + ' · ' + devaFmtCo2(n * ECO_PER_MSG.co2) + ' CO₂');
  set('deva-eco-wh', devaFmtWh(n * ECO_PER_MSG.wh));
  set('deva-eco-water', devaFmtWater(n * ECO_PER_MSG.water));
  set('deva-eco-co2', devaFmtCo2(n * ECO_PER_MSG.co2));
}

function devaEcoToggle() {
  const d = document.getElementById('deva-eco-detail');
  const ch = document.getElementById('deva-eco-chevron');
  const btn = document.getElementById('deva-eco-toggle');
  if (!d) return;
  const isOpen = d.style.display !== 'none';
  d.style.display = isOpen ? 'none' : 'block';
  if (ch) ch.style.transform = isOpen ? 'none' : 'rotate(180deg)';
  if (btn) btn.setAttribute('aria-expanded', String(!isOpen));
}

function devaOffset() {
  devaAddMessage('deva', '🌿 Pour équilibrer l\'empreinte de notre échange, tu peux soutenir un lieu pilote ou devenir membre d\'EVAD. Et côté sobriété, des questions précises suffisent souvent 🌱');
  try { window.open('https://www.helloasso.com/associations/evad-connect/formulaires/1', '_blank', 'noopener'); } catch (e) {}
}

const DEVA_SYSTEM = `Tu es Deva, l'IA frugale et bienveillante de la plateforme EVAD (Écosystème Vivant d'Action et de Développement). Tu incarnes l'intelligence de l'écosystème régénératif.

Principes de Deva :
- Frugalité : réponses courtes, utiles, précises. Pas de blabla.
- Bienveillance : chaleur humaine, encouragements sincères, jamais condescendant.
- Ancrage territorial : tu connais les lieux, les acteurs, les quêtes de Nouvelle-Aquitaine.
- Vocabulaire EVAD : Pilote = gestionnaire de lieu, Bâtisseur = citoyen actif, Semeur = financeur/entreprise, Quête = mission d'impact, graines/TERRA = monnaie locale, CUMUL = mesure d'impact territorial.
- Tu ne réponds qu'en français.
- Tes réponses font 2-4 phrases max sauf si on te demande un développement.
- Tu peux utiliser des emojis sobrement (1-2 max par réponse).
- Tu ne prétends pas être un humain si on te le demande directement.`;

function devaToggleChat() {
  devaChatOpen = !devaChatOpen;
  const win = document.getElementById('deva-chat-window');
  win.classList.toggle('open', devaChatOpen);
  if (devaChatOpen && devaHistory.length === 0) {
    devaAddMessage('deva', 'Bonjour 🌿 Je suis Deva, l\'esprit régénératif d\'EVAD. Que puis-je faire pour toi aujourd\'hui ?');
  }
  if (devaChatOpen) {
    setTimeout(() => document.getElementById('deva-chat-input').focus(), 280);
    // Réinitialise le badge
    const badge = document.getElementById('deva-unread-badge');
    if (badge) { badge.style.display = 'none'; badge.textContent = '0'; }
  }
}

function devaShowUnread() {
  if (devaChatOpen) return;
  const badge = document.getElementById('deva-unread-badge');
  if (!badge) return;
  const count = (parseInt(badge.textContent) || 0) + 1;
  badge.textContent = count;
  badge.style.display = 'flex';
  // Petite animation pop
  badge.style.animation = 'none';
  badge.offsetWidth; // reflow
  badge.style.animation = 'devaBadgePop .3s cubic-bezier(.17,.67,.42,1.4) both';
}

function devaAddMessage(role, text) {
  const container = document.getElementById('deva-chat-messages');
  const el = document.createElement('div');
  el.className = 'deva-msg deva-msg-' + role;
  if (role === 'deva') {
    el.innerHTML = `<div class="deva-msg-sender">✦ Deva</div>${escapeHtml(text).replace(/\n/g,'<br>')}`;
    devaShowUnread();
  } else {
    el.textContent = text;
  }
  container.appendChild(el);
  container.scrollTop = container.scrollHeight;
}

function devaShowTyping() {
  const container = document.getElementById('deva-chat-messages');
  const el = document.createElement('div');
  el.id = 'deva-typing-indicator';
  el.className = 'deva-msg-typing';
  el.innerHTML = '<div class="deva-typing-dot"></div><div class="deva-typing-dot"></div><div class="deva-typing-dot"></div>';
  container.appendChild(el);
  container.scrollTop = container.scrollHeight;
}

function devaHideTyping() {
  const el = document.getElementById('deva-typing-indicator');
  if (el) el.remove();
}

async function devaSubmit() {
  const input = document.getElementById('deva-chat-input');
  const text = input.value.trim();
  if (!text || devaTyping) return;

  input.value = '';
  input.style.height = 'auto';
  devaAddMessage('user', text);
  devaHistory.push({ role: 'user', content: text });
  devaQueryCount++;
  devaUpdateEco();

  devaTyping = true;
  const sendBtn = document.getElementById('deva-chat-send');
  sendBtn.disabled = true;
  devaShowTyping();

  // Proxy pas encore branché : message d'attente clair plutôt qu'une erreur réseau.
  if (!DEVA_API_URL) {
    devaHideTyping();
    devaAddMessage('deva', 'Je ne suis pas encore reliée à mon moteur 🌱 Renseigne l\'URL du proxy Mistral (DEVA_API_URL dans js/deva.js) pour m\'activer.');
    devaTyping = false; sendBtn.disabled = false; input.focus();
    return;
  }

  try {
    // Appel du proxy (Vercel/Netlify) qui ajoute la clé + le system prompt et
    // interroge Mistral. On n'envoie que l'historique de conversation.
    const response = await fetch(DEVA_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: devaHistory })
    });

    const data = await response.json();
    devaHideTyping();

    const reply = data?.reply || 'Je n\'ai pas pu répondre. Réessaie dans un instant.';
    devaHistory.push({ role: 'assistant', content: reply });
    devaAddMessage('deva', reply);

    // Update pill status
    document.getElementById('deva-pill-status').textContent = 'Répond';
    setTimeout(() => { document.getElementById('deva-pill-status').textContent = 'Active'; }, 2000);

  } catch (err) {
    devaHideTyping();
    devaAddMessage('deva', 'Une erreur réseau m\'a interrompue. Vérifie ta connexion et réessaie.');
  }

  devaTyping = false;
  sendBtn.disabled = false;
  input.focus();
}

function escapeHtml(t) {
  return t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// Close on outside click
document.addEventListener('click', (e) => {
  if (!devaChatOpen) return;
  const win = document.getElementById('deva-chat-window');
  const pill = document.getElementById('deva-pill-btn');
  if (!win.contains(e.target) && !pill.contains(e.target)) devaToggleChat();
});
