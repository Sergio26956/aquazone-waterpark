export default function VideoBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video autoPlay loop muted playsInline className="w-full h-full object-cover">
        <source src="/videos/fondo-aquazone.mp4" type="video/mp4" />
        Tu navegador no admite la etiqueta de video.
      </video>
    </div>
  );
}
