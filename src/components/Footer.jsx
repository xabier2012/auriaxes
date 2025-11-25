import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-auria-black text-gray-400 py-12 border-t border-auria-black-800">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-4">AURIAXES</h2>
          <p className="max-w-2xl">
            Asesoría integral para empresas, autónomos y emprendedores en Ourense desde 2013. Información continua y respuesta inmediata.
          </p>
        </div>
        
        <div className="border-t border-auria-black-800 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Auriaxes Asesores. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
