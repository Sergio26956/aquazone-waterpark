"use client"

import { MessageCircle } from "lucide-react"

export default function StickyContactButton() {
  return (
    <a
      href="#contacto"
      className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition z-50"
    >
      <MessageCircle size={24} />
    </a>
  )
}
