'use client';
import { CheckCircle } from 'lucide-react';

export default function SuccessToast({ message }: { message: string }) {
  return (
    <div className="fixed bottom-4 right-4 bg-green-100 text-green-800 px-4 py-2 rounded shadow flex items-center gap-2">
      <CheckCircle className="w-5 h-5" />
      <span>{message}</span>
    </div>
  );
}
