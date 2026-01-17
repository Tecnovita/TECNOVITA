import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const {
      nombre,
      email,
      mensaje,
      telefono = 'No proporcionado',
      servicioInteresado = 'Consulta General',
    } = await request.json();

    if (!nombre || !email || !mensaje) {
      return NextResponse.json({ message: 'Campos obligatorios faltantes' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // 465
      auth: {
        user: process.env.EMAIL_USER, // consultas@tecnovita.com.ar
        pass: process.env.EMAIL_PASS,
      },
    });

    /* =====================================================
     * 1️⃣ MAIL INTERNO (A VOS)
     * ===================================================== */
    await transporter.sendMail({
      from: `"Tecnovita Web" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO, // info@tecnovita.com.ar
      replyTo: email, // cliente
      subject: `Nueva consulta – ${nombre} (${servicioInteresado})`,
      html: `
        <h2>Nueva consulta desde la web</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Servicio:</strong> ${servicioInteresado}</p>
        <hr />
        <p>${mensaje.replace(/\n/g, '<br/>')}</p>
      `,
    });

    /* =====================================================
     * 2️⃣ MAIL AUTOMÁTICO (AL CLIENTE)
     * ===================================================== */
    await transporter.sendMail({
      from: `"Tecnovita" <${process.env.EMAIL_FROM}>`,
      to: email, // 🔴 AHORA SÍ AL CLIENTE
      subject: `Consulta recibida – ${nombre}`,
      html: `
        <p>Hola ${nombre}, gracias por comunicarte con Tecnovita,</p>

        <p>Recibimos tu consulta correctamente.</p>

        <p>
          En breve uno de nuestros técnicos se va a comunicar con vos
          para brindarte más información.
        </p>

        <br />

        <p>
          Saludos,<br />
          <strong>Tecnovita</strong>
        </p>
      `,
    });

    return NextResponse.json({ message: 'Consulta enviada correctamente' });
  } catch (error) {
    console.error('❌ ERROR SMTP ZOHO:', error);
    return NextResponse.json({ message: 'Error al enviar correos' }, { status: 500 });
  }
}
