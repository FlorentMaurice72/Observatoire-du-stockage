import type { Metadata } from "next";
import Link from "next/link";
import CarteWrapper from "@/components/ui/CarteWrapper";
import { villes } from "@/lib/villes";

export const metadata: Metadata = {
  title: "Carte interactive des analyses locales — marchés du stockage en France",
  alternates: { canonical: "https://observatoire-du-stockage.fr/outils/carte-analyses-locales" },
  description:
    "Explorez les marchés du stockage par ville et département sur une carte interactive. Indicateurs de demande locative, fourchettes de prix et accès aux analyses détaillées.",
};

export default function CarteAnalysesLocalesPage() {
  const stats = {
    total: villes.length,
    forte: villes.filter((v) => v.demande.niveau === "forte").length,
    moderee: villes.filter((v) => v.demande.niveau === "moderee").length,
    faible: villes.filter((v) => v.demande.niveau === "faible").length,
  };

  return (
    <>
      {/* Header compact */}
      <section className="bg-white border-b border-slate-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <nav className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                <Link href="/" className="hover:text-slate-600">Accueil</Link>
                <span>›</span>
                <Link href="/outils" className="hover:text-slate-600">Outils</Link>
                <span>›</span>
                <span className="text-slate-600">Carte interactive</span>
              </nav>
              <h1 className="text-xl font-bold text-[#1a1a2e]">Carte des analyses locales</h1>
              <p className="text-sm text-slate-500 mt-0.5">
                {stats.total} marchés analysés · {stats.forte} demande forte · {stats.moderee} modérée · {stats.faible} faible
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/marche"
                className="text-xs font-semibold text-blue-700 border border-blue-200 bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors"
              >
                Vue liste →
              </Link>
              <Link
                href="/outils/calculateur-rentabilite"
                className="text-xs font-semibold text-white bg-[#1e3a5f] px-3 py-1.5 rounded-lg hover:bg-[#162d4a] transition-colors"
              >
                Calculateur de rentabilité →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Carte plein écran */}
      <CarteWrapper villes={villes} />

      {/* Note méthodologique */}
      <section className="bg-white border-t border-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Méthodologie</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Les niveaux de demande sont établis à partir d'observations du marché locatif local, d'annonces disponibles et de données publiques. Ils sont indicatifs et ne constituent pas une étude de marché certifiée.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Couverture</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                L'Observatoire couvre actuellement {stats.total} villes françaises. La couverture est étendue progressivement en priorité sur les grandes agglomérations et les préfectures.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-2">Mise à jour</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Les analyses locales sont révisées périodiquement. Vérifiez toujours les conditions du marché local directement avant toute décision d'investissement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
