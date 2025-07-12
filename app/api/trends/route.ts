import { NextRequest, NextResponse } from 'next/server';
import { analyzeTrends } from '@/utils/analyzeTrends';

export async function POST(request: NextRequest) {
  const { topic } = await request.json();
  if (!topic) return NextResponse.json({ result: 'Falta el tema' });
  const result = await analyzeTrends(topic);
  return NextResponse.json({ result });
}
