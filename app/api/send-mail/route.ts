import { sendMail } from '@/lib/mailer';
import { generateMailContent } from '@/utils/generateMailContent';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { email, name, event } = await request.json();
  if (!email || !name || !event) return NextResponse.json({ error: 'Datos incompletos' }, { status: 400 });

  const htmlContent = await generateMailContent(name, event);
  const sent = await sendMail({ to: email, subject: `Reserva AQUAZONE - ${event}`, html: htmlContent });

  return sent
    ? NextResponse.json({ message: 'Email enviado' })
    : NextResponse.json({ error: 'Fallo al enviar' }, { status: 500 });
}
