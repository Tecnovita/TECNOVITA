import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const clean = (s: unknown, max: number) =>
  String(s ?? '')
    .replace(/[\r\n]+/g, ' ')
    .trim()
    .slice(0, max);

// Límite simple por IP (en memoria): 5 envíos cada 10 minutos.
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter(t => now - t < 10 * 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
    if (limited(ip)) {
      return NextResponse.json({ message: 'Demasiados intentos' }, { status: 429 });
    }

    const body = await request.json();
    // Honeypot: si el campo oculto viene lleno, es un bot. Respondemos OK sin enviar.
    if (body.web) return NextResponse.json({ message: 'Consulta enviada correctamente' });

    const nombre = clean(body.nombre, 100);
    const email = clean(body.email, 150);
    const telefono = clean(body.telefono, 40) || 'No proporcionado';
    const servicio = clean(body.servicioInteresado, 60) || 'Consulta General';
    const mensaje = String(body.mensaje ?? '')
      .trim()
      .slice(0, 3000);

    if (!nombre || !email || !mensaje || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ message: 'Datos inválidos' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: Number(process.env.EMAIL_PORT) === 465,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    await transporter.sendMail({
      from: `"Tecnovita Web" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Nueva consulta – ${nombre} (${servicio})`,
      html: `
        <h2>Nueva consulta desde la web</h2>
        <p><strong>Nombre:</strong> ${esc(nombre)}</p>
        <p><strong>Email:</strong> ${esc(email)}</p>
        <p><strong>Teléfono:</strong> ${esc(telefono)}</p>
        <p><strong>Servicio:</strong> ${esc(servicio)}</p>
        <hr />
        <p>${esc(mensaje).replace(/\n/g, '<br/>')}</p>
      `,
    });

    // Acuse al cliente: el nombre ya va escapado y la respuesta no incluye su mensaje.
    await transporter.sendMail({
      from: `"Tecnovita" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: 'Recibimos tu consulta – Tecnovita',
      html: `
        <p>Hola ${esc(nombre)}, gracias por comunicarte con Tecnovita.</p>
        <p>Recibimos tu consulta. En breve uno de nuestros técnicos se va a comunicar con vos.</p>
        <p>Saludos,<br /><strong>Tecnovita</strong></p>
      `,
    });

    return NextResponse.json({ message: 'Consulta enviada correctamente' });
  } catch (error) {
    console.error('Error al enviar correos:', error);
    return NextResponse.json({ message: 'Error al enviar correos' }, { status: 500 });
  }
}
