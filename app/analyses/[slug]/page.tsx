import type { Metadata } from "next";
import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getArticleBySlug, getRelatedArticles, formatDate, articles } from "@/lib/articles";
import CategoryBadge from "@/components/ui/CategoryBadge";
import CalloutBox from "@/components/ui/CalloutBox";
import TableOfContents from "@/components/ui/TableOfContents";
import ArticleCard from "@/components/ui/ArticleCard";
import NewsletterBlock from "@/components/ui/NewsletterBlock";
import EbookLeadMagnet from "@/components/ui/EbookLeadMagnet";

const BASE_URL = "https://observatoire-du-stockage.fr";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `${BASE_URL}/analyses/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      section: article.category,
    },
  };
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

// ── Article content ────────────────────────────────────────────────────────────

const dueDiligenceContent = () => (
  <div className="prose-article">
    <p className="text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
      Acquérir un lot de garages sans avoir conduit une vérification approfondie, c'est prendre le risque de découvrir après la signature des problèmes qui auraient dû conditionner le prix, voire faire renoncer à l'opération. La due diligence n'est pas une formalité : c'est un processus d'investigation méthodique.
    </p>

    <div className="my-8 bg-[#f8f9fa] rounded-xl border border-slate-100 p-6 flex items-center justify-center">
      <svg width="100%" height="180" viewBox="0 0 600 180" className="max-w-lg">
        <rect x="60" y="20" width="160" height="140" rx="8" fill="#e8eef5" stroke="#1e3a5f" strokeWidth="1.5"/>
        <rect x="80" y="45" width="120" height="10" rx="3" fill="#1e3a5f" opacity="0.3"/>
        <rect x="80" y="65" width="100" height="8" rx="3" fill="#1e3a5f" opacity="0.2"/>
        <rect x="80" y="83" width="110" height="8" rx="3" fill="#1e3a5f" opacity="0.2"/>
        <rect x="80" y="101" width="90" height="8" rx="3" fill="#1e3a5f" opacity="0.2"/>
        <rect x="80" y="119" width="105" height="8" rx="3" fill="#1e3a5f" opacity="0.2"/>
        <circle cx="75" cy="49" r="4" fill="none" stroke="#1e3a5f" strokeWidth="1.5"/>
        <path d="M73 49l2 2 4-4" stroke="#22c55e" strokeWidth="1.5" fill="none"/>
        <circle cx="75" cy="69" r="4" fill="none" stroke="#1e3a5f" strokeWidth="1.5"/>
        <path d="M73 69l2 2 4-4" stroke="#22c55e" strokeWidth="1.5" fill="none"/>
        <circle cx="75" cy="87" r="4" fill="none" stroke="#1e3a5f" strokeWidth="1.5"/>
        <circle cx="75" cy="105" r="4" fill="none" stroke="#f59e0b" strokeWidth="1.5"/>
        <circle cx="75" cy="123" r="4" fill="none" stroke="#1e3a5f" strokeWidth="1.5"/>
        <rect x="310" y="20" width="230" height="140" rx="8" fill="none" stroke="#e2e8f0" strokeWidth="1.5"/>
        <text x="425" y="48" textAnchor="middle" fontSize="11" fill="#64748b" fontFamily="sans-serif">Étapes clés</text>
        <rect x="330" y="60" width="90" height="24" rx="4" fill="#1e3a5f" opacity="0.15"/>
        <text x="375" y="77" textAnchor="middle" fontSize="10" fill="#1e3a5f" fontFamily="sans-serif">Bâti</text>
        <rect x="430" y="60" width="90" height="24" rx="4" fill="#1e3a5f" opacity="0.15"/>
        <text x="475" y="77" textAnchor="middle" fontSize="10" fill="#1e3a5f" fontFamily="sans-serif">Locatif</text>
        <rect x="330" y="95" width="90" height="24" rx="4" fill="#1e3a5f" opacity="0.1"/>
        <text x="375" y="112" textAnchor="middle" fontSize="10" fill="#1e3a5f" fontFamily="sans-serif">Copropriété</text>
        <rect x="430" y="95" width="90" height="24" rx="4" fill="#1e3a5f" opacity="0.1"/>
        <text x="475" y="112" textAnchor="middle" fontSize="10" fill="#1e3a5f" fontFamily="sans-serif">Juridique</text>
        <rect x="330" y="130" width="190" height="24" rx="4" fill="#1e3a5f" opacity="0.08"/>
        <text x="425" y="147" textAnchor="middle" fontSize="10" fill="#1e3a5f" fontFamily="sans-serif">Analyse financière</text>
      </svg>
    </div>

    <h2 id="etat-du-bati">1. L'état du bâti et des équipements</h2>
    <p>
      Le premier axe d'investigation concerne l'état physique du bien. Un lot de garages peut présenter des dégradations qui ne sont pas visibles à l'œil nu lors d'une visite rapide, ou qui n'apparaissent pas dans les documents transmis par le vendeur.
    </p>
    <p>
      Les points à inspecter systématiquement incluent l'étanchéité de la toiture et des murs, les traces d'infiltrations ou d'humidité dans les garages eux-mêmes, l'état des portes et des mécanismes d'ouverture, la qualité du revêtement de sol, l'état des accès (portails, voies de circulation internes), et la présence éventuelle d'amiante dans les matériaux de construction pour les bâtiments construits avant juillet 1997.
    </p>
    <p>
      Pour les bâtiments plus anciens, le recours à un diagnostiqueur immobilier certifié est fortement recommandé avant la signature du compromis. Le diagnostic amiante partie commune est notamment obligatoire pour les immeubles collectifs dont le permis de construire a été délivré avant le 1er juillet 1997.
    </p>

    <CalloutBox type="vigilance">
      Une visite unique et rapide ne suffit pas à évaluer l'état d'un bâtiment. Prévoyez si possible une visite par temps de pluie pour détecter les infiltrations actives, et revenez à différents moments de la journée si l'accès et le taux d'occupation vous le permettent.
    </CalloutBox>

    <p>
      Les travaux de toiture, d'étanchéité ou de réfection des accès représentent des dépenses potentiellement significatives. Leur coût doit être intégré dans l'analyse de rentabilité dès la phase de prospection, et non découvert après la signature.
    </p>

    <h2 id="situation-locative">2. La situation locative et l'historique des loyers</h2>
    <p>
      L'état locatif d'un lot est un document central de la due diligence. Il récapitule, pour chaque unité, l'identité du locataire, le montant du loyer, la date d'entrée, les éventuels arriérés et le type de contrat en vigueur.
    </p>
    <p>
      Demandez systématiquement cet état locatif détaillé et vérifiez-le au regard des baux transmis. Les écarts entre les loyers déclarés et les loyers effectivement perçus (ou perceptibles au vu des quittances) sont un signal d'alerte. Une vacance partiellement dissimulée — des garages présentés comme loués mais dont les locataires sont sur le départ — peut significativement modifier la valeur du bien.
    </p>
    <p>
      Vérifiez également l'ancienneté des locations. Un loyer pratiqué depuis de nombreuses années sans révision peut être significativement inférieur au marché local actuel — ce qui peut représenter un potentiel de revalorisation, mais aussi un risque si les locataires anciens résistent à toute hausse.
    </p>

    <CalloutBox type="retenir">
      Demandez les trois dernières quittances de loyer et les relevés de compte bancaire correspondants. La concordance entre les montants déclarés et les montants réellement encaissés est un indicateur de fiabilité de l'état locatif.
    </CalloutBox>

    <p>
      Interrogez aussi le vendeur sur l'existence d'impayés en cours ou passés, de procédures d'expulsion, ou de litiges avec des locataires. Ces éléments doivent être déclarés et peuvent justifier une clause spécifique dans le compromis de vente.
    </p>

    <h2 id="documents-copropriete">3. Les documents de copropriété à examiner</h2>
    <p>
      Lorsque le lot de garages est soumis au régime de la copropriété — ce qui est fréquent lorsqu'il est rattaché à un immeuble résidentiel ou commercialisé au sein d'un ensemble immobilier — l'examen des documents de copropriété est indispensable.
    </p>
    <p>
      Les documents à demander et à analyser comprennent :
    </p>
    <ul>
      <li>Le règlement de copropriété et l'état descriptif de division, pour vérifier que l'usage des garages comme espaces locatifs est bien autorisé et qu'aucune clause restrictive ne pèse sur la gestion ;</li>
      <li>Les procès-verbaux des trois dernières assemblées générales, qui renseignent sur les décisions prises, les travaux votés ou envisagés, et les éventuels conflits entre copropriétaires ;</li>
      <li>Le carnet d'entretien de l'immeuble ;</li>
      <li>Les appels de charges des deux à trois dernières années, pour évaluer le niveau réel des charges de copropriété pesant sur le lot ;</li>
      <li>La situation du syndicat vis-à-vis du fonds de travaux obligatoire, instauré par la loi ALUR.</li>
    </ul>

    <CalloutBox type="legal">
      Depuis la loi ALUR de 2014, le vendeur est tenu de transmettre à l'acquéreur un certain nombre de documents de copropriété préalablement au compromis. Cette obligation est encadrée par les articles L.721-1 et suivants du Code de la construction et de l'habitation. Votre notaire vous indiquera la liste exacte des pièces obligatoires.
    </CalloutBox>

    <p>
      Une copropriété présentant un niveau d'impayés élevé, un fonds de travaux sous-doté, ou des travaux votés non encore financés est un signal de risque important. Ces situations peuvent se traduire par des appels de fonds exceptionnels à la charge du nouveau propriétaire dans les mois suivant l'acquisition.
    </p>

    <h2 id="verifications-juridiques">4. Les vérifications juridiques préalables</h2>
    <p>
      Au-delà des documents de copropriété, plusieurs vérifications juridiques méritent attention avant de s'engager.
    </p>
    <p>
      <strong>L'état hypothécaire du bien.</strong> Le notaire chargé de la vente vérifie l'absence d'hypothèques, de privilèges ou de saisies pesant sur le bien. Ne signez pas de compromis sans avoir demandé confirmation que cette vérification sera effectuée.
    </p>
    <p>
      <strong>Le titre de propriété du vendeur.</strong> Vérifiez que le vendeur est bien propriétaire du lot tel qu'il est décrit dans la promesse de vente, et que les références cadastrales correspondent bien aux garages visités.
    </p>
    <p>
      <strong>L'existence de servitudes.</strong> Certains lots de garages sont grevés de servitudes de passage ou d'accès. Ces éléments doivent apparaître dans le titre de propriété et être mentionnés dans l'acte de vente.
    </p>
    <p>
      <strong>La situation urbanistique.</strong> Vérifiez auprès du service d'urbanisme de la commune si le bien est situé dans une zone soumise à un droit de préemption urbain, ou si des projets d'aménagement à proximité sont susceptibles d'affecter la valeur du bien à moyen terme.
    </p>

    <CalloutBox type="vigilance">
      Si le lot est vendu en dehors d'une copropriété formellement constituée (garages en plein air, lot isolé), vérifiez avec précision les limites de propriété, l'accès au bien et les conditions d'entretien des parties communes éventuelles.
    </CalloutBox>

    <h2 id="analyse-financiere">5. L'analyse financière pré-acquisition</h2>
    <p>
      La due diligence financière consiste à reconstituer, à partir des données réelles transmises par le vendeur, une projection de rentabilité nette aussi fidèle que possible.
    </p>
    <p>
      Les éléments à rassembler et à vérifier incluent :
    </p>
    <ul>
      <li>Les loyers encaissés sur les douze derniers mois (pas seulement les loyers théoriques) ;</li>
      <li>Les charges de copropriété annuelles effectivement appelées, distinguant provisions sur charges courantes et appels exceptionnels ;</li>
      <li>La taxe foncière de la dernière année, disponible auprès du vendeur ou consultable au service des impôts fonciers ;</li>
      <li>Les travaux réalisés au cours des cinq dernières années et ceux qui seraient à prévoir à court terme ;</li>
      <li>Les frais de gestion éventuels si le lot est géré par un tiers.</li>
    </ul>
    <p>
      Ces éléments permettent de calculer une rentabilité nette avant fiscalité, qui est le ratio pertinent pour comparer les différentes opportunités entre elles. La rentabilité brute seule — loyers annuels divisés par le prix d'achat — ne tient pas compte des charges et masque des écarts de situation parfois très significatifs entre deux biens.
    </p>

    <CalloutBox type="retenir">
      Reconstituez vous-même le compte d'exploitation prévisionnel à partir des données vérifiées, sans vous fier aux projections présentées par le vendeur ou l'agent. Un écart entre la présentation et la réalité des flux est fréquent et justifie une renégociation du prix.
    </CalloutBox>

    <h2 id="questions-vendeur">6. Les questions à poser au vendeur</h2>
    <p>
      Indépendamment des documents, l'échange direct avec le vendeur apporte des informations qualitatives difficiles à obtenir autrement. Certaines questions méritent d'être posées explicitement :
    </p>
    <ul>
      <li>Pourquoi vendez-vous ce lot à ce moment précis ?</li>
      <li>Y a-t-il des locataires dont le départ est prévisible dans les prochains mois ?</li>
      <li>Avez-vous connaissance de travaux importants discutés en assemblée générale, même informellement ?</li>
      <li>Y a-t-il des difficultés de relations de voisinage ou des litiges avec d'autres copropriétaires ?</li>
      <li>Avez-vous fait réaliser des travaux sans autorisation de la copropriété ?</li>
      <li>Le loyer pratiqué correspond-il au marché local, ou a-t-il été maintenu à un niveau délibérément bas pour fidéliser les locataires ?</li>
    </ul>
    <p>
      Les réponses à ces questions ne lient pas juridiquement le vendeur si elles sont données oralement. Mais elles orientent l'investigation et peuvent conduire à demander des garanties spécifiques dans le compromis — notamment une clause de garantie des vices cachés ou une déclaration sur l'honneur relative à l'absence de travaux non déclarés.
    </p>

    <div className="mt-8 pt-6 border-t border-slate-100">
      <h3 className="text-sm font-bold text-slate-700 mb-3">Sources et références</h3>
      <ul className="space-y-1">
        <li className="text-xs text-slate-500">→ Service-public.fr — Copropriété : droits et obligations du copropriétaire</li>
        <li className="text-xs text-slate-500">→ Legifrance.gouv.fr — Loi n° 65-557 du 10 juillet 1965 fixant le statut de la copropriété</li>
        <li className="text-xs text-slate-500">→ Legifrance.gouv.fr — Loi ALUR (loi n° 2014-366 du 24 mars 2014), articles sur les documents précontractuels</li>
        <li className="text-xs text-slate-500">→ Notaires.fr — Informations sur l'acquisition d'un bien immobilier et les obligations du vendeur</li>
        <li className="text-xs text-slate-500">→ Service-public.fr — Diagnostic amiante : obligations selon la date de construction</li>
      </ul>
    </div>

    <CalloutBox type="retenir" title="Ce qu'il faut retenir">
      Une due diligence sérieuse ne se substitue pas à l'intervention d'un notaire, d'un diagnostiqueur et, si nécessaire, d'un expert en bâtiment. Elle permet au futur acquéreur d'aborder ces étapes avec les bonnes questions, de vérifier la cohérence des informations transmises, et d'anticiper les éléments de négociation ou les conditions suspensives à intégrer dans le compromis.
    </CalloutBox>
  </div>
);

const rentabiliteBruteNetteContent = () => (
  <div className="prose-article">
    <p className="text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
      Le taux de rentabilité brute est un indicateur de premier tri. Il permet de comparer rapidement plusieurs opportunités entre elles. Mais il ne reflète pas ce qu'un investisseur percevra réellement, une fois les charges payées et l'impôt acquitté.
    </p>

    <div className="my-8 bg-[#f8f9fa] rounded-xl border border-slate-100 p-6 flex items-center justify-center">
      <svg width="100%" height="180" viewBox="0 0 600 180" className="max-w-lg">
        <line x1="60" y1="150" x2="540" y2="150" stroke="#e2e8f0" strokeWidth="1.5"/>
        <line x1="60" y1="20" x2="60" y2="150" stroke="#e2e8f0" strokeWidth="1.5"/>
        <rect x="100" y="50" width="80" height="100" rx="4" fill="#1e3a5f" opacity="0.7"/>
        <text x="140" y="44" textAnchor="middle" fontSize="11" fill="#1e3a5f" fontFamily="sans-serif" fontWeight="600">Brut</text>
        <rect x="220" y="80" width="80" height="70" rx="4" fill="#3b82f6" opacity="0.6"/>
        <text x="260" y="74" textAnchor="middle" fontSize="11" fill="#3b82f6" fontFamily="sans-serif" fontWeight="600">Net charges</text>
        <rect x="340" y="100" width="80" height="50" rx="4" fill="#22c55e" opacity="0.6"/>
        <text x="380" y="94" textAnchor="middle" fontSize="11" fill="#166534" fontFamily="sans-serif" fontWeight="600">Net fiscal</text>
        <text x="450" y="155" fontSize="10" fill="#94a3b8" fontFamily="sans-serif">Loyers</text>
        <line x1="100" y1="50" x2="540" y2="50" stroke="#1e3a5f" strokeWidth="0.5" strokeDasharray="4,4"/>
        <text x="545" y="53" fontSize="9" fill="#1e3a5f" fontFamily="sans-serif">Brut</text>
        <line x1="100" y1="80" x2="320" y2="80" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="4,4"/>
        <text x="305" y="77" fontSize="9" fill="#3b82f6" fontFamily="sans-serif">Net</text>
      </svg>
    </div>

    <h2 id="definition-rentabilite-brute">Qu'est-ce que la rentabilité brute ?</h2>
    <p>
      La rentabilité brute est le rapport entre les loyers annuels théoriques et le prix d'acquisition du bien, exprimé en pourcentage. Sa formule est simple : (loyers annuels / prix d'achat) × 100.
    </p>
    <p>
      Exemple de raisonnement : un lot de garages acquis pour un prix donné et générant un loyer annuel théorique permet de calculer un taux brut. Ce taux est utile pour comparer des biens entre eux à un premier niveau, ou pour éliminer rapidement des opportunités dont le prix est manifestement déconnecté du marché locatif local.
    </p>
    <p>
      C'est souvent le chiffre communiqué dans les annonces immobilières ou les présentations d'investissement. Il est calculable rapidement et ne nécessite aucune donnée complémentaire sur les charges. C'est précisément pourquoi il doit être traité avec prudence.
    </p>

    <CalloutBox type="vigilance">
      La rentabilité brute est calculée sur la base des loyers théoriques — c'est-à-dire les loyers maximaux si tous les espaces sont loués en permanence. Elle ne tient pas compte de la vacance réelle, des charges, des travaux ni de la fiscalité.
    </CalloutBox>

    <h2 id="ce-que-cache-le-brut">Ce que ne montre pas le taux brut</h2>
    <p>
      Plusieurs éléments structurels, invisibles dans le calcul brut, viennent systématiquement réduire le rendement réel d'un investissement :
    </p>
    <p>
      <strong>La vacance locative.</strong> Un espace non loué pendant une période donnée réduit le loyer effectivement encaissé. La vacance peut être structurelle (demande insuffisante dans la zone) ou conjoncturelle (départ d'un locataire, délai de remise en état). Elle n'apparaît jamais dans un calcul brut basé sur des loyers théoriques à 100%.
    </p>
    <p>
      <strong>Les charges non récupérables.</strong> Certaines charges de copropriété ne sont pas répercutables sur le locataire. Dans le cas des garages, la part non récupérable dépend du règlement de copropriété et de la nature des charges en question. Ces sommes sont à la charge exclusive du propriétaire.
    </p>
    <p>
      <strong>Les travaux d'entretien et de remise en état.</strong> Même un lot bien entretenu nécessite des dépenses périodiques : remplacement d'une porte de garage, réfection d'une toiture, rénovation de la peinture entre deux locataires. Ces coûts récurrents s'étalent dans le temps mais constituent une charge réelle à intégrer dans l'analyse.
    </p>
    <p>
      <strong>Les frais d'acquisition.</strong> Droits de mutation, honoraires notariaux, frais d'agence éventuels : ces coûts représentent un pourcentage non négligeable du prix d'acquisition et doivent être intégrés au dénominateur du calcul de rentabilité pour obtenir un taux réaliste. Calculer la rentabilité sur le seul prix net vendeur fausse le résultat.
    </p>

    <h2 id="postes-de-charges">Les postes de charges à intégrer</h2>
    <p>
      Le passage de la rentabilité brute à la rentabilité nette de charges nécessite d'identifier et de quantifier les postes suivants :
    </p>
    <ul>
      <li><strong>Charges de copropriété non récupérables</strong> : la fraction des charges appelées par le syndic qui reste à la charge du propriétaire, indépendamment du locataire ;</li>
      <li><strong>Taxe foncière</strong> : elle est due par le propriétaire au 1er janvier de chaque année, que le bien soit loué ou non. Son montant varie significativement d'une commune à l'autre ;</li>
      <li><strong>Assurance propriétaire non occupant</strong> (PNO) : recommandée pour couvrir les dommages causés au bien ou à des tiers en l'absence d'assurance locataire ;</li>
      <li><strong>Frais de gestion</strong> si le lot est confié à un gestionnaire ou une agence immobilière ;</li>
      <li><strong>Provision pour travaux et vacance</strong> : une provision annuelle, même forfaitaire, permet de lisser les dépenses imprévues sur la durée et d'obtenir un rendement net plus réaliste.</li>
    </ul>

    <CalloutBox type="retenir">
      La somme de ces charges peut représenter une fraction substantielle des loyers bruts, variable selon la localisation, l'état du bâti et la structure de détention. Il n'existe pas de ratio universel : chaque bien appelle un calcul spécifique.
    </CalloutBox>

    <h2 id="calcul-rentabilite-nette">Comment calculer la rentabilité nette de charges</h2>
    <p>
      La rentabilité nette de charges s'obtient en déduisant des loyers annuels réels (et non théoriques) l'ensemble des charges non récupérables, puis en divisant ce résultat par le coût total d'acquisition (prix net vendeur + frais de notaire + frais d'agence éventuels + travaux immédiats).
    </p>
    <p>
      Formule : ((loyers encaissés – charges non récupérables – provision vacance – provision travaux) / coût total d'acquisition) × 100.
    </p>
    <p>
      Ce taux, souvent appelé rentabilité nette avant fiscalité, est le premier indicateur utile pour comparer des biens sur une base homogène. Il reste cependant incomplet tant que l'impact de la fiscalité n'est pas intégré.
    </p>

    <h2 id="impact-fiscalite">L'impact de la fiscalité sur le rendement</h2>
    <p>
      Les revenus tirés de la location de garages et de boxes sont imposables. Le régime fiscal applicable dépend du montant des revenus, de la structure de détention (personne physique ou société), et des choix déclaratifs effectués.
    </p>
    <p>
      En détention directe par une personne physique, les loyers sont généralement imposés dans la catégorie des revenus fonciers, soumis au barème progressif de l'impôt sur le revenu et aux prélèvements sociaux. Le régime microfoncier est accessible sous certains plafonds de revenus, avec un abattement forfaitaire. Au-delà, le régime réel permet de déduire les charges effectives.
    </p>
    <p>
      L'impact fiscal est donc directement lié à la tranche marginale d'imposition de l'investisseur. Pour un même bien, la rentabilité nette après fiscalité sera très différente selon la situation personnelle de chaque investisseur. C'est pourquoi ce calcul ne peut être généralisé et doit être conduit individuellement, avec l'appui d'un conseiller fiscal.
    </p>

    <CalloutBox type="legal">
      Les règles fiscales applicables à la location de garages et d'espaces de stockage sont présentées sur impots.gouv.fr et dans la documentation fiscale du BOFIP (Bulletin Officiel des Finances Publiques). Consultez un expert-comptable ou un conseiller fiscal pour une analyse personnalisée de votre situation.
    </CalloutBox>

    <h2 id="erreurs-courantes">Les erreurs courantes dans l'analyse de rentabilité</h2>
    <p>
      Plusieurs erreurs reviennent régulièrement dans les analyses de rentabilité présentées par des vendeurs ou dans des calculs conduits trop rapidement :
    </p>
    <ul>
      <li><strong>Utiliser les loyers théoriques plutôt que les loyers encaissés</strong> : un bien partiellement vacant ou avec des impayés donne une rentabilité brute surévaluée si l'on utilise les loyers potentiels à 100%.</li>
      <li><strong>Omettre les frais d'acquisition dans le dénominateur</strong> : calculer la rentabilité sur le seul prix net vendeur revient à ignorer une fraction substantielle du capital investi.</li>
      <li><strong>Ignorer la taxe foncière</strong> : variable selon les communes, elle peut représenter plusieurs semaines de loyer annuel.</li>
      <li><strong>Ne pas provisionner la vacance et les travaux</strong> : un calcul sans provision donne un taux optimiste qui ne résiste pas à la première période de vacance ou au premier gros entretien.</li>
      <li><strong>Comparer des taux bruts et des taux nets sans distinction</strong> : une présentation qui annonce "X% de rentabilité" sans préciser si ce taux est brut ou net est insuffisante pour une décision d'investissement.</li>
    </ul>

    <div className="mt-8 pt-6 border-t border-slate-100">
      <h3 className="text-sm font-bold text-slate-700 mb-3">Sources et références</h3>
      <ul className="space-y-1">
        <li className="text-xs text-slate-500">→ Impots.gouv.fr — Revenus fonciers : régimes d'imposition (microfoncier et réel)</li>
        <li className="text-xs text-slate-500">→ BOFIP (bofip.impots.gouv.fr) — Revenus fonciers : déduction des charges</li>
        <li className="text-xs text-slate-500">→ Service-public.fr — Taxe foncière sur les propriétés bâties</li>
        <li className="text-xs text-slate-500">→ Service-public.fr — Charges récupérables sur le locataire</li>
      </ul>
    </div>

    <CalloutBox type="retenir" title="Ce qu'il faut retenir">
      La rentabilité brute est un point de départ, pas une conclusion. La rentabilité nette de charges — calculée sur les loyers réellement encaissés, déduction faite de toutes les charges non récupérables, et intégrant les frais d'acquisition dans le coût total — est le premier indicateur robuste. La rentabilité nette après fiscalité, qui dépend de la situation personnelle de chaque investisseur, est l'indicateur définitif. Aucun des deux ne peut être généralisé : ils doivent être calculés pour chaque bien et chaque investisseur spécifiquement.
    </CalloutBox>
  </div>
);

const bailLocationContent = () => (
  <div className="prose-article">
    <p className="text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
      Contrairement à la location d'un logement ou d'un local commercial, la location d'un espace de stockage ne relève d'aucun statut locatif particulier. C'est le droit commun du contrat de louage de choses qui s'applique, tel qu'il est défini par le Code civil. Cette situation offre une certaine liberté contractuelle, mais elle implique aussi une vigilance accrue dans la rédaction du contrat.
    </p>

    <div className="my-8 bg-[#f8f9fa] rounded-xl border border-slate-100 p-6 flex items-center justify-center">
      <svg width="100%" height="180" viewBox="0 0 600 180" className="max-w-lg">
        <rect x="200" y="15" width="200" height="150" rx="8" fill="#e8eef5" stroke="#1e3a5f" strokeWidth="1.5"/>
        <rect x="220" y="35" width="160" height="12" rx="3" fill="#1e3a5f" opacity="0.5"/>
        <rect x="220" y="58" width="140" height="8" rx="3" fill="#1e3a5f" opacity="0.2"/>
        <rect x="220" y="74" width="150" height="8" rx="3" fill="#1e3a5f" opacity="0.2"/>
        <rect x="220" y="90" width="130" height="8" rx="3" fill="#1e3a5f" opacity="0.2"/>
        <rect x="220" y="106" width="145" height="8" rx="3" fill="#1e3a5f" opacity="0.2"/>
        <line x1="220" y1="130" x2="280" y2="130" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="2,2"/>
        <line x1="300" y1="130" x2="360" y2="130" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="2,2"/>
        <text x="283" y="134" fontSize="9" fill="#64748b" fontFamily="sans-serif">Bailleur</text>
        <text x="303" y="134" fontSize="9" fill="#64748b" fontFamily="sans-serif">Locataire</text>
        <text x="300" y="28" textAnchor="middle" fontSize="11" fill="#1e3a5f" fontFamily="sans-serif" fontWeight="600">Contrat de location</text>
        <text x="300" y="168" textAnchor="middle" fontSize="10" fill="#94a3b8" fontFamily="sans-serif">Code civil — Droit commun</text>
      </svg>
    </div>

    <h2 id="pas-de-statut-specifique">L'absence de statut juridique spécifique</h2>
    <p>
      En France, plusieurs catégories de locations bénéficient d'un régime légal spécifique qui encadre les droits et obligations des parties : la loi du 6 juillet 1989 pour les logements, le statut des baux commerciaux (articles L.145-1 et suivants du Code de commerce) pour les locaux professionnels, ou encore le bail rural pour les terres agricoles.
    </p>
    <p>
      Les espaces de stockage — boxes, garages, caves, locaux techniques — ne relèvent d'aucun de ces régimes spéciaux dès lors qu'ils sont loués pour un usage exclusif de stockage, sans accueil du public ni activité commerciale. Ils sont soumis au droit commun du louage de choses, défini aux articles 1709 et suivants du Code civil.
    </p>
    <p>
      Cette absence de statut spécifique signifie que les parties disposent d'une liberté contractuelle plus étendue que dans le cadre d'une location d'habitation. Elles peuvent librement déterminer la durée du contrat, le montant du loyer, les conditions de révision et les modalités de résiliation — dans les limites du droit commun des contrats et de l'ordre public.
    </p>

    <CalloutBox type="info">
      Si un garage est loué à un professionnel pour y exercer une activité commerciale (réparation automobile, stockage de marchandises à titre commercial, etc.), le bail peut relever du statut des baux commerciaux. La qualification du bail dépend de l'usage effectif du bien, pas seulement de sa désignation dans le contrat. Une consultation juridique est recommandée en cas de doute.
    </CalloutBox>

    <h2 id="droit-commun">Le droit commun applicable</h2>
    <p>
      Le contrat de location d'un espace de stockage est un contrat de louage de choses au sens de l'article 1709 du Code civil, qui le définit comme "un contrat par lequel l'une des parties s'oblige à faire jouir l'autre d'une chose pendant un certain temps, et moyennant un certain prix que celle-ci s'oblige à lui payer."
    </p>
    <p>
      Les obligations fondamentales qui en découlent sont :
    </p>
    <ul>
      <li><strong>Pour le bailleur</strong> : délivrer le bien en bon état, en assurer la jouissance paisible pendant toute la durée du bail, et garantir le locataire contre les vices cachés qui en rendraient l'usage impropre à sa destination.</li>
      <li><strong>Pour le locataire</strong> : payer le loyer aux termes convenus, user de la chose en bon père de famille selon la destination qui lui a été donnée, et restituer le bien à l'expiration du bail dans l'état dans lequel il l'a reçu (sauf usure normale).</li>
    </ul>
    <p>
      Ces obligations minimales s'appliquent même en l'absence de contrat écrit, dès lors qu'un accord de location est établi. C'est pourquoi la forme écrite du contrat est fortement recommandée, même si elle n'est pas légalement imposée pour les locations hors statuts spéciaux.
    </p>

    <h2 id="bail-verbal-vs-ecrit">Bail verbal ou bail écrit : une différence majeure en pratique</h2>
    <p>
      Un bail verbal est juridiquement valide pour la location d'un espace de stockage. Les obligations réciproques des parties existent dès l'accord sur la chose et le prix. Toutefois, l'absence d'écrit crée une difficulté probatoire majeure : en cas de litige, chaque partie devra établir l'existence et le contenu de l'accord par tous moyens (témoignages, échanges de courriels, virements bancaires récurrents).
    </p>
    <p>
      Le bail écrit présente plusieurs avantages pratiques indiscutables :
    </p>
    <ul>
      <li>Il fixe précisément la date d'entrée en jouissance, le montant du loyer et les conditions de révision ;</li>
      <li>Il documente l'état du bien à l'entrée du locataire, si un état des lieux est annexé ;</li>
      <li>Il définit les conditions de résiliation et les préavis applicables ;</li>
      <li>Il constitue une pièce justificative pour la déclaration fiscale des revenus locatifs ;</li>
      <li>Il facilite les démarches en cas d'impayé ou de litige à la sortie.</li>
    </ul>

    <CalloutBox type="retenir">
      Pour tout propriétaire gérant plusieurs espaces de stockage, l'usage systématique d'un contrat écrit est une règle de gestion élémentaire. Il protège le bailleur autant que le locataire, et évite les situations de flou contractuel difficiles à démêler en cas de désaccord.
    </CalloutBox>

    <h2 id="clauses-essentielles">Les clauses essentielles d'un contrat de location de garage</h2>
    <p>
      Un contrat de location d'espace de stockage bien rédigé doit a minima préciser :
    </p>
    <ul>
      <li><strong>L'identification des parties</strong> : nom, prénom ou raison sociale, adresse du bailleur et du locataire ;</li>
      <li><strong>La désignation précise du bien</strong> : adresse, numéro de lot ou de garage, superficie approximative, accès ;</li>
      <li><strong>La destination du bien</strong> : usage exclusif de stockage, sans hébergement ni exercice d'activité professionnelle ou commerciale ;</li>
      <li><strong>La durée du bail</strong> : déterminée (avec date de début et de fin) ou indéterminée (avec préavis à définir) ;</li>
      <li><strong>Le montant du loyer</strong> et ses modalités de paiement (date d'échéance, mode de paiement) ;</li>
      <li><strong>Le dépôt de garantie</strong> : son montant et les conditions de restitution ;</li>
      <li><strong>Les conditions de révision du loyer</strong> : indice de référence utilisé, périodicité de la révision ;</li>
      <li><strong>La répartition des charges</strong> : lesquelles sont à la charge du locataire, lesquelles restent à la charge du bailleur ;</li>
      <li><strong>Les conditions de résiliation</strong> : préavis à respecter de part et d'autre, forme de la notification.</li>
    </ul>

    <CalloutBox type="legal">
      La rédaction d'un contrat de bail, même pour un espace de stockage, gagne à être confiée ou relue par un professionnel du droit (notaire, avocat). Le coût d'une consultation préventive est sans commune mesure avec celui d'un litige locatif mal anticipé. Des modèles de contrats commentés sont disponibles auprès des services notariaux et des chambres immobilières.
    </CalloutBox>

    <h2 id="duree-et-resiliation">Durée du bail et modalités de résiliation</h2>
    <p>
      La liberté contractuelle permet de fixer la durée du bail de stockage comme les parties l'entendent. Les pratiques courantes vont du bail mensuel (reconductible tacitement) au bail d'un ou plusieurs années.
    </p>
    <p>
      En l'absence de clause contraire, un bail à durée indéterminée peut être résilié à tout moment par l'une ou l'autre des parties, sous réserve du respect d'un préavis raisonnable dont la durée est à préciser dans le contrat. En l'absence de précision contractuelle, les tribunaux apprécient souverainement ce qui constitue un préavis raisonnable en fonction des circonstances.
    </p>
    <p>
      Pour un bail à durée déterminée, la résiliation anticipée n'est possible que dans les conditions prévues au contrat ou d'un commun accord entre les parties. Il est recommandé d'introduire une clause résolutoire précisant les motifs qui autorisent une résiliation de plein droit (défaut de paiement après mise en demeure, usage non conforme à la destination, etc.).
    </p>

    <h2 id="en-cas-de-litige">En cas de litige</h2>
    <p>
      Les litiges relatifs à la location d'un espace de stockage (non-paiement du loyer, dégradations, contestation de l'état des lieux, restitution du dépôt de garantie) relèvent de la compétence du tribunal judiciaire du lieu de situation du bien, généralement selon la procédure simplifiée applicable aux petits litiges si les montants en jeu sont modestes.
    </p>
    <p>
      La commission départementale de conciliation, souvent mobilisée pour les litiges locatifs d'habitation, n'est pas compétente pour les locations de garages. Une tentative de médiation amiable reste néanmoins recommandée avant d'engager une procédure judiciaire, pour des raisons de délai et de coût.
    </p>

    <div className="mt-8 pt-6 border-t border-slate-100">
      <h3 className="text-sm font-bold text-slate-700 mb-3">Sources et références</h3>
      <ul className="space-y-1">
        <li className="text-xs text-slate-500">→ Legifrance.gouv.fr — Code civil, articles 1709 à 1762 (louage de choses)</li>
        <li className="text-xs text-slate-500">→ Legifrance.gouv.fr — Code de commerce, articles L.145-1 et suivants (statut des baux commerciaux)</li>
        <li className="text-xs text-slate-500">→ Service-public.fr — Location d'un garage ou d'un parking</li>
        <li className="text-xs text-slate-500">→ Notaires.fr — Le contrat de bail : obligations des parties</li>
      </ul>
    </div>

    <CalloutBox type="retenir" title="Ce qu'il faut retenir">
      La location d'un espace de stockage repose sur le droit commun du contrat. La liberté contractuelle est large, mais elle ne dispense pas d'un contrat écrit précis. Un bail bien rédigé — précisant destination, durée, loyer, révision, charges et modalités de résiliation — est la première protection du bailleur comme du locataire. Pour toute situation complexe ou atypique, consulter un professionnel du droit reste la démarche la plus prudente.
    </CalloutBox>
  </div>
);

const fixerLoyerContent = () => (
  <div className="prose-article">
    <p className="text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
      Le loyer d'un espace de stockage n'est pas fixé par la loi ni par un indice national. Il résulte de l'équilibre entre l'offre et la demande sur un marché géographiquement très localisé. C'est cette localité du marché — et non une moyenne nationale — qui doit guider le positionnement tarifaire.
    </p>

    <div className="my-8 bg-[#f8f9fa] rounded-xl border border-slate-100 p-6 flex items-center justify-center">
      <svg width="100%" height="180" viewBox="0 0 600 180" className="max-w-lg">
        <line x1="80" y1="150" x2="520" y2="150" stroke="#e2e8f0" strokeWidth="1.5"/>
        <line x1="80" y1="20" x2="80" y2="150" stroke="#e2e8f0" strokeWidth="1.5"/>
        <path d="M80 130 Q200 120 300 90 Q400 60 520 40" stroke="#1e3a5f" strokeWidth="2" fill="none" opacity="0.4"/>
        <path d="M80 50 Q200 70 300 90 Q400 110 520 130" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.4"/>
        <circle cx="300" cy="90" r="8" fill="#22c55e" opacity="0.8"/>
        <text x="315" y="86" fontSize="10" fill="#166534" fontFamily="sans-serif" fontWeight="600">Zone optimale</text>
        <text x="82" y="143" fontSize="9" fill="#94a3b8" fontFamily="sans-serif">Loyer bas</text>
        <text x="450" y="143" fontSize="9" fill="#94a3b8" fontFamily="sans-serif">Loyer élevé</text>
        <text x="530" y="44" fontSize="9" fill="#1e3a5f" fontFamily="sans-serif">Offre</text>
        <text x="530" y="134" fontSize="9" fill="#3b82f6" fontFamily="sans-serif">Demande</text>
      </svg>
    </div>

    <h2 id="observer-le-marche">Observer le marché local : la seule méthode fiable</h2>
    <p>
      Les données disponibles sur les loyers pratiqués pour les espaces de stockage à l'échelle nationale sont rares, hétérogènes et peu fiables pour une prise de décision locale. Le marché des garages et des boxes est extrêmement morcelé géographiquement, avec des écarts de prix considérables entre deux communes voisines selon leur densité, leur tissu locatif et leur offre en self-storage.
    </p>
    <p>
      La méthode la plus fiable pour positionner un loyer consiste à observer directement les prix pratiqués dans la zone de chalandise immédiate du bien. Cette observation passe par plusieurs canaux :
    </p>
    <ul>
      <li><strong>Les annonces de location en ligne</strong> : les grandes plateformes d'annonces immobilières (généralistes et spécialisées) permettent de recenser les offres actives dans le secteur, avec leurs caractéristiques (surface, accès, état) et leurs prix demandés. Ces prix sont des prix demandés, pas forcément des prix conclus — mais ils donnent un plancher d'analyse ;</li>
      <li><strong>Les plateformes spécialisées de mise en location de stockage</strong> : plusieurs sites mettent en relation propriétaires et locataires d'espaces de stockage. Ils constituent un observatoire utile des prix pratiqués localement ;</li>
      <li><strong>Les agences immobilières locales</strong> : les agents qui gèrent des lots de garages dans la zone disposent souvent d'une connaissance fine du marché local ;</li>
      <li><strong>Le réseau de propriétaires locaux</strong> : dans certains secteurs, des groupes ou associations de propriétaires de garages échangent des informations sur les conditions du marché.</li>
    </ul>

    <CalloutBox type="vigilance">
      Méfiez-vous des comparaisons avec des biens situés dans d'autres quartiers ou communes. Un écart de quelques kilomètres peut correspondre à un marché locatif radicalement différent. La zone de référence pertinente est celle où vos futurs locataires chercheront effectivement un espace.
    </CalloutBox>

    <h2 id="criteres-influencant">Les critères qui influencent le loyer</h2>
    <p>
      À surface comparable, plusieurs caractéristiques expliquent des différences de loyer parfois importantes entre deux espaces de stockage :
    </p>
    <ul>
      <li><strong>L'accessibilité</strong> : un garage avec accès direct depuis la voirie est plus valorisable qu'un box au sous-sol accessible uniquement par un couloir étroit. La facilité de chargement et déchargement est un critère clé pour les locataires professionnels ;</li>
      <li><strong>La sécurité</strong> : portail électrique, vidéosurveillance, serrure de qualité, éclairage — ces éléments justifient un positionnement tarifaire plus élevé ;</li>
      <li><strong>L'état général</strong> : un espace propre, sec, sans humidité ni infiltration est plus demandé et peut se louer plus cher qu'un espace dégradé ;</li>
      <li><strong>La hauteur sous plafond</strong> : elle détermine la capacité de stockage réelle et influence le loyer, notamment pour les professionnels ;</li>
      <li><strong>La localisation</strong> : la proximité d'axes de circulation, de zones résidentielles denses ou de zones d'activité génère une demande plus forte et soutient les niveaux de loyers ;</li>
      <li><strong>La disponibilité d'électricité</strong> : pour certains usages (atelier, stockage climatisé), la présence d'une prise électrique est un critère discriminant.</li>
    </ul>

    <h2 id="methode-positionnement">Méthode de positionnement tarifaire</h2>
    <p>
      Une fois les loyers de marché observés, le positionnement de votre propre espace nécessite une comparaison honnête avec les offres existantes. Posez-vous les questions suivantes :
    </p>
    <ul>
      <li>Mon espace est-il dans le même état et aux mêmes conditions d'accès que les biens comparables observés ?</li>
      <li>Présente-t-il des avantages spécifiques (sécurité, accès, état) qui justifient un positionnement dans le haut de la fourchette ?</li>
      <li>Ou au contraire des défauts (humidité, accès difficile, absence d'éclairage) qui imposent un positionnement plus bas ?</li>
    </ul>
    <p>
      Si votre espace présente des caractéristiques comparables à la médiane du marché local, un loyer proche de cette médiane maximisera le volume de candidats et réduira le risque de vacance prolongée. Un positionnement trop élevé ralentit la mise en location et peut générer une vacance dont le coût dépasse rapidement le gain tarifaire espéré.
    </p>

    <CalloutBox type="retenir">
      Dans la majorité des cas, privilégier une mise en location rapide à un loyer de marché est préférable à attendre un locataire pour un loyer légèrement supérieur. Chaque semaine de vacance représente un manque à gagner réel, et non récupérable.
    </CalloutBox>

    <h2 id="erreurs-classiques">Les erreurs classiques à éviter</h2>
    <p>
      Plusieurs erreurs de positionnement reviennent fréquemment :
    </p>
    <ul>
      <li><strong>Fixer le loyer en fonction du rendement cible</strong> : le loyer doit être fixé selon le marché, pas selon le rendement que vous souhaitez obtenir. Partir de "j'ai besoin de X% de rendement" pour calculer un loyer conduit souvent à un prix déconnecté de la réalité locale ;</li>
      <li><strong>S'aligner sur des loyers de référence nationaux ou régionaux</strong> : les moyennes nationales n'ont aucune valeur opérationnelle pour fixer un loyer dans une rue précise ;</li>
      <li><strong>Augmenter le loyer brutalement après une longue période de stabilité</strong> : une révision importante et soudaine incite le locataire à chercher une alternative et génère un risque de vacance. Les révisions régulières et modérées, prévues contractuellement, sont préférables aux rattrapages tardifs ;</li>
      <li><strong>Ignorer la concurrence du self-storage</strong> : dans les zones où des acteurs professionnels de self-storage sont présents, leur offre (sécurisée, flexible, accessible) exerce une pression sur les loyers des garages traditionnels. Il faut en tenir compte dans le positionnement.</li>
    </ul>

    <h2 id="revision-du-loyer">La révision du loyer dans le temps</h2>
    <p>
      En l'absence de clause contractuelle spécifique, un bailleur ne peut pas augmenter unilatéralement le loyer d'un locataire en place. La révision doit être prévue dans le bail et s'effectuer selon les modalités définies au contrat.
    </p>
    <p>
      La pratique la plus courante consiste à prévoir une révision annuelle indexée sur un indice de référence. L'indice le plus utilisé dans ce contexte est l'Indice de Référence des Loyers (IRL), publié trimestriellement par l'INSEE, qui encadre la révision des loyers dans le secteur résidentiel. D'autres indices peuvent être utilisés contractuellement pour des baux non soumis à la loi de 1989 (ce qui est le cas des garages).
    </p>

    <h2 id="indexation">L'indexation contractuelle : précautions</h2>
    <p>
      La clause d'indexation doit préciser l'indice de référence utilisé, la date ou la période de référence de l'indice de base, et la périodicité de la révision. Une clause mal rédigée peut être inopposable ou donner lieu à des interprétations divergentes.
    </p>
    <p>
      L'indexation ne garantit pas une révision à la hausse : si l'indice de référence diminue ou reste stable, le loyer évolue en conséquence. Elle assure en revanche une évolution prévisible et contractuellement encadrée, sans avoir à renégocier à chaque échéance.
    </p>

    <div className="mt-8 pt-6 border-t border-slate-100">
      <h3 className="text-sm font-bold text-slate-700 mb-3">Sources et références</h3>
      <ul className="space-y-1">
        <li className="text-xs text-slate-500">→ INSEE.fr — Indice de Référence des Loyers (IRL) : publication trimestrielle</li>
        <li className="text-xs text-slate-500">→ Service-public.fr — Révision annuelle du loyer d'un garage ou parking</li>
        <li className="text-xs text-slate-500">→ Legifrance.gouv.fr — Code civil, articles sur le louage de choses et la liberté contractuelle</li>
        <li className="text-xs text-slate-500">→ Service-public.fr — Location d'un garage ou d'un parking : fixation et révision du loyer</li>
      </ul>
    </div>

    <CalloutBox type="retenir" title="Ce qu'il faut retenir">
      Fixer un loyer juste nécessite d'observer le marché local réel, de positionner son espace honnêtement par rapport aux offres comparables, et de prévoir contractuellement les modalités de révision. Un loyer cohérent avec le marché minimise la vacance et sécurise la relation locative sur la durée. Aucune formule nationale ne peut remplacer cette observation locale.
    </CalloutBox>
  </div>
);

const investirFondamentauxContent = () => (
  <div className="prose-article">
    <p className="text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
      Les espaces de stockage constituent une catégorie d'actifs immobiliers à part entière, distincte du résidentiel classique. Avant d'envisager une acquisition, comprendre ce qui les différencie — et ce qui les rend plus complexes qu'il n'y paraît — est indispensable.
    </p>

    <h2 id="qu-est-ce-qu-un-box">Qu'est-ce qu'un box de stockage ?</h2>
    <p>
      Un box de stockage est un espace fermé, généralement situé dans une résidence, un immeuble commercial ou un complexe dédié, loué à un particulier ou à une entreprise pour y stocker des biens mobiliers. Il se distingue du garage par son usage exclusivement lié au stockage — sans accès véhicule dans la majorité des configurations — et par ses dimensions souvent plus réduites.
    </p>
    <p>
      Les formats varient considérablement : de quelques mètres carrés pour un box de cave ou de sous-sol, à plusieurs dizaines de mètres carrés pour un local commercial de plain-pied ou un container de stockage. Cette diversité influe directement sur le profil de la demande, le loyer potentiel et la nature des contraintes réglementaires applicables.
    </p>

    <CalloutBox type="retenir">
      Un box de stockage n'est pas un garage. Les régimes locatifs, les obligations fiscales et les profils de locataires peuvent différer significativement selon la nature du bien, sa localisation et son usage effectif.
    </CalloutBox>

    <h2 id="pourquoi-cet-actif-interesse">Pourquoi cet actif retient-il l'attention des investisseurs ?</h2>
    <p>
      Plusieurs caractéristiques distinguent les espaces de stockage des autres actifs immobiliers et justifient qu'on les examine sérieusement comme composante d'une stratégie patrimoniale :
    </p>
    <ul>
      <li><strong>Ticket d'entrée généralement accessible</strong> : un box ou un lot de garages peut être acquis à des prix inférieurs à ceux d'un appartement, selon la localisation et la configuration. Cette accessibilité ne présage pas de la rentabilité — elle dépend du prix relatif au loyer observé localement.</li>
      <li><strong>Gestion opérationnelle simplifiée</strong> : l'absence d'eau courante, de chauffage obligatoire et d'équipements techniques lourds réduit les aléas d'exploitation dans la plupart des configurations. Cela n'exclut pas les problèmes de bâti (humidité, étanchéité, accès).</li>
      <li><strong>Demande de stockage structurelle</strong> : la réduction de la surface habitable en zones urbaines denses, la mobilité professionnelle et les pratiques de consommation génèrent un besoin réel de stockage individuel. Ce besoin est variable selon les zones et ne justifie pas une demande locative garantie en tout point du territoire.</li>
      <li><strong>Diversification par multiplication d'unités</strong> : la détention de plusieurs petites unités permet de diluer le risque de vacance. Elle complexifie en contrepartie la gestion et l'analyse de l'investissement.</li>
    </ul>

    <CalloutBox type="vigilance">
      Ces caractéristiques ne garantissent pas la rentabilité d'un investissement. Chaque projet doit être analysé au regard de son marché local spécifique, de l'état réel du bien, de sa localisation précise et du prix d'achat effectif.
    </CalloutBox>

    <h2 id="criteres-analyse">Les critères fondamentaux d'analyse</h2>
    <h3 id="localisation">La localisation et son environnement</h3>
    <p>
      La demande locative pour des espaces de stockage dépend étroitement de la densité urbaine, de la présence d'une population mobile ou contrainte en surface habitable, de l'environnement commercial et de l'accessibilité depuis les axes de circulation. Un box situé en zone périurbaine peu dense n'a pas le même potentiel locatif qu'un local en centre-ville ou à proximité d'une zone d'activité.
    </p>
    <p>
      L'environnement concurrentiel est également déterminant : la présence d'un acteur professionnel de self-storage à proximité, d'une offre abondante de garages similaires ou d'une faible demande documentée sont des signaux à prendre au sérieux avant toute décision.
    </p>

    <h3 id="prix-achat">Le prix d'acquisition</h3>
    <p>
      Le prix au mètre carré d'un espace de stockage varie selon la localisation, la nature du bien, son état et le contexte de la transaction. Il n'existe pas de référentiel national fiable et stable pour ce type d'actif. Les prix observés sur les marchés locaux — via les annonces immobilières, les retours de notaires ou les données de transaction disponibles — doivent être comparés au loyer potentiel local pour évaluer un rendement brut indicatif, avant toute intégration des charges, de la fiscalité et des coûts de travaux éventuels.
    </p>

    <h3 id="charges-et-fiscalite">Les charges et la fiscalité</h3>
    <p>
      Les charges de copropriété, les taxes foncières, les frais de gestion éventuels, les primes d'assurance et la fiscalité des revenus constituent les principaux postes à intégrer dans l'analyse de rentabilité nette. Le régime fiscal applicable dépend de la structure de détention (personne physique, SCI à l'IR ou à l'IS, société) et du montant total des revenus générés. Ces paramètres varient fortement selon la situation personnelle de l'investisseur.
    </p>

    <CalloutBox type="legal">
      La fiscalité applicable à la location d'espaces de stockage est complexe et dépend de nombreux paramètres personnels et structurels. Consultez impérativement un professionnel qualifié (expert-comptable, conseiller fiscal) avant toute décision d'acquisition.
    </CalloutBox>

    <h2 id="risques-a-anticiper">Les risques à anticiper</h2>
    <p>
      Tout investissement immobilier comporte des risques. Les espaces de stockage ne font pas exception. Les principaux points de vigilance sont les suivants :
    </p>
    <ul>
      <li><strong>Vacance locative</strong> : un espace non loué ne génère aucun revenu mais continue d'engendrer des charges. La vacance peut résulter d'une demande locale insuffisante, d'un positionnement prix inadapté ou d'une faible visibilité.</li>
      <li><strong>État du bâti</strong> : infiltrations, humidité, vétusté des accès ou des équipements de fermeture peuvent nécessiter des travaux non anticipés. Un diagnostic sérieux avant acquisition est indispensable.</li>
      <li><strong>Environnement concurrentiel</strong> : l'arrivée d'un acteur structuré de self-storage dans la zone peut modifier significativement l'équilibre offre/demande local.</li>
      <li><strong>Liquidité relative</strong> : la revente d'un lot de garages peut s'avérer plus longue et moins prévisible que celle d'un bien résidentiel classique, notamment hors des grandes agglomérations.</li>
      <li><strong>Contraintes réglementaires</strong> : règles de copropriété restrictives, changement de destination soumis à autorisation, évolution du PLU : autant de paramètres qui peuvent limiter les usages ou la valorisation du bien.</li>
    </ul>

    <h2 id="avant-de-se-lancer">Avant de se décider : les questions structurantes</h2>
    <p>
      Une analyse sérieuse d'un projet d'acquisition impose de répondre à un certain nombre de questions avant de conclure :
    </p>
    <ul>
      <li>Quelle est la demande locative réelle et documentée dans ce secteur géographique précis ?</li>
      <li>À quel prix se louent des espaces comparables dans la zone (annonces actives, loyers pratiqués) ?</li>
      <li>Quel est l'état réel du bien, et quels travaux sont nécessaires à court terme ?</li>
      <li>Quelle est la situation financière de la copropriété, et des travaux sont-ils votés ou prévisibles ?</li>
      <li>Quel régime fiscal s'applique à ma situation personnelle et à la structure de détention envisagée ?</li>
      <li>Quelle est ma stratégie de sortie en cas de besoin de liquidité ou de revente ?</li>
    </ul>

    <CalloutBox type="retenir" title="Ce qu'il faut retenir">
      Un investissement dans un espace de stockage peut présenter des caractéristiques intéressantes — ticket d'entrée, gestion opérationnelle, demande locative locale — mais ne saurait être abordé sans une analyse rigoureuse et personnalisée. La rentabilité n'est jamais acquise par nature : elle dépend du prix d'achat, du loyer effectivement observable sur le marché local, des charges réelles, de la fiscalité applicable et de la qualité de la gestion. Certains de ces facteurs sont hors de contrôle direct de l'investisseur.
    </CalloutBox>
  </div>
);

const vacanceLocativeContent = () => (
  <div className="prose-article">
    <p className="text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
      La vacance locative désigne la période pendant laquelle un espace de stockage reste inoccupé et ne génère aucun revenu. C'est l'un des principaux risques opérationnels d'un investissement dans ce type d'actif. Contrairement à d'autres postes de charge, elle est difficile à anticiper précisément et peut modifier significativement l'équilibre financier d'un projet.
    </p>

    <div className="my-8 bg-[#f8f9fa] rounded-xl border border-slate-100 p-6 flex items-center justify-center">
      <svg width="100%" height="200" viewBox="0 0 560 200" className="max-w-lg">
        <text x="20" y="28" fontSize="11" fill="#64748b" fontFamily="sans-serif" fontWeight="600">Impact de la vacance sur les loyers encaissés (indicatif)</text>
        <text x="20" y="65" fontSize="10" fill="#94a3b8" fontFamily="sans-serif">Vacance 0 %</text>
        <rect x="130" y="52" width="280" height="18" rx="3" fill="#1e3a5f" opacity="0.8"/>
        <text x="416" y="65" fontSize="10" fill="#1e3a5f" fontFamily="sans-serif" fontWeight="600">100 %</text>
        <text x="20" y="105" fontSize="10" fill="#94a3b8" fontFamily="sans-serif">Vacance 10 %</text>
        <rect x="130" y="92" width="252" height="18" rx="3" fill="#3b82f6" opacity="0.7"/>
        <text x="388" y="105" fontSize="10" fill="#3b82f6" fontFamily="sans-serif" fontWeight="600">90 %</text>
        <text x="20" y="145" fontSize="10" fill="#94a3b8" fontFamily="sans-serif">Vacance 20 %</text>
        <rect x="130" y="132" width="224" height="18" rx="3" fill="#f59e0b" opacity="0.7"/>
        <text x="360" y="145" fontSize="10" fill="#b45309" fontFamily="sans-serif" fontWeight="600">80 %</text>
        <text x="130" y="180" fontSize="9" fill="#94a3b8" fontFamily="sans-serif">Proportion des loyers théoriques effectivement encaissés</text>
      </svg>
    </div>

    <h2 id="definition-vacance">Qu'est-ce que la vacance locative ?</h2>
    <p>
      La vacance locative est la période pendant laquelle un bien immobilier est disponible à la location mais inoccupé. Pour un espace de stockage, elle peut se produire entre deux locataires (vacance de rotation), lors d'une démarche initiale de mise en location (vacance de départ), ou de façon prolongée lorsque la demande est structurellement insuffisante dans la zone (vacance structurelle).
    </p>
    <p>
      Elle se mesure habituellement en taux annuel : un taux de vacance de 10 % signifie que le bien est inoccupé en moyenne l'équivalent de cinq semaines sur une année. Ce chiffre peut paraître modeste. Son impact sur la rentabilité nette est pourtant significatif lorsqu'on le traduit en revenus manqués et en charges fixes qui continuent de courir pendant la période d'inoccupation.
    </p>
    <p>
      La vacance est un risque inhérent à tout investissement locatif. Elle ne peut pas être entièrement éliminée, mais elle peut être anticipée, mesurée et gérée. C'est l'objet des pratiques décrites dans cet article.
    </p>

    <CalloutBox type="vigilance">
      Un calcul de rentabilité établi sur la base d'un taux d'occupation de 100 % donne une image optimiste du projet. Toute analyse sérieuse intègre une hypothèse de vacance, même modeste, pour refléter la réalité d'une gestion locative sur la durée.
    </CalloutBox>

    <h2 id="causes-vacance">Les principales causes de vacance</h2>
    <p>
      Plusieurs facteurs peuvent générer ou prolonger une période de vacance sur un espace de stockage. Tous ne sont pas maîtrisables par le propriétaire, mais certains peuvent être anticipés et atténués.
    </p>
    <p>
      <strong>Une demande locative insuffisante dans la zone.</strong> La demande pour des espaces de stockage est géographiquement très localisée. Dans certaines zones — périphérie peu dense, communes rurales, secteurs avec une offre de self-storage abondante — la demande peut être structurellement faible. Un espace bien entretenu et au prix du marché peut rester vacant faute de candidats locaux.
    </p>
    <p>
      <strong>Un loyer déconnecté du marché local.</strong> Un loyer demandé supérieur aux prix pratiqués dans la zone réduit mécaniquement le nombre de candidats et allonge le délai de mise en location. C'est l'une des causes de vacance les plus directement évitables.
    </p>
    <p>
      <strong>Une visibilité insuffisante.</strong> Un espace non annoncé sur les canaux où les locataires potentiels cherchent peut rester vide simplement par manque d'exposition. La présence sur les plateformes en ligne est aujourd'hui incontournable dans la plupart des marchés.
    </p>
    <p>
      <strong>L'état du bien.</strong> Un espace dégradé — porte difficile à manœuvrer, humidité visible, accès mal dégagé — génère des refus de candidats pourtant intéressés par la localisation ou le prix. Les travaux de remise en état entre deux locataires réduisent la vacance à moyen terme.
    </p>
    <p>
      <strong>La rotation des locataires.</strong> Les espaces de stockage connaissent souvent des durées de bail plus courtes que les baux d'habitation. Une rotation fréquente multiplie les périodes de vacance inter-locataires. Certaines catégories de locataires — professionnels, artisans, entreprises — tendent à offrir une stabilité plus grande que les particuliers en transition.
    </p>

    <CalloutBox type="retenir">
      Une partie significative des périodes de vacance résulte de facteurs maîtrisables : loyer mal positionné, visibilité insuffisante, état du bien négligé. Identifier la cause réelle d'une vacance est la première étape pour y remédier.
    </CalloutBox>

    <h2 id="impact-rendement">L'impact sur la rentabilité : un calcul illustratif</h2>
    <p>
      Pour comprendre concrètement l'impact de la vacance, voici un raisonnement purement illustratif, avec des hypothèses fictives à ne pas appliquer directement à un projet réel. Considérons un espace dont le loyer mensuel est de 100 (quelle qu'en soit l'unité). Le loyer annuel théorique à pleine occupation est de 1 200. Si cet espace est vacant l'équivalent d'un mois par an (taux de vacance d'environ 8 %), le loyer effectivement encaissé tombe à 1 100.
    </p>
    <p>
      En rentabilité nette, l'impact est amplifié par le fait que les charges fixes — taxe foncière, assurance, charges de copropriété — continuent de courir pendant la vacance. Le manque à gagner ne se résume pas aux loyers non encaissés : il se traduit aussi par un accroissement du poids relatif des charges sur les revenus réellement perçus.
    </p>
    <p>
      C'est pourquoi les analyses sérieuses intègrent systématiquement une hypothèse de vacance — souvent exprimée en pourcentage du loyer brut annuel ou en nombre de semaines — pour calculer un rendement net réaliste plutôt qu'un rendement théorique à pleine occupation.
    </p>

    <CalloutBox type="vigilance">
      Les hypothèses de vacance à retenir dépendent du marché local, du type de bien et de la qualité de la gestion. Il n'existe pas de taux universel applicable à tous les projets. Interrogez les acteurs locaux — agences, autres propriétaires — sur les durées de vacance observées dans la zone avant de fixer votre propre hypothèse.
    </CalloutBox>

    <h2 id="prevention">Les pratiques de prévention</h2>
    <p>
      Plusieurs leviers permettent de réduire la fréquence et la durée des périodes de vacance :
    </p>
    <ul>
      <li><strong>Anticiper les départs.</strong> Maintenir un contact régulier avec les locataires en place, notamment à l'approche des échéances de bail, permet d'anticiper les départs et de commencer les démarches de relocation avant que l'espace soit effectivement libéré.</li>
      <li><strong>Publier l'annonce dès que le départ est connu.</strong> Attendre que le locataire ait rendu les clés pour diffuser l'annonce allonge inutilement la vacance. Une annonce publiée avec une date de disponibilité à venir réduit le délai entre deux locations.</li>
      <li><strong>Assurer une présence sur plusieurs canaux.</strong> Plateformes généralistes, plateformes spécialisées, affichage local, réseau de bouche-à-oreille : une visibilité multi-canal maximise les chances de trouver rapidement un locataire.</li>
      <li><strong>Maintenir le bien en bon état.</strong> Entre deux locataires, une remise en état rapide — nettoyage, petites réparations — améliore l'attractivité de l'espace et réduit les refus de candidats à la visite.</li>
      <li><strong>Positionner le loyer au prix du marché.</strong> Un loyer cohérent avec les prix pratiqués localement attire davantage de candidats et réduit le délai de relocation.</li>
      <li><strong>Fidéliser les bons locataires.</strong> Un locataire fiable, payant régulièrement et respectant le bien, mérite une gestion attentive. Une augmentation de loyer trop brutale ou une communication dégradée peut inciter un bon locataire à chercher une alternative.</li>
    </ul>

    <h2 id="gestion-vacance">Gérer une période de vacance</h2>
    <p>
      Lorsqu'une vacance survient et se prolonge, plusieurs actions permettent d'en limiter la durée.
    </p>
    <p>
      <strong>Vérifier le positionnement prix.</strong> Si les premières semaines de diffusion n'ont généré aucune candidature, la première question est celle du loyer demandé. Une comparaison rapide avec les annonces concurrentes actives dans la zone permet de vérifier si le prix est en ligne avec le marché ou au-dessus.
    </p>
    <p>
      <strong>Élargir la diffusion.</strong> Si l'espace n'est présent que sur un ou deux canaux, étendre la diffusion à d'autres plateformes ou supports locaux peut faire émerger des candidats qui n'auraient pas vu l'annonce initialement.
    </p>
    <p>
      <strong>Actualiser l'annonce.</strong> Une annonce ancienne ou peu soignée — photos de mauvaise qualité, description sommaire — génère moins de contacts. La rafraîchir peut relancer l'intérêt.
    </p>
    <p>
      <strong>Accepter un ajustement tarifaire.</strong> Dans certains marchés peu actifs, un léger ajustement du loyer à la baisse peut permettre de trouver un locataire rapidement et de limiter le coût total de la vacance, plutôt que d'attendre plusieurs mois à un prix inadapté.
    </p>

    <h2 id="evaluer-risque">Évaluer le risque de vacance avant l'achat</h2>
    <p>
      L'évaluation du risque de vacance doit faire partie de la due diligence avant toute acquisition. Plusieurs indicateurs méritent d'être examinés :
    </p>
    <ul>
      <li><strong>L'historique de vacance du bien.</strong> Le vendeur peut transmettre un relevé de l'historique locatif sur les dernières années. Des périodes de vacance récurrentes sont un signal à analyser et à expliquer.</li>
      <li><strong>Les annonces actives dans la zone.</strong> Un grand nombre d'annonces non pourvues depuis plusieurs semaines peut indiquer une demande locale insuffisante ou une offre excédentaire.</li>
      <li><strong>La présence de self-storage professionnel.</strong> Des acteurs structurés proposant des offres flexibles, sécurisées et accessibles exercent une pression concurrentielle sur les garages traditionnels pour certains profils de locataires.</li>
      <li><strong>Le profil des locataires actuels.</strong> Des locataires stables, présents depuis plusieurs années, suggèrent une demande locale soutenue. Un turnover élevé indique un marché plus volatile ou un problème structurel du bien.</li>
    </ul>

    <div className="mt-8 pt-6 border-t border-slate-100">
      <h3 className="text-sm font-bold text-slate-700 mb-3">Sources et références</h3>
      <ul className="space-y-1">
        <li className="text-xs text-slate-500">→ Service-public.fr — Obligations du bailleur en matière d'entretien et de remise en état</li>
        <li className="text-xs text-slate-500">→ Legifrance.gouv.fr — Code civil, articles 1719 et suivants (obligations du bailleur)</li>
        <li className="text-xs text-slate-500">→ Service-public.fr — Location d'un garage ou d'un parking : droits et obligations</li>
      </ul>
    </div>

    <CalloutBox type="retenir" title="Ce qu'il faut retenir">
      La vacance locative est un risque structurel de tout investissement dans les espaces de stockage. Elle peut résulter de facteurs non maîtrisables (demande locale insuffisante) ou de facteurs évitables (loyer inadapté, visibilité insuffisante, état du bien dégradé). Intégrer une hypothèse de vacance réaliste dans le calcul de rentabilité, évaluer le risque local avant l'achat et mettre en place des pratiques préventives sont les trois piliers d'une gestion locative robuste.
    </CalloutBox>
  </div>
);

const assurancePnoContent = () => (
  <div className="prose-article">
    <p className="text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
      L'assurance propriétaire non occupant (PNO) est une garantie souscrite par le propriétaire d'un bien immobilier qu'il ne occupe pas lui-même. Elle couvre des risques que ni l'assurance de copropriété ni l'assurance du locataire ne prennent en charge systématiquement. Pour les espaces de stockage, elle mérite une attention particulière lors de toute acquisition.
    </p>

    <div className="my-8 bg-[#f8f9fa] rounded-xl border border-slate-100 p-6 flex items-center justify-center">
      <svg width="100%" height="200" viewBox="0 0 560 200" className="max-w-lg">
        <circle cx="200" cy="100" r="70" fill="#1e3a5f" opacity="0.12" stroke="#1e3a5f" strokeWidth="1.5"/>
        <circle cx="320" cy="100" r="70" fill="#22c55e" opacity="0.12" stroke="#22c55e" strokeWidth="1.5"/>
        <circle cx="260" cy="60" r="55" fill="#3b82f6" opacity="0.12" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="145" y="120" fontSize="10" fill="#1e3a5f" fontFamily="sans-serif" fontWeight="600">Copropriété</text>
        <text x="340" y="120" fontSize="10" fill="#166534" fontFamily="sans-serif" fontWeight="600">Locataire</text>
        <text x="240" y="30" fontSize="10" fill="#1d4ed8" fontFamily="sans-serif" fontWeight="600">PNO</text>
        <text x="215" y="95" fontSize="9" fill="#475569" fontFamily="sans-serif">Zone de</text>
        <text x="210" y="107" fontSize="9" fill="#475569" fontFamily="sans-serif">couverture</text>
        <text x="210" y="119" fontSize="9" fill="#475569" fontFamily="sans-serif">partagée</text>
      </svg>
    </div>

    <h2 id="qu-est-ce-que-pno">Qu'est-ce que l'assurance PNO ?</h2>
    <p>
      L'assurance propriétaire non occupant est un contrat d'assurance souscrit par le propriétaire d'un bien immobilier mis en location. Elle intervient dans les situations où la responsabilité du propriétaire est engagée et où les garanties du locataire ou de la copropriété sont absentes ou insuffisantes.
    </p>
    <p>
      Elle se distingue de l'assurance multirisque habitation (MRH) souscrite par le locataire, qui couvre les biens et la responsabilité civile de l'occupant, et de l'assurance de copropriété, qui couvre les parties communes et la responsabilité collective du syndicat. La PNO vient compléter ces deux couvertures en couvrant la responsabilité et les dommages du point de vue du propriétaire bailleur.
    </p>
    <p>
      Pour les espaces de stockage, la PNO est particulièrement pertinente car les locataires ne souscrivent pas toujours une assurance, et certains types de sinistres peuvent engager la responsabilité du propriétaire sans être couverts par la copropriété.
    </p>

    <CalloutBox type="vigilance">
      La souscription d'une assurance PNO n'est pas légalement obligatoire pour les espaces de stockage en dehors des copropriétés soumises à la loi ALUR. Elle est néanmoins fortement recommandée pour tout propriétaire bailleur, quelle que soit la configuration juridique du bien.
    </CalloutBox>

    <h2 id="risques-couverts">Les risques couverts et les exclusions typiques</h2>
    <p>
      Les garanties proposées dans les contrats PNO varient d'un assureur à l'autre. De manière générale, une PNO couvre tout ou partie des risques suivants :
    </p>
    <ul>
      <li><strong>Responsabilité civile du propriétaire :</strong> dommages causés à des tiers ou au locataire du fait du bien (défaut d'entretien, vice de construction, chute d'un élément du bâtiment) ;</li>
      <li><strong>Dommages aux biens immobiliers :</strong> incendie, dégât des eaux, tempête, catastrophe naturelle, actes de vandalisme — sur les parties du bien appartenant au propriétaire ;</li>
      <li><strong>Vacance locative partielle :</strong> certains contrats prévoient une garantie en cas de sinistre rendant le bien temporairement non louable ;</li>
      <li><strong>Recours des locataires et voisins :</strong> couverture des recours exercés contre le propriétaire à la suite d'un sinistre dont l'origine est dans son bien.</li>
    </ul>
    <p>
      Les exclusions courantes comprennent les dommages résultant d'un défaut d'entretien manifeste et documenté, les sinistres causés intentionnellement, et certains types de sinistres spécifiques selon les contrats (infiltrations d'origine inconnue, dommages liés à l'humidité chronique non déclarée, etc.).
    </p>

    <CalloutBox type="retenir">
      Lire attentivement les exclusions de garantie est aussi important que lire les garanties elles-mêmes. Un contrat PNO bon marché peut exclure précisément les risques les plus fréquents pour des espaces de stockage (infiltrations, humidité, dégâts des eaux).
    </CalloutBox>

    <h2 id="pno-vs-copropriete">PNO et assurance de copropriété : quelle articulation ?</h2>
    <p>
      Lorsque le lot de garages est soumis au régime de la copropriété, une assurance de l'immeuble est souscrite par le syndicat des copropriétaires. Elle couvre en principe les parties communes et peut inclure une couverture des parties privatives selon les clauses du contrat et le vote en assemblée générale.
    </p>
    <p>
      L'articulation entre l'assurance collective de la copropriété et la PNO du propriétaire bailleur est parfois source de confusion. En pratique, l'assurance copropriété ne couvre généralement pas la responsabilité civile du propriétaire bailleur en tant qu'individu, ni les dommages causés à des tiers ou à des locataires dont l'origine est une négligence spécifique au propriétaire.
    </p>
    <p>
      Il est recommandé de lire attentivement le contrat de copropriété pour identifier les garanties effectivement couvertes au titre des parties privatives, avant de souscrire une PNO. Cette lecture permet d'éviter les doublons et d'identifier les zones de non-couverture à combler.
    </p>

    <h2 id="responsabilite-civile">La responsabilité civile du propriétaire</h2>
    <p>
      Le propriétaire d'un espace de stockage peut voir sa responsabilité civile engagée dans plusieurs situations. L'article 1244 du Code civil (responsabilité du fait des choses) peut s'appliquer lorsqu'un dommage causé par un élément du bâtiment — chute d'un élément de toiture, effondrement d'une porte, rupture d'une canalisation — affecte un tiers ou le locataire.
    </p>
    <p>
      De même, si un sinistre prenant naissance dans un lot du propriétaire se propage à des parties communes ou à d'autres lots (incendie, dégât des eaux), la responsabilité du propriétaire peut être recherchée par la copropriété ou par d'autres copropriétaires.
    </p>
    <p>
      La garantie responsabilité civile incluse dans la plupart des contrats PNO couvre précisément ces situations. Son absence expose le propriétaire à devoir indemniser les victimes sur ses fonds propres, ce qui peut représenter des montants significatifs en cas de sinistre grave.
    </p>

    <CalloutBox type="legal">
      Les dispositions relatives à la responsabilité civile du propriétaire sont issues du Code civil (articles 1240 et suivants). Pour toute situation de sinistre complexe ou de mise en cause de la responsabilité, consultez un avocat spécialisé en droit immobilier.
    </CalloutBox>

    <h2 id="points-vigilance">Les points de vigilance à l'examen d'un contrat PNO</h2>
    <p>
      Avant de souscrire une assurance PNO pour des espaces de stockage, plusieurs points méritent une vérification attentive :
    </p>
    <ul>
      <li><strong>La définition de l'usage assuré.</strong> Certains contrats PNO sont conçus pour des logements et excluent explicitement les garages ou locaux de stockage. Vérifiez que la nature du bien est bien couverte par le contrat proposé.</li>
      <li><strong>Le montant des franchises.</strong> Une franchise élevée peut rendre la garantie peu utile pour des sinistres de faible ou moyenne importance, qui sont statistiquement les plus fréquents.</li>
      <li><strong>Les plafonds d'indemnisation.</strong> Vérifiez que les plafonds de garantie sont cohérents avec la valeur du bien et les risques potentiels.</li>
      <li><strong>Les délais de déclaration.</strong> La plupart des contrats imposent un délai de déclaration du sinistre (souvent 5 jours ouvrés). Le non-respect de ce délai peut entraîner une déchéance de garantie.</li>
      <li><strong>La couverture en cas de vacance prolongée.</strong> Certains contrats PNO réduisent ou suspendent les garanties si le bien est inoccupé au-delà d'une certaine durée. Ce point est particulièrement important pour les espaces de stockage susceptibles de rester vacants entre deux locataires.</li>
    </ul>

    <h2 id="cout-pno">Le coût d'une assurance PNO</h2>
    <p>
      Le coût d'une assurance PNO pour des espaces de stockage est variable selon les assureurs, la localisation du bien, sa superficie, son état et les garanties souscrites. Les tarifs pratiqués pour des garages et lots de boxes sont généralement plus modestes que pour des logements, en raison de la nature des risques couverts et de la valeur des biens.
    </p>
    <p>
      Il est conseillé de comparer plusieurs offres, en veillant à comparer des garanties équivalentes plutôt que des prix. Un contrat proposant un tarif très bas peut exclure des garanties essentielles. La prime d'assurance PNO constitue une charge annuelle à intégrer dans le calcul de rentabilité nette du bien.
    </p>
    <p>
      Du point de vue fiscal, la prime d'assurance PNO est une charge déductible des revenus fonciers au régime réel, au titre des frais de gestion et d'entretien du bien. Elle n'est pas déductible dans le cadre du régime microfoncier, qui applique un abattement forfaitaire couvrant l'ensemble des charges.
    </p>

    <div className="mt-8 pt-6 border-t border-slate-100">
      <h3 className="text-sm font-bold text-slate-700 mb-3">Sources et références</h3>
      <ul className="space-y-1">
        <li className="text-xs text-slate-500">→ Service-public.fr — Assurance du propriétaire non occupant (PNO)</li>
        <li className="text-xs text-slate-500">→ Legifrance.gouv.fr — Code civil, articles 1240 et suivants (responsabilité civile)</li>
        <li className="text-xs text-slate-500">→ Impots.gouv.fr — Revenus fonciers au régime réel : charges déductibles</li>
        <li className="text-xs text-slate-500">→ BOFIP (bofip.impots.gouv.fr) — BOI-RFPI-BASE-20-40 (charges déductibles des revenus fonciers)</li>
      </ul>
    </div>

    <CalloutBox type="retenir" title="Ce qu'il faut retenir">
      L'assurance PNO est un outil de protection du propriétaire bailleur face aux risques qui ne sont couverts ni par l'assurance de copropriété ni par l'assurance du locataire. Pour des espaces de stockage, elle couvre notamment la responsabilité civile du propriétaire et les dommages aux parties privatives. Avant de souscrire, vérifiez que la nature du bien est bien couverte, examinez les franchises, les plafonds et les conditions de vacance. La prime constitue une charge déductible au régime réel.
    </CalloutBox>
  </div>
);

const miseEnLocationLigneContent = () => (
  <div className="prose-article">
    <p className="text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
      La recherche d'un espace de stockage se fait aujourd'hui majoritairement en ligne. Que ce soit pour un particulier cherchant à stocker ses affaires lors d'un déménagement ou un artisan en quête d'un local pour ses matériaux, le réflexe premier est de consulter une plateforme ou un moteur de recherche. Être visible sur ces canaux est devenu une condition préalable à une mise en location rapide.
    </p>

    <div className="my-8 bg-[#f8f9fa] rounded-xl border border-slate-100 p-6 flex items-center justify-center">
      <svg width="100%" height="160" viewBox="0 0 560 160" className="max-w-lg">
        <rect x="20" y="60" width="90" height="40" rx="6" fill="#1e3a5f" opacity="0.15" stroke="#1e3a5f" strokeWidth="1"/>
        <text x="65" y="84" textAnchor="middle" fontSize="10" fill="#1e3a5f" fontFamily="sans-serif" fontWeight="600">Annonce</text>
        <path d="M112 80 L140 80" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)"/>
        <rect x="142" y="60" width="90" height="40" rx="6" fill="#3b82f6" opacity="0.15" stroke="#3b82f6" strokeWidth="1"/>
        <text x="187" y="84" textAnchor="middle" fontSize="10" fill="#1d4ed8" fontFamily="sans-serif" fontWeight="600">Contacts</text>
        <path d="M234 80 L262 80" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="264" y="60" width="90" height="40" rx="6" fill="#8b5cf6" opacity="0.15" stroke="#8b5cf6" strokeWidth="1"/>
        <text x="309" y="84" textAnchor="middle" fontSize="10" fill="#6d28d9" fontFamily="sans-serif" fontWeight="600">Visites</text>
        <path d="M356 80 L384 80" stroke="#94a3b8" strokeWidth="1.5"/>
        <rect x="386" y="60" width="90" height="40" rx="6" fill="#22c55e" opacity="0.15" stroke="#22c55e" strokeWidth="1"/>
        <text x="431" y="84" textAnchor="middle" fontSize="10" fill="#166534" fontFamily="sans-serif" fontWeight="600">Contrat</text>
        <text x="65" y="120" textAnchor="middle" fontSize="9" fill="#94a3b8" fontFamily="sans-serif">Diffusion</text>
        <text x="187" y="120" textAnchor="middle" fontSize="9" fill="#94a3b8" fontFamily="sans-serif">Sélection</text>
        <text x="309" y="120" textAnchor="middle" fontSize="9" fill="#94a3b8" fontFamily="sans-serif">Qualification</text>
        <text x="431" y="120" textAnchor="middle" fontSize="9" fill="#94a3b8" fontFamily="sans-serif">Signature</text>
      </svg>
    </div>

    <h2 id="canaux-disponibles">Les canaux disponibles pour louer un espace de stockage</h2>
    <p>
      Il existe plusieurs types de canaux pour diffuser une offre de location d'espace de stockage. Leur pertinence varie selon la localisation du bien, la cible visée (particuliers ou professionnels) et le niveau de service souhaité par le propriétaire.
    </p>
    <ul>
      <li><strong>Les plateformes immobilières généralistes</strong> : elles offrent une large audience et permettent d'atteindre des locataires potentiels qui consultent déjà ces sites pour d'autres recherches immobilières.</li>
      <li><strong>Les plateformes spécialisées dans le stockage</strong> : elles concentrent une audience explicitement à la recherche d'espaces de stockage, ce qui améliore la qualité des contacts générés.</li>
      <li><strong>Les réseaux sociaux et les groupes locaux</strong> : des groupes Facebook de quartier, des forums locaux ou des applications de mise en relation de voisinage permettent d'atteindre des locataires potentiels dans un rayon géographique précis.</li>
      <li><strong>L'affichage local</strong> : dans certains secteurs — notamment pour des garages en pied d'immeuble ou en résidence — une affiche visible depuis la voirie ou dans les parties communes reste efficace pour capter la demande de proximité.</li>
      <li><strong>Les agences immobilières locales</strong> : certaines agences gèrent ou diffusent des annonces de garages et boxes. Elles offrent un service clé en main mais prélèvent une commission.</li>
    </ul>

    <CalloutBox type="retenir">
      Multiplier les canaux de diffusion augmente mécaniquement le nombre de candidats potentiels et réduit le délai de mise en location. Ce gain doit être mis en regard du temps de gestion que représente la coordination de plusieurs annonces simultanées.
    </CalloutBox>

    <h2 id="plateformes-generiques">Les plateformes immobilières généralistes</h2>
    <p>
      Les grandes plateformes d'annonces immobilières en France permettent de publier des annonces pour des garages, caves et boxes. Elles disposent d'une audience large et d'une forte notoriété, ce qui leur confère un volume de trafic élevé.
    </p>
    <p>
      La publication d'une annonce sur ces plateformes est souvent payante pour les particuliers, avec des options de mise en avant payantes. Le coût de la visibilité est à mettre en perspective avec la durée moyenne de vacance que l'annonce permet d'éviter.
    </p>
    <p>
      Ces plateformes sont particulièrement adaptées lorsque la demande locale est soutenue et que le bien se distingue facilement dans les résultats de recherche (bon état, localisation centrale, prix compétitif). Elles sont moins efficaces dans les zones où la demande est faible, car le volume d'annonces publiées reste faible et la concurrence avec les autres offres est limitée.
    </p>

    <h2 id="plateformes-specialisees">Les plateformes spécialisées stockage</h2>
    <p>
      Des plateformes dédiées à la mise en relation entre propriétaires d'espaces de stockage et locataires se sont développées en France ces dernières années. Elles proposent généralement un modèle de commission sur les premières transactions ou un abonnement, en échange d'une interface de gestion et d'une mise en relation qualifiée.
    </p>
    <p>
      Leur avantage principal est la qualification de l'audience : les locataires qui consultent ces plateformes sont explicitement à la recherche d'un espace de stockage, ce qui réduit le nombre de contacts non pertinents. Certaines proposent également des services annexes (modèles de contrat, gestion des paiements, assurance) qui peuvent faciliter la gestion.
    </p>
    <p>
      La présence sur ce type de plateforme est complémentaire aux plateformes généralistes. Elle est particulièrement pertinente pour les propriétaires gérant plusieurs unités ou souhaitant déléguer une partie de la gestion administrative.
    </p>

    <h2 id="rediger-annonce">Rédiger une annonce efficace</h2>
    <p>
      Une annonce bien rédigée génère davantage de contacts qualifiés et réduit les échanges non aboutis. Plusieurs éléments sont déterminants :
    </p>
    <ul>
      <li><strong>La superficie exacte.</strong> Indiquer la surface en mètres carrés (et si possible les dimensions) permet au candidat d'évaluer immédiatement si l'espace correspond à son besoin.</li>
      <li><strong>L'accès et la localisation précise.</strong> L'adresse exacte n'est pas toujours nécessaire dans l'annonce, mais la proximité d'un axe ou d'un quartier de référence aide à qualifier l'intérêt. L'accessibilité (plain-pied, accès voiture, ascenseur) doit être précisée.</li>
      <li><strong>L'état général et les équipements.</strong> Mentionner l'éclairage, le type de fermeture, la présence d'électricité, l'état de la toiture ou du sol permet au candidat d'anticiper les conditions d'usage.</li>
      <li><strong>Le loyer mensuel charges comprises ou hors charges.</strong> Indiquer clairement ce qui est inclus dans le loyer évite les incompréhensions lors de la prise de contact.</li>
      <li><strong>Les conditions de location.</strong> Durée minimale, type de contrat, dépôt de garantie demandé : ces informations filtrent naturellement les candidats dont les attentes sont incompatibles avec vos conditions.</li>
    </ul>

    <CalloutBox type="vigilance">
      Une annonce imprécise génère des contacts non qualifiés et fait perdre du temps aux deux parties. Investir quelques minutes supplémentaires dans la rédaction de l'annonce améliore significativement la qualité des candidatures.
    </CalloutBox>

    <h2 id="photos-et-visites">Photographies et visites</h2>
    <p>
      Les photos sont le premier critère de sélection d'une annonce en ligne. Un espace photographié sous un bon éclairage, propre et dégagé donne une image plus favorable qu'un espace encombré photographié dans la pénombre, même si les deux espaces sont identiques par ailleurs.
    </p>
    <p>
      Quelques conseils pratiques : photographier l'espace après un nettoyage complet, utiliser un flash ou une lampe supplémentaire pour compenser l'absence d'éclairage naturel, inclure une photo de l'accès extérieur (portail, voie d'accès) et une photo de l'intérieur montrant le sol et la hauteur sous plafond.
    </p>
    <p>
      Concernant les visites, il est recommandé de les organiser en journée pour bénéficier d'un éclairage naturel maximal, et de préparer les réponses aux questions fréquentes (état de la toiture, montant exact des charges, conditions de résiliation, disponibilité d'un accès 24h/24).
    </p>

    <h2 id="gestion-candidatures">Gérer les candidatures et sélectionner un locataire</h2>
    <p>
      La sélection d'un locataire pour un espace de stockage est moins formalisée que pour un logement. Il n'existe pas de dossier type réglementé. Néanmoins, quelques vérifications élémentaires permettent de limiter le risque d'impayé :
    </p>
    <ul>
      <li>Vérifier l'identité du candidat (pièce d'identité valide) ;</li>
      <li>S'assurer de la cohérence entre l'usage déclaré et le profil du candidat ;</li>
      <li>Demander une justification de domicile ou d'activité pour évaluer la fiabilité du contact ;</li>
      <li>Recueillir un numéro de téléphone et une adresse email fonctionnels pour faciliter les échanges futurs.</li>
    </ul>
    <p>
      Pour les espaces loués à des professionnels ou artisans, vérifier l'existence légale de l'entreprise (via le registre SIRENE accessible sur annuaire-entreprises.data.gouv.fr) est une démarche simple qui apporte une information utile sur la viabilité du locataire potentiel.
    </p>

    <div className="mt-8 pt-6 border-t border-slate-100">
      <h3 className="text-sm font-bold text-slate-700 mb-3">Sources et références</h3>
      <ul className="space-y-1">
        <li className="text-xs text-slate-500">→ Annuaire-entreprises.data.gouv.fr — Vérification de l'existence légale d'une entreprise</li>
        <li className="text-xs text-slate-500">→ Service-public.fr — Location d'un garage ou d'un parking : droits et obligations</li>
        <li className="text-xs text-slate-500">→ Legifrance.gouv.fr — Code civil, articles 1709 et suivants (louage de choses)</li>
      </ul>
    </div>

    <CalloutBox type="retenir" title="Ce qu'il faut retenir">
      La mise en location en ligne d'un espace de stockage repose sur trois piliers : la visibilité (présence sur les canaux pertinents), la qualité de l'annonce (description précise, bonnes photos) et la gestion efficace des candidatures (réactivité, vérifications élémentaires). Ces pratiques réduisent le délai de mise en location et améliorent la qualité des locataires en place, ce qui limite la vacance et les incidents de gestion.
    </CalloutBox>
  </div>
);

const evaluerDemandeLocativeContent = () => (
  <div className="prose-article">
    <p className="text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
      L'analyse de la demande locative locale est l'une des étapes les moins formalisées — et pourtant les plus déterminantes — d'un projet d'acquisition d'espaces de stockage. Elle conditionne directement le niveau du loyer accessible, la vitesse de relocation en cas de départ d'un locataire, et le risque de vacance structurelle. C'est une investigation à conduire avant toute décision, pas après.
    </p>

    <div className="my-8 bg-[#f8f9fa] rounded-xl border border-slate-100 p-6 flex items-center justify-center">
      <svg width="100%" height="200" viewBox="0 0 400 200" className="max-w-sm">
        <circle cx="200" cy="100" r="80" fill="none" stroke="#1e3a5f" strokeWidth="1.5" opacity="0.3"/>
        <circle cx="200" cy="100" r="55" fill="none" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4"/>
        <circle cx="200" cy="100" r="30" fill="#1e3a5f" opacity="0.15" stroke="#1e3a5f" strokeWidth="1.5"/>
        <text x="200" y="104" textAnchor="middle" fontSize="10" fill="#1e3a5f" fontFamily="sans-serif" fontWeight="600">Zone cible</text>
        <text x="200" y="162" textAnchor="middle" fontSize="9" fill="#3b82f6" fontFamily="sans-serif">Zone intermédiaire</text>
        <text x="200" y="188" textAnchor="middle" fontSize="9" fill="#94a3b8" fontFamily="sans-serif">Zone de référence élargie</text>
      </svg>
    </div>

    <h2 id="pourquoi-evaluer">Pourquoi évaluer la demande avant d'acheter ?</h2>
    <p>
      Le marché des espaces de stockage est par nature très local. La demande dépend de la densité de population, du tissu économique local, de la présence de zones résidentielles à faibles surfaces habitables, et de la concurrence existante. Ces facteurs varient significativement d'un quartier à l'autre, voire d'une rue à l'autre dans certaines configurations urbaines.
    </p>
    <p>
      Une erreur fréquente consiste à raisonner à partir de données générales — "la demande de stockage augmente en France" — pour en déduire qu'un espace spécifique trouvera facilement un locataire. Cette extrapolation est trompeuse. La demande nationale ou régionale ne préjuge pas de la demande dans une zone géographique précise, et encore moins pour un type de bien particulier.
    </p>
    <p>
      L'objectif de l'analyse préalable n'est pas de prédire la rentabilité — ce n'est pas possible avec les données disponibles — mais d'identifier les signaux qui confirment ou infirment l'existence d'une demande locale active. C'est une démarche d'objectivation, pas de validation a posteriori d'une décision déjà prise.
    </p>

    <CalloutBox type="vigilance">
      L'analyse de la demande locative est une investigation à conduire personnellement sur le terrain et en ligne, avant de formuler une offre d'achat. Elle ne peut pas être entièrement déléguée à un vendeur ou à un agent dont l'intérêt est de conclure la transaction.
    </CalloutBox>

    <h2 id="indicateurs-indirects">Les indicateurs indirects de la demande</h2>
    <p>
      Il n'existe pas de données statistiques publiques fiables sur la demande locative pour les espaces de stockage à l'échelle locale. L'analyse repose donc sur des indicateurs indirects qui permettent d'inférer le niveau probable de la demande.
    </p>
    <p>
      <strong>La densité de population et la structure du logement.</strong> Dans les zones à forte densité — centres-villes, quartiers à forte proportion d'appartements de petite surface — la demande de stockage complémentaire est généralement plus soutenue que dans les zones pavillonnaires où les habitants disposent de garages et caves intégrés à leur logement.
    </p>
    <p>
      <strong>La mobilité résidentielle.</strong> Les zones connaissant une forte mobilité des ménages — villes universitaires, bassins d'emploi dynamiques, quartiers à forte population de locataires — génèrent plus de besoins de stockage temporaire que les zones à population stable.
    </p>
    <p>
      <strong>La présence d'activités économiques locales.</strong> Artisans, petits commerçants, professions libérales itinérantes : ces acteurs constituent une demande de stockage spécifique (matériaux, équipements, archives) souvent plus stable que la demande résidentielle.
    </p>
    <p>
      <strong>Les projets de rénovation urbaine et de densification.</strong> Des opérations de démolition de pavillons, de transformation d'anciennes zones industrielles ou de construction de logements collectifs peuvent modifier significativement la demande locale à moyen terme.
    </p>

    <h2 id="observer-offre">Observer l'offre existante</h2>
    <p>
      L'analyse de l'offre existante dans la zone est aussi informative que l'analyse directe de la demande. Un marché où l'offre est abondante et les prix bas signale soit une demande insuffisante, soit une concurrence structurelle forte (self-storage professionnel, grande quantité de garages disponibles).
    </p>
    <p>
      Les éléments à observer incluent :
    </p>
    <ul>
      <li>Le nombre d'espaces de stockage en location dans la zone de chalandise immédiate (rayon de 500 mètres à 2 kilomètres selon la configuration urbaine) ;</li>
      <li>La durée de mise en ligne des annonces actives : une annonce restée non pourvue depuis plusieurs semaines ou mois est un signal de demande insuffisante ou de prix inadapté ;</li>
      <li>La présence d'acteurs professionnels de self-storage à proximité, qui captent souvent la demande la plus solvable avec des offres flexibles et sécurisées ;</li>
      <li>Les prix pratiqués par les offres concurrentes actives, qui constituent la fourchette de référence pour positionner un futur loyer.</li>
    </ul>

    <CalloutBox type="retenir">
      Observer les annonces non pourvues depuis longtemps est souvent plus instructif que compter les annonces existantes. Une offre abondante peut coexister avec une demande forte ; des annonces vieilles de plusieurs mois signalent quasi systématiquement un déséquilibre entre l'offre et la demande.
    </CalloutBox>

    <h2 id="annonces-en-ligne">Lire les annonces en ligne : ce qu'elles révèlent</h2>
    <p>
      Les plateformes d'annonces immobilières constituent une source d'information directement exploitable pour l'analyse de la demande locale. Plusieurs lectures sont possibles à partir de ces données :
    </p>
    <p>
      <strong>Le nombre d'annonces actives dans la zone.</strong> Une zone avec peu d'annonces peut signifier soit une faible offre (favorable : les locataires potentiels ont peu de choix), soit une faible demande (défavorable : les propriétaires ne prennent même pas la peine de publier car la relocation est lente). Le contexte local permet de distinguer les deux situations.
    </p>
    <p>
      <strong>La date de première mise en ligne.</strong> Sur certaines plateformes, la date de publication de l'annonce est visible. Une annonce récente est neutre ; une annonce publiée depuis plusieurs mois sans avoir trouvé preneur est un signal négatif.
    </p>
    <p>
      <strong>L'évolution des prix demandés.</strong> Si des annonces similaires ont baissé leur prix récemment, cela peut indiquer une pression à la baisse sur le marché local.
    </p>
    <p>
      <strong>Les caractéristiques des biens en offre.</strong> Observer ce que proposent les offres concurrentes — état, surface, accès, équipements — permet de situer le bien envisagé dans le spectre de l'offre locale et d'évaluer son positionnement concurrentiel.
    </p>

    <h2 id="echanger-localement">Échanger avec les acteurs locaux</h2>
    <p>
      L'analyse documentaire et en ligne ne remplace pas la connaissance de terrain. Plusieurs types d'acteurs locaux peuvent apporter des informations qualitatives utiles :
    </p>
    <ul>
      <li><strong>Les agences immobilières locales.</strong> Un agent qui gère ou met en location des garages dans la zone dispose d'une connaissance directe du marché : délai de relocation habituel, profil des locataires, niveau des prix acceptables.</li>
      <li><strong>Les notaires locaux.</strong> Ils réalisent des transactions sur ce type de bien et ont une vision des prix pratiqués et de l'activité du marché.</li>
      <li><strong>Les propriétaires de biens similaires dans la zone.</strong> Certains forums ou groupes de propriétaires permettent d'échanger des informations sur les conditions réelles du marché local.</li>
      <li><strong>Les locataires potentiels eux-mêmes.</strong> Publier une annonce test avant même d'avoir signé le compromis peut permettre de mesurer l'intérêt réel : le nombre de contacts générés en quelques jours donne une indication directe de la demande locale.</li>
    </ul>

    <CalloutBox type="vigilance">
      Les informations fournies par le vendeur sur l'état de la demande locale sont à traiter avec prudence : son intérêt est de rassurer l'acheteur sur le potentiel locatif du bien. Croisez systématiquement ces informations avec des sources indépendantes.
    </CalloutBox>

    <h2 id="limites-analyse">Les limites de l'analyse préliminaire</h2>
    <p>
      L'analyse de la demande locative avant achat est nécessaire mais ne garantit pas les résultats futurs. Plusieurs limites méritent d'être gardées à l'esprit :
    </p>
    <p>
      <strong>La demande peut évoluer.</strong> L'arrivée d'un acteur professionnel de self-storage dans la zone, une opération de rénovation urbaine modifiant la structure du quartier, ou un changement du tissu économique local peuvent modifier le niveau de la demande après l'acquisition.
    </p>
    <p>
      <strong>L'analyse porte sur le marché, pas sur le bien spécifique.</strong> Un marché local actif ne garantit pas qu'un bien particulier trouvera facilement un locataire. L'état du bien, son accessibilité, son prix et sa visibilité jouent également un rôle déterminant.
    </p>
    <p>
      <strong>Les données disponibles sont imparfaites.</strong> Les annonces en ligne ne représentent qu'une fraction des transactions réelles. Les transactions de gré à gré, les locations issues du bouche-à-oreille ou les marchés locaux peu numérisés sont sous-représentés dans les données observables.
    </p>

    <div className="mt-8 pt-6 border-t border-slate-100">
      <h3 className="text-sm font-bold text-slate-700 mb-3">Sources et références</h3>
      <ul className="space-y-1">
        <li className="text-xs text-slate-500">→ INSEE.fr — Données démographiques et de logement par commune (recensement)</li>
        <li className="text-xs text-slate-500">→ Annuaire-entreprises.data.gouv.fr — Présence d'activités économiques locales</li>
        <li className="text-xs text-slate-500">→ Geoportail.gouv.fr — Cartographie et occupation des sols</li>
        <li className="text-xs text-slate-500">→ Notaires.fr — Données de transactions immobilières locales (base DVF)</li>
      </ul>
    </div>

    <CalloutBox type="retenir" title="Ce qu'il faut retenir">
      Évaluer la demande locative avant d'acquérir un espace de stockage est une démarche d'investigation multi-sources : données démographiques, observation des annonces actives, échanges avec les acteurs locaux. Elle ne produit pas de certitudes mais permet d'identifier des signaux de marché favorables ou défavorables. Un marché local actif est un prérequis — insuffisant à lui seul — pour envisager un investissement sérieux dans un espace de stockage.
    </CalloutBox>
  </div>
);

const reglementCoproprieteContent = () => (
  <div className="prose-article">
    <p className="text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
      Le règlement de copropriété n'est pas un simple document administratif. C'est un acte juridique qui définit les droits et obligations de chaque copropriétaire, encadre l'usage des lots privatifs, organise la répartition des charges et détermine les conditions de fonctionnement de la copropriété. Pour un investisseur, ne pas le lire avant d'acquérir, c'est s'engager les yeux fermés.
    </p>

    <div className="my-8 bg-[#f8f9fa] rounded-xl border border-slate-100 p-6 flex items-center justify-center">
      <svg width="100%" height="200" viewBox="0 0 520 200" className="max-w-lg">
        <rect x="180" y="10" width="160" height="180" rx="6" fill="#e8eef5" stroke="#1e3a5f" strokeWidth="1.5"/>
        <rect x="190" y="25" width="140" height="30" rx="4" fill="#1e3a5f" opacity="0.12"/>
        <text x="260" y="45" textAnchor="middle" fontSize="10" fill="#1e3a5f" fontFamily="sans-serif" fontWeight="600">Parties communes</text>
        <rect x="190" y="65" width="60" height="50" rx="4" fill="#3b82f6" opacity="0.15" stroke="#3b82f6" strokeWidth="1"/>
        <text x="220" y="88" textAnchor="middle" fontSize="9" fill="#1d4ed8" fontFamily="sans-serif">Lot 1</text>
        <text x="220" y="100" textAnchor="middle" fontSize="8" fill="#94a3b8" fontFamily="sans-serif">Privé</text>
        <rect x="260" y="65" width="60" height="50" rx="4" fill="#3b82f6" opacity="0.15" stroke="#3b82f6" strokeWidth="1"/>
        <text x="290" y="88" textAnchor="middle" fontSize="9" fill="#1d4ed8" fontFamily="sans-serif">Lot 2</text>
        <text x="290" y="100" textAnchor="middle" fontSize="8" fill="#94a3b8" fontFamily="sans-serif">Privé</text>
        <rect x="190" y="125" width="130" height="50" rx="4" fill="#22c55e" opacity="0.12" stroke="#22c55e" strokeWidth="1"/>
        <text x="255" y="153" textAnchor="middle" fontSize="9" fill="#166534" fontFamily="sans-serif">Accès véhicule — usage commun</text>
        <text x="50" y="95" fontSize="9" fill="#94a3b8" fontFamily="sans-serif">Usage autorisé</text>
        <text x="50" y="108" fontSize="9" fill="#94a3b8" fontFamily="sans-serif">→ à vérifier</text>
        <line x1="125" y1="103" x2="185" y2="90" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,2"/>
        <text x="355" y="95" fontSize="9" fill="#94a3b8" fontFamily="sans-serif">Tantièmes</text>
        <text x="355" y="108" fontSize="9" fill="#94a3b8" fontFamily="sans-serif">→ charges</text>
        <line x1="352" y1="103" x2="335" y2="90" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,2"/>
      </svg>
    </div>

    <h2 id="role-reglement">Le rôle du règlement de copropriété</h2>
    <p>
      Institué par la loi du 10 juillet 1965 et son décret d'application du 17 mars 1967, le règlement de copropriété est le document fondateur qui régit la vie de toute copropriété. Il détermine la destination de l'immeuble, fixe les conditions d'utilisation de chaque lot privatif et des parties communes, et précise les règles de répartition des charges entre copropriétaires.
    </p>
    <p>
      Ce document s'impose à tous les copropriétaires successifs : en acquérant un lot, le nouveau propriétaire est automatiquement lié par le règlement en vigueur, même s'il n'en a pas pris connaissance. Cette opposabilité automatique est une raison majeure de procéder à sa lecture attentive avant toute décision d'achat.
    </p>
    <p>
      Le règlement est complété par l'état descriptif de division, qui liste précisément tous les lots de la copropriété, leurs références cadastrales et leurs tantièmes. Ces deux documents forment un ensemble indissociable que le vendeur est tenu de remettre à l'acquéreur avant la signature du compromis, conformément aux dispositions de la loi ALUR (loi n° 2014-366 du 24 mars 2014).
    </p>

    <CalloutBox type="legal">
      Le règlement de copropriété et l'état descriptif de division font partie des documents obligatoires que le vendeur doit remettre à l'acquéreur avant la signature du compromis de vente, en application des articles L. 721-1 et suivants du Code de la construction et de l'habitation. Votre notaire vérifiera la complétude de cette remise.
    </CalloutBox>

    <h2 id="usage-autorise">L'usage autorisé du local : première vérification clé</h2>
    <p>
      La clause la plus déterminante pour un investisseur est celle qui définit la destination autorisée du lot. Le règlement de copropriété fixe la destination générale de l'immeuble — résidentielle, commerciale, mixte — et peut préciser, lot par lot, l'usage auquel chaque local est destiné.
    </p>
    <p>
      Un lot désigné comme "garage" peut autoriser le stationnement de véhicules mais interdire ou limiter l'usage comme espace de stockage commercial. À l'inverse, un lot désigné comme "local de rangement" ou "cave" peut interdire l'accès à des véhicules ou tout usage professionnel.
    </p>
    <p>
      Ces distinctions ne sont pas anodines. Un propriétaire qui louerait un garage pour un usage non autorisé par le règlement de copropriété s'exposerait à une mise en demeure par le syndic, voire à une action en justice de la copropriété pour trouble de jouissance.
    </p>
    <p>
      Concrètement, il faut s'assurer que l'usage envisagé — location à un particulier pour stockage, location à un artisan pour ses matériaux, usage mixte stationnement et stockage — est bien compatible avec la destination du lot telle qu'elle est définie dans le règlement.
    </p>

    <CalloutBox type="vigilance">
      Ne vous contentez pas de la description verbale du vendeur ou de l'agent sur l'usage autorisé. Lisez directement la clause de destination du lot dans le règlement de copropriété, et demandez à votre notaire de confirmer l'interprétation applicable à votre projet d'exploitation.
    </CalloutBox>

    <h2 id="restrictions-locatives">Les restrictions à la mise en location</h2>
    <p>
      Certains règlements de copropriété contiennent des clauses qui encadrent ou limitent la mise en location des lots privatifs. Ces clauses sont licites dans la mesure où elles ne constituent pas une interdiction absolue de louer — ce qui serait contraire au droit de propriété — mais peuvent imposer des conditions spécifiques.
    </p>
    <p>
      Les restrictions les plus fréquemment rencontrées incluent :
    </p>
    <ul>
      <li><strong>L'obligation d'information du syndic</strong> en cas de changement de locataire ou de mise en location d'un lot jusqu'alors occupé par le propriétaire ;</li>
      <li><strong>L'interdiction de sous-louer</strong> le lot ou de le mettre à disposition à titre onéreux pour des durées très courtes ;</li>
      <li><strong>Des restrictions sur le profil des locataires</strong> — professionnels exclusivement, particuliers exclusivement, exclusion de certaines activités jugées incompatibles avec la destination de l'immeuble ;</li>
      <li><strong>Des clauses de bon voisinage</strong> imposant des horaires d'accès ou des niveaux sonores, pouvant contraindre l'exploitation si les locataires ont besoin d'un accès permanent ou de livraisons fréquentes.</li>
    </ul>
    <p>
      Ces restrictions peuvent sembler secondaires lors de l'acquisition, mais elles peuvent devenir des obstacles opérationnels réels une fois le bien mis en location.
    </p>

    <h2 id="charges-et-repartition">La répartition des charges et les tantièmes</h2>
    <p>
      Le règlement de copropriété fixe les tantièmes de chaque lot, c'est-à-dire la quote-part de parties communes attachée à chaque lot privatif. Ces tantièmes déterminent la répartition des charges de copropriété entre copropriétaires.
    </p>
    <p>
      Pour un lot de garages, les tantièmes sont généralement faibles — les lots de petite surface, sans cave ni annexe, contribuent moins aux charges que les appartements. Cette caractéristique est favorable au bailleur, mais il faut vérifier que les tantièmes correspondent bien à la configuration réelle du lot et n'ont pas été établis de manière défavorable lors de la constitution de la copropriété.
    </p>
    <p>
      Le règlement peut prévoir plusieurs catégories de charges — charges générales et charges spéciales — avec des clés de répartition différentes. Les charges d'ascenseur, par exemple, peuvent être réparties selon un coefficient de quote-part différent des charges générales. Pour des lots situés au niveau du sol, certaines charges peuvent être exclues de la répartition.
    </p>
    <p>
      Il est utile de vérifier, à partir des appels de charges des deux à trois dernières années, si le montant réellement appelé au titre du lot est cohérent avec les tantièmes et avec la clé de répartition prévue au règlement. Des anomalies peuvent signaler des erreurs dans l'application du règlement ou des charges imputées à tort.
    </p>

    <CalloutBox type="retenir">
      Des tantièmes faibles ne signifient pas des charges nulles. Même avec une quote-part réduite, les charges de copropriété peuvent peser sur la rentabilité si le niveau global des charges de la copropriété est élevé. C'est le montant absolu annuel qui compte dans le calcul de rentabilité nette, pas le ratio de tantièmes.
    </CalloutBox>

    <h2 id="travaux-et-ag">Travaux votés et fonds de réserve</h2>
    <p>
      Le règlement de copropriété fixe les règles de majorité pour le vote des travaux en assemblée générale. Il est important de comprendre que des travaux votés mais non encore réalisés au moment de la vente restent à la charge du vendeur ou de l'acquéreur selon les dispositions du compromis et la date du vote.
    </p>
    <p>
      Les travaux votés lors d'une assemblée générale antérieure à la promesse de vente sont en principe à la charge du vendeur pour les appels de fonds antérieurs à la signature, et à la charge de l'acquéreur pour les appels de fonds postérieurs. La rédaction du compromis doit préciser ces conditions. Une négligence sur ce point peut conduire l'acquéreur à supporter des charges inattendues dans les mois suivant l'acquisition.
    </p>
    <p>
      Depuis la loi ALUR, toute copropriété doit constituer un fonds de travaux alimenté par des cotisations annuelles des copropriétaires (articles 14-2 de la loi du 10 juillet 1965). L'état de ce fonds — son niveau, son objectif et les travaux envisagés — renseigne sur la santé financière de la copropriété et les dépenses prévisibles à moyen terme.
    </p>

    <h2 id="points-vigilance-pratiques">Les points de vigilance pratiques</h2>
    <p>
      À titre de synthèse, voici les points à vérifier systématiquement dans le règlement de copropriété avant toute décision d'acquisition :
    </p>
    <ul>
      <li>La destination du lot dans l'état descriptif de division : garage, parking, local de rangement, cave — et les usages autorisés associés ;</li>
      <li>L'existence de clauses limitant la mise en location ou imposant des conditions spécifiques aux locataires ;</li>
      <li>Les clauses relatives aux accès — horaires, modalités d'ouverture, présence d'un gardien — susceptibles de contraindre l'exploitation ;</li>
      <li>La répartition des charges et les tantièmes du lot, à comparer avec les appels de charges réels des dernières années ;</li>
      <li>Les travaux votés en assemblée générale et non encore réalisés ou non encore appelés ;</li>
      <li>Le niveau du fonds de travaux et les travaux envisagés à moyen terme ;</li>
      <li>Les éventuelles servitudes grevant le lot ou les parties communes qui lui sont attachées.</li>
    </ul>

    <div className="mt-8 pt-6 border-t border-slate-100">
      <h3 className="text-sm font-bold text-slate-700 mb-3">Sources et références</h3>
      <ul className="space-y-1">
        <li className="text-xs text-slate-500">→ Legifrance.gouv.fr — Loi n° 65-557 du 10 juillet 1965 (statut de la copropriété)</li>
        <li className="text-xs text-slate-500">→ Legifrance.gouv.fr — Décret n° 67-223 du 17 mars 1967 (application de la loi de 1965)</li>
        <li className="text-xs text-slate-500">→ Legifrance.gouv.fr — Code de la construction et de l'habitation, art. L. 721-1 et s. (documents à remettre à l'acquéreur)</li>
        <li className="text-xs text-slate-500">→ Service-public.fr — Copropriété : règlement et état descriptif de division</li>
      </ul>
    </div>

    <CalloutBox type="retenir" title="Ce qu'il faut retenir">
      Le règlement de copropriété conditionne directement l'exploitation d'un espace de stockage acquis dans une copropriété. Vérifier la destination autorisée du lot, les restrictions à la mise en location, la répartition des charges et les travaux votés est indispensable avant toute décision. Ce document, transmis obligatoirement par le vendeur avant le compromis, mérite une lecture attentive — et si besoin, une interprétation par votre notaire.
    </CalloutBox>
  </div>
);

const chargesCoproprieteContent = () => (
  <div className="prose-article">
    <p className="text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
      Dans l'analyse de rentabilité d'un lot de garages, les charges de copropriété sont souvent le poste le plus sous-estimé. On retient le loyer, on calcule un rendement brut séduisant — et on oublie que les charges peuvent représenter une part significative du loyer annuel, modifiant profondément le rendement net réel.
    </p>

    <div className="my-8 bg-[#f8f9fa] rounded-xl border border-slate-100 p-6 flex items-center justify-center">
      <svg width="100%" height="180" viewBox="0 0 480 180" className="max-w-lg">
        <rect x="30" y="30" width="80" height="120" rx="4" fill="#1e3a5f" opacity="0.85"/>
        <text x="70" y="100" textAnchor="middle" fontSize="10" fill="white" fontFamily="sans-serif" fontWeight="600">Loyer</text>
        <text x="70" y="113" textAnchor="middle" fontSize="9" fill="#93c5fd" fontFamily="sans-serif">brut</text>
        <rect x="150" y="70" width="80" height="80" rx="4" fill="#f59e0b" opacity="0.8"/>
        <text x="190" y="115" textAnchor="middle" fontSize="10" fill="white" fontFamily="sans-serif" fontWeight="600">Charges</text>
        <text x="190" y="128" textAnchor="middle" fontSize="9" fill="#fef3c7" fontFamily="sans-serif">copro</text>
        <rect x="270" y="55" width="80" height="95" rx="4" fill="#94a3b8" opacity="0.7"/>
        <text x="310" y="103" textAnchor="middle" fontSize="10" fill="white" fontFamily="sans-serif" fontWeight="600">Autres</text>
        <text x="310" y="116" textAnchor="middle" fontSize="9" fill="#e2e8f0" fontFamily="sans-serif">charges</text>
        <rect x="390" y="90" width="60" height="60" rx="4" fill="#22c55e" opacity="0.8"/>
        <text x="420" y="123" textAnchor="middle" fontSize="10" fill="white" fontFamily="sans-serif" fontWeight="600">Net</text>
        <text x="70" y="165" textAnchor="middle" fontSize="8" fill="#94a3b8" fontFamily="sans-serif">100 %</text>
        <text x="190" y="165" textAnchor="middle" fontSize="8" fill="#94a3b8" fontFamily="sans-serif">variable</text>
        <text x="310" y="165" textAnchor="middle" fontSize="8" fill="#94a3b8" fontFamily="sans-serif">variable</text>
        <text x="420" y="165" textAnchor="middle" fontSize="8" fill="#94a3b8" fontFamily="sans-serif">résidu</text>
      </svg>
    </div>

    <h2 id="nature-charges">La nature des charges de copropriété</h2>
    <p>
      Les charges de copropriété recouvrent l'ensemble des dépenses engagées pour l'administration, la conservation et l'entretien des parties communes de l'immeuble. Elles se distinguent des dépenses liées aux parties privatives, qui restent à la charge exclusive de chaque copropriétaire.
    </p>
    <p>
      La loi du 10 juillet 1965 distingue deux catégories principales de charges. Les <strong>charges générales</strong> sont celles qui bénéficient à l'ensemble des copropriétaires : administration générale, entretien des parties communes, assurance de l'immeuble, honoraires du syndic. Les <strong>charges spéciales</strong> concernent les services ou équipements dont seuls certains copropriétaires bénéficient : ascenseur, gardiennage, chauffage collectif, espaces verts propres à un bâtiment.
    </p>
    <p>
      Pour un lot de garages situé en rez-de-chaussée ou en sous-sol, la part de charges spéciales est souvent réduite — l'absence d'ascenseur, de chauffage collectif ou de gardiennage propre à cet espace limite les postes facturables. Mais les charges générales restent dues, et leur niveau dépend de la structure globale de la copropriété.
    </p>

    <h2 id="charges-courantes">Les charges courantes : entretien et gestion</h2>
    <p>
      Les charges courantes sont celles qui se répètent d'année en année et peuvent être anticipées avec une relative fiabilité. Elles incluent principalement :
    </p>
    <ul>
      <li>Les honoraires du syndic (professionnel ou bénévole), qui constituent souvent le poste le plus important dans les petites copropriétés ;</li>
      <li>Les primes d'assurance de l'immeuble, couvrant a minima la responsabilité civile et les dommages aux parties communes ;</li>
      <li>Les contrats de maintenance des équipements collectifs (portails automatiques, éclairage des parties communes, systèmes de sécurité) ;</li>
      <li>Les frais de nettoyage et d'entretien des allées et espaces communs ;</li>
      <li>Les frais de gestion bancaire du syndicat.</li>
    </ul>
    <p>
      Le niveau de ces charges varie considérablement selon la taille de la copropriété, sa localisation, son ancienneté et le niveau de service qu'elle offre. Pour s'en faire une idée précise, il faut analyser les relevés de charges des deux à trois dernières années, disponibles dans les documents transmis par le vendeur.
    </p>

    <CalloutBox type="retenir">
      Demandez systématiquement les relevés de charges des trois dernières années, pas seulement le dernier. Cela permet d'identifier les tendances — des charges en hausse régulière peuvent signaler une copropriété mal gérée ou des équipements vieillissants — et les postes exceptionnels qui ne doivent pas être pris en compte dans les charges courantes prévisionnelles.
    </CalloutBox>

    <h2 id="charges-exceptionnelles">Les charges exceptionnelles et travaux votés</h2>
    <p>
      En complément des charges courantes, les copropriétés votent régulièrement des travaux en assemblée générale. Ces dépenses exceptionnelles — ravalement de façade, réfection de toiture, mise aux normes électriques, travaux d'accessibilité — peuvent représenter des montants significatifs et s'ajoutent aux charges courantes lors de leur appel.
    </p>
    <p>
      Ces travaux sont décidés à des majorités variables selon leur nature (article 25, article 24 ou article 26 de la loi du 10 juillet 1965). Une fois votés, ils s'imposent à tous les copropriétaires, y compris à celui qui a voté contre.
    </p>
    <p>
      Avant d'acquérir, il faut identifier :
    </p>
    <ul>
      <li>Les travaux déjà votés et dont tout ou partie des appels de fonds interviendront après l'acquisition ;</li>
      <li>Les travaux discutés informellement ou mis à l'ordre du jour des prochaines assemblées ;</li>
      <li>L'état général du bâtiment, qui conditionne la probabilité de travaux importants à moyen terme.</li>
    </ul>

    <CalloutBox type="vigilance">
      Un lot présenté avec un rendement brut attractif peut devenir moins intéressant si des travaux importants sont votés dans les mois suivant l'acquisition. La lecture des procès-verbaux des trois dernières assemblées générales est indispensable pour détecter ces situations.
    </CalloutBox>

    <h2 id="fonds-travaux">Le fonds de travaux obligatoire (loi ALUR)</h2>
    <p>
      Depuis la loi ALUR du 24 mars 2014, tout syndicat de copropriétaires est tenu de constituer un fonds de travaux destiné à financer les dépenses de conservation et d'entretien prévisibles à moyen terme (article 14-2 de la loi du 10 juillet 1965). Ce fonds est alimenté par des cotisations annuelles de l'ensemble des copropriétaires.
    </p>
    <p>
      La cotisation minimale est fixée à 5 % du budget prévisionnel annuel de la copropriété, sauf vote d'un montant supérieur par l'assemblée générale. Ce fonds est attaché au lot et non à la personne du copropriétaire : en cas de vente, les sommes versées par le vendeur restent acquises à la copropriété et ne peuvent être remboursées au vendeur.
    </p>
    <p>
      Un fonds de travaux bien doté est un signal positif sur la santé financière de la copropriété. Un fonds insuffisant ou inexistant peut annoncer des appels de fonds exceptionnels dans les prochaines années.
    </p>

    <h2 id="impact-rentabilite">L'impact sur la rentabilité nette : un calcul illustratif</h2>
    <p>
      Pour illustrer l'impact des charges de copropriété, voici un raisonnement avec des hypothèses entièrement fictives, à ne pas appliquer directement à un projet réel. Supposons un lot de garages générant un loyer annuel brut de 3 000 (quelle qu'en soit l'unité). La rentabilité brute est calculée en divisant ce loyer par le prix d'acquisition total.
    </p>
    <p>
      Si les charges de copropriété annuelles s'élèvent à 400 — soit environ 13 % du loyer brut — et que les autres charges (taxe foncière, assurance PNO, frais de gestion éventuels) représentent 500 supplémentaires, le revenu net avant fiscalité tombe à 2 100, soit 30 % de moins que le loyer brut. Sur la même base de prix d'achat, la rentabilité nette est donc significativement inférieure à la rentabilité brute.
    </p>
    <p>
      Ce raisonnement illustratif montre que la rentabilité brute ne peut pas servir de critère unique de comparaison entre deux biens. Des charges de copropriété élevées peuvent effacer entièrement l'avantage apparent d'un loyer brut supérieur.
    </p>

    <CalloutBox type="retenir">
      La rentabilité nette avant fiscalité — calculée après déduction de toutes les charges réelles — est le ratio pertinent pour comparer des projets entre eux. La rentabilité brute est un indicateur de départ utile, mais insuffisant pour une décision d'investissement éclairée.
    </CalloutBox>

    <h2 id="analyser-avant-achat">Comment analyser les charges avant l'achat</h2>
    <p>
      L'analyse des charges de copropriété doit s'appuyer sur les documents transmis par le vendeur. Plusieurs démarches concrètes permettent d'obtenir une image fiable :
    </p>
    <ul>
      <li><strong>Lire les relevés de charges des trois dernières années</strong> en distinguant les charges courantes des appels exceptionnels liés à des travaux ;</li>
      <li><strong>Identifier le montant annuel moyen</strong> sur la période, en excluant les postes exceptionnels non récurrents ;</li>
      <li><strong>Consulter les procès-verbaux des assemblées générales</strong> pour identifier les travaux votés ou envisagés ;</li>
      <li><strong>Vérifier le montant du fonds de travaux</strong> et sa progression sur les dernières années ;</li>
      <li><strong>Obtenir l'état daté</strong>, document fourni par le syndic à la demande du vendeur, qui récapitule la situation financière du lot vis-à-vis de la copropriété — impayés éventuels, avances, appels de fonds en cours.</li>
    </ul>

    <div className="mt-8 pt-6 border-t border-slate-100">
      <h3 className="text-sm font-bold text-slate-700 mb-3">Sources et références</h3>
      <ul className="space-y-1">
        <li className="text-xs text-slate-500">→ Legifrance.gouv.fr — Loi n° 65-557 du 10 juillet 1965, art. 10 (charges de copropriété), art. 14-2 (fonds de travaux)</li>
        <li className="text-xs text-slate-500">→ Service-public.fr — Charges de copropriété : calcul et répartition</li>
        <li className="text-xs text-slate-500">→ Service-public.fr — État daté lors d'une vente en copropriété</li>
        <li className="text-xs text-slate-500">→ BOFIP (bofip.impots.gouv.fr) — BOI-RFPI-BASE-20-40 (charges déductibles des revenus fonciers)</li>
      </ul>
    </div>

    <CalloutBox type="retenir" title="Ce qu'il faut retenir">
      Les charges de copropriété sont un poste structurel à intégrer dans tout calcul de rentabilité nette. Elles varient selon la taille et la qualité de la copropriété, et peuvent être significativement augmentées par des travaux votés ou prévisibles. Analyser les relevés des trois dernières années, consulter les procès-verbaux d'assemblée et vérifier l'état daté sont les étapes indispensables pour estimer avec réalisme le poids de ce poste dans l'exploitation future.
    </CalloutBox>
  </div>
);

const gererImpayesContent = () => (
  <div className="prose-article">
    <p className="text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
      Un impayé de loyer, même modeste, peut rapidement déstabiliser l'équilibre financier d'un investissement dans des espaces de stockage. Sur ce type de bien, les montants en jeu sont souvent limités, mais les coûts de procédure et les délais légaux peuvent dépasser la valeur du loyer réclamé. La prévention reste la première ligne de défense — et la connaissance des procédures, la seconde.
    </p>

    <div className="my-8 bg-[#f8f9fa] rounded-xl border border-slate-100 p-6 flex items-center justify-center">
      <svg width="100%" height="140" viewBox="0 0 560 140" className="max-w-2xl">
        <circle cx="60" cy="70" r="22" fill="#f59e0b" opacity="0.2" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="60" y="68" textAnchor="middle" fontSize="8" fill="#92400e" fontFamily="sans-serif" fontWeight="600">Impayé</text>
        <text x="60" y="79" textAnchor="middle" fontSize="8" fill="#92400e" fontFamily="sans-serif">détecté</text>
        <line x1="84" y1="70" x2="106" y2="70" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arr)"/>
        <circle cx="130" cy="70" r="22" fill="#f59e0b" opacity="0.3" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="130" y="68" textAnchor="middle" fontSize="8" fill="#92400e" fontFamily="sans-serif" fontWeight="600">Relance</text>
        <text x="130" y="79" textAnchor="middle" fontSize="8" fill="#92400e" fontFamily="sans-serif">amiable</text>
        <line x1="154" y1="70" x2="176" y2="70" stroke="#94a3b8" strokeWidth="1.5"/>
        <circle cx="200" cy="70" r="22" fill="#ef4444" opacity="0.15" stroke="#ef4444" strokeWidth="1.5"/>
        <text x="200" y="68" textAnchor="middle" fontSize="8" fill="#991b1b" fontFamily="sans-serif" fontWeight="600">Mise en</text>
        <text x="200" y="79" textAnchor="middle" fontSize="8" fill="#991b1b" fontFamily="sans-serif">demeure</text>
        <line x1="224" y1="70" x2="246" y2="70" stroke="#94a3b8" strokeWidth="1.5"/>
        <circle cx="270" cy="70" r="22" fill="#ef4444" opacity="0.25" stroke="#ef4444" strokeWidth="1.5"/>
        <text x="270" y="68" textAnchor="middle" fontSize="8" fill="#991b1b" fontFamily="sans-serif" fontWeight="600">Procédure</text>
        <text x="270" y="79" textAnchor="middle" fontSize="8" fill="#991b1b" fontFamily="sans-serif">judiciaire</text>
        <line x1="294" y1="70" x2="316" y2="70" stroke="#94a3b8" strokeWidth="1.5"/>
        <circle cx="340" cy="70" r="22" fill="#1e3a5f" opacity="0.15" stroke="#1e3a5f" strokeWidth="1.5"/>
        <text x="340" y="68" textAnchor="middle" fontSize="8" fill="#1e3a5f" fontFamily="sans-serif" fontWeight="600">Titre</text>
        <text x="340" y="79" textAnchor="middle" fontSize="8" fill="#1e3a5f" fontFamily="sans-serif">exécutoire</text>
        <line x1="364" y1="70" x2="386" y2="70" stroke="#94a3b8" strokeWidth="1.5"/>
        <circle cx="410" cy="70" r="22" fill="#22c55e" opacity="0.2" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="410" y="68" textAnchor="middle" fontSize="8" fill="#166534" fontFamily="sans-serif" fontWeight="600">Reprise</text>
        <text x="410" y="79" textAnchor="middle" fontSize="8" fill="#166534" fontFamily="sans-serif">des lieux</text>
      </svg>
    </div>

    <h2 id="prevention-avant-tout">La prévention : première ligne de défense</h2>
    <p>
      La gestion des impayés commence bien avant le premier loyer non réglé. Plusieurs pratiques préventives permettent de limiter significativement le risque d'impayé et, lorsqu'il survient, d'en réduire l'ampleur.
    </p>
    <p>
      <strong>La sélection rigoureuse du locataire.</strong> Vérifier l'identité du candidat, s'assurer de la cohérence entre l'usage déclaré et le profil présenté, et obtenir des informations de contact fiables constituent le minimum. Pour les locations à des professionnels ou artisans, vérifier l'existence légale de l'entreprise via le registre SIRENE (annuaire-entreprises.data.gouv.fr) apporte une information utile sur la viabilité du locataire.
    </p>
    <p>
      <strong>Le contrat écrit avec clause de dépôt de garantie.</strong> Un contrat de location formalisé par écrit, prévoyant un dépôt de garantie d'un à deux mois de loyer, est indispensable. Le dépôt de garantie ne couvre pas entièrement le risque d'impayé prolongé, mais il offre une première protection et incite le locataire à maintenir ses paiements pour en obtenir la restitution à son départ.
    </p>
    <p>
      <strong>Le suivi régulier des paiements.</strong> Une vérification mensuelle des encaissements permet de détecter un retard dès le premier mois. Un impayé traité rapidement — avant qu'il ne s'accumule sur plusieurs mois — est toujours plus facile à résoudre qu'une dette locative ancienne.
    </p>

    <CalloutBox type="retenir">
      Un dépôt de garantie d'un mois de loyer protège partiellement contre un impayé court. Il ne protège pas contre une dette locative de plusieurs mois. La prévention la plus efficace reste la sélection sérieuse du locataire et le suivi attentif des paiements.
    </CalloutBox>

    <h2 id="premier-impaye">Réagir au premier impayé</h2>
    <p>
      Dès qu'un loyer n'est pas réglé à l'échéance prévue, il est conseillé de prendre contact avec le locataire rapidement — par téléphone ou par message — pour en comprendre la cause. Un retard de quelques jours résulte souvent d'un oubli ou d'un problème technique de virement, et se règle sans formalité.
    </p>
    <p>
      Si le locataire ne répond pas ou si le paiement n'intervient pas dans un délai raisonnable, il convient de passer à une relance formelle par écrit. Un courrier simple ou un email daté, rappelant le montant dû et demandant le règlement dans un délai précis, constitue un premier niveau de formalisation.
    </p>
    <p>
      Cette étape est importante non seulement pour le dialogue avec le locataire, mais aussi pour constituer un dossier en cas de procédure ultérieure. Un historique documenté des relances démontre la bonne foi du bailleur et la mise en œuvre de démarches préalables à toute action judiciaire.
    </p>

    <h2 id="mise-en-demeure">La mise en demeure : étape formelle</h2>
    <p>
      Si la relance amiable ne produit pas d'effet, l'étape suivante est la mise en demeure par lettre recommandée avec accusé de réception. Ce courrier formel constitue le locataire en demeure de payer, au sens des articles 1344 et suivants du Code civil.
    </p>
    <p>
      La mise en demeure doit indiquer précisément la somme réclamée (loyers impayés, avec les mois concernés), la date à partir de laquelle le retard est constaté, et le délai accordé pour régulariser la situation. Elle marque le point de départ des intérêts de retard éventuels et constitue une pièce essentielle du dossier judiciaire si la procédure se poursuit.
    </p>
    <p>
      À ce stade, il peut être utile de consulter un avocat spécialisé en droit immobilier ou en droit des baux pour vérifier la pertinence des démarches et anticiper les étapes suivantes.
    </p>

    <CalloutBox type="legal">
      La mise en demeure n'est pas une obligation légale préalable à toute action judiciaire dans les baux de droit commun, mais elle constitue une pratique recommandée qui démontre la bonne foi du bailleur et renforce le dossier. Consultez un avocat pour adapter la démarche à votre situation spécifique.
    </CalloutBox>

    <h2 id="procedures-judiciaires">Les procédures judiciaires applicables</h2>
    <p>
      Si le locataire ne régularise pas sa situation malgré la mise en demeure, plusieurs voies judiciaires peuvent être envisagées. Le choix dépend du montant en jeu, du type de contrat (droit commun ou bail commercial) et de l'objectif poursuivi (recouvrement de la créance, résiliation du bail, expulsion).
    </p>
    <p>
      <strong>L'injonction de payer</strong> (articles 1405 et suivants du Code de procédure civile) est une procédure simplifiée permettant d'obtenir rapidement un titre exécutoire pour le recouvrement d'une créance non contestée. Elle est initiée par une requête présentée au tribunal judiciaire compétent, sans audience contradictoire dans un premier temps. Si le juge fait droit à la demande, une ordonnance est rendue et signifiée au débiteur. En l'absence d'opposition dans le délai imparti (un mois à compter de la signification), l'ordonnance devient un titre exécutoire permettant de saisir les biens ou les revenus du débiteur.
    </p>
    <p>
      <strong>L'action en résiliation du bail</strong> peut être engagée parallèlement ou séparément, devant le tribunal judiciaire, pour obtenir la résiliation judiciaire du contrat de location pour non-paiement du loyer. Elle nécessite une audience contradictoire et aboutit, en cas de succès, à un jugement ordonnant la résiliation et, le cas échéant, l'expulsion du locataire.
    </p>
    <p>
      Pour les baux commerciaux (locataires professionnels dont l'activité est exercée dans les lieux loués), des règles spécifiques s'appliquent, notamment en matière de résiliation et d'expulsion. Le recours à un avocat spécialisé est indispensable dans ce cas.
    </p>

    <CalloutBox type="vigilance">
      Les procédures judiciaires sont longues et coûteuses. Pour des espaces de stockage dont le loyer mensuel est modeste, le coût d'une procédure complète peut dépasser la valeur de la créance réclamée. Évaluez l'opportunité économique d'une procédure avant de l'engager, en tenant compte des honoraires d'avocat, des frais d'huissier et des délais prévisibles.
    </CalloutBox>

    <h2 id="delais-et-couts">Délais et coûts à anticiper</h2>
    <p>
      Les délais judiciaires varient selon les juridictions, le niveau de charge des tribunaux et la complexité de la situation. Il serait trompeur d'avancer des chiffres précis qui ne reflèteraient pas la diversité des situations réelles. Ce qu'il faut retenir :
    </p>
    <ul>
      <li>Une procédure d'injonction de payer non contestée peut aboutir à un titre exécutoire en quelques semaines à quelques mois ;</li>
      <li>Une procédure contradictoire (audience avec les deux parties) implique des délais plus longs, qui dépendent du rôle d'audience du tribunal ;</li>
      <li>Une expulsion, si elle est nécessaire, requiert un jugement d'expulsion, puis son exécution par un huissier, et respecte des délais légaux stricts (notamment l'interdiction d'expulsion pendant la trêve hivernale, du 1er novembre au 31 mars).</li>
    </ul>
    <p>
      Les coûts comprennent les honoraires d'avocat (variables selon les barreaux et les modes de facturation), les frais d'huissier pour la signification des actes, et les éventuels frais de justice. Certains contrats d'assurance propriétaire non occupant ou de garantie des loyers impayés (GLI) couvrent tout ou partie de ces frais — c'est un point à vérifier lors de la souscription.
    </p>

    <h2 id="reprise-des-lieux">La reprise des lieux après départ du locataire</h2>
    <p>
      Lorsque le locataire quitte les lieux — qu'il s'agisse d'un départ volontaire ou d'une expulsion — plusieurs formalités s'imposent avant de remettre l'espace en location.
    </p>
    <p>
      Un état des lieux de sortie contradictoire, réalisé en présence du locataire ou de son représentant, permet de documenter l'état du bien à son départ et de comparer avec l'état des lieux d'entrée. Cet état des lieux est indispensable pour justifier une éventuelle retenue sur le dépôt de garantie.
    </p>
    <p>
      Les articles 1731 et suivants du Code civil précisent les règles applicables en matière de restitution du dépôt de garantie et de charges imputables au locataire. Si aucun état des lieux n'a été réalisé à l'entrée, le locataire est présumé avoir reçu le logement en bon état — ce qui limite les possibilités de retenue.
    </p>
    <p>
      Le dépôt de garantie ne peut être retenu qu'à hauteur des dommages réellement constatés et justifiés. Toute retenue abusive expose le bailleur à une action du locataire et à des dommages-intérêts.
    </p>

    <div className="mt-8 pt-6 border-t border-slate-100">
      <h3 className="text-sm font-bold text-slate-700 mb-3">Sources et références</h3>
      <ul className="space-y-1">
        <li className="text-xs text-slate-500">→ Legifrance.gouv.fr — Code civil, art. 1344 et s. (mise en demeure), art. 1728 (obligations du locataire), art. 1731 (état des lieux)</li>
        <li className="text-xs text-slate-500">→ Legifrance.gouv.fr — Code de procédure civile, art. 1405 et s. (injonction de payer)</li>
        <li className="text-xs text-slate-500">→ Service-public.fr — Impayés de loyer : démarches du propriétaire</li>
        <li className="text-xs text-slate-500">→ Service-public.fr — Trêve hivernale : règles d'expulsion</li>
      </ul>
    </div>

    <CalloutBox type="retenir" title="Ce qu'il faut retenir">
      La gestion des impayés sur les espaces de stockage suit les règles du droit commun des baux. La prévention — sélection rigoureuse, contrat écrit, dépôt de garantie, suivi mensuel — reste la stratégie la plus efficace et la moins coûteuse. En cas d'impayé, la réaction rapide (relance amiable, mise en demeure, procédure judiciaire) limite l'accumulation de la dette. Les procédures judiciaires peuvent être longues et coûteuses par rapport aux montants en jeu sur des petites unités — leur opportunité économique mérite d'être évaluée au cas par cas, idéalement avec l'avis d'un professionnel.
    </CalloutBox>
  </div>
);

const nomPropreSocieteContent = () => (
  <div className="prose-article">
    <p className="text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
      La question de la structure de détention est l'une des premières que pose un investisseur avant d'acquérir des espaces de stockage. Nom propre, SCI à l'IR, SCI à l'IS, société commerciale : chaque option a des conséquences fiscales, patrimoniales et pratiques distinctes. Aucune n'est universellement meilleure — tout dépend de la situation personnelle, des objectifs et du volume de l'investissement.
    </p>

    <div className="my-8 bg-[#f8f9fa] rounded-xl border border-slate-100 p-6 flex items-center justify-center">
      <svg width="100%" height="180" viewBox="0 0 560 180" className="max-w-2xl">
        <rect x="10" y="20" width="120" height="130" rx="6" fill="#1e3a5f" opacity="0.08" stroke="#1e3a5f" strokeWidth="1.5"/>
        <text x="70" y="42" textAnchor="middle" fontSize="10" fill="#1e3a5f" fontFamily="sans-serif" fontWeight="700">Nom propre</text>
        <text x="70" y="62" textAnchor="middle" fontSize="8.5" fill="#475569" fontFamily="sans-serif">IR — revenus fonciers</text>
        <text x="70" y="78" textAnchor="middle" fontSize="8.5" fill="#475569" fontFamily="sans-serif">Simple à constituer</text>
        <text x="70" y="94" textAnchor="middle" fontSize="8.5" fill="#475569" fontFamily="sans-serif">Patrimoine mélangé</text>
        <text x="70" y="110" textAnchor="middle" fontSize="8.5" fill="#475569" fontFamily="sans-serif">Succession directe</text>
        <rect x="145" y="20" width="120" height="130" rx="6" fill="#3b82f6" opacity="0.08" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="205" y="42" textAnchor="middle" fontSize="10" fill="#1d4ed8" fontFamily="sans-serif" fontWeight="700">SCI à l'IR</text>
        <text x="205" y="62" textAnchor="middle" fontSize="8.5" fill="#475569" fontFamily="sans-serif">IR — transparence fiscale</text>
        <text x="205" y="78" textAnchor="middle" fontSize="8.5" fill="#475569" fontFamily="sans-serif">Multi-associés possible</text>
        <text x="205" y="94" textAnchor="middle" fontSize="8.5" fill="#475569" fontFamily="sans-serif">Gestion parts facilitée</text>
        <text x="205" y="110" textAnchor="middle" fontSize="8.5" fill="#475569" fontFamily="sans-serif">Comptabilité requise</text>
        <rect x="280" y="20" width="120" height="130" rx="6" fill="#8b5cf6" opacity="0.08" stroke="#8b5cf6" strokeWidth="1.5"/>
        <text x="340" y="42" textAnchor="middle" fontSize="10" fill="#6d28d9" fontFamily="sans-serif" fontWeight="700">SCI à l'IS</text>
        <text x="340" y="62" textAnchor="middle" fontSize="8.5" fill="#475569" fontFamily="sans-serif">IS — amortissement possible</text>
        <text x="340" y="78" textAnchor="middle" fontSize="8.5" fill="#475569" fontFamily="sans-serif">Plus-value différente</text>
        <text x="340" y="94" textAnchor="middle" fontSize="8.5" fill="#475569" fontFamily="sans-serif">Séparation patrimoniale</text>
        <text x="340" y="110" textAnchor="middle" fontSize="8.5" fill="#475569" fontFamily="sans-serif">Dividendes taxés</text>
        <rect x="415" y="20" width="130" height="130" rx="6" fill="#22c55e" opacity="0.08" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="480" y="42" textAnchor="middle" fontSize="10" fill="#166534" fontFamily="sans-serif" fontWeight="700">Société commerciale</text>
        <text x="480" y="58" textAnchor="middle" fontSize="8.5" fill="#166534" fontFamily="sans-serif">(SARL, SAS)</text>
        <text x="480" y="78" textAnchor="middle" fontSize="8.5" fill="#475569" fontFamily="sans-serif">IS — activité commerciale</text>
        <text x="480" y="94" textAnchor="middle" fontSize="8.5" fill="#475569" fontFamily="sans-serif">Protection du patrimoine</text>
        <text x="480" y="110" textAnchor="middle" fontSize="8.5" fill="#475569" fontFamily="sans-serif">Obligations comptables</text>
      </svg>
    </div>

    <CalloutBox type="legal">
      Les éléments présentés dans cet article sont à caractère informatif et pédagogique. La fiscalité et le droit des sociétés évoluent régulièrement. Les taux, seuils et régimes mentionnés sont susceptibles de changer. Consultez impérativement un expert-comptable, un avocat fiscaliste ou un notaire avant toute décision de structure de détention.
    </CalloutBox>

    <h2 id="nom-propre">L'acquisition en nom propre</h2>
    <p>
      L'acquisition en nom propre est la forme la plus simple et la plus directe. L'investisseur achète le bien en tant que personne physique, sans interposition de structure. Les revenus locatifs sont imposés à l'impôt sur le revenu dans la catégorie des revenus fonciers (articles 14 et suivants du Code général des impôts).
    </p>
    <p>
      Le régime microfoncier s'applique lorsque les revenus fonciers bruts ne dépassent pas un certain seuil fixé par la loi (à vérifier car susceptible d'évoluer). Il prévoit un abattement forfaitaire représentatif des charges. Le régime réel permet de déduire les charges réelles : intérêts d'emprunt, charges de copropriété, taxe foncière, assurance, frais de gestion, travaux d'entretien et de réparation. Le choix entre les deux régimes dépend du niveau effectif des charges.
    </p>
    <p>
      Les avantages de l'acquisition en nom propre incluent la simplicité de constitution (pas de société à créer, pas de statuts à rédiger), l'absence d'obligations comptables spécifiques, et la disponibilité directe des revenus sans distribution.
    </p>
    <p>
      Parmi les points à avoir en tête : les revenus s'ajoutent aux autres revenus du foyer fiscal et sont imposés au taux marginal applicable, les prélèvements sociaux s'appliquent aux revenus nets, et le bien entre dans l'assiette successorale du propriétaire dans les conditions du droit commun.
    </p>

    <h2 id="sci-ir">La SCI à l'impôt sur le revenu</h2>
    <p>
      La Société Civile Immobilière (SCI) est une société de droit civil constituée pour détenir et gérer un ou plusieurs biens immobiliers. Par défaut, elle est soumise à l'impôt sur le revenu selon le régime de la transparence fiscale : la société n'est pas elle-même imposée ; les bénéfices sont imposés directement entre les mains des associés, proportionnellement à leurs parts.
    </p>
    <p>
      La SCI à l'IR présente plusieurs intérêts pratiques pour les investisseurs souhaitant associer plusieurs personnes (conjoints, membres d'une famille, associés) : elle facilite la gestion des parts, organise la répartition des revenus et des charges entre associés, et peut simplifier la transmission du patrimoine par donations de parts.
    </p>
    <p>
      Du point de vue fiscal, les revenus sont traités comme des revenus fonciers pour chaque associé, avec les mêmes règles que l'acquisition en nom propre. Les déficits fonciers éventuels peuvent être imputés sur le revenu global des associés, dans les limites prévues par la loi.
    </p>
    <p>
      La SCI impose des obligations formelles : rédaction de statuts, immatriculation, tenue d'une assemblée annuelle, comptabilité à minima. Ces obligations ont un coût et une complexité de gestion supérieurs à l'acquisition en nom propre.
    </p>

    <CalloutBox type="vigilance">
      Une SCI mal gérée — absence de comptabilité, confusion entre patrimoine personnel et patrimoniale social, non-respect des formalités — peut être remise en cause par l'administration fiscale ou les créanciers. La constitution d'une SCI doit s'accompagner d'une gestion rigoureuse et d'un accompagnement professionnel.
    </CalloutBox>

    <h2 id="sci-is">La SCI à l'impôt sur les sociétés</h2>
    <p>
      Une SCI peut opter pour l'impôt sur les sociétés (IS). Cette option est en principe irrévocable. Elle modifie profondément le régime fiscal de la société et de ses associés.
    </p>
    <p>
      Sous le régime de l'IS, la société est imposée sur ses bénéfices à un taux d'impôt sur les sociétés (à vérifier selon la législation en vigueur). Elle peut pratiquer l'amortissement comptable des biens immobiliers — ce qui réduit le résultat imposable pendant la durée d'amortissement — et déduire un périmètre de charges plus large qu'au régime foncier.
    </p>
    <p>
      En contrepartie, les dividendes versés aux associés sont soumis à une double imposition : une première fois au niveau de la société (IS), une seconde fois au niveau des associés lors de la distribution (prélèvement forfaitaire unique ou barème de l'IR sur la part imposable des dividendes).
    </p>
    <p>
      Par ailleurs, lors de la cession d'un bien, la plus-value est calculée sur la valeur nette comptable du bien — qui a été amortie au fil des années — et non sur le prix d'acquisition initial. Cela peut générer une plus-value imposable significativement plus élevée qu'au régime des particuliers, où la plus-value immobilière bénéficie d'abattements progressifs selon la durée de détention.
    </p>

    <h2 id="sarl-sas">Les sociétés commerciales (SARL, SAS)</h2>
    <p>
      Des investisseurs choisissent parfois des formes sociales commerciales — Société à Responsabilité Limitée (SARL) ou Société par Actions Simplifiée (SAS) — pour détenir des espaces de stockage. Cette option est principalement envisageable lorsque l'activité immobilière s'inscrit dans un cadre plus large (activité de self-storage exploitée directement, location meublée professionnelle, développement d'un patrimoine à l'IS dans une holding).
    </p>
    <p>
      Ces structures offrent une séparation juridique claire entre le patrimoine personnel des associés et le patrimoine social, sous réserve d'une gestion conforme. Elles sont soumises à l'IS, avec les mêmes avantages et inconvénients qu'une SCI à l'IS.
    </p>
    <p>
      Pour une détention patrimoniale simple de garages ou de boxes, ces structures apportent peu d'avantages supplémentaires par rapport à une SCI et comportent des obligations réglementaires et comptables comparables.
    </p>

    <h2 id="criteres-de-choix">Les critères structurants du choix</h2>
    <p>
      Sans pouvoir préconiser une structure universellement adaptée — ce qui dépend de chaque situation personnelle — plusieurs questions permettent d'orienter la réflexion :
    </p>
    <ul>
      <li><strong>Quel est le taux marginal d'imposition à l'IR ?</strong> Plus il est élevé, plus l'option IS peut sembler intéressante à court terme — mais la double imposition des distributions doit être intégrée dans le calcul.</li>
      <li><strong>Y a-t-il plusieurs investisseurs ou un projet de transmission ?</strong> La SCI facilite la répartition des parts entre associés et la donation progressive à des héritiers.</li>
      <li><strong>Quel est l'horizon de détention ?</strong> Un bien destiné à être revendu à moyen terme peut être pénalisé fiscalement sous le régime IS en raison de la plus-value calculée sur la valeur nette comptable amortie.</li>
      <li><strong>Y a-t-il un projet d'emprunt ?</strong> Certains établissements bancaires peuvent avoir des conditions différentes selon la structure de l'emprunteur.</li>
      <li><strong>Quelle est la complexité acceptable ?</strong> La constitution et la gestion d'une société impliquent des coûts fixes (expert-comptable, frais de constitution, obligations déclaratives) qui ne se justifient pas pour un investissement de faible volume.</li>
    </ul>

    <h2 id="indispensable-professionnel">Pourquoi ce choix nécessite un professionnel</h2>
    <p>
      Le choix de la structure de détention est l'une des décisions les plus techniques et les plus personnelles en matière d'investissement immobilier. Les paramètres à prendre en compte — situation fiscale personnelle, revenus du foyer, objectifs patrimoniaux, horizon de cession, projets de transmission — varient d'un investisseur à l'autre et évoluent dans le temps.
    </p>
    <p>
      La fiscalité immobilière et le droit des sociétés sont des domaines en constante évolution. Les taux d'imposition, les seuils des régimes, les abattements applicables aux plus-values et les règles de déductibilité sont susceptibles de changer à chaque loi de finances. Une stratégie fiscalement optimale aujourd'hui peut ne plus l'être dans cinq ans.
    </p>
    <p>
      Enfin, les interactions entre les différentes options — régime fiscal, droit successoral, régime matrimonial, détention indivise — créent des combinaisons dont les effets ne sont pas intuitifs et nécessitent une analyse croisée que seul un professionnel qualifié peut conduire de manière fiable.
    </p>

    <div className="mt-8 pt-6 border-t border-slate-100">
      <h3 className="text-sm font-bold text-slate-700 mb-3">Sources et références</h3>
      <ul className="space-y-1">
        <li className="text-xs text-slate-500">→ Legifrance.gouv.fr — Code général des impôts, art. 14 et s. (revenus fonciers), art. 238 bis K (SCI à l'IS)</li>
        <li className="text-xs text-slate-500">→ BOFIP (bofip.impots.gouv.fr) — BOI-RFPI (revenus fonciers — régime général)</li>
        <li className="text-xs text-slate-500">→ Impots.gouv.fr — Revenus fonciers : microfoncier et régime réel</li>
        <li className="text-xs text-slate-500">→ Service-public.fr — Société civile immobilière (SCI) : constitution et fonctionnement</li>
      </ul>
    </div>

    <CalloutBox type="retenir" title="Ce qu'il faut retenir">
      Le choix entre nom propre, SCI à l'IR, SCI à l'IS et société commerciale est une décision structurante qui dépend de la situation personnelle de l'investisseur, de ses objectifs et de son horizon de détention. Il n'existe pas de structure universellement optimale. Ce choix doit être fait avec l'accompagnement d'un expert-comptable ou d'un conseiller fiscal, avant l'acquisition, car certaines options sont difficiles à modifier après coup. La complexité et le coût de gestion d'une structure juridique doivent être mis en regard du volume et de la rentabilité de l'investissement envisagé.
    </CalloutBox>
  </div>
);

const financerAchatGaragesContent = () => (
  <div className="prose-article">
    <p className="text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
      Financer l'achat d'un lot de garages ne se fait pas de la même façon qu'un investissement résidentiel classique. Les banques appréhendent différemment ce type d'actif, les exigences d'apport peuvent varier, et la structure juridique choisie influence directement les modalités du crédit. Autant de paramètres à anticiper avant de consulter un établissement financier.
    </p>

    <div className="my-8 bg-[#f8f9fa] rounded-xl border border-slate-100 p-6 flex items-center justify-center">
      <svg width="100%" height="160" viewBox="0 0 500 160" className="max-w-lg">
        <text x="10" y="20" fontSize="11" fill="#94a3b8" fontFamily="sans-serif">Structure de financement — exemple illustratif</text>
        {/* Barre apport */}
        <rect x="10" y="35" width="100" height="40" rx="4" fill="#22c55e" opacity="0.7"/>
        <text x="60" y="60" textAnchor="middle" fontSize="10" fill="white" fontFamily="sans-serif" fontWeight="bold">Apport</text>
        {/* Barre crédit */}
        <rect x="115" y="35" width="250" height="40" rx="4" fill="#1e3a5f" opacity="0.75"/>
        <text x="240" y="60" textAnchor="middle" fontSize="10" fill="white" fontFamily="sans-serif" fontWeight="bold">Crédit immobilier</text>
        {/* Frais */}
        <rect x="370" y="35" width="80" height="40" rx="4" fill="#94a3b8" opacity="0.6"/>
        <text x="410" y="60" textAnchor="middle" fontSize="10" fill="white" fontFamily="sans-serif" fontWeight="bold">Frais</text>
        {/* Légende */}
        <text x="10" y="105" fontSize="10" fill="#94a3b8" fontFamily="sans-serif">Apport : variable selon la banque et le profil</text>
        <text x="10" y="120" fontSize="10" fill="#94a3b8" fontFamily="sans-serif">Crédit : durée et taux à négocier selon le dossier</text>
        <text x="10" y="135" fontSize="10" fill="#94a3b8" fontFamily="sans-serif">Frais : notaire, agence, travaux éventuels</text>
      </svg>
    </div>

    <h2 id="banques-et-garages">1. Comment les banques appréhendent ce type d'actif</h2>
    <p>
      Les lots de garages et les espaces de stockage ne bénéficient pas du même traitement bancaire que l'immobilier résidentiel. Plusieurs raisons expliquent cette différence d'approche.
    </p>
    <p>
      D'abord, la liquidité de ces actifs est généralement considérée comme moindre. En cas de défaut de remboursement et de saisie, la banque estime que la revente d'un lot de garages peut prendre plus de temps et s'avérer moins prévisible qu'un appartement. Cette perception influe sur le niveau de risque attribué au dossier.
    </p>
    <p>
      Ensuite, les revenus locatifs issus de garages sont perçus comme moins stables que ceux d'un logement, dont la demande est structurellement soutenue. La vacance locative possible, la difficulté à évaluer le marché local, et l'absence de données de référence standardisées contribuent à cette réserve.
    </p>
    <p>
      Enfin, toutes les banques ne financent pas ce type d'actif avec la même appétence. Certains établissements, notamment les grandes banques de réseau, peuvent être plus réticents que des établissements régionaux ou des courtiers spécialisés dans l'investissement locatif.
    </p>

    <CalloutBox type="vigilance">
      Ne présumez pas qu'une banque qui finance votre résidence principale financera automatiquement votre investissement en garages dans les mêmes conditions. Renseignez-vous en amont sur la politique de l'établissement vis-à-vis de ce type d'actif avant de monter un dossier complet.
    </CalloutBox>

    <h2 id="apport-attendu">2. Le niveau d'apport généralement attendu</h2>
    <p>
      Le niveau d'apport exigé pour un investissement locatif en espaces de stockage dépend de plusieurs facteurs : l'établissement prêteur, le profil de l'emprunteur, la qualité du bien, et l'environnement de taux au moment de la demande.
    </p>
    <p>
      En règle générale, les banques sont plus exigeantes en termes d'apport sur les investissements locatifs que sur les résidences principales. Pour un bien de type "garages", cet apport peut être plus élevé encore, certains établissements demandant que l'emprunteur couvre non seulement les frais de notaire mais également une fraction plus importante du prix d'acquisition.
    </p>
    <p>
      Il est difficile de donner un chiffre universel : les pratiques varient d'un établissement à l'autre et évoluent avec les conditions de marché. La meilleure approche est de consulter plusieurs banques ou un courtier spécialisé pour obtenir des offres comparables.
    </p>

    <CalloutBox type="retenir">
      Prévoyez systématiquement de couvrir les frais de notaire (généralement entre 7 et 8 % du prix d'acquisition pour un bien ancien) par votre apport personnel, en complément de l'éventuelle fraction du prix demandée par la banque. Ces frais ne sont jamais financés par le crédit dans les conditions standards.
    </CalloutBox>

    <h2 id="capacite-emprunt">3. La capacité d'emprunt et le calcul de la banque</h2>
    <p>
      La banque évalue la solvabilité de l'emprunteur selon des critères précis. Pour un investissement locatif, deux approches coexistent selon les établissements.
    </p>
    <p>
      <strong>L'approche "différentielle"</strong> consiste à intégrer les revenus locatifs attendus dans le calcul de la capacité d'emprunt, en ne retenant qu'un pourcentage de ces revenus (souvent entre 70 et 80 % pour tenir compte des charges, de la vacance et de la fiscalité). Cette approche est plus favorable à l'emprunteur.
    </p>
    <p>
      <strong>L'approche "globale"</strong> additionne simplement les charges du nouveau crédit aux charges existantes, sans tenir compte des revenus locatifs potentiels. Elle est plus conservative et peut aboutir à un refus même pour un projet dont la rentabilité est avérée.
    </p>
    <p>
      Pour les garages, la banque demandera généralement à voir les baux en cours ou, à défaut, une estimation de loyer basée sur le marché local. Un lot entièrement vacant présente un risque locatif perçu plus important et peut nécessiter un dossier de présentation plus solide.
    </p>

    <h2 id="structure-acquisition">4. La structure d'acquisition et son impact sur le financement</h2>
    <p>
      Selon que vous acquérez en nom propre, via une SCI à l'IR ou via une société à l'IS, les conditions de financement peuvent varier significativement.
    </p>
    <p>
      <strong>En nom propre</strong> : le financement est accordé à la personne physique. Les revenus locatifs sont traités comme des revenus fonciers. La capacité d'emprunt est évaluée sur la base des revenus personnels et des charges existantes.
    </p>
    <p>
      <strong>Via une SCI à l'IR</strong> : la banque peut financer la SCI ou l'associé personne physique selon les cas. Dans une SCI à l'IR, les résultats sont transparents fiscalement et remontent dans la déclaration des associés. La banque regarde généralement les revenus des associés pour évaluer la solvabilité.
    </p>
    <p>
      <strong>Via une société à l'IS</strong> : le financement peut être accordé à la société elle-même, sous réserve qu'elle présente des garanties suffisantes. Pour une société récente ou sans historique de résultats, les banques peuvent demander une caution personnelle des dirigeants.
    </p>

    <CalloutBox type="legal">
      Le choix de la structure d'acquisition a des conséquences fiscales, patrimoniales et financières importantes qui dépassent la seule question du crédit. Consultez un expert-comptable ou un conseiller fiscal avant de décider. Ce choix est difficile à modifier après la signature.
    </CalloutBox>

    <h2 id="negocier-conditions">5. Négocier les conditions de crédit</h2>
    <p>
      Comme tout crédit immobilier, les conditions d'un financement pour un lot de garages peuvent être négociées. Plusieurs éléments sont en jeu.
    </p>
    <p>
      <strong>Le taux d'intérêt</strong> dépend du profil de l'emprunteur, de la durée du crédit et du contexte de marché. La mise en concurrence de plusieurs établissements, notamment via un courtier, permet souvent d'obtenir des conditions plus favorables.
    </p>
    <p>
      <strong>La durée du crédit</strong> influence directement la mensualité et le coût total du financement. Une durée plus longue réduit la mensualité mais augmente le coût total des intérêts. Le choix optimal dépend de la rentabilité nette du projet et de la stratégie patrimoniale de l'investisseur.
    </p>
    <p>
      <strong>Les garanties demandées</strong> (hypothèque, PPD, caution) ont un coût et une souplesse différents. L'hypothèque est plus coûteuse à mettre en place mais libère l'emprunteur plus facilement en cas de revente anticipée si la banque accepte une mainlevée.
    </p>

    <h2 id="avant-de-solliciter">6. Ce qu'il faut préparer avant de solliciter une banque</h2>
    <p>
      Un dossier de financement solide facilite l'instruction et renforce la crédibilité du projet aux yeux de la banque. Les éléments à préparer incluent :
    </p>
    <ul>
      <li>Les documents personnels habituels (avis d'imposition, bulletins de salaire ou bilans si indépendant, relevés bancaires).</li>
      <li>Les documents relatifs au bien : compromis ou promesse de vente, état locatif si le bien est occupé, diagnostics techniques.</li>
      <li>Une présentation chiffrée du projet : prix d'acquisition, loyers mensuels constatés ou estimés, charges annuelles, rendement brut et net estimé.</li>
      <li>Un plan de financement clair : montant emprunté souhaité, apport disponible, durée envisagée.</li>
    </ul>
    <p>
      Plus le dossier est documenté et cohérent, plus la banque sera en mesure d'évaluer le risque et de formuler une offre adaptée. Un projet présenté de façon approximative ou sans justification des loyers attendus peut être rejeté ou conditionné à des garanties supplémentaires.
    </p>

    <CalloutBox type="retenir" title="Ce qu'il faut retenir">
      Financer un lot de garages demande une préparation spécifique : toutes les banques ne traitent pas ce type d'actif de la même façon, le niveau d'apport attendu peut être plus élevé que pour un bien résidentiel, et la structure d'acquisition choisie a des conséquences directes sur les conditions de financement. Consulter plusieurs établissements ou un courtier spécialisé est fortement recommandé pour obtenir les meilleures conditions et s'assurer que le projet est finançable avant de s'engager.
    </CalloutBox>
  </div>
);

const lotOccupeOuVacantContent = () => (
  <div className="prose-article">
    <p className="text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
      La question "occupé ou vacant ?" est l'une des premières que se pose un investisseur face à une opportunité d'acquisition. Elle n'a pas de réponse universelle : les deux situations présentent des avantages et des risques réels, et le choix dépend autant du projet de l'investisseur que de la qualité des locataires et du marché local.
    </p>

    <div className="my-8 bg-[#f8f9fa] rounded-xl border border-slate-100 p-6 flex items-center justify-center">
      <svg width="100%" height="180" viewBox="0 0 560 180" className="max-w-2xl">
        <text x="140" y="20" textAnchor="middle" fontSize="11" fill="#1e3a5f" fontFamily="sans-serif" fontWeight="bold">Occupé</text>
        <text x="420" y="20" textAnchor="middle" fontSize="11" fill="#1e3a5f" fontFamily="sans-serif" fontWeight="bold">Vacant</text>
        {[
          ["Rendement immédiat", "#22c55e", "#f59e0b"],
          ["Liberté de gestion", "#f59e0b", "#22c55e"],
          ["Risque à l'entrée", "#f59e0b", "#22c55e"],
          ["Prix de négociation", "#94a3b8", "#22c55e"],
          ["Complexité due diligence", "#f59e0b", "#22c55e"],
        ].map(([label, colorLeft, colorRight], i) => (
          <g key={label as string}>
            <text x="270" y={45 + i * 28} textAnchor="middle" fontSize="10" fill="#64748b" fontFamily="sans-serif">{label as string}</text>
            <rect x="60" y={33 + i * 28} width="180" height="16" rx="3" fill={colorLeft as string} opacity="0.6"/>
            <rect x="310" y={33 + i * 28} width="180" height="16" rx="3" fill={colorRight as string} opacity="0.6"/>
          </g>
        ))}
        <rect x="10" y="165" width="12" height="8" rx="2" fill="#22c55e" opacity="0.7"/>
        <text x="27" y="172" fontSize="9" fill="#64748b" fontFamily="sans-serif">Favorable</text>
        <rect x="100" y="165" width="12" height="8" rx="2" fill="#f59e0b" opacity="0.7"/>
        <text x="117" y="172" fontSize="9" fill="#64748b" fontFamily="sans-serif">Variable / vigilance</text>
        <rect x="230" y="165" width="12" height="8" rx="2" fill="#94a3b8" opacity="0.7"/>
        <text x="247" y="172" fontSize="9" fill="#64748b" fontFamily="sans-serif">Neutre</text>
      </svg>
    </div>

    <h2 id="lot-occupe-avantages">1. Lot occupé : les avantages</h2>
    <p>
      Acquérir un lot dont les unités sont partiellement ou totalement louées présente plusieurs avantages concrets.
    </p>
    <p>
      <strong>Un rendement immédiat.</strong> Dès la signature de l'acte de vente et le transfert des baux, les loyers commencent à être perçus. Il n'y a pas de période de vacance initiale à financer. Pour un investisseur qui emprunte, cela signifie que les mensualités de crédit peuvent être partiellement couvertes par les revenus locatifs dès le premier mois.
    </p>
    <p>
      <strong>Une demande locative vérifiée.</strong> La présence de locataires en place est une preuve concrète que des personnes sont prêtes à louer ce type de bien dans cette zone. C'est un signal de marché que ne peut pas offrir un bien vacant.
    </p>
    <p>
      <strong>Un historique disponible.</strong> Le vendeur peut fournir des quittances de loyers passés, un historique des paiements, des informations sur la durée des locations. Ces éléments permettent de valider le niveau de loyer pratiqué et la fiabilité des locataires.
    </p>

    <h2 id="lot-occupe-vigilance">2. Lot occupé : les points de vigilance</h2>
    <p>
      La présence de locataires n'est pas sans risques. Un lot occupé mérite une analyse approfondie avant signature.
    </p>
    <p>
      <strong>La qualité des locataires en place.</strong> Des locataires anciens, avec des loyers inférieurs au marché ou des impayés récurrents, peuvent hériter du nouveau propriétaire. Demandez les quittances des 12 derniers mois et vérifiez la concordance avec les relevés bancaires du vendeur.
    </p>
    <p>
      <strong>Le niveau des loyers.</strong> Un loyer maintenu bas depuis plusieurs années peut être difficile à revaloriser sans risque de départ du locataire. À l'inverse, un loyer déjà au niveau du marché laisse peu de marge d'amélioration.
    </p>
    <p>
      <strong>Les baux transmis.</strong> Les baux en cours se transfèrent à l'acquéreur avec leurs conditions existantes. Vérifiez les durées restantes, les clauses de révision et les conditions de résiliation. Un bail avec une clause d'indexation inactive depuis plusieurs années peut représenter un manque à gagner significatif.
    </p>

    <CalloutBox type="vigilance">
      Méfiez-vous des lots présentés comme "100 % occupés" sans documentation probante. Certains vendeurs peuplent temporairement un lot avant la vente avec des locataires de complaisance ou des loyers fictifs. Demandez systématiquement les copies des contrats et des justificatifs de paiement.
    </CalloutBox>

    <h2 id="lot-vacant-avantages">3. Lot vacant : les avantages</h2>
    <p>
      Un lot sans locataire au moment de l'acquisition offre une liberté totale dès l'entrée en possession.
    </p>
    <p>
      <strong>Liberté de sélection des locataires.</strong> L'investisseur choisit lui-même ses futurs locataires, fixe les loyers selon le marché actuel, et choisit le type de contrat qu'il souhaite utiliser.
    </p>
    <p>
      <strong>Possibilité de réaliser des travaux sans contrainte.</strong> Remettre en état les unités, améliorer la sécurité, repeindre ou remplacer les portes peut se faire sans contrainte d'occupation. Ces améliorations peuvent justifier un positionnement tarifaire plus élevé.
    </p>
    <p>
      <strong>Levier de négociation sur le prix.</strong> Un lot vacant est moins "bankable" pour un acquéreur non averti, et certains vendeurs sont prêts à consentir une décote. Si la vacance résulte d'une mauvaise gestion plutôt que d'un manque de demande, l'acquéreur peut capter cette valeur.
    </p>

    <h2 id="lot-vacant-risques">4. Lot vacant : les risques</h2>
    <p>
      La vacance initiale comporte des risques réels qui méritent d'être évalués avant de s'engager.
    </p>
    <p>
      <strong>Période sans revenus.</strong> Le temps nécessaire pour trouver des locataires, signer les contrats et encaisser les premiers loyers peut varier de quelques semaines à plusieurs mois selon la zone. Pendant ce temps, les charges fixes continuent de courir.
    </p>
    <p>
      <strong>Validation de la demande locale.</strong> Si le lot est vacant depuis longtemps, il faut s'interroger sur la cause : est-ce un problème de gestion, de loyer trop élevé, ou un manque réel de demande dans la zone ? Un lot vacant dans une zone peu dynamique peut rester difficile à louer même avec un prix attractif.
    </p>
    <p>
      <strong>Coût des éventuels travaux.</strong> Un lot vacant laissé à l'abandon peut nécessiter des remises en état significatives. Ces coûts doivent être intégrés dans le plan de financement et la rentabilité prévisionnelle.
    </p>

    <h2 id="impact-prix">5. L'impact sur le prix de négociation</h2>
    <p>
      La situation locative d'un lot influence directement son prix de marché. Un lot entièrement occupé avec des loyers proches du marché se vend généralement à un prix plus élevé qu'un lot vacant, toutes choses égales par ailleurs. La présence de revenus immédiats est valorisée.
    </p>
    <p>
      À l'inverse, un lot vacant ou partiellement occupé avec des loyers sous-marché peut se négocier avec une décote. Cette décote doit être suffisante pour compenser la période de vacance initiale et les éventuels travaux de remise en état.
    </p>
    <p>
      Il n'existe pas de règle universelle sur le niveau de cette décote : elle dépend du marché local, de la qualité du bien, de l'urgence du vendeur et du niveau de rendement attendu. L'important est d'intégrer ces paramètres dans le calcul de rentabilité prévisionnel avant de formuler une offre.
    </p>

    <h2 id="quelle-situation-preferer">6. Quelle situation préférer ?</h2>
    <p>
      La réponse dépend du profil et des objectifs de l'investisseur.
    </p>
    <p>
      Un investisseur qui cherche un revenu locatif immédiat pour couvrir ses charges dès le premier mois trouvera davantage de sécurité dans un lot occupé, à condition d'avoir vérifié la qualité des locataires et le niveau des loyers.
    </p>
    <p>
      Un investisseur qui dispose d'une trésorerie suffisante pour absorber quelques mois de vacance, et qui veut partir sur de bonnes bases avec ses propres locataires, pourra tirer parti d'un lot vacant pour mieux contrôler la qualité et les conditions des baux.
    </p>

    <CalloutBox type="retenir" title="Ce qu'il faut retenir">
      Il n'existe pas de situation universellement préférable entre un lot occupé et un lot vacant. L'important est d'analyser chaque cas selon ses propres paramètres : qualité des locataires en place, niveau des loyers par rapport au marché local, état du bien, potentiel de valorisation, et capacité financière de l'investisseur à absorber une éventuelle période de vacance initiale.
    </CalloutBox>
  </div>
);

const acteursSelfStorageContent = () => (
  <div className="prose-article">
    <p className="text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
      Le self-storage professionnel représente une composante croissante du marché du stockage en France. Comprendre qui en sont les acteurs, comment ils fonctionnent et comment ils se positionnent par rapport aux garages et boxes individuels permet à tout investisseur ou exploitant d'évaluer la concurrence sur son marché local.
    </p>

    <div className="my-8 bg-[#f8f9fa] rounded-xl border border-slate-100 p-6 flex items-center justify-center">
      <svg width="100%" height="200" viewBox="0 0 560 200" className="max-w-2xl">
        {/* Carte stylisée France */}
        <ellipse cx="280" cy="100" rx="200" ry="130" fill="#e8eef5" stroke="#1e3a5f" strokeWidth="1" opacity="0.4"/>
        <text x="280" y="25" textAnchor="middle" fontSize="11" fill="#94a3b8" fontFamily="sans-serif">Densité d'offre self-storage (schéma indicatif)</text>
        {/* Grandes métropoles — grands cercles */}
        <circle cx="270" cy="70" r="22" fill="#1e3a5f" opacity="0.7"/>
        <text x="270" y="74" textAnchor="middle" fontSize="9" fill="white" fontFamily="sans-serif">Paris</text>
        <circle cx="310" cy="145" r="14" fill="#1e3a5f" opacity="0.6"/>
        <text x="310" y="149" textAnchor="middle" fontSize="8" fill="white" fontFamily="sans-serif">Lyon</text>
        <circle cx="195" cy="170" r="12" fill="#1e3a5f" opacity="0.55"/>
        <text x="195" y="174" textAnchor="middle" fontSize="8" fill="white" fontFamily="sans-serif">Bdx</text>
        <circle cx="340" cy="170" r="11" fill="#1e3a5f" opacity="0.5"/>
        <text x="340" y="174" textAnchor="middle" fontSize="8" fill="white" fontFamily="sans-serif">Marse.</text>
        {/* Villes moyennes — petits cercles */}
        <circle cx="160" cy="95" r="7" fill="#94a3b8" opacity="0.6"/>
        <circle cx="390" cy="90" r="7" fill="#94a3b8" opacity="0.6"/>
        <circle cx="230" cy="130" r="7" fill="#94a3b8" opacity="0.5"/>
        <circle cx="355" cy="115" r="6" fill="#94a3b8" opacity="0.45"/>
        {/* Zones peu denses */}
        <circle cx="210" cy="65" r="4" fill="#94a3b8" opacity="0.35"/>
        <circle cx="360" cy="65" r="4" fill="#94a3b8" opacity="0.3"/>
        <circle cx="170" cy="155" r="4" fill="#94a3b8" opacity="0.3"/>
        {/* Légende */}
        <circle cx="20" cy="178" r="8" fill="#1e3a5f" opacity="0.7"/>
        <text x="34" y="182" fontSize="9" fill="#64748b" fontFamily="sans-serif">Forte densité</text>
        <circle cx="130" cy="178" r="5" fill="#94a3b8" opacity="0.6"/>
        <text x="142" y="182" fontSize="9" fill="#64748b" fontFamily="sans-serif">Présence partielle</text>
        <circle cx="260" cy="178" r="3" fill="#94a3b8" opacity="0.35"/>
        <text x="270" y="182" fontSize="9" fill="#64748b" fontFamily="sans-serif">Faible présence</text>
      </svg>
    </div>

    <h2 id="qu-est-ce-que-self-storage">1. Le self-storage professionnel : définition et positionnement</h2>
    <p>
      Le self-storage désigne un service de location d'espaces de stockage individuels dans des installations dédiées, gérées par un opérateur professionnel. Ces installations se distinguent des garages ou boxes locatifs classiques par plusieurs caractéristiques : accès 24h/24 ou sur plage horaire étendue, surveillance et sécurité renforcées, flexibilité contractuelle (contrats souvent mensuels résiliables à court préavis), et large gamme de tailles de boxes.
    </p>
    <p>
      Le modèle s'est développé aux États-Unis dans les années 1960-1970 avant de se diffuser progressivement en Europe. En France, le marché reste en développement par rapport à certains pays anglo-saxons, mais connaît une croissance sensible depuis les années 2010, portée par la densification urbaine, la mobilité résidentielle et professionnelle, et les besoins de stockage des TPE/PME.
    </p>

    <h2 id="grands-operateurs">2. Les grands opérateurs présents en France</h2>
    <p>
      Parmi les acteurs du self-storage professionnel en France, on distingue des groupes d'envergure internationale et des opérateurs à dimension plus nationale.
    </p>
    <p>
      Les groupes internationaux présents sur le marché français sont généralement des sociétés foncières cotées (REITs) ou des fonds d'investissement spécialisés dans l'immobilier de stockage. Ils exploitent des sites de grande taille, principalement dans les zones urbaines et périurbaines denses. Leurs sites sont conçus avec des standards techniques élevés : contrôle d'accès électronique, vidéosurveillance, climatisation optionnelle, gamme de boxes du petit format (quelques m²) au grand format (plusieurs dizaines de m²).
    </p>
    <p>
      Des opérateurs à dimension nationale ou régionale complètent ce paysage. Ils peuvent adopter des modèles différents : sites en propre, franchises, ou partenariats avec des promoteurs immobiliers. Leur présence est souvent plus marquée en régions, là où les grands groupes internationaux sont moins implantés.
    </p>

    <CalloutBox type="vigilance">
      Les parts de marché et les classements des opérateurs évoluent régulièrement (acquisitions, ouvertures, fermetures de sites). Aucune donnée précise sur ce point n'est citée ici sans source vérifiable. Pour une analyse concurrentielle locale, la méthode la plus fiable reste l'observation directe des sites existants dans la zone concernée.
    </CalloutBox>

    <h2 id="acteurs-regionaux">3. Les acteurs régionaux et indépendants</h2>
    <p>
      En dehors des grands opérateurs structurés, un tissu d'acteurs plus petits existe dans de nombreuses villes françaises. Ces acteurs indépendants exploitent souvent un ou quelques sites, avec des modèles plus variables : anciens entrepôts reconvertis, hangars agricoles transformés, locaux commerciaux réaménagés.
    </p>
    <p>
      Ces acteurs locaux ont parfois une connaissance fine de leur marché et une proximité avec leur clientèle que les grands groupes ne peuvent pas offrir. En contrepartie, leurs installations peuvent être moins standardisées et leur capacité d'investissement plus limitée.
    </p>
    <p>
      Repérer ces acteurs sur un marché local est utile pour tout investisseur souhaitant évaluer la concurrence réelle : une recherche sur les annuaires en ligne, les pages de résultats de moteurs de recherche pour "self-storage [ville]", ou encore les plateformes de réservation spécialisées permet d'identifier rapidement l'offre existante dans une zone donnée.
    </p>

    <h2 id="modele-economique">4. Le modèle économique du self-storage</h2>
    <p>
      Le modèle économique du self-storage professionnel repose sur plusieurs leviers distincts du modèle locatif classique de garages individuels.
    </p>
    <p>
      <strong>La flexibilité contractuelle</strong> : les contrats de self-storage sont généralement mensuels avec un préavis court. Cette flexibilité est valorisée par les clients mais crée une rotation potentiellement élevée et une volatilité des revenus.
    </p>
    <p>
      <strong>L'optimisation du taux d'occupation</strong> : les opérateurs professionnels utilisent des outils de pricing dynamique pour ajuster les tarifs en fonction de la demande et du taux d'occupation de chaque site. Un site à fort taux d'occupation peut augmenter ses tarifs pour les nouvelles entrées.
    </p>
    <p>
      <strong>Les services additionnels</strong> : emballages, cadenas, assurance du mobilier stocké, livraison de palettes, accès camion : ces services complémentaires représentent une source de revenus additionnelle pour les opérateurs structurés.
    </p>

    <h2 id="impact-marche-local">5. L'impact sur les marchés locaux</h2>
    <p>
      L'implantation d'un site de self-storage professionnel dans une zone peut avoir un impact sur le marché locatif des garages et boxes individuels. Cet impact dépend de plusieurs facteurs.
    </p>
    <p>
      Si l'opérateur se positionne sur le même segment de demande (particuliers cherchant à stocker des meubles ou des biens personnels), une concurrence directe peut s'exercer, notamment si les tarifs sont comparables. La flexibilité contractuelle et la sécurité renforcée offertes par le self-storage professionnel peuvent attirer une partie de la clientèle potentielle des garages.
    </p>
    <p>
      Si l'opérateur cible principalement les professionnels et TPE/PME avec des boxes de grande taille, l'impact sur les garages individuels (généralement loués à des particuliers) peut être plus limité.
    </p>

    <h2 id="coexistence">6. Coexistence avec les garages et boxes individuels</h2>
    <p>
      Dans de nombreuses zones, garages individuels et self-storage professionnel coexistent en répondant à des besoins complémentaires plutôt qu'en concurrence frontale.
    </p>
    <p>
      Les garages individuels répondent souvent à une demande de proximité immédiate, de prix accessible, ou de location longue durée stable. Certains locataires préfèrent un accès depuis la rue de leur immeuble plutôt qu'un déplacement en voiture vers un site de self-storage.
    </p>
    <p>
      Le self-storage professionnel répond davantage à une demande de flexibilité, de variété de formats et de services, ou à des besoins ponctuels liés à un déménagement, une succession ou une transition professionnelle.
    </p>

    <CalloutBox type="retenir" title="Ce qu'il faut retenir">
      La présence d'opérateurs de self-storage professionnel sur un marché local est un élément à analyser avant d'investir dans des garages ou boxes. Elle ne rend pas nécessairement l'investissement moins pertinent, mais impose de bien comprendre le positionnement de son offre par rapport à la concurrence existante — en termes de prix, de localisation, de services et de profil de la clientèle visée.
    </CalloutBox>
  </div>
);

const structurerGestionContent = () => (
  <div className="prose-article">
    <p className="text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
      Gérer quelques garages de façon informelle, avec un tableur rudimentaire et des rappels par SMS, peut fonctionner à petite échelle. Mais au-delà d'un certain seuil — souvent dès une dizaine d'unités — cette approche montre ses limites : oublis, erreurs de suivi, difficultés à préparer les déclarations fiscales, et perte de temps dans la gestion quotidienne. Structurer son organisation est une étape incontournable pour tout investisseur qui souhaite développer et pérenniser son parc.
    </p>

    <div className="my-8 bg-[#f8f9fa] rounded-xl border border-slate-100 p-6 flex items-center justify-center">
      <svg width="100%" height="140" viewBox="0 0 580 140" className="max-w-2xl">
        <text x="10" y="18" fontSize="11" fill="#94a3b8" fontFamily="sans-serif">Flux de gestion d'un parc de stockage</text>
        {[
          ["Baux", 30],
          ["Loyers", 145],
          ["Charges", 260],
          ["Déclarations", 375],
          ["Révision", 490],
        ].map(([label, x], i) => (
          <g key={label as string}>
            <rect x={x as number} y="35" width="95" height="36" rx="6" fill="#1e3a5f" opacity={0.8 - i * 0.1}/>
            <text x={(x as number) + 47} y="57" textAnchor="middle" fontSize="10" fill="white" fontFamily="sans-serif" fontWeight="bold">{label as string}</text>
            {i < 4 && (
              <path d={`M${(x as number) + 98} 53 L${(x as number) + 112} 53`} stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#arrow)"/>
            )}
          </g>
        ))}
        <defs>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8"/>
          </marker>
        </defs>
        <text x="10" y="100" fontSize="10" fill="#94a3b8" fontFamily="sans-serif">Signature → Encaissement → Paiement charges → Fiscalité → Revalorisation annuelle</text>
        <text x="10" y="118" fontSize="10" fill="#94a3b8" fontFamily="sans-serif">Chaque étape gagne à être tracée et anticipée dans un système structuré.</text>
      </svg>
    </div>

    <h2 id="quand-structurer">1. À partir de quand structurer sa gestion ?</h2>
    <p>
      Il n'existe pas de seuil universel au-delà duquel la structuration devient obligatoire. Mais plusieurs signaux indiquent qu'une organisation plus rigoureuse s'impose.
    </p>
    <p>
      Le premier signal est le sentiment de "perdre le fil" : ne plus savoir précisément quelles unités sont occupées, quels loyers ont été perçus ce mois-ci, quelles échéances de bail approchent. Ce flou opérationnel est un risque réel — il peut conduire à des oublis de révision de loyer, à des impayés non traités à temps, ou à des erreurs dans les déclarations fiscales.
    </p>
    <p>
      Le deuxième signal est la préparation de la déclaration fiscale annuelle. Si rassembler les justificatifs de loyers perçus, de charges payées et de travaux réalisés prend plusieurs jours, la gestion n'est pas assez structurée.
    </p>
    <p>
      Le troisième signal est l'acquisition d'un deuxième bien ou d'un deuxième lot. Dès qu'il y a plusieurs ensembles à gérer — potentiellement avec des copropriétés différentes, des niveaux de loyers différents et des périodicités d'échéance différentes — un système de suivi dédié devient nécessaire.
    </p>

    <h2 id="suivi-des-baux">2. Le suivi des baux et des échéances</h2>
    <p>
      Le bail est la pièce contractuelle centrale de la relation locative. Son suivi structuré permet d'anticiper les événements importants et d'éviter les situations où une clause a été oubliée ou une révision manquée.
    </p>
    <p>
      Les informations minimales à centraliser pour chaque bail comprennent : l'identité du locataire, la date de signature, le loyer initial, la date de prise d'effet, la clause d'indexation (indice de référence et périodicité), la durée du préavis, et le dépôt de garantie encaissé.
    </p>
    <p>
      À partir de ces données, un calendrier d'échéances peut être constitué : dates de révision de loyer, dates anniversaires des baux, dates de fin de préavis pour les baux qui seraient résiliés. Ce calendrier peut être géré dans un tableur ou dans un logiciel dédié.
    </p>

    <CalloutBox type="retenir">
      La révision de loyer est l'un des leviers les plus simples pour maintenir la rentabilité d'un parc. Elle repose sur une clause contractuelle et un indice (souvent l'IRL pour les logements, ou un indice spécifié dans le bail pour les locaux non résidentiels). Ne pas la pratiquer régulièrement, c'est laisser le loyer réel se dégrader par rapport au marché.
    </CalloutBox>

    <h2 id="suivi-financier">3. Le suivi financier : loyers, charges et trésorerie</h2>
    <p>
      Le suivi financier d'un parc locatif couvre trois dimensions principales : les recettes (loyers encaissés), les dépenses (charges, travaux, taxe foncière, assurance) et la trésorerie nette disponible.
    </p>
    <p>
      <strong>Les recettes locatives</strong> doivent être enregistrées mensuellement, par unité et par bien. Ce niveau de détail permet de détecter rapidement les impayés (une unité qui n'a pas payé ce mois-ci), de calculer le taux d'encaissement réel, et de préparer les déclarations fiscales sans reconstitution laborieuse.
    </p>
    <p>
      <strong>Les dépenses</strong> méritent d'être catégorisées : charges de copropriété (provisions et régularisations), travaux d'entretien courant, travaux exceptionnels, taxe foncière, prime d'assurance, éventuels frais de gestion. Cette catégorisation facilite l'analyse de rentabilité et la déduction des charges dans le cadre du régime réel foncier.
    </p>
    <p>
      <strong>La trésorerie nette</strong> — différence entre les loyers perçus et les charges payées sur une période — est l'indicateur opérationnel le plus utile pour piloter le parc au quotidien.
    </p>

    <h2 id="outils-disponibles">4. Les outils disponibles : tableurs, logiciels, applications</h2>
    <p>
      Le choix des outils dépend de la taille du parc, du budget disponible et des habitudes de l'investisseur.
    </p>
    <p>
      <strong>Le tableur (Excel, Google Sheets)</strong> est l'outil le plus accessible. Un tableur bien conçu peut couvrir l'ensemble des besoins de gestion d'un parc de taille modeste : suivi des baux, des loyers, des charges et du calendrier d'échéances. Il est gratuit, personnalisable, et peut être partagé facilement avec un comptable ou un gestionnaire.
    </p>
    <p>
      <strong>Les logiciels de gestion locative</strong> (souvent proposés en SaaS) offrent des fonctionnalités plus avancées : génération automatique de quittances, relances d'impayés, intégration bancaire, tableaux de bord. Ils conviennent mieux à des parcs de taille significative (au-delà de 20 à 30 unités selon les cas) où le gain de temps justifie le coût.
    </p>
    <p>
      <strong>Les applications mobiles</strong> permettent un suivi en déplacement et peuvent se connecter à certains logiciels de gestion. Utiles pour les investisseurs qui gèrent depuis plusieurs endroits ou qui souhaitent consulter leurs indicateurs rapidement.
    </p>

    <CalloutBox type="vigilance">
      Quel que soit l'outil choisi, la qualité de la gestion dépend avant tout de la régularité avec laquelle il est alimenté. Un logiciel perfectionné mais mal renseigné produit des données fausses. Un tableur simple mais mis à jour chaque semaine est plus fiable qu'un logiciel complexe mis à jour deux fois par an.
    </CalloutBox>

    <h2 id="externaliser">5. Externaliser la gestion : quand et comment ?</h2>
    <p>
      La gestion locative peut être déléguée à un professionnel — agent immobilier, administrateur de biens — moyennant une commission sur les loyers encaissés. Cette option présente des avantages et des inconvénients à évaluer selon le contexte.
    </p>
    <p>
      <strong>Les avantages de l'externalisation</strong> : gain de temps, expertise dans la rédaction des baux, gestion des impayés et des états des lieux, réseau pour trouver des locataires. Pour un investisseur éloigné géographiquement de son parc ou disposant de peu de temps, l'externalisation peut être un choix rationnel.
    </p>
    <p>
      <strong>Les inconvénients</strong> : le coût de la gestion (généralement entre 5 et 10 % des loyers hors taxes selon les prestations incluses) réduit la rentabilité nette. De plus, tous les gestionnaires ne sont pas également compétents sur les spécificités des garages et boxes, qui diffèrent de l'immobilier résidentiel classique.
    </p>
    <p>
      Si vous externalisez, définissez précisément le périmètre de la mission (recherche de locataires, rédaction des baux, encaissement des loyers, gestion des impayés, états des lieux) et vérifiez que le prestataire a une expérience sur ce type de bien.
    </p>

    <h2 id="structure-juridique">6. La question de la structure juridique à l'échelle</h2>
    <p>
      À mesure que le parc s'agrandit, la question de la structure juridique peut se poser de nouveau. Une acquisition réalisée en nom propre peut ne plus être optimale fiscalement ou patrimonialent lorsque le nombre d'unités et les revenus générés augmentent.
    </p>
    <p>
      La structuration juridique — SCI à l'IR, SCI à l'IS, holding, etc. — a des implications qui dépassent la gestion opérationnelle : transmission patrimoniale, optimisation fiscale, capacité d'emprunt future. Ces questions doivent être traitées avec un expert-comptable ou un conseiller fiscal avant de dépasser un certain seuil de patrimoine.
    </p>

    <CalloutBox type="legal">
      La question de la structure juridique optimale est personnelle et évolue avec le profil patrimonial et fiscal de l'investisseur. Ce qui est pertinent pour un investisseur peut ne pas l'être pour un autre. Consultez un expert-comptable avant de modifier la structure d'un patrimoine existant ou d'en créer une nouvelle.
    </CalloutBox>

    <CalloutBox type="retenir" title="Ce qu'il faut retenir">
      Structurer la gestion d'un parc de garages n'est pas une formalité réservée aux grands portefeuilles : c'est une condition de la maîtrise de son patrimoine. Un suivi rigoureux des baux, des loyers et des charges permet de détecter les problèmes tôt, d'optimiser les révisions, et de préparer les déclarations fiscales sans stress. Les outils importent moins que la régularité avec laquelle ils sont utilisés.
    </CalloutBox>
  </div>
);

const prixGaragesDonneesDvfContent = () => (
  <div className="prose-article">
    <p className="text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
      Les Demandes de valeurs foncières (DVF) constituent la principale source publique de données sur les transactions immobilières en France. Pour les garages et espaces de stockage, elles permettent d'observer des tendances géographiques de prix — à condition de comprendre leurs limites méthodologiques importantes.
    </p>

    <div className="my-8 bg-[#f8f9fa] rounded-xl border border-slate-100 p-6 flex items-center justify-center">
      <svg width="100%" height="160" viewBox="0 0 520 160" className="max-w-lg">
        <rect x="20" y="20" width="100" height="120" rx="6" fill="#1e3a5f" opacity="0.12" stroke="#1e3a5f" strokeWidth="1"/>
        <text x="70" y="130" textAnchor="middle" fontSize="9" fill="#1e3a5f" fontFamily="sans-serif">Direction générale</text>
        <text x="70" y="142" textAnchor="middle" fontSize="9" fill="#1e3a5f" fontFamily="sans-serif">des Finances publiques</text>
        <rect x="160" y="40" width="90" height="80" rx="6" fill="#3b82f6" opacity="0.15" stroke="#3b82f6" strokeWidth="1"/>
        <text x="205" y="85" textAnchor="middle" fontSize="10" fill="#1d4ed8" fontFamily="sans-serif" fontWeight="600">Base DVF</text>
        <text x="205" y="100" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">data.gouv.fr</text>
        <rect x="300" y="40" width="90" height="35" rx="5" fill="#22c55e" opacity="0.12" stroke="#22c55e" strokeWidth="1"/>
        <text x="345" y="62" textAnchor="middle" fontSize="9" fill="#166534" fontFamily="sans-serif">Garages</text>
        <rect x="300" y="85" width="90" height="35" rx="5" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" strokeWidth="1"/>
        <text x="345" y="107" textAnchor="middle" fontSize="9" fill="#92400e" fontFamily="sans-serif">Stationnement</text>
        <rect x="410" y="40" width="90" height="80" rx="6" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4,2"/>
        <text x="455" y="78" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">Données</text>
        <text x="455" y="90" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">partielles</text>
        <path d="M122 80 L158 80" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#a)"/>
        <path d="M252 60 L298 60" stroke="#94a3b8" strokeWidth="1.5"/>
        <path d="M252 100 L298 100" stroke="#94a3b8" strokeWidth="1.5"/>
        <path d="M392 80 L408 80" stroke="#94a3b8" strokeWidth="1.5"/>
      </svg>
    </div>

    <h2 id="qu-est-ce-que-dvf">Qu'est-ce que la base DVF ?</h2>
    <p>
      Les Demandes de valeurs foncières (DVF) sont les actes notariés de mutation immobilière transmis à l'administration fiscale. Depuis 2019, ces données sont accessibles au public via le portail data.gouv.fr et via le service Patrim de l'administration fiscale (accessible aux particuliers pour leurs propres recherches).
    </p>
    <p>
      La base recense les mutations à titre onéreux (ventes) de biens immobiliers et fonciers intervenues en France sur les cinq dernières années environ. Elle inclut les appartements, maisons, locaux commerciaux — et, partiellement, les dépendances comme les garages et places de stationnement.
    </p>

    <CalloutBox type="vigilance">
      La base DVF ne couvre pas l'ensemble du territoire français. L'Alsace, la Moselle et Mayotte disposent de systèmes de publicité foncière distincts (livre foncier) et ne sont pas inclus dans DVF.
    </CalloutBox>

    <h2 id="garages-dans-dvf">Les garages dans la base DVF</h2>
    <p>
      Les transactions sur des garages, boxes, caves et places de stationnement sont répertoriées dans la base DVF sous des typologies spécifiques. Cependant, la qualité et l'exhaustivité de ces données présentent plusieurs limites importantes pour l'analyse du marché.
    </p>
    <p>
      <strong>La fragmentation des ventes en lot.</strong> Un lot de dix garages vendu en une seule transaction peut apparaître comme une seule ligne dans la base, avec un prix global qui ne reflète pas nécessairement un prix unitaire cohérent avec le marché.
    </p>
    <p>
      <strong>La classification imparfaite des biens.</strong> Selon la façon dont le notaire a rédigé l'acte, un même type de bien peut être classé différemment (dépendance, local industriel, box, parking). Cette hétérogénéité complique les comparaisons.
    </p>
    <p>
      <strong>L'absence de données qualitatives.</strong> La base DVF ne renseigne pas sur l'état du bien, sa surface exacte dans tous les cas, son accessibilité ou sa configuration. Deux garages au même prix peuvent présenter des caractéristiques très différentes.
    </p>

    <h2 id="ce-que-revele-dvf">Ce que révèlent les données : tendances observables</h2>
    <p>
      Malgré leurs limites, les données DVF permettent d'observer certaines tendances géographiques sur le marché des garages et espaces de stockage.
    </p>
    <p>
      <strong>La concentration des transactions dans les zones urbaines denses.</strong> L'essentiel des mutations sur des garages enregistrées dans DVF se concentre dans les grandes agglomérations, où le marché est plus actif et les transactions plus fréquentes. En zone rurale, le volume de données est souvent insuffisant pour être statistiquement représentatif.
    </p>
    <p>
      <strong>Des écarts de prix significatifs selon la géographie.</strong> Les observations disponibles confirment ce que l'analyse qualitative des marchés locaux suggère : les écarts de prix entre un garage en centre de Paris ou Nice et un garage en périphérie d'une ville de taille moyenne peuvent être considérables.
    </p>
    <p>
      <strong>Une activité transactionnelle qui reflète celle du marché résidentiel.</strong> Les volumes de transactions sur les garages tendent à suivre globalement la tendance du marché immobilier résidentiel, bien que les garages présentent leur propre dynamique avec un marché moins profond et plus fragmenté.
    </p>

    <h2 id="comment-utiliser-dvf">Comment utiliser DVF dans une analyse d'acquisition ?</h2>
    <p>
      Dans le cadre d'une analyse préalable à une acquisition, les données DVF peuvent apporter une information utile à condition d'être utilisées avec méthode.
    </p>
    <ul>
      <li><strong>Délimiter une zone géographique précise</strong> : chercher les transactions dans un rayon cohérent avec le bien étudié, et sur une période récente (12 à 24 mois).</li>
      <li><strong>Filtrer par type de bien</strong> : croiser plusieurs typologies (garage, dépendance, parking) pour obtenir un panel suffisant.</li>
      <li><strong>Croiser avec d'autres sources</strong> : les prix de vente observés sur DVF sont à compléter par l'observation des annonces actives sur les plateformes immobilières et par des échanges avec des agents locaux.</li>
      <li><strong>Utiliser les données comme ordre de grandeur</strong>, pas comme référence certifiée. La base DVF donne une indication de fourchette, pas un prix de marché certifié.</li>
    </ul>

    <div className="mt-8 pt-6 border-t border-slate-100">
      <h3 className="text-sm font-bold text-slate-700 mb-3">Sources et références</h3>
      <ul className="space-y-1">
        <li className="text-xs text-slate-500">→ data.gouv.fr — Base Demandes de valeurs foncières (DVF open data)</li>
        <li className="text-xs text-slate-500">→ impots.gouv.fr — Service Patrim (consultation personnelle des données DVF)</li>
        <li className="text-xs text-slate-500">→ cadastre.gouv.fr — Données cadastrales complémentaires</li>
      </ul>
    </div>

    <CalloutBox type="retenir" title="Ce qu'il faut retenir">
      La base DVF est un outil utile mais imparfait pour analyser le marché des garages. Elle permet d'observer des tendances géographiques de prix et des volumes de transaction, sans constituer une référence certifiée. Ses limites — transactions en lot, classification hétérogène, absence de données qualitatives, exclusion de l'Alsace-Moselle — imposent de la croiser systématiquement avec d'autres sources avant toute décision d'investissement.
    </CalloutBox>
  </div>
);

const travauxGarageLoueResponsabiliteContent = () => (
  <div className="prose-article">
    <p className="text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
      En l'absence d'un statut locatif spécifique aux garages, la question des travaux et des réparations dans un espace de stockage loué est régie par le droit commun et, surtout, par le contrat de location. C'est ce que les parties ont stipulé qui prime — d'où l'importance d'un contrat bien rédigé.
    </p>

    <div className="my-8 bg-[#f8f9fa] rounded-xl border border-slate-100 p-6 flex items-center justify-center">
      <svg width="100%" height="160" viewBox="0 0 520 160" className="max-w-lg">
        <rect x="30" y="30" width="200" height="100" rx="8" fill="#1e3a5f" opacity="0.08" stroke="#1e3a5f" strokeWidth="1.5"/>
        <text x="130" y="75" textAnchor="middle" fontSize="11" fill="#1e3a5f" fontFamily="sans-serif" fontWeight="600">Bailleur</text>
        <text x="130" y="92" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">Grosses réparations</text>
        <text x="130" y="106" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">(structure, toiture…)</text>
        <rect x="290" y="30" width="200" height="100" rx="8" fill="#3b82f6" opacity="0.08" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="390" y="75" textAnchor="middle" fontSize="11" fill="#1d4ed8" fontFamily="sans-serif" fontWeight="600">Locataire</text>
        <text x="390" y="92" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">Entretien courant</text>
        <text x="390" y="106" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">(nettoyage, petites réparations)</text>
        <line x1="232" y1="80" x2="288" y2="80" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4,2"/>
        <text x="260" y="74" textAnchor="middle" fontSize="9" fill="#94a3b8" fontFamily="sans-serif">Contrat</text>
      </svg>
    </div>

    <h2 id="principe-general">Le principe général : le droit commun s'applique</h2>
    <p>
      La location d'un garage ou d'un espace de stockage ne relève d'aucun statut spécifique — ni la loi du 6 juillet 1989 sur les logements, ni le statut des baux commerciaux ne s'appliquent en principe à ces biens loués à des particuliers à des fins de stockage. C'est donc le droit commun du louage de choses, issu du Code civil (articles 1709 et suivants), qui constitue le cadre de référence.
    </p>
    <p>
      Ce régime est à la fois plus souple et plus incertain que les statuts locatifs spécifiques : il laisse une large place à la liberté contractuelle, ce qui signifie que le contrat signé entre bailleur et locataire prévaut sur les interprétations générales.
    </p>

    <h2 id="obligation-bailleur">Les obligations du bailleur</h2>
    <p>
      En droit commun, le bailleur est tenu de deux obligations principales en matière de travaux :
    </p>
    <ul>
      <li><strong>Délivrer un bien en bon état.</strong> À la remise des clés, le garage doit être dans un état compatible avec l'usage prévu. Une toiture qui fuit, une porte motorisée hors d'usage ou un sol dégradé peuvent constituer un défaut de délivrance si cet état était préexistant à l'entrée du locataire.</li>
      <li><strong>Assurer la jouissance paisible.</strong> Le bailleur est tenu d'effectuer les réparations nécessaires au maintien de la chose en état de servir à l'usage pour lequel elle a été louée (article 1719 du Code civil). Cela couvre en principe les grosses réparations : structure, toiture, fermeture principale.</li>
    </ul>

    <CalloutBox type="legal">
      Le Code civil distingue classiquement les "grosses réparations" (à la charge du bailleur) des "menues réparations locatives" (à la charge du locataire). Cette distinction, issue de l'article 1754, n'est pas définie précisément et donne lieu à des interprétations variables selon les contrats et les juridictions.
    </CalloutBox>

    <h2 id="obligation-locataire">Les obligations du locataire</h2>
    <p>
      Le locataire est tenu, en droit commun, de l'entretien courant du bien et des menues réparations locatives. Dans le contexte d'un garage, cela recouvre typiquement le nettoyage, l'entretien du mécanisme de porte s'il en est responsable, et la réparation des dommages qu'il a causés.
    </p>
    <p>
      Il est responsable des dégradations survenues pendant la location, sauf s'il peut établir qu'elles résultent d'un vice de construction, d'un cas fortuit ou d'une force majeure.
    </p>

    <h2 id="role-du-contrat">Le rôle central du contrat</h2>
    <p>
      En pratique, c'est la rédaction du contrat de location qui fixe le partage des responsabilités de façon précise et opposable. Un contrat bien rédigé peut notamment :
    </p>
    <ul>
      <li>Lister les équipements présents et leur état à l'entrée (état des lieux détaillé) ;</li>
      <li>Préciser qui prend en charge l'entretien de la porte motorisée, du système d'éclairage, du portail d'accès ;</li>
      <li>Exclure expressément certains travaux de la charge du locataire (ravalement, étanchéité) ;</li>
      <li>Définir la procédure à suivre en cas de dommage ou de besoin de réparation.</li>
    </ul>

    <CalloutBox type="vigilance">
      L'absence d'état des lieux contradictoire à l'entrée rend très difficile toute imputation de dégradation au locataire en cas de litige. C'est une pièce essentielle, même pour un bien de faible valeur.
    </CalloutBox>

    <h2 id="travaux-amelioration">Les travaux d'amélioration</h2>
    <p>
      Si le locataire souhaite réaliser des travaux d'amélioration dans l'espace loué — installer une étagère fixe, poser du carrelage, ajouter un éclairage — le principe est qu'il doit obtenir l'accord du bailleur. En l'absence d'accord contractuel préalable, les travaux réalisés sans autorisation peuvent être source de litige au moment du départ.
    </p>
    <p>
      Le contrat devrait préciser le sort des aménagements à la fin du bail : remise en état à la charge du locataire, conservation des améliorations sans indemnité, ou indemnisation partielle à convenir.
    </p>

    <div className="mt-8 pt-6 border-t border-slate-100">
      <h3 className="text-sm font-bold text-slate-700 mb-3">Sources et références</h3>
      <ul className="space-y-1">
        <li className="text-xs text-slate-500">→ Legifrance.gouv.fr — Code civil, art. 1719 à 1724 (obligations du bailleur)</li>
        <li className="text-xs text-slate-500">→ Legifrance.gouv.fr — Code civil, art. 1754 (réparations locatives)</li>
        <li className="text-xs text-slate-500">→ Service-public.fr — Location d'un garage ou d'un parking</li>
      </ul>
    </div>

    <CalloutBox type="retenir" title="Ce qu'il faut retenir">
      En l'absence de statut locatif spécifique, les travaux dans un garage loué sont régis par le droit commun et, surtout, par le contrat. Le bailleur est responsable des grosses réparations et de la délivrance du bien en bon état ; le locataire prend en charge l'entretien courant et les dégradations qu'il a causées. Un contrat bien rédigé et un état des lieux soigné permettent de prévenir l'essentiel des litiges.
    </CalloutBox>
  </div>
);

const investirGarageZoneRuraleContent = () => (
  <div className="prose-article">
    <p className="text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
      Les garages et espaces de stockage en zone rurale ou périurbaine affichent souvent des prix d'acquisition bien inférieurs à ceux des métropoles. Cette accessibilité peut sembler attractive, mais elle ne reflète pas nécessairement un meilleur rendement : la demande locative y est structurellement plus fragile et la liquidité à la revente, plus incertaine.
    </p>

    <div className="my-8 bg-[#f8f9fa] rounded-xl border border-slate-100 p-6 flex items-center justify-center">
      <svg width="100%" height="160" viewBox="0 0 520 160" className="max-w-lg">
        <rect x="30" y="30" width="140" height="100" rx="8" fill="#1e3a5f" opacity="0.12" stroke="#1e3a5f" strokeWidth="1.5"/>
        <text x="100" y="72" textAnchor="middle" fontSize="11" fill="#1e3a5f" fontFamily="sans-serif" fontWeight="600">Urbain dense</text>
        <text x="100" y="90" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">Prix élevés</text>
        <text x="100" y="105" textAnchor="middle" fontSize="9" fill="#22c55e" fontFamily="sans-serif">Demande forte</text>
        <rect x="190" y="50" width="140" height="80" rx="8" fill="#f59e0b" opacity="0.12" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="260" y="87" textAnchor="middle" fontSize="11" fill="#92400e" fontFamily="sans-serif" fontWeight="600">Périurbain</text>
        <text x="260" y="105" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">À analyser cas par cas</text>
        <rect x="350" y="60" width="140" height="70" rx="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5"/>
        <text x="420" y="93" textAnchor="middle" fontSize="11" fill="#475569" fontFamily="sans-serif" fontWeight="600">Rural</text>
        <text x="420" y="110" textAnchor="middle" fontSize="9" fill="#94a3b8" fontFamily="sans-serif">Demande incertaine</text>
      </svg>
    </div>

    <h2 id="atouts-apparents">Les atouts apparents : prix et rendement brut</h2>
    <p>
      Les annonces de garages ou de lots de boxes en zone rurale ou dans les petites villes affichent régulièrement des rendements bruts annoncés supérieurs à ceux des grandes métropoles. Cette observation est réelle : le prix d'acquisition est plus bas, et les loyers observés ne diminuent pas dans la même proportion.
    </p>
    <p>
      Cette mécanique peut attirer des investisseurs à la recherche d'un ticket d'entrée accessible et d'un flux de trésorerie positif rapide. Avant de s'en satisfaire, il est nécessaire d'examiner ce que ces chiffres masquent réellement.
    </p>

    <h2 id="fragilite-demande">La fragilité de la demande locative en zone peu dense</h2>
    <p>
      La demande locative pour des espaces de stockage est étroitement liée à la densité de population, à la mobilité résidentielle et au tissu économique local. Ces trois facteurs sont structurellement plus faibles en zone rurale :
    </p>
    <ul>
      <li><strong>Population moins dense.</strong> Moins de ménages dans un rayon géographique donné signifie mécaniquement moins de demandeurs potentiels.</li>
      <li><strong>Structure du logement différente.</strong> En zone rurale, la majorité des habitants disposent d'un logement individuel avec garage ou dépendance. Le besoin de stockage externe est donc moins pressant.</li>
      <li><strong>Tissu économique limité.</strong> Les artisans, TPE et petits commerçants qui constituent une part importante de la demande de stockage en milieu urbain sont moins présents.</li>
    </ul>

    <CalloutBox type="vigilance">
      Un lot de garages occupé au moment de l'achat peut donner l'impression d'une demande existante. La vraie question est : quelle sera la vitesse de relocation si un locataire part ? En zone peu dense, ce délai peut être significativement plus long qu'en milieu urbain.
    </CalloutBox>

    <h2 id="liquidite-revente">La liquidité et la revente</h2>
    <p>
      Investir dans des garages en zone rurale signifie souvent investir dans un actif qui intéressera un nombre limité d'acheteurs le jour de la revente. Le marché des investisseurs actifs sur ce type de bien est concentré dans les métropoles ; les marchés ruraux sont plus difficiles à animer.
    </p>
    <p>
      Cette faible liquidité ne constitue pas nécessairement un problème pour un investisseur à long terme qui n'a pas besoin de revendre rapidement. Elle devient un risque majeur en cas de besoin de liquidités imprévu ou d'évolution de la situation personnelle.
    </p>

    <h2 id="types-demande-rural">Les types de demande qui persistent en zone rurale</h2>
    <p>
      Certains profils de locataires sont présents même en zone peu dense et peuvent constituer une demande structurelle plus stable :
    </p>
    <ul>
      <li>Les artisans et agriculteurs cherchant un espace de stockage de matériaux ou d'équipements ;</li>
      <li>Les ménages en transition (déménagement, succession, travaux) ;</li>
      <li>Les résidents secondaires cherchant un stockage sécurisé pour du mobilier ou des équipements de loisir ;</li>
      <li>Les petites entreprises locales sans entrepôt propre.</li>
    </ul>

    <h2 id="precautions-avant-achat">Précautions spécifiques avant d'investir</h2>
    <p>
      Si, après une analyse rigoureuse, un projet en zone rurale ou périurbaine reste envisageable, certaines précautions supplémentaires s'imposent :
    </p>
    <ul>
      <li>Vérifier la demande locative réelle en publiant une annonce test avant de signer ;</li>
      <li>Analyser les délais de relocation des biens similaires dans la zone ;</li>
      <li>S'assurer que le prix d'acquisition intègre une prime de risque pour la vacance plus probable ;</li>
      <li>Évaluer la situation du bien au regard des dynamiques démographiques locales (déclin ou croissance).</li>
    </ul>

    <div className="mt-8 pt-6 border-t border-slate-100">
      <h3 className="text-sm font-bold text-slate-700 mb-3">Sources et références</h3>
      <ul className="space-y-1">
        <li className="text-xs text-slate-500">→ INSEE.fr — Données démographiques par commune et évolutions</li>
        <li className="text-xs text-slate-500">→ Observatoire.ville.gouv.fr — Dynamiques de l'urbain et du périurbain</li>
      </ul>
    </div>

    <CalloutBox type="retenir" title="Ce qu'il faut retenir">
      Les garages en zone rurale offrent des prix d'acquisition accessibles mais une demande locative structurellement plus fragile. La liquidité à la revente est limitée et le risque de vacance prolongée est plus élevé. Avant tout engagement, vérifier la demande réelle sur le terrain — et non seulement auprès du vendeur — est indispensable. Ce type d'investissement peut avoir du sens pour certains profils d'investisseurs, mais pas comme substitut à une analyse de marché rigoureuse.
    </CalloutBox>
  </div>
);

const tvaLocationGarageContent = () => (
  <div className="prose-article">
    <p className="text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
      La location d'un espace de stockage est exonérée de TVA par défaut — mais cette règle connaît des exceptions. Selon la nature du locataire, la configuration du bien ou l'option fiscale exercée par le bailleur, la TVA peut s'appliquer et modifier significativement l'économie d'une opération.
    </p>

    <div className="my-8 bg-[#f8f9fa] rounded-xl border border-slate-100 p-6 flex items-center justify-center">
      <svg width="100%" height="160" viewBox="0 0 520 160" className="max-w-lg">
        <rect x="30" y="40" width="200" height="80" rx="8" fill="#22c55e" opacity="0.12" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="130" y="78" textAnchor="middle" fontSize="11" fill="#166534" fontFamily="sans-serif" fontWeight="600">Exonéré de TVA</text>
        <text x="130" y="96" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">Principe général</text>
        <text x="130" y="110" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">location à des particuliers</text>
        <rect x="290" y="40" width="200" height="80" rx="8" fill="#3b82f6" opacity="0.12" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="390" y="78" textAnchor="middle" fontSize="11" fill="#1d4ed8" fontFamily="sans-serif" fontWeight="600">TVA applicable</text>
        <text x="390" y="96" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">Option TVA exercée ou</text>
        <text x="390" y="110" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">location avec services</text>
      </svg>
    </div>

    <h2 id="principe-exoneration">Le principe : l'exonération de TVA</h2>
    <p>
      Conformément à l'article 261 D du Code général des impôts, la location de locaux nus (sans équipement ni service) à usage autre qu'habitation est en principe exonérée de TVA. Cette exonération couvre la grande majorité des locations de garages, boxes et caves à des particuliers.
    </p>
    <p>
      Pour le propriétaire bailleur, cette exonération signifie qu'il n'a pas à facturer la TVA sur ses loyers, mais qu'il ne peut pas non plus récupérer la TVA qu'il supporte sur ses dépenses (travaux, frais de gestion).
    </p>

    <CalloutBox type="legal">
      Ces informations sont générales et ne constituent pas un conseil fiscal. La TVA applicable à une opération immobilière spécifique dépend de nombreux paramètres. Consultez un expert-comptable ou un conseiller fiscal avant de prendre une décision.
    </CalloutBox>

    <h2 id="cas-tva-applicable">Les cas où la TVA peut s'appliquer</h2>
    <p>
      Plusieurs situations peuvent conduire à l'application de la TVA sur une location d'espace de stockage :
    </p>
    <p>
      <strong>L'option pour l'assujettissement à la TVA.</strong> Un bailleur assujetti à la TVA pour d'autres activités peut, dans certains cas, opter pour l'assujettissement de ses locations à des professionnels. Cette option, une fois exercée, s'applique pour une durée minimale et ne peut pas être librement révoquée.
    </p>
    <p>
      <strong>La location avec services complémentaires.</strong> Si la location est assortie de prestations de services significatives (gardiennage, manutention, gestion de stocks), l'ensemble de l'opération peut être requalifié en prestation de services soumise à TVA plutôt qu'en simple location.
    </p>
    <p>
      <strong>La location dans le cadre d'un bail commercial.</strong> Lorsqu'un espace de stockage est loué à un professionnel dans le cadre d'un bail commercial, les règles TVA applicables peuvent différer selon les circonstances.
    </p>

    <h2 id="impact-sur-loyers">L'impact de la TVA sur les loyers et la rentabilité</h2>
    <p>
      Si la TVA s'applique, deux scénarios sont possibles selon le profil du locataire :
    </p>
    <ul>
      <li><strong>Locataire assujetti à la TVA :</strong> il peut récupérer la TVA payée sur son loyer, ce qui rend l'option TVA neutre pour lui. Le bailleur, de son côté, peut récupérer la TVA sur ses charges.</li>
      <li><strong>Locataire non assujetti (particulier) :</strong> la TVA constitue un coût définitif pour lui, ce qui peut rendre le bien moins attractif si le loyer TTCdevient significativement plus élevé.</li>
    </ul>

    <h2 id="point-vigilance-acquisition">Point de vigilance lors d'une acquisition</h2>
    <p>
      Lors de l'achat d'un bien ayant fait l'objet d'une option TVA, l'acquéreur doit être attentif aux obligations de régularisation éventuelles. Une TVA récupérée sur les travaux par le vendeur peut donner lieu à une régularisation si le bien change de régime fiscal dans les années suivant l'exercice de l'option.
    </p>

    <div className="mt-8 pt-6 border-t border-slate-100">
      <h3 className="text-sm font-bold text-slate-700 mb-3">Sources et références</h3>
      <ul className="space-y-1">
        <li className="text-xs text-slate-500">→ Legifrance.gouv.fr — Code général des impôts, art. 261 D (exonérations TVA)</li>
        <li className="text-xs text-slate-500">→ BOFIP — BOI-TVA-CHAMP-10-10-50 (locations immobilières et TVA)</li>
        <li className="text-xs text-slate-500">→ impots.gouv.fr — Régime TVA applicable aux locations immobilières</li>
      </ul>
    </div>

    <CalloutBox type="retenir" title="Ce qu'il faut retenir">
      La location d'un garage à un particulier est par défaut exonérée de TVA. Cette exonération peut céder dans certaines configurations : option exercée par le bailleur, location avec services complémentaires, ou location dans un cadre commercial spécifique. Les conséquences diffèrent selon que le locataire est lui-même assujetti à la TVA ou non. Pour toute situation non standard, l'avis d'un professionnel fiscal est indispensable.
    </CalloutBox>
  </div>
);

const negocierPrixAchatLotGaragesContent = () => (
  <div className="prose-article">
    <p className="text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
      Négocier le prix d'un lot de garages n'est pas une démarche improvisée. Elle repose sur une préparation rigoureuse, une connaissance des références de marché et la capacité à identifier les leviers objectifs qui justifient une offre inférieure au prix demandé.
    </p>

    <div className="my-8 bg-[#f8f9fa] rounded-xl border border-slate-100 p-6 flex items-center justify-center">
      <svg width="100%" height="160" viewBox="0 0 520 160" className="max-w-lg">
        <rect x="30" y="50" width="130" height="60" rx="6" fill="#1e3a5f" opacity="0.12" stroke="#1e3a5f" strokeWidth="1.5"/>
        <text x="95" y="85" textAnchor="middle" fontSize="11" fill="#1e3a5f" fontFamily="sans-serif" fontWeight="600">Prix demandé</text>
        <rect x="360" y="50" width="130" height="60" rx="6" fill="#22c55e" opacity="0.12" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="425" y="85" textAnchor="middle" fontSize="11" fill="#166534" fontFamily="sans-serif" fontWeight="600">Prix négocié</text>
        <path d="M162 80 L358 80" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,3"/>
        <rect x="210" y="55" width="100" height="50" rx="6" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="260" y="83" textAnchor="middle" fontSize="9" fill="#92400e" fontFamily="sans-serif" fontWeight="600">Leviers</text>
        <text x="260" y="96" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">État, vacance, travaux</text>
      </svg>
    </div>

    <h2 id="preparer-negociation">Préparer la négociation : connaître la valeur du bien</h2>
    <p>
      La négociation commence bien avant la première rencontre avec le vendeur. Elle suppose d'avoir construit une estimation indépendante de la valeur du bien, fondée sur des données objectives : références de transactions comparables (DVF, annonces vendues), niveau des loyers pratiqués, charges existantes et travaux à prévoir.
    </p>
    <p>
      Cette estimation permet de déterminer un prix d'offre argumenté et de ne pas se laisser ancrer par le prix affiché. Un prix demandé n'est pas un prix de marché : il reflète les attentes du vendeur et, souvent, une marge de négociation.
    </p>

    <h2 id="leviers-negociation">Les leviers de négociation</h2>
    <p>
      Plusieurs éléments objectifs peuvent justifier une offre inférieure au prix demandé :
    </p>
    <ul>
      <li><strong>L'état du bâti.</strong> Des travaux de toiture, une reprise d'étanchéité ou une porte motorisée à remplacer sont des dépenses identifiables qui réduisent la valeur nette de l'investissement. Ils se chiffrent et se déduisent.</li>
      <li><strong>La vacance locative.</strong> Un lot partiellement inoccupé génère moins de revenus immédiats. La période de relocation et le loyer du marché permettent de calculer le manque à gagner et de l'intégrer dans l'offre.</li>
      <li><strong>Des loyers sous le marché.</strong> Des baux anciens avec des loyers faibles ne peuvent pas toujours être révisés immédiatement. L'écart entre le loyer en place et le loyer de marché constitue un coût d'opportunité chiffrable.</li>
      <li><strong>Des charges élevées.</strong> Un appel de fonds de copropriété imminent ou un fonds de travaux important réduit la rentabilité nette de l'opération.</li>
      <li><strong>La durée de mise en vente.</strong> Un bien en vente depuis longtemps sans preneur suggère que le prix est inadapté au marché ou que le bien présente des défauts.</li>
    </ul>

    <CalloutBox type="retenir">
      Présenter une offre écrite argumentée, avec les éléments chiffrés qui la justifient, est souvent plus efficace qu'une négociation verbale. Elle démontre la sériosité de l'acheteur et oblige le vendeur à répondre sur le fond.
    </CalloutBox>

    <h2 id="motivation-vendeur">Comprendre la motivation du vendeur</h2>
    <p>
      La marge de négociation dépend aussi de la situation personnelle et des motivations du vendeur. Un vendeur pressé (succession, liquidité, déménagement) sera plus enclin à accepter une offre basse qu'un propriétaire qui vend sans urgence et peut attendre un meilleur acheteur.
    </p>
    <p>
      Quelques questions à poser indirectement lors des visites ou échanges peuvent aider à comprendre le contexte : depuis combien de temps le bien est-il en vente ? Y a-t-il eu des offres ? Le vendeur est-il propriétaire depuis longtemps ?
    </p>

    <h2 id="erreurs-a-eviter">Les erreurs à éviter</h2>
    <ul>
      <li>Formuler une offre trop basse sans argumentation, qui peut être perçue comme une insulte et bloquer la négociation ;</li>
      <li>S'ancrer sur le rendement espéré plutôt que sur la valeur réelle du bien ;</li>
      <li>Négliger les conditions autres que le prix (délai de réalisation, clause de séquestre, conditions suspensives) qui peuvent avoir autant de valeur que quelques milliers d'euros sur le prix ;</li>
      <li>Montrer trop d'enthousiasme lors des visites, ce qui affaiblit la position de négociation.</li>
    </ul>

    <div className="mt-8 pt-6 border-t border-slate-100">
      <h3 className="text-sm font-bold text-slate-700 mb-3">Outils utiles</h3>
      <ul className="space-y-1">
        <li className="text-xs text-slate-500">→ Notre calculateur de rentabilité pour chiffrer les scénarios avant offre</li>
        <li className="text-xs text-slate-500">→ La checklist d'acquisition pour identifier les points de vigilance</li>
        <li className="text-xs text-slate-500">→ data.gouv.fr — Base DVF pour les références de transactions</li>
      </ul>
    </div>

    <CalloutBox type="retenir" title="Ce qu'il faut retenir">
      Une négociation réussie repose sur une estimation indépendante de la valeur du bien, une identification précise des leviers objectifs (état, vacance, charges) et la compréhension des motivations du vendeur. Une offre argumentée et chiffrée est plus convaincante qu'une demande de remise sans justification. Les conditions du compromis (délai, séquestre) ont aussi une valeur négociable à ne pas négliger.
    </CalloutBox>
  </div>
);

const augmenterLoyerGarageContent = () => (
  <div className="prose-article">
    <p className="text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
      Réviser à la hausse le loyer d'un espace de stockage est possible, mais encadré par les conditions du contrat et les règles du droit commun. Les leviers diffèrent selon que l'on cherche à indexer un loyer existant, à renegocier avec un locataire en place, ou à repositionner le bien lors d'un renouvellement de bail.
    </p>

    <div className="my-8 bg-[#f8f9fa] rounded-xl border border-slate-100 p-6 flex items-center justify-center">
      <svg width="100%" height="160" viewBox="0 0 520 160" className="max-w-lg">
        <rect x="30" y="40" width="130" height="80" rx="8" fill="#1e3a5f" opacity="0.10" stroke="#1e3a5f" strokeWidth="1.5"/>
        <text x="95" y="80" textAnchor="middle" fontSize="10" fill="#1e3a5f" fontFamily="sans-serif" fontWeight="600">Indexation</text>
        <text x="95" y="96" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">Clause contractuelle</text>
        <text x="95" y="110" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">IRL ou ICC</text>
        <rect x="195" y="40" width="130" height="80" rx="8" fill="#3b82f6" opacity="0.10" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="260" y="80" textAnchor="middle" fontSize="10" fill="#1d4ed8" fontFamily="sans-serif" fontWeight="600">Renégociation</text>
        <text x="260" y="96" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">Accord amiable</text>
        <text x="260" y="110" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">pendant le bail</text>
        <rect x="360" y="40" width="130" height="80" rx="8" fill="#22c55e" opacity="0.10" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="425" y="80" textAnchor="middle" fontSize="10" fill="#166534" fontFamily="sans-serif" fontWeight="600">Renouvellement</text>
        <text x="425" y="96" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">Changement de locataire</text>
        <text x="425" y="110" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">ou fin de bail</text>
      </svg>
    </div>

    <h2 id="indexation-contractuelle">L'indexation contractuelle : le levier le plus simple</h2>
    <p>
      Si le contrat de location prévoit une clause d'indexation du loyer, le bailleur peut réviser le loyer chaque année sans avoir à négocier avec le locataire. La révision est automatique, à condition de respecter la périodicité et l'indice prévu.
    </p>
    <p>
      Pour les locaux à usage de stockage loués à des particuliers, l'indice le plus fréquemment utilisé est l'Indice de Référence des Loyers (IRL), publié chaque trimestre par l'INSEE. Pour des locations à des professionnels, l'Indice des Loyers Commerciaux (ILC) ou l'Indice des Loyers des Activités Tertiaires (ILAT) peuvent être référencés.
    </p>

    <CalloutBox type="vigilance">
      Si le contrat ne prévoit pas de clause d'indexation, le loyer ne peut pas être révisé unilatéralement. Toute modification doit faire l'objet d'un avenant signé par les deux parties.
    </CalloutBox>

    <h2 id="renegociation-amiable">La renégociation amiable en cours de bail</h2>
    <p>
      Si le loyer en place est significativement en dessous du marché et qu'aucune clause d'indexation ne permet de le corriger, la renégociation amiable est possible. Elle repose sur un accord entre le bailleur et le locataire, formalisé par un avenant au contrat.
    </p>
    <p>
      Cette démarche demande de la méthode :
    </p>
    <ul>
      <li>Préparer un argumentaire fondé sur les loyers observés pour des biens comparables dans la zone ;</li>
      <li>Proposer une augmentation progressive plutôt qu'un rattrapage immédiat, pour faciliter l'accord ;</li>
      <li>Présenter la démarche comme une mise en cohérence avec le marché, pas comme une contrainte arbitraire.</li>
    </ul>

    <h2 id="changement-locataire">Le levier le plus efficace : le changement de locataire</h2>
    <p>
      Le changement de locataire constitue l'opportunité naturelle de repositionner le loyer au niveau du marché. Lors d'un départ, le bailleur est libre de fixer un nouveau loyer sans contrainte de lien avec l'ancien.
    </p>
    <p>
      C'est pourquoi la politique de loyer lors de la mise en location initiale a des conséquences durables : un loyer initialement trop bas est difficile à corriger tant que le locataire reste en place, surtout si le contrat ne prévoit pas d'indexation.
    </p>

    <h2 id="erreurs-a-eviter">Les erreurs à éviter</h2>
    <ul>
      <li>Réviser le loyer sans base contractuelle ou accord du locataire : c'est juridiquement sans effet et peut créer un contentieux ;</li>
      <li>Confondre la révision d'un loyer sous-évalué avec une augmentation arbitraire ;</li>
      <li>Ignorer la réaction probable du locataire : une augmentation trop brutale peut provoquer un départ et une période de vacance.</li>
    </ul>

    <div className="mt-8 pt-6 border-t border-slate-100">
      <h3 className="text-sm font-bold text-slate-700 mb-3">Sources et références</h3>
      <ul className="space-y-1">
        <li className="text-xs text-slate-500">→ INSEE.fr — Indice de Référence des Loyers (IRL), publication trimestrielle</li>
        <li className="text-xs text-slate-500">→ Legifrance.gouv.fr — Code civil, art. 1709 et suivants (louage)</li>
      </ul>
    </div>

    <CalloutBox type="retenir" title="Ce qu'il faut retenir">
      L'augmentation du loyer d'un garage repose sur trois leviers selon la situation : l'indexation contractuelle (si une clause le prévoit), la renégociation amiable avec un avenant (si le locataire est d'accord) et le repositionnement lors d'un changement de locataire (le levier le plus libre). En l'absence de clause contractuelle, aucune révision unilatérale n'est possible. La prévention passe par une clause d'indexation bien rédigée dès la signature du contrat initial.
    </CalloutBox>
  </div>
);

const garageBailCommercialOuCivilContent = () => (
  <div className="prose-article">
    <p className="text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
      Lorsqu'un garage ou un espace de stockage est loué à un professionnel ou une entreprise, le régime juridique applicable n'est pas automatique. Le statut des baux commerciaux peut s'appliquer dans certains cas, avec des conséquences très différentes de celles d'un simple contrat civil — notamment en matière de durée, de droit au renouvellement et de loyer.
    </p>

    <div className="my-8 bg-[#f8f9fa] rounded-xl border border-slate-100 p-6 flex items-center justify-center">
      <svg width="100%" height="160" viewBox="0 0 520 160" className="max-w-lg">
        <rect x="30" y="40" width="200" height="80" rx="8" fill="#1e3a5f" opacity="0.10" stroke="#1e3a5f" strokeWidth="1.5"/>
        <text x="130" y="75" textAnchor="middle" fontSize="11" fill="#1e3a5f" fontFamily="sans-serif" fontWeight="600">Bail commercial</text>
        <text x="130" y="92" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">Droit au renouvellement</text>
        <text x="130" y="106" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">Durée min. 9 ans</text>
        <rect x="290" y="40" width="200" height="80" rx="8" fill="#3b82f6" opacity="0.10" stroke="#3b82f6" strokeWidth="1.5"/>
        <text x="390" y="75" textAnchor="middle" fontSize="11" fill="#1d4ed8" fontFamily="sans-serif" fontWeight="600">Contrat civil</text>
        <text x="390" y="92" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">Plus de liberté contractuelle</text>
        <text x="390" y="106" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">Pas de droit au renouvellement</text>
      </svg>
    </div>

    <h2 id="conditions-bail-commercial">Conditions d'application du bail commercial</h2>
    <p>
      Le statut des baux commerciaux, régi par les articles L. 145-1 et suivants du Code de commerce, s'applique lorsque trois conditions cumulatives sont réunies :
    </p>
    <ul>
      <li>Le locataire est un commerçant, artisan ou industriel ;</li>
      <li>Il est immatriculé au Registre du Commerce et des Sociétés (RCS) ou au Répertoire des Métiers ;</li>
      <li>L'espace est affecté à l'exploitation du fonds de commerce ou artisanal.</li>
    </ul>
    <p>
      Pour un garage loué à un particulier qui utilise l'espace à titre personnel, ou à un professionnel libéral non commerçant, le statut des baux commerciaux ne s'applique pas en principe.
    </p>

    <CalloutBox type="legal">
      La qualification du régime applicable dépend des circonstances réelles de la location, pas uniquement de la rédaction du contrat. Un juge peut requalifier un contrat de droit commun en bail commercial si les conditions légales sont réunies dans les faits. Consultez un avocat ou un notaire pour toute situation impliquant un locataire professionnel.
    </CalloutBox>

    <h2 id="consequences-bail-commercial">Les conséquences d'un bail commercial</h2>
    <p>
      Si le statut des baux commerciaux s'applique, ses implications sont importantes pour le bailleur :
    </p>
    <ul>
      <li><strong>Durée minimale de 9 ans.</strong> Le bail est conclu pour une durée minimale de 9 ans, avec possibilité pour le locataire de donner congé à chaque échéance triennale.</li>
      <li><strong>Droit au renouvellement.</strong> Le locataire a un droit au renouvellement du bail à son échéance. Si le bailleur refuse, il doit en principe verser une indemnité d'éviction.</li>
      <li><strong>Révision légale du loyer encadrée.</strong> La révision du loyer suit des règles spécifiques, encadrées par le Code de commerce.</li>
    </ul>

    <h2 id="contrat-civil-professionnel">Le contrat civil avec un professionnel</h2>
    <p>
      Lorsqu'un professionnel loue un garage à des fins qui n'affectent pas son fonds de commerce — par exemple, un artisan qui stocke du matériel personnel mais n'exploite pas son activité à partir du garage — le statut des baux commerciaux peut ne pas s'appliquer.
    </p>
    <p>
      Dans ce cas, un contrat de droit commun (issu du Code civil) peut être utilisé. Il offre davantage de liberté contractuelle, notamment sur la durée, le préavis et les conditions de révision du loyer.
    </p>

    <h2 id="importance-redaction">L'importance de la rédaction du contrat</h2>
    <p>
      La rédaction du contrat est déterminante pour éviter une requalification en bail commercial involontaire. Il convient notamment :
    </p>
    <ul>
      <li>De préciser explicitement l'usage du local (stockage de biens personnels, non-affectation à un fonds de commerce) ;</li>
      <li>De ne pas mentionner de destination commerciale ou artisanale pour le local ;</li>
      <li>De s'assurer que le locataire ne développera pas d'activité visible depuis le local (panneau, accueil de clients).</li>
    </ul>

    <div className="mt-8 pt-6 border-t border-slate-100">
      <h3 className="text-sm font-bold text-slate-700 mb-3">Sources et références</h3>
      <ul className="space-y-1">
        <li className="text-xs text-slate-500">→ Legifrance.gouv.fr — Code de commerce, art. L. 145-1 et suivants (baux commerciaux)</li>
        <li className="text-xs text-slate-500">→ Legifrance.gouv.fr — Code civil, art. 1709 et suivants (louage de choses)</li>
      </ul>
    </div>

    <CalloutBox type="retenir" title="Ce qu'il faut retenir">
      Le statut des baux commerciaux s'applique à un garage loué à un commerçant ou artisan lorsque le local est affecté à l'exploitation de son fonds. Ses conséquences — durée de 9 ans, droit au renouvellement, indemnité d'éviction — sont significativement différentes d'un contrat civil. Si vous envisagez de louer à un professionnel, la rédaction du contrat et la qualification du régime applicable doivent faire l'objet d'une analyse juridique préalable.
    </CalloutBox>
  </div>
);

const diagnosticPerformanceEnergetiqueGarageContent = () => (
  <div className="prose-article">
    <p className="text-lg text-slate-700 leading-relaxed font-medium border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
      Les obligations de diagnostic immobilier s'appliquent différemment selon la nature du bien. Pour un garage ou un box de stockage, certaines règles diffèrent de celles applicables aux logements — et certains diagnostics obligatoires pour les habitations ne le sont pas pour ces biens.
    </p>

    <div className="my-8 bg-[#f8f9fa] rounded-xl border border-slate-100 p-6 flex items-center justify-center">
      <svg width="100%" height="160" viewBox="0 0 520 160" className="max-w-lg">
        <rect x="30" y="30" width="140" height="100" rx="8" fill="#22c55e" opacity="0.12" stroke="#22c55e" strokeWidth="1.5"/>
        <text x="100" y="68" textAnchor="middle" fontSize="10" fill="#166534" fontFamily="sans-serif" fontWeight="600">Obligatoires</text>
        <text x="100" y="84" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">Amiante (si avant 1997)</text>
        <text x="100" y="98" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">ERP (zone définie)</text>
        <text x="100" y="112" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">Loi Carrez (copro.)</text>
        <rect x="195" y="50" width="130" height="70" rx="8" fill="#f59e0b" opacity="0.12" stroke="#f59e0b" strokeWidth="1.5"/>
        <text x="260" y="85" textAnchor="middle" fontSize="10" fill="#92400e" fontFamily="sans-serif" fontWeight="600">Non obligatoires</text>
        <text x="260" y="100" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">DPE, plomb, électricité</text>
        <rect x="350" y="40" width="140" height="80" rx="8" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5"/>
        <text x="420" y="75" textAnchor="middle" fontSize="10" fill="#475569" fontFamily="sans-serif" fontWeight="600">Recommandés</text>
        <text x="420" y="90" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">État général documenté</text>
        <text x="420" y="104" textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="sans-serif">pour sécurité juridique</text>
      </svg>
    </div>

    <h2 id="dpe-garage">Le DPE : non obligatoire pour les garages</h2>
    <p>
      Le Diagnostic de Performance Énergétique (DPE) est obligatoire pour les logements à la vente ou à la location. Pour un garage ou un box de stockage, le DPE n'est pas obligatoire, car ces biens ne sont pas destinés à l'habitation.
    </p>
    <p>
      Cette règle s'applique même si le garage est vendu ou loué séparément d'un logement principal. Un box ou un garage vendu seul, sans logement attenant, n'entre pas dans le champ d'application des obligations DPE.
    </p>

    <h2 id="diagnostic-amiante">Le diagnostic amiante : attention aux bâtiments anciens</h2>
    <p>
      Pour les bâtiments dont le permis de construire a été déposé avant le 1er juillet 1997, un état d'amiante est obligatoire dans le cadre d'une vente. Cette obligation s'applique à tout immeuble bâti, y compris les garages et locaux de stockage situés dans ces bâtiments.
    </p>
    <p>
      Si l'état d'amiante fait apparaître des matériaux contenant de l'amiante, des obligations complémentaires (surveillance, travaux) peuvent s'imposer selon l'état de conservation des matériaux. Ce point mérite une attention particulière lors de l'acquisition d'un lot de garages dans un immeuble ancien.
    </p>

    <CalloutBox type="vigilance">
      L'absence de diagnostic amiante lors d'une vente concernée constitue un manquement susceptible d'engager la responsabilité du vendeur. L'acquéreur peut invoquer un vice caché si de l'amiante est découvert ultérieurement dans un état dégradé.
    </CalloutBox>

    <h2 id="erp-zones-risques">L'état des risques et pollutions (ERP)</h2>
    <p>
      L'état des risques et pollutions (ERP) doit être fourni lors de toute vente ou location d'un bien immobilier situé dans une zone couverte par un plan de prévention des risques naturels, miniers ou technologiques. Cette obligation s'applique également aux garages et espaces de stockage dans les zones concernées.
    </p>
    <p>
      Il est possible de vérifier si un bien est situé dans une zone concernée via le portail georisques.gouv.fr, accessible gratuitement.
    </p>

    <h2 id="loi-carrez">La loi Carrez en copropriété</h2>
    <p>
      La loi Carrez impose de mentionner la superficie privative dans tout acte de vente d'un lot en copropriété. Cette obligation s'applique aux garages vendus en copropriété, à partir d'une surface de 8 m² de plancher.
    </p>
    <p>
      Le mesurage Carrez doit être effectué par un professionnel habilité et figure dans l'acte de vente. Une surface erronée peut donner lieu à une action en réduction du prix dans l'année suivant la signature.
    </p>

    <h2 id="ce-qui-ne-sapplique-pas">Ce qui ne s'applique généralement pas aux garages</h2>
    <p>
      Plusieurs diagnostics obligatoires pour les logements ne s'appliquent pas (ou pas dans les mêmes conditions) aux garages et espaces de stockage :
    </p>
    <ul>
      <li>Le diagnostic plomb (CREP) : applicable aux logements avant 1949, pas aux garages indépendants ;</li>
      <li>Le diagnostic électricité : applicable aux logements avec installation de plus de 15 ans, pas aux garages ;</li>
      <li>Le diagnostic gaz : applicable aux logements, pas aux garages ;</li>
      <li>Le DPE : non obligatoire pour les locaux non destinés à l'habitation.</li>
    </ul>

    <div className="mt-8 pt-6 border-t border-slate-100">
      <h3 className="text-sm font-bold text-slate-700 mb-3">Sources et références</h3>
      <ul className="space-y-1">
        <li className="text-xs text-slate-500">→ Service-public.fr — Diagnostics immobiliers obligatoires lors d'une vente</li>
        <li className="text-xs text-slate-500">→ georisques.gouv.fr — Vérification des zones ERP</li>
        <li className="text-xs text-slate-500">→ Legifrance.gouv.fr — Loi n°96-1107 du 18 décembre 1996 (loi Carrez)</li>
        <li className="text-xs text-slate-500">→ Legifrance.gouv.fr — Code de la santé publique, art. R1334-14 (amiante)</li>
      </ul>
    </div>

    <CalloutBox type="retenir" title="Ce qu'il faut retenir">
      Le DPE n'est pas obligatoire pour un garage ou un box de stockage. En revanche, le diagnostic amiante s'impose pour les bâtiments construits avant 1997, l'état des risques (ERP) dans les zones concernées, et la loi Carrez pour les lots en copropriété. Les diagnostics spécifiques aux logements (plomb, électricité, gaz) ne s'appliquent pas aux garages indépendants. Avant toute transaction, vérifiez les obligations applicables avec un diagnostiqueur certifié.
    </CalloutBox>
  </div>
);

// ── Page component ──────────────────────────────────────────────────────────────

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const relatedArticles = getRelatedArticles(slug, 3);

  const tocMap: Record<string, { id: string; title: string; level: 2 | 3 }[]> = {
    "investir-box-stockage-fondamentaux": [
      { id: "qu-est-ce-qu-un-box", title: "Qu'est-ce qu'un box de stockage ?", level: 2 },
      { id: "pourquoi-cet-actif-interesse", title: "Pourquoi cet actif retient-il l'attention ?", level: 2 },
      { id: "criteres-analyse", title: "Les critères fondamentaux d'analyse", level: 2 },
      { id: "localisation", title: "La localisation et son environnement", level: 3 },
      { id: "prix-achat", title: "Le prix d'acquisition", level: 3 },
      { id: "charges-et-fiscalite", title: "Les charges et la fiscalité", level: 3 },
      { id: "risques-a-anticiper", title: "Les risques à anticiper", level: 2 },
      { id: "avant-de-se-lancer", title: "Avant de se décider : les questions structurantes", level: 2 },
    ],
    "due-diligence-lot-garages": [
      { id: "etat-du-bati", title: "L'état du bâti et des équipements", level: 2 },
      { id: "situation-locative", title: "La situation locative", level: 2 },
      { id: "documents-copropriete", title: "Les documents de copropriété", level: 2 },
      { id: "verifications-juridiques", title: "Les vérifications juridiques", level: 2 },
      { id: "analyse-financiere", title: "L'analyse financière pré-acquisition", level: 2 },
      { id: "questions-vendeur", title: "Les questions à poser au vendeur", level: 2 },
    ],
    "rentabilite-brute-nette-difference": [
      { id: "definition-rentabilite-brute", title: "Qu'est-ce que la rentabilité brute ?", level: 2 },
      { id: "ce-que-cache-le-brut", title: "Ce que ne montre pas le taux brut", level: 2 },
      { id: "postes-de-charges", title: "Les postes de charges à intégrer", level: 2 },
      { id: "calcul-rentabilite-nette", title: "Comment calculer la rentabilité nette", level: 2 },
      { id: "impact-fiscalite", title: "L'impact de la fiscalité", level: 2 },
      { id: "erreurs-courantes", title: "Les erreurs courantes", level: 2 },
    ],
    "bail-location-espace-stockage": [
      { id: "pas-de-statut-specifique", title: "L'absence de statut spécifique", level: 2 },
      { id: "droit-commun", title: "Le droit commun applicable", level: 2 },
      { id: "bail-verbal-vs-ecrit", title: "Bail verbal ou bail écrit", level: 2 },
      { id: "clauses-essentielles", title: "Les clauses essentielles", level: 2 },
      { id: "duree-et-resiliation", title: "Durée et modalités de résiliation", level: 2 },
      { id: "en-cas-de-litige", title: "En cas de litige", level: 2 },
    ],
    "fixer-loyer-espace-stockage": [
      { id: "observer-le-marche", title: "Observer le marché local", level: 2 },
      { id: "criteres-influencant", title: "Les critères qui influencent le loyer", level: 2 },
      { id: "methode-positionnement", title: "Méthode de positionnement tarifaire", level: 2 },
      { id: "erreurs-classiques", title: "Les erreurs classiques", level: 2 },
      { id: "revision-du-loyer", title: "La révision du loyer", level: 2 },
      { id: "indexation", title: "L'indexation contractuelle", level: 2 },
    ],
    "vacance-locative-espaces-stockage": [
      { id: "definition-vacance", title: "Qu'est-ce que la vacance locative ?", level: 2 },
      { id: "causes-vacance", title: "Les principales causes de vacance", level: 2 },
      { id: "impact-rendement", title: "L'impact sur la rentabilité", level: 2 },
      { id: "prevention", title: "Les pratiques de prévention", level: 2 },
      { id: "gestion-vacance", title: "Gérer une période de vacance", level: 2 },
      { id: "evaluer-risque", title: "Évaluer le risque avant l'achat", level: 2 },
    ],
    "assurance-pno-espace-stockage": [
      { id: "qu-est-ce-que-pno", title: "Qu'est-ce que l'assurance PNO ?", level: 2 },
      { id: "risques-couverts", title: "Les risques couverts et exclusions", level: 2 },
      { id: "pno-vs-copropriete", title: "PNO et assurance de copropriété", level: 2 },
      { id: "responsabilite-civile", title: "La responsabilité civile du propriétaire", level: 2 },
      { id: "points-vigilance", title: "Les points de vigilance", level: 2 },
      { id: "cout-pno", title: "Le coût d'une assurance PNO", level: 2 },
    ],
    "mise-en-location-espace-stockage-ligne": [
      { id: "canaux-disponibles", title: "Les canaux disponibles", level: 2 },
      { id: "plateformes-generiques", title: "Les plateformes généralistes", level: 2 },
      { id: "plateformes-specialisees", title: "Les plateformes spécialisées", level: 2 },
      { id: "rediger-annonce", title: "Rédiger une annonce efficace", level: 2 },
      { id: "photos-et-visites", title: "Photographies et visites", level: 2 },
      { id: "gestion-candidatures", title: "Gérer les candidatures", level: 2 },
    ],
    "evaluer-demande-locative-espace-stockage": [
      { id: "pourquoi-evaluer", title: "Pourquoi évaluer la demande avant d'acheter ?", level: 2 },
      { id: "indicateurs-indirects", title: "Les indicateurs indirects de la demande", level: 2 },
      { id: "observer-offre", title: "Observer l'offre existante", level: 2 },
      { id: "annonces-en-ligne", title: "Lire les annonces en ligne", level: 2 },
      { id: "echanger-localement", title: "Échanger avec les acteurs locaux", level: 2 },
      { id: "limites-analyse", title: "Les limites de l'analyse préliminaire", level: 2 },
    ],
    "reglement-copropriete-espace-stockage": [
      { id: "role-reglement", title: "Le rôle du règlement de copropriété", level: 2 },
      { id: "usage-autorise", title: "L'usage autorisé du local", level: 2 },
      { id: "restrictions-locatives", title: "Les restrictions à la mise en location", level: 2 },
      { id: "charges-et-repartition", title: "La répartition des charges et tantièmes", level: 2 },
      { id: "travaux-et-ag", title: "Travaux votés et fonds de réserve", level: 2 },
      { id: "points-vigilance-pratiques", title: "Les points de vigilance pratiques", level: 2 },
    ],
    "charges-copropriete-garages-impact": [
      { id: "nature-charges", title: "La nature des charges de copropriété", level: 2 },
      { id: "charges-courantes", title: "Les charges courantes", level: 2 },
      { id: "charges-exceptionnelles", title: "Les charges exceptionnelles et travaux votés", level: 2 },
      { id: "fonds-travaux", title: "Le fonds de travaux obligatoire (loi ALUR)", level: 2 },
      { id: "impact-rentabilite", title: "L'impact sur la rentabilité nette", level: 2 },
      { id: "analyser-avant-achat", title: "Comment analyser les charges avant l'achat", level: 2 },
    ],
    "gerer-impayes-espace-stockage": [
      { id: "prevention-avant-tout", title: "La prévention : première ligne de défense", level: 2 },
      { id: "premier-impaye", title: "Réagir au premier impayé", level: 2 },
      { id: "mise-en-demeure", title: "La mise en demeure", level: 2 },
      { id: "procedures-judiciaires", title: "Les procédures judiciaires applicables", level: 2 },
      { id: "delais-et-couts", title: "Délais et coûts à anticiper", level: 2 },
      { id: "reprise-des-lieux", title: "La reprise des lieux", level: 2 },
    ],
    "nom-propre-societe-espaces-stockage": [
      { id: "nom-propre", title: "L'acquisition en nom propre", level: 2 },
      { id: "sci-ir", title: "La SCI à l'impôt sur le revenu", level: 2 },
      { id: "sci-is", title: "La SCI à l'impôt sur les sociétés", level: 2 },
      { id: "sarl-sas", title: "Les sociétés commerciales (SARL, SAS)", level: 2 },
      { id: "criteres-de-choix", title: "Les critères structurants du choix", level: 2 },
      { id: "indispensable-professionnel", title: "Pourquoi ce choix nécessite un professionnel", level: 2 },
    ],
    "financer-achat-lot-garages": [
      { id: "banques-et-garages", title: "Comment les banques appréhendent ce type d'actif", level: 2 },
      { id: "apport-attendu", title: "Le niveau d'apport généralement attendu", level: 2 },
      { id: "capacite-emprunt", title: "La capacité d'emprunt et le calcul de la banque", level: 2 },
      { id: "structure-acquisition", title: "La structure d'acquisition et son impact sur le financement", level: 2 },
      { id: "negocier-conditions", title: "Négocier les conditions de crédit", level: 2 },
      { id: "avant-de-solliciter", title: "Ce qu'il faut préparer avant de solliciter une banque", level: 2 },
    ],
    "lot-garages-occupe-ou-vacant": [
      { id: "lot-occupe-avantages", title: "Lot occupé : les avantages", level: 2 },
      { id: "lot-occupe-vigilance", title: "Lot occupé : les points de vigilance", level: 2 },
      { id: "lot-vacant-avantages", title: "Lot vacant : les avantages", level: 2 },
      { id: "lot-vacant-risques", title: "Lot vacant : les risques", level: 2 },
      { id: "impact-prix", title: "L'impact sur le prix de négociation", level: 2 },
      { id: "quelle-situation-preferer", title: "Quelle situation préférer ?", level: 2 },
    ],
    "acteurs-self-storage-france": [
      { id: "qu-est-ce-que-self-storage", title: "Le self-storage professionnel : définition et positionnement", level: 2 },
      { id: "grands-operateurs", title: "Les grands opérateurs présents en France", level: 2 },
      { id: "acteurs-regionaux", title: "Les acteurs régionaux et indépendants", level: 2 },
      { id: "modele-economique", title: "Le modèle économique du self-storage", level: 2 },
      { id: "impact-marche-local", title: "L'impact sur les marchés locaux", level: 2 },
      { id: "coexistence", title: "Coexistence avec les garages et boxes individuels", level: 2 },
    ],
    "structurer-gestion-plusieurs-unites-stockage": [
      { id: "quand-structurer", title: "À partir de quand structurer sa gestion ?", level: 2 },
      { id: "suivi-des-baux", title: "Le suivi des baux et des échéances", level: 2 },
      { id: "suivi-financier", title: "Le suivi financier : loyers, charges et trésorerie", level: 2 },
      { id: "outils-disponibles", title: "Les outils disponibles : tableurs, logiciels, applications", level: 2 },
      { id: "externaliser", title: "Externaliser la gestion : quand et comment ?", level: 2 },
      { id: "structure-juridique", title: "La question de la structure juridique à l'échelle", level: 2 },
    ],
    "prix-garages-donnees-dvf": [
      { id: "qu-est-ce-que-dvf", title: "Qu'est-ce que la base DVF ?", level: 2 },
      { id: "garages-dans-dvf", title: "Les garages dans la base DVF", level: 2 },
      { id: "ce-que-revele-dvf", title: "Ce que révèlent les données", level: 2 },
      { id: "comment-utiliser-dvf", title: "Comment utiliser DVF dans une analyse ?", level: 2 },
    ],
    "travaux-garage-loue-responsabilite": [
      { id: "principe-general", title: "Le principe général : le droit commun s'applique", level: 2 },
      { id: "obligation-bailleur", title: "Les obligations du bailleur", level: 2 },
      { id: "obligation-locataire", title: "Les obligations du locataire", level: 2 },
      { id: "role-du-contrat", title: "Le rôle central du contrat", level: 2 },
      { id: "travaux-amelioration", title: "Les travaux d'amélioration", level: 2 },
    ],
    "investir-garage-zone-rurale": [
      { id: "atouts-apparents", title: "Les atouts apparents : prix et rendement brut", level: 2 },
      { id: "fragilite-demande", title: "La fragilité de la demande locative en zone peu dense", level: 2 },
      { id: "liquidite-revente", title: "La liquidité et la revente", level: 2 },
      { id: "types-demande-rural", title: "Les types de demande qui persistent en zone rurale", level: 2 },
      { id: "precautions-avant-achat", title: "Précautions spécifiques avant d'investir", level: 2 },
    ],
    "tva-location-garage": [
      { id: "principe-exoneration", title: "Le principe : l'exonération de TVA", level: 2 },
      { id: "cas-tva-applicable", title: "Les cas où la TVA peut s'appliquer", level: 2 },
      { id: "impact-sur-loyers", title: "L'impact de la TVA sur les loyers et la rentabilité", level: 2 },
      { id: "point-vigilance-acquisition", title: "Point de vigilance lors d'une acquisition", level: 2 },
    ],
    "negocier-prix-achat-lot-garages": [
      { id: "preparer-negociation", title: "Préparer la négociation", level: 2 },
      { id: "leviers-negociation", title: "Les leviers de négociation", level: 2 },
      { id: "motivation-vendeur", title: "Comprendre la motivation du vendeur", level: 2 },
      { id: "erreurs-a-eviter", title: "Les erreurs à éviter", level: 2 },
    ],
    "augmenter-loyer-garage": [
      { id: "indexation-contractuelle", title: "L'indexation contractuelle", level: 2 },
      { id: "renegociation-amiable", title: "La renégociation amiable en cours de bail", level: 2 },
      { id: "changement-locataire", title: "Le levier le plus efficace : le changement de locataire", level: 2 },
      { id: "erreurs-a-eviter", title: "Les erreurs à éviter", level: 2 },
    ],
    "garage-bail-commercial-ou-civil": [
      { id: "conditions-bail-commercial", title: "Conditions d'application du bail commercial", level: 2 },
      { id: "consequences-bail-commercial", title: "Les conséquences d'un bail commercial", level: 2 },
      { id: "contrat-civil-professionnel", title: "Le contrat civil avec un professionnel", level: 2 },
      { id: "importance-redaction", title: "L'importance de la rédaction du contrat", level: 2 },
    ],
    "diagnostic-performance-energetique-garage": [
      { id: "dpe-garage", title: "Le DPE : non obligatoire pour les garages", level: 2 },
      { id: "diagnostic-amiante", title: "Le diagnostic amiante", level: 2 },
      { id: "erp-zones-risques", title: "L'état des risques et pollutions (ERP)", level: 2 },
      { id: "loi-carrez", title: "La loi Carrez en copropriété", level: 2 },
      { id: "ce-qui-ne-sapplique-pas", title: "Ce qui ne s'applique généralement pas aux garages", level: 2 },
    ],
  };
  const tocItems = tocMap[slug] ?? [];

  // JSON-LD schema pour les moteurs de recherche
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: { "@type": "Organization", name: "Observatoire du Stockage" },
    publisher: {
      "@type": "Organization",
      name: "Observatoire du Stockage",
      url: BASE_URL,
    },
    url: `${BASE_URL}/analyses/${article.slug}`,
    inLanguage: "fr-FR",
  };

  const needsDisclaimer =
    article.category === "reglementation" || article.category === "rentabilite";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        {/* Fil d'Ariane + header */}
        <header className="bg-white border-b border-slate-100 py-10 md:py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
              <Link href="/" className="hover:text-slate-700 transition-colors">Accueil</Link>
              <svg className="w-3 h-3 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <Link href="/analyses" className="hover:text-slate-700 transition-colors">Analyses</Link>
              <svg className="w-3 h-3 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <CategoryBadge slug={article.category} linked={false} size="sm" />
            </nav>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a2e] leading-tight">
              {article.title}
            </h1>

            <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
              {article.excerpt}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500 border-t border-slate-100 pt-5">
              <div className="flex items-center gap-1.5">
                <div className="w-7 h-7 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white text-xs font-bold shrink-0">
                  O
                </div>
                <span className="font-medium text-slate-700">{article.author}</span>
              </div>
              <span className="text-slate-200 hidden sm:inline">·</span>
              <time dateTime={article.date} className="tabular-nums">{formatDate(article.date)}</time>
              <span className="text-slate-200 hidden sm:inline">·</span>
              <span>{article.readingTime} min de lecture</span>
            </div>
          </div>
        </header>

        {/* Corps */}
        <div className="bg-[#f8f9fa] py-10 md:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-start">

              {/* Contenu principal */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-10">
                {tocItems.length > 0 && <TableOfContents items={tocItems} />}

                {needsDisclaimer && (
                  <CalloutBox type="legal">
                    Les informations présentées dans cet article sont à caractère informatif et pédagogique. Elles ne constituent pas un conseil juridique, fiscal ou financier. Consultez un professionnel qualifié avant toute décision.
                  </CalloutBox>
                )}

                {(() => {
                  const contentMap: Record<string, () => React.JSX.Element> = {
                    "investir-box-stockage-fondamentaux": investirFondamentauxContent,
                    "due-diligence-lot-garages": dueDiligenceContent,
                    "rentabilite-brute-nette-difference": rentabiliteBruteNetteContent,
                    "bail-location-espace-stockage": bailLocationContent,
                    "fixer-loyer-espace-stockage": fixerLoyerContent,
                    "vacance-locative-espaces-stockage": vacanceLocativeContent,
                    "assurance-pno-espace-stockage": assurancePnoContent,
                    "mise-en-location-espace-stockage-ligne": miseEnLocationLigneContent,
                    "evaluer-demande-locative-espace-stockage": evaluerDemandeLocativeContent,
                    "reglement-copropriete-espace-stockage": reglementCoproprieteContent,
                    "charges-copropriete-garages-impact": chargesCoproprieteContent,
                    "gerer-impayes-espace-stockage": gererImpayesContent,
                    "nom-propre-societe-espaces-stockage": nomPropreSocieteContent,
                    "financer-achat-lot-garages": financerAchatGaragesContent,
                    "lot-garages-occupe-ou-vacant": lotOccupeOuVacantContent,
                    "acteurs-self-storage-france": acteursSelfStorageContent,
                    "structurer-gestion-plusieurs-unites-stockage": structurerGestionContent,
                    "prix-garages-donnees-dvf": prixGaragesDonneesDvfContent,
                    "travaux-garage-loue-responsabilite": travauxGarageLoueResponsabiliteContent,
                    "investir-garage-zone-rurale": investirGarageZoneRuraleContent,
                    "tva-location-garage": tvaLocationGarageContent,
                    "negocier-prix-achat-lot-garages": negocierPrixAchatLotGaragesContent,
                    "augmenter-loyer-garage": augmenterLoyerGarageContent,
                    "garage-bail-commercial-ou-civil": garageBailCommercialOuCivilContent,
                    "diagnostic-performance-energetique-garage": diagnosticPerformanceEnergetiqueGarageContent,
                  };
                  const renderContent = contentMap[slug];
                  return renderContent ? renderContent() : (
                    <div className="prose-article">
                      <p className="text-lg text-slate-700 leading-relaxed border-l-4 border-[#1e3a5f] pl-4 my-6 bg-blue-50/50 py-3 rounded-r-lg">
                        {article.excerpt}
                      </p>
                      <CalloutBox type="info" title="Contenu en cours de rédaction">
                        Cet article est en cours de rédaction. Inscrivez-vous à la newsletter pour être informé de sa publication.
                      </CalloutBox>
                      <p className="text-slate-600 leading-relaxed">
                        L&apos;Observatoire du Stockage publie progressivement ses analyses. Chaque article fait l&apos;objet d&apos;une rédaction soignée, d&apos;une vérification des sources et d&apos;une relecture éditoriale avant publication.
                      </p>
                    </div>
                  );
                })()}
              </div>

              {/* Sidebar */}
              <aside className="space-y-4 lg:sticky lg:top-24">
                {/* Méta article */}
                <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
                  <h3 className="font-bold text-[#1a1a2e] text-xs uppercase tracking-wider mb-3">
                    À propos de cet article
                  </h3>
                  <dl className="space-y-2.5 text-sm">
                    <div className="flex items-center justify-between">
                      <dt className="text-slate-500">Catégorie</dt>
                      <dd><CategoryBadge slug={article.category} size="sm" linked={false} /></dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-slate-500">Publication</dt>
                      <dd className="text-slate-700 tabular-nums">{formatDate(article.date)}</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-slate-500">Lecture</dt>
                      <dd className="text-slate-700">{article.readingTime} min</dd>
                    </div>
                    <div className="flex items-center justify-between">
                      <dt className="text-slate-500">Auteur</dt>
                      <dd className="text-slate-700">{article.author}</dd>
                    </div>
                  </dl>
                </div>

                {/* Avertissement */}
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                  <p className="text-xs text-amber-800 leading-relaxed">
                    <strong className="block mb-1">Avertissement éditorial</strong>
                    Les contenus de l'Observatoire du Stockage sont fournis à titre informatif et pédagogique. Ils ne constituent pas un conseil en investissement, juridique ou fiscal. Consultez un professionnel qualifié avant toute décision.
                  </p>
                </div>

                {/* Ebook */}
                <EbookLeadMagnet variant="sidebar" />

                {/* Newsletter */}
                <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-[#1e3a5f] to-blue-600" />
                  <div className="p-5">
                    <h3 className="font-bold text-[#1a1a2e] text-sm mb-1.5">
                      Newsletter de l'Observatoire
                    </h3>
                    <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                      Recevez les prochaines analyses, guides et ressources directement dans votre boîte mail.
                    </p>
                    <Link
                      href="/newsletter"
                      className="block text-center text-xs font-semibold bg-[#1e3a5f] text-white px-4 py-2.5 rounded-lg hover:bg-[#162d4a] transition-colors"
                    >
                      S'inscrire gratuitement
                    </Link>
                  </div>
                </div>

                {/* Outils recommandés selon catégorie */}
                {(() => {
                  const categoryTools: Record<string, { href: string; icon: string; label: string }[]> = {
                    investissement: [
                      { href: "/outils/calculateur-rentabilite", icon: "🧮", label: "Calculateur de rentabilité" },
                      { href: "/outils/checklist-acquisition", icon: "✅", label: "Checklist d'acquisition" },
                      { href: "/outils/guide-analyse-projet", icon: "📐", label: "Guide d'analyse d'un projet" },
                    ],
                    exploitation: [
                      { href: "/outils/suivi-locatif", icon: "📋", label: "Suivi locatif" },
                      { href: "/outils/guide-analyse-projet", icon: "📐", label: "Guide d'analyse d'un projet" },
                      { href: "/outils/calculateur-rentabilite", icon: "🧮", label: "Calculateur de rentabilité" },
                    ],
                    reglementation: [
                      { href: "/outils/modele-contrat-commente", icon: "📄", label: "Modèle de contrat commenté" },
                      { href: "/outils/checklist-acquisition", icon: "✅", label: "Checklist d'acquisition" },
                      { href: "/outils/guide-analyse-projet", icon: "📐", label: "Guide d'analyse d'un projet" },
                    ],
                    marche: [
                      { href: "/marche", icon: "📍", label: "Analyses locales par ville" },
                      { href: "/outils/calculateur-rentabilite", icon: "🧮", label: "Calculateur de rentabilité" },
                      { href: "/outils/guide-analyse-projet", icon: "📐", label: "Guide d'analyse d'un projet" },
                    ],
                  };
                  const tools = categoryTools[article.category];
                  if (!tools) return null;
                  return (
                    <div className="bg-[#1e3a5f] rounded-xl p-5 text-white">
                      <h3 className="font-bold text-sm mb-1">Outils pratiques</h3>
                      <p className="text-blue-200 text-xs leading-relaxed mb-3">Ressources gratuites liées à cet article.</p>
                      <ul className="space-y-1.5">
                        {tools.map((t) => (
                          <li key={t.href}>
                            <Link
                              href={t.href}
                              className="flex items-center gap-2 text-xs font-medium text-blue-100 hover:text-white py-1 transition-colors"
                            >
                              <span>{t.icon}</span>
                              <span>{t.label}</span>
                              <svg className="w-3 h-3 ml-auto shrink-0 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })()}

                {/* Rubriques liées */}
                <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5">
                  <h3 className="font-bold text-[#1a1a2e] text-xs uppercase tracking-wider mb-3">
                    Approfondir
                  </h3>
                  <ul className="space-y-2">
                    {[
                      { href: "/investir", label: "Guide Investir" },
                      { href: "/marche", label: "Analyses de marché" },
                      { href: "/reglementation", label: "Réglementation" },
                      { href: "/outils", label: "Outils pratiques" },
                    ].map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="flex items-center gap-2 text-sm text-slate-600 hover:text-blue-700 transition-colors"
                        >
                          <svg className="w-3 h-3 text-slate-300 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </article>

      {/* Zone réactions / commentaires placeholder */}
      <section className="bg-white border-t border-slate-100 py-10 md:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-bold text-[#1a1a2e] mb-2">Une question, une correction, un témoignage ?</h2>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            L'Observatoire du Stockage privilégie la rigueur sur la réactivité. Si vous avez identifié une erreur, souhaitez apporter un complément factuel ou partager une expérience concrète liée au sujet de cet article, contactez-nous.
          </p>
          <div className="bg-[#f8f9fa] border border-dashed border-slate-200 rounded-xl p-6 text-center">
            <p className="text-sm text-slate-500 mb-4">
              Le système de commentaires sera disponible dans une prochaine version. En attendant, utilisez le formulaire de contact.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1e3a5f] border border-[#1e3a5f] px-4 py-2 rounded-lg hover:bg-[#1e3a5f] hover:text-white transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Articles liés */}
      <section className="bg-[#f8f9fa] border-t border-slate-100 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-[#1a1a2e]">Analyses liées</h2>
            <Link href="/analyses" className="text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors flex items-center gap-1">
              Toutes les analyses
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedArticles.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      <NewsletterBlock />
    </>
  );
}
