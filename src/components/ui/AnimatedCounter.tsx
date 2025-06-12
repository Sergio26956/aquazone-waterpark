'use client';
import { useEffect, useState } from 'react';

export default function AnimatedCounter({ end = 100, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 50);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);
    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <div className="text-4xl font-bold text-blue-600">{count}</div>
  );
}
