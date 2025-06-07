'use client';
import { useState } from 'react';

export default function ContentEditor() {
  const [content, setContent] = useState('');

  const handleSave = () => {
    alert('Contenido guardado: ' + content);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Editor de Contenido</h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full h-64 p-4 border rounded"
        placeholder="Edita el contenido..."
      />
      <button
        onClick={handleSave}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Guardar
      </button>
    </div>
  );
}
