import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function analyzeTrends(topic: string) {
  const prompt = `Analiza tendencias sobre ${topic} y resume ideas clave para contenido de redes y web.`;
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
  });
  return completion.choices[0].message?.content || '';
}
