"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

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

  const cursorColor = isDarkMode
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
      }}
    >
      <motion.div
        style={{
          scale: isHovered ? 1.2 : 1,
          rotate: isHovered ? 45 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.circle
            cx="20"
            cy="20"
            r="8"
            stroke={cursorColor}
            strokeWidth="2"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.path
            d="M20 12L20 28M12 20L28 20"
            stroke={cursorColor}
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.path
            d="M14 14L26 26M14 26L26 14"
            stroke={cursorColor}
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

