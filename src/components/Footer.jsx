import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-auria-black text-gray-400 py-12 border-t border-auria-black-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-4">AURIAXES</h2>
              <p className="max-w-sm mb-4">
                Asesoría integral para empresas, autónomos y emprendedores en Ourense desde 2013. Información continua y respuesta inmediata.
              </p>
              <div className="flex gap-4">
                {/* Social Icons Placeholders */}
                <div className="w-8 h-8 bg-auria-black-800 rounded hover:bg-auria-green-400 hover:text-white transition-colors flex items-center justify-center cursor-pointer">In</div>
                <div className="w-8 h-8 bg-auria-black-800 rounded hover:bg-auria-green-400 hover:text-white transition-colors flex items-center justify-center cursor-pointer">Fb</div>
              </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-auria-green-400 cursor-pointer">Autónomos y Empresas</li>
              <li className="hover:text-auria-green-400 cursor-pointer">Laboral y Contable</li>
              <li className="hover:text-auria-green-400 cursor-pointer">Emprendedores</li>
              <li className="hover:text-auria-green-400 cursor-pointer">Herencias y Extranjero</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-auria-green-400 cursor-pointer">Aviso Legal</li>
              <li className="hover:text-auria-green-400 cursor-pointer">Política de Privacidad</li>
              <li className="hover:text-auria-green-400 cursor-pointer">Cookies</li>
              <li className="hover:text-auria-green-400 cursor-pointer">Canal Ético</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-auria-black-800 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Auriaxes Asesores. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
