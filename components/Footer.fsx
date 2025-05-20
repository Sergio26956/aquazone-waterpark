import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-8 text-sm mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} AQUAZONE WATER PARK. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <Link href="/legal" className="hover:underline">Aviso Legal</Link>
          <Link href="/cookies" className="hover:underline">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
