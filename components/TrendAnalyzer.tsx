'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function TrendAnalyzer() {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const analyzeTrend = async () => {
    setLoading(true);
    setResult('');
    try {
      const response = await fetch('/api/analyze-trend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic }),
      });
      const data = await response.json();
      setResult(data.trend || 'No se encontraron tendencias.');
    } catch (error) {
      setResult('Error al analizar tendencias.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded shadow space-y-4"
    >
      <h3 className="text-2xl font-bold">Analizador de Tendencias</h3>
      <input
        type="text"
        placeholder="Tema o palabra clave (ej. parques acuáticos)"
        className="w-full border p-2 rounded"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button
        onClick={analyzeTrend}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
      >
        Analizar
      </button>
      {loading && <p>Analizando...</p>}
      {result && (
        <div className="mt-4 bg-gray-100 p-4 rounded border">
          <strong>Resultado:</strong>
          <p>{result}</p>
        </div>
      )}
    </motion.div>
  );
}
