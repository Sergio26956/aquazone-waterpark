'use client'
import { motion } from 'framer-motion'

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-10"
      >
        Contacto
      </motion.h1>

      <section className="max-w-3xl mx-auto bg-blue-50 p-6 rounded-xl shadow-md text-gray-700 text-lg space-y-4">
        <p>📧 Email: info@aquazone.com</p>
        <p>📞 Teléfono: +34 600 000 000</p>
        <p>📍 Dirección: Badajoz, Extremadura, España</p>
        <p>💬 También puedes encontrarnos en redes sociales:</p>
        <ul className="list-disc list-inside">
          <li>Facebook: @aquazoneparques</li>
          <li>Instagram: @aquazone_waterpark</li>
          <li>TikTok: @aquazone</li>
        </ul>
      </section>
    </main>
  )
}
