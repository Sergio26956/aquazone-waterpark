'use client';
import { useState } from 'react';

const videos = [
  '/video1.mp4',
  '/video2.mp4',
  '/video3.mp4',
];

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % videos.length);
  const prev = () => setCurrent((current - 1 + videos.length) % videos.length);

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-8">
      <video
        key={videos[current]}
        src={videos[current]}
        controls
        className="w-full rounded-xl"
      />
      <div className="flex justify-between mt-2">
        <button onClick={prev} className="text-blue-600">Anterior</button>
        <button onClick={next} className="text-blue-600">Siguiente</button>
      </div>
    </div>
  );
}
