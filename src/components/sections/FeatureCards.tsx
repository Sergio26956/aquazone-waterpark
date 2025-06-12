'use client';
import { motion } from 'framer-motion';

const features = [
  { title: '100% Autónomo', description: 'Contenido y diseño gestionado por IA sin necesidad de intervención.' },
  { title: 'Marketing Total', description: 'Campañas integradas y mailing automatizado con alta conversión.' },
  { title: 'Social Media LIVE', description: 'TikTok, Instagram y Facebook en vivo desde el dashboard.' },
];

export default function FeatureCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6 py-10">
      {features.map((f, idx) => (
        <motion.div
          key={idx}
          className="p-6 bg-white rounded-xl shadow-xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2, duration: 0.4 }}
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-2">{f.title}</h3>
          <p className="text-gray-600">{f.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
