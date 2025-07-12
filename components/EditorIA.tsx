'use client';
import { useState } from 'react';

export default function EditorIA() {
  const [text, setText] = useState('');
  const [generated, setGenerated] = useState('');

  const handleGenerate = () => {
    if (!text.trim()) return;
    setGenerated(`🧠 IA generó el contenido para: "${text}"`);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-2">Editor de Contenido IA</h2>
      <input
        type="text"
        className="border p-2 w-full mb-2"
        placeholder="Escribe una idea o tema"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleGenerate} className="bg-green-600 text-white px-4 py-2 rounded">
        Generar
      </button>
      <div className="mt-4 text-gray-800">{generated}</div>
    </div>
  );
}
