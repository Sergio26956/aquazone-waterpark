"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Parques en funcionamiento", value: 15 },
  { label: "Visitantes al año", value: "250.000+" },
  { label: "Clientes satisfechos", value: "99%" },
  { label: "Eventos realizados", value: 340 },
];

export default function StatsSection() {
  return (
    <section className="w-full py-16 bg-gradient-to-br from-blue-100 to-cyan-100">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-12"
        >
          Nuestras cifras
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <p className="text-3xl font-bold text-cyan-700">{stat.value}</p>
              <p className="text-sm text-blue-800 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
