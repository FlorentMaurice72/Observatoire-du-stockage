"use client";

import { useState } from "react";
import Link from "next/link";

type AnnotationType = "info" | "vigilance" | "legal" | "conseil";

interface Clause {
  id: string;
  numero: string;
  titre: string;
  texte: string;
  annotation: {
    type: AnnotationType;
    contenu: string;
  };
}

const clauses: Clause[] = [
  {
    id: "parties",
    numero: "Article 1",
    titre: "Identification des parties",
    texte: `Entre les soussignés :

Le bailleur : [Nom, Prénom / Dénomination sociale], demeurant / dont le siège social est sis [adresse complète], ci-après désigné « le Bailleur »,

Et :

Le locataire : [Nom, Prénom / Dénomination sociale], demeurant / dont le siège social est sis [adresse complète], ci-après désigné « le Locataire »,

Il a été convenu ce qui suit :`,
    annotation: {
      type: "conseil",
      contenu: "Indiquez l'identité complète des deux parties. Pour une société locataire, précisez le numéro SIRET et le nom du représentant légal. Pour un bailleur personne morale (SCI, etc.), indiquez la forme juridique, le capital et le numéro d'immatriculation.",
    },
  },
  {
    id: "objet",
    numero: "Article 2",
    titre: "Objet du contrat",
    texte: `Le Bailleur loue au Locataire, qui accepte, le bien désigné ci-après :

Nature du bien : [espace de stockage / garage / box] situé [adresse précise], [bâtiment / niveau / numéro de lot : ___], d'une superficie approximative de [___] m².

Le bien est loué à usage exclusif de stockage de biens mobiliers appartenant au Locataire. Tout autre usage est strictement interdit sauf accord écrit préalable du Bailleur.`,
    annotation: {
      type: "vigilance",
      contenu: "La désignation précise du bien est essentielle : adresse complète, numéro de lot cadastral si possible, superficie. L'usage exclusif de stockage doit être clairement stipulé — cela exclut notamment toute activité commerciale ou artisanale, qui relèverait d'un bail commercial (art. L. 145-1 du Code de commerce).",
    },
  },
  {
    id: "duree",
    numero: "Article 3",
    titre: "Durée",
    texte: `Le présent contrat est conclu pour une durée de [un an / durée libre] à compter du [date de prise d'effet], soit jusqu'au [date d'échéance].

À l'échéance, le contrat se renouvelle tacitement par période de [un mois / un an] sauf congé donné par l'une ou l'autre des parties dans les conditions prévues à l'article 9.`,
    annotation: {
      type: "info",
      contenu: "Le bail d'un espace de stockage n'est pas soumis à une durée minimale légale (contrairement au bail d'habitation). Les parties peuvent librement fixer la durée. Un contrat à durée indéterminée ou avec reconduction tacite mensuelle est courant. La durée influe sur le préavis applicable.",
    },
  },
  {
    id: "loyer",
    numero: "Article 4",
    titre: "Loyer et modalités de paiement",
    texte: `Le loyer mensuel est fixé à [___] euros (___  €) toutes charges comprises / hors charges (rayer la mention inutile).

Le loyer est payable [d'avance / à terme échu] le [jour] de chaque mois, par [virement bancaire / prélèvement / chèque] au profit du Bailleur.

En cas de retard de paiement, des intérêts de retard au taux légal pourront être appliqués à compter du [nombre] jour suivant la date d'exigibilité.`,
    annotation: {
      type: "conseil",
      contenu: "Précisez clairement si le loyer est toutes charges comprises ou hors charges, et listez dans ce dernier cas les charges refacturées. Évitez les formulations ambiguës. Le mode de paiement par virement est préférable : il laisse une trace systématique. L'application des intérêts de retard au taux légal est valide sans clause pénale spécifique (art. 1231-6 du Code civil).",
    },
  },
  {
    id: "revision",
    numero: "Article 5",
    titre: "Révision du loyer",
    texte: `Le loyer est révisable annuellement à la date anniversaire du contrat. La révision est calculée en fonction de la variation de l'Indice des Loyers Commerciaux (ILC) ou de l'Indice des Loyers des Activités Tertiaires (ILAT) publié par l'INSEE, selon la nature de l'usage.

À défaut de notification par le Bailleur dans un délai de [trois mois] suivant la date d'anniversaire, la révision pour l'année écoulée est réputée abandonnée.`,
    annotation: {
      type: "legal",
      contenu: "Pour un espace de stockage loué à un particulier (droit commun), aucune indexation n'est obligatoire. Les parties peuvent néanmoins librement convenir d'une clause d'indexation. L'ILC et l'ILAT s'appliquent davantage aux baux commerciaux. Pour un bail civil, l'Indice des Prix à la Consommation (IPC) peut également être utilisé. Consultez un professionnel pour choisir l'indice adapté.",
    },
  },
  {
    id: "depot",
    numero: "Article 6",
    titre: "Dépôt de garantie",
    texte: `À la signature du présent contrat, le Locataire verse au Bailleur un dépôt de garantie d'un montant de [___] euros (___  €), correspondant à [un / deux] mois de loyer.

Ce dépôt de garantie est restitué au Locataire dans un délai de [un mois] suivant la restitution des clés, déduction faite, le cas échéant, des sommes dues au Bailleur au titre du présent contrat ou des dégradations constatées à l'état des lieux de sortie.`,
    annotation: {
      type: "vigilance",
      contenu: "Le dépôt de garantie n'est pas réglementé pour ce type de bail (contrairement au bail d'habitation). Le montant est librement fixé. Documenter précisément sa réception et sa restitution est essentiel pour éviter tout litige. Le délai de restitution et les conditions de déduction doivent être explicitement précisés dans le contrat.",
    },
  },
  {
    id: "etat-des-lieux",
    numero: "Article 7",
    titre: "État des lieux",
    texte: `Un état des lieux contradictoire est établi à l'entrée du Locataire dans les lieux, signé par les deux parties. Un état des lieux de sortie est établi dans les mêmes conditions lors de la restitution des clés.

À défaut d'état des lieux d'entrée, le Locataire est présumé avoir reçu le bien en bon état (art. 1731 du Code civil).`,
    annotation: {
      type: "vigilance",
      contenu: "L'état des lieux d'entrée est une protection essentielle pour les deux parties. En l'absence d'état des lieux, la présomption légale de bon état pèse sur le locataire (art. 1731 du Code civil). Documentez l'état du sol, des murs, de la porte, des serrures, de tout équipement. Photos datées recommandées. Un état des lieux non signé ou établi unilatéralement a une valeur probatoire limitée.",
    },
  },
  {
    id: "obligations-bailleur",
    numero: "Article 8",
    titre: "Obligations du Bailleur",
    texte: `Le Bailleur s'oblige à :
– Délivrer le bien en bon état d'usage et de réparation ;
– Assurer au Locataire la jouissance paisible du bien pendant toute la durée du contrat ;
– Prendre en charge les réparations importantes relevant du gros œuvre (structure, toiture, étanchéité) sauf si elles résultent d'un défaut d'entretien ou d'une faute du Locataire ;
– Maintenir en état de fonctionnement les accès communs (portail, voie de circulation) sauf dispositions contraires liées à la copropriété.`,
    annotation: {
      type: "legal",
      contenu: "Ces obligations découlent des articles 1719 et 1720 du Code civil (obligation de délivrance et garantie d'éviction). Le Bailleur reste responsable des vices cachés et des défauts rendant le bien impropre à l'usage. Dans le cadre d'une copropriété, certaines obligations d'entretien des parties communes relèvent du syndicat — précisez-le dans le contrat.",
    },
  },
  {
    id: "obligations-locataire",
    numero: "Article 9",
    titre: "Obligations du Locataire",
    texte: `Le Locataire s'oblige à :
– Utiliser le bien exclusivement pour l'usage convenu à l'article 2 ;
– Payer le loyer aux termes convenus ;
– Entretenir le bien et le restituer en bon état ;
– Ne pas sous-louer ni céder le présent contrat sans accord écrit préalable du Bailleur ;
– Ne pas stocker de matières dangereuses, inflammables ou illicites ;
– Souscrire une assurance couvrant les biens stockés et la responsabilité civile vis-à-vis du Bailleur et des tiers ;
– Informer le Bailleur de tout sinistre ou désordre affectant le bien dans les plus brefs délais.`,
    annotation: {
      type: "conseil",
      contenu: "L'interdiction des matières dangereuses est une clause de sécurité importante — sa violation peut engager la responsabilité du locataire en cas de sinistre. L'obligation d'assurance du locataire doit être précisée : demandez-lui une attestation à l'entrée et annuellement. L'interdiction de sous-location sans accord protège le bailleur contre des occupants qu'il n'a pas sélectionnés.",
    },
  },
  {
    id: "resiliation",
    numero: "Article 10",
    titre: "Résiliation et congé",
    texte: `Chacune des parties peut mettre fin au présent contrat en respectant un préavis de [un mois] pour le Locataire et de [trois mois] pour le Bailleur, notifié par lettre recommandée avec accusé de réception ou par acte extrajudiciaire.

En cas de manquement grave du Locataire (non-paiement du loyer, usage non conforme, troubles de jouissance), le Bailleur pourra faire constater la résiliation du plein droit après mise en demeure restée sans effet pendant [huit jours].`,
    annotation: {
      type: "vigilance",
      contenu: "Le préavis est librement fixé. Un préavis plus long protège le bailleur contre les départs inopinés, mais peut dissuader les locataires de signer. La clause résolutoire de plein droit (art. 1225 du Code civil) permet une résiliation sans recours judiciaire en cas de manquement grave, à condition d'être clairement stipulée. Son application pratique reste soumise au respect de la procédure de mise en demeure.",
    },
  },
  {
    id: "divers",
    numero: "Article 11",
    titre: "Dispositions diverses",
    texte: `Le présent contrat est soumis au droit commun des obligations tel que prévu par le Code civil.

Pour tout litige relatif à l'exécution ou à l'interprétation du présent contrat, les parties conviennent d'une tentative de résolution amiable préalable. À défaut, compétence est attribuée au tribunal judiciaire du lieu de situation de l'immeuble.

Fait en deux exemplaires originaux, à [ville], le [date].

Signature du Bailleur :                    Signature du Locataire :`,
    annotation: {
      type: "legal",
      contenu: "La clause attributive de compétence est recommandée pour éviter toute ambiguïté sur le tribunal compétent. Le tribunal judiciaire est compétent pour les litiges locatifs relevant du droit commun. Depuis la réforme de 2019, la tentative de médiation ou de conciliation préalable est généralement requise avant toute saisine du tribunal (art. 750-1 du Code de procédure civile pour les demandes inférieures à 5 000 €).",
    },
  },
];

const annotationConfig: Record<AnnotationType, { label: string; bg: string; border: string; text: string; dot: string }> = {
  info:      { label: "Information",  bg: "bg-blue-50",   border: "border-blue-100",  text: "text-blue-800",  dot: "bg-blue-400" },
  vigilance: { label: "Vigilance",    bg: "bg-amber-50",  border: "border-amber-100", text: "text-amber-800", dot: "bg-amber-400" },
  legal:     { label: "Référence légale", bg: "bg-slate-50", border: "border-slate-200", text: "text-slate-700", dot: "bg-slate-400" },
  conseil:   { label: "Conseil pratique", bg: "bg-green-50", border: "border-green-100", text: "text-green-800", dot: "bg-green-400" },
};

function ClauseCard({ clause, showAnnotations }: { clause: Clause; showAnnotations: boolean }) {
  const cfg = annotationConfig[clause.annotation.type];
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="bg-[#f8f9fa] border-b border-slate-100 px-6 py-3 flex items-center gap-3">
        <span className="text-xs font-mono font-semibold text-[#1e3a5f] bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">{clause.numero}</span>
        <h2 className="font-bold text-[#1a1a2e] text-sm">{clause.titre}</h2>
      </div>
      <div className="p-6">
        <pre className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-sans bg-[#fafafa] border border-slate-100 rounded-xl p-4">
          {clause.texte}
        </pre>
        {showAnnotations && (
          <div className={`mt-4 rounded-xl border p-4 ${cfg.bg} ${cfg.border}`}>
            <div className="flex items-center gap-2 mb-2">
              <span className={`w-2 h-2 rounded-full shrink-0 ${cfg.dot}`} />
              <span className={`text-xs font-semibold uppercase tracking-wide ${cfg.text}`}>{cfg.label}</span>
            </div>
            <p className={`text-xs leading-relaxed ${cfg.text}`}>{clause.annotation.contenu}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ModeleContratPage() {
  const [showAnnotations, setShowAnnotations] = useState(true);

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
            <span className="text-slate-400">Modèle de contrat commenté</span>
          </nav>

          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-green-700 bg-green-50 border border-green-100 px-3 py-1 rounded-full mb-5">
            Outil gratuit
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] leading-tight mb-3">
            Modèle de contrat de location d'un espace de stockage — annoté
          </h1>
          <p className="text-slate-600 leading-relaxed mb-6">
            Une trame de contrat de droit commun pour la location d'un garage, d'un box ou d'un espace de stockage à un particulier, avec des annotations sur les clauses essentielles et les points de vigilance pratiques.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-2">
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>Avertissement important :</strong> ce modèle est fourni à titre indicatif et pédagogique uniquement. Il ne constitue pas un conseil juridique et ne saurait remplacer l'accompagnement d'un professionnel du droit (avocat, notaire). Chaque situation locative est spécifique. Adaptez ce document à votre contexte avec l'aide d'un professionnel avant toute utilisation.
            </p>
          </div>
        </div>
      </section>

      {/* Contrôles */}
      <div className="bg-white border-b border-slate-100 py-3 sticky top-0 z-10 shadow-sm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-600 font-medium">{clauses.length} clauses</span>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                {(["conseil", "vigilance", "legal", "info"] as AnnotationType[]).map((t) => (
                  <span key={t} className="flex items-center gap-1">
                    <span className={`w-2 h-2 rounded-full ${annotationConfig[t].dot}`} />
                    {annotationConfig[t].label}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => setShowAnnotations(!showAnnotations)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
                showAnnotations
                  ? "bg-[#1e3a5f] text-white border-[#1e3a5f]"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
              }`}
            >
              {showAnnotations ? "Masquer les annotations" : "Afficher les annotations"}
            </button>
          </div>
        </div>
      </div>

      {/* Clauses */}
      <div className="bg-[#f8f9fa] py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-5">
          {clauses.map((clause) => (
            <ClauseCard key={clause.id} clause={clause} showAnnotations={showAnnotations} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <section className="bg-white border-t border-slate-100 py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-slate-500 leading-relaxed mb-6">
            Ce modèle couvre les clauses essentielles d'un bail civil pour un espace de stockage. Il ne couvre pas les situations relevant d'un bail commercial (locataire commerçant affectant le local à son activité), d'un bail mixte, ou d'une location à un professionnel dans le cadre d'une activité réglementée. Consultez un professionnel qualifié pour toute situation spécifique.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/analyses/bail-location-espace-stockage"
              className="inline-flex items-center gap-2 bg-[#1e3a5f] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:bg-[#162d4a] transition-colors"
            >
              Lire le guide sur le bail de stockage
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
