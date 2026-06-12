import styles from "./MusicBanner.module.css";
import { useRef, useEffect } from "react";

export default function MusicBanner({
  title,
  audioSrc,
  image,
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
    <div className={styles.banner}>
      <img
  className={styles.image}
  src={image}
  alt={title}
/> 
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

      <audio ref={audioRef} src={audioSrc} loop/>
    </div>
  );
}