'use client';
import { useState } from 'react';

export default function VisualImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      setImageUrl(data.url);
    } catch (err) {
      alert('Error al generar imagen');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Generador de Imágenes AI</h2>
      <input
        type="text"
        placeholder="Escribe lo que quieres ver"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full border p-2 rounded mb-4"
      />
      <button
        onClick={generateImage}
        disabled={loading}
        className="w-full bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700"
      >
        {loading ? 'Generando...' : 'Crear Imagen'}
      </button>
      {imageUrl && (
        <img src={imageUrl} alt="Generado por AI" className="mt-6 rounded" />
      )}
    </div>
  );
}
