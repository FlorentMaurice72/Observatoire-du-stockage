import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et traitement des données personnelles de l'Observatoire du Stockage.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="bg-white py-12 md:py-16 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Confidentialité</span>
        <h1 className="mt-3 text-3xl font-bold text-[#1a1a2e] mb-8">Politique de confidentialité</h1>

        <div className="prose-article space-y-8">
          <section>
            <h2 className="text-lg font-bold text-[#1a1a2e] mb-3">Collecte de données personnelles</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              L'Observatoire du Stockage collecte des données personnelles dans les cas suivants :
            </p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600 list-disc list-inside">
              <li>Inscription à la newsletter (adresse email)</li>
              <li>Utilisation du formulaire de contact (nom, email, message)</li>
              <li>Données de navigation anonymisées à des fins statistiques</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a1a2e] mb-3">Finalités du traitement</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Les données collectées sont utilisées uniquement dans les finalités suivantes : envoi de la newsletter, réponse aux demandes de contact, amélioration des contenus via des statistiques de consultation anonymisées.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a1a2e] mb-3">Conservation des données</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Les données sont conservées pour la durée nécessaire à leur finalité. Les adresses email liées à la newsletter sont conservées jusqu'au désabonnement. Les données de contact sont supprimées après traitement de la demande.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a1a2e] mb-3">Partage des données</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Les données personnelles collectées ne sont pas vendues ni transmises à des tiers à des fins commerciales. Elles peuvent être partagées avec des prestataires techniques nécessaires au fonctionnement du service (hébergeur, outil d'envoi de newsletter), dans le respect du RGPD.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a1a2e] mb-3">Vos droits</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données. Pour exercer ces droits, contactez-nous à l'adresse indiquée dans les mentions légales.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1a1a2e] mb-3">Cookies</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Ce site peut utiliser des cookies techniques nécessaires à son fonctionnement et des cookies analytiques anonymisés. Aucun cookie publicitaire ou de traçage tiers n'est utilisé à ce stade.
            </p>
          </section>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-500">
            Cette politique de confidentialité est un document placeholder à compléter et à adapter à la réalité des traitements de données effectués. Consultez un professionnel du droit (DPO ou avocat spécialisé) pour vous assurer de la conformité RGPD de votre site.
          </div>
        </div>
      </div>
    </section>
  );
}
