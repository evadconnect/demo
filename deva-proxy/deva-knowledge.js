// ── Base de connaissances EVAD pour Deva ──
// Source unique de vérité injectée dans le prompt système (Vercel + Netlify).
// Pour mettre Deva à jour : édite ce fichier, commit + push → le proxy redéploie.
// Format CommonJS pour être lisible aussi bien par api/deva.js (ESM, Vercel)
// que par netlify/functions/deva.js (CommonJS).

const DEVA_KNOWLEDGE = `# Base de connaissances EVAD

## EVAD en bref
EVAD = Écosystème Vivant Autonome & Décentralisé. Une plateforme qui relie les lieux durables (tiers-lieux, écolieux, fermes, fablabs, ressourceries, cafés associatifs…) et leur communauté en Nouvelle-Aquitaine, autour d'un fil rouge : publier un lieu, le faire vivre via des quêtes, le rendre visible sur une carte, le financer, et prouver son impact. Esprit solarpunk, communs ouverts, open source.

## Les 3 profils
- Pilote d'impact : porteur d'un lieu (tiers-lieu, écolieu, ferme, association, incubateur…). Il coordonne son lieu, publie des quêtes, déclare ses solutions et certifie ses preuves d'impact.
- Bâtisseur d'impact : citoyen, étudiant, entrepreneur qui passe à l'action. Il rejoint des quêtes concrètes sur le terrain et gagne du Vade en contrepartie. De l'éco-anxiété à l'éco-action.
- Semeur d'impact : financeur (fondation, collectivité, entreprise, investisseur). Il finance des projets en euros contre des preuves d'impact vérifiées (la Vadité).

## La Boucle VADE (le parcours d'un lieu)
Un même parcours, un cran plus haut à chaque tour. On peut entrer par l'étape qui correspond au lieu :
- V · Valoriser l'existant : établir la base de référence T0 et repérer l'impact déjà présent. Outils : Diagnostic T0, Bibliothèque d'ICI, Deva.
- A · Activer les solutions : déclarer les solutions mises en œuvre et mobiliser la communauté. Outils : catalogue de solutions, déclaration des ICI, quêtes.
- D · Développer la preuve : mesurer et prouver l'impact, puis sécuriser le financement. Outils : mesure d'impact, attestation Vadité, monnaie Vade.
- E · Élever le commun : faire vérifier par les pairs et l'audit, faire remonter les retours dans le référentiel. Outils : audit tiers, passeport du lieu, amendement du commun.

## La mesure d'impact : les ICI
ICI = Indicateur de Changement d'Impact. C'est l'unité élémentaire de mesure : la variation d'une grandeur précise et vérifiable entre une base de référence (T0) et un état ultérieur, attribuable à l'action menée sur le lieu. L'impact, c'est la flèche (le changement attribuable), jamais la hauteur du point d'arrivée.
Chaque ICI est entièrement défini par : son unité (kg CO2e, m², ETP, personnes…), son sens (une hausse ou une baisse est-elle favorable), son point 0 et son point 100 (la base et la référence d'un changement « excellent »), la source de la référence, le type de lieu, le niveau de preuve requis, son poids, sa version.
Chaque solution mise en œuvre porte déjà ses ICI prédéfinis. Le Pilote déclare ses solutions ; la donnée est saisie une seule fois, puis restituée sous plusieurs formes.

## Normalisation et triple capital
Normalisation : chaque ICI est ramené sur une échelle 0–100 (la valeur observée est projetée entre la base T0 et la référence, plafonnée à 100). La référence est fixée par la méthode, jamais par le Pilote.
Triple capital (le « triptyque ») : trois livres toujours présentés ensemble, jamais un score nu :
- Écologie : biodiversité, climat & carbone, eau & ressources ;
- Social : emploi & insertion, inclusion, lien & bien-être ;
- Économie locale : activité & emploi ancrés au territoire, valeur retenue (circuits courts), résilience.
Non-compensation : un capital élevé ne rachète jamais un capital faible. Un plancher par capital déclenche une alerte si un capital passe sous le seuil.
Pondération : par défaut les 3 capitaux pèsent à parts égales (un tiers chacun). Variantes possibles : pondération territorialisée (fixée par la gouvernance) ou vue par usage (un financeur applique ses propres poids sans altérer les scores canoniques).

## Vadance, Vadité, taux de tenue, échelle de preuve
- Vadance : le score d'impact PROJETÉ d'un lieu ou projet, sur 100. La promesse. Calculée sur les valeurs projetées (plan, modélisation). Elle sert à mobiliser et à lever le capital.
- Vadité : l'impact réellement PROUVÉ et vérifié. La preuve. Calculée sur les valeurs prouvées, chaque sous-score étant décoté selon son niveau de preuve. C'est ce que reçoit le financeur ; elle libère le capital.
- Taux de tenue = Vadité ÷ Vadance : la capacité d'un lieu à transformer ses promesses en preuves. L'indicateur anti-greenwashing par excellence.
- Échelle de preuve (du plus faible au plus fort ; le sous-score est d'autant plus décoté que la preuve est faible) : déclaratif → documentaire → validé par les pairs → audit tiers indépendant.

## La monnaie Vade
Le Vade est la monnaie locale d'EVAD, frappée sur impact prouvé. Elle circule en boucle fermée entre Bâtisseurs et Pilotes, en contrepartie de biens et services réels. Les graines sont la forme de récompense côté Bâtisseur. Le Vade n'est PAS convertible en euros et ne sort pas de l'écosystème : la valeur reste sur le territoire. Circuit : les euros des Semeurs financent les Pilotes ; le Vade gagné par les Bâtisseurs est dépensé chez les Pilotes (boucle fermée) ; en retour, le Semeur reçoit la Vadité.

## Correspondances avec les référentiels externes
Les ICI se relient aux référentiels existants par des tables de correspondance. La donnée canonique reste l'ICI ; les ODD, les ESRS (CSRD) et le VSME sont des VUES DÉRIVÉES (un mapping, pas une conversion). Le mapping ODD est utile pour le récit mais reste lâche ; la rigueur repose sur les ICI mesurés.

## Les 9 outils, un seul compte
Carte, Bibliothèque de solutions, Modélisation 3D (jumeau numérique sous Luanti, le « Minecraft » libre), Mesure d'impact (les ICI), Réseau social, Marketplace (en Vade), Gestion de projet, Deva (l'IA), Tableau de bord.

## Modèle économique
EVAD ne vend pas l'impact : EVAD vend le passage. C'est la membrane entre l'économie en euros (rare, qui exige preuve et sécurité) et le local régénératif (abondant mais à sec de cash). EVAD se rémunère par une commission plafonnée sur la confiance (la preuve, la Vadité) et la coordination. La valeur reste au territoire. Modèle antifragile : chaque crise (écologique, sociale, économique) crée de la demande.

## Gouvernance & licence
La méthode est un commun ouvert : référentiel public, inspectable et amendable. Ce qu'EVAD garde, c'est l'exécution (le registre, la vérification, l'attestation), pas la formule. La gouvernance du référentiel est distincte de l'intérêt commercial ; tout barème est daté et versionné. Charte des ICI v0.1 (juin 2026), licence CC BY-SA 4.0. Devise : « Dire moins, et le prouver. »

## Glossaire express
- ICI : la variation d'une grandeur contre une base de référence T0 (l'unité de mesure).
- Vadance : le score d'impact projeté (la promesse, sur 100).
- Vadité : l'impact réellement prouvé et vérifié (la preuve).
- Triptyque : l'affichage des trois capitaux ensemble, jamais un score nu.
- Plancher : le seuil par capital qui déclenche l'alerte de non-compensation.
- Taux de tenue : Vadité ÷ Vadance.
- Vade : la monnaie locale, frappée sur impact prouvé, en boucle fermée.
- Quête : une mission d'impact concrète portée par un lieu, à laquelle les Bâtisseurs contribuent.`;

module.exports = { DEVA_KNOWLEDGE };
