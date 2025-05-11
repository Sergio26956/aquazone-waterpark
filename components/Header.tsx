import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-blue-700 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">AQUAZONE WATER PARK</h1>
      <nav className="space-x-4">
        <Link href="/">Inicio</Link>
        <Link href="/flotantes">Flotantes</Link>
        <Link href="/terrestres">Terrestres</Link>
        <Link href="/contacto">Contacto</Link>
      </nav>
    </header>
  )
}
