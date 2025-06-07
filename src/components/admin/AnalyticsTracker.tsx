'use client';

import { useEffect } from 'react';

export default function AnalyticsTracker() {
  useEffect(() => {
    console.log('🔍 Analytics activado');
    // Aquí conectarías tu sistema real de analíticas (Google, Vercel, Plausible, etc.)
  }, []);

  return null;
}
