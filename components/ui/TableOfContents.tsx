interface TocItem {
  id: string;
  title: string;
  level: 2 | 3;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <nav className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">Sommaire</p>
      <ol className="space-y-1.5">
        {items.map((item, i) => (
          <li key={item.id} className={item.level === 3 ? "ml-4" : ""}>
            <a
              href={`#${item.id}`}
              className="flex items-start gap-2 text-sm text-slate-700 hover:text-blue-700 transition-colors leading-snug"
            >
              <span className="text-slate-400 font-mono text-xs mt-0.5 shrink-0">
                {item.level === 2 ? `${i + 1}.` : "—"}
              </span>
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export type { TocItem };
