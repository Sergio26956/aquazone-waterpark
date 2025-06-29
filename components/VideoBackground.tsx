'use client'

export default function VideoBackground() {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover z-0"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/videos/fondo-acuatico.mp4" type="video/mp4" />
      Tu navegador no soporta vídeo HTML5.
    </video>
  )
}
