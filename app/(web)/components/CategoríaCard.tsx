import Image from "next/image"

interface CategoriaCardProps {
  title: string
  image: string
  description: string
}

export default function CategoriaCard({ title, image, description }: CategoriaCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:scale-105">
      <div className="relative w-full h-48">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
