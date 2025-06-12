'use client';
import React from 'react';

export default function ResponsiveVideo({ src }: { src: string }) {
  return (
    <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={src}
        title="Video"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
    </div>
  );
}
