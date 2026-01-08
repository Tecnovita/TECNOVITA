// 'use client': Indica que este componente se ejecuta en el cliente.
'use client';

// Importa motion de framer-motion para animaciones.
import { motion } from 'framer-motion';

// Define el tipo para cada ítem de servicio.
type ServiceItem = {
  id: string;                 // ID único del ítem
  label: string;              // Nombre/descripción del ítem
  note?: string | undefined;  // Nota opcional
  // ❌ price ha sido eliminado
  whatsappUrl: string;        // URL predefinida para contactar por WhatsApp
};

// Define las props que recibe el componente ServiceCardList.
interface Props {
  items: ServiceItem[]; // Array de objetos ServiceItem
}

// Define las variantes de animación para el contenedor de la lista.
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.04, // Animación más rápida
    },
  },
};

// Define las variantes de animación para cada ítem de la lista.
const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

// Componente principal ServiceCardList
export default function ServiceCardList({ items }: Props) {
  return (
    <motion.div
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full"
      initial="hidden"
      variants={containerVariants}
    >
      {items.map((it) => ( // ❌ Eliminado index, no se usa
        <motion.div
          key={it.id}
          className="group relative flex justify-between items-center p-3.5 bg-gradient-to-br from-white to-gray-50/80 border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300"
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          variants={itemVariants}
          whileHover={{ y: -2 }}
        >
          {/* ❌ SE ELIMINA LA NUMERACIÓN, YA NO ES NECESARIA */}
          {/* <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md">
            {index + 1}
          </div> */}

          {/* Sección izquierda: Nombre y nota */}
          <div className="flex-1 pr-3">
            <div className="text-gray-800 font-semibold text-sm group-hover:text-blue-600 transition-colors">
              {it.label}
            </div>
            {it.note && (
              <div className="text-xs text-gray-500 mt-0.5 italic">{it.note}</div>
            )}
          </div>

          {/* Sección derecha: WhatsApp */}
          <div className="flex flex-col items-end gap-2">
            {/* ❌ SE ELIMINA EL DIV DEL PRECIO */}
            {/* <div className="text-right">
              <div className="text-xs text-blue-600 font-semibold whitespace-nowrap">
                A consultar
              </div>
            </div> */}

            {/* Enlace de WhatsApp */}
            <a
              aria-label={`Consultar sobre ${it.label} por WhatsApp`}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#25D366] text-white rounded-md hover:bg-[#20BA5A] transition-all duration-200 hover:scale-105 shadow-sm"
              href={it.whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}