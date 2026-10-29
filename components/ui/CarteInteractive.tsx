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
  "agen": [44.2046, 0.6233],
  "ajaccio": [41.9192, 8.7386],
  "albi": [43.9292, 2.148],
  "ales": [44.1264, 4.0818],
  "alencon": [48.431, 0.0924],
  "angouleme": [45.6497, 0.1563],
  "arles": [43.6767, 4.6279],
  "arras": [50.2919, 2.7773],
  "auxerre": [47.7982, 3.5704],
  "avignon": [43.9493, 4.8055],
  "bayonne": [43.493, -1.4748],
  "beauvais": [49.4295, 2.0848],
  "belfort": [47.6383, 6.8632],
  "bergerac": [44.8501, 0.4815],
  "beziers": [43.3444, 3.2167],
  "blois": [47.5939, 1.3285],
  "boulogne-sur-mer": [50.7264, 1.6139],
  "bourg-en-bresse": [46.205, 5.2267],
  "brive-la-gaillarde": [45.159, 1.5317],
  "cahors": [44.4484, 1.4404],
  "calais": [50.9513, 1.8587],
  "cannes": [43.5513, 7.0128],
  "carcassonne": [43.2119, 2.3499],
  "castres": [43.6066, 2.2393],
  "chalons-en-champagne": [48.9571, 4.3648],
  "chalon-sur-saone": [46.7817, 4.8543],
  "chambery": [45.5646, 5.9178],
  "chartres": [48.4469, 1.4889],
  "chateauroux": [46.8108, 1.6912],
  "chatellerault": [46.8174, 0.5449],
  "cherbourg-en-cotentin": [49.6333, -1.6167],
  "cholet": [47.0599, -0.8784],
  "cognac": [45.6957, -0.3296],
  "colmar": [48.0793, 7.3585],
  "compiegne": [49.4183, 2.823],
  "dax": [43.7101, -1.0519],
  "dole": [47.0946, 5.4936],
  "draguignan": [43.5383, 6.4664],
  "dreux": [48.7373, 1.3637],
  "dunkerque": [51.0348, 2.3768],
  "elbeuf": [49.2844, 1.0196],
  "epernay": [49.0432, 3.9602],
  "epinal": [48.1733, 6.45],
  "evreux": [49.0235, 1.1539],
  "foix": [42.9672, 1.6072],
  "frejus": [43.4328, 6.7369],
  "gap": [44.5594, 6.0772],
  "gueret": [46.1688, 1.8702],
  "guingamp": [48.5637, -3.1501],
  "haguenau": [48.8149, 7.7898],
  "hyeres": [43.1199, 6.1287],
  "la-rochelle": [46.1604, -1.151],
  "la-roche-sur-yon": [46.6707, -1.4261],
  "laon": [49.564, 3.624],
  "lannion": [48.7323, -3.4598],
  "lens": [50.4324, 2.831],
  "le-creusot": [46.8046, 4.4368],
  "le-puy-en-velay": [45.044, 3.8836],
  "lisieux": [49.1457, 0.2256],
  "lons-le-saunier": [46.675, 5.5537],
  "lorient": [47.7482, -3.365],
  "longwy": [49.5219, 5.7676],
  "macon": [46.3058, 4.8312],
  "mantes-la-jolie": [48.9895, 1.7178],
  "marmande": [44.4999, 0.1637],
  "maubeuge": [50.2769, 3.9715],
  "mayenne": [48.2985, -0.6148],
  "meaux": [48.96, 2.8883],
  "melun": [48.5406, 2.6572],
  "millau": [44.0989, 3.078],
  "montargis": [47.9982, 2.7345],
  "montauban": [44.0167, 1.3544],
  "montbrison": [45.6077, 4.0637],
  "montceau-les-mines": [46.6707, 4.3671],
  "mont-de-marsan": [43.8942, -0.5056],
  "montlucon": [46.3407, 2.6035],
  "morlaix": [48.5777, -3.8294],
  "moulins": [46.5644, 3.3344],
  "muret": [43.465, 1.3289],
  "nevers": [46.9894, 3.1572],
  "niort": [46.3237, -0.4602],
  "nogent-le-rotrou": [48.3232, 0.828],
  "oyonnax": [46.256, 5.6572],
  "perigueux": [45.1869, 0.7211],
  "pontivy": [48.0693, -2.9792],
  "privas": [44.7353, 4.5989],
  "riom": [45.894, 3.1122],
  "roanne": [46.0356, 4.0685],
  "rochefort": [45.9431, -0.9599],
  "rodez": [44.35, 2.575],
  "romans-sur-isere": [45.0432, 5.0548],
  "saint-brieuc": [48.5144, -2.7654],
  "saint-chamond": [45.4762, 4.515],
  "saint-dizier": [48.6395, 4.9494],
  "saint-malo": [48.6493, -2.0136],
  "saint-nazaire": [47.2736, -2.2133],
  "saint-quentin": [49.8465, 3.2877],
  "saintes": [45.7454, -0.6325],
  "saumur": [47.2595, -0.0784],
  "saverne": [48.7415, 7.3614],
  "sedan": [49.7027, 4.9399],
  "sens": [48.1979, 3.2878],
  "sete": [43.406, 3.6967],
  "sisteron": [44.1985, 5.9432],
  "soissons": [49.3797, 3.3236],
  "tarbes": [43.2328, 0.0781],
  "thiers": [45.8566, 3.5441],
  "thionville": [49.3574, 6.1682],
  "thonon-les-bains": [46.3709, 6.4782],
  "thouars": [46.9773, -0.2144],
  "tulle": [45.268, 1.7693],
  "ussel": [45.5474, 2.3088],
  "vannes": [47.6559, -2.7603],
  "vichy": [46.1225, 3.4269],
  "vienne": [45.5234, 4.8749],
  "villefranche-sur-saone": [45.9887, 4.7193],
  "villeneuve-sur-lot": [44.4084, 0.7052],
  "vittel": [48.2015, 5.9466],
  "aubenas": [44.6206, 4.3904],
  "aurillac": [44.9289, 2.4396],
  "bar-le-duc": [48.77, 5.1633],
  "brignoles": [43.4052, 6.0618],
  "cavaillon": [43.8361, 5.0376],
  "charleville-mezieres": [49.7725, 4.7156],
  "chaumont": [48.1108, 5.1397],
  "corbeil-essonnes": [48.6112, 2.4809],
  "creil": [49.2601, 2.4841],
  "figeac": [44.6093, 2.0316],
  "fontenay-le-comte": [46.4664, -0.8066],
  "forbach": [49.1888, 6.9001],
  "langres": [47.8635, 5.333],
  "montbeliard": [47.5099, 6.7989],
  "montelimar": [44.5565, 4.7508],
  "verdun": [49.1598, 5.3824],
  "vesoul": [47.621, 6.1558],
  "vierzon": [47.2228, 2.0692],
  "argenteuil": [48.9472, 2.2467],
  "noisy-le-grand": [48.846, 2.5537],
  "flers": [48.7488, -0.5713],
  "issoire": [45.5449, 3.249],
  "libourne": [44.9192, -0.2397],
  "mende": [44.5186, 3.5006],
  "pamiers": [43.1168, 1.6099],
  "parthenay": [46.6489, -0.2484],
  "pontoise": [49.0505, 2.0985],
  "saint-omer": [50.7487, 2.2574],
  "sarreguemines": [49.1127, 7.0668],
  "vitry-sur-seine": [48.7873, 2.3929],
  "fougeres": [48.3523, -1.199],
  "lunel": [43.6757, 4.1366],
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

    L.tileLayer("https://api.maptiler.com/maps/positron/{z}/{x}/{y}.png?key=Aj9OBlVKGPscYMGEmxo0", {
      maxZoom: 20,
      tileSize: 512,
      zoomOffset: -1,
      attribution: '© <a href="https://www.maptiler.com/">MapTiler</a> © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
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
