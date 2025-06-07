'use client';
import { XCircle } from 'lucide-react';

export default function ErrorToast({ message }: { message: string }) {
  return (
    <div className="fixed bottom-4 right-4 bg-red-100 text-red-800 px-4 py-2 rounded shadow flex items-center gap-2">
      <XCircle className="w-5 h-5" />
      <span>{message}</span>
    </div>
  );
}
