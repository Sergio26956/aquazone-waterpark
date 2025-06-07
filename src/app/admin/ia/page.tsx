import dynamic from 'next/dynamic';

const AIContentGenerator = dynamic(() => import('@/components/admin/AIContentGenerator'), {
  ssr: false,
});

export default function IAContentPage() {
  return <AIContentGenerator />;
}
