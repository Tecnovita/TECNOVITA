// === C:\01-TECNOVITA\tecnovita1\src\lib\services.ts ===
import { FaLaptopCode, FaPhoneAlt, FaBolt, FaBroadcastTower } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export const COMPANY_NAME = 'TECNOVITA';

export type ServiceId = 'informatica' | 'electricidad' | 'telefonia' | 'radiocomunicaciones';

export type ServiceItem = {
  id: string;
  label: string;
  note?: string;
};

export type Servicio = {
  bgGradient: string;
  icon: IconType;
  id: ServiceId;
  items: ServiceItem[];
  title: string;
  imageUrl: string;
  description: string; // ← NUEVO CAMPO
};

export const subServicesContent: Record<ServiceId, Servicio> = {
  informatica: {
    bgGradient: 'from-blue-700/85 to-cyan-700/85',
    icon: FaLaptopCode,
    id: 'informatica',
    title: 'INFORMÁTICA',
    description: 'Reparación de computadoras e instalación de sistemas.',
    imageUrl: '/imagenes/servicios/informatica.avif',
    items: [
      {
        id: 'diagnostico-pc',
        label: 'Diagnóstico técnico de PC, Notebook y All-in-One',
        note: 'Presupuesto sin cargo en local.',
      },
      {
        id: 'actualizacion-ssd', // MEJORA: El "Cambio a SSD" es el servicio más pedido en Argentina
        label: 'Upgrade y actualización (Instalación de SSD y RAM)',
        note: 'Multiplicá la velocidad de tu equipo.',
      },
      {
        id: 'instalacion-sistema',
        label: 'Instalación de Windows 10 / 11 Pro',
        note: 'Optimización de sistema y drivers.',
      },
      {
        id: 'camaras-seguridad',
        label: 'Cámaras de Seguridad IP y sistemas Wi-Fi',
        note: 'Monitoreo en tiempo real desde el celular.',
      },
      {
        id: 'limpieza-fisica', // AMPLIACIÓN: Previene que se quemen las notebooks
        label: 'Mantenimiento preventivo (Limpieza y cambio de pasta térmica)',
        note: 'Evitá el sobrecalentamiento.',
      },
      {
        id: 'redes-wifi', // AMPLIACIÓN: Clave para casas grandes o galpones
        label: 'Ampliación de cobertura Wi-Fi y Redes Mesh',
        note: 'Eliminá los puntos ciegos de tu casa.',
      },
      {
        id: 'eliminacion-virus',
        label: 'Limpieza de Software, Virus y Adware',
      },
      {
        id: 'configuracion-perifericos',
        label: 'Instalación de periféricos e Impresoras',
        note: 'Configuración de red y sistemas continuos.',
      },
      {
        id: 'recuperacion-datos', // AMPLIACIÓN: Un servicio de alto valor
        label: 'Recuperación de datos y Backup',
        note: 'Discos rígidos, pendrives y memorias.',
      },
      {
        id: 'soporte-pyme',
        label: 'Abonos de Mantenimiento para Empresas y Comercios',
        note: 'Soporte técnico prioritario.',
      },
    ],
  },
  electricidad: {
    bgGradient: 'from-orange-600/80 to-red-600/80',
    icon: FaBolt,
    id: 'electricidad',
    title: 'ELECTRICIDAD',
    description: 'Instalaciones eléctricas y atención de urgencias.',
    imageUrl: '/imagenes/servicios/electricidad.avif',
    items: [
      {
        id: 'urgencias-24hs',
        label: 'Guardia de Urgencias Eléctricas',
        note: 'Detección de fallas, fugas y cortocircuitos.',
      },
      {
        id: 'tablero-modernizacion',
        label: 'Modernización de Tableros Eléctricos',
        note: 'Térmicas y Disyuntores (Protección de personas y equipos).',
      },
      {
        id: 'certificaciones-ape', // CLAVE EN LA PAMPA: Para habilitaciones
        label: 'Certificaciones y Protocolos de Puesta a Tierra',
        note: 'Medición de jabalina con instrumental certificado.',
      },
      {
        id: 'recableado-normativo',
        label: 'Recableado General y Especial (AA/CC)',
        note: 'Líneas exclusivas para Aire Acondicionado y Hornos.',
      },
      {
        id: 'iluminacion-led',
        label: 'Proyectos de Iluminación LED y Automatización',
        note: 'Fotocélulas y sensores de movimiento.',
      },
      {
        id: 'proteccion-tension', // MUY PEDIDO: Por los cortes y subas de tensión
        label: 'Protectores de Alta/Baja Tensión integrales',
        note: 'Protegé tus electrodomésticos de golpes de tensión.',
      },
      {
        id: 'energia-solar',
        label: 'Sistemas Solares y Backup (UPS)',
        note: 'Soluciones ante cortes de luz y ahorro energético.',
      },
      {
        id: 'porteros-seguridad',
        label: 'Porteros Eléctricos y Visores IP',
        note: 'Instalación y reparación de sistemas de acceso.',
      },
      {
        id: 'bombas-pileta', // AMPLIACIÓN: Muy común en casas con patio en La Pampa
        label: 'Automatización de Bombas y Riego',
        note: 'Tableros estancos con protección para motores.',
      },
    ],
  },
  telefonia: {
    bgGradient: 'from-green-600/80 to-emerald-600/80',
    icon: FaPhoneAlt,
    id: 'telefonia',
    title: 'TELEFONÍA',
    description: 'Reparación de celulares y centrales telefónicas.',
    imageUrl: '/imagenes/servicios/telefonia.avif',
    items: [
      {
        id: 'cambio-pantalla',
        label: 'Cambio de pantalla / módulo celular',
      },
      {
        id: 'pin-carga',
        label: 'Reparación de pin de carga',
      },
      {
        id: 'cambio-bateria',
        label: 'Cambio de baterías internas',
      },
      {
        id: 'limpieza-sulfato',
        label: 'Limpieza por humedad / sulfatación',
      },
      {
        id: 'cambio-camara',
        label: 'Cambio de cámara o altavoz',
      },
      {
        id: 'diagnostico-software',
        label: 'Diagnóstico gratis de software (apps lentas)',
      },
    ],
  },
  radiocomunicaciones: {
    bgGradient: 'from-purple-600/80 to-indigo-600/80',
    icon: FaBroadcastTower,
    id: 'radiocomunicaciones',
    title: 'RADIOCOMUNICACIONES',
    description: 'Mantenimiento de torres e instalación de antenas.',
    imageUrl: '/imagenes/servicios/telecomunicaciones.avif',
    items: [
      {
        id: 'radioenlaces-punto',
        label: 'Radioenlaces Punto a Punto y Multi-punto',
        note: 'Llevamos internet y datos a zonas rurales o campos.',
      },
      {
        id: 'mantenimiento-torres',
        label: 'Mantenimiento de Torres y Mástiles',
        note: 'Pintura, tensado de riendas y cumplimiento ENACOM.',
      },
      {
        id: 'antenas-vhf-uhf',
        label: 'Sistemas de Radio VHF, UHF y Banda Ciudadana',
        note: 'Instalación en bases fijas y unidades móviles.',
      },
      {
        id: 'proteccion-descargas',
        label: 'Sistemas de Pararrayos y Puesta a Tierra',
        note: 'Protección contra descargas atmosféricas en altura.',
      },
      {
        id: 'balizamiento-seguridad',
        label: 'Balizamiento Nocturno y Seguridad en Altura',
        note: 'Instalación de balizas LED bajo normativa aeronáutica.',
      },
      {
        id: 'programacion-equipos',
        label: 'Programación de Handies y Radios Móviles',
        note: 'Configuración de frecuencias y canales de emergencia.',
      },
      {
        id: 'cableado-estructurado',
        label: 'Cableado Coaxil, UTP y Racks de Datos',
        note: 'Armado de nodos de comunicación profesionales.',
      },
      {
        id: 'repetidoras',
        label: 'Instalación de Repetidoras de Señal',
        note: 'Ampliación de cobertura para comunicación de largo alcance.',
      },
    ],
  },
};

export function getServiceById(id: ServiceId): Servicio {
  return subServicesContent[id];
}

// INSTRUCCIONES PARA USAR IMÁGENES PROPIAS:
// ==========================================
//
// 1. Crea una carpeta: public/images/services/
//
// 2. Guarda tus fotos con nombres descriptivos:
//    - informatica.jpg
//    - electricidad.jpg
//    - telefonia.jpg
//    - radiocomunicaciones.jpg
//
// 3. Reemplaza las URLs en imageUrl por:
//    imageUrl: '/images/services/informatica.jpg'
//    imageUrl: '/images/services/electricidad.jpg'
//    imageUrl: '/images/services/telefonia.jpg'
//    imageUrl: '/images/services/radiocomunicaciones.jpg'
//
// 4. Asegúrate de que las imágenes sean:
//    - Formato: JPG o WebP
//    - Tamaño recomendado: 1200x800px
//    - Peso optimizado: < 500KB cada una
//    - Buena iluminación y resolución
//
// Ejemplo de estructura final:
// public/
//   └── images/
//       └── services/
//           ├── informatica.jpg
//           ├── electricidad.jpg
//           ├── telefonia.jpg
//           └── radiocomunicaciones.jpg
