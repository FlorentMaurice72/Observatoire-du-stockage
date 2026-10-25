"use client";

import { useState } from "react";
import Link from "next/link";

interface Props {
  variant?: "large" | "compact" | "sidebar" | "articleFooter";
}

function EbookForm({ inputClass, buttonClass, successClass }: { inputClass: string; buttonClass: string; successClass: string }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={successClass}>
        <svg className="w-5 h-5 text-green-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <div>
          <p className="font-semibold text-green-800 text-sm">C'est noté.</p>
          <p className="text-xs text-green-700 mt-0.5">
            L'ebook est finalisé.{" "}
            <Link href="/ebook/merci" className="underline hover:no-underline">
              Accéder à la page de téléchargement →
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <input
        type="email"
        required
        placeholder="Votre adresse email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={inputClass}
      />
      <button type="submit" className={buttonClass}>
        Recevoir l'ebook
      </button>
    </form>
  );
}

export { EbookForm };

export default function EbookLeadMagnet({ variant = "large" }: Props) {
  if (variant === "sidebar") {
    return (
      <div className="bg-[#1e3a5f] rounded-xl overflow-hidden">
        <div className="p-5">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-200 mb-3">
            Ebook gratuit
          </span>
          <h3 className="text-white font-bold text-sm leading-snug mb-2">
            De 0 à 34 boxes en 5 ans
          </h3>
          <p className="text-blue-100 text-xs leading-relaxed mb-4">
            Retour d'expérience détaillé sur la constitution d'un parc de stockage : méthode, erreurs, arbitrages.
          </p>
          <EbookForm
            inputClass="w-full text-sm px-3 py-2 rounded-lg border border-blue-400 bg-white/10 text-white placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
            buttonClass="w-full text-sm font-semibold bg-white text-[#1e3a5f] px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
            successClass="flex items-start gap-2 bg-green-50 border border-green-200 rounded-lg p-3"
          />
          <p className="text-xs text-blue-300 mt-3">
            Sans spam. Désabonnement à tout moment.
          </p>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className="bg-[#f0f4f8] border border-slate-200 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="shrink-0 w-12 h-16 bg-[#1e3a5f] rounded-lg flex items-center justify-center shadow-md">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div className="flex-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">Ebook gratuit</span>
            <h3 className="text-[#1a1a2e] font-bold text-base leading-snug mt-0.5 mb-1">
              De 0 à 34 boxes en 5 ans
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              Retour d'expérience concret d'un investisseur : acquisitions, gestion, arbitrages et enseignements.
            </p>
            <EbookForm
              inputClass="flex-1 text-sm px-3 py-2.5 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
              buttonClass="shrink-0 text-sm font-semibold bg-[#1e3a5f] text-white px-5 py-2.5 rounded-lg hover:bg-[#162d4a] transition-colors whitespace-nowrap"
              successClass="flex items-start gap-2 bg-green-50 border border-green-200 rounded-lg p-3"
            />
          </div>
        </div>
      </div>
    );
  }

  if (variant === "articleFooter") {
    return (
      <div className="mt-10 pt-8 border-t border-slate-100">
        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#1e3a5f] rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="shrink-0 w-14 h-20 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="flex-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">Ebook gratuit</span>
              <h3 className="text-white font-bold text-lg leading-snug mt-1 mb-1">
                De 0 à 34 boxes en 5 ans
              </h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                Retour d'expérience d'un investisseur ayant constitué un parc de stockage sur 5 ans. Méthode, sélection des biens, gestion et enseignements concrets.
              </p>
              <EbookForm
                inputClass="flex-1 text-sm px-3 py-2.5 rounded-lg border border-white/20 bg-white/10 text-white placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                buttonClass="shrink-0 text-sm font-semibold bg-white text-[#1e3a5f] px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap"
                successClass="flex items-start gap-2 bg-green-900/30 border border-green-400/30 rounded-lg p-3"
              />
              <p className="text-xs text-blue-300 mt-2">Sans spam. Désabonnement à tout moment.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // large (default)
  return (
    <section className="bg-[#1a1a2e] py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-300 bg-white/10 px-3 py-1 rounded-full mb-5">
              Ebook gratuit
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
              De 0 à 34 boxes en 5 ans
            </h2>
            <p className="text-blue-100 text-base md:text-lg leading-relaxed mb-6">
              Un retour d'expérience concret et documenté sur la constitution progressive d'un parc de boxes et de garages locatifs. Méthode, sélection des biens, gestion opérationnelle, arbitrages et enseignements.
            </p>
            <ul className="space-y-2.5 mb-8">
              {[
                "Comment identifier et sélectionner des biens cohérents avec sa stratégie",
                "Les étapes clés de la constitution progressive d'un parc",
                "Les erreurs rencontrées et ce qui aurait pu être fait différemment",
                "Les aspects méconnus de la gestion quotidienne à partir de plusieurs dizaines d'unités",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-blue-100">
                  <svg className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
            <p className="text-xs text-blue-400 mb-2">
              Contenu à titre informatif. Aucune promesse de résultats — chaque situation est différente.
            </p>
            <EbookForm
              inputClass="flex-1 text-sm px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              buttonClass="shrink-0 text-sm font-semibold bg-white text-[#1e3a5f] px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap"
              successClass="flex items-start gap-2 bg-green-900/30 border border-green-400/30 rounded-xl p-4"
            />
            <p className="text-xs text-blue-400 mt-3">
              Sans spam. Désabonnement à tout moment. Données non transmises à des tiers.
            </p>
          </div>

          {/* Visual mockup */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="w-52 h-72 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a9e] rounded-2xl shadow-2xl border border-white/10 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <p className="text-white/60 text-xs uppercase tracking-widest mb-2">Ebook</p>
                <p className="text-white font-bold text-sm leading-snug">
                  De 0 à 34 boxes en 5 ans
                </p>
                <div className="mt-4 w-8 h-0.5 bg-white/20" />
                <p className="text-white/50 text-xs mt-3">Observatoire du Stockage</p>
              </div>
              <div className="absolute -bottom-3 -right-3 w-52 h-72 bg-white/5 border border-white/5 rounded-2xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-52 h-72 bg-white/3 border border-white/3 rounded-2xl -z-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
