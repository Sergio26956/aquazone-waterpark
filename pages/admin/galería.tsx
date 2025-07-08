import dynamic from 'next/dynamic';
import Head from 'next/head';

const GaleriaAdmin = dynamic(() => import('@/components/admin/GaleriaAdmin'), { ssr: false });

export default function GaleriaPage() {
  return (
    <>
      <Head>
        <title>Galería Multimedia | AQUAZONE</title>
      </Head>
      <main className="min-h-screen bg-gray-100 p-4">
        <GaleriaAdmin />
      </main>
    </>
  );
}
