import { motion } from "framer-motion";
import VideoModal from "./VideoModal";
import { useState, useEffect } from "react";
import whooshSound from "../assets/sounds/wooshOuverture.mp3";

export default function AdventCard({ card, day }) {
  const [openCard, setOpenCard] = useState(null); // currently open card

  const handleOpen = () => {
    setOpenCard(true);
  };

  useEffect(() => {
    if (openCard) {
      const audio = new Audio(whooshSound);
      audio.play().catch((err) => console.log(err));
    }
  }, [openCard]); // ✅ run only when `open` changes to true

  return (
    <>
      {!openCard && (
        <div className="card-wrapper" onClick={() => handleOpen()}>
          <div className="doors">
            <motion.div
              className="door left"
              whileHover={{ rotateY: -10 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="door right"
              whileHover={{ rotateY: 10 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="day-label">{day}</div>
        </div>
      )}

      {openCard && (
        <VideoModal video={card} onClose={() => setOpenCard(null)} />
      )}
    </>
  );
}
