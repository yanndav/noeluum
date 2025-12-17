import SantaSVG from "../assets/santa/santa.svg?react";

import { useEffect, useRef } from "react";
import { animate } from "framer-motion";

export default function AnimatedSanta() {
  const headRef = useRef(null);

  useEffect(() => {
    if (headRef.current) {
      animate(
        headRef.current,
        { rotate: [-5, 5, -5] },
        { repeat: Infinity, duration: 2, ease: "easeInOut" }
      );
    }
  }, []);

  return (
    <div
      className="santa"
      animate={{ x: [-5, 5, -5], rotate: [-3, 3, -3] }}
      //   transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    >
      <SantaSVG
        ref={(el) => {
          if (el) headRef.current = el.getElementById("Tete");
        }}
      />
    </div>
  );
}
