'use client';

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

  // 다크모드 변화 감지
  useEffect(() => {
    const updateDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // 초기 설정
    updateDarkMode();

    // html 클래스 변화 감지
    const observer = new MutationObserver(() => {
      updateDarkMode();
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  // 모드와 hover 상태에 따른 색상 결정
  const hoveredColor = isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)';
  const nonHoveredColor = isDarkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)';

  const backgroundColor = isHovered ? hoveredColor : nonHoveredColor;
  const size = isHovered ? 36 : 20;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        background: backgroundColor,
        boxShadow: isHovered && isDarkMode
          ? '0 0 10px rgba(255,255,255,0.5)'
          : isHovered
            ? '0 0 10px rgba(0,0,0,0.5)'
            : 'none',
        transition: 'background 0.2s, width 0.2s, height 0.2s, box-shadow 0.2s',
        zIndex: '9999'
      }}
    />
  );
}
