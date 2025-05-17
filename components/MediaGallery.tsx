"use client";
import { useState } from "react";

const images = [
  "/images/aquazone1.jpg",
  "/images/aquazone2.jpg",
  "/images/aquazone3.jpg",
];

export default function MediaGallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="p-6 bg-white mt-8 rounded shadow">
      <h2 className="text-3xl font-bold mb-4">Galería Multimedia</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`imagen-${i}`}
            onClick={() => setSelected(src)}
            className="cursor-pointer rounded hover:scale-105 transition"
          />
        ))}
      </div>
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img src={selected} className="max-w-[90%] max-h-[90%] rounded" />
        </div>
      )}
    </section>
  );
}
