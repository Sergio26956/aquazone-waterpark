"use client";

import { useState, useRef } from "react";

export default function MediaUploader() {
  const [previews, setPreviews] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setPreviews((prev) => [...prev, data.url]);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    files.forEach(handleUpload);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      Array.from(e.target.files).forEach(handleUpload);
    }
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-2">📤 Subida Drag & Drop + Cloudinary</h2>

      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => inputRef.current?.click()}
        className="border-4 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50"
      >
        Arrastra aquí o haz clic para subir imágenes/videos
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
            {src.match(/\.mp4|\.webm/) ? (
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
