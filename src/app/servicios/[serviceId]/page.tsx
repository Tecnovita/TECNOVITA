// C:\01-TECNOVITA\tecnovita1\src\app\servicios\[serviceId]\page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import { MotionDiv } from '@/components/motion-div';
import ServiceCardList from '@/components/ServiceCardList';
import { subServicesContent, type ServiceId, type ServiceItem, COMPANY_NAME } from '@/lib/services';

const PHONE_WHATSAPP = '542954294429';

// 1. Definimos la interfaz para Next.js 15 (params es Promise)
interface PageProps {
  params: Promise<{ serviceId: string }>;
}

// 2. Corregimos generateMetadata (también debe esperar a params)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { serviceId } = await params;
  const id = serviceId.toLowerCase() as ServiceId;
  const serviceDetail = subServicesContent[id];

  if (!serviceDetail) return { title: 'Servicio no encontrado' };

  return {
    title: `${serviceDetail.title} | ${COMPANY_NAME}`,
    description: `Servicios profesionales de ${serviceDetail.title} en Santa Rosa y Toay.`,
  };
}

export default async function ServicePage({ params }: PageProps) {
  // 3. LA SOLUCIÓN AL ERROR: Esperamos la promesa antes de usar serviceId
  const { serviceId } = await params;
  const id = serviceId.toLowerCase() as ServiceId;
  const serviceDetail = subServicesContent[id];

  if (!serviceDetail) {
    notFound();
  }

  // CORREGIDO: Cambiado whatsappLink a whatsappUrl
  const itemsWithWhatsapp = serviceDetail.items.map((item: ServiceItem) => ({
    ...item,
    whatsappUrl: `https://wa.me/${PHONE_WHATSAPP}?text=${encodeURIComponent(
      `Hola! Me interesa el servicio de ${item.label} (${serviceDetail.title})`
    )}`,
  }));

  const Icon = serviceDetail.icon;

  return (
    <main className="relative min-h-screen bg-[#050506] text-white overflow-hidden">
      {/* Fondo con imagen del servicio */}
      <div className="fixed inset-0 z-0">
        <Image
          fill
          priority
          alt={serviceDetail.title}
          className="object-cover opacity-60"
          src={serviceDetail.imageUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050506]/90 via-[#050506]/40 to-[#050506]" />
      </div>

      <section className="relative z-10 mx-auto max-w-5xl px-4 py-12 md:py-20">
        <Link
          className="mb-10 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-400 hover:text-white transition-all group"
          href="/"
        >
          <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
          Volver al inicio
        </Link>

        {/* --- CABECERA PREMIUM --- */}
        <header className="mb-16 text-center">
          {/* Logo T (Como en la Home) */}
          <div className="mb-6 flex justify-center">
            <div className="relative w-20 h-20 md:w-28 md:h-28">
              <div className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full" />
              <Image
                priority
                alt="Logo T"
                className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                height={120}
                src="/logo-t.svg"
                width={120}
              />
            </div>
          </div>

          {/* Ubicación con Badge */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-blue-600/10 px-8 py-2.5 border border-blue-500/30 backdrop-blur-md">
            <Icon className="text-blue-400 text-lg" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-blue-100">
              Santa Rosa - Toay
            </span>
          </div>

          {/* Título en Italica y Negrita (Estilo Home) */}
          <h1 className="font-black text-4xl md:text-7xl uppercase italic tracking-tight text-white drop-shadow-2xl">
            {serviceDetail.title.split(' ').map((word, i) => (
              <span key={i} className={i === 0 ? 'text-blue-500' : 'text-white'}>
                {word}{' '}
              </span>
            ))}
          </h1>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,1)]" />
        </header>

        {/* Tarjeta de Contenido */}
        <MotionDiv
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[3rem] bg-black/60 backdrop-blur-2xl p-6 md:p-12 border border-white/10 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
        >
          <ServiceCardList items={itemsWithWhatsapp} />

          <footer className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">
                ¿No encontrás lo que buscás?
              </p>
              <p className="text-xl text-white italic font-bold">
                Realizamos presupuestos a medida.
              </p>
            </div>
            <Link
              className="rounded-2xl bg-blue-600 hover:bg-blue-500 px-10 py-5 text-sm font-black uppercase tracking-[0.2em] text-white transition-all shadow-lg hover:scale-105"
              href="/contacto"
            >
              Solicitar Presupuesto
            </Link>
          </footer>
        </MotionDiv>
      </section>
    </main>
  );
}
