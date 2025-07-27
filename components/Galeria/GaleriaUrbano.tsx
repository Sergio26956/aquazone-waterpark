"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/urbano/urbano1.jpg",
  "/urbano/urbano2.jpg",
  "/urbano/urbano3.jpg",
  "/urbano/urbano4.jpg",
  "/urbano/urbano5.jpg",
  "/urbano/urbano6.jpg",
];

const GaleriaUrbano: React.FC = () => {
  return (
    <section className="px-4 py-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-blue-600">
          Galería Parque Urbano
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src={src}
                alt={`urbano${index + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-64"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GaleriaUrbano;
