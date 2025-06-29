'use client'

import HeroSection from '@/components/ui/HeroSection'
import IntroBlock from '@/components/IntroBlock'
import MainButtons from '@/components/MainButtons'
import VideoBanner from '@/components/VideoBanner'
import ParallaxSection from '@/components/ParallaxSection'
import FeatureGrid from '@/components/ui/FeaturesGrid'
import TestimonialsSection from '@/components/ui/TestimonialsSection'
import StatsSection from '@/components/ui/StatsSection'
import SectionDivider from '@/components/ui/SectionDivider'
import ScrollToTopButton from '@/components/ui/ScrollToTopButton'

export default function HomePage() {
  return (
    <main className="page-transition">
      <HeroSection />
      <IntroBlock />
      <MainButtons />
      <VideoBanner />
      <ParallaxSection />
      <FeatureGrid />
      <SectionDivider />
      <StatsSection />
      <TestimonialsSection />
      <ScrollToTopButton />
    </main>
  )
}
