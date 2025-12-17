import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SparkleTransition() {
  const [sparkles, setSparkles] = useState([]);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const total = 200; // BIG explosion
    const newSparkles = Array.from({ length: total }).map(() => ({
      angle: Math.random() * 2 * Math.PI,
      distance: Math.random() * 600 + 200, // how far they fly
      size: Math.random() * 10 + 5,
      delay: Math.random() * 0.3,
      color: ["#FFD700", "#FFFAF0", "#FF6347", "#ADFF2F", "#00FFFF"][
        Math.floor(Math.random() * 5)
      ],
      rotate: Math.random() * 360,
    }));
    setSparkles(newSparkles);

    const timer = setTimeout(() => {
      setActive(false);
    }, 1500); // lasts 1.5s

    return () => clearTimeout(timer);
  }, []);

  if (!active) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        zIndex: 9999,
        pointerEvents: "none",
        background:
          "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.7) 100%)", // magical glowing background
      }}
    >
      {sparkles.map((s, i) => {
        const x = Math.cos(s.angle) * s.distance;
        const y = Math.sin(s.angle) * s.distance;

        return (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
            animate={{ x, y, opacity: 0, scale: 1.5, rotate: s.rotate }}
            transition={{ duration: 1.5, delay: s.delay, ease: "easeOut" }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: s.size,
              height: s.size,
              borderRadius: "50%",
              backgroundColor: s.color,
              boxShadow: `0 0 ${s.size * 2}px ${s.color}`, // glow effect
            }}
          />
        );
      })}
    </div>
  );
}
