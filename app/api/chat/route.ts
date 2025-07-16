import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  const { message } = await req.json();

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: message }],
    model: 'gpt-4',
  });

  return Response.json({ response: chatCompletion.choices[0].message.content });
}
