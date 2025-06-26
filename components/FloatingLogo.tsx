'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function FloatingLogo() {
  return (
    <motion.div
      className="absolute top-6 left-6 z-50"
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Image
        src="/imagenes/logo.jpg"
        alt="Logo Aquazone"
        width={120}
        height={120}
        className="rounded-full shadow-xl"
        priority
      />
    </motion.div>
  )
}
