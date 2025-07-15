'use client';
import { useState } from 'react';

interface Budget {
  id: number;
  client: string;
  amount: string;
  description: string;
}

export default function BudgetManager() {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [form, setForm] = useState({ client: '', amount: '', description: '' });

  const addBudget = () => {
    if (form.client.trim() && form.amount.trim()) {
      setBudgets([...budgets, { id: Date.now(), ...form }]);
      setForm({ client: '', amount: '', description: '' });
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Gestor de Presupuestos</h3>
      <div className="mb-4 space-y-2">
        <input
          type="text"
          placeholder="Cliente"
          className="border p-2 rounded w-full"
          value={form.client}
          onChange={(e) => setForm({ ...form, client: e.target.value })}
        />
        <input
          type="text"
          placeholder="Monto"
          className="border p-2 rounded w-full"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />
        <textarea
          placeholder="Descripción"
          className="border p-2 rounded w-full"
          rows={3}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <button
          className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
          onClick={addBudget}
        >
          Añadir Presupuesto
        </button>
      </div>

      <ul className="divide-y divide-gray-300">
        {budgets.map(({ id, client, amount, description }) => (
          <li key={id} className="py-2">
            <strong>{client}</strong> — {amount} <br />
            <em>{description}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
