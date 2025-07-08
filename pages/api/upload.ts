import type { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from '@/lib/cloudinary';
import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end('Only POST allowed');

  const form = new formidable.IncomingForm();
  form.uploadDir = './';
  form.keepExtensions = true;

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: 'Error parsing file' });

    const file = files.file as formidable.File;
    const result = await cloudinary.uploader.upload(file.filepath, {
      resource_type: 'auto',
      folder: 'aquazone',
    });

    fs.unlinkSync(file.filepath); // borrar temp
    return res.status(200).json({ url: result.secure_url });
  });
}
