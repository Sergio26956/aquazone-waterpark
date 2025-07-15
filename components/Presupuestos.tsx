'use client';
import { useState } from 'react';

interface Budget {
  client: string;
  amount: number;
  description: string;
}

export default function BudgetManager() {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [client, setClient] = useState('');
  const [amount, setAmount] = useState<number>(0);
  const [description, setDescription] = useState('');

  const addBudget = () => {
    if (client && amount && description) {
      setBudgets([...budgets, { client, amount, description }]);
      setClient('');
      setAmount(0);
      setDescription('');
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Presupuestos y Contratos</h3>
      <div className="space-y-2 mb-4">
        <input
          type="text"
          className="border p-2 w-full"
          placeholder="Cliente"
          value={client}
          onChange={(e) => setClient(e.target.value)}
        />
        <input
          type="number"
          className="border p-2 w-full"
          placeholder="Importe (€)"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <textarea
          className="border p-2 w-full"
          placeholder="Descripción del presupuesto o contrato"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addBudget} className="bg-purple-600 text-white px-4 py-2 rounded">
          Guardar
        </button>
      </div>
      <ul className="list-disc pl-6">
        {budgets.map((b, idx) => (
          <li key={idx}>
            <strong>{b.client}</strong> - €{b.amount} - {b.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
