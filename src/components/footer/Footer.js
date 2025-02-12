import React from 'react';
import Styles from "../footer/footer.module.css";
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <p>© 2025 Ajisaka Kamandanu. All Rights Reserved.</p>
    </footer>
  )
}
