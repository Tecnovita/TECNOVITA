import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import type { Metadata } from 'next';

import { subServicesContent, COMPANY_NAME } from '@/lib/services';

// ==================
// METADATA
// ==================
const serviceNames = Object.values(subServicesContent).map(s => s.id);

export const metadata: Metadata = {
  title: `Inicio | ${COMPANY_NAME}`,
  description: `Servicios técnicos profesionales en ${serviceNames.join(', ')}. Atención a hogares, comercios y empresas.`,
  keywords: ['servicios técnicos', 'informática', 'electricidad', 'telefonía', COMPANY_NAME],
};

// ==================
// SERVICE CARD (Efecto Neón Máximo)
// ==================
function ServiceCard({
  bgGradient,
  description,
  features,
  href,
  icon: Icon,
  title,
}: {
  bgGradient: string;
  description: string;
  features: string[];
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}) {
  return (
    <Link
      aria-label={`Ver servicios de ${title}`}
      className="group flex flex-col bg-[#0a0a0c] rounded-[1.5rem]
      border border-white/5 transition-all duration-300 hover:-translate-y-2 overflow-hidden
      hover:border-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.8)]"
      href={href}
    >
      <div className={`bg-gradient-to-br ${bgGradient} p-5 text-white text-center relative`}>
        <div className="flex justify-center mb-3 relative z-10">
          <div className="p-2.5 bg-white/20 rounded-xl backdrop-blur-md border border-white/20">
            <Icon className="text-2xl" />
          </div>
        </div>
        <h2 className="font-extrabold text-lg uppercase tracking-wider relative z-10">{title}</h2>
      </div>

      {/* BLOQUE DE TEXTO CON EFECTO ENCENDIDO */}
      <div className="p-6 flex-grow bg-[#0a0a0c]">
        <p
          className="text-gray-400 mb-5 leading-relaxed text-[13px] font-medium transition-all duration-300
        group-hover:text-blue-300 group-hover:[text-shadow:0_0_15px_rgba(96,165,250,1)]"
        >
          {description}
        </p>
        <div className="space-y-2.5">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start text-[13px] transition-all duration-300">
              <span className="text-emerald-500 mr-2 font-bold group-hover:text-blue-400">✓</span>
              <span
                className="text-gray-300 font-semibold group-hover:text-white 
              group-hover:[text-shadow:0_0_10px_rgba(255,255,255,0.8)]"
              >
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 pb-5 bg-[#0a0a0c]">
        <div
          className="flex items-center justify-center text-blue-400 font-bold text-[10px]
        transition-colors border-t border-white/5 pt-3 uppercase tracking-tighter"
        >
          <span>Ver servicios detallados</span>
          <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  const servicesList = Object.values(subServicesContent);

  return (
    <main
      className="relative flex flex-col items-center py-10 px-4 min-h-screen bg-[#050506] text-white overflow-hidden"
      id="site-main"
    >
      {/* Fondo con luces ambientales */}
      <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-5%] w-[30%] h-[30%] bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />

      <header className="text-center max-w-5xl mb-12 relative z-10">
        <h1 className="font-black text-blue-500 mb-2 tracking-tighter text-4xl md:text-5xl uppercase italic">
          Servicios <span className="text-blue-500">Profesionales</span>
        </h1>
      </header>

      <section className="w-full max-w-6xl mb-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map(service => (
            <ServiceCard
              key={service.id}
              bgGradient={service.bgGradient}
              description="Solucionamos tu problema."
              features={service.items.slice(0, 3).map(item => item.label)}
              href={`/servicios/${service.id}`}
              icon={service.icon}
              title={service.title.replace('Servicios de ', '')}
            />
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl relative z-10">
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-[2rem] p-12 text-white text-center shadow-2xl relative group overflow-hidden">
          <h2 className="text-2xl md:text-2xl font-black mb-4 uppercase italic">
            Contanos tu problema. Nosotros te brindamos la mejor solución
          </h2>
          <div className="flex justify-center mt-6">
            <Link
              className="bg-white text-blue-800 font-black uppercase tracking-widest text-[10px] py-4 px-10 rounded-xl transition-all hover:scale-105 shadow-xl"
              href="/contacto"
            >
              Solicitar presupuesto
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
