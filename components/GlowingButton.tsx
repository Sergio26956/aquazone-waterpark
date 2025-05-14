"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function GlowingButton({ text, href }: { text: string; href: string }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link href={href}>
        <a className="relative inline-block px-6 py-3 text-white font-semibold bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
          <span className="absolute top-0 left-0 w-full h-full rounded-full bg-blue-400 blur-xl opacity-50 animate-pulse -z-10" />
          {text}
        </a>
      </Link>
    </motion.div>
  )
}
