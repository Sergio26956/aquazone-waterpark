import { NextRequest, NextResponse } from 'next/server';
import { generateSocialMediaVisual } from '@/utils/generateSocialMediaVisual';

export async function POST(request: NextRequest) {
  const { event, style } = await request.json();
  if (!event || !style) return NextResponse.json({ visual: 'Faltan datos' });
  const visual = await generateSocialMediaVisual(event, style);
  return NextResponse.json({ visual });
}
