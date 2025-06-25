import React from 'react'
import HeroSection from '@/components/HeroSection'
import MainButtons from '@/components/MainButtons'
import AnimatedLogo from '@/components/AnimatedLogo'

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <AnimatedLogo />
      <HeroSection />
      <MainButtons />
    </main>
  )
}
