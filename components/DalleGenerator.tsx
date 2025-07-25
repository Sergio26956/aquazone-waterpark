'use client';

import { useState } from 'react';

export default function DalleGenerator() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setImageUrl('');

    try {
      const res = await fetch('/api/dalle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (res.ok) {
        setImageUrl(data.url);
      } else {
        alert('Error: ' + data.message);
      }
    } catch {
      alert('Error de conexión.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Generador de Imágenes AI (DALL·E)</h2>
      <input
        type="text"
        className="w-full border p-2 mb-4 rounded"
        placeholder="Describe la imagen que quieres generar"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={generateImage}
        disabled={loading}
        className="bg-purple-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? 'Generando...' : 'Generar Imagen'}
      </button>
      {imageUrl && (
        <div className="mt-4 flex justify-center">
          <img src={imageUrl} alt="Imagen generada" className="max-w-full rounded shadow" />
        </div>
      )}
    </div>
  );
}
