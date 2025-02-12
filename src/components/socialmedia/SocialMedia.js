import React from 'react';
import Styles from "../socialmedia/socialmedia.module.css";
import Image from 'next/image';
import Link from 'next/link';

export default function SocialMedia() {
  return (
    <div className={Styles.socialMedia}>
          <Link href="https://www.instagram.com/thisisme_aji/">
            <Image
                src="/assets/icons/ig.png"
                width={1080}
                height={1080}
                alt='Instagram'
            />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=100090748616081">
            <Image
                src="/assets/icons/fb.png"
                width={1080}
                height={1080}
                alt='Facebook'
            />
          </Link>
          <Link href="https://x.com/thisismeaji">
            <Image
                src="/assets/icons/x.png"
                width={1080}
                height={1080}
                alt='X'
            />
          </Link>
          <Link href="https://www.threads.net/@thisisme_aji">
            <Image
                src="/assets/icons/ts.png"
                width={1080}
                height={1080}
                alt='Threads'
            />
          </Link>
    </div>
  );
}
