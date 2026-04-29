import { useEffect, useState } from "react";

// Subtle cursor-following spotlight that sits behind content.
export default function SpotlightCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => setIsEnabled(!mediaQuery.matches);

    syncMotionPreference();
    mediaQuery.addEventListener?.("change", syncMotionPreference);

    return () => mediaQuery.removeEventListener?.("change", syncMotionPreference);
  }, []);

  useEffect(() => {
    if (!isEnabled) return undefined;

    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      window.setTimeout(() => setIsClicking(false), 150);
    };

    setPosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  const size = 260;
  const radius = size / 2;
  const { x, y } = position;

  const transform = `translate3d(${x - radius}px, ${y - radius}px, 0)`;
  const baseGradient =
    "radial-gradient(circle, rgba(56,189,248,0.26) 0%, rgba(45,212,191,0.12) 42%, transparent 72%)";
  const activeGradient =
    "radial-gradient(circle, rgba(167,139,250,0.28) 0%, rgba(56,189,248,0.14) 40%, transparent 72%)";

  return (
    <div className="pointer-events-none fixed inset-0 z-0 mix-blend-screen">
      <div
        className="absolute h-[260px] w-[260px] rounded-full opacity-70 blur-2xl will-change-transform"
        style={{
          transform,
          backgroundImage: isClicking ? activeGradient : baseGradient,
        }}
      />
    </div>
  );
}
