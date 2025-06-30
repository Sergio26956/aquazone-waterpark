'use client'

import { motion } from 'framer-motion'

export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center"
      >
        <div className="w-2 h-2 bg-white rounded-full" />
      </motion.div>
    </div>
  )
}
