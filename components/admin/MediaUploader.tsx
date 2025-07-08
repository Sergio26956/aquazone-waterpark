"use client";

import { useState, useRef } from "react";

export default function MediaUploader() {
  const [previews, setPreviews] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    const urls = files.map(file => URL.createObjectURL(file));
    setPreviews(prev => [...prev, ...urls]);
    // Aquí podrías subir a Cloudinary o almacenamiento
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(Array.from(e.target.files));
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-2">📤 Subida de Multimedia (Drag & Drop)</h2>

      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-4 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50"
        onClick={() => inputRef.current?.click()}
      >
        Arrastra imágenes o vídeos aquí, o haz clic para seleccionar
        <input
          ref={inputRef}
          type="file"
          accept="image/*,video/*"
          multiple
          onChange={handleInput}
          className="hidden"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {previews.map((src, i) => (
          <div key={i} className="relative border rounded overflow-hidden">
            {src.match(/video/) ? (
              <video src={src} controls className="w-full h-auto" />
            ) : (
              <img src={src} alt={`preview-${i}`} className="w-full h-auto object-cover" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
