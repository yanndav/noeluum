import React from "react";
import TypingText from "./TypingText";
import AnimatedSanta from "./AnimatedSanta";
import LaunchButton from "./LaunchButton";
import lettreDebut from "../assets/sounds/intro.mp3";
import { useEffect, useRef } from "react";

const Letter = ({ handleStart, soundEnabled }) => {
  useLettreAudio(soundEnabled);
  return (
    <div className="hello-wrapper">
      <AnimatedSanta />
      <TypingText text={text} />
      <LaunchButton handleStart={handleStart} />
    </div>
  );
};

export default Letter;

const text = `Mes très chers luümtins,

Je prends ma pluüm car j’ai besoin de vous à luümtelier !

Il reste quelques finitions à réaliser sur les cadeaux et je compte sur vous pour me faire des retours avant qu’ils ne soient distribués.

Vous avez été subluüms cette année ! Encore un petit effort et vous pourrez bientôt profiter de quelques congés mérités.

Joyeux noëluüm !`;

function useLettreAudio(soundEnabled) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(lettreDebut);
    }

    const audio = audioRef.current;

    console.log("sound mode", soundEnabled);
    if (soundEnabled) {
      console.log("sound launch");
      audio.play().catch(() => {});
    } else {
      console.log("sound pause");

      audio.pause();
      audio.currentTime = 0;
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [soundEnabled]);
}
