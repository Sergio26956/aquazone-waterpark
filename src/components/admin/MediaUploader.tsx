'use client';
import { useRef, useState } from 'react';

export default function MediaUploader() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [files, setFiles] = useState<File[]>([]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Subir Medios</h3>
      <input
        type="file"
        accept="image/*,video/*"
        multiple
        ref={inputRef}
        onChange={handleUpload}
        className="mb-2"
      />
      <ul>
        {files.map((file, i) => (
          <li key={i}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
}
