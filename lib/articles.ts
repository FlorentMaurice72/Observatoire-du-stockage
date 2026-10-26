export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readingTime: number;
  featured?: boolean;
  content?: string;
}

export const articles: Article[] = [
  {
    slug: "due-diligence-lot-garages",
    title: "Les étapes d'une due diligence sérieuse sur un lot de garages",
    excerpt:
      "Avant de signer un compromis, une vérification méthodique s'impose : état du bâti, situation locative, documents de copropriété, clauses du règlement. Tour d'horizon des points à examiner pour ne pas acheter à l'aveugle.",
    category: "investissement",
    date: "2026-10-20",
    author: "La rédaction",
    readingTime: 10,
  },
  {
    slug: "rentabilite-brute-nette-difference",
    title: "Rentabilité brute, rentabilité nette : pourquoi la différence est déterminante",
    excerpt:
      "Le taux de rentabilité brute est souvent le seul chiffre mis en avant lors d'une présentation d'investissement. Il est insuffisant pour prendre une décision éclairée. Comprendre ce qu'il masque est une étape incontournable.",
    category: "rentabilite",
    date: "2026-10-15",
    author: "La rédaction",
    readingTime: 9,
  },
  {
    slug: "bail-location-espace-stockage",
    title: "Le bail applicable à la location d'un espace de stockage : ce que dit le droit",
    excerpt:
      "La location d'un box, d'un garage ou d'une cave ne relève d'aucun statut locatif spécifique. C'est le droit commun du contrat qui s'applique, avec des implications pratiques importantes pour le bailleur comme pour le locataire.",
    category: "reglementation",
    date: "2026-10-10",
    author: "La rédaction",
    readingTime: 9,
  },
  {
    slug: "fixer-loyer-espace-stockage",
    title: "Fixer le bon loyer pour un espace de stockage : méthode et pièges à éviter",
    excerpt:
      "Un loyer trop élevé génère de la vacance. Un loyer trop bas pénalise la rentabilité et crée un précédent difficile à corriger. La méthode pour se positionner justement repose sur l'observation du marché local, pas sur des moyennes nationales.",
    category: "exploitation",
    date: "2026-10-05",
    author: "La rédaction",
    readingTime: 8,
  },
  {
    slug: "investir-box-stockage-fondamentaux",
    title: "Investir dans un box de stockage : les fondamentaux à comprendre avant de se lancer",
    excerpt:
      "Avant d'acheter un box ou un lot de garages, il est essentiel de comprendre ce qui distingue cet actif des autres placements immobiliers. Analyse des critères clés, des risques à anticiper et des points de vigilance.",
    category: "investissement",
    date: "2025-05-10",
    author: "La rédaction",
    readingTime: 9,
    featured: true,
  },
  {
    slug: "garage-box-entrepot-differences-investisseur",
    title: "Garage, box ou entrepôt : quelles différences pour un investisseur ?",
    excerpt:
      "Ces trois types d'actifs partagent la même vocation de stockage mais présentent des profils très différents en matière de ticket d'entrée, de demande locative et de contraintes réglementaires.",
    category: "investissement",
    date: "2025-05-06",
    author: "La rédaction",
    readingTime: 7,
  },
  {
    slug: "analyser-rentabilite-espace-stockage",
    title: "Comment analyser la rentabilité d'un espace de stockage ?",
    excerpt:
      "La rentabilité d'un espace de stockage ne se résume pas à un taux brut. Comprendre les charges, la vacance locative, la fiscalité et le potentiel de revalorisation est indispensable avant de conclure.",
    category: "rentabilite",
    date: "2025-04-28",
    author: "La rédaction",
    readingTime: 8,
  },
  {
    slug: "risques-achat-lot-garages",
    title: "Les principaux risques à anticiper avant d'acheter un lot de garages",
    excerpt:
      "Un lot de garages peut sembler un investissement simple. La réalité de terrain révèle souvent des complexités à ne pas négliger : état du bâti, droit local, occupation, environnement concurrentiel.",
    category: "investissement",
    date: "2025-04-20",
    author: "La rédaction",
    readingTime: 6,
  },
  {
    slug: "reglementation-espaces-stockage-points-vigilance",
    title: "Réglementation des espaces de stockage : les points de vigilance",
    excerpt:
      "Entre bail verbal, contrat de location saisonnière et bail commercial, les règles applicables aux espaces de stockage varient selon le contexte. Tour d'horizon des principales obligations.",
    category: "reglementation",
    date: "2025-04-14",
    author: "La rédaction",
    readingTime: 7,
  },
  {
    slug: "optimiser-taux-occupation-garages",
    title: "Comment optimiser le taux d'occupation de ses garages et boxs ?",
    excerpt:
      "Un espace vide est un revenu perdu. Les leviers pour réduire la vacance locative sont multiples : visibilité en ligne, tarification adaptée, gestion proactive des départs et fidélisation.",
    category: "exploitation",
    date: "2025-04-07",
    author: "La rédaction",
    readingTime: 6,
  },
  {
    slug: "marche-self-storage-france-panorama",
    title: "Le self-storage en France : panorama d'un secteur en structuration",
    excerpt:
      "La location d'espaces de stockage individuels connaît un développement notable en France, tiré par des évolutions sociétales et des pratiques de consommation. État des lieux d'un marché en mouvement.",
    category: "marche",
    date: "2025-03-29",
    author: "La rédaction",
    readingTime: 8,
  },
  {
    slug: "fiscalite-revenus-garages-location",
    title: "Fiscalité des revenus tirés de la location de garages",
    excerpt:
      "Les loyers perçus pour des garages et boxs sont soumis à l'impôt sur le revenu dans la catégorie des revenus fonciers ou des BIC selon le montage. Comprendre les régimes applicables est un préalable essentiel.",
    category: "reglementation",
    date: "2025-03-21",
    author: "La rédaction",
    readingTime: 7,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}

export function getLatestArticles(count = 6): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getRelatedArticles(slug: string, count = 3): Article[] {
  const current = getArticleBySlug(slug);
  if (!current) return getLatestArticles(count);

  // Same category first, excluding current article
  const sameCategory = articles.filter(
    (a) => a.slug !== slug && a.category === current.category
  );
  const others = articles.filter(
    (a) => a.slug !== slug && a.category !== current.category
  );

  return [...sameCategory, ...others].slice(0, count);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
