(function () {
  'use strict';

  const SUPPORTED_LANGS = ['es', 'en', 'de', 'fr', 'it'];
  const DEFAULT_LANG = 'es';

  const textBundles = {
    homeSubtitle: {
      es: 'Lista Especial de Servicios 2025',
      en: 'Special Service List 2025',
      de: 'Sonderdienstliste 2025',
      fr: 'Liste spéciale de services 2025',
      it: 'Elenco speciale dei servizi 2025'
    },
    serviceTagline: {
      es: 'Servicios profesionales automatizados',
      en: 'Automated professional services',
      de: 'Automatisierte professionelle Dienstleistungen',
      fr: 'Services professionnels automatisés',
      it: 'Servizi professionali automatizzati'
    },
    footer: {
      es: 'Business Bots Solutions © 2025 — Servicios profesionales sin comisión por venta',
      en: 'Business Bots Solutions © 2025 — Professional services with no sales commission',
      de: 'Business Bots Solutions © 2025 — Professionelle Dienstleistungen ohne Verkaufsprovision',
      fr: 'Business Bots Solutions © 2025 — Services professionnels sans commission de vente',
      it: 'Business Bots Solutions © 2025 — Servizi professionali senza commissioni di vendita'
    }
  };

  function normaliseLanguage(lang) {
    if (typeof lang !== 'string') {
      return DEFAULT_LANG;
const translations = {
  branding: {
    es: {
      title: "Branding Completo",
      lead: "Identidad visual coherente y profesional para fortalecer la presencia de tu marca en todos los canales digitales y físicos.",
      section1Title: "Kit completo de identidad",
      section1Paragraph: "Creamos un sistema visual consistente para reforzar tu presencia en canales impresos y digitales con piezas listas para usar.",
      section1Feature1: "Logo vectorial con versiones horizontales, verticales y monocromas",
      section1Feature2: "Guía de estilo completa con tipografía, color y componentes UI",
      section1Feature3: "Plantillas editables para redes sociales, presentaciones y flyers",
      section1Feature4: "Manual de tono de voz y bibliotecas para Canva o Figma",
      section2Title: "Detalles técnicos",
      section2Item1Term: "Entrega",
      section2Item1Desc: "2–5 semanas dependiendo de rondas de validación y activos previos.",
      section2Item2Term: "Herramientas",
      section2Item2Desc: "Canva, Illustrator, Figma y repositorios colaborativos en Drive.",
      section2Item3Term: "Integración",
      section2Item3Desc: "Materiales adaptables para web, redes sociales, señalética y NFC.",
      section2Item4Term: "Soporte",
      section2Item4Desc: "Incluye acompañamiento en lanzamiento y asesoría de impresión.",
      section3Title: "Proceso creativo",
      section3Paragraph1: "Exploramos moodboards y referencias, desarrollamos propuestas visuales y realizamos sesiones de feedback hasta lograr la versión final aprobada.",
      section3Paragraph2: "Entregamos archivos editables, exportables y checklist de implementación para asegurar consistencia en todas tus aplicaciones futuras.",
      section4Title: "Inversión preferente",
      section4Regular: "€999",
      section4Discount: "€799",
      section4Saving: "Ahorra €200",
      section4Note: "Incluye tres propuestas iniciales, dos rondas de ajustes y preparación de archivos finales para imprenta y medios digitales.",
      section5Title: "Condiciones y entregables",
      section5Paragraph: "Requerimos briefing completo, valores de marca y referencias visuales. La agenda se bloquea con 30% inicial y el saldo a la entrega. Podemos gestionar sesiones fotográficas o producción de video mediante partners especializados.",
      ctaPrimary: "Contáctanos por WhatsApp",
      ctaSecondary: "← Volver a servicios"
    },
    en: {
      title: "Comprehensive Branding",
      lead: "Consistent, professional visual identity to strengthen your brand presence across every digital and physical channel.",
      section1Title: "Complete identity kit",
      section1Paragraph: "We build a cohesive visual system so you can show up polished across print and digital touchpoints with ready-to-use assets.",
      section1Feature1: "Vector logo with horizontal, vertical and monochrome versions",
      section1Feature2: "Full style guide covering typography, color and UI components",
      section1Feature3: "Editable templates for social media, presentations and flyers",
      section1Feature4: "Voice and messaging manual plus Canva/Figma libraries",
      section2Title: "Technical details",
      section2Item1Term: "Delivery",
      section2Item1Desc: "2–5 weeks depending on validation rounds and existing assets.",
      section2Item2Term: "Tools",
      section2Item2Desc: "Canva, Illustrator, Figma and collaborative Drive repositories.",
      section2Item3Term: "Integration",
      section2Item3Desc: "Assets adaptable for web, social media, signage and NFC.",
      section2Item4Term: "Support",
      section2Item4Desc: "Includes launch accompaniment and print production advisory.",
      section3Title: "Creative process",
      section3Paragraph1: "We explore moodboards and references, craft visual proposals and host feedback sessions until the final version is approved.",
      section3Paragraph2: "You receive editable files, exports and an implementation checklist to keep every future application consistent.",
      section4Title: "Preferred investment",
      section4Regular: "€999",
      section4Discount: "€799",
      section4Saving: "Save €200",
      section4Note: "Includes three initial concepts, two refinement rounds and preparation of final files for print and digital media.",
      section5Title: "Terms & deliverables",
      section5Paragraph: "We require a full brief, brand values and visual references. Scheduling is secured with 30% upfront and the balance on delivery. We can coordinate photo or video production through specialist partners.",
      ctaPrimary: "Contact us on WhatsApp",
      ctaSecondary: "← Back to services"
    },
    de: {
      title: "Ganzheitliches Branding",
      lead: "Konsistente, professionelle Markenidentität für einen starken Auftritt auf allen digitalen und physischen Kanälen.",
      section1Title: "Komplettes Identitätspaket",
      section1Paragraph: "Wir entwickeln ein kohärentes visuelles System, damit du dich mit einsatzbereiten Assets in Print und Digital einheitlich präsentierst.",
      section1Feature1: "Vektorlogo mit horizontalen, vertikalen und einfarbigen Varianten",
      section1Feature2: "Umfassender Styleguide mit Typografie, Farben und UI-Komponenten",
      section1Feature3: "Editierbare Vorlagen für Social Media, Präsentationen und Flyer",
      section1Feature4: "Tonleitfaden sowie Canva- und Figma-Bibliotheken",
      section2Title: "Technische Details",
      section2Item1Term: "Lieferung",
      section2Item1Desc: "2–5 Wochen je nach Feedbackrunden und vorhandenen Assets.",
      section2Item2Term: "Tools",
      section2Item2Desc: "Canva, Illustrator, Figma und kollaborative Drive-Repositories.",
      section2Item3Term: "Integration",
      section2Item3Desc: "Anpassbare Materialien für Web, Social Media, Beschilderung und NFC.",
      section2Item4Term: "Support",
      section2Item4Desc: "Begleitung zum Launch sowie Beratung für Druckproduktionen.",
      section3Title: "Kreativprozess",
      section3Paragraph1: "Wir analysieren Moodboards und Referenzen, entwickeln visuelle Vorschläge und moderieren Feedback-Sessions bis zur finalen Freigabe.",
      section3Paragraph2: "Du erhältst bearbeitbare Dateien, Exporte und eine Implementierungs-Checkliste für künftige Anwendungen.",
      section4Title: "Bevorzugtes Investment",
      section4Regular: "€999",
      section4Discount: "€799",
      section4Saving: "Spare 200 €",
      section4Note: "Enthält drei Erstentwürfe, zwei Überarbeitungsrunden und die Aufbereitung finaler Dateien für Druck und digitale Medien.",
      section5Title: "Bedingungen & Deliverables",
      section5Paragraph: "Wir benötigen ein vollständiges Briefing, Markenwerte und visuelle Referenzen. Die Terminierung wird mit 30 % Anzahlung und Restzahlung bei Lieferung gesichert. Auf Wunsch koordinieren wir Foto- oder Videoproduktionen über spezialisierte Partner.",
      ctaPrimary: "Kontaktiere uns per WhatsApp",
      ctaSecondary: "← Zurück zu den Services"
    },
    fr: {
      title: "Branding complet",
      lead: "Identité visuelle cohérente et professionnelle pour renforcer votre présence sur tous les canaux digitaux et physiques.",
      section1Title: "Kit d'identité complet",
      section1Paragraph: "Nous construisons un système visuel cohérent pour vous permettre d'apparaître soigné avec des ressources prêtes à l'emploi sur le print et le digital.",
      section1Feature1: "Logo vectoriel avec versions horizontales, verticales et monochromes",
      section1Feature2: "Guide de style complet incluant typographie, couleurs et composants UI",
      section1Feature3: "Modèles éditables pour réseaux sociaux, présentations et flyers",
      section1Feature4: "Manuel de ton de voix et bibliothèques Canva/Figma",
      section2Title: "Détails techniques",
      section2Item1Term: "Livraison",
      section2Item1Desc: "2 à 5 semaines selon les cycles de validation et les assets fournis.",
      section2Item2Term: "Outils",
      section2Item2Desc: "Canva, Illustrator, Figma et dépôts collaboratifs sur Drive.",
      section2Item3Term: "Intégration",
      section2Item3Desc: "Supports adaptables pour le web, les réseaux sociaux, la signalétique et le NFC.",
      section2Item4Term: "Support",
      section2Item4Desc: "Accompagnement au lancement et conseil pour les productions imprimées.",
      section3Title: "Processus créatif",
      section3Paragraph1: "Nous explorons moodboards et références, élaborons des propositions visuelles et animons des sessions de feedback jusqu'à validation finale.",
      section3Paragraph2: "Vous recevez des fichiers éditables, des exports et une checklist d'implémentation pour garantir la cohérence de vos futures applications.",
      section4Title: "Investissement préférentiel",
      section4Regular: "€999",
      section4Discount: "€799",
      section4Saving: "Économisez 200 €",
      section4Note: "Comprend trois concepts initiaux, deux cycles d'ajustements et la préparation des fichiers finaux pour l'impression et le digital.",
      section5Title: "Conditions & livrables",
      section5Paragraph: "Nous demandons un brief complet, les valeurs de marque et des références visuelles. Le planning est réservé avec 30 % d'acompte et le solde à la livraison. Nous pouvons coordonner des shootings photo ou vidéo via des partenaires spécialisés.",
      ctaPrimary: "Contactez-nous sur WhatsApp",
      ctaSecondary: "← Retour aux services"
    },
    it: {
      title: "Branding completo",
      lead: "Identità visiva coerente e professionale per rafforzare la presenza del tuo brand su tutti i canali digitali e fisici.",
      section1Title: "Kit di identità completo",
      section1Paragraph: "Creiamo un sistema visivo coerente per presentarti in modo impeccabile su stampa e digitale con asset pronti all'uso.",
      section1Feature1: "Logo vettoriale con versioni orizzontali, verticali e monocromatiche",
      section1Feature2: "Style guide completa con tipografia, colori e componenti UI",
      section1Feature3: "Template modificabili per social, presentazioni e volantini",
      section1Feature4: "Manuale di tono di voce e librerie per Canva o Figma",
      section2Title: "Dettagli tecnici",
      section2Item1Term: "Consegna",
      section2Item1Desc: "2–5 settimane in base ai cicli di validazione e agli asset disponibili.",
      section2Item2Term: "Strumenti",
      section2Item2Desc: "Canva, Illustrator, Figma e repository collaborativi su Drive.",
      section2Item3Term: "Integrazione",
      section2Item3Desc: "Materiali adattabili per web, social media, segnaletica e NFC.",
      section2Item4Term: "Supporto",
      section2Item4Desc: "Include accompagnamento al lancio e consulenza per la stampa.",
      section3Title: "Processo creativo",
      section3Paragraph1: "Esploriamo moodboard e riferimenti, sviluppiamo proposte visive e conduciamo sessioni di feedback fino all'approvazione finale.",
      section3Paragraph2: "Ricevi file modificabili, esportazioni e una checklist di implementazione per mantenere coerenti tutte le applicazioni future.",
      section4Title: "Investimento preferenziale",
      section4Regular: "€999",
      section4Discount: "€799",
      section4Saving: "Risparmia 200 €",
      section4Note: "Include tre proposte iniziali, due cicli di revisioni e la preparazione dei file finali per stampa e media digitali.",
      section5Title: "Condizioni e deliverable",
      section5Paragraph: "Richiediamo briefing completo, valori di brand e riferimenti visivi. L'agenda viene bloccata con il 30% iniziale e saldo alla consegna. Possiamo coordinare shooting foto o video tramite partner specializzati.",
      ctaPrimary: "Contattaci su WhatsApp",
      ctaSecondary: "← Torna ai servizi"
    }
  },
  "menu-redesign": {
    es: {
      title: "Rediseño de Menú e Interfaz Digital",
      lead: "Reestructuración visual y funcional centrada en conversión para maximizar la experiencia del usuario y aumentar las ventas.",
      section1Title: "Qué incluye",
      section1Paragraph: "Transformamos tu carta digital en una experiencia fluida, actualizada y enfocada en conversión para clientes presenciales y digitales.",
      section1Feature1: "Auditoría UX completa con informes accionables",
      section1Feature2: "Prototipo interactivo listo para test A/B",
      section1Feature3: "Guía de estilos y componentes reutilizables",
      section1Feature4: "Handoff técnico detallado para tu equipo de desarrollo",
      section2Title: "Detalles técnicos",
      section2Item1Term: "Entrega",
      section2Item1Desc: "2–4 semanas según alcance y activos actuales.",
      section2Item2Term: "Herramientas",
      section2Item2Desc: "Figma, Canva, HTML/CSS colaborativo y librerías personalizadas.",
      section2Item3Term: "Compatibilidad",
      section2Item3Desc: "Integración con CMS, kioscos digitales o plataformas de pedidos existentes.",
      section2Item4Term: "Soporte",
      section2Item4Desc: "2 rondas de ajustes + documentación para tu equipo interno.",
      section3Title: "Proceso colaborativo",
      section3Paragraph1: "Sigue nuestro flujo comprobado: auditoría → arquitectura de información → prototipo navegable → pruebas con usuarios → entrega final optimizada.",
      section3Paragraph2: "Integramos entregables con handoff técnico listo para desarrolladores y un kit de assets exportables en múltiples formatos.",
      section4Title: "Inversión preferente",
      section4Regular: "€1.124",
      section4Discount: "€899",
      section4Saving: "Ahorra €225",
      section4Note: "Incluye diseño responsive, guidelines para actualizaciones futuras y capacitación breve para tu equipo.",
      section5Title: "Condiciones y entregables",
      section5Paragraph: "El proyecto se agenda con un 30% inicial y balance al entregar la versión final aprobada. Entregamos archivos editables, exportables y documentación de implementación para asegurar consistencia en todas tus sedes.",
      ctaPrimary: "Contáctanos por WhatsApp",
      ctaSecondary: "← Volver a servicios"
    },
    en: {
      title: "Menu Redesign & Digital Interface",
      lead: "UI/UX redesign focused on conversion to maximize user experience and boost sales.",
      section1Title: "What's included",
      section1Paragraph: "We transform your digital menu into a fluid, up-to-date experience focused on conversion for on-site and online customers.",
      section1Feature1: "Full UX audit with actionable reports",
      section1Feature2: "Interactive prototype ready for A/B testing",
      section1Feature3: "Reusable style guide and component library",
      section1Feature4: "Detailed technical handoff for your development team",
      section2Title: "Technical details",
      section2Item1Term: "Delivery",
      section2Item1Desc: "2–4 weeks depending on scope and current assets.",
      section2Item2Term: "Tools",
      section2Item2Desc: "Figma, Canva, collaborative HTML/CSS and custom libraries.",
      section2Item3Term: "Compatibility",
      section2Item3Desc: "Integrates with CMS platforms, digital kiosks or existing ordering systems.",
      section2Item4Term: "Support",
      section2Item4Desc: "2 revision rounds plus documentation for your internal team.",
      section3Title: "Collaborative process",
      section3Paragraph1: "Follow our proven flow: audit → information architecture → navigable prototype → user testing → optimized final handoff.",
      section3Paragraph2: "We bundle developer-ready handoff materials and an exportable asset kit in multiple formats.",
      section4Title: "Preferred investment",
      section4Regular: "€1,124",
      section4Discount: "€899",
      section4Saving: "Save €225",
      section4Note: "Includes responsive design, update guidelines and a short training session for your team.",
      section5Title: "Terms & deliverables",
      section5Paragraph: "Project kicks off with 30% upfront and the balance upon final approval. You receive editable files, exports and implementation docs to keep every location consistent.",
      ctaPrimary: "Contact us on WhatsApp",
      ctaSecondary: "← Back to services"
    },
    de: {
      title: "Menü-Redesign & Digitale Schnittstelle",
      lead: "UI/UX-Redesign mit Fokus auf Konversion, um das Nutzererlebnis zu maximieren und den Umsatz zu steigern.",
      section1Title: "Leistungsumfang",
      section1Paragraph: "Wir verwandeln deine digitale Speisekarte in ein nahtloses, aktuelles Erlebnis mit Fokus auf Konversion für Gäste vor Ort und online.",
      section1Feature1: "Umfassendes UX-Audit mit umsetzbaren Erkenntnissen",
      section1Feature2: "Interaktiver Prototyp bereit für A/B-Tests",
      section1Feature3: "Wiederverwendbarer Styleguide und Komponentenbibliothek",
      section1Feature4: "Detaillierter technischer Handoff für dein Entwicklerteam",
      section2Title: "Technische Details",
      section2Item1Term: "Lieferung",
      section2Item1Desc: "2–4 Wochen je nach Umfang und vorhandenen Assets.",
      section2Item2Term: "Tools",
      section2Item2Desc: "Figma, Canva, kollaboratives HTML/CSS und individuelle Libraries.",
      section2Item3Term: "Kompatibilität",
      section2Item3Desc: "Anbindung an CMS, digitale Kioske oder bestehende Bestellsysteme.",
      section2Item4Term: "Support",
      section2Item4Desc: "2 Überarbeitungsrunden plus Dokumentation für dein internes Team.",
      section3Title: "Gemeinsamer Prozess",
      section3Paragraph1: "Unser bewährter Ablauf: Audit → Informationsarchitektur → klickbarer Prototyp → Nutzertests → optimiertes Finale.",
      section3Paragraph2: "Wir liefern entwicklerfertige Übergabedokumente sowie ein exportierbares Asset-Kit in mehreren Formaten.",
      section4Title: "Bevorzugtes Investment",
      section4Regular: "€1.124",
      section4Discount: "€899",
      section4Saving: "Spare 225 €",
      section4Note: "Inklusive Responsive-Design, Richtlinien für Updates und kurzem Training für dein Team.",
      section5Title: "Rahmenbedingungen & Deliverables",
      section5Paragraph: "Projektstart mit 30 % Anzahlung, Rest bei finaler Freigabe. Du erhältst editierbare Dateien, Exporte und Implementierungsdokumente für konsistente Standorte.",
      ctaPrimary: "Kontaktiere uns per WhatsApp",
      ctaSecondary: "← Zurück zu den Services"
    },
    fr: {
      title: "Refonte de menu & interface numérique",
      lead: "Refonte UI/UX axée sur la conversion pour maximiser l’expérience utilisateur et augmenter les ventes.",
      section1Title: "Ce qui est inclus",
      section1Paragraph: "Nous transformons votre menu digital en une expérience fluide, mise à jour et orientée conversion pour vos clients sur place et en ligne.",
      section1Feature1: "Audit UX complet avec insights actionnables",
      section1Feature2: "Prototype interactif prêt pour des tests A/B",
      section1Feature3: "Guide de style et bibliothèque de composants réutilisables",
      section1Feature4: "Handoff technique détaillé pour votre équipe de développement",
      section2Title: "Détails techniques",
      section2Item1Term: "Livraison",
      section2Item1Desc: "2 à 4 semaines selon le périmètre et les assets disponibles.",
      section2Item2Term: "Outils",
      section2Item2Desc: "Figma, Canva, HTML/CSS collaboratif et bibliothèques personnalisées.",
      section2Item3Term: "Compatibilité",
      section2Item3Desc: "Intégration avec CMS, bornes digitales ou systèmes de commande existants.",
      section2Item4Term: "Support",
      section2Item4Desc: "2 cycles de révision et documentation pour votre équipe interne.",
      section3Title: "Processus collaboratif",
      section3Paragraph1: "Suivez notre parcours éprouvé : audit → architecture de l’information → prototype navigable → tests utilisateurs → livraison finale optimisée.",
      section3Paragraph2: "Nous fournissons une passation prête pour les développeurs ainsi qu’un kit d’assets exportables dans plusieurs formats.",
      section4Title: "Investissement privilégié",
      section4Regular: "€1 124",
      section4Discount: "€899",
      section4Saving: "Économisez 225 €",
      section4Note: "Inclut design responsive, lignes directrices pour les mises à jour futures et courte formation de votre équipe.",
      section5Title: "Conditions & livrables",
      section5Paragraph: "Le projet démarre avec 30 % d’acompte et le solde à la validation finale. Nous livrons fichiers éditables, exports et documentation de mise en œuvre pour assurer la cohérence sur tous vos points de contact.",
      ctaPrimary: "Contactez-nous sur WhatsApp",
      ctaSecondary: "← Retour aux services"
    },
    it: {
      title: "Redesign Menu & Interfaccia Digitale",
      lead: "Redesign UI/UX focalizzato sulla conversione per massimizzare l’esperienza utente e aumentare le vendite.",
      section1Title: "Cosa include",
      section1Paragraph: "Trasformiamo il tuo menu digitale in un’esperienza fluida, aggiornata e orientata alla conversione per clienti in sede e online.",
      section1Feature1: "Audit UX completo con report azionabili",
      section1Feature2: "Prototipo interattivo pronto per test A/B",
      section1Feature3: "Guida di stile e libreria di componenti riutilizzabili",
      section1Feature4: "Handoff tecnico dettagliato per il tuo team di sviluppo",
      section2Title: "Dettagli tecnici",
      section2Item1Term: "Consegna",
      section2Item1Desc: "2–4 settimane in base all’ambito e agli asset esistenti.",
      section2Item2Term: "Strumenti",
      section2Item2Desc: "Figma, Canva, HTML/CSS collaborativo e librerie personalizzate.",
      section2Item3Term: "Compatibilità",
      section2Item3Desc: "Integrazione con CMS, chioschi digitali o sistemi d’ordine esistenti.",
      section2Item4Term: "Supporto",
      section2Item4Desc: "2 round di revisioni più documentazione per il tuo team interno.",
      section3Title: "Processo collaborativo",
      section3Paragraph1: "Segui il nostro flusso collaudato: audit → architettura informativa → prototipo navigabile → test con utenti → consegna finale ottimizzata.",
      section3Paragraph2: "Forniamo materiali di handoff pronti per gli sviluppatori e un kit di asset esportabili in più formati.",
      section4Title: "Investimento preferenziale",
      section4Regular: "€1.124",
      section4Discount: "€899",
      section4Saving: "Risparmi 225 €",
      section4Note: "Include design responsive, linee guida per futuri aggiornamenti e breve formazione al tuo team.",
      section5Title: "Condizioni e deliverable",
      section5Paragraph: "Il progetto parte con un anticipo del 30% e saldo alla consegna finale approvata. Forniamo file modificabili, esportazioni e documentazione di implementazione per garantire coerenza in tutte le sedi.",
      ctaPrimary: "Contattaci su WhatsApp",
      ctaSecondary: "← Torna ai servizi"
    }
  },
  chatbot: {
    es: {
      title: "Chatbot 24/7 Multilingüe",
      lead: "Asistente conversacional inteligente disponible en varios idiomas con respuestas automáticas, reservas y soporte en tiempo real.",
      section1Title: "Automatización conversacional",
      section1Paragraph: "Diseñamos flujos multilingües con IA y reglas empresariales para capturar leads, reservar citas y resolver FAQs 24/7.",
      section1Feature1: "Integración CRM bidireccional con actualización en tiempo real",
      section1Feature2: "Sincronización de agenda con Google Calendar o Calendly",
      section1Feature3: "Entrenamiento personalizado en español, inglés y un tercer idioma",
      section1Feature4: "Rutas de escalamiento a agentes humanos con historial completo",
      section2Title: "Detalles técnicos",
      section2Item1Term: "Entrega",
      section2Item1Desc: "10–15 días con sesiones de refinamiento y pruebas en vivo.",
      section2Item2Term: "Herramientas",
      section2Item2Desc: "WhatsApp Cloud API, Make, Gmail, Telegram, Webhooks personalizados.",
      section2Item3Term: "Integración",
      section2Item3Desc: "CRM (HubSpot, Zoho, Monday), calendarios, pasarelas de pago y sitios web.",
      section2Item4Term: "Seguridad",
      section2Item4Desc: "Políticas de cifrado end-to-end, manejo de consentimientos y logs auditables.",
      section3Title: "Onboarding y entrenamiento",
      section3Paragraph1: "Incluimos workshop de descubrimiento, scripting conversacional y entrenamiento con datasets reales de tu negocio.",
      section3Paragraph2: "Recibirás dashboards de métricas, recomendaciones de mejora continua y soporte técnico durante el primer ciclo mensual.",
      section4Title: "Inversión preferente",
      section4Regular: "€856",
      section4Discount: "€599",
      section4Saving: "Ahorra €257",
      section4Note: "Incluye 2 canales simultáneos, 500 interacciones mensuales y formación a tu equipo de atención.",
      section5Title: "Condiciones de implementación",
      section5Paragraph: "Se requiere acceso a tu CRM o base de datos de contactos y definición de políticas de privacidad. Ofrecemos contratos de mantenimiento opcionales para ampliar funcionalidades o nuevos idiomas.",
      ctaPrimary: "Contáctanos por WhatsApp",
      ctaSecondary: "← Volver a servicios"
    },
    en: {
      title: "24/7 Multilingual Chatbot",
      lead: "Intelligent conversational assistant in multiple languages with automated replies, bookings and real-time support.",
      section1Title: "Conversational automation",
      section1Paragraph: "We design multilingual flows with AI and business rules to capture leads, schedule appointments and solve FAQs around the clock.",
      section1Feature1: "Two-way CRM integration with real-time updates",
      section1Feature2: "Calendar sync with Google Calendar or Calendly",
      section1Feature3: "Custom training in Spanish, English and a third language",
      section1Feature4: "Escalation paths to human agents with full conversation history",
      section2Title: "Technical details",
      section2Item1Term: "Delivery",
      section2Item1Desc: "10–15 days including refinement sessions and live testing.",
      section2Item2Term: "Tools",
      section2Item2Desc: "WhatsApp Cloud API, Make, Gmail, Telegram and custom webhooks.",
      section2Item3Term: "Integration",
      section2Item3Desc: "CRM (HubSpot, Zoho, Monday), calendars, payment gateways and websites.",
      section2Item4Term: "Security",
      section2Item4Desc: "End-to-end encryption policies, consent management and auditable logs.",
      section3Title: "Onboarding & training",
      section3Paragraph1: "We run a discovery workshop, conversational scripting and training with real datasets from your business.",
      section3Paragraph2: "You'll receive metrics dashboards, continuous improvement guidance and technical support during the first monthly cycle.",
      section4Title: "Preferred investment",
      section4Regular: "€856",
      section4Discount: "€599",
      section4Saving: "Save €257",
      section4Note: "Includes two simultaneous channels, 500 monthly interactions and training for your support team.",
      section5Title: "Implementation terms",
      section5Paragraph: "Requires access to your CRM or contacts database and established privacy policies. Optional maintenance contracts are available to expand features or add new languages.",
      ctaPrimary: "Contact us on WhatsApp",
      ctaSecondary: "← Back to services"
    },
    de: {
      title: "24/7 Mehrsprachiger Chatbot",
      lead: "Intelligenter Konversationsassistent in mehreren Sprachen mit automatischen Antworten, Buchungen und Support in Echtzeit.",
      section1Title: "Konversationsautomatisierung",
      section1Paragraph: "Wir entwickeln mehrsprachige Flows mit KI und Business-Regeln, um Leads zu gewinnen, Termine zu buchen und FAQs rund um die Uhr zu lösen.",
      section1Feature1: "Bidirektionale CRM-Integration mit Echtzeitaktualisierung",
      section1Feature2: "Kalendersynchronisierung mit Google Calendar oder Calendly",
      section1Feature3: "Individuelles Training auf Spanisch, Englisch und einer weiteren Sprache",
      section1Feature4: "Eskalationspfade zu menschlichen Agents mit vollständiger Verlaufshistorie",
      section2Title: "Technische Details",
      section2Item1Term: "Lieferung",
      section2Item1Desc: "10–15 Tage inklusive Verfeinerungssessions und Live-Tests.",
      section2Item2Term: "Tools",
      section2Item2Desc: "WhatsApp Cloud API, Make, Gmail, Telegram und individuelle Webhooks.",
      section2Item3Term: "Integration",
      section2Item3Desc: "CRM (HubSpot, Zoho, Monday), Kalender, Zahlungsanbieter und Websites.",
      section2Item4Term: "Sicherheit",
      section2Item4Desc: "Ende-zu-Ende-Verschlüsselung, Consent-Management und prüfbare Logs.",
      section3Title: "Onboarding & Training",
      section3Paragraph1: "Wir führen einen Discovery-Workshop, Konversationsskripting und Training mit echten Unternehmensdaten durch.",
      section3Paragraph2: "Du erhältst Metrik-Dashboards, Empfehlungen zur kontinuierlichen Verbesserung und technischen Support im ersten Monatszyklus.",
      section4Title: "Bevorzugtes Investment",
      section4Regular: "€856",
      section4Discount: "€599",
      section4Saving: "Spare 257 €",
      section4Note: "Beinhaltet zwei parallele Kanäle, 500 Interaktionen pro Monat und Schulung deines Supportteams.",
      section5Title: "Implementierungsbedingungen",
      section5Paragraph: "Erfordert Zugriff auf dein CRM oder deine Kontaktdatenbank sowie definierte Datenschutzrichtlinien. Optionale Wartungsverträge erweitern Funktionen oder zusätzliche Sprachen.",
      ctaPrimary: "Kontaktiere uns per WhatsApp",
      ctaSecondary: "← Zurück zu den Services"
    },
    fr: {
      title: "Chatbot multilingue 24/7",
      lead: "Assistant conversationnel intelligent en plusieurs langues avec réponses automatiques, réservations et support en temps réel.",
      section1Title: "Automatisation conversationnelle",
      section1Paragraph: "Nous concevons des parcours multilingues avec IA et règles métier pour capter des leads, planifier des rendez-vous et résoudre les FAQs 24h/24.",
      section1Feature1: "Intégration CRM bidirectionnelle avec mise à jour en temps réel",
      section1Feature2: "Synchronisation d'agenda avec Google Calendar ou Calendly",
      section1Feature3: "Entraînement personnalisé en espagnol, anglais et une troisième langue",
      section1Feature4: "Parcours d'escalade vers des agents humains avec historique complet",
      section2Title: "Détails techniques",
      section2Item1Term: "Livraison",
      section2Item1Desc: "10 à 15 jours incluant sessions de raffinement et tests en direct.",
      section2Item2Term: "Outils",
      section2Item2Desc: "WhatsApp Cloud API, Make, Gmail, Telegram et webhooks personnalisés.",
      section2Item3Term: "Intégration",
      section2Item3Desc: "CRM (HubSpot, Zoho, Monday), agendas, passerelles de paiement et sites web.",
      section2Item4Term: "Sécurité",
      section2Item4Desc: "Politiques de chiffrement de bout en bout, gestion des consentements et journaux auditables.",
      section3Title: "Onboarding & formation",
      section3Paragraph1: "Nous animons un atelier de découverte, l'écriture des scripts et l'entraînement avec vos jeux de données réels.",
      section3Paragraph2: "Vous recevez des tableaux de bord de métriques, des recommandations d'amélioration continue et un support technique durant le premier mois.",
      section4Title: "Investissement préférentiel",
      section4Regular: "€856",
      section4Discount: "€599",
      section4Saving: "Économisez 257 €",
      section4Note: "Inclut deux canaux simultanés, 500 interactions mensuelles et la formation de votre équipe de support.",
      section5Title: "Conditions de mise en œuvre",
      section5Paragraph: "Accès requis à votre CRM ou base de contacts et définition des politiques de confidentialité. Des contrats de maintenance optionnels permettent d'étendre les fonctionnalités ou d'ajouter de nouvelles langues.",
      ctaPrimary: "Contactez-nous sur WhatsApp",
      ctaSecondary: "← Retour aux services"
    },
    it: {
      title: "Chatbot multilingue 24/7",
      lead: "Assistente conversazionale intelligente in più lingue con risposte automatiche, prenotazioni e supporto in tempo reale.",
      section1Title: "Automazione conversazionale",
      section1Paragraph: "Progettiamo flussi multilingue con IA e regole di business per acquisire lead, fissare appuntamenti e risolvere FAQ 24 ore su 24.",
      section1Feature1: "Integrazione CRM bidirezionale con aggiornamento in tempo reale",
      section1Feature2: "Sincronizzazione dell'agenda con Google Calendar o Calendly",
      section1Feature3: "Training personalizzato in spagnolo, inglese e una terza lingua",
      section1Feature4: "Percorsi di escalation verso agenti umani con storico completo",
      section2Title: "Dettagli tecnici",
      section2Item1Term: "Consegna",
      section2Item1Desc: "10–15 giorni con sessioni di affinamento e test dal vivo.",
      section2Item2Term: "Strumenti",
      section2Item2Desc: "WhatsApp Cloud API, Make, Gmail, Telegram e webhook personalizzati.",
      section2Item3Term: "Integrazione",
      section2Item3Desc: "CRM (HubSpot, Zoho, Monday), calendari, gateway di pagamento e siti web.",
      section2Item4Term: "Sicurezza",
      section2Item4Desc: "Criteri di crittografia end-to-end, gestione dei consensi e log verificabili.",
      section3Title: "Onboarding e training",
      section3Paragraph1: "Realizziamo workshop di discovery, scripting conversazionale e formazione con dataset reali della tua azienda.",
      section3Paragraph2: "Riceverai dashboard di metriche, suggerimenti di miglioramento continuo e supporto tecnico durante il primo mese.",
      section4Title: "Investimento preferenziale",
      section4Regular: "€856",
      section4Discount: "€599",
      section4Saving: "Risparmia 257 €",
      section4Note: "Include due canali simultanei, 500 interazioni mensili e formazione per il tuo team di supporto.",
      section5Title: "Condizioni di implementazione",
      section5Paragraph: "È necessario l'accesso al tuo CRM o database contatti e la definizione delle policy sulla privacy. Contratti di manutenzione opzionali permettono di ampliare le funzionalità o aggiungere nuove lingue.",
      ctaPrimary: "Contattaci su WhatsApp",
      ctaSecondary: "← Torna ai servizi"
    }
  },
  "interfaz-simple": {
    es: {
      title: "Interfaz Simple con Links + Google Drive",
      lead: "Portal minimalista vinculado a recursos de Google Drive para acceso rápido y organizado a todos tus documentos importantes.",
      section1Title: "Mapa inteligente de recursos",
      section1Paragraph: "Diseñamos un hub de enlaces seguro que centraliza todos tus accesos críticos con estructura responsive y branding consistente.",
      section1Feature1: "Mapa de enlaces personalizado con categorías dinámicas",
      section1Feature2: "Configuración de permisos avanzada por rol y dispositivo",
      section1Feature3: "Estructura SEO optimizada para indexar recursos clave",
      section1Feature4: "Documentación para que tu equipo mantenga y edite el portal",
      section2Title: "Detalles técnicos",
      section2Item1Term: "Entrega",
      section2Item1Desc: "5–10 días hábiles, incluyendo revisión y ajustes finales.",
      section2Item2Term: "Herramientas",
      section2Item2Desc: "Google Drive, Canva, HTML modular y automatizaciones con Apps Script.",
      section2Item3Term: "Integración",
      section2Item3Desc: "Compatible con CRM, portales NFC, códigos QR y ecosistemas Notion.",
      section2Item4Term: "Seguridad",
      section2Item4Desc: "Control de accesos con registros de actividad y backups periódicos.",
      section3Title: "Automatizaciones & soporte",
      section3Paragraph1: "Activamos flujos automáticos para actualizar enlaces, sincronizar carpetas y notificar a tu equipo de nuevos recursos o cambios críticos.",
      section3Paragraph2: "Incluye una sesión de capacitación remota y guía paso a paso para replicar nuevas secciones sin depender del equipo técnico.",
      section4Title: "Inversión preferente",
      section4Regular: "€352",
      section4Discount: "€299",
      section4Saving: "Ahorra €53",
      section4Note: "Instalación inicial con 15 enlaces priorizados, dashboards de uso y soporte durante 30 días.",
      section5Title: "Condiciones del servicio",
      section5Paragraph: "Implementación remota con contenido suministrado por tu equipo. Entregamos assets editables, manual de actualización y checklist de seguridad para mantener la estructura a largo plazo.",
      ctaPrimary: "Contáctanos por WhatsApp",
      ctaSecondary: "← Volver a servicios"
    },
    en: {
      title: "Simple Interface with Links + Google Drive",
      lead: "Minimal portal connected to Google Drive resources for quick, organized access to every critical document.",
      section1Title: "Smart resource map",
      section1Paragraph: "We build a secure link hub that centralizes all critical access points with a responsive structure and consistent branding.",
      section1Feature1: "Personalized link map with dynamic categories",
      section1Feature2: "Advanced permission configuration by role and device",
      section1Feature3: "SEO-optimized structure to index key resources",
      section1Feature4: "Documentation so your team can maintain and edit the portal",
      section2Title: "Technical details",
      section2Item1Term: "Delivery",
      section2Item1Desc: "5–10 business days including review and final adjustments.",
      section2Item2Term: "Tools",
      section2Item2Desc: "Google Drive, Canva, modular HTML and Apps Script automations.",
      section2Item3Term: "Integration",
      section2Item3Desc: "Compatible with CRM, NFC portals, QR codes and Notion ecosystems.",
      section2Item4Term: "Security",
      section2Item4Desc: "Access control with activity logs and scheduled backups.",
      section3Title: "Automations & support",
      section3Paragraph1: "We activate automated flows to update links, sync folders and notify your team about new resources or critical changes.",
      section3Paragraph2: "Includes a remote training session and step-by-step guide so you can replicate new sections without depending on technical staff.",
      section4Title: "Preferred investment",
      section4Regular: "€352",
      section4Discount: "€299",
      section4Saving: "Save €53",
      section4Note: "Initial setup with 15 prioritized links, usage dashboards and 30-day support.",
      section5Title: "Service conditions",
      section5Paragraph: "Remote implementation with content provided by your team. We deliver editable assets, update manual and security checklist to keep the structure long term.",
      ctaPrimary: "Contact us on WhatsApp",
      ctaSecondary: "← Back to services"
    },
    de: {
      title: "Einfache Schnittstelle mit Links + Google Drive",
      lead: "Minimalistisches Portal, das mit Google-Drive-Ressourcen verbunden ist, für schnellen und organisierten Zugriff auf alle wichtigen Dokumente.",
      section1Title: "Intelligente Ressourcenkarte",
      section1Paragraph: "Wir entwickeln einen sicheren Link-Hub, der all deine kritischen Zugänge mit responsiver Struktur und konsistentem Branding bündelt.",
      section1Feature1: "Personalisierte Link-Karte mit dynamischen Kategorien",
      section1Feature2: "Erweiterte Rechteverwaltung nach Rolle und Gerät",
      section1Feature3: "SEO-optimierte Struktur zur Indexierung wichtiger Ressourcen",
      section1Feature4: "Dokumentation, damit dein Team das Portal pflegen und bearbeiten kann",
      section2Title: "Technische Details",
      section2Item1Term: "Lieferung",
      section2Item1Desc: "5–10 Werktage inklusive Review und finaler Anpassungen.",
      section2Item2Term: "Tools",
      section2Item2Desc: "Google Drive, Canva, modulare HTML-Elemente und Apps-Script-Automatisierungen.",
      section2Item3Term: "Integration",
      section2Item3Desc: "Kompatibel mit CRM, NFC-Portalen, QR-Codes und Notion-Ökosystemen.",
      section2Item4Term: "Sicherheit",
      section2Item4Desc: "Zugriffskontrolle mit Aktivitätsprotokollen und regelmäßigen Backups.",
      section3Title: "Automatisierungen & Support",
      section3Paragraph1: "Wir aktivieren automatisierte Abläufe zum Aktualisieren von Links, Synchronisieren von Ordnern und Benachrichtigen deines Teams über neue Ressourcen oder kritische Änderungen.",
      section3Paragraph2: "Beinhaltet ein Remote-Training und eine Schritt-für-Schritt-Anleitung, um neue Bereiche ohne Technikteam zu replizieren.",
      section4Title: "Bevorzugtes Investment",
      section4Regular: "€352",
      section4Discount: "€299",
      section4Saving: "Spare 53 €",
      section4Note: "Initiale Einrichtung mit 15 priorisierten Links, Nutzungs-Dashboards und 30 Tagen Support.",
      section5Title: "Servicebedingungen",
      section5Paragraph: "Remote-Implementierung mit Inhalten aus deinem Team. Wir liefern editierbare Assets, Update-Handbuch und Sicherheits-Checkliste für nachhaltige Strukturen.",
      ctaPrimary: "Kontaktiere uns per WhatsApp",
      ctaSecondary: "← Zurück zu den Services"
    },
    fr: {
      title: "Interface simple avec liens + Google Drive",
      lead: "Portail minimaliste relié aux ressources Google Drive pour un accès rapide et organisé à tous vos documents clés.",
      section1Title: "Cartographie intelligente des ressources",
      section1Paragraph: "Nous créons un hub de liens sécurisé qui centralise tous vos accès critiques avec une structure responsive et un branding cohérent.",
      section1Feature1: "Carte de liens personnalisée avec catégories dynamiques",
      section1Feature2: "Configuration avancée des permissions par rôle et appareil",
      section1Feature3: "Structure SEO optimisée pour indexer les ressources clés",
      section1Feature4: "Documentation permettant à votre équipe de maintenir et éditer le portail",
      section2Title: "Détails techniques",
      section2Item1Term: "Livraison",
      section2Item1Desc: "5 à 10 jours ouvrés, révision et ajustements finaux inclus.",
      section2Item2Term: "Outils",
      section2Item2Desc: "Google Drive, Canva, HTML modulaire et automatisations Apps Script.",
      section2Item3Term: "Intégration",
      section2Item3Desc: "Compatible avec CRM, portails NFC, QR codes et écosystèmes Notion.",
      section2Item4Term: "Sécurité",
      section2Item4Desc: "Contrôle des accès avec journaux d’activité et sauvegardes planifiées.",
      section3Title: "Automatisations & support",
      section3Paragraph1: "Nous activons des flux automatiques pour mettre à jour les liens, synchroniser les dossiers et notifier votre équipe des nouvelles ressources ou changements critiques.",
      section3Paragraph2: "Inclut une session de formation à distance et un guide pas à pas pour reproduire de nouvelles sections sans dépendre de l’équipe technique.",
      section4Title: "Investissement privilégié",
      section4Regular: "€352",
      section4Discount: "€299",
      section4Saving: "Économisez 53 €",
      section4Note: "Installation initiale avec 15 liens prioritaires, tableaux de bord d’usage et support pendant 30 jours.",
      section5Title: "Conditions de service",
      section5Paragraph: "Mise en œuvre à distance avec contenu fourni par votre équipe. Nous livrons des assets éditables, un manuel de mise à jour et une checklist de sécurité pour maintenir la structure dans le temps.",
      ctaPrimary: "Contactez-nous sur WhatsApp",
      ctaSecondary: "← Retour aux services"
    },
    it: {
      title: "Interfaccia semplice con Link + Google Drive",
      lead: "Portale minimalista collegato alle risorse di Google Drive per un accesso rapido e organizzato a tutti i documenti importanti.",
      section1Title: "Mappa intelligente delle risorse",
      section1Paragraph: "Progettiamo un hub di link sicuro che centralizza tutti gli accessi critici con struttura responsive e branding coerente.",
      section1Feature1: "Mappa di link personalizzata con categorie dinamiche",
      section1Feature2: "Configurazione avanzata dei permessi per ruolo e dispositivo",
      section1Feature3: "Struttura SEO ottimizzata per indicizzare le risorse chiave",
      section1Feature4: "Documentazione per consentire al tuo team di mantenere e aggiornare il portale",
      section2Title: "Dettagli tecnici",
      section2Item1Term: "Consegna",
      section2Item1Desc: "5–10 giorni lavorativi con revisione e rifiniture finali.",
      section2Item2Term: "Strumenti",
      section2Item2Desc: "Google Drive, Canva, HTML modulare e automazioni con Apps Script.",
      section2Item3Term: "Integrazione",
      section2Item3Desc: "Compatibile con CRM, portali NFC, codici QR e ecosistemi Notion.",
      section2Item4Term: "Sicurezza",
      section2Item4Desc: "Controllo degli accessi con log di attività e backup periodici.",
      section3Title: "Automazioni & supporto",
      section3Paragraph1: "Attiviamo flussi automatici per aggiornare i link, sincronizzare le cartelle e avvisare il tuo team di nuove risorse o modifiche critiche.",
      section3Paragraph2: "Include una sessione di formazione remota e guida passo-passo per replicare nuove sezioni senza dipendere dal team tecnico.",
      section4Title: "Investimento preferenziale",
      section4Regular: "€352",
      section4Discount: "€299",
      section4Saving: "Risparmi 53 €",
      section4Note: "Installazione iniziale con 15 link prioritari, dashboard d’uso e supporto per 30 giorni.",
      section5Title: "Condizioni del servizio",
      section5Paragraph: "Implementazione da remoto con contenuti forniti dal tuo team. Forniamo asset modificabili, manuale di aggiornamento e checklist di sicurezza per mantenere la struttura nel tempo.",
      ctaPrimary: "Contattaci su WhatsApp",
      ctaSecondary: "← Torna ai servizi"
    }
    const code = lang.trim().toLowerCase();
    return SUPPORTED_LANGS.includes(code) ? code : DEFAULT_LANG;
  }

  function getInitialLanguage() {
    try {
      const stored = localStorage.getItem('preferredLanguage');
      if (stored) {
        return normaliseLanguage(stored);
      }
    } catch (error) {
      console.warn('Unable to access stored language preference', error);
    }

    if (typeof navigator !== 'undefined' && navigator.language) {
      const locale = navigator.language.toLowerCase();
      const match = SUPPORTED_LANGS.find(code => locale.startsWith(code));
      if (match) {
        return match;
      }
    }

    const docLang = document.documentElement.getAttribute('lang');
    if (docLang) {
      return normaliseLanguage(docLang);
    }
  },

};
const supportedLanguages = [
  { code: "es", label: "ES", ariaLabel: "Cambiar idioma a español" },
  { code: "en", label: "EN", ariaLabel: "Switch language to English" },
  { code: "de", label: "DE", ariaLabel: "Sprache auf Deutsch umstellen" },
  { code: "fr", label: "FR", ariaLabel: "Basculer la langue en français" },
  { code: "it", label: "IT", ariaLabel: "Passa la lingua in italiano" },
];
const languageAnnouncements = {
  es: "Idioma cambiado a español.",
  en: "Language switched to English.",
  de: "Sprache auf Deutsch gestellt.",
  fr: "Langue changée en français.",
  it: "Lingua impostata in italiano."
};

    return DEFAULT_LANG;
  }

  function updateButtons(lang) {
    document.querySelectorAll('.lang-btn').forEach(button => {
      const btnLang = normaliseLanguage(button.dataset.lang || button.textContent);
      button.dataset.lang = btnLang;
      button.setAttribute('aria-pressed', btnLang === lang ? 'true' : 'false');
    });
  }

  function updateSections(lang) {
    const sections = Array.from(document.querySelectorAll('.services-section'));
    if (!sections.length) {
      return;
    }

    let targetLang = lang;
    const hasTarget = sections.some(section => section.id === lang);
    if (!hasTarget) {
      const fallback = sections[0].id;
      targetLang = fallback ? normaliseLanguage(fallback) : DEFAULT_LANG;
    }

    sections.forEach(section => {
      section.classList.toggle('hidden', section.id !== targetLang);
    });

    return targetLang;
  }

  function updateStaticText(lang) {
    document.querySelectorAll('[data-i18n-key]').forEach(node => {
      const key = node.getAttribute('data-i18n-key');
      const bundle = textBundles[key];
      if (bundle && bundle[lang]) {
        node.textContent = bundle[lang];
      }
    });
  }

  function persistLanguage(lang) {
    try {
      localStorage.setItem('preferredLanguage', lang);
    } catch (error) {
      console.warn('Unable to persist language preference', error);
    }
  }

  function applyLanguage(lang) {
    const requestedLang = normaliseLanguage(lang);
    const visibleLang = updateSections(requestedLang) || requestedLang;

    updateButtons(visibleLang);
    updateStaticText(visibleLang);

    document.documentElement.setAttribute('lang', visibleLang);
    document.documentElement.setAttribute('xml:lang', visibleLang);

    persistLanguage(visibleLang);
  }

  function handleClick(event) {
    const target = event.currentTarget;
    const lang = target.dataset.lang || target.textContent;
    applyLanguage(lang);
  }

  function prepareButtons() {
    document.querySelectorAll('.lang-btn').forEach(button => {
      if (!button.dataset.lang) {
        button.dataset.lang = normaliseLanguage(button.textContent);
      }
      button.removeEventListener('click', handleClick);
      button.addEventListener('click', handleClick);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    prepareButtons();
    const initial = getInitialLanguage();
    applyLanguage(initial);
  });

  window.switchLanguage = applyLanguage;
})();
function changeLanguage(lang) {
  const service = currentService || document.body?.dataset?.service || "";
  if (!translations[service] || !translations[service][lang]) {
    return;
  }
  applyLanguage(lang);
}

function onLanguageButtonClick(event) {
  const button = event.currentTarget;
  if (!button || !button.dataset) {
    return;
  }
  const { lang } = button.dataset;
  if (lang) {
    changeLanguage(lang);
  }
}

function ensureLanguageSwitcher() {
  let switcher = document.querySelector(".language-switcher");
  if (!switcher) {
    const header = document.querySelector(".page-header");
    if (!header) {
      return null;
    }
    switcher = document.createElement("div");
    switcher.className = "language-switcher";
    header.insertBefore(switcher, header.firstElementChild || null);
  }

  let nav = switcher.querySelector("[data-lang-nav]");
  if (!nav) {
    nav = document.createElement("nav");
    nav.setAttribute("aria-label", "Language selector");
    nav.dataset.langNav = "";
    if (switcher.firstElementChild) {
      switcher.insertBefore(nav, switcher.firstElementChild);
    } else {
      switcher.appendChild(nav);
    }
  }

  const allowedCodes = new Set(supportedLanguages.map(({ code }) => code));

  supportedLanguages.forEach(({ code, label, ariaLabel }) => {
    let button = nav.querySelector(`.lang-btn[data-lang="${code}"]`);
    if (!button) {
      button = document.createElement("button");
      nav.appendChild(button);
    }
    button.type = "button";
    button.classList.add("lang-btn");
    button.dataset.lang = code;
    button.textContent = label;
    button.setAttribute("aria-label", ariaLabel);
    if (!button.hasAttribute("aria-pressed")) {
      button.setAttribute("aria-pressed", "false");
    }
    button.onclick = null;
    button.removeAttribute("onclick");
    button.addEventListener("click", onLanguageButtonClick);
  });

  Array.from(nav.querySelectorAll(".lang-btn")).forEach((button) => {
    if (!allowedCodes.has(button.dataset.lang)) {
      button.remove();
    }
  });

  announcer = switcher.querySelector("[data-lang-announcer]");
  if (!announcer) {
    announcer = document.createElement("span");
    announcer.className = "sr-only";
    announcer.setAttribute("aria-live", "polite");
    announcer.dataset.langAnnouncer = "";
    switcher.appendChild(announcer);
  }

  return nav;
}

function initLanguageSwitcher() {
  currentService = document.body?.dataset?.service || "";
  if (!translations[currentService]) {
    return;
  }

  const nav = ensureLanguageSwitcher();
  if (!nav) {
    return;
  }

  langButtons = Array.from(nav.querySelectorAll(".lang-btn"));
  announcer = document.querySelector("[data-lang-announcer]");

  nav.addEventListener("keydown", (event) => {
    const keys = ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"];
    if (!keys.includes(event.key)) {
      return;
    }
    const focusedIndex = langButtons.indexOf(document.activeElement);
    if (focusedIndex === -1) {
      return;
    }
    event.preventDefault();
    let targetIndex = focusedIndex;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      targetIndex = (focusedIndex + 1) % langButtons.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      targetIndex = (focusedIndex - 1 + langButtons.length) % langButtons.length;
    } else if (event.key === "Home") {
      targetIndex = 0;
    } else if (event.key === "End") {
      targetIndex = langButtons.length - 1;
    }
    langButtons[targetIndex].focus();
  });

  const savedLang = localStorage.getItem("preferredLanguage");
  const initialLang = savedLang && translations[currentService][savedLang] ? savedLang : defaultLanguage;
  applyLanguage(initialLang);
}

window.switchLanguage = changeLanguage;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLanguageSwitcher);
} else {
  initLanguageSwitcher();
}
