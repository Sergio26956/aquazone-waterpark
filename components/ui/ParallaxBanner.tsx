'use client'
import { Parallax } from 'react-scroll-parallax'

export default function ParallaxBanner() {
  return (
    <section className="relative w-full h-[60vh] overflow-hidden">
      <Parallax speed={-20}>
        <img
          src="/imagenes/banner.jpg"
          alt="Banner"
          className="w-full h-full object-cover brightness-75"
        />
      </Parallax>
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <h2 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
          ¡Diversión Acuática sin Límites!
        </h2>
      </div>
    </section>
  )
}
