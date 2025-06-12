'use client';
import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
};

export default function ButtonPrimary({ label, ...props }: Props) {
  return (
    <button
      {...props}
      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-200"
    >
      {label}
    </button>
  );
}
