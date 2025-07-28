import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { message: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { nombre, email, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ message: 'Faltan datos obligatorios' });
  }

  // Aquí se podría agregar envío de correo con nodemailer, o guardar en BD
  // Por ahora solo simulamos éxito

  try {
    // Ejemplo: Enviar email (requiere configuración real)
    /*
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `Nuevo mensaje de ${nombre}`,
      text: `Email: ${email}\nMensaje:\n${mensaje}`,
    });
    */
    return res.status(200).json({ message: 'Mensaje enviado con éxito' });
  } catch (error) {
    return res.status(500).json({ message: 'Error enviando el mensaje' });
  }
}
