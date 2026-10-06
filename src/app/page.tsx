import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import type { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import { subServicesContent, COMPANY_NAME, type Servicio } from '@/lib/services';

export const metadata: Metadata = {
  title: { absolute: `${COMPANY_NAME} | Servicios técnicos en Santa Rosa y Toay` },
  alternates: { canonical: '/' },
};

const PASOS = [
  ['1. Contanos tu problema', 'Por el formulario o por WhatsApp.'],
  ['2. Presupuesto sin cargo', 'Te respondemos con una propuesta a medida.'],
  ['3. Resolvemos', 'Hacemos el trabajo y te dejamos todo funcionando.'],
];

const FAQ = [
  ['¿El presupuesto tiene costo?', 'No, los presupuestos son sin cargo.'],
  [
    '¿Cuáles son los horarios de atención?',
    'Lunes a viernes de 9 a 18 y sábados de 9 a 13. Para urgencias escribinos por WhatsApp.',
  ],
  [
    '¿Trabajan en zonas rurales?',
    'Sí, atendemos zonas rurales y campos. Instalamos radioenlaces y Starlink para que tengas conectividad en tu establecimiento. Consultanos por tu zona.',
  ],
];

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

function ServiceCard({ service }: { service: Servicio }) {
  const Icon = service.icon;
  return (
    <Link
      className="group relative flex flex-col h-[380px] bg-[#0a0a0c] rounded-[2rem] border border-white/5 transition-all duration-500 hover:-translate-y-2 overflow-hidden hover:border-blue-500/50"
      href={`/servicios/${service.id}`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          fill
          alt=""
          className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          src={service.imageUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/40 to-transparent" />
      </div>
      <div className="relative z-10 flex flex-col items-center pt-6">
        <div className="p-3 rounded-xl bg-white/10 text-white mb-3 border border-white/20">
          <Icon className="text-xl" />
        </div>
        <h2 className="text-white font-extrabold text-lg uppercase">
          {service.title.replace('Servicios de ', '')}
        </h2>
      </div>
      <div className="relative z-10 p-6 mt-auto">
        <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-2 mb-4">
          <p className="text-white font-bold text-sm">{service.description}</p>
        </div>
        <div className="flex items-center text-blue-400 font-bold text-xs uppercase tracking-tight">
          <span>Ver servicios detallados</span>
          <FaArrowRight className="ml-1.5 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  const servicesList = Object.values(subServicesContent);

  return (
    <div className="relative flex flex-col items-center py-8 px-4 bg-[#050506] text-white">
      <div className="absolute top-0 left-0 w-full h-[600px] opacity-70 pointer-events-none">
        <Image
          fill
          priority
          alt=""
          className="object-cover"
          quality={60}
          sizes="100vw"
          src="/imagenes/Inicio/fondo-planeta.avif"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050506]" />
      </div>

      <HeroSection
        subtitle="Soluciones integrales para hogares y empresas"
        title="Servicios Profesionales"
      />

      <section className="w-full max-w-7xl mb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl relative z-10 mb-6">
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-[2.5rem] p-6 text-center border border-white/10 shadow-2xl">
          {/* LÍNEA CORREGIDA ABAJO (usando entidades para las comillas) */}
          <h2 className="text-xl md:text-2xl font-bold mb-4 italic">
            &quot;Contanos tu problema. Nosotros te brindamos la mejor solución&quot;
          </h2>
          <Link
            className="inline-block bg-white text-blue-900 font-black uppercase text-xs tracking-widest py-2 px-8 rounded-2xl hover:scale-105 transition-all"
            href="/contacto"
          >
            Solicitar presupuesto sin cargo
          </Link>
        </div>
      </section>

      <section className="w-full max-w-4xl relative z-10 mb-12">
        <h2 className="text-center text-xs font-black uppercase tracking-[0.3em] text-blue-400 mb-6">
          Cómo trabajamos
        </h2>
        <ol className="grid gap-4 md:grid-cols-3">
          {PASOS.map(([t, d]) => (
            <li key={t} className="rounded-2xl border border-white/5 bg-[#0a0a0c] p-5">
              <p className="font-bold">{t}</p>
              <p className="mt-1 text-sm text-gray-400">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="w-full max-w-4xl relative z-10 mb-12">
        <h2 className="text-center text-xs font-black uppercase tracking-[0.3em] text-blue-400 mb-6">
          Preguntas frecuentes
        </h2>
        <div className="space-y-3">
          {FAQ.map(([q, a]) => (
            <details key={q} className="rounded-2xl border border-white/5 bg-[#0a0a0c] p-4">
              <summary className="cursor-pointer font-bold">{q}</summary>
              <p className="mt-2 text-sm text-gray-400">{a}</p>
            </details>
          ))}
        </div>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
          type="application/ld+json"
        />
      </section>
    </div>
  );
}
