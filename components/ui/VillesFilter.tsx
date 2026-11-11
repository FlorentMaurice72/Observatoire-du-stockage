"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Ville } from "@/lib/villes";

const niveauColors: Record<string, string> = {
  forte: "bg-green-50 text-green-700 border-green-100",
  moderee: "bg-amber-50 text-amber-700 border-amber-100",
  faible: "bg-red-50 text-red-700 border-red-100",
};
const niveauLabels: Record<string, string> = {
  forte: "Demande forte",
  moderee: "Demande modérée",
  faible: "Demande faible",
};
const niveauPillColors: Record<string, { active: string; inactive: string }> = {
  forte: {
    active: "bg-green-50 text-green-700 border-green-200",
    inactive: "bg-white text-slate-400 border-slate-200",
  },
  moderee: {
    active: "bg-amber-50 text-amber-700 border-amber-200",
    inactive: "bg-white text-slate-400 border-slate-200",
  },
  faible: {
    active: "bg-red-50 text-red-700 border-red-200",
    inactive: "bg-white text-slate-400 border-slate-200",
  },
};

interface Props {
  villes: Ville[];
}

export default function VillesFilter({ villes }: Props) {
  const [search, setSearch] = useState("");
  const [departement, setDepartement] = useState("");
  const [niveaux, setNiveaux] = useState<Set<string>>(
    new Set(["forte", "moderee", "faible"])
  );

  const departements = useMemo(() => {
    const unique = Array.from(new Set(villes.map((v) => v.departement))).sort(
      (a, b) => a.localeCompare(b, "fr")
    );
    return unique;
  }, [villes]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return villes
      .filter((v) => {
        if (q && !v.nom.toLowerCase().includes(q)) return false;
        if (departement && v.departement !== departement) return false;
        if (!niveaux.has(v.demande.niveau)) return false;
        return true;
      })
      .sort((a, b) => a.nom.localeCompare(b.nom, "fr"));
  }, [villes, search, departement, niveaux]);

  function toggleNiveau(n: string) {
    setNiveaux((prev) => {
      const next = new Set(prev);
      if (next.has(n)) {
        if (next.size > 1) next.delete(n);
      } else {
        next.add(n);
      }
      return next;
    });
  }

  return (
    <div>
      {/* Filters */}
      <div className="bg-white border border-slate-100 rounded-2xl p-4 mb-6 flex flex-col sm:flex-row gap-3 items-start sm:items-center flex-wrap">
        {/* Search */}
        <div className="relative flex-1 min-w-[180px]">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
            />
          </svg>
          <input
            type="search"
            placeholder="Rechercher une ville…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 bg-[#f8f9fa]"
          />
        </div>

        {/* Department select */}
        <select
          value={departement}
          onChange={(e) => setDepartement(e.target.value)}
          className="px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-300 bg-[#f8f9fa] min-w-[200px]"
        >
          <option value="">Tous les départements</option>
          {departements.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        {/* Demand level pills */}
        <div className="flex gap-2 flex-wrap">
          {(["forte", "moderee", "faible"] as const).map((n) => (
            <button
              key={n}
              onClick={() => toggleNiveau(n)}
              className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                niveaux.has(n)
                  ? niveauPillColors[n].active
                  : niveauPillColors[n].inactive
              }`}
            >
              {niveauLabels[n]}
            </button>
          ))}
        </div>
      </div>

      {/* Counter */}
      <p className="text-xs text-slate-400 mb-4">
        {filtered.length} ville{filtered.length !== 1 ? "s" : ""} trouvée
        {filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-slate-400 text-sm">
          Aucune ville ne correspond à votre recherche.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((v) => (
            <Link key={v.slug} href={`/marche/${v.slug}`}>
              <div className="bg-white rounded-xl border border-slate-100 hover:border-blue-200 hover:shadow-md p-5 h-full transition-all cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-[#1a1a2e] text-base">{v.nom}</h3>
                    <p className="text-xs text-slate-400">{v.departement}</p>
                  </div>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full border shrink-0 ml-2 ${niveauColors[v.demande.niveau]}`}
                  >
                    {niveauLabels[v.demande.niveau]}
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  {v.intro.slice(0, 120)}…
                </p>
                <p className="mt-3 text-xs font-semibold text-blue-700 flex items-center gap-1">
                  Lire l'analyse
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
