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
  bgGradient: string; // Controla el color en Home y Subpáginas
  icon: IconType; // Icono tipado correctamente (react-icons)
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
    title: 'Servicios de INFORMÁTICA',
    items: [
      {
        id: 'diagnostico-pc',
        label: 'Diagnóstico técnico de PC o notebook',
        note: 'Con presupuesto',
      },
      {
        id: 'instalacion-sistema',
        label: 'Instalación y configuración de Windows o Linux',
        note: 'Incluye drivers',
      },
      {
        id: 'formateo-backup',
        label: 'Formateo y reinstalación completa',
        note: 'Con respaldo de datos',
      },
      { id: 'instalacion-office', label: 'Instalación de Office (Word, Excel, etc.)' },
      { id: 'virus-malware', label: 'Eliminación de virus y malware' },
      { id: 'optimizacion-pc', label: 'Optimización de equipos lentos' },
      {
        id: 'mantenimiento-pc',
        label: 'Mantenimiento preventivo',
        note: 'Limpieza interna y pasta térmica',
      },
      {
        id: 'recuperacion-datos',
        label: 'Recuperación de archivos y datos',
        note: 'Según complejidad',
      },
      { id: 'instalacion-impresoras', label: 'Instalación y configuración de impresoras' },
      {
        id: 'redes-wifi',
        label: 'Instalación y configuración de redes Wi-Fi',
        note: 'Hogar y comercio',
      },
      { id: 'backup', label: 'Configuración de copias de seguridad (backup)' },
      { id: 'soporte-remoto', label: 'Soporte técnico remoto', note: 'Por hora' },
      {
        id: 'mantenimiento-empresas',
        label: 'Mantenimiento informático para empresas',
        note: 'Mensual',
      },
    ],
  },

  electricidad: {
    bgGradient: 'from-orange-500 to-red-500',
    icon: FaBolt,
    id: 'electricidad',
    title: 'Servicios de ELECTRICIDAD',
    items: [
      { id: 'diagnostico-electrico', label: 'Diagnóstico de instalaciones eléctricas' },
      {
        id: 'instalaciones-residenciales',
        label: 'Instalaciones eléctricas domiciliarias',
        note: 'Por punto',
      },
      {
        id: 'instalaciones-comerciales',
        label: 'Instalaciones eléctricas comerciales',
        note: 'Locales y oficinas',
      },
      { id: 'reparacion-cortos', label: 'Reparación de cortocircuitos y fallas' },
      { id: 'tablero-electrico', label: 'Instalación o recambio de tablero eléctrico' },
      { id: 'termicas-disyuntor', label: 'Instalación de térmicas y disyuntores' },
      { id: 'puesta-tierra', label: 'Instalación de puesta a tierra reglamentaria' },
      { id: 'luminarias-led', label: 'Instalación de luminarias LED', note: 'Interior y exterior' },
      { id: 'ventiladores', label: 'Instalación de ventiladores de techo' },
      { id: 'tomas-enchufes', label: 'Instalación de tomas y llaves', note: 'Por unidad' },
      { id: 'mantenimiento-electrico', label: 'Mantenimiento eléctrico preventivo' },
    ],
  },

  telefonia: {
    bgGradient: 'from-green-500 to-emerald-500',
    icon: FaPhoneAlt,
    id: 'telefonia',
    title: 'Servicios de TELEFONÍA Y CELULARES',
    items: [
      { id: 'diagnostico-celular', label: 'Diagnóstico de celulares', note: 'Sin cargo' },
      { id: 'cambio-bateria', label: 'Cambio de batería de celular' },
      { id: 'cambio-pantalla', label: 'Cambio de pantalla / módulo', note: 'Según modelo' },
      { id: 'pin-carga', label: 'Reparación de pin de carga' },
      { id: 'configuracion-celular', label: 'Configuración inicial de celular' },
      { id: 'transferencia-datos', label: 'Transferencia de datos y WhatsApp' },
      { id: 'actualizacion-sistema', label: 'Actualización y restauración de sistema' },
      { id: 'wifi-celular', label: 'Configuración de Wi-Fi y cuentas' },
      { id: 'pbx-basico', label: 'Instalación básica de central telefónica', note: 'PyMES' },
      { id: 'voip', label: 'Configuración de telefonía IP (VoIP)' },
    ],
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
