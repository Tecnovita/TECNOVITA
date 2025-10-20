import Link from 'next/link';

const subServicesContent = {
  informatica: {
    title: 'Servicios de INFORMÁTICA',
    items: [
      'Diagnóstico, reparación y optimización de PCs y Notebooks',
      'Instalación y configuración de redes (cableadas y Wi-Fi)',
      'Soporte técnico remoto y presencial',
      'Instalación, configuración y actualización de Sistemas Operativos y Aplicaciones',
      'Configuración de equipos y periféricos',
      'Soluciones de seguridad informática (antivirus, firewall)',
      'Recuperación de datos',
      'Asesoramiento tecnológico personalizado',
    ],
  },
  electricidad: {
    title: 'Servicios de ELECTRICIDAD',
    items: [
      'Instalaciones eléctricas residenciales y comerciales',
      'Reparación de averías y cortocircuitos',
      'Actualización y adecuación de instalaciones a normativa vigente',
      'Instalación de iluminación LED y sistemas de ahorro energético',
    ],
  },
  telefonia: {
    title: 'Servicios de TELEFONÍA',
    items: [
      'Instalación y configuración de centrales telefónicas (PBX)',
      'Implementación de telefonía IP (VoIP)',
      'Mantenimiento de sistemas telefónicos',
      'Cableado estructurado para voz y datos',
      'Configuración de extensiones y líneas telefónicas',
      'Asesoramiento en soluciones de comunicación',
    ],
  },
} as const;

type ServiceId = keyof typeof subServicesContent;
type PageParams = { serviceId: string };

export default function ServiceDetailPage({
  params,
}: {
  params: PageParams;
}) {
  const { serviceId } = params;
  const serviceDetail = subServicesContent[serviceId as ServiceId];

  if (!serviceDetail) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen py-8 px-4 bg-gray-50 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4 tracking-tight">Servicio No Encontrado</h1>
        <p className="text-lg text-gray-700 leading-snug font-light">
          Lo sentimos, el servicio que buscas no está disponible.
        </p>
        <Link
          href="/servicios"
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 text-base font-medium"
        >
          Volver a Servicios
        </Link>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center py-8 px-4 bg-gray-50 min-h-screen sm:py-12 md:py-16">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700 mb-4 tracking-tight animate-slide-up">
          {serviceDetail.title}
        </h1>

        <div className="w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 my-6 rounded-full animate-fade-in" />

        <p className="text-md sm:text-lg text-gray-700 mb-8 leading-snug font-light animate-slide-up">
          Descubre a continuación los sub-servicios detallados que ofrecemos en esta área.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-lg text-left">
          <ul className="list-disc list-inside space-y-3 text-gray-800 text-base sm:text-lg leading-relaxed">
            {serviceDetail.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/servicios"
            className="px-6 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-transform duration-300 hover:scale-105 text-base font-medium"
          >
            Volver a Servicios
          </Link>
          <Link
            href="/contacto"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-transform duration-300 hover:scale-105 text-base font-medium"
          >
            Solicitar Presupuesto
          </Link>
        </div>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(subServicesContent).map((serviceId) => ({ serviceId }));
}
