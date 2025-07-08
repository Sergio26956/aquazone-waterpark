import dynamic from 'next/dynamic';
import Head from 'next/head';

const UploadWidget = dynamic(() => import('@/components/ui/UploadWidget'), { ssr: false });

export default function UploadPage() {
  return (
    <>
      <Head>
        <title>Subir archivos | AQUAZONE</title>
      </Head>
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
        <UploadWidget />
      </main>
    </>
  );
}
