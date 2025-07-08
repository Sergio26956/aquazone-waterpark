import SeoHead from '@/components/SeoHead';
import HeroSection from '@/components/ui/HeroSection';
import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';

export default function Home() {
  return (
    <>
      <SeoHead
        title="AQUAZONE Waterpark | Parques Acuáticos Innovadores"
        description="Vive la experiencia de los parques acuáticos más espectaculares del futuro. Tecnología 2030 hoy."
        image="/cover-aquazone.jpg"
      />
      <Header />
      <main className="min-h-screen bg-white">
        <HeroSection />
        {/* Más secciones */}
      </main>
      <Footer />
    </>
  );
}
