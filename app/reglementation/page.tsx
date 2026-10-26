import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import ArticleCard from "@/components/ui/ArticleCard";
import NewsletterBlock from "@/components/ui/NewsletterBlock";
import CalloutBox from "@/components/ui/CalloutBox";
import { getArticlesByCategory } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Réglementation des espaces de stockage — fiscalité, bail, assurance",
  alternates: { canonical: "https://observatoire-du-stockage.fr/reglementation" },
  description:
    "Points de vigilance sur la fiscalité, les baux, les assurances, la responsabilité et l'urbanisme applicables aux espaces de stockage.",
};

const rubriques = [
  {
    icon: "🧾",
    title: "Fiscalité",
    content:
      "Les revenus tirés de la location d'espaces de stockage sont imposables. Le régime fiscal applicable dépend de la nature de l'activité (foncier ou BIC), de la structure de détention (personne physique, SCI, société) et des montants en jeu. Des seuils de recettes peuvent conditionner le choix du régime. La TVA peut également être applicable dans certains cas.",
    vigilance:
      "La fiscalité des revenus de stockage est complexe et évolue. Consultez un expert-comptable ou un conseiller fiscal pour une analyse adaptée à votre situation.",
  },
  {
    icon: "📋",
    title: "Bail et contrat",
    content:
      "La nature du contrat applicable à la location d'un espace de stockage dépend de l'usage et du locataire. Un bail commercial peut s'appliquer si le locataire est commerçant et que l'espace est affecté à son activité. Un contrat de droit commun peut s'appliquer pour les particuliers. L'absence de contrat écrit expose le bailleur à des incertitudes importantes.",
    vigilance:
      "Ne louez jamais un espace de stockage sans contrat écrit. Les clauses relatives à l'état des lieux, au dépôt de garantie, aux modalités de résiliation et à l'usage autorisé sont particulièrement importantes.",
  },
  {
    icon: "🛡️",
    title: "Assurance",
    content:
      "Le propriétaire d'un espace de stockage doit s'assurer que son bien est couvert en cas de sinistre (incendie, dégât des eaux, vol). La responsabilité du bailleur peut être engagée dans certains cas. Le locataire doit également être invité à souscrire une assurance pour les biens qu'il stocke.",
    vigilance:
      "Vérifiez que votre contrat d'assurance couvre explicitement l'usage locatif de l'espace. Les exclusions de garantie varient d'un contrat à l'autre.",
  },
  {
    icon: "⚖️",
    title: "Responsabilité",
    content:
      "La responsabilité du bailleur peut être engagée en cas de sinistre lié à un défaut de l'immeuble, de dommage causé par un vice caché ou de non-conformité aux normes applicables. La responsabilité du locataire peut également être mise en cause en cas de dommages causés à l'espace loué ou aux tiers.",
    vigilance:
      "Un état des lieux contradictoire à l'entrée et à la sortie est indispensable pour délimiter les responsabilités respectives.",
  },
  {
    icon: "🏗️",
    title: "Urbanisme et changement d'usage",
    content:
      "L'affectation d'un local à un usage de stockage peut être soumise à des règles d'urbanisme, notamment en cas de changement de destination. Certaines villes imposent des autorisations spécifiques. Les règles de copropriété peuvent également limiter les usages autorisés.",
    vigilance:
      "Avant d'acquérir un bien ou d'en modifier l'usage, vérifiez la conformité avec le PLU (Plan Local d'Urbanisme) et le règlement de copropriété applicable.",
  },
  {
    icon: "✅",
    title: "Points à vérifier avec un professionnel",
    content:
      "Certaines questions réglementaires nécessitent l'avis d'un professionnel du droit, de la fiscalité ou de l'immobilier. Il s'agit notamment de la structure de détention optimale, du régime fiscal applicable, des clauses contractuelles adaptées et de la conformité réglementaire du bien.",
    vigilance:
      "L'Observatoire du Stockage fournit des informations générales à titre éducatif. Elles ne remplacent pas l'avis d'un avocat, d'un notaire ou d'un expert-comptable.",
  },
];

export default function ReglementationPage() {
  const articles = getArticlesByCategory("reglementation");

  return (
    <>
      <section className="bg-white border-b border-slate-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Réglementation"
            title="Cadre légal et réglementaire des espaces de stockage"
            description="Fiscalité, baux, assurances, responsabilité, urbanisme : les points de vigilance à maîtriser pour exploiter ou investir dans des espaces de stockage en conformité."
          />
        </div>
      </section>

      {/* Avertissement global */}
      <section className="bg-[#f8f9fa] py-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CalloutBox type="legal">
            Les contenus réglementaires publiés par l'Observatoire du Stockage sont fournis à titre informatif et pédagogique uniquement. Ils ne constituent pas un conseil juridique, fiscal ou comptable et ne remplacent en aucun cas l'avis d'un avocat, d'un notaire, d'un expert-comptable ou de tout autre professionnel qualifié. La réglementation applicable évolue régulièrement. Consultez impérativement un professionnel avant toute décision.
          </CalloutBox>
        </div>
      </section>

      {/* Rubriques */}
      <section className="bg-white py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {rubriques.map((r) => (
              <div key={r.title} className="bg-[#f8f9fa] rounded-xl border border-slate-100 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{r.icon}</span>
                  <h2 className="font-bold text-[#1a1a2e] text-lg">{r.title}</h2>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{r.content}</p>
                <div className="bg-amber-50 border border-amber-100 rounded-lg p-3 text-xs text-amber-800 flex items-start gap-2">
                  <span className="shrink-0 mt-0.5">⚠️</span>
                  {r.vigilance}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rappel pro */}
      <section className="bg-[#1e3a5f] py-10 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Consultez un professionnel</h2>
          <p className="text-blue-200 text-sm leading-relaxed">
            Pour toute question fiscale, juridique ou réglementaire liée à vos espaces de stockage, l'avis d'un professionnel qualifié est indispensable. L'Observatoire du Stockage ne fournit pas de conseils personnalisés.
          </p>
        </div>
      </section>

      {/* Textes de référence */}
      <section className="bg-[#f8f9fa] py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionHeader
              label="Références"
              title="Principaux textes à connaître"
              description="Ces textes constituent les sources primaires sur les principales questions réglementaires. Leur interprétation reste l'affaire d'un professionnel qualifié."
            />
            <div className="space-y-3">
              {[
                {
                  source: "Code général des impôts (CGI)",
                  ref: "Art. 14 et suivants / Art. 28 (régime réel foncier)",
                  description: "Revenus fonciers : définition, régime micro-foncier, régime réel, déductions admises.",
                  url: "https://www.legifrance.gouv.fr",
                },
                {
                  source: "BOFIP — Bulletin officiel des finances publiques",
                  ref: "BOI-RFPI-DECLA-20 (micro-foncier) / BOI-RFPI-BASE (régime réel)",
                  description: "Doctrine administrative sur la fiscalité des revenus fonciers, seuils et modalités.",
                  url: "https://bofip.impots.gouv.fr",
                },
                {
                  source: "Code civil",
                  ref: "Art. 1709 et suivants (bail de droit commun)",
                  description: "Régime applicable aux contrats de location d'espaces de stockage (hors bail commercial).",
                  url: "https://www.legifrance.gouv.fr",
                },
                {
                  source: "Code de commerce",
                  ref: "Art. L. 145-1 et suivants (bail commercial)",
                  description: "Applicable si le locataire est commerçant et l'espace est affecté à son activité commerciale.",
                  url: "https://www.legifrance.gouv.fr",
                },
                {
                  source: "Code de la construction et de l'habitation",
                  ref: "Art. L. 721-1 et suivants (copropriété — obligations du vendeur)",
                  description: "Documents obligatoires à remettre à l'acquéreur avant le compromis (loi ALUR).",
                  url: "https://www.legifrance.gouv.fr",
                },
                {
                  source: "Code de l'urbanisme",
                  ref: "Art. L. 151-1 et suivants (PLU)",
                  description: "Règles d'usage des sols, changement de destination d'un local, autorisations nécessaires.",
                  url: "https://www.legifrance.gouv.fr",
                },
              ].map((t) => (
                <div key={t.ref} className="bg-white rounded-xl border border-slate-100 p-4 flex gap-4">
                  <div className="w-2 bg-[#1e3a5f] rounded-full opacity-20 shrink-0" />
                  <div>
                    <p className="font-bold text-[#1a1a2e] text-sm">{t.source}</p>
                    <p className="text-xs text-blue-700 font-mono mb-1">{t.ref}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{t.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-400 leading-relaxed">
              Les références sont indicatives. Consultez directement legifrance.gouv.fr, bofip.impots.gouv.fr ou impots.gouv.fr pour les textes à jour. Toute interprétation de ces textes dans un contexte particulier relève d'un professionnel qualifié.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      {articles.length > 0 && (
        <section className="bg-white py-12 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Analyses sur la réglementation</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {articles.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      <NewsletterBlock />
    </>
  );
}
