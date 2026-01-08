// postcss.config.js
// Este archivo define la configuración para PostCSS, una herramienta que transforma CSS con JavaScript.
// Next.js utiliza PostCSS para integrar Tailwind CSS y Autoprefixer.

// 'module.exports': Exporta la configuración de PostCSS.
module.exports = {
  // 'plugins': Define una lista de plugins que PostCSS debe aplicar al procesar el CSS.
  plugins: {
    // 'tailwindcss': Plugin principal para Tailwind CSS.
    // Leerá la configuración desde 'tailwind.config.ts' o '.js'.
    // Acepta un objeto de opciones (vacío `{}` para usar la configuración predeterminada).
    tailwindcss: {},
    // 'autoprefixer': Plugin que añade prefijos de vendedor automáticamente al CSS.
    // Mejora la compatibilidad con navegadores antiguos.
    // Acepta un objeto de opciones (vacío `{}` para usar la configuración predeterminada).
    autoprefixer: {},
  },
};