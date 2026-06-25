"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorFollower = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const dotX = useSpring(cursorX, { stiffness: 800, damping: 30 });
  const dotY = useSpring(cursorY, { stiffness: 800, damping: 30 });

  const ringX = useSpring(cursorX, { stiffness: 200, damping: 22 });
  const ringY = useSpring(cursorY, { stiffness: 200, damping: 22 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setIsMounted(true);

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const el = e.target as Element;
      if (el.closest('a, button, [role="button"], input, textarea, label, select')) {
        setIsHovering(true);
      }
    };

    const out = () => setIsHovering(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, [cursorX, cursorY]);

  if (!isMounted) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x: dotX, y: dotY }}
      >
        <motion.div
          className="rounded-full bg-white mix-blend-difference"
          animate={{ width: isHovering ? 20 : 8, height: isHovering ? 20 : 8, marginLeft: isHovering ? -10 : -4, marginTop: isHovering ? -10 : -4 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="rounded-full border border-purple-500/60"
          animate={{
            width: isHovering ? 56 : 36,
            height: isHovering ? 56 : 36,
            marginLeft: isHovering ? -28 : -18,
            marginTop: isHovering ? -28 : -18,
            opacity: isHovering ? 0.9 : 0.5,
          }}
          transition={{ duration: 0.25 }}
        />
      </motion.div>

      {/* Glow orb that lingers */}
      <motion.div
        className="fixed top-0 left-0 z-[9997] pointer-events-none"
        style={{ x: ringX, y: ringY }}
      >
        <div
          className="rounded-full blur-xl"
          style={{
            width: 80, height: 80,
            marginLeft: -40, marginTop: -40,
            background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
          }}
        />
      </motion.div>
    </>
  );
};

export default CursorFollower;
