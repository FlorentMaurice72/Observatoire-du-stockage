"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const sections = [
  {
    id: "bati",
    title: "État du bâti et des équipements",
    icon: "🏗️",
    description: "Vérifications physiques à effectuer lors de la visite du bien.",
    items: [
      { id: "b1", text: "Toiture : état général, présence de fuites, date du dernier entretien" },
      { id: "b2", text: "Murs et façades : fissures, infiltrations, traces d'humidité" },
      { id: "b3", text: "Sol : état du revêtement, présence de fissures ou d'affaissements" },
      { id: "b4", text: "Drainage et évacuation des eaux pluviales : fonctionnement des descentes" },
      { id: "b5", text: "Portes individuelles (chaque unité) : fermeture, serrures, état des rails si basculantes" },
      { id: "b6", text: "Accès principal : portail, portillon, motorisation éventuelle" },
      { id: "b7", text: "Éclairage : ampoules et installations électriques visibles" },
      { id: "b8", text: "Numérotation et délimitation physique de chaque lot" },
      { id: "b9", text: "Présence de nuisibles ou traces de dégradations" },
      { id: "b10", text: "Accès véhicule : dimensions, visibilité, état de la voirie privée" },
    ],
  },
  {
    id: "locatif",
    title: "Situation locative",
    icon: "🔑",
    description: "État de l'occupation et des relations avec les locataires en place.",
    items: [
      { id: "l1", text: "Nombre total d'unités, nombre occupées, nombre vacantes" },
      { id: "l2", text: "Loyers actuellement perçus et date de la dernière révision" },
      { id: "l3", text: "Durée et conditions des baux en cours (échéances, préavis)" },
      { id: "l4", text: "Montant des dépôts de garantie détenus par le vendeur" },
      { id: "l5", text: "Impayés en cours : montants, ancienneté, procédures éventuelles" },
      { id: "l6", text: "Historique de vacance sur les 12 à 24 derniers mois" },
      { id: "l7", text: "Profil des locataires : particuliers, professionnels, artisans" },
      { id: "l8", text: "Demandes de location en attente ou contacts récents" },
    ],
  },
  {
    id: "documents",
    title: "Documents à réclamer au vendeur",
    icon: "📄",
    description: "Pièces indispensables à obtenir et analyser avant toute offre.",
    items: [
      { id: "d1", text: "Titre de propriété (acte de vente ou donation)" },
      { id: "d2", text: "Règlement de copropriété et ses modificatifs éventuels" },
      { id: "d3", text: "Procès-verbaux des 3 dernières assemblées générales" },
      { id: "d4", text: "Relevés de charges des 3 dernières années" },
      { id: "d5", text: "Dernier avis de taxe foncière" },
      { id: "d6", text: "Diagnostics obligatoires selon date de construction (amiante, plomb, DPE)" },
      { id: "d7", text: "Copies des baux en cours (originaux ou contrats signés)" },
      { id: "d8", text: "Attestation d'assurance de la copropriété" },
      { id: "d9", text: "État daté (situation financière du lot vis-à-vis de la copropriété)" },
      { id: "d10", text: "Plan cadastral et désignation précise des lots" },
      { id: "d11", text: "Éventuels devis ou travaux en cours de vote" },
    ],
  },
  {
    id: "juridique",
    title: "Vérifications juridiques et administratives",
    icon: "⚖️",
    description: "Points à vérifier auprès des administrations ou via un professionnel.",
    items: [
      { id: "j1", text: "Plan local d'urbanisme (PLU) : usage autorisé du local" },
      { id: "j2", text: "Droit de préemption communal : vérification avant signature du compromis" },
      { id: "j3", text: "Servitudes éventuelles grevant le bien" },
      { id: "j4", text: "Absence de procédures judiciaires en cours liées au bien ou à la copropriété" },
      { id: "j5", text: "Conformité du changement d'usage si le local a été transformé" },
      { id: "j6", text: "Vérification de l'identité du vendeur et de sa capacité à vendre" },
    ],
  },
  {
    id: "vendeur",
    title: "Questions clés à poser au vendeur",
    icon: "💬",
    description: "Questions à formuler directement lors des échanges avec le vendeur.",
    items: [
      { id: "v1", text: "Quelle est la raison principale de la vente ?" },
      { id: "v2", text: "Des travaux ont-ils été votés en AG ou sont-ils envisagés prochainement ?" },
      { id: "v3", text: "Des sinistres ont-ils eu lieu au cours des dernières années ? Des déclarations ont-elles été faites ?" },
      { id: "v4", text: "Des locataires ont-ils signalé des problèmes ou demandes particulières ?" },
      { id: "v5", text: "Le prix est-il négociable, et selon quelles conditions ?" },
      { id: "v6", text: "Quel est le délai souhaité entre compromis et acte définitif ?" },
      { id: "v7", text: "Y a-t-il des éléments non visibles que vous souhaitez signaler ?" },
    ],
  },
  {
    id: "financier",
    title: "Analyse financière préliminaire",
    icon: "🧮",
    description: "Calculs à réaliser avant de formuler une offre.",
    items: [
      { id: "f1", text: "Calcul du loyer brut annuel théorique (toutes unités occupées)" },
      { id: "f2", text: "Loyer brut annuel réel (occupation actuelle)" },
      { id: "f3", text: "Estimation des charges annuelles : copropriété, taxe foncière, assurance" },
      { id: "f4", text: "Simulation de vacance : impact d'une ou plusieurs unités vides" },
      { id: "f5", text: "Budget travaux estimé à court terme (état du bâti)" },
      { id: "f6", text: "Calcul du rendement brut indicatif : loyer annuel brut / prix d'achat total" },
      { id: "f7", text: "Estimation du rendement net avant fiscalité : (loyer - charges) / prix d'achat" },
      { id: "f8", text: "Prise en compte des frais d'acquisition (frais de notaire, éventuels frais d'agence)" },
    ],
  },
];

function CheckItem({
  item,
  checked,
  onToggle,
}: {
  item: { id: string; text: string };
  checked: boolean;
  onToggle: () => void;
}) {
  return (
    <label
      className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
        checked ? "bg-green-50 border border-green-100" : "bg-white border border-slate-100 hover:border-slate-200"
      }`}
    >
      <span
        className={`shrink-0 w-5 h-5 mt-0.5 rounded border flex items-center justify-center transition-colors ${
          checked ? "bg-green-500 border-green-500" : "border-slate-300 bg-white"
        }`}
      >
        {checked && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </span>
      <input type="checkbox" className="sr-only" checked={checked} onChange={onToggle} />
      <span className={`text-sm leading-relaxed ${checked ? "text-slate-400 line-through" : "text-slate-700"}`}>
        {item.text}
      </span>
    </label>
  );
}

export default function ChecklistAcquisitionPage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem("checklist-acquisition");
      if (saved) setChecked(JSON.parse(saved));
    } catch {}
  }, []);

  function toggle(id: string) {
    const next = { ...checked, [id]: !checked[id] };
    setChecked(next);
    try {
      localStorage.setItem("checklist-acquisition", JSON.stringify(next));
    } catch {}
  }

  function resetSection(sectionId: string) {
    const section = sections.find((s) => s.id === sectionId);
    if (!section) return;
    const next = { ...checked };
    section.items.forEach((item) => { next[item.id] = false; });
    setChecked(next);
    try {
      localStorage.setItem("checklist-acquisition", JSON.stringify(next));
    } catch {}
  }

  const totalItems = sections.reduce((acc, s) => acc + s.items.length, 0);
  const checkedCount = Object.values(checked).filter(Boolean).length;
  const progress = Math.round((checkedCount / totalItems) * 100);

  return (
    <>
      {/* Header */}
      <section className="bg-white border-b border-slate-100 py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-700 transition-colors">Accueil</Link>
            <svg className="w-3 h-3 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/outils" className="hover:text-slate-700 transition-colors">Outils</Link>
            <svg className="w-3 h-3 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-slate-400">Checklist d'acquisition</span>
          </nav>

          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-700 bg-green-50 border border-green-100 px-3 py-1 rounded-full mb-5">
            Outil gratuit
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] leading-tight mb-3">
            Checklist d'acquisition d'un espace de stockage
          </h1>
          <p className="text-slate-600 leading-relaxed mb-6">
            {totalItems} points organisés en {sections.length} sections pour structurer votre analyse avant d'acquérir un lot de garages, des boxs ou un espace de stockage. Votre progression est sauvegardée localement dans votre navigateur.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>Avertissement :</strong> cette checklist est un support d'analyse personnel à titre indicatif. Elle ne remplace pas l'accompagnement d'un notaire, d'un avocat ou d'un expert avant toute acquisition. Certains points peuvent requérir des vérifications techniques ou juridiques spécialisées.
            </p>
          </div>
        </div>
      </section>

      {/* Barre de progression */}
      <div className="bg-white border-b border-slate-100 py-4 sticky top-0 z-10 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4">
            <div className="flex-1 bg-slate-100 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-sm font-semibold text-slate-700 shrink-0">
              {checkedCount}/{totalItems} points
            </span>
            {checkedCount > 0 && (
              <button
                onClick={() => {
                  setChecked({});
                  try { localStorage.removeItem("checklist-acquisition"); } catch {}
                }}
                className="text-xs text-slate-400 hover:text-red-500 transition-colors shrink-0"
              >
                Réinitialiser
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="bg-[#f8f9fa] py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          {sections.map((section) => {
            const sectionChecked = section.items.filter((i) => checked[i.id]).length;
            const sectionDone = sectionChecked === section.items.length;
            return (
              <div key={section.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                <div className={`px-6 py-4 border-b flex items-center justify-between ${sectionDone ? "bg-green-50 border-green-100" : "border-slate-100"}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{section.icon}</span>
                    <div>
                      <h2 className="font-bold text-[#1a1a2e] text-sm">{section.title}</h2>
                      <p className="text-xs text-slate-500 mt-0.5">{section.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 ml-4">
                    <span className={`text-xs font-medium ${sectionDone ? "text-green-600" : "text-slate-400"}`}>
                      {sectionChecked}/{section.items.length}
                    </span>
                    {sectionChecked > 0 && !sectionDone && (
                      <button
                        onClick={() => resetSection(section.id)}
                        className="text-xs text-slate-300 hover:text-slate-500 transition-colors"
                      >
                        Reset
                      </button>
                    )}
                    {sectionDone && (
                      <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  {section.items.map((item) => (
                    <CheckItem
                      key={item.id}
                      item={item}
                      checked={!!checked[item.id]}
                      onToggle={() => toggle(item.id)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <section className="bg-white border-t border-slate-100 py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-slate-500 leading-relaxed mb-6">
            Cette checklist couvre les points principaux d'une analyse d'acquisition. Elle n'est pas exhaustive et ne remplace pas les vérifications réalisées par un professionnel qualifié (notaire, avocat, expert bâtiment).
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/analyses/due-diligence-lot-garages"
              className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#162d4a] transition-colors"
            >
              Lire le guide due diligence complet
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/outils"
              className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 font-semibold text-sm px-6 py-3 rounded-xl hover:border-slate-300 transition-colors"
            >
              Tous les outils
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
