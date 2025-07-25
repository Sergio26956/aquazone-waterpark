'use client';

import { useState } from 'react';

export default function SoraVideoGenerator() {
  const [prompt, setPrompt] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateVideo = async () => {
    setError('');
    if (prompt.trim().length < 10) {
      setError('Por favor, ingresa al menos 10 caracteres en el prompt.');
      return;
    }

    setLoading(true);
    setVideoUrl('');

    try {
      const res = await fetch('/api/sora', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (res.ok) {
        setVideoUrl(data.videoUrl);
      } else {
        setError(data.message || 'Error desconocido');
      }
    } catch {
      setError('Error de conexión al servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto bg-white rounded shadow" role="region" aria-label="Generador de videos AI">
      <h2 className="text-xl font-bold mb-4">Generador de Videos AI (Sora)</h2>

      <label htmlFor="promptInput" className="block mb-1 font-semibold">
        Describe el video que quieres generar
      </label>
      <textarea
        id="promptInput"
        rows={4}
        className="w-full border p-2 mb-2 rounded resize-none"
        placeholder="Escribe tu descripción aquí..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        aria-required="true"
      />

      {error && <p className="text-red-600 mb-2">{error}</p>}

      <button
        onClick={generateVideo}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        aria-busy={loading}
      >
        {loading ? 'Generando...' : 'Generar Video'}
      </button>

      <div className="mt-4 flex justify-center">
        {videoUrl ? (
          <video controls className="max-w-full rounded shadow" aria-label="Video generado por IA">
            <source src={videoUrl} type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
        ) : (
          !loading && <p className="text-gray-500">Aquí aparecerá el video generado.</p>
        )}
      </div>
    </div>
  );
}
