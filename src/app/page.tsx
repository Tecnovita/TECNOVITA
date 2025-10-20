import Link from 'next/link';

export const metadata = {
  title: "Inicio | TECNOVITA",
  description: "Bienvenido a TECNOVITA. Servicios técnicos confiables en informática, telefonía y electricidad.",
};

export default function Home() {
  return (
    <main
      role="main"
      className="flex flex-col items-center justify-center py-8 px-4 bg-gray-100 text-center sm:py-12 md:py-16 lg:py-20"
    >
      <header className="text-center animate-slide-up" role="banner">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-2 tracking-tight leading-tight">
          ¡Bienvenido a TECNOVITA!
        </h1>
      </header>

      <div
        className="w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 my-4 rounded-full animate-fade-in"
        aria-hidden="true"
        role="presentation"
      />

      <section
        aria-label="Descripción de servicios"
        className="max-w-xl mb-6 animate-slide-up"
      >
        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-snug font-light">
          <span className="block">Servicios técnicos en Informática, Telefonía y Electricidad.</span>
          <span className="block mt-1">Soluciones rápidas y confiables para tu hogar o empresa.</span>
        </p>
      </section>

      <Link href="/servicios" passHref>
        <button
          aria-label="Ver servicios disponibles"
          className="mt-4 px-6 py-3 bg-blue-500 text-white text-base font-medium rounded-lg shadow-md hover:bg-blue-600 transition-transform duration-300 hover:scale-105"
        >
          Ver Servicios
        </button>
      </Link>
    </main>
  );
}