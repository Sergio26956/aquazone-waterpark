// /lib/ai/seoAndSocial.ts

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function generarSEOTexto(input: string) {
  const prompt = `Genera un título atractivo, una meta descripción corta y 5 hashtags para el siguiente contenido: "${input}"`;
  
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
  });

  return completion.choices[0].message.content;
}
