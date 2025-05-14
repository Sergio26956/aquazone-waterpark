"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function ParallaxImage({ src, alt }: { src: string; alt?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.img
        src={src}
        alt={alt || ""}
        className="w-full h-auto object-cover"
        style={{ y }}
      />
    </div>
  )
}
