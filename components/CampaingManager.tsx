'use client';
import { useState } from 'react';

interface Campaign {
  id: number;
  name: string;
  description: string;
  active: boolean;
}

export default function CampaignManager() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const addCampaign = () => {
    if (name.trim() && description.trim()) {
      setCampaigns([...campaigns, { id: Date.now(), name, description, active: true }]);
      setName('');
      setDescription('');
    }
  };

  const toggleActive = (id: number) => {
    setCampaigns(
      campaigns.map((c) => (c.id === id ? { ...c, active: !c.active } : c))
    );
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Gestor de Campañas</h3>
      <div className="flex flex-col gap-2 mb-4 max-w-md">
        <input
          type="text"
          placeholder="Nombre de la campaña"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
          rows={3}
        />
        <button onClick={addCampaign} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Añadir campaña
        </button>
      </div>
      <ul className="list-disc pl-6">
        {campaigns.map((campaign) => (
          <li key={campaign.id} className="mb-1">
            <span className="font-semibold">{campaign.name}</span> — {campaign.description} —{' '}
            <button
              onClick={() => toggleActive(campaign.id)}
              className={`px-2 py-1 rounded text-white ${
                campaign.active ? 'bg-green-600' : 'bg-red-600'
              }`}
            >
              {campaign.active ? 'Activa' : 'Inactiva'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
