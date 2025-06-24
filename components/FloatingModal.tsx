"use client";
import { motion } from "framer-motion";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function FloatingModal({ isOpen, onClose, title, children }: Props) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl p-6 w-full max-w-md shadow-2xl"
      >
        <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
        <div>{children}</div>
      </motion.div>
    </motion.div>
  );
}
