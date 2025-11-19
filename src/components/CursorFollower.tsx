import { useEffect, useState } from "react";

interface Orb {
  id: number;
  x: number;
  y: number;
  delay: number;
  size: number;
}

export const CursorFollower = () => {
  const [orbs, setOrbs] = useState<Orb[]>([
    { id: 1, x: 0, y: 0, delay: 0.1, size: 300 },
    { id: 2, x: 0, y: 0, delay: 0.1, size: 250 },
    { id: 3, x: 0, y: 0, delay: 0.1, size: 200 },
  ]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setOrbs((prevOrbs) =>
        prevOrbs.map((orb) => ({
          ...orb,
          x: e.clientX,
          y: e.clientY,
        }))
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {orbs.map((orb, index) => (
        <div
          key={orb.id}
          className="absolute rounded-full mix-blend-screen"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            left: orb.x - orb.size / 2,
            top: orb.y - orb.size / 2,
            background:
              index === 0
                ? "radial-gradient(circle, hsl(220 100% 65% / 0.2), transparent 70%)"
                : index === 1
                ? "radial-gradient(circle, hsl(240 100% 70% / 0.15), transparent 70%)"
                : "radial-gradient(circle, hsl(320 90% 65% / 0.12), transparent 70%)",
            filter: "blur(40px)",
            transition: `all ${0.3 + orb.delay}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
            transform: "translate3d(0, 0, 0)",
          }}
        />
      ))}
    </div>
  );
};
