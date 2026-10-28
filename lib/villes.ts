export interface Ville {
  slug: string;
  nom: string;
  departement: string;
  region: string;
  population: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  contexteUrbanistique: string;
  demande: {
    niveau: "forte" | "moderee" | "faible";
    description: string;
  };
  offre: {
    description: string;
    concurrenceSelfStorage: "importante" | "moderee" | "limitee";
  };
  prixObserves: {
    fourchette: string;
    note: string;
  };
  pointsVigilance: string[];
  zoneLimitrophe: string[];
}

export const villes: Ville[] = [
  {
    slug: "lyon",
    nom: "Lyon",
    departement: "Rhône (69)",
    region: "Auvergne-Rhône-Alpes",
    population: "~530 000 hab. (ville), ~2,4 M (métropole)",
    metaTitle: "Marché des espaces de stockage à Lyon — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages, boxes et espaces de stockage à Lyon et dans la métropole lyonnaise : demande, offre, prix observés, points de vigilance.",
    intro:
      "Lyon est l'une des métropoles françaises où le marché des espaces de stockage présente une dynamique marquée. La densité urbaine, la forte mobilité résidentielle et la présence d'une population étudiante et active importante créent une demande structurelle pour les garages et boxes à la location.",
    contexteUrbanistique:
      "Lyon concentre une part importante de son parc locatif en appartements sans stationnement privatif, notamment dans les 1er, 4e et 7e arrondissements et dans des communes proches comme Villeurbanne. La pression immobilière sur les logements se répercute sur les annexes, dont la valeur relative a progressé ces dernières années.",
    demande: {
      niveau: "forte",
      description:
        "La demande locative pour les garages et boxes est soutenue dans les arrondissements centraux et dans les communes limitrophes denses (Villeurbanne, Caluire-et-Cuire, Bron). Les délais de mise en location observés sur les annonces sont généralement courts en secteur central. La demande de la part de TPE et indépendants pour du stockage de petite surface est également présente.",
    },
    offre: {
      description:
        "L'offre est composée majoritairement de garages et boxes en copropriété, souvent vendus à l'unité ou en petits lots. Les grands acteurs du self-storage (Shurgard, Homebox, Safestore) sont présents dans l'agglomération lyonnaise, en périphérie.",
      concurrenceSelfStorage: "importante",
    },
    prixObserves: {
      fourchette: "Entre 60 € et 180 € / mois selon la surface, la localisation et l'accessibilité",
      note:
        "Les fourchettes observées sur les annonces grand public varient fortement selon l'arrondissement et le type de bien (simple garage, box fermé, local avec accès facile). Ces données sont indicatives et ne constituent pas une référence de marché certifiée.",
    },
    pointsVigilance: [
      "Vérifier la conformité des règlements de copropriété (usage commercial parfois restreint)",
      "Anticiper la concurrence des acteurs self-storage implantés en périphérie",
      "S'assurer de l'accessibilité réelle (hauteur sous plafond, voie d'accès, ascenseur)",
      "Analyser le taux de vacance du secteur avant acquisition",
    ],
    zoneLimitrophe: ["Villeurbanne", "Caluire-et-Cuire", "Bron", "Vénissieux", "Saint-Fons"],
  },
  {
    slug: "bordeaux",
    nom: "Bordeaux",
    departement: "Gironde (33)",
    region: "Nouvelle-Aquitaine",
    population: "~260 000 hab. (ville), ~900 000 (métropole)",
    metaTitle: "Marché des espaces de stockage à Bordeaux — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Bordeaux et dans la métropole girondine : demande, offre, prix observés, points de vigilance.",
    intro:
      "Bordeaux a connu une décennie de forte croissance démographique et immobilière, avec une pression notable sur les prix et une densification du parc locatif. Ce contexte a alimenté une demande croissante pour les espaces de stockage extérieurs au logement, notamment dans la ville et les communes de la première couronne.",
    contexteUrbanistique:
      "La transformation urbaine de Bordeaux (arrivée du TGV, renouvellement de quartiers comme Bordeaux-Lac, Bacalan ou les Bassins à Flot) a modifié la structure du parc immobilier. Le stationnement est contraint dans le centre historique, et de nombreux logements récents ou réhabilités ne disposent pas d'annexes de stockage.",
    demande: {
      niveau: "forte",
      description:
        "La demande est soutenue dans les quartiers centraux et dans les communes limitrophes (Mérignac, Pessac, Mérignac, Talence). La population jeune, mobile et locataire constitue un vivier de demande structurelle. Les activités économiques liées au tourisme et à l'artisanat génèrent également des besoins de stockage.",
    },
    offre: {
      description:
        "L'offre en garages et boxes individuels est présente mais fragmentée. Des opérateurs self-storage sont implantés dans la zone métropolitaine, notamment sur les axes routiers principaux.",
      concurrenceSelfStorage: "moderee",
    },
    prixObserves: {
      fourchette: "Entre 50 € et 150 € / mois selon la localisation et la surface",
      note:
        "Les prix observés sur les annonces varient fortement selon la proximité du centre et les caractéristiques du bien. Ces données sont indicatives.",
    },
    pointsVigilance: [
      "Anticiper l'évolution de la demande après le pic de croissance démographique bordelais",
      "Vérifier la situation locative des biens acquis (baux en cours, loyers cohérents avec le marché)",
      "Analyser la concurrence des offres self-storage en développement dans l'agglomération",
      "Tenir compte des contraintes de stationnement et d'accessibilité spécifiques à certains quartiers",
    ],
    zoneLimitrophe: ["Mérignac", "Pessac", "Talence", "Bègles", "Floirac", "Lormont"],
  },
  {
    slug: "toulouse",
    nom: "Toulouse",
    departement: "Haute-Garonne (31)",
    region: "Occitanie",
    population: "~500 000 hab. (ville), ~1,4 M (métropole)",
    metaTitle: "Marché des espaces de stockage à Toulouse — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Toulouse et dans la métropole toulousaine : demande, offre, prix observés, points de vigilance.",
    intro:
      "Toulouse est l'une des villes françaises à la croissance démographique la plus soutenue depuis deux décennies. Cette dynamique alimente un marché immobilier tendu et une demande structurelle pour les espaces de stockage, portée par une population jeune, mobile et largement locataire.",
    contexteUrbanistique:
      "La ville rose concentre une part importante de sa population dans des arrondissements centraux denses (Capitole, Carmes, Saint-Cyprien, Minimes) où le stationnement est contraint. Les communes de première couronne (Blagnac, Colomiers, Balma, Tournefeuille) connaissent également une forte pression locative.",
    demande: {
      niveau: "forte",
      description:
        "La demande est portée par une population étudiante massive (plus de 130 000 étudiants selon l'académie), un tissu d'entreprises aéronautiques et de services, et une mobilité résidentielle élevée. La rotation locative génère une demande régulière pour des stockages de durée variable.",
    },
    offre: {
      description:
        "Le parc de garages et boxes en copropriété est significatif. Les acteurs du self-storage sont présents dans la périphérie de l'agglomération (rocade).",
      concurrenceSelfStorage: "moderee",
    },
    prixObserves: {
      fourchette: "Entre 50 € et 160 € / mois selon la surface et la localisation",
      note:
        "Les prix varient sensiblement selon l'accessibilité et la proximité des axes de transport. Ces données sont indicatives.",
    },
    pointsVigilance: [
      "Prendre en compte la forte concurrence entre petits propriétaires dans certains secteurs",
      "Vérifier l'état technique des biens (garages anciens, accès inondable dans certaines zones basses)",
      "Anticiper les projets d'urbanisme en cours (extension métro, nouveaux quartiers)",
      "Analyser la cohérence des loyers demandés avec les références de marché locales",
    ],
    zoneLimitrophe: ["Blagnac", "Colomiers", "Balma", "Tournefeuille", "Ramonville-Saint-Agne"],
  },
  {
    slug: "nantes",
    nom: "Nantes",
    departement: "Loire-Atlantique (44)",
    region: "Pays de la Loire",
    population: "~320 000 hab. (ville), ~950 000 (métropole)",
    metaTitle: "Marché des espaces de stockage à Nantes — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Nantes et dans la métropole nantaise : demande, offre, prix observés, points de vigilance.",
    intro:
      "Nantes figure parmi les métropoles françaises les plus attractives pour les actifs et les familles. Cette attractivité entretient une pression immobilière soutenue et une demande structurelle pour les espaces de stockage dans la ville et sa première couronne.",
    contexteUrbanistique:
      "La ville a engagé de nombreux projets de transformation urbaine (Île de Nantes, Bas-Chantenay) qui reconfigurent progressivement le tissu bâti. Les quartiers centraux comme Bouffay, Hauts-Pavés, Saint-Félix ou Bellevue concentrent une population locataire souvent sans annexe de stockage.",
    demande: {
      niveau: "forte",
      description:
        "La demande est alimentée par une forte population étudiante, un marché locatif résidentiel tendu et un tissu de PME/TPE actif. La rotation locative est élevée, notamment dans les quartiers étudiants et proches des pôles d'emploi.",
    },
    offre: {
      description:
        "L'offre en garages individuels et boxes est présente mais souvent fragmentée. Le self-storage se développe, notamment en périphérie sur les axes routiers.",
      concurrenceSelfStorage: "moderee",
    },
    prixObserves: {
      fourchette: "Entre 50 € et 130 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Tenir compte des projets de transformation urbaine qui peuvent modifier l'accessibilité",
      "Vérifier la situation du bien au regard des zones inondables (Loire, Erdre)",
      "Analyser la cohérence des loyers avec les références locales avant acquisition",
      "Anticiper la concurrence croissante des acteurs self-storage",
    ],
    zoneLimitrophe: ["Saint-Herblain", "Rezé", "Orvault", "Saint-Sébastien-sur-Loire", "Vertou"],
  },
  {
    slug: "marseille",
    nom: "Marseille",
    departement: "Bouches-du-Rhône (13)",
    region: "Provence-Alpes-Côte d'Azur",
    population: "~870 000 hab. (ville), ~1,9 M (métropole)",
    metaTitle: "Marché des espaces de stockage à Marseille — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Marseille et dans la métropole marseillaise : demande, offre, prix observés, points de vigilance.",
    intro:
      "Marseille présente un marché des espaces de stockage aux caractéristiques spécifiques : une ville étendue, un tissu urbain hétérogène et un marché immobilier dual entre secteurs tendus (centre, corniche) et zones moins liquides. Le besoin de stockage y est réel mais la demande locative peut varier fortement selon les arrondissements.",
    contexteUrbanistique:
      "La géographie de Marseille (16 arrondissements, relief marqué, extension nord-sud importante) crée des marchés locaux très distincts. Les arrondissements centraux (1er, 2e, 6e, 8e) sont plus tendus que les périphéries nord. L'Euroméditerranée a transformé une partie des quartiers portuaires.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est présente mais hétérogène selon les secteurs. Les arrondissements du centre et du sud montrent une demande plus soutenue. La demande des particuliers en mobilité et des artisans est notable. La prudence s'impose dans les secteurs à forte vacance résidentielle.",
    },
    offre: {
      description:
        "L'offre en garages est abondante dans certains secteurs, ce qui peut limiter la tension locative. Les acteurs self-storage sont présents dans l'agglomération.",
      concurrenceSelfStorage: "moderee",
    },
    prixObserves: {
      fourchette: "Entre 40 € et 130 € / mois avec de fortes disparités selon le secteur",
      note:
        "La dispersion des prix est particulièrement marquée à Marseille. Les données sont indicatives.",
    },
    pointsVigilance: [
      "Analyser finement la demande au niveau de l'arrondissement, pas seulement de la ville",
      "Vérifier l'état du bâti et les travaux de copropriété à venir (charges potentiellement élevées)",
      "Tenir compte du taux de vacance local avant d'investir",
      "Évaluer les conditions d'accès et de sécurité du bien",
    ],
    zoneLimitrophe: ["Aix-en-Provence", "Aubagne", "Martigues", "La Ciotat", "Vitrolles"],
  },
  {
    slug: "lille",
    nom: "Lille",
    departement: "Nord (59)",
    region: "Hauts-de-France",
    population: "~240 000 hab. (ville), ~1,2 M (métropole)",
    metaTitle: "Marché des espaces de stockage à Lille — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Lille et dans la métropole lilloise : demande, offre, prix observés, points de vigilance.",
    intro:
      "Lille est une métropole dynamique à la croisée des axes européens (France, Belgique, Royaume-Uni). Sa population étudiante importante, son tissu économique actif et sa forte densité locative créent une demande structurelle pour les espaces de stockage.",
    contexteUrbanistique:
      "La métropole lilloise regroupe plusieurs communes denses (Roubaix, Tourcoing, Villeneuve-d'Ascq) qui forment un bassin locatif étendu. Le centre de Lille est fortement locatif, avec peu d'annexes de stockage dans les immeubles anciens.",
    demande: {
      niveau: "forte",
      description:
        "La demande est portée par une population étudiante nombreuse, une forte densité de ménages locataires et un tissu de petites entreprises actives. La rotation locative est élevée, favorisant la remise aux prix du marché.",
    },
    offre: {
      description:
        "L'offre est composée de garages et boxes en copropriété, souvent dans des immeubles des années 1960-1980. La concurrence self-storage est présente dans l'agglomération.",
      concurrenceSelfStorage: "moderee",
    },
    prixObserves: {
      fourchette: "Entre 40 € et 120 € / mois selon la localisation dans la métropole",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Distinguer les dynamiques entre Lille-centre, Roubaix et Tourcoing (marchés très différents)",
      "Vérifier l'état du bâti, souvent ancien dans certains secteurs",
      "Analyser la demande réelle avant acquisition (risque de vacance dans certaines communes)",
      "Tenir compte de la concurrence entre propriétaires particuliers dans les zones denses",
    ],
    zoneLimitrophe: ["Roubaix", "Tourcoing", "Villeneuve-d'Ascq", "Hem", "Wasquehal"],
  },
  {
    slug: "nice",
    nom: "Nice",
    departement: "Alpes-Maritimes (06)",
    region: "Provence-Alpes-Côte d'Azur",
    population: "~340 000 hab. (ville), ~640 000 (métropole)",
    metaTitle: "Marché des espaces de stockage à Nice — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Nice et dans la métropole niçoise : demande, offre, prix observés, points de vigilance.",
    intro:
      "Nice est une métropole côtière à forte attractivité touristique et résidentielle. Le marché immobilier est l'un des plus tendus de France hors Paris, ce qui se répercute sur les annexes de stationnement et de stockage.",
    contexteUrbanistique:
      "La géographie contrainte de Nice (entre mer et montagne) limite les possibilités d'extension et maintient une pression immobilière élevée. Les garages et boxes sont rares dans les immeubles anciens du centre-ville, et leur valeur locative est corrélée à la tension générale du marché.",
    demande: {
      niveau: "forte",
      description:
        "La demande est soutenue, portée par une population résidente dense, le tourisme et les résidences secondaires. Les espaces de stockage pour particuliers mobiles, retraités et actifs sont recherchés. La saisonnalité peut influer sur la demande dans certains secteurs.",
    },
    offre: {
      description:
        "L'offre est structurellement contrainte par la géographie. Les garages en sous-sol d'immeubles sont le format le plus courant. Les acteurs self-storage sont présents mais leur développement est limité par le foncier.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 80 € et 220 € / mois selon la localisation et la surface",
      note:
        "Nice fait partie des marchés où les loyers de stockage sont structurellement plus élevés qu'en province. Ces données sont indicatives.",
    },
    pointsVigilance: [
      "Tenir compte des prix d'acquisition élevés qui peuvent comprimer la rentabilité nette",
      "Vérifier l'accessibilité réelle des sous-sols (inondabilité, rampe d'accès)",
      "Analyser la stabilité de la demande selon la distance au centre et aux transports",
      "Prendre en compte les charges de copropriété, souvent élevées dans les immeubles côtiers",
    ],
    zoneLimitrophe: ["Antibes", "Cannes", "Cagnes-sur-Mer", "Menton", "Monaco"],
  },
  {
    slug: "strasbourg",
    nom: "Strasbourg",
    departement: "Bas-Rhin (67)",
    region: "Grand Est",
    population: "~290 000 hab. (ville), ~800 000 (Eurométropole)",
    metaTitle: "Marché des espaces de stockage à Strasbourg — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Strasbourg et dans l'Eurométropole : demande, offre, prix observés, points de vigilance.",
    intro:
      "Strasbourg est une métropole frontalière à double identité — ville étudiante et siège d'institutions européennes — qui génère une demande locative résidentielle soutenue et, par extension, un besoin structurel d'espaces de stockage.",
    contexteUrbanistique:
      "La structure urbaine de Strasbourg, avec son centre historique dense (Grande Île, Neustadt), ses quartiers intermédiaires (Neudorf, Cronenbourg) et ses communes de l'Eurométropole, présente des dynamiques locatives variées. Le parc locatif est important, avec une forte présence d'étudiants et d'expatriés.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est régulière, portée par la mobilité des étudiants, des fonctionnaires européens et des actifs. La rotation locative est modérée à forte selon les secteurs. La demande de TPE locales est également notable.",
    },
    offre: {
      description:
        "L'offre est correctement étoffée en garages et boxes dans les copropriétés. Le self-storage est présent mais moins développé qu'à Lyon ou Bordeaux.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 50 € et 130 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Analyser la demande en fonction des cycles académiques et institutionnels",
      "Vérifier les règles spécifiques de copropriété (marchés allemand et français peuvent coexister dans certains immeubles anciens)",
      "Tenir compte de la concurrence de l'offre en Allemagne voisine pour certains profils de locataires",
      "Analyser l'accessibilité, notamment en lien avec les zones à faibles émissions",
    ],
    zoneLimitrophe: ["Schiltigheim", "Illkirch-Graffenstaden", "Ostwald", "Lingolsheim"],
  },
  {
    slug: "montpellier",
    nom: "Montpellier",
    departement: "Hérault (34)",
    region: "Occitanie",
    population: "~300 000 hab. (ville), ~650 000 (métropole)",
    metaTitle: "Marché des espaces de stockage à Montpellier — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Montpellier et dans la métropole héraultaise : demande, offre, prix observés, points de vigilance.",
    intro:
      "Montpellier est l'une des villes françaises à la croissance démographique la plus rapide depuis trente ans. Cette dynamique entretient un marché résidentiel tendu et une demande de stockage portée par une population jeune et mobile.",
    contexteUrbanistique:
      "La ville combine un centre historique dense, des quartiers récents (Port Marianne, Richter) et des extensions périurbaines. Le parc locatif est majoritairement composé de petites surfaces sans annexes, ce qui génère un besoin de stockage extérieur.",
    demande: {
      niveau: "forte",
      description:
        "Montpellier est l'une des villes universitaires les plus importantes de France (plus de 80 000 étudiants). Cette population génère une demande forte et régulière pour des solutions de stockage temporaire et saisonnier, en complément d'une demande résidentielle soutenue.",
    },
    offre: {
      description:
        "L'offre en garages et boxes est présente dans les copropriétés récentes et dans les lotissements périurbains. Le self-storage se développe dans l'agglomération.",
      concurrenceSelfStorage: "moderee",
    },
    prixObserves: {
      fourchette: "Entre 45 € et 130 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Prendre en compte le risque inondation dans certains secteurs (Lez, zones basses)",
      "Analyser l'adéquation entre le profil de la demande (étudiants, jeunes actifs) et la durée de location proposée",
      "Vérifier les conditions d'accessibilité et de sécurité des biens",
      "Anticiper les évolutions d'urbanisme liées à la croissance rapide de la ville",
    ],
    zoneLimitrophe: ["Castelnau-le-Lez", "Lattes", "Pérols", "Clapiers", "Saint-Jean-de-Védas"],
  },
  {
    slug: "rennes",
    nom: "Rennes",
    departement: "Ille-et-Vilaine (35)",
    region: "Bretagne",
    population: "~225 000 hab. (ville), ~730 000 (métropole)",
    metaTitle: "Marché des espaces de stockage à Rennes — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Rennes et dans la métropole rennaise : demande, offre, prix observés, points de vigilance.",
    intro:
      "Rennes est une métropole régionale dynamique, avec une économie diversifiée, une population étudiante importante et une attractivité résidentielle en progression. Ces facteurs alimentent une demande de stockage régulière dans la ville et sa couronne.",
    contexteUrbanistique:
      "Rennes a connu un développement urbain soutenu, notamment autour des axes de transport (métro ligne b, gare). Les quartiers centraux et les communes de première couronne (Cesson-Sévigné, Bruz, Saint-Jacques-de-la-Lande) sont en croissance.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est portée par une population étudiante significative (environ 70 000 étudiants), un tissu de PME/TPE technologiques et une mobilité résidentielle croissante. La demande est régulière sans être aussi tendue qu'à Lyon ou Toulouse.",
    },
    offre: {
      description:
        "L'offre en garages et boxes est correctement distribuée dans les copropriétés. Le self-storage est peu développé par rapport aux métropoles de plus grande taille.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 40 € et 110 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Analyser la demande par secteur (centre vs périphérie) avant acquisition",
      "Vérifier l'état du bâti dans les immeubles plus anciens des quartiers populaires",
      "Tenir compte de la saisonnalité liée au calendrier universitaire",
      "Évaluer la cohérence loyers / prix d'acquisition dans un marché moins tendu qu'à l'ouest",
    ],
    zoneLimitrophe: ["Cesson-Sévigné", "Bruz", "Saint-Jacques-de-la-Lande", "Betton", "Acigné"],
  },
];

export function getVilleBySlug(slug: string): Ville | undefined {
  return villes.find((v) => v.slug === slug);
}
