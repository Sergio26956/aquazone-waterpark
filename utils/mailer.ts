// utils/mailer.ts
import nodemailer from 'nodemailer'

export async function sendMail({ name, email, message }: { name: string; email: string; message: string }) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  })

  const mailOptions = {
    from: email,
    to: process.env.MAIL_USER,
    subject: `Mensaje desde AQUAZONE - ${name}`,
    text: message,
  }

  return transporter.sendMail(mailOptions)
}
