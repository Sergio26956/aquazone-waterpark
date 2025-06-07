import React, { useState } from 'react';

const MediaUploader = () => {
  const [files, setFiles] = useState<FileList | null>(null);

  const handleUpload = () => {
    if (files) {
      Array.from(files).forEach((file) => {
        console.log('Archivo cargado:', file.name);
      });
    }
  };

  return (
    <div className="p-4 rounded-lg bg-white shadow-md">
      <h2 className="text-xl font-bold mb-2">Subidor de Medios</h2>
      <input
        type="file"
        multiple
        onChange={(e) => setFiles(e.target.files)}
        className="mb-2"
      />
      <button
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        onClick={handleUpload}
      >
        Subir
      </button>
    </div>
  );
};

export default MediaUploader;
