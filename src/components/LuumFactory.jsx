import LuumtelierSVG from "../assets/santa/luumtelier.svg?react";

import { useEffect, useRef } from "react";
import { animate } from "framer-motion";

export default function LuumFactory() {
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
    <div className="luumfactory">
      <LuumtelierSVG
        ref={(el) => {
          if (el) headRef.current = el.getElementById("Tete");
        }}
      />
    </div>
  );
}
