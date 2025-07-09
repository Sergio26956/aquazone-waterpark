import cloudinary from './cloudinary';
import { IncomingForm } from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handleUpload(req: any, res: any) {
  const form = new IncomingForm();
  form.uploadDir = '/tmp';
  form.keepExtensions = true;

  form.parse(req, async (_err, fields, files) => {
    if (!files.file) return res.status(400).json({ error: 'No file uploaded' });

    const filePath = Array.isArray(files.file)
      ? files.file[0].filepath
      : files.file.filepath;

    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: 'aquazone',
      });

      fs.unlinkSync(filePath);
      return res.status(200).json({ url: result.secure_url });
    } catch (error) {
      return res.status(500).json({ error: 'Upload failed', details: error });
    }
  });
}
