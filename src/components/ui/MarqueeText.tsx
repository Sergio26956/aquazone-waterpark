'use client';
import Marquee from 'react-fast-marquee';

export default function MarqueeText() {
  return (
    <Marquee speed={50} gradient={false} className="text-xl font-semibold text-white bg-blue-700 py-2">
      AQUAZONE Water Park · Experiencias Increíbles · Parques Flotantes · Parques Urbanos · Eventos Acuáticos
    </Marquee>
  );
}
