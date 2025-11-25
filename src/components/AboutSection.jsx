import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre-nosotros" className="py-20 bg-auria-black text-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 h-full min-h-[400px] relative rounded-xl overflow-hidden shadow-2xl border border-gray-700 group">
          <div className="absolute inset-0 bg-auria-green-400/20 group-hover:bg-auria-green-400/10 transition-colors duration-500 z-10"></div>
          <img 
            src="/assets/images/silueta_oficina.jpg" 
            alt="Oficina Auriaxes" 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          {/* Optional overlay text similar to Hero or just the image as requested */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-20">
             <div className="flex items-center gap-2 text-white mb-1">
                <span className="font-bold text-lg">Desde 2013</span>
                <div className="h-px flex-grow bg-auria-green-400"></div>
             </div>
             <p className="text-sm text-gray-200">Compromiso y profesionalidad en cada gestión.</p>
          </div>
        </div>
        <div className="order-1 md:order-2 space-y-6">
          <h3 className="text-auria-green-400 font-bold uppercase tracking-wider text-sm">Por qué elegirnos</h3>
          <h2 className="text-3xl md:text-4xl font-bold">Interacción en tiempo real y experiencia consolidada.</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            En <strong>Auriaxes Asesores</strong> proporcionamos información continua tanto de forma presencial como online, permitiéndote obtener respuestas al instante a tus problemas.
          </p>
          <ul className="space-y-4 mt-4">
            <li className="flex items-start gap-3">
              <div className="bg-auria-green-400 p-1 rounded-full mt-1 flex-shrink-0">
                <CheckCircle size={14} className="text-white" />
              </div>
              <div>
                <h5 className="font-bold text-white">Profesionales Cualificados</h5>
                <p className="text-sm text-gray-400">Equipo multidisciplinar con experiencia desde 2013 en fiscalidad, contabilidad y derecho laboral.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-auria-green-400 p-1 rounded-full mt-1 flex-shrink-0">
                <CheckCircle size={14} className="text-white" />
              </div>
              <div>
                <h5 className="font-bold text-white">Tecnología y Rapidez</h5>
                <p className="text-sm text-gray-400">Interactúa con nosotros en tiempo real. Tramitación telemática de declaraciones y Sistema RED.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="bg-auria-green-400 p-1 rounded-full mt-1 flex-shrink-0">
                <CheckCircle size={14} className="text-white" />
              </div>
              <div>
                <h5 className="font-bold text-white">Servicio 360º</h5>
                <p className="text-sm text-gray-400">Desde el plan de viabilidad para emprendedores hasta la gestión de herencias y patrimonio.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
