import Image from "next/image";
import Styles from "./page.module.css";
import Background from "@/components/background/Background";
import Link from "next/link";
import Profile from "@/components/profile/Profile";
import ListLink from "@/components/list/listlink/ListLink";

export default function Home() {
  return (
    <section className={Styles.section}>
      <Background />
      <div className={Styles.card}>
        <Profile/>
        <ListLink/>
        <div className={Styles.socialMedia}>
          
        </div>
      </div>
    </section>
  );
}
