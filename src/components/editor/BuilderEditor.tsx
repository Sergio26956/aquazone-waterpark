'use client';

import React, { useState } from 'react';

const BuilderEditor = () => {
  const [sections, setSections] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const addSection = () => {
    if (input.trim()) {
      setSections([...sections, input]);
      setInput('');
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h3 className="text-xl font-semibold mb-2">Constructor de Secciones</h3>
      <input
        type="text"
        placeholder="Nombre de la nueva sección"
        className="w-full border p-2 mb-2 rounded"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={addSection}
      >
        Añadir sección
      </button>
      <ul className="mt-4 list-disc pl-6 text-gray-700">
        {sections.map((sec, i) => (
          <li key={i}>{sec}</li>
        ))}
      </ul>
    </div>
  );
};

export default BuilderEditor;
