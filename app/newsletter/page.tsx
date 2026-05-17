import type { Metadata } from "next";
import NewsletterBlock from "@/components/ui/NewsletterBlock";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Inscrivez-vous à la newsletter de l'Observatoire du Stockage pour recevoir analyses, tendances et guides sur le marché des espaces de stockage.",
};

const promesses = [
  {
    icon: "📊",
    title: "Analyses de marché",
    description: "Décryptage des tendances nationales et locales du secteur du stockage.",
  },
  {
    icon: "📚",
    title: "Guides pratiques",
    description: "Des ressources structurées pour investisseurs débutants et confirmés.",
  },
  {
    icon: "⚖️",
    title: "Points réglementaires",
    description: "Les évolutions fiscales, juridiques et réglementaires à surveiller.",
  },
  {
    icon: "🧮",
    title: "Nouveaux outils",
    description: "Notification en avant-première à chaque sortie d'un outil ou calculateur.",
  },
];

export default function NewsletterPage() {
  return (
    <>
      <section className="bg-white border-b border-slate-100 py-12 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
            Newsletter
          </span>
          <h1 className="mt-5 text-3xl md:text-4xl font-bold text-[#1a1a2e] leading-tight">
            Restez informé des évolutions du marché du stockage
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
            Recevez les analyses, tendances, guides pratiques et ressources de l'Observatoire directement dans votre boîte mail. Sans spam. Sans fréquence excessive.
          </p>
        </div>
      </section>

      <section className="bg-[#f8f9fa] py-12 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {promesses.map((p) => (
              <div key={p.title} className="bg-white rounded-xl border border-slate-100 shadow-sm p-5 text-center">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-[#1a1a2e] text-sm mb-1.5">{p.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterBlock />

      <section className="bg-white py-10 border-t border-slate-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-slate-500 leading-relaxed">
            En vous inscrivant, vous acceptez de recevoir des communications de l'Observatoire du Stockage. Désabonnement possible à tout moment via le lien présent dans chaque email. Vos données ne sont pas transmises à des tiers.
          </p>
        </div>
      </section>
    </>
  );
}
