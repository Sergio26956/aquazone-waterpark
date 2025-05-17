"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

export default function FloatingButton() {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    if (window.scrollY > 300) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible)
    return () => window.removeEventListener("scroll", toggleVisible)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/80 transition"
    >
      <ChevronUp />
    </button>
  ) : null
}
