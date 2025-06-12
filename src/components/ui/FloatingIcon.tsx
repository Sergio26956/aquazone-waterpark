'use client';
import { ReactNode } from 'react';

export default function FloatingIcon({ icon }: { icon: ReactNode }) {
  return (
    <div className="animate-bounce text-blue-500 text-4xl">{icon}</div>
  );
}
