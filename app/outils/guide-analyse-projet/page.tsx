"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// ── Données ───────────────────────────────────────────────────────────────────

type Note = "favorable" | "neutre" | "defavorable" | "non-evalue";

interface Critere {
  id: string;
  texte: string;
  vigilance?: string;
}

interface Dimension {
  id: string;
  titre: string;
  icon: string;
  description: string;
  criteres: Critere[];
}

const dimensions: Dimension[] = [
  {
    id: "localisation",
    titre: "Localisation",
    icon: "📍",
    description: "La localisation conditionne directement la demande locative. Un bien bien situé se loue ; un bien mal situé crée de la vacance.",
    criteres: [
      { id: "loc1", texte: "Zone urbaine ou périurbaine avec densité suffisante de ménages", vigilance: "En zone rurale peu dense, la demande locative peut être insuffisante pour assurer un taux d'occupation satisfaisant." },
      { id: "loc2", texte: "Accès facile en voiture (axes routiers, stationnement à proximité)", vigilance: "Un accès difficile ou l'absence de stationnement réduit significativement l'attractivité pour les locataires." },
      { id: "loc3", texte: "Absence d'acteur self-storage structuré dans un rayon de 3-5 km", vigilance: "La présence d'un opérateur professionnel de self-storage peut capter une partie de la demande avec une offre plus lisible." },
      { id: "loc4", texte: "Environnement stable (pas de projet de démolition ou de réhabilitation majeure)", vigilance: "Vérifier le PLU et les projets urbains en cours auprès de la mairie." },
      { id: "loc5", texte: "Visibilité ou accessibilité depuis un axe passant" },
    ],
  },
  {
    id: "demande",
    titre: "Demande locative",
    icon: "🔍",
    description: "La demande doit être documentée sur le marché local avant toute décision. Elle ne peut pas être supposée.",
    criteres: [
      { id: "dem1", texte: "Annonces comparables actives (LeBonCoin, PAP, Bien'ici) avec loyers observés" },
      { id: "dem2", texte: "Durée de mise en location courte sur les biens similaires (< 4 semaines)", vigilance: "Si peu d'annonces existent, difficile d'évaluer la durée réelle de mise en location — interroger des agences locales." },
      { id: "dem3", texte: "Profil diversifié de la demande (particuliers + artisans + TPE)" },
      { id: "dem4", texte: "Loyers observés compatibles avec un rendement acceptable au prix demandé" },
      { id: "dem5", texte: "Aucune offre nouvelle massive prévue dans la zone (permis de construire, projet promoteur)" },
    ],
  },
  {
    id: "bati",
    titre: "État du bien",
    icon: "🏗️",
    description: "L'état physique du bien détermine les travaux immédiats et les coûts d'exploitation. Un bien dégradé n'est pas un mauvais investissement — à condition que le prix l'intègre.",
    criteres: [
      { id: "bat1", texte: "Toiture en bon état ou budget travaux connu et intégré dans le prix" },
      { id: "bat2", texte: "Absence d'infiltrations, d'humidité chronique ou de fissures structurelles" },
      { id: "bat3", texte: "Portes individuelles fonctionnelles (fermeture, serrures, étanchéité)" },
      { id: "bat4", texte: "Accès véhicule adapté aux usages prévus (hauteur, largeur, sol)" },
      { id: "bat5", texte: "Diagnostics obligatoires disponibles (amiante, plomb selon date de construction)", vigilance: "Pour les bâtiments construits avant 1997, un diagnostic amiante est obligatoire avant vente (décret n° 96-97)." },
      { id: "bat6", texte: "Sécurité suffisante : éclairage, fermeture générale, environnement" },
    ],
  },
  {
    id: "copro",
    titre: "Copropriété et cadre juridique",
    icon: "📋",
    description: "La situation de la copropriété influence les charges futures et les marges de manœuvre du propriétaire.",
    criteres: [
      { id: "cop1", texte: "Charges de copropriété connues et stables sur les 3 derniers exercices" },
      { id: "cop2", texte: "Aucun travaux votés ou à voter en AG susceptibles d'appels de fonds importants" },
      { id: "cop3", texte: "Règlement de copropriété sans restriction incompatible avec l'usage locatif prévu" },
      { id: "cop4", texte: "Absence de procédure judiciaire en cours impliquant la copropriété", vigilance: "Demander systématiquement les PV des 3 dernières AG et l'état daté au syndic." },
      { id: "cop5", texte: "Syndic professionnel ou ASL organisée (si lots indépendants)" },
    ],
  },
  {
    id: "financier",
    titre: "Équilibre financier",
    icon: "🧮",
    description: "La rentabilité réelle se calcule — pas se suppose. Le rendement brut ne dit rien du rendement net.",
    criteres: [
      { id: "fin1", texte: "Prix d'achat compatible avec les loyers observés (rendement brut > coût de financement)" },
      { id: "fin2", texte: "Charges réelles intégrées dans le calcul (copro + taxe foncière + assurance + gestion)" },
      { id: "fin3", texte: "Simulation de vacance réalisée (taux de 5 à 15 % selon zone)" },
      { id: "fin4", texte: "Budget travaux initiaux et provisions pour imprévus intégrés" },
      { id: "fin5", texte: "Revenu net avant impôt positif après charges", vigilance: "Un revenu net négatif ne signifie pas nécessairement un mauvais investissement (déficit foncier, revalorisation attendue) — mais il doit être anticipé." },
      { id: "fin6", texte: "Scénario de revente estimé (liquidité locale, horizon de détention)" },
    ],
  },
  {
    id: "risques",
    titre: "Points de vigilance spécifiques",
    icon: "⚠️",
    description: "Risques à identifier et documenter avant de conclure.",
    criteres: [
      { id: "ris1", texte: "Aucun impayé en cours ou procédure locative en cours", vigilance: "En cas d'impayé en cours, la procédure peut durer plusieurs mois après l'acquisition — à négocier avec le vendeur." },
      { id: "ris2", texte: "Usage autorisé par le PLU (pas de risque de requalification ou d'interdiction)" },
      { id: "ris3", texte: "Absence de droit de préemption communal ou de risque connu" },
      { id: "ris4", texte: "Absence de dépendance totale à un seul locataire (si une seule unité : risque concentré)" },
      { id: "ris5", texte: "Stratégie de sortie identifiée (revente à particulier, à investisseur, à promoteur)" },
      { id: "ris6", texte: "Absence de servitudes, de litiges de voisinage ou de contentieux en cours" },
    ],
  },
];

const noteConfig: Record<Note, { label: string; color: string; bg: string; border: string; dot: string }> = {
  favorable: { label: "Favorable", color: "text-green-700", bg: "bg-green-50", border: "border-green-200", dot: "bg-green-500" },
  neutre: { label: "Neutre", color: "text-amber-700", bg: "bg-amber-50", border: "border-amber-200", dot: "bg-amber-400" },
  defavorable: { label: "Défavorable", color: "text-red-700", bg: "bg-red-50", border: "border-red-200", dot: "bg-red-500" },
  "non-evalue": { label: "Non évalué", color: "text-slate-500", bg: "bg-slate-50", border: "border-slate-200", dot: "bg-slate-300" },
};

// ── Composants ────────────────────────────────────────────────────────────────

function NoteButton({ note, current, onClick }: { note: Note; current: Note; onClick: () => void }) {
  const cfg = noteConfig[note];
  const active = note === current;
  return (
    <button
      onClick={onClick}
      className={`text-xs font-medium px-2.5 py-1.5 rounded-lg border transition-all ${
        active
          ? `${cfg.bg} ${cfg.border} ${cfg.color} shadow-sm`
          : "bg-white border-slate-200 text-slate-400 hover:border-slate-300"
      }`}
    >
      {cfg.label}
    </button>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function GuideAnalyseProjetPage() {
  const [notes, setNotes] = useState<Record<string, Note>>({});
  const [openVigilance, setOpenVigilance] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("guide-analyse-projet");
      if (saved) setNotes(JSON.parse(saved));
    } catch {}
  }, []);

  function setNote(id: string, note: Note) {
    const next = { ...notes, [id]: note };
    setNotes(next);
    try { localStorage.setItem("guide-analyse-projet", JSON.stringify(next)); } catch {}
  }

  function getNote(id: string): Note {
    return notes[id] ?? "non-evalue";
  }

  function resetAll() {
    setNotes({});
    try { localStorage.removeItem("guide-analyse-projet"); } catch {}
  }

  // Stats globales
  const allCriteres = dimensions.flatMap((d) => d.criteres);
  const counts = {
    favorable: allCriteres.filter((c) => getNote(c.id) === "favorable").length,
    neutre: allCriteres.filter((c) => getNote(c.id) === "neutre").length,
    defavorable: allCriteres.filter((c) => getNote(c.id) === "defavorable").length,
    "non-evalue": allCriteres.filter((c) => getNote(c.id) === "non-evalue").length,
  };
  const evaluated = allCriteres.length - counts["non-evalue"];
  const hasDefavorable = counts.defavorable > 0;
  const defavorableCriteres = allCriteres.filter((c) => getNote(c.id) === "defavorable");

  return (
    <>
      {/* Header */}
      <section className="bg-white border-b border-slate-100 py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-700">Accueil</Link>
            <svg className="w-3 h-3 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/outils" className="hover:text-slate-700">Outils</Link>
            <svg className="w-3 h-3 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-slate-400">Guide d'analyse</span>
          </nav>

          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-700 bg-green-50 border border-green-100 px-3 py-1 rounded-full mb-5">
            Outil gratuit
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] leading-tight mb-3">
            Grille d'analyse d'un projet d'acquisition
          </h1>
          <p className="text-slate-600 leading-relaxed max-w-2xl mb-5">
            {allCriteres.length} critères organisés en {dimensions.length} dimensions pour analyser méthodiquement un lot de garages ou un espace de stockage avant de formuler une offre. Évaluez chaque point selon votre analyse terrain.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>Avertissement :</strong> cette grille est un support d'analyse personnel. Elle ne remplace pas les vérifications d'un notaire, d'un avocat ou d'un expert. Certains points nécessitent des investigations spécialisées avant toute décision d'acquisition.
            </p>
          </div>
        </div>
      </section>

      {/* Barre récapitulative sticky */}
      <div className="bg-white border-b border-slate-100 py-3 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-xs text-slate-500 shrink-0">{evaluated}/{allCriteres.length} évalués</span>
            <div className="flex items-center gap-2 flex-1">
              {(["favorable", "neutre", "defavorable", "non-evalue"] as Note[]).map((n) => (
                <div key={n} className="flex items-center gap-1">
                  <span className={`w-2 h-2 rounded-full ${noteConfig[n].dot}`} />
                  <span className="text-xs text-slate-500">{counts[n]}</span>
                </div>
              ))}
            </div>
            {evaluated > 0 && (
              <button onClick={resetAll} className="text-xs text-slate-300 hover:text-slate-500 transition-colors shrink-0">
                Réinitialiser
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grille */}
      <div className="bg-[#f8f9fa] py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5">

          {dimensions.map((dim) => {
            const dimCounts = {
              favorable: dim.criteres.filter((c) => getNote(c.id) === "favorable").length,
              defavorable: dim.criteres.filter((c) => getNote(c.id) === "defavorable").length,
            };
            return (
              <div key={dim.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="text-xl shrink-0 mt-0.5">{dim.icon}</span>
                    <div>
                      <h2 className="font-bold text-[#1a1a2e] text-sm">{dim.titre}</h2>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed max-w-xl">{dim.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {dimCounts.favorable > 0 && (
                      <span className="text-xs font-medium text-green-700 bg-green-50 border border-green-100 px-2 py-0.5 rounded-full">
                        {dimCounts.favorable} ✓
                      </span>
                    )}
                    {dimCounts.defavorable > 0 && (
                      <span className="text-xs font-medium text-red-700 bg-red-50 border border-red-100 px-2 py-0.5 rounded-full">
                        {dimCounts.defavorable} ✗
                      </span>
                    )}
                  </div>
                </div>
                <div className="divide-y divide-slate-50">
                  {dim.criteres.map((critere) => {
                    const note = getNote(critere.id);
                    const cfg = noteConfig[note];
                    return (
                      <div key={critere.id} className={`px-6 py-4 ${note !== "non-evalue" ? cfg.bg : ""} transition-colors`}>
                        <div className="flex items-start gap-4">
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm leading-relaxed ${note === "defavorable" ? "font-semibold text-red-800" : note === "favorable" ? "text-green-800" : "text-slate-700"}`}>
                              {critere.texte}
                            </p>
                            {critere.vigilance && (
                              <button
                                onClick={() => setOpenVigilance(openVigilance === critere.id ? null : critere.id)}
                                className="mt-1 text-xs text-amber-600 hover:text-amber-700 flex items-center gap-1 transition-colors"
                              >
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                Point de vigilance {openVigilance === critere.id ? "▲" : "▼"}
                              </button>
                            )}
                            {openVigilance === critere.id && critere.vigilance && (
                              <div className="mt-2 bg-amber-50 border border-amber-100 rounded-lg p-3">
                                <p className="text-xs text-amber-800 leading-relaxed">{critere.vigilance}</p>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0 flex-wrap justify-end">
                            {(["favorable", "neutre", "defavorable", "non-evalue"] as Note[]).map((n) => (
                              <NoteButton
                                key={n}
                                note={n}
                                current={note}
                                onClick={() => setNote(critere.id, n)}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Synthèse */}
          {evaluated >= 10 && (
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-[#1e3a5f] to-blue-500" />
              <div className="p-6">
                <h2 className="font-bold text-[#1a1a2e] text-sm uppercase tracking-wider mb-5">
                  Synthèse de votre analyse
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {(["favorable", "neutre", "defavorable", "non-evalue"] as Note[]).map((n) => {
                    const cfg = noteConfig[n];
                    return (
                      <div key={n} className={`rounded-xl border p-4 text-center ${cfg.bg} ${cfg.border}`}>
                        <p className={`text-2xl font-bold ${cfg.color}`}>{counts[n]}</p>
                        <p className={`text-xs mt-1 ${cfg.color}`}>{cfg.label}</p>
                      </div>
                    );
                  })}
                </div>

                {hasDefavorable && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
                    <h3 className="text-sm font-bold text-red-800 mb-2 flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      {counts.defavorable} point{counts.defavorable > 1 ? "s" : ""} défavorable{counts.defavorable > 1 ? "s" : ""} identifié{counts.defavorable > 1 ? "s" : ""}
                    </h3>
                    <ul className="space-y-1">
                      {defavorableCriteres.map((c) => (
                        <li key={c.id} className="text-xs text-red-700 flex items-start gap-1.5">
                          <span className="shrink-0 mt-0.5">→</span>
                          {c.texte}
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-red-600 mt-3 leading-relaxed">
                      Un point défavorable n'élimine pas nécessairement un projet — il doit être traité (négociation sur le prix, vérification complémentaire, clause suspensive) ou accepté en connaissance de cause.
                    </p>
                  </div>
                )}

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Rappel :</strong> cette grille est un support d'analyse, pas un verdict. Un projet avec plusieurs points défavorables peut être viable si les risques sont identifiés et le prix les reflète. Un projet avec tous les points favorables peut cacher des problèmes non visibles. Faites-vous accompagner par un professionnel avant de signer.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <section className="bg-white border-t border-slate-100 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/outils/checklist-acquisition" className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#162d4a] transition-colors">
              Checklist d'acquisition
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/outils/calculateur-rentabilite" className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold text-sm px-6 py-3 rounded-xl hover:border-slate-300 transition-colors">
              Calculateur de rentabilité
            </Link>
            <Link href="/outils" className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold text-sm px-6 py-3 rounded-xl hover:border-slate-300 transition-colors">
              Tous les outils
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
