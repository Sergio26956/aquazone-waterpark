'use client'

import { useEffect, useState } from 'react'

export default function FloatingModal() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  if (!show) return null

  return (
    <div className="fixed bottom-20 right-6 bg-white p-4 rounded-xl shadow-2xl border border-cyan-300 z-50">
      <p className="text-cyan-800 font-bold">🎉 ¡Reserva ahora y obtén un 10% de descuento!</p>
      <button
        className="mt-2 text-sm text-red-500 underline"
        onClick={() => setShow(false)}
      >
        Cerrar
      </button>
    </div>
  )
}
