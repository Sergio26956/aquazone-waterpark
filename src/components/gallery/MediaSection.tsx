import ImageGallery from './ImageGallery';
import VideoGallery from './VideoGallery';

export default function MediaSection() {
  return (
    <section className="py-10 bg-white" id="galeria">
      <h2 className="text-center text-3xl font-bold mb-8">Galería de Medios</h2>
      <ImageGallery />
      <VideoGallery />
    </section>
  );
}
