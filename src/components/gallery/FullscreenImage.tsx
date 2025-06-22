import Image from "next/image";
import { useState } from "react";

export default function FullscreenImage({ src }: { src: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-zoom-in">
        <Image src={src} alt="Vista previa" width={300} height={200} className="rounded" />
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={() => setIsOpen(false)}>
          <Image src={src} alt="Ampliada" width={800} height={600} className="rounded-lg" />
        </div>
      )}
    </>
  );
}
