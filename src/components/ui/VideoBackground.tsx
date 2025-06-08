'use client';
export default function VideoBackground() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/media/hero-video.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-white text-center">
          <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">AQUAZONE</h1>
          <p className="mt-4 text-2xl drop-shadow-md">Parques acuáticos espectaculares</p>
        </div>
      </div>
    </div>
  );
}
