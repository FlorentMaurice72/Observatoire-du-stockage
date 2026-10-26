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
