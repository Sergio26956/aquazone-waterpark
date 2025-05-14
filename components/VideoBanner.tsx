export default function VideoBanner() {
  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="/videos/banner.mp4"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg text-center">
          AQUAZONE WATER PARK
        </h1>
      </div>
    </div>
  )
}
