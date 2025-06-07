const videos = [
  'https://www.youtube.com/embed/dQw4w9WgXcQ',
  'https://www.youtube.com/embed/3JZ_D3ELwOQ',
];

export default function VideoGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {videos.map((src, index) => (
        <iframe
          key={index}
          width="100%"
          height="315"
          src={src}
          title={`Video ${index}`}
          frameBorder="0"
          allowFullScreen
          className="rounded shadow"
        />
      ))}
    </div>
  );
}
