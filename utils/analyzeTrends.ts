import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function analyzeTrends(topic: string) {
  const prompt = `
  Analiza las tendencias actuales y futuras relacionadas con "${topic}" en redes sociales y motores de búsqueda.
  Resume los temas clave y palabras clave para enfocar contenido digital.
  `;

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
  });

  return completion.choices[0].message?.content || '';
}
