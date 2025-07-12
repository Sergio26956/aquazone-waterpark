import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mailer';
import { generateMailContent } from '@/utils/generateMailContent';

export async function POST(request: NextRequest) {
  const { email, name, event } = await request.json();

  if (!email || !name || !event) {
    return NextResponse.json({ error: 'Faltan datos obligatorios' }, { status: 400 });
  }

  const htmlContent = await generateMailContent(name, event);
  const sent = await sendMail({
    to: email,
    subject: `Confirmación Reserva AQUAZONE - ${event}`,
    html: htmlContent,
  });

  if (!sent) {
    return NextResponse.json({ error: 'Error enviando email' }, { status: 500 });
  }

  return NextResponse.json({ message: 'Email enviado correctamente' });
}
