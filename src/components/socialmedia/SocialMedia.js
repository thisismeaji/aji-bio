import React from 'react';
import Styles from "../socialmedia/socialmedia.module.css";
import Image from 'next/image';
import Link from 'next/link';

export default function SocialMedia() {
  return (
    <div className={Styles.socialMedia}>
          <Link href="https://www.instagram.com/jeaj.je?igsh=MTgyMGF4NDZxeTM3aA==">
            <Image
                src="/assets/icons/instagram.png"
                width={1080}
                height={1080}
                alt='Instagram'
            />
          </Link>
          <Link href="https://x.com/40143_/status/1873231064560484420?t=kD6f98fqB_TRXVayNSTgOg&s=19">
            <Image
                src="/assets/icons/x.png"
                width={1080}
                height={1080}
                alt='X'
            />
          </Link>
          <Link href="https://www.tiktok.com/@40143_?_t=ZS-8tsAfmPc8Pw&_r=1">
            <Image
                src="/assets/icons/tiktok.png"
                width={1080}
                height={1080}
                alt='tiktok'
            />
          </Link>
          <Link href="https://whatsapp.com/channel/0029VazXO2cC6ZvbIHbh7d3k">
            <Image
                src="/assets/icons/whatsaap.png"
                width={1080}
                height={1080}
                alt='whatsaap'
            />
          </Link>
    </div>
  );
}
