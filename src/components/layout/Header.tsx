import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold text-blue-600">AQUAZONE</span>
        </Link>
        <nav className="space-x-4 text-sm md:text-base">
          <Link href="/#flotantes">Flotantes</Link>
          <Link href="/#urbanos">Urbanos</Link>
          <Link href="/#contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}
