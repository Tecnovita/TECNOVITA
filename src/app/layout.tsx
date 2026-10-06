import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

// Metadatos optimizados para SEO y Redes Sociales
export const metadata: Metadata = {
  title: {
    default: 'TECNOVITA - Servicios Técnicos Profesionales',
    template: '%s | TECNOVITA',
  },
  description:
    'Servicios técnicos en Santa Rosa y Toay: informática, electricidad, telefonía y radiocomunicaciones para hogares y empresas. Presupuesto sin cargo.',
  authors: [{ name: 'TECNOVITA' }],
  metadataBase: new URL('https://tecnovita.com.ar'),
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://tecnovita.com.ar',
    title: 'TECNOVITA - Servicios Técnicos Profesionales',
    description: 'Informática, electricidad, telefonía y radiocomunicaciones en Santa Rosa y Toay.',
    siteName: 'TECNOVITA',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TECNOVITA',
      },
    ],
  },
  twitter: { card: 'summary_large_image', images: ['/og-image.jpg'] },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'TECNOVITA',
  url: 'https://tecnovita.com.ar',
  image: 'https://tecnovita.com.ar/og-image.jpg',
  telephone: '+542954294429',
  email: 'info@tecnovita.com.ar',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Catriló 1648',
    addressLocality: 'Santa Rosa',
    addressRegion: 'La Pampa',
    addressCountry: 'AR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: -36.6190731, longitude: -64.2882855 },
  areaServed: ['Santa Rosa', 'Toay', 'La Pampa'],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '13:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/tecnovita.com.ar',
    'https://www.facebook.com/profile.php?id=61578156026887',
    'https://www.tiktok.com/@tecnovita.com.ar',
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0078FF',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="es">
      <body
        suppressHydrationWarning
        // Estructura Flexbox para asegurar que el Footer siempre esté al final
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-[#050506] text-white`}
      >
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          type="application/ld+json"
        />
        {/* Navegación Superior */}
        <Header />

        {/* El flex-1 permite que el main crezca y empuje al footer hacia abajo */}
        <main className="flex-1 w-full" id="main-content">
          {children}
        </main>

        {/* Botón flotante de WhatsApp global */}
        <div className="fixed bottom-6 right-6 z-50">
          <Link
            aria-label="Contactar por WhatsApp - TECNOVITA"
            className="block transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-full"
            href="https://wa.me/542954294429"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="relative group">
              <FaWhatsapp className="text-5xl text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)] transition-all group-hover:drop-shadow-[0_0_25px_rgba(34,197,94,0.8)]" />
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-[#050506] animate-pulse" />
            </div>
          </Link>
        </div>

        {/* Pie de página */}
        <Footer />
      </body>
    </html>
  );
}
