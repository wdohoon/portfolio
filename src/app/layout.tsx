import './globals.css'
import { ReactNode } from 'react'
import DarkModeToggle from '@/components/DarkModeToggle'

export const metadata = {
  title: 'My Portfolio',
  description: 'A showcase of my work and skills',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
    <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
    <header className="fixed w-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold">MyLogo</a>
        <nav className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <DarkModeToggle />
        </nav>
      </div>
    </header>
    <main className="pt-[80px]">
      {children}
    </main>
    <footer className="text-center py-4 border-t border-gray-300 dark:border-gray-700 mt-8">
      © {new Date().getFullYear()} My Portfolio
    </footer>
    </body>
    </html>
  )
}
