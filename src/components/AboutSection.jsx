import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre-nosotros" className="relative overflow-hidden">
      {/* === MOBILE LAYOUT === */}
      <div className="md:hidden">
        {/* Part 1: Black background with green text */}
        <div className="bg-auria-black py-8 px-4">
          <div className="container mx-auto">
            <h3 className="text-auria-green-400 font-bold uppercase tracking-wider text-xs sm:text-sm">Por qué elegirnos</h3>
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight text-white mt-3">Interacción en tiempo real y experiencia consolidada.</h2>
          </div>
        </div>
        {/* Part 2: Green background with black text */}
        <div className="bg-auria-green-400 py-8 px-4">
          <div className="container mx-auto space-y-4">
            <p className="text-auria-black-800 text-base sm:text-lg leading-relaxed">
              En <strong>Auriaxes Asesores</strong> proporcionamos información continua tanto de forma presencial como online, permitiéndote obtener respuestas al instante a tus problemas.
            </p>
            <ul className="space-y-3 sm:space-y-4 mt-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <div className="bg-auria-black p-1 rounded-full mt-0.5 sm:mt-1 flex-shrink-0">
                  <CheckCircle size={14} className="text-auria-green-400" />
                </div>
                <div>
                  <h5 className="font-bold text-auria-black text-sm sm:text-base">Profesionales Cualificados</h5>
                  <p className="text-xs sm:text-sm text-auria-black-800">Equipo multidisciplinar con experiencia desde 2013 en fiscalidad, contabilidad y derecho laboral.</p>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <div className="bg-auria-black p-1 rounded-full mt-0.5 sm:mt-1 flex-shrink-0">
                  <CheckCircle size={14} className="text-auria-green-400" />
                </div>
                <div>
                  <h5 className="font-bold text-auria-black text-sm sm:text-base">Tecnología y Rapidez</h5>
                  <p className="text-xs sm:text-sm text-auria-black-800">Interactúa con nosotros en tiempo real. Tramitación telemática de declaraciones y Sistema RED.</p>
                </div>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <div className="bg-auria-black p-1 rounded-full mt-0.5 sm:mt-1 flex-shrink-0">
                  <CheckCircle size={14} className="text-auria-green-400" />
                </div>
                <div>
                  <h5 className="font-bold text-auria-black text-sm sm:text-base">Servicio 360º</h5>
                  <p className="text-xs sm:text-sm text-auria-black-800">Desde el plan de viabilidad para emprendedores hasta la gestión de herencias y patrimonio.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* === DESKTOP LAYOUT === */}
      <div className="hidden md:block relative py-16 md:py-20">
        {/* Background with image */}
        <div className="absolute inset-0 grid grid-cols-2">
          <div 
            className="relative w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('assets/images/silueta_oficina.jpg')",
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
          </div>
          <div className="bg-auria-black"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div></div>
            <div className="space-y-6 text-white py-12">
              <h3 className="text-auria-green-400 font-bold uppercase tracking-wider text-sm">Por qué elegirnos</h3>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">Interacción en tiempo real y experiencia consolidada.</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                En <strong>Auriaxes Asesores</strong> proporcionamos información continua tanto de forma presencial como online, permitiéndote obtener respuestas al instante a tus problemas.
              </p>
              <ul className="space-y-4 mt-4">
                <li className="flex items-start gap-3">
                  <div className="bg-auria-green-400 p-1 rounded-full mt-1 flex-shrink-0">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-base">Profesionales Cualificados</h5>
                    <p className="text-sm text-gray-400">Equipo multidisciplinar con experiencia desde 2013 en fiscalidad, contabilidad y derecho laboral.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-auria-green-400 p-1 rounded-full mt-1 flex-shrink-0">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-base">Tecnología y Rapidez</h5>
                    <p className="text-sm text-gray-400">Interactúa con nosotros en tiempo real. Tramitación telemática de declaraciones y Sistema RED.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-auria-green-400 p-1 rounded-full mt-1 flex-shrink-0">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-base">Servicio 360º</h5>
                    <p className="text-sm text-gray-400">Desde el plan de viabilidad para emprendedores hasta la gestión de herencias y patrimonio.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
