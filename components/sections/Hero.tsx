"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Fondo en video (silencioso, loop) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover brightness-[.55]"
      >
        <source src="/videos/hero-fondo-aquazone.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      {/* Capa oscura para contraste */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido central */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-4"
        >
          <Image
            src="/logo-aquazone.png"
            alt="AQUAZONE Logo"
            width={320}
            height={120}
            className="mx-auto"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-white text-4xl sm:text-6xl font-bold mb-4 leading-tight drop-shadow-xl"
        >
          Parques Acuáticos Increíbles
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-cyan-200 text-lg sm:text-xl max-w-2xl mx-auto mb-8"
        >
          Vive la experiencia de agua más espectacular de Europa. Urbanos, flotantes y siempre impresionantes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <Link
            href="/#categorias"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg"
          >
            Ver Parques
          </Link>
          <Link
            href="/#contacto"
            className="border border-white hover:border-cyan-400 text-white hover:text-cyan-400 font-semibold py-3 px-6 rounded-full transition-all duration-300"
          >
            Reservar Ahora
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
