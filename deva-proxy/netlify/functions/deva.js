// ── Proxy Deva → Mistral (fonction serverless Netlify) ──
//
// Garde la clé Mistral côté serveur. Le navigateur envoie { messages: [...] },
// on ajoute le system prompt + la clé, on interroge Mistral, on renvoie { reply }.
//
// Déploiement Netlify :
//   1. functions directory = deva-proxy/netlify/functions (ou déplacer ce fichier).
//   2. Site settings → Environment variables : MISTRAL_API_KEY = ta_clé.
//   3. URL de la fonction : https://<site>.netlify.app/.netlify/functions/deva
//      → la coller dans js/deva.js (constante DEVA_API_URL).

const ALLOWED_ORIGINS = [
  'https://evadconnect.github.io',
  'http://localhost:8755',
  'http://localhost:8756'
];

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

exports.handler = async (event) => {
  const origin = (event.headers && (event.headers.origin || event.headers.Origin)) || '';
  const allowOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  const cors = {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers: cors, body: '' };
  if (event.httpMethod !== 'POST') return { statusCode: 405, headers: cors, body: JSON.stringify({ error: 'Method not allowed' }) };
  if (!process.env.MISTRAL_API_KEY) return { statusCode: 500, headers: cors, body: JSON.stringify({ error: 'MISTRAL_API_KEY manquante' }) };

  try {
    const body = JSON.parse(event.body || '{}');
    const messages = Array.isArray(body.messages) ? body.messages.slice(-20) : [];

    const r = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MISTRAL_API_KEY}`
      },
      body: JSON.stringify({
        model: 'mistral-small-latest',   // ← 'mistral-large-latest' pour + de qualité
        max_tokens: 300,
        temperature: 0.6,
        messages: [{ role: 'system', content: DEVA_SYSTEM }, ...messages]
      })
    });

    const data = await r.json();
    const reply = data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
    if (!reply) return { statusCode: 502, headers: { ...cors, 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'Réponse Mistral vide' }) };
    return { statusCode: 200, headers: { ...cors, 'Content-Type': 'application/json' }, body: JSON.stringify({ reply }) };
  } catch (e) {
    return { statusCode: 500, headers: { ...cors, 'Content-Type': 'application/json' }, body: JSON.stringify({ error: 'proxy_error', detail: String(e) }) };
  }
};
