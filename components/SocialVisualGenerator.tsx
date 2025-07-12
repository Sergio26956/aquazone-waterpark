'use client';

import { useState } from 'react';

export default function SocialVisualGenerator() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const res = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setImageUrl(data.url);
    } catch (e) {
      console.error('Error generando imagen', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Generador Visual para Redes Sociales</h2>
      <input
        type="text"
        placeholder="Describe la imagen que quieres"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
      />
      <button
        onClick={generateImage}
        disabled={loading}
        className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
      >
        {loading ? 'Generando...' : 'Generar Imagen'}
      </button>
      <div className="mt-6">
        {imageUrl && (
          <img src={imageUrl} alt="Imagen generada" className="mx-auto rounded shadow" />
        )}
      </div>
    </div>
  );
}
