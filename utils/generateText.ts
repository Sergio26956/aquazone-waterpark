export async function generateText(prompt: string): Promise<string> {
  const res = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 300,
      temperature: 0.8,
    }),
  });

  const data = await res.json();
  return data.choices[0].text.trim();
}
