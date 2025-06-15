const links = [
  { label: "Inicio", href: "/" },
  { label: "Panel", href: "/admin" },
  { label: "Soporte", href: "/contact" },
];

export default function QuickLinks() {
  return (
    <div className="p-4 bg-gray-50 rounded shadow">
      <h2 className="text-md font-semibold mb-2">Accesos rápidos</h2>
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="text-blue-600 hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
