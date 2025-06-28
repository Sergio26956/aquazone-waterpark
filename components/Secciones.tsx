"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const secciones = [
  {
    nombre: "Parques Flotantes",
    descripcion: "Atracciones modulares sobre el agua en piscinas y playas.",
    href: "/flotantes",
    imagen: "/img/flotantes.jpg",
  },
  {
    nombre: "Parques Terrestres",
    descripcion: "Atracciones móviles para entornos urbanos y tierra firme.",
    href: "/terrestres",
    imagen: "/img/terrestres.jpg",
  },
];

export default function Secciones() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-16 max-w-6xl mx-auto">
      {secciones.map((seccion, index) => (
        <motion.div
          key={seccion.nombre}
          className="relative rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.3, duration: 0.6 }}
        >
          <Link href={seccion.href}>
            <img
              src={seccion.imagen}
              alt={seccion.nombre}
              className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
              <h2 className="text-3xl font-bold mb-2">{seccion.nombre}</h2>
              <p className="text-sm">{seccion.descripcion}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </section>
  );
}
