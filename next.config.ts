//"C:\01-TECNOVITA\tecnovita1\next.config.ts"
import type { NextConfig } from 'next';

/**
 * Configuración de Next.js para TECNOVITA
 * Incluye soporte para imágenes externas (Unsplash) y optimizaciones de Turbopack.
 */
const nextConfig: NextConfig = {
  /* --- CONFIGURACIÓN DE IMÁGENES --- */
  // Requerido para que el componente <Image /> pueda cargar fotos de dominios externos.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**', // Permite cualquier ruta dentro del dominio de Unsplash
      },
    ],
  },

  /* --- CONFIGURACIÓN DE TURBOPACK --- */
  // Mejora la velocidad de compilación en desarrollo.
  // Nota: En Next.js 15, muchas configuraciones son automáticas.
  turbopack: {
    // Espacio para futuras reglas personalizadas (loaders, alias, etc.)
  },

  /* --- OPCIONES ADICIONALES --- */
  // reactStrictMode: true, // Ayuda a identificar problemas en el renderizado
};

export default nextConfig;
