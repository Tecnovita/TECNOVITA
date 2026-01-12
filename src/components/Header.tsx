// C:\01-TECNOVITA\tecnovita1\src\components\Header.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok, FaChevronDown } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
// Automatización: Importamos la fuente de verdad
import { subServicesContent } from '@/lib/services';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Extraemos los servicios para la automatización del menú
  const services = Object.values(subServicesContent);

  const toggleMenu = () => setIsOpen(s => !s);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    {
      href: 'https://wa.me/542954294429',
      icon: FaWhatsapp,
      label: 'WhatsApp',
      color: 'text-green-500 hover:text-green-400',
      hoverBg: 'hover:bg-green-500/20',
      glowColor: 'hover:drop-shadow-[0_0_12px_rgba(34,197,94,0.6)]',
    },
    {
      href: 'https://www.instagram.com/tecnovita.com.ar',
      icon: FaInstagram,
      label: 'Instagram',
      color: 'text-pink-500 hover:text-pink-400',
      hoverBg: 'hover:bg-pink-500/20',
      glowColor: 'hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.6)]',
    },
    {
      href: 'https://www.facebook.com/profile.php?id=61578156026887',
      icon: FaFacebookF,
      label: 'Facebook',
      color: 'text-blue-500 hover:text-blue-400',
      hoverBg: 'hover:bg-blue-500/20',
      glowColor: 'hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]',
    },
    {
      href: 'https://www.tiktok.com/@tecnovita.com.ar',
      icon: FaTiktok,
      label: 'TikTok',
      color: 'text-gray-200 hover:text-white',
      hoverBg: 'hover:bg-gray-500/20',
      glowColor: 'hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]',
    },
    {
      href: 'mailto:info@tecnovita.com.ar',
      icon: MdEmail,
      label: 'Email',
      color: 'text-red-500 hover:text-red-400',
      hoverBg: 'hover:bg-red-500/20',
      glowColor: 'hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.6)]',
      isExternal: false,
    },
  ];

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-500
          ${
            isScrolled
              ? 'bg-black/95 backdrop-blur-xl shadow-2xl border-b border-blue-500/20'
              : 'bg-black shadow-xl'
          }
        `}
        id="site-header"
      >
        <div className="w-full flex items-center justify-between h-16 md:h-20 px-4 md:px-8 lg:px-12">
          {/* 1. LOGO (Izquierda) - MODIFICADO: Se eliminó la imagen de la letra T */}
          <div className="flex items-center shrink-0">
            <Link className="inline-flex items-center group relative" href="/">
              <div className="relative flex items-center h-[56px] md:h-[72px]">
                <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                <span className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent tracking-widest relative z-10 transition-colors group-hover:from-blue-300 group-hover:via-blue-400 group-hover:to-blue-500">
                  TECNOVITA
                </span>
              </div>
            </Link>
          </div>

          {/* 2. REDES SOCIALES (Centro) */}
          <div className="flex items-center justify-center grow gap-2 md:gap-3 px-2 md:px-8">
            {socialLinks.map(social => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  aria-label={social.label}
                  className={`relative group p-2 md:p-2.5 rounded-xl transition-all duration-300 bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-current hover:scale-110 hover:shadow-xl ${social.hoverBg}`}
                  href={social.href}
                  rel={social.isExternal === false ? undefined : 'noopener noreferrer'}
                  target={social.isExternal === false ? undefined : '_blank'}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  <Icon
                    className={`text-xl md:text-2xl lg:text-3xl transition-all duration-300 relative z-10 ${social.color} ${social.glowColor}`}
                  />
                </Link>
              );
            })}
          </div>

          {/* 3. NAVEGACIÓN (Derecha) */}
          <div className="flex items-center gap-3">
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-base lg:text-lg font-semibold">
              <Link
                className="relative text-blue-400 hover:text-blue-300 transition-colors group py-2"
                href="/"
              >
                <span className="relative z-10">Inicio</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-300 group-hover:w-full transition-all duration-300" />
              </Link>

              <div className="relative group py-2">
                <button className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors">
                  Servicios{' '}
                  <FaChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="absolute top-full right-0 mt-1 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-black/95 backdrop-blur-xl border border-blue-500/20 rounded-xl shadow-2xl overflow-hidden py-2">
                    {services.map(s => (
                      <Link
                        key={s.id}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 transition-colors"
                        href={`/servicios/${s.id}`}
                      >
                        <s.icon className="text-lg" />
                        {s.id.charAt(0).toUpperCase() + s.id.slice(1)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                className="relative text-blue-400 hover:text-blue-300 transition-colors group py-2"
                href="/contacto"
              >
                <span className="relative z-10">Contacto</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-300 group-hover:w-full transition-all duration-300" />
              </Link>
            </nav>

            <button
              className={`md:hidden p-3 text-2xl rounded-xl transition-all duration-300 ${isOpen ? 'bg-blue-500/20 text-blue-400 rotate-90' : 'bg-gray-800/50 text-blue-400 hover:bg-gray-700/50'}`}
              onClick={toggleMenu}
            >
              <span className="block">{isOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>

        {/* CONTENIDO MÓVIL AUTOMATIZADO */}
        <div
          className={`md:hidden w-full bg-gradient-to-b from-black via-gray-900 to-black transition-all duration-500 overflow-hidden border-t ${isOpen ? 'max-h-[500px] border-blue-500/30' : 'max-h-0 border-transparent'}`}
        >
          <nav className="flex flex-col py-3">
            <Link
              className="block px-6 py-4 text-blue-400 hover:bg-blue-500/10 font-semibold"
              href="/"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <div className="px-6 py-2 text-xs font-bold text-gray-500 uppercase">Servicios</div>
            {services.map(s => (
              <Link
                key={s.id}
                className="block px-8 py-3 text-blue-400 hover:bg-blue-500/10 font-medium"
                href={`/servicios/${s.id}`}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <s.icon />
                  {s.id.charAt(0).toUpperCase() + s.id.slice(1)}
                </div>
              </Link>
            ))}
            <Link
              className="block px-6 py-4 text-blue-400 hover:bg-blue-500/10 font-semibold mt-2"
              href="/contacto"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      <div className="h-16 md:h-20" />
    </>
  );
}
