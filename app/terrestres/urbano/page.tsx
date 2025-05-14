"use client";

import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";

const UrbanoPage = () => {
  return (
    <main className="w-full min-h-screen bg-white text-black">
      <section className="relative w-full h-[60vh]">
        <VideoPlayer src="/videos/urbano-bg.mp4" poster="/images/urbano-cover.jpg" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center drop-shadow-xl">
            Parque Acuático Urbano Móvil
          </h1>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4">Descripción</h2>
        <p className="mb-6 text-lg">
          Diseñado para eventos urbanos y espacios públicos, nuestro parque acuático
          urbano móvil ofrece actividades refrescantes y divertidas para todas las edades.
        </p>

        <h3 className="text-2xl font-semibold mb-2">Características:</h3>
        <ul className="list-disc list-inside mb-8 text-lg">
          <li>Fácil instalación en zonas urbanas</li>
          <li>Actividades acuáticas portátiles y seguras</li>
          <li>Diseño modular adaptable</li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            src="/images/urbano-1.jpg"
            alt="Parque Urbano 1"
            width={800}
            height={600}
            className="rounded-xl shadow-lg"
          />
          <Image
            src="/images/urbano-2.jpg"
            alt="Parque Urbano 2"
            width={800}
            height={600}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>
    </main>
  );
};

export default UrbanoPage;
