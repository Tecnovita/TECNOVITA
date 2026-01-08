import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

export default function Footer() {
  const year = new Date().getFullYear();

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
    <footer className="relative bg-black text-white overflow-hidden">
      {/* fondos */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="relative container mx-auto px-4 py-4">
        <div className="flex flex-col items-center text-center space-y-2">

          {/* Marca */}
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h2 className="relative text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent tracking-wide">
              TECNOVITA
            </h2>
            <p className="text-[11px] text-gray-400 mt-0.5 font-medium">
              Servicios Técnicos
            </p>
          </div>

          {/* Contacto */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-gray-400">
            <a className="flex items-center gap-1 hover:text-blue-400 transition" href="tel:+542954294429">
              <MdPhone className="text-sm" />
              2954 29-4429
            </a>
            <a className="flex items-center gap-1 hover:text-blue-400 transition" href="mailto:info@tecnovita.com.ar">
              <MdEmail className="text-sm" />
              info@tecnovita.com.ar
            </a>
            <div className="flex items-center gap-1">
              <MdLocationOn className="text-sm" />
              Catrilo 1648, Santa Rosa, LP
            </div>
          </div>

          {/* Redes */}
          <div className="w-full max-w-xs">
            <p className="text-xs text-gray-400 mb-1.5 font-medium">
              Síguenos en redes
            </p>
            <div className="flex justify-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    aria-label={social.label}
                    className={`relative group p-2 rounded-lg bg-gray-900/50 border border-gray-800 hover:scale-110 transition ${social.hoverBg}`}
                    href={social.href}
                    rel="noopener noreferrer"
                    target={social.isExternal === false ? undefined : '_blank'}
                  >
                    <Icon
                      className={`text-xl ${social.color} ${social.glowColor}`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Separador */}
          <div className="w-full max-w-xl h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

          {/* Navegación */}
          <nav className="flex gap-4 text-xs">
            <Link className="text-gray-400 hover:text-blue-400 transition" href="/">
              Inicio
            </Link>
            <Link className="text-gray-400 hover:text-blue-400 transition" href="/contacto">
              Contacto
            </Link>
          </nav>

          {/* Copyright */}
          <div className="pt-1.5 border-t border-gray-900 w-full max-w-xl">
            <p className="text-gray-500 text-[11px]">
              © {year} <span className="text-blue-400 font-semibold">TECNOVITA</span>. Todos los derechos reservados.
            </p>
            <p className="text-gray-600 text-[11px] mt-0.5">
              Diseñado con 💙 en Argentina
            </p>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </footer>
  );
}
