import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function VideoModal({ video, onClose }) {
  const [openDoor, setOpenDoor] = useState(false);
  setTimeout(() => setOpenDoor(true), 1000);

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
            className="day-label"
            animate={{ opacity: openDoor ? 0 : 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            Joyeux noël!
          </motion.div>
          <motion.div
            onClick={() => setOpenDoor(true)}
            className="door left"
            whileHover={{ rotateY: -30 }}
            animate={{ rotateY: openDoor ? -90 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          <motion.div
            onClick={() => setOpenDoor(true)}
            className="door right"
            whileHover={{ rotateY: 30 }}
            animate={{ rotateY: openDoor ? 90 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          <motion.div
            className="day-label-relative"
            animate={{ opacity: openDoor ? 1 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {video.day}
          </motion.div>
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
