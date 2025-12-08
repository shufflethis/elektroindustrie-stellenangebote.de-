import React from 'react';
import { ViewState } from '../types';

interface FooterProps {
  setView: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">ElektroJobs.de</h3>
            <p className="text-sm text-gray-400">
              Der digitale Knotenpunkt für Karrierechancen in der deutschen Elektroindustrie. 
              Verbinden von Spannung und Talent.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Für Bewerber</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400">Jobsuche</a></li>
              <li><a href="#" className="hover:text-blue-400">Lebenslauf-Check</a></li>
              <li><a href="#" className="hover:text-blue-400">Karrieretipps</a></li>
              <li><a href="#" className="hover:text-blue-400">Gehaltsvergleich</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Für Arbeitgeber</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400">Stelle schalten</a></li>
              <li><a href="#" className="hover:text-blue-400">Preise & Pakete</a></li>
              <li><a href="#" className="hover:text-blue-400">Recruiting Lösungen</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => setView(ViewState.IMPRESSUM)} className="hover:text-blue-400">
                  Impressum
                </button>
              </li>
              <li>
                <button onClick={() => setView(ViewState.DATENSCHUTZ)} className="hover:text-blue-400">
                  Datenschutzerklärung
                </button>
              </li>
              <li><a href="#" className="hover:text-blue-400">AGB</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Elektroindustrie-Stellenangebote.de. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;