import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="ubicacion-contacto" className="py-12 sm:py-16 md:py-20 bg-white" aria-label="Ubicación y horario">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute inset-0 bg-auria-green-400/10 blur-3xl rounded-full pointer-events-none"></div>
            <div className="relative bg-white/80 backdrop-blur-sm border border-auria-green-100 rounded-3xl p-8 sm:p-10 shadow-2xl text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-auria-green-50 text-auria-green-600 mb-4">
                 <Mail className="w-6 h-6" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-auria-black mb-3 tracking-tight">
                Hablemos de tu <span className="text-auria-green-500">Negocio</span>
              </h2>
              <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
                Estamos en Ourense para ofrecerte soluciones reales. <br className="hidden sm:block"/>
                Visítanos o contáctanos online para empezar.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-slate-50 p-5 sm:p-6 rounded-xl border border-slate-100 h-full">
              <h3 className="text-lg sm:text-xl font-bold text-auria-black mb-5 sm:mb-6">Información de la Oficina</h3>
              
              <address className="space-y-5 sm:space-y-6 not-italic">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-auria-green-100 p-2.5 sm:p-3 rounded-full text-auria-green-600 flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-auria-black text-sm sm:text-base">Dirección</p>
                    <p className="text-slate-600 text-sm sm:text-base">Avenida Zamora 37, Bajo B</p>
                    <p className="text-slate-600 text-sm sm:text-base">32005, Ourense (Galicia)</p>
                    <p className="text-xs sm:text-sm text-auria-green-600 mt-1 font-semibold">*Acceso movilidad reducida</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-auria-green-100 p-2.5 sm:p-3 rounded-full text-auria-green-600 flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-auria-black text-sm sm:text-base">Teléfonos</p>
                    <a className="text-slate-600 block hover:text-auria-green-400 transition-colors text-sm sm:text-base" href="tel:617098276">617 098 276 (Móvil)</a>
                    <a className="text-slate-600 block hover:text-auria-green-400 transition-colors text-sm sm:text-base" href="tel:988045425">988 045 425 (Fijo)</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-auria-green-100 p-2.5 sm:p-3 rounded-full text-auria-green-600 flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-auria-black text-sm sm:text-base">Email</p>
                    <a className="text-slate-600 hover:text-auria-green-400 transition-colors text-sm sm:text-base break-all" href="mailto:contacto@auriaxes.com">contacto@auriaxes.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-auria-green-100 p-2.5 sm:p-3 rounded-full text-auria-green-600 flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-auria-black text-sm sm:text-base">Horario de Invierno</p>
                    <p className="text-slate-600 text-xs sm:text-sm">Lunes a Jueves: 8:30 - 14:00</p>
                    <p className="text-slate-600 text-xs sm:text-sm">Tardes: 16:00 - 18:30</p>
                    <p className="text-slate-600 text-xs sm:text-sm">Viernes: 8:30 - 15:00</p>
                    <p className="font-bold text-auria-black mt-3 text-sm sm:text-base">Horario de Verano (Jun-Sep)</p>
                    <p className="text-slate-600 text-xs sm:text-sm">Lunes a Viernes: 08:30 - 14:30</p>
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
