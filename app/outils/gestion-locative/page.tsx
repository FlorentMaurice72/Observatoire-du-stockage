import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outil de gestion locative pour boxes et garages — bientôt disponible",
  alternates: { canonical: "https://observatoire-du-stockage.fr/outils/gestion-locative" },
  description:
    "Un outil dédié aux propriétaires de boxes et garages : suivi des loyers, gestion des baux, relances automatiques et tableau de bord de rentabilité. Inscrivez-vous pour être notifié au lancement.",
};

const problemes = [
  {
    icon: "📋",
    title: "Suivi des loyers éparpillé",
    description: "Entre les virements bancaires, les relances manuelles et les tableaux Excel, la gestion de plusieurs locataires devient vite chronophage.",
  },
  {
    icon: "📄",
    title: "Baux difficiles à standardiser",
    description: "Rédiger un contrat conforme pour chaque nouveau locataire prend du temps et expose à des erreurs juridiques coûteuses.",
  },
  {
    icon: "🔔",
    title: "Relances oubliées ou tardives",
    description: "Un impayé non traité rapidement peut dégénérer. Sans système de relance, le propriétaire perd du temps et de l'argent.",
  },
  {
    icon: "📊",
    title: "Pas de vision globale",
    description: "Sans tableau de bord, il est difficile de connaître son taux d'occupation réel, son cash-flow net ou d'anticiper ses déclarations fiscales.",
  },
];

const fonctionnalites = [
  {
    titre: "Suivi automatique des loyers",
    detail: "Détection des paiements et des retards, historique complet par locataire.",
  },
  {
    titre: "Génération de baux conformes",
    detail: "Modèles adaptés au droit français, générés en PDF directement depuis l'outil.",
  },
  {
    titre: "Relances automatiques",
    detail: "Emails de relance envoyés automatiquement en cas d'impayé, sans intervention manuelle.",
  },
  {
    titre: "Tableau de bord rentabilité",
    detail: "Taux d'occupation, cash-flow, charges : une vision claire de la performance de votre parc.",
  },
  {
    titre: "Import bancaire",
    detail: "Importez vos relevés CSV et laissez l'outil rapprocher les paiements automatiquement.",
  },
  {
    titre: "Export comptable",
    detail: "Préparez vos déclarations fiscales en quelques clics grâce aux exports structurés.",
  },
];

export default function GestionLocativePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white border-b border-slate-100 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-slate-600">Accueil</Link>
            <span>›</span>
            <Link href="/outils" className="hover:text-slate-600">Outils</Link>
            <span>›</span>
            <span className="text-slate-600">Gestion locative</span>
          </nav>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-5">
            En développement
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] leading-tight mb-4">
            Un outil de gestion locative conçu pour les propriétaires de boxes et garages
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Gérer plusieurs locataires de boxes ou de garages sans outil adapté est une source de perte de temps et d'erreurs. Nous développons une solution spécialement conçue pour ce type de patrimoine.
          </p>
        </div>
      </section>

      {/* Problèmes */}
      <section className="bg-[#f8f9fa] py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-[#1a1a2e] text-center mb-8">
            Les problèmes que rencontrent les propriétaires non équipés
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {problemes.map((p) => (
              <div key={p.title} className="bg-white rounded-xl border border-slate-100 shadow-sm p-6">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-[#1a1a2e] text-sm mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="bg-white py-12 md:py-16 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-[#1a1a2e] text-center mb-2">
            Ce que l'outil permettra de faire
          </h2>
          <p className="text-sm text-slate-500 text-center mb-8">
            Les fonctionnalités prévues — susceptibles d'évoluer avant le lancement.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {fonctionnalites.map((f) => (
              <div key={f.titre} className="flex gap-3 p-4 rounded-xl border border-slate-100 bg-[#f8f9fa]">
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[#1e3a5f] flex-shrink-0 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#1a1a2e] mb-0.5">{f.titre}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{f.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pré-inscription */}
      <section className="bg-[#1e3a5f] py-14 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Soyez notifié au lancement
          </h2>
          <p className="text-blue-200 text-base leading-relaxed mb-8">
            L'outil est en cours de développement. Inscrivez-vous pour recevoir une notification dès son ouverture — accès anticipé réservé aux inscrits en priorité.
          </p>
          <Link
            href="/newsletter"
            className="inline-flex items-center gap-2 bg-white text-[#1e3a5f] font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors text-sm"
          >
            S'inscrire pour être notifié
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="mt-4 text-blue-300 text-xs">Aucun spam. Désabonnement possible à tout moment.</p>
        </div>
      </section>

      {/* Note bas de page */}
      <section className="bg-white py-8 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-xs text-slate-400 text-center leading-relaxed">
            Cet outil est développé indépendamment de l'Observatoire du Stockage. Les fonctionnalités décrites sont prévisionnelles et peuvent évoluer. Hébergement en France, conformité RGPD.
          </p>
        </div>
      </section>
    </>
  );
}
