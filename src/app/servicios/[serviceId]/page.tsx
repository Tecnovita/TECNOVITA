// C:\01-TECNOVITA\tecnovita1\src\app\servicios\[serviceId]\page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import { MotionDiv } from '@/components/motion-div';
import ServiceCardList from '@/components/ServiceCardList';
import HeroSection from '@/components/HeroSection';
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
  return { title: `${serviceDetail.title} | ${COMPANY_NAME}` };
}

export default async function ServicePage({ params }: PageProps) {
  const { serviceId } = await params;
  const id = serviceId.toLowerCase() as ServiceId;
  const serviceDetail = subServicesContent[id];

  if (!serviceDetail) notFound();

  const itemsWithWhatsapp = serviceDetail.items.map((item: ServiceItem) => ({
    ...item,
    whatsappUrl: `https://wa.me/${PHONE_WHATSAPP}?text=${encodeURIComponent(
      `Hola! Me interesa el servicio de ${item.label} (${serviceDetail.title})`
    )}`,
  }));

  return (
    <main className="relative flex flex-col items-center py-4 px-4 bg-[#050506] text-white overflow-x-hidden">
      {/* Fondo de Servicio Unificado - OPTIMIZADO para mejor visibilidad */}
      <div className="absolute top-0 left-0 w-full h-[650px] opacity-50 pointer-events-none">
        <Image
          fill
          priority
          alt={serviceDetail.title}
          className="object-cover"
          src={serviceDetail.imageUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050506]/40 via-[#050506]/70 to-[#050506]" />
      </div>

      <section className="relative z-10 w-full max-w-7xl flex flex-col items-center">
        {/* Botón Volver */}
        <div className="w-full mb-3">
          <Link
            className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 hover:text-white transition-all group"
            href="/"
          >
            <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
            Volver al inicio
          </Link>
        </div>

        {/* Cabecera Unificada */}
        <HeroSection title={serviceDetail.title.replace('Servicios de ', '')} />

        {/* Contenedor de Tarjetas */}
        <MotionDiv
          animate={{ opacity: 1, y: 0 }}
          className="w-full rounded-[2.5rem] bg-[#0a0a0c]/80 backdrop-blur-2xl p-4 md:p-8 border border-white/5 shadow-2xl mb-8"
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <ServiceCardList items={itemsWithWhatsapp} />

          <footer className="mt-8 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em] mb-1">
                ¿Necesitás algo específico?
              </p>
              <p className="text-2xl text-white italic font-bold">
                Presupuestos a medida sin cargo.
              </p>
            </div>
            <Link
              className="rounded-2xl bg-blue-600 hover:bg-blue-500 px-12 py-4 text-xs font-black uppercase tracking-widest text-white transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:scale-105 active:scale-95"
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
