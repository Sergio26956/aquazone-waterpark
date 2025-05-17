import Hero from "@/components/Hero";
import MediaGallery from "@/components/MediaGallery";
import SectionParques from "@/components/SectionParques";
import Contacto from "@/components/Contacto";
import CookiesBanner from "@/components/CookiesBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300">
      <Hero />
      <SectionParques />
      <MediaGallery />
      <Contacto />
      <CookiesBanner />
    </main>
  );
}
