'use client';
import { useState } from 'react';

type Budget = {
  id: number;
  client: string;
  amount: number;
  details: string;
};

export default function BudgetManager() {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [client, setClient] = useState('');
  const [amount, setAmount] = useState('');
  const [details, setDetails] = useState('');

  function addBudget() {
    if (!client || !amount) return;
    const newBudget: Budget = {
      id: Date.now(),
      client,
      amount: Number(amount),
      details,
    };
    setBudgets((prev) => [...prev, newBudget]);
    setClient(''); setAmount(''); setDetails('');
  }

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Gestor de Presupuestos</h2>
      <div className="space-y-2 mb-4">
        <input type="text" placeholder="Cliente" value={client} onChange={(e) => setClient(e.target.value)} className="w-full p-2 border rounded" />
        <input type="number" placeholder="Importe (€)" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full p-2 border rounded" />
        <textarea placeholder="Detalles" value={details} onChange={(e) => setDetails(e.target.value)} className="w-full p-2 border rounded" />
        <button onClick={addBudget} className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700">Crear Presupuesto</button>
      </div>
      <ul className="max-h-60 overflow-auto border rounded p-2">
        {budgets.map((b) => (
          <li key={b.id} className="border-b py-2">
            <strong>{b.client}</strong> – €{b.amount}<br />
            <span className="text-sm">{b.details}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
