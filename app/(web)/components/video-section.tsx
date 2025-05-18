"use client"

import { motion } from "framer-motion"

export default function VideoSection() {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Descúbrelo en Acción</h2>
        <p className="mb-8 text-gray-600">Observa cómo disfrutan en nuestros parques acuáticos.</p>
        <motion.div
          className="aspect-video w-full rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Video de AQUAZONE"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </motion.div>
      </div>
    </section>
  )
}
