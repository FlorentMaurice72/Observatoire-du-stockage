export interface Category {
  slug: string;
  label: string;
  description: string;
  color: string;
}

export const categories: Category[] = [
  {
    slug: "investissement",
    label: "Investissement",
    description: "Analyses pour acquérir et financer des espaces de stockage",
    color: "blue",
  },
  {
    slug: "marche",
    label: "Marché",
    description: "Tendances, dynamiques et évolutions du secteur",
    color: "indigo",
  },
  {
    slug: "rentabilite",
    label: "Rentabilité",
    description: "Méthodes et critères pour évaluer un projet",
    color: "green",
  },
  {
    slug: "reglementation",
    label: "Réglementation",
    description: "Fiscalité, baux, assurance et obligations légales",
    color: "orange",
  },
  {
    slug: "exploitation",
    label: "Exploitation",
    description: "Gestion opérationnelle et optimisation du taux d'occupation",
    color: "purple",
  },
  {
    slug: "etudes-de-cas",
    label: "Études de cas",
    description: "Retours d'expérience et analyses de projets concrets",
    color: "teal",
  },
  {
    slug: "analyse-locale",
    label: "Analyse locale",
    description: "Décryptage des marchés locaux par ville et département",
    color: "slate",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export const categoryColorMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-700 border-blue-100",
  indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
  green: "bg-green-50 text-green-700 border-green-100",
  orange: "bg-orange-50 text-orange-700 border-orange-100",
  purple: "bg-purple-50 text-purple-700 border-purple-100",
  teal: "bg-teal-50 text-teal-700 border-teal-100",
  slate: "bg-slate-100 text-slate-700 border-slate-200",
};
