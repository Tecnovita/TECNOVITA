'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-black text-white shadow-md w-full">
      <div className="flex justify-between items-center h-56 w-full px-0">
        {/* Logo completamente pegado al borde izquierdo */}
        <Link href="/" className="flex items-center h-full m-0 p-0">
          <Image
            src="/logo.png"
            alt="Logo de TECNOVITA"
            width={500}
            height={200}
            className="h-52 w-auto object-contain m-0 p-0"
            priority
          />
        </Link>

        {/* Menú en desktop */}
        <nav className="hidden md:flex space-x-8 text-lg font-semibold pr-6">
          <Link href="/" className="hover:text-gray-300 transition-colors duration-200">Inicio</Link>
          <Link href="/servicios" className="hover:text-gray-300 transition-colors duration-200">Servicios</Link>
          <Link href="/contacto" className="hover:text-gray-300 transition-colors duration-200">Contacto</Link>
        </nav>

        {/* Botón hamburguesa en móvil */}
        <div className="md:hidden pr-4">
          <button
            onClick={toggleMenu}
            aria-label="Abrir menú"
            className="text-white text-3xl focus:outline-none"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Menú en móvil */}
      {isOpen && (
        <nav className="md:hidden bg-gray-900 py-2 mt-2 space-y-2 text-center">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-800" onClick={toggleMenu}>Inicio</Link>
          <Link href="/servicios" className="block px-4 py-2 hover:bg-gray-800" onClick={toggleMenu}>Servicios</Link>
          <Link href="/contacto" className="block px-4 py-2 hover:bg-gray-800" onClick={toggleMenu}>Contacto</Link>
        </nav>
      )}
    </header>
  );
}