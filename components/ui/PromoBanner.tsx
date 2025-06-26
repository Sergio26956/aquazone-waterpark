import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PromoBanner() {
  return (
    <section className="w-full bg-yellow-400 py-6 px-4 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        ¡Promoción especial de verano!
      </h2>
      <p className="text-gray-800 mb-4">
        Reserva tu parque acuático móvil antes del 31 de julio y obtén un 15% de descuento.
      </p>
      <Link href="/contacto">
        <Button className="bg-white text-yellow-500 hover:bg-yellow-100 font-bold">
          Contactar ahora
        </Button>
      </Link>
    </section>
  )
}
