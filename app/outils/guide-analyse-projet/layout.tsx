import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grille d'analyse d'un projet d'acquisition — espaces de stockage",
  alternates: { canonical: "https://observatoire-du-stockage.fr/outils/guide-analyse-projet" },
  description:
    "Analysez méthodiquement un projet d'acquisition d'espace de stockage sur 6 dimensions : localisation, demande locative, état du bien, copropriété, financier et risques.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
