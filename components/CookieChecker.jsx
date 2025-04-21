'use client';

import { useEffect, useState } from 'react';

export default function CookieChecker() {
  const [cookies, setCookies] = useState('');

  useEffect(() => {
    const rawCookies = document.cookie;
    setCookies(rawCookies);
  }, []);

  return (
    <div className="bg-white p-4 shadow rounded mt-4 max-w-xl mx-auto">
      <h2 className="text-lg font-semibold mb-2 text-purple-700">Browser Cookies</h2>
      <pre className="bg-gray-100 p-2 rounded text-sm text-gray-800 overflow-x-auto">
        {cookies || 'No cookies found'}
      </pre>
    </div>
  );
}
