// components/DarkModeToggle.tsx
"use client";
import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [theme, setTheme] = useState<'light'|'dark'>('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="px-2 py-1 rounded border border-gray-600 dark:border-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
}
