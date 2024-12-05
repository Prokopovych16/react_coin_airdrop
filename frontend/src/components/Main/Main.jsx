import { About } from '../About/About';
import { Airdrop } from '../Airdrop/Airdrop';
import { Membership } from '../Membership/Membersip';
import { Statistics } from '../Statistics/Statistics';
import styles from './Main.module.scss'

export const Main = () => {
  return (
    <main className={styles.main}>

      <section id="about" className={styles.about}>
        <About />
      </section>

      <section id="airdrop" className={styles.airdrop}>
        <Airdrop />
      </section>

      <section id="statistics" className={styles.statistics}>
        <Statistics />
      </section>

      <section id="membership" className={styles.membership}>
        <Membership />
      </section>
    </main>
  );
}