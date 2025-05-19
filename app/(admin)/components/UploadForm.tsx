'use client';

import { useState } from 'react';

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    // Aquí iría la lógica real de subida
    alert(`Archivo "${file.name}" simulado como subido.`);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">Subir imagen o video</h2>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-4 w-full"
        accept="image/*,video/*"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Subir
      </button>
    </form>
  );
}
