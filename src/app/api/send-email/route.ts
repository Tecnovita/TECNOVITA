import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  if (request.method !== 'POST') {
    return NextResponse.json({ message: 'Método no permitido' }, { status: 405 });
  }

  try {
    const contentType = request.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      return NextResponse.json({ message: 'Tipo de contenido inválido. Se requiere JSON.' }, { status: 415 });
    }

    const formData = await request.json();

    const nombre = formData.nombre?.trim();
    const email = formData.email?.trim();
    const mensaje = formData.mensaje?.trim();
    const telefono = formData.telefono?.trim() || 'No proporcionado';
    const servicio = formData.servicioInteresado?.trim() || 'No especificado';

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { message: 'Faltan campos obligatorios: nombre, email o mensaje.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      replyTo: email, // ✅ Permite responder directamente al usuario
      subject: `Consulta de ${nombre} - ${servicio}`,
      html: `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Servicio de interés:</strong> ${servicio}</p>
        <h3>Mensaje:</h3>
        <p>${mensaje}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Correo enviado con éxito' }, { status: 200 });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json(
      { message: 'Error interno del servidor al enviar el correo.' },
      { status: 500 }
    );
  }
}