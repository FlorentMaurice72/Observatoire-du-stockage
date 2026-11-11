import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modèle de contrat de location d'un espace de stockage — annoté",
  alternates: { canonical: "https://observatoire-du-stockage.fr/outils/modele-contrat-commente" },
  description:
    "Trame de contrat de location d'espace de stockage avec annotations sur les clauses essentielles : durée, loyer, dépôt de garantie, résiliation. À adapter avec un professionnel.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
