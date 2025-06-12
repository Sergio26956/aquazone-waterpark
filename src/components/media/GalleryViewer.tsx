'use client';
import { useState } from 'react';

export default function GalleryViewer({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((currentIndex + 1) % images.length);
  const prevImage = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);

  return (
    <div className="w-full max-w-3xl mx-auto text-center">
      <img src={images[currentIndex]} alt="Gallery" className="rounded shadow-lg mb-4" />
      <div className="flex justify-between">
        <button onClick={prevImage} className="text-blue-600 hover:underline">Anterior</button>
        <button onClick={nextImage} className="text-blue-600 hover:underline">Siguiente</button>
      </div>
    </div>
  );
}
