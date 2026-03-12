// HR-UPDATER: v1.0
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import JobBoard from '../components/JobBoard';
import ContentSection from '../components/ContentSection';
import Footer from '../components/Footer';
import VoiceAssistant from '../components/VoiceAssistant';
import { ViewState } from '../types';

const Home: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  const renderContent = () => {
    switch (currentView) {
      case ViewState.HOME:
        return (
          <>
            <Hero />
            <JobBoard />
            <ContentSection />
          </>
        );
      case ViewState.IMPRESSUM:
        return (
          <div className="max-w-3xl mx-auto px-4 py-24 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Impressum</h1>
            <div className="prose text-gray-600 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <p className="mb-4">
                <strong>Angaben gemaess Paragraph 5 TMG</strong><br />
                Social Media Venture GmbH<br />
                Schliemannstrasse 23<br />
                10437 Berlin
              </p>
              <p className="mb-4">
                <strong>Vertreten durch:</strong><br />
                Thomas Sander, Geschaeftsfuehrer
              </p>
              <p className="mb-4">
                <strong>Kontakt:</strong><br />
                E-Mail: info@socialmediaventure.com
              </p>
              <p className="mb-4">
                <strong>Registereintrag:</strong><br />
                Eintragung im Handelsregister.<br />
                Registergericht: Amtsgericht Charlottenburg<br />
                Registernummer: HRB 162557 B</p>
            </div>
          </div>
        );
      case ViewState.DATENSCHUTZ:
        return (
            <div className="max-w-3xl mx-auto px-4 py-24 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>
            <div className="prose text-gray-600 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <p>
                Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <h3 className="text-xl font-bold mt-4 mb-2">Datenerfassung auf unserer Website</h3>
              <p className="mb-4">
                  Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis.
              </p>
              <h3 className="text-xl font-bold mt-4 mb-2">Google Gemini Live API</h3>
              <p className="mb-4">
                  Diese Website nutzt experimentelle Features zur Sprachinteraktion. Bei Nutzung des Mikrofons werden Audiodaten zur Verarbeitung an Google Cloud Server gesendet. Es erfolgt keine dauerhafte Speicherung der Gespräche auf unseren Servern.
              </p>
            </div>
          </div>
        );
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar setView={setCurrentView} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <VoiceAssistant />
      <Footer setView={setCurrentView} />
    </div>
  );
};

export default Home;