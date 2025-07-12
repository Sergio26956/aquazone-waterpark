'use client';
import { useState } from 'react';

export default function SocialVisualGenerator() {
  const [idea, setIdea] = useState('');
  const [visual, setVisual] = useState('');

  const generateVisual = () => {
    if (!idea.trim()) return;
    setVisual(`🖼️ Visual generado para campaña: "${idea}"`);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-2">Generador Visual para Redes</h2>
      <input
        type="text"
        className="border p-2 w-full mb-2"
        placeholder="Ej. Promoción de verano"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
      />
      <button
        onClick={generateVisual}
        className="bg-pink-600 text-white px-4 py-2 rounded"
      >
        Generar Visual
      </button>
      <div className="mt-4 text-gray-700">{visual}</div>
    </div>
  );
}
