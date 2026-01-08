//"C:\01-TECNOVITA\tecnovita1\src\app\layout.tsx"
// Importa los tipos Metadata y Viewport desde 'next'.
// Son necesarios para definir metadatos y la configuración de la vista (viewport).
import type { Metadata, Viewport } from 'next';

// Importa las fuentes Geist Sans y Geist Mono desde 'next/font/google'.
// Next.js las optimiza y carga automáticamente.
import { Geist, Geist_Mono } from 'next/font/google';

// Importa los estilos globales definidos en './globals.css'.
import './globals.css';

// Importa los componentes Header y Footer desde '../components'.
import Header from '../components/Header';
import Footer from '../components/Footer';

// Importa el icono de WhatsApp de react-icons.
import Link from 'next/link'; // Importa Link para enlaces internos y externos.
import { FaWhatsapp } from 'react-icons/fa'; // Icono de WhatsApp.

// --- Configuración de Fuentes ---
// Carga la fuente Geist Sans con configuración específica.
const geistSans = Geist({
  // Define la variable CSS que se generará para esta fuente.
  // Se usará en tailwind.config.ts y globals.css como 'var(--font-geist-sans)'.
  variable: '--font-geist-sans',
  // Subconjuntos de caracteres a incluir (latín es común).
  subsets: ['latin'],
  // Estrategia de visualización para mejorar la percepción de carga.
  // 'swap' muestra texto rápidamente usando una fuente de respaldo y luego cambia a Geist.
  display: 'swap',
});

// Carga la fuente Geist Mono con configuración específica.
const geistMono = Geist_Mono({
  // Define la variable CSS para esta fuente.
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

// --- Metadatos del Sitio ---
// Define los metadatos globales para la aplicación.
// Estos se aplican a todas las páginas a menos que se sobreescriban.
export const metadata: Metadata = {
  // Título del sitio, con una plantilla para páginas específicas.
  title: {
    default: 'TECNOVITA - Servicios Técnicos Profesionales',
    template: '%s | TECNOVITA'
  },
  // Descripción general del sitio.
  description: 'Servicios técnicos especializados en informática, telefonía y electricidad. Soluciones confiables para hogares y empresas en Argentina. Reparación, mantenimiento y asesoramiento técnico.',
  // Palabras clave relevantes (útiles para SEO).
  keywords: ['servicios técnicos', 'informática', 'telefonía', 'electricidad', 'reparación', 'Tecnovita', 'soporte técnico', 'mantenimiento'],
  // Autores del sitio.
  authors: [{ name: 'TECNOVITA' }],
  // Creador del sitio.
  creator: 'TECNOVITA',
  // Editor del sitio.
  publisher: 'TECNOVITA',
  // Opciones de detección de formato (desactivadas para evitar que los dispositivos intenten interpretar como email, dirección, etc.).
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // URL base para metadatos relativos.
  // Corregido: se eliminaron los espacios extra al final.
  metadataBase: new URL('https://tecnovita.com.ar'), // Corregido
  // Alternativas para versiones del sitio (canónico apunta a la raíz).
  alternates: {
    canonical: '/',
  },
  // Metadatos Open Graph para compartir en redes sociales.
  openGraph: {
    type: 'website',
    locale: 'es_AR', // Código de idioma local
    // Corregido: se eliminaron los espacios extra al final.
    url: 'https://tecnovita.com.ar', // Corregido
    title: 'TECNOVITA - Servicios Técnicos Profesionales',
    description: 'Servicios técnicos especializados en informática, telefonía y electricidad para hogares y empresas.',
    siteName: 'TECNOVITA',
    // Imágenes para el Open Graph (deben estar en public/ o ser URLs absolutas).
    images: [
      {
        url: '/og-image.jpg', // Asegúrate de que esta imagen exista en public/
        width: 1200,
        height: 630,
        alt: 'TECNOVITA - Servicios Técnicos Profesionales',
      },
    ],
  },
  // Metadatos para Twitter Card.
  twitter: {
    card: 'summary_large_image', // Tipo de tarjeta de Twitter
    title: 'TECNOVITA - Servicios Técnicos Profesionales',
    description: 'Servicios técnicos especializados en informática, telefonía y electricidad.',
    // Imágenes para Twitter (deben estar en public/ o ser URLs absolutas).
    images: ['/og-image.jpg'],
    creator: '@tecnovita', // Cuenta de Twitter del creador
  },
  // Configuración para motores de búsqueda (robots.txt).
  robots: {
    index: true,  // Permitir indexación
    follow: true, // Permitir seguir enlaces
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1, // Sin límite para vista previa de video
      'max-image-preview': 'large', // Vista previa de imagen grande
      'max-snippet': -1, // Sin límite para fragmento de texto
    },
  },
  // Verificación para servicios externos (ej. Google Search Console).
  // Descomentar y agregar el código cuando lo tengas.
  // verification: {
  //   google: 'your-google-verification-code',
  // },
};

// --- Configuración del Viewport ---
// Define la configuración del viewport para dispositivos móviles.
export const viewport: Viewport = {
  // Ancho del viewport: 'device-width' lo ajusta al ancho del dispositivo.
  width: 'device-width',
  // Escala inicial: 1 significa sin zoom inicial.
  initialScale: 1,
  // Color del tema (barra de direcciones en algunos navegadores móviles).
  themeColor: '#0078FF',
};

// --- Componente del Layout Raíz ---
// Define el componente RootLayout que envuelve toda la aplicación.
export default function RootLayout({
  children, // Recibe el contenido de las páginas hijas
}: Readonly<{
  children: React.ReactNode; // Define el tipo de 'children' como ReactNode
}>) {
  return (
    // Elemento <html> con clase para desplazamiento suave y idioma español.
    <html className="scroll-smooth" lang="es">
      {/* Elemento <body> con estilos y clases de Tailwind y CSS personalizadas. */}
      <body
        // Suprime advertencias de hidratación si hay diferencias menores entre el servidor y cliente.
        suppressHydrationWarning
        // Combina las variables de fuente, utilidades de Tailwind y clases personalizadas.
        // Aplica min-h-screen para que el body ocupe al menos la altura de la ventana.
        // Aplica overflow-x-hidden para ocultar desbordes horizontales globales (usar con cuidado).
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden`}
      >
        {/* Componente Header */}
        <Header />
        
        {/* Contenido principal de la página */}
        <main 
          // Clases de Tailwind para diseño flexible y ocupar espacio restante.
          className="flex flex-col flex-grow w-full"
          // ID para facilitar la navegación interna o estilos específicos.
          id="main-content"
          // tabIndex para permitir enfoque programático si es necesario.
          // tabIndex={-1} // Opcional: Eliminar si no se enfoca programáticamente
        >
          {/* Renderiza el contenido de la página hija */}
          {children}
        </main>

        {/* Botón flotante de WhatsApp */}
        <div className="fixed bottom-6 right-6 z-50">
          {/* Enlace externo para WhatsApp */}
          <Link
            // Etiqueta accesible para lectores de pantalla.
            aria-label="Contactar por WhatsApp - TECNOVITA"
            // Clases para animación y enfoque.
            className="block transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-full"
            // Corregido: se eliminaron los espacios extra al final.
            href="https://wa.me/542954294429" // Corregido
            // Relaciones de enlace para seguridad en enlaces externos.
            rel="noopener noreferrer"
            // Abre en una nueva pestaña.
            target="_blank"
          >
            {/* Contenedor para el icono y la animación del punto */}
            <div className="relative">
              {/* Icono de WhatsApp */}
              <FaWhatsapp className="text-5xl text-green-500 drop-shadow-lg" />
              {/* Punto animado indicador de disponibilidad */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse-gentle" />
            </div>
          </Link>
        </div>

        {/* Componente Footer */}
        <Footer />
      </body>
    </html>
  );
}
