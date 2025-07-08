'use client';
import { useState } from 'react';

export default function EditorIA() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const generar = async () => {
    setLoading(true);
    const res = await fetch('/api/generate-content', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: input }),
    });

    const data = await res.json();
    setResult(data.result);
    setLoading(false);
  };

  return (
    <div className="p-6 space-y-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold">Generador de Contenido IA</h2>
      <textarea
        className="w-full p-3 border rounded"
        rows={4}
        placeholder="Escribe una idea o tema..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={generar}
        disabled={loading}
      >
        {loading ? 'Generando...' : 'Generar'}
      </button>
      {result && (
        <div className="mt-4 p-3 border rounded bg-gray-50 whitespace-pre-wrap">
          {result}
        </div>
      )}
    </div>
  );
}
