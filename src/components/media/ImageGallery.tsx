'use client';
import Image from 'next/image';

const images = [
  '/media/gallery1.jpg',
  '/media/gallery2.jpg',
  '/media/gallery3.jpg',
  '/media/gallery4.jpg',
];

export default function ImageGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {images.map((src, i) => (
        <div key={i} className="relative w-full h-64 overflow-hidden rounded-xl shadow-lg">
          <Image src={src} alt={`Galería ${i + 1}`} fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}
