'use client';
import { useState } from 'react';

export default function IAGenerator() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const simulateIA = () => {
    setOutput(`Contenido optimizado por IA para: "${input}"`);
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Generador IA de Contenido</h2>
      <input
        type="text"
        className="border p-2 w-full mb-2"
        placeholder="Ingresa una palabra clave"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={simulateIA} className="bg-indigo-600 text-white px-4 py-2 rounded">
        Generar Contenido
      </button>
      <div className="mt-4 text-sm text-gray-700">{output}</div>
    </div>
  );
}
