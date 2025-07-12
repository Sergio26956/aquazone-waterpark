import { OpenAI } from 'openai';
import { generateMediaPrompt } from './generateMediaPrompt';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateSocialMediaVisual(eventType, style) {
  const prompt = generateMediaPrompt(eventType, style);
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
  });
  return completion.choices[0].message?.content || '';
}
