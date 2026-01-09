// C:\01-TECNOVITA\tecnovita1\src\app\servicios\layout.tsx
import type { Metadata } from 'next';
import { type ReactNode } from 'react';
import { MotionDiv } from '@/components/motion-div';

export const metadata: Metadata = {
  title: 'Servicios | TECNOVITA',
  description: 'Listado completo de servicios técnicos de informática, telefonía y electricidad.',
};

export default function ServiciosLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen w-full bg-black pt-4 pb-2">
      {/* Contenedor principal */}
      <MotionDiv
        animate={{ opacity: 1, y: 0 }}
        className="w-full px-4 py-10 sm:py-14"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {/* Cabecera visual para servicios */}
        <div className="max-w-5xl mx-auto mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Santa Rosa - Toay
          </h1>

          {/* Separador elegante */}
          <div className="mt-4 w-24 h-1 bg-tecnovita mx-auto rounded-full shadow-lg shadow-tecnovita/50" />
        </div>

        {/* Contenido dinámico CON container propio */}
        <div className="max-w-5xl mx-auto">{children}</div>
      </MotionDiv>
    </main>
  );
}
