"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const galeriaTerrestre = [
  { id: 1, src: "/galeria/terrestre1.jpg", alt: "Terrestre 1" },
  { id: 2, src: "/galeria/terrestre2.jpg", alt: "Terrestre 2" },
  { id: 3, src: "/galeria/terrestre3.jpg", alt: "Terrestre 3" },
  { id: 4, src: "/galeria/terrestre4.jpg", alt: "Terrestre 4" },
  { id: 5, src: "/galeria/terrestre5.jpg", alt: "Terrestre 5" },
];

export default function GaleriaTerrestre() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-amber-700">Galería Parque Terrestre</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galeriaTerrestre.map((img) => (
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
                src={galeriaTerrestre.find((img) => img.id === selected)?.src || ""}
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
