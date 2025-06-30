'use client'

import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/34600000000"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={28} />
    </a>
  )
}
