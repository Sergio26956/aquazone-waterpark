"use client";

import Image from "next/image";
import VideoPlayer from "@/components/VideoPlayer";

export default function KamikazePage() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-aqua">Kamikaze Jump</h1>
        <p className="text-lg mb-6 text-center">
          La atracción más extrema y emocionante. Una plataforma elevada que permite un salto libre con total seguridad.
        </p>

        <div className="relative w-full h-64 md:h-[450px] mb-6 rounded-xl overflow-hidden">
          <Image
            src="/images/kamikaze.jpg"
            alt="Kamikaze Jump"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            priority
          />
        </div>

        <VideoPlayer src="/videos/kamikaze.mp4" />

        <p className="text-md mt-6 text-center">
          Diseñado para los más atrevidos. Perfecto para eventos que buscan una atracción visual y extrema.
        </p>
      </div>
    </section>
  );
}
