'use client';

import { useState } from 'react';

export default function SiteSettingsPanel() {
  const [settings, setSettings] = useState({
    nombreSitio: 'AQUAZONE Water Park',
    emailContacto: 'contacto@aquazone.com',
    año: '2025',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert('Configuración guardada (simulado):\n\n' + JSON.stringify(settings, null, 2));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Configuración del sitio</h2>
      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Nombre del sitio</label>
          <input
            name="nombreSitio"
            value={settings.nombreSitio}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email de contacto</label>
          <input
            name="emailContacto"
            value={settings.emailContacto}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Año</label>
          <input
            name="año"
            value={settings.año}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mt-4"
        >
          Guardar configuración
        </button>
      </div>
    </div>
  );
}
