import React, { useState } from 'react';

const AIContentGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');

  const handleGenerate = async () => {
    // Simulación de generación con IA
    setResult(`Resultado generado para: ${prompt}`);
  };

  return (
    <div className="p-4 rounded-lg bg-white shadow-md">
      <h2 className="text-xl font-bold mb-2">Generador de Contenido con IA</h2>
      <textarea
        className="w-full p-2 border rounded"
        rows={3}
        placeholder="Escribe tu idea aquí..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={handleGenerate}
      >
        Generar
      </button>
      {result && <p className="mt-4 bg-gray-100 p-2 rounded">{result}</p>}
    </div>
  );
};

export default AIContentGenerator;
