'use client';

import { useState } from 'react';

export default function ZonaExclusiva() {
  const [notas, setNotas] = useState([
    { id: 1, contenido: 'Revisar evento en Málaga el 10 de julio.' },
    { id: 2, contenido: 'Confirmar disponibilidad de hinchables grandes para agosto.' },
  ]);

  const [nuevaNota, setNuevaNota] = useState('');

  const agregarNota = () => {
    if (nuevaNota.trim() === '') return;
    const nueva = {
      id: notas.length + 1,
      contenido: nuevaNota.trim(),
    };
    setNotas([...notas, nueva]);
    setNuevaNota('');
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-blue-800">Zona Exclusiva Personal</h2>

      <div className="space-y-2">
        {notas.map((nota) => (
          <div key={nota.id} className="bg-white border p-3 rounded shadow">
            {nota.contenido}
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-4">
        <input
          type="text"
          value={nuevaNota}
          onChange={(e) => setNuevaNota(e.target.value)}
          placeholder="Nueva nota personal"
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={agregarNota}
          className="px-4 py-2 bg-blue-700 text-white rounded"
        >
          Añadir
        </button>
      </div>
    </div>
  );
}
