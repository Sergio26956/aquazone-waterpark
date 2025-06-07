import dynamic from 'next/dynamic';

const CampaingManager = dynamic(() => import('@/components/admin/CampaingManager'), {
  ssr: false,
});

export default function CampañasPage() {
  return <CampaingManager />;
}
