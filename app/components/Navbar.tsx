"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-blue-900 text-white py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">AQUAZONE</Link>
        <nav className="space-x-6 text-sm md:text-base">
          <Link href="/web/flotantes">Flotantes</Link>
          <Link href="/web/terrestres">Terrestres</Link>
        </nav>
      </div>
    </header>
  );
}
