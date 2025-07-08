// components/ui/UploadWidget.tsx
import React, { useState } from 'react';
import axios from 'axios';

const UploadWidget = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/api/upload', formData);
      alert('Subido con éxito:\n' + res.data.url);
    } catch (err) {
      alert('Error al subir');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 border border-gray-300 rounded-xl bg-white w-full max-w-md mx-auto text-center">
      <h2 className="text-lg font-semibold mb-2">Subir imagen o video</h2>
      <input type="file" onChange={handleChange} className="mb-4" />
      {preview && <img src={preview} className="max-h-40 mx-auto mb-2 rounded" />}
      {uploading && <p className="text-blue-500">Subiendo...</p>}
    </div>
  );
};

export default UploadWidget;
