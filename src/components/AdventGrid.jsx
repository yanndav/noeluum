import { useState } from "react";
import AdventCard from "./AdventCard";
import VideoModal from "./VideoModal";
import { videos } from "../data/videos";
export default function AdventGrid() {
  return (
    <div className="grid">
      {videos.map((card) => (
        <AdventCard key={card.id} card={card} day={card.day} />
      ))}
    </div>
  );
}
