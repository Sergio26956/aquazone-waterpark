'use client';

import React, { useState } from 'react';

const BuilderEditor = () => {
  const [content, setContent] = useState('Aquí irá el contenido editable...');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Editor de Contenidos</h2>
      <textarea
        value={content}
        onChange={handleChange}
        className="w-full h-60 p-4 border border-gray-300 rounded-lg resize-none"
      />
      <p className="mt-4 text-gray-600">Previsualización:</p>
      <div className="mt-2 p-4 bg-gray-100 rounded">{content}</div>
    </div>
  );
};

export default BuilderEditor;
