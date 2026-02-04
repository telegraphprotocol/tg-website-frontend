import "@/app/globals.css";
import { AdminNavbar } from "@/components/admin-navbar";
import { AdminFooter } from "@/components/admin-footer";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AdminNavbar />
      {children}
      <AdminFooter />
    </>
  );
}
