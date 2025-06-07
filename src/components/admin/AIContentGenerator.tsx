'use client';
import { useState } from 'react';

export default function AIContentGenerator() {
  const [prompt, setPrompt] = useState('');
  const [generated, setGenerated] = useState('');

  const generateContent = () => {
    setGenerated(`Texto generado a partir del prompt: "${prompt}"`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Generador de Contenido con IA</h2>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full h-32 p-2 border rounded"
        placeholder="Introduce tu prompt para generar contenido..."
      />
      <button
        onClick={generateContent}
        className="mt-4 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
      >
        Generar
      </button>
      {generated && <p className="mt-4 bg-gray-100 p-4 rounded">{generated}</p>}
    </div>
  );
}
