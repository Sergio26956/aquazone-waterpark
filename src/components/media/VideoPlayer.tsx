'use client';
export default function VideoPlayer({ url }: { url: string }) {
  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
      <iframe
        src={url}
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
    </div>
  );
}
