'use client'

import Image from 'next/image'
import { useState } from 'react'

const media = [
  { type: 'image', src: '/images/galeria1.jpg' },
  { type: 'image', src: '/images/galeria2.jpg' },
  { type: 'video', src: '/videos/promo1.mp4' },
  { type: 'image', src: '/images/galeria3.jpg' },
  { type: 'video', src: '/videos/promo2.mp4' }
]

export default function MediaGallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {media.map((item, i) =>
        item.type === 'image' ? (
          <Image
            key={i}
            src={item.src}
            alt={`Media ${i}`}
            width={800}
            height={600}
            className="rounded-xl shadow-lg cursor-pointer hover:scale-105 transition"
            onClick={() => setSelected(item.src)}
          />
        ) : (
          <video
            key={i}
            src={item.src}
            controls
            className="rounded-xl shadow-lg cursor-pointer hover:scale-105 transition"
          />
        )
      )}
    </section>
  )
}
