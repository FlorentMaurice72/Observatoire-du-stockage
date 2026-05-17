# Roadmap — Observatoire du Stockage

## Phase 1 — Fondations éditoriales et site vitrine média
**Objectif** : Créer la structure technique et éditoriale de base du média.

### Livrables
- [x] Site Next.js avec App Router, TypeScript, Tailwind CSS
- [x] Pages principales : Accueil, Analyses, Marché, Investir, Exploiter, Réglementation, Outils, Newsletter, À propos, Contact, Mentions légales, RGPD
- [x] Template article avec sommaire, encadrés éditoriaux et articles liés
- [x] Premier article de fond : "Investir dans un box de stockage : les fondamentaux"
- [x] 7 articles placeholders pour chaque catégorie
- [x] Charte éditoriale documentée
- [x] Design premium, responsive, SEO-ready
- [x] Architecture extensible (slugs, catégories, tags)

### Critères de succès
- Site déployable sur Vercel sans erreur
- Design cohérent sur mobile, tablette et desktop
- Structure SEO technique en place (title, description, H1 uniques, URLs propres)
- Charte éditoriale claire pour guider les futures publications

---

## Phase 2 — Production de contenus SEO
**Objectif** : Construire un corpus de contenus de fond référençable.

### Contenus prioritaires
- Guides complets par type d'actif (box, garage, entrepôt, container)
- Analyses des fondamentaux : rentabilité, charges, vacance, fiscalité
- Guides comparatifs : location nue vs meublée, SCI vs nom propre
- Articles "longue traîne" sur des questions fréquentes des investisseurs
- Fiches pratiques : checklist d'achat, grille d'analyse d'un projet

### Objectifs de contenu
- 20 articles publiés à fin Phase 2
- Couverture des 7 catégories éditoriales
- Maillage interne structuré

---

## Phase 3 — Analyses locales par ville et département
**Objectif** : Devenir la référence pour les analyses de marché local.

### Structure à mettre en place
- Pages dynamiques par ville (`/marche/[ville]`)
- Pages dynamiques par département (`/marche/departements/[dept]`)
- Méthodologie d'analyse locale standardisée (cf. charte éditoriale)
- Carte interactive des analyses disponibles

### Villes prioritaires (Phase 3a)
Paris, Lyon, Marseille, Bordeaux, Nantes, Toulouse, Lille, Strasbourg

### Départements prioritaires (Phase 3b)
Île-de-France, Rhône, Bouches-du-Rhône, Gironde, Loire-Atlantique

---

## Phase 4 — Outils gratuits
**Objectif** : Créer des ressources interactives à haute valeur ajoutée.

### Outils prioritaires
- **Calculateur de rentabilité** : prix d'achat, loyer, charges, vacance, fiscalité → rentabilité brute et nette estimée
- **Checklist d'acquisition** téléchargeable (PDF)
- **Grille d'analyse de marché local** téléchargeable
- **Modèle de suivi locatif** (tableur exportable)
- **Simulateur de charges** selon type d'actif

### Infrastructure nécessaire
- Composants React interactifs
- Optionnel : persistance locale (localStorage)
- Optionnel : export PDF ou CSV

---

## Phase 5 — Newsletter et communauté
**Objectif** : Construire une audience fidèle et engagée.

### Étapes
- Intégration d'un outil d'email marketing (Brevo, Mailchimp, ConvertKit...)
- Formulaires d'inscription opérationnels sur tout le site
- Template de newsletter éditoriale mensuelle ou bimensuelle
- Segmentation par intérêt (investisseur, exploitant, professionnel)
- Optionnel : espace commentaires sur les articles (Disqus, Giscus...)

### Indicateurs à suivre
- Taux d'ouverture et de clic
- Taux de désabonnement
- Origine des inscriptions par page

---

## Phase 6 — Monétisation douce
**Objectif** : Générer des revenus sans compromettre l'indépendance éditoriale.

### Sources de revenus envisagées
- **Affiliation** : liens affiliés vers des services pertinents (assurances, comptabilité, notaires partenaires) — avec déclaration systématique
- **Partenariats éditoriaux** : contenus sponsorisés clairement identifiés, avec charte stricte de non-ingérence sur le ton éditorial
- **Ressources premium** : guides avancés, analyses approfondies, templates téléchargeables (modèle freemium)
- **Leads qualifiés** : mise en relation avec des professionnels partenaires (notaires, comptables, gestionnaires) — avec accord explicite de l'utilisateur

### Règles à respecter
- Toute relation commerciale doit être déclarée de manière transparente
- Les partenariats n'influencent pas le contenu éditorial
- Aucun contenu commercial ne doit être présenté comme éditorial

---

## Phase 7 — Intégration future de produits, services ou SaaS
**Objectif** : Explorer les opportunités de produits à forte valeur ajoutée.

### Pistes à explorer (non prioritaires)
- **Espace membre** : accès à des analyses avancées, outils premium, base de données locales
- **SaaS de gestion locative spécialisé** : suivi des baux, loyers, taux d'occupation, tableaux de bord — orienté spécifiquement stockage
- **Annuaire de professionnels** : notaires, avocats, comptables, gestionnaires spécialisés dans ce type d'actif
- **Marketplace de données** : accès payant à des analyses locales détaillées

### Prérequis avant Phase 7
- Audience établie et fidèle (newsletter > 5 000 abonnés)
- Revenu récurrent suffisant via Phase 6
- Identification claire d'un besoin non couvert par l'offre existante

---

## Notes techniques pour les futures phases

### Extensibilité de l'architecture
L'architecture actuelle est conçue pour évoluer sans refactoring majeur :
- Données d'articles dans `/lib/articles.ts` : remplacer par une base CMS (Sanity, Contentful, Notion...) à partir de Phase 2
- URLs : `/analyses/[slug]`, `/marche/[ville]`, `/marche/departements/[dept]` — prévues dans la structure Next.js
- Catégories et tags : extensibles dans `/lib/categories.ts`
- Composants UI : réutilisables sur toutes les nouvelles pages

### Stack recommandée pour la montée en charge
- **CMS headless** : Sanity.io (recommandé pour un média éditorial) ou Contentful
- **Recherche** : Algolia ou recherche native Next.js
- **Analytics** : Plausible (respect RGPD, sans cookies) ou Matomo
- **Email** : Brevo (anciennement Sendinblue, solution française) ou Kit (ex-ConvertKit)
- **Commentaires** : Giscus (GitHub Discussions) pour commencer
