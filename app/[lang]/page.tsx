export default function Home({ params }: { params: { lang: string } }) {
  const content = {
    es: 'Bienvenido a AQUAZONE',
    en: 'Welcome to AQUAZONE',
    fr: 'Bienvenue à AQUAZONE',
    de: 'Willkommen bei AQUAZONE',
    pt: 'Bem-vindo ao AQUAZONE',
  };

  return (
    <main className="min-h-screen flex items-center justify-center text-3xl font-bold">
      {content[params.lang] || content['es']}
    </main>
  );
}
