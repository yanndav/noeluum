import AdventGrid from "./components/AdventGrid";
import "./App.css";
import Snowfall from "./components/Snowfall";
import SnowBottom from "./components/SnowBottom";
import Letter from "./components/Letter";
import { useEffect, useState } from "react";
import SparkleTransition from "./components/SparkleTransition";
import cestParti from "./assets/sounds/cestParti.mp3";
import LuumFactory from "./components/LuumFactory";
import AcceptSound from "./components/AcceptSound";
import SoundToggleButton from "./components/SoundToggleButton";
import RevenirDebut from "./components/RevenirDebut";
export default function App() {
  const [welcome, setWelcome] = useState(false);
  const [start, setStart] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(null);

  const handleStart = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setStart(true);
    setWelcome(false);
  };
  useEffect(() => {
    if (start && soundEnabled) {
      const audio = new Audio(cestParti);
      audio.play().catch((err) => console.log(err));
    }
  }, [start]); // ✅ run only when `open` changes to true

  useEffect(() => {
    const stored = localStorage.getItem("sound-enabled");
    if (stored) {
      setWelcome(true);
      setSoundEnabled(stored === "true");
    }
  }, []);

  useEffect(() => {
    if (soundEnabled !== null) {
      console.log(soundEnabled, "sound");
      localStorage.setItem("sound-enabled", soundEnabled);
    }
  }, [soundEnabled]);

  const onRestart = () => {
    setWelcome(true);
    setStart(false);
  };
  return (
    <main>
      <SoundToggleButton
        setSoundEnabled={setSoundEnabled}
        soundEnabled={soundEnabled}
      />
      {!welcome && (
        <AcceptSound onChoice={setSoundEnabled} setWelcome={setWelcome} />
      )}
      {welcome && !start && (
        <Letter handleStart={handleStart} soundEnabled={soundEnabled} />
      )}
      {start && (
        <>
          <SparkleTransition soundEnabled={soundEnabled} />
          <SnowBottom />
          <RevenirDebut onRestart={onRestart} />
          <div className="title-wrapper">
            <h1 className="title">Le Caluümdrier de l'Avent</h1>
          </div>

          <LuumFactory />

          <AdventGrid soundEnabled={soundEnabled} />
          <Snowfall count={50} />
        </>
      )}
    </main>
  );
}
