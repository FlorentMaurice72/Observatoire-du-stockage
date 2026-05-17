import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import ArticleCard from "@/components/ui/ArticleCard";
import NewsletterBlock from "@/components/ui/NewsletterBlock";
import CalloutBox from "@/components/ui/CalloutBox";
import { getArticlesByCategory } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Investir dans les espaces de stockage — boxs, garages, entrepôts",
  alternates: { canonical: "https://observatoire-du-stockage.fr/investir" },
  description:
    "Guide complet pour investisseurs : comprendre les actifs de stockage, analyser un projet, évaluer la rentabilité et anticiper les risques.",
};

const actifs = [
  {
    title: "Boxs de stockage",
    description:
      "Espaces fermés de petite à moyenne surface, souvent en sous-sol ou en rez-de-chaussée. Usage exclusivement lié au stockage. Demande portée par les particuliers en zone urbaine dense.",
    avantages: ["Ticket d'entrée souvent accessible", "Peu de travaux structurels", "Gestion simplifiée"],
    vigilance: ["Localisation déterminante", "Taux de vacance possible en zone peu dense"],
  },
  {
    title: "Garages individuels",
    description:
      "Espaces fermés permettant l'accès d'un véhicule. Peuvent être utilisés pour du stationnement ou du stockage. Réglementation locative spécifique selon l'usage.",
    avantages: ["Double usage possible (stationnement/stockage)", "Demande stable en zones urbaines"],
    vigilance: ["Accès, état du linteau et de la porte à vérifier", "Règles de copropriété à analyser"],
  },
  {
    title: "Lots de garages",
    description:
      "Acquisition groupée de plusieurs unités, permettant une diversification du risque de vacance. La gestion peut s'avérer plus complexe selon la dispersion géographique.",
    avantages: ["Dilution du risque de vacance", "Économies d'échelle possibles"],
    vigilance: ["État général du bâti à expertiser", "Situation locative en place à analyser"],
  },
  {
    title: "Entrepôts de petite surface",
    description:
      "Locaux commerciaux ou artisanaux dédiés au stockage et à la logistique. Demande portée par les TPE/PME et les artisans. Bail commercial généralement applicable.",
    avantages: ["Loyers potentiellement plus élevés", "Locataires professionnels"],
    vigilance: ["Fiscalité différente", "Vacance plus pénalisante", "Travaux de mise aux normes possibles"],
  },
];

const criteres = [
  { label: "Localisation", description: "Accessibilité, densité de population, zones d'activité à proximité, dynamique urbaine." },
  { label: "Prix d'acquisition", description: "À comparer au loyer observé sur le marché local pour établir un rendement brut indicatif." },
  { label: "État du bien", description: "Humidité, structure, accès, sécurité, travaux nécessaires à court et moyen terme." },
  { label: "Situation locative", description: "Occupé ou vacant ? Loyer en cours, durée du bail, profil du locataire actuel." },
  { label: "Charges de copropriété", description: "Montant, nature des charges, état des parties communes, travaux votés." },
  { label: "Fiscalité", description: "Régime applicable selon la structure de détention et le montant des revenus générés." },
  { label: "Environnement concurrentiel", description: "Présence de self-storage professionnel, offre locative comparable dans la zone." },
  { label: "Liquidité", description: "Facilité de revente estimée, profondeur du marché local pour ce type d'actif." },
];

const risques = [
  { label: "Vacance locative", description: "Un espace vide ne génère aucun revenu mais continue à engendrer des charges fixes." },
  { label: "Concurrence du self-storage professionnel", description: "Des acteurs structurés peuvent modifier l'équilibre offre/demande local." },
  { label: "Vétusté et travaux imprévus", description: "L'état réel du bâti peut réserver des surprises, notamment pour les biens anciens." },
  { label: "Évolution réglementaire", description: "Les règles d'urbanisme, de fiscalité ou de bail peuvent évoluer dans le temps." },
  { label: "Illiquidité relative", description: "La revente d'un lot de garages peut s'avérer plus longue qu'un bien résidentiel classique." },
  { label: "Dépendance au contexte local", description: "La rentabilité dépend étroitement de facteurs locaux qui peuvent évoluer (démographie, économie locale)." },
];

export default function InvestirPage() {
  const articles = getArticlesByCategory("investissement");

  return (
    <>
      <section className="bg-white border-b border-slate-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Investir"
            title="Comprendre les espaces de stockage comme actif d'investissement"
            description="Un guide structuré pour aborder avec méthode l'acquisition d'espaces de stockage — de l'identification du projet à l'analyse des risques."
          />
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#f8f9fa] py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold text-[#1a1a2e] mb-4">Pourquoi s'intéresser aux espaces de stockage ?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Les boxs, garages, entrepôts et containers de stockage constituent une classe d'actifs immobiliers à part entière, souvent moins médiatisée que l'immobilier résidentiel mais présentant des caractéristiques spécifiques qui méritent une analyse sérieuse.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Ces actifs peuvent présenter des caractéristiques intéressantes : ticket d'entrée parfois accessible, gestion simplifiée dans certaines configurations, demande portée par des besoins réels de stockage en zone urbaine. Ils présentent également des risques propres qui ne doivent pas être minorés.
            </p>
            <CalloutBox type="vigilance">
              Les espaces de stockage ne sont pas des actifs sans risque. La rentabilité dépend du marché local, du prix d'achat, de la demande effective, des charges et de la fiscalité. Aucune rentabilité n'est garantie par nature.
            </CalloutBox>
          </div>
        </div>
      </section>

      {/* Types d'actifs */}
      <section className="bg-white py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Les actifs"
            title="Boxs, garages, entrepôts : quelles différences ?"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {actifs.map((actif) => (
              <div key={actif.title} className="bg-[#f8f9fa] rounded-xl border border-slate-100 p-6">
                <h3 className="font-bold text-[#1a1a2e] text-base mb-2">{actif.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{actif.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-1.5">Points positifs</p>
                    <ul className="space-y-1">
                      {actif.avantages.map((a) => (
                        <li key={a} className="text-xs text-slate-600 flex items-start gap-1.5">
                          <span className="text-green-500 mt-0.5">✓</span> {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1.5">Vigilance</p>
                    <ul className="space-y-1">
                      {actif.vigilance.map((v) => (
                        <li key={v} className="text-xs text-slate-600 flex items-start gap-1.5">
                          <span className="text-amber-500 mt-0.5">!</span> {v}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Critères */}
      <section className="bg-[#f8f9fa] py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Analyse"
            title="Les critères d'analyse d'un projet"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {criteres.map((c, i) => (
              <div key={c.label} className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 font-bold text-sm mb-3">
                  {i + 1}
                </div>
                <h3 className="font-bold text-[#1a1a2e] text-sm mb-1.5">{c.label}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Risques */}
      <section className="bg-white py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Risques"
            title="Les risques à anticiper"
            description="Une analyse d'investissement sérieuse intègre autant les risques que les opportunités."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {risques.map((r) => (
              <div key={r.label} className="bg-amber-50 border border-amber-100 rounded-xl p-5">
                <h3 className="font-bold text-amber-800 text-sm mb-1.5">⚠️ {r.label}</h3>
                <p className="text-xs text-amber-700 leading-relaxed">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      {articles.length > 0 && (
        <section className="bg-[#f8f9fa] py-12 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Articles recommandés</h2>
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
