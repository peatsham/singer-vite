import { useRef, useEffect } from "react";

export default function MusicBanner({
  title,
  audioSrc,
  isActive,
  onPlay,
}) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isActive) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [isActive]);

  return (
    <div>
      <p>{title}</p>

     <button onClick={() => {
  if (isActive) {
    onPlay(null); // stop
  } else {
    onPlay(); // play this one
  }
}}>
  {isActive ? "Pause" : "Play"}
</button>

      <audio ref={audioRef} src={audioSrc} />
    </div>
  );
}