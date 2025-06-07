'use client';

import React, { useState } from 'react';

const ContentEditor = () => {
  const [image, setImage] = useState('');
  const [text, setText] = useState('');

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Gestión de Contenidos</h2>
      <input
        type="text"
        placeholder="URL de imagen"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full p-2 border mb-2 rounded"
      />
      <textarea
        placeholder="Texto de contenido"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 h-40 border mb-2 rounded"
      />
      <div className="border-t pt-4 mt-4">
        <h3 className="text-lg font-semibold">Previsualización:</h3>
        {image && <img src={image} alt="Preview" className="mt-2 rounded shadow-md" />}
        <p className="mt-2 text-gray-700">{text}</p>
      </div>
    </div>
  );
};

export default ContentEditor;
