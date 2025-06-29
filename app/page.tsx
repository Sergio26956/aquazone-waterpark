'use client'

import HeroSection from '@/components/ui/HeroSection'
import CategoriasPrincipales from '@/components/CategoriasPrincipales'
import AnimatedWaveBackground from '@/components/ui/AnimatedWaveBackground'
import ParallaxBanner from '@/components/ui/ParallaxBanner'
import FloatingLogo from '@/components/FloatingLogo'
import ScrollToTopButton from '@/components/ui/ScrollToTopButton'
import VideoBackground from '@/components/VideoBackground'
import VisualEffectsWrapper from '@/components/VisualEffectsWrapper'
import FloatingCallButton from '@/components/FloatingCallButton'
import ContactSection from '@/components/sections/contact-section'
import SocialFeed from '@/components/SocialFeed'
import StatsSection from '@/components/ui/TestimonialsSection'
import Footer from '@/components/ui/Footer'
import StickyContactButton from '@/components/StickyContactButton'

export default function Home() {
  return (
    <VisualEffectsWrapper>
      <VideoBackground />
      <HeroSection />
      <FloatingLogo />
      <AnimatedWaveBackground />
      <ParallaxBanner />
      <CategoriasPrincipales />
      <StatsSection />
      <SocialFeed />
      <ContactSection />
      <StickyContactButton />
      <FloatingCallButton />
      <ScrollToTopButton />
      <Footer />
    </VisualEffectsWrapper>
  )
}
