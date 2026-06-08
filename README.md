# EVAD, Démo

Version de démonstration d'**EVAD** (Écosystème Vivant Autonome & Décentralisé) : une plateforme qui relie les **lieux durables** et leur communauté autour d'un fil rouge commun (publier un lieu, le faire vivre via des quêtes, le rendre visible sur une carte, le financer).

Cette démo est identique au prototype, **sans la visite guidée**.

## Aperçu des fonctionnalités

- **Trois profils** : Pilote d'impact (porteur de lieu), Bâtisseur d'impact (contributeur), Semeur d'impact (financeur), chacun avec son tableau de bord.
- **Carte de l'écosystème** (Leaflet) : lieux, bâtisseurs et semeurs autour de chez soi.
- **Réseau, Bibliothèque, Modélisation, Marketplace, Quêtes** : les outils du menu latéral.
- **Deva** : un assistant qui guide pas à pas.
- **Proposer une amélioration** : un canal de retour simple, accessible depuis la barre latérale.

## Lancer en local

Le fichier est autonome, mais il charge des ressources externes (Leaflet, polices) : ouvrez-le via un petit serveur local plutôt qu'en `file://`.

```bash
# Python 3
python3 -m http.server 8755
# puis ouvrir http://localhost:8755/
```

`Deva.png` doit rester à côté de `index.html` (avatar de l'assistant).

## Mettre en ligne avec GitHub Pages

1. Pousser ce dépôt sur GitHub (voir ci-dessous).
2. Dans le dépôt : **Settings → Pages**.
3. **Source** : `Deploy from a branch`, branche `main`, dossier `/ (root)`.
4. Enregistrer. Le site sera disponible à `https://<utilisateur>.github.io/<dépôt>/` après quelques instants.

Le fichier `.nojekyll` est présent pour servir le site tel quel, sans traitement Jekyll.

## Structure

```
.
├── index.html      # Structure de la page + un script IIFE resté inline
├── css/
│   └── styles.css  # Tous les styles
├── js/             # Code découpé par fonctionnalité (scripts classiques, chargés dans l'ordre)
│   ├── splash-onboarding.js      # Écran d'accueil + choix du rôle
│   ├── data-nextcloud.js         # Données des apps EVAD Connect
│   ├── data-reseau.js            # Données réseau / parcours REGEN
│   ├── regen-loop.js             # Boucle REGEN réutilisable
│   ├── app-core.js               # Cœur : navigation, écrans, carte, données
│   ├── deva.js                   # Assistant Deva
│   ├── nav-mobile.js             # Barre de navigation mobile
│   ├── auth.js                   # Fenêtre de connexion
│   ├── espace-modal.js           # Fermeture de la modale espace
│   ├── quetes.js                 # Quêtes & perma-comptabilité
│   ├── contribution.js           # Saisie de contribution
│   └── fil-rouge-feedback.js     # Lieu actif partagé + retours
├── Deva.png        # Avatar de l'assistant Deva
├── .nojekyll       # Sert le site sans traitement Jekyll (GitHub Pages)
├── .gitignore
└── README.md
```

> Note : les fichiers JS sont des **scripts classiques** chargés dans l'ordre (pas des modules ES). Ils partagent la portée globale, ce qui préserve les nombreux gestionnaires `onclick` du HTML.

## Technique

- HTML, CSS et JavaScript natifs, sans build ni dépendance à installer.
- [Leaflet](https://leafletjs.com/) pour la carte (via CDN).
- Les données saisies (fiches, retours) sont conservées en local dans le navigateur (`localStorage`) ; il n'y a pas encore de backend.

## Droits

© 2026 EVAD. Tous droits réservés.
