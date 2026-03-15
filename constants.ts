import { Job, FAQItem, ArticleSection } from './types';

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Maurer (m/w/d)',
    company: 'Eiffage Infra-Südwest GmbH',
    location: 'Alzey',
    type: 'Vollzeit',
    description: 'Maurer (m/w/d)',
    tags: [],
    postedDate: '2026-03-15',
    isFeatured: true
  },
  {
    id: '2',
    title: 'Zahnarzt (m/w/d)',
    company: 'MeinDentist Berlin GmbH',
    location: 'Potsdam',
    type: 'Vollzeit',
    description: 'Zahnarzt (m/w/d)',
    tags: [],
    postedDate: '2026-03-15',
    isFeatured: true
  },
  {
    id: '3',
    title: 'Zahnarzt (m/w/d)',
    company: 'MeinDentist Berlin GmbH',
    location: 'Berlin',
    type: 'Vollzeit',
    description: 'Zahnarzt (m/w/d)',
    tags: [],
    postedDate: '2026-03-15',
    isFeatured: true
  },
  {
    id: '4',
    title: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    company: 'avs SYSTEM LIFT AGSofort-Bewerbung',
    location: 'Hannover',
    type: 'Vollzeit',
    description: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    tags: [],
    postedDate: '2026-03-15',
    isFeatured: false
  },
  {
    id: '5',
    title: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    company: 'avs SYSTEM LIFT AGSofort-Bewerbung',
    location: 'Isernhagen',
    type: 'Vollzeit',
    description: 'Mitarbeiter (m/w/d) Finanzbuchhaltung & Digitale Prozesse',
    tags: [],
    postedDate: '2026-03-15',
    isFeatured: false
  },
  {
    id: '6',
    title: 'Einrichter (m/w/d) für Kunststoffspritzgussmaschinen',
    company: 'Medisca GmbH',
    location: 'Kabelsketal',
    type: 'Vollzeit',
    description: 'Einrichter (m/w/d) für Kunststoffspritzgussmaschinen',
    tags: [],
    postedDate: '2026-03-15',
    isFeatured: false
  },
  {
    id: '7',
    title: 'Werksmonteur (gn) Metall- und Elektroindustrie',
    company: 'Manpower GmbH & Co KG',
    location: 'Pulheim',
    type: 'Vollzeit',
    description: 'Werksmonteur (gn) Metall- und Elektroindustrie',
    tags: ['Fachkraft - Metalltechnik - Montagetechnik'],
    postedDate: '2026-03-11',
    isFeatured: false
  },
  {
    id: '8',
    title: 'Werksmonteur (gn) Metall- und Elektroindustrie',
    company: 'Manpower GmbH & Co KG',
    location: 'Köln',
    type: 'Vollzeit',
    description: 'Werksmonteur (gn) Metall- und Elektroindustrie',
    tags: ['Helfer/in - Metallbearbeitung'],
    postedDate: '2026-03-11',
    isFeatured: false
  },
  {
    id: '9',
    title: 'Werksmonteur (gn) Metall- und Elektroindustrie',
    company: 'Manpower GmbH & Co KG',
    location: 'Frechen',
    type: 'Vollzeit',
    description: 'Werksmonteur (gn) Metall- und Elektroindustrie',
    tags: ['Maschinen- und Anlagenführer/in - Metall-, Kunststofftechnik'],
    postedDate: '2026-03-11',
    isFeatured: false
  },
  {
    id: '10',
    title: 'Operativer Einkäufer (m/w/d) Metall- und Elektroindustrie',
    company: 'jobtimum GmbH Personalvermittlung',
    location: 'Hamburg',
    type: 'Vollzeit',
    description: 'Operativer Einkäufer (m/w/d) Metall- und Elektroindustrie',
    tags: ['Fachwirt/in - Einkauf/Bachelor Professional in Procurement'],
    postedDate: '2026-03-11',
    isFeatured: false
  },
  {
    id: '11',
    title: 'Operativer Einkäufer (m/w/d) Metall- und Elektroindustrie',
    company: 'jobtimum GmbH Personalvermittlung',
    location: 'Bremen',
    type: 'Vollzeit',
    description: 'Operativer Einkäufer (m/w/d) Metall- und Elektroindustrie',
    tags: ['Wirtschaftsingenieur/in'],
    postedDate: '2026-03-10',
    isFeatured: false
  },
  {
    id: '12',
    title: 'Produktionsmitarbeiter (m/w/d) – Metall- & Elektroindustrie',
    company: 'Jobbox Personal UG (haftungsbeschränkt)',
    location: 'Montabaur',
    type: 'Vollzeit',
    description: 'Produktionsmitarbeiter (m/w/d) – Metall- & Elektroindustrie',
    tags: ['Helfer/in - Elektro'],
    postedDate: '2026-03-03',
    isFeatured: false
  },
  {
    id: '13',
    title: 'Produktionsmitarbeiter (m/w/d) – Metall- & Elektroindustrie',
    company: 'Jobbox Personal UG (haftungsbeschränkt)',
    location: 'Bad Camberg',
    type: 'Vollzeit',
    description: 'Produktionsmitarbeiter (m/w/d) – Metall- & Elektroindustrie',
    tags: ['Helfer/in - Elektro'],
    postedDate: '2026-03-03',
    isFeatured: false
  },
  {
    id: '14',
    title: 'Montagekräfte Baugruppenmontage Elektroindustrie (m/w/d)',
    company: 'PERSODY HR-Solutions GmbH',
    location: 'Eching, Niederbayern',
    type: 'Vollzeit',
    description: 'Montagekräfte Baugruppenmontage Elektroindustrie (m/w/d)',
    tags: ['Helfer/in - Elektro'],
    postedDate: '2026-03-03',
    isFeatured: false
  },
  {
    id: '15',
    title: 'Helfer Elektroindustrie (m/w/d)',
    company: 'I.K. Hofmann GmbH Hofmann Chemnitz',
    location: 'Gornsdorf',
    type: 'Vollzeit',
    description: 'Helfer Elektroindustrie (m/w/d)',
    tags: ['Helfer/in - Metallbearbeitung'],
    postedDate: '2026-03-02',
    isFeatured: false
  },
  {
    id: '16',
    title: 'Helfer (m/w/d) Metall- und Elektroindustrie',
    company: 'KÖTTER Personal Service SE & Co. KG- NL Duisburg',
    location: 'Krefeld',
    type: 'Vollzeit',
    description: 'Helfer (m/w/d) Metall- und Elektroindustrie',
    tags: ['Helfer/in - Lagerwirtschaft, Transport'],
    postedDate: '2026-03-01',
    isFeatured: false
  },
  {
    id: '17',
    title: 'Löter SMD Bauteilen Elektroindustrie (m/w/d)',
    company: 'I.K. Hofmann GmbH Niederlassung Forchheim',
    location: 'Erlangen',
    type: 'Vollzeit',
    description: 'Löter SMD Bauteilen Elektroindustrie (m/w/d)',
    tags: ['Löter/in'],
    postedDate: '2026-02-26',
    isFeatured: false
  },
  {
    id: '18',
    title: 'Produktionshelfer m/w/d - Elektroindustrie - Bouszahlung',
    company: 'PerZukunft Arbeitsvermittlung GmbH&Co.KG',
    location: 'Berlin',
    type: 'Vollzeit',
    description: 'Produktionshelfer m/w/d - Elektroindustrie - Bouszahlung',
    tags: ['Helfer/in - Metallbearbeitung'],
    postedDate: '2026-02-25',
    isFeatured: false
  },
  {
    id: '19',
    title: 'Produktionsmitarbeiter Elektroindustrie (m/w/d)',
    company: 'I. K. Hofmann GmbH Hofmann Neumarkt',
    location: 'Neumarkt in der Oberpfalz',
    type: 'Vollzeit',
    description: 'Produktionsmitarbeiter Elektroindustrie (m/w/d)',
    tags: ['Helfer/in - Elektro'],
    postedDate: '2026-02-24',
    isFeatured: false
  },
  {
    id: '20',
    title: 'Produktionsmitarbeiter Elektroindustrie (m/w/d)',
    company: 'I. K. Hofmann GmbH Hofmann Neumarkt',
    location: 'Mühlhausen, Oberpfalz',
    type: 'Vollzeit',
    description: 'Produktionsmitarbeiter Elektroindustrie (m/w/d)',
    tags: ['Helfer/in - Elektro'],
    postedDate: '2026-02-24',
    isFeatured: false
  },
  {
    id: '21',
    title: 'Maschineneinsteller Elektroindustrie (m/w/d)',
    company: 'I. K. Hofmann GmbH Hofmann Neumarkt',
    location: 'Velburg',
    type: 'Vollzeit',
    description: 'Maschineneinsteller Elektroindustrie (m/w/d)',
    tags: ['Maschinen- und Anlagenführer/in (ohne Angabe des Schwerpunkts)'],
    postedDate: '2026-02-24',
    isFeatured: false
  },
  {
    id: '22',
    title: 'Maschineneinsteller als Linienführer Elektroindustrie (m/w/d)',
    company: 'I. K. Hofmann GmbH Hofmann Neumarkt',
    location: 'Velburg',
    type: 'Vollzeit',
    description: 'Maschineneinsteller als Linienführer Elektroindustrie (m/w/d)',
    tags: ['Maschineneinrichter/in (allgemein)'],
    postedDate: '2026-02-24',
    isFeatured: false
  },
  {
    id: '23',
    title: 'Montagemitarbeiter in Neumarkt Elektroindustrie (m/w/d)',
    company: 'I. K. Hofmann GmbH Hofmann Neumarkt',
    location: 'Mühlhausen, Oberpfalz',
    type: 'Vollzeit',
    description: 'Montagemitarbeiter in Neumarkt Elektroindustrie (m/w/d)',
    tags: ['Helfer/in - Elektro'],
    postedDate: '2026-02-24',
    isFeatured: false
  },
  {
    id: '24',
    title: 'Produktionshelfer in der Montage Elektroindustrie (m/w/d)',
    company: 'I. K. Hofmann GmbH Hofmann Neumarkt',
    location: 'Mühlhausen, Oberpfalz',
    type: 'Vollzeit',
    description: 'Produktionshelfer in der Montage Elektroindustrie (m/w/d)',
    tags: ['Helfer/in - Elektro'],
    postedDate: '2026-02-24',
    isFeatured: false
  },
  {
    id: '25',
    title: 'Controller (m/w/d) Metall- und Elektroindustrie',
    company: 'jobtimum GmbH',
    location: 'Bremen',
    type: 'Vollzeit',
    description: 'Controller (m/w/d) Metall- und Elektroindustrie',
    tags: ['Controller/in'],
    postedDate: '2026-02-23',
    isFeatured: false
  }
];

export const SEO_FAQS: FAQItem[] = [
  {
    question: "Welche Qualifikationen sind in der Elektroindustrie besonders gefragt?",
    answer: "In der modernen Elektroindustrie sind besonders Fachkenntnisse in der Automatisierungstechnik (SPS, Robotik), Energietechnik (Erneuerbare Energien, Smart Grids) und Digitalisierung (IoT, Industrie 4.0) gefragt. Ein Abschluss als Elektroingenieur (Bachelor/Master) oder eine Ausbildung als Elektroniker fuer Betriebstechnik/Automatisierungstechnik bilden die solide Basis. Zunehmend wichtig werden auch Soft Skills wie Projektmanagement und interdisziplinaeres Denken."
  },
  {
    question: "Wie hoch ist das Gehalt in der Elektrobranche?",
    answer: "Die Gehaelter in der Elektroindustrie gehoeren zu den hoechsten im produzierenden Gewerbe in Deutschland. Einstiegsgehaelter fuer Ingenieure liegen oft zwischen 48.000 Euro und 55.000 Euro jaehrlich. Erfahrene Fachkraefte und Spezialisten koennen Gehaelter von 70.000 Euro bis ueber 100.000 Euro erreichen, abhaengig von Unternehmensgroesse, Standort und Verantwortung."
  },
  {
    question: "Wie veraendert KI die Jobs in der Elektroindustrie?",
    answer: "Kuenstliche Intelligenz revolutioniert die Elektroindustrie durch vorausschauende Wartung (Predictive Maintenance), optimierte Netzsteuerung und generative Designprozesse. Fuer Arbeitnehmer bedeutet dies, dass Datenkompetenz und der Umgang mit KI-Tools zunehmend zu Schluesselqualifikationen werden, waehrend repetitive Aufgaben automatisiert werden."
  },
  {
    question: "Welche Ausbildungsberufe gibt es in der Elektroindustrie?",
    answer: "Die wichtigsten Ausbildungsberufe sind Elektroniker fuer Betriebstechnik, Elektroniker fuer Automatisierungstechnik, Elektroniker fuer Energie- und Gebaeudetechnik, Mechatroniker und Industrieelektriker. Die Ausbildungsdauer betraegt je nach Beruf 2 bis 3,5 Jahre. Alle Berufe bieten hervorragende Uebernahmechancen und Weiterbildungsmoeglichkeiten zum Meister oder Techniker."
  },
  {
    question: "Wo finde ich die meisten Elektroindustrie-Jobs in Deutschland?",
    answer: "Die groessten Standorte der Elektroindustrie in Deutschland sind Bayern (Muenchen, Nuernberg, Erlangen), Baden-Wuerttemberg (Stuttgart, Mannheim, Karlsruhe), Nordrhein-Westfalen (Koeln, Duesseldorf, Dortmund) und Sachsen (Dresden, Chemnitz, Leipzig). Besonders das Dreieck Muenchen-Stuttgart-Frankfurt gilt als Hotspot fuer Elektrotechnik-Jobs mit den hoechsten Gehaeltern."
  },
  {
    question: "Was verdient ein Elektroniker fuer Betriebstechnik?",
    answer: "Ein Elektroniker fuer Betriebstechnik verdient in Deutschland durchschnittlich zwischen 35.000 und 48.000 Euro brutto jaehrlich. Mit Berufserfahrung und Spezialisierung sind Gehaelter bis 55.000 Euro moeglich. Die Tarifgehaelter in der Metall- und Elektroindustrie gehoeren zu den besten in Deutschland und bieten zusaetzlich Weihnachts- und Urlaubsgeld."
  },
  {
    question: "Wie kann ich als Quereinsteiger in die Elektroindustrie wechseln?",
    answer: "Quereinsteiger koennen ueber Umschulungsprogramme der IHK, berufsbegleitende Weiterbildungen oder betriebliche Qualifizierungsangebote in die Elektroindustrie einsteigen. Besonders gefragt sind Quereinsteiger mit technischem Verstaendnis aus verwandten Branchen wie Maschinenbau oder IT. Viele Unternehmen bieten eigene Traineeprogramme und Einstiegsqualifizierungen an."
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
