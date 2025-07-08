import { IncomingForm } from 'formidable';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const data: any = await new Promise((resolve, reject) => {
    const form = new IncomingForm({ uploadDir: '/tmp', keepExtensions: true });

    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });

  const file = data.files.file[0];

  const result = await cloudinary.uploader.upload(file.filepath, {
    folder: 'aquazone',
    resource_type: 'auto',
  });

  // borrar temp
  fs.unlinkSync(file.filepath);

  res.status(200).json({ url: result.secure_url });
}
