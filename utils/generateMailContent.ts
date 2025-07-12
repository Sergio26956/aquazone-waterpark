import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateMailContent(name: string, event: string) {
  const prompt = `Redacta un email profesional confirmando la reserva para ${name} en el evento ${event}. Que sea cordial y anime a visitar AQUAZONE.`;
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
  });
  return completion.choices[0].message?.content || '';
}
