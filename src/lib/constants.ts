// src/lib/constants.ts
import { FaLaptopCode, FaPhoneAlt, FaBolt } from 'react-icons/fa';

export const COMPANY_NAME = 'TECNOVITA';

export const SERVICES_DATA = [
  {
    bgGradient: 'from-blue-500 to-cyan-500',
    description: 'Soporte técnico integral: reparación de hardware, optimización de sistemas operativos, limpieza de virus y configuración de redes locales para un rendimiento máximo.',
    features: ['Reparación de PC y Notebooks', 'Instalación de Software', 'Seguridad Informática'],
    href: '/servicios/informatica',
    icon: FaLaptopCode,
    id: 'informatica',
    title: 'Informática'
  },
  {
    bgGradient: 'from-green-500 to-emerald-500',
    description: 'Expertos en comunicación: reparación de dispositivos móviles, instalación de centrales telefónicas PBX y soluciones avanzadas de telefonía IP (VoIP) para empresas.',
    features: ['Servicio Técnico Celular', 'Centrales Telefónicas', 'Configuración VoIP'],
    href: '/servicios/telefonia',
    icon: FaPhoneAlt,
    id: 'telefonia',
    title: 'Telefonía'
  },
  {
    bgGradient: 'from-orange-500 to-red-500',
    description: 'Instalaciones eléctricas seguras siguiendo normativas vigentes. Mantenimiento preventivo, tableros eléctricos, iluminación LED y soluciones de ahorro energético.',
    features: ['Instalaciones Eléctricas', 'Mantenimiento de Tableros', 'Iluminación de Bajo Consumo'],
    href: '/servicios/electricidad',
    icon: FaBolt,
    id: 'electricidad',
    title: 'Electricidad'
  }
];