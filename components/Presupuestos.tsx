'use client';
import { useState } from 'react';

interface Budget {
  cliente: string;
  concepto: string;
  precio: number;
}

export default function BudgetManager() {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [cliente, setCliente] = useState('');
  const [concepto, setConcepto] = useState('');
  const [precio, setPrecio] = useState('');

  const addBudget = () => {
    const parsedPrice = parseFloat(precio);
    if (cliente && concepto && !isNaN(parsedPrice)) {
      const newBudget: Budget = { cliente, concepto, precio: parsedPrice };
      setBudgets([...budgets, newBudget]);
      setCliente('');
      setConcepto('');
      setPrecio('');
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Gestor de Presupuestos</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          placeholder="Nombre del cliente"
          className="border p-2 rounded"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
        />
        <input
          type="text"
          placeholder="Concepto"
          className="border p-2 rounded"
          value={concepto}
          onChange={(e) => setConcepto(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio (€)"
          className="border p-2 rounded"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
      </div>
      <button
        onClick={addBudget}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Añadir presupuesto
      </button>

      <ul className="mt-6 space-y-2">
        {budgets.map((b, idx) => (
          <li key={idx} className="bg-white p-4 rounded shadow">
            <strong>{b.cliente}</strong> — {b.concepto} — <span className="text-green-700 font-semibold">{b.precio.toFixed(2)} €</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
