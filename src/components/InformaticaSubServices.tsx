'use client';

import { motion } from 'framer-motion';

type ServiceItem = {
  id: string;
  label: string;
  note?: string;
  price?: string;
  whatsappUrl: string;
};

interface Props {
  items: ServiceItem[];
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05, // cada tarjeta aparece 50ms después
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
      className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full"
      initial="hidden"
      variants={containerVariants}
    >
      {items.map((it) => (
        <motion.div
          key={it.id}
          className="flex justify-between items-center p-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:bg-gray-50 transition"
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          variants={itemVariants}
          whileHover={{ y: -3, boxShadow: '0px 10px 20px rgba(0,0,0,0.08)' }}
        >
          {/* Nombre y nota */}
          <div className="flex-1">
            <div className="text-gray-800 font-medium text-sm sm:text-base">{it.label}</div>
            {it.note && <div className="text-xs text-gray-500 mt-0.5">{it.note}</div>}
          </div>

          {/* Precio y WhatsApp */}
          <div className="flex items-center gap-3 ml-4">
            <div className="text-right">
              {it.price ? (
                <div className="text-sm font-semibold text-green-600">{it.price}</div>
              ) : (
                <div className="text-xs text-gray-600">Precio a consultar</div>
              )}
            </div>

            <a
              className="px-3 py-1.5 text-xs font-semibold bg-green-600 text-white rounded-md hover:bg-green-700 transition"
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
