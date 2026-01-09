// ======================================================
// IMPORTS
// ======================================================
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MotionDiv } from '@/components/motion-div';
import ServiceCardList from '@/components/ServiceCardList';

// Importamos la fuente de datos centralizada
import { subServicesContent, type ServiceId, type ServiceItem } from '@/lib/services';

// ======================================================
// CONSTANTES
// ======================================================
const PHONE_WHATSAPP = '542954294429';

type PageProps = {
  params: Promise<{
    serviceId: string;
  }>;
};

// ======================================================
// GENERACIÓN DE RUTAS ESTÁTICAS
// ======================================================
export async function generateStaticParams() {
  return Object.keys(subServicesContent).map(id => ({
    serviceId: id,
  }));
}

// ======================================================
// PÁGINA PRINCIPAL
// ======================================================
export default async function Page({ params }: PageProps) {
  // Resolvemos la promesa de params para evitar el error de 'undefined'
  const resolvedParams = await params;
  const serviceId = resolvedParams.serviceId.toLowerCase() as ServiceId;

  // Busca el detalle en el archivo central
  const serviceDetail = subServicesContent[serviceId];

  // Si el servicio no existe -> 404
  if (!serviceDetail) return notFound();

  const itemsWithWhatsapp = serviceDetail.items.map((it: ServiceItem) => ({
    ...it,
    whatsappUrl: `https://wa.me/${PHONE_WHATSAPP}?text=${encodeURIComponent(
      `Hola, quisiera información sobre "${serviceDetail.title}" - ${it.label} (ID: ${it.id}).`
    )}`,
  }));

  return (
    <main className="min-h-screen bg-black py-8 px-4">
      <MotionDiv
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-4xl rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 py-6 px-4 shadow-2xl border border-gray-700 sm:py-8 sm:px-6"
        initial={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.3 }}
      >
        {/* ENCABEZADO */}
        <header
          className="mb-6 rounded-lg bg-gradient-to-r from-gray-800 to-gray-700 px-5 py-4 text-center shadow-lg border-l-4 border-tecnovita"
          role="banner"
        >
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {serviceDetail.title}
          </h1>
        </header>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-tecnovita to-transparent mb-6" />

        {/* LISTA DE SERVICIOS */}
        <section aria-labelledby="service-list" className="w-full">
          <ServiceCardList items={itemsWithWhatsapp} />
        </section>

        {/* NAVEGACIÓN */}
        <nav
          className="mt-6 flex flex-col justify-center gap-3 sm:flex-row pt-6 border-t border-gray-700"
          role="navigation"
        >
          <Link
            aria-label="Volver al inicio"
            className="rounded-lg bg-gray-700 hover:bg-gray-600 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:shadow-lg text-center"
            href="/"
          >
            ← Volver
          </Link>

          <Link
            aria-label="Solicitar presupuesto"
            className="rounded-lg bg-gradient-to-r from-tecnovita to-tecnovita-dark hover:from-tecnovita-dark hover:to-tecnovita px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:shadow-lg hover:scale-105 text-center"
            href="/contacto"
          >
            💬 Solicitar Presupuesto
          </Link>
        </nav>
      </MotionDiv>
    </main>
  );
}

// ======================================================
// METADATA DINÁMICA
// ======================================================
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const serviceId = resolvedParams.serviceId.toLowerCase() as ServiceId;
  const serviceDetail = subServicesContent[serviceId];

  if (!serviceDetail) {
    return { title: 'Servicio no encontrado' };
  }

  return {
    title: serviceDetail.title,
    description: `${serviceDetail.title} — Soluciones profesionales para tu hogar o empresa.`,
  };
}
