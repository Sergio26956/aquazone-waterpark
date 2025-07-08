import Head from 'next/head';
import dynamic from 'next/dynamic';

const EditorIA = dynamic(() => import('@/components/EditorIA'), { ssr: false });

export default function IAPage() {
  return (
    <>
      <Head>
        <title>IA Contenido | AQUAZONE</title>
      </Head>
      <main className="min-h-screen bg-gray-100 p-4">
        <EditorIA />
      </main>
    </>
  );
}
