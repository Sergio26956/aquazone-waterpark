'use client';

import { useState } from 'react';
import axios from 'axios';

export default function Upload() {
  const [preview, setPreview] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);

    const res = await axios.post('/api/upload', formData);
    console.log('Upload URL:', res.data.url);

    setUploading(false);
  };

  return (
    <div className="p-4 border rounded-xl w-full max-w-md mx-auto bg-white shadow">
      <input type="file" onChange={handleFileChange} className="mb-4" />
      {uploading && <p>Subiendo...</p>}
      {preview && <img src={preview} alt="preview" className="w-full rounded-md" />}
    </div>
  );
}
