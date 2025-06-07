'use client';
import { useState } from 'react';

const images = [
  '/images/park1.jpg',
  '/images/park2.jpg',
  '/images/park3.jpg',
  '/images/park4.jpg',
];

export default function ImageGallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Gallery ${i}`}
          onClick={() => setSelected(src)}
          className="cursor-pointer rounded shadow hover:scale-105 transition"
        />
      ))}
      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img src={selected} alt="Selected" className="max-w-full max-h-full rounded" />
        </div>
      )}
    </div>
  );
}
