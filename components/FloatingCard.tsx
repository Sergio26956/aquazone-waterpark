"use client";

import { motion } from "framer-motion";

type FloatingCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function FloatingCard({ title, description, image }: FloatingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, rotate: 1 }}
      className="relative w-full max-w-sm p-4 bg-white/90 rounded-2xl shadow-xl overflow-hidden border border-blue-200"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-xl mb-4"
      />
      <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
}
