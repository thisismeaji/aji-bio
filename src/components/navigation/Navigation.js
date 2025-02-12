"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "../navigation/navigation.module.css";

export default function Navigation() {
  return (
    <nav className={Styles.nav}>
      <div className={Styles.logo}>
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt="Logo Ajisaka Kamandanu"
            width={1000}
            height={1000}
          />
        </Link>
      </div>
      <div className={Styles.menu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
