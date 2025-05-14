'use client'
import { motion } from 'framer-motion'

export const FadeIn = ({ children }: { children: React.ReactNode }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    {children}
  </motion.div>
)

export const SlideUp = ({ children }: { children: React.ReactNode }) => (
  <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
    {children}
  </motion.div>
)
