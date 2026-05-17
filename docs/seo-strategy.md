# Stratégie SEO — Observatoire du Stockage

## 1. Vision SEO globale

L'Observatoire du Stockage vise à devenir la référence francophone sur les requêtes liées au marché des espaces de stockage, à l'investissement immobilier dans les boxs, garages et entrepôts, et à la gestion locative de ce type d'actif.

Le SEO est un levier de long terme. Les premières positions sur des requêtes qualifiées s'obtiennent par la profondeur du contenu, la cohérence du maillage interne, la qualité des signaux externes et la rigueur technique — pas par du volume à court terme.

---

## 2. Stratégie SEO nationale

### Requêtes cibles principales (intention informationnelle)

| Requête | Intention | Page cible |
|---|---|---|
| investir dans un box de stockage | Comprendre / démarrer | /analyses/investir-box-stockage-fondamentaux |
| rentabilité garage location | Évaluer | /analyses/analyser-rentabilite-espace-stockage |
| acheter lot de garages | Investir | /investir |
| self-storage France marché | Comprendre le secteur | /marche |
| réglementation location garage | Légal / fiscal | /reglementation |
| fiscalité revenus garages | Légal / fiscal | /analyses/fiscalite-revenus-garages-location |
| comment louer ses garages | Exploitation | /exploiter |
| box de stockage investissement | Large | /investir |
| risques investissement garage | Due diligence | /analyses/risques-achat-lot-garages |
| bail garage locataire | Réglementaire | /reglementation |

### Clusters de mots-clés

#### Cluster 1 — Investissement
- investir dans un garage
- acheter des garages pour louer
- investissement box stockage rentabilité
- lot de garages prix achat
- rendement garage immobilier
- box de stockage investissement locatif

#### Cluster 2 — Marché
- marché du self-storage france
- self-storage tendances france
- offre stockage individuel france
- demande location box stockage

#### Cluster 3 — Exploitation
- louer ses garages particuliers
- gérer location garage box
- taux occupation garage locatif
- optimiser revenus garages

#### Cluster 4 — Réglementation
- bail garage location droit
- fiscalité garage location revenus fonciers
- TVA location garage boxs
- assurance propriétaire garage loué

#### Cluster 5 — Analyse locale
- garage location [ville] prix
- box stockage louer [ville]
- investissement garage [département]

---

## 3. Stratégie SEO locale

### Principe

Les marchés du stockage sont profondément locaux. Une page nationale sur "investir dans un garage" doit être complétée par des pages locales qui ciblent les requêtes géographiques : "box de stockage à louer Lyon", "investissement garage Bordeaux", "prix garage location Nantes".

Ces pages locales génèrent un trafic qualifié avec une forte intention de passage à l'action.

### Architecture technique des pages locales

#### Pages villes
```
/marche/[ville]
Exemples :
  /marche/paris
  /marche/lyon
  /marche/marseille
  /marche/bordeaux
  /marche/nantes
  /marche/toulouse
  /marche/lille
  /marche/strasbourg
  /marche/rennes
  /marche/nice
```

#### Pages départements
```
/marche/departements/[dept]
Exemples :
  /marche/departements/75-paris
  /marche/departements/69-rhone
  /marche/departements/13-bouches-du-rhone
  /marche/departements/33-gironde
  /marche/departements/44-loire-atlantique
```

#### Structure d'une page ville type
```tsx
// app/marche/[ville]/page.tsx
// Sections :
// 1. H1 : "Marché du stockage à [Ville] — analyse et tendances"
// 2. Contexte territorial (démographie, densité, mobilité)
// 3. Offre de stockage (types d'actifs présents)
// 4. Demande observée
// 5. Niveaux de prix observés (avec source et prudence)
// 6. Facteurs d'évolution
// 7. Points de vigilance
// 8. Articles liés
// 9. CTA newsletter
```

### Données à intégrer dans les pages locales

**Sources publiques exploitables :**
- INSEE : données démographiques et logement par commune
- Data.gouv.fr : transactions immobilières (DVF)
- Annonces locatives publiques (LeBonCoin, PAP, SeLoger Garage)
- Pages entreprises des acteurs de self-storage (nombre d'implantations)

**Formulations recommandées pour les données locales :**
- "Les annonces locatives observées sur le marché de [ville] indiquent des niveaux de loyers compris entre X et Y € par mois pour ce type d'espace — à vérifier sur le marché actuel."
- "Selon les données DVF disponibles, les transactions sur ce type de bien dans le département..."
- "La demande locative semble [soutenue / limitée] dans cette zone, au regard de [indicateurs observés]."

---

## 4. Structure de maillage interne

### Principe de silo thématique

Chaque rubrique principale (/investir, /marche, /exploiter, /reglementation, /outils) doit constituer un silo thématique :
- Les articles de la catégorie correspondante pointent vers la page rubrique
- La page rubrique pointe vers les articles
- Les articles pointent entre eux par pertinence thématique
- Toutes les pages pointent vers /newsletter et /analyses

### Liens prioritaires à créer

| Depuis | Vers | Texte d'ancre |
|---|---|---|
| /investir | /analyses/investir-box-stockage-fondamentaux | "Lire l'analyse complète" |
| /investir | /analyses/analyser-rentabilite-espace-stockage | "Analyser la rentabilité" |
| /reglementation | /analyses/reglementation-espaces-stockage-points-vigilance | "Voir les points de vigilance" |
| /exploiter | /analyses/optimiser-taux-occupation-garages | "Optimiser son taux d'occupation" |
| /marche | /analyses/marche-self-storage-france-panorama | "Panorama du self-storage" |
| Articles investissement | /reglementation | "Aspects réglementaires à vérifier" |
| Articles réglementation | /a-propos | "Notre posture éditoriale" |

---

## 5. SEO technique — état et roadmap

### En place (V1)
- [x] Métadonnées title et description sur toutes les pages
- [x] H1 unique par page
- [x] Structure H2/H3 cohérente
- [x] URLs propres et lisibles
- [x] sitemap.xml dynamique (app/sitemap.ts)
- [x] robots.txt (app/robots.ts)
- [x] Balises canoniques (alternates.canonical) sur toutes les pages
- [x] JSON-LD Article sur les pages articles
- [x] Open Graph sur les articles
- [x] Maillage interne dans le footer et les sidebars

### À implémenter (Phase 2-3)
- [ ] Balise `lang="fr"` sur le HTML (déjà présente dans layout.tsx ✓)
- [ ] Image OG générique pour le site (1200x630 px)
- [ ] Images OG individuelles par article (Next.js ImageResponse)
- [ ] Schema Organization sur le layout global
- [ ] Schema BreadcrumbList sur les articles
- [ ] Données structurées FAQPage sur les pages thématiques
- [ ] Core Web Vitals : optimiser LCP (pas d'images lourdes en V1 ✓)
- [ ] Pagination SEO-friendly sur /analyses quand le volume augmente
- [ ] Hreflang si extension vers d'autres langues (hors scope actuel)

---

## 6. Règles de prudence sur les analyses locales

Ces règles sont impératives pour préserver la crédibilité éditoriale.

1. **Ne jamais citer un prix sans source identifiable** : annonce horodatée, données DVF, retour terrain explicitement mentionné.

2. **Mentionner la date de la donnée** : les marchés locaux évoluent. Une observation de 2023 n'est pas une référence en 2025.

3. **Différencier niveaux de certitude** :
   - Fait documenté → affirmation directe avec source
   - Tendance observée → "les annonces consultées suggèrent..."
   - Hypothèse de travail → "il est raisonnable d'estimer que... sous réserve de vérification"

4. **Toujours inclure un avertissement** sur les pages locales : "Cette analyse est réalisée à titre documentaire. Elle ne constitue pas un conseil en investissement. Vérifiez les données sur le marché local actuel avant toute décision."

5. **Ne pas extrapoler** : une observation sur Paris n'est pas transposable à Lyon ou à une ville moyenne.

---

## 7. Méthode pour produire une page locale sans inventer de données

### Étape 1 — Recherche documentaire
- Consulter les données INSEE pour la commune / l'EPCI (population, ménages, logements)
- Rechercher les annonces locatives actives sur LeBonCoin, PAP, SeLoger Garage (10-20 annonces suffisent)
- Consulter DVF (data.gouv.fr/fr/datasets/demandes-de-valeurs-foncieres) pour les transactions récentes

### Étape 2 — Identifier les acteurs présents
- Rechercher les acteurs de self-storage opérant dans la ville
- Recenser les annonces de garages à louer (volume = proxy de l'offre)
- Identifier les zones d'activité et les centres commerciaux (demande professionnelle)

### Étape 3 — Rédaction avec les bons niveaux de certitude
- Décrire le contexte territorial avec des données INSEE sourcées
- Décrire les fourchettes de loyer observées "sur les annonces consultées en [mois/année]"
- Souligner les incertitudes et les variables locales
- Ne jamais promettre une rentabilité

### Étape 4 — Validation éditoriale
- Relire avec la charte éditoriale
- Vérifier que chaque chiffre est sourcé ou clairement présenté comme indicatif
- Ajouter l'avertissement légal standard
