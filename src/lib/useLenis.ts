"use client";
import { useEffect } from 'react';

export default function useLenis() {
  useEffect(() => {
    let lenis: any;
    let id: number;
    (async () => {
      try {
        const mod = await import('@studio-freight/lenis');
        const Lenis = (mod as any).default || (mod as any).Lenis;
        lenis = new Lenis({ lerp: 0.1, smooth: true });
        const raf = (time: number) => {
          lenis.raf(time);
          id = requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
      } catch (e) {
        console.warn('Lenis not loaded', e);
      }
    })();
    return () => {
      if (lenis) lenis.destroy();
      cancelAnimationFrame(id);
    };
  }, []);
}
