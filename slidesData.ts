import { SlideData } from './types';

const THEME_IMAGES = {
  JT_PORTRAIT: 'https://i.postimg.cc/85zK6L3R/JT-Portrait.jpg',
  JT_CHILL: 'https://storage.googleapis.com/msgsndr/V6O5PUGvOCgJ5Ja3Lp95/media/694ab2be1dea105a2d8b582f.jpg',
  JT_TEAM: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
  DC_CAPITOL: 'https://images.unsplash.com/photo-1501466044931-62695aada8e9?q=80&w=1974&auto=format&fit=crop',
  MODERN_HOUSE: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
  CONSTRUCTION_SITE: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=1974&auto=format&fit=crop',
  BEFORE_AFTER: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop',
  FINANCE_BARCLAYS: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
  DATA_CHART: 'https://images.unsplash.com/photo-1551288049-bbbda5366391?q=80&w=2070&auto=format&fit=crop',
  CAR_AUDI: 'https://images.unsplash.com/photo-1603584173870-7f3ca99a941e?q=80&w=2069&auto=format&fit=crop',
  QR_CODE: 'https://storage.googleapis.com/msgsndr/V6O5PUGvOCgJ5Ja3Lp95/media/694ab1092dd46f333d328b6c.png'
};

export const slidesData: SlideData[] = [
  {
    id: 1,
    type: 'title',
    title: 'LE SYSTÈME FIX & FLIP US™',
    subtitle: 'Comment générer des profits de 50 000 $ à 100 000 $ par opération immobilier... Sans vivre aux USA et sans y mettre les pieds.',
    content: 'La méthode exacte utilisée par un ex-banquier pour passer de 0 à 20 flips par an.',
    visual: THEME_IMAGES.MODERN_HOUSE
  },
  {
    id: 2,
    type: 'content',
    title: "Ce n'est PAS pour tout le monde",
    icon: 'attention',
    content: [
      "Ce n'est PAS pour ceux qui cherchent de l'argent magique sans travail.",
      "Ce n'est PAS pour ceux qui ont peur des chiffres.",
      "C'est pour les investisseurs sérieux qui veulent ajouter un zéro à leur patrimoine."
    ],
    visual: undefined
  },
  {
    id: 3,
    type: 'content',
    title: 'Dans les 60 prochaines minutes, vous allez découvrir :',
    content: [
      "Pourquoi l'immobilier européen/canadien est trop lent (La 'Ligue 2').",
      "Comment accéder aux données cachées pour trouver des deals à -50% du marché.",
      "Comment financer 100% de l'achat et des travaux avec l'argent des autres (OPM)."
    ],
    visual: "https://storage.googleapis.com/msgsndr/V6O5PUGvOCgJ5Ja3Lp95/media/694abb0c2dd46f59a433f11c.jpg",
    visualDescription: '60 minutes'
  },
  {
    id: 4,
    type: 'story',
    title: 'Beaucoup pensent qu\'il faut être riche...',
    content: 'La vérité ? J\'ai commencé en étant viré de ma banque, et j\'ai financé mes débuts en revendant une voiture à crédit. Aujourd\'hui, je ne paie même plus de loyer aux USA grâce à mes flips.',
    visual: THEME_IMAGES.JT_CHILL,
    // script: 'JT : "J\'ai commencé en étant viré, aujourd\'hui je ne paie plus de loyer."'
  },
  {
    id: 5,
    section: "L'HISTOIRE DE JT MUGABO",
    type: 'story',
    title: 'Qui est JT Mugabo ?',
    content: [
      "Né au Rwanda, grandi en banlieue parisienne.",
      "7 pays traversés.",
      "De la 'Cité' à la Banque d'Investissement (Barclays)."
    ],
    visual: 'https://storage.googleapis.com/msgsndr/V6O5PUGvOCgJ5Ja3Lp95/media/694ab8b58f8aae2126088d62.jpg'
  },
  {
    id: 6,
    type: 'story',
    title: '"Je gérais des milliards... pour les autres."',
    content: "Je valorisais des produits dérivés complexes. Je gagnais bien ma vie (6 000 €/mois), mais j'étais un esclave de luxe. Je savais que je n'étais pas libre.",
    visual: THEME_IMAGES.FINANCE_BARCLAYS,
    // script: 'JT : "Esclave de luxe. Climatisation, clavier, pression."'
  },
  {
    id: 7,
    type: 'story',
    title: 'Mes débuts en Europe',
    content: [
      "1er appart : 100% financé par la banque.",
      "Travaux réalisés le soir avec des potes et des bières.",
      "Résultat : J'ai compris que la 'dette' était mon meilleur ami."
    ],
    visual: undefined
  },
  {
    id: 8,
    type: 'story',
    title: '"Viré pour avoir investi."',
    content: "La banque a su que je faisais de l'immo à côté. Ils m'ont viré en 5 minutes. C'était la meilleure chose qui pouvait m'arriver. J'ai négocié mon départ et j'ai tout réinvesti.",
    visual: undefined
  },
  {
    id: 9,
    type: 'story',
    title: 'Comment j\'ai trouvé 24 000 €',
    content: "J'ai acheté une voiture à crédit, je l'ai revendue cash plus cher le lendemain. J'avais mon apport. C'est ça, l'état d'esprit 'Débrouillard'.",
    visual: "https://storage.googleapis.com/msgsndr/V6O5PUGvOCgJ5Ja3Lp95/media/694abd65147f511e58d73dc6.jpg",
    // script: 'JT : "L\'état d\'esprit débrouillard quand les banques disent non."'
  },
  {
    id: 10,
    type: 'comparison',
    title: 'Le Plafond de Verre Européen',
    content: [
      "EUROPE : Une tortue (Notaires, délais, taxes).",
      "USA : Une fusée (Vitesse, transparence, closing en 15 jours)."
    ],
    visual: undefined,
    subtitle: 'Je voulais ajouter un ZÉRO à mon patrimoine.'
  },
  {
    id: 11,
    type: 'story',
    title: 'L\'arrivée à Washington DC',
    content: [
      "Arrivé avec un visa investisseur.",
      "Objectif : Repartir de zéro dans la cour des grands.",
      "52 événements de networking en 1 an."
    ],
    visual: THEME_IMAGES.DC_CAPITOL
  },
  {
    id: 12,
    type: 'story',
    title: '"Bienvenue au Far West"',
    content: [
      "Entrepreneurs qui disparaissent avec la caisse.",
      "Dénoncé par les voisins.",
      "Stop Work Order de la mairie."
    ],
    visual: undefined
  },
  {
    id: 13,
    type: 'story',
    title: 'Construire une MACHINE',
    content: "J'ai compris que je ne pouvais pas tout faire. J'ai créé ma propre société de construction. Aujourd'hui, je ne visite même plus les chantiers.",
    visual: undefined
  },
  {
    id: 14,
    type: 'results',
    title: 'Les Résultats Aujourd\'hui',
    content: [
      "63+ Propriétés Rénovées.",
      "20+ Flips par an.",
      "Marge : 50k$ - 100k$ par deal.",
      "Temps de détention : 6 mois."
    ],
    visual: "https://storage.googleapis.com/msgsndr/V6O5PUGvOCgJ5Ja3Lp95/media/694ac2a4264de642b7ba026b.png"
  },
  {
    id: 15,
    type: 'content',
    title: '"J\'ai mis 10 ans à comprendre ça."',
    content: "Vous pouvez le faire en 12 mois. Je cherche des partenaires pour aller plus vite. C'est pour ça que vous êtes là.",
    visual: "https://storage.googleapis.com/msgsndr/V6O5PUGvOCgJ5Ja3Lp95/media/694ac3dd21432b77a0893049.png",
    // script: 'JT : "L\'émotion tue le deal. La distance vous protège."'
  },
  {
    id: 16,
    section: "CONTEXTE & CROYANCES",
    type: 'myth',
    title: "Mythe #1 : 'C'est trop risqué / Je suis trop loin'",
    content: "La distance est un atout, pas un frein. L'émotion tue le deal. La distance vous protège de l'émotion.",
    visual: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 17,
    type: 'content',
    title: "Mythe #2 : 'Il faut être résident US'",
    content: "Faux. L'argent n'a pas de passeport. Les LLC peuvent être détenues par des étrangers. Les prêteurs regardent le DEAL.",
    visual: 'https://storage.googleapis.com/msgsndr/V6O5PUGvOCgJ5Ja3Lp95/media/694ac613aaebe8d10bff3f7f.png'
  },
  {
    id: 18,
    type: 'content',
    title: "Aux USA, tout est public",
    content: [
      "Divorce, dettes, saisies : Public.",
      "On sait qui DOIT vendre avant même l'annonce.",
      "Une mine d'or de données inexploitée."
    ],
    visual: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 19,
    type: 'content',
    title: "Pourquoi Washington D.C. ?",
    content: [
      "Siège du gouvernement (Salaires garantis).",
      "Capitale mondiale d'Internet (Data Centers).",
      "Marché ultra-résilient face aux crises."
    ],
    visual: "https://storage.googleapis.com/msgsndr/V6O5PUGvOCgJ5Ja3Lp95/media/694ac7f08f8aae3b880a8b09.jpg"
  },
  {
    id: 20,
    type: 'title',
    title: 'LE "USA FIX & FLIP OPERATING SYSTEM™"',
    // subtitle: 'Les 3 Piliers pour réussir.',
    content: 'Les 3 Piliers pour réussir.',
    visual: THEME_IMAGES.MODERN_HOUSE
  },
  {
    id: 21,
    section: "PILIER 1 : LE SOURCING",
    type: 'pillar',
    title: 'SECRET #1 : Le Sourcing Chirurgical',
    content: 'Acheter avec 50 000 $ de rabais immédiat.',
    visual: "https://storage.googleapis.com/msgsndr/V6O5PUGvOCgJ5Ja3Lp95/media/694acdcd2442e0dc83e3dd9a.png"
  },
  {
    id: 22,
    type: 'content',
    title: 'Le problème du marché classique',
    content: "Si c'est sur internet (Zillow), c'est déjà trop cher. 99% des investisseurs se battent pour les miettes. On contacte le vendeur AVANT.",
    visual: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop'
  },
  {
    id: 23,
    type: 'content',
    title: 'La Mine d\'Or des "Public Records"',
    content: [
      "Death (Succession).",
      "Divorce.",
      "Debt (Dettes/Saisie).",
      "Disrepair (Maison en ruine)."
    ],
    visual: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 24,
    type: 'content',
    title: 'Étude de cas : Brunhilda',
    content: [
      "Achat : 230k$.",
      "ARV (Valeur de revente) : 470k$.",
      "Mise de fonds : 0% Down Payment (Juste les frais de closing ~11k$)."
    ],
    visual: 'https://storage.googleapis.com/msgsndr/V6O5PUGvOCgJ5Ja3Lp95/media/694aced97d382accd223842c.png',
    visualDescription: 'BRUNHILDA SUCCESS STORY',
    // video: 'https://storage.googleapis.com/msgsndr/V6O5PUGvOCgJ5Ja3Lp95/media/694acb6a21432bf4ea8a5c90.mp4'
  },
  {
    id: 25,
    section: "PILIER 2 : LE FINANCEMENT",
    type: 'pillar',
    title: 'SECRET #2 : Le Financement Créatif (OPM)',
    content: "Utiliser l'argent des autres pour finance 100% du projet.",
    visual: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop'
  },
  {
    id: 26,
    type: 'content',
    title: '"Je n\'ai pas 200.000 $ qui dorment"',
    content: "Vous n'en avez pas besoin. Aux USA, on finance le DEAL, pas l'emprunteur. Si le deal est bon, l'argent coule.",
    visual: 'https://storage.googleapis.com/msgsndr/V6O5PUGvOCgJ5Ja3Lp95/media/694accf3147f51ff6fd9738c.jpg'
  },
  {
    id: 27,
    type: 'content',
    title: 'Hard Money & Private Money',
    content: "Levier maximum.",
    visual: undefined
  },
  {
    id: 28,
    type: 'results',
    title: 'Preuve Vidéo (Brunhilda)',
    content: [
      "Achat : 230k$.",
      "ARV (Valeur de revente) : 470k$.",
      "Mise de fonds : 0% Down Payment (Juste les frais de closing ~11k$)."
    ],
    visual: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop',
    // visualDescription: 'INSTAGRAM REEL : BRUNHILDA SUCCESS STORY',
    video: 'https://storage.googleapis.com/msgsndr/V6O5PUGvOCgJ5Ja3Lp95/media/694acb6a21432bf4ea8a5c90.mp4'
  },
  {
    id: 29,
    section: "PILIER 3 : L'EXÉCUTION (RÉNOVATION À DISTANCE)",
    type: 'pillar',
    title: 'SECRET #3 : La Rénovation Industrielle',
    subtitle: '(Sans toucher un marteau)',
    content: 'Gérer à distance avec précision industrielle. Système de contrôle par caméras et équipes certifiées.',
    visual: undefined
  },
  {
    id: 30,
    type: 'content',
    title: "L'erreur : Gérer le chantier \nsoi-même via WhatsApp",
    content: "Gérer soi-même à 6000km est un suicide financier. Entrepreneurs qui dorment, budgets qui explosent.",
    icon: 'attention',
    visual: undefined
  },
  {
    id: 31,
    type: 'content',
    title: 'La Solution "JT Construction"',
    content: [
      "Cahier des charges standardisé.",
      "Rapports hebdomadaires photo/vidéo.",
      "Paiement à l'avancement (Draws)."
    ],
    visual: undefined
  },
  {
    id: 32,
    type: 'comparison',
    title: 'Le Résultat (Avant/Après)',
    content: "Transformation en 90 jours chrono.",
    visual: 'https://storage.googleapis.com/msgsndr/V6O5PUGvOCgJ5Ja3Lp95/media/694acff7147f51fe6ad9d355.jpg | https://storage.googleapis.com/msgsndr/V6O5PUGvOCgJ5Ja3Lp95/media/694acff7d57350086fe74869.jpg',
    visualDescription: 'Avant: Cuisine vétuste | Après: Design moderne & Staging'
  },
  {
    id: 33,
    type: 'content',
    title: 'Maintenant, vous avez 2 choix.',
    content: "Continuer comme avant ou changer de paradigme.",
    visual: undefined
  },
  {
    id: 34,
    type: 'comparison',
    title: 'Choix 1 : La méthode difficile',
    content: [
      "Tout faire seul.",
      "Trouver les listes (coûteux).",
      "Risques d'arnaques élevés.",
      "Apprendre la fiscalité US seul."
    ],
    visual: undefined
  },
  {
    id: 35,
    type: 'comparison',
    title: 'Choix 2 : L\'autoroute',
    content: [
      "Copier-Coller mon système.",
      "Utiliser mon équipe & mes contrats.",
      "Utiliser mon réseau de prêteurs."
    ],
    visual: undefined
  },
  {
    id: 36,
    section: "L'OFFRE",
    type: 'offer',
    title: 'LE FIX & FLIP CLUB',
    subtitle: "Ce n'est pas une formation. C'est un CLUB D'AFFAIRES.",
    content: "Je cherche des partenaires, pas des élèves. Pour scaler ensemble sur le marché US.",
    visual: undefined
  },
  {
    id: 37,
    type: 'offer',
    title: 'Pilier #1 - La Connaissance',
    content: [
      "L'accès complet à notre savoir-faire.",
      "Comprendre le marché US de A à Z.",
      "Les stratégies avancées (Fiscalité, Création LLC).",
      "Valeur : 6 000 $ (Ce que facturent les consultants)."
    ],
    visual: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 38,
    type: 'offer',
    title: 'Pilier #2 - Les Outils & Le Sourcing',
    content: [
      "Les armes pour ne jamais perdre d'argent.",
      "Le JT Deal Calculator™ (Rentabilité en 3 min).",
      "Nos méthodes de Sourcing Off-Market.",
      "Valeur : 2 000 $."
    ],
    visual: "https://storage.googleapis.com/msgsndr/V6O5PUGvOCgJ5Ja3Lp95/media/694ad1ef21432b9bc48b4243.jpg"
  },
  {
    id: 39,
    type: 'offer',
    title: 'Pilier #3 - L\'Exécution',
    content: [
      "Accès Prioritaire à nos équipes (Washington D.C.).",
      "Option 1 : Vous gérez avec nos contacts (Lenders, Contractors).",
      "Option 2 : CLÉ EN MAIN. Vous financez, nous exécutons tout de A à Z.",
      "Exclusivité Membres du Club uniquement."
    ],
    visual: THEME_IMAGES.JT_TEAM
  },
  {
    id: 40,
    type: 'offer',
    title: 'Pilier #4 - Sécurité Juridique',
    content: [
      "Le \"Kit Légal Blindé\".",
      "Contrats d'achat, contrats entrepreneurs, structures juridiques.",
      "Rédigé par nos avocats américains spécialisés.",
      "Valeur : 15 000 $ (Coût réel avocat)."
    ],
    visual: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 41,
    type: 'offer',
    title: 'Pilier #5 - Le Graal (Co-Investissement)',
    content: [
      "La Vision 10 Millions.",
      "Accès aux opportunités de Co-Investissement (Syndication).",
      "Chasser en meute sur des deals à 2M$, 5M$, 10M$.",
      "Valeur : INESTIMABLE."
    ],
    visual: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 42,
    type: 'results',
    title: 'Récapitulatif de la Valeur',
    content: [
      "Formation & Savoir : 6 000 $",
      "Outils & Calculateurs : 2 000 $",
      "Kit Légal & Structures : 15 000 $",
      "Accès Réseau : INESTIMABLE",
      "VALEUR TOTALE ACCESSIBLE : 45 000 $ +"
    ],
    visual: undefined
  },
  {
    id: 43,
    type: 'offer',
    title: "Le Prix de l'Adhésion",
    content: [
      "Adhésion Annuelle au Club.",
      "1 994 $ / AN",
      "Renouvelable pour ceux qui restent actifs."
    ],
    visual: undefined
  },
  {
    id: 44,
    type: 'content',
    title: 'GARANTIE : AUCUNE',
    content: [
      "Nous ne cherchons pas de touristes.",
      "La seule garantie, c'est votre travail et votre passage à l'action.",
      "Si vous avez besoin d'une garantie \"satisfait ou remboursé\" pour vous lancer, ce club n'est pas pour vous."
    ],
    icon: 'attention',
    visual: undefined
  },
  {
    id: 45,
    type: 'content',
    title: 'Le Processus de Sélection',
    content: [
      "Nous ne prenons pas tout le monde.",
      "Nous cherchons un 'Fit Humain'.",
      "Processus : Candidature -> Entretien -> Validation.",
      "Bâtir des relations long terme."
    ],
    visual: undefined
  },
  {
    id: 46,
    type: 'results',
    // title: 'Scarcity (Rareté réelle)',
    content: [
      "Ouverture de la CUVÉE 2025.",
      "Limité à 30 PARTENAIRES maximum.",
      "Pourquoi ? Pour garantir la qualité de l'accompagnement et la gestion des chantiers"
    ],
    visual: undefined
  },
  {
    id: 47,
    type: 'offer',
    title: 'Bonus 15 Premiers',
   content: [
      '"DEAL REVIEW" PERSONNELLE',
      "Je valide moi-même votre premier deal avant signature pour sécuriser votre investissement.",
    ],
    visual: undefined
  },
  {
    id: 48,
    type: 'cta',
    section: "POSTULEZ",
    title: 'POSTULEZ MAINTENANT',
    content: "Scannez ce code ou cliquez sur le lien. Réservez votre appel de candidature.",
    visual: THEME_IMAGES.QR_CODE
  },
  {
    id: 49,
    type: 'cta',
    title: 'Session de recrutement',
    subtitle: 'FIX & FLIP CLUB - 30 Places Max.',
    content: 'Adhésion : 1 994 $ / An.',
    visual: THEME_IMAGES.QR_CODE
  }
];