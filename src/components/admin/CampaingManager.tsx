'use client';
import { useState } from 'react';

export default function CampaingManager() {
  const [campaignName, setCampaignName] = useState('');
  const [status, setStatus] = useState('');

  const handleLaunch = () => {
    setStatus(`Campaña "${campaignName}" lanzada correctamente`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Gestor de Campañas</h2>
      <input
        type="text"
        placeholder="Nombre de la campaña"
        value={campaignName}
        onChange={(e) => setCampaignName(e.target.value)}
        className="p-2 border rounded w-full mb-4"
      />
      <button
        onClick={handleLaunch}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        Lanzar Campaña
      </button>
      {status && <p className="mt-4 text-green-700">{status}</p>}
    </div>
  );
}
