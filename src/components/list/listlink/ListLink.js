import React from 'react';
import Link from 'next/link';
import Links from '@/data/link/Links';
import Styles from "../listlink/listlink.module.css";

export default function ListLink() {
  return (
    <div className={Styles.list}>
        {Links.map((link, index) => (
        <Link key={index} href={link.href} className={Styles.button}>
          <div>
            <p>{link.text}</p>
          </div>
        </Link>
        ))}
    </div>
  )
}
