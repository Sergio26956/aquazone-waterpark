"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxSectionProps {
  backgroundImage: string;
  children: React.ReactNode;
}

export default function ParallaxSection({ backgroundImage, children }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      <motion.div
        style={{ backgroundImage: `url(${backgroundImage})`, y }}
        className="absolute inset-0 bg-cover bg-center"
      />
      <div className="relative z-10 flex h-full items-center justify-center bg-black/30 text-white">
        {children}
      </div>
    </section>
  );
}
