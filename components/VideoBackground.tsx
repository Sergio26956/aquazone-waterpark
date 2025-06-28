'use client'

import React from 'react'

export default function VideoBackground() {
  return (
    <video
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/video/fondo-aquazone.mp4" type="video/mp4" />
      Tu navegador no soporta vídeo en HTML5.
    </video>
  )
}
