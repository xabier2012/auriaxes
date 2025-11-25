import React from 'react';
import { Phone, Mail } from 'lucide-react';

const TopBar = () => {
  return (
    <div id="barra-contacto-rapido" className="bg-auria-black text-slate-300 py-2 text-xs md:text-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex gap-4">
          <span className="flex items-center gap-2 hover:text-auria-green-400 transition-colors cursor-pointer">
            <Phone size={14} /> 988 045 425
          </span>
          <span className="hidden md:flex items-center gap-2 hover:text-auria-green-400 transition-colors cursor-pointer">
            <Mail size={14} /> contacto@auriaxes.com
          </span>
        </div>
        <div className="flex items-center gap-2">
            <span className="text-amber-400 font-semibold">Atención Presencial y Online</span>
            <span className="hidden sm:inline">| Ourense</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
