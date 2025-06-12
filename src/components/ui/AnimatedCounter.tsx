'use client';
import { useEffect, useState } from 'react';

type Props = {
  value: number;
  label: string;
};

export default function AnimatedCounter({ value, label }: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 50);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(interval);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="text-center">
      <p className="text-4xl font-bold text-blue-600">{count}</p>
      <p className="text-gray-700">{label}</p>
    </div>
  );
}
