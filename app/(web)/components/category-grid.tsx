import CategoryCard from "./category-card"

const categories = [
  {
    title: "Parques Acuáticos Flotantes",
    imageUrl: "/images/floating-water-park.jpg",
    href: "/flotantes"
  },
  {
    title: "Parques Acuáticos Urbanos",
    imageUrl: "/images/urban-water-park.jpg",
    href: "/urbanos"
  }
]

export default function CategoryGrid() {
  return (
    <section className="py-16 px-4 grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
      {categories.map((cat, idx) => (
        <CategoryCard key={idx} {...cat} />
      ))}
    </section>
  )
}
