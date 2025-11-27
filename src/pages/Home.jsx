import React from 'react';
import { 
  Landmark, 
  Briefcase, 
  BarChart4, 
  TrendingUp, 
  Scale, 
  Car,
} from 'lucide-react';

// Components
import MetaSEO from '../components/MetaSEO';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

const servicesData = [
  {
    id: "servicio-fiscal",
    icon: Landmark,
    title: "Área Fiscal",
    description: "Gestión completa de obligaciones tributarias con el fin de optimizar tu carga fiscal",
    items: [
      "IRPF, IVA y Sociedades",
      "Rentas del Extranjero",
      "Impuesto de Patrimonio",
      "Inspecciones Tributarias"
    ],
    variant: "amber"
  },
  {
    id: "servicio-laboral",
    icon: Briefcase,
    title: "Área Laboral",
    description: "Autorizados por el Sistema RED. Gestión integral de personal y prevención de riesgos.",
    items: [
      "Nóminas y Seguros Sociales",
      "Partes de Accidentes DELTA",
      "Bonificaciones a trabajadores",
      "Emplea@s de Hogar",
      "Altas/Bajas Seguridad Social"
    ],
    variant: "slate"
  },
  {
    id: "servicio-contable",
    icon: BarChart4,
    title: "Área Contable",
    description: "Contabilidad analítica para la toma de decisiones. Tu información financiera al día.",
    items: [
      "Libros y Cuentas Anuales",
      "Registro Mercantil",
      "Facturación Diaria",
      "Estados Contables"
    ],
    variant: "amber"
  },
  {
    id: "servicio-emprendedores",
    icon: TrendingUp,
    title: "Emprendedores",
    description: "Te ayudamos en la puesta en marcha.",
    items: [
      "Plan de Negocio y Viabilidad",
      "Tramitación Subvenciones",
      "Forma Jurídica Adecuada",
      "Asesoramiento Inicial"
    ],
    variant: "slate"
  },
  {
    id: "servicio-herencias-civil",
    icon: Scale,
    title: "Herencias y Catastro",
    description: "Servicios especializados para particulares más allá de la actividad empresarial.",
    items: [
      "Gestión de Herencias",
      "Impuesto de Sucesiones",
      "Catastro",
      "Impuestos Locales"
    ],
    variant: "amber"
  },
  {
    id: "servicio-tramites-vehiculos",
    icon: Car,
    title: "Trámites y Vehículos",
    description: "Gestión administrativa integral para simplificar tu relación con la administración.",
    items: [
      "Trámites de Vehículos",
      "Confección de Contratos",
      "Gestión de Subvenciones"
    ],
    variant: "slate"
  }
];

const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-auria-black-800 bg-white min-h-screen flex flex-col">
      <MetaSEO 
        title="Auriaxes Asesores | Asesoría Fiscal, Laboral y Contable en Ourense"
        description="Asesoría integral en Ourense para empresas, autónomos y emprendedores. Fiscal, laboral, contable, herencias y trámites de vehículos. Atención presencial y online."
        keywords="asesoría ourense, gestoría, fiscal, laboral, contable, autónomos, empresas, emprendedores, herencias, vehículos, auriaxes"
        canonical="https://auriaxes.com"
      />
      
      <TopBar />
      <Navbar scrollToSection={scrollToSection} />

      <main className="flex-1">
        <Hero scrollToSection={scrollToSection} />
        
        <CTASection scrollToSection={scrollToSection} />

        {/* --- SERVICES SECTION --- */}
        <section id="servicios" className="py-12 sm:py-16 md:py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16">
              <h3 className="text-auria-green-600 font-bold uppercase tracking-wider text-xs sm:text-sm mb-2">Qué hacemos</h3>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-auria-black mb-3 sm:mb-4">Soluciones para Autónomos y Empresas</h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Servicios adaptados a tus necesidades, desde la contabilidad diaria hasta situaciones complejas como herencias o rentas del extranjero.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {servicesData.map((service) => (
                <ServiceCard 
                  key={service.id}
                  {...service}
                />
              ))}
            </div>
          </div>
        </section>

        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
