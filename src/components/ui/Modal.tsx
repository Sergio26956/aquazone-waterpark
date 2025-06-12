'use client';
import { ReactNode, useState } from 'react';

interface ModalProps {
  trigger: ReactNode;
  children: ReactNode;
}

export default function Modal({ trigger, children }: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsOpen(true)}>{trigger}</div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-lg w-full relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
