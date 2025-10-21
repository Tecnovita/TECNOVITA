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
} from '@heroicons/react/24/outline';
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

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
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
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

      if (response.ok) {
        setStatus('success');
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          servicioInteresado: '',
          mensaje: '',
        });
      } else {
        setStatus('error');
        console.error('Error al enviar el formulario:', await response.text());
      }
    } catch (error) {
      setStatus('error');
      console.error('Error en la conexión:', error);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center py-8 px-4 bg-gray-100 min-h-screen sm:py-12 md:py-16">
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center sm:text-4xl animate-slide-up">
          Solicitar Presupuesto o Contactar
        </h1>
        <p className="text-gray-700 mb-8 text-center text-base sm:text-lg animate-slide-up">
          Completa el siguiente formulario o utiliza nuestros datos de contacto directo.
        </p>

        <div className="w-full h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 my-8 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Envíanos un Mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nombre */}
              <div>
                <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">
                  <UserIcon className="inline-block h-5 w-5 mr-1 text-gray-500" /> Nombre Completo:
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.nombre ? 'border-red-500' : ''
                  }`}
                  placeholder="Tu nombre"
                />
                {errors.nombre && (
                  <p className="text-red-500 text-xs italic mt-1">{errors.nombre}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  <AtSymbolIcon className="inline-block h-5 w-5 mr-1 text-gray-500" /> Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs italic mt-1">{errors.email}</p>
                )}
              </div>

              {/* Teléfono */}
              <div>
                <label htmlFor="telefono" className="block text-gray-700 text-sm font-bold mb-2">
                  <PhoneIcon className="inline-block h-5 w-5 mr-1 text-gray-500" /> Teléfono (opcional):
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ej: +54 9 11 2340 5678"
                />
              </div>

              {/* Servicio interesado */}
              <div>
                <label htmlFor="servicioInteresado" className="block text-gray-700 text-sm font-bold mb-2">
                  <ChatBubbleBottomCenterTextIcon className="inline-block h-5 w-5 mr-1 text-gray-500" /> Servicio de interés:
                </label>
                <select
                  id="servicioInteresado"
                  name="servicioInteresado"
                  value={formData.servicioInteresado}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="">-- Seleccione un servicio --</option>
                  {servicesOptions.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="mensaje" className="block text-gray-700 text-sm font-bold mb-2">
                  Mensaje:
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={4}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.mensaje ? 'border-red-500' : ''
                  }`}
                  placeholder="Detalla aquí tu consulta o lo que necesitas..."
                ></textarea>
                {errors.mensaje && (
                  <p className="text-red-500 text-xs italic mt-1">{errors.mensaje}</p>
                )}
              </div>

              {/* Estado del envío */}
              {status === 'submitting' && (
                <p className="text-blue-500 text-center mt-4">Enviando tu mensaje...</p>
              )}
              {status === 'success' && (
                <p className="text-green-600 text-center mt-4 flex items-center justify-center">
                  <CheckCircleIcon className="h-5 w-5 mr-2" /> ¡Mensaje enviado con éxito! Te contactaremos pronto.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-center mt-4 flex items-center justify-center">
                  <ExclamationCircleIcon className="h-5 w-5 mr-2" /> Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.
                </p>
              )}

              {/* Botón */}
              <div className="flex items-center justify-center mt-6">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:shadow-outline transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={status === 'submitting'}
                >
                  Enviar Solicitud
                </button>
              </div>
            </form>
          </div>

          {/* Contacto directo */}
          <div className="md:border-l md:pl-8 md:pt-0 pt-8 border-gray-200">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Contacto Directo</h2>
            <div className="space-y-4 text-gray-700">
              <p className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <a href="tel:+5492954294429" className="hover:underline">
                  +54 9 2954 294429
                </a>
              </p>
              <p className="flex items-center">
                <EnvelopeIcon className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <a href="mailto:info@tecnovita.com" className="hover:underline">
                  info@tecnovita.com
                </a>
              </p>
              <p className="flex items-center">
                <MapPinIcon className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
                <span>Catrilo 1648, Santa Rosa, La Pampa</span>
              </p>
              <p className="flex items-center">
                <FaWhatsapp className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                <a
                  href="https://wa.me/542954294429?text=Hola,%20quisiera%20solicitar%20un%20presupuesto."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Enviar WhatsApp
                </a>
              </p>
              <p className="flex items-center">
                <FaInstagram className="h-6 w-6 text-pink-500 mr-3 flex-shrink-0" />
                <a
                  href="https://instagram.com/tecnovita.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Nuestro Instagram
                </a>
              </p>
              <p className="flex items-center">
                <FaFacebookF className="h-6 w-6 text-blue-700 mr-3 flex-shrink-0" />
                <a
                  href="https://facebook.com/profile.php?id=61578156026887"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Nuestro Facebook
                </a>
              </p>
              <p className="flex items-center">
                <FaTiktok className="h-6 w-6 text-gray-800 mr-3 flex-shrink-0" />
                <a
                  href="https://tiktok.com/@tecnovita.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Nuestro TikTok
                </a>
              </p>
            </div>

            <h3 className="text-xl font-semibold text-blue-600 mt-8 mb-3">
              Horarios de Atención:
            </h3>
            <p className="text-gray-700">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-700">Sábados: 9:00 AM - 1:00 PM</p>
          </div>
        </div>
      </div>
    </main>
  );
}
