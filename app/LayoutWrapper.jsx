"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import api from "@/lib/axios";
import Sidebar from "./dashboard/sidebar";
import Header from "./dashboard/header";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const isAuthPage = pathname === "/login" || pathname === "/register";

  const [loading, setLoading] = useState(!isAuthPage);

  useEffect(() => {
    if (!isAuthPage) {
      api.get("/api/me")
        .then(() => {
            console.log("User is authenticated");
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
         
          router.push("/login");
        });
    }
  }, [pathname]);

  if (loading) return <div className="text-center p-10">Loading...</div>; // optional spinner

  return isAuthPage ? (
    children
  ) : (
    <div className="flex h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
