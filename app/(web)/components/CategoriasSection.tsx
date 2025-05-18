"use client"

import Image from "next/image"
import { galeria } from "@/lib/data"

export default function GaleriaSection() {
  return (
    <section id="galeria" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Galería</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galeria.map((item) => (
            <div key={item.id} className="relative w-full h-64 overflow-hidden rounded-2xl shadow-md">
              <Image
                src={item.image}
                alt={`Galería ${item.id}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
