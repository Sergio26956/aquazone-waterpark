"use client"

import { media } from "@/lib/data"
import Image from "next/image"

export default function MediaSection() {
  return (
    <section id="medios" className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Zona de Medios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {media.map((item) => (
            <div key={item.id} className="border rounded-xl shadow-md overflow-hidden">
              <div className="relative w-full h-56">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
