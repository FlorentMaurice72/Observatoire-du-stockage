import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticleBySlug, getRelatedArticles, formatDate, articles } from "@/lib/articles";
import CategoryBadge from "@/components/ui/CategoryBadge";
import CalloutBox from "@/components/ui/CalloutBox";
import TableOfContents from "@/components/ui/TableOfContents";
import ArticleCard from "@/components/ui/ArticleCard";
import NewsletterBlock from "@/components/ui/NewsletterBlock";
import EbookLeadMagnet from "@/components/ui/EbookLeadMagnet";

const BASE_URL = "https://observatoire-du-stockage.fr";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `${BASE_URL}/analyses/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      section: article.category,
    },
  };
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

// ── Article content ────────────────────────────────────────────────────────────

const investirFondamentauxContent = () => (
  <div className="prose-article">
    <p className="text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
      Les espaces de stockage constituent une catégorie d'actifs immobiliers à part entière, distincte du résidentiel classique. Avant d'envisager une acquisition, comprendre ce qui les différencie — et ce qui les rend plus complexes qu'il n'y paraît — est indispensable.
    </p>

    <h2 id="qu-est-ce-qu-un-box">Qu'est-ce qu'un box de stockage ?</h2>
    <p>
      Un box de stockage est un espace fermé, généralement situé dans une résidence, un immeuble commercial ou un complexe dédié, loué à un particulier ou à une entreprise pour y stocker des biens mobiliers. Il se distingue du garage par son usage exclusivement lié au stockage — sans accès véhicule dans la majorité des configurations — et par ses dimensions souvent plus réduites.
    </p>
    <p>
      Les formats varient considérablement : de quelques mètres carrés pour un box de cave ou de sous-sol, à plusieurs dizaines de mètres carrés pour un local commercial de plain-pied ou un container de stockage. Cette diversité influe directement sur le profil de la demande, le loyer potentiel et la nature des contraintes réglementaires applicables.
    </p>

    <CalloutBox type="retenir">
      Un box de stockage n'est pas un garage. Les régimes locatifs, les obligations fiscales et les profils de locataires peuvent différer significativement selon la nature du bien, sa localisation et son usage effectif.
    </CalloutBox>

    <h2 id="pourquoi-cet-actif-interesse">Pourquoi cet actif retient-il l'attention des investisseurs ?</h2>
    <p>
      Plusieurs caractéristiques distinguent les espaces de stockage des autres actifs immobiliers et justifient qu'on les examine sérieusement comme composante d'une stratégie patrimoniale :
    </p>
    <ul>
      <li><strong>Ticket d'entrée généralement accessible</strong> : un box ou un lot de garages peut être acquis à des prix inférieurs à ceux d'un appartement, selon la localisation et la configuration. Cette accessibilité ne présage pas de la rentabilité — elle dépend du prix relatif au loyer observé localement.</li>
      <li><strong>Gestion opérationnelle simplifiée</strong> : l'absence d'eau courante, de chauffage obligatoire et d'équipements techniques lourds réduit les aléas d'exploitation dans la plupart des configurations. Cela n'exclut pas les problèmes de bâti (humidité, étanchéité, accès).</li>
      <li><strong>Demande de stockage structurelle</strong> : la réduction de la surface habitable en zones urbaines denses, la mobilité professionnelle et les pratiques de consommation génèrent un besoin réel de stockage individuel. Ce besoin est variable selon les zones et ne justifie pas une demande locative garantie en tout point du territoire.</li>
      <li><strong>Diversification par multiplication d'unités</strong> : la détention de plusieurs petites unités permet de diluer le risque de vacance. Elle complexifie en contrepartie la gestion et l'analyse de l'investissement.</li>
    </ul>

    <CalloutBox type="vigilance">
      Ces caractéristiques ne garantissent pas la rentabilité d'un investissement. Chaque projet doit être analysé au regard de son marché local spécifique, de l'état réel du bien, de sa localisation précise et du prix d'achat effectif.
    </CalloutBox>

    <h2 id="criteres-analyse">Les critères fondamentaux d'analyse</h2>
    <h3 id="localisation">La localisation et son environnement</h3>
    <p>
      La demande locative pour des espaces de stockage dépend étroitement de la densité urbaine, de la présence d'une population mobile ou contrainte en surface habitable, de l'environnement commercial et de l'accessibilité depuis les axes de circulation. Un box situé en zone périurbaine peu dense n'a pas le même potentiel locatif qu'un local en centre-ville ou à proximité d'une zone d'activité.
    </p>
    <p>
      L'environnement concurrentiel est également déterminant : la présence d'un acteur professionnel de self-storage à proximité, d'une offre abondante de garages similaires ou d'une faible demande documentée sont des signaux à prendre au sérieux avant toute décision.
    </p>

    <h3 id="prix-achat">Le prix d'acquisition</h3>
    <p>
      Le prix au mètre carré d'un espace de stockage varie selon la localisation, la nature du bien, son état et le contexte de la transaction. Il n'existe pas de référentiel national fiable et stable pour ce type d'actif. Les prix observés sur les marchés locaux — via les annonces immobilières, les retours de notaires ou les données de transaction disponibles — doivent être comparés au loyer potentiel local pour évaluer un rendement brut indicatif, avant toute intégration des charges, de la fiscalité et des coûts de travaux éventuels.
    </p>

    <h3 id="charges-et-fiscalite">Les charges et la fiscalité</h3>
    <p>
      Les charges de copropriété, les taxes foncières, les frais de gestion éventuels, les primes d'assurance et la fiscalité des revenus constituent les principaux postes à intégrer dans l'analyse de rentabilité nette. Le régime fiscal applicable dépend de la structure de détention (personne physique, SCI à l'IR ou à l'IS, société) et du montant total des revenus générés. Ces paramètres varient fortement selon la situation personnelle de l'investisseur.
    </p>

    <CalloutBox type="legal">
      La fiscalité applicable à la location d'espaces de stockage est complexe et dépend de nombreux paramètres personnels et structurels. Consultez impérativement un professionnel qualifié (expert-comptable, conseiller fiscal) avant toute décision d'acquisition.
    </CalloutBox>

    <h2 id="risques-a-anticiper">Les risques à anticiper</h2>
    <p>
      Tout investissement immobilier comporte des risques. Les espaces de stockage ne font pas exception. Les principaux points de vigilance sont les suivants :
    </p>
    <ul>
      <li><strong>Vacance locative</strong> : un espace non loué ne génère aucun revenu mais continue d'engendrer des charges. La vacance peut résulter d'une demande locale insuffisante, d'un positionnement prix inadapté ou d'une faible visibilité.</li>
      <li><strong>État du bâti</strong> : infiltrations, humidité, vétusté des accès ou des équipements de fermeture peuvent nécessiter des travaux non anticipés. Un diagnostic sérieux avant acquisition est indispensable.</li>
      <li><strong>Environnement concurrentiel</strong> : l'arrivée d'un acteur structuré de self-storage dans la zone peut modifier significativement l'équilibre offre/demande local.</li>
      <li><strong>Liquidité relative</strong> : la revente d'un lot de garages peut s'avérer plus longue et moins prévisible que celle d'un bien résidentiel classique, notamment hors des grandes agglomérations.</li>
      <li><strong>Contraintes réglementaires</strong> : règles de copropriété restrictives, changement de destination soumis à autorisation, évolution du PLU : autant de paramètres qui peuvent limiter les usages ou la valorisation du bien.</li>
    </ul>

    <h2 id="avant-de-se-lancer">Avant de se décider : les questions structurantes</h2>
    <p>
      Une analyse sérieuse d'un projet d'acquisition impose de répondre à un certain nombre de questions avant de conclure :
    </p>
    <ul>
      <li>Quelle est la demande locative réelle et documentée dans ce secteur géographique précis ?</li>
      <li>À quel prix se louent des espaces comparables dans la zone (annonces actives, loyers pratiqués) ?</li>
      <li>Quel est l'état réel du bien, et quels travaux sont nécessaires à court terme ?</li>
      <li>Quelle est la situation financière de la copropriété, et des travaux sont-ils votés ou prévisibles ?</li>
      <li>Quel régime fiscal s'applique à ma situation personnelle et à la structure de détention envisagée ?</li>
      <li>Quelle est ma stratégie de sortie en cas de besoin de liquidité ou de revente ?</li>
    </ul>

    <CalloutBox type="retenir" title="Ce qu'il faut retenir">
      Un investissement dans un espace de stockage peut présenter des caractéristiques intéressantes — ticket d'entrée, gestion opérationnelle, demande locative locale — mais ne saurait être abordé sans une analyse rigoureuse et personnalisée. La rentabilité n'est jamais acquise par nature : elle dépend du prix d'achat, du loyer effectivement observable sur le marché local, des charges réelles, de la fiscalité applicable et de la qualité de la gestion. Certains de ces facteurs sont hors de contrôle direct de l'investisseur.
    </CalloutBox>
  </div>
);

// ── Page component ──────────────────────────────────────────────────────────────

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const relatedArticles = getRelatedArticles(slug, 3);

  const tocItems = slug === "investir-box-stockage-fondamentaux"
    ? [
        { id: "qu-est-ce-qu-un-box", title: "Qu'est-ce qu'un box de stockage ?", level: 2 as const },
        { id: "pourquoi-cet-actif-interesse", title: "Pourquoi cet actif retient-il l'attention ?", level: 2 as const },
        { id: "criteres-analyse", title: "Les critères fondamentaux d'analyse", level: 2 as const },
        { id: "localisation", title: "La localisation et son environnement", level: 3 as const },
        { id: "prix-achat", title: "Le prix d'acquisition", level: 3 as const },
        { id: "charges-et-fiscalite", title: "Les charges et la fiscalité", level: 3 as const },
        { id: "risques-a-anticiper", title: "Les risques à anticiper", level: 2 as const },
        { id: "avant-de-se-lancer", title: "Avant de se décider : les questions structurantes", level: 2 as const },
      ]
    : [];

  // JSON-LD schema pour les moteurs de recherche
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: { "@type": "Organization", name: "Observatoire du Stockage" },
    publisher: {
      "@type": "Organization",
      name: "Observatoire du Stockage",
      url: BASE_URL,
    },
    url: `${BASE_URL}/analyses/${article.slug}`,
    inLanguage: "fr-FR",
  };

  const needsDisclaimer =
    article.category === "reglementation" || article.category === "rentabilite";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        {/* Fil d'Ariane + header */}
        <header className="bg-white border-b border-slate-100 py-10 md:py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
              <Link href="/" className="hover:text-slate-700 transition-colors">Accueil</Link>
              <svg className="w-3 h-3 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/analyses" className="hover:text-slate-700 transition-colors">Analyses</Link>
              <svg className="w-3 h-3 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <CategoryBadge slug={article.category} linked={false} size="sm" />
            </nav>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a2e] leading-tight">
              {article.title}
            </h1>

            <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
              {article.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500 border-t border-slate-100 pt-5">
              <div className="flex items-center gap-1.5">
                <div className="w-7 h-7 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white text-xs font-bold shrink-0">
                  O
                </div>
                <span className="font-medium text-slate-700">{article.author}</span>
              </div>
              <span className="text-slate-200 hidden sm:inline">·</span>
              <time dateTime={article.date} className="tabular-nums">{formatDate(article.date)}</time>
              <span className="text-slate-200 hidden sm:inline">·</span>
              <span>{article.readingTime} min de lecture</span>
            </div>
          </div>
        </header>

        {/* Corps */}
        <div className="bg-[#f8f9fa] py-10 md:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-start">

              {/* Contenu principal */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-10">
                {tocItems.length > 0 && <TableOfContents items={tocItems} />}

                {needsDisclaimer && (
                  <CalloutBox type="legal">
                    Les informations présentées dans cet article sont à caractère informatif et pédagogique. Elles ne constituent pas un conseil juridique, fiscal ou financier. Consultez un professionnel qualifié avant toute décision.
                  </CalloutBox>
                )}

                {slug === "investir-box-stockage-fondamentaux" ? (
                  investirFondamentauxContent()
                ) : (
                  <div className="prose-article">
                    <p className="text-lg text-slate-700 leading-relaxed border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
                      {article.excerpt}
                    </p>
                    <CalloutBox type="info" title="Contenu en cours de rédaction">
                      Cet article est en cours de rédaction. Inscrivez-vous à la newsletter pour être informé de sa publication.
                    </CalloutBox>
                    <p className="text-slate-600 leading-relaxed">
                      L'Observatoire du Stockage publie progressivement ses analyses. Chaque article fait l'objet d'une rédaction soignée, d'une vérification des sources et d'une relecture éditoriale avant publication.
                    </p>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="space-y-4 lg:sticky lg:top-24">
                {/* Méta article */}
                <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
                  <h3 className="font-bold text-[#1a1a2e] text-xs uppercase tracking-wider mb-3">
                    À propos de cet article
                  </h3>
                  <dl className="space-y-2.5 text-sm">
                    <div className="flex items-center justify-between">
                      <dt className="text-slate-500">Catégorie</dt>
                      <dd><CategoryBadge slug={article.category} size="sm" linked={false} /></dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-slate-500">Publication</dt>
                      <dd className="text-slate-700 tabular-nums">{formatDate(article.date)}</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-slate-500">Lecture</dt>
                      <dd className="text-slate-700">{article.readingTime} min</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-slate-500">Auteur</dt>
                      <dd className="text-slate-700">{article.author}</dd>
                    </div>
                  </dl>
                </div>

                {/* Avertissement */}
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                  <p className="text-xs text-amber-800 leading-relaxed">
                    <strong className="block mb-1">Avertissement éditorial</strong>
                    Les contenus de l'Observatoire du Stockage sont fournis à titre informatif et pédagogique. Ils ne constituent pas un conseil en investissement, juridique ou fiscal. Consultez un professionnel qualifié avant toute décision.
                  </p>
                </div>

                {/* Ebook */}
                <EbookLeadMagnet variant="sidebar" />

                {/* Newsletter */}
                <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-[#1e3a5f] to-blue-600" />
                  <div className="p-5">
                    <h3 className="font-bold text-[#1a1a2e] text-sm mb-1.5">
                      Newsletter de l'Observatoire
                    </h3>
                    <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                      Recevez les prochaines analyses, guides et ressources directement dans votre boîte mail.
                    </p>
                    <Link
                      href="/newsletter"
                      className="block text-center text-xs font-semibold bg-[#1e3a5f] text-white px-4 py-2.5 rounded-lg hover:bg-[#162d4a] transition-colors"
                    >
                      S'inscrire gratuitement
                    </Link>
                  </div>
                </div>

                {/* Rubriques liées */}
                <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
                  <h3 className="font-bold text-[#1a1a2e] text-xs uppercase tracking-wider mb-3">
                    Approfondir
                  </h3>
                  <ul className="space-y-2">
                    {[
                      { href: "/investir", label: "Guide Investir" },
                      { href: "/marche", label: "Analyses de marché" },
                      { href: "/reglementation", label: "Réglementation" },
                      { href: "/outils", label: "Outils pratiques" },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-700 transition-colors"
                        >
                          <svg className="w-3 h-3 text-slate-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </article>

      {/* Zone réactions / commentaires placeholder */}
      <section className="bg-white border-t border-slate-100 py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-bold text-[#1a1a2e] mb-2">Une question, une correction, un témoignage ?</h2>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            L'Observatoire du Stockage privilégie la rigueur sur la réactivité. Si vous avez identifié une erreur, souhaitez apporter un complément factuel ou partager une expérience concrète liée au sujet de cet article, contactez-nous.
          </p>
          <div className="bg-[#f8f9fa] border border-dashed border-slate-200 rounded-xl p-6 text-center">
            <p className="text-sm text-slate-500 mb-4">
              Le système de commentaires sera disponible dans une prochaine version. En attendant, utilisez le formulaire de contact.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1e3a5f] border border-[#1e3a5f] px-4 py-2 rounded-lg hover:bg-[#1e3a5f] hover:text-white transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Articles liés */}
      <section className="bg-[#f8f9fa] border-t border-slate-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-[#1a1a2e]">Analyses liées</h2>
            <Link href="/analyses" className="text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors flex items-center gap-1">
              Toutes les analyses
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedArticles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      <NewsletterBlock />
    </>
  );
}
