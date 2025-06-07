'use client';

const videos = [
  '/media/video1.mp4',
  '/media/video2.mp4',
  '/media/video3.mp4',
];

export default function VideoGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {videos.map((src, i) => (
        <video
          key={i}
          controls
          className="w-full rounded-xl shadow-md"
          src={src}
        />
      ))}
    </div>
  );
}
