'use client';
export default function VideoBackground() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
        src="/media/intro-video.mp4"
      />
    </div>
  );
}
