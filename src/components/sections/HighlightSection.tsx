'use client';
import { motion } from 'framer-motion';

export default function HighlightSection({ title, content }: { title: string; content: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="my-16 p-8 bg-white shadow-xl rounded-xl max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-blue-700 mb-4">{title}</h2>
      <p className="text-gray-700 text-lg">{content}</p>
    </motion.section>
  );
}
