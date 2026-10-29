import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import NewsletterBlock from "@/components/ui/NewsletterBlock";

export const metadata: Metadata = {
  title: "À propos — Florent Maurice, fondateur de l'Observatoire du Stockage",
  alternates: { canonical: "https://observatoire-du-stockage.fr/a-propos" },
  description:
    "L'Observatoire du Stockage est fondé par Florent Maurice, investisseur en garages et boxes depuis 2019. Découvrez la mission, la ligne éditoriale et les valeurs du site.",
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
      {/* Header */}
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

      {/* Fondateur */}
      <section className="bg-[#f8f9fa] py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-8">Le fondateur</h2>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8">
            <div className="flex items-start gap-5">
              <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-slate-100">
                <Image
                  src="/florent-maurice.jpg"
                  alt="Florent Maurice, fondateur de l'Observatoire du Stockage"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#1a1a2e] text-lg">Florent Maurice</h3>
                <p className="text-sm text-slate-500 mb-4">Fondateur de l'Observatoire du Stockage · Investisseur depuis 2019</p>
                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                  <p>
                    Entrepreneur depuis 2019, j'ai choisi de réinvestir les bénéfices de mon activité dans l'immobilier — à travers une SCI — en me concentrant sur un actif que peu d'investisseurs regardaient sérieusement à l'époque : les garages et boxes en région.
                  </p>
                  <p>
                    Ce que j'ai découvert en me lançant, c'est l'absence quasi-totale de ressources fiables sur ce marché. Des forums, des témoignages, des promesses — mais peu d'analyses rigoureuses, peu de méthode, peu de mise en garde honnête sur les risques réels.
                  </p>
                  <p>
                    L'Observatoire du Stockage est la ressource que j'aurais voulu avoir quand j'ai commencé. Elle s'adresse autant aux investisseurs qui démarrent qu'à ceux qui cherchent à affiner leur approche — avec une exigence constante : zéro chiffre inventé, zéro promesse de rendement.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <Link
                href="/ebook"
                className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#162d4a] transition-colors"
              >
                Lire l'ebook gratuit
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-slate-200 text-slate-700 font-semibold text-sm px-5 py-2.5 rounded-lg hover:border-slate-300 transition-colors"
              >
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">La mission</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Produire des analyses sérieuses, des guides pratiques et des ressources utiles pour comprendre le marché français du stockage — boxs individuels, garages, entrepôts, containers, self-storage — et prendre des décisions éclairées dans ce secteur.
            </p>
            <p>
              L'audience principale : les investisseurs particuliers qui envisagent d'acquérir des espaces de stockage, les propriétaires qui cherchent à optimiser leur exploitation, les professionnels qui souhaitent suivre les évolutions du marché.
            </p>
            <p>
              L'Observatoire ne vend pas de formations, de listes de biens ou de promesses de rendement. Il publie des contenus éditoriaux rigoureux, accessibles et honnêtes.
            </p>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="bg-[#f8f9fa] py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-8 text-center">Les valeurs éditoriales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {valeurs.map((v) => (
              <div key={v.title} className="bg-white rounded-xl border border-slate-100 p-6">
                <div className="text-2xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-[#1a1a2e] text-base mb-2">{v.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ligne éditoriale */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">La ligne éditoriale en pratique</h2>
          <ul className="space-y-3">
            {ligneEditoriale.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-slate-700 bg-[#f8f9fa] rounded-lg border border-slate-100 px-4 py-3">
                <span className="text-blue-500 mt-0.5 shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Méthodologie */}
      <section className="bg-[#f8f9fa] py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Comment nous travaillons</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-slate-100 p-6">
              <h3 className="font-bold text-[#1a1a2e] text-base mb-3">Sources et données</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Nos analyses s'appuient sur des sources publiques et vérifiables : données DVF (transactions foncières), annonces en ligne sur les grandes plateformes, données démographiques INSEE, documents d'urbanisme publics. Quand une donnée ne peut être vérifiée, nous le signalons explicitement et formulons l'information comme hypothèse à valider localement.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-100 p-6">
              <h3 className="font-bold text-[#1a1a2e] text-base mb-3">Analyses locales</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Les analyses de marché par ville combinent plusieurs dimensions : démographie et dynamisme économique, niveau de demande observé sur les plateformes locatives, offre existante et pression concurrentielle (self-storage, parkings, entrepôts), fourchettes de prix observées à date. Elles constituent un point de départ méthodique, pas une validation d'opportunité — chaque projet nécessite une vérification terrain.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-100 p-6">
              <h3 className="font-bold text-[#1a1a2e] text-base mb-3">Actualisation des contenus</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Le marché évolue. Les contenus publiés portent une date de publication visible. Les analyses locales sont révisées périodiquement en fonction de l'évolution des marchés. Un contenu ancien sur un marché en mouvement peut être obsolète — le mentionner à un professionnel local reste la meilleure vérification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ce que nous ne sommes pas */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-2">Ce que l'Observatoire n'est pas</h2>
          <p className="text-sm text-slate-500 mb-6">Pour éviter tout malentendu sur notre positionnement.</p>
          <div className="space-y-3">
            {[
              {
                label: "Pas un conseiller en investissement",
                detail: "Nos contenus sont éducatifs et informatifs. Ils ne constituent pas des recommandations d'achat, de vente ou d'investissement. Consultez un conseiller en gestion de patrimoine pour toute décision.",
              },
              {
                label: "Pas un site de petites annonces",
                detail: "Nous n'avons pas de base de données de biens à vendre. Nos analyses portent sur des marchés, pas sur des biens spécifiques.",
              },
              {
                label: "Pas un organisme de formation",
                detail: "Nous ne vendons pas de formations, de masterclass ou d'accompagnement payant. Les ressources publiées sont gratuites.",
              },
              {
                label: "Pas un cabinet juridique ou fiscal",
                detail: "Nos contenus sur la réglementation et la fiscalité sont à titre informatif général. Pour votre situation personnelle, consultez un notaire, un avocat ou un expert-comptable.",
              },
              {
                label: "Pas un organe de presse agréé",
                detail: "L'Observatoire est un média indépendant en ligne. Nos analyses reflètent notre lecture du marché, pas une vérité officielle.",
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 bg-[#f8f9fa] rounded-xl border border-slate-100 px-5 py-4">
                <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center">
                  <svg className="w-3 h-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#1a1a2e] mb-1">{item.label}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
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

      <NewsletterBlock />
    </>
  );
}
