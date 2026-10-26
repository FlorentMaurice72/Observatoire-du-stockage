"use client";

import { useState } from "react";
import Link from "next/link";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Inputs {
  prixAchat: string;
  fraisNotaire: string;
  travaux: string;
  loyerMensuelParUnite: string;
  nombreUnites: string;
  tauxVacance: string;
  chargesCopro: string;
  taxeFonciere: string;
  assurance: string;
  fraisGestion: string;
  regime: "micro-foncier" | "reel-foncier" | "aucun";
  tmi: "11" | "30" | "41" | "45";
}

// ── Calculs ───────────────────────────────────────────────────────────────────

function calculer(inputs: Inputs) {
  const n = (v: string) => parseFloat(v.replace(",", ".")) || 0;

  const prixAchat = n(inputs.prixAchat);
  const fraisNotaire = n(inputs.fraisNotaire);
  const travaux = n(inputs.travaux);
  const loyerMensuel = n(inputs.loyerMensuelParUnite);
  const nbUnites = Math.max(1, Math.round(n(inputs.nombreUnites)));
  const tauxVacance = Math.min(100, Math.max(0, n(inputs.tauxVacance)));
  const chargesCopro = n(inputs.chargesCopro);
  const taxeFonciere = n(inputs.taxeFonciere);
  const assurance = n(inputs.assurance);
  const fraisGestion = n(inputs.fraisGestion);

  if (prixAchat <= 0 || loyerMensuel <= 0) return null;

  const coutTotal = prixAchat + fraisNotaire + travaux;
  const loyerAnnuelBrut = loyerMensuel * nbUnites * 12;
  const loyerAnnuelReel = loyerAnnuelBrut * (1 - tauxVacance / 100);
  const chargesAnnuelles = chargesCopro + taxeFonciere + assurance + fraisGestion;
  const revenuNetAvantImpot = loyerAnnuelReel - chargesAnnuelles;

  const rendementBrut = (loyerAnnuelBrut / coutTotal) * 100;
  const rendementNetAvantFiscalite = (revenuNetAvantImpot / coutTotal) * 100;

  // Fiscalité
  const tmi = n(inputs.tmi) / 100;
  const PS = 0.172; // prélèvements sociaux 17,2 % (taux 2024 — source : impots.gouv.fr)

  let revenuImposable = 0;
  let impotEstime = 0;
  let psEstime = 0;
  let rendementNetApresImpot: number | null = null;
  let noteRegime = "";

  if (inputs.regime === "micro-foncier") {
    // Micro-foncier : abattement forfaitaire 30 % si loyers bruts ≤ 15 000 €/an
    // Source : impots.gouv.fr / BOFIP BOI-RFPI-DECLA-20
    if (loyerAnnuelReel > 15000) {
      noteRegime = "Attention : le micro-foncier n'est accessible que si les loyers bruts annuels ne dépassent pas 15 000 €. Au-delà, le régime réel s'applique automatiquement.";
    } else {
      noteRegime = "Micro-foncier : abattement forfaitaire de 30 % sur les loyers bruts. Les charges réelles ne sont pas déductibles individuellement.";
    }
    revenuImposable = loyerAnnuelReel * 0.70;
    impotEstime = revenuImposable * tmi;
    psEstime = revenuImposable * PS;
    const revenuNetApres = revenuNetAvantImpot - impotEstime - psEstime;
    rendementNetApresImpot = (revenuNetApres / coutTotal) * 100;
  } else if (inputs.regime === "reel-foncier") {
    // Régime réel : déduction des charges réelles
    // Source : impots.gouv.fr / Code général des impôts Art. 28
    noteRegime = "Régime réel : les charges effectivement supportées sont déductibles des revenus fonciers. Ce calcul intègre les charges saisies ci-dessus comme déductibles (hors travaux de construction).";
    revenuImposable = Math.max(0, loyerAnnuelReel - chargesAnnuelles);
    impotEstime = revenuImposable * tmi;
    psEstime = revenuImposable * PS;
    const revenuNetApres = revenuNetAvantImpot - impotEstime - psEstime;
    rendementNetApresImpot = (revenuNetApres / coutTotal) * 100;
  }

  const cashFlowMensuel = revenuNetAvantImpot / 12;

  return {
    coutTotal,
    loyerAnnuelBrut,
    loyerAnnuelReel,
    chargesAnnuelles,
    revenuNetAvantImpot,
    rendementBrut,
    rendementNetAvantFiscalite,
    rendementNetApresImpot,
    revenuImposable,
    impotEstime,
    psEstime,
    cashFlowMensuel,
    noteRegime,
    nbUnites,
    tauxVacance,
  };
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function fmt(n: number, decimals = 0) {
  return n.toLocaleString("fr-FR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

function ResultRow({ label, value, sub, highlight }: { label: string; value: string; sub?: string; highlight?: boolean }) {
  return (
    <div className={`flex items-center justify-between py-3 border-b border-slate-100 last:border-0 ${highlight ? "bg-blue-50 -mx-4 px-4 rounded-lg" : ""}`}>
      <div>
        <p className={`text-sm ${highlight ? "font-semibold text-[#1a1a2e]" : "text-slate-600"}`}>{label}</p>
        {sub && <p className="text-xs text-slate-400 mt-0.5">{sub}</p>}
      </div>
      <p className={`text-sm font-bold tabular-nums ${highlight ? "text-[#1e3a5f] text-base" : "text-slate-800"}`}>{value}</p>
    </div>
  );
}

function InputField({
  label,
  value,
  onChange,
  suffix,
  hint,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  suffix?: string;
  hint?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</label>
      {hint && <p className="text-xs text-slate-400 mb-1.5 leading-relaxed">{hint}</p>}
      <div className="flex items-center gap-0">
        <input
          type="number"
          min="0"
          step="any"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder ?? "0"}
          className="flex-1 text-sm px-3 py-2.5 border border-slate-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent bg-white"
        />
        {suffix && (
          <span className="px-3 py-2.5 text-sm text-slate-500 bg-slate-50 border border-l-0 border-slate-200 rounded-r-lg">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

const defaultInputs: Inputs = {
  prixAchat: "",
  fraisNotaire: "",
  travaux: "",
  loyerMensuelParUnite: "",
  nombreUnites: "1",
  tauxVacance: "5",
  chargesCopro: "",
  taxeFonciere: "",
  assurance: "",
  fraisGestion: "",
  regime: "aucun",
  tmi: "30",
};

export default function CalculateurRentabilitePage() {
  const [inputs, setInputs] = useState<Inputs>(defaultInputs);

  function set(key: keyof Inputs, value: string) {
    setInputs((prev) => ({ ...prev, [key]: value }));
  }

  const result = calculer(inputs);

  return (
    <>
      {/* Header */}
      <section className="bg-white border-b border-slate-100 py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-700 transition-colors">Accueil</Link>
            <svg className="w-3 h-3 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/outils" className="hover:text-slate-700 transition-colors">Outils</Link>
            <svg className="w-3 h-3 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-slate-400">Calculateur de rentabilité</span>
          </nav>

          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-700 bg-green-50 border border-green-100 px-3 py-1 rounded-full mb-5">
            Outil gratuit
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] leading-tight mb-3">
            Calculateur de rentabilité — espaces de stockage
          </h1>
          <p className="text-slate-600 leading-relaxed max-w-2xl mb-5">
            Estimez la rentabilité brute, nette et après fiscalité d'un lot de garages ou d'un espace de stockage. Les calculs sont réalisés en temps réel dans votre navigateur — aucune donnée n'est transmise.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>Avertissement :</strong> cet outil produit des estimations indicatives à partir des données saisies. Il ne remplace pas une analyse personnalisée par un expert-comptable ou un conseiller fiscal. Les taux fiscaux appliqués correspondent aux règles en vigueur pour les revenus fonciers de personnes physiques résidentes fiscales françaises (sources : impots.gouv.fr, BOFIP). Consultez un professionnel avant toute décision.
            </p>
          </div>
        </div>
      </section>

      {/* Calculateur */}
      <div className="bg-[#f8f9fa] py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_380px] gap-6 items-start">

            {/* Formulaire */}
            <div className="space-y-5">

              {/* Acquisition */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <h2 className="font-bold text-[#1a1a2e] text-sm uppercase tracking-wider mb-5">
                  1. Coût d'acquisition
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <InputField
                    label="Prix d'achat net vendeur"
                    value={inputs.prixAchat}
                    onChange={(v) => set("prixAchat", v)}
                    suffix="€"
                    placeholder="Ex : 45000"
                  />
                  <InputField
                    label="Frais de notaire"
                    value={inputs.fraisNotaire}
                    onChange={(v) => set("fraisNotaire", v)}
                    suffix="€"
                    hint="Environ 7 à 8 % pour l'ancien (indicatif)"
                    placeholder="Ex : 3500"
                  />
                  <InputField
                    label="Travaux initiaux"
                    value={inputs.travaux}
                    onChange={(v) => set("travaux", v)}
                    suffix="€"
                    hint="Travaux à réaliser avant mise en location"
                    placeholder="Ex : 2000"
                  />
                </div>
              </div>

              {/* Loyers */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <h2 className="font-bold text-[#1a1a2e] text-sm uppercase tracking-wider mb-5">
                  2. Revenus locatifs
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <InputField
                    label="Loyer mensuel par unité"
                    value={inputs.loyerMensuelParUnite}
                    onChange={(v) => set("loyerMensuelParUnite", v)}
                    suffix="€/mois"
                    hint="Loyer observé sur le marché local"
                    placeholder="Ex : 80"
                  />
                  <InputField
                    label="Nombre d'unités"
                    value={inputs.nombreUnites}
                    onChange={(v) => set("nombreUnites", v)}
                    hint="Boxes, garages ou emplacements"
                    placeholder="1"
                  />
                  <InputField
                    label="Taux de vacance estimé"
                    value={inputs.tauxVacance}
                    onChange={(v) => set("tauxVacance", v)}
                    suffix="%"
                    hint="Période sans locataire — 5 % = ~18 jours/an"
                    placeholder="5"
                  />
                </div>
              </div>

              {/* Charges */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <h2 className="font-bold text-[#1a1a2e] text-sm uppercase tracking-wider mb-5">
                  3. Charges annuelles
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <InputField
                    label="Charges de copropriété"
                    value={inputs.chargesCopro}
                    onChange={(v) => set("chargesCopro", v)}
                    suffix="€/an"
                    placeholder="Ex : 600"
                  />
                  <InputField
                    label="Taxe foncière"
                    value={inputs.taxeFonciere}
                    onChange={(v) => set("taxeFonciere", v)}
                    suffix="€/an"
                    hint="À vérifier sur l'avis fiscal du vendeur"
                    placeholder="Ex : 400"
                  />
                  <InputField
                    label="Assurance propriétaire"
                    value={inputs.assurance}
                    onChange={(v) => set("assurance", v)}
                    suffix="€/an"
                    placeholder="Ex : 150"
                  />
                  <InputField
                    label="Frais de gestion"
                    value={inputs.fraisGestion}
                    onChange={(v) => set("fraisGestion", v)}
                    suffix="€/an"
                    hint="Agence ou gestionnaire — 0 si gestion directe"
                    placeholder="0"
                  />
                </div>
              </div>

              {/* Fiscalité */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <h2 className="font-bold text-[#1a1a2e] text-sm uppercase tracking-wider mb-2">
                  4. Fiscalité (optionnel)
                </h2>
                <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                  Pour une estimation indicative de l'impact fiscal. Applicable aux revenus fonciers de personnes physiques résidentes françaises. Les régimes BIC/IS ne sont pas couverts ici — consultez un professionnel.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Régime d'imposition</label>
                    <div className="space-y-2">
                      {([
                        { value: "aucun", label: "Ne pas estimer la fiscalité" },
                        { value: "micro-foncier", label: "Micro-foncier (abattement 30 %, loyers ≤ 15 000 €/an)" },
                        { value: "reel-foncier", label: "Régime réel (déduction des charges effectives)" },
                      ] as const).map((opt) => (
                        <label key={opt.value} className="flex items-start gap-2.5 cursor-pointer">
                          <input
                            type="radio"
                            name="regime"
                            value={opt.value}
                            checked={inputs.regime === opt.value}
                            onChange={() => set("regime", opt.value)}
                            className="mt-0.5"
                          />
                          <span className="text-sm text-slate-700">{opt.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {inputs.regime !== "aucun" && (
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Tranche marginale d'imposition (TMI)
                      </label>
                      <p className="text-xs text-slate-400 mb-2">Votre TMI actuelle — à vérifier sur votre dernière déclaration de revenus.</p>
                      <select
                        value={inputs.tmi}
                        onChange={(e) => set("tmi", e.target.value as Inputs["tmi"])}
                        className="text-sm px-3 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white w-full"
                      >
                        <option value="11">11 %</option>
                        <option value="30">30 %</option>
                        <option value="41">41 %</option>
                        <option value="45">45 %</option>
                      </select>
                      <p className="text-xs text-slate-400 mt-1.5">Prélèvements sociaux appliqués : 17,2 % (taux 2024, source : impots.gouv.fr)</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Résultats */}
            <div className="lg:sticky lg:top-6 space-y-4">
              {!result ? (
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 text-center">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Saisissez au minimum le <strong>prix d'achat</strong> et le <strong>loyer mensuel</strong> pour voir les résultats.
                  </p>
                </div>
              ) : (
                <>
                  {/* Résultats principaux */}
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                    <div className="h-1 bg-gradient-to-r from-[#1e3a5f] to-blue-500" />
                    <div className="p-5">
                      <h3 className="font-bold text-[#1a1a2e] text-sm uppercase tracking-wider mb-4">
                        Résultats
                      </h3>

                      <div className="grid grid-cols-2 gap-3 mb-5">
                        <div className="bg-[#f8f9fa] rounded-xl p-4 text-center">
                          <p className="text-xs text-slate-500 mb-1">Rendement brut</p>
                          <p className="text-2xl font-bold text-[#1e3a5f]">{fmt(result.rendementBrut, 2)} %</p>
                          <p className="text-xs text-slate-400 mt-0.5">indicatif</p>
                        </div>
                        <div className="bg-[#f8f9fa] rounded-xl p-4 text-center">
                          <p className="text-xs text-slate-500 mb-1">Rendement net</p>
                          <p className="text-2xl font-bold text-[#1e3a5f]">{fmt(result.rendementNetAvantFiscalite, 2)} %</p>
                          <p className="text-xs text-slate-400 mt-0.5">avant fiscalité</p>
                        </div>
                      </div>

                      {result.rendementNetApresImpot !== null && (
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center mb-5">
                          <p className="text-xs text-blue-600 mb-1">Rendement net estimé après impôt</p>
                          <p className="text-2xl font-bold text-[#1e3a5f]">{fmt(result.rendementNetApresImpot, 2)} %</p>
                          <p className="text-xs text-blue-400 mt-0.5">estimation indicative — TMI {inputs.tmi} % + PS 17,2 %</p>
                        </div>
                      )}

                      <div className="divide-y divide-slate-100">
                        <ResultRow label="Coût total d'acquisition" value={`${fmt(result.coutTotal)} €`} sub="Prix + notaire + travaux" />
                        <ResultRow label="Loyer annuel brut" value={`${fmt(result.loyerAnnuelBrut)} €`} sub={`${result.nbUnites} unité${result.nbUnites > 1 ? "s" : ""} × 12 mois`} />
                        <ResultRow label="Loyer annuel réel" value={`${fmt(result.loyerAnnuelReel)} €`} sub={`Après ${result.tauxVacance} % de vacance`} />
                        <ResultRow label="Charges totales" value={`${fmt(result.chargesAnnuelles)} €/an`} />
                        <ResultRow
                          label="Revenu net avant impôt"
                          value={`${fmt(result.revenuNetAvantImpot)} €/an`}
                          highlight
                        />
                        <ResultRow
                          label="Cash-flow mensuel estimé"
                          value={`${fmt(result.cashFlowMensuel)} €/mois`}
                          sub="Avant impôt sur le revenu"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Détail fiscalité */}
                  {result.rendementNetApresImpot !== null && result.noteRegime && (
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                      <h3 className="font-bold text-[#1a1a2e] text-sm uppercase tracking-wider mb-3">
                        Détail fiscal estimé
                      </h3>
                      <div className="divide-y divide-slate-100 mb-4">
                        <ResultRow label="Revenu imposable" value={`${fmt(result.revenuImposable)} €`} />
                        <ResultRow label={`Impôt (TMI ${inputs.tmi} %)`} value={`${fmt(result.impotEstime)} €`} />
                        <ResultRow label="Prélèvements sociaux (17,2 %)" value={`${fmt(result.psEstime)} €`} />
                        <ResultRow label="Total prélèvements estimés" value={`${fmt(result.impotEstime + result.psEstime)} €`} highlight />
                      </div>
                      <div className="bg-slate-50 rounded-lg p-3">
                        <p className="text-xs text-slate-500 leading-relaxed">{result.noteRegime}</p>
                      </div>
                    </div>
                  )}

                  {/* Avertissement résultats */}
                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                    <p className="text-xs text-amber-800 leading-relaxed">
                      Ces résultats sont des <strong>estimations indicatives</strong> basées sur les données saisies. La rentabilité réelle dépendra de nombreux facteurs non modélisés ici (évolution des loyers, travaux imprévus, structure de financement, situation fiscale personnelle complète). Consultez un professionnel avant toute décision d'investissement.
                    </p>
                  </div>

                  {/* Reset */}
                  <button
                    onClick={() => setInputs(defaultInputs)}
                    className="w-full text-sm text-slate-400 hover:text-slate-600 transition-colors py-2"
                  >
                    Réinitialiser le calculateur
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Sources */}
      <section className="bg-white border-t border-slate-100 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-sm font-bold text-slate-700 mb-3">Sources et références</h2>
              <ul className="space-y-1.5 text-xs text-slate-500">
                <li>→ impots.gouv.fr — Régimes d'imposition des revenus fonciers</li>
                <li>→ BOFIP BOI-RFPI-DECLA-20 — Micro-foncier : conditions et abattement</li>
                <li>→ Code général des impôts, Art. 28 — Charges déductibles au régime réel</li>
                <li>→ impots.gouv.fr — Prélèvements sociaux sur les revenus du patrimoine (17,2 %)</li>
                <li>→ service-public.fr — Déclaration des revenus fonciers</li>
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-700 mb-3">Aller plus loin</h2>
              <ul className="space-y-2">
                {[
                  { href: "/analyses/rentabilite-brute-nette-difference", label: "Rentabilité brute vs nette : pourquoi la différence est déterminante" },
                  { href: "/analyses/analyser-rentabilite-espace-stockage", label: "Comment analyser la rentabilité d'un espace de stockage ?" },
                  { href: "/analyses/fiscalite-revenus-garages-location", label: "Fiscalité des revenus tirés de la location de garages" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xs text-blue-700 hover:text-blue-800 transition-colors flex items-start gap-1.5">
                      <svg className="w-3 h-3 text-blue-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
