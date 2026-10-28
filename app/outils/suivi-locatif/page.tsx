"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// ── Types ─────────────────────────────────────────────────────────────────────

interface Unite {
  id: string;
  nom: string;
  type: "garage" | "box" | "cave" | "local" | "autre";
  surface: string;
  statut: "occupe" | "vacant";
  locataire: string;
  loyerMensuel: string;
  debutBail: string;
  finBail: string;
  depotGarantie: string;
  notes: string;
}

interface Depense {
  id: string;
  date: string;
  libelle: string;
  montant: string;
  categorie: "charges" | "travaux" | "taxe" | "assurance" | "gestion" | "autre";
}

interface Data {
  unites: Unite[];
  depenses: Depense[];
}

const STORAGE_KEY = "suivi-locatif";

const TYPES_LABELS: Record<Unite["type"], string> = {
  garage: "Garage",
  box: "Box",
  cave: "Cave",
  local: "Local commercial",
  autre: "Autre",
};

const CATEGORIE_LABELS: Record<Depense["categorie"], string> = {
  charges: "Charges copropriété",
  travaux: "Travaux",
  taxe: "Taxe foncière",
  assurance: "Assurance",
  gestion: "Frais de gestion",
  autre: "Autre",
};

function newId() {
  return Math.random().toString(36).slice(2, 10);
}

function emptyUnite(): Unite {
  return {
    id: newId(),
    nom: "",
    type: "garage",
    surface: "",
    statut: "vacant",
    locataire: "",
    loyerMensuel: "",
    debutBail: "",
    finBail: "",
    depotGarantie: "",
    notes: "",
  };
}

function emptyDepense(): Depense {
  return {
    id: newId(),
    date: new Date().toISOString().slice(0, 10),
    libelle: "",
    montant: "",
    categorie: "charges",
  };
}

function parseNum(s: string): number {
  return parseFloat(s.replace(",", ".")) || 0;
}

function formatEur(n: number): string {
  return n.toLocaleString("fr-FR", { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + " €";
}

function daysDiff(dateStr: string): number | null {
  if (!dateStr) return null;
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return null;
  return Math.round((d.getTime() - Date.now()) / 86400000);
}

// ── Composants internes ───────────────────────────────────────────────────────

function StatCard({ label, value, sub, color = "blue" }: { label: string; value: string; sub?: string; color?: string }) {
  const colors: Record<string, string> = {
    blue: "bg-blue-50 border-blue-100 text-blue-700",
    green: "bg-green-50 border-green-100 text-green-700",
    amber: "bg-amber-50 border-amber-100 text-amber-700",
    slate: "bg-slate-50 border-slate-100 text-slate-700",
  };
  return (
    <div className={`rounded-xl border p-4 ${colors[color] ?? colors.blue}`}>
      <p className="text-xs font-medium opacity-70 mb-1">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
      {sub && <p className="text-xs mt-1 opacity-70">{sub}</p>}
    </div>
  );
}

function LeaseWarning({ finBail }: { finBail: string }) {
  const days = daysDiff(finBail);
  if (days === null) return null;
  if (days < 0) return <span className="text-xs text-red-600 font-medium">Bail expiré</span>;
  if (days <= 30) return <span className="text-xs text-red-600 font-medium">Expire dans {days}j</span>;
  if (days <= 90) return <span className="text-xs text-amber-600 font-medium">Expire dans {days}j</span>;
  return null;
}

// ── Page principale ───────────────────────────────────────────────────────────

export default function SuiviLocatifPage() {
  const [data, setData] = useState<Data>({ unites: [], depenses: [] });
  const [tab, setTab] = useState<"unites" | "depenses" | "synthese">("unites");
  const [editingUnite, setEditingUnite] = useState<Unite | null>(null);
  const [editingDepense, setEditingDepense] = useState<Depense | null>(null);
  const [showUniteForm, setShowUniteForm] = useState(false);
  const [showDepenseForm, setShowDepenseForm] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState<{ type: "unite" | "depense"; id: string } | null>(null);

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setData(JSON.parse(saved));
    } catch {}
  }, []);

  // Save to localStorage
  function saveData(next: Data) {
    setData(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {}
  }

  // ── Unités CRUD ────────────────────────────────────────────────────────────

  function openAddUnite() {
    setEditingUnite(emptyUnite());
    setShowUniteForm(true);
  }

  function openEditUnite(u: Unite) {
    setEditingUnite({ ...u });
    setShowUniteForm(true);
  }

  function saveUnite() {
    if (!editingUnite || !editingUnite.nom.trim()) return;
    const exists = data.unites.find((u) => u.id === editingUnite.id);
    const unites = exists
      ? data.unites.map((u) => (u.id === editingUnite.id ? editingUnite : u))
      : [...data.unites, editingUnite];
    saveData({ ...data, unites });
    setShowUniteForm(false);
    setEditingUnite(null);
  }

  function deleteUnite(id: string) {
    saveData({ ...data, unites: data.unites.filter((u) => u.id !== id) });
    setConfirmDelete(null);
  }

  // ── Dépenses CRUD ──────────────────────────────────────────────────────────

  function openAddDepense() {
    setEditingDepense(emptyDepense());
    setShowDepenseForm(true);
  }

  function openEditDepense(d: Depense) {
    setEditingDepense({ ...d });
    setShowDepenseForm(true);
  }

  function saveDepense() {
    if (!editingDepense || !editingDepense.libelle.trim()) return;
    const exists = data.depenses.find((d) => d.id === editingDepense.id);
    const depenses = exists
      ? data.depenses.map((d) => (d.id === editingDepense.id ? editingDepense : d))
      : [...data.depenses, editingDepense];
    saveData({ ...data, depenses });
    setShowDepenseForm(false);
    setEditingDepense(null);
  }

  function deleteDepense(id: string) {
    saveData({ ...data, depenses: data.depenses.filter((d) => d.id !== id) });
    setConfirmDelete(null);
  }

  // ── Métriques ──────────────────────────────────────────────────────────────

  const totalUnites = data.unites.length;
  const unitesOccupees = data.unites.filter((u) => u.statut === "occupe").length;
  const tauxOccupation = totalUnites > 0 ? Math.round((unitesOccupees / totalUnites) * 100) : 0;
  const loyerMensuelTotal = data.unites
    .filter((u) => u.statut === "occupe")
    .reduce((s, u) => s + parseNum(u.loyerMensuel), 0);
  const loyerAnnuelTotal = loyerMensuelTotal * 12;
  const depensesTotal = data.depenses.reduce((s, d) => s + parseNum(d.montant), 0);
  const soldeNet = loyerAnnuelTotal - depensesTotal;

  const depensesParCategorie = Object.entries(CATEGORIE_LABELS).map(([key, label]) => ({
    key,
    label,
    total: data.depenses
      .filter((d) => d.categorie === key)
      .reduce((s, d) => s + parseNum(d.montant), 0),
  })).filter((c) => c.total > 0);

  const echeancessProches = data.unites
    .filter((u) => u.statut === "occupe" && u.finBail)
    .map((u) => ({ ...u, days: daysDiff(u.finBail) ?? 9999 }))
    .filter((u) => u.days <= 90)
    .sort((a, b) => a.days - b.days);

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <>
      {/* Header */}
      <section className="bg-white border-b border-slate-100 py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/outils" className="text-xs text-slate-400 hover:text-slate-600">← Outils</Link>
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
            Outil
          </span>
          <h1 className="mt-4 text-2xl md:text-3xl font-bold text-[#1a1a2e]">Tableau de bord locatif</h1>
          <p className="mt-3 text-slate-600 text-sm leading-relaxed max-w-2xl">
            Suivez vos baux, loyers, taux d'occupation et dépenses par unité. Les données sont stockées localement dans votre navigateur — elles ne transitent pas sur un serveur.
          </p>
        </div>
      </section>

      {/* Stats rapides */}
      <section className="bg-[#f8f9fa] border-b border-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <StatCard label="Unités totales" value={String(totalUnites)} color="slate" />
            <StatCard
              label="Taux d'occupation"
              value={`${tauxOccupation} %`}
              sub={`${unitesOccupees} / ${totalUnites} occupées`}
              color={tauxOccupation >= 80 ? "green" : tauxOccupation >= 50 ? "amber" : "slate"}
            />
            <StatCard
              label="Loyer mensuel total"
              value={totalUnites > 0 ? formatEur(loyerMensuelTotal) : "—"}
              sub={totalUnites > 0 ? `${formatEur(loyerAnnuelTotal)} / an` : undefined}
              color="blue"
            />
            <StatCard
              label="Dépenses enregistrées"
              value={data.depenses.length > 0 ? formatEur(depensesTotal) : "—"}
              sub={data.depenses.length > 0 ? `Solde brut : ${formatEur(soldeNet)}` : undefined}
              color="slate"
            />
          </div>

          {echeancessProches.length > 0 && (
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
              <p className="text-xs font-semibold text-amber-800 mb-2">⚠️ Échéances proches (&lt; 90 jours)</p>
              <div className="flex flex-wrap gap-2">
                {echeancessProches.map((u) => (
                  <span key={u.id} className="text-xs bg-white border border-amber-200 text-amber-800 rounded-full px-2.5 py-1">
                    {u.nom} — {u.days <= 0 ? "expiré" : `${u.days}j`}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Onglets */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 border-b border-slate-100 -mb-px">
            {(["unites", "depenses", "synthese"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  tab === t
                    ? "border-[#1e3a5f] text-[#1e3a5f]"
                    : "border-transparent text-slate-500 hover:text-slate-700"
                }`}
              >
                {t === "unites" ? `Unités (${totalUnites})` : t === "depenses" ? `Dépenses (${data.depenses.length})` : "Synthèse"}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contenu onglets */}
      <section className="bg-[#f8f9fa] py-8 min-h-96">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Onglet Unités ── */}
          {tab === "unites" && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-bold text-[#1a1a2e]">Unités de stockage</h2>
                <button
                  onClick={openAddUnite}
                  className="inline-flex items-center gap-1.5 bg-[#1e3a5f] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#162d4a] transition-colors"
                >
                  <span>+</span> Ajouter une unité
                </button>
              </div>

              {data.unites.length === 0 ? (
                <div className="bg-white rounded-xl border border-slate-100 p-10 text-center">
                  <p className="text-slate-400 text-sm">Aucune unité enregistrée.</p>
                  <p className="text-slate-400 text-xs mt-1">Cliquez sur « Ajouter une unité » pour commencer.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {data.unites.map((u) => (
                    <div key={u.id} className="bg-white rounded-xl border border-slate-100 p-4 flex items-start gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="font-bold text-[#1a1a2e] text-sm">{u.nom}</span>
                          <span className="text-xs text-slate-400">{TYPES_LABELS[u.type]}</span>
                          {u.surface && <span className="text-xs text-slate-400">{u.surface} m²</span>}
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                            u.statut === "occupe"
                              ? "bg-green-50 text-green-700"
                              : "bg-slate-100 text-slate-500"
                          }`}>
                            {u.statut === "occupe" ? "Occupé" : "Vacant"}
                          </span>
                        </div>
                        {u.statut === "occupe" && (
                          <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-xs text-slate-500 mt-1">
                            {u.locataire && <span>Locataire : {u.locataire}</span>}
                            {u.loyerMensuel && <span>Loyer : {formatEur(parseNum(u.loyerMensuel))} / mois</span>}
                            {u.debutBail && <span>Début : {u.debutBail}</span>}
                            {u.finBail && (
                              <span className="flex items-center gap-1">
                                Fin : {u.finBail} <LeaseWarning finBail={u.finBail} />
                              </span>
                            )}
                            {u.depotGarantie && <span>Dépôt : {formatEur(parseNum(u.depotGarantie))}</span>}
                          </div>
                        )}
                        {u.notes && <p className="text-xs text-slate-400 mt-1 italic">{u.notes}</p>}
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <button
                          onClick={() => openEditUnite(u)}
                          className="text-xs text-slate-500 hover:text-[#1e3a5f] border border-slate-200 rounded px-2 py-1 transition-colors"
                        >
                          Modifier
                        </button>
                        <button
                          onClick={() => setConfirmDelete({ type: "unite", id: u.id })}
                          className="text-xs text-red-400 hover:text-red-600 border border-slate-200 rounded px-2 py-1 transition-colors"
                        >
                          Suppr.
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── Onglet Dépenses ── */}
          {tab === "depenses" && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-bold text-[#1a1a2e]">Dépenses</h2>
                <button
                  onClick={openAddDepense}
                  className="inline-flex items-center gap-1.5 bg-[#1e3a5f] text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#162d4a] transition-colors"
                >
                  <span>+</span> Ajouter une dépense
                </button>
              </div>

              {data.depenses.length === 0 ? (
                <div className="bg-white rounded-xl border border-slate-100 p-10 text-center">
                  <p className="text-slate-400 text-sm">Aucune dépense enregistrée.</p>
                </div>
              ) : (
                <div className="bg-white rounded-xl border border-slate-100 overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-[#f8f9fa] border-b border-slate-100">
                      <tr>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500">Date</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500">Libellé</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-slate-500 hidden sm:table-cell">Catégorie</th>
                        <th className="text-right px-4 py-3 text-xs font-semibold text-slate-500">Montant</th>
                        <th className="px-4 py-3 text-xs font-semibold text-slate-500 w-20"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...data.depenses].sort((a, b) => b.date.localeCompare(a.date)).map((d, i) => (
                        <tr key={d.id} className={i % 2 === 0 ? "" : "bg-[#fafafa]"}>
                          <td className="px-4 py-2.5 text-xs text-slate-500">{d.date}</td>
                          <td className="px-4 py-2.5 text-xs font-medium text-[#1a1a2e]">{d.libelle}</td>
                          <td className="px-4 py-2.5 text-xs text-slate-400 hidden sm:table-cell">{CATEGORIE_LABELS[d.categorie]}</td>
                          <td className="px-4 py-2.5 text-xs font-semibold text-slate-700 text-right">{formatEur(parseNum(d.montant))}</td>
                          <td className="px-4 py-2.5">
                            <div className="flex gap-1 justify-end">
                              <button onClick={() => openEditDepense(d)} className="text-xs text-slate-400 hover:text-[#1e3a5f]">✏️</button>
                              <button onClick={() => setConfirmDelete({ type: "depense", id: d.id })} className="text-xs text-slate-400 hover:text-red-500">🗑️</button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="border-t border-slate-100 bg-[#f8f9fa]">
                      <tr>
                        <td colSpan={3} className="px-4 py-3 text-xs font-semibold text-slate-600">Total</td>
                        <td className="px-4 py-3 text-xs font-bold text-[#1a1a2e] text-right">{formatEur(depensesTotal)}</td>
                        <td />
                      </tr>
                    </tfoot>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* ── Onglet Synthèse ── */}
          {tab === "synthese" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-base font-bold text-[#1a1a2e] mb-4">Synthèse des flux</h2>
                {totalUnites === 0 ? (
                  <div className="bg-white rounded-xl border border-slate-100 p-10 text-center">
                    <p className="text-slate-400 text-sm">Ajoutez des unités et des dépenses pour voir la synthèse.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl border border-slate-100 p-5">
                      <p className="text-xs font-semibold text-slate-500 mb-3">Loyers encaissés</p>
                      <p className="text-lg font-bold text-green-700">{formatEur(loyerMensuelTotal)} / mois</p>
                      <p className="text-xs text-slate-400 mt-1">{formatEur(loyerAnnuelTotal)} / an (hypothèse : 0 % vacance)</p>
                    </div>
                    <div className="bg-white rounded-xl border border-slate-100 p-5">
                      <p className="text-xs font-semibold text-slate-500 mb-3">Dépenses enregistrées</p>
                      <p className="text-lg font-bold text-red-600">{formatEur(depensesTotal)}</p>
                      <p className="text-xs text-slate-400 mt-1">{data.depenses.length} opération{data.depenses.length !== 1 ? "s" : ""}</p>
                    </div>
                    <div className="bg-white rounded-xl border border-slate-100 p-5">
                      <p className="text-xs font-semibold text-slate-500 mb-3">Solde brut estimé</p>
                      <p className={`text-lg font-bold ${soldeNet >= 0 ? "text-green-700" : "text-red-600"}`}>{formatEur(soldeNet)}</p>
                      <p className="text-xs text-slate-400 mt-1">Loyers annuels − dépenses</p>
                    </div>
                  </div>
                )}
              </div>

              {depensesParCategorie.length > 0 && (
                <div>
                  <h2 className="text-base font-bold text-[#1a1a2e] mb-4">Répartition des dépenses</h2>
                  <div className="bg-white rounded-xl border border-slate-100 p-5">
                    <div className="space-y-2">
                      {depensesParCategorie.sort((a, b) => b.total - a.total).map((c) => {
                        const pct = depensesTotal > 0 ? Math.round((c.total / depensesTotal) * 100) : 0;
                        return (
                          <div key={c.key}>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-slate-600">{c.label}</span>
                              <span className="font-semibold text-slate-700">{formatEur(c.total)} ({pct} %)</span>
                            </div>
                            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <div className="h-full bg-[#1e3a5f] rounded-full" style={{ width: `${pct}%` }} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-xs text-amber-800 leading-relaxed">
                <strong>Note :</strong> Ce tableau de bord est un outil de suivi personnel. Les calculs présentés (loyers, solde) sont des estimations brutes, avant fiscalité, vacance réelle et charges non encore enregistrées. Ils ne constituent pas un indicateur de rentabilité fiable. Consultez votre expert-comptable pour une analyse précise de votre situation.
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Modale : formulaire unité ── */}
      {showUniteForm && editingUnite && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-start justify-center overflow-y-auto py-8 px-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 my-auto">
            <h3 className="font-bold text-[#1a1a2e] text-lg mb-5">
              {data.unites.find((u) => u.id === editingUnite.id) ? "Modifier l'unité" : "Ajouter une unité"}
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Nom / Référence *</label>
                  <input
                    type="text"
                    placeholder="Ex : Garage A3, Box 12…"
                    value={editingUnite.nom}
                    onChange={(e) => setEditingUnite({ ...editingUnite, nom: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Type</label>
                  <select
                    value={editingUnite.type}
                    onChange={(e) => setEditingUnite({ ...editingUnite, type: e.target.value as Unite["type"] })}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    {Object.entries(TYPES_LABELS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Surface (m²)</label>
                  <input
                    type="text"
                    placeholder="Ex : 12"
                    value={editingUnite.surface}
                    onChange={(e) => setEditingUnite({ ...editingUnite, surface: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Statut</label>
                  <div className="flex gap-3">
                    {(["vacant", "occupe"] as const).map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setEditingUnite({ ...editingUnite, statut: s })}
                        className={`flex-1 py-2 rounded-lg border text-sm font-medium transition-colors ${
                          editingUnite.statut === s
                            ? s === "occupe"
                              ? "bg-green-50 border-green-300 text-green-700"
                              : "bg-slate-100 border-slate-300 text-slate-700"
                            : "border-slate-200 text-slate-400 hover:border-slate-300"
                        }`}
                      >
                        {s === "occupe" ? "Occupé" : "Vacant"}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {editingUnite.statut === "occupe" && (
                <div className="space-y-3 border-t border-slate-100 pt-4">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Bail en cours</p>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Nom du locataire</label>
                    <input
                      type="text"
                      placeholder="Nom, prénom ou société"
                      value={editingUnite.locataire}
                      onChange={(e) => setEditingUnite({ ...editingUnite, locataire: e.target.value })}
                      className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Loyer mensuel (€)</label>
                      <input
                        type="text"
                        placeholder="Ex : 80"
                        value={editingUnite.loyerMensuel}
                        onChange={(e) => setEditingUnite({ ...editingUnite, loyerMensuel: e.target.value })}
                        className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Dépôt de garantie (€)</label>
                      <input
                        type="text"
                        placeholder="Ex : 80"
                        value={editingUnite.depotGarantie}
                        onChange={(e) => setEditingUnite({ ...editingUnite, depotGarantie: e.target.value })}
                        className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Début du bail</label>
                      <input
                        type="date"
                        value={editingUnite.debutBail}
                        onChange={(e) => setEditingUnite({ ...editingUnite, debutBail: e.target.value })}
                        className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Fin du bail</label>
                      <input
                        type="date"
                        value={editingUnite.finBail}
                        onChange={(e) => setEditingUnite({ ...editingUnite, finBail: e.target.value })}
                        className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Notes</label>
                <textarea
                  rows={2}
                  placeholder="Remarques, état des lieux, travaux à prévoir…"
                  value={editingUnite.notes}
                  onChange={(e) => setEditingUnite({ ...editingUnite, notes: e.target.value })}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={saveUnite}
                disabled={!editingUnite.nom.trim()}
                className="flex-1 bg-[#1e3a5f] text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-[#162d4a] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Enregistrer
              </button>
              <button
                onClick={() => { setShowUniteForm(false); setEditingUnite(null); }}
                className="px-5 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 hover:border-slate-300 transition-colors"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Modale : formulaire dépense ── */}
      {showDepenseForm && editingDepense && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
            <h3 className="font-bold text-[#1a1a2e] text-lg mb-5">
              {data.depenses.find((d) => d.id === editingDepense.id) ? "Modifier la dépense" : "Ajouter une dépense"}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Libellé *</label>
                <input
                  type="text"
                  placeholder="Ex : Taxe foncière 2025, Réparation volet…"
                  value={editingDepense.libelle}
                  onChange={(e) => setEditingDepense({ ...editingDepense, libelle: e.target.value })}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Montant (€)</label>
                  <input
                    type="text"
                    placeholder="Ex : 350"
                    value={editingDepense.montant}
                    onChange={(e) => setEditingDepense({ ...editingDepense, montant: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Date</label>
                  <input
                    type="date"
                    value={editingDepense.date}
                    onChange={(e) => setEditingDepense({ ...editingDepense, date: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Catégorie</label>
                <select
                  value={editingDepense.categorie}
                  onChange={(e) => setEditingDepense({ ...editingDepense, categorie: e.target.value as Depense["categorie"] })}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                >
                  {Object.entries(CATEGORIE_LABELS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                </select>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={saveDepense}
                disabled={!editingDepense.libelle.trim()}
                className="flex-1 bg-[#1e3a5f] text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-[#162d4a] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Enregistrer
              </button>
              <button
                onClick={() => { setShowDepenseForm(false); setEditingDepense(null); }}
                className="px-5 py-2.5 border border-slate-200 rounded-lg text-sm text-slate-600 hover:border-slate-300 transition-colors"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Modale confirmation suppression ── */}
      {confirmDelete && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-6 text-center">
            <p className="font-bold text-[#1a1a2e] mb-2">Confirmer la suppression</p>
            <p className="text-sm text-slate-500 mb-6">
              {confirmDelete.type === "unite" ? "Cette unité et ses données seront supprimées." : "Cette dépense sera supprimée."}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => confirmDelete.type === "unite" ? deleteUnite(confirmDelete.id) : deleteDepense(confirmDelete.id)}
                className="flex-1 bg-red-600 text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-red-700 transition-colors"
              >
                Supprimer
              </button>
              <button
                onClick={() => setConfirmDelete(null)}
                className="flex-1 border border-slate-200 text-slate-600 font-semibold text-sm py-2.5 rounded-lg hover:border-slate-300 transition-colors"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
