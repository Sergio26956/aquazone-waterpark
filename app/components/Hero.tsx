"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-b from-cyan-500 to-blue-800 flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          AQUAZONE Water Park
        </h1>
        <p className="mt-4 text-white text-lg md:text-2xl max-w-xl mx-auto">
          Atracciones acuáticas espectaculares en tierra y agua. ¡Vívelo como nunca!
        </p>
      </motion.div>
    </section>
  );
}
