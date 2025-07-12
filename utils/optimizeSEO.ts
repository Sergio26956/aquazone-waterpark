import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function optimizeSEO(currentContent: string) {
  const prompt = `
  Optimiza el siguiente contenido para SEO, mejorando títulos, meta descripciones y palabras clave sin perder claridad:

  ${currentContent}
  `;

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
  });

  return completion.choices[0].message?.content || '';
}
