'use client';
import { useState } from 'react';

export default function SEOEditor() {
  const [text, setText] = useState('');
  const [optimized, setOptimized] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleOptimize(e) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/seo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    const data = await res.json();
    setOptimized(data.optimized);
    setLoading(false);
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">Editor SEO IA</h2>
      <form onSubmit={handleOptimize} className="space-y-4">
        <textarea
          rows={5}
          placeholder="Texto para optimizar SEO"
          className="w-full p-2 border rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
          Optimizar Texto
        </button>
      </form>
      {loading ? (
        <p className="mt-4 text-sm">Optimizando...</p>
      ) : (
        <p className="mt-4 text-sm whitespace-pre-line">{optimized}</p>
      )}
    </div>
  );
}
