import styles from './About.module.scss'

export const About = () => {
  return (
    <div className={styles.about__container}>
          <div className={styles.about__details}>
            <div className={styles.about__details_info}>
              <h2 className={styles.about__details_info_title}>Details that matter.</h2>
              <p className={styles.about__details_info_text}>We sweet the details, no matter how small</p>
              <div className={styles.about__details_info_block}>
                <h3 className={styles.about__details_info_block_title}>
                  We raise blockchain bar, one operation at a time
                </h3>
              </div>
              <h3 className={styles.about__details_info_bottomTitle}>Performance metrics define Product Design</h3>
            </div>
            <div className={styles.about__details_other}>
              <div className={styles.about__details_other_imageTop}></div>
              <h3 className={styles.about__details_other_title}>Monitor In Real-Time</h3>
              <p className={styles.about__details_other_text}>
                Track the status of all your transactions 
                in real-time, wit ive updates, detailed 
                information, notifications. and seamless 
                animations between states You'll he the firct
                to know when vour transactions an throttah.
              </p>
              <div className={styles.about__details_other_button}>
                <a href='#membership'><p>Participate</p></a>
              </div>
            </div>
          </div>
          <div className={styles.about__advantages}>
            <div className={styles.about__advantages_item}>
              <img className={styles.about__advantages_item_icon} src="img/icons/wallet.svg" alt="wallet-icon" />
              <div className={styles.about__advantages_item_text}>
                <div className={styles.about__advantages_item_text_title}>
                  <h2 className={styles.about__advantages_item_text_title_first}>23</h2>
                  <h2 className={styles.about__advantages_item_text_title_second}>k+</h2>
                </div>
                <p className={styles.about__advantages_item_text_mainText}>Wallets created</p>
              </div>
            </div>
            <div className={styles.about__advantages_splitter}></div>
            <div className={styles.about__advantages_item}>
              <img className={styles.about__advantages_item_icon} src="img/icons/Chord-Diagram.svg" alt="wallet-icon" />
              <div className={styles.about__advantages_item_text}>
                <div className={styles.about__advantages_item_text_title}>
                  <h2 className={styles.about__advantages_item_text_title_first}>500</h2>
                  <h2 className={styles.about__advantages_item_text_title_second}>k+</h2>
                </div>
                <p className={styles.about__advantages_item_text_mainText}>Tokens available</p>
              </div>
            </div>
            <div className={styles.about__advantages_splitter}></div>
            <div className={styles.about__advantages_item}>
              <img className={styles.about__advantages_item_icon} src="img/icons/Stacked-Area-Graph.svg" alt="wallet-icon" />
              <div className={styles.about__advantages_item_text}>
                <div className={styles.about__advantages_item_text_title}>
                  <h2 className={styles.about__advantages_item_text_title_first}>200</h2>
                  <h2 className={styles.about__advantages_item_text_title_second}>k+</h2>
                </div>
                <p className={styles.about__advantages_item_text_mainText}>Users subscribed to us</p>
              </div>
            </div>
          </div>
        </div>
  );
}