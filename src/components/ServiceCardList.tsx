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
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
      initial="hidden"
      variants={containerVariants}
    >
      {items.map(it => (
        <motion.div
          key={it.id}
          className="group flex justify-between items-center p-4 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl shadow-lg hover:border-tecnovita hover:shadow-tecnovita/20 transition-all duration-300"
          variants={itemVariants}
          whileHover={{ y: -3, boxShadow: '0px 10px 30px rgba(59, 130, 246, 0.3)' }}
        >
          <div className="flex-1 pr-2">
            <div className="text-white font-semibold text-sm sm:text-base group-hover:text-tecnovita transition-colors">
              {it.label}
            </div>
            {it.note && <div className="text-xs text-gray-400 mt-0.5 italic">{it.note}</div>}
          </div>

          <div className="flex items-center">
            <a
              className="px-4 py-2 text-xs font-bold bg-[#25D366] text-white rounded-lg hover:bg-[#128C7E] transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
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
