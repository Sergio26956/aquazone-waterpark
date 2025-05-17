"use client";

import { motion } from "framer-motion";

type PageIntroProps = {
  title: string;
  subtitle?: string;
};

export default function PageIntro({ title, subtitle }: PageIntroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center my-8"
    >
      <h1 className="text-4xl font-bold text-blue-800">{title}</h1>
      {subtitle && <p className="mt-2 text-gray-500">{subtitle}</p>}
    </motion.div>
  );
}
