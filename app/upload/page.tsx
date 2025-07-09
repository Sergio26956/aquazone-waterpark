'use client';

import { useState } from 'react';

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    setUrl(data.url);
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">Subir archivo AQUAZONE</h1>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-teal-600 px-6 py-2 text-white rounded hover:bg-teal-700"
      >
        {loading ? 'Subiendo...' : 'Subir'}
      </button>

      {url && (
        <div className="mt-6">
          <p className="mb-2">Archivo subido:</p>
          <a href={url} target="_blank" className="text-blue-400 underline">
            {url}
          </a>
        </div>
      )}
    </div>
  );
}
