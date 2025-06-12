'use client';
import { motion } from 'framer-motion';

export default function SplitImageText({
  imageUrl,
  text,
  reverse = false
}: {
  imageUrl: string;
  text: string;
  reverse?: boolean;
}) {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-6 my-12`}>
      <motion.img
        src={imageUrl}
        alt="Section visual"
        className="w-full md:w-1/2 rounded-lg shadow-xl"
        initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="md:w-1/2 text-lg text-gray-800"
        initial={{ opacity: 0, x: reverse ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {text}
      </motion.div>
    </div>
  );
}
