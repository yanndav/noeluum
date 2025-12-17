import { motion } from "framer-motion";
import VideoModal from "./VideoModal";
import { useState, useEffect } from "react";
import whooshSound from "../assets/sounds/wooshOuverture.mp3";
function getDoorSvg(day, side) {
  // const key = `../assets/doors/${day}${side}.svg`;
  // const svg = doorSvgs[key];

  // if (!svg) {
  //   console.warn("SVG introuvable :", key);
  //   return null;
  // }

  // return svg;
  return `${import.meta.env.BASE_URL}assets/doors/${day}${side}.svg`;
}
const doorSvgs = import.meta.glob("../assets/doors/*.svg", {
  eager: true,
  as: "url",
});

export default function AdventCard({ card, day }) {
  const [openCard, setOpenCard] = useState(null); // currently open card

  const today = new Date();
  const currentDay = today.getMonth() === 11 ? today.getDate() : 0;
  const isUnlocked = day <= currentDay;

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
        <div
          className={`card-wrapper ${!isUnlocked ? "locked" : ""}`}
          onClick={() => isUnlocked && handleOpen()}
        >
          <div className="doors">
            <motion.div
              className="door left"
              whileHover={isUnlocked ? { rotateY: -10 } : undefined}
              transition={{ duration: 0.3 }}
            >
              {getDoorSvg(card.title, "g") && (
                <img src={getDoorSvg(card.title, "g")} alt="" />
              )}{" "}
            </motion.div>
            <motion.div
              className="door right"
              whileHover={isUnlocked ? { rotateY: -10 } : undefined}
              transition={{ duration: 0.3 }}
            >
              {" "}
              {getDoorSvg(card.title, "g") && (
                <img src={getDoorSvg(card.title, "d")} alt="" />
              )}{" "}
            </motion.div>
          </div>
        </div>
      )}

      {openCard && (
        <VideoModal video={card} onClose={() => setOpenCard(null)} />
      )}
    </>
  );
}
