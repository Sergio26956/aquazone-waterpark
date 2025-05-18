export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} AQUAZONE Water Park. Todos los derechos reservados.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="/aviso-legal" className="hover:underline text-sm">Aviso Legal</a>
          <a href="/privacidad" className="hover:underline text-sm">Privacidad</a>
          <a href="/cookies" className="hover:underline text-sm">Cookies</a>
        </div>
      </div>
    </footer>
  )
}
