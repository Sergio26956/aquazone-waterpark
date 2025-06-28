import Hero from "@/components/Hero";
import MainMenu from "@/components/MainMenu";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <MainMenu />
      <Hero />
    </main>
  );
}
