import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import NewsletterBlock from "@/components/ui/NewsletterBlock";

export const metadata: Metadata = {
  title: "Outils pour investisseurs et exploitants",
  description:
    "Calculateurs, checklists, modèles et guides pratiques pour analyser et gérer des espaces de stockage. Bientôt disponibles.",
};

const outils = [
  {
    icon: "🧮",
    title: "Calculateur de rentabilité",
    description:
      "Estimez la rentabilité brute et nette d'un espace de stockage en intégrant le prix d'achat, les loyers observés, les charges, la vacance et la fiscalité.",
    features: ["Rentabilité brute et nette", "Simulation de vacance", "Impact fiscal estimé"],
    status: "En développement",
  },
  {
    icon: "✅",
    title: "Checklist d'acquisition",
    description:
      "Une liste structurée des points à vérifier avant d'acquérir un espace de stockage : état du bien, situation locative, documents à réclamer, questions à poser.",
    features: ["Points techniques à vérifier", "Documents à demander", "Questions clés au vendeur"],
    status: "En développement",
  },
  {
    icon: "📊",
    title: "Modèle de suivi locatif",
    description:
      "Un tableau de bord pour suivre vos baux, loyers, taux d'occupation et dépenses par bien ou par lot.",
    features: ["Suivi des baux et échéances", "Tableau de taux d'occupation", "Synthèse des flux"],
    status: "En développement",
  },
  {
    icon: "📐",
    title: "Guide d'analyse d'un projet",
    description:
      "Un guide structuré pour analyser méthodiquement un projet d'acquisition : localisation, demande locative, prix, charges, risques.",
    features: ["Grille d'analyse", "Méthodologie structurée", "Points de vigilance"],
    status: "En développement",
  },
  {
    icon: "📋",
    title: "Modèle de contrat commenté",
    description:
      "Une trame de contrat de location avec annotations sur les clauses essentielles et les points à adapter selon le contexte.",
    features: ["Clauses essentielles annotées", "Points de vigilance", "À adapter par un professionnel"],
    status: "À venir",
  },
  {
    icon: "🗺️",
    title: "Carte des analyses locales",
    description:
      "Une carte interactive pour accéder aux analyses de marché par ville et département, avec indicateurs de dynamisme locatif.",
    features: ["Analyses par géographie", "Indicateurs locaux", "Données comparatives"],
    status: "À venir",
  },
];

export default function OutilsPage() {
  return (
    <>
      <section className="bg-white border-b border-slate-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Outils"
            title="Ressources pratiques pour investisseurs et exploitants"
            description="Des outils concrets pour analyser des projets, suivre son exploitation et prendre des décisions éclairées. Ces ressources sont en cours de développement."
          />
        </div>
      </section>

      {/* Outils */}
      <section className="bg-[#f8f9fa] py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {outils.map((outil) => (
              <div key={outil.title} className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{outil.icon}</span>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                    outil.status === "En développement"
                      ? "bg-blue-50 text-blue-700 border-blue-100"
                      : "bg-slate-100 text-slate-500 border-slate-200"
                  }`}>
                    {outil.status}
                  </span>
                </div>
                <h3 className="font-bold text-[#1a1a2e] text-base mb-2">{outil.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{outil.description}</p>
                <ul className="space-y-1.5">
                  {outil.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                        ·
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA newsletter */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">Soyez prévenu à chaque sortie d'outil</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            Les outils de l'Observatoire seront publiés progressivement. Inscrivez-vous à la newsletter pour être informé dès qu'une nouvelle ressource est disponible.
          </p>
          <Link
            href="/newsletter"
            className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#162d4a] transition-colors"
          >
            S'inscrire à la newsletter
          </Link>
        </div>
      </section>

      <NewsletterBlock />
    </>
  );
}
