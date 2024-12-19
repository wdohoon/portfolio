"use client";

import { useState } from 'react';
import CustomCursor from "@/components/CustomCursor";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md z-50 shadow-md">
      <CustomCursor />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
            DH
          </a>
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <div className="flex items-center md:hidden">
            <button className="ml-4" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg className="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="px-4 py-3 space-y-1">
            <NavLink href="#about" onClick={() => setMobileMenuOpen(false)}>About</NavLink>
            <NavLink href="#experience" onClick={() => setMobileMenuOpen(false)}>Experience</NavLink>
            <NavLink href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</NavLink>
            <NavLink href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</NavLink>
            <NavLink href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block px-2 py-1 md:inline-block text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
    >
      {children}
    </a>
  )
}
