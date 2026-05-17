"use client";

import { useState } from "react";

interface NewsletterBlockProps {
  variant?: "default" | "compact" | "hero";
}

export default function NewsletterBlock({ variant = "default" }: NewsletterBlockProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (variant === "compact") {
    return (
      <div className="bg-[#1e3a5f] rounded-xl p-6 text-white">
        <h3 className="font-bold text-lg mb-1">La newsletter de l'Observatoire</h3>
        <p className="text-blue-200 text-sm mb-4">Analyses, tendances et guides directement dans votre boîte mail.</p>
        {submitted ? (
          <p className="text-green-300 font-medium text-sm">Inscription confirmée. Merci !</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.fr"
              required
              className="rounded-lg px-4 py-2.5 text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="bg-white text-[#1e3a5f] font-semibold text-sm rounded-lg px-4 py-2.5 hover:bg-blue-50 transition-colors"
            >
              S'inscrire
            </button>
          </form>
        )}
      </div>
    );
  }

  return (
    <section className="bg-[#1e3a5f] py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-blue-300 text-xs font-semibold uppercase tracking-widest">Newsletter</span>
        <h2 className="mt-3 text-2xl md:text-3xl font-bold text-white">
          Restez informé des évolutions du marché
        </h2>
        <p className="mt-4 text-blue-200 text-base md:text-lg leading-relaxed">
          Recevez les analyses, tendances, guides pratiques et ressources de l'Observatoire du Stockage directement dans votre boîte mail.
        </p>
        {submitted ? (
          <div className="mt-8 bg-white/10 rounded-xl p-6 text-green-300 font-medium">
            Votre inscription est enregistrée. Bienvenue dans la communauté de l'Observatoire !
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.fr"
              required
              className="flex-1 rounded-xl px-5 py-3 text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
            />
            <button
              type="submit"
              className="bg-white text-[#1e3a5f] font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm whitespace-nowrap"
            >
              S'inscrire gratuitement
            </button>
          </form>
        )}
        <p className="mt-4 text-blue-300 text-xs">Aucun spam. Désabonnement possible à tout moment.</p>
      </div>
    </section>
  );
}
