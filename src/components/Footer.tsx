// C:\01-TECNOVITA\tecnovita1\src\components\Footer.tsx
import Link from 'next/link';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

/**
 * CONFIGURACIÓN DE DATOS
 */
const CONTACT_DATA = {
  phone: '2954 29-4429',
  whatsappUrl: 'https://wa.me/542954294429',
  email: 'info@tecnovita.com.ar',
  address: 'Catrilo 1648, Santa Rosa, LP',
  // Este enlace es universal y nunca caduca:
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Catrilo+1648,+Santa+Rosa,+La+Pampa,+Argentina',
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-white overflow-hidden border-t border-white/5">
      {/* Fondos ambientales sutiles */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Reducción de py-6 a py-3 para máxima compacidad */}
      <div className="relative container mx-auto px-6 py-2">
        {/* Reducción de space-y-4 a space-y-2 */}
        <div className="flex flex-col items-center text-center space-y-2">
          {/* Marca con Efecto Premium */}
          <div className="relative group cursor-default">
            {/* Resplandor de fondo (Glow) ajustado al color exacto */}
            <div className="absolute inset-0 bg-[#0078ff]/25 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            <h2
              className="relative text-xl font-extrabold tracking-[0.3em] uppercase transition-all duration-500
                 bg-gradient-to-r from-[#0078ff] via-[#66adff] to-[#0078ff] 
                 bg-[length:200%_auto] bg-clip-text text-transparent
                 group-hover:bg-[right_center] drop-shadow-[0_2px_10px_rgba(0,120,255,0.3)]"
            >
              TECNOVITA
            </h2>

            {/* Línea decorativa inferior minimalista */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#0078ff] transition-all duration-700 group-hover:w-full opacity-50" />
          </div>

          {/* Contacto - Gap reducido de 4 a 2 en móvil y de 10 a 6 en desktop */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-[12px] text-gray-400 font-medium">
            <a
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors duration-300 group"
              href={CONTACT_DATA.whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MdPhone className="text-base text-blue-500 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
              <span>{CONTACT_DATA.phone}</span>
            </a>

            <a
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors duration-300 group"
              href={`mailto:${CONTACT_DATA.email}`}
            >
              <MdEmail className="text-base text-blue-500 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
              <span>{CONTACT_DATA.email}</span>
            </a>

            <a
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors duration-300 group"
              href={CONTACT_DATA.mapsUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MdLocationOn className="text-base text-blue-500 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
              <span>{CONTACT_DATA.address}</span>
            </a>
          </div>

          {/* Separador Fino */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Navegación y Copyright - Gap reducido de 3 a 1 */}
          <div className="flex flex-col items-center gap-1">
            <nav className="flex gap-6 text-[9px] font-bold uppercase tracking-[0.2em]">
              <Link className="text-gray-500 hover:text-blue-400 transition-colors" href="/">
                Inicio
              </Link>
              <Link
                className="text-gray-500 hover:text-blue-400 transition-colors"
                href="/contacto"
              >
                Contacto
              </Link>
            </nav>

            <p className="text-gray-600 text-[8px] uppercase tracking-widest">
              © {year} <span className="text-blue-500/60 font-bold">TECNOVITA</span> · Todos los
              derechos reservados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
