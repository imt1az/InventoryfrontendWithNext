'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import api from '@/lib/axios';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      const res = await api.get('/api/me');
      setUser(res.data);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const login = async (identifier, password) => {
    await api.get('/sanctum/csrf-cookie'); // CSRF cookie set করতে হবে
    await api.post('/api/login', { identifier, password }); // Login request
   
    await fetchUser(); // User fetch করে context update
  };

  const logout = async () => {
    try {
      await api.post('/api/logout'); // Proper API endpoint
      setUser(null);
      router.push('/login');
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
