// components/HeroSection.tsx
'use client'

export const HeroSection = () => (
  <section className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-black text-white">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute w-full h-full object-cover z-0"
      src="/videos/hero.mp4"
    />
    <div className="relative z-10 text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">AQUAZONE WATER PARK</h1>
      <p className="text-lg md:text-2xl mt-4 drop-shadow-md">
        Parques acuáticos espectaculares: Flotantes y Terrestres
      </p>
    </div>
  </section>
)
