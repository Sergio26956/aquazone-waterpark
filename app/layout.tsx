import './globals.css'
import { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FloatingCallButton } from '@/components/FloatingCallButton'
import { SocialBar } from '@/components/SocialBar'

export const metadata: Metadata = {
  title: 'AQUAZONE Water Park',
  description: 'Parques acuáticos hinchables - Flotantes y Terrestres',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-black font-sans">
        <Header />
        <main className="relative z-10">{children}</main>
        <SocialBar />
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  )
}
