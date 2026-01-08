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
          className="group flex justify-between items-center p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-blue-200 transition-all duration-300"
          variants={itemVariants}
          whileHover={{ y: -3, boxShadow: '0px 10px 25px rgba(0,0,0,0.05)' }}
        >
          <div className="flex-1 pr-2">
            <div className="text-gray-800 font-semibold text-sm sm:text-base group-hover:text-blue-600 transition-colors">
              {it.label}
            </div>
            {it.note && <div className="text-xs text-gray-500 mt-0.5 italic">{it.note}</div>}
          </div>

          <div className="flex items-center">
            <a
              className="px-4 py-2 text-xs font-bold bg-[#25D366] text-white rounded-lg hover:bg-[#128C7E] transition-all duration-200 shadow-sm active:scale-95"
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
