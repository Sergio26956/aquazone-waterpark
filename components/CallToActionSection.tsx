'use client'

import Link from 'next/link'

export default function CallToActionSection() {
  return (
    <section className="relative bg-gradient-to-r from-cyan-500 to-blue-700 text-white p-12 rounded-2xl shadow-xl overflow-hidden text-center">
      <h2 className="text-4xl font-bold mb-4">¿Listo para vivir la experiencia AQUAZONE?</h2>
      <p className="mb-6 text-lg">Haz tu reserva ahora y asegúrate un verano inolvidable.</p>
      <Link
        href="/contacto"
        className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
      >
        ¡Reserva ya!
      </Link>
    </section>
  )
}
