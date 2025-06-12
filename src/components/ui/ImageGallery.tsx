'use client';
import Image from 'next/image';

export default function ImageGallery({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, idx) => (
        <div key={idx} className="relative w-full h-64">
          <Image src={src} alt={`gallery-${idx}`} fill className="object-cover rounded-xl" />
        </div>
      ))}
    </div>
  );
}
