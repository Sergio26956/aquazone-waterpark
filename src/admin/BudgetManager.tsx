'use client';

import { useEffect, useState } from 'react';

interface Budget {
  id: string;
  client: string;
  amount: number;
  details: string;
}

export default function BudgetManager() {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [client, setClient] = useState('');
  const [amount, setAmount] = useState('');
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchBudgets = async () => {
    setLoading(true);
    const res = await fetch('/api/admin/budgets');
    const data = await res.json();
    setBudgets(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchBudgets();
  }, []);

  const addBudget = async () => {
    if (!client.trim() || !amount.trim() || !details.trim()) return;
    setLoading(true);
    await fetch('/api/admin/budgets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client: client.trim(),
        amount: parseFloat(amount),
        details: details.trim(),
      }),
    });
    setClient('');
    setAmount('');
    setDetails('');
    await fetchBudgets();
  };

  const deleteBudget = async (id: string) => {
    setLoading(true);
    await fetch('/api/admin/budgets', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    await fetchBudgets();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Gestión de Presupuestos</h2>
      <div className="mb-6 space-y-3">
        <input
          type="text"
          placeholder="Cliente"
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          value={client}
          onChange={e => setClient(e.target.value)}
        />
        <input
          type="number"
          placeholder="Cantidad"
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <textarea
          placeholder="Detalles"
          className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          value={details}
          onChange={e => setDetails(e.target.value)}
        />
        <button
          onClick={addBudget}
          disabled={loading}
          className="w-full py-3 bg-cyan-600 rounded-lg font-semibold hover:bg-cyan-700 disabled:opacity-50 transition"
        >
          Añadir Presupuesto
        </button>
      </div>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul className="space-y-4 max-h-[50vh] overflow-auto">
          {budgets.map(b => (
            <li
              key={b.id}
              className="bg-white bg-opacity-10 rounded-lg p-4 shadow-md flex justify-between items-center"
            >
              <div>
                <p><strong>Cliente:</strong> {b.client}</p>
                <p><strong>Cantidad:</strong> {b.amount} €</p>
                <p><strong>Detalles:</strong> {b.details}</p>
              </div>
              <button
                onClick={() => deleteBudget(b.id)}
                className="text-red-500 font-semibold hover:underline"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
