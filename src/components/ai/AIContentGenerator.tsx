'use client';

import React, { useState } from 'react';

const AIContentGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');

  const generate = () => {
    setResult(`Ejemplo generado automáticamente para: "${prompt}"`);
    // Aquí puedes integrar con API real como OpenAI o similar
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h3 className="text-xl font-semibold mb-2">Generador de Contenido IA</h3>
      <input
        type="text"
        placeholder="Ingresa un tema o título"
        className="w-full border p-2 mb-2 rounded"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        className="bg-purple-600 text-white px-4 py-2 rounded mb-2"
        onClick={generate}
      >
        Generar
      </button>
      {result && (
        <div className="mt-2 p-3 bg-gray-100 border rounded">
          <strong>Resultado:</strong> {result}
        </div>
      )}
    </div>
  );
};

export default AIContentGenerator;
