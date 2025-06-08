'use client';

export default function VideoGallery() {
  const videos = [
    'https://www.youtube.com/embed/dQw4w9WgXcQ',
    'https://www.youtube.com/embed/9bZkp7q19f0',
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {videos.map((src, index) => (
        <div key={index} className="aspect-video">
          <iframe
            src={src}
            title={`Video ${index + 1}`}
            allowFullScreen
            className="w-full h-full rounded-xl shadow-md"
          ></iframe>
        </div>
      ))}
    </div>
  );
}
