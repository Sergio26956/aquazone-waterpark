'use client';
import { motion } from 'framer-motion';

export default function AnimatedText({ text }: { text: string }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-5xl font-bold text-center text-blue-800 my-10"
    >
      {text}
    </motion.h1>
  );
}
