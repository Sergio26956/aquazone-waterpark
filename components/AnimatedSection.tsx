'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function AnimatedSection({ children }: { children: ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="my-8"
    >
      {children}
    </motion.section>
  )
}
