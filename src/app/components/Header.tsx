'use client';

import Link from 'next/link';
import Image from 'next/image'; // ¡Importa Image!
import { useState } from 'react';

// Asegúrate de que esta ruta sea correcta para tu logo en el directorio public
// Si tu logo se llama 'mi-logo.png' y está directamente en 'public', usa '/mi-logo.png'
// Si está en 'public/images/mi-logo.png', usa '/images/mi-logo.png'
// Por ahora, usaremos '/vercel.svg' como placeholder si no tienes uno.
// **IMPORTANTE:** Reemplaza esta línea con la ruta real de tu logo.
import logo from '../../../public/logo1.png'; // Asumiendo que usarás next.svg o un logo tuyo.
                                            // Si no tienes uno, puedes poner cualquier imagen existente en public.
                                            // **RECUERDA CAMBIAR ESTO POR TU LOGO REAL**

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-blue-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
        TECNOVITA
          {/*
            // MODIFICACIÓN: Reemplazo del texto "TECNOVITA" por un componente Image para el logo.
            // AJUSTAR: Asegúrate de que el 'src' apunte a la ubicación real de tu logo.
            // AJUSTAR: Define 'width' y 'height' adecuados para tu logo. 'h-auto' para mantener la proporción.
            // ACCESIBILIDAD: 'alt' es crucial para lectores de pantalla.
            // Anule la configuracion del logo que comente debajo.
          */}
          {/*<Image
            src="/logo1.png" // Aquí va la ruta a tu logo. EJEMPLO: "/tu-logo.svg" o "/images/tu-logo.png"
            alt="Logo de TECNOVITA"
            width={150} // Ancho deseado del logo
            height={40} // Alto deseado del logo. Puedes ajustar según la proporción de tu logo.
            className="h-auto" // Para mantener la proporción si cambias el width
          />*/}
        </Link>
        {/* Menú para pantallas grandes */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-200 transition-colors duration-200">Inicio</Link>
          <Link href="/servicios" className="hover:text-blue-200 transition-colors duration-200">Servicios</Link>
          <Link href="/contacto" className="hover:text-blue-200 transition-colors duration-200">Contacto</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Abrir menú" className="text-white text-3xl focus:outline-none">
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-blue-800 py-2 mt-2 space-y-2 text-center">
          <Link href="/" className="block px-4 py-2 hover:bg-blue-700 transition-colors duration-200" onClick={toggleMenu}>Inicio</Link>
          <Link href="/servicios" className="block px-4 py-2 hover:bg-blue-700 transition-colors duration-200" onClick={toggleMenu}>Servicios</Link>
          <Link href="/contacto" className="block px-4 py-2 hover:bg-blue-700 transition-colors duration-200" onClick={toggleMenu}>Contacto</Link>
        </nav>
      )}
    </header>
  );
}