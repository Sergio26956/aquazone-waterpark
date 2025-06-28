import SocialTabs from './SocialTabs'

export default function SocialFooter() {
  return (
    <footer className="bg-black text-white text-center py-6">
      <SocialTabs />
      <p className="mt-4 text-sm opacity-50">
        © {new Date().getFullYear()} AQUAZONE Water Park. Todos los derechos reservados.
      </p>
    </footer>
  )
}
