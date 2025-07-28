"use client";
import { useState } from "react";

export default function GaleriasPage() {
  const [imagenes, setImagenes] = useState<string[]>([]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImagenes([...imagenes, ...newImages]);
  };

  return (
    <section className="p-6 space-y-6">
      <h2 className="text-3xl font-bold">Gestión de Galerías</h2>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleUpload}
        className="file-input file-input-bordered w-full max-w-xs"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {imagenes.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Imagen ${i + 1}`}
            className="rounded-xl border border-white/10 hover:scale-105 transition"
          />
        ))}
      </div>
    </section>
  );
}
