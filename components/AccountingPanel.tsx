'use client';
import { useState } from 'react';

type Entry = {
  id: number;
  type: 'income' | 'expense';
  description: string;
  amount: number;
};

export default function AccountingPanel() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [type, setType] = useState<'income' | 'expense'>('income');
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');

  function addEntry() {
    if (!desc || !amount) return;
    const newEntry: Entry = {
      id: Date.now(),
      type,
      description: desc,
      amount: Number(amount),
    };
    setEntries((prev) => [...prev, newEntry]);
    setDesc(''); setAmount('');
  }

  const totalIncome = entries.filter(e => e.type === 'income').reduce((a, e) => a + e.amount, 0);
  const totalExpense = entries.filter(e => e.type === 'expense').reduce((a, e) => a + e.amount, 0);

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Contabilidad Básica</h2>
      <div className="flex gap-2 mb-4">
        <select value={type} onChange={(e) => setType(e.target.value as any)} className="flex-1 p-2 border rounded">
          <option value="income">Ingreso</option>
          <option value="expense">Gasto</option>
        </select>
        <input type="text" placeholder="Descripción" value={desc} onChange={(e) => setDesc(e.target.value)} className="flex-2 p-2 border rounded" />
        <input type="number" placeholder="€" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-24 p-2 border rounded" />
        <button onClick={addEntry} className="bg-green-600 text-white px-4 rounded hover:bg-green-700">+</button>
      </div>
      <ul className="max-h-60 overflow-auto border rounded p-2 mb-4">
        {entries.map(e => (
          <li key={e.id} className="py-1">
            <strong>{e.description}</strong> – {e.type === 'income' ? '+' : '-'} €{e.amount}
          </li>
        ))}
      </ul>
      <div className="flex justify-between font-semibold">
        <span>Total ingresos: €{totalIncome}</span>
        <span>Total gastos: €{totalExpense}</span>
      </div>
    </div>
  );
}
