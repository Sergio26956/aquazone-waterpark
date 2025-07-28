import type { NextApiRequest, NextApiResponse } from 'next';

interface Budget {
  id: string;
  client: string;
  amount: number;
  details: string;
}

let budgets: Budget[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return res.status(200).json(budgets);

    case 'POST':
      const { client, amount, details } = req.body;
      if (!client || !amount || !details) {
        return res.status(400).json({ message: 'Datos incompletos' });
      }
      const newBudget: Budget = {
        id: crypto.randomUUID(),
        client,
        amount: Number(amount),
        details,
      };
      budgets.push(newBudget);
      return res.status(201).json({ message: 'Presupuesto creado', budget: newBudget });

    case 'DELETE':
      const { id } = req.body;
      budgets = budgets.filter(b => b.id !== id);
      return res.status(200).json({ message: 'Presupuesto eliminado' });

    default:
      return res.status(405).end();
  }
}
