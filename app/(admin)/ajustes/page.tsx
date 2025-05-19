import dynamic from 'next/dynamic';

const SiteSettingsPanel = dynamic(() => import('../components/SiteSettingsPanel'), { ssr: false });

export default function AjustesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Ajustes del sitio</h1>
      <SiteSettingsPanel />
    </div>
  );
}
