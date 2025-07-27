"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const images = [
  "/galeria/kamikaze1.jpg",
  "/galeria/kamikaze2.jpg",
  "/galeria/kamikaze3.jpg",
  "/galeria/kamikaze4.jpg",
  "/galeria/kamikaze5.jpg",
]

export default function GaleriaKamikaze() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <section className="w-full py-12 px-4 md:px-20 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white min-h-screen">
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-10 drop-shadow-lg"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Galería Kamikaze Jump
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(src)}
          >
            <Image
              src={src}
              alt={`Kamikaze ${idx + 1}`}
              width={600}
              height={400}
              className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center text-xl font-bold">
              Ver imagen
            </div>
          </motion.div>
        ))}
      </motion.div>

      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={selected}
              alt="Imagen ampliada Kamikaze"
              width={1000}
              height={700}
              className="rounded-xl max-w-[90vw] max-h-[80vh] object-contain shadow-2xl"
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 bg-white text-black rounded-full p-2 shadow-lg hover:scale-110 transition"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </section>
  )
}
