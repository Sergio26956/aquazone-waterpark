import Gallery from '@/components/Gallery'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Galería - AQUAZONE',
  description: 'Fotos y vídeos de parques acuáticos',
}

export default function GaleriaPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <h1 className="text-center text-3xl font-bold mb-8">Galería Multimedia</h1>
      <Gallery />
    </main>
  )
}
