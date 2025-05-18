import MainNav from "./MainNav"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-primary">AQUAZONE</h1>
        <MainNav />
      </div>
    </header>
  )
}
