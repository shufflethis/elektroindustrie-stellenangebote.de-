import React from 'react';
import { Search, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-slate-900 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Elektroindustrie Hintergrund"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Karriere unter <span className="text-blue-400">Hochspannung</span>.
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-300 mb-10">
          Die führende Stellenbörse für Fach- und Führungskräfte der Elektroindustrie. 
          Vom Elektroniker bis zum Senior Ingenieur – finden Sie Ihren Platz in der Zukunft der Energie.
        </p>

        <div className="max-w-3xl bg-white p-2 rounded-lg shadow-2xl flex flex-col md:flex-row gap-2">
          <div className="flex-1 flex items-center bg-gray-50 rounded-md px-4 py-3 md:py-0">
            <Search className="h-5 w-5 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Jobtitel, Kenntnisse (z.B. SPS, TGA)"
              className="w-full bg-transparent border-none focus:ring-0 text-gray-900 placeholder-gray-500"
            />
          </div>
          <div className="flex-1 flex items-center bg-gray-50 rounded-md px-4 py-3 md:py-0 border-t md:border-t-0 border-gray-200">
            <MapPin className="h-5 w-5 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Ort oder PLZ"
              className="w-full bg-transparent border-none focus:ring-0 text-gray-900 placeholder-gray-500"
            />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-colors w-full md:w-auto">
            Suchen
          </button>
        </div>

        <div className="mt-8 flex gap-4 text-sm text-gray-400">
          <span>Beliebte Suchen:</span>
          <span className="text-blue-300 hover:underline cursor-pointer">Automatisierung</span>
          <span className="text-blue-300 hover:underline cursor-pointer">Elektroingenieur</span>
          <span className="text-blue-300 hover:underline cursor-pointer">Mechatroniker</span>
          <span className="text-blue-300 hover:underline cursor-pointer">Erneuerbare Energien</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;