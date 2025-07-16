'use client';
import { useState } from 'react';

export default function VisualAIAssistant() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const generateImage = async () => {
    const res = await fetch('/api/dalle', {
      method: 'POST',
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setImageUrl(data.url);
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow rounded">
      <h3 className="text-lg font-bold mb-2">Generador Visual AI (DALL·E)</h3>
      <input
        className="w-full border p-2 rounded mb-2"
        placeholder="Describe la imagen..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={generateImage}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Generar Imagen
      </button>
      {imageUrl && <img src={imageUrl} alt="Imagen AI" className="mt-4 rounded" />}
    </div>
  );
}
