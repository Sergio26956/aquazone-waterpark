"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 z-10" />

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold drop-shadow-lg"
        >
          AQUAZONE WATER PARK
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg md:text-2xl max-w-2xl drop-shadow"
        >
          Vive la aventura acuática más espectacular de Europa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 flex gap-4 flex-wrap justify-center"
        >
          <Link href="/terrestres">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-full shadow-md">
              Parques Terrestres
            </Button>
          </Link>
          <Link href="/flotantes">
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 text-lg rounded-full shadow-md">
              Parques Flotantes
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 text-sm text-white/70"
        >
          Scroll para descubrir más
        </motion.div>
      </div>
    </section>
  );
}
