"use client";
import React from "react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

export default function VideoPlayer({ src, poster }: VideoPlayerProps) {
  return (
    <video
      className="w-full h-auto rounded-xl shadow-lg"
      controls
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
    >
      <source src={src} type="video/mp4" />
      Tu navegador no soporta el video.
    </video>
  );
}
