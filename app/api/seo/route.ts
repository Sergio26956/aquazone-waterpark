import { NextRequest, NextResponse } from 'next/server';
import { optimizeSEO } from '@/utils/optimizeSEO';

export async function POST(request: NextRequest) {
  const { text } = await request.json();
  if (!text) return NextResponse.json({ optimized: 'Texto requerido' });
  const optimized = await optimizeSEO(text);
  return NextResponse.json({ optimized });
}
