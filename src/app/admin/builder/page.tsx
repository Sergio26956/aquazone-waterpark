import dynamic from 'next/dynamic';

const BuilderEditor = dynamic(() => import('@/components/admin/BuilderEditor'), {
  ssr: false,
});

export default function BuilderPage() {
  return <BuilderEditor />;
}
