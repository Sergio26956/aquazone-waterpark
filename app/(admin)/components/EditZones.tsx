'use client';

import { useState } from 'react';

type Zone = { id: number; name: string; category: string; active: boolean };

const initialZones: Zone[] = [
  { id: 1, name: 'Zona Flotante 1', category: 'Flotante', active: true },
  { id: 2, name: 'Kamikaze Jump', category: 'Urbano Móvil', active: false },
];

export default function EditZones() {
  const [zones, setZones] = useState(initialZones);

  const toggleActive = (id: number) => {
    setZones(zones.map(zone => zone.id === id ? { ...zone, active: !zone.active } : zone));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Editar zonas del parque</h2>
      {zones.map(zone => (
        <div key={zone.id} className="flex items-center justify-between mb-4">
          <div>
            <p className="font-medium">{zone.name}</p>
            <p className="text-sm text-gray-500">{zone.category}</p>
          </div>
          <button
            onClick={() => toggleActive(zone.id)}
            className={`px-4 py-1 rounded ${zone.active ? 'bg-green-500 text-white' : 'bg-gray-300'}`}
          >
            {zone.active ? 'Activo' : 'Inactivo'}
          </button>
        </div>
      ))}
    </div>
  );
}
