import { useEffect, useState } from 'react';
import styles from './Airdrop.module.scss';

export const Airdrop = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    // 00:00 15 December
    const targetDate = new Date('2024-12-15T00:00:00');

    const interval = setInterval(() => {
      const currentTime = new Date();
      const difference = targetDate.getTime() - currentTime.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTime('00:00:00');
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTime(
          `${days}D ${hours.toString().padStart(2, '0')}H ${minutes
            .toString()
            .padStart(2, '0')}M ${seconds.toString().padStart(2, '0')}S`
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.airdrop__container}>
      <div className={styles.airdrop__general}>
        <h1 className={styles.airdrop__general_title}>Claim Your <b>Share</b> of Innovation!</h1>

        <div className={styles.airdrop__general_airdrop}>
          <img className={styles.airdrop__general_airdrop_img} src="img/icons/token_favi.png" alt="token" />
          <div className={styles.airdrop__general_airdrop_timer}>
            <p className={styles.airdrop__general_airdrop_timer_text}>
              {time}
            </p>
          </div>
        </div>
        <div className={styles.airdrop__general_bottom}>
          <p className={styles.airdrop__general_bottom_text}>
            <b>Don't miss your chance</b> to be part of the future.
            This is your opportunity to join the revolution
            and secure exclusive access to our token. Act now
            before the timer runs out—time is of the essence in making history!
          </p>
          <div className={styles.airdrop__general_bottom_button}>
            <a href='#membership'>
              <p className={styles.airdrop__general_bottom_button_text}>
                Take part
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}