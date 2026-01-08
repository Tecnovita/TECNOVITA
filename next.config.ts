//"C:\01-TECNOVITA\tecnovita1\next.config.ts"
// Importamos el tipo 'NextConfig' desde 'next'. 
// Esto nos ayuda a definir correctamente la estructura de la configuración, 
// permitiendo autocompletado y verificación de tipos en nuestro IDE.
import type { NextConfig } from 'next';

// Definimos la constante 'nextConfig' con el tipo 'NextConfig'.
// Esta constante contiene toda la configuración específica para nuestro proyecto Next.js.
const nextConfig: NextConfig = {
  // --- Configuración de Turbopack ---
  // La sección 'turbopack' permite personalizar el comportamiento de Turbopack.
  // Turbopack es el nuevo compilador de Next.js, más rápido que Webpack.
  // Aquí puedes definir reglas para transformar archivos (loaders), 
  // alias para importaciones, extensiones de resolución, etc.
  turbopack: {
    // 'rules': Define reglas para aplicar cargadores (loaders) específicos a ciertos tipos de archivos.
    // Turbopack ya tiene soporte integrado para JS, TS, JSX, TSX, CSS, Sass, etc.
    // Solo necesitas usar 'rules' si requieres funcionalidades adicionales 
    // que no estén integradas por defecto (por ejemplo, importar SVG como componentes de React).
    // Ejemplo comentado:
    /*
    rules: {
      // Regla para archivos .svg: los carga con @svgr/webpack y los trata como JS.
      // Asegúrate de tener '@svgr/webpack' instalado como dependencia de desarrollo.
      '*.svg': {
        // Lista de loaders a aplicar. El orden puede ser importante.
        loaders: ['@svgr/webpack'], 
        // Indica que el resultado del loader debe tratarse como un archivo JavaScript.
        as: '*.js', 
      },
    },
    */

    // 'resolveAlias': Permite crear alias para rutas o módulos.
    // Esto es útil para simplificar las rutas de importación en tu código.
    // Por ejemplo, en lugar de escribir `import Button from '../../../components/Button'`,
    // podrías escribir `import Button from '@components/Button'` si defines '@components'.
    // Ejemplo comentado:
    /*
    resolveAlias: {
      // Alias para la carpeta de componentes
      '@components': './src/components', 
      // Alias para reemplazar 'underscore' por 'lodash' en las importaciones
      'underscore': 'lodash',          
    },
    */

    // 'resolveExtensions': Define la lista de extensiones que Next.js buscará
    // automáticamente al importar un archivo sin especificar la extensión.
    // Si defines esto, reemplazas la lista por defecto, por lo que debes incluir
    // todas las extensiones que uses, incluyendo las predeterminadas (tsx, ts, jsx, js, mjs, json).
    // Ejemplo comentado (si quisieras incluir archivos .mdx y usar alias de importación):
    /*
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
    */

    // 'root': Establece el directorio raíz de la aplicación para la resolución de módulos.
    // Normalmente, Next.js lo detecta automáticamente mirando archivos como package.json, 
    // package-lock.json, yarn.lock, etc. Puede ser útil en estructuras de proyecto complejas 
    // (por ejemplo, monorepos) donde el raíz de la aplicación no es el mismo que el del package.json.
    // Ejemplo comentado (si el raíz estuviera un nivel arriba):
    /*
    root: path.join(__dirname, '..'), // Define la raíz un nivel arriba del archivo de configuración
    */
    // Nota: Si usas 'root', debes importar 'path' arriba del archivo:
    // import path from 'path';
  },

  // --- Otras configuraciones de Next.js ---
  // Pueden haber otras configuraciones de Next.js aquí fuera de 'turbopack'.
  // Ejemplos comunes:
  // images: { domains: ['ejemplo.com'] }, // Configuración de imágenes
  // output: 'export', // Para exportar estáticamente
  // env: { MI_VARIABLE: 'valor' }, // Variables de entorno globales
  // experimental: { typedRoutes: true }, // Funciones experimentales
  // trailingSlash: true, // Para añadir barras finales a las rutas
  // webpack: (config) => { ... }, // (NO usar con Turbopack)
  // ... (configuraciones específicas de tu proyecto)
};

// Exportamos la configuración para que Next.js la utilice.
export default nextConfig;