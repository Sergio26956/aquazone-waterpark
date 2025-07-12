'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AnimatedLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="w-48 h-48 mx-auto mt-4"
    >
      <Image
        src="/images/Logo.jpg"
        alt="AQUAZONE Logo"
        width={300}
        height={300}
        className="rounded-full shadow-xl"
        priority
      />
    </motion.div>
  );
}
