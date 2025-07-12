'use client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function MainButtons() {
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-10">
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-blue-600 text-white text-xl px-6 py-4 rounded-xl shadow-lg"
        onClick={() => router.push('/parques/flotantes')}
      >
        🌊 Parque Acuático Flotante
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-green-600 text-white text-xl px-6 py-4 rounded-xl shadow-lg"
        onClick={() => router.push('/parques/urbanos')}
      >
        🏙️ Parque Acuático Urbano Móvil
      </motion.button>
    </div>
  );
}
