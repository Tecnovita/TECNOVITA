import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto y presupuesto sin cargo',
  description:
    'Pedí tu presupuesto sin cargo. Atención en Santa Rosa y Toay: lunes a viernes de 9 a 18 y sábados de 9 a 13. WhatsApp, email o formulario.',
  alternates: { canonical: '/contacto' },
  openGraph: { url: '/contacto', title: 'Contacto | TECNOVITA' },
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
