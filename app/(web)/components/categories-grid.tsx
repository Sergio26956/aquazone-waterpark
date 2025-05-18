"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const categories = [
  {
    title: "Parques Flotantes",
    image: "/categorias/flotantes.jpg",
    href: "/categorias/flotantes"
  },
  {
    title: "Parques Urbanos",
    image: "/categorias/urbanos.jpg",
    href: "/categorias/urbanos"
  }
]

export default function CategoriesGrid() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestras Categorías</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg"
              whileHover={{ scale: 1.03 }}
            >
              <Link href={cat.href}>
                <Image
                  src={cat.image}
                  alt={cat.title}
                  width={800}
                  height={500}
                  className="object-cover w-full h-64 group-hover:opacity-75 transition"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4">
                  <h3 className="text-xl font-semibold">{cat.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
