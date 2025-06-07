import dynamic from 'next/dynamic';

const ContentEditor = dynamic(() => import('@/components/admin/ContentEditor'), {
  ssr: false,
});

export default function EditorPage() {
  return <ContentEditor />;
}
