import type { NextApiRequest, NextApiResponse } from 'next';

let events: string[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return res.status(200).json(events);

    case 'POST':
      const { event } = req.body;
      if (typeof event !== 'string' || event.trim() === '') {
        return res.status(400).json({ message: 'Evento inválido' });
      }
      events.push(event.trim());
      return res.status(201).json({ message: 'Evento añadido' });

    case 'DELETE':
      const { index } = req.body;
      if (typeof index !== 'number' || index < 0 || index >= events.length) {
        return res.status(400).json({ message: 'Índice inválido' });
      }
      events.splice(index, 1);
      return res.status(200).json({ message: 'Evento eliminado' });

    default:
      return res.status(405).end();
  }
}
