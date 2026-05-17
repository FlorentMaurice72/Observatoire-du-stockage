# Roadmap technique — Observatoire du Stockage

## État actuel (V1 — base)

Stack : Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Déploiement Vercel

Architecture :
- Données statiques dans `lib/articles.ts` et `lib/categories.ts`
- Composants UI dans `components/ui/`
- Layout dans `components/layout/`
- 12 pages statiques + articles dynamiques
- Sitemap et robots.txt dynamiques
- Balises canoniques sur toutes les pages
- JSON-LD Article sur les pages articles

---

## Phase 1 — Newsletter (priorité haute)

### Objectif
Connecter les formulaires newsletter à un vrai service d'envoi d'emails.

### Intégration recommandée : Brevo (ex-Sendinblue)
- Solution française, conforme RGPD, tarif gratuit jusqu'à 300 emails/jour
- API simple, SDK disponible
- Gestion des listes, double opt-in, unsubscribe automatique

### Fichiers à modifier
```
components/ui/NewsletterBlock.tsx   → remplacer le useState par un appel API
app/newsletter/page.tsx             → connecter le formulaire
app/api/newsletter/route.ts         → créer cette API route (server-side)
```

### Route API à créer
```typescript
// app/api/newsletter/route.ts
// POST /api/newsletter
// Body : { email: string }
// → Appel à l'API Brevo pour ajouter le contact à une liste
// → Double opt-in recommandé
// → Retour : 200 OK ou erreur métier
```

### Variables d'environnement nécessaires
```
BREVO_API_KEY=...
BREVO_LIST_ID=...
```

---

## Phase 2 — CMS headless

### Objectif
Permettre la publication d'articles sans toucher au code. Indispensable dès que le volume dépasse 15-20 articles ou qu'une équipe rédactionnelle est impliquée.

### CMS recommandé : Sanity.io
- Interface d'édition claire adaptée aux équipes éditoriales
- Schémas TypeScript, intégration Next.js native
- Gratuit pour les petits projets (tier Content Lake)
- Contenu en temps réel sans rebuild

### Migration à prévoir
```
lib/articles.ts             → remplacer par des requêtes GROQ vers Sanity
lib/categories.ts           → idem ou garder en dur si peu de changements
app/analyses/[slug]/page.tsx → ISR (revalidate) plutôt que statique
```

### Schéma Sanity suggéré
```typescript
// sanity/schemas/article.ts
{
  name: "article",
  fields: [
    { name: "title", type: "string" },
    { name: "slug", type: "slug", options: { source: "title" } },
    { name: "excerpt", type: "text" },
    { name: "category", type: "reference", to: [{ type: "category" }] },
    { name: "publishedAt", type: "datetime" },
    { name: "author", type: "string" },
    { name: "readingTime", type: "number" },
    { name: "featured", type: "boolean" },
    { name: "body", type: "array", of: [{ type: "block" }] },
    // Portable Text pour le contenu riche
  ]
}
```

---

## Phase 3 — Analytics RGPD-friendly

### Objectif
Mesurer le trafic et le comportement des lecteurs sans cookies tiers ni collecte excessive de données personnelles.

### Solution recommandée : Plausible Analytics
- Pas de cookies → pas de bandeau cookie nécessaire
- Données agrégées uniquement
- Hébergement EU disponible
- 9 €/mois pour les petits sites

### Alternative : Umami (self-hosted)
- Gratuit, open source
- Hébergeable sur Railway ou Fly.io
- Légèrement plus complexe à maintenir

### Intégration Next.js
```typescript
// app/layout.tsx
// Ajouter le script Plausible dans le <head>
import Script from "next/script";

<Script
  defer
  data-domain="observatoire-du-stockage.fr"
  src="https://plausible.io/js/script.js"
/>
```

---

## Phase 4 — Commentaires

### Objectif
Permettre aux lecteurs de poser des questions et aux auteurs d'y répondre, pour enrichir les articles et créer de l'engagement.

### Solution recommandée : Giscus
- Basé sur GitHub Discussions → aucun coût
- Authentification GitHub requise (limite l'audience mais élimine le spam)
- S'intègre en un composant React
- Alternative légère pour démarrer

### Alternative pour une audience plus large : Disqus
- Plus accessible (email/social login)
- Version gratuite avec publicités intrusives → préférer la version payante si volume
- RGPD complexe à gérer

### Composant à créer
```typescript
// components/ui/Comments.tsx
// Wrapper autour du script Giscus
// À intégrer dans app/analyses/[slug]/page.tsx
// Remplacerait la zone placeholder actuelle
```

---

## Phase 5 — Pages locales (villes et départements)

### Objectif
Créer des pages de marché par ville et département pour capter le trafic SEO local.

### Architecture technique
```
app/marche/[ville]/page.tsx
  → generateStaticParams : liste des villes couvertes
  → generateMetadata : title/description dynamiques
  → Contenu : template de page locale (cf. charte éditoriale)

app/marche/departements/[dept]/page.tsx
  → Même structure pour les pages département
```

### Fichiers de données à créer
```
lib/villes.ts      → liste des villes avec données de base
lib/departements.ts → liste des départements
```

### Exemple de generateStaticParams
```typescript
export async function generateStaticParams() {
  return villes.map((v) => ({ ville: v.slug }));
}
```

---

## Phase 6 — Outils de calcul interactifs

### Objectif
Proposer des calculateurs et outils pratiques directement dans le navigateur, sans backend.

### Calculateur de rentabilité (priorité 1)
```
app/outils/calculateur-rentabilite/page.tsx
```

Inputs :
- Prix d'achat (€)
- Frais d'acquisition estimés (%, défaut 8%)
- Loyer mensuel observé localement (€)
- Taux de vacance estimé (%, défaut 5%)
- Charges annuelles (€)
- Taxe foncière annuelle (€)
- Régime fiscal (micro-foncier / réel / BIC)

Outputs :
- Rendement brut (%)
- Rendement net de charges (%)
- Estimation du cash-flow mensuel

**Important :** Afficher systématiquement un avertissement indiquant que les résultats sont des estimations indicatives dépendant des données saisies et non des projections garanties.

### Checklist téléchargeable (priorité 2)
- Générer un PDF côté client avec `@react-pdf/renderer` ou `jsPDF`
- Checklist d'acquisition en 30 points
- Personnalisable avec le nom du bien et la date

---

## Phase 7 — Espace membre (optionnel, long terme)

### Objectif
Offrir un accès à des contenus premium, des outils avancés ou un espace de discussion à une communauté de membres.

### Stack recommandée
- Authentification : NextAuth.js v5 (maintenant Auth.js)
- Base de données : PostgreSQL via Supabase ou PlanetScale
- Gestion des abonnements : Stripe (si accès payant)

### Contenu premium envisageable
- Accès aux analyses locales détaillées
- Outils avancés (simulateur multi-actifs, comparateur)
- Base de données de prix observés par zone
- Forum ou espace d'échange membres

**Note :** Ne pas mettre en avant un espace membre avant d'avoir une audience établie et des contenus gratuits suffisamment valorisés. La confiance se construit d'abord par la gratuité.

---

## Phase 8 — Intégration future d'un SaaS de gestion locative

### Positionnement
Le SaaS ne doit pas devenir le centre du site. Il doit être présenté comme un outil complémentaire au média, développé pour répondre aux besoins documentés de l'audience.

### Séquence recommandée
1. Construire l'audience via le contenu éditorial (Phase 1-2)
2. Identifier les besoins non couverts via la newsletter et les retours lecteurs
3. Développer et tester les outils gratuits (Phase 6) comme preuve de concept
4. Proposer une version avancée payante des outils les plus utilisés
5. Développer un SaaS de gestion si la demande est avérée et suffisante

### Fonctionnalités potentielles d'un SaaS spécialisé
- Suivi des baux et loyers par unité
- Tableau de bord de taux d'occupation
- Rappels automatiques d'échéances
- Export comptable (BIC / foncier)
- Gestion des dépôts de garantie
- Suivi des travaux et dépenses par bien

### Points de vigilance
- Le marché des outils de gestion locative est déjà couvert par des acteurs généralistes
- La spécialisation sur le stockage est le seul avantage différenciateur valable
- Prioriser une validation terrain avant tout développement coûteux

---

## Dépendances techniques à surveiller

| Dépendance | Version actuelle | Notes |
|---|---|---|
| Next.js | 16.x | Surveiller les migrations App Router |
| React | 19.x | Stable, API stable |
| Tailwind CSS | 4.x | Nouvelle syntaxe @theme |
| TypeScript | 5.x | Strict mode activé |
| Node.js | ≥ 18 | Requis par Next.js 16 |

---

## Checklist avant mise en production

- [ ] Domaine configuré sur Vercel (observatoire-du-stockage.fr)
- [ ] Variables d'environnement définies (BREVO, analytics...)
- [ ] Redirections HTTP → HTTPS automatiques (Vercel le fait par défaut)
- [ ] metadataBase dans layout.tsx mis à jour avec le vrai domaine
- [ ] Formulaire newsletter connecté à un vrai service
- [ ] Mentions légales complétées avec les vraies informations
- [ ] Politique de confidentialité conforme RGPD rédigée par un professionnel
- [ ] Test des pages sur mobile (Chrome DevTools, 375px)
- [ ] Test du sitemap.xml (domaine/sitemap.xml)
- [ ] Test du robots.txt (domaine/robots.txt)
- [ ] Soumission du site dans Google Search Console
- [ ] Soumission du sitemap dans Search Console
