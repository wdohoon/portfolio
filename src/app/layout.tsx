import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DarkModeToggle from '@/components/DarkModeToggle'
import SmoothScrolling from '@/components/SmoothScrolling'

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
  `

  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 relative overflow-x-hidden">
        <SmoothScrolling />
        <Header />
        <main className="pt-16 min-h-screen">{children}</main>
        <DarkModeToggle />
        <Footer />
      </body>
    </html>
  )
}
