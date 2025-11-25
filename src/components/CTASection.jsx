import React from 'react';

const CTASection = ({ scrollToSection }) => {
  return (
    <div id="cta-emprendedores" className="bg-auria-green-400 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div>
           <h2 className="text-2xl md:text-3xl font-bold text-auria-black">¿Eres Emprendedor?</h2>
           <p className="text-auria-black-800 mt-1">Te ayudamos con el plan de negocio y la puesta en marcha. Tramitación de subvenciones y ayudas.</p>
        </div>
        <button onClick={() => scrollToSection('ubicacion-contacto')} className="bg-auria-black text-white px-8 py-3 rounded-md font-bold shadow-lg hover:bg-auria-black-800 transition-colors whitespace-nowrap">
          Agenda tu Cita Hoy
        </button>
      </div>
    </div>
  );
};

export default CTASection;
