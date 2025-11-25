import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Landmark, 
  Briefcase, 
  Scale, 
  BarChart4, 
  CheckCircle, 
  TrendingUp, 
  Clock,
  ArrowRight,
  Car,
} from 'lucide-react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="font-sans text-slate-800 bg-white min-h-screen flex flex-col">
      
      {/* --- TOP BAR --- */}
      <div id="barra-contacto-rapido" className="bg-slate-900 text-slate-300 py-2 text-xs md:text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-2 hover:text-amber-400 transition-colors cursor-pointer">
              <Phone size={14} /> 627 719 812
            </span>
            <span className="hidden md:flex items-center gap-2 hover:text-amber-400 transition-colors cursor-pointer">
              <Mail size={14} /> contacto@auriaxes.com
            </span>
          </div>
          <div className="flex items-center gap-2">
             <span className="text-amber-400 font-semibold">Atención Presencial y Online</span>
             <span className="hidden sm:inline">| Ourense</span>
          </div>
        </div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav id="navegacion-principal" className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/assets/images/auriaxes-asesores.jpg"
              alt="Logotipo de Auriaxes Asesores"
              className="h-16 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
            <h1 className="sr-only">AURIAXES Asesores</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium text-slate-600" aria-label="Navegación principal">
            <button onClick={() => scrollToSection('hero-inicio')} className="hover:text-amber-600 transition-colors">Inicio</button>
            <button onClick={() => scrollToSection('servicios')} className="hover:text-amber-600 transition-colors">Servicios</button>
            <button onClick={() => scrollToSection('sobre-nosotros')} className="hover:text-amber-600 transition-colors">La Firma</button>
            <button onClick={() => scrollToSection('ubicacion-contacto')} className="hover:text-amber-600 transition-colors">Contacto</button>
          </div>

          {/* CTA Phone Link - FIXED: target="_blank" prevents white flash/navigation attempt on current page */}
          <a 
            href="tel:627719812"
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-md font-semibold shadow-md transition-colors"
          >
            <Phone size={18} />
            627 719 812
          </a>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-800" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 flex flex-col py-4">
            <button onClick={() => scrollToSection('hero-inicio')} className="py-3 px-6 text-left hover:bg-slate-50 font-medium">Inicio</button>
            <button onClick={() => scrollToSection('servicios')} className="py-3 px-6 text-left hover:bg-slate-50 font-medium">Servicios</button>
            <button onClick={() => scrollToSection('sobre-nosotros')} className="py-3 px-6 text-left hover:bg-slate-50 font-medium">La Firma</button>
            <button onClick={() => scrollToSection('ubicacion-contacto')} className="py-3 px-6 text-left hover:bg-slate-50 font-medium">Contacto</button>
          </div>
        )}
      </nav>

      <main className="flex-1">
        {/* --- HERO SECTION --- */}
        <header id="hero-inicio" className="relative bg-slate-900 text-white py-20 md:py-32 overflow-hidden">
        {/* Background Pattern (Abstract) */}
        <div className="absolute inset-0 opacity-20">
           <div className="absolute right-0 top-0 w-1/2 h-full bg-amber-500 transform -skew-x-12 translate-x-20"></div>
           <div className="absolute left-10 bottom-10 w-24 h-24 border-4 border-white/20 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-amber-500/20 border border-amber-500 text-amber-400 text-sm font-semibold rounded-full mb-2">
              Más de 10 años en el sector
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Tu tranquilidad fiscal y contable es <span className="text-amber-500">nuestra prioridad.</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-lg">
              Asesoría integral para Empresas, Autónomos y Emprendedores. Proporcionamos información continua presencial y online para que obtengas respuestas al instante.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Fixed transition to transition-colors to avoid jank */}
              <button onClick={() => scrollToSection('ubicacion-contacto')} className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg flex items-center justify-center gap-2">
                Consulta Gratuita <ArrowRight size={20} />
              </button>
              <button onClick={() => scrollToSection('servicios')} className="bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-md font-bold text-lg transition-colors">
                Nuestros Servicios
              </button>
            </div>
          </div>
          
          {/* Hero Image / Graphic */}
          <div className="hidden md:block relative">
            <div className="bg-slate-800 p-8 rounded-xl shadow-2xl border border-slate-700 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between mb-8 border-b border-slate-700 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-slate-400 text-sm">Balance_2024.pdf</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Impuesto Sociedades</span>
                  <span className="text-green-400 font-mono">Presentado</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full w-full overflow-hidden">
                  <div className="h-full bg-green-500 w-full"></div>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-slate-400">Subvenciones</span>
                  <span className="text-amber-400 font-mono font-bold">Tramitadas</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                   <span className="text-slate-400">Constitución Empresa</span>
                   <span className="text-blue-400 font-mono">Plan Viabilidad OK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- SERVICES SECTION --- */}
      <section id="servicios" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-amber-600 font-bold uppercase tracking-wider text-sm mb-2">Qué hacemos</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Soluciones para Autónomos y Empresas</h2>
            <p className="text-slate-600">
              Servicios adaptados a tus necesidades, desde la contabilidad diaria hasta situaciones complejas como herencias o rentas del extranjero.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Fiscal */}
            <div id="servicio-fiscal" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-amber-500 group text-center">
              <div className="w-20 h-20 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 group-hover:shadow-lg">
                <Landmark size={40} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">Área Fiscal</h4>
              <p className="text-slate-600 mb-4 text-sm">
                Gestión completa de obligaciones tributarias para evitar sanciones y optimizar tu carga fiscal.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> IRPF, IVA y Sociedades</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Rentas del Extranjero</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Impuesto de Patrimonio</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Inspecciones Tributarias</li>
              </ul>
            </div>

            {/* Card 2: Laboral */}
            <div id="servicio-laboral" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-slate-900 group text-center">
              <div className="w-20 h-20 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 group-hover:shadow-lg">
                <Briefcase size={40} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">Área Laboral</h4>
              <p className="text-slate-600 mb-4 text-sm">
                Autorizados por el Sistema RED. Gestión integral de personal y prevención de riesgos.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Nóminas y Seguros Sociales</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Partes de Accidentes DELTA</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Bonificaciones a trabajadores</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Altas/Bajas Seguridad Social</li>
              </ul>
            </div>

            {/* Card 3: Contable */}
            <div id="servicio-contable" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-amber-500 group text-center">
              <div className="w-20 h-20 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 group-hover:shadow-lg">
                <BarChart4 size={40} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">Área Contable</h4>
              <p className="text-slate-600 mb-4 text-sm">
                Contabilidad analítica para la toma de decisiones. Tu información financiera al día.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Libros y Cuentas Anuales</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Registro Mercantil</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Facturación Diaria</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Apertura y Cierre Ejercicio</li>
              </ul>
            </div>

            {/* Card 4: Emprendedores */}
            <div id="servicio-emprendedores" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-slate-900 group text-center">
              <div className="w-20 h-20 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 group-hover:shadow-lg">
                <TrendingUp size={40} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">Emprendedores</h4>
              <p className="text-slate-600 mb-4 text-sm">
                Te ayudamos en la puesta en marcha. Asesoramiento inicial para usuarios PVG y startups.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Plan de Negocio y Viabilidad</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Tramitación Subvenciones</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Forma Jurídica Adecuada</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Usuarios PVG</li>
              </ul>
            </div>

             {/* Card 5: Herencias y Particular */}
             <div id="servicio-herencias-civil" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-amber-500 group text-center">
              <div className="w-20 h-20 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 group-hover:shadow-lg">
                <Scale size={40} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">Herencias y Civil</h4>
              <p className="text-slate-600 mb-4 text-sm">
                Servicios especializados para particulares más allá de la actividad empresarial.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Gestión de Herencias</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Impuesto de Sucesiones</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Asesoría Civil</li>
              </ul>
            </div>

             {/* Card 6: Trámites Varios */}
             <div id="servicio-tramites-vehiculos" className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-slate-900 group text-center">
              <div className="w-20 h-20 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300 group-hover:shadow-lg">
                <Car size={40} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-slate-900">Trámites y Vehículos</h4>
              <p className="text-slate-600 mb-4 text-sm">
                Gestión administrativa integral para simplificar tu relación con la administración.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Trámites de Vehículos</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Confección de Contratos</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-green-500" /> Gestión de Subvenciones</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT / TRUST SECTION --- */}
      <section id="sobre-nosotros" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 p-6 rounded-lg text-center border border-slate-700">
                <span className="block text-4xl font-bold text-amber-500 mb-2">+12</span>
                <span className="text-sm text-slate-300">Años de Experiencia</span>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg text-center border border-slate-700">
                <span className="block text-4xl font-bold text-amber-500 mb-2">PAE</span>
                <span className="text-sm text-slate-300">Punto Atención Emprendedor</span>
              </div>
              <div className="bg-slate-800 p-6 rounded-lg text-center border border-slate-700 col-span-2">
                <span className="block text-xl font-bold text-white mb-1">Nacida en 2013</span>
                <span className="text-sm text-slate-300">Colaboración de profesionales altamente cualificados</span>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h3 className="text-amber-500 font-bold uppercase tracking-wider text-sm">Por qué elegirnos</h3>
            <h2 className="text-3xl md:text-4xl font-bold">Interacción en tiempo real y experiencia consolidada.</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              En <strong>Auriaxes Asesores</strong> proporcionamos información continua tanto de forma presencial como online, permitiéndote obtener respuestas al instante a tus problemas.
            </p>
            <ul className="space-y-4 mt-4">
              <li className="flex items-start gap-3">
                <div className="bg-amber-500 p-1 rounded-full mt-1 flex-shrink-0">
                  <CheckCircle size={14} className="text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-white">Profesionales Cualificados</h5>
                  <p className="text-sm text-slate-400">Equipo multidisciplinar con experiencia desde 2013 en fiscalidad, contabilidad y derecho laboral.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-amber-500 p-1 rounded-full mt-1 flex-shrink-0">
                  <CheckCircle size={14} className="text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-white">Tecnología y Rapidez</h5>
                  <p className="text-sm text-slate-400">Interactúa con nosotros en tiempo real. Tramitación telemática de declaraciones y Sistema RED.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-amber-500 p-1 rounded-full mt-1 flex-shrink-0">
                  <CheckCircle size={14} className="text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-white">Servicio 360º</h5>
                  <p className="text-sm text-slate-400">Desde el plan de viabilidad para emprendedores hasta la gestión de herencias y patrimonio.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- CTA STRIP --- */}
      <div id="cta-emprendedores" className="bg-amber-500 py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
             <h2 className="text-2xl md:text-3xl font-bold text-slate-900">¿Eres Emprendedor?</h2>
             <p className="text-slate-800 mt-1">Te ayudamos con el plan de negocio y la puesta en marcha. Tramitación de subvenciones y ayudas.</p>
          </div>
          <button onClick={() => scrollToSection('ubicacion-contacto')} className="bg-slate-900 text-white px-8 py-3 rounded-md font-bold shadow-lg hover:bg-slate-800 transition-colors whitespace-nowrap">
            Agenda tu Cita Hoy
          </button>
        </div>
      </div>

        {/* --- LOCATION & CONTACT --- */}
        <section id="ubicacion-contacto" className="py-20 bg-white" aria-label="Ubicación y horario">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Contacta con Nosotros</h2>
            <p className="text-slate-600">Estamos en Ourense para ayudarte presencialmente u online.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 h-full">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Información de la Oficina</h3>
                
                <address className="space-y-6 not-italic">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Dirección</p>
                      <p className="text-slate-600">Avenida Zamora 37, Bajo B</p>
                      <p className="text-slate-600">32005, Ourense (Galicia)</p>
                      <p className="text-xs text-amber-600 mt-1 font-semibold">*Acceso movilidad reducida</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Teléfonos</p>
                      <a className="text-slate-600 block hover:text-amber-500 transition-colors" href="tel:627719812">627 719 812 (Móvil)</a>
                      <a className="text-slate-600 block hover:text-amber-500 transition-colors" href="tel:988989767">988 989 767 (Fijo)</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Email</p>
                      <a className="text-slate-600 hover:text-amber-500 transition-colors" href="mailto:contacto@auriaxes.com">contacto@auriaxes.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 p-3 rounded-full text-amber-600">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Horario de Invierno</p>
                      <p className="text-slate-600 text-sm">Lunes a Jueves: 09:00 - 19:00</p>
                      <p className="text-slate-600 text-sm">Viernes: 09:00 - 15:00</p>
                      <p className="font-bold text-slate-900 mt-3">Horario de Verano (Jun-Sep)</p>
                      <p className="text-slate-600 text-sm">Lunes a Viernes: 09:00 - 14:30</p>
                    </div>
                  </div>
                </address>
              </div>
            </div>

            {/* GOOGLE MAPS EMBED - Replaces Contact Form */}
            <div className="rounded-xl shadow-lg border border-slate-100 overflow-hidden h-full min-h-[400px]">
              <iframe 
                title="Ubicación Auriaxes Asesores"
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight="0" 
                marginWidth="0" 
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Avenida%20Zamora%2037,%2032005%20Ourense+(Auriaxes%20Asesores)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                className="w-full h-full"
              >
              </iframe>
            </div>
          </div>
        </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
               <h2 className="text-2xl font-bold text-white mb-4">AURIAXES</h2>
               <p className="max-w-sm mb-4">
                 Asesoría integral para empresas, autónomos y emprendedores en Ourense desde 2013. Información continua y respuesta inmediata.
               </p>
               <div className="flex gap-4">
                 {/* Social Icons Placeholders */}
                 <div className="w-8 h-8 bg-slate-700 rounded hover:bg-amber-500 hover:text-white transition-colors flex items-center justify-center cursor-pointer">In</div>
                 <div className="w-8 h-8 bg-slate-700 rounded hover:bg-amber-500 hover:text-white transition-colors flex items-center justify-center cursor-pointer">Fb</div>
               </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Servicios</h4>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-amber-400 cursor-pointer">Autónomos y Empresas</li>
                <li className="hover:text-amber-400 cursor-pointer">Laboral y Contable</li>
                <li className="hover:text-amber-400 cursor-pointer">Emprendedores</li>
                <li className="hover:text-amber-400 cursor-pointer">Herencias y Extranjero</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-amber-400 cursor-pointer">Aviso Legal</li>
                <li className="hover:text-amber-400 cursor-pointer">Política de Privacidad</li>
                <li className="hover:text-amber-400 cursor-pointer">Cookies</li>
                <li className="hover:text-amber-400 cursor-pointer">Canal Ético</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-center text-xs">
            <p>&copy; {new Date().getFullYear()} Auriaxes Asesores. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

