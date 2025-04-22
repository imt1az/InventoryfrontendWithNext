'use client';

import { useAuth } from '@/context/AuthContext';
import Sidebar from './dashboard/sidebar';
import Header from './dashboard/header';
import LoginPage from '@/components/LoginPage';

export default function LayoutWrapper({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div className="text-center p-10">Loading...</div>;

  return !user ? (
   <LoginPage/>
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
