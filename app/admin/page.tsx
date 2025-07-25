'use client'

import { useSession } from 'next-auth/react' import { redirect } from 'next/navigation' import AdminDashboard from '@/components/admin/AdminDashboard'

export default function AdminPage() { const { data: session, status } = useSession()

if (status === 'loading') return <p>Cargando...</p>

if (!session || session.user.role !== 'admin') { redirect('/login') }

return <AdminDashboard /> }

