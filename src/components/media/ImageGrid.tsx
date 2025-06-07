'use client';

export default function ImageGrid({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {images.map((src, idx) => (
        <img key={idx} src={src} alt={`grid-${idx}`} className="rounded shadow w-full h-48 object-cover" />
      ))}
    </div>
  );
}
