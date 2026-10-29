import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { villes, getVilleBySlug } from "@/lib/villes";
import NewsletterBlock from "@/components/ui/NewsletterBlock";
import CalloutBox from "@/components/ui/CalloutBox";
import { getArticlesByCategory, getArticleBySlug } from "@/lib/articles";
import ArticleCard from "@/components/ui/ArticleCard";

const BASE_URL = "https://observatoire-du-stockage.fr";

interface Props {
  params: Promise<{ ville: string }>;
}

export async function generateStaticParams() {
  return villes.map((v) => ({ ville: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ville: slug } = await params;
  const ville = getVilleBySlug(slug);
  if (!ville) return {};
  return {
    title: ville.metaTitle,
    description: ville.metaDescription,
    alternates: { canonical: `${BASE_URL}/marche/${ville.slug}` },
  };
}

const NIVEAU_LABELS = {
  forte: { label: "Forte", color: "bg-green-50 text-green-700 border-green-100" },
  moderee: { label: "Modérée", color: "bg-amber-50 text-amber-700 border-amber-100" },
  faible: { label: "Faible", color: "bg-red-50 text-red-700 border-red-100" },
};

const CONCURRENCE_LABELS = {
  importante: { label: "Importante", color: "text-red-600" },
  moderee: { label: "Modérée", color: "text-amber-600" },
  limitee: { label: "Limitée", color: "text-green-600" },
};

export default async function VillePage({ params }: Props) {
  const { ville: slug } = await params;
  const ville = getVilleBySlug(slug);
  if (!ville) notFound();

  const articlesMarch = getArticlesByCategory("marche").slice(0, 3);

  const keyInvestArticles = [
    "evaluer-demande-locative-espace-stockage",
    "prix-garages-donnees-dvf",
    "due-diligence-lot-garages",
    "investir-box-stockage-fondamentaux",
  ].map((slug) => getArticleBySlug(slug)).filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: `Marché du stockage à ${ville.nom}`,
    description: ville.metaDescription,
    url: `${BASE_URL}/marche/${ville.slug}`,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: ville.region,
    },
    publisher: {
      "@type": "Organization",
      name: "Observatoire du Stockage",
      url: BASE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb + header */}
      <section className="bg-white border-b border-slate-100 py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-5">
            <Link href="/" className="hover:text-slate-600">Accueil</Link>
            <span>›</span>
            <Link href="/marche" className="hover:text-slate-600">Marché</Link>
            <span>›</span>
            <span className="text-slate-600">{ville.nom}</span>
          </nav>

          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                Analyse locale
              </span>
              <h1 className="mt-4 text-2xl md:text-3xl font-bold text-[#1a1a2e]">
                Marché du stockage à {ville.nom}
              </h1>
              <p className="mt-2 text-slate-500 text-sm">{ville.departement} · {ville.region}</p>
              <p className="mt-1 text-slate-400 text-xs">{ville.population}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium ${NIVEAU_LABELS[ville.demande.niveau].color}`}>
                Demande : {NIVEAU_LABELS[ville.demande.niveau].label}
              </div>
            </div>
          </div>

          <p className="mt-5 text-slate-600 leading-relaxed max-w-3xl">{ville.intro}</p>
        </div>
      </section>

      {/* Avertissement */}
      <section className="bg-amber-50 border-b border-amber-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-amber-800 leading-relaxed">
            <strong>Note méthodologique :</strong> Les analyses présentées sur cette page sont établies à partir d'observations générales du marché, d'annonces disponibles et de données publiques. Elles ne constituent pas une étude de marché certifiée. Les données chiffrées (fourchettes de loyers, niveau de demande) sont indicatives et peuvent varier significativement selon le secteur précis, l'état du bien et la période. Vérifiez toujours les conditions locales avant toute décision d'investissement.
          </p>
        </div>
      </section>

      {/* Corps de l'analyse */}
      <section className="bg-[#f8f9fa] py-10 md:py-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Contenu principal */}
            <div className="lg:col-span-2 space-y-6">

              {/* Contexte urbanistique */}
              <div className="bg-white rounded-xl border border-slate-100 p-6">
                <h2 className="font-bold text-[#1a1a2e] text-lg mb-3 flex items-center gap-2">
                  <span className="text-2xl">🏙️</span> Contexte urbain
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">{ville.contexteUrbanistique}</p>
              </div>

              {/* Demande */}
              <div className="bg-white rounded-xl border border-slate-100 p-6">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-bold text-[#1a1a2e] text-lg flex items-center gap-2">
                    <span className="text-2xl">📈</span> Demande locative
                  </h2>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${NIVEAU_LABELS[ville.demande.niveau].color}`}>
                    {NIVEAU_LABELS[ville.demande.niveau].label}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{ville.demande.description}</p>
              </div>

              {/* Offre */}
              <div className="bg-white rounded-xl border border-slate-100 p-6">
                <h2 className="font-bold text-[#1a1a2e] text-lg mb-3 flex items-center gap-2">
                  <span className="text-2xl">🏗️</span> Offre et concurrence
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{ville.offre.description}</p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-500">Concurrence self-storage :</span>
                  <span className={`font-semibold ${CONCURRENCE_LABELS[ville.offre.concurrenceSelfStorage].color}`}>
                    {CONCURRENCE_LABELS[ville.offre.concurrenceSelfStorage].label}
                  </span>
                </div>
              </div>

              {/* Prix observés */}
              <div className="bg-white rounded-xl border border-slate-100 p-6">
                <h2 className="font-bold text-[#1a1a2e] text-lg mb-3 flex items-center gap-2">
                  <span className="text-2xl">💶</span> Prix observés
                </h2>
                <div className="bg-[#f8f9fa] rounded-lg p-4 mb-3">
                  <p className="text-sm font-semibold text-[#1a1a2e]">{ville.prixObserves.fourchette}</p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed italic">{ville.prixObserves.note}</p>
              </div>

              {/* Points de vigilance */}
              <div className="bg-white rounded-xl border border-slate-100 p-6">
                <h2 className="font-bold text-[#1a1a2e] text-lg mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span> Points de vigilance
                </h2>
                <ul className="space-y-2">
                  {ville.pointsVigilance.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-amber-500 mt-0.5 shrink-0">→</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Communes limitrophes */}
              <div className="bg-white rounded-xl border border-slate-100 p-5">
                <h3 className="font-bold text-[#1a1a2e] text-sm mb-3">Communes limitrophes à surveiller</h3>
                <div className="flex flex-wrap gap-2">
                  {ville.zoneLimitrophe.map((c) => (
                    <span key={c} className="text-xs bg-[#f8f9fa] border border-slate-200 text-slate-600 rounded-full px-3 py-1">
                      {c}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">Ces communes peuvent offrir une demande complémentaire ou des opportunités d'acquisition à des prix différents.</p>
              </div>

              {/* CTA outils */}
              <div className="bg-[#1e3a5f] rounded-xl p-5 text-white">
                <h3 className="font-bold text-sm mb-2">Analyser un projet à {ville.nom} ?</h3>
                <p className="text-blue-200 text-xs leading-relaxed mb-4">Utilisez nos outils pour calculer la rentabilité et structurer votre analyse.</p>
                <div className="space-y-2">
                  <Link
                    href="/outils/calculateur-rentabilite"
                    className="block w-full text-center bg-white text-[#1e3a5f] font-semibold text-xs py-2 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Calculateur de rentabilité
                  </Link>
                  <Link
                    href="/outils/guide-analyse-projet"
                    className="block w-full text-center border border-white/30 text-white font-semibold text-xs py-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Guide d'analyse d'un projet
                  </Link>
                </div>
              </div>

              {/* Avertissement investissement */}
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                <p className="text-xs text-amber-800 leading-relaxed">
                  <strong>Rappel :</strong> Une analyse de marché locale ne remplace pas une due diligence complète. Vérifiez les données sur le terrain, consultez les annonces récentes et faites appel à un professionnel de l'immobilier local avant toute décision.
                </p>
              </div>

              {/* Articles liés à l'investissement */}
              {keyInvestArticles.length > 0 && (
                <div className="bg-white rounded-xl border border-slate-100 p-5">
                  <h3 className="font-bold text-[#1a1a2e] text-sm mb-3">Pour aller plus loin</h3>
                  <ul className="space-y-2">
                    {keyInvestArticles.map((a) => a && (
                      <li key={a.slug}>
                        <Link
                          href={`/analyses/${a.slug}`}
                          className="text-xs text-slate-600 hover:text-blue-700 transition-colors leading-relaxed flex items-start gap-2"
                        >
                          <svg className="w-3 h-3 text-slate-300 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {a.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Autres villes */}
              <div className="bg-white rounded-xl border border-slate-100 p-5">
                <h3 className="font-bold text-[#1a1a2e] text-sm mb-3">Autres analyses locales</h3>
                <div className="space-y-1">
                  {villes
                    .filter((v) => v.slug !== ville.slug)
                    .slice(0, 6)
                    .map((v) => (
                      <Link
                        key={v.slug}
                        href={`/marche/${v.slug}`}
                        className="flex items-center justify-between py-1.5 text-xs text-slate-600 hover:text-[#1e3a5f] transition-colors group"
                      >
                        <span>{v.nom}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded-full ${NIVEAU_LABELS[v.demande.niveau].color}`}>
                          {NIVEAU_LABELS[v.demande.niveau].label}
                        </span>
                      </Link>
                    ))}
                </div>
                <Link href="/marche" className="block mt-3 text-xs text-blue-700 hover:underline">
                  Voir toutes les villes →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles marché */}
      {articlesMarch.length > 0 && (
        <section className="bg-white py-10 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-lg font-bold text-[#1a1a2e] mb-5">Analyses sur le marché du stockage</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {articlesMarch.map((a) => (
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
