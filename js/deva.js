/* ─── DEVA CHATBOT ─── */

let devaChatOpen = false;
let devaHistory = []; // {role, content}
let devaTyping = false;

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

function devaSuggest(btn) {
  const text = btn.textContent;
  document.getElementById('deva-chat-input').value = text;
  document.getElementById('deva-suggestions').style.display = 'none';
  devaSubmit();
}

async function devaSubmit() {
  const input = document.getElementById('deva-chat-input');
  const text = input.value.trim();
  if (!text || devaTyping) return;

  // Hide suggestions after first message
  document.getElementById('deva-suggestions').style.display = 'none';

  input.value = '';
  input.style.height = 'auto';
  devaAddMessage('user', text);
  devaHistory.push({ role: 'user', content: text });

  devaTyping = true;
  const sendBtn = document.getElementById('deva-chat-send');
  sendBtn.disabled = true;
  devaShowTyping();

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 300,
        system: DEVA_SYSTEM,
        messages: devaHistory
      })
    });

    const data = await response.json();
    devaHideTyping();

    const reply = data?.content?.[0]?.text || 'Je n\'ai pas pu répondre. Réessaie dans un instant.';
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
