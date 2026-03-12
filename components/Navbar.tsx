import React from 'react';
import { ViewState } from '../types';
import { Zap, Menu, X } from 'lucide-react';

interface NavbarProps {
  setView: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setView }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Startseite', view: ViewState.HOME },
    { name: 'Für Bewerber', view: ViewState.HOME }, // Anchors could be added
    { name: 'Für Arbeitgeber', view: ViewState.HOME },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => setView(ViewState.HOME)}>
            <div className="flex-shrink-0 flex items-center text-blue-600">
              <Zap className="h-6 w-6 sm:h-8 sm:w-8 mr-1.5 sm:mr-2" fill="currentColor" />
              <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-900">
                ElektroJobs<span className="text-blue-600">.de</span>
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => setView(link.view)}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30">
              Job veröffentlichen
            </button>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  setView(link.view);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                {link.name}
              </button>
            ))}
            <button className="w-full mt-4 bg-blue-600 text-white px-5 py-3 rounded-md font-medium">
              Job veröffentlichen
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;