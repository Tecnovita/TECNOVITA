// === Updated: C:\01-TECNOVITA\tecnovita1\src\components\ServiceCardList.tsx ===
// Changes:
// - Toned down WhatsApp button background: Changed from intense #25D366 to a more subdued bg-green-600 (darker, less vibrant green) for better visibility and less intensity on dark backgrounds.
// - Adjusted hover to bg-green-700 (consistent darker variant).
// - Added subtle opacity layer with bg-green-600/90 on hover for premium depth without overwhelming the design.
// - No other changes; maintains readability and modern feel across all service detail pages.

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
      className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full"
      initial="hidden"
      variants={containerVariants}
    >
      {items.map(it => (
        <motion.div
          key={it.id}
          className="group flex justify-between items-center p-3 bg-white/[0.03] backdrop-blur-md border border-blue-500/50 rounded-xl shadow-lg hover:border-blue-400 hover:shadow-blue-500/30 hover:bg-white/[0.07] transition-all duration-300"
          variants={itemVariants}
          whileHover={{ y: -3 }}
        >
          <div className="flex-1 pr-2">
            <div className="text-white font-semibold text-xs sm:text-sm group-hover:text-blue-400 transition-colors">
              {it.label}
            </div>
            {it.note && <div className="text-xs text-gray-400 mt-0.5 italic">{it.note}</div>}
          </div>

          <div className="flex items-center">
            <a
              className="px-3 py-1.5 text-xs font-bold bg-green-600 text-white rounded-lg hover:bg-green-700/90 hover-neon-glow transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
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
