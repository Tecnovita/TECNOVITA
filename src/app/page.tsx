// src/app/page.tsx
import Link from 'next/link'; // Asegúrate de importar Link

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-2 px-4 bg-gray-100 text-center
                     sm:py-4 sm:px-8 md:py-8 md:px-16 lg:py-16 lg:px-24">
      <h1 className="text-3xl font-bold text-blue-600 mb-2 sm:text-4xl md:text-5xl lg:text-6xl">
        ¡Bienvenido a TECNOVITA!
      </h1>
      <p className="text-xs sm:text-sm md:text-base text-gray-700 max-w-xl mb-2">
        <span className="block">Servicios y Soporte Técnico en INFORMATICA, TELEFONIA y ELECTRICIDAD.</span>
        <span className="block mt-1">Mantenemos en óptimo rendimiento tus equipos, redes y sistemas.</span>
      </p>
      {/*
        // MODIFICACIÓN:
        // 1. Envolver el botón en un componente <Link> de Next.js.
        // 2. Cambiar el 'href' a "/servicios".
        // 3. Cambiar el texto del botón de "Explorar Ahora" a "Ver Servicios".
      */}
      <Link href="/servicios" passHref>
        <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
          Ver Servicios
        </button>
      </Link>
    </main>
  );
}