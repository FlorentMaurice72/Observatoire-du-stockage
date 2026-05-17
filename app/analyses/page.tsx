import type { Metadata } from "next";
import ArticleCard from "@/components/ui/ArticleCard";
import SectionHeader from "@/components/ui/SectionHeader";
import NewsletterBlock from "@/components/ui/NewsletterBlock";
import { articles } from "@/lib/articles";
import { categories } from "@/lib/categories";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Analyses et guides sur le marché du stockage",
  alternates: { canonical: "https://observatoire-du-stockage.fr/analyses" },
  description:
    "Toutes les analyses, guides et études de l'Observatoire du Stockage sur l'investissement, le marché, la rentabilité, la réglementation et l'exploitation des espaces de stockage.",
};

export default function AnalysesPage() {
  return (
    <>
      <section className="bg-white border-b border-slate-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Toutes les analyses"
            title="Analyses, guides et études de cas"
            description="Des contenus factuels et pédagogiques pour comprendre le marché du stockage, évaluer des projets d'investissement et maîtriser les fondamentaux de l'exploitation."
          />

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mt-6">
            <Link
              href="/analyses"
              className="text-sm font-medium px-4 py-1.5 rounded-full bg-[#1e3a5f] text-white"
            >
              Tout
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/analyses?categorie=${cat.slug}`}
                className="text-sm font-medium px-4 py-1.5 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-colors"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9fa] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          {/* Placeholder - more articles coming */}
          <div className="mt-10 text-center bg-white rounded-xl border border-dashed border-slate-200 p-10">
            <div className="text-3xl mb-3">✍️</div>
            <h3 className="font-bold text-[#1a1a2e] text-lg mb-2">De nouvelles analyses arrivent</h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto mb-5">
              L'Observatoire publie régulièrement de nouveaux contenus. Inscrivez-vous à la newsletter pour être prévenu à chaque publication.
            </p>
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#162d4a] transition-colors"
            >
              S'inscrire à la newsletter
            </Link>
          </div>
        </div>
      </section>

      <NewsletterBlock />
    </>
  );
}
