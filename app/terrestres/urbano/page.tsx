"use client";

import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";

export default function UrbanoPage() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-aqua">Parque Acuático Urbano Móvil</h1>
        <p className="text-lg mb-6 text-center">
          Esta modalidad urbana está compuesta por 5 atracciones espectaculares, montadas sobre asfalto en ciudades o eventos especiales.
        </p>

        <div className="relative w-full h-64 md:h-[450px] mb-6 rounded-xl overflow-hidden">
          <Image
            src="/images/urbano_categoria.jpg"
            alt="Parque Urbano Móvil"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            priority
          />
        </div>

        <VideoPlayer src="/videos/urbano.mp4" />

        <p className="text-md mt-6 text-center">
          Ideal para instalaciones temporales en zonas urbanas, fiestas locales o eventos especiales. Diversión garantizada sin necesidad de piscina.
        </p>
      </div>
    </section>
  );
}
