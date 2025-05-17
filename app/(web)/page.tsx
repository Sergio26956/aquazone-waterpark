import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import MediaGallery from "@/components/MediaGallery";
import Contact from "@/components/Contact";
import CookiesBanner from "@/components/CookiesBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="px-6 py-12 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Nuestras Categorías</h2>
        <CategoryGrid />
      </section>
      <section className="px-6 py-12 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center">Galería Multimedia</h2>
        <MediaGallery />
      </section>
      <section className="px-6 py-12 bg-white">
        <Contact />
      </section>
      <CookiesBanner />
    </>
  );
}
