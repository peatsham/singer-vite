import { useState } from "react";
import MusicBanner from "./components/MusicBanner";
import driftImg from "./assets/drift.jpg";
import flyAgaricImg from "./assets/flyAgaric.jpg";
import webImg from "./assets/web.jpg";

export default function App() {
  const tracks = [
    {
      title: "slowcoach",
      src: "/audio/slowcoach.m4a",
      image: driftImg,
    },
    {
      title: "crisp",
      src: "/audio/crisp.m4a",
      image: flyAgaricImg,
    },
    {
      title: "oink",
      src: "/audio/oink.m4a",
      image: webImg,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      {tracks.map((track, index) => (
        <MusicBanner
          key={index}
          title={track.title}
          audioSrc={track.src}
          image={track.image}
          isActive={activeIndex === index}
          onPlay={(value) => setActiveIndex(value === null ? null : index)}
        />
      ))}
    </div>
  );
}
