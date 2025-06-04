"use client";
import './globals.css'
import { ReactNode } from 'react'
import { Noto_Sans_KR } from 'next/font/google'
import Header from '@/components/Header'
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollProgress from '@/components/ScrollProgress'
import useLenis from '@/lib/useLenis'

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata = {
  title: 'Frontend Developer 원도훈',
  description: '원도훈의 포트폴리오',
  openGraph: {
    title: 'Frontend Developer 원도훈',
    description: '원도훈의 포트폴리오',
    url: 'https://example.com',
    siteName: '원도훈 포트폴리오',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frontend Developer 원도훈',
    description: '원도훈의 포트폴리오',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  useLenis()
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
    <html lang="ko" className={notoSansKr.className} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: '원도훈',
              url: 'https://example.com',
            }),
          }}
        />
      </head>
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 relative overflow-x-hidden">
        <ScrollProgress />
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
