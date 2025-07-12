import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateMailContent(name: string, event: string) {
  const prompt = `
  Genera un email profesional para un cliente llamado ${name} confirmando su reserva en el parque acuático AQUAZONE para el evento ${event}.
  El email debe ser cordial, claro y con llamada a la acción para visitar nuestra web.
  `;

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
  });

  return completion.choices[0].message?.content || '';
}
