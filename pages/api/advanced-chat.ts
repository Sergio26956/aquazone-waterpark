import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'Falta el prompt' });
  }

  try {
    // Generar texto con GPT-4 (o GPT-3.5 turbo)
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'Eres un asistente experto para parques acuáticos.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
    });

    const textResponse = completion.choices[0].message?.content || '';

    // Si el usuario pide imagen, genera con DALL·E
    let imageUrl = null;
    if (/imagen|dibujo|foto|foto|crear imagen|dibujar/i.test(prompt)) {
      const imageResponse = await openai.images.generate({
        model: 'dall-e-3',
        prompt,
        size: '512x512',
        n: 1,
      });
      imageUrl = imageResponse.data[0].url;
    }

    res.status(200).json({ text: textResponse, imageUrl });
  } catch (error) {
    console.error('Error en API advanced-chat:', error);
    res.status(500).json({ error: 'Error interno en el servidor' });
  }
}
