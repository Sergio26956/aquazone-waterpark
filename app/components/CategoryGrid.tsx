import CategoryCard from "./CategoryCard";

export default function CategoryGrid() {
  return (
    <section className="py-16 bg-blue-950 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <CategoryCard
          title="Parques Acuáticos Flotantes"
          href="/web/flotantes"
          description="Atracciones modulares sobre piscinas, lagos o el mar."
        />
        <CategoryCard
          title="Parques Acuáticos Terrestres"
          href="/web/terrestres"
          description="Estructuras móviles urbanas espectaculares fuera del agua."
        />
      </div>
    </section>
  );
}
