'use client';

import { useState } from 'react';
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

  const servicesOptions = ['Informática', 'Electricidad', 'Telefonía', 'Consulta General'];

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
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
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
    <main className="flex flex-col items-center justify-center py-12 px-4 bg-gradient-to-br from-gray-50 to-blue-50/30 min-h-screen">
      <div className="max-w-6xl w-full bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl border border-blue-100">
        {/* Título principal - MÁS COMPACTO */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-2">
            Contactanos
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Solicitá un presupuesto o realizá tu consulta
          </p>
        </motion.div>

        {/* Separador elegante */}
        <div className="w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-500 mb-8 rounded-full" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* ========== FORMULARIO ========== */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
            initial={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
              <EnvelopeIcon className="h-6 w-6 mr-2" />
              Formulario de Contacto
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Nombre */}
              <div>
                <label className="text-sm font-semibold text-gray-700 flex items-center mb-1">
                  <UserIcon className="h-4 w-4 mr-1 text-blue-500" />
                  Nombre
                </label>
                <input
                  // Añadido text-gray-800 para asegurar el color del texto
                  className={`w-full px-4 py-2.5 rounded-lg border text-gray-800 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all ${
                    errors.nombre ? 'border-red-500' : 'border-gray-300'
                  }`}
                  name="nombre"
                  placeholder="Tu nombre completo"
                  type="text"
                  value={formData.nombre}
                  onChange={handleChange}
                />
                {errors.nombre && <p className="text-red-600 text-xs mt-1">{errors.nombre}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-semibold text-gray-700 flex items-center mb-1">
                  <AtSymbolIcon className="h-4 w-4 mr-1 text-blue-500" />
                  Email
                </label>
                <input
                  // Añadido text-gray-800 para asegurar el color del texto
                  className={`w-full px-4 py-2.5 rounded-lg border text-gray-800 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  name="email"
                  placeholder="tu@email.com"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Grid 2 columnas para Teléfono y Servicio en desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Teléfono */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 flex items-center mb-1">
                    <PhoneIcon className="h-4 w-4 mr-1 text-blue-500" />
                    Teléfono
                  </label>
                  <input
                    // Añadido text-gray-800 para asegurar el color del texto
                    className="w-full px-4 py-2.5 rounded-lg border text-gray-800 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all border-gray-300"
                    name="telefono"
                    placeholder="+54 9 2954 294429"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </div>

                {/* Servicio */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 flex items-center mb-1">
                    <ChatBubbleBottomCenterTextIcon className="h-4 w-4 mr-1 text-blue-500" />
                    Servicio
                  </label>
                  <select
                    // Añadido text-gray-800 para asegurar el color del texto en el select
                    className="w-full px-4 py-2.5 rounded-lg border text-gray-800 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all border-gray-300"
                    name="servicioInteresado"
                    value={formData.servicioInteresado}
                    onChange={handleChange}
                  >
                    {/* Corregido: className antes de value para cumplir con la regla de ESLint */}
                    <option className="text-gray-400" value="">Seleccioná</option>
                    {servicesOptions.map((service, idx) => (
                      <option key={idx} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label className="text-sm font-semibold text-gray-700 mb-1 block">Mensaje</label>
                <textarea
                  // Añadido text-gray-800 para asegurar el color del texto
                  // Añadido placeholder:text-gray-500 para el color del placeholder
                  className={`w-full px-4 py-2.5 rounded-lg border text-gray-800 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all placeholder:text-gray-500 ${
                    errors.mensaje ? 'border-red-500' : 'border-gray-300'
                  }`}
                  name="mensaje"
                  placeholder="Escribe tu consulta..."
                  rows={3}
                  value={formData.mensaje}
                  onChange={handleChange}
                />
                {errors.mensaje && <p className="text-red-600 text-xs mt-1">{errors.mensaje}</p>}
              </div>

              {/* Estados */}
              {status === 'submitting' && <p className="text-blue-500 text-sm text-center">Enviando...</p>}

              {status === 'success' && (
                <p className="text-green-600 text-sm text-center flex items-center justify-center">
                  <CheckCircleIcon className="h-5 w-5 mr-2" />
                  ¡Tu mensaje fue enviado!
                </p>
              )}

              {status === 'error' && (
                <p className="text-red-600 text-sm text-center flex items-center justify-center">
                  <ExclamationCircleIcon className="h-5 w-5 mr-2" />
                  Ocurrió un error. Intenta nuevamente.
                </p>
              )}

              {/* Botón */}
              <button
                className="w-full px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={status === 'submitting'}
                type="submit"
              >
                {status === 'submitting' ? 'Enviando...' : 'Enviar Consulta'}
              </button>
            </form>
          </motion.div>

          {/* ========== CONTACTO + MAPA ========== */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-blue-600 flex items-center">
              <PhoneIcon className="h-6 w-6 mr-2" />
              Contacto Directo
            </h2>

            {/* Info Cards compactas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {/* Teléfono */}
              <a
                className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-lg border border-blue-200 hover:shadow-md transition-all group"
                href="tel:+5492954294429"
              >
                <PhoneIcon className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
                  +54 9 2954 294429
                </span>
              </a>

              {/* Email */}
              <a
                className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-lg border border-blue-200 hover:shadow-md transition-all group"
                href="mailto:info@tecnovita.com"
              >
                <EnvelopeIcon className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600">
                  info@tecnovita.com
                </span>
              </a>

              {/* Dirección */}
              <div className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-lg border border-blue-200">
                <MapPinIcon className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">
                  Catriló 1648, Santa Rosa, La Pampa
                </span>
              </div>
            </div>

            {/* Redes sociales - Grid compacto */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Redes Sociales</h3>
              <div className="grid grid-cols-2 gap-2">
                <a
                  className="flex items-center p-2.5 bg-green-50 rounded-lg border border-green-200 hover:shadow-md transition-all group"
                  href="https://wa.me/542954294429?text=Hola,%20quisiera%20hacer%20una%20consulta."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaWhatsapp className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-green-600">WhatsApp</span>
                </a>

                <a
                  className="flex items-center p-2.5 bg-pink-50 rounded-lg border border-pink-200 hover:shadow-md transition-all group"
                  href="https://instagram.com/tecnovita.com.ar"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaInstagram className="h-5 w-5 text-pink-600 mr-2" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-pink-600">Instagram</span>
                </a>

                <a
                  className="flex items-center p-2.5 bg-blue-50 rounded-lg border border-blue-200 hover:shadow-md transition-all group"
                  href="https://facebook.com/profile.php?id=61578156026887"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaFacebookF className="h-5 w-5 text-blue-700 mr-2" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">Facebook</span>
                </a>

                <a
                  className="flex items-center p-2.5 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-all group"
                  href="https://tiktok.com/@tecnovita.com.ar"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaTiktok className="h-5 w-5 text-gray-900 mr-2" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">TikTok</span>
                </a>
              </div>
            </div>

            {/* Horarios */}
            <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                <ClockIcon className="h-5 w-5 mr-2 text-blue-600" />
                Horarios de Atención
              </h3>
              <div className="space-y-1 text-sm text-gray-700">
                <p className="flex justify-between">
                  <span className="font-medium">Lunes a Viernes:</span>
                  <span>9:00 - 18:00</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Sábados:</span>
                  <span>9:00 - 13:00</span>
                </p>
              </div>
            </div>

            {/* Google Map - MÁS COMPACTO */}
            <div className="w-full h-48 sm:h-56 rounded-lg overflow-hidden shadow-md border border-gray-200">
              <iframe
                height="100%"
                loading="lazy"
                src="https://www.google.com/maps?q=Catriló%201648,%20Santa%20Rosa,%20La%20Pampa&output=embed"
                width="100%"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}