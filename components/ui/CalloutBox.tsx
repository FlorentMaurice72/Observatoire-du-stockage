interface CalloutBoxProps {
  type: "retenir" | "vigilance" | "info" | "legal";
  title?: string;
  children: React.ReactNode;
}

const calloutConfig = {
  retenir: {
    bg: "bg-blue-50 border-blue-200",
    icon: "💡",
    defaultTitle: "À retenir",
    titleColor: "text-blue-800",
    textColor: "text-blue-900",
  },
  vigilance: {
    bg: "bg-amber-50 border-amber-200",
    icon: "⚠️",
    defaultTitle: "Point de vigilance",
    titleColor: "text-amber-800",
    textColor: "text-amber-900",
  },
  info: {
    bg: "bg-slate-50 border-slate-200",
    icon: "ℹ️",
    defaultTitle: "À noter",
    titleColor: "text-slate-700",
    textColor: "text-slate-800",
  },
  legal: {
    bg: "bg-orange-50 border-orange-200",
    icon: "⚖️",
    defaultTitle: "Avertissement",
    titleColor: "text-orange-800",
    textColor: "text-orange-900",
  },
};

export default function CalloutBox({ type, title, children }: CalloutBoxProps) {
  const config = calloutConfig[type];

  return (
    <div className={`rounded-xl border ${config.bg} p-5 my-6`}>
      <div className={`flex items-center gap-2 font-semibold text-sm mb-2 ${config.titleColor}`}>
        <span>{config.icon}</span>
        <span>{title ?? config.defaultTitle}</span>
      </div>
      <div className={`text-sm leading-relaxed ${config.textColor}`}>{children}</div>
    </div>
  );
}
