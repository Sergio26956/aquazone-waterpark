"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function FloatingParks() {
  const parks = [
    { title: "Parque Flotante 1", image: "/images/floating1.jpg" },
    { title: "Parque Flotante 2", image: "/images/floating2.jpg" }
  ]

  return (
    <section className="px-4 py-16 max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
      {parks.map((park, i) => (
        <motion.div
          key={i}
          className="rounded-2xl overflow-hidden shadow-lg"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={park.image}
            alt={park.title}
            width={800}
            height={500}
            className="w-full h-auto object-cover"
          />
          <div className="bg-white p-4 text-center">
            <h3 className="text-xl font-semibold">{park.title}</h3>
          </div>
        </motion.div>
      ))}
    </section>
  )
}
