import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      <Image
        src="/hero.webp"
        alt="AQUAZONE"
        layout="fill"
        objectFit="cover"
        priority
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">AQUAZONE Water Park</h2>
        <p className="text-lg md:text-2xl mb-6">Diversión sin límites, en tierra y agua</p>
        <Link href="#categorias" className="bg-primary px-6 py-3 rounded-lg text-white font-semibold hover:bg-primary/80 transition">
          Explorar Parques
        </Link>
      </div>
    </section>
  )
}
