import React, { useState } from 'react';

const ContentEditor = () => {
  const [content, setContent] = useState('');

  const handleSave = () => {
    console.log('Contenido guardado:', content);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-2">Editor de Contenidos</h2>
      <textarea
        className="w-full p-2 border rounded"
        rows={6}
        placeholder="Edita tu contenido..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        className="mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        onClick={handleSave}
      >
        Guardar
      </button>
    </div>
  );
};

export default ContentEditor;
