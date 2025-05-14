"use client";

import { useEffect, useState } from "react";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

export default function FloatingCallButton() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Link
        href="tel:+34600111222"
        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg animate-bounce"
      >
        <PhoneCall className="w-6 h-6" />
      </Link>
    </div>
  );
}
