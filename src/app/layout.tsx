import './globals.css'
import { ReactNode } from 'react'
import DarkModeToggle from '@/components/DarkModeToggle'
import { Noto_Sans_KR } from 'next/font/google'
import CustomCursor from "@/components/CustomCursor";

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
    <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
    <header className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md z-50 shadow-md">
      <CustomCursor />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            DH
          </a>
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <div className="flex items-center">
            <button className="ml-4 md:hidden">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <main className="pt-16 min-h-screen">
      {children}
    </main>

    <footer className="bg-white dark:bg-gray-800 shadow-inner">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>

    <DarkModeToggle />
    </body>
    </html>
  )
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
    >
      {children}
    </a>
  )
}
