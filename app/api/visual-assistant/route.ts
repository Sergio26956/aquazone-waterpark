import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { idea } = await req.json();
  const apiKey = process.env.OPENAI_API_KEY;

  try {
    const aiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: 'Eres un asistente experto en diseño visual, creatividad y UX. Da ideas visuales, efectos, paletas, diseños, animaciones o combinaciones que sorprendan.',
          },
          {
            role: 'user',
            content: idea,
          },
        ],
        temperature: 0.9,
        max_tokens: 500,
      }),
    });

    const aiData = await aiRes.json();
    const result = aiData.choices[0]?.message?.content || 'Sin respuesta';
    return NextResponse.json({ result });
  } catch {
    return NextResponse.json({ error: 'Error con el asistente AI' }, { status: 500 });
  }
}
