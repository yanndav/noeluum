import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function VideoModal({ video, onClose, soundEnabled }) {
  const [openDoor, setOpenDoor] = useState(false);
  setTimeout(() => setOpenDoor(true), 1000);
  function getDoorSvg(day, side) {
    return `${import.meta.env.BASE_URL}assets/doors/${day}${side}.svg`;
  }

  useIntroAudio(soundEnabled, video.title);

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        onClick={() => onClose()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            onClick={() => setOpenDoor(true)}
            className="door left"
            whileHover={{ rotateY: -30 }}
            animate={{ rotateY: openDoor ? -90 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <img
              className="door-svg left"
              src={getDoorSvg(video.title, "g")}
              alt=""
            />
          </motion.div>
          <motion.div
            onClick={() => setOpenDoor(true)}
            className="door right"
            whileHover={{ rotateY: 30 }}
            animate={{ rotateY: openDoor ? 90 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <img
              className="door-svg right"
              src={getDoorSvg(video.title, "d")}
              alt=""
            />
          </motion.div>
          {/* <motion.div
            className="day-label-relative"
            animate={{ opacity: openDoor ? 1 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {video.day}
          </motion.div> */}
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="100%"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

const getSound = (day) => {
  console.log(`${import.meta.env.BASE_URL}assets/sounds/${day}.mp3`);
  return `${import.meta.env.BASE_URL}assets/sounds/${day}.mp3`;
};

function useIntroAudio(soundEnabled, day) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(getSound(day));
    } else if (audioRef.current.src !== getSound(day)) {
      audioRef.current.src = getSound(day);
    }

    const audio = audioRef.current;
    let timeout;

    if (soundEnabled) {
      timeout = setTimeout(() => {
        audio.play().catch((e) => console.log("audio error", e));
      }, 1000); // 2 second delay
    } else {
      audio.pause();
      audio.currentTime = 0;
    }

    return () => {
      clearTimeout(timeout);
      audio.pause();
      audio.currentTime = 0;
    };
  }, [soundEnabled, day]);
}
