// C:\01-TECNOVITA\tecnovita1\src\app\servicios\layout.tsx
import { type ReactNode } from 'react';

export default function ServiciosLayout({ children }: { children: ReactNode }) {
  return <div className="min-h-screen w-full bg-black">{children}</div>;
}
