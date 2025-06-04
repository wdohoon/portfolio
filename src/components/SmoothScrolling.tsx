"use client";
import { useEffect } from 'react';

export default function SmoothScrolling() {
  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const progress = (doc.scrollTop / total) * 100;
      const bar = document.getElementById('scroll-progress');
      if (bar) bar.style.setProperty('width', progress + '%');
    };

    document.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div id="scroll-progress" className="fixed top-0 left-0 h-1 bg-accent z-[9999]" />;
}
