import dynamic from 'next/dynamic';

const SocialFeed = dynamic(() => import('@/components/admin/SocialFeed'), {
  ssr: false,
});

export default function SocialPage() {
  return <SocialFeed />;
}
