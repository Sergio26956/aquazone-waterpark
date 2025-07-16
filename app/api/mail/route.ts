import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { subject, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject,
    html: `<div style="font-family:sans-serif;"><h3>${subject}</h3><p>${message}</p></div>`,
  });

  return Response.json({ success: true });
}
