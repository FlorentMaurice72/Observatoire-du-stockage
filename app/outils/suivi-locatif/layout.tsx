import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tableau de bord locatif — suivi des baux et loyers",
  alternates: { canonical: "https://observatoire-du-stockage.fr/outils/suivi-locatif" },
  description:
    "Suivez vos baux, loyers encaissés, taux d'occupation et dépenses par bien ou par lot. Tableau de bord locatif gratuit pour les exploitants d'espaces de stockage.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
