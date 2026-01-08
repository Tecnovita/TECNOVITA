import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { SERVICES_DATA, COMPANY_NAME } from '@/lib/constants';

export const metadata = {
  description: `Servicios técnicos especializados en ${SERVICES_DATA.map(s => s.title).join(', ')}.`,
  keywords: ['servicios técnicos', 'informática', 'telefonía', 'electricidad', COMPANY_NAME],
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
      className="group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] overflow-hidden"
      href={href}
    >
      <div className={`bg-gradient-to-r ${bgGradient} p-5 text-white text-center`}>
        <div className="flex justify-center mb-2">
          <div className="p-3 bg-white/20 rounded-xl">
            <Icon />
          </div>
        </div>
        <h2 className="font-bold text-xl">{title}</h2>
      </div>

      <div className="p-5 flex-grow">
        <p className="text-gray-700 mb-3 leading-relaxed text-sm">
          {description}
        </p>
        <div className="space-y-1.5">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 pb-5">
        <div className="flex items-center justify-center text-tecnovita font-semibold text-sm group-hover:text-tecnovita-dark transition">
          <span>Ver servicios detallados</span>
          <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main
      className="flex flex-col items-center px-4 py-6 bg-gradient-to-b from-gray-50 to-white"
      id="site-main"
    >
      {/* Header */}
      <header className="text-center max-w-6xl mb-6" role="banner">
        <h1 className="font-bold text-gray-900 mb-4 tracking-tight text-4xl sm:text-5xl md:text-6xl">
          Servicios{' '}
          <span className="text-tecnovita bg-clip-text text-transparent bg-gradient-to-r from-tecnovita to-tecnovita-dark">
            Profesionales
          </span>
        </h1>

        <p className="text-gray-600 text-lg sm:text-xl md:text-2xl font-light leading-relaxed">
          <span className="font-extrabold text-tecnovita">{COMPANY_NAME}:</span>{' '}
          especialistas en{' '}
          {SERVICES_DATA.map((s, i) => (
            <span key={s.id}>
              <span className="font-semibold text-tecnovita">{s.title}</span>
              {i < SERVICES_DATA.length - 1
                ? i === SERVICES_DATA.length - 2
                  ? ' y '
                  : ', '
                : ''}
            </span>
          ))}
        </p>
      </header>

      {/* Cards */}
      <section
        aria-label="Nuestros servicios técnicos"
        className="w-full max-w-6xl mb-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.map((s) => (
            <ServiceCard
              key={s.id}
              bgGradient={s.bgGradient}
              description={s.description}
              features={s.features}
              href={s.href}
              icon={s.icon}
              title={s.title}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Contacto" className="w-full max-w-4xl">
        <div className="bg-gradient-to-r from-tecnovita to-tecnovita-dark rounded-2xl p-6 sm:p-8 text-white text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">
            ¿Listo para solucionar tus problemas?
          </h2>

          <Link
            className="inline-block bg-white text-tecnovita hover:bg-gray-100 font-semibold py-2.5 px-8 rounded-lg transition shadow-lg"
            href="/contacto"
          >
            Solicitar Presupuesto
          </Link>
        </div>
      </section>
    </main>
  );
}
