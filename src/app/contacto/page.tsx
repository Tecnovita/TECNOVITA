// === C:\01-TECNOVITA\tecnovita1\src\app\contacto\page.tsx ===

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
    'Telecomunicaciones',
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
    <main className="relative flex flex-col items-center py-4 px-4 bg-[#050506] text-white">
      <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full relative z-10">
        {/* Logo con efecto hover mejorado */}
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="mb-4 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-20 h-20 md:w-28 md:h-28 group cursor-pointer">
            <div
              className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full 
                            transition-all duration-300 
                            group-hover:bg-blue-500/50 group-hover:blur-2xl"
            />
            <Image
              priority
              alt="Logo T"
              className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]
                         transition-all duration-300 
                         group-hover:drop-shadow-[0_0_40px_rgba(59,130,246,1)]
                         group-hover:brightness-125 
                         group-hover:scale-110"
              height={120}
              src="/logo-t.svg"
              width={120}
            />
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-3 bg-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl px-6 py-3">
            <FaMapMarkerAlt className="text-blue-400 text-xl" />
            <span className="text-white font-bold text-lg tracking-wide">SANTA ROSA - TOAY</span>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-hero text-blue-500 uppercase italic mb-3">Contactanos</h1>
          <p className="text-subtitle text-gray-400">
            Solicitá un presupuesto o realizá tu consulta
          </p>
          <div className="mx-auto w-20 h-1 bg-blue-600 rounded-full mt-4" />
        </motion.div>

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#0a0a0c]/80 backdrop-blur-xl rounded-[2.5rem] p-6 sm:p-8 border border-white/5 shadow-2xl mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ========== COLUMNA 1: FORMULARIO ========== */}
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-widest text-blue-400 font-black mb-4 flex items-center">
                <EnvelopeIcon className="h-4 w-4 mr-2" /> Formulario
              </h2>
              <form className="space-y-3" onSubmit={handleSubmit}>
                <input
                  className={`w-full px-4 py-2.5 rounded-xl border bg-white/[0.03] text-xs text-white placeholder:text-gray-500 focus:ring-1 focus:ring-blue-500 transition-all ${errors.nombre ? 'border-red-500' : 'border-white/10'}`}
                  name="nombre"
                  placeholder="Nombre completo"
                  type="text"
                  value={formData.nombre}
                  onChange={handleChange}
                />
                <input
                  className={`w-full px-4 py-2.5 rounded-xl border bg-white/[0.03] text-xs text-white placeholder:text-gray-500 focus:ring-1 focus:ring-blue-500 transition-all ${errors.email ? 'border-red-500' : 'border-white/10'}`}
                  name="email"
                  placeholder="tu@email.com"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="grid grid-cols-2 gap-2">
                  <input
                    className="w-full px-4 py-2.5 rounded-xl border bg-white/[0.03] text-xs text-white border-white/10"
                    name="telefono"
                    placeholder="Teléfono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                  <select
                    className="w-full px-4 py-2.5 rounded-xl border bg-white/[0.03] text-xs text-white border-white/10"
                    name="servicioInteresado"
                    value={formData.servicioInteresado}
                    onChange={handleChange}
                  >
                    <option value="">Servicio</option>
                    {servicesOptions.map((s, i) => (
                      <option key={i} className="bg-black" value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <textarea
                  className={`w-full px-4 py-2.5 rounded-xl border bg-white/[0.03] text-xs text-white placeholder:text-gray-500 h-24 transition-all ${errors.mensaje ? 'border-red-500' : 'border-white/10'}`}
                  name="mensaje"
                  placeholder="Tu consulta..."
                  value={formData.mensaje}
                  onChange={handleChange}
                />
                <button
                  className="w-full py-3 rounded-xl text-white font-black bg-blue-600 hover:bg-blue-500 transition-all text-[10px] uppercase tracking-widest"
                  disabled={status === 'submitting'}
                  type="submit"
                >
                  {status === 'submitting' ? 'Enviando...' : 'Enviar Consulta'}
                </button>
                {status === 'success' && (
                  <p className="text-green-500 text-[10px] text-center font-bold uppercase mt-2">
                    ¡Mensaje enviado!
                  </p>
                )}
              </form>
            </div>

            {/* ========== COLUMNA 2: CONTACTO HASTA REDES ========== */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xs uppercase tracking-widest text-blue-400 font-black mb-4 flex items-center">
                  <PhoneIcon className="h-4 w-4 mr-2" /> Contacto Directo
                </h2>
                <div className="space-y-2">
                  <a
                    className="flex items-center p-3 bg-white/[0.03] rounded-xl border border-white/10 hover:border-blue-500/50 transition-all"
                    href="https://wa.me/542954294429"
                    target="_blank"
                  >
                    <PhoneIcon className="h-4 w-4 text-blue-500 mr-3" />
                    <span className="text-xs font-bold text-gray-300">+54 9 2954 294429</span>
                  </a>
                  <a
                    className="flex items-center p-3 bg-white/[0.03] rounded-xl border border-white/10 hover:border-blue-500/50 transition-all"
                    href="mailto:info@tecnovita.com"
                  >
                    <EnvelopeIcon className="h-4 w-4 text-blue-500 mr-3" />
                    <span className="text-xs font-bold text-gray-300">info@tecnovita.com</span>
                  </a>
                  <a
                    className="flex items-center p-3 bg-white/[0.03] rounded-xl border border-white/10 hover:border-blue-500/50 transition-all cursor-pointer"
                    href="https://www.google.com/maps?q=Catriló%201648"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <MapPinIcon className="h-4 w-4 text-blue-500 mr-3" />
                    <span className="text-xs font-bold text-gray-300">
                      Catriló 1648, Santa Rosa
                    </span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-[10px] uppercase text-gray-500 tracking-[0.2em] font-black mb-3">
                  Redes Sociales
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    className="flex items-center p-2.5 bg-white/[0.03] rounded-lg border border-white/5 hover:border-pink-500/50 transition-all"
                    href="https://instagram.com/tecnovita.com.ar"
                    target="_blank"
                  >
                    <FaInstagram className="h-4 w-4 text-pink-500 mr-2" />
                    <span className="text-[9px] font-black uppercase">Instagram</span>
                  </a>
                  <a
                    className="flex items-center p-2.5 bg-white/[0.03] rounded-lg border border-white/5 hover:border-blue-500/50 transition-all"
                    href="https://facebook.com/profile.php?id=61578156026887"
                    target="_blank"
                  >
                    <FaFacebookF className="h-4 w-4 text-blue-500 mr-2" />
                    <span className="text-[9px] font-black uppercase">Facebook</span>
                  </a>
                  <a
                    className="flex items-center p-2.5 bg-white/[0.03] rounded-lg border border-white/5 hover:border-green-500/50 transition-all"
                    href="https://wa.me/542954294429"
                    target="_blank"
                  >
                    <FaWhatsapp className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-[9px] font-black uppercase">WhatsApp</span>
                  </a>
                  <a
                    className="flex items-center p-2.5 bg-white/[0.03] rounded-lg border border-white/5 hover:border-white/50 transition-all"
                    href="https://tiktok.com/@tecnovita.com.ar"
                    target="_blank"
                  >
                    <FaTiktok className="h-4 w-4 text-white mr-2" />
                    <span className="text-[9px] font-black uppercase">TikTok</span>
                  </a>
                </div>
              </div>
            </div>

            {/* ========== COLUMNA 3: DESDE HORARIOS ========== */}
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-widest text-blue-400 font-black mb-4 flex items-center">
                <ClockIcon className="h-4 w-4 mr-2" /> Horarios
              </h2>
              <div className="p-4 bg-blue-600/5 rounded-xl border border-blue-500/20 text-[11px]">
                <div className="space-y-2 font-bold italic">
                  <p className="flex justify-between text-gray-300">
                    <span>LUNES A VIERNES:</span>
                    <span className="text-blue-400">9:00 - 18:00</span>
                  </p>
                  <p className="flex justify-between text-gray-300">
                    <span>SÁBADOS:</span>
                    <span className="text-blue-400">9:00 - 13:00</span>
                  </p>
                </div>
              </div>

              <div className="w-full h-40 rounded-xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
                <iframe
                  height="100%"
                  loading="lazy"
                  src="https://www.google.com/maps?q=Catriló%201648,%20Santa%20Rosa,%20La%20Pampa&output=embed"
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
