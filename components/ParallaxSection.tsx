"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

interface Props {
  image: string;
  overlayText: string;
}

export default function ParallaxSection({ image, overlayText }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={ref} className="relative h-[70vh] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})`, y }}
      />
      <div className="relative z-10 h-full flex items-center justify-center">
        <h2 className="text-white text-4xl md:text-6xl font-bold backdrop-blur-sm bg-black/30 px-6 py-4 rounded-xl">
          {overlayText}
        </h2>
      </div>
    </div>
  );
}
