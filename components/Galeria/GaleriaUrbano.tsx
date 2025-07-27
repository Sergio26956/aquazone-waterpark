"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ImagenGaleria {
  id: number;
  src: string;
  alt: string;
  categoria: string;
}

const imagenes: ImagenGaleria[] = [
  {
    id: 1,
    src: "/img/galeria/urbana1.jpg",
    alt: "Parque Acuático Urbano 1",
    categoria: "urbano",
  },
  {
    id: 2,
    src: "/img/galeria/urbana2.jpg",
    alt: "Parque Acuático Urbano 2",
    categoria: "urbano",
  },
  {
    id: 3,
    src: "/img/galeria/urbana3.jpg",
    alt: "Parque Acuático Urbano 3",
    categoria: "urbano",
  },
  {
    id: 4,
    src: "/img/galeria/urbana4.jpg",
    alt: "Parque Acuático Urbano 4",
    categoria: "urbano",
  },
  {
    id: 5,
    src: "/img/galeria/urbana5.jpg",
    alt: "Parque Acuático Urbano 5",
    categoria: "urbano",
  },
  {
    id: 6,
    src: "/img/galeria/urbana6.jpg",
    alt: "Parque Acuático Urbano 6",
    categoria: "urbano",
  },
];

export default function GaleriaUrbana() {
  const [selected, setSelected] = useState<ImagenGaleria | null>(null);

  return (
    <section className="w-full p-4 md:p-8 lg:p-12 bg-gradient-to-b from-blue-50 to-white">
      <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-10 tracking-tight">
        Galería de Parques Acuáticos Urbanos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {imagenes.map((img) => (
          <motion.div
            key={img.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelected(img)}
            className="cursor-pointer relative overflow-hidden rounded-2xl shadow-lg"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={400}
              className="object-cover w-full h-64 transition duration-300 ease-in-out hover:scale-110"
            />
          </motion.div>
        ))}
      </div>

      {selected && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-[9999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div
            className="absolute top-4 right-6 text-white text-4xl font-bold cursor-pointer z-[10000]"
            onClick={() => setSelected(null)}
          >
            &times;
          </div>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="max-w-
