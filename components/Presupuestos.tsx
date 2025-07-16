'use client';
import { useState } from 'react';

interface Budget {
  id: number;
  clientName: string;
  amount: number;
  status: 'pendiente' | 'aprobado' | 'rechazado';
}

export default function BudgetManager() {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [clientName, setClientName] = useState('');
  const [amount, setAmount] = useState('');

  const addBudget = () => {
    const parsedAmount = parseFloat(amount);
    if (clientName.trim() && !isNaN(parsedAmount) && parsedAmount > 0) {
      setBudgets([
        ...budgets,
        { id: Date.now(), clientName, amount: parsedAmount, status: 'pendiente' },
      ]);
      setClientName('');
      setAmount('');
    }
  };

  const updateStatus = (id: number, status: Budget['status']) => {
    setBudgets(
      budgets.map((b) => (b.id === id ? { ...b, status } : b))
    );
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Gestor de Presupuestos</h3>
      <div className="flex flex-col gap-2 mb-4 max-w-md">
        <input
          type="text"
          placeholder="Nombre del cliente"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Importe (€)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 rounded"
          min="0"
          step="0.01"
        />
        <button onClick={addBudget} className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
          Añadir presupuesto
        </button>
      </div>
      <ul className="list-disc pl-6">
        {budgets.map((budget) => (
          <li key={budget.id} className="mb-1">
            <span className="font-semibold">{budget.clientName}</span> — {budget.amount.toFixed(2)}€ —{' '}
            <select
              value={budget.status}
              onChange={(e) => updateStatus(budget.id, e.target.value as Budget['status'])}
              className="border rounded px-2 py-1"
            >
              <option value="pendiente">Pendiente</option>
              <option value="aprobado">Aprobado</option>
              <option value="rechazado">Rechazado</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
}
