"use client"

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
      >
        <source src="/videos/fondo-hero.mp4" type="video/mp4" />
        Tu navegador no admite video.
      </video>

      {/* Logo animado flotante */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <Image
          src="/images/logo.png"
          alt="Aquazone Waterpark"
          width={350}
          height={350}
          className="animate-float drop-shadow-xl"
        />
      </div>

      {/* Capa de sombra para mejorar el contraste */}
      <div className="absolute inset-0 bg-black/40 z-0" />
    </section>
  );
}
