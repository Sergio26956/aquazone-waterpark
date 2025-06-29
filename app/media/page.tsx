'use client'
import Image from 'next/image'

export default function Media() {
  const imagenes = [
    '/images/flotante1.jpg',
    '/images/urbano1.jpg',
    '/images/kamikaze.jpg'
  ]

  const videos = [
    '/videos/parque1.mp4',
    '/videos/flotante-demo.mp4'
  ]

  return (
    <section className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Zona Multimedia</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {imagenes.map((src, i) => (
          <div key={i} className="relative h-64 w-full overflow-hidden rounded-xl border border-slate-700">
            <Image src={src} alt={`Imagen ${i + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map((src, i) => (
          <video key={i} controls className="w-full h-64 rounded-xl border border-slate-700 object-cover">
            <source src={src} type="video/mp4" />
            Tu navegador no soporta video.
          </video>
        ))}
      </div>
    </section>
  )
}
