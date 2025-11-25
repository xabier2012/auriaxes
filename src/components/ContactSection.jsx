import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="ubicacion-contacto" className="py-20 bg-white" aria-label="Ubicación y horario">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-auria-green-400 to-auria-green-500 border-4 border-auria-green-600 rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-auria-black mb-4">Contacta con Nosotros</h2>
            <p className="text-auria-black font-medium">Estamos en Ourense para ayudarte presencialmente u online.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 h-full">
              <h3 className="text-xl font-bold text-auria-black mb-6">Información de la Oficina</h3>
              
              <address className="space-y-6 not-italic">
                <div className="flex items-start gap-4">
                  <div className="bg-auria-green-100 p-3 rounded-full text-auria-green-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-auria-black">Dirección</p>
                    <p className="text-slate-600">Avenida Zamora 37, Bajo B</p>
                    <p className="text-slate-600">32005, Ourense (Galicia)</p>
                    <p className="text-xs text-auria-green-600 mt-1 font-semibold">*Acceso movilidad reducida</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-auria-green-100 p-3 rounded-full text-auria-green-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-auria-black">Teléfonos</p>
                    <a className="text-slate-600 block hover:text-auria-green-400 transition-colors" href="tel:617098276">617 098 276 (Móvil)</a>
                    <a className="text-slate-600 block hover:text-auria-green-400 transition-colors" href="tel:988045425">988 045 425 (Fijo)</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-auria-green-100 p-3 rounded-full text-auria-green-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-auria-black">Email</p>
                    <a className="text-slate-600 hover:text-auria-green-400 transition-colors" href="mailto:gerencia@auriaxes.com">gerencia@auriaxes.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-auria-green-100 p-3 rounded-full text-auria-green-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-auria-black">Horario de Invierno</p>
                    <p className="text-slate-600 text-sm">Lunes a Jueves: 8:30 - 14:00 | Tardes 16:00 - 18:30</p>
                    <p className="text-slate-600 text-sm">Viernes: 8:30 - 15:00</p>
                    <p className="font-bold text-auria-black mt-3">Horario de Verano (Jun-Sep)</p>
                    <p className="text-slate-600 text-sm">Lunes a Viernes: 08:30 - 14:30</p>
                  </div>
                </div>
              </address>
            </div>
          </div>

          {/* GOOGLE MAPS EMBED */}
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
  );
};

export default ContactSection;
