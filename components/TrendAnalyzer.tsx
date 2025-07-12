'use client';
import { useState } from 'react';

export default function TrendAnalyzer() {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleAnalyze(e) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/trends', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic }),
    });
    const data = await res.json();
    setResult(data.result);
    setLoading(false);
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-center mb-4">Análisis de Tendencias IA</h2>
      <form onSubmit={handleAnalyze} className="space-y-4">
        <input
          type="text"
          placeholder="Tema o palabra clave"
          className="w-full p-2 border rounded"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
        />
        <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700">
          Analizar Tendencia
        </button>
      </form>
      {loading ? <p className="mt-4 text-sm">Analizando...</p> : <p className="mt-4 text-sm whitespace-pre-line">{result}</p>}
    </div>
  );
}

// Archivo: /app/api/trends/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { analyzeTrends } from '@/utils/analyzeTrends';

export async function POST(request: NextRequest) {
  const { topic } = await request.json();
  if (!topic) return NextResponse.json({ result: 'Falta el tema' });
  const result = await analyzeTrends(topic);
  return NextResponse.json({ result });
}
