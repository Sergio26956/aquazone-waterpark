'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const AnimatedLogo = () => {
  return (
    <motion.div
      className="fixed top-4 left-4 z-50 pointer-events-none"
      initial={{ y: -20, opacity: 0 }}
      animate={{
        y: [0, -10, 0],
        opacity: 1,
        transition: {
          duration: 4,
          repeat: Infinity,
          repeatType: 'mirror',
        },
      }}
    >
      <Image
        src="/imagenes/logo.jpg"
        alt="Logo"
        width={120}
        height={120}
        className="rounded-full drop-shadow-xl"
        priority
      />
    </motion.div>
  )
}

export default AnimatedLogo
