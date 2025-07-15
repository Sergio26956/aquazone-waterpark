'use client';
import { useState } from 'react';

export default function BudgetManager() {
  const [budgets, setBudgets] = useState<{ cliente: string; detalle: string; precio: string }[]>([]);
  const [cliente, setCliente] = useState('');
  const [detalle, setDetalle] = useState('');
  const [precio, setPrecio] = useState('');

  const addBudget = () => {
    if (cliente && detalle && precio) {
      setBudgets([...budgets, { cliente, detalle, precio }]);
      setCliente('');
      setDetalle('');
      setPrecio('');
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Presupuestos</h3>
      <div className="grid grid-cols-3 gap-2 mb-4">
        <input
          type="text"
          placeholder="Cliente"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Detalle"
          value={detalle}
          onChange={(e) => setDetalle(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Precio (€)"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          className="border p-2 rounded"
        />
      </div>
      <button onClick={addBudget} className="bg-purple-600 text-white px-4 py-2 rounded mb-4">
        Añadir Presupuesto
      </button>
      <ul className="list-disc pl-6">
        {budgets.map((b, i) => (
          <li key={i}>{b.cliente} - {b.detalle} - {b.precio}€</li>
        ))}
      </ul>
    </div>
  );
}
