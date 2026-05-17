import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez l'Observatoire du Stockage pour proposer un témoignage, suggérer un sujet, demander un partenariat ou nous adresser une question.",
};

const motifs = [
  {
    icon: "🎙️",
    title: "Partager votre expérience",
    description:
      "Vous êtes investisseur, propriétaire ou exploitant et souhaitez témoigner de votre expérience dans le cadre d'une étude de cas ou d'une interview.",
  },
  {
    icon: "💡",
    title: "Suggérer un sujet",
    description:
      "Vous avez une question, un angle ou un sujet que vous aimeriez voir traité dans nos analyses.",
  },
  {
    icon: "🤝",
    title: "Proposer un partenariat",
    description:
      "Vous représentez une organisation, un service ou un outil à destination des acteurs du stockage et souhaitez explorer un partenariat éditorial.",
  },
  {
    icon: "📰",
    title: "Contact presse ou professionnel",
    description:
      "Vous êtes journaliste, chercheur ou professionnel du secteur et souhaitez nous contacter dans un cadre formel.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-white border-b border-slate-100 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
            Contact
          </span>
          <h1 className="mt-5 text-3xl md:text-4xl font-bold text-[#1a1a2e] leading-tight">
            Entrer en contact avec l'Observatoire
          </h1>
          <p className="mt-4 text-slate-600 leading-relaxed">
            L'Observatoire du Stockage est ouvert aux témoignages, suggestions de sujets, partenariats éditoriaux et contacts professionnels. Nous répondons à chaque demande pertinente dans un délai raisonnable.
          </p>
        </div>
      </section>

      {/* Motifs */}
      <section className="bg-[#f8f9fa] py-10 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-base font-bold text-[#1a1a2e] mb-5 uppercase tracking-wide">Pourquoi nous contacter ?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {motifs.map((m) => (
              <div key={m.title} className="bg-white rounded-xl border border-slate-100 p-5">
                <div className="text-2xl mb-2">{m.icon}</div>
                <h3 className="font-bold text-[#1a1a2e] text-sm mb-1.5">{m.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>

          {/* Formulaire placeholder */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8">
            <h2 className="font-bold text-[#1a1a2e] text-lg mb-5">Formulaire de contact</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Prénom</label>
                  <input
                    type="text"
                    placeholder="Votre prénom"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Nom</label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="votre@email.fr"
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Motif de la demande</label>
                <select className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition bg-white">
                  <option value="">Sélectionner un motif</option>
                  <option>Partager mon expérience</option>
                  <option>Suggérer un sujet</option>
                  <option>Proposition de partenariat</option>
                  <option>Contact presse / professionnel</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                <textarea
                  rows={5}
                  placeholder="Décrivez votre demande..."
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 transition resize-none"
                />
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-lg p-3 text-xs text-amber-700">
                Ce formulaire est un placeholder. L'envoi de message sera fonctionnel dans une prochaine version du site.
              </div>
              <button
                type="button"
                className="w-full bg-[#1e3a5f] text-white font-semibold text-sm py-3 rounded-xl hover:bg-[#162d4a] transition-colors"
              >
                Envoyer le message
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
