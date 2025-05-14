// Archivo: app/galeria/page.tsx

'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const images = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/gallery4.jpg'
]

export default function Galeria() {
  useEffect(() => {
    gsap.utils.toArray('.fade-in').forEach((el: any) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 50 },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })
  }, [])

  return (
    <section className="min-h-screen p-8 bg-black text-white">
      <h2 className="text-4xl font-bold mb-8 text-center">Galería Visual</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="fade-in overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={src}
              alt={`Galería ${index + 1}`}
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
