"use client";
import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    document.body.appendChild(cursor);

    const move = (e: MouseEvent) => {
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    const hover = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a, button, .project-card");
      if (target) cursor.classList.add("hover");
    };

    const leave = () => cursor.classList.remove("hover");

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", hover);
    document.addEventListener("mouseout", leave);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", hover);
      document.removeEventListener("mouseout", leave);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
}
