'use client';
import { useState } from 'react';

export default function VisualAIAssistant() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');

  const generateImage = async () => {
    if (!prompt.trim()) return;
    setResult('Generando imagen...');
    // Simula una llamada a un generador IA
    setTimeout(() => {
      setResult(`✅ Imagen generada a partir del prompt: "${prompt}"`);
    }, 2000);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-2">Asistente Visual IA</h2>
      <input
        type="text"
        className="border p-2 w-full mb-2"
        placeholder="Describe la imagen que deseas"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={generateImage} className="bg-blue-600 text-white px-4 py-2 rounded">
        Generar Imagen
      </button>
      <p className="mt-4">{result}</p>
    </div>
  );
}
