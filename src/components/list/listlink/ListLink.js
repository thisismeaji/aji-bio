import React from "react";
import Image from "next/image";
import Styles from "../listlink/listlink.module.css";
import Links from "@/data/link/Links";

export default function ListLink() {
  // Nomor WhatsApp tujuan
  const whatsappNumber = "6281932632650"; // Ganti dengan nomor yang diinginkan

  // Fungsi untuk menangani klik
  const handleClick = (text) => {
    const message = encodeURIComponent(`Misi kak, saya mau pesan ${text}`);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className={Styles.list}>
      {Links.map((link, index) => (
        <button key={index} className={Styles.button} onClick={() => handleClick(link.text)}>
          <Image src={link.image} alt={link.text} width={50} height={50} className={Styles.linkImage} />
          <p>{link.text}</p>
        </button>
      ))}
    </div>
  );
}
