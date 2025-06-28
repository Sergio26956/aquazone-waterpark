'use client';

import Link from 'next/link'; import { motion } from 'framer-motion'; import { Button } from '@/components/ui/button';

export default function Home() { return ( <main className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-6"> <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-bold text-blue-900 mb-12 text-center" > AQUAZONE Water Park </motion.h1>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl">
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white shadow-xl rounded-2xl p-6 text-center"
    >
      <Link href="/flotantes">
        <Button className="w-full text-lg py-6">Parque Acuático Flotante</Button>
      </Link>
    </motion.div>

    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white shadow-xl rounded-2xl p-6 text-center"
    >
      <Link href="/terrestres">
        <Button className="w-full text-lg py-6">Parque Acuático Terrestre</Button>
      </Link>
    </motion.div>

    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white shadow-xl rounded-2xl p-6 text-center"
    >
      <Link href="/media">
        <Button className="w-full text-lg py-6">Zona de Medios</Button>
      </Link>
    </motion.div>

    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white shadow-xl rounded-2xl p-6 text-center"
    >
      <Link href="/contacto">
        <Button className="w-full text-lg py-6">Contacto</Button>
      </Link>
    </motion.div>
  </div>
</main>

); }

