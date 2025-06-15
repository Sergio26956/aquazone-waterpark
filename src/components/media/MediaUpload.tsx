type MediaUploadProps = {
  onUpload: (files: File[]) => void;
};

export default function MediaUpload({ onUpload }: MediaUploadProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onUpload(Array.from(e.target.files));
    }
  };

  return (
    <div className="p-4 border rounded bg-white">
      <label className="block mb-2">Sube imágenes o videos:</label>
      <input type="file" multiple onChange={handleChange} className="block" />
    </div>
  );
}
