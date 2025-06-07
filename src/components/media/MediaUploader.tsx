'use client';
import { useRef } from 'react';

export default function MediaUploader({ onUpload }: { onUpload: (file: File) => void }) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    if (fileInputRef.current?.files?.[0]) {
      onUpload(fileInputRef.current.files[0]);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*,video/*"
        ref={fileInputRef}
        onChange={handleChange}
        className="hidden"
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        className="bg-blue-500 text-white px-4 py-2 rounded shadow"
      >
        Subir archivo
      </button>
    </div>
  );
}
