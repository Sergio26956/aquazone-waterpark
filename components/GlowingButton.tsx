"use client";

import { motion } from "framer-motion";
import React from "react";

type GlowingButtonProps = {
  label: string;
  onClick?: () => void;
};

export default function GlowingButton({ label, onClick }: GlowingButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative px-6 py-3 text-white font-semibold bg-blue-600 rounded-2xl overflow-hidden shadow-lg border-none cursor-pointer transition-all"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 opacity-20 animate-pulse rounded-2xl blur-sm"></span>
      <span className="relative z-10">{label}</span>
    </motion.button>
  );
}
