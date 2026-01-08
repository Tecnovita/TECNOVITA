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
    <main className="min-h-[60vh] w-full bg-gray-50 pt-4 pb-2"> {/* ← AGREGAR pt-20 aquí */}
      {/* Contenedor principal SIN max-width restrictivo */}
      <MotionDiv
        animate={{ opacity: 1, y: 0 }}
        className="w-full px-4 py-10 sm:py-14"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {/* Cabecera visual para servicios - AHORA CON CONTAINER */}
        <div className="max-w-5xl mx-auto mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black tracking-tight whitespace-nowrap">
            Santa Rosa - Toay
          </h1>

          {/* Separador elegante */}
          <div className="mt-4 w-24 h-1 bg-[#007bff] mx-auto rounded-full shadow-sm" />
        </div>

        {/* Contenido dinámico CON container propio */}
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </MotionDiv>
    </main>
  );
}