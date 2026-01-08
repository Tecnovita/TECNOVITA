import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
// Importamos la fuente de datos centralizada
import { subServicesContent, COMPANY_NAME } from '@/lib/services';

// Automatización de Metadatos basada en los servicios activos
const serviceNames = Object.values(subServicesContent).map(s => s.id);
export const metadata = {
  description: `Servicios técnicos especializados en ${serviceNames.join(', ')}.`,
  keywords: ['servicios técnicos', ...serviceNames, COMPANY_NAME],
  title: `Inicio | ${COMPANY_NAME}`,
};

function ServiceCard({ 
  bgGradient,
  description, 
  features,
  href, 
  icon: Icon, 
  title, 
}: {
  bgGradient: string;
  description: string;
  features: string[];
  href: string;
  icon: React.ComponentType;
  title: string;
}) {
  return (
    <Link
      aria-label={`Ver servicios de ${title}`}
      className="group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
      href={href}
    >
      <div className={`bg-gradient-to-r ${bgGradient} p-6 text-white text-center`}>
        <div className="flex justify-center mb-3">
          <div className="p-3 bg-white bg-opacity-20 rounded-xl">
            <Icon />
          </div>
        </div>
        <h2 className="font-bold text-2xl">{title}</h2>
      </div>

      <div className="p-6 flex-grow">
        <p className="text-gray-700 mb-4 leading-relaxed text-sm">{description}</p>
        <div className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 pb-6">
        <div className="flex items-center justify-center text-tecnovita font-semibold text-sm group-hover:text-tecnovita-dark transition-colors">
          <span>Ver servicios detallados</span>
          <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  const servicesList = Object.values(subServicesContent);

  return (
    <main className="flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-b from-gray-50 to-white min-h-screen" id="site-main">
      <header className="text-center max-w-6xl mb-12" role="banner">
        <h1 className="font-bold text-gray-900 mb-6 tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Servicios <span className="text-tecnovita bg-clip-text text-transparent bg-gradient-to-r from-tecnovita to-tecnovita-dark">Profesionales</span>
        </h1>
        <p className="text-gray-600 text-xl sm:text-2xl md:text-3xl font-light leading-relaxed mb-6">
          <span className="font-extrabold text-tecnovita">{COMPANY_NAME}:</span> especialistas en{' '}
          {servicesList.map((s, i) => (
            <span key={s.id}>
              <span className="font-semibold text-tecnovita">
                {s.id.charAt(0).toUpperCase() + s.id.slice(1)}
              </span>
              {i < servicesList.length - 1 ? (i === servicesList.length - 2 ? ' y ' : ', ') : ''}
            </span>
          ))}
        </p>
      </header>
      
      <section aria-label="Nuestros servicios técnicos" className="w-full max-w-6xl mb-10">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${servicesList.length} gap-8`}>
          {servicesList.map((s) => (
            <ServiceCard 
              key={s.id}
              bgGradient={s.bgGradient}
              description={`${s.title}.`} 
              features={s.items.slice(0, 3).map(item => item.label)}
              href={`/servicios/${s.id}`} 
              icon={s.icon} 
              title={s.id.charAt(0).toUpperCase() + s.id.slice(1)}
            />
          ))}
        </div>
      </section>

      <section aria-label="Contacto" className="w-full max-w-4xl">
        <div className="bg-gradient-to-r from-tecnovita to-tecnovita-dark rounded-2xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">¿Listo para solucionar tus problemas?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              key="contact-link"
              className="bg-white text-tecnovita hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all shadow-lg"
              href="/contacto"
            >
              Solicitar Presupuesto
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}