'use client';

import { useAuth } from '@/context/AuthContext';
import { usePathname, useRouter } from 'next/navigation';
import Sidebar from './dashboard/sidebar';
import Header from './dashboard/header';
import { useEffect } from 'react';

export default function LayoutWrapper({ children }) {
  const { user, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const isAuthPage = pathname === '/login' || pathname === '/register';

  // 🔄 Auth route protection
  useEffect(() => {
    if (!loading) {
      if (!user && !isAuthPage) {
        router.replace('/login'); // ✅ replace instead of push
      } else if (user && isAuthPage) {
        router.replace('/dashboard');
      }
    }
  }, [user, loading, pathname]);

  // 🕓 Loading
  if (loading) return <div className="text-center p-10">Checking auth...</div>;

  // 🛑 Prevent render while redirecting
  if (!user && !isAuthPage) return null;

  // ✅ Dashboard Layout
  if (!isAuthPage) {
    return (
      <div className="flex h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </div>
    );
  }

  // ✅ Guest layout
  return children;
}
