'use client';
import { useState } from 'react';

export default function SocialVisualGenerator() {
  const [event, setEvent] = useState('');
  const [style, setStyle] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleGenerate(e) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/media-visual', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event, style }),
    });
    const data = await res.json();
    setResult(data.visual);
    setLoading(false);
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">Generador Visual IA para Redes</h2>
      <form onSubmit={handleGenerate} className="space-y-4">
        <input
          type="text"
          placeholder="Nombre del evento"
          className="w-full p-2 border rounded"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Estilo (divertido, moderno, acuático...)"
          className="w-full p-2 border rounded"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Generar Visual
        </button>
      </form>
      {loading ? (
        <p className="mt-4 text-sm">Generando...</p>
      ) : (
        <p className="mt-4 text-sm whitespace-pre-line">{result}</p>
      )}
    </div>
  );
}
