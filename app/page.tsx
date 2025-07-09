'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = document.getElementById('bg-video') as HTMLVideoElement;
    if (video) {
      video.oncanplaythrough = () => setIsVideoLoaded(true);
    }
  }, []);

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black text-white">
      <video
        id="bg-video"
        autoPlay
        muted
        loop
        playsInline
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        src="/videos/flotante-demo.mp4"
        poster="/images/fondo-aquazone.jpg"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">AQUAZONE WaterPark</h1>
        <p className="max-w-xl text-xl mb-8 drop-shadow-md">
          Parques acuáticos flotantes y urbanos de nueva generación con tecnología 2030.
        </p>
        <div className="flex gap-6">
          <a
            href="/flotantes"
            className="px-6 py-3 bg-cyan-500 rounded-lg font-semibold hover:bg-cyan-600 transition"
          >
            Parques Flotantes
          </a>
          <a
            href="/urbanos"
            className="px-6 py-3 bg-green-500 rounded-lg font-semibold hover:bg-green-600 transition"
          >
            Parques Urbanos
          </a>
        </div>
      </motion.div>
    </main>
  );
}
