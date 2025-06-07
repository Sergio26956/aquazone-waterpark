'use client';
import { useState } from 'react';

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-64 overflow-hidden rounded shadow">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-full object-cover"
      />
      <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 text-white">
        ◀
      </button>
      <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 text-white">
        ▶
      </button>
    </div>
  );
}
