interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({ label, title, description, align = "left" }: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClass} mb-10`}>
      {label && (
        <span className="text-xs font-semibold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full w-fit">
          {label}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] leading-tight">
        {title}
      </h2>
      {description && (
        <p className={`text-slate-600 text-base md:text-lg leading-relaxed ${align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
