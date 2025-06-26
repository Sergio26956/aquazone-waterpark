'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type FeatureCardProps = {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transition-transform"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-blue-600 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}
