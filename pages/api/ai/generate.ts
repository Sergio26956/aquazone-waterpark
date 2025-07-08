import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { prompt } = req.body;

  if (!prompt) return res.status(400).json({ error: 'Prompt vacío' });

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 150,
    });

    res.status(200).json({ result: response.data.choices[0].text });
  } catch (error) {
    res.status(500).json({ error: 'Error al generar contenido' });
  }
}
