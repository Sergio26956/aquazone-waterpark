'use client';

import React, { useState } from 'react';

const CampaignManager = () => {
  const [campaignName, setCampaignName] = useState('');
  const [message, setMessage] = useState('');
  const [audience, setAudience] = useState('');

  const handleSubmit = () => {
    alert(`Campaña "${campaignName}" enviada a: ${audience}`);
    // Aquí puedes integrar con APIs externas de email o redes
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Gestión de Campañas</h2>
      <input
        type="text"
        placeholder="Nombre de la campaña"
        className="w-full p-2 border rounded mb-2"
        value={campaignName}
        onChange={(e) => setCampaignName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Audiencia (ej: clientes, nuevos usuarios)"
        className="w-full p-2 border rounded mb-2"
        value={audience}
        onChange={(e) => setAudience(e.target.value)}
      />
      <textarea
        placeholder="Mensaje de la campaña"
        className="w-full h-32 p-2 border rounded mb-4"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
        onClick={handleSubmit}
      >
        Enviar campaña
      </button>
    </div>
  );
};

export default CampaignManager;
