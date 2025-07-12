'use client';
import { useState } from 'react';

export default function CampaignManager() {
  const [campaigns, setCampaigns] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addCampaign = () => {
    if (input.trim()) {
      setCampaigns([...campaigns, input]);
      setInput('');
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-2">Campañas de Marketing</h3>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 flex-1"
          placeholder="Nueva campaña"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addCampaign} className="bg-red-600 text-white px-4 py-2 rounded">Añadir</button>
      </div>
      <ul className="list-disc pl-6">
        {campaigns.map((c, idx) => (<li key={idx}>{c}</li>))}
      </ul>
    </div>
  );
}
