import { navList } from '../../info/navList';
import { socials } from '../../info/socials';
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer data-aos="flip-left" className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__general}>
          <div className={styles.footer__general_logo}>
            <a href='#/'><img src="img/logo.svg" alt="" /></a>
          </div>
          <div className={styles.footer__general_socials}>
            {socials.map(social => {
              return (
                <a
                  key={social.name} 
                  href={social.link} 
                  target='_blank' 
                  rel="noreferrer"
                >
                  <img 
                    className={styles.footer__general_socials_social}
                    src={social.path} 
                    alt={social.name} />
                </a>
              );
            })}
          </div>
          <div className={styles.footer__general_navigation}>
            <ul className={styles.footer__general_navigation_list}>
              {navList.map(item => {
                return (
                  <a key={item.name} href={`#${item.link}`}>
                    <li className={styles.footer__general_navigation_list_item}>
                      {item.name}
                    </li>
                  </a>
                );
              })}
            </ul>
          </div>
          <p className={styles.footer__general_copyright}>copyright ©2024 designed and developed by Prokopovych</p>
        </div>
      </div>
    </footer>
  );
}