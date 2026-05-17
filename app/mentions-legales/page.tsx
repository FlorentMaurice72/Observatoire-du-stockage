import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de l'Observatoire du Stockage.",
};

export default function MentionsLegalesPage() {
  return (
    <section className="bg-white py-12 md:py-16 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Mentions légales</span>
        <h1 className="mt-3 text-3xl font-bold text-[#1a1a2e] mb-8">Mentions légales</h1>

        <div className="prose-article space-y-8">
          <section>
            <h2 className="text-lg font-bold text-[#1a1a2e] mb-3">Éditeur du site</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Le site Observatoire du Stockage est édité par [Nom ou raison sociale à compléter].<br />
              Adresse : [À compléter]<br />
              Email : [À compléter]<br />
              Numéro SIRET : [À compléter si applicable]
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a1a2e] mb-3">Directeur de la publication</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              [Nom du directeur de publication à compléter]
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a1a2e] mb-3">Hébergement</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 900, San Francisco, CA 94104, États-Unis.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a1a2e] mb-3">Propriété intellectuelle</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              L'ensemble des contenus publiés sur ce site (textes, analyses, structures éditoriales) sont la propriété de l'éditeur, sauf mention contraire. Toute reproduction, même partielle, est soumise à autorisation préalable.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a1a2e] mb-3">Limitation de responsabilité</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Les informations publiées sur ce site sont fournies à titre informatif et éducatif uniquement. Elles ne constituent pas des conseils en investissement, juridiques, fiscaux ou comptables. L'éditeur ne garantit pas l'exactitude, l'exhaustivité ou l'actualité des informations publiées. Toute décision prise sur la base de ces informations relève de la seule responsabilité du lecteur.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a1a2e] mb-3">Liens externes</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Ce site peut contenir des liens vers des sites tiers. L'éditeur décline toute responsabilité quant au contenu de ces sites externes.
            </p>
          </section>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-500">
            Ces mentions légales sont un placeholder à compléter avec les informations propres à l'entité éditrice. Consultez un professionnel du droit pour vous assurer de la conformité de vos mentions légales.
          </div>
        </div>
      </div>
    </section>
  );
}
