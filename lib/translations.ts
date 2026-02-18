export type LangCode =
  | "en" | "de" | "es" | "fr" | "it"
  | "ja" | "ko" | "pt" | "vi"
  | "zh-TW" | "zh-CN" | "el" | "th" | "ru";

export interface Translation {
  nav: {
    home: string;
    philosophy: string;
    mechanisms: string;
    tokenomics: string;
    dashboard: string;
    launchApp: string;
  };
  hero: {
    tag: string;
    subtitle: string;
    description: string;
    badge1: string;
    badge2: string;
    badge3: string;
    cta1: string;
    cta2: string;
    scroll: string;
  };
  philosophy: {
    title: string;
    subtitle: string;
    oldWayTitle: string;
    oldWay: [string, string, string, string];
    mintoriaWayTitle: string;
    mintoriaWay: [string, string, string, string];
  };
  mechanism: {
    title: string;
    subtitle: string;
    layerLabel: string;
    layers: [
      { title: string; subtitle: string; description: string },
      { title: string; subtitle: string; description: string },
      { title: string; subtitle: string; description: string }
    ];
  };
  tokenomics: {
    title: string;
    subtitle: string;
    communityMint: string;
    teamPercent: string;
    privatePercent: string;
    communityPercent: string;
    nativeMintingTitle: string;
    nativeMintingItems: [string, string, string];
    protocolBurnTitle: string;
    protocolBurnItems: [string, string, string];
  };
  investment: {
    title: string;
    subtitle: string;
    benefits: [
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string },
      { title: string; description: string }
    ];
  };
  dashboard: {
    title: string;
    systemInit: string;
    mintCostLabel: string;
    awaitingGenesis: string;
    totalSupplyLabel: string;
    totalBurnedLabel: string;
    reservePoolLabel: string;
    dataStreams: string;
  };
  footer: {
    tagline: string;
    resources: string;
    resourceLinks: [string, string, string, string];
    community: string;
    communityLinks: [string, string, string, string];
    copyright: string;
  };
}

const translations: Record<LangCode, Translation> = {
  en: {
    nav: {
      home: "Home",
      philosophy: "Philosophy",
      mechanisms: "Mechanisms",
      tokenomics: "Tokenomics",
      dashboard: "Dashboard",
      launchApp: "Launch App",
    },
    hero: {
      tag: "Native Minting Protocol",
      subtitle: "The Native Minting Protocol",
      description:
        "Every token is minted by the community, backed by mathematics, and settled on-chain.",
      badge1: "Code is Law",
      badge2: "Self-Generated",
      badge3: "Verifiable",
      cta1: "Explore Protocol",
      cta2: "Read Whitepaper",
      scroll: "Scroll",
    },
    philosophy: {
      title: "Why Mintoria?",
      subtitle:
        "The shift from trust-based token issuance to protocol-driven minting.",
      oldWayTitle: "The Old Way",
      oldWay: [
        "Pre-mined tokens controlled by insiders",
        "Opaque allocation & vesting schedules",
        "Inflationary supply with no real backing",
        "Trust-based promises from anonymous teams",
      ],
      mintoriaWayTitle: "The Mintoria Way",
      mintoriaWay: [
        "100% community minted — zero pre-allocation",
        "Transparent on-chain issuance rules",
        "Math-driven scarcity with reserve backing",
        "Trustless protocol — code is the guarantee",
      ],
    },
    mechanism: {
      title: "Architecture of Trust",
      subtitle:
        "Three layers working in harmony to create a self-sustaining, trustless minting protocol.",
      layerLabel: "Layer",
      layers: [
        {
          title: "Mint Engine",
          subtitle: "Core Issuance Layer",
          description:
            "Users interact directly with the smart contract to mint tokens at a dynamically calculated cost. Every mint event is atomic, permissionless, and irreversible.",
        },
        {
          title: "Economic Control",
          subtitle: "Self-Regulating Feedback",
          description:
            "Mint cost increases with demand, creating natural price discovery. Supply adjusts algorithmically — no governance votes, no manual intervention.",
        },
        {
          title: "On-Chain Settlement",
          subtitle: "Immutable Record",
          description:
            "Every transaction — mint, burn, and reserve allocation — is settled immutably on-chain. Full auditability, zero off-chain dependencies.",
        },
      ],
    },
    tokenomics: {
      title: "Math-Driven Scarcity",
      subtitle:
        "No team tokens. No private sales. Every token is minted by the community through the protocol.",
      communityMint: "Community Mint",
      teamPercent: "0% Team",
      privatePercent: "0% Private",
      communityPercent: "100% Community",
      nativeMintingTitle: "Native Minting",
      nativeMintingItems: [
        "Dynamic cost calculated per mint event",
        "Reserve allocation on every transaction",
        "Automatic burn split mechanism",
      ],
      protocolBurnTitle: "Protocol Burn",
      protocolBurnItems: [
        "Burn-on-mint deflationary pressure",
        "Inflation feedback loop mechanism",
        "Permanent black hole address",
      ],
    },
    investment: {
      title: "More Than A Token",
      subtitle:
        "A protocol-backed digital asset with real utility, transparent mechanics, and community governance.",
      benefits: [
        {
          title: "Intrinsic Value",
          description:
            "Every token costs real assets to mint, creating a natural price floor. No free tokens, no dilution — only value-backed issuance.",
        },
        {
          title: "Predictability",
          description:
            "Algorithmic supply curves and transparent mechanics. You can model, predict, and verify every aspect of the token economics before participating.",
        },
        {
          title: "Safety First",
          description:
            "Immutable smart contracts, no admin keys, no upgrade proxies. The protocol cannot be altered, paused, or manipulated by anyone — including its creators.",
        },
        {
          title: "Governance Power",
          description:
            "Token holders gain proportional governance rights. Shape the protocol's future through on-chain voting — true decentralized decision making.",
        },
      ],
    },
    dashboard: {
      title: "Protocol Statistics",
      systemInit: "System Initializing...",
      mintCostLabel: "Current Mint Cost",
      awaitingGenesis: "Awaiting Genesis",
      totalSupplyLabel: "Total Supply",
      totalBurnedLabel: "Total Burned",
      reservePoolLabel: "Reserve Pool",
      dataStreams:
        "Data streams will be activated upon Mainnet Launch...",
    },
    footer: {
      tagline:
        "Protocol Driven Issuance.\nBuilt on trust in mathematics, not promises.",
      resources: "Resources",
      resourceLinks: ["Whitepaper", "GitHub", "Audit Reports", "Documentation"],
      community: "Community",
      communityLinks: ["Twitter / X", "Discord", "Telegram", "Medium"],
      copyright:
        "Mintoria Protocol. All rights reserved. Built on decentralized principles.",
    },
  },

  de: {
    nav: {
      home: "Startseite",
      philosophy: "Philosophie",
      mechanisms: "Mechanismen",
      tokenomics: "Tokenomics",
      dashboard: "Dashboard",
      launchApp: "App starten",
    },
    hero: {
      tag: "Natives Minting-Protokoll",
      subtitle: "Das native Minting-Protokoll",
      description:
        "Jeder Token wird von der Community geminted, durch Mathematik gesichert und on-chain abgerechnet.",
      badge1: "Code ist Gesetz",
      badge2: "Selbst generiert",
      badge3: "Verifizierbar",
      cta1: "Protokoll erkunden",
      cta2: "Whitepaper lesen",
      scroll: "Scrollen",
    },
    philosophy: {
      title: "Warum Mintoria?",
      subtitle:
        "Der Wandel von vertrauensbasierter Token-Ausgabe zu protokollgesteuertem Minting.",
      oldWayTitle: "Der alte Weg",
      oldWay: [
        "Vorgeminte Token unter Insider-Kontrolle",
        "Intransparente Zuteilungen & Vesting-Pläne",
        "Inflationäres Angebot ohne reale Deckung",
        "Vertrauensbasierte Versprechen anonymer Teams",
      ],
      mintoriaWayTitle: "Der Mintoria-Weg",
      mintoriaWay: [
        "100% von der Community geminted — null Vorab-Zuteilung",
        "Transparente On-Chain-Ausgaberegeln",
        "Mathematisch basierte Knappheit mit Reserve-Deckung",
        "Vertrauensloses Protokoll — Code ist die Garantie",
      ],
    },
    mechanism: {
      title: "Architektur des Vertrauens",
      subtitle:
        "Drei Schichten im Einklang schaffen ein selbsttragendes, vertrauensloses Minting-Protokoll.",
      layerLabel: "Layer",
      layers: [
        {
          title: "Mint Engine",
          subtitle: "Kernausgabe-Schicht",
          description:
            "Nutzer interagieren direkt mit dem Smart Contract, um Token zu einem dynamisch berechneten Preis zu mingen. Jedes Mint-Ereignis ist atomar, genehmigungsfrei und unumkehrbar.",
        },
        {
          title: "Wirtschaftskontrolle",
          subtitle: "Selbstregulierende Rückkopplung",
          description:
            "Die Minting-Kosten steigen mit der Nachfrage und schaffen eine natürliche Preisfindung. Das Angebot passt sich algorithmisch an — keine Governance-Abstimmungen, keine manuelle Intervention.",
        },
        {
          title: "On-Chain-Abrechnung",
          subtitle: "Unveränderliches Register",
          description:
            "Jede Transaktion — Mint, Burn und Reserve-Zuteilung — wird unveränderlich on-chain abgerechnet. Vollständige Prüfbarkeit, keine Off-Chain-Abhängigkeiten.",
        },
      ],
    },
    tokenomics: {
      title: "Mathematisch gesteuerte Knappheit",
      subtitle:
        "Keine Team-Token. Keine privaten Verkäufe. Jeder Token wird von der Community über das Protokoll geminted.",
      communityMint: "Community Mint",
      teamPercent: "0% Team",
      privatePercent: "0% Privat",
      communityPercent: "100% Community",
      nativeMintingTitle: "Natives Minting",
      nativeMintingItems: [
        "Dynamische Kosten je Mint-Ereignis",
        "Reserve-Zuteilung bei jeder Transaktion",
        "Automatischer Burn-Split-Mechanismus",
      ],
      protocolBurnTitle: "Protokoll-Burn",
      protocolBurnItems: [
        "Burn-beim-Minting deflationärer Druck",
        "Inflations-Rückkopplungsschleife",
        "Permanente Black-Hole-Adresse",
      ],
    },
    investment: {
      title: "Mehr als ein Token",
      subtitle:
        "Ein protokollgedecktes digitales Gut mit echtem Nutzen, transparenten Mechanismen und Community-Governance.",
      benefits: [
        {
          title: "Innerer Wert",
          description:
            "Jeder Token kostet reale Vermögenswerte zum Minting und schafft eine natürliche Preisuntergrenze. Keine kostenlosen Token, keine Verwässerung — nur wertgedeckte Ausgabe.",
        },
        {
          title: "Vorhersagbarkeit",
          description:
            "Algorithmische Angebotskurven und transparente Mechaniken. Sie können jeden Aspekt der Token-Ökonomie vor der Teilnahme modellieren, vorhersagen und verifizieren.",
        },
        {
          title: "Sicherheit zuerst",
          description:
            "Unveränderliche Smart Contracts, keine Admin-Schlüssel, keine Upgrade-Proxies. Das Protokoll kann von niemandem verändert, pausiert oder manipuliert werden — auch nicht von seinen Schöpfern.",
        },
        {
          title: "Governance-Macht",
          description:
            "Token-Inhaber erhalten proportionale Governance-Rechte. Gestalten Sie die Zukunft des Protokolls durch On-Chain-Abstimmungen — echte dezentrale Entscheidungsfindung.",
        },
      ],
    },
    dashboard: {
      title: "Protokoll-Statistiken",
      systemInit: "System wird initialisiert...",
      mintCostLabel: "Aktuelle Mint-Kosten",
      awaitingGenesis: "Warte auf Genesis",
      totalSupplyLabel: "Gesamtangebot",
      totalBurnedLabel: "Gesamt verbrannt",
      reservePoolLabel: "Reserve-Pool",
      dataStreams:
        "Datenströme werden beim Mainnet-Launch aktiviert...",
    },
    footer: {
      tagline:
        "Protokollgesteuertes Ausgaben.\nAufgebaut auf Vertrauen in Mathematik, nicht in Versprechen.",
      resources: "Ressourcen",
      resourceLinks: ["Whitepaper", "GitHub", "Prüfberichte", "Dokumentation"],
      community: "Gemeinschaft",
      communityLinks: ["Twitter / X", "Discord", "Telegram", "Medium"],
      copyright:
        "Mintoria Protocol. Alle Rechte vorbehalten. Aufgebaut auf dezentralen Prinzipien.",
    },
  },

  es: {
    nav: {
      home: "Inicio",
      philosophy: "Filosofía",
      mechanisms: "Mecanismos",
      tokenomics: "Tokenomics",
      dashboard: "Panel",
      launchApp: "Lanzar App",
    },
    hero: {
      tag: "Protocolo de Acuñación Nativa",
      subtitle: "El Protocolo de Acuñación Nativa",
      description:
        "Cada token es acuñado por la comunidad, respaldado por matemáticas y liquidado on-chain.",
      badge1: "El Código es Ley",
      badge2: "Auto-Generado",
      badge3: "Verificable",
      cta1: "Explorar Protocolo",
      cta2: "Leer Whitepaper",
      scroll: "Desplazar",
    },
    philosophy: {
      title: "¿Por qué Mintoria?",
      subtitle:
        "El cambio de la emisión de tokens basada en confianza a la acuñación impulsada por protocolo.",
      oldWayTitle: "El Método Antiguo",
      oldWay: [
        "Tokens pre-minados controlados por iniciados",
        "Asignaciones y calendarios de vesting opacos",
        "Suministro inflacionario sin respaldo real",
        "Promesas basadas en confianza de equipos anónimos",
      ],
      mintoriaWayTitle: "El Método Mintoria",
      mintoriaWay: [
        "100% acuñado por la comunidad — sin pre-asignación",
        "Reglas de emisión transparentes on-chain",
        "Escasez matemática con respaldo de reservas",
        "Protocolo sin confianza — el código es la garantía",
      ],
    },
    mechanism: {
      title: "Arquitectura de Confianza",
      subtitle:
        "Tres capas trabajando en armonía para crear un protocolo de acuñación autosostenible y sin confianza.",
      layerLabel: "Capa",
      layers: [
        {
          title: "Motor de Acuñación",
          subtitle: "Capa de Emisión Central",
          description:
            "Los usuarios interactúan directamente con el contrato inteligente para acuñar tokens a un costo calculado dinámicamente. Cada evento de acuñación es atómico, sin permisos e irreversible.",
        },
        {
          title: "Control Económico",
          subtitle: "Retroalimentación Autorreguladora",
          description:
            "El costo de acuñación aumenta con la demanda, creando un descubrimiento de precios natural. El suministro se ajusta algorítmicamente — sin votos de gobernanza, sin intervención manual.",
        },
        {
          title: "Liquidación On-Chain",
          subtitle: "Registro Inmutable",
          description:
            "Cada transacción — acuñación, quema y asignación de reservas — se liquida de forma inmutable on-chain. Auditabilidad completa, cero dependencias off-chain.",
        },
      ],
    },
    tokenomics: {
      title: "Escasez Impulsada por Matemáticas",
      subtitle:
        "Sin tokens de equipo. Sin ventas privadas. Cada token es acuñado por la comunidad a través del protocolo.",
      communityMint: "Acuñación Comunitaria",
      teamPercent: "0% Equipo",
      privatePercent: "0% Privado",
      communityPercent: "100% Comunidad",
      nativeMintingTitle: "Acuñación Nativa",
      nativeMintingItems: [
        "Costo dinámico calculado por evento de acuñación",
        "Asignación de reserva en cada transacción",
        "Mecanismo automático de división de quema",
      ],
      protocolBurnTitle: "Quema de Protocolo",
      protocolBurnItems: [
        "Presión deflacionaria de quema-al-acuñar",
        "Mecanismo de bucle de retroalimentación de inflación",
        "Dirección permanente de agujero negro",
      ],
    },
    investment: {
      title: "Más Que Un Token",
      subtitle:
        "Un activo digital respaldado por protocolo con utilidad real, mecánicas transparentes y gobernanza comunitaria.",
      benefits: [
        {
          title: "Valor Intrínseco",
          description:
            "Cada token cuesta activos reales para acuñar, creando un precio mínimo natural. Sin tokens gratuitos, sin dilución — solo emisión respaldada por valor.",
        },
        {
          title: "Predecibilidad",
          description:
            "Curvas de suministro algorítmicas y mecánicas transparentes. Puede modelar, predecir y verificar cada aspecto de la economía del token antes de participar.",
        },
        {
          title: "Seguridad Primero",
          description:
            "Contratos inteligentes inmutables, sin claves de administrador, sin proxies de actualización. El protocolo no puede ser alterado, pausado o manipulado por nadie — incluyendo sus creadores.",
        },
        {
          title: "Poder de Gobernanza",
          description:
            "Los titulares de tokens obtienen derechos de gobernanza proporcionales. Dé forma al futuro del protocolo mediante votación on-chain — verdadera toma de decisiones descentralizada.",
        },
      ],
    },
    dashboard: {
      title: "Estadísticas del Protocolo",
      systemInit: "Sistema Inicializando...",
      mintCostLabel: "Costo de Acuñación Actual",
      awaitingGenesis: "Esperando Génesis",
      totalSupplyLabel: "Suministro Total",
      totalBurnedLabel: "Total Quemado",
      reservePoolLabel: "Fondo de Reserva",
      dataStreams:
        "Los flujos de datos se activarán en el lanzamiento de Mainnet...",
    },
    footer: {
      tagline:
        "Emisión Impulsada por Protocolo.\nConstructida sobre confianza en las matemáticas, no en promesas.",
      resources: "Recursos",
      resourceLinks: ["Whitepaper", "GitHub", "Informes de Auditoría", "Documentación"],
      community: "Comunidad",
      communityLinks: ["Twitter / X", "Discord", "Telegram", "Medium"],
      copyright:
        "Mintoria Protocol. Todos los derechos reservados. Construido sobre principios descentralizados.",
    },
  },

  fr: {
    nav: {
      home: "Accueil",
      philosophy: "Philosophie",
      mechanisms: "Mécanismes",
      tokenomics: "Tokenomics",
      dashboard: "Tableau de bord",
      launchApp: "Lancer l'App",
    },
    hero: {
      tag: "Protocole de Frappe Native",
      subtitle: "Le Protocole de Frappe Native",
      description:
        "Chaque jeton est frappé par la communauté, soutenu par les mathématiques et réglé sur la chaîne.",
      badge1: "Le Code est Loi",
      badge2: "Auto-Généré",
      badge3: "Vérifiable",
      cta1: "Explorer le Protocole",
      cta2: "Lire le Whitepaper",
      scroll: "Défiler",
    },
    philosophy: {
      title: "Pourquoi Mintoria ?",
      subtitle:
        "Le passage de l'émission de jetons basée sur la confiance à la frappe pilotée par protocole.",
      oldWayTitle: "L'Ancienne Méthode",
      oldWay: [
        "Jetons pré-minés contrôlés par des initiés",
        "Allocations et calendriers de vesting opaques",
        "Offre inflationniste sans vrai soutien",
        "Promesses basées sur la confiance d'équipes anonymes",
      ],
      mintoriaWayTitle: "La Méthode Mintoria",
      mintoriaWay: [
        "100% frappé par la communauté — zéro pré-allocation",
        "Règles d'émission on-chain transparentes",
        "Rareté mathématique avec soutien de réserve",
        "Protocole sans confiance — le code est la garantie",
      ],
    },
    mechanism: {
      title: "Architecture de Confiance",
      subtitle:
        "Trois couches travaillant en harmonie pour créer un protocole de frappe autonome et sans confiance.",
      layerLabel: "Couche",
      layers: [
        {
          title: "Moteur de Frappe",
          subtitle: "Couche d'Émission Centrale",
          description:
            "Les utilisateurs interagissent directement avec le contrat intelligent pour frapper des jetons à un coût calculé dynamiquement. Chaque événement de frappe est atomique, sans permission et irréversible.",
        },
        {
          title: "Contrôle Économique",
          subtitle: "Rétroaction Autorégulée",
          description:
            "Le coût de frappe augmente avec la demande, créant une découverte de prix naturelle. L'offre s'ajuste algorithmiquement — sans votes de gouvernance, sans intervention manuelle.",
        },
        {
          title: "Règlement On-Chain",
          subtitle: "Registre Immuable",
          description:
            "Chaque transaction — frappe, brûlage et allocation de réserve — est réglée de manière immuable on-chain. Auditabilité complète, zéro dépendance off-chain.",
        },
      ],
    },
    tokenomics: {
      title: "Rareté Pilotée par les Mathématiques",
      subtitle:
        "Pas de jetons d'équipe. Pas de ventes privées. Chaque jeton est frappé par la communauté via le protocole.",
      communityMint: "Frappe Communautaire",
      teamPercent: "0% Équipe",
      privatePercent: "0% Privé",
      communityPercent: "100% Communauté",
      nativeMintingTitle: "Frappe Native",
      nativeMintingItems: [
        "Coût dynamique calculé par événement de frappe",
        "Allocation de réserve à chaque transaction",
        "Mécanisme automatique de partage de brûlage",
      ],
      protocolBurnTitle: "Brûlage de Protocole",
      protocolBurnItems: [
        "Pression déflationniste de brûlage-à-la-frappe",
        "Mécanisme de boucle de rétroaction d'inflation",
        "Adresse permanente de trou noir",
      ],
    },
    investment: {
      title: "Plus Qu'Un Jeton",
      subtitle:
        "Un actif numérique soutenu par protocole avec une utilité réelle, des mécaniques transparentes et une gouvernance communautaire.",
      benefits: [
        {
          title: "Valeur Intrinsèque",
          description:
            "Chaque jeton coûte de vrais actifs à frapper, créant un plancher de prix naturel. Pas de jetons gratuits, pas de dilution — seulement une émission soutenue par la valeur.",
        },
        {
          title: "Prévisibilité",
          description:
            "Courbes d'offre algorithmiques et mécaniques transparentes. Vous pouvez modéliser, prédire et vérifier chaque aspect de l'économie des jetons avant de participer.",
        },
        {
          title: "La Sécurité d'Abord",
          description:
            "Contrats intelligents immuables, sans clés administrateur, sans proxies de mise à niveau. Le protocole ne peut être modifié, mis en pause ou manipulé par personne — y compris ses créateurs.",
        },
        {
          title: "Pouvoir de Gouvernance",
          description:
            "Les détenteurs de jetons obtiennent des droits de gouvernance proportionnels. Façonnez l'avenir du protocole par vote on-chain — vraie prise de décision décentralisée.",
        },
      ],
    },
    dashboard: {
      title: "Statistiques du Protocole",
      systemInit: "Système en cours d'initialisation...",
      mintCostLabel: "Coût de Frappe Actuel",
      awaitingGenesis: "En attente de la Genèse",
      totalSupplyLabel: "Offre Totale",
      totalBurnedLabel: "Total Brûlé",
      reservePoolLabel: "Pool de Réserve",
      dataStreams:
        "Les flux de données seront activés lors du lancement du Mainnet...",
    },
    footer: {
      tagline:
        "Émission Pilotée par Protocole.\nConstruite sur la confiance dans les mathématiques, pas les promesses.",
      resources: "Ressources",
      resourceLinks: ["Whitepaper", "GitHub", "Rapports d'Audit", "Documentation"],
      community: "Communauté",
      communityLinks: ["Twitter / X", "Discord", "Telegram", "Medium"],
      copyright:
        "Mintoria Protocol. Tous droits réservés. Construit sur des principes décentralisés.",
    },
  },

  it: {
    nav: {
      home: "Home",
      philosophy: "Filosofia",
      mechanisms: "Meccanismi",
      tokenomics: "Tokenomics",
      dashboard: "Dashboard",
      launchApp: "Avvia App",
    },
    hero: {
      tag: "Protocollo di Conio Nativo",
      subtitle: "Il Protocollo di Conio Nativo",
      description:
        "Ogni token viene coniato dalla community, supportato dalla matematica e regolato on-chain.",
      badge1: "Il Codice è Legge",
      badge2: "Auto-Generato",
      badge3: "Verificabile",
      cta1: "Esplora il Protocollo",
      cta2: "Leggi il Whitepaper",
      scroll: "Scorri",
    },
    philosophy: {
      title: "Perché Mintoria?",
      subtitle:
        "Il passaggio dall'emissione di token basata sulla fiducia al conio guidato dal protocollo.",
      oldWayTitle: "Il Vecchio Modo",
      oldWay: [
        "Token pre-minati controllati dagli insider",
        "Allocazioni e calendari di vesting opachi",
        "Offerta inflazionistica senza supporto reale",
        "Promesse basate sulla fiducia da team anonimi",
      ],
      mintoriaWayTitle: "Il Modo Mintoria",
      mintoriaWay: [
        "100% coniato dalla community — zero pre-allocazione",
        "Regole di emissione on-chain trasparenti",
        "Scarsità matematica con supporto di riserva",
        "Protocollo senza fiducia — il codice è la garanzia",
      ],
    },
    mechanism: {
      title: "Architettura della Fiducia",
      subtitle:
        "Tre livelli lavorano in armonia per creare un protocollo di conio autosostenibile e senza fiducia.",
      layerLabel: "Strato",
      layers: [
        {
          title: "Motore di Conio",
          subtitle: "Livello di Emissione Centrale",
          description:
            "Gli utenti interagiscono direttamente con il contratto intelligente per coniare token a un costo calcolato dinamicamente. Ogni evento di conio è atomico, senza permessi e irreversibile.",
        },
        {
          title: "Controllo Economico",
          subtitle: "Feedback Autoregolante",
          description:
            "Il costo di conio aumenta con la domanda, creando una scoperta naturale del prezzo. L'offerta si adatta algoritmicamente — senza voti di governance, senza intervento manuale.",
        },
        {
          title: "Liquidazione On-Chain",
          subtitle: "Registro Immutabile",
          description:
            "Ogni transazione — conio, burn e allocazione di riserva — viene liquidata in modo immutabile on-chain. Auditabilità completa, zero dipendenze off-chain.",
        },
      ],
    },
    tokenomics: {
      title: "Scarsità Guidata dalla Matematica",
      subtitle:
        "Nessun token per il team. Nessuna vendita privata. Ogni token viene coniato dalla community tramite il protocollo.",
      communityMint: "Conio della Community",
      teamPercent: "0% Team",
      privatePercent: "0% Privato",
      communityPercent: "100% Community",
      nativeMintingTitle: "Conio Nativo",
      nativeMintingItems: [
        "Costo dinamico calcolato per evento di conio",
        "Allocazione di riserva per ogni transazione",
        "Meccanismo automatico di divisione del burn",
      ],
      protocolBurnTitle: "Burn del Protocollo",
      protocolBurnItems: [
        "Pressione deflazionistica burn-al-conio",
        "Meccanismo del ciclo di feedback dell'inflazione",
        "Indirizzo permanente black hole",
      ],
    },
    investment: {
      title: "Più di Un Token",
      subtitle:
        "Un asset digitale supportato da protocollo con utilità reale, meccaniche trasparenti e governance della community.",
      benefits: [
        {
          title: "Valore Intrinseco",
          description:
            "Ogni token costa asset reali per essere coniato, creando un livello di prezzo naturale. Nessun token gratuito, nessuna diluizione — solo emissione supportata da valore.",
        },
        {
          title: "Prevedibilità",
          description:
            "Curve di offerta algoritmiche e meccaniche trasparenti. Puoi modellare, prevedere e verificare ogni aspetto dell'economia dei token prima di partecipare.",
        },
        {
          title: "Sicurezza Prima di Tutto",
          description:
            "Contratti intelligenti immutabili, nessuna chiave admin, nessun proxy di aggiornamento. Il protocollo non può essere alterato, messo in pausa o manipolato da nessuno — inclusi i suoi creatori.",
        },
        {
          title: "Potere di Governance",
          description:
            "I detentori di token ottengono diritti di governance proporzionali. Forma il futuro del protocollo attraverso il voto on-chain — vera decisione decentralizzata.",
        },
      ],
    },
    dashboard: {
      title: "Statistiche del Protocollo",
      systemInit: "Sistema in Inizializzazione...",
      mintCostLabel: "Costo di Conio Attuale",
      awaitingGenesis: "In Attesa della Genesis",
      totalSupplyLabel: "Offerta Totale",
      totalBurnedLabel: "Totale Bruciato",
      reservePoolLabel: "Pool di Riserva",
      dataStreams:
        "I flussi di dati verranno attivati al lancio della Mainnet...",
    },
    footer: {
      tagline:
        "Emissione Guidata dal Protocollo.\nCostruita sulla fiducia nella matematica, non nelle promesse.",
      resources: "Risorse",
      resourceLinks: ["Whitepaper", "GitHub", "Rapporti di Audit", "Documentazione"],
      community: "Comunità",
      communityLinks: ["Twitter / X", "Discord", "Telegram", "Medium"],
      copyright:
        "Mintoria Protocol. Tutti i diritti riservati. Costruito su principi decentralizzati.",
    },
  },

  ja: {
    nav: {
      home: "ホーム",
      philosophy: "哲学",
      mechanisms: "メカニズム",
      tokenomics: "トークノミクス",
      dashboard: "ダッシュボード",
      launchApp: "アプリを起動",
    },
    hero: {
      tag: "ネイティブ・ミンティング・プロトコル",
      subtitle: "ネイティブ・ミンティング・プロトコル",
      description:
        "すべてのトークンはコミュニティによって発行され、数学によって裏付けられ、オンチェーンで決済されます。",
      badge1: "コードは法律",
      badge2: "自己生成",
      badge3: "検証可能",
      cta1: "プロトコルを探る",
      cta2: "ホワイトペーパーを読む",
      scroll: "スクロール",
    },
    philosophy: {
      title: "なぜMintoria？",
      subtitle:
        "信頼ベースのトークン発行からプロトコル駆動のミンティングへの転換。",
      oldWayTitle: "旧来の方法",
      oldWay: [
        "インサイダーに制御された事前発行トークン",
        "不透明な割り当てとベスティングスケジュール",
        "実質的な裏付けのないインフレ供給",
        "匿名チームからの信頼ベースの約束",
      ],
      mintoriaWayTitle: "Mintoriaの方法",
      mintoriaWay: [
        "100%コミュニティ発行 — 事前割り当てなし",
        "透明なオンチェーン発行ルール",
        "準備金によって裏付けられた数学的希少性",
        "信頼不要プロトコル — コードが保証",
      ],
    },
    mechanism: {
      title: "信頼のアーキテクチャ",
      subtitle:
        "3つの層が調和して動作し、自立した信頼不要のミンティングプロトコルを作り出します。",
      layerLabel: "レイヤー",
      layers: [
        {
          title: "ミントエンジン",
          subtitle: "コア発行レイヤー",
          description:
            "ユーザーはスマートコントラクトと直接対話し、動的に計算されたコストでトークンを発行します。すべてのミントイベントはアトミックで、許可不要、かつ不可逆です。",
        },
        {
          title: "経済コントロール",
          subtitle: "自己調整フィードバック",
          description:
            "需要に応じてミントコストが上昇し、自然な価格発見が生まれます。供給はアルゴリズムで調整されます — ガバナンス投票も手動介入も不要です。",
        },
        {
          title: "オンチェーン決済",
          subtitle: "不変の記録",
          description:
            "すべてのトランザクション — ミント、バーン、準備金割り当て — は不変でオンチェーンに決済されます。完全な監査可能性、オフチェーン依存なし。",
        },
      ],
    },
    tokenomics: {
      title: "数学駆動の希少性",
      subtitle:
        "チームトークンなし。プライベートセールなし。すべてのトークンはプロトコルを通じてコミュニティによって発行されます。",
      communityMint: "コミュニティミント",
      teamPercent: "0% チーム",
      privatePercent: "0% プライベート",
      communityPercent: "100% コミュニティ",
      nativeMintingTitle: "ネイティブミンティング",
      nativeMintingItems: [
        "ミントイベントごとに動的コスト計算",
        "すべてのトランザクションで準備金割り当て",
        "自動バーン分割メカニズム",
      ],
      protocolBurnTitle: "プロトコルバーン",
      protocolBurnItems: [
        "ミント時バーンによるデフレ圧力",
        "インフレフィードバックループメカニズム",
        "永続的なブラックホールアドレス",
      ],
    },
    investment: {
      title: "トークン以上のもの",
      subtitle:
        "実際のユーティリティ、透明なメカニクス、コミュニティガバナンスを備えたプロトコル裏付けデジタル資産。",
      benefits: [
        {
          title: "固有の価値",
          description:
            "すべてのトークンはミントに実際の資産を要し、自然な価格下限を作ります。無料トークンも希薄化もなし — 価値裏付けの発行のみ。",
        },
        {
          title: "予測可能性",
          description:
            "アルゴリズム的な供給曲線と透明なメカニクス。参加前にトークン経済学のあらゆる側面をモデル化、予測、検証できます。",
        },
        {
          title: "安全性最優先",
          description:
            "不変のスマートコントラクト、管理者キーなし、アップグレードプロキシなし。プロトコルは誰によっても変更、一時停止、操作できません — 創設者も含めて。",
        },
        {
          title: "ガバナンス権力",
          description:
            "トークン保有者は比例したガバナンス権を得ます。オンチェーン投票でプロトコルの未来を形成しましょう — 真の分散型意思決定。",
        },
      ],
    },
    dashboard: {
      title: "プロトコル統計",
      systemInit: "システム初期化中...",
      mintCostLabel: "現在のミントコスト",
      awaitingGenesis: "ジェネシス待機中",
      totalSupplyLabel: "総供給量",
      totalBurnedLabel: "総バーン量",
      reservePoolLabel: "準備金プール",
      dataStreams:
        "データストリームはメインネットローンチ時に有効化されます...",
    },
    footer: {
      tagline:
        "プロトコル駆動の発行。\n数学への信頼に基づいて構築、約束ではなく。",
      resources: "リソース",
      resourceLinks: ["ホワイトペーパー", "GitHub", "監査レポート", "ドキュメント"],
      community: "コミュニティ",
      communityLinks: ["Twitter / X", "Discord", "Telegram", "Medium"],
      copyright:
        "Mintoria Protocol. 全権利保有。分散型原則に基づいて構築。",
    },
  },

  ko: {
    nav: {
      home: "홈",
      philosophy: "철학",
      mechanisms: "메커니즘",
      tokenomics: "토크노믹스",
      dashboard: "대시보드",
      launchApp: "앱 실행",
    },
    hero: {
      tag: "네이티브 민팅 프로토콜",
      subtitle: "네이티브 민팅 프로토콜",
      description:
        "모든 토큰은 커뮤니티에 의해 발행되고, 수학으로 뒷받침되며, 온체인에서 정산됩니다.",
      badge1: "코드가 법이다",
      badge2: "자체 생성",
      badge3: "검증 가능",
      cta1: "프로토콜 탐색",
      cta2: "백서 읽기",
      scroll: "스크롤",
    },
    philosophy: {
      title: "왜 Mintoria인가?",
      subtitle:
        "신뢰 기반 토큰 발행에서 프로토콜 기반 민팅으로의 전환.",
      oldWayTitle: "기존 방식",
      oldWay: [
        "내부자가 제어하는 사전 발행 토큰",
        "불투명한 할당 및 베스팅 일정",
        "실질적 뒷받침 없는 인플레이션 공급",
        "익명 팀의 신뢰 기반 약속",
      ],
      mintoriaWayTitle: "Mintoria 방식",
      mintoriaWay: [
        "100% 커뮤니티 발행 — 사전 할당 없음",
        "투명한 온체인 발행 규칙",
        "준비금으로 뒷받침된 수학적 희소성",
        "신뢰 없는 프로토콜 — 코드가 보증",
      ],
    },
    mechanism: {
      title: "신뢰의 아키텍처",
      subtitle:
        "세 가지 레이어가 조화롭게 작동하여 자립적이고 신뢰 없는 민팅 프로토콜을 만듭니다.",
      layerLabel: "레이어",
      layers: [
        {
          title: "민트 엔진",
          subtitle: "핵심 발행 레이어",
          description:
            "사용자는 스마트 컨트랙트와 직접 상호작용하여 동적으로 계산된 비용으로 토큰을 발행합니다. 모든 민트 이벤트는 원자적이고, 권한 없이, 되돌릴 수 없습니다.",
        },
        {
          title: "경제적 제어",
          subtitle: "자기 조절 피드백",
          description:
            "수요에 따라 민팅 비용이 증가하여 자연스러운 가격 발견이 이루어집니다. 공급은 알고리즘으로 조정됩니다 — 거버넌스 투표도, 수동 개입도 없습니다.",
        },
        {
          title: "온체인 정산",
          subtitle: "불변 기록",
          description:
            "모든 거래 — 민트, 번, 준비금 할당 — 은 온체인에서 불변으로 정산됩니다. 완전한 감사 가능성, 오프체인 의존성 없음.",
        },
      ],
    },
    tokenomics: {
      title: "수학 기반 희소성",
      subtitle:
        "팀 토큰 없음. 프라이빗 세일 없음. 모든 토큰은 프로토콜을 통해 커뮤니티에 의해 발행됩니다.",
      communityMint: "커뮤니티 민트",
      teamPercent: "0% 팀",
      privatePercent: "0% 프라이빗",
      communityPercent: "100% 커뮤니티",
      nativeMintingTitle: "네이티브 민팅",
      nativeMintingItems: [
        "민트 이벤트별 동적 비용 계산",
        "모든 거래의 준비금 할당",
        "자동 번 분할 메커니즘",
      ],
      protocolBurnTitle: "프로토콜 번",
      protocolBurnItems: [
        "민팅 시 번으로 인한 디플레이션 압력",
        "인플레이션 피드백 루프 메커니즘",
        "영구적인 블랙홀 주소",
      ],
    },
    investment: {
      title: "토큰 그 이상",
      subtitle:
        "실제 유틸리티, 투명한 메커니즘, 커뮤니티 거버넌스를 갖춘 프로토콜 기반 디지털 자산.",
      benefits: [
        {
          title: "내재 가치",
          description:
            "모든 토큰은 발행에 실제 자산이 필요하여 자연스러운 가격 하한선을 만듭니다. 무료 토큰도, 희석도 없습니다 — 가치 기반 발행만 있습니다.",
        },
        {
          title: "예측 가능성",
          description:
            "알고리즘적 공급 곡선과 투명한 메커니즘. 참여 전에 토큰 경제학의 모든 측면을 모델링, 예측, 검증할 수 있습니다.",
        },
        {
          title: "안전 최우선",
          description:
            "불변의 스마트 컨트랙트, 관리자 키 없음, 업그레이드 프록시 없음. 프로토콜은 누구도 변경, 일시 중지 또는 조작할 수 없습니다 — 창작자를 포함하여.",
        },
        {
          title: "거버넌스 권한",
          description:
            "토큰 보유자는 비례적인 거버넌스 권리를 얻습니다. 온체인 투표를 통해 프로토콜의 미래를 만들어 가세요 — 진정한 탈중앙화 의사결정.",
        },
      ],
    },
    dashboard: {
      title: "프로토콜 통계",
      systemInit: "시스템 초기화 중...",
      mintCostLabel: "현재 민팅 비용",
      awaitingGenesis: "제네시스 대기 중",
      totalSupplyLabel: "총 공급량",
      totalBurnedLabel: "총 소각량",
      reservePoolLabel: "준비금 풀",
      dataStreams:
        "데이터 스트림은 메인넷 출시 시 활성화됩니다...",
    },
    footer: {
      tagline:
        "프로토콜 기반 발행.\n약속이 아닌 수학에 대한 신뢰로 구축.",
      resources: "리소스",
      resourceLinks: ["백서", "GitHub", "감사 보고서", "문서"],
      community: "커뮤니티",
      communityLinks: ["Twitter / X", "Discord", "Telegram", "Medium"],
      copyright:
        "Mintoria Protocol. 모든 권리 보유. 분산형 원칙에 기반하여 구축.",
    },
  },

  pt: {
    nav: {
      home: "Início",
      philosophy: "Filosofia",
      mechanisms: "Mecanismos",
      tokenomics: "Tokenomics",
      dashboard: "Painel",
      launchApp: "Lançar App",
    },
    hero: {
      tag: "Protocolo de Cunhagem Nativa",
      subtitle: "O Protocolo de Cunhagem Nativa",
      description:
        "Cada token é cunhado pela comunidade, respaldado pela matemática e liquidado on-chain.",
      badge1: "O Código é Lei",
      badge2: "Auto-Gerado",
      badge3: "Verificável",
      cta1: "Explorar Protocolo",
      cta2: "Ler Whitepaper",
      scroll: "Rolar",
    },
    philosophy: {
      title: "Por que Mintoria?",
      subtitle:
        "A mudança da emissão de tokens baseada em confiança para a cunhagem impulsionada por protocolo.",
      oldWayTitle: "O Método Antigo",
      oldWay: [
        "Tokens pré-cunhados controlados por iniciados",
        "Alocações e cronogramas de vesting opacos",
        "Oferta inflacionária sem respaldo real",
        "Promessas baseadas em confiança de equipes anônimas",
      ],
      mintoriaWayTitle: "O Método Mintoria",
      mintoriaWay: [
        "100% cunhado pela comunidade — zero pré-alocação",
        "Regras de emissão on-chain transparentes",
        "Escassez matemática com respaldo de reservas",
        "Protocolo sem confiança — o código é a garantia",
      ],
    },
    mechanism: {
      title: "Arquitetura de Confiança",
      subtitle:
        "Três camadas trabalhando em harmonia para criar um protocolo de cunhagem autossustentável e sem confiança.",
      layerLabel: "Camada",
      layers: [
        {
          title: "Motor de Cunhagem",
          subtitle: "Camada de Emissão Central",
          description:
            "Os usuários interagem diretamente com o contrato inteligente para cunhar tokens a um custo calculado dinamicamente. Cada evento de cunhagem é atômico, sem permissão e irreversível.",
        },
        {
          title: "Controle Econômico",
          subtitle: "Feedback Autorregulador",
          description:
            "O custo de cunhagem aumenta com a demanda, criando uma descoberta de preços natural. O fornecimento se ajusta algoritmicamente — sem votos de governança, sem intervenção manual.",
        },
        {
          title: "Liquidação On-Chain",
          subtitle: "Registro Imutável",
          description:
            "Cada transação — cunhagem, queima e alocação de reserva — é liquidada de forma imutável on-chain. Auditabilidade completa, zero dependências off-chain.",
        },
      ],
    },
    tokenomics: {
      title: "Escassez Impulsionada pela Matemática",
      subtitle:
        "Sem tokens de equipe. Sem vendas privadas. Cada token é cunhado pela comunidade através do protocolo.",
      communityMint: "Cunhagem Comunitária",
      teamPercent: "0% Equipe",
      privatePercent: "0% Privado",
      communityPercent: "100% Comunidade",
      nativeMintingTitle: "Cunhagem Nativa",
      nativeMintingItems: [
        "Custo dinâmico calculado por evento de cunhagem",
        "Alocação de reserva em cada transação",
        "Mecanismo automático de divisão de queima",
      ],
      protocolBurnTitle: "Queima de Protocolo",
      protocolBurnItems: [
        "Pressão deflacionária de queima-ao-cunhar",
        "Mecanismo de loop de feedback de inflação",
        "Endereço permanente de buraco negro",
      ],
    },
    investment: {
      title: "Mais Do Que Um Token",
      subtitle:
        "Um ativo digital respaldado por protocolo com utilidade real, mecânicas transparentes e governança comunitária.",
      benefits: [
        {
          title: "Valor Intrínseco",
          description:
            "Cada token custa ativos reais para cunhar, criando um piso de preço natural. Sem tokens gratuitos, sem diluição — apenas emissão respaldada por valor.",
        },
        {
          title: "Previsibilidade",
          description:
            "Curvas de oferta algorítmicas e mecânicas transparentes. Você pode modelar, prever e verificar cada aspecto da economia do token antes de participar.",
        },
        {
          title: "Segurança em Primeiro Lugar",
          description:
            "Contratos inteligentes imutáveis, sem chaves de administrador, sem proxies de atualização. O protocolo não pode ser alterado, pausado ou manipulado por ninguém — incluindo seus criadores.",
        },
        {
          title: "Poder de Governança",
          description:
            "Os detentores de tokens obtêm direitos de governança proporcionais. Molde o futuro do protocolo por meio de votação on-chain — verdadeira tomada de decisão descentralizada.",
        },
      ],
    },
    dashboard: {
      title: "Estatísticas do Protocolo",
      systemInit: "Sistema Inicializando...",
      mintCostLabel: "Custo de Cunhagem Atual",
      awaitingGenesis: "Aguardando Gênesis",
      totalSupplyLabel: "Oferta Total",
      totalBurnedLabel: "Total Queimado",
      reservePoolLabel: "Pool de Reserva",
      dataStreams:
        "Os fluxos de dados serão ativados no lançamento da Mainnet...",
    },
    footer: {
      tagline:
        "Emissão Impulsionada por Protocolo.\nConstructa sobre confiança na matemática, não em promessas.",
      resources: "Recursos",
      resourceLinks: ["Whitepaper", "GitHub", "Relatórios de Auditoria", "Documentação"],
      community: "Comunidade",
      communityLinks: ["Twitter / X", "Discord", "Telegram", "Medium"],
      copyright:
        "Mintoria Protocol. Todos os direitos reservados. Construído sobre princípios descentralizados.",
    },
  },

  vi: {
    nav: {
      home: "Trang chủ",
      philosophy: "Triết lý",
      mechanisms: "Cơ chế",
      tokenomics: "Tokenomics",
      dashboard: "Bảng điều khiển",
      launchApp: "Khởi động App",
    },
    hero: {
      tag: "Giao thức Đúc Token Gốc",
      subtitle: "Giao thức Đúc Token Gốc",
      description:
        "Mỗi token được cộng đồng đúc, được toán học bảo chứng và được thanh toán trên chuỗi.",
      badge1: "Code là Luật",
      badge2: "Tự tạo ra",
      badge3: "Có thể xác minh",
      cta1: "Khám phá Giao thức",
      cta2: "Đọc Whitepaper",
      scroll: "Cuộn",
    },
    philosophy: {
      title: "Tại sao Mintoria?",
      subtitle:
        "Sự chuyển dịch từ phát hành token dựa trên niềm tin sang đúc token theo giao thức.",
      oldWayTitle: "Cách cũ",
      oldWay: [
        "Token đúc sẵn được kiểm soát bởi người trong cuộc",
        "Lịch phân bổ & vesting không minh bạch",
        "Nguồn cung lạm phát không có vật bảo chứng thực",
        "Lời hứa dựa trên niềm tin từ các nhóm ẩn danh",
      ],
      mintoriaWayTitle: "Cách của Mintoria",
      mintoriaWay: [
        "100% cộng đồng đúc — không phân bổ trước",
        "Quy tắc phát hành on-chain minh bạch",
        "Sự khan hiếm theo toán học với dự phòng",
        "Giao thức không cần tin cậy — code là bảo đảm",
      ],
    },
    mechanism: {
      title: "Kiến trúc Tin cậy",
      subtitle:
        "Ba lớp hoạt động hài hòa để tạo ra giao thức đúc token tự vận hành và không cần tin cậy.",
      layerLabel: "Lớp",
      layers: [
        {
          title: "Động cơ Đúc",
          subtitle: "Lớp Phát hành Cốt lõi",
          description:
            "Người dùng tương tác trực tiếp với hợp đồng thông minh để đúc token với chi phí được tính toán linh hoạt. Mỗi sự kiện đúc là nguyên tử, không cần cấp phép và không thể đảo ngược.",
        },
        {
          title: "Kiểm soát Kinh tế",
          subtitle: "Phản hồi Tự điều chỉnh",
          description:
            "Chi phí đúc tăng theo nhu cầu, tạo ra khám phá giá tự nhiên. Nguồn cung điều chỉnh theo thuật toán — không bỏ phiếu quản trị, không can thiệp thủ công.",
        },
        {
          title: "Thanh toán On-Chain",
          subtitle: "Hồ sơ Bất biến",
          description:
            "Mỗi giao dịch — đúc, đốt và phân bổ dự trữ — được thanh toán bất biến trên chuỗi. Khả năng kiểm tra toàn diện, không phụ thuộc off-chain.",
        },
      ],
    },
    tokenomics: {
      title: "Sự Khan hiếm Theo Toán học",
      subtitle:
        "Không token nhóm. Không bán riêng. Mọi token được cộng đồng đúc thông qua giao thức.",
      communityMint: "Đúc Cộng đồng",
      teamPercent: "0% Nhóm",
      privatePercent: "0% Riêng tư",
      communityPercent: "100% Cộng đồng",
      nativeMintingTitle: "Đúc Gốc",
      nativeMintingItems: [
        "Chi phí động tính theo từng sự kiện đúc",
        "Phân bổ dự trữ trong mỗi giao dịch",
        "Cơ chế tự động chia đốt",
      ],
      protocolBurnTitle: "Đốt Giao thức",
      protocolBurnItems: [
        "Áp lực giảm phát đốt-khi-đúc",
        "Cơ chế vòng phản hồi lạm phát",
        "Địa chỉ lỗ đen vĩnh viễn",
      ],
    },
    investment: {
      title: "Hơn Cả Một Token",
      subtitle:
        "Tài sản kỹ thuật số được giao thức hỗ trợ với tiện ích thực, cơ chế minh bạch và quản trị cộng đồng.",
      benefits: [
        {
          title: "Giá trị Nội tại",
          description:
            "Mỗi token cần tài sản thực để đúc, tạo ra sàn giá tự nhiên. Không token miễn phí, không pha loãng — chỉ phát hành được giá trị bảo chứng.",
        },
        {
          title: "Khả năng Dự đoán",
          description:
            "Đường cung thuật toán và cơ chế minh bạch. Bạn có thể mô hình hóa, dự đoán và xác minh mọi khía cạnh kinh tế token trước khi tham gia.",
        },
        {
          title: "An toàn Trước tiên",
          description:
            "Hợp đồng thông minh bất biến, không khóa admin, không proxy nâng cấp. Giao thức không thể bị thay đổi, tạm dừng hoặc thao túng bởi bất kỳ ai — kể cả người tạo ra nó.",
        },
        {
          title: "Quyền lực Quản trị",
          description:
            "Người nắm giữ token có quyền quản trị theo tỷ lệ. Định hình tương lai giao thức thông qua bỏ phiếu on-chain — ra quyết định phi tập trung thực sự.",
        },
      ],
    },
    dashboard: {
      title: "Thống kê Giao thức",
      systemInit: "Hệ thống đang khởi tạo...",
      mintCostLabel: "Chi phí Đúc Hiện tại",
      awaitingGenesis: "Đang chờ Genesis",
      totalSupplyLabel: "Tổng Cung",
      totalBurnedLabel: "Tổng Đốt",
      reservePoolLabel: "Quỹ Dự trữ",
      dataStreams:
        "Các luồng dữ liệu sẽ được kích hoạt khi ra mắt Mainnet...",
    },
    footer: {
      tagline:
        "Phát hành Theo Giao thức.\nXây dựng trên niềm tin vào toán học, không phải lời hứa.",
      resources: "Tài nguyên",
      resourceLinks: ["Whitepaper", "GitHub", "Báo cáo Kiểm toán", "Tài liệu"],
      community: "Cộng đồng",
      communityLinks: ["Twitter / X", "Discord", "Telegram", "Medium"],
      copyright:
        "Mintoria Protocol. Bảo lưu mọi quyền. Xây dựng trên các nguyên tắc phi tập trung.",
    },
  },

  "zh-TW": {
    nav: {
      home: "首頁",
      philosophy: "理念",
      mechanisms: "機制",
      tokenomics: "代幣經濟",
      dashboard: "儀表板",
      launchApp: "啟動應用",
    },
    hero: {
      tag: "原生鑄造協議",
      subtitle: "原生鑄造協議",
      description:
        "每一個代幣都由社群鑄造，以數學為後盾，並在鏈上結算。",
      badge1: "代碼即法律",
      badge2: "自我生成",
      badge3: "可驗證",
      cta1: "探索協議",
      cta2: "閱讀白皮書",
      scroll: "滾動",
    },
    philosophy: {
      title: "為什麼選擇 Mintoria？",
      subtitle:
        "從基於信任的代幣發行到協議驅動的鑄造的轉變。",
      oldWayTitle: "舊有方式",
      oldWay: [
        "由內部人士控制的預挖代幣",
        "不透明的分配和歸屬時間表",
        "沒有真正支撐的通脹供應",
        "匿名團隊基於信任的承諾",
      ],
      mintoriaWayTitle: "Mintoria 方式",
      mintoriaWay: [
        "100% 社群鑄造 — 零預分配",
        "透明的鏈上發行規則",
        "有儲備支撐的數學驅動稀缺性",
        "無需信任的協議 — 代碼即保障",
      ],
    },
    mechanism: {
      title: "信任架構",
      subtitle:
        "三層協同運作，打造自持、無需信任的鑄造協議。",
      layerLabel: "層",
      layers: [
        {
          title: "鑄造引擎",
          subtitle: "核心發行層",
          description:
            "用戶直接與智能合約互動，以動態計算的成本鑄造代幣。每個鑄造事件都是原子性的、無需許可的且不可逆的。",
        },
        {
          title: "經濟控制",
          subtitle: "自我調節反饋",
          description:
            "鑄造成本隨需求增加而上升，形成自然的價格發現機制。供應量通過算法調整 — 無需治理投票，無需人工干預。",
        },
        {
          title: "鏈上結算",
          subtitle: "不可篡改的記錄",
          description:
            "每筆交易 — 鑄造、銷毀和儲備分配 — 都在鏈上不可篡改地結算。完全可審計，零鏈下依賴。",
        },
      ],
    },
    tokenomics: {
      title: "數學驅動的稀缺性",
      subtitle:
        "沒有團隊代幣。沒有私募。每個代幣都由社群通過協議鑄造。",
      communityMint: "社群鑄造",
      teamPercent: "0% 團隊",
      privatePercent: "0% 私募",
      communityPercent: "100% 社群",
      nativeMintingTitle: "原生鑄造",
      nativeMintingItems: [
        "每次鑄造事件動態計算成本",
        "每筆交易進行儲備分配",
        "自動銷毀分割機制",
      ],
      protocolBurnTitle: "協議銷毀",
      protocolBurnItems: [
        "鑄造時銷毀的通縮壓力",
        "通脹反饋循環機制",
        "永久黑洞地址",
      ],
    },
    investment: {
      title: "不只是代幣",
      subtitle:
        "具有真實效用、透明機制和社群治理的協議支持數字資產。",
      benefits: [
        {
          title: "內在價值",
          description:
            "每個代幣都需要真實資產才能鑄造，形成自然的價格下限。沒有免費代幣，沒有稀釋 — 只有以價值支撐的發行。",
        },
        {
          title: "可預測性",
          description:
            "算法供應曲線和透明機制。您可以在參與之前對代幣經濟學的每個方面進行建模、預測和驗證。",
        },
        {
          title: "安全第一",
          description:
            "不可變智能合約，無管理員密鑰，無升級代理。協議無法被任何人修改、暫停或操控 — 包括其創建者。",
        },
        {
          title: "治理權力",
          description:
            "代幣持有者獲得按比例分配的治理權。通過鏈上投票塑造協議的未來 — 真正的去中心化決策。",
        },
      ],
    },
    dashboard: {
      title: "協議統計",
      systemInit: "系統初始化中...",
      mintCostLabel: "當前鑄造成本",
      awaitingGenesis: "等待創世",
      totalSupplyLabel: "總供應量",
      totalBurnedLabel: "總銷毀量",
      reservePoolLabel: "儲備池",
      dataStreams:
        "數據流將在主網啟動時激活...",
    },
    footer: {
      tagline:
        "協議驅動的發行。\n建立在對數學的信任之上，而非承諾。",
      resources: "資源",
      resourceLinks: ["白皮書", "GitHub", "審計報告", "文件"],
      community: "社群",
      communityLinks: ["Twitter / X", "Discord", "Telegram", "Medium"],
      copyright:
        "Mintoria Protocol. 版權所有。建立在去中心化原則之上。",
    },
  },

  "zh-CN": {
    nav: {
      home: "首页",
      philosophy: "理念",
      mechanisms: "机制",
      tokenomics: "代币经济",
      dashboard: "仪表板",
      launchApp: "启动应用",
    },
    hero: {
      tag: "原生铸造协议",
      subtitle: "原生铸造协议",
      description:
        "每一个代币都由社区铸造，以数学为后盾，并在链上结算。",
      badge1: "代码即法律",
      badge2: "自我生成",
      badge3: "可验证",
      cta1: "探索协议",
      cta2: "阅读白皮书",
      scroll: "滚动",
    },
    philosophy: {
      title: "为什么选择 Mintoria？",
      subtitle:
        "从基于信任的代币发行到协议驱动的铸造的转变。",
      oldWayTitle: "旧有方式",
      oldWay: [
        "由内部人士控制的预挖代币",
        "不透明的分配和归属时间表",
        "没有真正支撑的通胀供应",
        "匿名团队基于信任的承诺",
      ],
      mintoriaWayTitle: "Mintoria 方式",
      mintoriaWay: [
        "100% 社区铸造 — 零预分配",
        "透明的链上发行规则",
        "有储备支撑的数学驱动稀缺性",
        "无需信任的协议 — 代码即保障",
      ],
    },
    mechanism: {
      title: "信任架构",
      subtitle:
        "三层协同运作，打造自持、无需信任的铸造协议。",
      layerLabel: "层",
      layers: [
        {
          title: "铸造引擎",
          subtitle: "核心发行层",
          description:
            "用户直接与智能合约交互，以动态计算的成本铸造代币。每个铸造事件都是原子性的、无需许可的且不可逆的。",
        },
        {
          title: "经济控制",
          subtitle: "自我调节反馈",
          description:
            "铸造成本随需求增加而上升，形成自然的价格发现机制。供应量通过算法调整 — 无需治理投票，无需人工干预。",
        },
        {
          title: "链上结算",
          subtitle: "不可篡改的记录",
          description:
            "每笔交易 — 铸造、销毁和储备分配 — 都在链上不可篡改地结算。完全可审计，零链下依赖。",
        },
      ],
    },
    tokenomics: {
      title: "数学驱动的稀缺性",
      subtitle:
        "没有团队代币。没有私募。每个代币都由社区通过协议铸造。",
      communityMint: "社区铸造",
      teamPercent: "0% 团队",
      privatePercent: "0% 私募",
      communityPercent: "100% 社区",
      nativeMintingTitle: "原生铸造",
      nativeMintingItems: [
        "每次铸造事件动态计算成本",
        "每笔交易进行储备分配",
        "自动销毁分割机制",
      ],
      protocolBurnTitle: "协议销毁",
      protocolBurnItems: [
        "铸造时销毁的通缩压力",
        "通胀反馈循环机制",
        "永久黑洞地址",
      ],
    },
    investment: {
      title: "不只是代币",
      subtitle:
        "具有真实效用、透明机制和社区治理的协议支持数字资产。",
      benefits: [
        {
          title: "内在价值",
          description:
            "每个代币都需要真实资产才能铸造，形成自然的价格下限。没有免费代币，没有稀释 — 只有以价值支撑的发行。",
        },
        {
          title: "可预测性",
          description:
            "算法供应曲线和透明机制。您可以在参与之前对代币经济学的每个方面进行建模、预测和验证。",
        },
        {
          title: "安全第一",
          description:
            "不可变智能合约，无管理员密钥，无升级代理。协议无法被任何人修改、暂停或操控 — 包括其创建者。",
        },
        {
          title: "治理权力",
          description:
            "代币持有者获得按比例分配的治理权。通过链上投票塑造协议的未来 — 真正的去中心化决策。",
        },
      ],
    },
    dashboard: {
      title: "协议统计",
      systemInit: "系统初始化中...",
      mintCostLabel: "当前铸造成本",
      awaitingGenesis: "等待创世",
      totalSupplyLabel: "总供应量",
      totalBurnedLabel: "总销毁量",
      reservePoolLabel: "储备池",
      dataStreams:
        "数据流将在主网启动时激活...",
    },
    footer: {
      tagline:
        "协议驱动的发行。\n建立在对数学的信任之上，而非承诺。",
      resources: "资源",
      resourceLinks: ["白皮书", "GitHub", "审计报告", "文档"],
      community: "社区",
      communityLinks: ["Twitter / X", "Discord", "Telegram", "Medium"],
      copyright:
        "Mintoria Protocol. 版权所有。建立在去中心化原则之上。",
    },
  },

  el: {
    nav: {
      home: "Αρχική",
      philosophy: "Φιλοσοφία",
      mechanisms: "Μηχανισμοί",
      tokenomics: "Tokenomics",
      dashboard: "Πίνακας",
      launchApp: "Εκκίνηση App",
    },
    hero: {
      tag: "Πρωτόκολλο Εγγενούς Κοπής",
      subtitle: "Το Πρωτόκολλο Εγγενούς Κοπής",
      description:
        "Κάθε token κόβεται από την κοινότητα, υποστηρίζεται από μαθηματικά και διακανονίζεται on-chain.",
      badge1: "Ο Κώδικας είναι Νόμος",
      badge2: "Αυτο-Δημιουργούμενο",
      badge3: "Επαληθεύσιμο",
      cta1: "Εξερεύνηση Πρωτοκόλλου",
      cta2: "Ανάγνωση Whitepaper",
      scroll: "Κύλιση",
    },
    philosophy: {
      title: "Γιατί Mintoria;",
      subtitle:
        "Η μετάβαση από την έκδοση token βάσει εμπιστοσύνης στην κοπή μέσω πρωτοκόλλου.",
      oldWayTitle: "Ο Παλιός Τρόπος",
      oldWay: [
        "Προ-εξορυγμένα tokens ελεγχόμενα από εμπιστευτικούς",
        "Αδιαφανείς κατανομές & χρονοδιαγράμματα vesting",
        "Πληθωριστική προσφορά χωρίς πραγματικό υπόβαθρο",
        "Υποσχέσεις βάσει εμπιστοσύνης από ανώνυμες ομάδες",
      ],
      mintoriaWayTitle: "Ο Τρόπος Mintoria",
      mintoriaWay: [
        "100% κοπή κοινότητας — μηδενική προ-κατανομή",
        "Διαφανείς κανόνες έκδοσης on-chain",
        "Μαθηματική σπανιότητα με αποθεματικό υπόβαθρο",
        "Πρωτόκολλο χωρίς εμπιστοσύνη — ο κώδικας είναι η εγγύηση",
      ],
    },
    mechanism: {
      title: "Αρχιτεκτονική Εμπιστοσύνης",
      subtitle:
        "Τρία επίπεδα λειτουργούν αρμονικά για τη δημιουργία ενός αυτοσυντηρούμενου, ακύρωτου πρωτοκόλλου κοπής.",
      layerLabel: "Επίπεδο",
      layers: [
        {
          title: "Μηχανή Κοπής",
          subtitle: "Βασικό Επίπεδο Έκδοσης",
          description:
            "Οι χρήστες αλληλεπιδρούν απευθείας με το έξυπνο συμβόλαιο για να κόψουν tokens σε δυναμικά υπολογισμένο κόστος. Κάθε συμβάν κοπής είναι ατομικό, χωρίς άδεια και μη αναστρέψιμο.",
        },
        {
          title: "Οικονομικός Έλεγχος",
          subtitle: "Αυτο-Ρυθμιζόμενη Ανατροφοδότηση",
          description:
            "Το κόστος κοπής αυξάνεται με τη ζήτηση, δημιουργώντας φυσική ανακάλυψη τιμής. Η προσφορά ρυθμίζεται αλγοριθμικά — χωρίς ψηφοφορίες διακυβέρνησης, χωρίς χειροκίνητη παρέμβαση.",
        },
        {
          title: "On-Chain Διακανονισμός",
          subtitle: "Αμετάβλητο Αρχείο",
          description:
            "Κάθε συναλλαγή — κοπή, κάψιμο και κατανομή αποθεματικού — διακανονίζεται αμετάβλητα on-chain. Πλήρης δυνατότητα ελέγχου, μηδενικές εξαρτήσεις off-chain.",
        },
      ],
    },
    tokenomics: {
      title: "Μαθηματικά Καθοδηγούμενη Σπανιότητα",
      subtitle:
        "Χωρίς tokens ομάδας. Χωρίς ιδιωτικές πωλήσεις. Κάθε token κόβεται από την κοινότητα μέσω του πρωτοκόλλου.",
      communityMint: "Κοπή Κοινότητας",
      teamPercent: "0% Ομάδα",
      privatePercent: "0% Ιδιωτικό",
      communityPercent: "100% Κοινότητα",
      nativeMintingTitle: "Εγγενής Κοπή",
      nativeMintingItems: [
        "Δυναμικό κόστος που υπολογίζεται ανά συμβάν κοπής",
        "Κατανομή αποθεματικού σε κάθε συναλλαγή",
        "Αυτόματος μηχανισμός διαχωρισμού κάψιμου",
      ],
      protocolBurnTitle: "Κάψιμο Πρωτοκόλλου",
      protocolBurnItems: [
        "Αποπληθωριστική πίεση κάψιμο-κατά-κοπή",
        "Μηχανισμός βρόχου ανατροφοδότησης πληθωρισμού",
        "Μόνιμη διεύθυνση μαύρης τρύπας",
      ],
    },
    investment: {
      title: "Περισσότερο Από Ένα Token",
      subtitle:
        "Ψηφιακό περιουσιακό στοιχείο υποστηριζόμενο από πρωτόκολλο με πραγματική χρησιμότητα, διαφανείς μηχανισμούς και διακυβέρνηση κοινότητας.",
      benefits: [
        {
          title: "Εγγενής Αξία",
          description:
            "Κάθε token κοστίζει πραγματικά περιουσιακά στοιχεία για κοπή, δημιουργώντας φυσικό κατώτατο όριο τιμής. Χωρίς δωρεάν tokens, χωρίς αραίωση — μόνο έκδοση βάσει αξίας.",
        },
        {
          title: "Προβλεψιμότητα",
          description:
            "Αλγοριθμικές καμπύλες προσφοράς και διαφανείς μηχανισμοί. Μπορείτε να μοντελοποιήσετε, να προβλέψετε και να επαληθεύσετε κάθε πτυχή της οικονομίας token πριν συμμετάσχετε.",
        },
        {
          title: "Η Ασφάλεια Πρώτα",
          description:
            "Αμετάβλητα έξυπνα συμβόλαια, χωρίς κλειδιά διαχειριστή, χωρίς διαμεσολαβητές αναβάθμισης. Το πρωτόκολλο δεν μπορεί να αλλαχθεί, να παυθεί ή να χειραγωγηθεί από κανέναν — ούτε από τους δημιουργούς του.",
        },
        {
          title: "Δύναμη Διακυβέρνησης",
          description:
            "Οι κάτοχοι token αποκτούν αναλογικά δικαιώματα διακυβέρνησης. Διαμορφώστε το μέλλον του πρωτοκόλλου μέσω on-chain ψηφοφορίας — αληθινή αποκεντρωμένη λήψη αποφάσεων.",
        },
      ],
    },
    dashboard: {
      title: "Στατιστικά Πρωτοκόλλου",
      systemInit: "Αρχικοποίηση Συστήματος...",
      mintCostLabel: "Τρέχον Κόστος Κοπής",
      awaitingGenesis: "Αναμονή Genesis",
      totalSupplyLabel: "Συνολική Προσφορά",
      totalBurnedLabel: "Συνολικά Καμένο",
      reservePoolLabel: "Αποθεματική Δεξαμενή",
      dataStreams:
        "Οι ροές δεδομένων θα ενεργοποιηθούν κατά την εκκίνηση του Mainnet...",
    },
    footer: {
      tagline:
        "Έκδοση Καθοδηγούμενη από Πρωτόκολλο.\nΧτισμένο στην εμπιστοσύνη στα μαθηματικά, όχι σε υποσχέσεις.",
      resources: "Πόροι",
      resourceLinks: ["Whitepaper", "GitHub", "Εκθέσεις Ελέγχου", "Τεκμηρίωση"],
      community: "Κοινότητα",
      communityLinks: ["Twitter / X", "Discord", "Telegram", "Medium"],
      copyright:
        "Mintoria Protocol. Με επιφύλαξη παντός δικαιώματος. Χτισμένο σε αποκεντρωμένες αρχές.",
    },
  },

  th: {
    nav: {
      home: "หน้าหลัก",
      philosophy: "ปรัชญา",
      mechanisms: "กลไก",
      tokenomics: "Tokenomics",
      dashboard: "แดชบอร์ด",
      launchApp: "เปิดแอป",
    },
    hero: {
      tag: "โปรโตคอลการมินต์แบบเนทีฟ",
      subtitle: "โปรโตคอลการมินต์แบบเนทีฟ",
      description:
        "ทุกโทเคนถูกมินต์โดยชุมชน ได้รับการสนับสนุนจากคณิตศาสตร์ และชำระบัญชีบนเชน",
      badge1: "โค้ดคือกฎหมาย",
      badge2: "สร้างตนเอง",
      badge3: "ตรวจสอบได้",
      cta1: "สำรวจโปรโตคอล",
      cta2: "อ่าน Whitepaper",
      scroll: "เลื่อน",
    },
    philosophy: {
      title: "ทำไมต้อง Mintoria?",
      subtitle:
        "การเปลี่ยนจากการออกโทเคนแบบอิงความไว้วางใจไปสู่การมินต์ที่ขับเคลื่อนด้วยโปรโตคอล",
      oldWayTitle: "วิธีเดิม",
      oldWay: [
        "โทเคนที่ถูกขุดล่วงหน้าโดยคนใน",
        "การจัดสรรและตารางการ vesting ที่ไม่โปร่งใส",
        "อุปทานเงินเฟ้อโดยไม่มีหลักทรัพย์ค้ำประกัน",
        "สัญญาที่อิงความไว้วางใจจากทีมนิรนาม",
      ],
      mintoriaWayTitle: "วิธีของ Mintoria",
      mintoriaWay: [
        "100% มินต์โดยชุมชน — ไม่มีการจัดสรรล่วงหน้า",
        "กฎการออกโทเคนบนเชนที่โปร่งใส",
        "ความขาดแคลนที่ขับเคลื่อนด้วยคณิตศาสตร์พร้อมทุนสำรอง",
        "โปรโตคอลที่ไม่ต้องอาศัยความไว้วางใจ — โค้ดคือหลักประกัน",
      ],
    },
    mechanism: {
      title: "สถาปัตยกรรมแห่งความไว้วางใจ",
      subtitle:
        "สามชั้นทำงานร่วมกันอย่างกลมกลืนเพื่อสร้างโปรโตคอลการมินต์ที่ยั่งยืนและไม่ต้องอาศัยความไว้วางใจ",
      layerLabel: "ชั้น",
      layers: [
        {
          title: "เครื่องยนต์มินต์",
          subtitle: "ชั้นการออกโทเคนหลัก",
          description:
            "ผู้ใช้โต้ตอบโดยตรงกับสมาร์ทคอนแทรคเพื่อมินต์โทเคนในราคาที่คำนวณแบบไดนามิก ทุกกิจกรรมมินต์เป็นอะตอมมิก ไม่ต้องขออนุญาต และไม่สามารถย้อนกลับได้",
        },
        {
          title: "การควบคุมทางเศรษฐกิจ",
          subtitle: "ข้อเสนอแนะที่ปรับตนเอง",
          description:
            "ต้นทุนการมินต์เพิ่มขึ้นตามอุปสงค์ สร้างการค้นพบราคาตามธรรมชาติ อุปทานปรับตามอัลกอริทึม — ไม่มีการลงคะแนนเสียงกำกับดูแล ไม่มีการแทรกแซงด้วยตนเอง",
        },
        {
          title: "การชำระบัญชีบนเชน",
          subtitle: "บันทึกที่ไม่เปลี่ยนแปลง",
          description:
            "ทุกธุรกรรม — การมินต์ การเบิร์น และการจัดสรรทุนสำรอง — ได้รับการชำระบัญชีอย่างไม่เปลี่ยนแปลงบนเชน ตรวจสอบได้ทั้งหมด ไม่พึ่งพาสิ่งนอกเชน",
        },
      ],
    },
    tokenomics: {
      title: "ความขาดแคลนที่ขับเคลื่อนด้วยคณิตศาสตร์",
      subtitle:
        "ไม่มีโทเคนทีม ไม่มีการขายส่วนตัว ทุกโทเคนถูกมินต์โดยชุมชนผ่านโปรโตคอล",
      communityMint: "มินต์ชุมชน",
      teamPercent: "0% ทีม",
      privatePercent: "0% ส่วนตัว",
      communityPercent: "100% ชุมชน",
      nativeMintingTitle: "การมินต์แบบเนทีฟ",
      nativeMintingItems: [
        "ต้นทุนไดนามิกคำนวณต่อกิจกรรมมินต์",
        "การจัดสรรทุนสำรองในทุกธุรกรรม",
        "กลไกแบ่งการเบิร์นอัตโนมัติ",
      ],
      protocolBurnTitle: "การเบิร์นโปรโตคอล",
      protocolBurnItems: [
        "แรงกดดันเงินฝืดจากการเบิร์นขณะมินต์",
        "กลไกวงข้อเสนอแนะเงินเฟ้อ",
        "ที่อยู่ black hole ถาวร",
      ],
    },
    investment: {
      title: "มากกว่าแค่โทเคน",
      subtitle:
        "สินทรัพย์ดิจิทัลที่ได้รับการสนับสนุนจากโปรโตคอลพร้อมประโยชน์ใช้สอยจริง กลไกโปร่งใส และการกำกับดูแลชุมชน",
      benefits: [
        {
          title: "มูลค่าที่แท้จริง",
          description:
            "ทุกโทเคนต้องใช้สินทรัพย์จริงในการมินต์ สร้างระดับราคาขั้นต่ำตามธรรมชาติ ไม่มีโทเคนฟรี ไม่มีการเจือจาง — มีแต่การออกโทเคนที่มีมูลค่าค้ำประกัน",
        },
        {
          title: "ความสามารถในการคาดการณ์",
          description:
            "เส้นอุปทานอัลกอริทึมและกลไกโปร่งใส คุณสามารถสร้างแบบจำลอง คาดการณ์ และตรวจสอบทุกแง่มุมของเศรษฐศาสตร์โทเคนก่อนเข้าร่วม",
        },
        {
          title: "ความปลอดภัยก่อน",
          description:
            "สมาร์ทคอนแทรคที่ไม่เปลี่ยนแปลง ไม่มีคีย์แอดมิน ไม่มีพร็อกซีอัปเกรด โปรโตคอลไม่สามารถถูกเปลี่ยนแปลง หยุดชั่วคราว หรือปรับแต่งโดยใครก็ตาม — รวมถึงผู้สร้าง",
        },
        {
          title: "อำนาจการกำกับดูแล",
          description:
            "ผู้ถือโทเคนได้รับสิทธิ์การกำกับดูแลตามสัดส่วน กำหนดทิศทางอนาคตของโปรโตคอลผ่านการลงคะแนนบนเชน — การตัดสินใจแบบกระจายอำนาจอย่างแท้จริง",
        },
      ],
    },
    dashboard: {
      title: "สถิติโปรโตคอล",
      systemInit: "กำลังเริ่มต้นระบบ...",
      mintCostLabel: "ต้นทุนมินต์ปัจจุบัน",
      awaitingGenesis: "รอ Genesis",
      totalSupplyLabel: "อุปทานทั้งหมด",
      totalBurnedLabel: "เบิร์นทั้งหมด",
      reservePoolLabel: "กองทุนสำรอง",
      dataStreams:
        "กระแสข้อมูลจะถูกเปิดใช้งานเมื่อ Mainnet เปิดตัว...",
    },
    footer: {
      tagline:
        "การออกโทเคนที่ขับเคลื่อนด้วยโปรโตคอล\nสร้างบนความไว้วางใจในคณิตศาสตร์ ไม่ใช่สัญญา",
      resources: "ทรัพยากร",
      resourceLinks: ["Whitepaper", "GitHub", "รายงานการตรวจสอบ", "เอกสาร"],
      community: "ชุมชน",
      communityLinks: ["Twitter / X", "Discord", "Telegram", "Medium"],
      copyright:
        "Mintoria Protocol. สงวนลิขสิทธิ์ทั้งหมด สร้างบนหลักการกระจายอำนาจ",
    },
  },

  ru: {
    nav: {
      home: "Главная",
      philosophy: "Философия",
      mechanisms: "Механизмы",
      tokenomics: "Токеномика",
      dashboard: "Панель",
      launchApp: "Запустить App",
    },
    hero: {
      tag: "Нативный Протокол Чеканки",
      subtitle: "Нативный Протокол Чеканки",
      description:
        "Каждый токен чеканится сообществом, обеспечен математикой и рассчитывается on-chain.",
      badge1: "Код — это Закон",
      badge2: "Самогенерируемый",
      badge3: "Верифицируемый",
      cta1: "Исследовать Протокол",
      cta2: "Читать Whitepaper",
      scroll: "Прокрутить",
    },
    philosophy: {
      title: "Почему Mintoria?",
      subtitle:
        "Переход от выпуска токенов на основе доверия к чеканке, управляемой протоколом.",
      oldWayTitle: "Старый Способ",
      oldWay: [
        "Предварительно выпущенные токены под контролем инсайдеров",
        "Непрозрачные распределения и графики вестинга",
        "Инфляционное предложение без реального обеспечения",
        "Обещания на основе доверия от анонимных команд",
      ],
      mintoriaWayTitle: "Способ Mintoria",
      mintoriaWay: [
        "100% чеканка сообществом — ноль предварительного распределения",
        "Прозрачные правила эмиссии on-chain",
        "Математическая дефицитность с резервным обеспечением",
        "Протокол без доверия — код является гарантией",
      ],
    },
    mechanism: {
      title: "Архитектура Доверия",
      subtitle:
        "Три уровня, работающих в гармонии для создания самодостаточного, не требующего доверия протокола чеканки.",
      layerLabel: "Уровень",
      layers: [
        {
          title: "Движок Чеканки",
          subtitle: "Базовый Уровень Эмиссии",
          description:
            "Пользователи взаимодействуют напрямую со смарт-контрактом для чеканки токенов по динамически рассчитанной стоимости. Каждое событие чеканки является атомарным, не требует разрешений и необратимо.",
        },
        {
          title: "Экономический Контроль",
          subtitle: "Саморегулирующаяся Обратная Связь",
          description:
            "Стоимость чеканки увеличивается со спросом, создавая естественное ценообразование. Предложение регулируется алгоритмически — без голосований по управлению, без ручного вмешательства.",
        },
        {
          title: "On-Chain Расчёт",
          subtitle: "Неизменяемый Реестр",
          description:
            "Каждая транзакция — чеканка, сжигание и распределение резерва — рассчитывается неизменяемо on-chain. Полная проверяемость, ноль зависимостей off-chain.",
        },
      ],
    },
    tokenomics: {
      title: "Математически Управляемая Дефицитность",
      subtitle:
        "Нет командных токенов. Нет частных продаж. Каждый токен чеканится сообществом через протокол.",
      communityMint: "Общественная Чеканка",
      teamPercent: "0% Команда",
      privatePercent: "0% Частные",
      communityPercent: "100% Сообщество",
      nativeMintingTitle: "Нативная Чеканка",
      nativeMintingItems: [
        "Динамическая стоимость рассчитывается на каждое событие чеканки",
        "Резервное распределение при каждой транзакции",
        "Автоматический механизм разделения сжигания",
      ],
      protocolBurnTitle: "Сжигание Протокола",
      protocolBurnItems: [
        "Дефляционное давление сжигания-при-чеканке",
        "Механизм петли обратной связи по инфляции",
        "Постоянный адрес чёрной дыры",
      ],
    },
    investment: {
      title: "Больше, Чем Токен",
      subtitle:
        "Цифровой актив, обеспеченный протоколом, с реальной полезностью, прозрачными механизмами и управлением сообщества.",
      benefits: [
        {
          title: "Внутренняя Ценность",
          description:
            "Каждый токен требует реальных активов для чеканки, создавая естественный ценовой пол. Никаких бесплатных токенов, никакого разводнения — только эмиссия, обеспеченная ценностью.",
        },
        {
          title: "Предсказуемость",
          description:
            "Алгоритмические кривые предложения и прозрачные механизмы. Вы можете моделировать, предсказывать и проверять каждый аспект токенной экономики перед участием.",
        },
        {
          title: "Безопасность Прежде Всего",
          description:
            "Неизменяемые смарт-контракты, нет административных ключей, нет прокси-серверов обновления. Протокол не может быть изменён, приостановлен или манипулирован никем — включая его создателей.",
        },
        {
          title: "Власть Управления",
          description:
            "Держатели токенов получают пропорциональные права управления. Формируйте будущее протокола через on-chain голосование — истинное децентрализованное принятие решений.",
        },
      ],
    },
    dashboard: {
      title: "Статистика Протокола",
      systemInit: "Система Инициализируется...",
      mintCostLabel: "Текущая Стоимость Чеканки",
      awaitingGenesis: "Ожидание Genesis",
      totalSupplyLabel: "Общее Предложение",
      totalBurnedLabel: "Всего Сожжено",
      reservePoolLabel: "Резервный Пул",
      dataStreams:
        "Потоки данных будут активированы при запуске Mainnet...",
    },
    footer: {
      tagline:
        "Эмиссия, Управляемая Протоколом.\nПостроена на доверии к математике, а не обещаниям.",
      resources: "Ресурсы",
      resourceLinks: ["Whitepaper", "GitHub", "Отчёты об Аудите", "Документация"],
      community: "Сообщество",
      communityLinks: ["Twitter / X", "Discord", "Telegram", "Medium"],
      copyright:
        "Mintoria Protocol. Все права защищены. Построен на принципах децентрализации.",
    },
  },
};

export default translations;
