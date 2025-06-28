"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Fondo vídeo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-poster.jpg"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Capa oscura para mejorar contraste */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* Contenido centrado */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold drop-shadow-lg"
        >
          AQUAZONE WATER PARK
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-xl md:text-2xl max-w-2xl"
        >
          Innovación acuática móvil y flotante. Experiencia inigualable.
        </motion.p>

        <motion.a
          href="#categorias"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10 inline-block px-8 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-full text-lg font-semibold transition-colors shadow-lg"
        >
          Ver Atracciones
        </motion.a>
      </div>
    </div>
  );
}
