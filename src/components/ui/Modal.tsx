'use client';
import { ReactNode } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, children }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-red-500">
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
