import React from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="bg-white rounded shadow-lg w-full max-w-md p-6">
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 float-right">
          ✕
        </button>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
