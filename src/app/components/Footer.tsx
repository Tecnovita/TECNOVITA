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
          Diseñado y desarrollado con Next.js, TypeScript y Tailwind CSS.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <Link href="https://wa.me/542954294429" target="_blank" rel="noopener noreferrer" aria-label="Envíanos un mensaje por WhatsApp">
            {/* WhatsApp: verde */}
            <FaWhatsapp className="text-3xl text-green-500 hover:text-green-400 transition-colors duration-200" />
          </Link>
          <Link href="https://www.instagram.com/tecnovita.com.ar" target="_blank" rel="noopener noreferrer" aria-label="Visita nuestro Instagram">
            {/* Instagram: usar un color que simule su degradado, o un rosa/púrpura base */}
            <FaInstagram className="text-3xl text-pink-600 hover:text-pink-500 transition-colors duration-200" />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61578156026887" target="_blank" rel="noopener noreferrer" aria-label="Visita nuestro Facebook">
            {/* Facebook: azul */}
            <FaFacebookF className="text-3xl text-blue-600 hover:text-blue-500 transition-colors duration-200" />
          </Link>
          <Link href="https://www.tiktok.com/@tecnovita.com.ar" target="_blank" rel="noopener noreferrer" aria-label="Visita nuestro TikTok">
            {/* TikTok: negro o gris oscuro. El rojo distintivo se da con el hover */}
            <FaTiktok className="text-3xl text-gray-200 hover:text-red-500 transition-colors duration-200" />
          </Link>
          <Link href="mailto:info@tecnovita.com.ar" aria-label="Envíanos un correo electrónico">
            {/* Email: rojo o naranja, según tu preferencia */}
            <MdEmail className="text-3xl text-red-500 hover:text-red-400 transition-colors duration-200" />
          </Link>
        </div>
      </div>
    </footer>
  );
}