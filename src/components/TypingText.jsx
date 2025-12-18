import { motion } from "framer-motion";
import LUMMAIL from "../assets/welcome/LUUMAIL.svg?react";

export default function TypingText({ text }) {
  const letters = Array.from(text);

  // Parent variants to control children animation
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.02 } },
  };

  const child = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="message">
      <div className="top-mail">
        <LUMMAIL className="logo-top" />
      </div>
      <div className="mail-heads ">À : Luümtins</div>
      <div className="mail-heads ">Objet : Finitions sur les cadeaux</div>
      <motion.p
        style={{ display: "inline-block", whiteSpace: "pre-wrap" }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, i) => {
          if (letter === "\n") return <br key={i} />;
          return (
            <motion.span key={i} variants={child}>
              {letter}
            </motion.span>
          );
        })}
      </motion.p>
    </div>
  );
}
