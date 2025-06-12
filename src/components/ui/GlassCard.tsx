'use client';
import { ReactNode } from 'react';

export default function GlassCard({ children }: { children: ReactNode }) {
  return (
    <div className="backdrop-blur-md bg-white/20 border border-white/30 rounded-2xl p-6 shadow-lg">
      {children}
    </div>
  );
}
