'use client';
import { useState } from 'react';

type Props = {
  images: string[];
};

export default function ImageCarousel({ images }: Props) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="relative max-w-3xl mx-auto">
      <img src={images[index]} className="w-full h-96 object-cover rounded-lg shadow-md" />
      <button onClick={prev} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
        ‹
      </button>
      <button onClick={next} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow">
        ›
      </button>
    </div>
  );
}
