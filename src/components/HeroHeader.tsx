// src/components/HeroSection.tsx
'use client';

import Image from 'next/image';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion'; // ESTA LÍNEA ES IMPRESCINDIBLE AQUÍ

interface HeroSectionProps {
  title: string;
  subtitle?: string;
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <div className="relative z-10 text-center mb-8">
      {/* Logo T grande */}
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        className="mb-4 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-28 h-28 md:w-36 md:h-36 group cursor-pointer">
          <div className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full transition-all duration-300 group-hover:bg-blue-500/50 group-hover:blur-2xl" />
          <Image
            priority
            alt="Logo TECNOVITA"
            className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all duration-300 group-hover:drop-shadow-[0_0_40px_rgba(59,130,246,1)] group-hover:brightness-125 group-hover:scale-110"
            height={144}
            src="/logo-t.svg"
            width={144}
          />
        </div>
      </motion.div>

      {/* Ubicación */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="inline-flex items-center gap-3 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl px-6 py-3">
          <FaMapMarkerAlt className="text-blue-400 text-xl" />
          <span className="text-white font-bold text-lg tracking-wide uppercase">
            Santa Rosa - Toay
          </span>
        </div>
      </motion.div>

      {/* Título principal unificado */}
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="font-black text-blue-500 text-4xl md:text-6xl uppercase italic mb-3 tracking-tighter">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-400 font-medium text-sm md:text-base uppercase tracking-widest">
            {subtitle}
          </p>
        )}
        <div className="mx-auto w-20 h-1 bg-blue-600 rounded-full mt-4" />
      </motion.div>
    </div>
  );
}
