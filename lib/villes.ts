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

  // ── Villes moyennes ───────────────────────────────────────────────────────
  {
    slug: "le-mans",
    nom: "Le Mans",
    departement: "Sarthe (72)",
    region: "Pays de la Loire",
    population: "~145 000 hab. (ville), ~215 000 (agglomération)",
    metaTitle: "Marché des espaces de stockage au Mans — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage au Mans et dans l'agglomération sarthoise : demande, offre, prix observés, points de vigilance.",
    intro:
      "Le Mans est une préfecture de taille intermédiaire avec un tissu industriel historique (automobile) et une économie de services en mutation. Son marché des espaces de stockage présente une demande modérée, portée par une population locataire stable et un tissu de PME/artisans actif.",
    contexteUrbanistique:
      "Le Mans dispose d'un parc immobilier diversifié, avec des copropriétés des années 1960-1980 qui concentrent une partie des garages disponibles. Les quartiers centraux (Cité Plantagenêt, Pontlieue) et la première couronne sont les secteurs les plus liquides pour les espaces de stockage.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est régulière sans être tendue. Elle provient principalement des ménages locataires sans cave ou garage privatif, d'artisans et de PME locales. La ville accueille également une population étudiante (Le Mans Université) qui génère une demande de stockage saisonnier.",
    },
    offre: {
      description:
        "L'offre est composée principalement de garages en copropriété. Les acteurs du self-storage sont peu présents dans l'agglomération, ce qui limite la concurrence directe.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 40 € et 90 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Analyser la demande locative réelle avant acquisition dans un marché moins tendu",
      "Vérifier l'état des copropriétés (bâti des années 60-70, travaux éventuels)",
      "Tenir compte de la taille de l'agglomération, qui limite la profondeur du marché",
      "Évaluer la cohérence entre prix d'acquisition et loyer potentiel",
    ],
    zoneLimitrophe: ["La Chapelle-Saint-Aubin", "Arnage", "Allonnes", "Coulaines", "Ruaudin"],
  },
  {
    slug: "tours",
    nom: "Tours",
    departement: "Indre-et-Loire (37)",
    region: "Centre-Val de Loire",
    population: "~140 000 hab. (ville), ~310 000 (métropole)",
    metaTitle: "Marché des espaces de stockage à Tours — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Tours et dans la métropole tourangelle : demande, offre, prix observés, points de vigilance.",
    intro:
      "Tours est une ville universitaire et tertiaire, préfecture de l'Indre-et-Loire, bien connectée à Paris (45 min en TGV). Cette position génère une mobilité résidentielle importante et une demande de stockage portée par une population étudiante et des actifs navetteurs.",
    contexteUrbanistique:
      "Le centre-ville de Tours dispose d'un parc locatif résidentiel important, notamment dans les quartiers Prébendes, Cathédrale et Velpeau. Les copropriétés des années 1970-1980 en périphérie immédiate (Saint-Cyr-sur-Loire, Joué-lès-Tours) offrent un parc de garages significatif.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est portée par une population étudiante notable (environ 30 000 étudiants), des actifs en mobilité liés à la proximité de Paris, et un tissu de PME/artisans régulier. La rotation locative est modérée à forte dans les quartiers centraux.",
    },
    offre: {
      description:
        "L'offre en garages et boxes est correctement distribuée dans les copropriétés et pavillons de la première couronne. Le self-storage est peu développé dans l'agglomération.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 45 € et 100 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Tenir compte du risque inondation dans les zones basses (Loire, Cher)",
      "Analyser la demande par secteur : centre vs communes périphériques",
      "Vérifier la cohérence des loyers avec les niveaux locaux avant acquisition",
      "Anticiper les effets de la proximité de Paris sur la volatilité de la population active",
    ],
    zoneLimitrophe: ["Saint-Cyr-sur-Loire", "Joué-lès-Tours", "Chambray-lès-Tours", "La Riche", "Fondettes"],
  },
  {
    slug: "angers",
    nom: "Angers",
    departement: "Maine-et-Loire (49)",
    region: "Pays de la Loire",
    population: "~160 000 hab. (ville), ~430 000 (agglomération)",
    metaTitle: "Marché des espaces de stockage à Angers — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Angers et dans l'agglomération angevine : demande, offre, prix observés, points de vigilance.",
    intro:
      "Angers est une ville universitaire dynamique à deux heures de Paris, qui connaît une attractivité résidentielle croissante. Son marché locatif est porté par une forte population étudiante et des actifs en mobilité, ce qui génère une demande structurelle pour les espaces de stockage.",
    contexteUrbanistique:
      "Angers dispose d'un parc de copropriétés important dans les quartiers centraux et en première couronne (Belle-Beille, Monplaisir, La Roseraie). La ville a connu plusieurs phases de développement résidentiel qui ont créé des besoins de stockage annexe.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est soutenue par une importante population étudiante (35 000 à 40 000 étudiants selon les sources), des ménages locataires sans cave et un tissu artisanal et PME actif. Angers bénéficie d'une réputation de ville agréable qui attire des actifs en mobilité depuis Paris.",
    },
    offre: {
      description:
        "L'offre est relativement bien distribuée, avec des garages dans les copropriétés des années 1970-1990. Les acteurs du self-storage sont peu implantés, limitant la concurrence directe.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 45 € et 110 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Analyser la tension locative par quartier : les disparités sont réelles à Angers",
      "Vérifier les risques inondation (Maine, Loire à proximité)",
      "Tenir compte de la saisonnalité universitaire dans l'évaluation de la demande",
      "Évaluer l'état des copropriétés avant acquisition",
    ],
    zoneLimitrophe: ["Saint-Barthélemy-d'Anjou", "Trélazé", "Les Ponts-de-Cé", "Avrillé", "Saint-Sylvain-d'Anjou"],
  },
  {
    slug: "laval",
    nom: "Laval",
    departement: "Mayenne (53)",
    region: "Pays de la Loire",
    population: "~50 000 hab. (ville), ~105 000 (agglomération)",
    metaTitle: "Marché des espaces de stockage à Laval — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Laval et dans l'agglomération lavalloise : demande, offre, prix observés, points de vigilance.",
    intro:
      "Laval est une préfecture de taille modeste, chef-lieu de la Mayenne, avec un tissu économique artisanal et industriel local. Son marché des espaces de stockage est de petite taille, avec une demande modeste mais une concurrence limitée et des prix d'acquisition généralement accessibles.",
    contexteUrbanistique:
      "Laval est une ville à dominante pavillonnaire en périphérie et à copropriétés modestes en centre-ville. Le marché locatif résidentiel est peu tendu, ce qui se répercute sur les espaces de stockage annexes.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est principalement portée par les ménages locataires en centre-ville, les artisans et les PME locales. Le marché est de taille limitée, ce qui implique une analyse fine avant tout investissement.",
    },
    offre: {
      description:
        "L'offre est composée de garages individuels et de petits lots en copropriété. Les acteurs du self-storage sont absents ou très marginaux dans l'agglomération.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 30 € et 70 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement. Le marché est peu fourni en annonces.",
    },
    pointsVigilance: [
      "La faible taille du marché impose une analyse terrain avant toute acquisition",
      "Vérifier la liquidité potentielle du bien à la revente dans un marché étroit",
      "Évaluer soigneusement la demande réelle avant de s'engager",
      "Tenir compte de la distance aux bassins d'emploi régionaux (Rennes, Le Mans)",
    ],
    zoneLimitrophe: ["Changé", "Bonchamp-lès-Laval", "Saint-Berthevin", "Louverné"],
  },
  {
    slug: "orleans",
    nom: "Orléans",
    departement: "Loiret (45)",
    region: "Centre-Val de Loire",
    population: "~115 000 hab. (ville), ~290 000 (métropole)",
    metaTitle: "Marché des espaces de stockage à Orléans — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Orléans et dans la métropole orléanaise : demande, offre, prix observés, points de vigilance.",
    intro:
      "Orléans est la capitale régionale du Centre-Val de Loire, à une heure de Paris. Sa proximité avec la capitale en fait un marché résidentiel attractif pour les ménages cherchant des prix inférieurs à ceux de l'Île-de-France, générant une demande de stockage portée par une population mobile.",
    contexteUrbanistique:
      "Orléans dispose d'un parc locatif résidentiel significatif dans les quartiers centraux (Saint-Marceau, La Source, Bannier). La proximité de Paris influence les dynamiques de population : mobilité élevée, ménages en transition, actifs navetteurs.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est portée par la mobilité résidentielle liée à la proximité parisienne, une population étudiante (environ 20 000 étudiants) et un tissu d'entreprises en développement autour des zones d'activité. La demande est régulière sans être sous tension marquée.",
    },
    offre: {
      description:
        "L'offre est présente en garages et boxes dans les copropriétés. Les acteurs du self-storage commencent à s'implanter dans l'agglomération, notamment en périphérie.",
      concurrenceSelfStorage: "moderee",
    },
    prixObserves: {
      fourchette: "Entre 45 € et 110 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Vérifier les zones inondables (Loire) qui concernent certains secteurs bas de la ville",
      "Analyser l'impact de la concurrence parisienne sur les prix d'acquisition",
      "Tenir compte du développement du self-storage dans l'agglomération",
      "Évaluer la stabilité de la demande dans un marché influencé par les cycles parisiens",
    ],
    zoneLimitrophe: ["Saint-Jean-de-la-Ruelle", "Saint-Jean-de-Braye", "Fleury-les-Aubrais", "Olivet", "Saint-Cyr-en-Val"],
  },
  {
    slug: "caen",
    nom: "Caen",
    departement: "Calvados (14)",
    region: "Normandie",
    population: "~110 000 hab. (ville), ~270 000 (agglomération)",
    metaTitle: "Marché des espaces de stockage à Caen — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Caen et dans l'agglomération caennaise : demande, offre, prix observés, points de vigilance.",
    intro:
      "Caen est la capitale normande, ville universitaire à 2h de Paris et à 15 km de la mer. Son marché immobilier est modérément tendu, avec une demande de stockage portée par une population étudiante importante et un tissu d'actifs locaux stable.",
    contexteUrbanistique:
      "Le centre-ville de Caen, largement reconstruit après-guerre, concentre un parc de copropriétés des années 1950-1970. Les quartiers péri-centraux (Vaucelles, Venoix, Hérouville-Saint-Clair) complètent l'offre disponible.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est alimentée par environ 35 000 étudiants (Université de Caen), des ménages locataires en centre et des actifs liés aux zones d'activité normandes. La demande de stockage est régulière sans être sous forte tension.",
    },
    offre: {
      description:
        "L'offre en garages est présente dans les copropriétés du centre et de la première couronne. Le self-storage est peu développé dans l'agglomération.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 40 € et 90 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Analyser la qualité du bâti (constructions d'après-guerre, état variable)",
      "Tenir compte de la taille modérée du marché pour l'évaluation de la liquidité",
      "Vérifier la demande réelle secteur par secteur",
      "Évaluer les charges de copropriété, parfois élevées dans les immeubles anciens reconstruits",
    ],
    zoneLimitrophe: ["Hérouville-Saint-Clair", "Mondeville", "Ifs", "Verson", "Fleury-sur-Orne"],
  },
  {
    slug: "dijon",
    nom: "Dijon",
    departement: "Côte-d'Or (21)",
    region: "Bourgogne-Franche-Comté",
    population: "~155 000 hab. (ville), ~260 000 (agglomération)",
    metaTitle: "Marché des espaces de stockage à Dijon — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Dijon et dans le Grand Dijon : demande, offre, prix observés, points de vigilance.",
    intro:
      "Dijon est la capitale bourguignonne, ville universitaire et gastronomique, bien connectée à Paris (1h40 en TGV). Son marché locatif est modérément tendu, avec une demande de stockage portée par une population étudiante notable et des actifs en mobilité.",
    contexteUrbanistique:
      "Dijon dispose d'un centre-ville historique dense et d'une ceinture de copropriétés des années 1960-1990 dans les quartiers périphériques (Fontaine-d'Ouche, Grésilles, Valendons). Ces zones concentrent une part significative de l'offre en garages.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est portée par environ 35 000 étudiants, un tissu administratif et de services important, et des ménages locataires en centre-ville. La rotation locative est modérée.",
    },
    offre: {
      description:
        "L'offre en garages et boxes est correcte dans les copropriétés. Les acteurs du self-storage sont peu présents dans l'agglomération.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 45 € et 100 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Distinguer les quartiers centraux historiques (demande forte) des périphéries (demande plus fragile)",
      "Analyser la situation des copropriétés dans les quartiers des années 60-70",
      "Vérifier la cohérence loyers / prix d'acquisition dans ce marché intermédiaire",
      "Tenir compte de la taille modérée de l'agglomération pour évaluer la liquidité",
    ],
    zoneLimitrophe: ["Chenôve", "Talant", "Quetigny", "Longvic", "Chevigny-Saint-Sauveur"],
  },
  {
    slug: "grenoble",
    nom: "Grenoble",
    departement: "Isère (38)",
    region: "Auvergne-Rhône-Alpes",
    population: "~160 000 hab. (ville), ~700 000 (agglomération)",
    metaTitle: "Marché des espaces de stockage à Grenoble — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Grenoble et dans l'agglomération grenobloise : demande, offre, prix observés, points de vigilance.",
    intro:
      "Grenoble est une métropole alpine à forte identité technologique (Minatec, CEA, Schneider), avec une population étudiante importante et un marché résidentiel relativement tendu. La géographie contrainte (cuvette entourée de massifs) limite l'étalement urbain et maintient une pression locative.",
    contexteUrbanistique:
      "La géographie de Grenoble impose une densité élevée dans la plaine. Les quartiers centraux (Championnet, Chorier-Berriat, Île Verte) et les communes limitrophes (Échirolles, Saint-Martin-d'Hères) concentrent l'essentiel de la demande locative.",
    demande: {
      niveau: "forte",
      description:
        "La demande est soutenue par une population étudiante massive (environ 60 000 étudiants dans l'académie), un tissu de chercheurs et d'ingénieurs mobiles, et des ménages locataires nombreux. La contrainte géographique renforce la tension sur l'ensemble des actifs immobiliers.",
    },
    offre: {
      description:
        "L'offre en garages et boxes est présente dans les copropriétés des années 1960-1980 qui caractérisent une partie du parc grenoblois. Les acteurs du self-storage sont présents en périphérie.",
      concurrenceSelfStorage: "moderee",
    },
    prixObserves: {
      fourchette: "Entre 55 € et 130 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Vérifier l'état des copropriétés (bâti des années 60-70, plans de rénovation)",
      "Tenir compte du risque inondation dans certains secteurs de la plaine (Drac, Isère)",
      "Analyser les charges de copropriété qui peuvent être significatives dans les grands ensembles",
      "Évaluer la concurrence des offres self-storage périphériques",
    ],
    zoneLimitrophe: ["Échirolles", "Saint-Martin-d'Hères", "Seyssinet-Pariset", "Meylan", "Grenoble-Presqu'île"],
  },
  {
    slug: "reims",
    nom: "Reims",
    departement: "Marne (51)",
    region: "Grand Est",
    population: "~185 000 hab. (ville), ~220 000 (agglomération)",
    metaTitle: "Marché des espaces de stockage à Reims — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Reims et dans l'agglomération rémoise : demande, offre, prix observés, points de vigilance.",
    intro:
      "Reims est la première ville de la Marne, à 45 minutes de Paris en TGV. Sa proximité avec la capitale et son tissu économique (champagne, industrie, services) alimentent un marché locatif actif et une demande de stockage modérée.",
    contexteUrbanistique:
      "Reims dispose d'un parc immobilier important, avec des copropriétés en centre-ville et dans les quartiers périphériques (Croix-Rouge, Wilson, Europe). La ville a bénéficié d'opérations de rénovation urbaine qui ont modernisé une partie du parc.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est alimentée par une population étudiante notable (environ 25 000 étudiants), des navetteurs vers Paris, et un tissu de PME/artisans lié à l'industrie du champagne et à la logistique. La demande est stable sans être sous forte tension.",
    },
    offre: {
      description:
        "L'offre en garages est présente dans les copropriétés. Les acteurs du self-storage sont marginalement présents dans l'agglomération.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 45 € et 100 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Analyser la demande par quartier : les disparités entre centre et périphérie sont réelles",
      "Tenir compte de la taille modérée de l'agglomération pour l'évaluation de la liquidité",
      "Vérifier l'état des copropriétés dans les quartiers d'habitat social réhabilité",
      "Évaluer la cohérence loyers / prix dans un marché influencé par la proximité parisienne",
    ],
    zoneLimitrophe: ["Cormontreuil", "Bétheny", "Tinqueux", "Saint-Brice-Courcelles", "Bezannes"],
  },
  {
    slug: "clermont-ferrand",
    nom: "Clermont-Ferrand",
    departement: "Puy-de-Dôme (63)",
    region: "Auvergne-Rhône-Alpes",
    population: "~145 000 hab. (ville), ~480 000 (métropole)",
    metaTitle: "Marché des espaces de stockage à Clermont-Ferrand — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Clermont-Ferrand et dans la métropole clermontoise : demande, offre, prix observés, points de vigilance.",
    intro:
      "Clermont-Ferrand est la capitale auvergnate, marquée par son histoire industrielle (Michelin) et une présence universitaire notable. Son marché résidentiel est modérément tendu et présente une demande de stockage régulière portée par une population étudiante et ouvrière stable.",
    contexteUrbanistique:
      "La ville présente un tissu dense en centre-ville et une ceinture de quartiers résidentiels (Les Vergnes, Champratel, La Plaine) avec un parc de copropriétés significatif. Les communes limitrophes comme Riom, Vichy ou Issoire constituent des bassins d'emploi complémentaires.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est portée par environ 40 000 étudiants, un tissu d'employés industriels et de services, et des ménages locataires en centre-ville. La stabilité économique liée à Michelin et aux grandes entreprises locales ancre la demande.",
    },
    offre: {
      description:
        "L'offre en garages et boxes est correcte dans les copropriétés. Le self-storage est peu développé dans l'agglomération.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 40 € et 90 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Analyser l'exposition de la demande aux cycles économiques de Michelin",
      "Vérifier l'état des copropriétés dans les quartiers ouvriers anciens",
      "Tenir compte de la géographie (relief, accès) pour l'accessibilité des biens",
      "Évaluer la liquidité potentielle dans un marché de taille intermédiaire",
    ],
    zoneLimitrophe: ["Chamalières", "Cournon-d'Auvergne", "Aubière", "Beaumont", "Royat"],
  },

  // ── Autres préfectures ────────────────────────────────────────────────────
  {
    slug: "rouen",
    nom: "Rouen",
    departement: "Seine-Maritime (76)",
    region: "Normandie",
    population: "~115 000 hab. (ville), ~490 000 (métropole)",
    metaTitle: "Marché des espaces de stockage à Rouen — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Rouen et dans la métropole rouennaise : demande, offre, prix observés, points de vigilance.",
    intro:
      "Rouen est la capitale normande, à une heure de Paris, avec un tissu économique diversifié (industrie, logistique, services). Sa situation de ville-portail entre Paris et la Manche génère une mobilité résidentielle active et une demande de stockage structurelle.",
    contexteUrbanistique:
      "Rouen dispose d'un parc immobilier varié, du centre historique à rive droite aux quartiers résidentiels de la rive gauche (Sotteville-lès-Rouen, Saint-Étienne-du-Rouvray). Les copropriétés des années 1960-1980 concentrent une part significative de l'offre en garages.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est portée par une population étudiante notable (environ 35 000 étudiants à l'Université de Rouen), des actifs liés aux zones industrielles de la Seine et des navetteurs parisiens. La rotation locative est régulière.",
    },
    offre: {
      description:
        "L'offre est présente dans les copropriétés et pavillons de la première couronne. Le self-storage reste peu développé dans l'agglomération.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 45 € et 100 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Analyser les risques industriels (présence de sites SEVESO dans la vallée de la Seine)",
      "Vérifier les zones inondables (Seine) qui concernent certains secteurs bas",
      "Évaluer la demande par rive (droite vs gauche) qui présentent des dynamiques différentes",
      "Tenir compte de la taille intermédiaire du marché pour l'évaluation de la liquidité",
    ],
    zoneLimitrophe: ["Sotteville-lès-Rouen", "Saint-Étienne-du-Rouvray", "Le Petit-Quevilly", "Bois-Guillaume", "Mont-Saint-Aignan"],
  },
  {
    slug: "amiens",
    nom: "Amiens",
    departement: "Somme (80)",
    region: "Hauts-de-France",
    population: "~135 000 hab. (ville), ~180 000 (agglomération)",
    metaTitle: "Marché des espaces de stockage à Amiens — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Amiens et dans l'agglomération amiénoise : demande, offre, prix observés, points de vigilance.",
    intro:
      "Amiens est la préfecture de la Somme et capitale de la Picardie, à 1h15 de Paris. Ville universitaire à économie mixte (industrie, services, logistique), elle présente un marché de stockage de taille modeste mais avec une demande régulière portée par sa population étudiante.",
    contexteUrbanistique:
      "Le parc immobilier amiénois comprend un centre historique dense autour de la cathédrale, des quartiers résidentiels en première couronne et des zones pavillonnaires en périphérie. Les copropriétés des années 1960-1980 concentrent l'essentiel de l'offre en garages.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est portée par environ 30 000 étudiants (Université Picardie Jules Verne), un tissu industriel et logistique actif, et des ménages locataires en centre-ville. La proximité de Paris attire également des actifs en mobilité.",
    },
    offre: {
      description:
        "L'offre en garages et boxes est correcte dans les copropriétés. Les acteurs du self-storage sont peu présents dans l'agglomération.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 35 € et 85 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Analyser la demande réelle avant acquisition dans un marché de taille modeste",
      "Vérifier les zones inondables (Somme) qui concernent certains secteurs bas",
      "Tenir compte de la relative fragilité économique de certains quartiers",
      "Évaluer la liquidité potentielle dans un marché aux acheteurs peu nombreux",
    ],
    zoneLimitrophe: ["Longueau", "Rivery", "Glisy", "Camon", "Dury"],
  },
  {
    slug: "poitiers",
    nom: "Poitiers",
    departement: "Vienne (86)",
    region: "Nouvelle-Aquitaine",
    population: "~90 000 hab. (ville), ~140 000 (agglomération)",
    metaTitle: "Marché des espaces de stockage à Poitiers — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Poitiers et dans l'agglomération poitevine : demande, offre, prix observés, points de vigilance.",
    intro:
      "Poitiers est une ville universitaire sur l'axe Paris-Bordeaux, préfecture de la Vienne. Sa forte proportion d'étudiants par rapport à sa population totale génère une demande de stockage saisonnière importante, dans un marché de taille modeste.",
    contexteUrbanistique:
      "Poitiers est construite sur un plateau dominant la Clain, avec un centre historique dense et des campus universitaires intégrés à la ville. Les quartiers résidentiels en périphérie (Trois-Cités, Gibauderie) concentrent une partie de l'offre locative.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est très fortement marquée par la présence universitaire (environ 30 000 étudiants pour 90 000 habitants, soit un ratio parmi les plus élevés de France). Cette demande est saisonnière et génère une forte rotation locative. La demande de la part des actifs permanents est plus limitée.",
    },
    offre: {
      description:
        "L'offre en garages est présente mais le marché est peu profond. Les acteurs du self-storage sont absents ou marginaux dans l'agglomération.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 30 € et 75 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement. Le marché est peu fourni en annonces.",
    },
    pointsVigilance: [
      "La forte dépendance universitaire implique une analyse de la stabilité de la demande à long terme",
      "Évaluer la liquidité dans un marché de petite taille",
      "Vérifier la cohérence prix d'acquisition / loyer dans un marché aux prix modérés",
      "Analyser la demande hors saison universitaire (été) pour évaluer la vacance potentielle",
    ],
    zoneLimitrophe: ["Buxerolles", "Chasseneuil-du-Poitou", "Mignaloux-Beauvoir", "Saint-Benoît", "Biard"],
  },
  {
    slug: "limoges",
    nom: "Limoges",
    departement: "Haute-Vienne (87)",
    region: "Nouvelle-Aquitaine",
    population: "~130 000 hab. (ville), ~210 000 (agglomération)",
    metaTitle: "Marché des espaces de stockage à Limoges — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Limoges et dans l'agglomération limougeaude : demande, offre, prix observés, points de vigilance.",
    intro:
      "Limoges est la préfecture de la Haute-Vienne, ville industrielle en reconversion économique, avec un marché immobilier peu tendu par rapport aux grandes métropoles. Les prix d'acquisition y sont généralement accessibles, ce qui peut attirer des investisseurs cherchant des rendements bruts plus élevés.",
    contexteUrbanistique:
      "Limoges dispose d'un parc immobilier important relativement à sa population, avec des prix de transaction parmi les plus bas des préfectures françaises. Le marché locatif résidentiel est peu tendu, ce qui se répercute sur les espaces de stockage.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est portée par une population étudiante (environ 18 000 étudiants), un tissu de PME/artisans héritier de l'industrie de la porcelaine et de la chaussure, et des ménages locataires en centre-ville. La demande est régulière mais le marché est peu profond.",
    },
    offre: {
      description:
        "L'offre en garages et boxes est bien présente dans les copropriétés, à des prix d'acquisition généralement accessibles. Le self-storage est absent ou très marginal.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 30 € et 75 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Analyser la profondeur réelle du marché locatif avant acquisition",
      "Tenir compte de la relative faiblesse démographique qui pèse sur la demande à long terme",
      "Évaluer la liquidité à la revente dans un marché peu actif",
      "Vérifier la cohérence entre rendement brut apparent et risques réels (vacance, travaux)",
    ],
    zoneLimitrophe: ["Isle", "Panazol", "Couzeix", "Feytiat", "Aixe-sur-Vienne"],
  },
  {
    slug: "pau",
    nom: "Pau",
    departement: "Pyrénées-Atlantiques (64)",
    region: "Nouvelle-Aquitaine",
    population: "~80 000 hab. (ville), ~260 000 (agglomération)",
    metaTitle: "Marché des espaces de stockage à Pau — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Pau et dans l'agglomération paloise : demande, offre, prix observés, points de vigilance.",
    intro:
      "Pau est la préfecture des Pyrénées-Atlantiques, ville universitaire et administrative avec une économie liée aux services, à l'aéronautique (Safran, Turbomeca) et au tourisme pyrénéen. Son marché de stockage est de taille modeste mais présente une demande régulière.",
    contexteUrbanistique:
      "Pau est construite sur un promontoire dominant le gave de Pau, avec un centre-ville dense et des quartiers résidentiels en périphérie (Jurançon, Billère, Lescar). Le parc locatif est significatif dans les quartiers centraux et en première couronne.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est portée par environ 15 000 étudiants (Université de Pau et des Pays de l'Adour), un tissu industriel aéronautique stable et des ménages locataires en centre-ville. La demande touristique peut générer des besoins de stockage saisonniers.",
    },
    offre: {
      description:
        "L'offre en garages est présente dans les copropriétés et les lotissements de la première couronne. Le self-storage est peu ou pas présent dans l'agglomération.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 35 € et 80 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Analyser la demande par secteur dans une agglomération aux dynamiques hétérogènes",
      "Vérifier la liquidité potentielle dans un marché de petite taille",
      "Tenir compte de l'accessibilité (relief, dénivelés) pour certains biens",
      "Évaluer la cohérence prix d'acquisition / loyer avant engagement",
    ],
    zoneLimitrophe: ["Billère", "Lescar", "Jurançon", "Bizanos", "Lons"],
  },
  {
    slug: "brest",
    nom: "Brest",
    departement: "Finistère (29)",
    region: "Bretagne",
    population: "~140 000 hab. (ville), ~320 000 (agglomération)",
    metaTitle: "Marché des espaces de stockage à Brest — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Brest et dans la métropole brestoise : demande, offre, prix observés, points de vigilance.",
    intro:
      "Brest est la deuxième ville de Bretagne, port militaire et ville universitaire, avec une économie marquée par la Défense, les technologies marines et les services. Son marché immobilier est accessible et présente une demande de stockage régulière portée par une population étudiante et des ménages locataires stables.",
    contexteUrbanistique:
      "Brest a été largement reconstruite après-guerre, ce qui confère à son bâti un caractère relativement homogène des années 1950-1970. Le centre-ville et les quartiers périphériques (Lambézellec, Saint-Pierre-Quilbignon, Guipavas) concentrent l'essentiel de l'offre locative.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est portée par environ 25 000 étudiants (UBO, ENSTA, Télécom Bretagne), un tissu de militaires et civils de la Défense nationale, et des ménages locataires permanents. La demande est stable et régulière.",
    },
    offre: {
      description:
        "L'offre en garages est bien présente dans les copropriétés des années 1950-1980. Les acteurs du self-storage sont peu développés dans l'agglomération.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 40 € et 90 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Analyser l'état du bâti (construction d'après-guerre, qualité variable selon les opérations)",
      "Vérifier l'exposition au risque météorologique (tempêtes, humidité) pour les biens en rez-de-chaussée ou sous-sol",
      "Tenir compte de la dépendance à la Défense nationale pour évaluer la stabilité de la demande",
      "Évaluer la liquidité dans un marché géographiquement isolé en pointe de la Bretagne",
    ],
    zoneLimitrophe: ["Guipavas", "Le Relecq-Kerhuon", "Plouzané", "Saint-Renan", "Plougastel-Daoulas"],
  },
  {
    slug: "perpignan",
    nom: "Perpignan",
    departement: "Pyrénées-Orientales (66)",
    region: "Occitanie",
    population: "~120 000 hab. (ville), ~200 000 (agglomération)",
    metaTitle: "Marché des espaces de stockage à Perpignan — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Perpignan et dans l'agglomération perpignanaise : demande, offre, prix observés, points de vigilance.",
    intro:
      "Perpignan est la préfecture des Pyrénées-Orientales, ville méditerranéenne frontalière de l'Espagne. Son marché immobilier est accessible avec des prix d'acquisition parmi les plus bas des grandes villes du sud, mais la demande locative présente des fragilités structurelles.",
    contexteUrbanistique:
      "Perpignan présente un tissu urbain dense en centre-ville et des quartiers résidentiels en extension. Le marché locatif est marqué par un taux de pauvreté élevé et une rotation rapide dans certains secteurs. Les quartiers périphériques (Saint-Estève, Cabestany, Canet-en-Roussillon) offrent des dynamiques plus stables.",
    demande: {
      niveau: "moderee",
      description:
        "La demande de stockage est portée par des ménages locataires, des artisans et des petits commerçants. L'attractivité touristique (proximité des plages, frontière espagnole) génère une demande saisonnière. La prudence s'impose sur les secteurs à forte vacance résidentielle.",
    },
    offre: {
      description:
        "L'offre en garages est présente, avec des prix d'acquisition accessibles. Les acteurs du self-storage sont peu implantés dans l'agglomération.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 35 € et 85 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Analyser soigneusement la demande réelle par secteur avant acquisition",
      "Tenir compte des disparités socio-économiques entre quartiers qui influencent la demande",
      "Évaluer le risque de vacance dans les secteurs les plus fragilisés",
      "Vérifier la liquidité à la revente dans un marché aux acheteurs peu nombreux",
    ],
    zoneLimitrophe: ["Saint-Estève", "Cabestany", "Rivesaltes", "Canet-en-Roussillon", "Thuir"],
  },
  {
    slug: "metz",
    nom: "Metz",
    departement: "Moselle (57)",
    region: "Grand Est",
    population: "~115 000 hab. (ville), ~390 000 (agglomération)",
    metaTitle: "Marché des espaces de stockage à Metz — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Metz et dans l'agglomération messine : demande, offre, prix observés, points de vigilance.",
    intro:
      "Metz est la préfecture de la Moselle, ville d'art et d'histoire à la croisée des axes européens (France, Allemagne, Luxembourg). Sa proximité avec le Luxembourg génère une demande de logements et de stockage portée par des travailleurs frontaliers.",
    contexteUrbanistique:
      "Metz dispose d'un centre historique préservé et de quartiers résidentiels en première couronne (Borny, Queuleu, Magny). La proximité du Luxembourg attire des ménages qui cherchent à se loger en France tout en travaillant au Grand-Duché, créant une pression locative spécifique.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est soutenue par les travailleurs frontaliers (Luxembourg à 60 km), une population étudiante de l'Université de Lorraine, et un tissu administratif important. Le marché bénéficie d'une relative stabilité liée à l'emploi frontalier.",
    },
    offre: {
      description:
        "L'offre en garages et boxes est bien distribuée dans les copropriétés des quartiers résidentiels. Le self-storage est peu développé dans l'agglomération.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 50 € et 110 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Analyser l'impact de la proximité luxembourgeoise sur les prix d'acquisition (effet de report potentiel)",
      "Tenir compte des dynamiques propres à la métropole Metz-Nancy-Thionville",
      "Vérifier l'état du bâti dans les grands ensembles des années 1960-1970",
      "Évaluer la cohérence loyers / prix dans un marché influencé par les salaires luxembourgeois",
    ],
    zoneLimitrophe: ["Woippy", "Montigny-lès-Metz", "Moulins-lès-Metz", "Plappeville", "Longeville-lès-Metz"],
  },
  {
    slug: "nancy",
    nom: "Nancy",
    departement: "Meurthe-et-Moselle (54)",
    region: "Grand Est",
    population: "~105 000 hab. (ville), ~430 000 (agglomération)",
    metaTitle: "Marché des espaces de stockage à Nancy — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Nancy et dans la métropole nancéienne : demande, offre, prix observés, points de vigilance.",
    intro:
      "Nancy est la métropole lorraine par excellence, ville universitaire et culturelle (place Stanislas), avec un marché résidentiel relativement tendu pour une ville de sa taille. La forte présence étudiante et un tissu tertiaire actif génèrent une demande de stockage régulière.",
    contexteUrbanistique:
      "Nancy dispose d'un tissu urbain dense avec un centre historique valorisé et des quartiers résidentiels en première couronne (Laxou, Vandœuvre-lès-Nancy, Essey-lès-Nancy). La ville fait partie de la métropole du Grand Nancy, qui regroupe plusieurs communes aux dynamiques locatives distinctes.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est portée par environ 50 000 étudiants (l'une des plus fortes concentrations estudiantines de France en proportion), un tissu de services et d'administrations et des ménages locataires nombreux. La rotation locative est élevée dans les quartiers étudiants.",
    },
    offre: {
      description:
        "L'offre en garages et boxes est bien présente dans les copropriétés. Les acteurs du self-storage sont peu présents dans l'agglomération.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 45 € et 100 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Distinguer les dynamiques entre Nancy-centre et les communes périphériques de la métropole",
      "Analyser la saisonnalité de la demande liée au calendrier universitaire",
      "Vérifier l'état des copropriétés dans les grands ensembles des années 1960-1980",
      "Tenir compte de la concurrence avec Metz (45 km) dans un marché lorrain interconnecté",
    ],
    zoneLimitrophe: ["Laxou", "Vandœuvre-lès-Nancy", "Essey-lès-Nancy", "Villers-lès-Nancy", "Maxéville"],
  },
  {
    slug: "besancon",
    nom: "Besançon",
    departement: "Doubs (25)",
    region: "Bourgogne-Franche-Comté",
    population: "~115 000 hab. (ville), ~180 000 (agglomération)",
    metaTitle: "Marché des espaces de stockage à Besançon — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Besançon et dans l'agglomération bisontine : demande, offre, prix observés, points de vigilance.",
    intro:
      "Besançon est la préfecture du Doubs, ville universitaire frontalière de la Suisse. Sa position géographique particulière (boucle du Doubs, forteresse Vauban) et sa proximité avec la Suisse influencent ses dynamiques résidentielles et sa demande de stockage.",
    contexteUrbanistique:
      "Besançon est construite dans un méandre du Doubs, ce qui contraint son développement spatial. Le centre-ville historique est dense, les quartiers périphériques (Planoise, Clairs-Soleils, Palente) concentrent une part importante du parc locatif.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est portée par environ 25 000 étudiants (Université de Franche-Comté), des travailleurs frontaliers avec la Suisse voisine, et un tissu industriel horloger en reconversion. La demande est régulière sans être sous forte tension.",
    },
    offre: {
      description:
        "L'offre en garages est présente dans les copropriétés des quartiers résidentiels. Le self-storage est peu ou pas développé dans l'agglomération.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 40 € et 90 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Vérifier les risques inondation (Doubs) qui concernent certains secteurs bas de la ville",
      "Analyser la demande par quartier (centre historique vs grands ensembles périphériques)",
      "Tenir compte de la géographie contrainte pour l'accessibilité des biens",
      "Évaluer la stabilité de la demande frontalière dans un contexte économique suisse variable",
    ],
    zoneLimitrophe: ["Thise", "Ecole-Valentin", "Beure", "Chalezeule", "Marchaux"],
  },

  // ── Autres grandes et moyennes villes ─────────────────────────────────────
  {
    slug: "toulon",
    nom: "Toulon",
    departement: "Var (83)",
    region: "Provence-Alpes-Côte d'Azur",
    population: "~175 000 hab. (ville), ~640 000 (métropole)",
    metaTitle: "Marché des espaces de stockage à Toulon — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Toulon et dans la métropole varoise : demande, offre, prix observés, points de vigilance.",
    intro:
      "Toulon est la troisième ville de Provence, port militaire et préfecture du Var. Son marché résidentiel est modérément tendu, influencé par la présence de la Marine nationale, le tourisme littoral et une économie de services active.",
    contexteUrbanistique:
      "Le centre-ville de Toulon est dense, avec un parc locatif résidentiel important dans les quartiers centraux (Mourillon, Cap Brun, La Rode). La géographie contraint l'étalement urbain entre mer et collines, maintenant une pression locative sur les secteurs bien situés.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est portée par le personnel militaire et civil de la Marine, une population résidente dense et des actifs en mobilité. Le tourisme estival génère également des besoins de stockage saisonniers. La demande est régulière mais plus hétérogène selon les secteurs que sur Nice ou Marseille.",
    },
    offre: {
      description:
        "L'offre en garages et boxes est présente dans les copropriétés. Quelques acteurs du self-storage sont implantés dans l'agglomération, notamment en périphérie.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 55 € et 140 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Analyser la demande par secteur : le centre-ville et le Mourillon présentent des dynamiques plus favorables",
      "Tenir compte des risques liés à la proximité de la mer (humidité, sel) pour les biens en sous-sol",
      "Vérifier les charges de copropriété dans les immeubles de résidence balnéaire",
      "Évaluer la liquidité en dehors des secteurs touristiques recherchés",
    ],
    zoneLimitrophe: ["La Seyne-sur-Mer", "Hyères", "La Garde", "Ollioules", "Six-Fours-les-Plages"],
  },
  {
    slug: "nimes",
    nom: "Nîmes",
    departement: "Gard (30)",
    region: "Occitanie",
    population: "~150 000 hab. (ville), ~260 000 (agglomération)",
    metaTitle: "Marché des espaces de stockage à Nîmes — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Nîmes et dans l'agglomération nîmoise : demande, offre, prix observés, points de vigilance.",
    intro:
      "Nîmes est une ville méditerranéenne à l'identité marquée, préfecture du Gard, sur l'axe Paris-Montpellier-Barcelone. Son marché immobilier est accessible avec des prix modérés, mais présente des disparités significatives selon les quartiers.",
    contexteUrbanistique:
      "Le centre historique de Nîmes (autour des Arènes) est dense et locatif. Les quartiers périphériques présentent des profils très variés. La ville est traversée par un axe TGV important et bénéficie d'une connexion à Montpellier qui influence les dynamiques résidentielles.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est portée par une population locataire résidente, un tissu d'artisans et de commerçants actif, et une demande saisonnière liée au tourisme (Arènes, Férias). La demande est présente mais hétérogène selon les secteurs.",
    },
    offre: {
      description:
        "L'offre en garages est présente dans les copropriétés de la ville et de la première couronne. Les acteurs du self-storage sont peu développés dans l'agglomération.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 40 € et 100 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Analyser finement la demande par quartier — les disparités sont marquées",
      "Vérifier les risques inondation (épisodes cévenols fréquents dans le secteur)",
      "Tenir compte de la saisonnalité touristique dans l'évaluation de la demande",
      "Évaluer la cohérence loyers / prix dans un marché aux prix modérés",
    ],
    zoneLimitrophe: ["Marguerittes", "Caissargues", "Milhaud", "Saint-Gilles", "Caveirac"],
  },
  {
    slug: "saint-etienne",
    nom: "Saint-Étienne",
    departement: "Loire (42)",
    region: "Auvergne-Rhône-Alpes",
    population: "~170 000 hab. (ville), ~510 000 (métropole)",
    metaTitle: "Marché des espaces de stockage à Saint-Étienne — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Saint-Étienne et dans la métropole stéphanoise : demande, offre, prix observés, points de vigilance.",
    intro:
      "Saint-Étienne est une ancienne ville industrielle (mines, armes, cycles) en reconversion économique et culturelle. Son marché immobilier est parmi les plus accessibles de France, avec des prix d'acquisition très bas — mais une demande locative fragilisée par une démographie déclinante.",
    contexteUrbanistique:
      "Saint-Étienne souffre d'une perte de population depuis plusieurs décennies, avec un taux de vacance résidentielle élevé dans certains quartiers. Les secteurs les plus dynamiques sont le centre rénové, le quartier Manufacture et Bellevue. Les prix au m² sont parmi les plus bas des grandes villes françaises.",
    demande: {
      niveau: "faible",
      description:
        "La demande locative pour les espaces de stockage est structurellement plus faible qu'ailleurs en raison du déclin démographique et de l'abondance de l'offre résidentielle avec annexes. La prudence s'impose avant tout investissement, en particulier sur les secteurs en dépeuplement.",
    },
    offre: {
      description:
        "L'offre en garages est abondante, ce qui pèse sur les loyers. Les acteurs du self-storage sont peu présents dans l'agglomération. L'offre dépasse souvent la demande dans certains secteurs.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 25 € et 70 € / mois selon la localisation",
      note: "Les prix observés à Saint-Étienne sont parmi les plus bas de France. Ces données sont indicatives.",
    },
    pointsVigilance: [
      "La demande structurellement faible impose une analyse terrain approfondie avant tout achat",
      "Vérifier le taux de vacance réel du secteur — le risque de vacance prolongée est réel",
      "Évaluer soigneusement la liquidité à la revente dans un marché peu dynamique",
      "Tenir compte de la démographie déclinante qui pèse sur la demande à long terme",
    ],
    zoneLimitrophe: ["Firminy", "Saint-Jean-Bonnefonds", "Roche-la-Molière", "Saint-Chamond", "Andrézieux-Bouthéon"],
  },
  {
    slug: "le-havre",
    nom: "Le Havre",
    departement: "Seine-Maritime (76)",
    region: "Normandie",
    population: "~170 000 hab. (ville), ~250 000 (agglomération)",
    metaTitle: "Marché des espaces de stockage au Havre — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage au Havre et dans l'agglomération havraise : demande, offre, prix observés, points de vigilance.",
    intro:
      "Le Havre est le deuxième port de France, ville reconstruite par Auguste Perret après-guerre (patrimoine UNESCO), avec un tissu économique lié à la logistique, l'industrie portuaire et les services. Son marché de stockage présente une demande portée par des ménages locataires et un tissu de PME/artisans actif.",
    contexteUrbanistique:
      "Le Havre a été entièrement reconstruite après 1945, ce qui lui donne une structure urbaine cohérente et un parc de copropriétés relativement homogène des années 1950-1970. Le centre reconstruit et les quartiers proches du port concentrent l'essentiel de la population locataire.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est portée par une population ouvrière et tertiaire locataire, un tissu d'artisans et de transporteurs lié au port, et une population étudiante en développement (Université Le Havre Normandie). La demande est régulière et stable.",
    },
    offre: {
      description:
        "L'offre en garages est présente dans les copropriétés de l'architecture Perret. Les acteurs du self-storage sont peu développés dans l'agglomération.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 40 € et 90 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Analyser l'état du bâti Perret (béton des années 50, entretien variable selon les copropriétés)",
      "Vérifier les risques liés à la proximité de la mer (humidité, corrosion) pour les biens exposés",
      "Tenir compte de l'exposition aux risques industriels liés au port",
      "Évaluer la demande réelle par quartier dans une ville à l'économie dépendante du port",
    ],
    zoneLimitrophe: ["Gonfreville-l'Orcher", "Harfleur", "Montivilliers", "Sainte-Adresse", "Caucriauville"],
  },
  {
    slug: "aix-en-provence",
    nom: "Aix-en-Provence",
    departement: "Bouches-du-Rhône (13)",
    region: "Provence-Alpes-Côte d'Azur",
    population: "~145 000 hab. (ville), ~400 000 (agglomération)",
    metaTitle: "Marché des espaces de stockage à Aix-en-Provence — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Aix-en-Provence et dans la métropole Aix-Marseille-Provence : demande, offre, prix observés, points de vigilance.",
    intro:
      "Aix-en-Provence est une ville universitaire et culturelle de premier plan, intégrée à la métropole Aix-Marseille-Provence. Son marché immobilier est tendu, avec des prix d'acquisition élevés et une demande locative portée par une forte population étudiante et des ménages aisés.",
    contexteUrbanistique:
      "Aix-en-Provence dispose d'un centre historique très valorisé, avec un marché immobilier résidentiel parmi les plus chers de la région. Les communes limitrophes (Pertuis, Meyreuil, Vitrolles) offrent des alternatives moins onéreuses. La connexion à Marseille via l'autoroute A51 influence les dynamiques résidentielles.",
    demande: {
      niveau: "forte",
      description:
        "La demande est soutenue par une population étudiante importante (environ 40 000 étudiants à l'Université Aix-Marseille), des cadres et professions libérales en forte proportion, et une rotation locative élevée dans les quartiers centraux. La pression locative est structurellement forte.",
    },
    offre: {
      description:
        "L'offre en garages et boxes est contrainte par la densité urbaine. Les acteurs du self-storage sont présents dans l'agglomération, notamment en périphérie. Les prix d'acquisition des garages sont significativement plus élevés qu'en province.",
      concurrenceSelfStorage: "moderee",
    },
    prixObserves: {
      fourchette: "Entre 70 € et 180 € / mois selon la localisation",
      note: "Aix-en-Provence fait partie des marchés où les prix sont structurellement élevés. Ces données sont indicatives.",
    },
    pointsVigilance: [
      "Tenir compte des prix d'acquisition très élevés qui peuvent comprimer le rendement net",
      "Analyser la cohérence entre les prix de marché et le loyer accessible",
      "Vérifier les charges de copropriété, souvent élevées dans les immeubles du centre-ville",
      "Évaluer la concurrence des acteurs self-storage bien implantés dans l'agglomération",
    ],
    zoneLimitrophe: ["Pertuis", "Meyreuil", "Vitrolles", "Bouc-Bel-Air", "Gardanne"],
  },
  {
    slug: "valenciennes",
    nom: "Valenciennes",
    departement: "Nord (59)",
    region: "Hauts-de-France",
    population: "~44 000 hab. (ville), ~360 000 (agglomération)",
    metaTitle: "Marché des espaces de stockage à Valenciennes — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Valenciennes et dans l'agglomération valenciennoise : demande, offre, prix observés, points de vigilance.",
    intro:
      "Valenciennes est une ville industrielle du Nord, en reconversion économique autour de l'automobile et des transports ferroviaires (Alstom). Son marché de stockage est de taille modeste, avec des prix d'acquisition accessibles et une demande portée par un tissu ouvrier et de PME locales.",
    contexteUrbanistique:
      "L'agglomération valenciennoise regroupe plusieurs communes autour de la ville-centre (Anzin, Saint-Amand-les-Eaux, Denain). Le parc immobilier est composé d'immeubles des années 1960-1980 et de logements individuels en périphérie.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est portée par des ménages locataires, un tissu d'artisans et de PME industrielles, et des étudiants de l'Université Polytechnique Hauts-de-France. La demande est stable mais peu profonde dans ce bassin industriel.",
    },
    offre: {
      description:
        "L'offre en garages est présente dans les copropriétés et maisons de ville. Les acteurs du self-storage sont peu ou pas présents dans l'agglomération.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 30 € et 75 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Analyser soigneusement la profondeur du marché avant acquisition",
      "Tenir compte des fragilités économiques de certains quartiers dans l'évaluation de la demande",
      "Évaluer la liquidité à la revente dans un marché aux acheteurs peu nombreux",
      "Vérifier l'état du bâti dans les immeubles ouvriers anciens",
    ],
    zoneLimitrophe: ["Anzin", "Denain", "Saint-Amand-les-Eaux", "Condé-sur-l'Escaut", "Marly"],
  },
  {
    slug: "mulhouse",
    nom: "Mulhouse",
    departement: "Haut-Rhin (68)",
    region: "Grand Est",
    population: "~110 000 hab. (ville), ~280 000 (agglomération)",
    metaTitle: "Marché des espaces de stockage à Mulhouse — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Mulhouse et dans l'agglomération mulhousienne : demande, offre, prix observés, points de vigilance.",
    intro:
      "Mulhouse est une ville industrielle alsacienne, frontalière de l'Allemagne et de la Suisse, avec un tissu économique diversifié. Sa position transfrontalière génère une demande spécifique portée par des travailleurs frontaliers et une mobilité résidentielle particulière.",
    contexteUrbanistique:
      "Mulhouse présente un parc immobilier varié, avec des quartiers ouvriers anciens et des zones résidentielles en périphérie. La proximité de Bâle (Suisse) à 30 km influe sur les dynamiques de population, certains résidents travaillant en Suisse ou en Allemagne.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est portée par des ménages locataires, des travailleurs frontaliers suisses et allemands, et un tissu d'entreprises industrielles locales. La demande est régulière mais hétérogène selon les secteurs.",
    },
    offre: {
      description:
        "L'offre en garages est présente dans les copropriétés. Les acteurs du self-storage sont peu développés dans l'agglomération.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 40 € et 90 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Distinguer les quartiers en croissance (liés à la demande frontalière) des secteurs en déclin",
      "Analyser l'impact des cycles économiques transfrontaliers sur la demande résidentielle",
      "Vérifier l'état du bâti dans les quartiers industriels anciens",
      "Évaluer la cohérence prix / loyer dans ce marché intermédiaire",
    ],
    zoneLimitrophe: ["Illzach", "Wittenheim", "Kingersheim", "Riedisheim", "Pfastatt"],
  },
  {
    slug: "troyes",
    nom: "Troyes",
    departement: "Aube (10)",
    region: "Grand Est",
    population: "~60 000 hab. (ville), ~130 000 (agglomération)",
    metaTitle: "Marché des espaces de stockage à Troyes — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Troyes et dans l'agglomération troyenne : demande, offre, prix observés, points de vigilance.",
    intro:
      "Troyes est une ville médiévale de l'Aube, connue pour ses outlets de mode et son patrimoine à colombages. Son marché immobilier est accessible, avec des prix parmi les plus bas des préfectures françaises, et une demande de stockage portée par un tissu de PME textiles et de services.",
    contexteUrbanistique:
      "Troyes dispose d'un centre historique remarquablement préservé et d'une ceinture résidentielle en périphérie. La ville attire des commerçants et des entrepreneurs liés aux marques d'outlet, ce qui génère une demande de stockage spécifique.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est portée par des ménages locataires en centre-ville, un tissu de PME et de commerçants liés aux outlets, et des artisans locaux. La demande est stable mais le marché est de petite taille.",
    },
    offre: {
      description:
        "L'offre en garages est présente. Les acteurs du self-storage sont peu ou pas présents dans l'agglomération.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 30 € et 70 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement.",
    },
    pointsVigilance: [
      "Évaluer la profondeur réelle du marché avant acquisition",
      "Vérifier les risques inondation dans certains secteurs bas de la ville",
      "Analyser la cohérence loyers / prix d'acquisition dans ce marché accessible",
      "Tenir compte de la petite taille de l'agglomération pour l'évaluation de la liquidité",
    ],
    zoneLimitrophe: ["Saint-André-les-Vergers", "La Chapelle-Saint-Luc", "Sainte-Savine", "Pont-Sainte-Marie"],
  },
  {
    slug: "quimper",
    nom: "Quimper",
    departement: "Finistère (29)",
    region: "Bretagne",
    population: "~63 000 hab. (ville), ~110 000 (agglomération)",
    metaTitle: "Marché des espaces de stockage à Quimper — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Quimper et dans l'agglomération quimpéroise : demande, offre, prix observés, points de vigilance.",
    intro:
      "Quimper est la préfecture du Finistère, ville d'art et d'histoire en Bretagne méridionale. Son marché immobilier est accessible, avec une demande de stockage portée par une économie de services et un tourisme actif en saison.",
    contexteUrbanistique:
      "Quimper dispose d'un centre historique préservé et d'une périphérie résidentielle. Le marché locatif est peu tendu en dehors des quartiers centraux et des périodes touristiques estivales.",
    demande: {
      niveau: "moderee",
      description:
        "La demande est portée par des ménages locataires, un tissu d'artisans et de commerçants, et une demande touristique saisonnière. Le marché est de petite taille et peu profond.",
    },
    offre: {
      description:
        "L'offre en garages est présente dans les copropriétés. Les acteurs du self-storage sont absents ou très marginaux dans l'agglomération.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 30 € et 70 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement. Le marché est peu fourni en annonces.",
    },
    pointsVigilance: [
      "Analyser la profondeur du marché avant acquisition dans une agglomération de petite taille",
      "Tenir compte de l'isolement géographique de la pointe bretonne pour la liquidité",
      "Vérifier les risques météorologiques (humidité, tempêtes) pour les biens en rez-de-chaussée",
      "Évaluer la stabilité de la demande hors saison touristique",
    ],
    zoneLimitrophe: ["Ergué-Gabéric", "Pluguffan", "Plomelin", "Gouesnach", "Kerfeunteun"],
  },
  {
    slug: "bourges",
    nom: "Bourges",
    departement: "Cher (18)",
    region: "Centre-Val de Loire",
    population: "~65 000 hab. (ville), ~110 000 (agglomération)",
    metaTitle: "Marché des espaces de stockage à Bourges — garages, boxes, self-storage",
    metaDescription:
      "Analyse du marché locatif des garages et espaces de stockage à Bourges et dans l'agglomération berruyer : demande, offre, prix observés, points de vigilance.",
    intro:
      "Bourges est une ville d'art et d'histoire, préfecture du Cher, avec une économie mixant industrie de défense (PyroAlliance), services et commerce. Son marché immobilier est accessible, avec une demande de stockage limitée portée par des ménages locataires stables.",
    contexteUrbanistique:
      "Bourges dispose d'un centre historique dense autour de la cathédrale Saint-Étienne et d'une périphérie résidentielle. La ville est en légère décroissance démographique, ce qui pèse sur la dynamique du marché locatif.",
    demande: {
      niveau: "faible",
      description:
        "La demande est limitée par la taille modeste de l'agglomération et une démographie peu dynamique. Elle est portée par des ménages locataires stables et un tissu de PME locales. Une analyse terrain approfondie est indispensable avant tout investissement.",
    },
    offre: {
      description:
        "L'offre en garages est présente et peut dépasser la demande dans certains secteurs. Les acteurs du self-storage sont absents dans l'agglomération.",
      concurrenceSelfStorage: "limitee",
    },
    prixObserves: {
      fourchette: "Entre 25 € et 65 € / mois selon la localisation",
      note: "Prix observés sur annonces, indicatifs uniquement. Le marché est peu actif.",
    },
    pointsVigilance: [
      "La faible dynamique démographique impose une grande prudence avant acquisition",
      "Vérifier le taux de vacance réel du secteur cible",
      "Évaluer soigneusement la liquidité à la revente dans un marché peu actif",
      "Analyser l'adéquation entre le profil du bien et la demande locale réelle",
    ],
    zoneLimitrophe: ["Saint-Doulchard", "Bourges-Est", "Mehun-sur-Yèvre", "Vierzon"],
  },
];

export function getVilleBySlug(slug: string): Ville | undefined {
  return villes.find((v) => v.slug === slug);
}
