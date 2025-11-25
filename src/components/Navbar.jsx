import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Navbar = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav id="navegacion-principal" className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          <img
            src="assets/images/auriaxes-asesores.jpg"
            alt="Logotipo de Auriaxes Asesores"
            className="h-10 sm:h-12 md:h-16 w-auto object-contain"
            loading="lazy"
            decoding="async"
          />
          <img
            src="assets/images/economistas_logo.png"
            alt="Logotipo Economistas"
            className="h-8 sm:h-10 md:h-16 w-auto object-contain"
            loading="lazy"
            decoding="async"
          />
          <img
            src="assets/images/gestoria_administrativa_logo.png"
            alt="Logotipo Gestoría Administrativa"
            className="h-8 sm:h-10 md:h-16 w-auto object-contain"
            loading="lazy"
            decoding="async"
          />
          <h1 className="sr-only">AURIAXES Asesores</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium text-slate-600" aria-label="Navegación principal">
          <button onClick={() => handleNavClick('hero-inicio')} className="hover:text-auria-green-600 transition-colors">Inicio</button>
          <button onClick={() => handleNavClick('servicios')} className="hover:text-auria-green-600 transition-colors">Servicios</button>
          <button onClick={() => handleNavClick('sobre-nosotros')} className="hover:text-auria-green-600 transition-colors">Sobre Nosotros</button>
          <button onClick={() => handleNavClick('ubicacion-contacto')} className="hover:text-auria-green-600 transition-colors">Contacto</button>
        </div>

        {/* CTA Phone Link */}
        <a 
          href="tel:988045425"
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-auria-green-400 hover:bg-auria-green-500 text-auria-black px-5 py-2 rounded-md font-semibold shadow-md transition-colors"
        >
          <Phone size={18} />
          988 045 425
        </a>

        {/* Mobile Toggle */}
        <button className="md:hidden text-auria-black-800" onClick={toggleMenu} aria-label="Abrir menú">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 flex flex-col py-4">
          <button onClick={() => handleNavClick('hero-inicio')} className="py-3 px-6 text-left hover:bg-slate-50 font-medium">Inicio</button>
          <button onClick={() => handleNavClick('servicios')} className="py-3 px-6 text-left hover:bg-slate-50 font-medium">Servicios</button>
          <button onClick={() => handleNavClick('sobre-nosotros')} className="py-3 px-6 text-left hover:bg-slate-50 font-medium">Sobre Nosotros</button>
          <button onClick={() => handleNavClick('ubicacion-contacto')} className="py-3 px-6 text-left hover:bg-slate-50 font-medium">Contacto</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
