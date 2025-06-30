'use client'

export default function VideoBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        src="/videos/intro-aquazone.mp4"
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>
  )
}
