// app/flotantes/playas/page.tsx

"use client";

import Image from "next/image";
import VideoSection from "@/components/VideoSection";
import Gallery from "@/components/Gallery";
import DescriptionSection from "@/components/DescriptionSection";

export default function PlayasFlotantesPage() {
  return (
    <main className="min-h-screen bg-blue-50">
      <section className="relative w-full h-screen">
        <VideoSection src="/videos/playas.mp4" poster="/images/playas-cover.jpg" />
      </section>

      <section className="px-6 py-10">
        <DescriptionSection
          title="Parque Acuático Flotante - Playas"
          description="Descubre nuestro espectacular parque acuático flotante instalado sobre playas naturales. Perfecto para diversión en grupo, cuenta con obstáculos inflables, zonas de descanso y medidas de seguridad avanzadas."
          features={["Módulos flotantes interconectados", "Superficie antideslizante", "Zona para niños y adultos", "Vigilancia acuática", "Adaptado para todo tipo de playas"]}
        />
      </section>

      <section className="px-6 py-10">
        <Gallery
          images={["/images/playas1.jpg", "/images/playas2.jpg", "/images/playas3.jpg"]}
          videos={["/videos/playas-detalle1.mp4", "/videos/playas-detalle2.mp4"]}
        />
      </section>
    </main>
  );
}
