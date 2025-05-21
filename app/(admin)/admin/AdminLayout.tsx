"use client"

import AdminHeader from "./AdminHeader"
import AdminSidebar from "./AdminSidebar"

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader />
      <div className="flex flex-1">
        <AdminSidebar />
        <main className="flex-1 p-6 bg-slate-100">{children}</main>
      </div>
    </div>
  )
}

export default AdminLayout
