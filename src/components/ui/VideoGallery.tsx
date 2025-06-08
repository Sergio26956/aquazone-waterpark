'use client';

const videos = [
  '/media/video1.mp4',
  '/media/video2.mp4',
];

export default function VideoGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {videos.map((src, i) => (
        <video
          key={i}
          controls
          className="w-full rounded-xl shadow-lg"
        >
          <source src={src} type="video/mp4" />
          Tu navegador no soporta este video.
        </video>
      ))}
    </div>
  );
}
