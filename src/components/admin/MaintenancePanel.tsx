'use client';
import { useState } from 'react';

export default function MaintenancePanel() {
  const [maintenance, setMaintenance] = useState(false);

  const toggle = () => setMaintenance(!maintenance);

  return (
    <div className="p-6 bg-yellow-100 rounded">
      <h2 className="text-xl font-semibold mb-4">Modo Mantenimiento</h2>
      <p className="mb-3">
        Estado actual: <strong>{maintenance ? 'ACTIVO' : 'INACTIVO'}</strong>
      </p>
      <button
        onClick={toggle}
        className={`px-4 py-2 rounded text-white ${maintenance ? 'bg-green-600' : 'bg-red-600'}`}
      >
        {maintenance ? 'Desactivar' : 'Activar'}
      </button>
    </div>
  );
}
