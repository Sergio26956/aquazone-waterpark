import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function POST(req: Request) {
  const { topic } = await req.json();

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: 'Eres un analizador de tendencias experto en redes sociales, marketing y campañas visuales.',
        },
        {
          role: 'user',
          content: `Analiza las tendencias más virales relacionadas con el tema: ${topic}.`,
        },
      ],
      model: 'gpt-4',
    });

    const trend = completion.choices[0]?.message?.content?.trim();
    return NextResponse.json({ trend });
  } catch (error) {
    return NextResponse.json({ trend: 'Error al conectar con OpenAI.' }, { status: 500 });
  }
}
