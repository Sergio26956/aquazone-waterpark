import { AdminSidebar } from "@/components/admin/sidebar"
import { AdminNavbar } from "@/components/admin/navbar"

const AdminPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1">
        <AdminNavbar />
        <main className="p-4">{children}</main>
      </div>
    </div>
  )
}

export default AdminPageLayout
