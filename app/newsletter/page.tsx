import type { Metadata } from "next";
import Link from "next/link";
import NewsletterBlock from "@/components/ui/NewsletterBlock";

export const metadata: Metadata = {
  title: "Newsletter — Observatoire du Stockage",
  alternates: { canonical: "https://observatoire-du-stockage.fr/newsletter" },
  description:
    "Analyses de marché, guides pratiques et ressources pour investisseurs et exploitants d'espaces de stockage. Newsletter gratuite, sans spam.",
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

const apercu = [
  {
    label: "Analyse",
    title: "Prix des garages en France : ce que disent les données DVF",
    href: "/analyses/prix-garages-donnees-dvf",
  },
  {
    label: "Guide",
    title: "Structurer la gestion de plusieurs unités de stockage",
    href: "/analyses/structurer-gestion-plusieurs-unites-stockage",
  },
  {
    label: "Réglementation",
    title: "TVA et location de garage : quand s'applique-t-elle ?",
    href: "/analyses/tva-location-garage",
  },
];

export default function NewsletterPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-slate-100 py-14 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
            Newsletter gratuite
          </span>
          <h1 className="mt-5 text-3xl md:text-4xl font-bold text-[#1a1a2e] leading-tight">
            Le marché du stockage,<br className="hidden sm:block" /> décrypté régulièrement
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
            Analyses, tendances, guides pratiques et outils — directement dans votre boîte mail. Sans spam. Sans fréquence excessive.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href="#inscription"
              className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white font-bold px-7 py-3.5 rounded-xl hover:bg-[#162d4a] transition-colors text-sm"
            >
              S'inscrire gratuitement
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <p className="text-xs text-slate-400">Désabonnement possible à tout moment</p>
          </div>
        </div>
      </section>

      {/* Ce que vous recevrez */}
      <section className="bg-[#f8f9fa] py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-lg font-bold text-[#1a1a2e] mb-8">Ce que vous recevrez</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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

      {/* Aperçu du contenu */}
      <section className="bg-white py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-lg font-bold text-[#1a1a2e] mb-2">Aperçu des publications</h2>
          <p className="text-center text-sm text-slate-500 mb-8">Le type de contenu que vous recevrez</p>
          <div className="space-y-3">
            {apercu.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-4 bg-[#f8f9fa] border border-slate-100 rounded-xl p-4 hover:border-blue-200 hover:bg-white transition-all group"
              >
                <span className="shrink-0 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
                  {item.label}
                </span>
                <span className="text-sm font-medium text-[#1a1a2e] group-hover:text-blue-700 transition-colors leading-snug">
                  {item.title}
                </span>
                <svg className="ml-auto shrink-0 w-4 h-4 text-slate-300 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/articles" className="text-sm font-semibold text-blue-700 hover:underline">
              Voir toutes les publications →
            </Link>
          </div>
        </div>
      </section>

      {/* Formulaire */}
      <div id="inscription">
        <NewsletterBlock />
      </div>

      {/* Mentions légales */}
      <section className="bg-white py-10 border-t border-slate-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs text-slate-400 leading-relaxed">
            En vous inscrivant, vous acceptez de recevoir des communications de l'Observatoire du Stockage.
            Désabonnement possible à tout moment via le lien présent dans chaque email.
            Vos données ne sont pas transmises à des tiers.
          </p>
        </div>
      </section>
    </>
  );
}
