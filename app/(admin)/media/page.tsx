"use client"
import { useState } from "react"

export default function MediaPage() {
  const [files, setFiles] = useState<File[]>([])

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files))
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Gestión de Archivos Multimedia</h2>
      <input type="file" multiple onChange={handleUpload} className="mb-4" />
      <ul className="space-y-2">
        {files.map((file, idx) => (
          <li key={idx} className="border rounded p-2 text-sm">{file.name}</li>
        ))}
      </ul>
    </div>
  )
}
