"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { MousePointer } from 'lucide-react';

export default function CustomCursor() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const isOnInteractive = target && (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('button'));
      setIsHovered(!!isOnInteractive);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  useEffect(() => {
    cursorX.set(mouseX);
    cursorY.set(mouseY);
  }, [mouseX, mouseY, cursorX, cursorY]);

  useEffect(() => {
    const updateDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    updateDarkMode();

    const observer = new MutationObserver(() => {
      updateDarkMode();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  const iconSize = isHovered ? 30 : 22;
  const iconColor = isDarkMode
    ? (isHovered ? '#ffffff' : '#aaaaaa')
    : (isHovered ? '#000000' : '#555555');

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
        transition: 'color 0.2s, transform 0.2s',
      }}
    >
      <motion.div
        style={{
          scale: isHovered ? 1.2 : 1,
          originX: 0.5,
          originY: 0.5,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <MousePointer width={iconSize} height={iconSize} color={iconColor} />
      </motion.div>
    </motion.div>
  );
}
