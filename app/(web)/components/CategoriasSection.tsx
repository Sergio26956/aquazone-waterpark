"use client"

import CategoriaCard from "./CategoriaCard"
import { categorias } from "@/lib/data"

export default function CategoriasSection() {
  return (
    <section id="categorias" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Categorías de Parques</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categorias.map((cat) => (
            <CategoriaCard
              key={cat.id}
              title={cat.title}
              image={cat.image}
              description={cat.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
