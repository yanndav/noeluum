import { useState } from "react";
import AdventCard from "./AdventCard";
import VideoModal from "./VideoModal";
import { videos } from "../data/videos";
import Pipe from "./Pipe";
export default function AdventGrid() {
  return (
    <div className="grid">
      {videos.map((card) =>
        card.type === "video" ? (
          <AdventCard key={card.id} card={card} day={card.day} />
        ) : (
          <Pipe key={card.id} days={card} />
        )
      )}
    </div>
  );
}
