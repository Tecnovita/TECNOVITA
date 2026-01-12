// C:\01-TECNOVITA\tecnovita1\tailwind.config.ts

// Importamos el tipo 'Config' desde 'tailwindcss'.
// Esto nos ayuda a definir correctamente la estructura de la configuración de Tailwind,
// permitiendo autocompletado y verificación de tipos en nuestro IDE.
import type { Config } from 'tailwindcss';

// Importamos los plugins de Tailwind CSS que vamos a usar.
import forms from '@tailwindcss/forms'; // Plugin para estilos predeterminados de formularios.
import typography from '@tailwindcss/typography'; // Plugin para estilos de contenido de texto.
import aspectRatio from '@tailwindcss/aspect-ratio'; // Plugin para mantener proporciones de aspecto.

// Definimos la constante 'config' con el tipo 'Config'.
// Esta constante contiene toda la configuración específica para Tailwind CSS en nuestro proyecto.
const config: Config = {
  // 'content': Define las rutas de los archivos fuente donde Tailwind buscará clases CSS utilizadas.
  // Tailwind usa esta lista para saber qué clases CSS están en uso y generar un CSS final optimizado
  // (eliminando clases no utilizadas).
  content: [
    // Escanea todos los archivos .js, .ts, .jsx, .tsx, .mdx dentro de la carpeta 'src'.
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    // Opcional: Si tienes archivos de plantillas o componentes en otros lugares, añádelos aquí.
    // Ej: './components/**/*.{js,ts,jsx,tsx}',
    // NOTA: No es necesario incluir './src/app/globals.css' aquí.
    // Tailwind busca *usos* de clases en archivos de código fuente, no en archivos CSS directamente.
  ],
  // 'darkMode': Define cómo se activa el modo oscuro.
  // 'class': Activa el modo oscuro añadiendo la clase 'dark' a un elemento padre (por ejemplo, <html class="dark">).
  // Otras opciones: 'media' (usa prefers-color-scheme), 'variant' (no recomendado).
  darkMode: 'class',
  // 'theme': Permite personalizar el tema predeterminado de Tailwind.
  theme: {
    // 'extend': Permite extender (añadir o sobreescribir parcialmente) las opciones predeterminadas del tema.
    extend: {
      // 'colors': Define colores personalizados para el proyecto.
      colors: {
        // Grupo de colores 'primary'
        primary: {
          // Color principal predeterminado
          DEFAULT: '#004080',
          // Variante clara
          light: '#1E589B',
          // Variante oscura
          dark: '#003060',
          // Variantes específicas (50, 100, etc.) para escalas de color
          50: '#E6EFFF',
          100: '#CCDFFF',
          // ... puedes añadir más variantes si las necesitas
          // 200: '#99BFFF', 300: '#6699FF', ... etc.
        },
        // Color 'secondary' individual
        secondary: '#64748B',
        // Grupo de colores 'accent'
        accent: {
          DEFAULT: '#FF7F50',
          dark: '#E56D44',
        },
        // Color específico 'whatsapp'
        whatsapp: '#25D366',
        // Grupo de colores 'tecnovita'
        tecnovita: {
          DEFAULT: '#0078FF',
          light: '#3399FF',
          dark: '#005FCC',
        },
      },
      // 'fontFamily': Define fuentes personalizadas.
      fontFamily: {
        // Fuente sans-serif (usada para texto normal)
        sans: [
          // Primero intenta usar la variable CSS '--font-geist-sans' (probablemente inyectada por un componente de fuente)
          'var(--font-geist-sans)',
          // Si la variable no está disponible, usa 'Poppins'
          'Poppins',
          // Si 'Poppins' no está disponible, usa 'Inter'
          'Inter',
          // Si ninguna de las anteriores está disponible, usa las fuentes del sistema
          'ui-sans-serif',
          'system-ui',
        ],
        // Fuente monoespaciada (usada para código)
        mono: [
          // Variable CSS para la fuente monoespaciada Geist
          'var(--font-geist-mono)',
          // Fuentes monoespaciadas predeterminadas
          'ui-monospace',
          'SFMono-Regular',
        ],
      },
      // 'animation': Define animaciones personalizadas usando nombres y duración/curva de animación.
      animation: {
        // Animación 'fade-in': usa la keyframe 'fadeIn' con duración y timing
        'fade-in': 'fadeIn 0.5s ease-in-out',
        // Animación 'slide-up': usa la keyframe 'slideUp' con duración y timing
        'slide-up': 'slideUp 0.3s ease-out',
      },
      // 'keyframes': Define las animaciones de bajo nivel (los pasos de la animación).
      keyframes: {
        // Definición de la keyframe 'fadeIn'
        fadeIn: {
          // Al 0% de la animación, la opacidad es 0
          '0%': { opacity: '0' },
          // Al 100% de la animación, la opacidad es 1
          '100%': { opacity: '1' },
        },
        // Definición de la keyframe 'slideUp'
        slideUp: {
          // Al 0% de la animación, se mueve hacia abajo (10px) y es transparente
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          // Al 100% de la animación, está en su posición original y es opaco
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  // 'plugins': Lista de plugins de Tailwind CSS a utilizar.
  plugins: [
    // Plugin para estilos predeterminados de formularios
    forms,
    // Plugin para estilos de contenido de texto
    typography,
    // Plugin para mantener proporciones de aspecto
    aspectRatio,
  ],
};

// Exportamos la configuración para que Tailwind CSS la utilice.
export default config;
