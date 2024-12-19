import './globals.css'
import { ReactNode } from 'react'
import { Noto_Sans_KR } from 'next/font/google'
import Header from '@/components/Header'
import DarkModeToggle from "@/components/DarkModeToggle";

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata = {
  title: 'My Portfolio',
  description: 'A showcase of my work and skills',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className={`${notoSansKr.className} dark`}>
    <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 relative overflow-x-hidden">
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
