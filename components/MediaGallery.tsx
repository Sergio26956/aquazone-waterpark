'use client'

import Image from 'next/image'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const VideoPlayer = dynamic(() => import('./VideoPlayer'), { ssr: false })

const media = [
  { type: 'image', src: '/images/parque1.jpg', alt: 'Parque 1' },
  { type: 'video', src: '/videos/parque2.mp4', alt: 'Video Parque 2' },
  { type: 'image', src: '/images/parque3.jpg', alt: 'Parque 3' },
]

export default function MediaGallery() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section className="py-16 px-4 grid gap-6 md:grid-cols-3">
      {media.map((item, index) => (
        <div
          key={index}
          className="relative rounded-xl overflow-hidden group cursor-pointer"
          onClick={() => setSelected(index)}
        >
          {item.type === 'image' ? (
            <Image
              src={item.src}
              alt={item.alt}
              width={500}
              height={300}
              className="object-cover w-full h-60 group-hover:scale-105 transition duration-500"
            />
          ) : (
            <video
              src={item.src}
              className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
              muted
              loop
              autoPlay
              playsInline
            />
          )}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>
        </div>
      ))}

      {selected !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          {media[selected].type === 'image' ? (
            <Image
              src={media[selected].src}
              alt="Media Fullscreen"
              width={1200}
              height={800}
              className="max-w-full max-h-full"
            />
          ) : (
            <VideoPlayer src={media[selected].src} />
          )}
        </div>
      )}
    </section>
  )
}
