// src/app/contacto/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicioInteresado: '',
    mensaje: '',
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'submitting'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const servicesOptions = [
    'Informática',
    'Electricidad',
    'Telefonía',
    'Radiocomunicaciones',
    'Consulta General',
  ];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es requerido.';
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido.';
    }
    if (!formData.mensaje.trim()) newErrors.mensaje = 'El mensaje es requerido.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus('error');
      return;
    }
    setStatus('submitting');
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        setStatus('error');
        return;
      }
      setStatus('success');
      setFormData({ nombre: '', email: '', telefono: '', servicioInteresado: '', mensaje: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="relative flex flex-col items-center py-4 px-4 bg-[#050506] text-white overflow-x-hidden">
      {/* Fondo del planeta */}
      <div className="absolute top-0 left-0 w-full h-[600px] opacity-70 pointer-events-none">
        <Image
          fill
          priority
          alt="Tecnovita Background"
          className="object-cover saturate-150 brightness-110"
          src="/imagenes/Inicio/fondo-planeta.avif"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050506]" />
      </div>

      <div className="max-w-7xl w-full relative z-10">
        {/* Cabecera Unificada */}
        <HeroSection subtitle="Solicitá un presupuesto o realizá tu consulta" title="Contactanos" />

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0a0a0c]/80 backdrop-blur-xl rounded-[2.5rem] p-4 sm:p-6 md:p-8 border border-white/5 shadow-2xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ========== COLUMNA 1: FORMULARIO ========== */}
            <div className="space-y-6">
              <h2 className="text-xs uppercase tracking-[0.3em] text-blue-400 font-black mb-6 flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-3" /> Enviar Mensaje
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  className={`w-full px-5 py-3 rounded-2xl border bg-white/[0.03] text-sm text-white placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all ${errors.nombre ? 'border-red-500' : 'border-white/10'}`}
                  name="nombre"
                  placeholder="Nombre completo"
                  type="text"
                  value={formData.nombre}
                  onChange={handleChange}
                />
                <input
                  className={`w-full px-5 py-3 rounded-2xl border bg-white/[0.03] text-sm text-white placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all ${errors.email ? 'border-red-500' : 'border-white/10'}`}
                  name="email"
                  placeholder="Correo electrónico"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    className="w-full px-5 py-3 rounded-2xl border bg-white/[0.03] text-sm text-white border-white/10 outline-none focus:ring-2 focus:ring-blue-500/50"
                    name="telefono"
                    placeholder="Teléfono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                  <select
                    className="w-full px-5 py-3 rounded-2xl border bg-white/[0.03] text-sm text-white border-white/10 outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none"
                    name="servicioInteresado"
                    value={formData.servicioInteresado}
                    onChange={handleChange}
                  >
                    <option className="bg-black" value="">
                      ¿Qué necesitás?
                    </option>
                    {servicesOptions.map((s, i) => (
                      <option key={i} className="bg-black" value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <textarea
                  className={`w-full px-5 py-3 rounded-2xl border bg-white/[0.03] text-sm text-white placeholder:text-gray-500 h-32 outline-none focus:ring-2 focus:ring-blue-500/50 resize-none transition-all ${errors.mensaje ? 'border-red-500' : 'border-white/10'}`}
                  name="mensaje"
                  placeholder="Escribí tu consulta aquí..."
                  value={formData.mensaje}
                  onChange={handleChange}
                />
                <button
                  className="w-full py-4 rounded-2xl text-white font-black bg-blue-600 hover:bg-blue-500 transition-all text-xs uppercase tracking-widest shadow-lg shadow-blue-600/20 active:scale-95 disabled:opacity-50"
                  disabled={status === 'submitting'}
                  type="submit"
                >
                  {status === 'submitting' ? 'Enviando...' : 'Enviar Consulta'}
                </button>
                {status === 'success' && (
                  <p className="text-green-400 text-xs text-center font-bold uppercase mt-4 animate-pulse">
                    ¡Tu mensaje fue enviado con éxito!
                  </p>
                )}
              </form>
            </div>

            {/* ========== COLUMNA 2: INFO Y REDES ========== */}
            <div className="space-y-10">
              <div>
                <h2 className="text-xs uppercase tracking-[0.3em] text-blue-400 font-black mb-6 flex items-center">
                  <PhoneIcon className="h-5 w-5 mr-3" /> Atención
                </h2>
                <div className="space-y-3">
                  <a
                    className="flex items-center p-4 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-blue-500/40 transition-all group"
                    href="https://wa.me/542954294429"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="p-2 bg-blue-500/10 rounded-lg mr-4 group-hover:bg-blue-500/20">
                      <PhoneIcon className="h-5 w-5 text-blue-500" />
                    </div>
                    <span className="text-sm font-bold text-gray-300">+54 9 2954 294429</span>
                  </a>
                  <a
                    className="flex items-center p-4 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-blue-500/40 transition-all group"
                    href="mailto:info@tecnovita.com.ar"
                  >
                    <div className="p-2 bg-blue-500/10 rounded-lg mr-4 group-hover:bg-blue-500/20">
                      <EnvelopeIcon className="h-5 w-5 text-blue-500" />
                    </div>
                    <span className="text-sm font-bold text-gray-300">info@tecnovita.com.ar</span>
                  </a>
                  {/* DIRECCIÓN CLICABLE */}
                  <a
                    className="flex items-center p-4 bg-white/[0.03] rounded-2xl border border-white/5 hover:border-blue-500/40 transition-all group"
                    href="https://www.google.com/maps/search/?api=1&query=Catrilo+1648+Santa+Rosa+La+Pampa"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <div className="p-2 bg-blue-500/10 rounded-lg mr-4 group-hover:bg-blue-500/20">
                      <MapPinIcon className="h-5 w-5 text-blue-500" />
                    </div>
                    <span className="text-sm font-bold text-gray-300">
                      Catriló 1648, Santa Rosa
                    </span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-[10px] uppercase text-gray-500 tracking-[0.3em] font-black mb-4">
                  Seguinos
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    className="flex items-center p-3 bg-white/[0.02] rounded-xl border border-white/5 hover:bg-pink-500/10 hover:border-pink-500/30 transition-all"
                    href="https://instagram.com/tecnovita.com.ar"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaInstagram className="h-5 w-5 text-pink-500 mr-3" />
                    <span className="text-[10px] font-black uppercase tracking-tighter">
                      Instagram
                    </span>
                  </a>
                  <a
                    className="flex items-center p-3 bg-white/[0.02] rounded-xl border border-white/5 hover:bg-blue-600/10 hover:border-blue-600/30 transition-all"
                    href="https://facebook.com/profile.php?id=61578156026887"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaFacebookF className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-[10px] font-black uppercase tracking-tighter">
                      Facebook
                    </span>
                  </a>
                  <a
                    className="flex items-center p-3 bg-white/[0.02] rounded-xl border border-white/5 hover:bg-white/10 hover:border-white/30 transition-all"
                    href="https://tiktok.com/@tecnovita.com.ar"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaTiktok className="h-5 w-5 text-white mr-3" />
                    <span className="text-[10px] font-black uppercase tracking-tighter">
                      TikTok
                    </span>
                  </a>
                  <a
                    className="flex items-center p-3 bg-white/[0.02] rounded-xl border border-white/5 hover:bg-green-500/10 hover:border-green-500/30 transition-all"
                    href="https://wa.me/542954294429"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaWhatsapp className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-[10px] font-black uppercase tracking-tighter">
                      WhatsApp
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* ========== COLUMNA 3: HORARIOS Y MAPA ========== */}
            <div className="space-y-6">
              <h2 className="text-xs uppercase tracking-[0.3em] text-blue-400 font-black mb-6 flex items-center">
                <ClockIcon className="h-5 w-5 mr-3" /> Disponibilidad
              </h2>
              <div className="p-6 bg-blue-600/5 rounded-[2rem] border border-blue-500/10">
                <div className="space-y-4 font-bold italic">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-xs text-gray-400 uppercase">Lunes a Viernes</span>
                    <span className="text-blue-400 text-sm">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400 uppercase">Sábados</span>
                    <span className="text-blue-400 text-sm">09:00 - 13:00</span>
                  </div>
                </div>
              </div>

              {/* MAPA VISUAL CORREGIDO */}
              <div className="w-full h-48 rounded-[2rem] overflow-hidden border border-white/5 grayscale hover:grayscale-0 transition-all duration-700 shadow-inner">
                <iframe
                  className="opacity-60 hover:opacity-100 transition-opacity"
                  height="100%"
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.264426532408!2d-64.2882855!3d-36.6190731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c2cd174898f62f%3A0xc3f920875e549f4c!2sCatril%C3%B3%201648%2C%20L6300%20Santa%20Rosa%2C%20La%20Pampa!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar"
                  style={{ border: 0 }}
                  width="100%"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
