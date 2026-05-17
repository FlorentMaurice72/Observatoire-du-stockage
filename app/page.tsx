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
  alternates: { canonical: "https://observatoire-du-stockage.fr" },
};

const pillars = [
  {
    icon: (
      <svg className="w-5 h-5 text-[#1e3a5f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    title: "Investir dans les boxs, garages et entrepôts",
    description: "Comprendre les fondamentaux, évaluer les opportunités et anticiper les risques avant d'acquérir un espace de stockage.",
    href: "/investir",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#1e3a5f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Analyser le marché du stockage",
    description: "Suivre les tendances nationales et locales, décrypter l'offre et la demande, identifier les zones dynamiques.",
    href: "/marche",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#1e3a5f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Exploiter et rentabiliser ses espaces",
    description: "Optimiser le taux d'occupation, fixer un loyer cohérent, structurer sa gestion et réduire la vacance.",
    href: "/exploiter",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#1e3a5f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: "Comprendre la réglementation",
    description: "Maîtriser les règles applicables en matière de bail, de fiscalité, d'assurance et d'urbanisme.",
    href: "/reglementation",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#1e3a5f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Étudier les marchés locaux",
    description: "Analyser les marchés par ville et département pour affiner sa compréhension du secteur et identifier les dynamiques territoriales.",
    href: "/marche",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-[#1e3a5f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Accéder aux outils pratiques",
    description: "Calculateurs, checklists, modèles de suivi et guides pratiques pour investisseurs et exploitants.",
    href: "/outils",
  },
];

const whyFollow = [
  {
    number: "01",
    title: "Aucune donnée inventée",
    description:
      "Chaque chiffre publié est sourcé ou clairement présenté comme une fourchette indicative à vérifier sur le marché local. Nous ne fabriquons pas de statistiques rassurantes.",
  },
  {
    number: "02",
    title: "Risques traités avec la même rigueur que les opportunités",
    description:
      "Vacance locative, liquidité, concurrence du self-storage, évolutions réglementaires : les risques sont documentés autant que les atouts.",
  },
  {
    number: "03",
    title: "Approche terrain, pas théorique",
    description:
      "Nos analyses partent des réalités concrètes du marché — prix observés, profils de locataires, comportements d'achat — pas de modèles abstraits.",
  },
  {
    number: "04",
    title: "Un média, pas un vendeur",
    description:
      "Pas de formations à vendre, pas de listes d'opportunités, pas de promesses de rendement. Notre seul produit est l'information factuelle et la méthode.",
  },
];

const editorialCommitments = [
  { label: "Zéro chiffre non sourcé" },
  { label: "Risques systématiquement documentés" },
  { label: "Renvoi vers les professionnels du droit et de la fiscalité" },
  { label: "Formulations prudentes sur les données locales" },
  { label: "Aucune promesse de rentabilité" },
];

export default function HomePage() {
  const featured = getFeaturedArticles();
  const latest = getLatestArticles(6);

  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Média francophone de référence · Marché du stockage
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a2e] leading-[1.1] tracking-tight">
              Observatoire{" "}
              <span className="text-[#1e3a5f]">du Stockage</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-slate-500 font-medium leading-relaxed">
              Analyser, investir et rentabiliser les espaces de stockage.
            </p>
            <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Des analyses sérieuses sur le marché français des boxs, garages et entrepôts — pour les investisseurs, propriétaires et exploitants qui souhaitent comprendre avant d'agir.
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

            {/* Engagements éditoriaux */}
            <div className="mt-10 pt-8 border-t border-slate-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
                Nos engagements éditoriaux
              </p>
              <div className="flex flex-wrap gap-2">
                {editorialCommitments.map((c) => (
                  <span
                    key={c.label}
                    className="inline-flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full"
                  >
                    <svg className="w-3 h-3 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {c.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#f8f9fa] py-14 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                label="Notre mission"
                title="Un observatoire, pas une vitrine commerciale"
                description="L'Observatoire du Stockage est né d'un constat : il manquait un média francophone sérieux, factuel et indépendant sur le marché des espaces de stockage."
              />
              <p className="text-slate-600 leading-relaxed mb-4">
                Nous n'avons pas vocation à vendre des formations, des listes d'opportunités ou des promesses de rendement. Notre rôle est d'éclairer — avec rigueur et prudence — un marché trop souvent réduit à quelques chiffres attractifs sans contextualisation.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Chaque analyse publiée respecte une charte éditoriale stricte : aucun chiffre non sourcé, aucune promesse irréaliste, une attention constante aux risques autant qu'aux opportunités.
              </p>
              <Link href="/a-propos" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors">
                Notre ligne éditoriale et nos engagements
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="space-y-3">
              {[
                {
                  label: "Rubriques thématiques",
                  value: "7",
                  detail: "Investissement · Marché · Rentabilité · Réglementation · Exploitation · Études de cas · Analyse locale",
                },
                {
                  label: "Posture éditoriale",
                  value: "Factuelle",
                  detail: "Données sourcées, formulations prudentes, renvoi vers des professionnels qualifiés",
                },
                {
                  label: "Audience",
                  value: "Spécialisée",
                  detail: "Investisseurs, propriétaires, exploitants, professionnels du secteur",
                },
                {
                  label: "Accès",
                  value: "Libre",
                  detail: "Tous les contenus éditoriaux sont accessibles sans inscription",
                },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm flex items-start gap-4">
                  <div className="shrink-0 w-16 text-right">
                    <span className="text-lg font-bold text-[#1e3a5f]">{stat.value}</span>
                  </div>
                  <div className="border-l border-slate-100 pl-4">
                    <div className="text-sm font-semibold text-slate-800">{stat.label}</div>
                    <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{stat.detail}</div>
                  </div>
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
            title="Six axes éditoriaux pour couvrir l'ensemble du secteur"
            description="De l'acquisition à l'exploitation, en passant par la réglementation et l'analyse de marché local, l'Observatoire traite chaque dimension du stockage avec la même rigueur."
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillars.map((pillar) => (
              <Link
                key={pillar.href + pillar.title}
                href={pillar.href}
                className="group bg-[#f8f9fa] rounded-xl border border-slate-100 p-6 hover:bg-white hover:shadow-md hover:border-blue-100 transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:bg-[#1e3a5f] group-hover:border-[#1e3a5f] transition-colors">
                  <div className="text-[#1e3a5f] group-hover:text-white transition-colors">
                    {pillar.icon}
                  </div>
                </div>
                <h3 className="font-bold text-[#1a1a2e] text-sm leading-snug group-hover:text-blue-700 transition-colors mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">{pillar.description}</p>
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
              title="Analyse recommandée"
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
          <div className="flex items-start justify-between gap-4 mb-10">
            <SectionHeader
              label="Dernières analyses"
              title="Publications récentes"
            />
            <Link href="/analyses" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-800 shrink-0 mt-1">
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

      {/* Why follow — version institutionnelle */}
      <section className="bg-[#f8f9fa] py-14 md:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                label="Notre posture"
                title="Pourquoi suivre l'Observatoire du Stockage ?"
                description="Quatre principes qui définissent notre approche éditoriale et la distinguent des contenus marketing sur le sujet."
              />
              <Link href="/a-propos" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors">
                Lire notre charte éditoriale complète
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="space-y-4">
              {whyFollow.map((item) => (
                <div key={item.title} className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm flex items-start gap-4">
                  <span className="shrink-0 text-xs font-bold text-slate-300 font-mono mt-0.5 w-6">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="font-bold text-[#1a1a2e] text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterBlock />
    </>
  );
}
