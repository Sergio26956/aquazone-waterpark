"use client";

import { motion } from "framer-motion";
import { FaWater, FaMapMarkerAlt, FaClock, FaSmile } from "react-icons/fa";

const beneficios = [
  {
    icono: <FaWater className="text-4xl text-sky-500" />,
    titulo: "Innovación Acuática",
    texto: "Atracciones modulares únicas, flotantes y terrestres, adaptadas a cualquier espacio.",
  },
  {
    icono: <FaMapMarkerAlt className="text-4xl text-sky-500" />,
    titulo: "Instalación en cualquier lugar",
    texto: "Playas, piscinas, plazas… AQUAZONE va donde está la diversión.",
  },
  {
    icono: <FaClock className="text-4xl text-sky-500" />,
    titulo: "Montaje rápido",
    texto: "Tecnología modular para eventos temporales, fiestas o instalaciones estables.",
  },
  {
    icono: <FaSmile className="text-4xl text-sky-500" />,
    titulo: "Diversión asegurada",
    texto: "Atracciones impactantes, seguras y visualmente espectaculares.",
  },
];

export default function Beneficios() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-sky-700">
          ¿Por qué elegir AQUAZONE?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {beneficios.map((item, i) => (
            <motion.div
              key={item.titulo}
              className="bg-white shadow-xl rounded-2xl p-6 flex items-start gap-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {item.icono}
              <div>
                <h3 className="text-xl font-semibold mb-1 text-sky-600">
                  {item.titulo}
                </h3>
                <p className="text-gray-600 text-sm">{item.texto}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
