import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/Header'
import DarkModeToggle from "@/components/DarkModeToggle";
import SmoothScrolling from '@/components/SmoothScrolling';
import LenisScroller from '@/components/LenisScroller';
import CustomCursor from '@/components/CustomCursor';


export const metadata = {
  title: 'My Portfolio',
  description: 'A showcase of my work and skills',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const themeScript = `
    (function() {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    })();
  `;

  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pretendard&family=Space+Grotesk:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 relative overflow-x-hidden">
        <LenisScroller />
        <CustomCursor />
        <SmoothScrolling />
        <Header/>
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <DarkModeToggle />
        <footer className="bg-white dark:bg-gray-800 shadow-inner">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
