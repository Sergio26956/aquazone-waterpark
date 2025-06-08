'use client';
import Image from 'next/image';

const images = [
  '/media/park1.jpg',
  '/media/park2.jpg',
  '/media/park3.jpg',
];

export default function ImageGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`Aquazone ${i + 1}`}
          width={500}
          height={300}
          className="rounded-xl shadow-lg"
        />
      ))}
    </div>
  );
}
