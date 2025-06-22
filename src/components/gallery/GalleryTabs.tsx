import { useState } from "react";
import ImageGallery from "./ImageGallery";
import VideoGallery from "./VideoGallery";

const sampleImages = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];
const sampleVideos = ["/video1.mp4", "/video2.mp4"];

export default function GalleryTabs() {
  const [tab, setTab] = useState("images");

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button onClick={() => setTab("images")} className={`px-4 py-2 rounded ${tab === "images" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>Imágenes</button>
        <button onClick={() => setTab("videos")} className={`px-4 py-2 rounded ${tab === "videos" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>Videos</button>
      </div>
      {tab === "images" ? <ImageGallery images={sampleImages} /> : <VideoGallery videos={sampleVideos} />}
    </div>
  );
}
