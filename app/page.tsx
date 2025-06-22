'use client'

import { HeroSection } from '@/components/HeroSection'
import { MainButtons } from '@/components/MainButtons'

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <MainButtons />
    </div>
  )
}
