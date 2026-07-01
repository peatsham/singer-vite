import styles from "./MusicBanner.module.css";
import { useRef, useEffect, useState } from "react";

export default function MusicBanner({
  title,
  audioSrc,
  image,
  isActive,
  onPlay,
}) {
  const audioRef = useRef(null);
  const [loop, setLoop] = useState(false);

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
      <p className={styles.title}>{title}</p>
<div className={styles.buttonGroup}>
     <button onClick={() => {
  if (isActive) {
    onPlay(null); // stop
  } else {
    onPlay(); // play this one
  }
}}>
  {isActive ? "Pause" : "Play"}
</button>
<button onClick={() => setLoop(!loop)}>
  {loop ? "Loop On" : "Loop Off"}
</button>
</div>

      <audio
  ref={audioRef}
  src={audioSrc}
  loop={loop}
/>
    </div>
  );
}
