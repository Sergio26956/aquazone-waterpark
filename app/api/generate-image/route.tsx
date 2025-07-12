import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();
  const apiKey = process.env.OPENAI_API_KEY;

  try {
    const dalleResponse = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ prompt, n: 1, size: '1024x1024' }),
    });

    const dalleData = await dalleResponse.json();
    const imageUrl = dalleData.data[0].url;
    return NextResponse.json({ url: imageUrl });
  } catch (error) {
    return NextResponse.json({ error: 'Error al generar imagen' }, { status: 500 });
  }
}
