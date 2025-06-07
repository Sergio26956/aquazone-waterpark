'use client';

import React, { useState } from 'react';

const CampaignManager = () => {
  const [campaignName, setCampaignName] = useState('');
  const [status, setStatus] = useState('pendiente');

  const startCampaign = () => {
    setStatus('activa');
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h3 className="text-xl font-semibold mb-2">Gestor de Campañas</h3>
      <input
        type="text"
        placeholder="Nombre de la campaña"
        className="w-full border p-2 mb-2 rounded"
        value={campaignName}
        onChange={(e) => setCampaignName(e.target.value)}
      />
      <button
        className="bg-orange-600 text-white px-4 py-2 rounded mb-2"
        onClick={startCampaign}
      >
        Activar Campaña
      </button>
      <p className="text-gray-700">Estado: {status}</p>
    </div>
  );
};

export default CampaignManager;
