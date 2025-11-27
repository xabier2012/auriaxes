import React from 'react';
import { Phone, Mail } from 'lucide-react';

const TopBar = () => {
  return (
    <div id="barra-contacto-rapido" className="bg-auria-black text-slate-300 py-2 text-xs sm:text-sm">
      <div className="container mx-auto px-4 flex justify-between items-center gap-2">
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-4">
          <a href="tel:988045425" className="flex items-center gap-1.5 sm:gap-2 hover:text-auria-green-400 transition-colors">
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" /> 
            <span className="text-xs sm:text-sm">988 045 425</span>
          </a>
          <a href="mailto:contacto@auriaxes.com" className="flex items-center gap-1.5 sm:gap-2 hover:text-auria-green-400 transition-colors">
            <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" /> 
            <span className="text-xs sm:text-sm truncate">contacto@auriaxes.com</span>
          </a>
        </div>
        <div className="flex items-center gap-2 text-right">
            <span className="text-auria-green-400 font-semibold text-xs sm:text-sm whitespace-nowrap">Atención Presencial y Online</span>
            <span className="hidden md:inline text-xs sm:text-sm">| Ourense</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
