// === C:\01-TECNOVITA\tecnovita1\src\lib\services.ts ===
import { FaLaptopCode, FaPhoneAlt, FaBolt, FaBroadcastTower } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export const COMPANY_NAME = 'TECNOVITA';

export type ServiceId = 'informatica' | 'electricidad' | 'telefonia' | 'telecomunicaciones';

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
};

export const subServicesContent: Record<ServiceId, Servicio> = {
  informatica: {
    bgGradient: 'from-blue-700/85 to-cyan-700/85',
    icon: FaLaptopCode,
    id: 'informatica',
    title: 'INFORMÁTICA',
    // Imagen más tech y moderna - Laptop con código
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
      { id: 'instalacion-office', label: 'Instalación de Office (Word, Excel, etc.)' },
      { id: 'eliminacion-virus', label: 'Eliminación de virus y malware' },
      { id: 'optimizacion-equipos', label: 'Optimización de equipos lentos' },
      {
        id: 'mantenimiento-preventivo',
        label: 'Mantenimiento preventivo',
        note: 'Limpieza interna y pasta térmica',
      },
      {
        id: 'recuperacion-datos',
        label: 'Recuperación de archivos y datos',
        note: 'Según complejidad',
      },
      {
        id: 'instalacion-impresoras',
        label: 'Instalación y configuración de impresoras, sistema continuo, carga de tinta',
      },
      {
        id: 'configuracion-wifi',
        label: 'Instalación y configuración de redes Wi-Fi',
        note: 'Hogar y comercio',
      },
      { id: 'backup-configuracion', label: 'Configuración de copias de seguridad (backup)' },
      { id: 'soporte-remoto', label: 'Soporte técnico remoto', note: 'Por hora' },
      {
        id: 'mantenimiento-empresas',
        label: 'Mantenimiento informático para empresas',
        note: 'Mensual',
      },
    ],
  },
  electricidad: {
    bgGradient: 'from-orange-600/80 to-red-600/80',
    icon: FaBolt,
    id: 'electricidad',
    title: 'ELECTRICIDAD',
    // Imagen de instalaciones eléctricas profesionales
    imageUrl: '/imagenes/servicios/electricidad.avif',
    items: [
      { id: 'diagnostico-electrico', label: 'Diagnóstico de instalaciones eléctricas' },
      {
        id: 'urgencias-24hs',
        label: 'Atención de urgencias eléctricas',
        note: 'Cortocircuitos y fallas',
      },
      {
        id: 'tablero-electrico',
        label: 'Instalación o recambio de tablero eléctrico',
        note: 'Térmicas y disyuntores',
      },
      { id: 'cableado-nuevo', label: 'Cableado y recableado general' },
      { id: 'luminarias-led', label: 'Instalación de luminarias LED y apliques' },
      {
        id: 'puesta-a-tierra',
        label: 'Instalación de puesta a tierra',
        note: 'Jabalinas y medición',
      },
      { id: 'sensores-fotocelulas', label: 'Instalación de sensores de movimiento y fotocélulas' },
      { id: 'porteros-electricos', label: 'Instalación y reparación de porteros eléctricos' },
      { id: 'certificaciones', label: 'Certificaciones y protocolos de medición' },
    ],
  },
  telefonia: {
    bgGradient: 'from-green-600/80 to-emerald-600/80',
    icon: FaPhoneAlt,
    id: 'telefonia',
    title: 'TELEFONÍA',
    // Imagen de reparación de celulares moderna
    imageUrl: '/imagenes/servicios/telefonia.avif',
    items: [
      { id: 'cambio-pantalla', label: 'Cambio de pantalla / módulo celular' },
      { id: 'pin-carga', label: 'Reparación de pin de carga' },
      { id: 'cambio-bateria', label: 'Cambio de baterías internas' },
      { id: 'reparacion-placa', label: 'Reparación de placa base', note: 'Micro-soldadura' },
      { id: 'limpieza-sulfato', label: 'Limpieza por humedad / sulfatación' },
      { id: 'centrales-telefonicas', label: 'Instalación de centrales telefónicas' },
      { id: 'voip', label: 'Configuración de telefonía IP (VoIP)' },
      { id: 'cableado-telefonico', label: 'Mantenimiento de cableado telefónico interno' },
    ],
  },
  telecomunicaciones: {
    bgGradient: 'from-purple-600/80 to-indigo-600/80',
    icon: FaBroadcastTower,
    id: 'telecomunicaciones',
    title: 'TELECOMUNICACIONES',
    // Imagen de torres y antenas de telecomunicaciones
    imageUrl: '/imagenes/servicios/telecomunicaciones.avif',
    items: [
      { id: 'mantenimiento-torres', label: 'Mantenimiento preventivo y correctivo de torres' },
      { id: 'balizamiento', label: 'Instalación de sistemas de balizamiento y pararrayos' },
      { id: 'ajuste-roe', label: 'Medición y ajuste de ROE', note: 'Optimización de transmisión' },
      { id: 'radioenlaces', label: 'Configuración de radioenlaces punto a punto y multipunto' },
      { id: 'antenas-vhf-uhf', label: 'Instalación de antenas VHF, UHF y FM' },
      { id: 'cableado-estructurado', label: 'Instalación de cableado estructurado y racks' },
      { id: 'cables-coaxiles', label: 'Armado de cables coaxiales, líneas de transmisión' },
      { id: 'sistemas-irradiantes', label: 'Montaje de sistemas irradiantes complejos' },
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
//    - telecomunicaciones.jpg
//
// 3. Reemplaza las URLs en imageUrl por:
//    imageUrl: '/images/services/informatica.jpg'
//    imageUrl: '/images/services/electricidad.jpg'
//    imageUrl: '/images/services/telefonia.jpg'
//    imageUrl: '/images/services/telecomunicaciones.jpg'
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
//           └── telecomunicaciones.jpg
