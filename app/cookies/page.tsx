export default function CookiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-sm leading-relaxed">
      <h1 className="text-2xl font-bold mb-6">Política de Cookies</h1>
      <p>
        Este sitio web utiliza cookies para mejorar la experiencia del usuario. Al continuar navegando, aceptas su uso.
      </p>
      <h2 className="font-semibold mt-6 mb-2">Tipos de Cookies</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Cookies técnicas: necesarias para el funcionamiento del sitio.</li>
        <li>Cookies analíticas: para estadísticas de navegación.</li>
        <li>Cookies de terceros: redes sociales, integraciones, etc.</li>
      </ul>
      <p>Puedes desactivar las cookies desde la configuración de tu navegador.</p>
    </div>
  );
}
