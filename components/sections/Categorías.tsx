"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const categorias = [
  {
    id: "flotantes",
    titulo: "Parques Flotantes",
    descripcion:
      "Modulares, seguros y escalables. La mejor experiencia sobre el agua para toda la familia.",
    img: "/images/categoria-flotantes.jpg",
    href: "/flotantes",
    color: "bg-cyan-600 hover:bg-cyan-700",
  },
  {
    id: "urbanos",
    titulo: "Parques Urbanos",
    descripcion:
      "Instalaciones móviles en ciudad, con diversión asegurada y tecnología de última generación.",
    img: "/images/categoria-urbanos.jpg",
    href: "/urbanos",
    color: "bg-green-600 hover:bg-green-700",
  },
  {
    id: "terrestres",
    titulo: "Parques Terrestres",
    descripcion:
      "Atracciones terrestres únicas, como el Kamikaze Jump, que desafían la gravedad y la adrenalina.",
    img: "/images/categoria-terrestres.jpg",
    href: "/terrestres",
    color: "bg-orange-600 hover:bg-orange-700",
  },
];

export default function Categorias() {
  return (
    <section id="categorias" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold mb-12 text-center drop-shadow-lg"
        >
          Nuestras Categorías
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categorias.map(({ id, titulo, descripcion, img, href, color }) => (
            <motion.article
              key={id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * categorias.indexOf(categorias.find(c => c.id === id)!) }}
              className={`rounded-xl overflow-hidden shadow-2xl cursor-pointer transform hover:scale-105 transition-transform duration-300 bg-gradient-to-tr from-gray-800 to-gray-900`}
            >
              <Link href={href} aria-label={`Ver ${titulo}`}>
                <div className="relative h-56">
                  <Image
                    src={img}
                    alt={titulo}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className={`p-6 ${color}`}>
                  <h3 className="text-2xl font-bold mb-2">{titulo}</h3>
                  <p className="text-sm opacity-90">{descripcion}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
