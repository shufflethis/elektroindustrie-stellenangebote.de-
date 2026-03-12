import React from 'react';
import { SEO_FAQS, INDUSTRY_ARTICLES } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const GEO_CITIES = [
  { name: 'Berlin', region: 'Berlin' },
  { name: 'Hamburg', region: 'Hamburg' },
  { name: 'Muenchen', region: 'Bayern' },
  { name: 'Koeln', region: 'Nordrhein-Westfalen' },
  { name: 'Frankfurt am Main', region: 'Hessen' },
  { name: 'Stuttgart', region: 'Baden-Wuerttemberg' },
  { name: 'Duesseldorf', region: 'Nordrhein-Westfalen' },
  { name: 'Leipzig', region: 'Sachsen' },
  { name: 'Dortmund', region: 'Nordrhein-Westfalen' },
  { name: 'Essen', region: 'Nordrhein-Westfalen' },
  { name: 'Bremen', region: 'Bremen' },
  { name: 'Dresden', region: 'Sachsen' },
  { name: 'Hannover', region: 'Niedersachsen' },
  { name: 'Nuernberg', region: 'Bayern' },
  { name: 'Duisburg', region: 'Nordrhein-Westfalen' },
  { name: 'Bochum', region: 'Nordrhein-Westfalen' },
  { name: 'Wuppertal', region: 'Nordrhein-Westfalen' },
  { name: 'Mannheim', region: 'Baden-Wuerttemberg' },
  { name: 'Augsburg', region: 'Bayern' },
  { name: 'Karlsruhe', region: 'Baden-Wuerttemberg' },
  { name: 'Chemnitz', region: 'Sachsen' },
  { name: 'Erlangen', region: 'Bayern' },
  { name: 'Regensburg', region: 'Bayern' },
  { name: 'Wolfsburg', region: 'Niedersachsen' },
  { name: 'Ingolstadt', region: 'Bayern' },
  { name: 'Aachen', region: 'Nordrhein-Westfalen' },
  { name: 'Braunschweig', region: 'Niedersachsen' },
  { name: 'Kiel', region: 'Schleswig-Holstein' },
  { name: 'Magdeburg', region: 'Sachsen-Anhalt' },
  { name: 'Rostock', region: 'Mecklenburg-Vorpommern' },
];

const ContentSection: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* GEO / SEO Introduction Block */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
            Karriere in der Elektroindustrie: Ein Leitfaden
          </h2>
          <div className="prose prose-sm sm:prose-lg text-gray-600">
            {INDUSTRY_ARTICLES.map((article, idx) => (
              <div key={idx} className="mb-8 sm:mb-10">
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-3 sm:mb-4">{article.title}</h3>
                <p className="leading-relaxed">{article.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Career Info Section */}
        <div className="mb-12 sm:mb-16 bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-6 sm:p-10 border border-blue-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Karriere-Ratgeber Elektroindustrie</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Einstiegsgehalt Elektroingenieur</h3>
              <p className="text-gray-600 text-sm">Absolventen der Elektrotechnik starten mit durchschnittlich 48.000 bis 55.000 Euro Jahresgehalt. Mit Spezialisierung auf Automatisierungstechnik oder Leistungselektronik sind hoehere Einstiegsgehaelter moeglich.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Weiterbildung & Zertifikate</h3>
              <p className="text-gray-600 text-sm">SPS-Zertifizierungen (Siemens TIA Portal), VDE-Normen-Schulungen und Meisterbriefe sind gefragte Qualifikationen, die das Gehalt und die Karrierechancen deutlich steigern.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Zukunftsbranchen</h3>
              <p className="text-gray-600 text-sm">Erneuerbare Energien, Elektromobilitaet und Smart-Grid-Technologien bieten langfristige Karriereperspektiven mit ueberdurchschnittlichem Wachstum und Jobsicherheit.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Bewerbungstipps</h3>
              <p className="text-gray-600 text-sm">Ein technischer Lebenslauf mit konkreten Projektreferenzen, Zertifikaten und messbaren Erfolgen hebt Sie von anderen Bewerbern ab. Nutzen Sie branchenspezifische Portale wie unseres.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-2">Ausbildung in der Elektroindustrie</h3>
            <p className="text-gray-600 text-sm mb-3">
              Die duale Ausbildung zum Elektroniker fuer Betriebstechnik, Automatisierungstechnik oder Energie- und Gebaeudetechnik dauert 3,5 Jahre. Absolventen sind auf dem Arbeitsmarkt stark nachgefragt. Typische Karrierepfade fuehren ueber den Techniker oder Meister bis hin zum Studium der Elektrotechnik.
            </p>
            <p className="text-gray-600 text-sm">
              Fuer Quereinsteiger bieten Umschulungen und Weiterbildungsprogramme der IHK attraktive Einstiegsmoeglichkeiten in die Branche. Die Elektroindustrie gehoert zu den am besten bezahlten Ausbildungsbranchen in Deutschland.
            </p>
          </div>
        </div>

        {/* FAQ Section with Schema.org FAQPage markup */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 md:p-12 mb-12 sm:mb-16">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': SEO_FAQS.map(faq => ({
              '@type': 'Question',
              'name': faq.question,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.answer
              }
            }))
          }) }} />
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 sm:mb-8 text-center">Haeufig gestellte Fragen (FAQ)</h3>
          <div className="space-y-3 sm:space-y-4">
            {SEO_FAQS.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center focus:outline-none gap-2"
                >
                  <span className="font-semibold text-slate-800 text-sm sm:text-base">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-3 sm:pt-4 text-sm sm:text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Geo-SEO: Elektroindustrie Jobs in German Cities */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
            Elektroindustrie-Jobs in deutschen Staedten
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Finden Sie Stellenangebote der Elektroindustrie in Ihrer Region. Von Grossstaedten bis zu wichtigen Industriestandorten -- ueberall werden Fachkraefte der Elektrotechnik gesucht.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
            {GEO_CITIES.map((city) => (
              <div
                key={city.name}
                className="bg-slate-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-lg px-3 py-2 sm:px-4 sm:py-3 text-center transition-colors cursor-pointer"
              >
                <span className="text-slate-800 font-medium text-xs sm:text-sm block">{city.name}</span>
                <span className="text-gray-400 text-xs">{city.region}</span>
              </div>
            ))}
          </div>
        </div>

        {/* GEO Keyword Cloud */}
        <div className="pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-400 text-center">
            Trending Keywords: Elektroingenieur Jobs Berlin, Mechatroniker Ausbildung, Gehalt Elektrotechnik, Jobs Erneuerbare Energien, SPS Programmierer Stellenangebote, Techniker Elektromobilitaet, Industrie 4.0 Karriere, Elektroniker fuer Betriebstechnik, Automatisierungstechnik Jobs Muenchen, Elektroindustrie Stellenangebote Hamburg, Elektrotechnik Karriere Stuttgart, Smart Grid Jobs Deutschland.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ContentSection;
