"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { Ville } from "@/lib/villes";

const COORDS: Record<string, [number, number]> = {
  "aix-en-provence": [43.529, 5.447],
  "amiens": [49.894, 2.302],
  "angers": [47.478, -0.563],
  "besancon": [47.237, 6.024],
  "bordeaux": [44.837, -0.579],
  "bourges": [47.081, 2.398],
  "brest": [48.390, -4.486],
  "caen": [49.182, -0.370],
  "clermont-ferrand": [45.777, 3.087],
  "dijon": [47.322, 5.041],
  "grenoble": [45.188, 5.724],
  "laval": [48.074, -0.771],
  "le-havre": [49.494, 0.107],
  "le-mans": [48.006, 0.199],
  "lille": [50.629, 3.057],
  "limoges": [45.850, 1.261],
  "lyon": [45.750, 4.850],
  "marseille": [43.296, 5.369],
  "metz": [49.120, 6.177],
  "montpellier": [43.611, 3.877],
  "mulhouse": [47.750, 7.340],
  "nancy": [48.692, 6.184],
  "nantes": [47.218, -1.553],
  "nice": [43.710, 7.262],
  "nimes": [43.836, 4.360],
  "orleans": [47.903, 1.909],
  "pau": [43.296, -0.370],
  "perpignan": [42.699, 2.895],
  "poitiers": [46.580, 0.340],
  "quimper": [48.000, -4.100],
  "reims": [49.258, 4.032],
  "rennes": [48.117, -1.678],
  "rouen": [49.443, 1.099],
  "saint-etienne": [45.440, 4.387],
  "strasbourg": [48.584, 7.745],
  "toulon": [43.125, 5.930],
  "toulouse": [43.604, 1.444],
  "tours": [47.394, 0.690],
  "troyes": [48.300, 4.080],
  "valenciennes": [50.358, 3.523],
};

const NIVEAU_CONFIG = {
  forte:   { color: "#16a34a", label: "Forte",   badge: "bg-green-50 text-green-700 border-green-200" },
  moderee: { color: "#d97706", label: "Modérée", badge: "bg-amber-50 text-amber-700 border-amber-200" },
  faible:  { color: "#dc2626", label: "Faible",  badge: "bg-red-50 text-red-700 border-red-200" },
} as const;

const LEAFLET_CSS = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css";
const LEAFLET_JS  = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
    const s = document.createElement("script");
    s.src = src; s.async = true;
    s.onload = () => resolve();
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

function loadCSS(href: string) {
  if (document.querySelector(`link[href="${href}"]`)) return;
  const l = document.createElement("link");
  l.rel = "stylesheet"; l.href = href;
  document.head.appendChild(l);
}

interface Props { villes: Ville[] }

export default function CarteInteractive({ villes }: Props) {
  const mapRef        = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstance   = useRef<any>(null);
  const router        = useRouter();
  const [selectedVille, setSelectedVille] = useState<Ville | null>(null);
  const [filter,  setFilter]  = useState<"all" | "forte" | "moderee" | "faible">("all");
  const [search,  setSearch]  = useState("");
  const [isReady, setIsReady] = useState(false);

  const filteredVilles = villes.filter((v) => {
    const ok = filter === "all" || v.demande.niveau === filter;
    const q  = search.toLowerCase();
    const match = v.nom.toLowerCase().includes(q) ||
                  v.departement.toLowerCase().includes(q) ||
                  v.region.toLowerCase().includes(q);
    return ok && match;
  });

  const stats = {
    total:   villes.length,
    forte:   villes.filter((v) => v.demande.niveau === "forte").length,
    moderee: villes.filter((v) => v.demande.niveau === "moderee").length,
    faible:  villes.filter((v) => v.demande.niveau === "faible").length,
  };

  const initMap = useCallback(async () => {
    if (!mapRef.current || mapInstance.current) return;

    loadCSS(LEAFLET_CSS);
    await loadScript(LEAFLET_JS);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const L = (window as any).L;
    if (!L || !mapRef.current) return;

    const map = L.map(mapRef.current, {
      center: [46.5, 2.5],
      zoom: 6,
      zoomControl: false,
      attributionControl: false,
    });

    mapInstance.current = map;

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      maxZoom: 19,
      subdomains: "abcd",
    }).addTo(map);

    L.control.zoom({ position: "bottomright" }).addTo(map);
    L.control.attribution({
      position: "bottomleft",
      prefix: '© <a href="https://www.openstreetmap.org/">OSM</a> · © <a href="https://carto.com/">CARTO</a>',
    }).addTo(map);

    // Force Leaflet to recalc container size after mount
    setTimeout(() => map.invalidateSize(), 100);

    villes.forEach((ville) => {
      const coords = COORDS[ville.slug];
      if (!coords) return;
      const cfg  = NIVEAU_CONFIG[ville.demande.niveau];
      const size = 14;

      const icon = L.divIcon({
        html: `<div style="width:${size}px;height:${size}px;border-radius:50%;background:${cfg.color};border:2.5px solid white;box-shadow:0 2px 8px rgba(0,0,0,0.25);cursor:pointer;"></div>`,
        className: "",
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
      });

      const popup = L.popup({ maxWidth: 260, className: "carte-popup" }).setContent(`
        <div style="min-width:220px;font-family:system-ui,sans-serif;">
          <div style="padding:12px 14px;border-bottom:1px solid #f1f5f9;">
            <div style="font-size:13px;font-weight:700;color:#1a1a2e;margin-bottom:2px;">${ville.nom}</div>
            <div style="font-size:11px;color:#94a3b8;">${ville.departement} · ${ville.region}</div>
          </div>
          <div style="padding:10px 14px;">
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:8px;">
              <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:${cfg.color};"></span>
              <span style="font-size:11px;font-weight:600;color:#374151;">Demande ${cfg.label.toLowerCase()}</span>
            </div>
            <div style="font-size:11px;color:#64748b;line-height:1.5;margin-bottom:10px;">${ville.prixObserves.fourchette}</div>
            <a href="/marche/${ville.slug}" style="display:block;text-align:center;background:#1e3a5f;color:white;font-size:11px;font-weight:600;padding:7px 12px;border-radius:8px;text-decoration:none;">Voir l'analyse →</a>
          </div>
        </div>`);

      L.marker(coords, { icon })
        .bindPopup(popup)
        .on("click", () => setSelectedVille(ville))
        .addTo(map);
    });

    setIsReady(true);
  }, [villes]);

  useEffect(() => {
    initMap();
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [initMap]);

  const focusCity = (ville: Ville) => {
    const coords = COORDS[ville.slug];
    if (!coords || !mapInstance.current) return;
    mapInstance.current.flyTo(coords, 12, { duration: 0.8 });
    setSelectedVille(ville);
  };

  return (
    <div className="flex flex-col lg:flex-row bg-[#f8f9fa]" style={{ height: "calc(100vh - 130px)", minHeight: 600 }}>

      {/* Panneau gauche */}
      <aside className="w-full lg:w-[340px] shrink-0 flex flex-col bg-white border-r border-slate-100 overflow-hidden" style={{ maxHeight: "45vh" }}
        ref={(el) => { if (el && window.innerWidth >= 1024) el.style.maxHeight = ""; }}
      >

        <div className="px-5 pt-5 pb-4 border-b border-slate-100">
          <h2 className="font-bold text-[#1a1a2e] text-base mb-1">Analyses locales</h2>
          <p className="text-xs text-slate-500">{stats.total} marchés analysés en France</p>
          <div className="flex gap-2 mt-3">
            {(["forte", "moderee", "faible"] as const).map((n) => (
              <button
                key={n}
                onClick={() => setFilter(filter === n ? "all" : n)}
                className={`flex-1 py-1.5 px-2 rounded-lg border text-xs font-semibold transition-all ${
                  filter === n ? `${NIVEAU_CONFIG[n].badge} border-current` : "bg-slate-50 text-slate-500 border-slate-100 hover:bg-slate-100"
                }`}
              >
                <span className="block text-base leading-none font-bold">{stats[n]}</span>
                <span className="opacity-80">{NIVEAU_CONFIG[n].label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="px-4 py-3 border-b border-slate-100">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Ville, département, région…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-8 pr-3 py-2 text-xs bg-[#f8f9fa] border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 placeholder:text-slate-400"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          {(filter !== "all" || search) && (
            <p className="text-[11px] text-slate-400 mt-1.5">
              {filteredVilles.length} ville{filteredVilles.length > 1 ? "s" : ""} affichée{filteredVilles.length > 1 ? "s" : ""}
            </p>
          )}
        </div>

        <div className="flex-1 overflow-y-auto">
          {filteredVilles.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-32 text-slate-400">
              <p className="text-xs">Aucune ville trouvée</p>
            </div>
          ) : (
            <ul className="divide-y divide-slate-50">
              {[...filteredVilles].sort((a, b) => a.nom.localeCompare(b.nom, "fr")).map((ville) => {
                const cfg = NIVEAU_CONFIG[ville.demande.niveau];
                const isSelected = selectedVille?.slug === ville.slug;
                return (
                  <li key={ville.slug}>
                    <button
                      onClick={() => focusCity(ville)}
                      className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors group ${isSelected ? "bg-blue-50" : "hover:bg-slate-50"}`}
                    >
                      <span className="shrink-0 w-2.5 h-2.5 rounded-full" style={{ background: cfg.color }} />
                      <div className="flex-1 min-w-0">
                        <div className={`text-sm font-semibold truncate ${isSelected ? "text-[#1e3a5f]" : "text-[#1a1a2e] group-hover:text-[#1e3a5f]"}`}>{ville.nom}</div>
                        <div className="text-xs text-slate-400 truncate">{ville.departement}</div>
                      </div>
                      <span className={`shrink-0 text-[10px] font-semibold px-1.5 py-0.5 rounded-full border ${cfg.badge}`}>{cfg.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {selectedVille && (
          <div className="border-t border-slate-100 bg-white p-4">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <div className="font-bold text-[#1a1a2e] text-sm">{selectedVille.nom}</div>
                <div className="text-xs text-slate-400">{selectedVille.departement} · {selectedVille.region}</div>
              </div>
              <span className={`shrink-0 text-[10px] font-semibold px-1.5 py-0.5 rounded-full border ${NIVEAU_CONFIG[selectedVille.demande.niveau].badge}`}>
                {NIVEAU_CONFIG[selectedVille.demande.niveau].label}
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed mb-3 line-clamp-2">{selectedVille.prixObserves.fourchette}</p>
            <button
              onClick={() => router.push(`/marche/${selectedVille.slug}`)}
              className="w-full bg-[#1e3a5f] text-white text-xs font-semibold py-2.5 rounded-lg hover:bg-[#162d4a] transition-colors flex items-center justify-center gap-1.5"
            >
              Voir l'analyse complète
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </aside>

      {/* Carte */}
      <div className="flex-1 relative" style={{ minHeight: 400, height: "100%" }}>
        <style>{`
          .leaflet-container { background: #e8eef5; font-family: system-ui, sans-serif; }
          .carte-popup .leaflet-popup-content-wrapper { border-radius:14px!important; border:1px solid #e2e8f0!important; box-shadow:0 10px 40px rgba(0,0,0,.12)!important; padding:0!important; overflow:hidden; }
          .carte-popup .leaflet-popup-content { margin:0!important; }
          .carte-popup .leaflet-popup-tip-container { display:none; }
          .carte-popup .leaflet-popup-close-button { top:10px!important; right:12px!important; color:#94a3b8!important; font-size:18px!important; }
        `}</style>

        <div ref={mapRef} style={{ position: "absolute", inset: 0 }} />

        {!isReady && (
          <div className="absolute inset-0 bg-[#e8eef5] flex items-center justify-center z-10">
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-[#1e3a5f] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-sm text-slate-500">Chargement de la carte…</p>
            </div>
          </div>
        )}

        {isReady && (
          <>
            <div className="absolute bottom-6 right-14 bg-white rounded-xl border border-slate-100 shadow-md p-3 z-[1000] text-xs">
              <p className="font-semibold text-[#1a1a2e] mb-2 text-[11px] uppercase tracking-wide">Niveau de demande</p>
              {(["forte", "moderee", "faible"] as const).map((n) => (
                <div key={n} className="flex items-center gap-2 mb-1 last:mb-0">
                  <span className="w-3 h-3 rounded-full shrink-0" style={{ background: NIVEAU_CONFIG[n].color }} />
                  <span className="text-slate-600">{NIVEAU_CONFIG[n].label}</span>
                </div>
              ))}
              <div className="mt-2 pt-2 border-t border-slate-100 text-[10px] text-slate-400">{stats.total} marchés analysés</div>
            </div>
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-1.5 text-xs text-slate-500 shadow-sm z-[1000] pointer-events-none">
              Cliquez sur un marqueur · Utilisez la liste pour naviguer
            </div>
          </>
        )}
      </div>
    </div>
  );
}
