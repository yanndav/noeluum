import { useEffect, useState } from "react";

export default function Snowflake() {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const size = Math.random() * 8 + 4;
    const left = Math.random() * 100; // % from left
    const duration = Math.random() * 5 + 5; // 5-10s
    const delay = Math.random() * 5; // stagger start
    setStyle({
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
    });
  }, []);

  return <div className="snowflake" style={style}></div>;
}
