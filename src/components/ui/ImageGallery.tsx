'use client';
import Image from 'next/image';

const images = [
  '/media/img1.jpg',
  '/media/img2.jpg',
  '/media/img3.jpg',
];

export default function ImageGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <div key={i} className="relative w-full h-64">
          <Image src={src} alt={`galería-${i}`} fill className="object-cover rounded-xl" />
        </div>
      ))}
    </div>
  );
}
