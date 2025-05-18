"use client"

import { useEffect, useRef, useState } from "react"

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false))
    }
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-40">
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
          Bienvenidos a AQUAZONE
        </h1>
      </div>
    </div>
  )
}
