// ── Proxy Deva → Mistral (fonction serverless Vercel) ──
//
// Garde la clé Mistral côté serveur (jamais dans le navigateur).
// Le navigateur envoie { messages: [...] }, on ajoute le system prompt + la
// clé, on interroge Mistral, et on renvoie { reply: "..." }.
//
// Déploiement Vercel :
//   1. Mettre ce dossier (deva-proxy/) à la racine d'un projet Vercel.
//   2. Dans Vercel → Settings → Environment Variables : MISTRAL_API_KEY = ta_clé.
//   3. URL de la fonction : https://<projet>.vercel.app/api/deva
//      → la coller dans js/deva.js (constante DEVA_API_URL).

// Origines autorisées à appeler le proxy (anti-abus). Ajoute localhost pour tes tests.
const ALLOWED_ORIGINS = [
  'https://evadconnect.github.io',
  'http://localhost:8755',
  'http://localhost:8756'
];

import knowledge from '../deva-knowledge.js';
const DEVA_KNOWLEDGE = knowledge.DEVA_KNOWLEDGE;

const DEVA_SYSTEM = `Tu es Deva, l'IA frugale et bienveillante de la plateforme EVAD (Écosystème Vivant Autonome & Décentralisé). Tu incarnes l'intelligence de l'écosystème régénératif.

Principes de Deva :
- Frugalité : réponses courtes, utiles, précises. Pas de blabla.
- Bienveillance : chaleur humaine, encouragements sincères, jamais condescendant.
- Ancrage territorial : tu connais les lieux, les acteurs, les quêtes de Nouvelle-Aquitaine.
- Tu ne réponds qu'en français.
- Tes réponses font 2-4 phrases max sauf si on te demande un développement.
- Tu peux utiliser des emojis sobrement (1-2 max par réponse).
- Tu ne prétends pas être un humain si on te le demande directement.

Tu réponds en t'appuyant STRICTEMENT sur la base de connaissances ci-dessous. Si une information n'y figure pas, dis-le simplement (« je n'ai pas cette info pour l'instant ») plutôt que d'inventer. N'utilise jamais de termes périmés comme « TERRA » ou « CUMUL ».

${DEVA_KNOWLEDGE}`;

export default async function handler(req, res) {
  const origin = req.headers.origin || '';
  const allowOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  res.setHeader('Access-Control-Allow-Origin', allowOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  if (!process.env.MISTRAL_API_KEY) return res.status(500).json({ error: 'MISTRAL_API_KEY manquante' });

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const messages = Array.isArray(body.messages) ? body.messages.slice(-20) : [];

    const r = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MISTRAL_API_KEY}`
      },
      body: JSON.stringify({
        model: 'mistral-small-latest',   // ← change pour 'mistral-large-latest' si tu veux + de qualité
        max_tokens: 300,
        temperature: 0.6,
        messages: [{ role: 'system', content: DEVA_SYSTEM }, ...messages]
      })
    });

    const data = await r.json();
    const reply = data?.choices?.[0]?.message?.content;
    if (!reply) return res.status(502).json({ error: 'Réponse Mistral vide', detail: data });
    return res.status(200).json({ reply });
  } catch (e) {
    return res.status(500).json({ error: 'proxy_error', detail: String(e) });
  }
}
