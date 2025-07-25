'use client';
import { useState } from 'react';

interface Campaign {
  id: number;
  title: string;
  description: string;
}

export default function CampaignManager() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([
    { id: 1, title: 'Verano 2025', description: 'Campaña para temporada alta verano 2025' },
  ]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addCampaign = () => {
    if (title.trim() && description.trim()) {
      setCampaigns([...campaigns, { id: Date.now(), title: title.trim(), description: description.trim() }]);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Gestor de Campañas</h3>
      <div className="mb-4 flex flex-col gap-2 max-w-md">
        <input
          type="text"
          placeholder="Título"
          className="border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Descripción"
          className="border p-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addCampaign} className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Añadir Campaña
        </button>
      </div>

      <ul className="list-disc pl-6 space-y-2">
        {campaigns.map(({ id, title, description }) => (
          <li key={id}>
            <strong>{title}</strong>: {description}
          </li>
        ))}
      </ul>
    </div>
  );
}
