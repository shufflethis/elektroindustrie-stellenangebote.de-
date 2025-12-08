import React from 'react';
import { SEO_FAQS, INDUSTRY_ARTICLES } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ContentSection: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* GEO / SEO Introduction Block */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Karriere in der Elektroindustrie: Ein Leitfaden für 2024
          </h2>
          <div className="prose prose-lg text-gray-600">
            {INDUSTRY_ARTICLES.map((article, idx) => (
              <div key={idx} className="mb-10">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">{article.title}</h3>
                <p className="leading-relaxed">{article.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section - Excellent for GEO (Question/Answer format) */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Häufig gestellte Fragen (FAQ)</h3>
          <div className="space-y-4">
            {SEO_FAQS.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-semibold text-slate-800">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* GEO Keyword Cloud (Hidden visually from main flow but accessible) */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-400 text-center">
            Trending Keywords: Elektroingenieur Jobs Berlin, Mechatroniker Ausbildung, Gehalt Elektrotechnik, Jobs Erneuerbare Energien, SPS Programmierer Stellenangebote, Techniker Elektromobilität, Industrie 4.0 Karriere.
          </p>
        </div>

      </div>
    </div>
  );
};

export default ContentSection;