export default function VideoGallery({ videos }: { videos: string[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {videos.map((src, i) => (
        <video key={i} controls className="w-full rounded-lg">
          <source src={src} type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>
      ))}
    </div>
  );
}
