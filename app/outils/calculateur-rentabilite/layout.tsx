import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculateur de rentabilité — espaces de stockage",
  alternates: { canonical: "https://observatoire-du-stockage.fr/outils/calculateur-rentabilite" },
  description:
    "Estimez la rentabilité brute et nette d'un garage, box ou espace de stockage : prix d'achat, loyers, charges, vacance et fiscalité. Outil gratuit de l'Observatoire.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
