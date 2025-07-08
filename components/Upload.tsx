'use client';

import { useState } from 'react';
import axios from 'axios';

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (!selected) return;

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/api/upload', formData);
      setUploadedUrl(res.data.url);
    } catch (error) {
      console.error('Error al subir archivo', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border border-dashed border-blue-400 rounded-xl bg-white shadow-lg max-w-md mx-auto mt-10 text-center">
      <h2 className="text-xl font-bold mb-4">Subir archivo a Cloudinary</h2>

      <input
        type="file"
        onChange={handleFileChange}
        accept="image/*,video/*"
        className="mb-4"
      />

      {preview && (
        <div className="mb-4">
          {file?.type.startsWith('video') ? (
            <video src={preview} controls className="w-full rounded-lg" />
          ) : (
            <img src={preview} alt="Preview" className="w-full rounded-lg" />
          )}
        </div>
      )}

      <button
        onClick={handleUpload}
        disabled={!file || loading}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Subiendo...' : 'Subir'}
      </button>

      {uploadedUrl && (
        <div className="mt-4 break-all text-sm">
          <strong>URL subida:</strong>
          <br />
          <a href={uploadedUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            {uploadedUrl}
          </a>
        </div>
      )}
    </div>
  );
}
