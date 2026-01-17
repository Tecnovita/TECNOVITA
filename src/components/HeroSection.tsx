'use client';

import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <div className="relative z-10 text-center mb-6 w-full">
      {/* Logo Extra Pequeño */}
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className="mb-2 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        {/* Tamaño compacto: 64px en móvil / 80px en escritorio */}
        <div className="relative w-16 h-16 md:w-20 md:h-20 group cursor-pointer">
          <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full transition-all duration-300 group-hover:bg-blue-500/40" />
          <Image
            priority
            alt="Logo TECNOVITA"
            className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-300 group-hover:scale-105"
            height={80}
            src="/logo-t.svg"
            width={80}
          />
        </div>
      </motion.div>

      {/* Ubicación Compacta */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center mb-2"
        initial={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="inline-flex items-center gap-2 bg-blue-600/10 backdrop-blur-sm border border-blue-500/15 rounded-lg px-3 py-1.5">
          <FaMapMarkerAlt className="text-blue-400 text-sm" />
          <span className="text-white font-bold text-xs tracking-wider uppercase">
            Santa Rosa - Toay
          </span>
        </div>
      </motion.div>

      {/* Títulos Minimalistas */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Reducido a 2xl en móvil y 4xl en escritorio */}
        <h1 className="font-black text-blue-500 text-2xl md:text-4xl uppercase italic mb-1 tracking-tighter">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-500 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em]">
            {subtitle}
          </p>
        )}
        {/* Línea decorativa minimalista */}
        <div className="mx-auto w-12 h-0.5 bg-blue-600/80 rounded-full mt-2" />
      </motion.div>
    </div>
  );
}
