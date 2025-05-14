"use client"
import { motion } from "framer-motion"

type AnimatedSectionProps = {
  children: React.ReactNode
  delay?: number
}

export default function AnimatedSection({ children, delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}
