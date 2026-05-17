import type { Metadata } from "next";
import Link from "next/link";
import NewsletterBlock from "@/components/ui/NewsletterBlock";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez la mission, la ligne éditoriale et les valeurs de l'Observatoire du Stockage, média francophone de référence sur le marché des espaces de stockage.",
};

const valeurs = [
  {
    icon: "🎯",
    title: "Rigueur factuelle",
    description:
      "Aucune donnée chiffrée n'est publiée sans source identifiable. Quand une information est incertaine, nous le disons explicitement. Nous préférons l'honnêteté à la précision apparente.",
  },
  {
    icon: "⚖️",
    title: "Équilibre opportunités / risques",
    description:
      "Chaque analyse présente les opportunités et les risques avec la même attention. Nous ne faisons pas de publicité déguisée pour un actif ou un marché.",
  },
  {
    icon: "🔍",
    title: "Approche terrain",
    description:
      "Nous documentons les réalités concrètes du marché, notamment les écarts entre ce qu'on lit sur les forums et ce que révèle l'analyse approfondie d'un projet.",
  },
  {
    icon: "📚",
    title: "Pédagogie accessible",
    description:
      "Nous écrivons pour des lecteurs sérieux — investisseurs, propriétaires, exploitants — mais sans jargon inutile. La clarté est une exigence éditoriale.",
  },
  {
    icon: "🛡️",
    title: "Indépendance éditoriale",
    description:
      "Les contenus éditoriaux ne sont pas influencés par des intérêts commerciaux. Les éventuels partenariats sont signalés de manière transparente.",
  },
  {
    icon: "⏳",
    title: "Vision long terme",
    description:
      "L'Observatoire a vocation à devenir une référence durable sur son secteur, en construisant progressivement un corpus de contenus fiables et utiles.",
  },
];

const ligneEditoriale = [
  "Analyser plutôt que commenter à chaud",
  "Expliquer le contexte et les mécanismes de fond",
  "Documenter les marchés locaux avec méthode",
  "Signaler les risques aussi clairement que les opportunités",
  "Utiliser des formulations prudentes quand les données sont incertaines",
  "Orienter vers des professionnels pour les questions juridiques et fiscales",
  "Publier moins mais mieux",
];

export default function AProposPage() {
  return (
    <>
      <section className="bg-white border-b border-slate-100 py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
            À propos
          </span>
          <h1 className="mt-5 text-3xl md:text-4xl font-bold text-[#1a1a2e] leading-tight">
            Un observatoire, pas une vitrine
          </h1>
          <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed">
            L'Observatoire du Stockage est né d'un constat simple : le marché des espaces de stockage en France manquait d'un média sérieux, indépendant et factuel pour l'analyser.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Les forums regorgent d'avis, parfois contradictoires. Les agences immobilières spécialisées ont un angle commercial. Les contenus académiques sont rares et peu accessibles. Il manquait un tiers de confiance : pas un vendeur, pas un formateur, pas un forum — un observatoire.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#f8f9fa] py-12 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Notre mission</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Produire des analyses sérieuses, des guides pratiques et des ressources utiles pour comprendre le marché français du stockage — boxs individuels, garages, entrepôts, containers, self-storage — et prendre des décisions éclairées dans ce secteur.
            </p>
            <p>
              Notre audience principale : les investisseurs particuliers qui envisagent d'acquérir des espaces de stockage, les propriétaires qui cherchent à optimiser leur exploitation, les professionnels qui souhaitent suivre les évolutions du marché.
            </p>
            <p>
              Nous ne vendons pas de formations, de listes de biens ou de promesses de rendement. Nous publions des contenus éditoriaux rigoureux, accessibles et honnêtes.
            </p>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-white py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-8 text-center">Nos valeurs éditoriales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {valeurs.map((v) => (
              <div key={v.title} className="bg-[#f8f9fa] rounded-xl border border-slate-100 p-6">
                <div className="text-2xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-[#1a1a2e] text-base mb-2">{v.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ligne éditoriale */}
      <section className="bg-[#f8f9fa] py-12 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Notre ligne éditoriale en pratique</h2>
          <ul className="space-y-3">
            {ligneEditoriale.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-slate-700 bg-white rounded-lg border border-slate-100 px-4 py-3">
                <span className="text-blue-500 mt-0.5 shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Avertissement */}
      <section className="bg-amber-50 border-b border-amber-100 py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-amber-800 leading-relaxed">
            <strong>Avertissement général :</strong> Les contenus publiés par l'Observatoire du Stockage sont à caractère informatif et éducatif uniquement. Ils ne constituent pas des conseils en investissement, juridiques ou fiscaux. L'Observatoire ne garantit pas l'exactitude ou l'exhaustivité de l'information publiée. Tout investissement comporte des risques. Consultez un professionnel qualifié avant toute décision.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">Vous souhaitez contribuer ?</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            Vous êtes propriétaire, exploitant ou professionnel du secteur et souhaitez partager votre expérience ou proposer un sujet ? N'hésitez pas à nous contacter.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#162d4a] transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </section>

      <NewsletterBlock />
    </>
  );
}
