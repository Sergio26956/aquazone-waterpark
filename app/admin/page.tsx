'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminPanel from '@/components/AdminPanel';

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const isAuth = localStorage.getItem('admin_auth');
    if (!isAuth) router.push('/admin-login');
  }, [router]);

  return <AdminPanel />;
}
