'use client';

import { useState } from 'react';

export default function WebContentEditor() {
  const [content, setContent] = useState('Bienvenido a AQUAZONE Water Park. Aquí irá el contenido que verán los usuarios en la web...');

  const handleSave = () => {
    alert('Contenido guardado (simulado):\n\n' + content);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Editor de contenido web</h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full h-48 p-2 border rounded mb-4"
      />
      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Guardar cambios
      </button>
    </div>
  );
}
