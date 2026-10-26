import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ebook — Téléchargement",
  description: "Accédez au téléchargement de l'ebook De 0 à 34 boxes en 5 ans.",
  robots: { index: false },
};

export default function EbookMerciPage() {
  return (
    <section className="bg-white min-h-[60vh] flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20 text-center">
        <div className="w-16 h-16 rounded-2xl bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-5">
          Ebook gratuit
        </span>

        <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] leading-tight mb-4">
          Votre ebook est prêt
        </h1>

        <p className="text-base text-slate-600 leading-relaxed mb-6">
          <strong className="text-[#1a1a2e]">De 0 à 34 boxes en 5 ans</strong> est disponible en téléchargement immédiat.
        </p>

        <a
          href="/ebook-de-0-a-34-boxes.pdf"
          download
          className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white font-semibold px-8 py-4 rounded-xl hover:bg-[#162d4a] transition-colors text-base mb-8"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Télécharger l'ebook (PDF)
        </a>

        <div className="bg-[#f8f9fa] rounded-2xl border border-slate-100 p-6 mb-8 text-left">
          <h2 className="font-bold text-[#1a1a2e] text-sm mb-3">Ce que contient l'ebook</h2>
          <ul className="space-y-2">
            {[
              "Pourquoi le stockage : contexte et critères de départ",
              "Les premières acquisitions : méthode et erreurs initiales",
              "Structurer son approche de sélection sur le long terme",
              "La gestion quotidienne à partir de plusieurs dizaines d'unités",
              "Les arbitrages et enseignements sur 5 ans",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                <svg className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/analyses"
            className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#162d4a] transition-colors text-sm"
          >
            Lire les analyses
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold px-6 py-3 rounded-xl hover:border-slate-300 transition-colors text-sm"
          >
            Retour à l'accueil
          </Link>
        </div>

        <p className="mt-10 text-xs text-slate-400 leading-relaxed max-w-md mx-auto">
          Les contenus de cet ebook sont à titre informatif et ne constituent pas un conseil en investissement. Aucune des situations décrites ne constitue une garantie de résultat comparable.
        </p>
      </div>
    </section>
  );
}
