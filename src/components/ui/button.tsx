import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} TECNOVITA. Todos los derechos reservados.
        </p>
        <p className="text-xs mt-2">
          {/*Diseñado y desarrollado con Next.js, TypeScript y Tailwind CSS.*/}
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <Link
            aria-label="Envíanos un mensaje por WhatsApp"
            href="https://wa.me/542954294429"
            rel="noopener noreferrer"
            target="_blank"
          >
            {/* WhatsApp: verde */}
            <FaWhatsapp className="text-3xl text-green-500 hover:text-green-400 transition-colors duration-200" />
          </Link>
          <Link
            aria-label="Visita nuestro Instagram"
            href="https://www.instagram.com/tecnovita.com.ar"
            rel="noopener noreferrer"
            target="_blank"
          >
            {/* Instagram: usar un color que simule su degradado, o un rosa/púrpura base */}
            <FaInstagram className="text-3xl text-pink-600 hover:text-pink-500 transition-colors duration-200" />
          </Link>
          <Link
            aria-label="Visita nuestro Facebook"
            href="https://www.facebook.com/profile.php?id=61578156026887"
            rel="noopener noreferrer"
            target="_blank"
          >
            {/* Facebook: azul */}
            <FaFacebookF className="text-3xl text-blue-600 hover:text-blue-500 transition-colors duration-200" />
          </Link>
          <Link
            aria-label="Visita nuestro TikTok"
            href="https://www.tiktok.com/@tecnovita.com.ar"
            rel="noopener noreferrer"
            target="_blank"
          >
            {/* TikTok: negro o gris oscuro. El rojo distintivo se da con el hover */}
            <FaTiktok className="text-3xl text-gray-200 hover:text-red-500 transition-colors duration-200" />
          </Link>
          <Link aria-label="Envíanos un correo electrónico" href="mailto:info@tecnovita.com.ar">
            {/* Email: rojo o naranja, según tu preferencia */}
            <MdEmail className="text-3xl text-red-500 hover:text-red-400 transition-colors duration-200" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
