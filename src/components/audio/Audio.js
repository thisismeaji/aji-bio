"use client";

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
        // Hapus event listener setelah audio mulai diputar
        document.removeEventListener("click", enableAudio);
        document.removeEventListener("scroll", enableAudio);
        document.removeEventListener("keydown", enableAudio);
      };

      // Menjalankan audio ketika user melakukan interaksi
      document.addEventListener("click", enableAudio);
      document.addEventListener("keydown", enableAudio);
      window.addEventListener("scroll", enableAudio); // Pastikan pakai window, bukan document

      return () => {
        document.removeEventListener("click", enableAudio);
        document.removeEventListener("keydown", enableAudio);
        window.removeEventListener("scroll", enableAudio);
      };
    }
  }, [isBlocked]);

  return (
    <div>
      <audio ref={audioRef} src="/assets/sounds/music.mp3" loop />
    </div>
  );
}
