"use client";

const mediaItems = [
  { type: "image", src: "/media/img1.jpg" },
  { type: "image", src: "/media/img2.jpg" },
  { type: "video", src: "/media/video1.mp4" },
  { type: "video", src: "/media/video2.mp4" },
];

export default function MediaGallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
      {mediaItems.map((item, index) => (
        item.type === "image" ? (
          <img key={index} src={item.src} alt="" className="w-full rounded-xl shadow" />
        ) : (
          <video key={index} src={item.src} controls className="w-full rounded-xl shadow" />
        )
      ))}
    </div>
  );
}
