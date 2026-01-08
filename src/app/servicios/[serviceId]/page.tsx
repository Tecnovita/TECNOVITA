// ======================================================
// IMPORTS
// ======================================================
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MotionDiv } from '@/components/motion-div';
import ServiceCardList from '@/components/ServiceCardList';

// Importamos la fuente de datos centralizada
import {
  subServicesContent,
  type ServiceId,
  type ServiceItem,
} from '@/lib/services';

// ======================================================
// CONSTANTES
// ======================================================
const PHONE_WHATSAPP = '542954294429';

type PageProps = {
  params: {
    serviceId: ServiceId;
  };
};

// ======================================================
// GENERACIÓN DE RUTAS ESTÁTICAS (AUTOMATIZADA)
// ======================================================
export function generateStaticParams(): { serviceId: string }[] {
  // Sincronización: Extrae las llaves directamente de subServicesContent
  // Si un servicio no está en el archivo de datos, no se generará su ruta.
  return Object.keys(subServicesContent).map((id) => ({
    serviceId: id,
  }));
}

// ======================================================
// PÁGINA PRINCIPAL
// ======================================================
export default async function Page({ params }: PageProps) {
  const { serviceId } = params;

  // Busca el detalle en el archivo central usando el ID de la URL
  const serviceDetail = subServicesContent[serviceId as ServiceId];

  // Si el servicio fue eliminado o no existe -> 404 automático
  if (!serviceDetail) return notFound();

  const itemsWithWhatsapp = serviceDetail.items.map(
    (it: ServiceItem) => ({
      ...it,
      whatsappUrl: `https://wa.me/${PHONE_WHATSAPP}?text=${encodeURIComponent(
        `Hola, quisiera información sobre "${serviceDetail.title}" - ${it.label} (ID: ${it.id}).`
      )}`,
    })
  );

  return (
    <MotionDiv
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-4xl rounded-xl bg-gradient-to-br from-white to-blue-50/30 py-4 px-4 shadow-lg border border-blue-100 sm:py-6 sm:px-6"
      initial={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.3 }}
    >
      {/* ENCABEZADO */}
      <header
        className="mb-3 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100/50 px-5 py-3 text-center shadow-sm border-l-4 border-tecnovita"
        role="banner"
      >
        <h1 className="text-xl font-bold tracking-tight text-tecnovita sm:text-2xl">
          {serviceDetail.title}
        </h1>
      </header>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent mb-3" />

      {/* LISTA DE SERVICIOS */}
      <section
        aria-labelledby="service-list"
        className="w-full"
      >
        <ServiceCardList items={itemsWithWhatsapp} />
      </section>

      {/* NAVEGACIÓN */}
      <nav
        className="mt-4 flex flex-col justify-center gap-2.5 sm:flex-row pt-3 border-t border-blue-100"
        role="navigation"
      >
        <Link
          aria-label="Volver al inicio"
          className="rounded-lg bg-gray-200 hover:bg-gray-300 px-6 py-2.5 text-sm font-medium text-gray-800 transition-all duration-200 hover:shadow-md"
          href="/"
        >
          ← Volver
        </Link>

        <Link
          aria-label="Solicitar presupuesto"
          className="rounded-lg bg-gradient-to-r from-tecnovita to-tecnovita-dark hover:from-tecnovita-dark hover:to-tecnovita px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:shadow-md hover:scale-105"
          href="/contacto"
        >
          💬 Solicitar Presupuesto
        </Link>
      </nav>
    </MotionDiv>
  );
}

// ======================================================
// METADATA DINÁMICA (AUTOMATIZADA)
// ======================================================
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { serviceId } = params;
  const serviceDetail = subServicesContent[serviceId as ServiceId];

  if (!serviceDetail) {
    return {
      title: 'Servicio no encontrado',
      description: 'La página solicitada no existe.',
    };
  }

  return {
    title: serviceDetail.title,
    description: `${serviceDetail.title} — Soluciones profesionales para tu hogar o empresa.`,
  };
}