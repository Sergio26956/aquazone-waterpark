import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { topic } = await req.json();

  const prompt = `Quiero que actúes como un experto en marketing digital. Dame las 5 tendencias más importantes para el tema: "${topic}" en este momento.`;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 300,
      temperature: 0.7,
    }),
  });

  const data = await response.json();
  const raw = data.choices?.[0]?.message?.content || '';
  const trends = raw.split('\n').filter((line) => line.trim() && /^[0-9\-•]/.test(line)).map(line => line.replace(/^[0-9\-\•\.\s]+/, ''));

  return NextResponse.json({ trends });
}
