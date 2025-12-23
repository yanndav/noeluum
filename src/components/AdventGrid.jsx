import { useState, useEffect, useRef, use } from "react";
import AdventCard from "./AdventCard";
import VideoModal from "./VideoModal";
import { videos } from "../data/videos";
import Pipe from "./Pipe";
import factory from "../assets/sounds/factory.mp3";

export default function AdventGrid({ soundEnabled }) {
  const [soundFX, setSoundFX] = useState(true);
  useIntroAudio(soundEnabled, soundFX);
  return (
    <div className="grid-wrapper">
      <div className="grid">
        {videos.map((card) =>
          card.type === "video" ? (
            <AdventCard
              key={card.day}
              card={card}
              day={card.day}
              soundEnabled={soundEnabled}
              setSoundFX={setSoundFX}
            />
          ) : (
            <Pipe key={card.title} days={card} />
          )
        )}
      </div>
    </div>
  );
}

function useIntroAudio(soundEnabled, soundFX) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(factory);
    }

    const audio = audioRef.current;

    if (soundEnabled && soundFX) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
      audio.currentTime = 0;
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [soundEnabled, soundFX]);
}
