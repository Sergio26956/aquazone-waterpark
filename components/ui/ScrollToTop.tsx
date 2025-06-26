'use client'

import { useEffect, useState } from 'react'
import { ArrowUpCircle } from 'lucide-react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-white p-2 rounded-full shadow-md hover:bg-blue-100 transition z-50"
        aria-label="Subir"
      >
        <ArrowUpCircle className="text-blue-600 w-8 h-8" />
      </button>
    )
  )
}
