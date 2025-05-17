"use client";

import { useRef, useState } from "react";

export default function Upload() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setMessage("Archivo listo para subir.");
    }
  };

  const handleUpload = () => {
    if (!file) return;
    setMessage("Subida completada (simulado).");
  };

  return (
    <div className="p-4 border rounded bg-white shadow">
      <h3 className="font-bold mb-2">Subir archivo</h3>
      <input type="file" ref={inputRef} onChange={handleFileChange} className="mb-2" />
      <button onClick={handleUpload} className="bg-blue-600 text-white px-4 py-1 rounded">Subir</button>
      {message && <p className="mt-2 text-green-600">{message}</p>}
    </div>
  );
}
