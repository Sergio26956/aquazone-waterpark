'use client';
import { useState } from 'react';

export default function DocumentUploader() {
  const [uploaded, setUploaded] = useState<string[]>([]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const names = files.map((file) => file.name);
    setUploaded((prev) => [...prev, ...names]);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Cargar Documentos</h2>
      <input type="file" multiple onChange={handleUpload} className="mb-4" />
      <ul className="space-y-1">
        {uploaded.map((file, i) => (
          <li key={i} className="text-sm bg-gray-100 p-2 rounded">{file}</li>
        ))}
      </ul>
    </div>
  );
}
