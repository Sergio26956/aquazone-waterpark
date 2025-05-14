'use client'
import { useState } from 'react'

const images = ['/images/p1.jpg', '/images/p2.jpg']
const videos = ['/videos/v1.mp4', '/videos/v2.mp4']

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="grid gap-4 p-4 md:grid-cols-2">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`image-${i}`}
          className="rounded shadow cursor-pointer hover:scale-105 transition"
          onClick={() => setSelected(src)}
        />
      ))}
      {videos.map((src, i) => (
        <video
          key={i}
          src={src}
          controls
          className="rounded shadow w-full"
        />
      ))}

      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img src={selected} className="max-w-full max-h-full" />
        </div>
      )}
    </div>
  )
}
