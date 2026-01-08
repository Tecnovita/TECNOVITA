// vitest.config.ts
import { defineConfig } from 'vitest/config'; // Importa la función para definir la configuración de Vitest
import react from '@vitejs/plugin-react'; // Plugin de Vite para React, necesario para compilar JSX/TSX

// Exporta la configuración definida
export default defineConfig({
  // Plugins: Lista de plugins que Vite/Vitest debe usar
  plugins: [
    // Agrega el plugin de React para que Vitest pueda entender y compilar archivos .tsx y .jsx
    react(),
  ],
  // Test: Configuración específica para las pruebas
  test: {
    // Environment: Define el entorno en el que se ejecutarán las pruebas.
    // 'jsdom' simula un entorno del navegador, necesario para probar componentes de React.
    environment: 'jsdom',
    // SetupFiles: Archivos que se ejecutan antes de cada archivo de prueba.
    // Útil para configuraciones globales, como importar '@testing-library/jest-dom' o configurar mocks.
    setupFiles: ['./vitest.setup.ts'], // Este archivo lo crearemos a continuación si es necesario
    // Include: Patrón para encontrar archivos de prueba. Por defecto busca .test.js, .spec.js, etc.
    // include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'], // Esta es la opción por defecto
    // Alias: Similar a los alias de Next.js, útil para importaciones absolutas en tests.
    // alias: { '@': resolve(__dirname, './src') }, // Ejemplo si usas alias
  },
});