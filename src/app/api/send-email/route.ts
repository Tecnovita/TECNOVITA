// src/app/api/send-email/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Validar que los datos mínimos estén presentes
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      return NextResponse.json({ message: 'Faltan campos obligatorios: nombre, email o mensaje.' }, { status: 400 });
    }

    // Configurar el transporter de Nodemailer
    // Usaremos variables de entorno para la seguridad.
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // Por ejemplo: 'smtp.gmail.com' o tu servidor SMTP
      port: Number(process.env.EMAIL_PORT), // Por ejemplo: 465 para SSL o 587 para TLS
      secure: process.env.EMAIL_SECURE === 'true', // true para 465, false para otros puertos como 587
      auth: {
        user: process.env.EMAIL_USER, // Tu dirección de correo electrónico
        pass: process.env.EMAIL_PASS, // Tu contraseña o contraseña de aplicación
      },
    });

    // Contenido del correo electrónico
    const mailOptions = {
      from: process.env.EMAIL_FROM, // Puede ser el mismo que EMAIL_USER o un alias
      to: process.env.EMAIL_TO,     // El correo al que se enviarán los mensajes (ej: tu@empresa.com)
      subject: `Consulta de ${formData.nombre} - ${formData.servicioInteresado || 'Sin servicio especificado'}`,
      html: `
        <p><strong>Nombre:</strong> ${formData.nombre}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Teléfono:</strong> ${formData.telefono || 'No proporcionado'}</p>
        <p><strong>Servicio de interés:</strong> ${formData.servicioInteresado || 'No especificado'}</p>
        <h3>Mensaje:</h3>
        <p>${formData.mensaje}</p>
      `,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Correo enviado con éxito' }, { status: 200 });

  } catch (error) {
    console.error('Error al procesar la solicitud de correo:', error);
    // Para depuración, puedes enviar el mensaje de error completo.
    // En producción, es mejor enviar un mensaje genérico.
    return NextResponse.json({ message: 'Error interno del servidor al enviar el correo.', error: (error as Error).message }, { status: 500 });
  }
}