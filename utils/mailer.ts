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
    to: process.env.MAIL_RECEIVER,
    subject: `Nuevo mensaje de ${name}`,
    text: message,
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    return { success: true, info }
  } catch (error) {
    return { success: false, error }
  }
}
