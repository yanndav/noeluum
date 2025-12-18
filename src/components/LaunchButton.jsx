import { motion } from "framer-motion";
import ButtonSVG from "../assets/welcome/button.svg?react";
import { useEffect } from "react";

const LaunchButton = ({ handleStart }) => {
  useEffect(() => {
    const button = document.getElementById("BOUTTON");
    button?.addEventListener("click", handleStart);
  }, []);

  return (
    <ButtonSVG className="button-svg">
      <motion.g
        id="BOUTTON"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleStart()}
        style={{ cursor: "pointer", transformOrigin: "50% 50%" }}
      />
    </ButtonSVG>
  );
};

export default LaunchButton;
