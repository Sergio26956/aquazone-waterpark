type ImageGalleryProps = {
  images: string[];
};

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`img-${index}`} className="rounded shadow" />
      ))}
    </div>
  );
}
