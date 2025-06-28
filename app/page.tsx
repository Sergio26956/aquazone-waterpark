import Hero from "@/components/Hero";
import MainMenu from "@/components/MainMenu";
import Secciones from "@/components/Secciones";
import Beneficios from "@/components/Beneficios";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <MainMenu />
      <Hero />
      <Secciones />
      <Beneficios />
    </main>
  );
}
