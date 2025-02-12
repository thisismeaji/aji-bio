"use client"

import { useEffect, useRef, useState } from "react";

export default function Audio() {
  const audioRef = useRef(null);
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current.play();
        setIsBlocked(false); // Jika berhasil autoplay, tidak perlu fallback
      } catch (error) {
        console.log("Autoplay diblokir, butuh interaksi pengguna:", error);
        setIsBlocked(true); // Tandai kalau autoplay gagal
      }
    };

    playAudio();
  }, []);

  // Event listener untuk memutar audio jika autoplay diblokir
  useEffect(() => {
    if (isBlocked) {
      const enableAudio = () => {
        if (audioRef.current) {
          audioRef.current.play();
        }
        document.removeEventListener("click", enableAudio);
      };

      document.addEventListener("click", enableAudio);

      return () => {
        document.removeEventListener("click", enableAudio);
      };
    }
  }, [isBlocked]);

  return (
    <div>
      <audio ref={audioRef} src="/assets/sounds/music.mp3" loop />
    </div>
  );
}
