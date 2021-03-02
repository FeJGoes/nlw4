import Head from "next/head"

import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallangeBox } from "../components/ChallangeBox";

import styles from '../styles/pages/Home.module.css';
import { CountdowContextProvider } from "../contexts/CountdownContext";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ínicio | Move.it</title>
      </Head>
      
      <ExperienceBar/>

      <CountdowContextProvider>
        <section>
          <div>
            <Profile/>
            <CompletedChallenges/>
            <Countdown/>
          </div>
          <div>
            <ChallangeBox/>
          </div>
        </section>
      </CountdowContextProvider>
    </div>
  );
}
