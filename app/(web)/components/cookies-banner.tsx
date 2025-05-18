"use client"

import { useEffect, useState } from "react"

export default function CookiesBanner() {
  const [accepted, setAccepted] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem("cookies-accepted")
    if (!stored) setAccepted(false)
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", "true")
    setAccepted(true)
  }

  if (accepted) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50 text-sm sm:text-base">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>Usamos cookies para mejorar tu experiencia en el sitio.</p>
        <button
          onClick={acceptCookies}
          className="bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded"
        >
          Aceptar
        </button>
      </div>
    </div>
  )
}
