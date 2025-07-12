import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function optimizeSEO(content: string) {
  const prompt = `Mejora el SEO del siguiente texto sin perder claridad:\n\n${content}`;
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
  });
  return completion.choices[0].message?.content || '';
}
