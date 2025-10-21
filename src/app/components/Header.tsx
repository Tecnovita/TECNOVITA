'use client';

import Link from 'next/link';
import Image from 'next/image'; // ✅ nuevo import
import { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-xl transition-all duration-300 ease-in-out">
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full px-4 py-2 md:py-4 space-y-4 md:space-y-0 md:h-56">
        {/* Logo */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <Link
            href="/"
            className="flex items-center m-0 p-0 transition-transform duration-300 hover:scale-105"
            aria-label="Ir a la página de inicio"
          >
            <Image
              src="/logo.svg"
              alt="Logo de TECNOVITA"
              width={200} // ✅ reemplaza el tamaño equivalente
              height={200}
              className="h-24 md:h-52 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Navegación principal */}
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <nav
            role="navigation"
            aria-label="Navegación principal"
            className="hidden md:flex space-x-8 text-lg font-semibold"
          >
            <Link href="/" className="hover:text-gray-300 transition-colors duration-300">
              Inicio
            </Link>
            <Link href="/servicios" className="hover:text-gray-300 transition-colors duration-300">
              Servicios
            </Link>
            <Link href="/contacto" className="hover:text-gray-300 transition-colors duration-300">
              Contacto
            </Link>
          </nav>

          {/* Botón hamburguesa */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Menú de navegación"
              aria-expanded={isOpen}
              className="text-white text-3xl focus:outline-none transition-transform duration-300 hover:scale-110"
            >
              <span aria-hidden="true">{isOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isOpen && (
          <nav
            className="md:hidden bg-gray-900 py-2 mt-2 space-y-2 text-center w-full transition-all duration-300"
            aria-label="Menú móvil"
          >
            <Link href="/" className="block px-4 py-2 hover:bg-gray-800" onClick={toggleMenu}>
              Inicio
            </Link>
            <Link href="/servicios" className="block px-4 py-2 hover:bg-gray-800" onClick={toggleMenu}>
              Servicios
            </Link>
            <Link href="/contacto" className="block px-4 py-2 hover:bg-gray-800" onClick={toggleMenu}>
              Contacto
            </Link>
          </nav>
        )}

        {/* Íconos sociales */}
        <div className="flex justify-center items-center gap-4 mt-6 md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:mt-0">
          <Link href="https://wa.me/542954294429" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp className="text-2xl md:text-3xl text-green-500 hover:text-green-400 transition-transform duration-300 hover:scale-110" />
          </Link>
          <Link href="https://www.instagram.com/tecnovita.com.ar" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-2xl md:text-3xl text-pink-600 hover:text-pink-500 transition-transform duration-300 hover:scale-110" />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61578156026887" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className="text-2xl md:text-3xl text-blue-600 hover:text-blue-500 transition-transform duration-300 hover:scale-110" />
          </Link>
          <Link href="https://www.tiktok.com/@tecnovita.com.ar" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok className="text-2xl md:text-3xl text-gray-200 hover:text-red-500 transition-transform duration-300 hover:scale-110" />
          </Link>
          <Link href="mailto:info@tecnovita.com.ar" aria-label="Email">
            <MdEmail className="text-2xl md:text-3xl text-red-500 hover:text-red-400 transition-transform duration-300 hover:scale-110" />
          </Link>
        </div>
      </div>
    </header>
  );
}
