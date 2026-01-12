// === C:\01-TECNOVITA\tecnovita1\src\app\contacto\page.tsx ===

'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  UserIcon,
  AtSymbolIcon,
  ChatBubbleBottomCenterTextIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
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

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
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
        console.error('Error al enviar', await response.text());
        setStatus('error');
        return;
      }

      setStatus('success');

      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        servicioInteresado: '',
        mensaje: '',
      });
    } catch (err) {
      console.error('Error de conexión o servidor:', err);
      setStatus('error');
    }
  };

  return (
    <main className="relative flex flex-col items-center justify-center py-12 px-4 bg-[#050506] min-h-screen text-white overflow-hidden">
      {/* Luces ambientales de fondo */}
      <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full relative z-10">
        {/* Logo T */}
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-20 h-20 md:w-28 md:h-28">
            <div className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full" />
            <Image
              priority
              alt="Logo T"
              className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]"
              height={120}
              src="/logo-t.svg"
              width={120}
            />
          </div>
        </motion.div>

        {/* Título principal con animación */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-hero text-blue-500 uppercase italic mb-3">Contactanos</h1>
          <p className="text-subtitle text-gray-400">
            Solicitá un presupuesto o realizá tu consulta
          </p>
          <div className="mx-auto w-20 h-1 bg-blue-600 rounded-full mt-4" />
        </motion.div>

        {/* Contenedor principal con glassmorphism */}
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#0a0a0c]/80 backdrop-blur-xl rounded-[2.5rem] p-6 sm:p-8 lg:p-10 border border-white/5 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* ========== FORMULARIO ========== */}
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className="space-y-5"
              initial={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-card-title uppercase tracking-wide text-blue-400 mb-5 flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-3" />
                Formulario de Contacto
              </h2>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Nombre */}
                <div>
                  <label className="text-label text-gray-400 flex items-center mb-2">
                    <UserIcon className="h-4 w-4 mr-2 text-blue-500" />
                    Nombre
                  </label>
                  <input
                    className={`w-full px-4 py-3 rounded-xl border bg-white/[0.03] backdrop-blur-md text-white placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 focus:bg-white/[0.07] transition-all ${
                      errors.nombre ? 'border-red-500' : 'border-white/10'
                    }`}
                    name="nombre"
                    placeholder="Tu nombre completo"
                    type="text"
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                  {errors.nombre && (
                    <p className="text-red-500 text-xs mt-2 ml-1">{errors.nombre}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="text-label text-gray-400 flex items-center mb-2">
                    <AtSymbolIcon className="h-4 w-4 mr-2 text-blue-500" />
                    Email
                  </label>
                  <input
                    className={`w-full px-4 py-3 rounded-xl border bg-white/[0.03] backdrop-blur-md text-white placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 focus:bg-white/[0.07] transition-all ${
                      errors.email ? 'border-red-500' : 'border-white/10'
                    }`}
                    name="email"
                    placeholder="tu@email.com"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-2 ml-1">{errors.email}</p>}
                </div>

                {/* Grid 2 columnas para Teléfono y Servicio */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Teléfono */}
                  <div>
                    <label className="text-label text-gray-400 flex items-center mb-2">
                      <PhoneIcon className="h-4 w-4 mr-2 text-blue-500" />
                      Teléfono
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-xl border bg-white/[0.03] backdrop-blur-md text-white placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 focus:bg-white/[0.07] transition-all border-white/10"
                      name="telefono"
                      placeholder="+54 9 2954 294429"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Servicio */}
                  <div>
                    <label className="text-label text-gray-400 flex items-center mb-2">
                      <ChatBubbleBottomCenterTextIcon className="h-4 w-4 mr-2 text-blue-500" />
                      Servicio
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-xl border bg-white/[0.03] backdrop-blur-md text-white focus:ring-2 focus:ring-blue-500 focus:bg-white/[0.07] transition-all border-white/10"
                      name="servicioInteresado"
                      value={formData.servicioInteresado}
                      onChange={handleChange}
                    >
                      <option className="bg-[#0a0a0c] text-gray-400" value="">
                        Seleccioná
                      </option>
                      {servicesOptions.map((service, idx) => (
                        <option key={idx} className="bg-[#0a0a0c] text-white" value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="text-label text-gray-400 mb-2 block">Mensaje</label>
                  <textarea
                    className={`w-full px-4 py-3 rounded-xl border bg-white/[0.03] backdrop-blur-md text-white placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 focus:bg-white/[0.07] transition-all ${
                      errors.mensaje ? 'border-red-500' : 'border-white/10'
                    }`}
                    name="mensaje"
                    placeholder="Escribe tu consulta..."
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                  />
                  {errors.mensaje && (
                    <p className="text-red-500 text-xs mt-2 ml-1">{errors.mensaje}</p>
                  )}
                </div>

                {/* Estados */}
                {status === 'submitting' && (
                  <p className="text-blue-400 text-small text-center font-semibold">Enviando...</p>
                )}

                {status === 'success' && (
                  <p className="text-green-500 text-small text-center flex items-center justify-center font-semibold">
                    <CheckCircleIcon className="h-5 w-5 mr-2" />
                    ¡Tu mensaje fue enviado!
                  </p>
                )}

                {status === 'error' && (
                  <p className="text-red-500 text-small text-center flex items-center justify-center font-semibold">
                    <ExclamationCircleIcon className="h-5 w-5 mr-2" />
                    Ocurrió un error. Intenta nuevamente.
                  </p>
                )}

                {/* Botón */}
                <button
                  className="w-full px-6 py-3.5 rounded-xl text-white text-button bg-blue-600 hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={status === 'submitting'}
                  type="submit"
                >
                  {status === 'submitting' ? 'Enviando...' : 'Enviar Consulta'}
                </button>
              </form>
            </motion.div>

            {/* ========== CONTACTO + INFORMACIÓN ========== */}
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className="space-y-5"
              initial={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-card-title uppercase tracking-wide text-blue-400 flex items-center mb-5">
                <PhoneIcon className="h-5 w-5 mr-3" />
                Contacto Directo
              </h2>

              {/* Info Cards */}
              <div className="space-y-3">
                {/* Teléfono */}
                <a
                  className="flex items-center p-3.5 bg-white/[0.03] backdrop-blur-md rounded-xl border border-blue-500/50 hover:border-blue-400 hover:bg-white/[0.07] transition-all group shadow-lg hover:shadow-blue-500/30"
                  href="https://wa.me/542954294429?text=Hola,%20quisiera%20hacer%20una%20consulta."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <PhoneIcon className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-small font-semibold text-gray-300 group-hover:text-white transition-colors">
                    +54 9 2954 294429
                  </span>
                </a>

                {/* Email */}
                <a
                  className="flex items-center p-3.5 bg-white/[0.03] backdrop-blur-md rounded-xl border border-blue-500/50 hover:border-blue-400 hover:bg-white/[0.07] transition-all group shadow-lg hover:shadow-blue-500/30"
                  href="mailto:info@tecnovita.com"
                >
                  <EnvelopeIcon className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-small font-semibold text-gray-300 group-hover:text-white transition-colors">
                    info@tecnovita.com
                  </span>
                </a>

                {/* Dirección */}
                <a
                  className="flex items-center p-3.5 bg-white/[0.03] backdrop-blur-md rounded-xl border border-blue-500/50 hover:border-blue-400 hover:bg-white/[0.07] transition-all group shadow-lg hover:shadow-blue-500/30"
                  href="https://www.google.com/maps/search/?api=1&query=Catriló+1648,+Santa+Rosa,+La+Pampa"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MapPinIcon className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-small font-semibold text-gray-300 group-hover:text-white transition-colors">
                    Catriló 1648, Santa Rosa, La Pampa
                  </span>
                </a>
              </div>

              {/* Redes sociales */}
              <div>
                <h3 className="text-label text-gray-400 mb-3">Redes Sociales</h3>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    className="flex items-center p-2.5 bg-white/[0.03] backdrop-blur-md rounded-xl border border-white/10 hover:border-green-500/50 hover:bg-white/[0.07] transition-all group"
                    href="https://wa.me/542954294429?text=Hola,%20quisiera%20hacer%20una%20consulta."
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaWhatsapp className="h-5 w-5 text-green-500 mr-2.5" />
                    <span className="text-small font-semibold text-gray-300 group-hover:text-white transition-colors">
                      WhatsApp
                    </span>
                  </a>

                  <a
                    className="flex items-center p-2.5 bg-white/[0.03] backdrop-blur-md rounded-xl border border-white/10 hover:border-pink-500/50 hover:bg-white/[0.07] transition-all group"
                    href="https://instagram.com/tecnovita.com.ar"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaInstagram className="h-5 w-5 text-pink-500 mr-2.5" />
                    <span className="text-small font-semibold text-gray-300 group-hover:text-white transition-colors">
                      Instagram
                    </span>
                  </a>

                  <a
                    className="flex items-center p-2.5 bg-white/[0.03] backdrop-blur-md rounded-xl border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.07] transition-all group"
                    href="https://facebook.com/profile.php?id=61578156026887"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaFacebookF className="h-5 w-5 text-blue-500 mr-2.5" />
                    <span className="text-small font-semibold text-gray-300 group-hover:text-white transition-colors">
                      Facebook
                    </span>
                  </a>

                  <a
                    className="flex items-center p-2.5 bg-white/[0.03] backdrop-blur-md rounded-xl border border-white/10 hover:border-gray-400/50 hover:bg-white/[0.07] transition-all group"
                    href="https://tiktok.com/@tecnovita.com.ar"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaTiktok className="h-5 w-5 text-white mr-2.5" />
                    <span className="text-small font-semibold text-gray-300 group-hover:text-white transition-colors">
                      TikTok
                    </span>
                  </a>
                </div>
              </div>

              {/* Horarios */}
              <div className="p-4 bg-white/[0.03] backdrop-blur-md rounded-xl border border-white/10">
                <h3 className="text-label text-gray-400 mb-3 flex items-center">
                  <ClockIcon className="h-5 w-5 mr-2.5 text-blue-500" />
                  Horarios de Atención
                </h3>
                <div className="space-y-1.5 text-small">
                  <p className="flex justify-between text-gray-300">
                    <span className="font-semibold">Lunes a Viernes:</span>
                    <span>9:00 - 18:00</span>
                  </p>
                  <p className="flex justify-between text-gray-300">
                    <span className="font-semibold">Sábados:</span>
                    <span>9:00 - 13:00</span>
                  </p>
                </div>
              </div>

              {/* Google Map */}
              <div className="w-full h-52 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                <iframe
                  height="100%"
                  loading="lazy"
                  src="https://www.google.com/maps?q=Catriló%201648,%20Santa%20Rosa,%20La%20Pampa&output=embed"
                  width="100%"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
