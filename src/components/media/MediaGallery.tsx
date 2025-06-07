'use client';

export default function MediaGallery({ media }: { media: string[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {media.map((url, idx) =>
        url.endsWith('.mp4') ? (
          <video key={idx} controls className="w-full rounded shadow h-48 object-cover">
            <source src={url} type="video/mp4" />
          </video>
        ) : (
          <img key={idx} src={url} alt={`media-${idx}`} className="w-full h-48 object-cover rounded shadow" />
        )
      )}
    </div>
  );
}
