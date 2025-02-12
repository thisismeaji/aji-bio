"use client";

import { useEffect, useRef, useState } from "react";

export default function Audio() {
  const audioRef = useRef(null);
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    const playAudio = async () => {
      if (!audioRef.current) return;
      try {
        await audioRef.current.play();
        setIsBlocked(false);
      } catch (error) {
        setIsBlocked(true);
      }
    };

    playAudio();
  }, []);

  useEffect(() => {
    if (isBlocked) {
      const enableAudio = () => {
        if (audioRef.current) {
          audioRef.current.play().then(() => {
            setIsBlocked(false);
            removeListeners();
          }).catch(() => {});
        }
      };

      const removeListeners = () => {
        document.removeEventListener("click", enableAudio);
        document.removeEventListener("keydown", enableAudio);
        window.removeEventListener("scroll", enableAudio);
        window.removeEventListener("wheel", enableAudio);
        window.removeEventListener("mousemove", enableAudio);
        document.removeEventListener("touchstart", enableAudio);
        document.removeEventListener("touchmove", enableAudio);
        document.removeEventListener("pointermove", enableAudio);
        document.removeEventListener("mousedown", enableAudio);
      };

      // Tambahkan event listener
      document.addEventListener("click", enableAudio);
      document.addEventListener("keydown", enableAudio);
      window.addEventListener("scroll", enableAudio);
      window.addEventListener("wheel", enableAudio);
      window.addEventListener("mousemove", enableAudio);
      document.addEventListener("touchstart", enableAudio);
      document.addEventListener("touchmove", enableAudio);
      document.addEventListener("pointermove", enableAudio);
      document.addEventListener("mousedown", enableAudio);

      setTimeout(() => {
        enableAudio();
      }, 1);

      return () => removeListeners();
    }
  }, [isBlocked]);

  return (
    <div>
      <audio ref={audioRef} src="/assets/sounds/music.mp3" autoPlay loop preload="none" />
    </div>
  );
}
