'use client'
import { motion } from 'framer-motion'

export default function IntroBlock() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-blue-50 to-white text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-blue-800 mb-6"
      >
        ¿Estás listo para sumergirte?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg text-gray-700 max-w-2xl mx-auto"
      >
        Descubre el mundo de AQUAZONE: una combinación única de diversión acuática, adrenalina, aventura y relax. Disfruta del verano como nunca lo habías imaginado.
      </motion.p>
    </section>
  )
}
