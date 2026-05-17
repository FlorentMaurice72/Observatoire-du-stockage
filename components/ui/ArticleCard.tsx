import Link from "next/link";
import { Article, formatDate } from "@/lib/articles";
import CategoryBadge from "./CategoryBadge";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "compact" | "featured";
}

export default function ArticleCard({ article, variant = "default" }: ArticleCardProps) {
  if (variant === "compact") {
    return (
      <Link href={`/analyses/${article.slug}`} className="group flex gap-4 py-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 -mx-4 px-4 rounded-lg transition-colors">
        <div className="flex-1 min-w-0">
          <CategoryBadge slug={article.category} size="sm" linked={false} />
          <h3 className="mt-2 text-sm font-semibold text-[#1a1a2e] group-hover:text-blue-700 transition-colors leading-snug line-clamp-2">
            {article.title}
          </h3>
          <p className="mt-1 text-xs text-slate-500">{formatDate(article.date)}</p>
        </div>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link href={`/analyses/${article.slug}`} className="group block bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-[#1e3a5f] to-blue-600" />
        <div className="p-6 md:p-8">
          <CategoryBadge slug={article.category} />
          <h2 className="mt-3 text-xl md:text-2xl font-bold text-[#1a1a2e] group-hover:text-blue-700 transition-colors leading-snug">
            {article.title}
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
          <div className="mt-5 flex items-center gap-4 text-sm text-slate-500">
            <span>{formatDate(article.date)}</span>
            <span>·</span>
            <span>{article.readingTime} min de lecture</span>
            <span>·</span>
            <span>{article.author}</span>
          </div>
          <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 group-hover:gap-2 transition-all">
            Lire l'analyse
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/analyses/${article.slug}`} className="group block bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 p-5">
      <CategoryBadge slug={article.category} />
      <h3 className="mt-3 text-base font-bold text-[#1a1a2e] group-hover:text-blue-700 transition-colors leading-snug line-clamp-2">
        {article.title}
      </h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-3">
        {article.excerpt}
      </p>
      <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
        <span>{formatDate(article.date)}</span>
        <span>·</span>
        <span>{article.readingTime} min</span>
      </div>
    </Link>
  );
}
