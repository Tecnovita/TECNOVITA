// C:\01-TECNOVITA\tecnovita1\src\app\page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
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
// TARJETA DE SERVICIO (Visual con Imagen)
// ==================
function ServiceCard({ service }: { service: Servicio }) {
  const Icon = service.icon;

  return (
    <Link
      aria-label={`Ver servicios de ${service.title}`}
      className="group relative flex flex-col h-[380px] bg-[#0a0a0c] rounded-[2rem] 
      border border-white/5 transition-all duration-500 hover:-translate-y-2 overflow-hidden
      hover:border-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]"
      href={`/servicios/${service.id}`}
    >
      {/* Imagen de Fondo con Optimización Next.js */}
      <div className="absolute inset-0 z-0">
        <Image
          fill
          alt={service.title}
          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          src={service.imageUrl}
        />
        {/* Overlay para legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/40 to-transparent" />
      </div>

      {/* Contenido Superior (Icono + Título Separado) */}
      <div className="relative z-10 flex flex-col items-center pt-6 pb-4">
        <div className="p-3 rounded-xl backdrop-blur-md border border-white/20 bg-white/10 text-white mb-3">
          <Icon className="text-xl" />
        </div>
        <h2 className="text-white neon-title hover:neon-glow-enhanced font-extrabold text-lg md:text-xl uppercase tracking-wide text-center px-2 overflow-hidden text-ellipsis whitespace-nowrap">
          {service.title.replace('Servicios de ', '')}
        </h2>
      </div>

      {/* Bloque de Contenido Inferior (Descripción + Lista) */}
      <div className="relative z-10 flex flex-col flex-grow p-4 px-6 mt-auto justify-end">
        <p className="text-gray-300 mb-3 leading-relaxed text-xs font-medium group-hover:text-blue-300 transition-colors">
          Solucionamos tu problema.
        </p>

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
    <main
      className="relative flex flex-col items-center py-8 px-4 min-h-screen bg-[#050506] text-white overflow-hidden"
      id="site-main"
    >
      {/* Fondo con luces ambientales */}
      <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Imagen Hero "Merge" */}
      <div className="absolute top-0 left-0 w-full h-[500px] opacity-20 pointer-events-none">
        <Image
          fill
          alt="Tecnovita Background"
          className="object-cover"
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050506]" />
      </div>

      {/* Logo Central (La letra T) */}
      <div className="relative z-10 mt-12 mb-4 flex justify-center">
        <div className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] animate-fade-in">
          <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full" />
          <Image
            priority
            alt="Logo TECNOVITA"
            className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]"
            height={100}
            src="/logo-t.svg"
            width={100}
          />
        </div>
      </div>

      <header className="text-center max-w-5xl mb-12 relative z-10">
        <h1
          className="font-black text-blue-500 mb-2 tracking-tight text-4xl md:text-5xl lg:text-6xl uppercase italic"
          style={{ wordSpacing: '0.15em' }}
        >
          Servicios <span className="text-blue-500">Profesionales</span>
        </h1>
      </header>

      <section className="w-full max-w-7xl mb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl relative z-10 mb-16">
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-[3rem] p-8 text-white text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <h2 className="text-lg md:text-xl font-bold tracking-wide mb-6 banner-text relative z-10 leading-1.3 drop-shadow-lg">
            Contanos tu problema. Nosotros te brindamos la mejor solución
          </h2>
          <div className="flex justify-center relative z-10">
            <Link
              className="bg-white text-blue-900 font-black uppercase tracking-widest text-sm py-3 px-8 rounded-2xl transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] shadow-xl drop-shadow-md"
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
