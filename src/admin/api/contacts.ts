import type { NextApiRequest, NextApiResponse } from 'next';

let contacts: { name: string; email: string; message: string }[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return res.status(200).json(contacts);

    case 'POST':
      const { name, email, message } = req.body;
      if (!name || !email || !message) {
        return res.status(400).json({ message: 'Datos incompletos' });
      }
      contacts.push({ name, email, message });
      return res.status(201).json({ message: 'Contacto añadido' });

    case 'DELETE':
      const { index } = req.body;
      if (typeof index !== 'number' || index < 0 || index >= contacts.length) {
        return res.status(400).json({ message: 'Índice inválido' });
      }
      contacts.splice(index, 1);
      return res.status(200).json({ message: 'Contacto eliminado' });

    default:
      return res.status(405).end();
  }
}
