'use client';
import { ReactNode } from 'react';

export default function GradientBackground({ children }: { children: ReactNode }) {
  return (
    <div className="relative bg-gradient-to-br from-blue-100 via-white to-blue-50 min-h-screen">
      {children}
    </div>
  );
}
