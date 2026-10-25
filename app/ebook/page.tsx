import type { Metadata } from "next";
import Link from "next/link";
import { EbookForm } from "@/components/ui/EbookLeadMagnet";

export const metadata: Metadata = {
  title: "Ebook gratuit — De 0 à 34 boxes en 5 ans",
  description:
    "Téléchargez gratuitement le retour d'expérience d'un investisseur ayant constitué un parc de 34 boxes et garages locatifs en 5 ans. Méthode, sélection, gestion et enseignements.",
  alternates: { canonical: "https://observatoire-du-stockage.fr/ebook" },
};

const chapitres = [
  {
    numero: "01",
    titre: "Pourquoi le stockage ?",
    resume:
      "Le contexte personnel et les critères qui ont orienté le choix vers les espaces de stockage plutôt que vers d'autres types d'actifs.",
  },
  {
    numero: "02",
    titre: "Les premières acquisitions",
    resume:
      "Comment ont été trouvés et évalués les premiers biens, les erreurs commises et ce qui aurait pu être fait différemment dès le départ.",
  },
  {
    numero: "03",
    titre: "Structurer son approche d'acquisition",
    resume:
      "Les critères de sélection affinés au fil du temps, la méthode d'analyse appliquée à chaque opportunité, les signaux d'alerte.",
  },
  {
    numero: "04",
    titre: "La gestion quotidienne à l'échelle",
    resume:
      "Ce que change concrètement la gestion de plusieurs dizaines d'unités : organisation, suivi des baux, relations locataires, imprévus.",
  },
  {
    numero: "05",
    titre: "Les arbitrages et les enseignements",
    resume:
      "Quels biens ont été revendus, pourquoi, et ce que ces décisions ont appris sur la constitution d'un parc sur le long terme.",
  },
];

export default function EbookPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white border-b border-slate-100 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                <Link href="/" className="hover:text-slate-700 transition-colors">Accueil</Link>
                <svg className="w-3 h-3 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-slate-400">Ebook gratuit</span>
              </nav>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-5">
                Ebook gratuit
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e] leading-tight mb-4">
                De 0 à 34 boxes en 5 ans
              </h1>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
                Un retour d'expérience documenté sur la constitution progressive d'un parc de boxes et garages locatifs. Pas un guide théorique — une expérience réelle, avec ses choix, ses erreurs et ses arbitrages.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                <p className="text-xs text-amber-800 leading-relaxed">
                  <strong>Note éditoriale :</strong> cet ebook est un retour d'expérience personnel, pas un modèle reproductible à l'identique. Les résultats obtenus reflètent un contexte particulier, une époque spécifique et des décisions individuelles. Aucune des situations décrites ne constitue une garantie de résultat comparable.
                </p>
              </div>

              <div className="bg-[#f8f9fa] rounded-2xl border border-slate-100 p-6">
                <h2 className="text-[#1a1a2e] font-bold text-base mb-1">
                  Recevoir l'ebook gratuitement
                </h2>
                <p className="text-sm text-slate-500 mb-4">
                  Entrez votre adresse email pour accéder au téléchargement.
                </p>
                <EbookForm
                  inputClass="flex-1 text-sm px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                  buttonClass="shrink-0 text-sm font-semibold bg-[#1e3a5f] text-white px-6 py-3 rounded-xl hover:bg-[#162d4a] transition-colors whitespace-nowrap"
                  successClass="flex items-start gap-2 bg-green-50 border border-green-200 rounded-xl p-4"
                />
                <p className="text-xs text-slate-400 mt-3">
                  Sans spam. Désabonnement à tout moment. Données non transmises à des tiers.
                </p>
              </div>
            </div>

            {/* Couverture visuelle */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="w-64 h-88 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a9e] rounded-3xl shadow-2xl border border-white/5 flex flex-col justify-between p-8" style={{ height: "352px" }}>
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                      <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Ebook</p>
                    <h3 className="text-white font-bold text-xl leading-snug">
                      De 0 à 34 boxes<br />en 5 ans
                    </h3>
                  </div>
                  <div>
                    <div className="w-12 h-0.5 bg-white/20 mb-4" />
                    <p className="text-white/50 text-xs">Observatoire du Stockage</p>
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 w-64 rounded-3xl bg-white/5 border border-white/5 -z-10" style={{ height: "352px" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ce que contient l'ebook */}
      <section className="bg-[#f8f9fa] py-14 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Contenu
            </span>
            <h2 className="mt-4 text-2xl md:text-3xl font-bold text-[#1a1a2e]">
              Ce que vous trouverez dans cet ebook
            </h2>
          </div>
          <div className="space-y-4">
            {chapitres.map((c) => (
              <div key={c.numero} className="bg-white rounded-xl border border-slate-100 shadow-sm p-5 flex items-start gap-5">
                <span className="shrink-0 text-2xl font-bold text-slate-200 font-mono w-10 text-right">
                  {c.numero}
                </span>
                <div className="border-l border-slate-100 pl-5">
                  <h3 className="font-bold text-[#1a1a2e] text-sm mb-1">{c.titre}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{c.resume}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À propos de l'auteur */}
      <section className="bg-white py-14 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              Auteur
            </span>
            <h2 className="mt-4 text-xl md:text-2xl font-bold text-[#1a1a2e]">
              Un retour d'expérience, pas un cours magistral
            </h2>
          </div>
          <div className="bg-[#f8f9fa] rounded-2xl border border-slate-100 p-6 md:p-8">
            <div className="flex items-start gap-5">
              <div className="shrink-0 w-12 h-12 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white font-bold text-lg">
                F
              </div>
              <div>
                <p className="font-bold text-[#1a1a2e] text-sm mb-0.5">Florent M.</p>
                <p className="text-xs text-slate-500 mb-3">Investisseur en espaces de stockage, contributeur de l'Observatoire du Stockage</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Cet ebook n'est pas écrit par un formateur ou un consultant. Il relate un parcours d'investissement personnel — avec ses décisions prises sans filet, ses bons choix, ses erreurs et ce que cinq années de constitution d'un parc de stockage ont réellement appris. Il a pour vocation de documenter une expérience concrète, pas de la promouvoir comme modèle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[#1a1a2e] py-14 md:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Accéder à l'ebook gratuitement
          </h2>
          <p className="text-blue-100 text-base leading-relaxed mb-8">
            Entrez votre adresse email pour recevoir le lien de téléchargement.
          </p>
          <div className="max-w-md mx-auto">
            <EbookForm
              inputClass="flex-1 text-sm px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
              buttonClass="shrink-0 text-sm font-semibold bg-white text-[#1e3a5f] px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap"
              successClass="flex items-start gap-2 bg-green-900/30 border border-green-400/30 rounded-xl p-4"
            />
            <p className="text-xs text-blue-400 mt-3">
              Sans spam. Désabonnement à tout moment. Données non transmises à des tiers.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-white border-t border-slate-100 py-10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-slate-500 leading-relaxed">
            En vous inscrivant, vous acceptez de recevoir des communications de l'Observatoire du Stockage. Désabonnement possible à tout moment. Vos données ne sont pas transmises à des tiers. Les contenus de cet ebook sont à titre informatif et ne constituent pas un conseil en investissement.
          </p>
        </div>
      </section>
    </>
  );
}
