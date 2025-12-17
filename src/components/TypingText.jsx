import { motion } from "framer-motion";

export default function TypingText({ text }) {
  const letters = Array.from(text);

  // Parent variants to control children animation
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } },
  };

  const child = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="message">
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
