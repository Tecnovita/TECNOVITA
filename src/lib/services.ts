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
        label: 'Diagnóstico técnico de PC o notebook',
        note: 'Con presupuesto',
      },
      {
        id: 'instalacion-sistema',
        label: 'Instalación y configuración de Windows',
        note: 'Incluye drivers',
      },
      {
        id: 'formateo-reinstalacion',
        label: 'Formateo y reinstalación completa',
        note: 'Con respaldo de datos',
      },
      {
        id: 'office-libreoffice',
        label: 'Office y suites gratuitas (LibreOffice)',
      },
      {
        id: 'eliminacion-virus',
        label: 'Eliminación de virus y malware',
      },
      {
        id: 'aceleracion-pc',
        label: 'Aceleración de PC lento',
        note: 'Para Windows 10/11.',
      },
      {
        id: 'antivirus-vpn',
        label: 'Antivirus y VPN básica',
      },
      {
        id: 'configuracion-perifericos',
        label: 'Configuración de periféricos (impresoras, etc.)',
      },
      {
        id: 'backup-configuracion',
        label: 'Configuración de copias de seguridad (backup)',
      },
      {
        id: 'soporte-remoto',
        label: 'Soporte técnico remoto',
        note: 'Por hora',
      },
      {
        id: 'soporte-pyme',
        label: 'Soporte PYME (mantenimiento mensual)',
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
        id: 'urgencias-electricas',
        label: 'Atención de urgencias eléctricas',
        note: 'Cortocircuitos y fallas. Incluye diagnóstico.',
      },
      {
        id: 'tablero-electrico',
        label: 'Instalación o recambio de tablero eléctrico',
        note: 'Térmicas y disyuntores. Cumple ENRE.',
      },
      {
        id: 'recableado-instalaciones',
        label: 'Recableado de instalaciones',
      },
      {
        id: 'luces-led-ahorro',
        label: 'Luces LED y ahorro energía',
      },
      {
        id: 'puesta-a-tierra',
        label: 'Instalación de puesta a tierra',
        note: 'Jabalinas y medición IRAM.',
      },
      {
        id: 'ups-generadores',
        label: 'Instalación de UPS y generadores',
      },
      {
        id: 'paneles-solares',
        label: 'Paneles solares básicos',
      },
      {
        id: 'domotica-simple',
        label: 'Domótica simple (timers inteligentes)',
      },
      {
        id: 'porteros-electricos',
        label: 'Instalación y reparación de porteros eléctricos',
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
        id: 'mantenimiento-torres',
        label: 'Mantenimiento de torres',
        note: 'Cumple CNC.',
      },
      {
        id: 'radioenlaces',
        label: 'Configuración de radioenlaces',
      },
      {
        id: 'antenas-vhf-uhf',
        label: 'Instalación de antenas VHF, UHF y FM',
      },
      {
        id: 'balizamiento-pararrayos',
        label: 'Balizamiento y pararrayos',
      },
      {
        id: 'sistemas-antenas',
        label: 'Sistemas de antenas complejos',
      },
      {
        id: 'walkie-talkies',
        label: 'Instalación de walkie-talkies/radios portátiles',
      },
      {
        id: 'integracion-cctv',
        label: 'Integración con CCTV/redes',
      },
      {
        id: 'cableado-estructurado',
        label: 'Instalación de cableado estructurado y racks',
        note: 'Incluye cables coaxiales.',
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
