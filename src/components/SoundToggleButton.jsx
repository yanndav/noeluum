import { motion } from "framer-motion";

export default function SoundToggleButton({ setSoundEnabled, soundEnabled }) {
  return (
    <motion.div
      className="sound-toggle"
      onClick={() => setSoundEnabled((prev) => !prev)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title={soundEnabled ? "Couper le son" : "Activer le son"}
    >
      {soundEnabled ? "🔊" : "🔇"}
    </motion.div>
  );
}
