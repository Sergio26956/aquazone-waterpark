'use client';
import { useState } from 'react';

interface Budget {
  id: number;
  client: string;
  amount: number;
  description: string;
}

export default function BudgetManager() {
  const [budgets, setBudgets] = useState<Budget[]>([
    { id: 1, client: 'Empresa X', amount: 1200, description: 'Presupuesto parque acuático móvil' },
  ]);
  const [client, setClient] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const addBudget = () => {
    if (client.trim() && amount && description.trim()) {
      setBudgets([
        ...budgets,
        {
          id: Date.now(),
          client: client.trim(),
          amount: parseFloat(amount),
          description: description.trim(),
        },
      ]);
      setClient('');
      setAmount('');
      setDescription('');
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Gestor de Presupuestos</h3>
      <div className="mb-4 flex flex-col gap-2 max-w-md">
        <input
          type="text"
          placeholder="Cliente"
          className="border p-2 rounded"
          value={client}
          onChange={(e) => setClient(e.target.value)}
        />
        <input
          type="number"
          placeholder="Cantidad (€)"
          className="border p-2 rounded"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
          step="0.01"
        />
        <textarea
          placeholder="Descripción"
          className="border p-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addBudget} className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
          Añadir Presupuesto
        </button>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2 text-left">Cliente</th>
            <th className="border px-4 py-2 text-left">Cantidad (€)</th>
            <th className="border px-4 py-2 text-left">Descripción</th>
          </tr>
        </thead>
        <tbody>
          {budgets.map(({ id, client, amount, description }) => (
            <tr key={id} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{client}</td>
              <td className="border px-4 py-2">{amount.toFixed(2)}</td>
              <td className="border px-4 py-2">{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
