// C:\01-TECNOVITA\tecnovita1\src\app\page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';
import type { Metadata } from 'next';

import { subServicesContent, COMPANY_NAME, type Servicio } from '@/lib/services';

// ==================
// METADATOS DE LA PÁGINA
// ==================
const serviceNames = Object.values(subServicesContent).map(s => s.id);

export const metadata: Metadata = {
  title: `Inicio | ${COMPANY_NAME}`,
  description: `Servicios técnicos profesionales en ${serviceNames.join(', ')}. Atención a hogares, comercios y empresas.`,
  keywords: ['servicios técnicos', 'informática', 'electricidad', 'telefonía', COMPANY_NAME],
};

// ==================
// TARJETA DE SERVICIO
// ==================
function ServiceCard({ service }: { service: Servicio }) {
  const Icon = service.icon;

  return (
    <Link
      aria-label={`Ver servicios de ${service.title}`}
      className="group relative flex flex-col h-[380px] bg-[#0a0a0c] rounded-[2rem]
      border border-white/5 transition-all duration-500 hover:-translate-y-2 overflow-hidden
      hover:border-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] isolate"
      href={`/servicios/${service.id}`}
    >
      {/* Imagen con contenedor adicional para controlar el overflow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
          <Image
            fill
            alt={service.title}
            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src={service.imageUrl}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/40 to-transparent rounded-[2rem]" />
      </div>

      {/* Encabezado */}
      <div className="relative z-10 flex flex-col items-center pt-6 pb-4">
        <div className="p-3 rounded-xl backdrop-blur-md border border-white/20 bg-white/10 text-white mb-3">
          <Icon className="text-xl" />
        </div>
        <h2 className="text-white font-extrabold text-lg md:text-xl uppercase tracking-wide text-center px-2 truncate">
          {service.title.replace('Servicios de ', '')}
        </h2>
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col flex-grow p-4 px-6 mt-auto justify-end">
        <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-lg px-3 py-2 mb-4">
          <p className="text-white font-bold text-sm leading-relaxed">{service.description}</p>
        </div>

        <div className="space-y-1.5 mb-4">
          {service.items.slice(0, 3).map(item => (
            <div key={item.id} className="flex items-center text-xs font-semibold text-white/90">
              <span className="text-blue-400 mr-1.5">✓</span>
              {item.label}
            </div>
          ))}
        </div>

        <div className="flex items-center text-blue-400 font-bold text-xs uppercase tracking-tight border-t border-white/10 pt-2">
          <span>Ver servicios detallados</span>
          <FaArrowRight className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  const servicesList = Object.values(subServicesContent);

  return (
    <main className="relative flex flex-col items-center py-4 px-4 bg-[#050506] text-white">
      {/* Fondo */}
      <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px]" />

      {/* Hero */}
      <div className="absolute top-0 left-0 w-full h-[600px] opacity-70 pointer-events-none">
        <Image
          fill
          priority
          alt="Tecnovita Background"
          className="object-cover saturate-150 brightness-110"
          src="/imagenes/Inicio/fondo-planeta.avif"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050506]" />
      </div>

      {/* Logo con efecto hover */}
      <div className="relative z-10 mt-4 mb-4">
        <div className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] group cursor-pointer">
          <Image
            fill
            alt="Logo TECNOVITA"
            className="object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]
                       transition-all duration-300 
                       group-hover:drop-shadow-[0_0_40px_rgba(59,130,246,1)]
                       group-hover:brightness-125 
                       group-hover:scale-110"
            src="/logo-t.svg"
          />
        </div>
      </div>

      {/* Título - Estandarizado */}
      <header className="text-center max-w-5xl mb-6 relative z-10">
        <div className="inline-flex items-center gap-3 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl px-6 py-3 mb-4">
          <FaMapMarkerAlt className="text-blue-400 text-xl" />
          <span className="text-white font-bold text-lg tracking-wide">SANTA ROSA - TOAY</span>
        </div>
        <h1 className="font-black text-blue-500 text-4xl md:text-5xl lg:text-6xl uppercase italic">
          Servicios Profesionales
        </h1>
      </header>

      {/* Servicios */}
      <section className="w-full max-w-7xl mb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="w-full max-w-4xl relative z-10 mb-8">
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-[3rem] p-8 text-center shadow-2xl">
          <h2 className="text-lg md:text-xl font-bold mb-6">
            Contanos tu problema. Nosotros te brindamos la mejor solución
          </h2>
          <Link
            className="inline-block bg-white text-blue-900 font-black uppercase text-sm py-3 px-8 rounded-2xl hover:scale-105 transition"
            href="/contacto"
          >
            Solicitar presupuesto
          </Link>
        </div>
      </section>
    </main>
  );
}
