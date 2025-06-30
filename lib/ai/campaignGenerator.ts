import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function generarCampaña(input: string) {
  const prompt = `
  Eres experto en marketing digital. Genera una campaña promocional atractiva para parques acuáticos con este contenido base: "${input}".

  Incluye:
  - Título de campaña
  - Texto para redes sociales
  - Sugerencia de imagen o vídeo
  - Asunto de correo y cuerpo del correo
  - 3 ideas de llamados a la acción
  `;

  const res = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
  });

  return res.choices[0].message.content;
}
