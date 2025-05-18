export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2025 AQUAZONE Water Park. Todos los derechos reservados.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="#politica" className="text-sm hover:underline">Política de Privacidad</a>
          <a href="#cookies" className="text-sm hover:underline">Cookies</a>
        </div>
      </div>
    </footer>
  )
}
