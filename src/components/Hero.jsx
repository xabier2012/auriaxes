import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));

  return (
    <header id="hero-inicio" className="relative bg-auria-black text-white overflow-hidden group">
      {/* Grid Container for Stacking Slides */}
      <div className="grid grid-cols-1 grid-rows-1 min-h-[650px] lg:min-h-[750px]">
        
        {/* --- SLIDE 1: ORIGINAL HERO CONTENT --- */}
        <div 
          className={`col-start-1 row-start-1 w-full h-full transition-opacity duration-700 ease-in-out flex items-center py-20 md:py-32 ${currentSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
        >
           {/* Background Pattern (Abstract) */}
           <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute right-0 top-0 w-1/2 h-full bg-auria-green-400 transform -skew-x-12 translate-x-20"></div>
              <div className="absolute left-10 bottom-10 w-24 h-24 border-4 border-white/20 rounded-full"></div>
           </div>
           
           <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
             <div className="space-y-6">
               <div className="inline-block px-3 py-1 bg-auria-green-400/20 border border-auria-green-400 text-auria-green-400 text-sm font-semibold rounded-full mb-2">
                 Más de 10 años en el sector
               </div>
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                 Tu tranquilidad fiscal y contable es <span className="text-auria-green-400">nuestra prioridad.</span>
               </h2>
               <p className="text-slate-300 text-lg max-w-lg">
                 Asesoría integral para Empresas, Autónomos y Emprendedores. Proporcionamos información continua presencial y online para que obtengas respuestas al instante.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 pt-4">
                 <button onClick={() => scrollToSection('ubicacion-contacto')} className="bg-auria-green-400 hover:bg-auria-green-500 text-auria-black px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg flex items-center justify-center gap-2">
                   Consulta Gratuita <ArrowRight size={20} />
                 </button>
                 <button onClick={() => scrollToSection('servicios')} className="bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-md font-bold text-lg transition-colors">
                   Nuestros Servicios
                 </button>
               </div>
             </div>
             
             {/* Hero Image / Graphic */}
             <div className="hidden md:block relative">
               <div className="bg-auria-black-800 p-8 rounded-xl shadow-2xl border border-gray-700 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                 <div className="flex items-center justify-between mb-8 border-b border-gray-700 pb-4">
                   <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
                   </div>
                   <span className="text-slate-400 text-sm">BALANCE</span>
                 </div>
                 <div className="space-y-4">
                   <div className="flex justify-between items-center">
                     <span className="text-slate-400">Impuesto Sociedades</span>
                     <span className="text-green-400 font-mono">Presentado</span>
                   </div>
                   <div className="h-2 bg-gray-700 rounded-full w-full overflow-hidden">
                     <div className="h-full bg-green-500 w-full"></div>
                   </div>
                   <div className="flex justify-between items-center pt-4">
                     <span className="text-slate-400">Subvenciones</span>
                     <span className="text-auria-green-400 font-mono font-bold">Tramitadas</span>
                   </div>
                   <div className="flex justify-between items-center pt-2">
                      <span className="text-slate-400">Constitución Empresa</span>
                      <span className="text-blue-400 font-mono">Plan Viabilidad OK</span>
                   </div>
                 </div>
               </div>
             </div>
           </div>
        </div>

        {/* --- SLIDE 2: DGT --- */}
        <div 
          className={`col-start-1 row-start-1 w-full h-full transition-opacity duration-700 ease-in-out flex items-center justify-center p-4 md:p-12 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-auria-green-300 via-auria-green-400 to-auria-green-600 ${currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
        >
          <div className="relative w-full h-full mx-auto flex items-center justify-center">
             {/* Decorative element for texture */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
             
             <img 
                src="/assets/images/distintivos_dgt.jpg" 
                alt="Gestión de Distintivos DGT" 
                className="h-[55vh] md:h-[65vh] w-auto object-contain relative z-10 shadow-2xl rounded-lg"
                loading="lazy"
             />
          </div>
        </div>

        {/* --- SLIDE 3: TRAMITES --- */}
        <div 
          className={`col-start-1 row-start-1 w-full h-full transition-opacity duration-700 ease-in-out flex items-center justify-center p-4 md:p-12 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-auria-green-300 via-auria-green-400 to-auria-green-600 ${currentSlide === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
        >
          <div className="relative w-full h-full mx-auto flex items-center justify-center">
             {/* Decorative element for texture */}
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>

             <img 
                src="/assets/images/tramites_trafico.jpg" 
                alt="Gestión de Trámites de Tráfico" 
                className="h-[55vh] md:h-[65vh] w-auto object-contain relative z-10 shadow-2xl rounded-lg"
                loading="lazy"
             />
          </div>
        </div>
      </div>

      {/* --- CONTROLS --- */}
      <button 
        onClick={prevSlide} 
        className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-auria-green-400 hover:text-auria-black p-2 md:p-3 rounded-full text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
        aria-label="Anterior"
      >
        <ChevronLeft size={24} className="md:w-8 md:h-8" />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-auria-green-400 hover:text-auria-black p-2 md:p-3 rounded-full text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
        aria-label="Siguiente"
      >
        <ChevronRight size={24} className="md:w-8 md:h-8" />
      </button>

      {/* --- INDICATORS --- */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3 bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
        {[0, 1, 2].map(idx => (
          <button 
            key={idx} 
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 md:h-3 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-auria-green-400 w-8 md:w-12' : 'bg-white/50 w-2 md:w-3 hover:bg-white'}`} 
            aria-label={`Ir a diapositiva ${idx + 1}`}
          />
        ))}
      </div>
    </header>
  );
};

export default Hero;
