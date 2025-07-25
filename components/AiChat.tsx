'use client';

import { useState } from 'react';

export default function AiChat() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const sendPrompt = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResponse('');

    try {
      const res = await fetch('/api/openai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();
      if (res.ok) {
        setResponse(data.text);
      } else {
        setResponse('Error: ' + data.message);
      }
    } catch {
      setResponse('Error de conexión.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Chat AI - Pregunta lo que quieras</h2>
      <textarea
        className="w-full border p-2 mb-4 rounded"
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe tu pregunta..."
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        onClick={sendPrompt}
        disabled={loading}
      >
        {loading ? 'Cargando...' : 'Enviar'}
      </button>
      {response && (
        <div className="mt-4 p-3 bg-gray-100 rounded whitespace-pre-wrap">{response}</div>
      )}
    </div>
  );
}
