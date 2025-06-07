'use client';
import { useState } from 'react';

export default function ImageCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-64 overflow-hidden rounded-lg shadow">
      <img src={images[current]} className="w-full h-full object-cover" alt="carousel" />
      <button onClick={prev} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-1 rounded-full shadow">←</button>
      <button onClick={next} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-1 rounded-full shadow">→</button>
    </div>
  );
}
