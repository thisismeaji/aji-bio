import React from 'react';
import Styles from "../profile/profile.module.css";
import Image from 'next/image';

export default function Profile() {
  return (
    <div className={Styles.profile}>
        <div className={Styles.image}>
          <Image
            src="/assets/images/profile.png"
            width={1080}
            height={1080}
            alt="Profile"
          />
        </div>
        <div className={Styles.text}>
          <h1>Ajisaka Kamandanu</h1>
          <h2>Bio Link Creator / Frontend Developer</h2>
          <p>
            For me, coding is more than just writing lines of code. It's about
            solving problems, creating smooth experiences, and bringing ideas to
            life
          </p>
        </div>
    </div>
  );
}
