import { DashboardLayout } from "@/components/layouts";
import UsersFeatures from "@/features/products";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push({ pathname: "/login" });
    }
  }, [router]);
  return (
    <>
      <UsersFeatures />
    </>
  );
}
