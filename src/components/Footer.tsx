import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

export default function Footer() {
  const year = new Date().getFullYear();

  // Enlace de WhatsApp unificado para reutilizar
  const whatsappUrl = 'https://wa.me/542954294429';

  const socialLinks = [
    {
      href: whatsappUrl,
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
      {/* fondos ambientales */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="relative container mx-auto px-4 py-8">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Marca */}
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h2 className="relative text-3xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent tracking-widest">
              TECNOVITA
            </h2>
            <p className="text-[10px] text-gray-500 mt-1 font-bold uppercase tracking-[0.3em]">
              Servicios Técnicos Profesionales
            </p>
          </div>

          {/* Contacto Corregido: Teléfono ahora abre WhatsApp */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xs text-gray-400 font-bold tracking-tight">
            {/* ESTE ABRE WHATSAPP AHORA */}
            <a
              className="flex items-center gap-2 hover:text-blue-400 transition-all duration-300 group"
              href={whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MdPhone className="text-lg text-blue-500 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
              <span>2954 29-4429</span>
            </a>

            <a
              className="flex items-center gap-2 hover:text-blue-400 transition-all duration-300 group"
              href="mailto:info@tecnovita.com.ar"
            >
              <MdEmail className="text-lg text-blue-500 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
              <span>info@tecnovita.com.ar</span>
            </a>

            {/* ESTE ABRE GOOGLE MAPS */}
            <a
              className="flex items-center gap-2 hover:text-blue-400 transition-all duration-300 group"
              href="https://maps.google.com/?q=Catrilo+1648,+Santa+Rosa,+LP"
              rel="noopener noreferrer"
              target="_blank"
            >
              <MdLocationOn className="text-lg text-blue-500 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
              <span>Catrilo 1648, Santa Rosa, LP</span>
            </a>
          </div>

          {/* Redes Sociales con efecto Neón */}
          <div className="w-full max-w-xs pt-4">
            <div className="flex justify-center gap-3">
              {socialLinks.map(social => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    aria-label={social.label}
                    className={`relative group p-3 rounded-xl bg-gray-900/50 border border-gray-800/50 hover:border-current transition-all duration-300 ${social.hoverBg}`}
                    href={social.href}
                    rel="noopener noreferrer"
                    target={social.isExternal === false ? undefined : '_blank'}
                  >
                    <Icon className={`text-2xl ${social.color} ${social.glowColor}`} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Separador */}
          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Navegación y Copyright */}
          <div className="flex flex-col items-center gap-4">
            <nav className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
              <Link className="text-gray-500 hover:text-white transition-colors" href="/">
                Inicio
              </Link>
              <Link className="text-gray-500 hover:text-white transition-colors" href="/contacto">
                Contacto
              </Link>
            </nav>
            <p className="text-gray-600 text-[10px] uppercase tracking-tighter">
              © {year} <span className="text-blue-500 font-bold">TECNOVITA</span> · Todos los
              derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
