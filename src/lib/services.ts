// ============================================================================
// SERVICIOS DATA - Gestión de Datos de Servicios Técnicos (VERSIÓN AUTOMATIZADA)
// ============================================================================

import { FaLaptopCode, FaPhoneAlt, FaBolt } from 'react-icons/fa';
import type { IconType } from 'react-icons';

// --- CONSTANTES GLOBALES ---
export const COMPANY_NAME = 'TECNOVITA';

// --- TIPOS BÁSICOS ---
export type ServiceId = 'informatica' | 'electricidad' | 'telefonia';

export type ServiceItem = {
  id: string;
  label: string;
  note?: string;
};

export type Servicio = {
  bgGradient: string;   // Controla el color en Home y Subpáginas
  icon: IconType;       // Icono tipado correctamente (react-icons)
  id: ServiceId;
  items: ServiceItem[];
  title: string;
};

// --- DATOS DE SERVICIOS ---
export const subServicesContent: Record<ServiceId, Servicio> = {
  informatica: {
    bgGradient: 'from-blue-500 to-cyan-500',
    icon: FaLaptopCode,
    id: 'informatica',
    items: [
      { id: 'instalar-sistema-operativo', label: 'Instalar Sistema Operativo (Windows/Linux)', note: 'Incluye drivers básicos' },
      { id: 'instalar-office', label: 'Instalar Suite Office (Word, Excel, etc)' },
      { id: 'instalar-antivirus', label: 'Instalación y configuración de Antivirus' },
      { id: 'instalacion-redes', label: 'Instalación y configuración de redes Wi-Fi o cableadas', note: 'Por dispositivo' },
      { id: 'mantenimiento-pc', label: 'Mantenimiento preventivo de PC', note: 'Limpieza física y optimización' },
      { id: 'recuperacion-datos', label: 'Recuperación de datos', note: 'Según complejidad' },
      { id: 'instalacion-software', label: 'Instalación de software específico', note: 'Por aplicación' },
      { id: 'configuracion-email', label: 'Configuración de correo electrónico' },
      { id: 'soporte-remoto', label: 'Soporte técnico remoto', note: 'Por hora' },
      { id: 'backup-configuracion', label: 'Configuración de sistema de backup' },
      { id: 'formateo-completo', label: 'Formateo completo y reinstalación', note: 'Con respaldo de datos' },
      { id: 'optimizacion-rendimiento', label: 'Optimización de rendimiento del sistema' },
    ],
    title: 'Servicios de INFORMÁTICA',
  },

  electricidad: {
    bgGradient: 'from-orange-500 to-red-500',
    icon: FaBolt,
    id: 'electricidad',
    items: [
      { id: 'instalaciones-residenciales', label: 'Instalaciones eléctricas residenciales', note: 'Precio por punto de luz' },
      { id: 'instalaciones-comerciales', label: 'Instalaciones eléctricas comerciales', note: 'Precio por punto' },
      { id: 'reparacion-corto', label: 'Reparación de cortocircuitos' },
      { id: 'instalacion-luminarias', label: 'Instalación de luminarias LED', note: 'Por unidad' },
      { id: 'tablero-electrico', label: 'Instalación/actualización de tablero eléctrico' },
      { id: 'puesta-tierra', label: 'Instalación de puesta a tierra' },
      { id: 'automatizacion-hogar', label: 'Automatización del hogar (domótica)', note: 'Según complejidad' },
      { id: 'mantenimiento-electrico', label: 'Mantenimiento preventivo eléctrico' },
      { id: 'instalacion-enchufes', label: 'Instalación de enchufes y tomacorrientes', note: 'Por unidad' },
      { id: 'cableado-electrico', label: 'Cableado eléctrico completo', note: 'Por metro o proyecto' },
    ],
    title: 'Servicios de ELECTRICIDAD',
  },

  telefonia: {
    bgGradient: 'from-green-500 to-emerald-500',
    icon: FaPhoneAlt,
    id: 'telefonia',
    items: [
      { id: 'pbx-instalacion', label: 'Instalación y configuración de centrales telefónicas (PBX)' },
      { id: 'pbx-mantenimiento', label: 'Mantenimiento de centrales telefónicas', note: 'Mensual' },
      { id: 'voip-configuracion', label: 'Configuración de sistema VoIP' },
      { id: 'cableado-estructurado', label: 'Cableado estructurado de voz', note: 'Por punto' },
      { id: 'instalacion-telefono-fijo', label: 'Instalación de teléfono fijo' },
      { id: 'reparacion-telefonia', label: 'Reparación de equipos de telefonía', note: 'Según diagnóstico' },
      { id: 'integracion-sistemas', label: 'Integración de sistemas de comunicación', note: 'Proyecto personalizado' },
      { id: 'configuracion-centralita', label: 'Configuración de centralita IP' },
      { id: 'extension-telefonica', label: 'Instalación de extensión telefónica', note: 'Por extensión' },
    ],
    title: 'Servicios de TELEFONÍA (Celular y Fija)',
  },
};

// --- FUNCIONES AUXILIARES ---
export function getServiceById(id: ServiceId): Servicio {
  return subServicesContent[id];
}

export function validateUniqueIds(): boolean {
  return Object.values(subServicesContent).every(service => {
    const ids = service.items.map(item => item.id);
    return ids.length === new Set(ids).size;
  });
}

// --- VALIDACIÓN SOLO EN DESARROLLO ---
if (process.env.NODE_ENV === 'development') {
  if (!validateUniqueIds()) {
    console.warn('⚠️ Advertencia: Se encontraron IDs duplicados en los servicios');
  }
}
