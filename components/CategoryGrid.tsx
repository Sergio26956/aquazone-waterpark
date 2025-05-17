"use client";

import FloatingCard from "./FloatingCard";

const categories = [
  {
    title: "Parque Acuático Flotante",
    description: "Estructuras modulares sobre agua. Atracciones inflables de gran formato.",
    image: "/images/categorias/flotante.jpg",
  },
  {
    title: "Parque Acuático Urbano",
    description: "Atracciones móviles para ciudades, plazas o zonas urbanas.",
    image: "/images/categorias/urbano.jpg",
  },
  {
    title: "Piscinas Flotantes",
    description: "Soluciones acuáticas portátiles para playas y lagos.",
    image: "/images/categorias/piscinas.jpg",
  },
  {
    title: "Kamikaze Jump",
    description: "Atracción estrella de caída libre con adrenalina extrema.",
    image: "/images/categorias/kamikaze.jpg",
  },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((item, index) => (
        <FloatingCard
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
}
