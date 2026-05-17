import Link from "next/link";
import { getCategoryBySlug, categoryColorMap } from "@/lib/categories";

interface CategoryBadgeProps {
  slug: string;
  linked?: boolean;
  size?: "sm" | "md";
}

export default function CategoryBadge({ slug, linked = true, size = "md" }: CategoryBadgeProps) {
  const category = getCategoryBySlug(slug);
  if (!category) return null;

  const colorClass = categoryColorMap[category.color] ?? "bg-slate-100 text-slate-700 border-slate-200";
  const sizeClass = size === "sm" ? "text-xs px-2 py-0.5" : "text-xs font-medium px-3 py-1";

  const badge = (
    <span className={`inline-flex items-center rounded-full border font-medium uppercase tracking-wide ${colorClass} ${sizeClass}`}>
      {category.label}
    </span>
  );

  if (linked) {
    return (
      <Link href={`/analyses?categorie=${slug}`} className="hover:opacity-80 transition-opacity">
        {badge}
      </Link>
    );
  }

  return badge;
}
