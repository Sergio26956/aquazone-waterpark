// components/ui/GlowingButton.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface Props {
  href: string
  text: string
}

export default function GlowingButton({ href, text }: Props) {
  return (
    <Link href={href}>
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="relative inline-block px-6 py-3 font-bold text-white bg-blue-600 rounded-full overflow-hidden"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse opacity-50 blur-lg" />
        <span className="relative z-10">{text}</span>
      </motion.button>
    </Link>
  )
}
