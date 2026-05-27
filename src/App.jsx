import { useState } from "react";
import MusicBanner from "./components/MusicBanner";

export default function App() {
  const tracks = [
    { title: "slowcoach", src: "/audio/slowcoach.m4a" },
    { title: "crisp", src: "/audio/crisp.m4a" },
    { title: "oink", src: "/audio/oink.m4a" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      {tracks.map((track, index) => (
        <MusicBanner
          key={index}
          title={track.title}
          audioSrc={track.src}
          isActive={activeIndex === index}
          onPlay={(value) => setActiveIndex(value === null ? null : index)}
        />
      ))}
    </div>
  );
}