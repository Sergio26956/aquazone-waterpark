'use client';
import { useState } from 'react';

interface TabProps {
  tabs: { label: string; content: React.ReactNode }[];
}

export default function Tab({ tabs }: TabProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="flex border-b">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`px-4 py-2 ${idx === activeIndex ? 'border-b-2 border-blue-500' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">{tabs[activeIndex].content}</div>
    </div>
  );
}
