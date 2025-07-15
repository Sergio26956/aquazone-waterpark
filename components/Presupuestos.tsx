'use client';
import { useState } from 'react';

interface Presupuesto {
  cliente: string;
  concepto: string;
  importe: string;
}

export default function BudgetManager() {
  const [presupuestos, setPresupuestos] = useState<Presupuesto[]>([]);
  const [cliente, setCliente] = useState('');
  const [concepto, setConcepto] = useState('');
  const [importe, setImporte] = useState('');

  const agregarPresupuesto = () => {
    if (cliente && concepto && importe) {
      const nuevo: Presupuesto = { cliente, concepto, importe };
      setPresupuestos([...presupuestos, nuevo]);
      setCliente('');
      setConcepto('');
      setImporte('');
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Gestor de Presupuestos</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          placeholder="Cliente"
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
          type="text"
          placeholder="Importe (€)"
          className="border p-2 rounded"
          value={importe}
          onChange={(e) => setImporte(e.target.value)}
        />
      </div>
      <button
        onClick={agregarPresupuesto}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Añadir Presupuesto
      </button>

      <ul className="mt-6 space-y-2">
        {presupuestos.map((p, idx) => (
          <li key={idx} className="bg-white p-4 rounded shadow">
            <strong>{p.cliente}</strong><br />
            {p.concepto}<br />
            💶 {p.importe}
          </li>
        ))}
      </ul>
    </div>
  );
}
