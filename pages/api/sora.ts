import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  try {
    const { prompt } = req.body;

    if (typeof prompt !== 'string' || prompt.trim().length < 10) {
      return res.status(400).json({ message: 'El prompt debe tener al menos 10 caracteres.' });
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'Eres un asistente experto en creación de videos y multimedia.' },
        { role: 'user', content: prompt },
      ],
    });

    const videoUrl = response.choices[0]?.message?.content || '';

    if (!videoUrl) {
      return res.status(500).json({ message: 'No se pudo generar el video.' });
    }

    return res.status(200).json({ videoUrl });
  } catch (error) {
    console.error('Sora API error:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
}
