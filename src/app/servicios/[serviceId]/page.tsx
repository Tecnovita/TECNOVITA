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

interface PageProps {
  params: Promise<{ serviceId: string }>;
}

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
  const { serviceId } = await params;
  const id = serviceId.toLowerCase() as ServiceId;
  const serviceDetail = subServicesContent[id];

  if (!serviceDetail) {
    notFound();
  }

  const itemsWithWhatsapp = serviceDetail.items.map((item: ServiceItem) => ({
    ...item,
    whatsappUrl: `https://wa.me/${PHONE_WHATSAPP}?text=${encodeURIComponent(
      `Hola! Me interesa el servicio de ${item.label} (${serviceDetail.title})`
    )}`,
  }));

  const Icon = serviceDetail.icon;

  return (
    <main className="relative flex flex-col items-center py-4 px-4 bg-[#050506] text-white">
      {/* Fondo */}
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

      <section className="relative z-10 w-full max-w-6xl">
        <Link
          className="mb-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-400 hover:text-white transition-all group"
          href="/"
        >
          <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
          Volver al inicio
        </Link>

        <header className="mb-6 text-center">
          {/* Logo con efecto hover mejorado */}
          <div className="mb-4 flex justify-center">
            <div className="relative w-16 h-16 md:w-20 md:h-20 group cursor-pointer">
              <div
                className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full
                              transition-all duration-300 
                              group-hover:bg-blue-500/50 group-hover:blur-2xl"
              />
              <Image
                priority
                alt="Logo T"
                className="w-full h-full object-contain
                           transition-all duration-300 
                           group-hover:drop-shadow-[0_0_40px_rgba(59,130,246,1)]
                           group-hover:brightness-125 
                           group-hover:scale-110"
                height={80}
                src="/logo-t.svg"
                width={80}
              />
            </div>
          </div>

          <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-blue-600/10 px-6 py-2 border border-blue-500/30 backdrop-blur-md">
            <Icon className="text-blue-400 text-base" />
            <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.4em] text-blue-100">
              Santa Rosa - Toay
            </span>
          </div>

          <h1 className="font-black text-3xl md:text-6xl uppercase italic tracking-tight text-white mb-6">
            {serviceDetail.title.split(' ').map((word, i) => (
              <span key={i} className={i === 0 ? 'text-blue-500' : 'text-white'}>
                {word}{' '}
              </span>
            ))}
          </h1>
        </header>

        <MotionDiv
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[2.5rem] bg-black/60 backdrop-blur-2xl p-4 md:p-8 border border-white/10 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
        >
          <ServiceCardList items={itemsWithWhatsapp} />

          <footer className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-0.5">
                ¿No encontrás lo que buscás?
              </p>
              <p className="text-lg text-white italic font-bold">
                Realizamos presupuestos a medida.
              </p>
            </div>
            <Link
              className="rounded-xl bg-blue-600 hover:bg-blue-500 px-8 py-3.5 text-xs font-black uppercase tracking-[0.2em] text-white transition-all shadow-lg hover:scale-105"
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
