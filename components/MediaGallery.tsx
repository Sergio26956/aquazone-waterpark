export default function MediaGallery() {
  const media = [
    { type: "image", src: "/images/park1.jpg" },
    { type: "image", src: "/images/park2.jpg" },
    { type: "video", src: "/videos/aquazone1.mp4" },
  ];

  return (
    <section id="galeria" className="p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {media.map((m, index) =>
        m.type === "image" ? (
          <img key={index} src={m.src} alt={`Media ${index}`} className="w-full h-auto rounded shadow" />
        ) : (
          <video key={index} controls className="w-full h-auto rounded shadow">
            <source src={m.src} type="video/mp4" />
          </video>
        )
      )}
    </section>
  );
}
