"use client";
import { useEffect, useState } from "react";

export default function VideoShowcase() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <section className="w-full bg-black py-10 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 text-center">
          AQUAZONE en Acción
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-video">
            <video
              src="/videos/demo-flotante.mp4"
              controls
              className="w-full h-full rounded-2xl shadow-lg"
              poster="/images/poster-flotante.jpg"
            />
          </div>
          <div className="aspect-video">
            <video
              src="/videos/demo-terrestre.mp4"
              controls
              className="w-full h-full rounded-2xl shadow-lg"
              poster="/images/poster-terrestre.jpg"
            />
          </div>
          <div className="aspect-video">
            <video
              src="/videos/demo-urbano.mp4"
              controls
              className="w-full h-full rounded-2xl shadow-lg"
              poster="/images/poster-urbano.jpg"
            />
          </div>
          <div className="aspect-video">
            <video
              src="/videos/demo-kamikaze.mp4"
              controls
              className="w-full h-full rounded-2xl shadow-lg"
              poster="/images/poster-kamikaze.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
