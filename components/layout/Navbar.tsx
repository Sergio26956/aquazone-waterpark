"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-blue-950/90 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo AQUAZONE */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo-aquazone.png"
              alt="Logo AQUAZONE"
              width={160}
              height={60}
              className="object-contain"
              priority
            />
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex space-x-8 text-white text-base font-medium">
            <Link href="/" className="hover:text-cyan-400 transition">Inicio</Link>
            <Link href="/#categorias" className="hover:text-cyan-400 transition">Parques</Link>
            <Link href="/#galerias" className="hover:text-cyan-400 transition">Galerías</Link>
            <Link href="/#contacto" className="hover:text-cyan-400 transition">Contacto</Link>
          </nav>
        </div>
      </div>

      {/* Menú Móvil */}
      <MobileMenu />
    </header>
  );
};

export default Navbar;
