'use client'
import { motion } from 'framer-motion'

type AnimatedSectionProps = {
  children: React.ReactNode
}

export default function AnimatedSection({ children }: AnimatedSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="px-6 py-20"
    >
      {children}
    </motion.section>
  )
}
