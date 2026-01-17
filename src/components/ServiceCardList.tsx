// === Updated: C:\01-TECNOVITA\tecnovita1\src\components\ServiceCardList.tsx ===
'use client';
import { motion } from 'framer-motion';

type ServiceItem = {
  id: string;
  label: string;
  note?: string;
  whatsappUrl: string;
};

interface Props {
  items: ServiceItem[];
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ServiceCardList({ items }: Props) {
  return (
    <motion.div
      animate="show"
      className="flex flex-wrap gap-3 w-full"
      initial="hidden"
      variants={containerVariants}
    >
      {items.map(it => (
        <motion.div
          key={it.id}
          className="group flex justify-between items-center p-3 bg-white/[0.03] backdrop-blur-md border border-blue-500/40 rounded-xl shadow-lg hover:border-blue-400 hover:shadow-blue-500/30 hover:bg-white/[0.07] transition-all duration-300 w-full sm:w-[calc(50%-0.375rem)] lg:w-[calc(33.333%-0.5rem)]"
          variants={itemVariants}
          whileHover={{ y: -2 }}
        >
          <div className="flex-1 pr-2 overflow-hidden">
            {/* LABEL - Tamaño de fuente principal */}
            <div className="text-white font-semibold text-xs sm:text-sm md:text-base leading-snug group-hover:text-blue-400 transition-colors line-clamp-3">
              {it.label}
            </div>
            {/* NOTE - Tamaño de fuente secundaria */}
            {it.note && (
              <div className="text-[10px] sm:text-xs text-gray-400 mt-1 italic line-clamp-2">
                {it.note}
              </div>
            )}
          </div>

          <div className="flex items-center">
            {/* BOTÓN WHATSAPP - Tamaño de fuente del botón */}
            <a
              className="px-2 py-1 text-[10px] sm:text-xs font-bold bg-green-600 text-white rounded-lg hover:bg-green-700/90 transition-all duration-200 shadow-md active:scale-95"
              href={it.whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
