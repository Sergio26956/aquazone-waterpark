'use client';

import { useState } from 'react';
import { format } from 'date-fns';

export default function CalendarioFechas() {
  const [fechas, setFechas] = useState<Date[]>([]);
  const [nuevaFecha, setNuevaFecha] = useState('');

  const agregarFecha = () => {
    if (nuevaFecha) {
      const fecha = new Date(nuevaFecha);
      setFechas([...fechas, fecha]);
      setNuevaFecha('');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">Fechas Contratadas</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="date"
          value={nuevaFecha}
          onChange={(e) => setNuevaFecha(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={agregarFecha}
          className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700 transition"
        >
          Añadir
        </button>
      </div>
      <ul className="list-disc pl-5">
        {fechas.map((fecha, index) => (
          <li key={index}>{format(fecha, 'dd/MM/yyyy')}</li>
        ))}
      </ul>
    </div>
  );
}
