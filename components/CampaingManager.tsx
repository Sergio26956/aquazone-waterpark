'use client';
import { useState } from 'react';

interface Campaign {
  id: number;
  title: string;
  description: string;
}

export default function CampaignManager() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [form, setForm] = useState({ title: '', description: '' });

  const addCampaign = () => {
    if (form.title.trim() !== '') {
      setCampaigns([...campaigns, { id: Date.now(), ...form }]);
      setForm({ title: '', description: '' });
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Gestor de Campañas</h3>
      <div className="mb-4 space-y-2">
        <input
          type="text"
          placeholder="Título de la campaña"
          className="border p-2 rounded w-full"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          placeholder="Descripción"
          className="border p-2 rounded w-full"
          rows={4}
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <button
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          onClick={addCampaign}
        >
          Añadir Campaña
        </button>
      </div>

      <ul className="divide-y divide-gray-300">
        {campaigns.map(({ id, title, description }) => (
          <li key={id} className="py-2">
            <strong>{title}</strong>: {description}
          </li>
        ))}
      </ul>
    </div>
  );
}
