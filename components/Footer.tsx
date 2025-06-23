"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#000814] text-white py-8 px-6 mt-20">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-white/70">&copy; {new Date().getFullYear()} Aquazone Waterpark. Todos los derechos reservados.</p>
        <div className="mt-4 md:mt-0 space-x-6 text-sm">
          <Link href="/privacidad">Política de Privacidad</Link>
          <Link href="/cookies">Cookies</Link>
          <Link href="/contacto">Contacto</Link>
        </div>
      </div>
    </footer>
  );
}
