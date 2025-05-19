import dynamic from 'next/dynamic';

const Calendario = dynamic(() => import('@/components/ui/Calendario'), { ssr: false });

export default function CalendarioPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Calendario de Actividades</h1>
      <Calendario />
    </div>
  );
}
