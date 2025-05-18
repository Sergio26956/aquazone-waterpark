"use client"

import { useState } from "react"

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState<"imagenes" | "videos">("imagenes")

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Galería Multimedia</h1>
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-md ${
            activeTab === "imagenes" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("imagenes")}
        >
          Imágenes
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeTab === "videos" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("videos")}
        >
          Videos
        </button>
      </div>

      {activeTab === "imagenes" ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/media/img1.jpg" alt="Imagen 1" className="rounded-lg" />
          <img src="/media/img2.jpg" alt="Imagen 2" className="rounded-lg" />
          <img src="/media/img3.jpg" alt="Imagen 3" className="rounded-lg" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <video controls className="w-full rounded-lg">
            <source src="/media/video1.mp4" type="video/mp4" />
          </video>
          <video controls className="w-full rounded-lg">
            <source src="/media/video2.mp4" type="video/mp4" />
          </video>
        </div>
      )}
    </div>
  )
}
