'use client';
import { useState } from 'react';

export default function BudgetManager() {
  const [budgets, setBudgets] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addBudget = () => {
    if (input.trim()) {
      setBudgets([...budgets, input]);
      setInput('');
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Gestión de Presupuestos</h3>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 flex-1"
          placeholder="Nuevo presupuesto"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addBudget} className="bg-green-600 text-white px-4 py-2 rounded">Añadir</button>
      </div>
      <ul className="list-disc pl-6">
        {budgets.map((b, idx) => (<li key={idx}>{b}</li>))}
      </ul>
    </div>
  );
}
