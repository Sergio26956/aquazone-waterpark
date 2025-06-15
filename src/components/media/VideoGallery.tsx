type VideoGalleryProps = {
  videos: string[];
};

export default function VideoGallery({ videos }: VideoGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {videos.map((src, index) => (
        <video key={index} controls className="rounded shadow w-full">
          <source src={src} type="video/mp4" />
          Tu navegador no soporta video.
        </video>
      ))}
    </div>
  );
}
