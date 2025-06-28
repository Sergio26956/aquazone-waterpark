"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white flex items-center justify-center">
      {/* Fondo animado simulado (burbujeo) */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-30"
          src="/videos/hero-background.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Capa de color */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Contenido */}
      <motion.div
        className="relative z-20 text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          AQUAZONE WATER PARK
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Vive la experiencia acuática más impresionante del mundo. Parques flotantes y urbanos llenos de adrenalina y diversión.
        </motion.p>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <Button variant="default" size="lg">Explorar</Button>
          <Button variant="outline" size="lg">Reservar</Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
