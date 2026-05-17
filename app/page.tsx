import type { Metadata } from "next";
import Link from "next/link";
import ArticleCard from "@/components/ui/ArticleCard";
import SectionHeader from "@/components/ui/SectionHeader";
import NewsletterBlock from "@/components/ui/NewsletterBlock";
import { getLatestArticles, getFeaturedArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Observatoire du Stockage — Analyser, investir et rentabiliser les espaces de stockage",
  description:
    "Le média francophone de référence dédié au marché du stockage, à l'investissement dans les boxs, garages et entrepôts, et à l'optimisation de la rentabilité des espaces de stockage.",
};

const pillars = [
  {
    icon: "📈",
    title: "Investir dans les boxs, garages et entrepôts",
    description:
      "Comprendre les fondamentaux, évaluer les opportunités et anticiper les risques avant d'acquérir un espace de stockage.",
    href: "/investir",
  },
  {
    icon: "🔍",
    title: "Analyser le marché du stockage",
    description:
      "Suivre les tendances nationales et locales, décrypter l'offre et la demande, identifier les zones dynamiques.",
    href: "/marche",
  },
  {
    icon: "⚙️",
    title: "Exploiter et rentabiliser ses espaces",
    description:
      "Optimiser le taux d'occupation, fixer un loyer cohérent, structurer sa gestion et réduire la vacance.",
    href: "/exploiter",
  },
  {
    icon: "⚖️",
    title: "Comprendre la réglementation",
    description:
      "Maîtriser les règles applicables en matière de bail, de fiscalité, d'assurance et d'urbanisme.",
    href: "/reglementation",
  },
  {
    icon: "📍",
    title: "Étudier les opportunités locales",
    description:
      "Analyser les marchés par ville et département pour affiner sa stratégie d'investissement.",
    href: "/marche",
  },
  {
    icon: "🧮",
    title: "Accéder aux outils pratiques",
    description:
      "Calculateurs, checklists, modèles de suivi et guides pratiques pour investisseurs et exploitants.",
    href: "/outils",
  },
];

const whyFollow = [
  {
    icon: "🎯",
    title: "Une approche factuelle",
    description:
      "Nos analyses s'appuient sur des données vérifiables, sans promesses de rendements irréalistes ni chiffres inventés.",
  },
  {
    icon: "🧭",
    title: "Un regard terrain",
    description:
      "Nous documentons les réalités du marché local, les écarts entre zones tendues et zones détendues, les obstacles concrets.",
  },
  {
    icon: "⚠️",
    title: "Une transparence sur les risques",
    description:
      "Chaque analyse présente les opportunités et les risques avec le même niveau d'attention. Nous ne vendons pas de rêve.",
  },
  {
    icon: "📚",
    title: "Une ressource de référence",
    description:
      "Guides, études de cas, analyses de marché et outils pratiques pour accompagner toutes les étapes d'un projet.",
  },
];

export default function HomePage() {
  const featured = getFeaturedArticles();
  const latest = getLatestArticles(6);

  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Média francophone de référence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a2e] leading-tight">
              Observatoire <br className="hidden sm:block" />
              <span className="text-[#1e3a5f]">du Stockage</span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-medium text-slate-500">
              Analyser, investir et rentabiliser les espaces de stockage.
            </p>
            <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Un média dédié au marché du stockage en France — boxs, garages, entrepôts, containers. Des analyses sérieuses, des guides pratiques et des ressources pour investisseurs, propriétaires et exploitants.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/analyses"
                className="inline-flex items-center justify-center gap-2 bg-[#1e3a5f] text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-[#162d4a] transition-colors"
              >
                Lire les analyses
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/newsletter"
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-slate-200 text-slate-700 font-semibold px-6 py-3.5 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-colors"
              >
                S'inscrire à la newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#f8f9fa] py-14 md:py-18 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionHeader
                label="Notre mission"
                title="Un observatoire, pas un vitrine commerciale"
                description="L'Observatoire du Stockage est né d'un constat : il manquait un média francophone sérieux, factuel et indépendant sur le marché des espaces de stockage."
              />
              <p className="text-slate-600 leading-relaxed mb-4">
                Nous n'avons pas vocation à vendre des formations, des listes d'opportunités ou des promesses de rendement. Notre rôle est d'éclairer — avec rigueur et prudence — un marché trop souvent simplifié à l'excès.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Chaque analyse publiée respecte une charte éditoriale stricte : aucun chiffre non sourcé, aucune promesse irréaliste, une attention constante aux risques autant qu'aux opportunités.
              </p>
              <Link href="/a-propos" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors">
                En savoir plus sur notre démarche
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Analyses publiées", value: "8+", note: "et en croissance" },
                { label: "Rubriques thématiques", value: "7", note: "investissement, marché..." },
                { label: "Données vérifiées", value: "100%", note: "zéro chiffre inventé" },
                { label: "Accès libre", value: "Gratuit", note: "sans inscription" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm">
                  <div className="text-2xl font-bold text-[#1e3a5f]">{stat.value}</div>
                  <div className="text-sm font-semibold text-slate-700 mt-1">{stat.label}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{stat.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-white py-14 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Nos grands sujets"
            title="Six piliers éditoriaux pour maîtriser le marché du stockage"
            description="De l'acquisition à l'exploitation, en passant par la réglementation et l'analyse locale, l'Observatoire couvre chaque dimension du secteur."
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pillar) => (
              <Link
                key={pillar.href + pillar.title}
                href={pillar.href}
                className="group bg-[#f8f9fa] rounded-xl border border-slate-100 p-6 hover:bg-white hover:shadow-md hover:border-slate-200 transition-all duration-200"
              >
                <div className="text-3xl mb-3">{pillar.icon}</div>
                <h3 className="font-bold text-[#1a1a2e] text-base leading-snug group-hover:text-blue-700 transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured articles */}
      {featured.length > 0 && (
        <section className="bg-[#f8f9fa] py-14 md:py-20 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              label="À la une"
              title="Analyses à ne pas manquer"
            />
            <div className="grid md:grid-cols-1 gap-6">
              {featured.map((article) => (
                <ArticleCard key={article.slug} article={article} variant="featured" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest articles */}
      <section className="bg-white py-14 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <SectionHeader
              label="Dernières analyses"
              title="Publications récentes"
            />
            <Link href="/analyses" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-800 shrink-0 ml-4">
              Toutes les analyses
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {latest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/analyses" className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-800">
              Toutes les analyses
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why follow */}
      <section className="bg-[#f8f9fa] py-14 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Notre posture"
            title="Pourquoi suivre l'Observatoire du Stockage ?"
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyFollow.map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[#1a1a2e] text-base mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterBlock />
    </>
  );
}
