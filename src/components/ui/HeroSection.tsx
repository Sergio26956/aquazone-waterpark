'use client';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center bg-black overflow-hidden">
      <Image
        src="/media/hero.jpg"
        alt="Aquazone Hero"
        layout="fill"
        objectFit="cover"
        className="opacity-60"
        priority
      />
      <div className="z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">AQUAZONE WATER PARK</h1>
        <p className="mt-4 text-xl md:text-2xl">Diversión acuática sin límites</p>
      </div>
    </section>
  );
}
