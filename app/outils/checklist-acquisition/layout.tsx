import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checklist d'acquisition d'un espace de stockage",
  alternates: { canonical: "https://observatoire-du-stockage.fr/outils/checklist-acquisition" },
  description:
    "44 points à vérifier avant d'acquérir un garage, lot de boxes ou espace de stockage : état du bâti, situation locative, documents à réclamer, questions au vendeur.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
