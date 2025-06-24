"use client";
import { motion } from "framer-motion";

interface Props {
  text: string;
  onClick?: () => void;
}

export default function AnimatedButton({ text, onClick }: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-xl transition-all"
    >
      {text}
    </motion.button>
  );
}
