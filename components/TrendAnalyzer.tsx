'use client';

import { useState } from 'react';
import { TrendIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrendAnalyzer() {
  const [input, setInput] = useState('');
  const [trends, setTrends] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const analyzeTrends = async () => {
    if (!input.trim()) return;

    setLoading(true);
    try {
      const res = await fetch('/api/trends', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: input }),
      });

      const data = await res.json();
      setTrends(data.trends || []);
    } catch (error) {
      console.error('Error al analizar tendencias', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendIcon />
        <h2 className="text-xl font-bold">Análisis de Tendencias con IA</h2>
      </div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Escribe un tema o palabra clave"
        className="border px-4 py-2 w-full rounded mb-4"
      />
      <button
        onClick={analyzeTrends}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition"
      >
        {loading ? 'Analizando...' : 'Analizar'}
      </button>

      <div className="mt-6">
        {trends.length > 0 && (
          <ul className="list-disc pl-6 space-y-2">
            {trends.map((t, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {t}
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
