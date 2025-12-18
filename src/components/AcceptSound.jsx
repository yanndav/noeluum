import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function AcceptSound({ onChoice, setWelcome }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("sound-enabled");
    if (stored === null) {
      setVisible(true);
    } else {
      onChoice(stored === "true");
    }
  }, [onChoice]);

  const choose = (value) => {
    localStorage.setItem("sound-enabled", value);
    onChoice(value);
    setVisible(false);
    setWelcome(true);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.section
          className="sound-intro"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: -80,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
        >
          <h1>Bienvenue</h1>
          <p>
            Il va y avoir du son (un peu).
            <br />
            Souhaites-tu le désactiver ?
          </p>

          <div className="sound-actions">
            <button onClick={() => choose(true)}>Activer</button>
            <button onClick={() => choose(false)}>Sans son</button>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
