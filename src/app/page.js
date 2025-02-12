import Image from "next/image";
import Styles from "./page.module.css";
import Background from "@/components/background/Background";

export default function Home() {
  return (
    <section className={Styles.section}>
      <Background/>
      <div className={Styles.card}>
        <div className={Styles.profile}>
          <Image
            src="/assets/images/profile.png"
            width={1080}
            height={1080}
            alt="Profile"
          />
        </div>
        <div className={Styles.text}>
          <h1>Ajisaka Kamandanu</h1>
          <h2>Bio Link Creator</h2>
          <p>For me, coding is more than just writing lines of code. It's about solving problems, creating smooth experiences, and bringing ideas to life</p>
        </div>
        <div className={Styles.list}>
          <button>Ellen Bio</button>
          <button>Ellen Bio</button>
          <button>Ellen Bio</button>
          <button>Ellen Bio</button>
          <button>Ellen Bio</button>
          <button>Ellen Bio</button>
        </div>
        <div className={Styles.socialMedia}>

        </div>
      </div>
    </section>
  );
}
