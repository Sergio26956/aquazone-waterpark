'use client';
import { AlertCircle } from 'lucide-react';

export default function AlertBanner({ message }: { message: string }) {
  return (
    <div className="w-full bg-yellow-100 text-yellow-800 p-4 flex items-center gap-2 rounded-md shadow">
      <AlertCircle className="w-5 h-5" />
      <span>{message}</span>
    </div>
  );
}
