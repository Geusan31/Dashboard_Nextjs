// pages/index.js

import { DashboardLayout } from "@/components/layouts";
import UsersFeatures from "@/features/products";
import { useAuth } from "@/hooks/auth"; // Gunakan hook untuk pengecekan otentikasi
import { Loading } from "@/components/loading";
import LoginPage from "@/features/authentication";

export default function Home() {
  const { user, loading } = useAuth(); // Dapatkan status otentikasi dari hook

  // Jika sedang memuat, tampilkan pesan loading
  if (loading) {
    return <Loading />;
  }

  // Jika pengguna belum login, tampilkan halaman login
  if (!user) {
    return <LoginPage />;
  }

  // Jika pengguna sudah login, arahkan ke halaman dashboard
  return <UsersFeatures />;
}

Home.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
