import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { nombre, email, mensaje } = req.body;

  if (
    !nombre ||
    !email ||
    !mensaje ||
    typeof nombre !== 'string' ||
    typeof email !== 'string' ||
    typeof mensaje !== 'string'
  ) {
    return res.status(400).json({ message: 'Datos inválidos' });
  }

  // Validación básica email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Email no válido' });
  }

  // Configura el transporter con datos del .env.local
  const transporter = nodemailer.createTransport({
    service: 'hotmail', // o 'gmail' si usas gmail, cambia según corresponda
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: `Contacto desde web: ${nombre}`,
    text: `
    Nombre: ${nombre}
    Email: ${email}
    Mensaje:
    ${mensaje}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Mensaje enviado correctamente' });
  } catch (error) {
    console.error('Error enviando email:', error);
    return res.status(500).json({ message: 'Error enviando mensaje' });
  }
}
