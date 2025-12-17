import React from "react";

const pipesSvgs = import.meta.glob("../assets/pipes/*.svg", {
  eager: true,
  as: "url",
});

function getPipesSvg(days) {
  const key = `../assets/pipes/${days}.svg`;
  const svg = pipesSvgs[key];

  if (!svg) {
    console.warn("SVG introuvable :", key);
    return null;
  }

  return svg;
}

const Pipe = ({ days }) => {
  const today = new Date();
  const currentDay = today.getMonth() === 11 ? today.getDate() : 0;
  const isUnlocked = days.day <= currentDay;

  return (
    <div className={`pipe ${!isUnlocked ? "locked" : ""}`}>
      {" "}
      {getPipesSvg(days.title) && <img src={getPipesSvg(days.title)} alt="" />}
    </div>
  );
};

export default Pipe;
