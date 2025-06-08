'use client';
export default function VideoBackground() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
    >
      <source src="/videos/hero.mp4" type="video/mp4" />
      Tu navegador no soporta el video.
    </video>
  );
}
