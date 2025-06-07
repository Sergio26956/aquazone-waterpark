'use client';
import React from 'react';

export default function VideoPlayer({ src }: { src: string }) {
  return (
    <div className="w-full h-auto rounded-md overflow-hidden shadow">
      <video controls className="w-full h-full">
        <source src={src} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>
    </div>
  );
}
