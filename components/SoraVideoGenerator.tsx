'use client';

import { useState } from 'react';

export default function SoraVideoGenerator() {
  const [prompt, setPrompt] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const generateVideo = async () => {
    if (!prompt.trim()) return;
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
      <h2 className="text-xl font-bold mb-4">Generador de Videos AI (Sora)</h2>
      <input
        type="text"
        className="w-full border p-2 mb-4 rounded"
        placeholder="Describe el video que quieres generar"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={generateVideo}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? 'Generando...' : 'Generar Video'}
      </button>
      {videoUrl && (
        <div className="mt-4 flex justify-center">
          <video controls className="max-w-full rounded shadow">
            <source src={videoUrl} type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>
      )}
    </div>
  );
}
