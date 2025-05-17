"use client";

import { motion } from "framer-motion";
import React from "react";

type SectionWrapperProps = {
  children: React.ReactNode;
};

export default function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full px-4 py-8 sm:px-8 md:px-16 max-w-7xl mx-auto"
    >
      {children}
    </motion.section>
  );
}
