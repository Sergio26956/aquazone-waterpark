'use client';
import Image from 'next/image';

const images = [
  '/gallery1.jpg',
  '/gallery2.jpg',
  '/gallery3.jpg',
  '/gallery4.jpg',
  '/gallery5.jpg',
  '/gallery6.jpg',
];

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
      {images.map((src, i) => (
        <div key={i} className="relative w-full h-40 sm:h-48 lg:h-64">
          <Image
            src={src}
            alt={`Imagen ${i + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}
