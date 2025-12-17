import React from "react";
import TypingText from "./TypingText";
import AnimatedSanta from "./AnimatedSanta";

const Letter = ({ handleStart }) => {
  return (
    <div className="hello-wrapper">
      <AnimatedSanta />
      <TypingText text={text} />
      <div className="action" onClick={() => handleStart()}>
        C'est parti !
      </div>
    </div>
  );
};

export default Letter;

const text = `Mes très chers luümtins,

Je prends ma pluüm car j’ai besoin de vous à luümtelier !

Il reste quelques finitions à réaliser sur les cadeaux et je compte sur vous pour me faire des retours avant qu’ils ne soient distribués.

Vous avez été subluüms cette année ! Encore un petit effort et vous pourrez bientôt profitez de quelques congés mérités.

HoHoHo !`;
