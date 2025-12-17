import AdventGrid from "./components/AdventGrid";
import "./App.css";
import Snowfall from "./components/Snowfall";
import SnowBottom from "./components/SnowBottom";
import Letter from "./components/Letter";
import { useEffect, useState } from "react";
import SparkleTransition from "./components/SparkleTransition";
import cestParti from "./assets/sounds/cestParti.mp3";

export default function App() {
  const [start, setStart] = useState(false);

  const handleStart = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setStart(true);
  };
  useEffect(() => {
    if (start) {
      const audio = new Audio(cestParti);
      audio.play().catch((err) => console.log(err));
    }
  }, [start]); // ✅ run only when `open` changes to true

  return (
    <main>
      {!start && <Letter handleStart={handleStart} />}

      {start && (
        <>
          <SparkleTransition />
          <SnowBottom />
          <div class="title-wrapper">
            <h1 class="title">Le Caluümdrier de l'Avent</h1>
            <div class="star"></div>
            <div class="snowflake">&#10052;</div>
          </div>

          <AdventGrid />
          <Snowfall count={50} />
        </>
      )}
    </main>
  );
}
