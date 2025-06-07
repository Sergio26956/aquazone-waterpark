'use client';

import React, { useState } from 'react';

const ContentEditor = () => {
  const [text, setText] = useState('Escribe aquí tu contenido...');

  return (
    <div className="p-4 bg-white rounded-xl shadow">
      <h3 className="text-xl font-semibold mb-2">Editor de Contenido</h3>
      <textarea
        className="w-full border p-2 rounded min-h-[200px]"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-2 text-gray-600 text-sm">Contenido en tiempo real:</p>
      <div className="mt-2 p-2 bg-gray-100 border rounded">{text}</div>
    </div>
  );
};

export default ContentEditor;
