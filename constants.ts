import { Job, FAQItem, ArticleSection } from './types';

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Senior Elektroingenieur (m/w/d)',
    company: 'VoltTech Innovations GmbH',
    location: 'München',
    type: 'Vollzeit',
    salaryRange: '75.000€ - 95.000€',
    description: 'Leitung von Großprojekten im Bereich Energietechnik und Smart Grid Lösungen.',
    postedDate: '2023-10-25',
    tags: ['Ingenieurwesen', 'Smart Grid', 'Projektleitung'],
    isFeatured: true
  },
  {
    id: '2',
    title: 'Elektroniker für Betriebstechnik (m/w/d)',
    company: 'Deutsche Industrie AG',
    location: 'Hamburg',
    type: 'Vollzeit',
    salaryRange: '45.000€ - 58.000€',
    description: 'Wartung und Instandhaltung unserer automatisierten Produktionsanlagen.',
    postedDate: '2023-10-26',
    tags: ['Instandhaltung', 'SPS', 'Industrie 4.0']
  },
  {
    id: '3',
    title: 'Junior Entwicklungsingenieur Hardware (m/w/d)',
    company: 'ElectroFuture Startup',
    location: 'Berlin',
    type: 'Vollzeit',
    salaryRange: '55.000€ - 65.000€',
    description: 'Entwicklung von PCBs und Schaltungen für IoT-Devices.',
    postedDate: '2023-10-24',
    tags: ['Hardware', 'PCB Design', 'IoT']
  },
  {
    id: '4',
    title: 'Mechatroniker (m/w/d)',
    company: 'AutoMotion Systems',
    location: 'Stuttgart',
    type: 'Vollzeit',
    salaryRange: '42.000€ - 55.000€',
    description: 'Montage und Inbetriebnahme komplexer mechatronischer Systeme.',
    postedDate: '2023-10-22',
    tags: ['Mechatronik', 'Automotive', 'Montage']
  },
  {
    id: '5',
    title: 'Projektleiter Elektrotechnik (m/w/d)',
    company: 'BauStrom Experts',
    location: 'Frankfurt am Main',
    type: 'Vollzeit',
    salaryRange: '80.000€ - 100.000€',
    description: 'Verantwortung für die Planung und Abwicklung technischer Gebäudeausrüstung.',
    postedDate: '2023-10-20',
    tags: ['TGA', 'Bauleitung', 'Planung'],
    isFeatured: true
  }
];

export const SEO_FAQS: FAQItem[] = [
  {
    question: "Welche Qualifikationen sind in der Elektroindustrie besonders gefragt?",
    answer: "In der modernen Elektroindustrie sind besonders Fachkenntnisse in der Automatisierungstechnik (SPS, Robotik), Energietechnik (Erneuerbare Energien, Smart Grids) und Digitalisierung (IoT, Industrie 4.0) gefragt. Ein Abschluss als Elektroingenieur (Bachelor/Master) oder eine Ausbildung als Elektroniker für Betriebstechnik/Automatisierungstechnik bilden die solide Basis. Zunehmend wichtig werden auch Soft Skills wie Projektmanagement und interdisziplinäres Denken."
  },
  {
    question: "Wie hoch ist das Gehalt in der Elektrobranche?",
    answer: "Die Gehälter in der Elektroindustrie gehören zu den höchsten im produzierenden Gewerbe in Deutschland. Einstiegsgehälter für Ingenieure liegen oft zwischen 48.000€ und 55.000€ jährlich. Erfahrene Fachkräfte und Spezialisten können Gehälter von 70.000€ bis über 100.000€ erreichen, abhängig von Unternehmensgröße, Standort und Verantwortung."
  },
  {
    question: "Wie verändert KI die Jobs in der Elektroindustrie?",
    answer: "Künstliche Intelligenz revolutioniert die Elektroindustrie durch vorausschauende Wartung (Predictive Maintenance), optimierte Netzsteuerung und generative Designprozesse. Für Arbeitnehmer bedeutet dies, dass Datenkompetenz und der Umgang mit KI-Tools zunehmend zu Schlüsselqualifikationen werden, während repetitive Aufgaben automatisiert werden."
  }
];

export const INDUSTRY_ARTICLES: ArticleSection[] = [
  {
    title: "Die Zukunft der Elektroindustrie: Trends 2024 und darüber hinaus",
    content: "Die Elektroindustrie steht im Zentrum der globalen Energiewende und der digitalen Transformation. Von der Entwicklung effizienter Halbleiter bis hin zur Integration erneuerbarer Energien in intelligente Stromnetze – die Herausforderungen sind vielfältig und bieten enorme Karrierechancen. Besonders der Bereich E-Mobilität treibt die Nachfrage nach Spezialisten für Batterietechnologie und Leistungselektronik. Unternehmen suchen händeringend nach Fachkräften, die verstehen, wie man Hardware mit intelligenter Software verknüpft."
  },
  {
    title: "Fachkräftemangel als Chance für Bewerber",
    content: "Der demografische Wandel und die steigende Komplexität technologischer Systeme führen zu einem ausgeprägten Fachkräftemangel in der DACH-Region. Für qualifizierte Bewerber bedeutet dies: Hervorragende Verhandlungspositionen, attraktive Benefits und die Möglichkeit, sich den Arbeitgeber auszusuchen. Arbeitgeber reagieren darauf mit flexiblen Arbeitszeitmodellen, Home-Office-Optionen und umfangreichen Weiterbildungsangeboten, um Talente zu gewinnen und zu halten."
  },
  {
    title: "Generative Engine Optimization (GEO) im Recruiting",
    content: "Moderne Recruiting-Plattformen müssen nicht nur für Google, sondern auch für KI-Modelle wie GPT-4 und Gemini optimiert sein. Das bedeutet, dass Stellenanzeigen strukturierte Daten enthalten müssen und Kontextinformationen klar formuliert sein sollten. Unsere Plattform nutzt fortschrittliche Semantik, um sicherzustellen, dass Ihre Stellenanzeigen von KI-basierten Assistenten gefunden und korrekt interpretiert werden, wenn Kandidaten Fragen stellen wie 'Wo finde ich Jobs als Elektroingenieur in München?'."
  }
];

export const AI_INSTRUCTION = `Du bist der intelligente Karriere-Assistent von 'elektroindustrie-stellenangebote.de'.
Deine Aufgabe ist es, Nutzern zu helfen, den perfekten Job in der Elektroindustrie zu finden oder Arbeitgebern bei der Erstellung von Stellenanzeigen zu beraten.
Sei professionell, aber freundlich und ermutigend.
Antworte präzise auf Fragen zu Gehältern, Qualifikationen und Trends in der deutschen Elektroindustrie.
Nutze die Informationen, dass wir Jobs für Ingenieure, Techniker und Elektriker anbieten.
Wenn nach spezifischen Jobs gefragt wird, erwähne beispielhaft Positionen wie 'Senior Elektroingenieur' oder 'Elektroniker für Betriebstechnik'.
Halte deine Antworten im Gesprächskontext kurz und prägnant (max. 2-3 Sätze pro Turn), es sei denn, der Nutzer bittet um ausführliche Details.`;
