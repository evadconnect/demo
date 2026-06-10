# Proxy Deva → Mistral

Petit intermédiaire serverless qui fait répondre **Deva** (l'assistant EVAD) via
l'API **Mistral**, sans jamais exposer la clé d'API dans le navigateur.

```
Navigateur (deva.js)  →  CE proxy (garde la clé)  →  api.mistral.ai  →  réponse
```

Le navigateur envoie `{ "messages": [ {role, content}, ... ] }`.
Le proxy ajoute le *system prompt* de Deva + la clé Mistral, interroge
`mistral-small-latest`, et renvoie `{ "reply": "..." }`.

## 1. Récupérer une clé Mistral
- Crée un compte sur https://console.mistral.ai/ → **API Keys** → nouvelle clé.

## 2. Déployer le proxy

### Option Vercel
1. Nouveau projet Vercel à partir de ce dossier `deva-proxy/`
   (ou copie `api/deva.js` à la racine d'un projet Vercel).
2. **Settings → Environment Variables** : `MISTRAL_API_KEY = ta_clé`.
3. Deploy. L'URL de la fonction est :
   `https://<projet>.vercel.app/api/deva`

### Option Netlify
1. Functions directory = `deva-proxy/netlify/functions`
   (ou copie `netlify/functions/deva.js` dans le dossier functions de ton site).
2. **Site settings → Environment variables** : `MISTRAL_API_KEY = ta_clé`.
3. Deploy. L'URL de la fonction est :
   `https://<site>.netlify.app/.netlify/functions/deva`

## 3. Brancher le front
Dans [`../js/deva.js`](../js/deva.js), renseigne la constante :

```js
const DEVA_API_URL = 'https://<ton-proxy>/api/deva'; // l'URL de l'étape 2
```

Commit + push → Deva répond. Tant que c'est vide, Deva affiche un message d'attente.

## Notes
- **Sécurité** : la clé reste uniquement côté serveur. Les origines autorisées à
  appeler le proxy sont listées dans `ALLOWED_ORIGINS` (ajoute/retire au besoin).
- **Modèle** : `mistral-small-latest` (rapide, économique). Passe à
  `mistral-large-latest` dans le fichier de la fonction pour plus de qualité.
- **Coût** : facturé par Mistral à l'usage (tokens). `max_tokens` est limité à 300.
- Le *system prompt* de Deva vit dans la fonction (source de vérité), pas dans le navigateur.
