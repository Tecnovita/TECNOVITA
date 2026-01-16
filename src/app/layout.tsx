// C:\01-TECNOVITA\tecnovita1\src\app\layout.tsx
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

export const metadata: Metadata = {
  title: {
    default: 'TECNOVITA - Servicios Técnicos Profesionales',
    template: '%s | TECNOVITA',
  },
  description:
    'Servicios técnicos especializados en informática, telefonía y electricidad. Soluciones confiables para hogares y empresas en Argentina. Reparación, mantenimiento y asesoramiento técnico.',
  keywords: [
    'servicios técnicos',
    'informática',
    'telefonía',
    'electricidad',
    'reparación',
    'Tecnovita',
    'soporte técnico',
    'mantenimiento',
  ],
  authors: [{ name: 'TECNOVITA' }],
  creator: 'TECNOVITA',
  publisher: 'TECNOVITA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tecnovita.com.ar'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://tecnovita.com.ar',
    title: 'TECNOVITA - Servicios Técnicos Profesionales',
    description:
      'Servicios técnicos especializados en informática, telefonía y electricidad para hogares y empresas.',
    siteName: 'TECNOVITA',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TECNOVITA - Servicios Técnicos Profesionales',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TECNOVITA - Servicios Técnicos Profesionales',
    description: 'Servicios técnicos especializados en informática, telefonía y electricidad.',
    images: ['/og-image.jpg'],
    creator: '@tecnovita',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        // CORRECCIÓN CRÍTICA: Usar colores directos y estructura flexible
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-[#050506] text-white`}
      >
        {/* Header */}
        <Header />

        {/* Contenido principal - FLEXIBLE para gestión de espacio */}
        <main className="flex-1 w-full" id="main-content">
          {children}
        </main>

        {/* Botón flotante de WhatsApp */}
        <div className="fixed bottom-6 right-6 z-50">
          <Link
            aria-label="Contactar por WhatsApp - TECNOVITA"
            className="block transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-full"
            href="https://wa.me/542954294429"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="relative">
              <FaWhatsapp className="text-5xl text-green-500 drop-shadow-lg" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse-gentle" />
            </div>
          </Link>
        </div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
