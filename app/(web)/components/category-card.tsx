import Image from "next/image"

interface CategoryCardProps {
  title: string
  imageUrl: string
  href: string
}

export default function CategoryCard({ title, imageUrl, href }: CategoryCardProps) {
  return (
    <a href={href} className="block rounded-2xl overflow-hidden shadow-lg transition transform hover:scale-105">
      <div className="relative w-full h-60">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
      </div>
      <div className="bg-white p-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
    </a>
  )
}
