"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const galeriaFlotante = [
  { id: 1, src: "/galeria/flotante1.jpg", alt: "Flotante 1" },
  { id: 2, src: "/galeria/flotante2.jpg", alt: "Flotante 2" },
  { id: 3, src: "/galeria/flotante3.jpg", alt: "Flotante 3" },
  { id: 4, src: "/galeria/flotante4.jpg", alt: "Flotante 4" },
  { id: 5, src: "/galeria/flotante5.jpg", alt: "Flotante 5" },
];

export default function GaleriaFlotante() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-cyan-700">Galería Parque Flotante</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galeriaFlotante.map((img) => (
          <motion.div
            key={img.id}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer overflow-hidden rounded-xl shadow-lg"
            onClick={() => setSelected(img.id)}
          >
            <Image src={img.src} alt={img.alt} width={400} height={300} className="w-full h-auto object-cover" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
          >
            <motion.div
              key={selected}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative"
            >
              <Image
                src={galeriaFlotante.find((img) => img.id === selected)?.src || ""}
                alt="Imagen ampliada"
                width={900}
                height={600}
                className="rounded-xl max-h-[90vh] w-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
