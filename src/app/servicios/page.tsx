// src/app/servicios/page.tsx
import { ComputerDesktopIcon, BoltIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// Definimos los datos de los servicios para mantener el código más limpio y escalable
const servicesData = [
  {
    id: 'informatica', // Usado para futuros enlaces específicos
    title: 'INFORMÁTICA',
    description: 'Ofrecemos soluciones completas en hardware y software, soporte técnico, desarrollo de sistemas y seguridad informática.',
    icon: ComputerDesktopIcon,
    iconColor: 'text-blue-500',
  },
  {
    id: 'electricidad',
    title: 'ELECTRICIDAD',
    description: 'Instalaciones eléctricas residenciales y comerciales, mantenimiento, reparaciones y asesoramiento en eficiencia energética.',
    icon: BoltIcon,
    iconColor: 'text-yellow-500',
  },
  {
    id: 'telefonia',
    title: 'TELEFONÍA',
    description: 'Instalación y configuración de centrales telefónicas, redes de comunicación, telefonía IP y sistemas de comunicación unificada.',
    icon: PhoneIcon,
    iconColor: 'text-green-500',
  },
];

export default function ServiciosPage() {
  return (
    <main className="flex flex-col items-center justify-center py-4 px-4 bg-gray-100 text-center
                     sm:py-8 sm:px-8 md:py-16 md:px-16 lg:py-24 lg:px-24">
      {/* Título y descripción principal de la página */}
      <h1 className="text-3xl font-bold text-blue-600 mb-2 sm:text-4xl md:text-5xl lg:text-6xl">
        Nuestros Servicios
      </h1>
      <p className="text-sm sm:text-base text-gray-700 max-w-xl mb-8">
        Aquí encontrarás información detallada sobre nuestros servicios de informática, telefonía y electricidad.
      </p>

      {/* Contenedor de las tarjetas de servicio */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {servicesData.map((service) => (
          <div
            key={service.id} // Clave única para cada elemento en la lista
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            // Mejoras de accesibilidad: añadir un rol de "group" o simplemente asegurarse que el contenido es semántico
            role="article" // Semánticamente, cada tarjeta es un "artículo" o una sección independiente
            aria-labelledby={`service-title-${service.id}`} // Enlaza el título de la tarjeta para lectores de pantalla
            aria-describedby={`service-description-${service.id}`} // Enlaza la descripción
          >
            <service.icon className={`h-16 w-16 ${service.iconColor} mb-4`} aria-hidden="true" />
            <h2 id={`service-title-${service.id}`} className="text-2xl font-semibold text-blue-600 mb-3">
              {service.title}
            </h2>
            <p id={`service-description-${service.id}`} className="text-gray-700 mb-6 flex-grow">
              {service.description}
            </p>
            {/* El botón "Más Información" puede ir a una página de detalle o al contacto */}
            <Link href={`/servicios/${service.id}`} passHref> {/* ENLACE AJUSTADO: a una página de detalle */}
              <span className="inline-block mt-auto px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
                Más Información
              </span>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}