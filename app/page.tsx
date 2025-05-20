import Hero from "./components/Hero";
import CategoryGrid from "./components/CategoryGrid";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <CategoryGrid />
    </main>
  );
}
