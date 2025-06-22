import Image from "next/image";

export default function ImageGallery({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((src, i) => (
        <div key={i} className="relative w-full h-48">
          <Image src={src} alt={`Galería ${i}`} layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
      ))}
    </div>
  );
}
