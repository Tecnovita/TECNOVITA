// src/data/serviciosInformatica.ts

export type SubServicio = {
  nombre: string;
  descripcion: string; // Opcional: si quieres añadir descripciones más detalladas por sub-servicio
};

export type CategoriaServicio = {
  id: string; // ID único para el ancla o referencia
  nombre: string;
  subServicios: SubServicio[];
};

export const serviciosInformatica: CategoriaServicio[] = [
  {
    id: 'mantenimiento-reparacion',
    nombre: 'Mantenimiento y Reparación',
    subServicios: [
      { nombre: 'Diagnóstico y reparación de PCs y notebooks.', descripcion: '' },
      { nombre: 'Limpieza interna y cambio de pasta térmica.', descripcion: '' },
      { nombre: 'Sustitución de piezas (discos, memorias, fuentes, etc.).', descripcion: '' },
      { nombre: 'Recuperación de equipos lentos (optimización del sistema).', descripcion: '' },
      { nombre: 'Reinstalación de sistemas operativos (Windows, Linux, etc.).', descripcion: '' },
    ],
  },
  {
    id: 'configuracion-hardware-software',
    nombre: 'Configuración de Hardware y Software',
    subServicios: [
      { nombre: 'Instalación y actualización de software.', descripcion: '' },
      { nombre: 'Configuración de impresoras, scanners y periféricos.', descripcion: '' },
      { nombre: 'Armado de PCs a medida.', descripcion: '' },
      { nombre: 'Instalación de drivers y controladores.', descripcion: '' },
      { nombre: 'Configuración de redes cableadas e inalámbricas.', descripcion: '' },
    ],
  },
  {
    id: 'seguridad-informatica',
    nombre: 'Seguridad Informática',
    subServicios: [
      { nombre: 'Eliminación de virus, spyware y malware.', descripcion: '' },
      { nombre: 'Instalación y configuración de antivirus y firewalls.', descripcion: '' },
      { nombre: 'Respaldo y restauración de datos.', descripcion: '' },
      { nombre: 'Cifrado y protección de información.', descripcion: '' },
    ],
  },
  {
    id: 'servicios-en-la-nube',
    nombre: 'Servicios en la Nube',
    subServicios: [
      { nombre: 'Configuración de cuentas en Google Drive, OneDrive, Dropbox, etc.', descripcion: '' },
      { nombre: 'Migración de datos a la nube.', descripcion: '' },
      { nombre: 'Configuración de correos electrónicos profesionales (Gmail, Outlook, etc.).', descripcion: '' },
    ],
  },
  {
    id: 'redes-conectividad',
    nombre: 'Redes y Conectividad',
    subServicios: [
      { nombre: 'Configuración de routers, switches y puntos de acceso Wi-Fi.', descripcion: '' },
      { nombre: 'Ampliación de cobertura de red.', descripcion: '' },
      { nombre: 'Diagnóstico de problemas de conectividad.', descripcion: '' },
      { nombre: 'Montaje de redes domésticas y empresariales.', descripcion: '' },
    ],
  },
  {
    id: 'soporte-remoto',
    nombre: 'Soporte Remoto',
    subServicios: [
      { nombre: 'Asistencia vía escritorio remoto (TeamViewer, AnyDesk, etc.).', descripcion: '' },
      { nombre: 'Diagnóstico y reparación de fallas de software sin traslado.', descripcion: '' },
      { nombre: 'Actualizaciones y configuraciones online.', descripcion: '' },
    ],
  },
  {
    id: 'recuperacion-datos',
    nombre: 'Recuperación de Datos',
    subServicios: [
      { nombre: 'Recuperación de archivos borrados.', descripcion: '' },
      { nombre: 'Clonado de discos duros.', descripcion: '' },
      { nombre: 'Migración de datos entre dispositivos.', descripcion: '' },
    ],
  },
  {
    id: 'asesoramiento-consultoria',
    nombre: 'Asesoramiento y Consultoría',
    subServicios: [
      { nombre: 'Compra de hardware y software según necesidades.', descripcion: '' },
      { nombre: 'Optimización de equipos para empresas y hogares.', descripcion: '' },
      { nombre: 'Capacitación en el uso de sistemas operativos y programas.', descripcion: '' },
    ],
  },
];