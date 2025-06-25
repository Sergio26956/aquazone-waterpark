import React from 'react'
import HeroSection from '@/components/HeroSection'
import MainButtons from '@/components/MainButtons'
import AnimatedLogo from '@/components/AnimatedLogo'

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/fondo.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Logo animado y contenido */}
      <AnimatedLogo />

      <div className="relative z-10">
        <HeroSection />
        <MainButtons />
      </div>
    </main>
  )
}
