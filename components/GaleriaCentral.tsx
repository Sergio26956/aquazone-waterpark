'use client';

import { useState } from 'react';
import { galeriaData } from '@/data/galeria';
import { motion } from 'framer-motion';

export default function GaleriaCentral() {
  const [filtro, setFiltro] = useState<string>('todos');

  const mediaFiltrada = filtro === 'todos' ? galeriaData : galeriaData.filter(item => item.tipo === filtro);

  return (
    <section className="w-full py-10 px-4 bg-[#0e0e10] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Galería Multimedia AQUAZONE 2030</h2>

        <div className="flex justify-center space-x-4 mb-8">
          {['todos', 'urbano', 'flotante', 'terrestre', 'kamikaze'].map((tipo) => (
            <button
              key={tipo}
              onClick={() => setFiltro(tipo)}
              className={`px-4 py-2 rounded-xl text-sm transition ${
                filtro === tipo ? 'bg-cyan-500' : 'bg-gray-700 hover:bg-cyan-600'
              }`}
            >
              {tipo.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mediaFiltrada.map(({ id, media, alt, titulo }) => (
            <motion.div
              key={id}
              className="bg-white/10 backdrop-blur-md p-3 rounded-2xl shadow-lg hover:scale-105 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {media.endsWith('.mp4') ? (
                <video src={media} controls className="rounded-xl w-full h-48 object-cover" />
              ) : (
                <img src={media} alt={alt} className="rounded-xl w-full h-48 object-cover" />
              )}
              <p className="mt-2 text-sm font-medium">{titulo}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
