export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readingTime: number;
  featured?: boolean;
  content?: string;
  tags?: string[];
  image?: string;
}

export const articles: Article[] = [
  {
    slug: "diagnostic-performance-energetique-garage",
    title: "DPE et diagnostics immobiliers pour un garage : ce qui s'applique",
    excerpt:
      "Les obligations de diagnostic immobilier s'appliquent différemment selon la nature du bien. Pour un garage ou un box de stockage, certaines règles diffèrent de celles applicables aux logements. Tour d'horizon de ce qui est obligatoire, de ce qui est recommandé et de ce que l'acheteur ou le bailleur doit savoir.",
    category: "reglementation",
    date: "2026-10-28",
    author: "Observatoire du Stockage",
    readingTime: 7,
    featured: false,
    tags: ["DPE", "diagnostics", "réglementation", "vente", "location"],
    image: "https://picsum.photos/seed/diagnostic-performance-energetique-garage/1200/800",
  },
  {
    slug: "garage-bail-commercial-ou-civil",
    title: "Garage loué à un professionnel : bail commercial ou contrat civil ?",
    excerpt:
      "Lorsqu'un garage ou un espace de stockage est loué à un professionnel ou à une entreprise, la question du régime contractuel applicable est déterminante. Bail commercial, contrat de droit commun ou convention de mise à disposition : les régimes ne sont pas équivalents et peuvent engager le bailleur de façon très différente.",
    category: "reglementation",
    date: "2026-10-26",
    author: "Observatoire du Stockage",
    readingTime: 9,
    featured: false,
    tags: ["bail commercial", "contrat", "professionnel", "réglementation"],
    image: "https://picsum.photos/seed/garage-bail-commercial-ou-civil/1200/800",
  },
  {
    slug: "augmenter-loyer-garage",
    title: "Augmenter le loyer d'un garage : règles, timing et méthode",
    excerpt:
      "La révision du loyer d'un espace de stockage est une démarche qui doit respecter certaines conditions — contractuelles et de marché. Entre l'indexation contractuelle, la renegociation à l'amiable et le repositionnement lors d'un changement de locataire, les leviers diffèrent selon les situations.",
    category: "exploitation",
    date: "2026-10-24",
    author: "Observatoire du Stockage",
    readingTime: 7,
    featured: false,
    tags: ["loyer", "révision", "indexation", "exploitation"],
    image: "https://picsum.photos/seed/augmenter-loyer-garage/1200/800",
  },
  {
    slug: "negocier-prix-achat-lot-garages",
    title: "Négocier le prix d'un lot de garages : méthode et leviers",
    excerpt:
      "La négociation du prix d'un lot de garages repose sur une préparation rigoureuse et la capacité à objectiver les points faibles du bien ou de la situation locative. Comprendre les motivations du vendeur et identifier les marges de manœuvre réelles permet de construire une offre argumentée.",
    category: "investissement",
    date: "2026-10-22",
    author: "Observatoire du Stockage",
    readingTime: 8,
    featured: false,
    tags: ["négociation", "prix", "acquisition", "investissement"],
    image: "https://picsum.photos/seed/negocier-prix-achat-lot-garages/1200/800",
  },
  {
    slug: "tva-location-garage",
    title: "TVA et location de garage : quand s'applique-t-elle ?",
    excerpt:
      "La location d'un espace de stockage est, par principe, exonérée de TVA. Mais cette règle connaît des exceptions importantes selon la nature de la location, le profil du locataire et les options fiscales exercées par le bailleur. Un point de vigilance pour tout propriétaire qui souhaite optimiser sa situation fiscale.",
    category: "reglementation",
    date: "2026-10-19",
    author: "Observatoire du Stockage",
    readingTime: 8,
    featured: false,
    tags: ["TVA", "fiscalité", "réglementation", "option TVA"],
    image: "https://picsum.photos/seed/tva-location-garage/1200/800",
  },
  {
    slug: "investir-garage-zone-rurale",
    title: "Investir dans des garages en zone rurale ou périurbaine : spécificités et précautions",
    excerpt:
      "Les garages et espaces de stockage en zone rurale ou périurbaine présentent des profils de risque et d'opportunité très différents de ceux des marchés urbains denses. Les prix d'acquisition y sont souvent plus accessibles, mais la demande locative peut être plus fragile et la liquidité à la revente plus incertaine.",
    category: "investissement",
    date: "2026-10-17",
    author: "Observatoire du Stockage",
    readingTime: 8,
    featured: false,
    tags: ["zone rurale", "périurbain", "demande locative", "risque"],
    image: "https://picsum.photos/seed/investir-garage-zone-rurale/1200/800",
  },
  {
    slug: "travaux-garage-loue-responsabilite",
    title: "Travaux dans un garage loué : qui paie, qui décide ?",
    excerpt:
      "La question des travaux dans un espace de stockage loué soulève des interrogations pratiques et juridiques que ne tranche pas un texte spécifique. En l'absence de statut locatif dédié aux garages, c'est le contrat et le droit commun qui fixent les règles — avec une marge de négociation importante.",
    category: "reglementation",
    date: "2026-10-14",
    author: "Observatoire du Stockage",
    readingTime: 7,
    featured: false,
    tags: ["travaux", "réparations", "responsabilité", "bailleur", "locataire"],
    image: "https://picsum.photos/seed/travaux-garage-loue-responsabilite/1200/800",
  },
  {
    slug: "prix-garages-donnees-dvf",
    title: "Prix des garages en France : ce que révèlent les données DVF",
    excerpt:
      "Les Demandes de valeurs foncières (DVF) publiées par la Direction générale des finances publiques offrent un accès partiel aux transactions immobilières enregistrées en France. Pour les garages et espaces de stockage, ces données permettent d'observer des tendances de prix par zone géographique — avec des limites méthodologiques à bien comprendre.",
    category: "marche",
    date: "2026-10-12",
    author: "Observatoire du Stockage",
    readingTime: 8,
    featured: false,
    tags: ["DVF", "prix", "transactions", "données", "marché"],
    image: "https://picsum.photos/seed/prix-garages-donnees-dvf/1200/800",
  },
  {
    slug: "structurer-gestion-plusieurs-unites-stockage",
    title: "Structurer la gestion de plusieurs unités de stockage : outils et organisation",
    excerpt:
      "À partir d'un certain nombre d'unités, la gestion informelle d'un parc de garages ou de boxes montre ses limites. Baux, loyers, états des lieux, suivi des charges, déclarations fiscales : structurer son organisation permet de gagner en efficacité et de réduire les risques d'erreur ou d'oubli.",
    category: "exploitation",
    date: "2026-10-29",
    author: "Observatoire du Stockage",
    readingTime: 8,
    featured: false,
    tags: ["gestion", "organisation", "outils", "exploitation"],
    image: "https://picsum.photos/seed/structurer-gestion-plusieurs-unites-stockage/1200/800",
  },
  {
    slug: "acteurs-self-storage-france",
    title: "Les acteurs du self-storage professionnel en France : tour d'horizon",
    excerpt:
      "Le secteur du self-storage professionnel en France regroupe des opérateurs de tailles très diverses — des grands groupes internationaux aux enseignes régionales indépendantes. Comprendre ce paysage concurrentiel est utile pour tout investisseur ou exploitant qui cherche à positionner son offre sur un marché local.",
    category: "marche",
    date: "2026-10-29",
    author: "Observatoire du Stockage",
    readingTime: 8,
    featured: false,
    tags: ["self-storage", "marché", "acteurs", "concurrence"],
    image: "https://picsum.photos/seed/acteurs-self-storage-france/1200/800",
  },
  {
    slug: "lot-garages-occupe-ou-vacant",
    title: "Lot de garages occupé ou vacant à l'achat : avantages et inconvénients",
    excerpt:
      "Acquérir un lot de garages déjà occupé ou le trouver entièrement vacant sont deux situations très différentes. Chacune présente ses avantages et ses risques propres — en termes de rendement immédiat, de négociation du prix, de gestion locative et de liberté d'action à l'entrée.",
    category: "investissement",
    date: "2026-10-29",
    author: "Observatoire du Stockage",
    readingTime: 8,
    featured: false,
    tags: ["acquisition", "occupation", "locataires", "stratégie"],
    image: "https://picsum.photos/seed/lot-garages-occupe-ou-vacant/1200/800",
  },
  {
    slug: "financer-achat-lot-garages",
    title: "Financer l'achat d'un lot de garages : crédit, apport et structure — ce qu'il faut savoir",
    excerpt:
      "Le financement d'un lot de garages soulève des questions spécifiques que n'abordent pas les guides d'investissement résidentiel classiques. Entre la politique des banques vis-à-vis de ce type d'actif, le niveau d'apport attendu et le choix de la structure d'acquisition, plusieurs paramètres méritent une attention particulière avant de s'engager.",
    category: "investissement",
    date: "2026-10-29",
    author: "Observatoire du Stockage",
    readingTime: 9,
    featured: false,
    tags: ["financement", "crédit immobilier", "apport", "investissement"],
    image: "https://picsum.photos/seed/financer-achat-lot-garages/1200/800",
  },
  {
    slug: "nom-propre-societe-espaces-stockage",
    title: "Acheter en nom propre ou en société pour des espaces de stockage : les questions à poser",
    excerpt:
      "La structure de détention d'un bien immobilier a des conséquences fiscales, patrimoniales et pratiques significatives. Entre l'acquisition en nom propre, la SCI à l'IR et la société à l'IS, les différences sont substantielles — et dépendent étroitement de la situation personnelle de l'investisseur.",
    category: "investissement",
    date: "2026-10-25",
    author: "Observatoire du Stockage",
    readingTime: 10,
    image: "https://picsum.photos/seed/nom-propre-societe-espaces-stockage/1200/800",
  },
  {
    slug: "gerer-impayes-espace-stockage",
    title: "Gérer les impayés sur un espace de stockage : procédures et bonnes pratiques",
    excerpt:
      "Un impayé de loyer est une situation que tout bailleur peut rencontrer. Sur les espaces de stockage, les procédures applicables dépendent du type de contrat. Connaître les étapes légales et les bonnes pratiques préventives permet de limiter les pertes et de réagir avec méthode.",
    category: "exploitation",
    date: "2026-10-23",
    author: "Observatoire du Stockage",
    readingTime: 9,
    image: "https://picsum.photos/seed/gerer-impayes-espace-stockage/1200/800",
  },
  {
    slug: "charges-copropriete-garages-impact",
    title: "Charges de copropriété sur les garages : comprendre les postes et leur impact sur la rentabilité",
    excerpt:
      "Les charges de copropriété sont un poste souvent sous-estimé dans l'analyse de rentabilité d'un lot de garages. Leur nature, leur niveau et leur évolution dans le temps peuvent modifier significativement le rendement net d'une opération.",
    category: "rentabilite",
    date: "2026-10-21",
    author: "Observatoire du Stockage",
    readingTime: 8,
    image: "https://picsum.photos/seed/charges-copropriete-garages-impact/1200/800",
  },
  {
    slug: "reglement-copropriete-espace-stockage",
    title: "Que vérifier dans un règlement de copropriété avant d'acheter un espace de stockage ?",
    excerpt:
      "Le règlement de copropriété est un document contractuel qui s'impose à tous les copropriétaires. Avant d'acquérir un espace de stockage dans une copropriété, son analyse minutieuse permet d'identifier des contraintes invisibles au premier regard — et parfois déterminantes pour l'exploitation.",
    category: "investissement",
    date: "2026-10-18",
    author: "Observatoire du Stockage",
    readingTime: 9,
    image: "https://picsum.photos/seed/reglement-copropriete-espace-stockage/1200/800",
  },
  {
    slug: "evaluer-demande-locative-espace-stockage",
    title: "Comment évaluer la demande locative avant d'acheter un espace de stockage ?",
    excerpt:
      "Évaluer la demande locative locale est une étape structurante de toute analyse d'acquisition. Avant de s'engager, plusieurs indicateurs concrets permettent d'objectiver le potentiel d'un marché local — sans pour autant prédire la rentabilité d'un projet particulier.",
    category: "investissement",
    date: "2026-10-16",
    author: "La rédaction",
    readingTime: 9,
    image: "https://picsum.photos/seed/evaluer-demande-locative-espace-stockage/1200/800",
  },
  {
    slug: "mise-en-location-espace-stockage-ligne",
    title: "Mettre en location un espace de stockage en ligne : plateformes, annonces et bonnes pratiques",
    excerpt:
      "La mise en location d'un espace de stockage passe aujourd'hui majoritairement par des canaux numériques. Comprendre les plateformes disponibles, rédiger une annonce efficace et gérer les candidatures permet de réduire les périodes de vacance locative.",
    category: "exploitation",
    date: "2026-10-13",
    author: "La rédaction",
    readingTime: 8,
    image: "https://picsum.photos/seed/mise-en-location-espace-stockage-ligne/1200/800",
  },
  {
    slug: "assurance-pno-espace-stockage",
    title: "Assurance propriétaire non occupant pour un espace de stockage : ce qu'il faut vérifier",
    excerpt:
      "L'assurance propriétaire non occupant (PNO) est souvent négligée lors de l'acquisition d'espaces de stockage. Elle couvre pourtant des risques spécifiques qui ne sont pas pris en charge par l'assurance de copropriété ni par l'assurance du locataire.",
    category: "reglementation",
    date: "2026-10-11",
    author: "La rédaction",
    readingTime: 8,
    image: "https://picsum.photos/seed/assurance-pno-espace-stockage/1200/800",
  },
  {
    slug: "vacance-locative-espaces-stockage",
    title: "Vacance locative sur les espaces de stockage : causes, prévention et impact sur le rendement",
    excerpt:
      "La vacance locative est l'un des principaux risques d'un investissement dans les espaces de stockage. Comprendre ses causes, anticiper ses effets et mettre en place des pratiques préventives est indispensable pour maintenir un niveau de revenus stable.",
    category: "rentabilite",
    date: "2026-10-27",
    author: "La rédaction",
    readingTime: 9,
    image: "https://picsum.photos/seed/vacance-locative-espaces-stockage/1200/800",
  },
  {
    slug: "due-diligence-lot-garages",
    title: "Les étapes d'une due diligence sérieuse sur un lot de garages",
    excerpt:
      "Avant de signer un compromis, une vérification méthodique s'impose : état du bâti, situation locative, documents de copropriété, clauses du règlement. Tour d'horizon des points à examiner pour ne pas acheter à l'aveugle.",
    category: "investissement",
    date: "2026-10-20",
    author: "La rédaction",
    readingTime: 10,
    image: "https://picsum.photos/seed/due-diligence-lot-garages/1200/800",
  },
  {
    slug: "rentabilite-brute-nette-difference",
    title: "Rentabilité brute, rentabilité nette : pourquoi la différence est déterminante",
    excerpt:
      "Le taux de rentabilité brute est souvent le seul chiffre mis en avant lors d'une présentation d'investissement. Il est insuffisant pour prendre une décision éclairée. Comprendre ce qu'il masque est une étape incontournable.",
    category: "rentabilite",
    date: "2026-10-15",
    author: "La rédaction",
    readingTime: 9,
    image: "https://picsum.photos/seed/rentabilite-brute-nette-difference/1200/800",
  },
  {
    slug: "bail-location-espace-stockage",
    title: "Le bail applicable à la location d'un espace de stockage : ce que dit le droit",
    excerpt:
      "La location d'un box, d'un garage ou d'une cave ne relève d'aucun statut locatif spécifique. C'est le droit commun du contrat qui s'applique, avec des implications pratiques importantes pour le bailleur comme pour le locataire.",
    category: "reglementation",
    date: "2026-10-10",
    author: "La rédaction",
    readingTime: 9,
    image: "https://picsum.photos/seed/bail-location-espace-stockage/1200/800",
  },
  {
    slug: "fixer-loyer-espace-stockage",
    title: "Fixer le bon loyer pour un espace de stockage : méthode et pièges à éviter",
    excerpt:
      "Un loyer trop élevé génère de la vacance. Un loyer trop bas pénalise la rentabilité et crée un précédent difficile à corriger. La méthode pour se positionner justement repose sur l'observation du marché local, pas sur des moyennes nationales.",
    category: "exploitation",
    date: "2026-10-05",
    author: "La rédaction",
    readingTime: 8,
    image: "https://picsum.photos/seed/fixer-loyer-espace-stockage/1200/800",
  },
  {
    slug: "investir-box-stockage-fondamentaux",
    title: "Investir dans un box de stockage : les fondamentaux à comprendre avant de se lancer",
    excerpt:
      "Avant d'acheter un box ou un lot de garages, il est essentiel de comprendre ce qui distingue cet actif des autres placements immobiliers. Analyse des critères clés, des risques à anticiper et des points de vigilance.",
    category: "investissement",
    date: "2025-05-10",
    author: "La rédaction",
    readingTime: 9,
    featured: true,
    image: "https://picsum.photos/seed/investir-box-stockage-fondamentaux/1200/800",
  },
  {
    slug: "garage-box-entrepot-differences-investisseur",
    title: "Garage, box ou entrepôt : quelles différences pour un investisseur ?",
    excerpt:
      "Ces trois types d'actifs partagent la même vocation de stockage mais présentent des profils très différents en matière de ticket d'entrée, de demande locative et de contraintes réglementaires.",
    category: "investissement",
    date: "2025-05-06",
    author: "La rédaction",
    readingTime: 7,
    image: "https://picsum.photos/seed/garage-box-entrepot-differences-investisseur/1200/800",
  },
  {
    slug: "analyser-rentabilite-espace-stockage",
    title: "Comment analyser la rentabilité d'un espace de stockage ?",
    excerpt:
      "La rentabilité d'un espace de stockage ne se résume pas à un taux brut. Comprendre les charges, la vacance locative, la fiscalité et le potentiel de revalorisation est indispensable avant de conclure.",
    category: "rentabilite",
    date: "2025-04-28",
    author: "La rédaction",
    readingTime: 8,
    image: "https://picsum.photos/seed/analyser-rentabilite-espace-stockage/1200/800",
  },
  {
    slug: "risques-achat-lot-garages",
    title: "Les principaux risques à anticiper avant d'acheter un lot de garages",
    excerpt:
      "Un lot de garages peut sembler un investissement simple. La réalité de terrain révèle souvent des complexités à ne pas négliger : état du bâti, droit local, occupation, environnement concurrentiel.",
    category: "investissement",
    date: "2025-04-20",
    author: "La rédaction",
    readingTime: 6,
    image: "https://picsum.photos/seed/risques-achat-lot-garages/1200/800",
  },
  {
    slug: "reglementation-espaces-stockage-points-vigilance",
    title: "Réglementation des espaces de stockage : les points de vigilance",
    excerpt:
      "Entre bail verbal, contrat de location saisonnière et bail commercial, les règles applicables aux espaces de stockage varient selon le contexte. Tour d'horizon des principales obligations.",
    category: "reglementation",
    date: "2025-04-14",
    author: "La rédaction",
    readingTime: 7,
    image: "https://picsum.photos/seed/reglementation-espaces-stockage-points-vigilance/1200/800",
  },
  {
    slug: "optimiser-taux-occupation-garages",
    title: "Comment optimiser le taux d'occupation de ses garages et boxs ?",
    excerpt:
      "Un espace vide est un revenu perdu. Les leviers pour réduire la vacance locative sont multiples : visibilité en ligne, tarification adaptée, gestion proactive des départs et fidélisation.",
    category: "exploitation",
    date: "2025-04-07",
    author: "La rédaction",
    readingTime: 6,
    image: "https://picsum.photos/seed/optimiser-taux-occupation-garages/1200/800",
  },
  {
    slug: "marche-self-storage-france-panorama",
    title: "Le self-storage en France : panorama d'un secteur en structuration",
    excerpt:
      "La location d'espaces de stockage individuels connaît un développement notable en France, tiré par des évolutions sociétales et des pratiques de consommation. État des lieux d'un marché en mouvement.",
    category: "marche",
    date: "2025-03-29",
    author: "La rédaction",
    readingTime: 8,
    image: "https://picsum.photos/seed/marche-self-storage-france-panorama/1200/800",
  },
  {
    slug: "fiscalite-revenus-garages-location",
    title: "Fiscalité des revenus tirés de la location de garages",
    excerpt:
      "Les loyers perçus pour des garages et boxs sont soumis à l'impôt sur le revenu dans la catégorie des revenus fonciers ou des BIC selon le montage. Comprendre les régimes applicables est un préalable essentiel.",
    category: "reglementation",
    date: "2025-03-21",
    author: "La rédaction",
    readingTime: 7,
    image: "https://picsum.photos/seed/fiscalite-revenus-garages-location/1200/800",
  },
  {
    slug: "cartographie-marche-stockage-france-2026",
    title: "Cartographie du marché du stockage en France : état des lieux 2026",
    excerpt:
      "Entre la montée en puissance des grandes enseignes de self-storage, la résistance des propriétaires particuliers de garages et boxes, et l'émergence de nouvelles zones de tension locative, le marché du stockage en France s'est profondément reconfiguré ces dernières années. Tour d'horizon des dynamiques en présence.",
    category: "marche",
    date: "2026-10-29",
    author: "Observatoire du Stockage",
    readingTime: 10,
    featured: true,
    tags: ["marché", "self-storage", "France", "panorama", "2026"],
    image: "https://picsum.photos/seed/cartographie-marche-stockage-france-2026/1200/800",
  },
  {
    slug: "box-stockage-investissement-antiinflation",
    title: "Les espaces de stockage comme investissement anti-inflation : réalité ou mythe ?",
    excerpt:
      "Dans un contexte de pression inflationniste persistante, les garages et boxes de stockage sont parfois présentés comme des actifs refuges, capables de préserver le pouvoir d'achat de l'investisseur. Qu'en est-il réellement ? Analyse des mécanismes de protection et des limites de cette thèse.",
    category: "investissement",
    date: "2026-10-29",
    author: "Observatoire du Stockage",
    readingTime: 9,
    featured: false,
    tags: ["inflation", "investissement", "rendement", "patrimoine"],
    image: "https://picsum.photos/seed/box-stockage-investissement-antiinflation/1200/800",
  },
  {
    slug: "digitalisation-gestion-locative-garages",
    title: "Digitaliser la gestion de ses garages et boxes : outils, méthodes et limites",
    excerpt:
      "La gestion d'un parc de garages et espaces de stockage peut rapidement devenir chronophage sans organisation adaptée. Les outils numériques — de la simple feuille de calcul aux logiciels spécialisés — permettent de structurer le suivi des loyers, des contrats et des communications locataires. Panorama des solutions disponibles.",
    category: "exploitation",
    date: "2026-10-29",
    author: "Observatoire du Stockage",
    readingTime: 8,
    featured: false,
    tags: ["gestion", "digitalisation", "outils", "logiciel", "exploitation"],
    image: "https://picsum.photos/seed/digitalisation-gestion-locative-garages/1200/800",
  },
  {
    slug: "jurisprudence-litiges-garages-2024-2026",
    title: "Litiges liés aux garages et boxes : ce que dit la jurisprudence récente",
    excerpt:
      "Les contentieux entre propriétaires et locataires d'espaces de stockage couvrent des problématiques variées : accès au bien, responsabilité en cas de sinistre, restitution du dépôt de garantie, résiliation anticipée. Un point sur les décisions récentes qui dessinent les contours de la responsabilité de chaque partie.",
    category: "reglementation",
    date: "2026-10-29",
    author: "Observatoire du Stockage",
    readingTime: 9,
    featured: false,
    tags: ["jurisprudence", "litige", "contentieux", "réglementation", "sinistre"],
    image: "https://picsum.photos/seed/jurisprudence-litiges-garages-2024-2026/1200/800",
  },
  {
    slug: "rentabilite-comparee-studios-garages",
    title: "Rentabilité comparée : studio meublé vs lot de garages — ce que les chiffres montrent",
    excerpt:
      "L'arbitrage entre l'immobilier résidentiel classique et les espaces de stockage est souvent résumé à une question de rendement brut. Mais la comparaison mérite d'être plus fine : fiscalité, gestion, liquidité, risque locatif. Un éclairage factuel pour aider à positionner les garages dans une stratégie patrimoniale cohérente.",
    category: "investissement",
    date: "2026-10-29",
    author: "Observatoire du Stockage",
    readingTime: 11,
    featured: false,
    tags: ["rentabilité", "comparaison", "studio", "patrimoine", "investissement"],
    image: "https://picsum.photos/seed/rentabilite-comparee-studios-garages/1200/800",
  },
  {
    slug: "charges-recuperables-garage-locataire",
    title: "Quelles charges peut-on répercuter sur le locataire d'un garage ?",
    excerpt:
      "La liste des charges récupérables auprès d'un locataire de garage ou de box de stockage est plus restreinte que pour un logement. Entre charges de copropriété, taxe d'enlèvement des ordures ménagères et entretien des parties communes, le point sur ce qui est légalement imputable au locataire.",
    category: "reglementation",
    date: "2026-10-29",
    author: "Observatoire du Stockage",
    readingTime: 7,
    featured: false,
    tags: ["charges", "locataire", "récupérables", "réglementation", "copropriété"],
    image: "https://picsum.photos/seed/charges-recuperables-garage-locataire/1200/800",
  },
  {
    slug: "tension-locative-villes-moyennes-stockage",
    title: "Stockage dans les villes moyennes : les marchés sous tension que l'on ne voit pas",
    excerpt:
      "Derrière les métropoles bien identifiées, certaines villes moyennes françaises présentent des déséquilibres offre-demande particulièrement favorables aux propriétaires de garages et boxes. Faible concurrence des enseignes nationales, demande artisanale et commerçante soutenue, prix d'acquisition encore raisonnables : ces marchés méritent une attention particulière.",
    category: "marche",
    date: "2026-10-29",
    author: "Observatoire du Stockage",
    readingTime: 8,
    featured: false,
    tags: ["villes moyennes", "marché", "tension locative", "opportunités"],
    image: "https://picsum.photos/seed/tension-locative-villes-moyennes-stockage/1200/800",
  },
  {
    slug: "securite-espace-stockage-obligations-proprietaire",
    title: "Sécurité d'un espace de stockage : obligations du propriétaire bailleur",
    excerpt:
      "Le propriétaire d'un garage ou d'un box de stockage est soumis à une obligation de délivrance d'un bien en bon état et sécurisé. Éclairage, serrurerie, état structurel, conformité électrique : le point sur ce que la loi impose et ce que la prudence recommande pour limiter sa responsabilité en cas de sinistre.",
    category: "reglementation",
    date: "2026-10-29",
    author: "Observatoire du Stockage",
    readingTime: 7,
    featured: false,
    tags: ["sécurité", "obligations", "propriétaire", "sinistre", "réglementation"],
    image: "https://picsum.photos/seed/securite-espace-stockage-obligations-proprietaire/1200/800",
  },
  {
    slug: "self-storage-vs-garages-individuels",
    title: "Self-storage professionnel ou garages individuels : quel modèle pour quel profil d'investisseur ?",
    excerpt:
      "Self-storage en enseigne et garages individuels partagent la même vocation de stockage mais constituent des modèles d'investissement très différents. Ticket d'entrée, gestion, rendement, risques et liquidité : une analyse comparative pour aider à positionner son choix.",
    category: "investissement",
    date: "2026-10-29",
    author: "Observatoire du Stockage",
    readingTime: 9,
    featured: false,
    tags: ["self-storage", "garages", "comparaison", "investissement", "modèle"],
    image: "https://picsum.photos/seed/self-storage-vs-garages-individuels/1200/800",
  },
  {
    slug: "gestion-locative-boxes-baux-depots",
    title: "Gérer un box en location : baux, dépôts de garantie et gestion des départs",
    excerpt:
      "La gestion locative d'un box ou d'un garage implique un ensemble de décisions pratiques qui n'ont pas toujours de réponse évidente dans les textes. Rédaction du bail, montant du dépôt de garantie, état des lieux, gestion des départs : les points clés pour une exploitation sans accroc.",
    category: "exploitation",
    date: "2026-10-29",
    author: "Observatoire du Stockage",
    readingTime: 8,
    featured: false,
    tags: ["gestion locative", "bail", "dépôt de garantie", "exploitation", "départ"],
    image: "https://picsum.photos/seed/gestion-locative-boxes-baux-depots/1200/800",
  },
  {
    slug: "evaluer-concurrence-locale-stockage",
    title: "Évaluer la concurrence locale avant d'investir dans des espaces de stockage",
    excerpt:
      "La concurrence locale est un facteur déterminant dans la viabilité locative d'un espace de stockage. Enseignes de self-storage, particuliers louant des garages, parkings couverts : identifier l'offre existante et ses caractéristiques est une étape fondamentale de l'analyse d'un projet.",
    category: "investissement",
    date: "2026-10-29",
    author: "Observatoire du Stockage",
    readingTime: 8,
    featured: false,
    tags: ["concurrence", "marché local", "analyse", "investissement", "self-storage"],
    image: "https://picsum.photos/seed/evaluer-concurrence-locale-stockage/1200/800",
  },
  {
    slug: "charges-deductibles-revenus-fonciers-garages",
    title: "Charges déductibles des revenus fonciers pour un propriétaire de garages",
    excerpt:
      "Au régime réel d'imposition, un propriétaire de garages ou de boxes peut déduire de ses revenus fonciers une série de charges. Travaux, intérêts d'emprunt, assurances, charges de copropriété, frais de gestion : le point sur ce qui est déductible et dans quelles conditions.",
    category: "reglementation",
    date: "2026-10-29",
    author: "Observatoire du Stockage",
    readingTime: 9,
    featured: false,
    tags: ["charges déductibles", "revenus fonciers", "fiscalité", "régime réel", "imposition"],
    image: "https://picsum.photos/seed/charges-deductibles-revenus-fonciers-garages/1200/800",
  },
  {
    slug: "investir-sci-garages",
    title: "Investir en SCI dans des garages : avantages, fonctionnement et pièges à éviter",
    excerpt:
      "La SCI est souvent présentée comme la structure idéale pour détenir de l'immobilier à plusieurs ou pour préparer une transmission. Mais son adéquation avec l'investissement dans des garages et boxes dépend de nombreux paramètres. Ce qu'il faut comprendre avant de créer une SCI pour ce type d'actif.",
    category: "investissement",
    date: "2026-10-29",
    author: "Observatoire du Stockage",
    readingTime: 10,
    featured: false,
    tags: ["SCI", "société", "structure", "investissement", "fiscalité"],
    image: "https://picsum.photos/seed/investir-sci-garages/1200/800",
  },
  {
    slug: "transformer-garages-boxes-travaux",
    title: "Transformer des garages en boxes de stockage : travaux, coûts et impact sur la rentabilité",
    excerpt:
      "La conversion de garages traditionnels en boxes de stockage locatifs est une piste envisagée par certains propriétaires souhaitant optimiser leurs revenus. Entre les travaux nécessaires, les contraintes réglementaires et l'impact sur la rentabilité, une analyse rigoureuse s'impose avant tout engagement.",
    category: "exploitation",
    date: "2026-10-29",
    author: "Observatoire du Stockage",
    readingTime: 9,
    featured: false,
    tags: ["travaux", "transformation", "boxes", "rentabilité", "aménagement"],
    image: "https://picsum.photos/seed/transformer-garages-boxes-travaux/1200/800",
  },
  {
    slug: "revente-lot-garages-valorisation",
    title: "Revendre un lot de garages : préparer la cession et maximiser la valorisation",
    excerpt:
      "La revente d'un lot de garages ou de boxes de stockage requiert une préparation spécifique pour atteindre le meilleur prix dans les meilleures conditions. Timing, présentation du dossier, positionnement de prix et choix des acquéreurs cibles : les points structurants d'une cession réussie.",
    category: "investissement",
    date: "2026-10-29",
    author: "Observatoire du Stockage",
    readingTime: 8,
    featured: false,
    tags: ["revente", "cession", "valorisation", "stratégie", "plus-value"],
    image: "https://picsum.photos/seed/revente-lot-garages-valorisation/1200/800",
  },
  {
    slug: "etat-des-lieux-garage",
    title: "L'état des lieux d'un garage ou d'un box : méthode, contenu et enjeux pratiques",
    excerpt:
      "L'état des lieux est un document clé dans la relation bailleur-locataire, même pour un espace de stockage. Sa réalisation rigoureuse à l'entrée et à la sortie permet de prévenir les litiges sur l'état du bien et la restitution du dépôt de garantie.",
    category: "exploitation",
    date: "2026-10-29",
    author: "Observatoire du Stockage",
    readingTime: 7,
    featured: false,
    tags: ["état des lieux", "entrée", "sortie", "dépôt de garantie", "litige"],
    image: "https://picsum.photos/seed/etat-des-lieux-garage/1200/800",
  },
  {
    slug: "parking-exterieur-vs-garage-ferme",
    title: "Parking extérieur ou garage fermé : quelles différences pour un investisseur ?",
    excerpt:
      "Parking en plein air, box couvert, garage fermé avec porte : ces trois types d'actifs sont souvent confondus mais présentent des profils très différents en termes de loyer, de demande, de charges et de risques. Une distinction utile pour affiner son analyse avant acquisition.",
    category: "investissement",
    date: "2026-10-29",
    author: "Observatoire du Stockage",
    readingTime: 7,
    featured: false,
    tags: ["parking", "garage", "comparaison", "loyer", "investissement"],
    image: "https://picsum.photos/seed/parking-exterieur-vs-garage-ferme/1200/800",
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}

export function getLatestArticles(count = 6): Article[] {
  return [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getRelatedArticles(slug: string, count = 3): Article[] {
  const current = getArticleBySlug(slug);
  if (!current) return getLatestArticles(count);

  // Same category first, excluding current article
  const sameCategory = articles.filter(
    (a) => a.slug !== slug && a.category === current.category
  );
  const others = articles.filter(
    (a) => a.slug !== slug && a.category !== current.category
  );

  return [...sameCategory, ...others].slice(0, count);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
