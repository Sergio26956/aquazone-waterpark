'use client';
import Marquee from 'react-fast-marquee';

export default function MarqueeBanner({ items }: { items: string[] }) {
  return (
    <Marquee gradient={false} speed={50} className="bg-blue-100 py-2 text-blue-700 font-semibold">
      {items.map((item, idx) => (
        <span key={idx} className="mx-6">{item}</span>
      ))}
    </Marquee>
  );
}
