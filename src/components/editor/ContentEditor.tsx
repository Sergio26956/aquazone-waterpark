'use client';

import React, { useState } from 'react';

const ContentEditor = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSave = () => {
    alert(`Contenido guardado: ${title}`);
    // Guardar contenido en una base de datos o almacenamiento local
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h3 className="text-xl font-semibold mb-2">Editor de Contenido</h3>
      <input
        type="text"
        placeholder="Título"
        className="w-full border p-2 mb-2 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Texto"
        className="w-full border p-2 mb-2 rounded h-32"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleSave}
      >
        Guardar contenido
      </button>
    </div>
  );
};

export default ContentEditor;
