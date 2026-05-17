import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticleBySlug, getLatestArticles, formatDate, articles } from "@/lib/articles";
import CategoryBadge from "@/components/ui/CategoryBadge";
import CalloutBox from "@/components/ui/CalloutBox";
import TableOfContents from "@/components/ui/TableOfContents";
import ArticleCard from "@/components/ui/ArticleCard";
import NewsletterBlock from "@/components/ui/NewsletterBlock";

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
  };
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

// Full content for the featured article
const featuredContent = () => (
  <div className="prose-article">
    <p>
      Les espaces de stockage — boxs individuels, garages, locaux en rez-de-chaussée, containers ou entrepôts — constituent une catégorie d'actifs immobiliers à part entière. Ils attirent un nombre croissant d'investisseurs en quête de diversification, attirés par des tickets d'entrée souvent inférieurs à ceux de l'immobilier résidentiel et par une gestion apparemment plus simple. Cette réalité mérite toutefois d'être nuancée.
    </p>

    <h2 id="qu-est-ce-qu-un-box">Qu'est-ce qu'un box de stockage ?</h2>
    <p>
      Un box de stockage est un espace fermé, généralement situé dans une résidence, un immeuble commercial ou un complexe dédié, loué à un particulier ou à une entreprise pour y stocker des biens. Il se distingue du garage par son usage exclusivement lié au stockage — sans accès véhicule dans la plupart des cas — et par ses dimensions souvent plus restreintes.
    </p>
    <p>
      Les formats sont très variés : quelques mètres carrés pour un box de cave, plusieurs dizaines de mètres carrés pour un local commercial de plain-pied. Cette diversité influe directement sur la demande, le loyer potentiel et les profils de locataires.
    </p>

    <CalloutBox type="retenir">
      Un box de stockage n'est pas un garage. Les règles locatives, fiscales et les profils de locataires peuvent différer significativement selon la nature et la localisation du bien.
    </CalloutBox>

    <h2 id="pourquoi-cet-actif-interesse">Pourquoi cet actif intéresse-t-il les investisseurs ?</h2>
    <p>
      Plusieurs caractéristiques font des espaces de stockage un actif potentiellement intéressant à étudier :
    </p>
    <ul>
      <li><strong>Ticket d'entrée accessible</strong> : un box ou un lot de garages peut être acquis à des prix bien inférieurs à ceux d'un appartement, selon la localisation.</li>
      <li><strong>Gestion simplifiée</strong> : pas d'eau courante, pas de chauffage obligatoire, peu de risques de dégradations structurelles lourdes dans la plupart des configurations.</li>
      <li><strong>Demande de stockage existante</strong> : le besoin de stockage individuel est réel, notamment en zones urbaines denses où la surface habitable est contrainte.</li>
      <li><strong>Diversification possible</strong> : la détention de plusieurs petites unités permet de diluer le risque de vacance.</li>
    </ul>

    <CalloutBox type="vigilance">
      Ces caractéristiques ne garantissent pas la rentabilité d'un investissement. Chaque projet doit être analysé au regard de son marché local, de son état, de sa localisation précise et du prix d'achat.
    </CalloutBox>

    <h2 id="criteres-analyse">Les critères fondamentaux d'analyse</h2>
    <h3 id="localisation">La localisation</h3>
    <p>
      La demande locative pour des espaces de stockage dépend étroitement de la densité urbaine, de la présence d'une population mobile, de l'environnement commercial et de l'accès depuis les axes de circulation. Un box situé en zone périurbaine peu dense ne bénéficie pas du même potentiel qu'un local en centre-ville ou à proximité d'un nœud logistique.
    </p>

    <h3 id="prix-achat">Le prix d'achat</h3>
    <p>
      Le prix au mètre carré d'un espace de stockage varie selon la localisation, la nature du bien, son état et le contexte de la transaction. Il n'existe pas de référentiel national stable : les prix observés sur les marchés locaux doivent être comparés au loyer potentiel pour calculer un rendement brut indicatif, avant toute prise en compte des charges, de la fiscalité et des coûts de travaux éventuels.
    </p>

    <h3 id="charges-et-fiscalite">Les charges et la fiscalité</h3>
    <p>
      Les charges de copropriété, les taxes foncières, les frais de gestion, les assurances et la fiscalité des revenus perçus constituent des éléments essentiels de l'équation économique. Le régime fiscal applicable dépend de la structure de détention (personne physique, SCI, société commerciale) et du montant des loyers perçus.
    </p>

    <CalloutBox type="legal">
      La fiscalité applicable à la location d'espaces de stockage est complexe et dépend de nombreux paramètres. Consultez impérativement un professionnel (comptable, conseiller fiscal) avant toute décision.
    </CalloutBox>

    <h2 id="risques-a-anticiper">Les risques à anticiper</h2>
    <p>
      Investir dans un espace de stockage n'est pas sans risques. Les principaux points de vigilance incluent :
    </p>
    <ul>
      <li><strong>La vacance locative</strong> : un espace vide ne génère aucun revenu mais continue à engendrer des charges.</li>
      <li><strong>L'état du bâti</strong> : infiltrations, humidité, vétusté des accès ou des équipements peuvent nécessiter des travaux non anticipés.</li>
      <li><strong>L'environnement concurrentiel</strong> : l'arrivée d'un acteur de self-storage à proximité peut modifier l'équilibre offre/demande local.</li>
      <li><strong>La liquidité</strong> : la revente d'un lot de garages peut s'avérer plus longue et complexe que celle d'un bien résidentiel classique.</li>
      <li><strong>Les contraintes réglementaires</strong> : changement de destination, règles de copropriété, autorisations d'urbanisme peuvent limiter les usages envisagés.</li>
    </ul>

    <h2 id="avant-de-se-lancer">Avant de se lancer : les questions essentielles</h2>
    <p>
      Avant toute acquisition, il est utile de se poser un certain nombre de questions structurantes :
    </p>
    <ul>
      <li>Quelle est la demande locative réelle dans ce secteur géographique précis ?</li>
      <li>À quel prix se louent des espaces comparables dans la zone ?</li>
      <li>Quel est l'état réel du bien et quels travaux sont nécessaires à court terme ?</li>
      <li>Quelles sont les charges de copropriété et la situation financière de la copropriété ?</li>
      <li>Quel régime fiscal s'applique à ma situation personnelle ?</li>
      <li>Quelle est la stratégie de sortie en cas de besoin de liquidité ?</li>
    </ul>

    <CalloutBox type="retenir" title="Synthèse">
      Un investissement dans un box ou un espace de stockage peut présenter des caractéristiques intéressantes — ticket d'entrée, gestion, diversification — mais ne saurait être abordé sans une analyse rigoureuse du marché local, du prix d'acquisition, des charges et de la fiscalité applicable. La rentabilité n'est jamais garantie : elle dépend de nombreux facteurs, dont certains sont hors de contrôle de l'investisseur.
    </CalloutBox>
  </div>
);

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const relatedArticles = getLatestArticles(3).filter((a) => a.slug !== slug);

  const tocItems = slug === "investir-box-stockage-fondamentaux"
    ? [
        { id: "qu-est-ce-qu-un-box", title: "Qu'est-ce qu'un box de stockage ?", level: 2 as const },
        { id: "pourquoi-cet-actif-interesse", title: "Pourquoi cet actif intéresse-t-il les investisseurs ?", level: 2 as const },
        { id: "criteres-analyse", title: "Les critères fondamentaux d'analyse", level: 2 as const },
        { id: "localisation", title: "La localisation", level: 3 as const },
        { id: "prix-achat", title: "Le prix d'achat", level: 3 as const },
        { id: "charges-et-fiscalite", title: "Les charges et la fiscalité", level: 3 as const },
        { id: "risques-a-anticiper", title: "Les risques à anticiper", level: 2 as const },
        { id: "avant-de-se-lancer", title: "Avant de se lancer : les questions essentielles", level: 2 as const },
      ]
    : [];

  return (
    <>
      <article>
        {/* Article header */}
        <header className="bg-white border-b border-slate-100 py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-3 mb-5">
              <Link href="/analyses" className="text-sm text-slate-500 hover:text-slate-700 transition-colors flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Analyses
              </Link>
              <span className="text-slate-300">/</span>
              <CategoryBadge slug={article.category} linked={false} />
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a2e] leading-tight">
              {article.title}
            </h1>

            <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
              {article.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500 border-t border-slate-100 pt-5">
              <div className="flex items-center gap-1.5">
                <div className="w-7 h-7 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white text-xs font-bold">
                  O
                </div>
                <span className="font-medium text-slate-700">{article.author}</span>
              </div>
              <span className="text-slate-300">·</span>
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              <span className="text-slate-300">·</span>
              <span>{article.readingTime} min de lecture</span>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="bg-[#f8f9fa] py-10 md:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-start">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-10">
                {tocItems.length > 0 && <TableOfContents items={tocItems} />}
                {slug === "investir-box-stockage-fondamentaux" ? (
                  featuredContent()
                ) : (
                  <div className="prose-article">
                    <p>{article.excerpt}</p>
                    <CalloutBox type="info" title="Contenu à venir">
                      Cet article est en cours de rédaction. Inscrivez-vous à la newsletter pour être informé de sa publication.
                    </CalloutBox>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="space-y-5 lg:sticky lg:top-24">
                <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
                  <h3 className="font-bold text-[#1a1a2e] text-sm mb-3">À propos de cet article</h3>
                  <dl className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Catégorie</dt>
                      <dd><CategoryBadge slug={article.category} size="sm" linked={false} /></dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Publication</dt>
                      <dd className="text-slate-700">{formatDate(article.date)}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-slate-500">Lecture</dt>
                      <dd className="text-slate-700">{article.readingTime} min</dd>
                    </div>
                  </dl>
                </div>

                <div className="bg-amber-50 border border-amber-100 rounded-xl p-5">
                  <p className="text-xs text-amber-800 leading-relaxed">
                    <strong>Avertissement :</strong> Les contenus de l'Observatoire du Stockage sont fournis à titre informatif et pédagogique. Ils ne constituent pas un conseil en investissement, juridique ou fiscal. Consultez un professionnel qualifié avant toute décision.
                  </p>
                </div>

                <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-[#1e3a5f] to-blue-500" />
                  <div className="p-5">
                    <h3 className="font-bold text-[#1a1a2e] text-sm mb-2">La newsletter</h3>
                    <p className="text-xs text-slate-600 mb-3">Recevez les prochaines analyses directement dans votre boîte mail.</p>
                    <Link
                      href="/newsletter"
                      className="block text-center text-xs font-semibold bg-[#1e3a5f] text-white px-4 py-2.5 rounded-lg hover:bg-[#162d4a] transition-colors"
                    >
                      S'inscrire gratuitement
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </article>

      {/* Related articles */}
      <section className="bg-white border-t border-slate-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1a1a2e] mb-8">Analyses liées</h2>
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
