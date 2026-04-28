export type BlogArticle = {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  intent: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  hero: string;
  takeaways: string[];
  sections: Array<{
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
  relatedSlugs: string[];
};

export const blogSources = [
  {
    label: "Service-Public - Rapport de radiation d'office",
    href: "https://entreprendre.service-public.gouv.fr/vosdroits/F24023",
  },
  {
    label: "Service-Public - M2 personne morale",
    href: "https://entreprendre.service-public.gouv.fr/vosdroits/R66233",
  },
  {
    label: "Service-Public - P2 personne physique",
    href: "https://entreprendre.service-public.gouv.fr/vosdroits/R66234",
  },
  {
    label: "Légifrance - Code de commerce R123-130",
    href: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000026251191/",
  },
  {
    label: "Service-Public - Bénéficiaires effectifs",
    href: "https://entreprendre.service-public.gouv.fr/actualites/A18464",
  },
  {
    label: "Infogreffe - Juge commis à la surveillance du RCS",
    href: "https://www.infogreffe.fr/guide-des-formalites/fond--referes--requetes/saisir-le-president-du-tribunal/requete-au-juge-commis-a-la-surveillance-du-rcs",
  },
];

export const blogArticles: BlogArticle[] = [
  {
    slug: "societe-radiee-office-que-faire",
    title: "Société radiée d'office : les 7 réflexes à avoir avant qu'il soit trop tard",
    description:
      "Société radiée d'office : les actions immédiates pour comprendre le motif, éviter le mauvais formulaire et préparer un rapport de radiation solide.",
    keyword: "société radiée d'office que faire",
    intent: "Urgence dirigeant",
    category: "Urgence",
    publishedAt: "2026-04-28",
    readingTime: "7 min",
    hero:
      "Quand une société est radiée d'office, le vrai danger n'est pas seulement la mention au registre. Le danger, c'est de répondre trop vite avec la mauvaise démarche.",
    takeaways: [
      "Identifier le motif exact avant de déposer quoi que ce soit.",
      "Vérifier si le problème touche le RCS, le RNE ou les deux.",
      "Préparer les justificatifs avant le formulaire M2 ou la requête.",
      "Éviter les promesses de réactivation automatique : chaque dossier dépend de sa cause.",
    ],
    sections: [
      {
        heading: "Le piège : traiter la radiation comme une simple erreur",
        paragraphs: [
          "Une radiation d'office n'est pas toujours une erreur de greffe. Elle peut suivre une mise en sommeil trop longue, une adresse qui ne tient plus, une cessation d'activité non régularisée, ou une formalité devenue obligatoire. Avant de parler de levée de radiation d'office, il faut comprendre pourquoi la mention existe.",
          "Le premier réflexe consiste à récupérer l'extrait, la date de mention, le registre concerné et les courriers reçus. Sans cette base, le dossier part souvent dans la mauvaise direction : mauvais formulaire, mauvaise pièce, mauvaise juridiction.",
        ],
      },
      {
        heading: "Les 7 réflexes utiles",
        paragraphs: [
          "Le bon dossier n'est pas forcément le plus épais. C'est celui qui répond exactement au motif de radiation d'office.",
        ],
        bullets: [
          "Lire la mention de radiation d'office et sa date.",
          "Identifier si l'entreprise est une société, une EI ou une micro-entreprise.",
          "Contrôler RCS, RNE, Sirene et dernier Kbis disponible.",
          "Regrouper les courriers du greffe et les accusés de réception.",
          "Prouver la régularisation : siège, activité, bénéficiaires effectifs ou formalité.",
          "Choisir entre M2, P2 ou requête au juge commis.",
          "Déposer un dossier cohérent, pas une demande générique.",
        ],
      },
      {
        heading: "Pourquoi appeler avant de déposer peut faire gagner du temps",
        paragraphs: [
          "Le formulaire M2 peut être pertinent pour une société, le P2 pour une personne physique, et la requête au juge commis à la surveillance du RCS peut être nécessaire dans certains cas. Ces voies ne racontent pas la même histoire administrative.",
          "Un diagnostic rapide sert à éviter l'aller-retour classique : une demande de rapport de radiation d'office déposée sans prouver que la cause a disparu.",
        ],
      },
    ],
    faq: [
      {
        question: "Une société radiée d'office peut-elle encore agir ?",
        answer:
          "Dans plusieurs situations, oui, mais le dossier doit être qualifié vite. La radiation d'office est une mention administrative dont le traitement dépend du motif et des délais.",
      },
      {
        question: "Faut-il toujours utiliser le formulaire M2 ?",
        answer:
          "Non. Le M2 concerne les personnes morales. Une entreprise individuelle peut relever du P2, et certaines situations peuvent nécessiter une requête au juge commis.",
      },
    ],
    relatedSlugs: [
      "rapport-radiation-office-m2",
      "juge-commis-surveillance-rcs-radiation",
      "delai-levee-radiation-office",
    ],
  },
  {
    slug: "rapport-radiation-office-m2",
    title: "Formulaire M2 et radiation d'office : l'erreur qui bloque beaucoup de dossiers",
    description:
      "Comprendre quand utiliser le formulaire M2 pour demander le rapport d'une radiation d'office et quelles pièces éviter d'oublier.",
    keyword: "rapport radiation d'office M2",
    intent: "Démarche société",
    category: "Formulaire",
    publishedAt: "2026-04-28",
    readingTime: "6 min",
    hero:
      "Le M2 n'est pas un bouton magique. Pour un rapport de radiation d'office, il doit raconter une correction précise et prouvée.",
    takeaways: [
      "Le M2 vise les personnes morales : SAS, SASU, SARL, SCI immatriculées au RCS selon le cas.",
      "La case observation doit être claire sur la demande de rapport.",
      "Un justificatif postérieur à la radiation peut être décisif lorsque le siège est en cause.",
      "Un M2 sans régularisation documentée risque de revenir.",
    ],
    sections: [
      {
        heading: "Le M2 sert à modifier, pas à supplier",
        paragraphs: [
          "Pour une société radiée d'office, le formulaire M2 intervient lorsque la situation peut être régularisée par une déclaration de modification. Le mot important est régularisée : le greffe doit comprendre ce qui a changé depuis la mention.",
          "La demande doit être formulée en observations avec la date de radiation d'office. Elle doit être accompagnée des pièces qui démontrent que le motif n'existe plus ou qu'il a été traité.",
        ],
      },
      {
        heading: "Les pièces qui pèsent vraiment",
        paragraphs: [
          "Le dossier le plus convaincant est celui qui lie chaque pièce au motif exact. Si le siège social est le problème, un justificatif actuel du siège devient central. Si la société a repris une activité, la formalité doit le montrer clairement.",
        ],
        bullets: [
          "Extrait ou preuve de la mention de radiation d'office.",
          "Date de la radiation et motif identifié.",
          "Justificatif de siège valide si l'adresse est en cause.",
          "Décision de transfert de siège si le siège a changé.",
          "Pouvoir original si le représentant légal ne signe pas.",
          "Observation explicite : demande de rapport de radiation d'office.",
        ],
      },
      {
        heading: "Le mauvais réflexe : cocher sans expliquer",
        paragraphs: [
          "Un formulaire rempli mécaniquement peut donner l'impression d'un dossier standard. Or une radiation d'office n'est jamais totalement standard : elle part d'une mention, d'un délai, d'un courrier ou d'une absence de régularisation.",
          "Le M2 doit donc être lisible pour quelqu'un qui ne connaît pas votre histoire. C'est ce travail de lisibilité qui évite souvent les retours.",
        ],
      },
    ],
    faq: [
      {
        question: "Le M2 suffit-il à lever une radiation d'office ?",
        answer:
          "Il peut suffire dans certains dossiers de société, mais seulement si la cause est régularisée et documentée.",
      },
      {
        question: "Le M2 concerne-t-il une micro-entreprise ?",
        answer:
          "Non, le M2 concerne les personnes morales. Une personne physique relève plutôt du P2 selon la situation.",
      },
    ],
    relatedSlugs: [
      "societe-radiee-office-que-faire",
      "siege-social-radiation-office",
      "radiation-office-rne-rcs",
    ],
  },
  {
    slug: "radiation-office-entreprise-individuelle-p2",
    title: "Entreprise individuelle radiée d'office : quand le formulaire P2 peut sauver le dossier",
    description:
      "Radiation d'office d'une entreprise individuelle : comprendre le rôle du P2, les erreurs courantes et les justificatifs à préparer.",
    keyword: "radiation d'office entreprise individuelle P2",
    intent: "EI et micro-entreprise",
    category: "Formulaire",
    publishedAt: "2026-04-28",
    readingTime: "6 min",
    hero:
      "Une entreprise individuelle radiée d'office ne se traite pas comme une SASU. Le mauvais formulaire peut faire perdre des jours précieux.",
    takeaways: [
      "Le P2 vise les personnes physiques, pas les sociétés.",
      "La radiation peut avoir un effet RCS et RNE.",
      "L'absence de chiffre d'affaires ou une cessation mal comprise peut déclencher des complications.",
      "Le dossier doit expliquer la continuité ou la régularisation de l'activité.",
    ],
    sections: [
      {
        heading: "Le P2 répond à une logique différente du M2",
        paragraphs: [
          "Pour une personne physique, le rapport de radiation d'office ne passe pas par les mêmes réflexes qu'une société. Le formulaire P2 sert à déclarer une modification ou à demander le rapport dans un cadre adapté à l'entrepreneur individuel.",
          "C'est particulièrement important pour les micro-entrepreneurs qui découvrent la radiation via un avis, un blocage administratif ou une incohérence sur les registres.",
        ],
      },
      {
        heading: "Ce qu'il faut clarifier avant de déposer",
        paragraphs: [
          "Le greffe ou l'organisme concerné doit pouvoir comprendre si l'activité existe encore, si elle a repris, si elle a changé d'adresse ou si une formalité est restée en suspens.",
        ],
        bullets: [
          "La date de début d'activité et l'état actuel de l'activité.",
          "La mention exacte de radiation d'office.",
          "Le registre touché : RCS, RNE ou autre source.",
          "Les justificatifs d'activité ou de régularisation.",
          "L'adresse professionnelle actuelle.",
        ],
      },
      {
        heading: "La vraie question : radiation subie ou cessation assumée ?",
        paragraphs: [
          "Si l'activité est réellement terminée, la réponse administrative ne sera pas la même que si l'entrepreneur veut maintenir ou rétablir la situation. C'est pour cela qu'un diagnostic rapide change tout.",
          "Le P2 doit traduire une situation réelle. Il ne doit pas masquer une cessation, ni inventer une reprise qui n'existe pas.",
        ],
      },
    ],
    faq: [
      {
        question: "Une micro-entreprise radiée d'office peut-elle être rétablie ?",
        answer:
          "Cela dépend du motif et du délai. Il faut vérifier le registre concerné et les justificatifs disponibles.",
      },
      {
        question: "Le P2 est-il toujours obligatoire ?",
        answer:
          "Non. Il est pertinent pour certains dossiers de personne physique, mais la bonne voie dépend de la cause de radiation.",
      },
    ],
    relatedSlugs: [
      "radiation-office-rne-rcs",
      "delai-levee-radiation-office",
      "societe-radiee-office-que-faire",
    ],
  },
  {
    slug: "juge-commis-surveillance-rcs-radiation",
    title: "Juge commis à la surveillance du RCS : le recours méconnu après une radiation d'office",
    description:
      "Quand saisir le juge commis à la surveillance du RCS pour demander la suppression d'une mention de radiation d'office.",
    keyword: "juge commis radiation d'office RCS",
    intent: "Recours",
    category: "Recours",
    publishedAt: "2026-04-28",
    readingTime: "7 min",
    hero:
      "Quand le formulaire ne suffit plus, le juge commis à la surveillance du RCS peut devenir la pièce centrale du dossier.",
    takeaways: [
      "La requête au juge commis vise la suppression de la mention de radiation d'office.",
      "Elle doit être motivée et accompagnée des preuves de régularisation.",
      "Infogreffe cite un délai pratique de six mois à compter de la mention.",
      "Ce n'est pas une contestation vague : c'est une demande structurée.",
    ],
    sections: [
      {
        heading: "Ce que le juge commis regarde vraiment",
        paragraphs: [
          "La requête au juge commis à la surveillance du RCS n'est pas un courrier d'humeur. Elle doit expliquer pourquoi la mention de radiation d'office doit être supprimée et prouver que la situation justifie cette suppression.",
          "Le cœur du dossier est simple à formuler mais exigeant à préparer : motif, date, régularisation, pièces, demande claire.",
        ],
      },
      {
        heading: "Quand penser à cette voie",
        paragraphs: [
          "Cette voie devient intéressante lorsque le dossier dépasse la simple déclaration modificative. Par exemple, lorsque la mention bloque une situation pourtant régularisée, ou lorsque la suppression de la mention doit être demandée formellement.",
        ],
        bullets: [
          "Radiation d'office inscrite alors que la situation a été corrigée.",
          "Difficulté à obtenir le rapport par une démarche standard.",
          "Besoin de faire supprimer la mention au RCS.",
          "Dossier dans le délai pratique indiqué par Infogreffe.",
        ],
      },
      {
        heading: "Le risque : saisir trop tard ou trop léger",
        paragraphs: [
          "Une requête sans pièces solides ressemble à une affirmation. Une requête avec chronologie, justificatifs et demande précise devient un dossier.",
          "C'est là que beaucoup de dirigeants perdent du temps : ils expliquent le problème mais ne démontrent pas la correction.",
        ],
      },
    ],
    faq: [
      {
        question: "Le juge commis réactive-t-il automatiquement la société ?",
        answer:
          "Non. Il examine une demande de suppression de mention ou une situation au registre. Le résultat dépend du dossier.",
      },
      {
        question: "Faut-il un avocat ?",
        answer:
          "Selon la complexité, l'accompagnement peut être utile. La priorité reste de produire un dossier clair et prouvé.",
      },
    ],
    relatedSlugs: [
      "societe-radiee-office-que-faire",
      "kbis-radie-office",
      "delai-levee-radiation-office",
    ],
  },
  {
    slug: "kbis-radie-office",
    title: "Kbis radié d'office : ce que ça veut vraiment dire pour votre société",
    description:
      "Kbis radié d'office : comprendre la mention, ses effets pratiques et les premières démarches pour corriger le dossier.",
    keyword: "Kbis radié d'office",
    intent: "Compréhension",
    category: "Diagnostic",
    publishedAt: "2026-04-28",
    readingTime: "6 min",
    hero:
      "Le Kbis radié d'office fait peur parce qu'il tombe souvent au pire moment : banque, client, marché public, plateforme ou partenaire.",
    takeaways: [
      "Le Kbis reflète une situation au RCS, il ne raconte pas toujours toute l'histoire.",
      "La mention doit être lue avec sa date et son motif.",
      "Une radiation d'office peut bloquer des démarches commerciales.",
      "La correction passe par le motif, pas par une demande générique.",
    ],
    sections: [
      {
        heading: "Pourquoi le Kbis devient le signal d'alerte",
        paragraphs: [
          "Beaucoup de dirigeants découvrent la radiation d'office parce qu'un Kbis ne sort plus comme prévu ou parce qu'un tiers signale une incohérence. Le Kbis devient alors le symptôme visible d'un problème de registre.",
          "Mais il faut remonter à la cause : cessation totale d'activité, siège, absence de formalité, bénéficiaires effectifs ou autre mention.",
        ],
      },
      {
        heading: "Ce que le partenaire voit",
        paragraphs: [
          "Un client ou une banque ne voit pas votre explication. Il voit une mention de radiation. C'est pour cela qu'il faut agir vite, mais pas n'importe comment.",
        ],
        bullets: [
          "Récupérer la dernière situation disponible.",
          "Identifier l'origine de la mention.",
          "Préparer les preuves de régularisation.",
          "Demander le rapport ou la suppression selon la voie adaptée.",
        ],
      },
      {
        heading: "Le mot clé n'est pas Kbis, c'est registre",
        paragraphs: [
          "Chercher seulement à obtenir un nouveau Kbis peut faire perdre de vue le vrai sujet : le RCS et parfois le RNE. Tant que la situation au registre n'est pas corrigée, le document commercial restera problématique.",
          "Le bon diagnostic part donc du registre et finit par le Kbis, pas l'inverse.",
        ],
      },
    ],
    faq: [
      {
        question: "Un Kbis radié d'office empêche-t-il de travailler ?",
        answer:
          "Il peut créer des blocages importants auprès des partenaires, banques ou plateformes. La situation doit être analysée rapidement.",
      },
      {
        question: "Peut-on obtenir un Kbis propre après correction ?",
        answer:
          "Si la situation est régularisée et que la mention est traitée, le registre peut évoluer. Le résultat dépend du motif et de la décision administrative ou judiciaire.",
      },
    ],
    relatedSlugs: [
      "radiation-office-rne-rcs",
      "rapport-radiation-office-m2",
      "juge-commis-surveillance-rcs-radiation",
    ],
  },
  {
    slug: "radiation-office-rne-rcs",
    title: "Radiation RCS ou RNE : la confusion qui peut coûter des semaines",
    description:
      "Radiation d'office RCS/RNE : comprendre les effets croisés des registres et éviter une régularisation incomplète.",
    keyword: "radiation d'office RCS RNE",
    intent: "Registre et diagnostic",
    category: "Registres",
    publishedAt: "2026-04-28",
    readingTime: "6 min",
    hero:
      "Une radiation d'office peut sembler limitée au RCS. En réalité, le RNE peut aussi entrer dans l'équation.",
    takeaways: [
      "RCS et RNE ne doivent pas être analysés séparément.",
      "Une radiation au RCS peut être portée à la connaissance du RNE.",
      "Le diagnostic doit vérifier les deux registres.",
      "Une correction partielle peut laisser une incohérence visible.",
    ],
    sections: [
      {
        heading: "Pourquoi deux registres changent le diagnostic",
        paragraphs: [
          "Depuis la mise en place du Registre national des entreprises, certaines situations ne se limitent plus à une lecture du RCS. Une mention au RCS peut avoir des conséquences ou une visibilité au RNE.",
          "C'est une source de confusion fréquente : le dirigeant pense avoir traité un registre, puis découvre qu'une autre base publique affiche encore une information problématique.",
        ],
      },
      {
        heading: "Le contrôle minimum à faire",
        paragraphs: [
          "Avant de déposer une demande, il faut regarder la cohérence globale de l'entreprise : RCS, RNE, Sirene, établissement principal, siège et activité.",
        ],
        bullets: [
          "Nom et SIREN exacts.",
          "État du siège et des établissements.",
          "Mention de radiation et date.",
          "Registre qui affiche la radiation.",
          "Formalité nécessaire pour rétablir la cohérence.",
        ],
      },
      {
        heading: "La bonne stratégie : corriger la source, pas l'affichage",
        paragraphs: [
          "Une incohérence visible n'est parfois qu'un affichage. Mais si la source n'est pas corrigée, l'information réapparaît. Le dossier doit donc identifier la source administrative du problème.",
          "C'est précisément l'intérêt d'un diagnostic RCS/RNE avant toute demande de rapport de radiation d'office.",
        ],
      },
    ],
    faq: [
      {
        question: "Le RNE remplace-t-il le RCS ?",
        answer:
          "Non. Les registres ont des rôles différents, mais les informations peuvent se répondre. Le diagnostic doit les croiser.",
      },
      {
        question: "Pourquoi mon entreprise apparaît-elle différemment selon les sites ?",
        answer:
          "Les bases ne se mettent pas toujours à jour au même rythme et ne reflètent pas toujours la même source. Il faut identifier la source de la mention.",
      },
    ],
    relatedSlugs: [
      "kbis-radie-office",
      "radiation-office-entreprise-individuelle-p2",
      "societe-radiee-office-que-faire",
    ],
  },
  {
    slug: "mise-en-sommeil-radiation-office",
    title: "Mise en sommeil : pourquoi votre société peut finir radiée d'office",
    description:
      "Mise en sommeil et radiation d'office : comprendre le délai, la cessation totale d'activité et les pièces à préparer pour réagir.",
    keyword: "mise en sommeil radiation d'office",
    intent: "Cause fréquente",
    category: "Cause",
    publishedAt: "2026-04-28",
    readingTime: "6 min",
    hero:
      "La mise en sommeil donne l'impression de mettre la société sur pause. Le registre, lui, continue de compter le temps.",
    takeaways: [
      "La cessation totale d'activité peut conduire à une radiation d'office après délai.",
      "L'article R123-130 vise notamment l'absence de reprise après deux ans.",
      "La reprise d'activité doit être inscrite et prouvée.",
      "Attendre le dernier moment complique le dossier.",
    ],
    sections: [
      {
        heading: "La mise en sommeil n'est pas un parking illimité",
        paragraphs: [
          "Une société mise en sommeil reste surveillée par le registre. Si aucune reprise n'est déclarée après les délais applicables, le greffier peut procéder à une radiation d'office dans les conditions prévues.",
          "C'est souvent brutal pour le dirigeant : la société n'a pas disparu dans son esprit, mais elle a glissé dans une situation administrative non régularisée.",
        ],
      },
      {
        heading: "Ce qui peut sauver le dossier",
        paragraphs: [
          "Le sujet n'est pas seulement de dire que la société existe encore. Il faut montrer ce qui justifie la reprise, la régularisation ou la correction de la mention.",
        ],
        bullets: [
          "Date de mise en sommeil.",
          "Date de radiation d'office.",
          "Éventuelle reprise d'activité.",
          "Pièces qui prouvent l'activité ou la régularisation.",
          "Formulaire adapté au statut de la société.",
        ],
      },
      {
        heading: "Le bon timing",
        paragraphs: [
          "Plus la radiation est récente, plus le dossier est généralement simple à documenter. Plus le temps passe, plus les preuves deviennent fragiles et les voies possibles se resserrent.",
          "L'urgence n'autorise pas l'improvisation : elle oblige à classer les pièces avant d'agir.",
        ],
      },
    ],
    faq: [
      {
        question: "Une mise en sommeil déclenche-t-elle automatiquement une radiation ?",
        answer:
          "Pas automatiquement dès le départ. Mais l'absence de reprise ou de régularisation après les délais peut conduire à une radiation d'office.",
      },
      {
        question: "Faut-il reprendre l'activité pour corriger ?",
        answer:
          "Tout dépend de la situation réelle. Il faut éviter de déclarer une reprise fictive et choisir la formalité cohérente.",
      },
    ],
    relatedSlugs: [
      "societe-radiee-office-que-faire",
      "rapport-radiation-office-m2",
      "delai-levee-radiation-office",
    ],
  },
  {
    slug: "siege-social-radiation-office",
    title: "Siège social, courrier perdu, radiation d'office : le scénario classique à éviter",
    description:
      "Siège social et radiation d'office : pourquoi une adresse mal tenue peut bloquer le RCS et comment préparer les justificatifs.",
    keyword: "siège social radiation d'office",
    intent: "Adresse et justificatifs",
    category: "Cause",
    publishedAt: "2026-04-28",
    readingTime: "6 min",
    hero:
      "Un courrier qui n'arrive pas, une adresse dépassée, un siège non prouvé : parfois la radiation d'office commence par une boîte aux lettres.",
    takeaways: [
      "Le siège social est une pièce de confiance pour le greffe.",
      "Un justificatif postérieur à la radiation peut être demandé.",
      "Si le siège a changé, le transfert doit être traité.",
      "Un dossier adresse incomplet entraîne souvent un retour.",
    ],
    sections: [
      {
        heading: "Pourquoi l'adresse compte autant",
        paragraphs: [
          "Le siège social n'est pas une simple ligne administrative. C'est l'adresse à laquelle l'entreprise est censée recevoir les informations importantes, notamment les courriers du greffe.",
          "Lorsque le siège est incohérent, fermé, non justifié ou dépassé, la radiation d'office peut devenir le symptôme d'un problème plus profond.",
        ],
      },
      {
        heading: "Justificatif ou transfert : il faut choisir",
        paragraphs: [
          "Si le siège n'a pas changé, il faut souvent prouver qu'il est toujours valable. Si le siège a changé, il ne faut pas seulement demander un rapport : il faut aussi traiter le transfert.",
        ],
        bullets: [
          "Bail, domiciliation ou justificatif valable.",
          "Date du justificatif postérieure à la radiation si nécessaire.",
          "Décision de transfert si l'adresse a changé.",
          "Cohérence entre RCS, RNE et Sirene.",
        ],
      },
      {
        heading: "Le détail qui évite le rejet",
        paragraphs: [
          "Le dossier doit éviter une phrase floue du type “l'adresse est bonne”. Il doit montrer pourquoi elle est bonne, depuis quand, et avec quelle pièce.",
          "C'est souvent cette précision qui distingue une demande solide d'un simple courrier de contestation.",
        ],
      },
    ],
    faq: [
      {
        question: "Un problème de siège peut-il bloquer un rapport de radiation ?",
        answer:
          "Oui, si le dossier ne prouve pas que l'adresse est régularisée ou que le transfert est correctement traité.",
      },
      {
        question: "Faut-il changer de siège pour corriger ?",
        answer:
          "Pas forcément. Si le siège actuel est valable, il faut le prouver. S'il ne l'est plus, un transfert peut être nécessaire.",
      },
    ],
    relatedSlugs: [
      "rapport-radiation-office-m2",
      "kbis-radie-office",
      "societe-radiee-office-que-faire",
    ],
  },
  {
    slug: "beneficiaires-effectifs-radiation-office",
    title: "Bénéficiaires effectifs : la nouvelle cause de radiation d'office qui surprend les dirigeants",
    description:
      "Bénéficiaires effectifs et radiation d'office : comprendre la nouveauté 2025, les risques RCS et la régularisation.",
    keyword: "bénéficiaires effectifs radiation d'office",
    intent: "Conformité 2025+",
    category: "Conformité",
    publishedAt: "2026-04-28",
    readingTime: "7 min",
    hero:
      "La radiation d'office n'est plus seulement une histoire de sommeil ou d'adresse. Les bénéficiaires effectifs peuvent désormais déclencher un vrai problème RCS.",
    takeaways: [
      "Depuis la loi du 13 juin 2025, la non-déclaration ou non-conformité des bénéficiaires effectifs peut conduire à une radiation d'office.",
      "Le greffier doit suivre une procédure avec mise en demeure et délai.",
      "La régularisation doit être documentée.",
      "La sanction peut toucher l'image publique de la société au RCS.",
    ],
    sections: [
      {
        heading: "Pourquoi cette cause surprend",
        paragraphs: [
          "Beaucoup de dirigeants associent la radiation d'office à une société inactive. Pourtant, une société active peut aussi être fragilisée par une formalité de conformité non traitée.",
          "Les bénéficiaires effectifs sont devenus un sujet de fiabilité du registre. Quand les informations ne sont pas déclarées ou pas conformes, le risque n'est plus théorique.",
        ],
      },
      {
        heading: "Ce qu'il faut vérifier tout de suite",
        paragraphs: [
          "Avant de répondre au greffe, il faut vérifier si la société a bien déclaré ses bénéficiaires effectifs, si les informations sont à jour et si une mise en demeure a été reçue.",
        ],
        bullets: [
          "Déclaration initiale des bénéficiaires effectifs.",
          "Mise à jour après changement d'associé ou de contrôle.",
          "Courriers ou notifications du greffe.",
          "Date de la mise en demeure.",
          "Preuve de régularisation.",
        ],
      },
      {
        heading: "Le bon angle de réponse",
        paragraphs: [
          "La réponse ne doit pas seulement dire “nous allons régulariser”. Elle doit montrer que la régularisation a été faite ou qu'elle est en cours avec les pièces utiles.",
          "Un dossier de rapport de radiation d'office fondé sur les bénéficiaires effectifs doit donc mélanger conformité, registre et preuve.",
        ],
      },
    ],
    faq: [
      {
        question: "Les bénéficiaires effectifs peuvent-ils vraiment causer une radiation ?",
        answer:
          "Oui. Service-Public indique que la loi du 13 juin 2025 permet au greffier de radier d'office certaines sociétés non conformes.",
      },
      {
        question: "La régularisation suffit-elle toujours ?",
        answer:
          "Elle est indispensable, mais le traitement dépend de l'état du dossier et de la mention déjà inscrite.",
      },
    ],
    relatedSlugs: [
      "societe-radiee-office-que-faire",
      "rapport-radiation-office-m2",
      "radiation-office-rne-rcs",
    ],
  },
  {
    slug: "delai-levee-radiation-office",
    title: "Combien de temps pour lever une radiation d'office ? La vraie réponse dépend de 3 choses",
    description:
      "Délai de levée ou rapport de radiation d'office : comprendre les trois facteurs qui changent tout dans un dossier RCS.",
    keyword: "délai levée radiation d'office",
    intent: "Délai et conversion",
    category: "Délais",
    publishedAt: "2026-04-28",
    readingTime: "6 min",
    hero:
      "La question “combien de temps ?” est normale. La réponse honnête tient en trois mots : motif, preuves, voie.",
    takeaways: [
      "Il n'existe pas de délai universel fiable.",
      "Le motif de radiation conditionne la voie.",
      "Un dossier complet va plus vite qu'un dossier précipité.",
      "La requête au juge commis peut allonger ou clarifier le parcours selon le cas.",
    ],
    sections: [
      {
        heading: "Facteur 1 : le motif",
        paragraphs: [
          "Une radiation liée au siège social ne se traite pas comme une radiation liée à une mise en sommeil ou aux bénéficiaires effectifs. Le délai dépend d'abord de la cause à corriger.",
          "C'est pour cela qu'une promesse de levée en 24 heures serait dangereuse. Le bon objectif est un dossier complet dès le premier dépôt.",
        ],
      },
      {
        heading: "Facteur 2 : les preuves",
        paragraphs: [
          "Un dossier sans justificatif déclenche des questions. Un dossier avec les bonnes pièces peut être lu plus vite et mieux compris.",
        ],
        bullets: [
          "Justificatif de siège ou transfert.",
          "Preuve de reprise ou de régularisation.",
          "Formulaire M2 ou P2 correctement orienté.",
          "Pouvoir signé si nécessaire.",
          "Chronologie des courriers et mentions.",
        ],
      },
      {
        heading: "Facteur 3 : la voie choisie",
        paragraphs: [
          "Le rapport de radiation d'office par formulaire et la suppression de mention par requête au juge commis ne suivent pas la même logique. Choisir la mauvaise voie peut coûter plus de temps que préparer correctement la bonne.",
          "La vraie urgence est donc de qualifier la voie avant de promettre un délai.",
        ],
      },
    ],
    faq: [
      {
        question: "Peut-on connaître le délai avant diagnostic ?",
        answer:
          "On peut donner une tendance, mais pas un délai sérieux sans motif, date, registre et pièces.",
      },
      {
        question: "Un dossier urgent peut-il être priorisé ?",
        answer:
          "On peut préparer vite un dossier propre. La décision et le traitement restent dépendants des organismes compétents.",
      },
    ],
    relatedSlugs: [
      "societe-radiee-office-que-faire",
      "juge-commis-surveillance-rcs-radiation",
      "kbis-radie-office",
    ],
  },
];

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}

export function getRelatedArticles(article: BlogArticle) {
  return article.relatedSlugs
    .map((slug) => getBlogArticle(slug))
    .filter((related): related is BlogArticle => Boolean(related));
}
