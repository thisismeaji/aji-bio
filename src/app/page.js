import Image from "next/image";
import Styles from "./page.module.css";
import Background from "@/components/background/Background";
import Link from "next/link";
import Profile from "@/components/profile/Profile";
import ListLink from "@/components/list/listlink/ListLink";
import Audio from "@/components/audio/Audio";
import SocialMedia from "@/components/socialmedia/SocialMedia";

export default function Home() {
  return (
    <section className={Styles.section}>
      <Background />
      <Audio/>
      <div className={Styles.card}>
        <Profile/>
        <ListLink/>
        <SocialMedia/>
      </div>
    </section>
  );
}
