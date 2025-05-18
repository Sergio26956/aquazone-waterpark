"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const galleryImages = [
  "/galeria/1.jpg",
  "/galeria/2.jpg",
  "/galeria/3.jpg",
  "/galeria/4.jpg",
  "/galeria/5.jpg",
  "/galeria/6.jpg"
]

export default function GallerySection() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Galería</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={src}
                alt={`Galería ${index + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-60"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
