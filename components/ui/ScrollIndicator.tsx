'use client'
import { useEffect, useState } from 'react'

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      setIsVisible(currentScroll < 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
      <div className="w-8 h-8 bg-white text-blue-900 text-center rounded-full shadow-lg">
        ↓
      </div>
    </div>
  )
}
